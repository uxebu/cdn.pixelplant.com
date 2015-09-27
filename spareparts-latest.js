/**
 * spareparts is (C) 2012 uxebu Inc.
 * 
 * No permission or right to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software is granted.
 * All rights reserved to the copyright holders.
 */
(function(){var Group = bonsai.Group, tools = bonsai.tools;
var Button = function() {
  Group.call(this);
  this.childrenWrapper = (new Group).addTo(this);
  this.eventArea = (new Group).attr({opacity:0, cursor:"pointer"}).addTo(this);
  this.stateChildren = {normal:new Group, hover:new Group, active:new Group};
  this.setupConnections();
  this.childrenWrapper.addChild(this.stateChildren.normal)
};
Button.prototype = tools.mixin(Object.create(Group.prototype), {childrenWrapper:null, eventArea:null, stateChildren:null, isMouseDown:false, isMouseOver:false, type:"Group", addActiveStateChild:function(child, index) {
  this.addStateChild(child, "active", index)
}, addEventAreaChild:function(child, index) {
  this.eventArea.addChild(child, index)
}, addHoverStateChild:function(child, index) {
  this.addStateChild(child, "hover", index)
}, addNormalStateChild:function(child, index) {
  this.addStateChild(child, "normal", index)
}, addStateChild:function(child, state, index) {
  this.stateChildren[state].addChild(child, index)
}, displayState:function(state) {
  if(this.stateChildren[state].children().length) {
    this.childrenWrapper.clear().addChild(this.stateChildren[state])
  }
}, onMouseDown:function() {
  this.isMouseDown = true;
  this.displayState("active")
}, onMouseUp:function() {
  this.isMouseDown = false;
  var targetState = this.isMouseOver ? "hover" : "normal";
  this.displayState(targetState)
}, onMouseOver:function() {
  this.isMouseOver = true;
  var targetState = this.isMouseDown ? "active" : "hover";
  this.displayState(targetState)
}, onMouseOut:function() {
  this.isMouseOver = false;
  var targetState = this.isMouseDown ? "hover" : "normal";
  this.displayState(targetState)
}, setupConnections:function() {
  this.eventArea.on("mouseover", tools.hitch(this, "onMouseOver"));
  this.eventArea.on("mouseout", tools.hitch(this, "onMouseOut"));
  this.eventArea.on("pointerdown", tools.hitch(this, "onMouseDown"));
  this.eventArea.on("pointerup", tools.hitch(this, "onMouseUp"))
}});
exports.Button = Button;
var Group = bonsai.Group;
var tools = bonsai.tools;
function HoverToTouchButton() {
  Group.call(this);
  this.defaultGroup = new Group;
  this.hoverGroup = new Group;
  this.eventArea = (new Group).attr("opacity", 0);
  this.eventArea.on("pointerdown", tools.hitch(this, this._showHover));
  this._showNormalState();
  this._hitchedShowNormalState = tools.hitch(this, this._showNormalState)
}
HoverToTouchButton.prototype = tools.mixin(Object.create(Group.prototype), {addStateChild:function(child, state) {
  switch(state) {
    case "active":
      break;
    case "normal":
      this.defaultGroup.addChild(child);
      break;
    case "hover":
      this.hoverGroup.addChild(child);
      break
  }
}, addEventAreaChild:function(item) {
  this.eventArea.addChild(item)
}, _hitchedShowNormalState:null, _showHover:function() {
  this.clear();
  this.addChild(this.hoverGroup);
  bonsai.stage.on("pointerdown", this._hitchedShowNormalState)
}, _showNormalState:function() {
  this.clear();
  this.addChild(this.defaultGroup);
  this.addChild(this.eventArea);
  bonsai.stage.removeListener("pointerdown", this._hitchedShowNormalState)
}});
exports.HoverToTouchButton = HoverToTouchButton;
(function() {
  var tools = bonsai.tools;
  var isArray = tools.isArray;
  var forEach = tools.forEach;
  function Preloader(assetInstances, userCallback) {
    if(!isArray(assetInstances)) {
      assetInstances = []
    }
    if(!userCallback) {
      return
    }
    var assetInstancesLength = this._assetInstancesLength = assetInstances.length;
    if(assetInstancesLength === 0) {
      userCallback();
      return
    }
    this._completed = [];
    this._userCallback = userCallback;
    var preloaderInstance = this;
    var onComplete = function(assetInstance) {
      preloaderInstance.onComplete(assetInstance)
    };
    forEach(assetInstances, function(assetInstance) {
      assetInstance.on("load", onComplete);
      assetInstance.on("error", onComplete)
    })
  }
  var proto = Preloader.prototype = {};
  proto.onComplete = function(assetInstance) {
    var _completed = this._completed;
    _completed.push(assetInstance);
    if(_completed.length === this._assetInstancesLength) {
      this._userCallback(_completed)
    }
  };
  exports.Preloader = Preloader
})();
(function() {
  var defaults = {align:"left", blockIndent:0, bold:false, bullet:false, color:0, font:"Times New Roman", indent:0, italic:false, kerning:false, lineHeight:12, leftMargin:0, letterSpacing:0, rightMargin:0, size:12, tabStops:[], target:"", underline:false, url:""};
  function TextFormat() {
    for(var key in defaults) {
      this[key] = defaults[key]
    }
  }
  TextFormat.defaults = JSON.parse(JSON.stringify(defaults));
  exports.TextFormat = TextFormat
})();
(function() {
  var DOMElement = bonsai.DOMElement, TextFormat = exports.TextFormat, tools = bonsai.tools, accessor = tools.descriptorAccessor, data = tools.descriptorData;
  var defaultStyleSheet = "a{color:#000;text-decoration:none;}";
  var boxDefaults = {autoSize:"none", background:false, backgroundColor:16777215, border:false, borderColor:0, html:true, htmlText:"", maxChars:null, text:"", selectable:false, password:false, wordWrap:false, editable:false, width:100, height:100, styleSheet:""};
  var FLAG_SWF_HTML = 'bs-swf="true"';
  var FLAG_SWF_TEXT = "\ufeff\ufeff";
  var rgba = TextField.rgba = function(color) {
    if(typeof color === "undefined") {
      return"rgba(0,0,0,0)"
    }
    var rgbaColor;
    if(/^#/.test(color)) {
      rgbaColor = parseInt(color.slice(1), 16)
    }else {
      rgbaColor = color << 8 | 255
    }
    return bonsai.color(rgbaColor).rgba()
  };
  function prefixStyleSheetSelectors(styleSheet, prefix) {
    var strings = [], stringReplacer = "__string__" + +new Date;
    styleSheet = styleSheet.replace(/(['"])(?:\\\1|[^\1])*?\1/g, function($0) {
      strings.push($0);
      return stringReplacer
    });
    styleSheet = styleSheet.replace(/[^}]+\{/g, function(selector) {
      selector = selector.replace(/^\s+|\s+$/, "");
      return selector.replace(/^|(,)/g, "$1 " + prefix + " ").replace(/^\s|(\s)\s+/g, "$1")
    });
    styleSheet = styleSheet.replace(RegExp(stringReplacer, "g"), function() {
      return strings.shift()
    });
    return styleSheet
  }
  function _getStyleSheet() {
    return this._owner.raw.styleSheet
  }
  function _setStyleSheet(styleSheet) {
    var owner = this._owner;
    var cssSelectorPrefix = owner._cssSelectorPrefix;
    if(!styleSheet) {
      owner.raw.styleSheet = "";
      return
    }
    styleSheet = prefixStyleSheetSelectors(styleSheet, cssSelectorPrefix);
    owner.raw.styleSheet = styleSheet;
    if(!owner._style) {
      owner._style = new DOMElement("style");
      owner.addChild(owner._style)
    }
    if(!this._defaultStyleSheet) {
      this._defaultStyleSheet = prefixStyleSheetSelectors(defaultStyleSheet, cssSelectorPrefix)
    }
    owner._style.setAttribute("innerHTML", this._defaultStyleSheet + styleSheet)
  }
  function _getAutoSize() {
    return this._owner.raw.autoSize
  }
  function _setAutoSize(autoSize) {
    var owner = this._owner;
    owner.raw.autoSize = autoSize || "none";
    switch(autoSize) {
      case "none":
        owner.setStyles({"float":"", width:"100px", height:"100px"});
        break;
      case "left":
        owner.setStyles({"float":"left", width:"auto", height:"auto"});
        break;
      case "right":
        owner.setStyles({"float":"right", width:"auto", height:"auto"});
        owner.text.setStyle("float", "right");
        owner.text.setStyle("textAlign", "right");
        break;
      case "center":
        owner.setStyles({"display":"inline-block", width:"auto", height:"auto"});
        owner.setStyle("textAlign", "center");
        break
    }
  }
  function _getEditable() {
    return!!this._owner.raw.editable
  }
  function _setEditable(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.editable = bool;
    if(bool === true) {
      owner.text.setAttribute("contenteditable", "true");
      owner.text.setStyles({"webkitUserModify":"read-write", "webkitNbspMode":"space", "webkitLineBreak":"after-white-space"});
      owner.addCSSRule(":focus", {"outline":"none"})
    }else {
      owner.text.setAttribute("contenteditable", "false");
      owner.text.setStyles({"webkitNbspMode":"", "webkitLineBreak":""})
    }
  }
  function _getHtml() {
    return!!this._owner.raw.html
  }
  function _setHtml(bool) {
    this._owner.raw.html = !!bool
  }
  function _getHtmlText() {
    return this._owner.raw.htmlText || ""
  }
  function _setHtmlText(html) {
    var owner = this._owner;
    if(owner.attr("html") === false) {
      return
    }
    owner.innerHTML(html)
  }
  function _getMaxChars() {
    return this._owner.raw.maxChars
  }
  function _setMaxChars(number) {
    var owner = this._owner;
    owner.raw.maxChars = number
  }
  function _getPassword() {
    return!!this._owner.raw.password
  }
  function _setPassword(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.password = bool;
    if(bool === true) {
      owner.attr("text", Array(owner.text.getAttribute("innerHTML").length + 1).join("*"))
    }
  }
  function _getText() {
    var textSegments;
    var owner = this._owner;
    var html = owner.attr("htmlText");
    var match = html.match(new RegExp("<TEXTFORMAT.*" + FLAG_SWF_HTML + ">(.*)"));
    if(match && match[1]) {
      textSegments = match[1].split(/<\/TEXTFORMAT>(.+)?/);
      html = FLAG_SWF_TEXT + textSegments[0] + FLAG_SWF_TEXT + (textSegments[1] || "")
    }
    return TextField.unescapeHtml(html)
  }
  function _setText(plainText) {
    var owner = this._owner;
    var maxChars = owner.attr("maxChars");
    plainText = (plainText || "").toString();
    plainText = maxChars === null ? plainText : plainText.slice(0, maxChars);
    var textSegments, html = "";
    textSegments = plainText.split(FLAG_SWF_TEXT);
    for(var i = 0, len = textSegments.length;i < len;i++) {
      if(textSegments[i].length === 0) {
        continue
      }
      html += owner.htmlFromText(textSegments[i], i % 2)
    }
    owner.innerHTML(html);
    owner.emit("change")
  }
  function _getSelectable() {
    return!!this._owner.raw.selectable
  }
  function _setSelectable(bool) {
    bool = !!bool;
    this._owner.raw.selectable = bool;
    if(bool === true) {
    }
  }
  function _getBackground() {
    return!!this._owner.raw.background
  }
  function _setBackground(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.background = bool;
    owner.attr("backgroundColor", owner.attr("backgroundColor"))
  }
  function _getBackgroundColor() {
    var owner = this._owner;
    if(owner.attr("background") === true) {
      return owner.raw.backgroundColor
    }else {
      return boxDefaults.backgroundColor
    }
  }
  function _setBackgroundColor(color) {
    var owner = this._owner;
    owner.raw.backgroundColor = color;
    if(owner.attr("background")) {
      owner.innerBox.setStyle("backgroundColor", rgba(color))
    }else {
      owner.innerBox.setStyle("backgroundColor", "rgba(0,0,0,0)")
    }
  }
  function _getBorder() {
    return!!this._owner.raw.border
  }
  function _setBorder(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.border = bool;
    owner.attr("borderColor", owner.attr("borderColor"))
  }
  function _getBorderColor() {
    var owner = this._owner;
    if(owner.attr("border") === true) {
      return owner.raw.borderColor
    }else {
      return boxDefaults.borderColor
    }
  }
  function _setBorderColor(color) {
    var owner = this._owner;
    owner.raw.borderColor = color;
    if(owner.attr("border")) {
      owner.innerBox.setStyles({borderWidth:"1px", borderColor:rgba(color), borderStyle:"solid"})
    }else {
      owner.innerBox.setStyles({borderColor:"", borderWidth:"0px"})
    }
  }
  function _getWordWrap() {
    return!!this._owner.raw.wordWrap
  }
  function _setWordWrap(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.wordWrap = bool;
    if(bool === true && owner.attr("multiline")) {
      owner.text.setStyles({whiteSpace:"normal", display:""})
    }else {
      owner.text.setStyles({whiteSpace:"nowrap", display:"inline-block"})
    }
  }
  function _getMultiline() {
    return!!this._owner.raw.multiline
  }
  function _setMultiline(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.multiline = bool;
    owner.attr("wordWrap", owner.attr("wordWrap"))
  }
  function _getWidth() {
    return this._owner.raw.width
  }
  function _setWidth(number) {
    var owner = this._owner;
    owner.raw.width = number;
    if(owner.attr("autoSize") !== "none") {
      return
    }
    owner.setStyle("width", number + "px")
  }
  function _getHeight() {
    var owner = this._owner;
    var autosize = owner.attr("autoSize");
    if(typeof autosize === "undefined" || autosize === "none") {
      return owner.raw.height
    }else {
      var countLineBreaks = owner.attr("text").split(/\n|\r/).length;
      return owner.text.attr("size") * countLineBreaks
    }
  }
  function _setHeight(number) {
    var owner = this._owner;
    owner.raw.height = number;
    if(owner.attr("autoSize") !== "none") {
      return
    }
    owner.setStyle("height", number + "px")
  }
  function _getAlign() {
    return this._owner.raw.align
  }
  function _setAlign(val) {
    var owner = this._owner;
    owner.raw.align = val;
    owner.parent.setStyle("textAlign", val || "")
  }
  function _getBold() {
    return this._owner.raw.bold
  }
  function _setBold(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.bold = bool;
    owner.setStyle("fontWeight", bool ? "700" : "normal")
  }
  function _getColor() {
    return this._owner.raw.color
  }
  function _setColor(color) {
    var owner = this._owner;
    owner.raw.color = color;
    owner.setStyle("color", rgba(color))
  }
  function _getFont() {
    return this._owner.raw.font
  }
  function _setFont(name, fontFamily) {
    var owner = this._owner;
    if(tools.isArray(name)) {
      fontFamily = name[1] + ", " + name[0];
      owner.raw.font = name[0]
    }else {
      fontFamily = name;
      owner.raw.font = name
    }
    owner.setStyle("fontFamily", fontFamily)
  }
  function _getIndent() {
    return this._owner.raw.indent
  }
  function _setIndent(indent) {
    var owner = this._owner;
    owner.raw.indent = indent;
    owner.setStyle("textIndent", indent || "")
  }
  function _getItalic() {
    return this._owner.raw.italic
  }
  function _setItalic(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.italic = bool;
    owner.setStyle("fontStyle", bool ? "italic" : "")
  }
  function _getLeftMargin() {
    return this._owner.raw.leftMargin
  }
  function _setLeftMargin(leftMargin) {
    var owner = this._owner;
    owner.raw.leftMargin = leftMargin;
    owner.setStyle("paddingLeft", leftMargin + "px")
  }
  function _getRightMargin() {
    return this._owner.raw.rightMargin
  }
  function _setRightMargin(rightMargin) {
    var owner = this._owner;
    owner.raw.rightMargin = rightMargin;
    owner.setStyle("paddingRight", rightMargin + "px")
  }
  function _getLetterSpacing() {
    return this._owner.raw.letterSpacing
  }
  function _setLetterSpacing(letterSpacing) {
    var owner = this._owner;
    owner.raw.letterSpacing = letterSpacing;
    owner.setStyle("letterSpacing", letterSpacing + "px")
  }
  function _getSize() {
    return this._owner.raw.size
  }
  function _setSize(number) {
    number = +number;
    var owner = this._owner;
    owner.raw.size = number;
    owner.setStyle("fontSize", number + "px")
  }
  function _getUnderline() {
    return this._owner.raw.underline
  }
  function _setUnderline(bool) {
    bool = !!bool;
    var owner = this._owner;
    owner.raw.underline = bool;
    owner.setStyle("textDecoration", bool ? "underline" : "")
  }
  function _getLineHeight() {
    return this._owner.raw.lineHeight
  }
  function _setLineHeight(number) {
    var owner = this._owner;
    owner.raw.lineHeight = number;
    owner.setStyle("line-height", number + "px")
  }
  function TextField(plainText) {
    DOMElement.call(this, "div");
    this._domID = "bs-textfield-" + this.id;
    this._domInnerClass = this._domID + "-innerText";
    this._cssSelectorPrefix = "#" + this._domID + " ." + this._domInnerClass;
    this.setAttribute("id", this._domID);
    this.innerBox = (new DOMElement("div", {"class":this._domID + "-innerBox"}, {overflow:"hidden", width:"100%", height:"100%", display:"inline-block", boxSizing:"border-box", MozBoxSizing:"border-box"})).addTo(this);
    this.raw = {};
    Object.defineProperties(this._attributes, {wordWrap:accessor(_getWordWrap, _setWordWrap, true), multiline:accessor(_getMultiline, _setMultiline, true), autoSize:accessor(_getAutoSize, _setAutoSize, true), background:accessor(_getBackground, _setBackground, true), backgroundColor:accessor(_getBackgroundColor, _setBackgroundColor, true), border:accessor(_getBorder, _setBorder, true), borderColor:accessor(_getBorderColor, _setBorderColor, true), html:accessor(_getHtml, _setHtml, true), htmlText:accessor(_getHtmlText, 
    _setHtmlText, true), maxChars:accessor(_getMaxChars, _setMaxChars, true), password:accessor(_getPassword, _setPassword, true), text:accessor(_getText, _setText, true), selectable:accessor(_getSelectable, _setSelectable, true), editable:accessor(_getEditable, _setEditable, true), width:accessor(_getWidth, _setWidth, true), height:accessor(_getHeight, _setHeight, true), styleSheet:accessor(_getStyleSheet, _setStyleSheet, true)});
    this.css = (new DOMElement("style")).addTo(this.innerBox);
    this.css.raw = {};
    this.addCSSRule("a", {"color":"inherit", "text-decoration":"none"});
    this.addCSSRule("p", {"padding":0, "margin":0, "word-wrap":"normal"});
    this.text = (new DOMElement("span", {"class":this._domInnerClass})).addTo(this.innerBox);
    this.text.raw = {};
    Object.defineProperties(this.text._attributes, {align:accessor(_getAlign, _setAlign, true), bold:accessor(_getBold, _setBold, true), color:accessor(_getColor, _setColor, true), font:accessor(_getFont, _setFont, true), indent:accessor(_getIndent, _setIndent, true), italic:accessor(_getItalic, _setItalic, true), leftMargin:accessor(_getLeftMargin, _setLeftMargin, true), rightMargin:accessor(_getRightMargin, _setRightMargin, true), letterSpacing:accessor(_getLetterSpacing, _setLetterSpacing, true), 
    size:accessor(_getSize, _setSize, true), underline:accessor(_getUnderline, _setUnderline, true), lineHeight:accessor(_getLineHeight, _setLineHeight, true)});
    for(var boxDefaultsKey in boxDefaults) {
      this.attr(boxDefaultsKey, boxDefaults[boxDefaultsKey])
    }
    var textFormat = new TextFormat;
    for(var key in textFormat) {
      this.text.attr(key, textFormat[key])
    }
    this.text.raw.defaults = TextFormat.defaults
  }
  var proto = TextField.prototype = tools.beget(DOMElement.prototype);
  proto.addCSSRule = function(selector, declarations) {
    var css = this.css;
    var prefix = this._cssSelectorPrefix;
    if(!(selector in css.raw)) {
      css.raw[selector] = {}
    }
    for(var i in declarations) {
      css.raw[selector][i] = declarations[i]
    }
    var rule, rules, rulesAsString, sel;
    var innerHtml = "";
    for(sel in css.raw) {
      rules = css.raw[sel];
      rulesAsString = "";
      for(rule in rules) {
        rulesAsString += rule + ": " + rules[rule] + "; "
      }
      innerHtml += prefix + " " + sel + " { " + rulesAsString + " }\n"
    }
    css.setAttribute("innerHTML", innerHtml);
    return this
  };
  proto.innerHTML = function(html) {
    this.text.setAttribute("innerHTML", html);
    this.raw.htmlText = html;
    this.emit("change");
    return this
  };
  proto.htmlFromText = function(text, isSWF) {
    this.addCSSRule("font", {"font-size":"inherit", "color":"inherit", "font-family":"inherit"});
    return TextField.htmlTextFormatWrapper("<P><FONT>" + TextField.escapeHtml(text) + "</FONT></P>", isSWF)
  };
  TextField.escapeHtml = function(string) {
    return(string + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n|\r/g, "<br/>")
  };
  TextField.unescapeHtml = function(string) {
    return string.replace(/&amp;/g, "&").replace(/&nbsp; /g, " ").replace(/<br\/>/g, "\n").replace(/<(?:.|\n)*?>/gm, "").replace(/\&lt;/g, "<").replace(/\&gt;/g, ">")
  };
  TextField.htmlTextFormatWrapper = function(snippet, isSWF) {
    isSWF = !!isSWF;
    return"<TEXTFORMAT" + (isSWF ? " " + FLAG_SWF_HTML : "") + ">" + snippet + "</TEXTFORMAT>"
  };
  exports.TextField = TextField
})();
}());

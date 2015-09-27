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
(function() {
  var DOMElement = bonsai.DOMElement, tools = bonsai.tools, accessor = tools.descriptorAccessor, data = tools.descriptorData;
  var defaultStyleSheet = "a{color:#000;text-decoration:none;}";
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
  function makeCssAccessor(prop, domElement) {
    return accessor(function() {
      return(domElement || this._owner).getStyle(prop)
    }, function(val) {
      if(/color/i.test(prop)) {
        val = bonsai.color(val).rgba()
      }else {
        if(/fontSize/i.test(prop)) {
          val = val
        }else {
          if(/lineHeight/i.test(prop)) {
            val = val
          }else {
            if(typeof val === "number") {
              val = val + "px"
            }
          }
        }
      }
      (domElement || this._owner).setStyle(prop, val)
    }, true)
  }
  function makeDomAccessor(prop, domElement) {
    return accessor(function() {
      return(domElement || this._owner).getAttribute(prop)
    }, function(val) {
      (domElement || this._owner).setAttribute(prop, val)
    }, true)
  }
  function getAutoSize() {
    return this._autoSize
  }
  function setAutoSize(autoSize) {
    this._autoSize = autoSize = autoSize || "none";
    switch(autoSize) {
      case "none":
        this._owner._innerContainer.setStyles({"float":"", width:"100%", height:"100%"});
        break;
      case "left":
        this._owner._innerContainer.setStyles({"float":"left", width:"auto", height:"auto"});
        this._owner.setStyles({width:"auto", height:"auto"});
        break;
      case "right":
        this._owner._innerContainer.setStyles({"float":"right", width:"auto", height:"auto"});
        this._owner._innerText.setStyle("float", "right");
        this._owner._innerText.setStyle("textAlign", "right");
        break;
      case "center":
        this._owner._innerContainer.setStyles({"display":"inline-block", width:"auto", height:"auto"});
        this._owner.setStyle("textAlign", "center");
        break
    }
  }
  function getEditable() {
    return this._editable
  }
  function setEditable(isEditable) {
    this._editable = !!isEditable;
    this._owner._innerContainer.setAttribute("contenteditable", isEditable)
  }
  function getHtmlText() {
    return this._owner._innerText.getAttribute("innerHTML")
  }
  function setHtmlText(html) {
    var owner = this._owner;
    owner._innerText.setAttribute("innerHTML", html);
    owner.emit("change")
  }
  function getMaxLength() {
    return this._maxLength
  }
  function setMaxLength(maxLength) {
    if(maxLength !== this._maxLength) {
      this._maxLength = maxLength
    }
  }
  function getPassword() {
    return this._password
  }
  function setPassword(isPassword) {
    this._password = !!isPassword;
    if(isPassword) {
      this.text = Array(this._owner._innerText.getAttribute("innerHTML").length + 1).join("*")
    }
  }
  function getText() {
    return TextField.unescapeHtml(this._owner._innerText.getAttribute("innerHTML"))
  }
  function setText(plainText) {
    plainText = this._maxLength === null ? plainText : plainText.slice(0, this._maxLength);
    var owner = this._owner;
    owner._innerText.setAttribute("innerHTML", TextField.escapeHtml(plainText));
    owner.emit("change")
  }
  function getSelectable() {
    return this._selectable
  }
  function setSelectable(isSelectable) {
    if(isSelectable) {
    }
  }
  function getStyleSheet() {
    return this._styleSheet
  }
  function setStyleSheet(styleSheet) {
    if(!styleSheet) {
      this._styleSheet = "";
      return
    }
    styleSheet = prefixStyleSheetSelectors(styleSheet, this._owner._cssSelectorPrefix);
    this._styleSheet = styleSheet;
    if(!this._owner._style) {
      this._owner._style = new DOMElement("style");
      this._owner.addChild(this._owner._style)
    }
    if(!this._defaultStyleSheet) {
      this._defaultStyleSheet = prefixStyleSheetSelectors(defaultStyleSheet, this._owner._cssSelectorPrefix)
    }
    this._owner._style.setAttribute("innerHTML", this._defaultStyleSheet + styleSheet)
  }
  function getWordwrap() {
    return this._wordwrap
  }
  function setWordwrap(isWordwrap) {
    if(isWordwrap) {
      this._owner._innerText.setStyles({whiteSpace:"normal", display:""})
    }else {
      this._owner._innerText.setStyles({whiteSpace:"nowrap", display:"inline-block"})
    }
    this._wordwrap = !!isWordwrap
  }
  function getWidth() {
    return this._width
  }
  function setWidth(width) {
    this._width = width;
    if(this._autoSize !== "none") {
      return
    }
    this._owner.setStyle("width", width + "px");
    this._owner._innerContainer.setStyle("width", width - this.lineWidth * 2 + "px")
  }
  function getHeight() {
    return this._height
  }
  function setHeight(height) {
    this._height = height;
    if(this._autoSize !== "none") {
      return
    }
    this._owner.setStyle("height", height + "px");
    this._owner._innerContainer.setStyle("height", height - this.lineWidth * 2 + "px")
  }
  function getLineWidth() {
    return this._lineWidth
  }
  function setLineWidth(lineWidth) {
    this._lineWidth = lineWidth;
    this._owner._innerContainer.setStyle("borderWidth", lineWidth + "px");
    this.width = this.width;
    this.height = this.height
  }
  function TextField(plainText) {
    DOMElement.call(this, "div");
    this._domID = "bs-textfield-" + this.id;
    this._domInnerClass = this._domID + "-inner";
    this._cssSelectorPrefix = "#" + this._domID + " ." + this._domInnerClass;
    this.setAttribute("id", this._domID);
    this._innerContainer = (new DOMElement("div", {}, {borderStyle:"solid", overflow:"hidden", width:"100%", height:"100%", display:"inline-block", boxSizing:"border-box", MozBoxSizing:"border-box"})).addTo(this);
    this._innerText = new DOMElement("span", {"class":this._domInnerClass});
    this._innerContainer.addChild(this._innerText);
    Object.defineProperties(this._attributes, {align:makeCssAccessor("textAlign", this._innerContainer), _autoSize:data(null, true, true), autoSize:accessor(getAutoSize, setAutoSize, true), fillColor:makeCssAccessor("backgroundColor", this._innerContainer), lineColor:makeCssAccessor("borderColor", this._innerContainer), lineHeight:makeCssAccessor("lineHeight", this._innerContainer), editable:accessor(getEditable, setEditable, true), fontFamily:makeCssAccessor("fontFamily"), fontSize:makeCssAccessor("fontSize"), 
    htmlText:accessor(getHtmlText, setHtmlText, true), _maxLength:data(null, true, true), maxLength:accessor(getMaxLength, setMaxLength, true), _password:data(false, true, true), password:accessor(getPassword, setPassword, true), _selectable:data(true, true, true), selectable:accessor(getSelectable, setSelectable, true), _styleSheet:data("", true, true), styleSheet:accessor(getStyleSheet, setStyleSheet, true), _text:data("", true, true), text:accessor(getText, setText, true), textFillColor:makeCssAccessor("color"), 
    textLineColor:makeCssAccessor("-webkit-stroke-color"), textLineWidth:makeCssAccessor("-webkit-stroke-width"), _wordwrap:data(false, true, true), wordwrap:accessor(getWordwrap, setWordwrap, true), _lineWidth:data(0, true, true), lineWidth:accessor(getLineWidth, setLineWidth, true), _width:data(0, true, true), width:accessor(getWidth, setWidth, true), _height:data(0, true, true), height:accessor(getHeight, setHeight, true)});
    this.attr({align:"left", autoSize:"none", lineColor:"black", lineWidth:1, fillColor:"", textFillColor:"black", fontFamily:"", fontSize:"", htmlText:"", text:plainText || "", wordwrap:false, height:100, width:100, styleSheet:" /* trigger defaults to be set */ "})
  }
  TextField.prototype = tools.beget(DOMElement.prototype);
  TextField.escapeHtml = function(string) {
    return string.replace(/&/g, "&amp;").replace(/ /g, "&nbsp; ").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")
  };
  TextField.unescapeHtml = function(string) {
    return string.replace(/&amp;/g, "&").replace(/&nbsp; /g, " ").replace(/<br\/>/g, "\n").replace(/<(?:.|\n)*?>/gm, "").replace(/\&lt;/g, "<").replace(/\&gt;/g, ">")
  };
  exports.TextField = TextField
})();
}());

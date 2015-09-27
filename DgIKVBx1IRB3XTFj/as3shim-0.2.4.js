/**
 * as3shim is (C) 2012 uxebu Inc.
 * 
 * No permission or right to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software is granted.
 * All rights reserved to the copyright holders.
 */
;(function() {'use strict';
  var module$as3shim$bonsai = {};
  module$as3shim$bonsai.module$exports = bonsai;
  module$as3shim$bonsai.module$exports && (module$as3shim$bonsai = module$as3shim$bonsai.module$exports);
  var module$as3shim$global = {};
  module$as3shim$global.module$exports = Function("return this")();
  module$as3shim$global.module$exports && (module$as3shim$global = module$as3shim$global.module$exports);
  var module$as3shim$isXMLName = {}, toString$$module$as3shim$isXMLName = {}.toString;
  function isXMLName$$module$as3shim$isXMLName(a) {
    return"[object String]" === toString$$module$as3shim$isXMLName.call(a)
  }
  module$as3shim$isXMLName.module$exports = isXMLName$$module$as3shim$isXMLName;
  module$as3shim$isXMLName.module$exports && (module$as3shim$isXMLName = module$as3shim$isXMLName.module$exports);
  var module$as3shim$tools = {}, bonsai$$module$as3shim$tools = module$as3shim$bonsai, global$$module$as3shim$tools = module$as3shim$global, bonsaiTools$$module$as3shim$tools = bonsai$$module$as3shim$tools.tools, doc$$module$as3shim$tools = global$$module$as3shim$tools.document, functionAlreadyWarnedAbout$$module$as3shim$tools = {}, hasOwnProperty$$module$as3shim$tools = {}.hasOwnProperty, reMatchWords$$module$as3shim$tools = /[a-z]+[a-z\d]*(?!\d[A-Z])|[A-Z][a-z]+|[A-Z\d]+(?![a-z])/g, slice$$module$as3shim$tools = 
  [].slice, PI$$module$as3shim$tools = PI$$module$as3shim$tools = Math.PI, abs$$module$as3shim$tools = Math.abs, round$$module$as3shim$tools = Math.round, expando$$module$as3shim$tools = "bonsai" + (bonsai$$module$as3shim$tools.version + Math.random()).replace(/\D/g, "");
  function addConstantsToClass$$module$as3shim$tools(a) {
    tools$$module$as3shim$tools.forEach(a, function(a) {
      var c = a.shift();
      tools$$module$as3shim$tools.forEach(a, function(a) {
        "string" === typeof a && (a = [a]);
        a.unshift(c);
        setConst$$module$as3shim$tools.apply(null, a)
      })
    })
  }
  function createDummyFunction$$module$as3shim$tools(a) {
    var b = "void";
    if(a === Object(a)) {
      var c = a, a = c.name, b = c.returnType || b
    }
    var d = "Missing implementation for" + (a ? " " + a : "");
    return function() {
      functionAlreadyWarnedAbout$$module$as3shim$tools[a] || (functionAlreadyWarnedAbout$$module$as3shim$tools[a] = !0, console.warn(d));
      if(c && "returnValue" in c) {
        return c.returnValue
      }
      var e = {array:[], "boolean":!1, "int":0, number:0, string:"", "null":null, "void":void 0}, f = b.toLowerCase();
      return f in e ? e[f] : Function("exposes", "try { return new exposes." + b + "} catch (e) {}")(global$$module$as3shim$tools.exports.asGlobal)
    }
  }
  function createUnimplementedFunction$$module$as3shim$tools(a) {
    var b = "Unimplemented: " + (a ? " " + a : "");
    return function() {
      if(!functionAlreadyWarnedAbout$$module$as3shim$tools[a]) {
        return functionAlreadyWarnedAbout$$module$as3shim$tools[a] = !0, console.warn(b), new Boolean(!1)
      }
    }
  }
  function degToRad$$module$as3shim$tools(a) {
    return fixRoundingError$$module$as3shim$tools(a * (PI$$module$as3shim$tools / 180))
  }
  function detachNode$$module$as3shim$tools(a) {
    return a.parentNode.removeChild(a)
  }
  function escapeAttributeValue$$module$as3shim$tools(a) {
    return(a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;").replace(/\t/g, "&#x9;")
  }
  function every$$module$as3shim$tools(a, b, c) {
    var d = -1, e = a.length;
    for(c && (b = tools$$module$as3shim$tools.hitch(c, b));++d < e;) {
      if(!b(a[d], d, a)) {
        return!1
      }
    }
    return!0
  }
  function fixRoundingError$$module$as3shim$tools(a) {
    for(var b, c = [1, 10, 100], d = 0, e = c.length;d < e;d++) {
      if(b = abs$$module$as3shim$tools(a * c[d]) % 1, 1.0E-5 > b || 0.99999 < b) {
        return round$$module$as3shim$tools(a * c[d]) / c[d]
      }
    }
    return a
  }
  function forEachSnapshot$$module$as3shim$tools(a, b) {
    for(var c = 0, d = (a || {}).snapshotLength;c < d && !1 !== b(a.snapshotItem(c), c, a);c++) {
    }
    return a
  }
  function getDescriptor$$module$as3shim$tools(a, b) {
    return Object.getOwnPropertyDescriptor(a, b)
  }
  function getPrivateObjectOf$$module$as3shim$tools(a, b) {
    var c = tools$$module$as3shim$tools.expando;
    c in a || Object.defineProperty(a, c, {value:{attrs:{}}});
    var c = a[c], d;
    for(d in b) {
      d in c || (c[d] = b[d])
    }
    return c
  }
  function hasKey$$module$as3shim$tools(a, b) {
    return null != a && hasOwnProperty$$module$as3shim$tools.call(a, b)
  }
  function noop$$module$as3shim$tools() {
  }
  function radToDeg$$module$as3shim$tools(a) {
    return fixRoundingError$$module$as3shim$tools(a * (180 / PI$$module$as3shim$tools))
  }
  function setAccessor$$module$as3shim$tools(a, b, c) {
    c || (c = {});
    setDescriptor$$module$as3shim$tools(a, b, tools$$module$as3shim$tools.mixin({get:noop$$module$as3shim$tools, set:noop$$module$as3shim$tools}, c))
  }
  function setConst$$module$as3shim$tools(a, b, c) {
    3 > arguments.length && (c = b);
    setDescriptor$$module$as3shim$tools(a, toConstCase$$module$as3shim$tools(b), {configurable:!1, enumerable:!1, writable:!1, value:c})
  }
  function setConsts$$module$as3shim$tools(a, b) {
    tools$$module$as3shim$tools.forEach(b, function(b) {
      tools$$module$as3shim$tools.setConst(a, b[0], b[1])
    })
  }
  function setDescriptor$$module$as3shim$tools(a, b, c) {
    c || (c = {});
    var d = {configurable:!0, enumerable:!0, writable:!0};
    "configurable" in c && (d.configurable = c.configurable);
    "enumerable" in c && (d.enumerable = c.enumerable);
    c.get || c.set ? ("get" in c && (d.get = c.get), "set" in c && (d.set = c.set), delete d.value, delete d.writable) : (delete d.get, delete d.set, d.value = c.value, "writable" in c && (d.writable = c.writable));
    Object.defineProperty(a, b, d)
  }
  function setImmutable$$module$as3shim$tools(a, b, c) {
    var d = {configurable:!1, writable:!1};
    3 > arguments.length ? ("get" in b ? d.get = b.get : "value" in b && (d.value = b.value), b = b.name) : d.value = c;
    setDescriptor$$module$as3shim$tools(a, b, d)
  }
  function setPseudoPrivate$$module$as3shim$tools(a, b, c) {
    setDescriptor$$module$as3shim$tools(a, "__" + b + "__", {enumerable:!1, value:c})
  }
  function some$$module$as3shim$tools(a, b, c) {
    var d = -1, e = a.length;
    for(c && (b = tools$$module$as3shim$tools.hitch(c, b));++d < e;) {
      if(b(a[d], d, a)) {
        return!0
      }
    }
    return!1
  }
  function toArray$$module$as3shim$tools(a, b, c) {
    return slice$$module$as3shim$tools.call(a, b || 0, c || a.length)
  }
  function toCamelCase$$module$as3shim$tools(a) {
    reMatchWords$$module$as3shim$tools.lastIndex = 0;
    return a.replace(reMatchWords$$module$as3shim$tools, function(a, c) {
      return c ? a.charAt().toUpperCase() + a.slice(1) : a.toLowerCase()
    })
  }
  function toConstCase$$module$as3shim$tools(a) {
    reMatchWords$$module$as3shim$tools.lastIndex = 0;
    return(a.match(reMatchWords$$module$as3shim$tools) || []).join("_").toUpperCase()
  }
  function toRGBA$$module$as3shim$tools(a) {
    return 256 * a + 255
  }
  function xQuery$$module$as3shim$tools(a, b, c) {
    var d = doc$$module$as3shim$tools;
    b || (b = doc$$module$as3shim$tools);
    b && (b[expando$$module$as3shim$tools] && (b = b[expando$$module$as3shim$tools].raw), d = b.ownerDocument || b);
    return d.evaluate(a, b, null, null == c ? 6 : c, null)
  }
  function createAndRunMovieFromClass$$module$as3shim$tools(a) {
    var b = (new bonsai$$module$as3shim$tools.Movie).addTo(stage), c = Object.create(a.prototype), d = tools$$module$as3shim$tools.getPrivateObjectOf(c);
    d.raw = b;
    d.isRootMovie = !0;
    a.call(c)
  }
  function dispatchMouseEvent$$module$as3shim$tools(a, b) {
    var c = new a(b);
    c.stageX = this.mouseX;
    c.stageY = this.mouseY;
    this.dispatchEvent(c)
  }
  var tools$$module$as3shim$tools = bonsaiTools$$module$as3shim$tools.mixin(bonsaiTools$$module$as3shim$tools.beget(bonsaiTools$$module$as3shim$tools), {addConstantsToClass:addConstantsToClass$$module$as3shim$tools, createDummyFunction:createDummyFunction$$module$as3shim$tools, createUnimplementedFunction:createUnimplementedFunction$$module$as3shim$tools, degToRad:degToRad$$module$as3shim$tools, detachNode:detachNode$$module$as3shim$tools, dispatchMouseEvent:dispatchMouseEvent$$module$as3shim$tools, 
  escapeAttributeValue:escapeAttributeValue$$module$as3shim$tools, every:every$$module$as3shim$tools, expando:expando$$module$as3shim$tools, fixRoundingError:fixRoundingError$$module$as3shim$tools, forEachSnapshot:forEachSnapshot$$module$as3shim$tools, getDescriptor:getDescriptor$$module$as3shim$tools, getPrivateObjectOf:getPrivateObjectOf$$module$as3shim$tools, hasKey:hasKey$$module$as3shim$tools, noop:noop$$module$as3shim$tools, radToDeg:radToDeg$$module$as3shim$tools, createAndRunMovieFromClass:createAndRunMovieFromClass$$module$as3shim$tools, 
  setAccessor:setAccessor$$module$as3shim$tools, setConst:setConst$$module$as3shim$tools, setConsts:setConsts$$module$as3shim$tools, setDescriptor:setDescriptor$$module$as3shim$tools, setImmutable:setImmutable$$module$as3shim$tools, setPseudoPrivate:setPseudoPrivate$$module$as3shim$tools, some:some$$module$as3shim$tools, toArray:toArray$$module$as3shim$tools, toCamelCase:toCamelCase$$module$as3shim$tools, toConstCase:toConstCase$$module$as3shim$tools, toRGBA:toRGBA$$module$as3shim$tools, timestampAs3Started:+new Date, 
  xQuery:xQuery$$module$as3shim$tools});
  module$as3shim$tools.module$exports = tools$$module$as3shim$tools;
  module$as3shim$tools.module$exports && (module$as3shim$tools = module$as3shim$tools.module$exports);
  var module$as3shim$Array = {}, global$$module$as3shim$Array = module$as3shim$global, tools$$module$as3shim$Array = module$as3shim$tools, NO_FIELDNAME$$module$as3shim$Array = {}, Array$$module$as3shim$Array = global$$module$as3shim$Array.Array, arrProto$$module$as3shim$Array = Array$$module$as3shim$Array.prototype, nativeSort$$module$as3shim$Array = arrProto$$module$as3shim$Array.sort;
  function sort$$module$as3shim$Array(a) {
    return!a || "function" === typeof a ? nativeSort$$module$as3shim$Array.call(this, a) : this.sortOn(NO_FIELDNAME$$module$as3shim$Array, a)
  }
  function sortOn$$module$as3shim$Array(a, b) {
    var c, d = this, e = NO_FIELDNAME$$module$as3shim$Array !== a, f = d.length, g = b & Array$$module$as3shim$Array.CASEINSENSITIVE, h = b & Array$$module$as3shim$Array.DESCENDING, i = b & Array$$module$as3shim$Array.NUMERIC, j = b & Array$$module$as3shim$Array.RETURNINDEXEDARRAY;
    if(b & Array$$module$as3shim$Array.UNIQUESORT) {
      for(;f--;) {
        if(tools$$module$as3shim$Array.indexOf(this, this[f]) !== f) {
          return 0
        }
      }
    }
    j && (d = tools$$module$as3shim$Array.map(d, function(a) {
      return{value:a}
    }), c = d.slice());
    nativeSort$$module$as3shim$Array.call(d, function(b, c) {
      if(j) {
        b = b.value;
        c = c.value
      }
      if(e) {
        b = b[a];
        c = c[a]
      }
      if(i) {
        b = +b;
        c = +c
      }else {
        b = "" + b;
        c = "" + c;
        if(g) {
          b = b.toLowerCase();
          c = c.toLowerCase()
        }
      }
      return h ? b === c ? 0 : b < c ? 1 : -1 : b === c ? 0 : b < c ? -1 : 1
    });
    return j ? tools$$module$as3shim$Array.map(d, function(a) {
      return tools$$module$as3shim$Array.indexOf(c, a)
    }) : d
  }
  tools$$module$as3shim$Array.setConst(Array$$module$as3shim$Array, "CASEINSENSITIVE", 1);
  tools$$module$as3shim$Array.setConst(Array$$module$as3shim$Array, "DESCENDING", 2);
  tools$$module$as3shim$Array.setConst(Array$$module$as3shim$Array, "NUMERIC", 16);
  tools$$module$as3shim$Array.setConst(Array$$module$as3shim$Array, "RETURNINDEXEDARRAY", 8);
  tools$$module$as3shim$Array.setConst(Array$$module$as3shim$Array, "UNIQUESORT", 4);
  tools$$module$as3shim$Array.setDescriptor(arrProto$$module$as3shim$Array, "sort", {enumerable:!1, value:sort$$module$as3shim$Array});
  tools$$module$as3shim$Array.setDescriptor(arrProto$$module$as3shim$Array, "sortOn", {enumerable:!1, value:sortOn$$module$as3shim$Array});
  tools$$module$as3shim$Array.setPseudoPrivate(Array$$module$as3shim$Array, "isBuiltIn", !0);
  tools$$module$as3shim$Array.setPseudoPrivate(Array$$module$as3shim$Array, "isClass", !0);
  module$as3shim$Array.module$exports = Array$$module$as3shim$Array;
  module$as3shim$Array.module$exports && (module$as3shim$Array = module$as3shim$Array.module$exports);
  var module$as3shim$Class = {}, tools$$module$as3shim$Class = module$as3shim$tools, setDescriptor$$module$as3shim$Class = tools$$module$as3shim$Class.setDescriptor, setPseudoPrivate$$module$as3shim$Class = tools$$module$as3shim$Class.setPseudoPrivate;
  function Class$$module$as3shim$Class(a) {
    var b = {};
    "function" !== typeof a ? (b = a || b, a = b.superClass) : b.superClass = a;
    var c = tools$$module$as3shim$Class.hasKey(b, "constructor") ? b.constructor : function() {
    };
    a ? c || (c = function() {
      a.apply(this, arguments)
    }) : a = !("superClass" in b) && Class$$module$as3shim$Class;
    var d = c.prototype;
    if(a) {
      var e = a.prototype;
      Object.getOwnPropertyDescriptor(c, "prototype").writable && (c.prototype = tools$$module$as3shim$Class.beget(e));
      d = c.prototype;
      setPseudoPrivate$$module$as3shim$Class(c, "super", e)
    }
    d.constructor === c ? delete b.constructor : b.constructor = c;
    delete b.superClass;
    e = d.__proto__;
    d.__proto__ = {};
    tools$$module$as3shim$Class.mixin(d, b);
    d.__proto__ = e;
    setPseudoPrivate$$module$as3shim$Class(c, "isClass", !0);
    c.__proto__ = Class$$module$as3shim$Class.prototype;
    return c
  }
  function toString$$module$as3shim$Class() {
    return{}.toString.call(this)
  }
  Class$$module$as3shim$Class.prototype = new Function;
  setDescriptor$$module$as3shim$Class(Class$$module$as3shim$Class.prototype, "constructor", {enumerable:!1, value:Class$$module$as3shim$Class});
  setDescriptor$$module$as3shim$Class(Class$$module$as3shim$Class.prototype, "toString", {enumerable:!1, value:toString$$module$as3shim$Class});
  setPseudoPrivate$$module$as3shim$Class(Class$$module$as3shim$Class, "isBuiltIn", !0);
  setPseudoPrivate$$module$as3shim$Class(Class$$module$as3shim$Class, "isClass", !0);
  module$as3shim$Class.module$exports = Class$$module$as3shim$Class;
  module$as3shim$Class.module$exports && (module$as3shim$Class = module$as3shim$Class.module$exports);
  var module$as3shim$Error = {}, global$$module$as3shim$Error = module$as3shim$global, tools$$module$as3shim$Error = module$as3shim$tools, Class$$module$as3shim$Error = module$as3shim$Class, Error$$module$as3shim$Error = global$$module$as3shim$Error.Error;
  Class$$module$as3shim$Error({constructor:Error$$module$as3shim$Error, superClass:global$$module$as3shim$Error.Error, toString:function() {
    var a = this.constructor, a = a.displayName || a.name || "Error", a = /^[^$]+/.exec(a)[0];
    return this.message ? a + ": " + this.message : a
  }});
  tools$$module$as3shim$Error.setPseudoPrivate(Error$$module$as3shim$Error, "isBuiltIn", !0);
  module$as3shim$Error.module$exports = Error$$module$as3shim$Error;
  module$as3shim$Error.module$exports && (module$as3shim$Error = module$as3shim$Error.module$exports);
  var module$as3shim$ArgumentError = {}, tools$$module$as3shim$ArgumentError = module$as3shim$tools, Class$$module$as3shim$ArgumentError = module$as3shim$Class, Error$$module$as3shim$ArgumentError = module$as3shim$Error;
  function ArgumentError$$module$as3shim$ArgumentError(a) {
    if(!(this instanceof ArgumentError$$module$as3shim$ArgumentError)) {
      return new ArgumentError$$module$as3shim$ArgumentError(a)
    }
    this.message = a
  }
  Class$$module$as3shim$ArgumentError({constructor:ArgumentError$$module$as3shim$ArgumentError, superClass:Error$$module$as3shim$ArgumentError});
  tools$$module$as3shim$ArgumentError.setPseudoPrivate(ArgumentError$$module$as3shim$ArgumentError, "isBuiltIn", !0);
  module$as3shim$ArgumentError.module$exports = ArgumentError$$module$as3shim$ArgumentError;
  module$as3shim$ArgumentError.module$exports && (module$as3shim$ArgumentError = module$as3shim$ArgumentError.module$exports);
  var module$as3shim$DefinitionError = {}, tools$$module$as3shim$DefinitionError = module$as3shim$tools, Class$$module$as3shim$DefinitionError = module$as3shim$Class, Error$$module$as3shim$DefinitionError = module$as3shim$Error;
  function DefinitionError$$module$as3shim$DefinitionError(a) {
    if(!(this instanceof DefinitionError$$module$as3shim$DefinitionError)) {
      return new DefinitionError$$module$as3shim$DefinitionError(a)
    }
    this.message = a
  }
  Class$$module$as3shim$DefinitionError({constructor:DefinitionError$$module$as3shim$DefinitionError, superClass:Error$$module$as3shim$DefinitionError});
  tools$$module$as3shim$DefinitionError.setPseudoPrivate(DefinitionError$$module$as3shim$DefinitionError, "isBuiltIn", !0);
  module$as3shim$DefinitionError.module$exports = DefinitionError$$module$as3shim$DefinitionError;
  module$as3shim$DefinitionError.module$exports && (module$as3shim$DefinitionError = module$as3shim$DefinitionError.module$exports);
  var module$as3shim$EvalError = {}, global$$module$as3shim$EvalError = module$as3shim$global, tools$$module$as3shim$EvalError = module$as3shim$tools, Class$$module$as3shim$EvalError = module$as3shim$Class, Error$$module$as3shim$EvalError = module$as3shim$Error, EvalError$$module$as3shim$EvalError = global$$module$as3shim$EvalError.EvalError;
  Class$$module$as3shim$EvalError({constructor:EvalError$$module$as3shim$EvalError, superClass:Error$$module$as3shim$EvalError});
  tools$$module$as3shim$EvalError.setPseudoPrivate(EvalError$$module$as3shim$EvalError, "isBuiltIn", !0);
  module$as3shim$EvalError.module$exports = EvalError$$module$as3shim$EvalError;
  module$as3shim$EvalError.module$exports && (module$as3shim$EvalError = module$as3shim$EvalError.module$exports);
  var module$as3shim$flash$display$BlendMode = {}, tools$$module$as3shim$flash$display$BlendMode = module$as3shim$tools, Class$$module$as3shim$flash$display$BlendMode = module$as3shim$Class, constNames$$module$as3shim$flash$display$BlendMode = "add,alpha,darken,difference,erase,hardlight,invert,layer,lighten,multiply,normal,overlay,screen,shader,subtract".split(","), BlendMode$$module$as3shim$flash$display$BlendMode = new Class$$module$as3shim$flash$display$BlendMode;
  tools$$module$as3shim$flash$display$BlendMode.forEach(constNames$$module$as3shim$flash$display$BlendMode, function(a) {
    tools$$module$as3shim$flash$display$BlendMode.setConst(BlendMode$$module$as3shim$flash$display$BlendMode, a)
  });
  module$as3shim$flash$display$BlendMode.module$exports = BlendMode$$module$as3shim$flash$display$BlendMode;
  module$as3shim$flash$display$BlendMode.module$exports && (module$as3shim$flash$display$BlendMode = module$as3shim$flash$display$BlendMode.module$exports);
  var module$as3shim$flash$display$FrameLabel = {}, tools$$module$as3shim$flash$display$FrameLabel = module$as3shim$tools, Class$$module$as3shim$flash$display$FrameLabel = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$display$FrameLabel = tools$$module$as3shim$flash$display$FrameLabel.createDummyFunction, noop$$module$as3shim$flash$display$FrameLabel = tools$$module$as3shim$flash$display$FrameLabel.noop, setDescriptor$$module$as3shim$flash$display$FrameLabel = tools$$module$as3shim$flash$display$FrameLabel.setDescriptor;
  function FrameLabel$$module$as3shim$flash$display$FrameLabel() {
  }
  Class$$module$as3shim$flash$display$FrameLabel({constructor:FrameLabel$$module$as3shim$flash$display$FrameLabel});
  var proto$$module$as3shim$flash$display$FrameLabel = FrameLabel$$module$as3shim$flash$display$FrameLabel.prototype;
  setDescriptor$$module$as3shim$flash$display$FrameLabel(proto$$module$as3shim$flash$display$FrameLabel, "frame", {get:createDummyFunction$$module$as3shim$flash$display$FrameLabel({name:"frame", returnType:"int"})});
  setDescriptor$$module$as3shim$flash$display$FrameLabel(proto$$module$as3shim$flash$display$FrameLabel, "name", {get:createDummyFunction$$module$as3shim$flash$display$FrameLabel({name:"name", returnType:"String"})});
  module$as3shim$flash$display$FrameLabel.module$exports = FrameLabel$$module$as3shim$flash$display$FrameLabel;
  module$as3shim$flash$display$FrameLabel.module$exports && (module$as3shim$flash$display$FrameLabel = module$as3shim$flash$display$FrameLabel.module$exports);
  var module$as3shim$flash$display$GradientType = {}, tools$$module$as3shim$flash$display$GradientType = module$as3shim$tools, Class$$module$as3shim$flash$display$GradientType = module$as3shim$Class;
  function GradientType$$module$as3shim$flash$display$GradientType() {
  }
  tools$$module$as3shim$flash$display$GradientType.setConst(GradientType$$module$as3shim$flash$display$GradientType, "LINEAR", "linear");
  tools$$module$as3shim$flash$display$GradientType.setConst(GradientType$$module$as3shim$flash$display$GradientType, "RADIAL", "radial");
  Class$$module$as3shim$flash$display$GradientType({constructor:GradientType$$module$as3shim$flash$display$GradientType});
  module$as3shim$flash$display$GradientType.module$exports = GradientType$$module$as3shim$flash$display$GradientType;
  module$as3shim$flash$display$GradientType.module$exports && (module$as3shim$flash$display$GradientType = module$as3shim$flash$display$GradientType.module$exports);
  var module$as3shim$flash$display$Graphics = {}, bonsai$$module$as3shim$flash$display$Graphics = module$as3shim$bonsai, tools$$module$as3shim$flash$display$Graphics = module$as3shim$tools, Class$$module$as3shim$flash$display$Graphics = module$as3shim$Class, GradientType$$module$as3shim$flash$display$Graphics = module$as3shim$flash$display$GradientType, expando$$module$as3shim$flash$display$Graphics = tools$$module$as3shim$flash$display$Graphics.expando, toRGBA$$module$as3shim$flash$display$Graphics = 
  tools$$module$as3shim$flash$display$Graphics.toRGBA;
  function Graphics$$module$as3shim$flash$display$Graphics() {
    this[expando$$module$as3shim$flash$display$Graphics] = {attrs:{}, raw:new bonsai$$module$as3shim$flash$display$Graphics.Group, current:null, commands:[]}
  }
  function applyAttrs$$module$as3shim$flash$display$Graphics(a, b) {
    tools$$module$as3shim$flash$display$Graphics.keys(b).length && a.attr(b)
  }
  function clear$$module$as3shim$flash$display$Graphics() {
    var a = this[expando$$module$as3shim$flash$display$Graphics], b = a.attrs;
    a.raw.clear();
    delete b.lineColor;
    delete b.lineWidth;
    delete b.opacity
  }
  function copyFrom$$module$as3shim$flash$display$Graphics(a) {
    a = a.clone(!0);
    tools$$module$as3shim$flash$display$Graphics.forEach(a.children(), function(a) {
      this[expando$$module$as3shim$flash$display$Graphics].raw.addChild(a)
    }, this)
  }
  function drawCircle$$module$as3shim$flash$display$Graphics(a, b, c) {
    var d = this[expando$$module$as3shim$flash$display$Graphics], a = new bonsai$$module$as3shim$flash$display$Graphics.Circle(a, b, c);
    applyAttrs$$module$as3shim$flash$display$Graphics(a, d.attrs);
    a.addTo(d.raw)
  }
  function drawEllipse$$module$as3shim$flash$display$Graphics(a, b, c, d) {
    var e = this[expando$$module$as3shim$flash$display$Graphics], d = d / 2, c = c / 2, a = new bonsai$$module$as3shim$flash$display$Graphics.Ellipse(a + c, b + d, c, d);
    applyAttrs$$module$as3shim$flash$display$Graphics(a, e.attrs);
    a.addTo(e.raw)
  }
  function drawRect$$module$as3shim$flash$display$Graphics(a, b, c, d) {
    var e = this[expando$$module$as3shim$flash$display$Graphics], a = new bonsai$$module$as3shim$flash$display$Graphics.Rect(a, b, c, d);
    applyAttrs$$module$as3shim$flash$display$Graphics(a, e.attrs);
    a.addTo(e.raw)
  }
  function drawRoundRect$$module$as3shim$flash$display$Graphics(a, b, c, d, e, f) {
    var g = this[expando$$module$as3shim$flash$display$Graphics], a = new bonsai$$module$as3shim$flash$display$Graphics.Rect(a, b, c, d, (e + f) / 2);
    applyAttrs$$module$as3shim$flash$display$Graphics(a, g.attrs);
    a.addTo(g.raw)
  }
  function beginFill$$module$as3shim$flash$display$Graphics(a, b) {
    this[expando$$module$as3shim$flash$display$Graphics].attrsAreMutated = !0;
    var c = this[expando$$module$as3shim$flash$display$Graphics].attrs;
    c.fillColor = toRGBA$$module$as3shim$flash$display$Graphics(a);
    c.fillGradient = null;
    c.fillOpacity = null == b ? 1 : b
  }
  function beginGradientFill$$module$as3shim$flash$display$Graphics(a, b, c, d) {
    var e = this[expando$$module$as3shim$flash$display$Graphics], f, g = tools$$module$as3shim$flash$display$Graphics.map(b, function(a, e) {
      a = bonsai$$module$as3shim$flash$display$Graphics.color(tools$$module$as3shim$flash$display$Graphics.toRGBA(a));
      a.set("alpha", Math.max(0, Math.min(1, c[e])));
      return[+a, d ? 100 * (d[e] / 255) : 100 * (e / (b.length - 1))]
    });
    switch(a) {
      case GradientType$$module$as3shim$flash$display$Graphics.LINEAR:
        f = bonsai$$module$as3shim$flash$display$Graphics.gradient.linear(90, g);
        break;
      case GradientType$$module$as3shim$flash$display$Graphics.RADIAL:
        f = bonsai$$module$as3shim$flash$display$Graphics.gradient.radial(g, 50, 50, 50)
    }
    e.attrs.fillOpacity = 1;
    e.attrs.fillGradient = f;
    e.attrs.fillColor = 0
  }
  function endFill$$module$as3shim$flash$display$Graphics() {
    var a = this[expando$$module$as3shim$flash$display$Graphics].attrs;
    delete a.fillColor;
    delete a.fillGradient;
    delete a.fillOpacity
  }
  function lineStyle$$module$as3shim$flash$display$Graphics(a, b, c) {
    this[expando$$module$as3shim$flash$display$Graphics].attrsAreMutated = !0;
    var d = this[expando$$module$as3shim$flash$display$Graphics].attrs;
    d.lineColor = toRGBA$$module$as3shim$flash$display$Graphics(b);
    1 > a && (a = 1);
    255 < a && (a = 255);
    d.lineWidth = a;
    d.lineOpacity = 3 > arguments.length ? 1 : 0 > c ? 0 : 1 < c ? 1 : c
  }
  function lineTo$$module$as3shim$flash$display$Graphics(a, b) {
    var c = this[expando$$module$as3shim$flash$display$Graphics];
    c.current || (c.current = (new bonsai$$module$as3shim$flash$display$Graphics.Path).addTo(c.raw), c.attrsAreMutated = !0);
    c.attrsAreMutated && (applyAttrs$$module$as3shim$flash$display$Graphics(c.current, c.attrs), c.attrsAreMutated = !1);
    var d = c.current._segments;
    d.length && "closePath" === d[d.length - 1][0] && d.pop();
    c.current.lineTo(a, b);
    c.current.closePath()
  }
  function curveTo$$module$as3shim$flash$display$Graphics(a, b, c, d) {
    var e = this[expando$$module$as3shim$flash$display$Graphics];
    e.current || (e.current = (new bonsai$$module$as3shim$flash$display$Graphics.Path).addTo(e.raw), e.attrsAreMutated = !0);
    e.attrsAreMutated && (applyAttrs$$module$as3shim$flash$display$Graphics(e.current, e.attrs), e.attrsAreMutated = !1);
    var f = e.current._segments;
    f.length && "closePath" === f[f.length - 1][0] && f.pop();
    e.current.quadraticCurveTo(a, b, c, d);
    e.current.closePath()
  }
  function moveTo$$module$as3shim$flash$display$Graphics(a, b) {
    var c = this[expando$$module$as3shim$flash$display$Graphics];
    this[expando$$module$as3shim$flash$display$Graphics].commands.push(["moveTo", a, b]);
    c.current = (new bonsai$$module$as3shim$flash$display$Graphics.Path).addTo(c.raw);
    c.attrsAreMutated = !0;
    c.current.moveTo(a, b)
  }
  Class$$module$as3shim$flash$display$Graphics({constructor:Graphics$$module$as3shim$flash$display$Graphics, beginFill:beginFill$$module$as3shim$flash$display$Graphics, beginGradientFill:beginGradientFill$$module$as3shim$flash$display$Graphics, clear:clear$$module$as3shim$flash$display$Graphics, copyFrom:copyFrom$$module$as3shim$flash$display$Graphics, drawCircle:drawCircle$$module$as3shim$flash$display$Graphics, drawEllipse:drawEllipse$$module$as3shim$flash$display$Graphics, drawRect:drawRect$$module$as3shim$flash$display$Graphics, 
  drawRoundRect:drawRoundRect$$module$as3shim$flash$display$Graphics, endFill:endFill$$module$as3shim$flash$display$Graphics, lineStyle:lineStyle$$module$as3shim$flash$display$Graphics, lineTo:lineTo$$module$as3shim$flash$display$Graphics, curveTo:curveTo$$module$as3shim$flash$display$Graphics, moveTo:moveTo$$module$as3shim$flash$display$Graphics});
  var dummyMethods$$module$as3shim$flash$display$Graphics = "beginBitmapFill,beginShaderFill,drawGraphicsData,drawPath,drawRoundRectComplex,drawTriangles,lineBitmapStyle,lineGradientStyle,lineShaderStyle".split(",");
  tools$$module$as3shim$flash$display$Graphics.forEach(dummyMethods$$module$as3shim$flash$display$Graphics, function(a) {
    Graphics$$module$as3shim$flash$display$Graphics.prototype[a] = tools$$module$as3shim$flash$display$Graphics.createDummyFunction("flash.display.Graphics#" + a)
  });
  module$as3shim$flash$display$Graphics.module$exports = Graphics$$module$as3shim$flash$display$Graphics;
  module$as3shim$flash$display$Graphics.module$exports && (module$as3shim$flash$display$Graphics = module$as3shim$flash$display$Graphics.module$exports);
  var module$as3shim$flash$display$SWFVersion = {}, tools$$module$as3shim$flash$display$SWFVersion = module$as3shim$tools, Class$$module$as3shim$flash$display$SWFVersion = module$as3shim$Class;
  function SWFVersion$$module$as3shim$flash$display$SWFVersion() {
  }
  Class$$module$as3shim$flash$display$SWFVersion({constructor:SWFVersion$$module$as3shim$flash$display$SWFVersion});
  (function() {
    for(var a = 0;13 > ++a;) {
      tools$$module$as3shim$flash$display$SWFVersion.setConst(SWFVersion$$module$as3shim$flash$display$SWFVersion, "flash" + a)
    }
  })();
  module$as3shim$flash$display$SWFVersion.module$exports = SWFVersion$$module$as3shim$flash$display$SWFVersion;
  module$as3shim$flash$display$SWFVersion.module$exports && (module$as3shim$flash$display$SWFVersion = module$as3shim$flash$display$SWFVersion.module$exports);
  var module$as3shim$flash$errors$EOFError = {}, tools$$module$as3shim$flash$errors$EOFError = module$as3shim$tools, Class$$module$as3shim$flash$errors$EOFError = module$as3shim$Class, Error$$module$as3shim$flash$errors$EOFError = module$as3shim$Error;
  function EOFError$$module$as3shim$flash$errors$EOFError(a) {
    if(!(this instanceof EOFError$$module$as3shim$flash$errors$EOFError)) {
      return new EOFError$$module$as3shim$flash$errors$EOFError(a)
    }
    this.message = a
  }
  Class$$module$as3shim$flash$errors$EOFError({constructor:EOFError$$module$as3shim$flash$errors$EOFError, superClass:Error$$module$as3shim$flash$errors$EOFError});
  module$as3shim$flash$errors$EOFError.module$exports = EOFError$$module$as3shim$flash$errors$EOFError;
  module$as3shim$flash$errors$EOFError.module$exports && (module$as3shim$flash$errors$EOFError = module$as3shim$flash$errors$EOFError.module$exports);
  var module$as3shim$flash$events$EventPhase = {}, tools$$module$as3shim$flash$events$EventPhase = module$as3shim$tools, Class$$module$as3shim$flash$events$EventPhase = module$as3shim$Class, setConst$$module$as3shim$flash$events$EventPhase = tools$$module$as3shim$flash$events$EventPhase.setConst;
  function EventPhase$$module$as3shim$flash$events$EventPhase() {
  }
  setConst$$module$as3shim$flash$events$EventPhase(EventPhase$$module$as3shim$flash$events$EventPhase, "AT_TARGET", 2);
  setConst$$module$as3shim$flash$events$EventPhase(EventPhase$$module$as3shim$flash$events$EventPhase, "BUBBLING_PHASE", 3);
  setConst$$module$as3shim$flash$events$EventPhase(EventPhase$$module$as3shim$flash$events$EventPhase, "CAPTURING_PHASE", 1);
  Class$$module$as3shim$flash$events$EventPhase({constructor:EventPhase$$module$as3shim$flash$events$EventPhase});
  module$as3shim$flash$events$EventPhase.module$exports = EventPhase$$module$as3shim$flash$events$EventPhase;
  module$as3shim$flash$events$EventPhase.module$exports && (module$as3shim$flash$events$EventPhase = module$as3shim$flash$events$EventPhase.module$exports);
  var module$as3shim$flash$events$Event = {}, tools$$module$as3shim$flash$events$Event = module$as3shim$tools, Class$$module$as3shim$flash$events$Event = module$as3shim$Class, EventPhase$$module$as3shim$flash$events$Event = module$as3shim$flash$events$EventPhase, expando$$module$as3shim$flash$events$Event = tools$$module$as3shim$flash$events$Event.expando, constNames$$module$as3shim$flash$events$Event = ["activate", "added", "addedToStage", "cancel", "change", "clear", "close", "closing", "complete", 
  "connect", ["CONTEXT3D_CREATE", "context3DCreate"], "copy", "cut", "deactivate", "displaying", "enterFrame", "exitFrame", "exiting", "frameConstructed", ["FULLSCREEN", "fullScreen"], "htmlBoundsChange", "htmlDOMInitialize", "htmlRender", "id3", "init", "locationChange", "mouseLeave", "networkChange", "open", "paste", "preparing", "removed", "removedFromStage", "render", "resize", "scroll", "select", "selectAll", "soundComplete", "standardErrorClose", "standardInputClose", "standardOutputClose", 
  "tabChildrenChange", "tabEnabledChange", "tabIndexChange", "textInteractionModeChange", "unload", "userIdle", "userPresent"], setImmutable$$module$as3shim$flash$events$Event = tools$$module$as3shim$flash$events$Event.setImmutable;
  function Event$$module$as3shim$flash$events$Event(a, b, c) {
    setImmutable$$module$as3shim$flash$events$Event(this, "bubbles", !!b);
    setImmutable$$module$as3shim$flash$events$Event(this, "cancelable", !!c);
    setImmutable$$module$as3shim$flash$events$Event(this, "type", a || "");
    setImmutable$$module$as3shim$flash$events$Event(this, "eventPhase", EventPhase$$module$as3shim$flash$events$Event.AT_TARGET)
  }
  function formatToString$$module$as3shim$flash$events$Event() {
    return""
  }
  function isDefaultPrevented$$module$as3shim$flash$events$Event() {
    return!1
  }
  function toString$$module$as3shim$flash$events$Event() {
    var a = [("" + this.constructor).split(" ")[1].replace(/\]$/, "")], b = this;
    tools$$module$as3shim$flash$events$Event.forEach(this[expando$$module$as3shim$flash$events$Event].toStringProperties, function(c) {
      if(b.hasOwnProperty(c)) {
        var d = b[c];
        "string" === typeof d && (d = '"' + d + '"');
        try {
          a.push(c + "=" + d)
        }catch(e) {
          a.push(c + "=[object Object]")
        }
      }
    });
    return"[" + a.join(" ") + "]"
  }
  var dummyFunc$$module$as3shim$flash$events$Event = tools$$module$as3shim$flash$events$Event.createDummyFunction;
  Class$$module$as3shim$flash$events$Event({constructor:Event$$module$as3shim$flash$events$Event, clone:dummyFunc$$module$as3shim$flash$events$Event("flash.events.Event#clone"), formatToString:formatToString$$module$as3shim$flash$events$Event, isDefaultPrevented:isDefaultPrevented$$module$as3shim$flash$events$Event, preventDefault:dummyFunc$$module$as3shim$flash$events$Event("flash.events.Event#preventDefault"), stopImmediatePropagation:dummyFunc$$module$as3shim$flash$events$Event("flash.events.Event#stopImmediatePropagation"), 
  stopPropagation:dummyFunc$$module$as3shim$flash$events$Event("flash.events.Event#stopPropagation"), toString:toString$$module$as3shim$flash$events$Event});
  Event$$module$as3shim$flash$events$Event.prototype[expando$$module$as3shim$flash$events$Event] = {toStringProperties:["type", "bubbles", "cancelable", "eventPhase"]};
  tools$$module$as3shim$flash$events$Event.forEach(constNames$$module$as3shim$flash$events$Event, function(a) {
    var b = [Event$$module$as3shim$flash$events$Event];
    "string" != typeof a ? (b.push(a[0]), b.push(a[1])) : b.push(a);
    tools$$module$as3shim$flash$events$Event.setConst.apply(null, b)
  });
  module$as3shim$flash$events$Event.module$exports = Event$$module$as3shim$flash$events$Event;
  module$as3shim$flash$events$Event.module$exports && (module$as3shim$flash$events$Event = module$as3shim$flash$events$Event.module$exports);
  var module$as3shim$flash$events$AccelerometerEvent = {}, tools$$module$as3shim$flash$events$AccelerometerEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$AccelerometerEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$AccelerometerEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$AccelerometerEvent = tools$$module$as3shim$flash$events$AccelerometerEvent.createDummyFunction, noop$$module$as3shim$flash$events$AccelerometerEvent = 
  tools$$module$as3shim$flash$events$AccelerometerEvent.noop, setConst$$module$as3shim$flash$events$AccelerometerEvent = tools$$module$as3shim$flash$events$AccelerometerEvent.setConst, setDescriptor$$module$as3shim$flash$events$AccelerometerEvent = tools$$module$as3shim$flash$events$AccelerometerEvent.setDescriptor;
  function AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent(a, b, c, d, e, f, g) {
    AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent.__super__.constructor.call(this, a, b, c);
    this.accelerationX = e;
    this.accelerationY = f;
    this.accelerationZ = g;
    this.timestamp = d
  }
  setConst$$module$as3shim$flash$events$AccelerometerEvent(AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent, "update");
  function clone$$module$as3shim$flash$events$AccelerometerEvent() {
    return new AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent(this.type, this.bubbles, this.cancelable, this.timestamp, this.accelerationX, this.accelerationY, this.accelerationZ)
  }
  Class$$module$as3shim$flash$events$AccelerometerEvent({constructor:AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent, clone:clone$$module$as3shim$flash$events$AccelerometerEvent, superClass:Event$$module$as3shim$flash$events$AccelerometerEvent});
  AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent.prototype[tools$$module$as3shim$flash$events$AccelerometerEvent.expando] = {toStringProperties:"type,bubbles,cancelable,timestamp,accelerationX,accelerationY,accelerationZ".split(",")};
  var proto$$module$as3shim$flash$events$AccelerometerEvent = AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$AccelerometerEvent(proto$$module$as3shim$flash$events$AccelerometerEvent, "accelerationX", {get:createDummyFunction$$module$as3shim$flash$events$AccelerometerEvent({name:"accelerationX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$AccelerometerEvent});
  setDescriptor$$module$as3shim$flash$events$AccelerometerEvent(proto$$module$as3shim$flash$events$AccelerometerEvent, "accelerationY", {get:createDummyFunction$$module$as3shim$flash$events$AccelerometerEvent({name:"accelerationY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$AccelerometerEvent});
  setDescriptor$$module$as3shim$flash$events$AccelerometerEvent(proto$$module$as3shim$flash$events$AccelerometerEvent, "accelerationZ", {get:createDummyFunction$$module$as3shim$flash$events$AccelerometerEvent({name:"accelerationZ", returnType:"Number"}), set:noop$$module$as3shim$flash$events$AccelerometerEvent});
  setDescriptor$$module$as3shim$flash$events$AccelerometerEvent(proto$$module$as3shim$flash$events$AccelerometerEvent, "timestamp", {get:createDummyFunction$$module$as3shim$flash$events$AccelerometerEvent({name:"timestamp", returnType:"Number"}), set:noop$$module$as3shim$flash$events$AccelerometerEvent});
  module$as3shim$flash$events$AccelerometerEvent.module$exports = AccelerometerEvent$$module$as3shim$flash$events$AccelerometerEvent;
  module$as3shim$flash$events$AccelerometerEvent.module$exports && (module$as3shim$flash$events$AccelerometerEvent = module$as3shim$flash$events$AccelerometerEvent.module$exports);
  var module$as3shim$flash$events$ActivityEvent = {}, tools$$module$as3shim$flash$events$ActivityEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$ActivityEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$ActivityEvent = module$as3shim$flash$events$Event;
  function ActivityEvent$$module$as3shim$flash$events$ActivityEvent(a, b, c, d) {
    Event$$module$as3shim$flash$events$ActivityEvent.prototype.constructor.call(this, a, b, c);
    this.activating = d || !1
  }
  tools$$module$as3shim$flash$events$ActivityEvent.setConst(ActivityEvent$$module$as3shim$flash$events$ActivityEvent, "activity");
  function clone$$module$as3shim$flash$events$ActivityEvent() {
    return new ActivityEvent$$module$as3shim$flash$events$ActivityEvent(this.type, this.bubbles, this.cancelable, this.activating)
  }
  Class$$module$as3shim$flash$events$ActivityEvent({constructor:ActivityEvent$$module$as3shim$flash$events$ActivityEvent, clone:clone$$module$as3shim$flash$events$ActivityEvent, superClass:Event$$module$as3shim$flash$events$ActivityEvent});
  ActivityEvent$$module$as3shim$flash$events$ActivityEvent.prototype[tools$$module$as3shim$flash$events$ActivityEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "activating"]};
  module$as3shim$flash$events$ActivityEvent.module$exports = ActivityEvent$$module$as3shim$flash$events$ActivityEvent;
  module$as3shim$flash$events$ActivityEvent.module$exports && (module$as3shim$flash$events$ActivityEvent = module$as3shim$flash$events$ActivityEvent.module$exports);
  var module$as3shim$flash$events$ContextMenuEvent = {}, tools$$module$as3shim$flash$events$ContextMenuEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$ContextMenuEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$ContextMenuEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$ContextMenuEvent = tools$$module$as3shim$flash$events$ContextMenuEvent.createDummyFunction, noop$$module$as3shim$flash$events$ContextMenuEvent = tools$$module$as3shim$flash$events$ContextMenuEvent.noop, 
  setConst$$module$as3shim$flash$events$ContextMenuEvent = tools$$module$as3shim$flash$events$ContextMenuEvent.setConst, setDescriptor$$module$as3shim$flash$events$ContextMenuEvent = tools$$module$as3shim$flash$events$ContextMenuEvent.setDescriptor;
  function ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent(a, b, c, d, e) {
    ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent.__super__.constructor.call(this, a, b, c);
    this.mouseTarget = d;
    this.contextMenuOwner = e
  }
  setConst$$module$as3shim$flash$events$ContextMenuEvent(ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent, "menuItemSelect");
  setConst$$module$as3shim$flash$events$ContextMenuEvent(ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent, "menuSelect");
  function clone$$module$as3shim$flash$events$ContextMenuEvent() {
    return new ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent(this.type, this.bubbles, this.cancelable, this.mouseTarget, this.contextMenuOwner)
  }
  Class$$module$as3shim$flash$events$ContextMenuEvent({constructor:ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent, clone:clone$$module$as3shim$flash$events$ContextMenuEvent, superClass:Event$$module$as3shim$flash$events$ContextMenuEvent});
  ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent.prototype[tools$$module$as3shim$flash$events$ContextMenuEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "mouseTarget", "contextMenuOwner"]};
  var proto$$module$as3shim$flash$events$ContextMenuEvent = ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$ContextMenuEvent(proto$$module$as3shim$flash$events$ContextMenuEvent, "contextMenuOwner", {get:createDummyFunction$$module$as3shim$flash$events$ContextMenuEvent({name:"contextMenuOwner", returnType:""}), set:noop$$module$as3shim$flash$events$ContextMenuEvent});
  setDescriptor$$module$as3shim$flash$events$ContextMenuEvent(proto$$module$as3shim$flash$events$ContextMenuEvent, "isMouseTargetInaccessible", {get:createDummyFunction$$module$as3shim$flash$events$ContextMenuEvent({name:"isMouseTargetInaccessible", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$ContextMenuEvent});
  setDescriptor$$module$as3shim$flash$events$ContextMenuEvent(proto$$module$as3shim$flash$events$ContextMenuEvent, "mouseTarget", {get:createDummyFunction$$module$as3shim$flash$events$ContextMenuEvent({name:"mouseTarget", returnType:""}), set:noop$$module$as3shim$flash$events$ContextMenuEvent});
  module$as3shim$flash$events$ContextMenuEvent.module$exports = ContextMenuEvent$$module$as3shim$flash$events$ContextMenuEvent;
  module$as3shim$flash$events$ContextMenuEvent.module$exports && (module$as3shim$flash$events$ContextMenuEvent = module$as3shim$flash$events$ContextMenuEvent.module$exports);
  var module$as3shim$flash$events$DRMAuthenticationCompleteEvent = {}, tools$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = tools$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.createDummyFunction, 
  noop$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = tools$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.noop, setConst$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = tools$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.setConst, setDescriptor$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = tools$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.setDescriptor;
  function DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent(a, b, c, d, e, f) {
    DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.__super__.constructor.call(this, a, b, c);
    this.inServerURL = isServerURL;
    this.inDomain = e;
    this.inToken = f
  }
  setConst$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent(DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent, "authenticationComplete");
  function clone$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent() {
    return new DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent(this.type, this.bubbles, this.cancelable, this.inServerURL, this.inDomain, this.inToken)
  }
  Class$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent({constructor:DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent, clone:clone$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent, superClass:Event$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent});
  DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.prototype[tools$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.expando] = {toStringProperties:"type,bubbles,cancelable,inServerURL,inDomain,inToken".split(",")};
  var proto$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent = DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent(proto$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent, "domain", {get:createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent({name:"domain", returnType:"String"}), set:noop$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent});
  setDescriptor$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent(proto$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent, "serverURL", {get:createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent({name:"serverURL", returnType:"String"}), set:noop$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent});
  setDescriptor$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent(proto$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent, "token", {get:createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent({name:"token", returnType:""}), set:noop$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent});
  module$as3shim$flash$events$DRMAuthenticationCompleteEvent.module$exports = DRMAuthenticationCompleteEvent$$module$as3shim$flash$events$DRMAuthenticationCompleteEvent;
  module$as3shim$flash$events$DRMAuthenticationCompleteEvent.module$exports && (module$as3shim$flash$events$DRMAuthenticationCompleteEvent = module$as3shim$flash$events$DRMAuthenticationCompleteEvent.module$exports);
  var module$as3shim$flash$events$DRMStatusEvent = {}, tools$$module$as3shim$flash$events$DRMStatusEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$DRMStatusEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$DRMStatusEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$DRMStatusEvent = tools$$module$as3shim$flash$events$DRMStatusEvent.createDummyFunction, noop$$module$as3shim$flash$events$DRMStatusEvent = tools$$module$as3shim$flash$events$DRMStatusEvent.noop, 
  setConst$$module$as3shim$flash$events$DRMStatusEvent = tools$$module$as3shim$flash$events$DRMStatusEvent.setConst, setDescriptor$$module$as3shim$flash$events$DRMStatusEvent = tools$$module$as3shim$flash$events$DRMStatusEvent.setDescriptor;
  function DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent(a, b, c, d) {
    DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent.__super__.constructor.call(this, a, b, c);
    this.inMetadata = d;
    this.inVoucher = this.inVoucher;
    this.inLocal = this.inLocal
  }
  setConst$$module$as3shim$flash$events$DRMStatusEvent(DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent, "drmStatus");
  function clone$$module$as3shim$flash$events$DRMStatusEvent() {
    return new DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent(this.type, this.bubbles, this.cancelable, this.inMetadata, this.inVoucher, this.inLocal)
  }
  Class$$module$as3shim$flash$events$DRMStatusEvent({constructor:DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent, clone:clone$$module$as3shim$flash$events$DRMStatusEvent, superClass:Event$$module$as3shim$flash$events$DRMStatusEvent});
  DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent.prototype[tools$$module$as3shim$flash$events$DRMStatusEvent.expando] = {toStringProperties:"type,bubbles,cancelable,inMetadata,inVoucher,inLocal".split(",")};
  var proto$$module$as3shim$flash$events$DRMStatusEvent = DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$DRMStatusEvent(proto$$module$as3shim$flash$events$DRMStatusEvent, "contentData", {get:createDummyFunction$$module$as3shim$flash$events$DRMStatusEvent({name:"contentData", returnType:""}), set:noop$$module$as3shim$flash$events$DRMStatusEvent});
  setDescriptor$$module$as3shim$flash$events$DRMStatusEvent(proto$$module$as3shim$flash$events$DRMStatusEvent, "isLocal", {get:createDummyFunction$$module$as3shim$flash$events$DRMStatusEvent({name:"isLocal", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$DRMStatusEvent});
  setDescriptor$$module$as3shim$flash$events$DRMStatusEvent(proto$$module$as3shim$flash$events$DRMStatusEvent, "offlineLeasePeriod", {get:createDummyFunction$$module$as3shim$flash$events$DRMStatusEvent({name:"offlineLeasePeriod", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$events$DRMStatusEvent(proto$$module$as3shim$flash$events$DRMStatusEvent, "voucher", {get:createDummyFunction$$module$as3shim$flash$events$DRMStatusEvent({name:"voucher", returnType:""}), set:noop$$module$as3shim$flash$events$DRMStatusEvent});
  module$as3shim$flash$events$DRMStatusEvent.module$exports = DRMStatusEvent$$module$as3shim$flash$events$DRMStatusEvent;
  module$as3shim$flash$events$DRMStatusEvent.module$exports && (module$as3shim$flash$events$DRMStatusEvent = module$as3shim$flash$events$DRMStatusEvent.module$exports);
  var module$as3shim$flash$events$FocusEvent = {}, tools$$module$as3shim$flash$events$FocusEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$FocusEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$FocusEvent = module$as3shim$flash$events$Event, setConst$$module$as3shim$flash$events$FocusEvent = tools$$module$as3shim$flash$events$FocusEvent.setConst;
  function FocusEvent$$module$as3shim$flash$events$FocusEvent(a, b, c, d, e, f, g) {
    Event$$module$as3shim$flash$events$FocusEvent.call(this, a, b, c);
    this.relatedObject = d || null;
    this.shiftKey = e || !1;
    this.keyCode = f || 0;
    this.direction = g || "none";
    this.isRelatedObjectInaccessible = !1
  }
  setConst$$module$as3shim$flash$events$FocusEvent(FocusEvent$$module$as3shim$flash$events$FocusEvent, "focusIn");
  setConst$$module$as3shim$flash$events$FocusEvent(FocusEvent$$module$as3shim$flash$events$FocusEvent, "focusOut");
  setConst$$module$as3shim$flash$events$FocusEvent(FocusEvent$$module$as3shim$flash$events$FocusEvent, "keyFocusChange");
  setConst$$module$as3shim$flash$events$FocusEvent(FocusEvent$$module$as3shim$flash$events$FocusEvent, "mouseFocusChange");
  function clone$$module$as3shim$flash$events$FocusEvent() {
    return new FocusEvent$$module$as3shim$flash$events$FocusEvent(this.type, this.bubbles, this.cancelable, this.relatedObject, this.shiftKey, this.keyCode, this.direction)
  }
  Class$$module$as3shim$flash$events$FocusEvent({constructor:FocusEvent$$module$as3shim$flash$events$FocusEvent, superClass:Event$$module$as3shim$flash$events$FocusEvent, clone:clone$$module$as3shim$flash$events$FocusEvent});
  FocusEvent$$module$as3shim$flash$events$FocusEvent.prototype[tools$$module$as3shim$flash$events$FocusEvent.expando] = {toStringProperties:"type,bubbles,cancelable,relatedObject,shiftKey,keyCode".split(",")};
  module$as3shim$flash$events$FocusEvent.module$exports = FocusEvent$$module$as3shim$flash$events$FocusEvent;
  module$as3shim$flash$events$FocusEvent.module$exports && (module$as3shim$flash$events$FocusEvent = module$as3shim$flash$events$FocusEvent.module$exports);
  var module$as3shim$flash$events$FullScreenEvent = {}, tools$$module$as3shim$flash$events$FullScreenEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$FullScreenEvent = module$as3shim$Class, ActivityEvent$$module$as3shim$flash$events$FullScreenEvent = module$as3shim$flash$events$ActivityEvent;
  function FullScreenEvent$$module$as3shim$flash$events$FullScreenEvent(a, b, c, d) {
    ActivityEvent$$module$as3shim$flash$events$FullScreenEvent.prototype.constructor.call(this, a, b, c, !0);
    this.fullScreen = d || !1
  }
  tools$$module$as3shim$flash$events$FullScreenEvent.setConst(FullScreenEvent$$module$as3shim$flash$events$FullScreenEvent, "fullScreen");
  function clone$$module$as3shim$flash$events$FullScreenEvent() {
    return new FullScreenEvent$$module$as3shim$flash$events$FullScreenEvent(this.type, this.bubbles, this.cancelable, this.fullScreen)
  }
  Class$$module$as3shim$flash$events$FullScreenEvent({constructor:FullScreenEvent$$module$as3shim$flash$events$FullScreenEvent, clone:clone$$module$as3shim$flash$events$FullScreenEvent, superClass:ActivityEvent$$module$as3shim$flash$events$FullScreenEvent});
  FullScreenEvent$$module$as3shim$flash$events$FullScreenEvent.prototype[tools$$module$as3shim$flash$events$FullScreenEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "activating"]};
  module$as3shim$flash$events$FullScreenEvent.module$exports = FullScreenEvent$$module$as3shim$flash$events$FullScreenEvent;
  module$as3shim$flash$events$FullScreenEvent.module$exports && (module$as3shim$flash$events$FullScreenEvent = module$as3shim$flash$events$FullScreenEvent.module$exports);
  var module$as3shim$flash$events$GestureEvent = {}, tools$$module$as3shim$flash$events$GestureEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$GestureEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$GestureEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$GestureEvent = tools$$module$as3shim$flash$events$GestureEvent.createDummyFunction, noop$$module$as3shim$flash$events$GestureEvent = tools$$module$as3shim$flash$events$GestureEvent.noop, 
  setConst$$module$as3shim$flash$events$GestureEvent = tools$$module$as3shim$flash$events$GestureEvent.setConst, setDescriptor$$module$as3shim$flash$events$GestureEvent = tools$$module$as3shim$flash$events$GestureEvent.setDescriptor;
  function GestureEvent$$module$as3shim$flash$events$GestureEvent(a, b, c, d, e, f, g, h, i, j, k) {
    GestureEvent$$module$as3shim$flash$events$GestureEvent.__super__.constructor.call(this, a, b, c);
    this.phase = d;
    this.localX = e;
    this.localY = f;
    this.ctrlKey = g;
    this.altKey = h;
    this.shiftKey = i;
    this.commandKey = j;
    this.controlKey = k
  }
  setConst$$module$as3shim$flash$events$GestureEvent(GestureEvent$$module$as3shim$flash$events$GestureEvent, "gestureTwoFingerTap");
  function clone$$module$as3shim$flash$events$GestureEvent() {
    return new GestureEvent$$module$as3shim$flash$events$GestureEvent(this.type, this.bubbles, this.cancelable, this.phase, this.localX, this.localY, this.ctrlKey, this.altKey, this.shiftKey, this.commandKey, this.controlKey)
  }
  Class$$module$as3shim$flash$events$GestureEvent({constructor:GestureEvent$$module$as3shim$flash$events$GestureEvent, clone:clone$$module$as3shim$flash$events$GestureEvent, superClass:Event$$module$as3shim$flash$events$GestureEvent, updateAfterEvent:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"updateAfterEvent", returnType:"void"})});
  GestureEvent$$module$as3shim$flash$events$GestureEvent.prototype[tools$$module$as3shim$flash$events$GestureEvent.expando] = {toStringProperties:"type,bubbles,cancelable,phase,localX,localY,ctrlKey,altKey,shiftKey,commandKey,controlKey".split(",")};
  var proto$$module$as3shim$flash$events$GestureEvent = GestureEvent$$module$as3shim$flash$events$GestureEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "altKey", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"altKey", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$GestureEvent});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "ctrlKey", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"ctrlKey", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$GestureEvent});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "localX", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"localX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$GestureEvent});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "localY", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"localY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$GestureEvent});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "phase", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"phase", returnType:"String"}), set:noop$$module$as3shim$flash$events$GestureEvent});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "shiftKey", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"shiftKey", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$GestureEvent});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "stageX", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"stageX", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$events$GestureEvent(proto$$module$as3shim$flash$events$GestureEvent, "stageY", {get:createDummyFunction$$module$as3shim$flash$events$GestureEvent({name:"stageY", returnType:"Number"})});
  module$as3shim$flash$events$GestureEvent.module$exports = GestureEvent$$module$as3shim$flash$events$GestureEvent;
  module$as3shim$flash$events$GestureEvent.module$exports && (module$as3shim$flash$events$GestureEvent = module$as3shim$flash$events$GestureEvent.module$exports);
  var module$as3shim$flash$events$HTTPStatusEvent = {}, tools$$module$as3shim$flash$events$HTTPStatusEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$HTTPStatusEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$HTTPStatusEvent = module$as3shim$flash$events$Event;
  function HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent(a, b, c, d) {
    Event$$module$as3shim$flash$events$HTTPStatusEvent.prototype.constructor.call(this, a, b, c);
    this.status = d || 0;
    this.responseURL = "";
    this.responseHeaders = []
  }
  tools$$module$as3shim$flash$events$HTTPStatusEvent.setConst(HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent, "httpResponseStatus");
  tools$$module$as3shim$flash$events$HTTPStatusEvent.setConst(HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent, "httpStatus");
  function clone$$module$as3shim$flash$events$HTTPStatusEvent() {
    return new HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent(this.type, this.bubbles, this.cancelable, this.status)
  }
  Class$$module$as3shim$flash$events$HTTPStatusEvent({constructor:HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent, clone:clone$$module$as3shim$flash$events$HTTPStatusEvent, superClass:Event$$module$as3shim$flash$events$HTTPStatusEvent});
  HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent.prototype[tools$$module$as3shim$flash$events$HTTPStatusEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "status"]};
  module$as3shim$flash$events$HTTPStatusEvent.module$exports = HTTPStatusEvent$$module$as3shim$flash$events$HTTPStatusEvent;
  module$as3shim$flash$events$HTTPStatusEvent.module$exports && (module$as3shim$flash$events$HTTPStatusEvent = module$as3shim$flash$events$HTTPStatusEvent.module$exports);
  var module$as3shim$flash$events$KeyboardEvent = {}, tools$$module$as3shim$flash$events$KeyboardEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$KeyboardEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$KeyboardEvent = module$as3shim$flash$events$Event, setConst$$module$as3shim$flash$events$KeyboardEvent = tools$$module$as3shim$flash$events$KeyboardEvent.setConst;
  function KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent(a, b, c, d, e, f, g, h, i, j, k) {
    Event$$module$as3shim$flash$events$KeyboardEvent.prototype.constructor.call(this, a, b, c);
    this.charCode = d || 0;
    this.keyCode = e || 0;
    this.keyLocation = f || 0;
    this.ctrlKey = g || !1;
    this.altKey = h || !1;
    this.shiftKey = i || !1;
    this.controlKey = j || !1;
    this.commandKey = k || !1
  }
  function clone$$module$as3shim$flash$events$KeyboardEvent() {
    return new KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent(this.type, this.bubbles, this.cancelable, this.charCode, this.keyCode, this.keyLocation, this.ctrlKey, this.altKey, this.shiftKey, this.controlKey, this.commandKey)
  }
  function updateAfterEvent$$module$as3shim$flash$events$KeyboardEvent() {
  }
  setConst$$module$as3shim$flash$events$KeyboardEvent(KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent, "keyDown");
  setConst$$module$as3shim$flash$events$KeyboardEvent(KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent, "keyUp");
  Class$$module$as3shim$flash$events$KeyboardEvent({constructor:KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent, clone:clone$$module$as3shim$flash$events$KeyboardEvent, superClass:Event$$module$as3shim$flash$events$KeyboardEvent, updateAfterEvent:updateAfterEvent$$module$as3shim$flash$events$KeyboardEvent});
  KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent.prototype[tools$$module$as3shim$flash$events$KeyboardEvent.expando] = {toStringProperties:"type,bubbles,cancelable,charCode,keyCode,keyLocation,ctrlKey,altKey,shiftKey,controlKey,commandKey".split(",")};
  module$as3shim$flash$events$KeyboardEvent.module$exports = KeyboardEvent$$module$as3shim$flash$events$KeyboardEvent;
  module$as3shim$flash$events$KeyboardEvent.module$exports && (module$as3shim$flash$events$KeyboardEvent = module$as3shim$flash$events$KeyboardEvent.module$exports);
  var module$as3shim$flash$events$MouseEvent = {}, tools$$module$as3shim$flash$events$MouseEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$MouseEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$MouseEvent = module$as3shim$flash$events$Event, constNames$$module$as3shim$flash$events$MouseEvent = "click,contextMenu,doubleClick,middleClick,middleMouseDown,middleMouseUp,mouseDown,mouseMove,mouseOut,mouseOver,mouseUp,mouseWheel,rightClick,rightMouseDown,rightMouseUp,rollOut,rollOver".split(",");
  function MouseEvent$$module$as3shim$flash$events$MouseEvent(a, b, c, d, e, f, g, h, i, j, k) {
    Event$$module$as3shim$flash$events$MouseEvent.call(this, a, b, c);
    this.localX = d || Number.NaN;
    this.localY = e || Number.NaN;
    this.relatedObject = f || null;
    this.ctrlKey = g || !1;
    this.altKey = h || !1;
    this.shiftKey = i || !1;
    this.buttonDown = j || !1;
    this.delta = k || 0;
    this.isRelatedObjectInaccessible = !1;
    this.stageY = this.stageX = 0
  }
  function clone$$module$as3shim$flash$events$MouseEvent() {
    return new MouseEvent$$module$as3shim$flash$events$MouseEvent(this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey, this.shiftKey, this.buttonDown, this.delta)
  }
  function updateAfterEvent$$module$as3shim$flash$events$MouseEvent() {
  }
  Class$$module$as3shim$flash$events$MouseEvent({constructor:MouseEvent$$module$as3shim$flash$events$MouseEvent, superClass:Event$$module$as3shim$flash$events$MouseEvent, clone:clone$$module$as3shim$flash$events$MouseEvent, updateAfterEvent:updateAfterEvent$$module$as3shim$flash$events$MouseEvent});
  MouseEvent$$module$as3shim$flash$events$MouseEvent.prototype[tools$$module$as3shim$flash$events$MouseEvent.expando] = {toStringProperties:"type,bubbles,cancelable,eventPhase,localX,localY,stageX,stageY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta".split(",")};
  tools$$module$as3shim$flash$events$MouseEvent.forEach(constNames$$module$as3shim$flash$events$MouseEvent, function(a) {
    tools$$module$as3shim$flash$events$MouseEvent.setConst(MouseEvent$$module$as3shim$flash$events$MouseEvent, a)
  });
  module$as3shim$flash$events$MouseEvent.module$exports = MouseEvent$$module$as3shim$flash$events$MouseEvent;
  module$as3shim$flash$events$MouseEvent.module$exports && (module$as3shim$flash$events$MouseEvent = module$as3shim$flash$events$MouseEvent.module$exports);
  var module$as3shim$flash$events$NetStatusEvent = {}, tools$$module$as3shim$flash$events$NetStatusEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$NetStatusEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$NetStatusEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$NetStatusEvent = tools$$module$as3shim$flash$events$NetStatusEvent.createDummyFunction, noop$$module$as3shim$flash$events$NetStatusEvent = tools$$module$as3shim$flash$events$NetStatusEvent.noop, 
  setConst$$module$as3shim$flash$events$NetStatusEvent = tools$$module$as3shim$flash$events$NetStatusEvent.setConst, setDescriptor$$module$as3shim$flash$events$NetStatusEvent = tools$$module$as3shim$flash$events$NetStatusEvent.setDescriptor;
  function NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent(a, b, c, d) {
    NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent.__super__.constructor.call(this, a, b, c);
    this.info = d
  }
  setConst$$module$as3shim$flash$events$NetStatusEvent(NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent, "netStatus");
  function clone$$module$as3shim$flash$events$NetStatusEvent() {
    return new NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent(this.type, this.bubbles, this.cancelable, this.info)
  }
  Class$$module$as3shim$flash$events$NetStatusEvent({constructor:NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent, clone:clone$$module$as3shim$flash$events$NetStatusEvent, superClass:Event$$module$as3shim$flash$events$NetStatusEvent});
  NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent.prototype[tools$$module$as3shim$flash$events$NetStatusEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "info"]};
  setDescriptor$$module$as3shim$flash$events$NetStatusEvent(NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent.prototype, "info", {get:createDummyFunction$$module$as3shim$flash$events$NetStatusEvent({name:"info", returnType:"Object"}), set:noop$$module$as3shim$flash$events$NetStatusEvent});
  module$as3shim$flash$events$NetStatusEvent.module$exports = NetStatusEvent$$module$as3shim$flash$events$NetStatusEvent;
  module$as3shim$flash$events$NetStatusEvent.module$exports && (module$as3shim$flash$events$NetStatusEvent = module$as3shim$flash$events$NetStatusEvent.module$exports);
  var module$as3shim$flash$events$PressAndTapGestureEvent = {}, tools$$module$as3shim$flash$events$PressAndTapGestureEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$PressAndTapGestureEvent = module$as3shim$Class, GestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent = module$as3shim$flash$events$GestureEvent, createDummyFunction$$module$as3shim$flash$events$PressAndTapGestureEvent = tools$$module$as3shim$flash$events$PressAndTapGestureEvent.createDummyFunction, noop$$module$as3shim$flash$events$PressAndTapGestureEvent = 
  tools$$module$as3shim$flash$events$PressAndTapGestureEvent.noop, setConst$$module$as3shim$flash$events$PressAndTapGestureEvent = tools$$module$as3shim$flash$events$PressAndTapGestureEvent.setConst, setDescriptor$$module$as3shim$flash$events$PressAndTapGestureEvent = tools$$module$as3shim$flash$events$PressAndTapGestureEvent.setDescriptor;
  function PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent.__super__.constructor.call(this, a, b, c, d, e, f, i, j, k, l, m);
    this.tapLocalX = g;
    this.tapLocalY = h
  }
  setConst$$module$as3shim$flash$events$PressAndTapGestureEvent(PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent, "gesturePressAndTap");
  function clone$$module$as3shim$flash$events$PressAndTapGestureEvent() {
    return new PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent(this.type, this.bubbles, this.cancelable, this.phase, this.localX, this.localY, this.tapLocalX = tapLocalX, this.tapLocalY = tapLocalY, this.ctrlKey, this.altKey, this.shiftKey, this.commandKey, this.controlKey)
  }
  Class$$module$as3shim$flash$events$PressAndTapGestureEvent({constructor:PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent, clone:clone$$module$as3shim$flash$events$PressAndTapGestureEvent, superClass:GestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent});
  PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent.prototype[tools$$module$as3shim$flash$events$PressAndTapGestureEvent.expando] = {toStringProperties:"type,bubbles,cancelable,phase,localX,localY,tapLocalX,tapLocalY,ctrlKey,altKey,shiftKey,commandKey,controlKey".split(",")};
  var proto$$module$as3shim$flash$events$PressAndTapGestureEvent = PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$PressAndTapGestureEvent(proto$$module$as3shim$flash$events$PressAndTapGestureEvent, "tapLocalX", {get:createDummyFunction$$module$as3shim$flash$events$PressAndTapGestureEvent({name:"tapLocalX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$PressAndTapGestureEvent});
  setDescriptor$$module$as3shim$flash$events$PressAndTapGestureEvent(proto$$module$as3shim$flash$events$PressAndTapGestureEvent, "tapLocalY", {get:createDummyFunction$$module$as3shim$flash$events$PressAndTapGestureEvent({name:"tapLocalY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$PressAndTapGestureEvent});
  setDescriptor$$module$as3shim$flash$events$PressAndTapGestureEvent(proto$$module$as3shim$flash$events$PressAndTapGestureEvent, "tapStageX", {get:createDummyFunction$$module$as3shim$flash$events$PressAndTapGestureEvent({name:"tapStageX", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$events$PressAndTapGestureEvent(proto$$module$as3shim$flash$events$PressAndTapGestureEvent, "tapStageY", {get:createDummyFunction$$module$as3shim$flash$events$PressAndTapGestureEvent({name:"tapStageY", returnType:"Number"})});
  module$as3shim$flash$events$PressAndTapGestureEvent.module$exports = PressAndTapGestureEvent$$module$as3shim$flash$events$PressAndTapGestureEvent;
  module$as3shim$flash$events$PressAndTapGestureEvent.module$exports && (module$as3shim$flash$events$PressAndTapGestureEvent = module$as3shim$flash$events$PressAndTapGestureEvent.module$exports);
  var module$as3shim$flash$events$ProgressEvent = {}, tools$$module$as3shim$flash$events$ProgressEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$ProgressEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$ProgressEvent = module$as3shim$flash$events$Event, setConst$$module$as3shim$flash$events$ProgressEvent = tools$$module$as3shim$flash$events$ProgressEvent.setConst;
  function ProgressEvent$$module$as3shim$flash$events$ProgressEvent(a, b, c, d, e) {
    Event$$module$as3shim$flash$events$ProgressEvent.call(this, a, b, c);
    this.bytesLoaded = d || 0;
    this.bytesTotal = e || 0
  }
  setConst$$module$as3shim$flash$events$ProgressEvent(ProgressEvent$$module$as3shim$flash$events$ProgressEvent, "progress");
  setConst$$module$as3shim$flash$events$ProgressEvent(ProgressEvent$$module$as3shim$flash$events$ProgressEvent, "socketData");
  setConst$$module$as3shim$flash$events$ProgressEvent(ProgressEvent$$module$as3shim$flash$events$ProgressEvent, "standardErrorData");
  setConst$$module$as3shim$flash$events$ProgressEvent(ProgressEvent$$module$as3shim$flash$events$ProgressEvent, "standardInputProgress");
  setConst$$module$as3shim$flash$events$ProgressEvent(ProgressEvent$$module$as3shim$flash$events$ProgressEvent, "standardOutputData");
  function clone$$module$as3shim$flash$events$ProgressEvent() {
    return new ProgressEvent$$module$as3shim$flash$events$ProgressEvent(this.type, this.bubbles, this.cancelable, this.bytesLoaded, this.bytesTotal)
  }
  Class$$module$as3shim$flash$events$ProgressEvent({constructor:ProgressEvent$$module$as3shim$flash$events$ProgressEvent, superClass:Event$$module$as3shim$flash$events$ProgressEvent, clone:clone$$module$as3shim$flash$events$ProgressEvent});
  ProgressEvent$$module$as3shim$flash$events$ProgressEvent.prototype[tools$$module$as3shim$flash$events$ProgressEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "bytesLoaded", "bytesTotal"]};
  module$as3shim$flash$events$ProgressEvent.module$exports = ProgressEvent$$module$as3shim$flash$events$ProgressEvent;
  module$as3shim$flash$events$ProgressEvent.module$exports && (module$as3shim$flash$events$ProgressEvent = module$as3shim$flash$events$ProgressEvent.module$exports);
  var module$as3shim$flash$events$SampleDataEvent = {}, tools$$module$as3shim$flash$events$SampleDataEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$SampleDataEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$SampleDataEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$SampleDataEvent = tools$$module$as3shim$flash$events$SampleDataEvent.createDummyFunction, noop$$module$as3shim$flash$events$SampleDataEvent = tools$$module$as3shim$flash$events$SampleDataEvent.noop, 
  setConst$$module$as3shim$flash$events$SampleDataEvent = tools$$module$as3shim$flash$events$SampleDataEvent.setConst, setDescriptor$$module$as3shim$flash$events$SampleDataEvent = tools$$module$as3shim$flash$events$SampleDataEvent.setDescriptor;
  function SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent(a, b, c, d, e) {
    SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent.__super__.constructor.call(this, a, b, c);
    this.data = e;
    this.position = d
  }
  setConst$$module$as3shim$flash$events$SampleDataEvent(SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent, "sampleData");
  function clone$$module$as3shim$flash$events$SampleDataEvent() {
    return new SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent(this.type, this.bubbles, this.cancelable, this.position, this.data)
  }
  Class$$module$as3shim$flash$events$SampleDataEvent({constructor:SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent, clone:clone$$module$as3shim$flash$events$SampleDataEvent, superClass:Event$$module$as3shim$flash$events$SampleDataEvent});
  SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent.prototype[tools$$module$as3shim$flash$events$SampleDataEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "position", "data"]};
  var proto$$module$as3shim$flash$events$SampleDataEvent = SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$SampleDataEvent(proto$$module$as3shim$flash$events$SampleDataEvent, "data", {get:createDummyFunction$$module$as3shim$flash$events$SampleDataEvent({name:"data", returnType:""}), set:noop$$module$as3shim$flash$events$SampleDataEvent});
  setDescriptor$$module$as3shim$flash$events$SampleDataEvent(proto$$module$as3shim$flash$events$SampleDataEvent, "position", {get:createDummyFunction$$module$as3shim$flash$events$SampleDataEvent({name:"position", returnType:"Number"}), set:noop$$module$as3shim$flash$events$SampleDataEvent});
  module$as3shim$flash$events$SampleDataEvent.module$exports = SampleDataEvent$$module$as3shim$flash$events$SampleDataEvent;
  module$as3shim$flash$events$SampleDataEvent.module$exports && (module$as3shim$flash$events$SampleDataEvent = module$as3shim$flash$events$SampleDataEvent.module$exports);
  var module$as3shim$flash$events$ShaderEvent = {}, tools$$module$as3shim$flash$events$ShaderEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$ShaderEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$ShaderEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$ShaderEvent = tools$$module$as3shim$flash$events$ShaderEvent.createDummyFunction, setAccessor$$module$as3shim$flash$events$ShaderEvent = tools$$module$as3shim$flash$events$ShaderEvent.setAccessor, 
  setConst$$module$as3shim$flash$events$ShaderEvent = tools$$module$as3shim$flash$events$ShaderEvent.setConst;
  function ShaderEvent$$module$as3shim$flash$events$ShaderEvent(a, b, c) {
    ShaderEvent$$module$as3shim$flash$events$ShaderEvent.__super__.constructor.call(this, a, b, c);
    setAccessor$$module$as3shim$flash$events$ShaderEvent(this, "bitmapData", {get:createDummyFunction$$module$as3shim$flash$events$ShaderEvent({name:"bitmapData", returnType:""})});
    setAccessor$$module$as3shim$flash$events$ShaderEvent(this, "byteArray", {get:createDummyFunction$$module$as3shim$flash$events$ShaderEvent({name:"byteArray", returnType:""})});
    setAccessor$$module$as3shim$flash$events$ShaderEvent(this, "vector", {get:createDummyFunction$$module$as3shim$flash$events$ShaderEvent({name:"vector", returnType:""})})
  }
  setConst$$module$as3shim$flash$events$ShaderEvent(ShaderEvent$$module$as3shim$flash$events$ShaderEvent, "complete");
  function clone$$module$as3shim$flash$events$ShaderEvent() {
    return new ShaderEvent$$module$as3shim$flash$events$ShaderEvent(this.type, this.bubbles, this.cancelable, this.bitmapData, this.byteArray, this.vector)
  }
  Class$$module$as3shim$flash$events$ShaderEvent({constructor:ShaderEvent$$module$as3shim$flash$events$ShaderEvent, clone:clone$$module$as3shim$flash$events$ShaderEvent, superClass:Event$$module$as3shim$flash$events$ShaderEvent});
  ShaderEvent$$module$as3shim$flash$events$ShaderEvent.prototype[tools$$module$as3shim$flash$events$ShaderEvent.expando] = {toStringProperties:"type,bubbles,cancelable,bitmapData,byteArray,vector".split(",")};
  module$as3shim$flash$events$ShaderEvent.module$exports = ShaderEvent$$module$as3shim$flash$events$ShaderEvent;
  module$as3shim$flash$events$ShaderEvent.module$exports && (module$as3shim$flash$events$ShaderEvent = module$as3shim$flash$events$ShaderEvent.module$exports);
  var module$as3shim$flash$events$SoftKeyboardEvent = {}, tools$$module$as3shim$flash$events$SoftKeyboardEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$SoftKeyboardEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$SoftKeyboardEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$SoftKeyboardEvent = tools$$module$as3shim$flash$events$SoftKeyboardEvent.createDummyFunction, noop$$module$as3shim$flash$events$SoftKeyboardEvent = tools$$module$as3shim$flash$events$SoftKeyboardEvent.noop, 
  setConst$$module$as3shim$flash$events$SoftKeyboardEvent = tools$$module$as3shim$flash$events$SoftKeyboardEvent.setConst, setDescriptor$$module$as3shim$flash$events$SoftKeyboardEvent = tools$$module$as3shim$flash$events$SoftKeyboardEvent.setDescriptor;
  function SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent(a, b, c, d, e) {
    SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent.__super__.constructor.call(this, a, b, c);
    this.relatedObjectVal = d;
    this.triggerTypeVal = e
  }
  setConst$$module$as3shim$flash$events$SoftKeyboardEvent(SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent, "softKeyboardActivate");
  setConst$$module$as3shim$flash$events$SoftKeyboardEvent(SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent, "softKeyboardActivating");
  setConst$$module$as3shim$flash$events$SoftKeyboardEvent(SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent, "softKeyboardDeactivate");
  function clone$$module$as3shim$flash$events$SoftKeyboardEvent() {
    return new SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent(this.type, this.bubbles, this.cancelable, this.relatedObjectVal, this.triggerTypeVal)
  }
  Class$$module$as3shim$flash$events$SoftKeyboardEvent({constructor:SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent, clone:clone$$module$as3shim$flash$events$SoftKeyboardEvent, superClass:Event$$module$as3shim$flash$events$SoftKeyboardEvent});
  SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent.prototype[tools$$module$as3shim$flash$events$SoftKeyboardEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "relatedObjectVal", "triggerTypeVal"]};
  var proto$$module$as3shim$flash$events$SoftKeyboardEvent = SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$SoftKeyboardEvent(proto$$module$as3shim$flash$events$SoftKeyboardEvent, "relatedObject", {get:createDummyFunction$$module$as3shim$flash$events$SoftKeyboardEvent({name:"relatedObject", returnType:""}), set:noop$$module$as3shim$flash$events$SoftKeyboardEvent});
  setDescriptor$$module$as3shim$flash$events$SoftKeyboardEvent(proto$$module$as3shim$flash$events$SoftKeyboardEvent, "triggerType", {get:createDummyFunction$$module$as3shim$flash$events$SoftKeyboardEvent({name:"triggerType", returnType:"String"})});
  module$as3shim$flash$events$SoftKeyboardEvent.module$exports = SoftKeyboardEvent$$module$as3shim$flash$events$SoftKeyboardEvent;
  module$as3shim$flash$events$SoftKeyboardEvent.module$exports && (module$as3shim$flash$events$SoftKeyboardEvent = module$as3shim$flash$events$SoftKeyboardEvent.module$exports);
  var module$as3shim$flash$events$StageVideoAvailabilityEvent = {}, tools$$module$as3shim$flash$events$StageVideoAvailabilityEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$StageVideoAvailabilityEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$StageVideoAvailabilityEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$StageVideoAvailabilityEvent = tools$$module$as3shim$flash$events$StageVideoAvailabilityEvent.createDummyFunction, 
  noop$$module$as3shim$flash$events$StageVideoAvailabilityEvent = tools$$module$as3shim$flash$events$StageVideoAvailabilityEvent.noop, setConst$$module$as3shim$flash$events$StageVideoAvailabilityEvent = tools$$module$as3shim$flash$events$StageVideoAvailabilityEvent.setConst, setDescriptor$$module$as3shim$flash$events$StageVideoAvailabilityEvent = tools$$module$as3shim$flash$events$StageVideoAvailabilityEvent.setDescriptor;
  function StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent(a, b, c, d) {
    StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent.__super__.constructor.call(this, a, b, c);
    this.status = d
  }
  setConst$$module$as3shim$flash$events$StageVideoAvailabilityEvent(StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent, "stageVideoAvailability");
  function clone$$module$as3shim$flash$events$StageVideoAvailabilityEvent() {
    return new StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent(this.type, this.bubbles, this.cancelable, this.status)
  }
  Class$$module$as3shim$flash$events$StageVideoAvailabilityEvent({constructor:StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent, clone:clone$$module$as3shim$flash$events$StageVideoAvailabilityEvent, superClass:Event$$module$as3shim$flash$events$StageVideoAvailabilityEvent});
  StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent.prototype[tools$$module$as3shim$flash$events$StageVideoAvailabilityEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "status"]};
  setDescriptor$$module$as3shim$flash$events$StageVideoAvailabilityEvent(StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent.prototype, "status", {get:createDummyFunction$$module$as3shim$flash$events$StageVideoAvailabilityEvent({name:"status", returnType:"String"})});
  module$as3shim$flash$events$StageVideoAvailabilityEvent.module$exports = StageVideoAvailabilityEvent$$module$as3shim$flash$events$StageVideoAvailabilityEvent;
  module$as3shim$flash$events$StageVideoAvailabilityEvent.module$exports && (module$as3shim$flash$events$StageVideoAvailabilityEvent = module$as3shim$flash$events$StageVideoAvailabilityEvent.module$exports);
  var module$as3shim$flash$events$StageVideoEvent = {}, tools$$module$as3shim$flash$events$StageVideoEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$StageVideoEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$StageVideoEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$StageVideoEvent = tools$$module$as3shim$flash$events$StageVideoEvent.createDummyFunction, setConst$$module$as3shim$flash$events$StageVideoEvent = tools$$module$as3shim$flash$events$StageVideoEvent.setConst, 
  setDescriptor$$module$as3shim$flash$events$StageVideoEvent = tools$$module$as3shim$flash$events$StageVideoEvent.setDescriptor;
  function StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent(a, b, c, d, e) {
    StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent.__super__.constructor.call(this, a, b, c);
    this.status = d;
    this.colorSpace = e
  }
  setConst$$module$as3shim$flash$events$StageVideoEvent(StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent, "renderState");
  setConst$$module$as3shim$flash$events$StageVideoEvent(StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent, "RENDER_STATUS_ACCELERATED", "accelerated");
  setConst$$module$as3shim$flash$events$StageVideoEvent(StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent, "RENDER_STATUS_SOFTWARE", "software");
  setConst$$module$as3shim$flash$events$StageVideoEvent(StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent, "RENDER_STATUS_UNAVAILABLE", "unavailable");
  function clone$$module$as3shim$flash$events$StageVideoEvent() {
    return new StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent(this.type, this.bubbles, this.cancelable, this.status, this.colorSpace)
  }
  Class$$module$as3shim$flash$events$StageVideoEvent({constructor:StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent, clone:clone$$module$as3shim$flash$events$StageVideoEvent, superClass:Event$$module$as3shim$flash$events$StageVideoEvent});
  StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent.prototype[tools$$module$as3shim$flash$events$StageVideoEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "status", "colorSpace"]};
  var proto$$module$as3shim$flash$events$StageVideoEvent = StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$StageVideoEvent(proto$$module$as3shim$flash$events$StageVideoEvent, "colorSpace", {get:createDummyFunction$$module$as3shim$flash$events$StageVideoEvent({name:"colorSpace", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$events$StageVideoEvent(proto$$module$as3shim$flash$events$StageVideoEvent, "status", {get:createDummyFunction$$module$as3shim$flash$events$StageVideoEvent({name:"status", returnType:"String"})});
  module$as3shim$flash$events$StageVideoEvent.module$exports = StageVideoEvent$$module$as3shim$flash$events$StageVideoEvent;
  module$as3shim$flash$events$StageVideoEvent.module$exports && (module$as3shim$flash$events$StageVideoEvent = module$as3shim$flash$events$StageVideoEvent.module$exports);
  var module$as3shim$flash$events$StatusEvent = {}, tools$$module$as3shim$flash$events$StatusEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$StatusEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$StatusEvent = module$as3shim$flash$events$Event, setConst$$module$as3shim$flash$events$StatusEvent = tools$$module$as3shim$flash$events$StatusEvent.setConst;
  function StatusEvent$$module$as3shim$flash$events$StatusEvent(a, b, c, d, e) {
    Event$$module$as3shim$flash$events$StatusEvent.prototype.constructor.call(this, a, b, c);
    this.code = d || "";
    this.level = e || ""
  }
  function clone$$module$as3shim$flash$events$StatusEvent() {
    return new StatusEvent$$module$as3shim$flash$events$StatusEvent(this.type, this.bubbles, this.cancelable, this.code, this.level)
  }
  setConst$$module$as3shim$flash$events$StatusEvent(StatusEvent$$module$as3shim$flash$events$StatusEvent, "status");
  Class$$module$as3shim$flash$events$StatusEvent({constructor:StatusEvent$$module$as3shim$flash$events$StatusEvent, clone:clone$$module$as3shim$flash$events$StatusEvent, superClass:Event$$module$as3shim$flash$events$StatusEvent});
  StatusEvent$$module$as3shim$flash$events$StatusEvent.prototype[tools$$module$as3shim$flash$events$StatusEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "code", "level"]};
  module$as3shim$flash$events$StatusEvent.module$exports = StatusEvent$$module$as3shim$flash$events$StatusEvent;
  module$as3shim$flash$events$StatusEvent.module$exports && (module$as3shim$flash$events$StatusEvent = module$as3shim$flash$events$StatusEvent.module$exports);
  var module$as3shim$flash$events$SyncEvent = {}, tools$$module$as3shim$flash$events$SyncEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$SyncEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$SyncEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$SyncEvent = tools$$module$as3shim$flash$events$SyncEvent.createDummyFunction, noop$$module$as3shim$flash$events$SyncEvent = tools$$module$as3shim$flash$events$SyncEvent.noop, setConst$$module$as3shim$flash$events$SyncEvent = 
  tools$$module$as3shim$flash$events$SyncEvent.setConst, setDescriptor$$module$as3shim$flash$events$SyncEvent = tools$$module$as3shim$flash$events$SyncEvent.setDescriptor;
  function SyncEvent$$module$as3shim$flash$events$SyncEvent(a, b, c, d) {
    SyncEvent$$module$as3shim$flash$events$SyncEvent.__super__.constructor.call(this, a, b, c);
    this.changeList = d
  }
  setConst$$module$as3shim$flash$events$SyncEvent(SyncEvent$$module$as3shim$flash$events$SyncEvent, "sync");
  function clone$$module$as3shim$flash$events$SyncEvent() {
    return new SyncEvent$$module$as3shim$flash$events$SyncEvent(this.type, this.bubbles, this.cancelable, this.changeList)
  }
  Class$$module$as3shim$flash$events$SyncEvent({constructor:SyncEvent$$module$as3shim$flash$events$SyncEvent, clone:clone$$module$as3shim$flash$events$SyncEvent, superClass:Event$$module$as3shim$flash$events$SyncEvent});
  SyncEvent$$module$as3shim$flash$events$SyncEvent.prototype[tools$$module$as3shim$flash$events$SyncEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "changeList"]};
  setDescriptor$$module$as3shim$flash$events$SyncEvent(SyncEvent$$module$as3shim$flash$events$SyncEvent.prototype, "changeList", {get:createDummyFunction$$module$as3shim$flash$events$SyncEvent({name:"changeList", returnType:"Array"}), set:noop$$module$as3shim$flash$events$SyncEvent});
  module$as3shim$flash$events$SyncEvent.module$exports = SyncEvent$$module$as3shim$flash$events$SyncEvent;
  module$as3shim$flash$events$SyncEvent.module$exports && (module$as3shim$flash$events$SyncEvent = module$as3shim$flash$events$SyncEvent.module$exports);
  var module$as3shim$flash$events$TextEvent = {}, tools$$module$as3shim$flash$events$TextEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$TextEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$TextEvent = module$as3shim$flash$events$Event, setConst$$module$as3shim$flash$events$TextEvent = tools$$module$as3shim$flash$events$TextEvent.setConst;
  function TextEvent$$module$as3shim$flash$events$TextEvent(a, b, c, d) {
    Event$$module$as3shim$flash$events$TextEvent.call(this, a, b, c);
    this.text = d || ""
  }
  function clone$$module$as3shim$flash$events$TextEvent() {
    return new TextEvent$$module$as3shim$flash$events$TextEvent(this.type, this.bubbles, this.cancelable, this.text)
  }
  setConst$$module$as3shim$flash$events$TextEvent(TextEvent$$module$as3shim$flash$events$TextEvent, "link");
  setConst$$module$as3shim$flash$events$TextEvent(TextEvent$$module$as3shim$flash$events$TextEvent, "textInput");
  Class$$module$as3shim$flash$events$TextEvent({constructor:TextEvent$$module$as3shim$flash$events$TextEvent, clone:clone$$module$as3shim$flash$events$TextEvent, superClass:Event$$module$as3shim$flash$events$TextEvent});
  TextEvent$$module$as3shim$flash$events$TextEvent.prototype[tools$$module$as3shim$flash$events$TextEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "eventPhase", "text"]};
  module$as3shim$flash$events$TextEvent.module$exports = TextEvent$$module$as3shim$flash$events$TextEvent;
  module$as3shim$flash$events$TextEvent.module$exports && (module$as3shim$flash$events$TextEvent = module$as3shim$flash$events$TextEvent.module$exports);
  var module$as3shim$flash$events$DataEvent = {}, tools$$module$as3shim$flash$events$DataEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$DataEvent = module$as3shim$Class, TextEvent$$module$as3shim$flash$events$DataEvent = module$as3shim$flash$events$TextEvent, createDummyFunction$$module$as3shim$flash$events$DataEvent = tools$$module$as3shim$flash$events$DataEvent.createDummyFunction, noop$$module$as3shim$flash$events$DataEvent = tools$$module$as3shim$flash$events$DataEvent.noop, 
  setConst$$module$as3shim$flash$events$DataEvent = tools$$module$as3shim$flash$events$DataEvent.setConst, setDescriptor$$module$as3shim$flash$events$DataEvent = tools$$module$as3shim$flash$events$DataEvent.setDescriptor;
  function DataEvent$$module$as3shim$flash$events$DataEvent(a, b, c, d) {
    DataEvent$$module$as3shim$flash$events$DataEvent.__super__.constructor.call(this, a, b, c);
    this.data = d
  }
  setConst$$module$as3shim$flash$events$DataEvent(DataEvent$$module$as3shim$flash$events$DataEvent, "data");
  setConst$$module$as3shim$flash$events$DataEvent(DataEvent$$module$as3shim$flash$events$DataEvent, "uploadCompleteData");
  function clone$$module$as3shim$flash$events$DataEvent() {
    return new DataEvent$$module$as3shim$flash$events$DataEvent(this.type, this.bubbles, this.cancelable, this.data)
  }
  Class$$module$as3shim$flash$events$DataEvent({constructor:DataEvent$$module$as3shim$flash$events$DataEvent, clone:clone$$module$as3shim$flash$events$DataEvent, superClass:TextEvent$$module$as3shim$flash$events$DataEvent});
  DataEvent$$module$as3shim$flash$events$DataEvent.prototype[tools$$module$as3shim$flash$events$DataEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "data"]};
  setDescriptor$$module$as3shim$flash$events$DataEvent(DataEvent$$module$as3shim$flash$events$DataEvent.prototype, "data", {get:createDummyFunction$$module$as3shim$flash$events$DataEvent({name:"data", returnType:"String"}), set:noop$$module$as3shim$flash$events$DataEvent});
  module$as3shim$flash$events$DataEvent.module$exports = DataEvent$$module$as3shim$flash$events$DataEvent;
  module$as3shim$flash$events$DataEvent.module$exports && (module$as3shim$flash$events$DataEvent = module$as3shim$flash$events$DataEvent.module$exports);
  var module$as3shim$flash$events$ErrorEvent = {}, tools$$module$as3shim$flash$events$ErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$ErrorEvent = module$as3shim$Class, TextEvent$$module$as3shim$flash$events$ErrorEvent = module$as3shim$flash$events$TextEvent, setConst$$module$as3shim$flash$events$ErrorEvent = tools$$module$as3shim$flash$events$ErrorEvent.setConst, setImmutable$$module$as3shim$flash$events$ErrorEvent = tools$$module$as3shim$flash$events$ErrorEvent.setImmutable;
  function ErrorEvent$$module$as3shim$flash$events$ErrorEvent(a, b, c, d, e) {
    TextEvent$$module$as3shim$flash$events$ErrorEvent.prototype.constructor.call(this, a, b, c, d);
    this.errorID = e || 0
  }
  setConst$$module$as3shim$flash$events$ErrorEvent(ErrorEvent$$module$as3shim$flash$events$ErrorEvent, "error");
  function clone$$module$as3shim$flash$events$ErrorEvent() {
    return new ErrorEvent$$module$as3shim$flash$events$ErrorEvent(this.type, this.bubbles, this.cancelable, this.text)
  }
  Class$$module$as3shim$flash$events$ErrorEvent({constructor:ErrorEvent$$module$as3shim$flash$events$ErrorEvent, clone:clone$$module$as3shim$flash$events$ErrorEvent, superClass:TextEvent$$module$as3shim$flash$events$ErrorEvent});
  ErrorEvent$$module$as3shim$flash$events$ErrorEvent.prototype[tools$$module$as3shim$flash$events$ErrorEvent.expando] = {toStringProperties:"type,bubbles,cancelable,eventPhase,text,errorID".split(",")};
  module$as3shim$flash$events$ErrorEvent.module$exports = ErrorEvent$$module$as3shim$flash$events$ErrorEvent;
  module$as3shim$flash$events$ErrorEvent.module$exports && (module$as3shim$flash$events$ErrorEvent = module$as3shim$flash$events$ErrorEvent.module$exports);
  var module$as3shim$flash$events$AsyncErrorEvent = {}, tools$$module$as3shim$flash$events$AsyncErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$AsyncErrorEvent = module$as3shim$Class, ErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent = module$as3shim$flash$events$ErrorEvent;
  function AsyncErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent(a, b, c, d, e) {
    ErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent.prototype.constructor.call(this, a, b, c, d);
    this.error = e || null
  }
  tools$$module$as3shim$flash$events$AsyncErrorEvent.setConst(AsyncErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent, "ASYNC_ERROR", "asyncError");
  function clone$$module$as3shim$flash$events$AsyncErrorEvent() {
    return new AsyncErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent(this.type, this.bubbles, this.cancelable, this.text, this.error)
  }
  Class$$module$as3shim$flash$events$AsyncErrorEvent({constructor:AsyncErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent, clone:clone$$module$as3shim$flash$events$AsyncErrorEvent, superClass:ErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent});
  AsyncErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent.prototype[tools$$module$as3shim$flash$events$AsyncErrorEvent.expando] = {toStringProperties:"type,bubbles,cancelable,eventPhase,text,error".split(",")};
  module$as3shim$flash$events$AsyncErrorEvent.module$exports = AsyncErrorEvent$$module$as3shim$flash$events$AsyncErrorEvent;
  module$as3shim$flash$events$AsyncErrorEvent.module$exports && (module$as3shim$flash$events$AsyncErrorEvent = module$as3shim$flash$events$AsyncErrorEvent.module$exports);
  var module$as3shim$flash$events$DRMAuthenticationErrorEvent = {}, tools$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = module$as3shim$Class, ErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = module$as3shim$flash$events$ErrorEvent, createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = tools$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.createDummyFunction, 
  noop$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = tools$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.noop, setConst$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = tools$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.setConst, setDescriptor$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = tools$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.setDescriptor;
  function DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent(a, b, c, d, e, f, g, h) {
    DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.__super__.constructor.call(this, a, b, c, d, e);
    this.subErrorID = f;
    this.serverURL = g;
    this.domain = h
  }
  setConst$$module$as3shim$flash$events$DRMAuthenticationErrorEvent(DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent, "authenticationError");
  function clone$$module$as3shim$flash$events$DRMAuthenticationErrorEvent() {
    return new DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent(this.type, this.bubbles, this.cancelable, this.subErrorID, this.serverURL, this.domain)
  }
  Class$$module$as3shim$flash$events$DRMAuthenticationErrorEvent({constructor:DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent, clone:clone$$module$as3shim$flash$events$DRMAuthenticationErrorEvent, superClass:ErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent});
  DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.prototype[tools$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.expando] = {toStringProperties:"type,bubbles,cancelable,subErrorID,serverURL,domain".split(",")};
  var proto$$module$as3shim$flash$events$DRMAuthenticationErrorEvent = DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$DRMAuthenticationErrorEvent(proto$$module$as3shim$flash$events$DRMAuthenticationErrorEvent, "domain", {get:createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationErrorEvent({name:"domain", returnType:"String"}), set:noop$$module$as3shim$flash$events$DRMAuthenticationErrorEvent});
  setDescriptor$$module$as3shim$flash$events$DRMAuthenticationErrorEvent(proto$$module$as3shim$flash$events$DRMAuthenticationErrorEvent, "serverURL", {get:createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationErrorEvent({name:"serverURL", returnType:"String"}), set:noop$$module$as3shim$flash$events$DRMAuthenticationErrorEvent});
  setDescriptor$$module$as3shim$flash$events$DRMAuthenticationErrorEvent(proto$$module$as3shim$flash$events$DRMAuthenticationErrorEvent, "subErrorID", {get:createDummyFunction$$module$as3shim$flash$events$DRMAuthenticationErrorEvent({name:"subErrorID", returnType:"int"}), set:noop$$module$as3shim$flash$events$DRMAuthenticationErrorEvent});
  module$as3shim$flash$events$DRMAuthenticationErrorEvent.module$exports = DRMAuthenticationErrorEvent$$module$as3shim$flash$events$DRMAuthenticationErrorEvent;
  module$as3shim$flash$events$DRMAuthenticationErrorEvent.module$exports && (module$as3shim$flash$events$DRMAuthenticationErrorEvent = module$as3shim$flash$events$DRMAuthenticationErrorEvent.module$exports);
  var module$as3shim$flash$events$DRMErrorEvent = {}, tools$$module$as3shim$flash$events$DRMErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$DRMErrorEvent = module$as3shim$Class, ErrorEvent$$module$as3shim$flash$events$DRMErrorEvent = module$as3shim$flash$events$ErrorEvent, createDummyFunction$$module$as3shim$flash$events$DRMErrorEvent = tools$$module$as3shim$flash$events$DRMErrorEvent.createDummyFunction, noop$$module$as3shim$flash$events$DRMErrorEvent = tools$$module$as3shim$flash$events$DRMErrorEvent.noop, 
  setConst$$module$as3shim$flash$events$DRMErrorEvent = tools$$module$as3shim$flash$events$DRMErrorEvent.setConst, setDescriptor$$module$as3shim$flash$events$DRMErrorEvent = tools$$module$as3shim$flash$events$DRMErrorEvent.setDescriptor;
  function DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent(a, b, c, d, e, f, g, h, i) {
    DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent.__super__.constructor.call(this, a, b, c, d, e);
    this.status = status;
    this.subErrorID = f;
    this.contentData = g;
    this.systemUpdatedNeeded = h;
    this.drmUpdateNeeded = i
  }
  setConst$$module$as3shim$flash$events$DRMErrorEvent(DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent, "drmError");
  setConst$$module$as3shim$flash$events$DRMErrorEvent(DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent, "DRM_LOAD_DEVICEID_ERROR", "drmLoadDeviceIdError");
  function clone$$module$as3shim$flash$events$DRMErrorEvent() {
    return new DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent(this.type, this.bubbles, this.cancelable, this.subErrorID, this.contentData, this.systemUpdatedNeeded, this.drmUpdateNeeded)
  }
  Class$$module$as3shim$flash$events$DRMErrorEvent({constructor:DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent, clone:clone$$module$as3shim$flash$events$DRMErrorEvent, superClass:ErrorEvent$$module$as3shim$flash$events$DRMErrorEvent});
  DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent.prototype[tools$$module$as3shim$flash$events$DRMErrorEvent.expando] = {toStringProperties:"type,bubbles,cancelable,subErrorID,contentData,systemUpdatedNeeded,drmUpdateNeeded".split(",")};
  var proto$$module$as3shim$flash$events$DRMErrorEvent = DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$DRMErrorEvent(proto$$module$as3shim$flash$events$DRMErrorEvent, "contentData", {get:createDummyFunction$$module$as3shim$flash$events$DRMErrorEvent({name:"contentData", returnType:""}), set:noop$$module$as3shim$flash$events$DRMErrorEvent});
  setDescriptor$$module$as3shim$flash$events$DRMErrorEvent(proto$$module$as3shim$flash$events$DRMErrorEvent, "drmUpdateNeeded", {get:createDummyFunction$$module$as3shim$flash$events$DRMErrorEvent({name:"drmUpdateNeeded", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$events$DRMErrorEvent(proto$$module$as3shim$flash$events$DRMErrorEvent, "subErrorID", {get:createDummyFunction$$module$as3shim$flash$events$DRMErrorEvent({name:"subErrorID", returnType:"int"})});
  setDescriptor$$module$as3shim$flash$events$DRMErrorEvent(proto$$module$as3shim$flash$events$DRMErrorEvent, "systemUpdateNeeded", {get:createDummyFunction$$module$as3shim$flash$events$DRMErrorEvent({name:"systemUpdateNeeded", returnType:"Boolean"})});
  module$as3shim$flash$events$DRMErrorEvent.module$exports = DRMErrorEvent$$module$as3shim$flash$events$DRMErrorEvent;
  module$as3shim$flash$events$DRMErrorEvent.module$exports && (module$as3shim$flash$events$DRMErrorEvent = module$as3shim$flash$events$DRMErrorEvent.module$exports);
  var module$as3shim$flash$events$IMEEvent = {}, tools$$module$as3shim$flash$events$IMEEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$IMEEvent = module$as3shim$Class, TextEvent$$module$as3shim$flash$events$IMEEvent = module$as3shim$flash$events$TextEvent, createDummyFunction$$module$as3shim$flash$events$IMEEvent = tools$$module$as3shim$flash$events$IMEEvent.createDummyFunction, noop$$module$as3shim$flash$events$IMEEvent = tools$$module$as3shim$flash$events$IMEEvent.noop, setConst$$module$as3shim$flash$events$IMEEvent = 
  tools$$module$as3shim$flash$events$IMEEvent.setConst, setDescriptor$$module$as3shim$flash$events$IMEEvent = tools$$module$as3shim$flash$events$IMEEvent.setDescriptor;
  function IMEEvent$$module$as3shim$flash$events$IMEEvent(a, b, c, d, e) {
    IMEEvent$$module$as3shim$flash$events$IMEEvent.__super__.constructor.call(this, a, b, c, d);
    this.imeClient = e
  }
  setConst$$module$as3shim$flash$events$IMEEvent(IMEEvent$$module$as3shim$flash$events$IMEEvent, "imeComposition");
  setConst$$module$as3shim$flash$events$IMEEvent(IMEEvent$$module$as3shim$flash$events$IMEEvent, "imeStartComposition");
  function clone$$module$as3shim$flash$events$IMEEvent() {
    return new IMEEvent$$module$as3shim$flash$events$IMEEvent(this.type, this.bubbles, this.cancelable, this.text, this.imeClient)
  }
  Class$$module$as3shim$flash$events$IMEEvent({constructor:IMEEvent$$module$as3shim$flash$events$IMEEvent, clone:clone$$module$as3shim$flash$events$IMEEvent, superClass:TextEvent$$module$as3shim$flash$events$IMEEvent});
  IMEEvent$$module$as3shim$flash$events$IMEEvent.prototype[tools$$module$as3shim$flash$events$IMEEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "text", "imeClient"]};
  setDescriptor$$module$as3shim$flash$events$IMEEvent(IMEEvent$$module$as3shim$flash$events$IMEEvent.prototype, "imeClient", {get:createDummyFunction$$module$as3shim$flash$events$IMEEvent({name:"imeClient", returnType:""}), set:noop$$module$as3shim$flash$events$IMEEvent});
  module$as3shim$flash$events$IMEEvent.module$exports = IMEEvent$$module$as3shim$flash$events$IMEEvent;
  module$as3shim$flash$events$IMEEvent.module$exports && (module$as3shim$flash$events$IMEEvent = module$as3shim$flash$events$IMEEvent.module$exports);
  var module$as3shim$flash$events$IOErrorEvent = {}, tools$$module$as3shim$flash$events$IOErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$IOErrorEvent = module$as3shim$Class, ErrorEvent$$module$as3shim$flash$events$IOErrorEvent = module$as3shim$flash$events$ErrorEvent, setConst$$module$as3shim$flash$events$IOErrorEvent = tools$$module$as3shim$flash$events$IOErrorEvent.setConst;
  function IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent(a, b, c, d, e) {
    IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent.__super__.constructor.call(this, a, b, c, d, e)
  }
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "diskError");
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "ioError");
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "networkError");
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "standardErrorIoError");
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "standardInputIoError");
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "standardOutputIoError");
  setConst$$module$as3shim$flash$events$IOErrorEvent(IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, "verifyError");
  function clone$$module$as3shim$flash$events$IOErrorEvent() {
    return new IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent(this.type, this.bubbles, this.cancelable, this.text, this.errorID)
  }
  Class$$module$as3shim$flash$events$IOErrorEvent({constructor:IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent, clone:clone$$module$as3shim$flash$events$IOErrorEvent, superClass:ErrorEvent$$module$as3shim$flash$events$IOErrorEvent});
  IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent.prototype[tools$$module$as3shim$flash$events$IOErrorEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "text", "errorID"]};
  module$as3shim$flash$events$IOErrorEvent.module$exports = IOErrorEvent$$module$as3shim$flash$events$IOErrorEvent;
  module$as3shim$flash$events$IOErrorEvent.module$exports && (module$as3shim$flash$events$IOErrorEvent = module$as3shim$flash$events$IOErrorEvent.module$exports);
  var module$as3shim$flash$events$SecurityErrorEvent = {}, tools$$module$as3shim$flash$events$SecurityErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$SecurityErrorEvent = module$as3shim$Class, ErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent = module$as3shim$flash$events$ErrorEvent, setConst$$module$as3shim$flash$events$SecurityErrorEvent = tools$$module$as3shim$flash$events$SecurityErrorEvent.setConst;
  function SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent(a, b, c, d, e) {
    SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent.__super__.constructor.call(this, a, b, d, e)
  }
  setConst$$module$as3shim$flash$events$SecurityErrorEvent(SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent, "securityError");
  function clone$$module$as3shim$flash$events$SecurityErrorEvent() {
    return new SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent(this.type, this.bubbles, this.cancelable, this.text, this.errorID)
  }
  Class$$module$as3shim$flash$events$SecurityErrorEvent({constructor:SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent, clone:clone$$module$as3shim$flash$events$SecurityErrorEvent, superClass:ErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent});
  SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent.prototype[tools$$module$as3shim$flash$events$SecurityErrorEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "text", "errorID"]};
  module$as3shim$flash$events$SecurityErrorEvent.module$exports = SecurityErrorEvent$$module$as3shim$flash$events$SecurityErrorEvent;
  module$as3shim$flash$events$SecurityErrorEvent.module$exports && (module$as3shim$flash$events$SecurityErrorEvent = module$as3shim$flash$events$SecurityErrorEvent.module$exports);
  var module$as3shim$flash$events$TimerEvent = {}, tools$$module$as3shim$flash$events$TimerEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$TimerEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$TimerEvent = module$as3shim$flash$events$Event, setConst$$module$as3shim$flash$events$TimerEvent = tools$$module$as3shim$flash$events$TimerEvent.setConst;
  function TimerEvent$$module$as3shim$flash$events$TimerEvent(a, b, c) {
    Event$$module$as3shim$flash$events$TimerEvent.prototype.constructor.call(this, a, b, c)
  }
  function clone$$module$as3shim$flash$events$TimerEvent() {
    return new TimerEvent$$module$as3shim$flash$events$TimerEvent(this.type, this.bubbles, this.cancelable)
  }
  function updateAfterEvent$$module$as3shim$flash$events$TimerEvent() {
  }
  setConst$$module$as3shim$flash$events$TimerEvent(TimerEvent$$module$as3shim$flash$events$TimerEvent, "timer");
  setConst$$module$as3shim$flash$events$TimerEvent(TimerEvent$$module$as3shim$flash$events$TimerEvent, "timerComplete");
  Class$$module$as3shim$flash$events$TimerEvent({constructor:TimerEvent$$module$as3shim$flash$events$TimerEvent, superClass:Event$$module$as3shim$flash$events$TimerEvent, clone:clone$$module$as3shim$flash$events$TimerEvent, updateAfterEvent:updateAfterEvent$$module$as3shim$flash$events$TimerEvent});
  TimerEvent$$module$as3shim$flash$events$TimerEvent.prototype[tools$$module$as3shim$flash$events$TimerEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable"]};
  module$as3shim$flash$events$TimerEvent.module$exports = TimerEvent$$module$as3shim$flash$events$TimerEvent;
  module$as3shim$flash$events$TimerEvent.module$exports && (module$as3shim$flash$events$TimerEvent = module$as3shim$flash$events$TimerEvent.module$exports);
  var module$as3shim$flash$events$TouchEvent = {}, tools$$module$as3shim$flash$events$TouchEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$TouchEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$TouchEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$TouchEvent = tools$$module$as3shim$flash$events$TouchEvent.createDummyFunction, noop$$module$as3shim$flash$events$TouchEvent = tools$$module$as3shim$flash$events$TouchEvent.noop, 
  setConst$$module$as3shim$flash$events$TouchEvent = tools$$module$as3shim$flash$events$TouchEvent.setConst, setDescriptor$$module$as3shim$flash$events$TouchEvent = tools$$module$as3shim$flash$events$TouchEvent.setDescriptor;
  function TouchEvent$$module$as3shim$flash$events$TouchEvent(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    TouchEvent$$module$as3shim$flash$events$TouchEvent.__super__.constructor.call(this, a, b, c);
    this.touchPointID = d;
    this.isPrimaryTouchPoint = e;
    this.localX = f;
    this.localY = g;
    this.sizeX = h;
    this.sizeY = i;
    this.pressure = j;
    this.relatedObject = k;
    this.ctrlKey = l;
    this.altKey = m;
    this.shiftKey = n;
    this.commandKey = o;
    this.controlKey = p;
    this.timestamp = q;
    this.touchIntent = r;
    this.samples = s;
    this.isTouchPointCanceled = t
  }
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchBegin");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchEnd");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchMove");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchOut");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchOver");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchRollOut");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchRollOver");
  setConst$$module$as3shim$flash$events$TouchEvent(TouchEvent$$module$as3shim$flash$events$TouchEvent, "touchTap");
  function clone$$module$as3shim$flash$events$TouchEvent() {
    return new TouchEvent$$module$as3shim$flash$events$TouchEvent(this.type, this.bubbles, this.cancelable, this.touchPointID, this.isPrimaryTouchPoint, this.localX, this.localY, this.sizeX, this.sizeY, this.pressure, this.relatedObject, this.ctrlKey, this.altKey, this.shiftKey, this.commandKey, this.controlKey, this.timestamp, this.touchIntent, this.samples, this.isTouchPointCanceled)
  }
  Class$$module$as3shim$flash$events$TouchEvent({constructor:TouchEvent$$module$as3shim$flash$events$TouchEvent, clone:clone$$module$as3shim$flash$events$TouchEvent, updateAfterEvent:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"updateAfterEvent", returnType:"void"}), superClass:Event$$module$as3shim$flash$events$TouchEvent});
  TouchEvent$$module$as3shim$flash$events$TouchEvent.prototype[tools$$module$as3shim$flash$events$TouchEvent.expando] = {toStringProperties:"type,bubbles,cancelable,touchPointID,isPrimaryTouchPoint,localX,localY,sizeX,sizeY,pressure,relatedObject,ctrlKey,altKey,shiftKey,commandKey,controlKey,timestamp,touchIntent,samples,isTouchPointCanceled".split(",")};
  var proto$$module$as3shim$flash$events$TouchEvent = TouchEvent$$module$as3shim$flash$events$TouchEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "altKey", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"altKey", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "ctrlKey", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"ctrlKey", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "isPrimaryTouchPoint", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"isPrimaryTouchPoint", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "isRelatedObjectInaccessible", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"isRelatedObjectInaccessible", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "localX", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"localX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "localY", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"localY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "pressure", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"pressure", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "relatedObject", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"relatedObject", returnType:""}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "shiftKey", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"shiftKey", returnType:"Boolean"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "sizeX", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"sizeX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "sizeY", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"sizeY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "stageX", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"stageX", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "stageY", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"stageY", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$events$TouchEvent(proto$$module$as3shim$flash$events$TouchEvent, "touchPointID", {get:createDummyFunction$$module$as3shim$flash$events$TouchEvent({name:"touchPointID", returnType:"int"}), set:noop$$module$as3shim$flash$events$TouchEvent});
  module$as3shim$flash$events$TouchEvent.module$exports = TouchEvent$$module$as3shim$flash$events$TouchEvent;
  module$as3shim$flash$events$TouchEvent.module$exports && (module$as3shim$flash$events$TouchEvent = module$as3shim$flash$events$TouchEvent.module$exports);
  var module$as3shim$flash$events$TransformGestureEvent = {}, tools$$module$as3shim$flash$events$TransformGestureEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$TransformGestureEvent = module$as3shim$Class, GestureEvent$$module$as3shim$flash$events$TransformGestureEvent = module$as3shim$flash$events$GestureEvent, createDummyFunction$$module$as3shim$flash$events$TransformGestureEvent = tools$$module$as3shim$flash$events$TransformGestureEvent.createDummyFunction, noop$$module$as3shim$flash$events$TransformGestureEvent = 
  tools$$module$as3shim$flash$events$TransformGestureEvent.noop, setConst$$module$as3shim$flash$events$TransformGestureEvent = tools$$module$as3shim$flash$events$TransformGestureEvent.setConst, setDescriptor$$module$as3shim$flash$events$TransformGestureEvent = tools$$module$as3shim$flash$events$TransformGestureEvent.setDescriptor;
  function TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent.__super__.constructor.call(this, a, b, c, d, e, f, l, m, n, o, p);
    this.phase = d;
    this.localX = e;
    this.localY = f;
    this.scaleX = g;
    this.scaleY = h;
    this.rotation = i;
    this.offsetX = j;
    this.offsetY = k;
    this.ctrlKey = l;
    this.altKey = m;
    this.shiftKey = n;
    this.commandKey = o;
    this.controlKey = p
  }
  setConst$$module$as3shim$flash$events$TransformGestureEvent(TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent, "gesturePan");
  setConst$$module$as3shim$flash$events$TransformGestureEvent(TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent, "gestureRotate");
  setConst$$module$as3shim$flash$events$TransformGestureEvent(TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent, "gestureSwipe");
  setConst$$module$as3shim$flash$events$TransformGestureEvent(TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent, "gestureZoom");
  function clone$$module$as3shim$flash$events$TransformGestureEvent() {
    return new TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent(this.type, this.bubbles, this.cancelable, this.phase, this.localX, this.localY, this.scaleX, this.scaleY, this.rotation, this.offsetX, this.offsetY, this.ctrlKey, this.altKey, this.shiftKey, this.commandKey, this.controlKey)
  }
  Class$$module$as3shim$flash$events$TransformGestureEvent({constructor:TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent, clone:clone$$module$as3shim$flash$events$TransformGestureEvent, superClass:GestureEvent$$module$as3shim$flash$events$TransformGestureEvent});
  TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent.prototype[tools$$module$as3shim$flash$events$TransformGestureEvent.expando] = {toStringProperties:"type,bubbles,cancelable,phase,localX,localY,scaleX,scaleY,rotation,offsetX,offsetY,ctrlKey,altKey,shiftKey,commandKey,controlKey".split(",")};
  var proto$$module$as3shim$flash$events$TransformGestureEvent = TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent.prototype;
  setDescriptor$$module$as3shim$flash$events$TransformGestureEvent(proto$$module$as3shim$flash$events$TransformGestureEvent, "offsetX", {get:createDummyFunction$$module$as3shim$flash$events$TransformGestureEvent({name:"offsetX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TransformGestureEvent});
  setDescriptor$$module$as3shim$flash$events$TransformGestureEvent(proto$$module$as3shim$flash$events$TransformGestureEvent, "offsetY", {get:createDummyFunction$$module$as3shim$flash$events$TransformGestureEvent({name:"offsetY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TransformGestureEvent});
  setDescriptor$$module$as3shim$flash$events$TransformGestureEvent(proto$$module$as3shim$flash$events$TransformGestureEvent, "rotation", {get:createDummyFunction$$module$as3shim$flash$events$TransformGestureEvent({name:"rotation", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TransformGestureEvent});
  setDescriptor$$module$as3shim$flash$events$TransformGestureEvent(proto$$module$as3shim$flash$events$TransformGestureEvent, "scaleX", {get:createDummyFunction$$module$as3shim$flash$events$TransformGestureEvent({name:"scaleX", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TransformGestureEvent});
  setDescriptor$$module$as3shim$flash$events$TransformGestureEvent(proto$$module$as3shim$flash$events$TransformGestureEvent, "scaleY", {get:createDummyFunction$$module$as3shim$flash$events$TransformGestureEvent({name:"scaleY", returnType:"Number"}), set:noop$$module$as3shim$flash$events$TransformGestureEvent});
  module$as3shim$flash$events$TransformGestureEvent.module$exports = TransformGestureEvent$$module$as3shim$flash$events$TransformGestureEvent;
  module$as3shim$flash$events$TransformGestureEvent.module$exports && (module$as3shim$flash$events$TransformGestureEvent = module$as3shim$flash$events$TransformGestureEvent.module$exports);
  var module$as3shim$flash$events$UncaughtErrorEvent = {}, tools$$module$as3shim$flash$events$UncaughtErrorEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$UncaughtErrorEvent = module$as3shim$Class, ErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent = module$as3shim$flash$events$ErrorEvent, setConst$$module$as3shim$flash$events$UncaughtErrorEvent = tools$$module$as3shim$flash$events$UncaughtErrorEvent.setConst, setImmutable$$module$as3shim$flash$events$UncaughtErrorEvent = 
  tools$$module$as3shim$flash$events$UncaughtErrorEvent.setImmutable;
  function UncaughtErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent(a, b, c, d) {
    var e = d || {};
    ErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent.call(this, a, b, c, e.text, e.id);
    setImmutable$$module$as3shim$flash$events$UncaughtErrorEvent(this, "error", d || null)
  }
  function clone$$module$as3shim$flash$events$UncaughtErrorEvent() {
    return new UncaughtErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent(this.type, this.bubbles, this.cancelable, this.error)
  }
  setConst$$module$as3shim$flash$events$UncaughtErrorEvent(UncaughtErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent, "uncaughtError");
  Class$$module$as3shim$flash$events$UncaughtErrorEvent({constructor:UncaughtErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent, clone:clone$$module$as3shim$flash$events$UncaughtErrorEvent, superClass:ErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent});
  UncaughtErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent.prototype[tools$$module$as3shim$flash$events$UncaughtErrorEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "error"]};
  module$as3shim$flash$events$UncaughtErrorEvent.module$exports = UncaughtErrorEvent$$module$as3shim$flash$events$UncaughtErrorEvent;
  module$as3shim$flash$events$UncaughtErrorEvent.module$exports && (module$as3shim$flash$events$UncaughtErrorEvent = module$as3shim$flash$events$UncaughtErrorEvent.module$exports);
  var module$as3shim$flash$events$VideoEvent = {}, tools$$module$as3shim$flash$events$VideoEvent = module$as3shim$tools, Class$$module$as3shim$flash$events$VideoEvent = module$as3shim$Class, Event$$module$as3shim$flash$events$VideoEvent = module$as3shim$flash$events$Event, createDummyFunction$$module$as3shim$flash$events$VideoEvent = tools$$module$as3shim$flash$events$VideoEvent.createDummyFunction, noop$$module$as3shim$flash$events$VideoEvent = tools$$module$as3shim$flash$events$VideoEvent.noop, 
  setConst$$module$as3shim$flash$events$VideoEvent = tools$$module$as3shim$flash$events$VideoEvent.setConst, setDescriptor$$module$as3shim$flash$events$VideoEvent = tools$$module$as3shim$flash$events$VideoEvent.setDescriptor;
  function VideoEvent$$module$as3shim$flash$events$VideoEvent(a, b, c, d) {
    VideoEvent$$module$as3shim$flash$events$VideoEvent.__super__.constructor.call(this, a, b, c);
    this.status = d
  }
  setConst$$module$as3shim$flash$events$VideoEvent(VideoEvent$$module$as3shim$flash$events$VideoEvent, "renderState");
  setConst$$module$as3shim$flash$events$VideoEvent(VideoEvent$$module$as3shim$flash$events$VideoEvent, "RENDER_STATUS_ACCELERATED", "accelerated");
  setConst$$module$as3shim$flash$events$VideoEvent(VideoEvent$$module$as3shim$flash$events$VideoEvent, "RENDER_STATUS_SOFTWARE", "software");
  setConst$$module$as3shim$flash$events$VideoEvent(VideoEvent$$module$as3shim$flash$events$VideoEvent, "RENDER_STATUS_UNAVAILABLE", "unavailable");
  function clone$$module$as3shim$flash$events$VideoEvent() {
    return new VideoEvent$$module$as3shim$flash$events$VideoEvent(this.type, this.bubbles, this.cancelable, this.status)
  }
  Class$$module$as3shim$flash$events$VideoEvent({constructor:VideoEvent$$module$as3shim$flash$events$VideoEvent, clone:clone$$module$as3shim$flash$events$VideoEvent, superClass:Event$$module$as3shim$flash$events$VideoEvent});
  VideoEvent$$module$as3shim$flash$events$VideoEvent.prototype[tools$$module$as3shim$flash$events$VideoEvent.expando] = {toStringProperties:["type", "bubbles", "cancelable", "status"]};
  setDescriptor$$module$as3shim$flash$events$VideoEvent(VideoEvent$$module$as3shim$flash$events$VideoEvent.prototype, "status", {get:createDummyFunction$$module$as3shim$flash$events$VideoEvent({name:"status", returnType:"String"})});
  module$as3shim$flash$events$VideoEvent.module$exports = VideoEvent$$module$as3shim$flash$events$VideoEvent;
  module$as3shim$flash$events$VideoEvent.module$exports && (module$as3shim$flash$events$VideoEvent = module$as3shim$flash$events$VideoEvent.module$exports);
  var module$as3shim$flash$external$ExternalInterface = {}, tools$$module$as3shim$flash$external$ExternalInterface = module$as3shim$tools, Class$$module$as3shim$flash$external$ExternalInterface = module$as3shim$Class, slice$$module$as3shim$flash$external$ExternalInterface = [].slice, createDummyFunction$$module$as3shim$flash$external$ExternalInterface = tools$$module$as3shim$flash$external$ExternalInterface.createDummyFunction, setDescriptor$$module$as3shim$flash$external$ExternalInterface = tools$$module$as3shim$flash$external$ExternalInterface.setDescriptor;
  function ExternalInterface$$module$as3shim$flash$external$ExternalInterface() {
  }
  Class$$module$as3shim$flash$external$ExternalInterface({constructor:ExternalInterface$$module$as3shim$flash$external$ExternalInterface});
  ExternalInterface$$module$as3shim$flash$external$ExternalInterface.marshallExceptions = !1;
  ExternalInterface$$module$as3shim$flash$external$ExternalInterface.addCallback = function(a, b) {
    window.parent[a] = b
  };
  ExternalInterface$$module$as3shim$flash$external$ExternalInterface.call = function(a) {
    var b = window.parent[a];
    if(b) {
      return b.apply(null, slice$$module$as3shim$flash$external$ExternalInterface.call(arguments, 1))
    }
  };
  setDescriptor$$module$as3shim$flash$external$ExternalInterface(ExternalInterface$$module$as3shim$flash$external$ExternalInterface, "available", {writable:!1, value:!0});
  setDescriptor$$module$as3shim$flash$external$ExternalInterface(ExternalInterface$$module$as3shim$flash$external$ExternalInterface, "objectID", {get:function() {
    return""
  }});
  var proto$$module$as3shim$flash$external$ExternalInterface = ExternalInterface$$module$as3shim$flash$external$ExternalInterface.prototype;
  setDescriptor$$module$as3shim$flash$external$ExternalInterface(proto$$module$as3shim$flash$external$ExternalInterface, "available", {get:createDummyFunction$$module$as3shim$flash$external$ExternalInterface({name:"available", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$external$ExternalInterface(proto$$module$as3shim$flash$external$ExternalInterface, "objectID", {get:createDummyFunction$$module$as3shim$flash$external$ExternalInterface({name:"objectID", returnType:"String"})});
  module$as3shim$flash$external$ExternalInterface.module$exports = ExternalInterface$$module$as3shim$flash$external$ExternalInterface;
  module$as3shim$flash$external$ExternalInterface.module$exports && (module$as3shim$flash$external$ExternalInterface = module$as3shim$flash$external$ExternalInterface.module$exports);
  var module$as3shim$flash$filters$BitmapFilter = {}, tools$$module$as3shim$flash$filters$BitmapFilter = module$as3shim$tools, Class$$module$as3shim$flash$filters$BitmapFilter = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$filters$BitmapFilter = tools$$module$as3shim$flash$filters$BitmapFilter.createDummyFunction;
  function BitmapFilter$$module$as3shim$flash$filters$BitmapFilter() {
  }
  Class$$module$as3shim$flash$filters$BitmapFilter({constructor:BitmapFilter$$module$as3shim$flash$filters$BitmapFilter, clone:createDummyFunction$$module$as3shim$flash$filters$BitmapFilter({name:"clone", returnType:"flash.filters.BitmapFilter"})});
  module$as3shim$flash$filters$BitmapFilter.module$exports = BitmapFilter$$module$as3shim$flash$filters$BitmapFilter;
  module$as3shim$flash$filters$BitmapFilter.module$exports && (module$as3shim$flash$filters$BitmapFilter = module$as3shim$flash$filters$BitmapFilter.module$exports);
  var module$as3shim$flash$filters$BlurFilter = {}, tools$$module$as3shim$flash$filters$BlurFilter = module$as3shim$tools, BitmapFilter$$module$as3shim$flash$filters$BlurFilter = module$as3shim$flash$filters$BitmapFilter, Class$$module$as3shim$flash$filters$BlurFilter = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$filters$BlurFilter = tools$$module$as3shim$flash$filters$BlurFilter.createDummyFunction, noop$$module$as3shim$flash$filters$BlurFilter = tools$$module$as3shim$flash$filters$BlurFilter.noop, 
  setDescriptor$$module$as3shim$flash$filters$BlurFilter = tools$$module$as3shim$flash$filters$BlurFilter.setDescriptor;
  function BlurFilter$$module$as3shim$flash$filters$BlurFilter() {
  }
  Class$$module$as3shim$flash$filters$BlurFilter({constructor:BlurFilter$$module$as3shim$flash$filters$BlurFilter, superClass:BitmapFilter$$module$as3shim$flash$filters$BlurFilter, clone:createDummyFunction$$module$as3shim$flash$filters$BlurFilter({name:"clone", returnType:"flash.filters.BitmapFilter"})});
  var proto$$module$as3shim$flash$filters$BlurFilter = BlurFilter$$module$as3shim$flash$filters$BlurFilter.prototype;
  setDescriptor$$module$as3shim$flash$filters$BlurFilter(proto$$module$as3shim$flash$filters$BlurFilter, "blurX", {get:createDummyFunction$$module$as3shim$flash$filters$BlurFilter({name:"blurX", returnType:"Number"}), set:noop$$module$as3shim$flash$filters$BlurFilter});
  setDescriptor$$module$as3shim$flash$filters$BlurFilter(proto$$module$as3shim$flash$filters$BlurFilter, "blurY", {get:createDummyFunction$$module$as3shim$flash$filters$BlurFilter({name:"blurY", returnType:"Number"}), set:noop$$module$as3shim$flash$filters$BlurFilter});
  setDescriptor$$module$as3shim$flash$filters$BlurFilter(proto$$module$as3shim$flash$filters$BlurFilter, "quality", {get:createDummyFunction$$module$as3shim$flash$filters$BlurFilter({name:"quality", returnType:"int"}), set:noop$$module$as3shim$flash$filters$BlurFilter});
  module$as3shim$flash$filters$BlurFilter.module$exports = BlurFilter$$module$as3shim$flash$filters$BlurFilter;
  module$as3shim$flash$filters$BlurFilter.module$exports && (module$as3shim$flash$filters$BlurFilter = module$as3shim$flash$filters$BlurFilter.module$exports);
  var module$as3shim$flash$geom$ColorTransform = {}, bonsai$$module$as3shim$flash$geom$ColorTransform = module$as3shim$bonsai, tools$$module$as3shim$flash$geom$ColorTransform = module$as3shim$tools, Class$$module$as3shim$flash$geom$ColorTransform = module$as3shim$Class, keys$$module$as3shim$flash$geom$ColorTransform = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(",");
  function ColorTransform$$module$as3shim$flash$geom$ColorTransform(a, b, c, d, e, f, g, h) {
    this._color = 0;
    this.redMultiplier = null == a ? 1 : a;
    this.greenMultiplier = null == b ? 1 : b;
    this.blueMultiplier = null == c ? 1 : c;
    this.alphaMultiplier = null == d ? 1 : d;
    this.redOffset = e || 0;
    this.greenOffset = f || 0;
    this.blueOffset = g || 0;
    this.alphaOffset = h || 0;
    tools$$module$as3shim$flash$geom$ColorTransform.setDescriptor(this, "color", {set:function(a) {
      this._color = a;
      this.blueMultiplier = this.greenMultiplier = this.redMultiplier = 0;
      this.redOffset = a >> 16 & 255;
      this.greenOffset = a >> 8 & 255;
      this.blueOffset = a & 255
    }, get:function() {
      return this._color
    }})
  }
  function concat$$module$as3shim$flash$geom$ColorTransform(a) {
    this.redOffset += a.redOffset * this.redMultiplier;
    this.greenOffset += a.greenOffset * this.greenMultiplier;
    this.blueOffset += a.blueOffset * this.blueMultiplier;
    this.alphaOffset += a.alphaOffset * this.alphaMultiplier;
    this.redMultiplier *= a.redMultiplier;
    this.greenMultiplier *= a.greenMultiplier;
    this.blueMultiplier *= a.blueMultiplier;
    this.alphaMultiplier *= a.alphaMultiplier
  }
  function toString$$module$as3shim$flash$geom$ColorTransform() {
    return"(" + tools$$module$as3shim$flash$geom$ColorTransform.map(keys$$module$as3shim$flash$geom$ColorTransform, function(a) {
      return a + "=" + this[a]
    }, this).join(", ") + ")"
  }
  Class$$module$as3shim$flash$geom$ColorTransform({constructor:ColorTransform$$module$as3shim$flash$geom$ColorTransform, concat:concat$$module$as3shim$flash$geom$ColorTransform, toString:toString$$module$as3shim$flash$geom$ColorTransform});
  module$as3shim$flash$geom$ColorTransform.module$exports = ColorTransform$$module$as3shim$flash$geom$ColorTransform;
  module$as3shim$flash$geom$ColorTransform.module$exports && (module$as3shim$flash$geom$ColorTransform = module$as3shim$flash$geom$ColorTransform.module$exports);
  var module$as3shim$flash$geom$Point = {}, bonsai$$module$as3shim$flash$geom$Point = module$as3shim$bonsai, tools$$module$as3shim$flash$geom$Point = module$as3shim$tools, Class$$module$as3shim$flash$geom$Point = module$as3shim$Class, setDescriptor$$module$as3shim$flash$geom$Point = tools$$module$as3shim$flash$geom$Point.setDescriptor, sqrt$$module$as3shim$flash$geom$Point = Math.sqrt, zeroPoint$$module$as3shim$flash$geom$Point = new Point$$module$as3shim$flash$geom$Point(0, 0);
  function Point$$module$as3shim$flash$geom$Point(a, b) {
    this.x = a || 0;
    this.y = b || 0;
    setDescriptor$$module$as3shim$flash$geom$Point(this, "length", {get:function() {
      return distance$$module$as3shim$flash$geom$Point(zeroPoint$$module$as3shim$flash$geom$Point, this)
    }})
  }
  function add$$module$as3shim$flash$geom$Point(a) {
    return new Point$$module$as3shim$flash$geom$Point(this.x + a.x, this.y + a.y)
  }
  function clone$$module$as3shim$flash$geom$Point() {
    return new Point$$module$as3shim$flash$geom$Point(this.x, this.y)
  }
  function copyFrom$$module$as3shim$flash$geom$Point(a) {
    this.x = a.x;
    this.y = a.y
  }
  function distance$$module$as3shim$flash$geom$Point(a, b) {
    var c = a.x - b.x, d = a.y - b.y;
    return sqrt$$module$as3shim$flash$geom$Point(c * c + d * d)
  }
  function equals$$module$as3shim$flash$geom$Point(a) {
    return a.x === this.x && a.y === this.y
  }
  function interpolate$$module$as3shim$flash$geom$Point(a, b, c) {
    return new Point$$module$as3shim$flash$geom$Point(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))
  }
  function normalize$$module$as3shim$flash$geom$Point(a) {
    sqrt$$module$as3shim$flash$geom$Point(this.x * this.x + this.y * this.y);
    a /= this.length;
    this.x *= a;
    this.y *= a;
    return this
  }
  function offset$$module$as3shim$flash$geom$Point(a, b) {
    this.x += a;
    this.y += b
  }
  function polar$$module$as3shim$flash$geom$Point() {
    return new Point$$module$as3shim$flash$geom$Point(len * Math.cos(angle), len * Math.sin(angle))
  }
  function setTo$$module$as3shim$flash$geom$Point(a, b) {
    this.x = a;
    this.y = b
  }
  function subtract$$module$as3shim$flash$geom$Point(a) {
    return new Point$$module$as3shim$flash$geom$Point(this.x - a.x, this.y - a.y)
  }
  function toString$$module$as3shim$flash$geom$Point() {
    return"(x=" + this.x + ", y=" + this.y + ")"
  }
  Point$$module$as3shim$flash$geom$Point.distance = distance$$module$as3shim$flash$geom$Point;
  Point$$module$as3shim$flash$geom$Point.interpolate = interpolate$$module$as3shim$flash$geom$Point;
  Point$$module$as3shim$flash$geom$Point.polar = polar$$module$as3shim$flash$geom$Point;
  Class$$module$as3shim$flash$geom$Point({constructor:Point$$module$as3shim$flash$geom$Point, add:add$$module$as3shim$flash$geom$Point, clone:clone$$module$as3shim$flash$geom$Point, copyFrom:copyFrom$$module$as3shim$flash$geom$Point, equals:equals$$module$as3shim$flash$geom$Point, normalize:normalize$$module$as3shim$flash$geom$Point, offset:offset$$module$as3shim$flash$geom$Point, setTo:setTo$$module$as3shim$flash$geom$Point, subtract:subtract$$module$as3shim$flash$geom$Point, toString:toString$$module$as3shim$flash$geom$Point});
  module$as3shim$flash$geom$Point.module$exports = Point$$module$as3shim$flash$geom$Point;
  module$as3shim$flash$geom$Point.module$exports && (module$as3shim$flash$geom$Point = module$as3shim$flash$geom$Point.module$exports);
  var module$as3shim$flash$geom$Rectangle = {}, bonsai$$module$as3shim$flash$geom$Rectangle = module$as3shim$bonsai, tools$$module$as3shim$flash$geom$Rectangle = module$as3shim$tools, Class$$module$as3shim$flash$geom$Rectangle = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$geom$Rectangle = tools$$module$as3shim$flash$geom$Rectangle.createDummyFunction, noop$$module$as3shim$flash$geom$Rectangle = tools$$module$as3shim$flash$geom$Rectangle.noop, setDescriptor$$module$as3shim$flash$geom$Rectangle = 
  tools$$module$as3shim$flash$geom$Rectangle.setDescriptor;
  function Rectangle$$module$as3shim$flash$geom$Rectangle() {
  }
  Class$$module$as3shim$flash$geom$Rectangle({constructor:Rectangle$$module$as3shim$flash$geom$Rectangle, clone:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"clone", returnType:"flash.geom.Rectangle"}), contains:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"contains", returnType:"Boolean"}), containsPoint:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"containsPoint", returnType:"Boolean"}), containsRect:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"containsRect", 
  returnType:"Boolean"}), equals:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"equals", returnType:"Boolean"}), inflate:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"inflate", returnType:"void"}), inflatePoint:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"inflatePoint", returnType:"void"}), intersection:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"intersection", returnType:"flash.geom.Rectangle"}), intersects:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"intersects", 
  returnType:"Boolean"}), isEmpty:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"isEmpty", returnType:"Boolean"}), offset:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"offset", returnType:"void"}), offsetPoint:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"offsetPoint", returnType:"void"}), setEmpty:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"setEmpty", returnType:"void"}), union:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"union", 
  returnType:"flash.geom.Rectangle"})});
  var proto$$module$as3shim$flash$geom$Rectangle = Rectangle$$module$as3shim$flash$geom$Rectangle.prototype;
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "bottom", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"bottom", returnType:"Number"}), set:noop$$module$as3shim$flash$geom$Rectangle});
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "bottomRight", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"bottomRight", returnType:""}), set:noop$$module$as3shim$flash$geom$Rectangle});
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "left", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"left", returnType:"Number"}), set:noop$$module$as3shim$flash$geom$Rectangle});
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "right", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"right", returnType:"Number"}), set:noop$$module$as3shim$flash$geom$Rectangle});
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "size", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"size", returnType:""}), set:noop$$module$as3shim$flash$geom$Rectangle});
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "top", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"top", returnType:"Number"}), set:noop$$module$as3shim$flash$geom$Rectangle});
  setDescriptor$$module$as3shim$flash$geom$Rectangle(proto$$module$as3shim$flash$geom$Rectangle, "topLeft", {get:createDummyFunction$$module$as3shim$flash$geom$Rectangle({name:"topLeft", returnType:""}), set:noop$$module$as3shim$flash$geom$Rectangle});
  module$as3shim$flash$geom$Rectangle.module$exports = Rectangle$$module$as3shim$flash$geom$Rectangle;
  module$as3shim$flash$geom$Rectangle.module$exports && (module$as3shim$flash$geom$Rectangle = module$as3shim$flash$geom$Rectangle.module$exports);
  var module$as3shim$flash$geom$Transform = {}, bonsai$$module$as3shim$flash$geom$Transform = module$as3shim$bonsai, tools$$module$as3shim$flash$geom$Transform = module$as3shim$tools, Class$$module$as3shim$flash$geom$Transform = module$as3shim$Class, ColorTransform$$module$as3shim$flash$geom$Transform = module$as3shim$flash$geom$ColorTransform, expando$$module$as3shim$flash$geom$Transform = tools$$module$as3shim$flash$geom$Transform.expando, createDummyFunction$$module$as3shim$flash$geom$Transform = 
  tools$$module$as3shim$flash$geom$Transform.createDummyFunction, noop$$module$as3shim$flash$geom$Transform = tools$$module$as3shim$flash$geom$Transform.noop, setDescriptor$$module$as3shim$flash$geom$Transform = tools$$module$as3shim$flash$geom$Transform.setDescriptor;
  function markAsTouchedByAS$$module$as3shim$flash$geom$Transform(a) {
    a.__touchedByActionScript__ = !0
  }
  function Transform$$module$as3shim$flash$geom$Transform(a) {
    this[expando$$module$as3shim$flash$geom$Transform] = {colorTransform:new ColorTransform$$module$as3shim$flash$geom$Transform, displayObject:a}
  }
  Class$$module$as3shim$flash$geom$Transform({constructor:Transform$$module$as3shim$flash$geom$Transform, getRelativeMatrix3D:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"getRelativeMatrix3D", returnType:"flash.geom.Matrix3D"})});
  var proto$$module$as3shim$flash$geom$Transform = Transform$$module$as3shim$flash$geom$Transform.prototype;
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "colorTransform", {get:function() {
    return this[expando$$module$as3shim$flash$geom$Transform].colorTransform
  }, set:function(a) {
    var b = this[expando$$module$as3shim$flash$geom$Transform];
    b.colorTransform = a;
    a = new bonsai$$module$as3shim$flash$geom$Transform.filter.ColorMatrix([a.redMultiplier, 0, 0, 0, a.redOffset / 256, 0, a.greenMultiplier, 0, 0, a.greenOffset / 256, 0, 0, a.blueMultiplier, 0, a.blueOffset / 256, 0, 0, 0, a.alphaMultiplier, a.alphaOffset / 256]);
    b = b.displayObject[expando$$module$as3shim$flash$geom$Transform].raw;
    markAsTouchedByAS$$module$as3shim$flash$geom$Transform(b);
    b.attr("filters", [a])
  }});
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "concatenatedColorTransform", {get:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"concatenatedColorTransform", returnType:""})});
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "concatenatedMatrix", {get:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"concatenatedMatrix", returnType:""})});
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "matrix", {get:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"matrix", returnType:""}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$geom$Transform(this[expando$$module$as3shim$flash$geom$Transform].displayObject[expando$$module$as3shim$flash$geom$Transform].raw)
  }});
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "matrix3D", {get:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"matrix3D", returnType:""}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$geom$Transform(this[expando$$module$as3shim$flash$geom$Transform].displayObject[expando$$module$as3shim$flash$geom$Transform].raw)
  }});
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "perspectiveProjection", {get:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"perspectiveProjection", returnType:""}), set:noop$$module$as3shim$flash$geom$Transform});
  setDescriptor$$module$as3shim$flash$geom$Transform(proto$$module$as3shim$flash$geom$Transform, "pixelBounds", {get:createDummyFunction$$module$as3shim$flash$geom$Transform({name:"pixelBounds", returnType:""})});
  module$as3shim$flash$geom$Transform.module$exports = Transform$$module$as3shim$flash$geom$Transform;
  module$as3shim$flash$geom$Transform.module$exports && (module$as3shim$flash$geom$Transform = module$as3shim$flash$geom$Transform.module$exports);
  var module$as3shim$flash$net$FileFilter = {}, tools$$module$as3shim$flash$net$FileFilter = module$as3shim$tools, Class$$module$as3shim$flash$net$FileFilter = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$FileFilter = tools$$module$as3shim$flash$net$FileFilter.createDummyFunction, noop$$module$as3shim$flash$net$FileFilter = tools$$module$as3shim$flash$net$FileFilter.noop, setDescriptor$$module$as3shim$flash$net$FileFilter = tools$$module$as3shim$flash$net$FileFilter.setDescriptor;
  function FileFilter$$module$as3shim$flash$net$FileFilter() {
  }
  Class$$module$as3shim$flash$net$FileFilter({constructor:FileFilter$$module$as3shim$flash$net$FileFilter});
  var proto$$module$as3shim$flash$net$FileFilter = FileFilter$$module$as3shim$flash$net$FileFilter.prototype;
  setDescriptor$$module$as3shim$flash$net$FileFilter(proto$$module$as3shim$flash$net$FileFilter, "description", {get:createDummyFunction$$module$as3shim$flash$net$FileFilter({name:"description", returnType:"String"}), set:noop$$module$as3shim$flash$net$FileFilter});
  setDescriptor$$module$as3shim$flash$net$FileFilter(proto$$module$as3shim$flash$net$FileFilter, "extension", {get:createDummyFunction$$module$as3shim$flash$net$FileFilter({name:"extension", returnType:"String"}), set:noop$$module$as3shim$flash$net$FileFilter});
  setDescriptor$$module$as3shim$flash$net$FileFilter(proto$$module$as3shim$flash$net$FileFilter, "macType", {get:createDummyFunction$$module$as3shim$flash$net$FileFilter({name:"macType", returnType:"String"}), set:noop$$module$as3shim$flash$net$FileFilter});
  module$as3shim$flash$net$FileFilter.module$exports = FileFilter$$module$as3shim$flash$net$FileFilter;
  module$as3shim$flash$net$FileFilter.module$exports && (module$as3shim$flash$net$FileFilter = module$as3shim$flash$net$FileFilter.module$exports);
  var module$as3shim$flash$net$FileReference = {}, tools$$module$as3shim$flash$net$FileReference = module$as3shim$tools, Class$$module$as3shim$flash$net$FileReference = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$FileReference = tools$$module$as3shim$flash$net$FileReference.createDummyFunction, setDescriptor$$module$as3shim$flash$net$FileReference = tools$$module$as3shim$flash$net$FileReference.setDescriptor;
  function FileReference$$module$as3shim$flash$net$FileReference() {
  }
  Class$$module$as3shim$flash$net$FileReference({constructor:FileReference$$module$as3shim$flash$net$FileReference, browse:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"browse", returnType:"Boolean"}), cancel:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"cancel", returnType:"void"}), download:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"download", returnType:"void"}), load:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"load", 
  returnType:"void"}), save:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"save", returnType:"void"}), upload:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"upload", returnType:"void"})});
  var proto$$module$as3shim$flash$net$FileReference = FileReference$$module$as3shim$flash$net$FileReference.prototype;
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "creationDate", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"creationDate", returnType:"Date"})});
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "creator", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"creator", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "data", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"data", returnType:""})});
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "modificationDate", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"modificationDate", returnType:"Date"})});
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "name", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"name", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "size", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"size", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$FileReference(proto$$module$as3shim$flash$net$FileReference, "type", {get:createDummyFunction$$module$as3shim$flash$net$FileReference({name:"type", returnType:"String"})});
  module$as3shim$flash$net$FileReference.module$exports = FileReference$$module$as3shim$flash$net$FileReference;
  module$as3shim$flash$net$FileReference.module$exports && (module$as3shim$flash$net$FileReference = module$as3shim$flash$net$FileReference.module$exports);
  var module$as3shim$flash$net$FileReferenceList = {}, tools$$module$as3shim$flash$net$FileReferenceList = module$as3shim$tools, Class$$module$as3shim$flash$net$FileReferenceList = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$FileReferenceList = tools$$module$as3shim$flash$net$FileReferenceList.createDummyFunction, setDescriptor$$module$as3shim$flash$net$FileReferenceList = tools$$module$as3shim$flash$net$FileReferenceList.setDescriptor;
  function FileReferenceList$$module$as3shim$flash$net$FileReferenceList() {
  }
  Class$$module$as3shim$flash$net$FileReferenceList({constructor:FileReferenceList$$module$as3shim$flash$net$FileReferenceList, browse:createDummyFunction$$module$as3shim$flash$net$FileReferenceList({name:"browse", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$net$FileReferenceList(FileReferenceList$$module$as3shim$flash$net$FileReferenceList.prototype, "fileList", {get:createDummyFunction$$module$as3shim$flash$net$FileReferenceList({name:"fileList", returnType:"Array"})});
  module$as3shim$flash$net$FileReferenceList.module$exports = FileReferenceList$$module$as3shim$flash$net$FileReferenceList;
  module$as3shim$flash$net$FileReferenceList.module$exports && (module$as3shim$flash$net$FileReferenceList = module$as3shim$flash$net$FileReferenceList.module$exports);
  var module$as3shim$flash$net$GroupSpecifier = {}, tools$$module$as3shim$flash$net$GroupSpecifier = module$as3shim$tools, Class$$module$as3shim$flash$net$GroupSpecifier = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$GroupSpecifier = tools$$module$as3shim$flash$net$GroupSpecifier.createDummyFunction, noop$$module$as3shim$flash$net$GroupSpecifier = tools$$module$as3shim$flash$net$GroupSpecifier.noop, setDescriptor$$module$as3shim$flash$net$GroupSpecifier = tools$$module$as3shim$flash$net$GroupSpecifier.setDescriptor;
  function GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier() {
  }
  Class$$module$as3shim$flash$net$GroupSpecifier({constructor:GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier, addBootstrapPeer:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"addBootstrapPeer", returnType:"void"}), addIPMulticastAddress:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"addIPMulticastAddress", returnType:"void"}), authorizations:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"authorizations", returnType:"String"}), 
  groupspecWithAuthorizations:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"groupspecWithAuthorizations", returnType:"String"}), groupspecWithoutAuthorizations:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"groupspecWithoutAuthorizations", returnType:"String"}), makeUnique:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"makeUnique", returnType:"void"}), setPostingPassword:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"setPostingPassword", 
  returnType:"void"}), setPublishPassword:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"setPublishPassword", returnType:"void"})});
  GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier.encodeBootstrapPeerIDSpec = createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"encodeBootstrapPeerIDSpec", returnType:"String"});
  GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier.encodeIPMulticastAddressSpec = createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"encodeIPMulticastAddressSpec", returnType:"String"});
  GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier.encodePostingAuthorization = createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"encodePostingAuthorization", returnType:"String"});
  GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier.encodePublishAuthorization = createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"encodePublishAuthorization", returnType:"String"});
  var proto$$module$as3shim$flash$net$GroupSpecifier = GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier.prototype;
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "ipMulticastMemberUpdatesEnabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"ipMulticastMemberUpdatesEnabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "multicastEnabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"multicastEnabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "objectReplicationEnabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"objectReplicationEnabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "peerToPeerDisabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"peerToPeerDisabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "postingEnabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"postingEnabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "routingEnabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"routingEnabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  setDescriptor$$module$as3shim$flash$net$GroupSpecifier(proto$$module$as3shim$flash$net$GroupSpecifier, "serverChannelEnabled", {get:createDummyFunction$$module$as3shim$flash$net$GroupSpecifier({name:"serverChannelEnabled", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$GroupSpecifier});
  module$as3shim$flash$net$GroupSpecifier.module$exports = GroupSpecifier$$module$as3shim$flash$net$GroupSpecifier;
  module$as3shim$flash$net$GroupSpecifier.module$exports && (module$as3shim$flash$net$GroupSpecifier = module$as3shim$flash$net$GroupSpecifier.module$exports);
  var module$as3shim$flash$net$NetConnection = {}, tools$$module$as3shim$flash$net$NetConnection = module$as3shim$tools, Class$$module$as3shim$flash$net$NetConnection = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetConnection = tools$$module$as3shim$flash$net$NetConnection.createDummyFunction, noop$$module$as3shim$flash$net$NetConnection = tools$$module$as3shim$flash$net$NetConnection.noop, setDescriptor$$module$as3shim$flash$net$NetConnection = tools$$module$as3shim$flash$net$NetConnection.setDescriptor;
  function NetConnection$$module$as3shim$flash$net$NetConnection() {
  }
  Class$$module$as3shim$flash$net$NetConnection({constructor:NetConnection$$module$as3shim$flash$net$NetConnection, addHeader:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"addHeader", returnType:"void"}), call:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"call", returnType:"void"}), close:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"close", returnType:"void"}), connect:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"connect", 
  returnType:"void"})});
  var proto$$module$as3shim$flash$net$NetConnection = NetConnection$$module$as3shim$flash$net$NetConnection.prototype;
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "defaultObjectEncoding", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"defaultObjectEncoding", returnType:"uint"}), set:noop$$module$as3shim$flash$net$NetConnection});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "client", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"client", returnType:"Object"}), set:noop$$module$as3shim$flash$net$NetConnection});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "connected", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"connected", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "connectedProxyType", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"connectedProxyType", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "farID", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"farID", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "farNonce", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"farNonce", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "maxPeerConnections", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"maxPeerConnections", returnType:"uint"}), set:noop$$module$as3shim$flash$net$NetConnection});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "nearID", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"nearID", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "nearNonce", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"nearNonce", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "objectEncoding", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"objectEncoding", returnType:"uint"}), set:noop$$module$as3shim$flash$net$NetConnection});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "protocol", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"protocol", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "proxyType", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"proxyType", returnType:"String"}), set:noop$$module$as3shim$flash$net$NetConnection});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "unconnectedPeerStreams", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"unconnectedPeerStreams", returnType:"Array"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "uri", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"uri", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetConnection(proto$$module$as3shim$flash$net$NetConnection, "usingTLS", {get:createDummyFunction$$module$as3shim$flash$net$NetConnection({name:"usingTLS", returnType:"Boolean"})});
  module$as3shim$flash$net$NetConnection.module$exports = NetConnection$$module$as3shim$flash$net$NetConnection;
  module$as3shim$flash$net$NetConnection.module$exports && (module$as3shim$flash$net$NetConnection = module$as3shim$flash$net$NetConnection.module$exports);
  var module$as3shim$flash$net$NetGroup = {}, tools$$module$as3shim$flash$net$NetGroup = module$as3shim$tools, Class$$module$as3shim$flash$net$NetGroup = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetGroup = tools$$module$as3shim$flash$net$NetGroup.createDummyFunction, noop$$module$as3shim$flash$net$NetGroup = tools$$module$as3shim$flash$net$NetGroup.noop, setDescriptor$$module$as3shim$flash$net$NetGroup = tools$$module$as3shim$flash$net$NetGroup.setDescriptor;
  function NetGroup$$module$as3shim$flash$net$NetGroup() {
  }
  Class$$module$as3shim$flash$net$NetGroup({constructor:NetGroup$$module$as3shim$flash$net$NetGroup, addHaveObjects:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"addHaveObjects", returnType:"void"}), addMemberHint:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"addMemberHint", returnType:"Boolean"}), addNeighbor:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"addNeighbor", returnType:"Boolean"}), addWantObjects:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"addWantObjects", 
  returnType:"void"}), close:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"close", returnType:"void"}), convertPeerIDToGroupAddress:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"convertPeerIDToGroupAddress", returnType:"String"}), denyRequestedObject:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"denyRequestedObject", returnType:"void"}), post:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"post", returnType:"String"}), removeHaveObjects:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"removeHaveObjects", 
  returnType:"void"}), removeWantObjects:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"removeWantObjects", returnType:"void"}), sendToAllNeighbors:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"sendToAllNeighbors", returnType:"String"}), sendToNearest:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"sendToNearest", returnType:"String"}), sendToNeighbor:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"sendToNeighbor", returnType:"String"}), 
  writeRequestedObject:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"writeRequestedObject", returnType:"void"})});
  var proto$$module$as3shim$flash$net$NetGroup = NetGroup$$module$as3shim$flash$net$NetGroup.prototype;
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "estimatedMemberCount", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"estimatedMemberCount", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "info", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"info", returnType:""})});
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "localCoverageFrom", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"localCoverageFrom", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "localCoverageTo", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"localCoverageTo", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "neighborCount", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"neighborCount", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "receiveMode", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"receiveMode", returnType:"String"}), set:noop$$module$as3shim$flash$net$NetGroup});
  setDescriptor$$module$as3shim$flash$net$NetGroup(proto$$module$as3shim$flash$net$NetGroup, "replicationStrategy", {get:createDummyFunction$$module$as3shim$flash$net$NetGroup({name:"replicationStrategy", returnType:"String"}), set:noop$$module$as3shim$flash$net$NetGroup});
  module$as3shim$flash$net$NetGroup.module$exports = NetGroup$$module$as3shim$flash$net$NetGroup;
  module$as3shim$flash$net$NetGroup.module$exports && (module$as3shim$flash$net$NetGroup = module$as3shim$flash$net$NetGroup.module$exports);
  var module$as3shim$flash$net$NetGroupInfo = {}, tools$$module$as3shim$flash$net$NetGroupInfo = module$as3shim$tools, Class$$module$as3shim$flash$net$NetGroupInfo = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetGroupInfo = tools$$module$as3shim$flash$net$NetGroupInfo.createDummyFunction, setDescriptor$$module$as3shim$flash$net$NetGroupInfo = tools$$module$as3shim$flash$net$NetGroupInfo.setDescriptor;
  function NetGroupInfo$$module$as3shim$flash$net$NetGroupInfo() {
  }
  Class$$module$as3shim$flash$net$NetGroupInfo({constructor:NetGroupInfo$$module$as3shim$flash$net$NetGroupInfo});
  var proto$$module$as3shim$flash$net$NetGroupInfo = NetGroupInfo$$module$as3shim$flash$net$NetGroupInfo.prototype;
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "objectReplicationReceiveBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"objectReplicationReceiveBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "objectReplicationSendBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"objectReplicationSendBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "postingReceiveControlBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"postingReceiveControlBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "postingReceiveDataBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"postingReceiveDataBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "postingSendControlBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"postingSendControlBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "postingSendDataBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"postingSendDataBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "routingReceiveBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"routingReceiveBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetGroupInfo(proto$$module$as3shim$flash$net$NetGroupInfo, "routingSendBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetGroupInfo({name:"routingSendBytesPerSecond", returnType:"Number"})});
  module$as3shim$flash$net$NetGroupInfo.module$exports = NetGroupInfo$$module$as3shim$flash$net$NetGroupInfo;
  module$as3shim$flash$net$NetGroupInfo.module$exports && (module$as3shim$flash$net$NetGroupInfo = module$as3shim$flash$net$NetGroupInfo.module$exports);
  var module$as3shim$flash$net$NetGroupReceiveMode = {}, tools$$module$as3shim$flash$net$NetGroupReceiveMode = module$as3shim$tools, Class$$module$as3shim$flash$net$NetGroupReceiveMode = module$as3shim$Class, setConst$$module$as3shim$flash$net$NetGroupReceiveMode = tools$$module$as3shim$flash$net$NetGroupReceiveMode.setConst;
  function NetGroupReceiveMode$$module$as3shim$flash$net$NetGroupReceiveMode() {
  }
  Class$$module$as3shim$flash$net$NetGroupReceiveMode({constructor:NetGroupReceiveMode$$module$as3shim$flash$net$NetGroupReceiveMode});
  setConst$$module$as3shim$flash$net$NetGroupReceiveMode(NetGroupReceiveMode$$module$as3shim$flash$net$NetGroupReceiveMode, "exact");
  setConst$$module$as3shim$flash$net$NetGroupReceiveMode(NetGroupReceiveMode$$module$as3shim$flash$net$NetGroupReceiveMode, "nearest");
  module$as3shim$flash$net$NetGroupReceiveMode.module$exports = NetGroupReceiveMode$$module$as3shim$flash$net$NetGroupReceiveMode;
  module$as3shim$flash$net$NetGroupReceiveMode.module$exports && (module$as3shim$flash$net$NetGroupReceiveMode = module$as3shim$flash$net$NetGroupReceiveMode.module$exports);
  var module$as3shim$flash$net$NetGroupReplicationStrategy = {}, tools$$module$as3shim$flash$net$NetGroupReplicationStrategy = module$as3shim$tools, Class$$module$as3shim$flash$net$NetGroupReplicationStrategy = module$as3shim$Class, setConst$$module$as3shim$flash$net$NetGroupReplicationStrategy = tools$$module$as3shim$flash$net$NetGroupReplicationStrategy.setConst;
  function NetGroupReplicationStrategy$$module$as3shim$flash$net$NetGroupReplicationStrategy() {
  }
  Class$$module$as3shim$flash$net$NetGroupReplicationStrategy({constructor:NetGroupReplicationStrategy$$module$as3shim$flash$net$NetGroupReplicationStrategy});
  setConst$$module$as3shim$flash$net$NetGroupReplicationStrategy(NetGroupReplicationStrategy$$module$as3shim$flash$net$NetGroupReplicationStrategy, "lowestFirst");
  setConst$$module$as3shim$flash$net$NetGroupReplicationStrategy(NetGroupReplicationStrategy$$module$as3shim$flash$net$NetGroupReplicationStrategy, "rarestFirst");
  module$as3shim$flash$net$NetGroupReplicationStrategy.module$exports = NetGroupReplicationStrategy$$module$as3shim$flash$net$NetGroupReplicationStrategy;
  module$as3shim$flash$net$NetGroupReplicationStrategy.module$exports && (module$as3shim$flash$net$NetGroupReplicationStrategy = module$as3shim$flash$net$NetGroupReplicationStrategy.module$exports);
  var module$as3shim$flash$net$NetGroupSendMode = {}, tools$$module$as3shim$flash$net$NetGroupSendMode = module$as3shim$tools, Class$$module$as3shim$flash$net$NetGroupSendMode = module$as3shim$Class, setConst$$module$as3shim$flash$net$NetGroupSendMode = tools$$module$as3shim$flash$net$NetGroupSendMode.setConst;
  function NetGroupSendMode$$module$as3shim$flash$net$NetGroupSendMode() {
  }
  Class$$module$as3shim$flash$net$NetGroupSendMode({constructor:NetGroupSendMode$$module$as3shim$flash$net$NetGroupSendMode});
  setConst$$module$as3shim$flash$net$NetGroupSendMode(NetGroupSendMode$$module$as3shim$flash$net$NetGroupSendMode, "NEXT_DECREASING", "nextDecreasing");
  setConst$$module$as3shim$flash$net$NetGroupSendMode(NetGroupSendMode$$module$as3shim$flash$net$NetGroupSendMode, "NEXT_INCREASING", "nextIncreasing");
  module$as3shim$flash$net$NetGroupSendMode.module$exports = NetGroupSendMode$$module$as3shim$flash$net$NetGroupSendMode;
  module$as3shim$flash$net$NetGroupSendMode.module$exports && (module$as3shim$flash$net$NetGroupSendMode = module$as3shim$flash$net$NetGroupSendMode.module$exports);
  var module$as3shim$flash$net$NetGroupSendResult = {}, tools$$module$as3shim$flash$net$NetGroupSendResult = module$as3shim$tools, Class$$module$as3shim$flash$net$NetGroupSendResult = module$as3shim$Class, setConst$$module$as3shim$flash$net$NetGroupSendResult = tools$$module$as3shim$flash$net$NetGroupSendResult.setConst;
  function NetGroupSendResult$$module$as3shim$flash$net$NetGroupSendResult() {
  }
  Class$$module$as3shim$flash$net$NetGroupSendResult({constructor:NetGroupSendResult$$module$as3shim$flash$net$NetGroupSendResult});
  setConst$$module$as3shim$flash$net$NetGroupSendResult(NetGroupSendResult$$module$as3shim$flash$net$NetGroupSendResult, "error");
  setConst$$module$as3shim$flash$net$NetGroupSendResult(NetGroupSendResult$$module$as3shim$flash$net$NetGroupSendResult, "no route");
  setConst$$module$as3shim$flash$net$NetGroupSendResult(NetGroupSendResult$$module$as3shim$flash$net$NetGroupSendResult, "sent");
  module$as3shim$flash$net$NetGroupSendResult.module$exports = NetGroupSendResult$$module$as3shim$flash$net$NetGroupSendResult;
  module$as3shim$flash$net$NetGroupSendResult.module$exports && (module$as3shim$flash$net$NetGroupSendResult = module$as3shim$flash$net$NetGroupSendResult.module$exports);
  var module$as3shim$flash$net$NetMonitor = {}, tools$$module$as3shim$flash$net$NetMonitor = module$as3shim$tools, Class$$module$as3shim$flash$net$NetMonitor = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetMonitor = tools$$module$as3shim$flash$net$NetMonitor.createDummyFunction;
  function NetMonitor$$module$as3shim$flash$net$NetMonitor() {
  }
  Class$$module$as3shim$flash$net$NetMonitor({constructor:NetMonitor$$module$as3shim$flash$net$NetMonitor, listStreams:createDummyFunction$$module$as3shim$flash$net$NetMonitor({name:"listStreams", returnType:""})});
  module$as3shim$flash$net$NetMonitor.module$exports = NetMonitor$$module$as3shim$flash$net$NetMonitor;
  module$as3shim$flash$net$NetMonitor.module$exports && (module$as3shim$flash$net$NetMonitor = module$as3shim$flash$net$NetMonitor.module$exports);
  var module$as3shim$flash$net$NetStream = {}, tools$$module$as3shim$flash$net$NetStream = module$as3shim$tools, Class$$module$as3shim$flash$net$NetStream = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetStream = tools$$module$as3shim$flash$net$NetStream.createDummyFunction, noop$$module$as3shim$flash$net$NetStream = tools$$module$as3shim$flash$net$NetStream.noop, setConst$$module$as3shim$flash$net$NetStream = tools$$module$as3shim$flash$net$NetStream.setConst, setDescriptor$$module$as3shim$flash$net$NetStream = 
  tools$$module$as3shim$flash$net$NetStream.setDescriptor;
  function NetStream$$module$as3shim$flash$net$NetStream() {
  }
  Class$$module$as3shim$flash$net$NetStream({constructor:NetStream$$module$as3shim$flash$net$NetStream, appendBytes:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"appendBytes", returnType:"void"}), appendBytesAction:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"appendBytesAction", returnType:"void"}), attach:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"attach", returnType:"void"}), attachAudio:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"attachAudio", 
  returnType:"void"}), attachCamera:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"attachCamera", returnType:"void"}), close:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"close", returnType:"void"}), onPeerConnect:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"onPeerConnect", returnType:"Boolean"}), pause:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"pause", returnType:"void"}), play:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"play", 
  returnType:"void"}), play2:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"play2", returnType:"void"}), publish:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"publish", returnType:"void"}), receiveAudio:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"receiveAudio", returnType:"void"}), receiveVideo:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"receiveVideo", returnType:"void"}), receiveVideoFPS:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"receiveVideoFPS", 
  returnType:"void"}), resume:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"resume", returnType:"void"}), seek:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"seek", returnType:"void"}), send:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"send", returnType:"void"}), step:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"step", returnType:"void"}), togglePause:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"togglePause", returnType:"void"})});
  setConst$$module$as3shim$flash$net$NetStream(NetStream$$module$as3shim$flash$net$NetStream, "connectToFMS");
  setConst$$module$as3shim$flash$net$NetStream(NetStream$$module$as3shim$flash$net$NetStream, "directConnections");
  var proto$$module$as3shim$flash$net$NetStream = NetStream$$module$as3shim$flash$net$NetStream.prototype;
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "audioCodec", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"audioCodec", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "audioReliable", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"audioReliable", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "audioSampleAccess", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"audioSampleAccess", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "backBufferLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"backBufferLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "backBufferTime", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"backBufferTime", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "bufferLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"bufferLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "bufferTime", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"bufferTime", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "bufferTimeMax", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"bufferTimeMax", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "bytesLoaded", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"bytesLoaded", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "bytesTotal", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"bytesTotal", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "checkPolicyFile", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"checkPolicyFile", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "client", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"client", returnType:"Object"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "currentFPS", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"currentFPS", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "dataReliable", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"dataReliable", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "decodedFrames", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"decodedFrames", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "farID", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"farID", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "farNonce", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"farNonce", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "inBufferSeek", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"inBufferSeek", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "info", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"info", returnType:""})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "liveDelay", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"liveDelay", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "maxPauseBufferTime", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"maxPauseBufferTime", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastAvailabilitySendToAll", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastAvailabilitySendToAll", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastAvailabilityUpdatePeriod", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastAvailabilityUpdatePeriod", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastFetchPeriod", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastFetchPeriod", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastInfo", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastInfo", returnType:""})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastPushNeighborLimit", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastPushNeighborLimit", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastRelayMarginDuration", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastRelayMarginDuration", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "multicastWindowDuration", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"multicastWindowDuration", returnType:"Number"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "nearNonce", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"nearNonce", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "objectEncoding", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"objectEncoding", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "peerStreams", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"peerStreams", returnType:"Array"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "soundTransform", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"soundTransform", returnType:""}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "time", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"time", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "videoCodec", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"videoCodec", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "videoReliable", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"videoReliable", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  setDescriptor$$module$as3shim$flash$net$NetStream(proto$$module$as3shim$flash$net$NetStream, "videoSampleAccess", {get:createDummyFunction$$module$as3shim$flash$net$NetStream({name:"videoSampleAccess", returnType:"Boolean"}), set:noop$$module$as3shim$flash$net$NetStream});
  module$as3shim$flash$net$NetStream.module$exports = NetStream$$module$as3shim$flash$net$NetStream;
  module$as3shim$flash$net$NetStream.module$exports && (module$as3shim$flash$net$NetStream = module$as3shim$flash$net$NetStream.module$exports);
  var module$as3shim$flash$net$NetStreamAppendBytesAction = {}, tools$$module$as3shim$flash$net$NetStreamAppendBytesAction = module$as3shim$tools, Class$$module$as3shim$flash$net$NetStreamAppendBytesAction = module$as3shim$Class, setConst$$module$as3shim$flash$net$NetStreamAppendBytesAction = tools$$module$as3shim$flash$net$NetStreamAppendBytesAction.setConst;
  function NetStreamAppendBytesAction$$module$as3shim$flash$net$NetStreamAppendBytesAction() {
  }
  Class$$module$as3shim$flash$net$NetStreamAppendBytesAction({constructor:NetStreamAppendBytesAction$$module$as3shim$flash$net$NetStreamAppendBytesAction});
  setConst$$module$as3shim$flash$net$NetStreamAppendBytesAction(NetStreamAppendBytesAction$$module$as3shim$flash$net$NetStreamAppendBytesAction, "endSequence");
  setConst$$module$as3shim$flash$net$NetStreamAppendBytesAction(NetStreamAppendBytesAction$$module$as3shim$flash$net$NetStreamAppendBytesAction, "resetBegin");
  setConst$$module$as3shim$flash$net$NetStreamAppendBytesAction(NetStreamAppendBytesAction$$module$as3shim$flash$net$NetStreamAppendBytesAction, "resetSeek");
  module$as3shim$flash$net$NetStreamAppendBytesAction.module$exports = NetStreamAppendBytesAction$$module$as3shim$flash$net$NetStreamAppendBytesAction;
  module$as3shim$flash$net$NetStreamAppendBytesAction.module$exports && (module$as3shim$flash$net$NetStreamAppendBytesAction = module$as3shim$flash$net$NetStreamAppendBytesAction.module$exports);
  var module$as3shim$flash$net$NetStreamInfo = {}, tools$$module$as3shim$flash$net$NetStreamInfo = module$as3shim$tools, Class$$module$as3shim$flash$net$NetStreamInfo = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetStreamInfo = tools$$module$as3shim$flash$net$NetStreamInfo.createDummyFunction, setDescriptor$$module$as3shim$flash$net$NetStreamInfo = tools$$module$as3shim$flash$net$NetStreamInfo.setDescriptor;
  function NetStreamInfo$$module$as3shim$flash$net$NetStreamInfo() {
  }
  Class$$module$as3shim$flash$net$NetStreamInfo({constructor:NetStreamInfo$$module$as3shim$flash$net$NetStreamInfo});
  var proto$$module$as3shim$flash$net$NetStreamInfo = NetStreamInfo$$module$as3shim$flash$net$NetStreamInfo.prototype;
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "audioBufferByteLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"audioBufferByteLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "audioBufferLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"audioBufferLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "audioByteCount", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"audioByteCount", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "audioBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"audioBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "audioLossRate", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"audioLossRate", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "byteCount", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"byteCount", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "currentBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"currentBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "dataBufferByteLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"dataBufferByteLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "dataBufferLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"dataBufferLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "dataByteCount", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"dataByteCount", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "dataBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"dataBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "droppedFrames", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"droppedFrames", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "isLive", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"isLive", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "maxBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"maxBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "metaData", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"metaData", returnType:"Object"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "playbackBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"playbackBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "resourceName", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"resourceName", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "SRTT", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"SRTT", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "uri", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"uri", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "videoBufferByteLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"videoBufferByteLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "videoBufferLength", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"videoBufferLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "videoByteCount", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"videoByteCount", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "videoBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"videoBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "videoLossRate", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"videoLossRate", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamInfo(proto$$module$as3shim$flash$net$NetStreamInfo, "xmpData", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamInfo({name:"xmpData", returnType:"Object"})});
  module$as3shim$flash$net$NetStreamInfo.module$exports = NetStreamInfo$$module$as3shim$flash$net$NetStreamInfo;
  module$as3shim$flash$net$NetStreamInfo.module$exports && (module$as3shim$flash$net$NetStreamInfo = module$as3shim$flash$net$NetStreamInfo.module$exports);
  var module$as3shim$flash$net$NetStreamMulticastInfo = {}, tools$$module$as3shim$flash$net$NetStreamMulticastInfo = module$as3shim$tools, Class$$module$as3shim$flash$net$NetStreamMulticastInfo = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo = tools$$module$as3shim$flash$net$NetStreamMulticastInfo.createDummyFunction, setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo = tools$$module$as3shim$flash$net$NetStreamMulticastInfo.setDescriptor;
  function NetStreamMulticastInfo$$module$as3shim$flash$net$NetStreamMulticastInfo() {
  }
  Class$$module$as3shim$flash$net$NetStreamMulticastInfo({constructor:NetStreamMulticastInfo$$module$as3shim$flash$net$NetStreamMulticastInfo});
  var proto$$module$as3shim$flash$net$NetStreamMulticastInfo = NetStreamMulticastInfo$$module$as3shim$flash$net$NetStreamMulticastInfo.prototype;
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "bytesPushedFromPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"bytesPushedFromPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "bytesPushedToPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"bytesPushedToPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "bytesReceivedFromIPMulticast", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"bytesReceivedFromIPMulticast", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "bytesReceivedFromServer", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"bytesReceivedFromServer", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "bytesRequestedByPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"bytesRequestedByPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "bytesRequestedFromPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"bytesRequestedFromPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "fragmentsPushedFromPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"fragmentsPushedFromPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "fragmentsPushedToPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"fragmentsPushedToPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "fragmentsReceivedFromIPMulticast", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"fragmentsReceivedFromIPMulticast", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "fragmentsReceivedFromServer", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"fragmentsReceivedFromServer", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "fragmentsRequestedByPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"fragmentsRequestedByPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "fragmentsRequestedFromPeers", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"fragmentsRequestedFromPeers", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "receiveControlBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"receiveControlBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "receiveDataBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"receiveDataBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "receiveDataBytesPerSecondFromIPMulticast", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"receiveDataBytesPerSecondFromIPMulticast", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "receiveDataBytesPerSecondFromServer", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"receiveDataBytesPerSecondFromServer", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "sendControlBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"sendControlBytesPerSecond", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "sendControlBytesPerSecondToServer", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"sendControlBytesPerSecondToServer", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$net$NetStreamMulticastInfo(proto$$module$as3shim$flash$net$NetStreamMulticastInfo, "sendDataBytesPerSecond", {get:createDummyFunction$$module$as3shim$flash$net$NetStreamMulticastInfo({name:"sendDataBytesPerSecond", returnType:"Number"})});
  module$as3shim$flash$net$NetStreamMulticastInfo.module$exports = NetStreamMulticastInfo$$module$as3shim$flash$net$NetStreamMulticastInfo;
  module$as3shim$flash$net$NetStreamMulticastInfo.module$exports && (module$as3shim$flash$net$NetStreamMulticastInfo = module$as3shim$flash$net$NetStreamMulticastInfo.module$exports);
  var module$as3shim$flash$net$NetStreamPlayTransitions = {}, tools$$module$as3shim$flash$net$NetStreamPlayTransitions = module$as3shim$tools, Class$$module$as3shim$flash$net$NetStreamPlayTransitions = module$as3shim$Class, setConst$$module$as3shim$flash$net$NetStreamPlayTransitions = tools$$module$as3shim$flash$net$NetStreamPlayTransitions.setConst;
  function NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions() {
  }
  Class$$module$as3shim$flash$net$NetStreamPlayTransitions({constructor:NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions});
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "append");
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "appendAndWait");
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "reset");
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "resume");
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "stop");
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "swap");
  setConst$$module$as3shim$flash$net$NetStreamPlayTransitions(NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions, "switch");
  module$as3shim$flash$net$NetStreamPlayTransitions.module$exports = NetStreamPlayTransitions$$module$as3shim$flash$net$NetStreamPlayTransitions;
  module$as3shim$flash$net$NetStreamPlayTransitions.module$exports && (module$as3shim$flash$net$NetStreamPlayTransitions = module$as3shim$flash$net$NetStreamPlayTransitions.module$exports);
  var module$as3shim$flash$net$ObjectEncoding = {}, tools$$module$as3shim$flash$net$ObjectEncoding = module$as3shim$tools, Class$$module$as3shim$flash$net$ObjectEncoding = module$as3shim$Class, setConst$$module$as3shim$flash$net$ObjectEncoding = tools$$module$as3shim$flash$net$ObjectEncoding.setConst;
  function ObjectEncoding$$module$as3shim$flash$net$ObjectEncoding() {
    this.dynamicPropertyWriter = null
  }
  setConst$$module$as3shim$flash$net$ObjectEncoding(ObjectEncoding$$module$as3shim$flash$net$ObjectEncoding, "AMF0", 0);
  setConst$$module$as3shim$flash$net$ObjectEncoding(ObjectEncoding$$module$as3shim$flash$net$ObjectEncoding, "AMF3", 3);
  setConst$$module$as3shim$flash$net$ObjectEncoding(ObjectEncoding$$module$as3shim$flash$net$ObjectEncoding, "DEFAULT", 3);
  Class$$module$as3shim$flash$net$ObjectEncoding({constructor:ObjectEncoding$$module$as3shim$flash$net$ObjectEncoding});
  module$as3shim$flash$net$ObjectEncoding.module$exports = ObjectEncoding$$module$as3shim$flash$net$ObjectEncoding;
  module$as3shim$flash$net$ObjectEncoding.module$exports && (module$as3shim$flash$net$ObjectEncoding = module$as3shim$flash$net$ObjectEncoding.module$exports);
  var module$as3shim$flash$net$SharedObjectFlushStatus = {}, tools$$module$as3shim$flash$net$SharedObjectFlushStatus = module$as3shim$tools, Class$$module$as3shim$flash$net$SharedObjectFlushStatus = module$as3shim$Class, setConst$$module$as3shim$flash$net$SharedObjectFlushStatus = tools$$module$as3shim$flash$net$SharedObjectFlushStatus.setConst;
  function SharedObjectFlushStatus$$module$as3shim$flash$net$SharedObjectFlushStatus() {
  }
  setConst$$module$as3shim$flash$net$SharedObjectFlushStatus(SharedObjectFlushStatus$$module$as3shim$flash$net$SharedObjectFlushStatus, "flushed");
  setConst$$module$as3shim$flash$net$SharedObjectFlushStatus(SharedObjectFlushStatus$$module$as3shim$flash$net$SharedObjectFlushStatus, "pending");
  Class$$module$as3shim$flash$net$SharedObjectFlushStatus({constructor:SharedObjectFlushStatus$$module$as3shim$flash$net$SharedObjectFlushStatus});
  module$as3shim$flash$net$SharedObjectFlushStatus.module$exports = SharedObjectFlushStatus$$module$as3shim$flash$net$SharedObjectFlushStatus;
  module$as3shim$flash$net$SharedObjectFlushStatus.module$exports && (module$as3shim$flash$net$SharedObjectFlushStatus = module$as3shim$flash$net$SharedObjectFlushStatus.module$exports);
  var module$as3shim$flash$net$Socket = {}, tools$$module$as3shim$flash$net$Socket = module$as3shim$tools, Class$$module$as3shim$flash$net$Socket = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$Socket = tools$$module$as3shim$flash$net$Socket.createDummyFunction, noop$$module$as3shim$flash$net$Socket = tools$$module$as3shim$flash$net$Socket.noop, setDescriptor$$module$as3shim$flash$net$Socket = tools$$module$as3shim$flash$net$Socket.setDescriptor;
  function Socket$$module$as3shim$flash$net$Socket() {
  }
  Class$$module$as3shim$flash$net$Socket({constructor:Socket$$module$as3shim$flash$net$Socket, close:createDummyFunction$$module$as3shim$flash$net$Socket({name:"close", returnType:"void"}), connect:createDummyFunction$$module$as3shim$flash$net$Socket({name:"connect", returnType:"void"}), flush:createDummyFunction$$module$as3shim$flash$net$Socket({name:"flush", returnType:"void"}), readBoolean:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readBoolean", returnType:"Boolean"}), readByte:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readByte", 
  returnType:"int"}), readBytes:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readBytes", returnType:"void"}), readDouble:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readDouble", returnType:"Number"}), readFloat:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readFloat", returnType:"Number"}), readInt:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readInt", returnType:"int"}), readMultiByte:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readMultiByte", 
  returnType:"String"}), readObject:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readObject", returnType:""}), readShort:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readShort", returnType:"int"}), readUnsignedByte:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readUnsignedByte", returnType:"uint"}), readUnsignedInt:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readUnsignedInt", returnType:"uint"}), readUnsignedShort:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readUnsignedShort", 
  returnType:"uint"}), readUTF:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readUTF", returnType:"String"}), readUTFBytes:createDummyFunction$$module$as3shim$flash$net$Socket({name:"readUTFBytes", returnType:"String"}), writeBoolean:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeBoolean", returnType:"void"}), writeByte:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeByte", returnType:"void"}), writeBytes:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeBytes", 
  returnType:"void"}), writeDouble:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeDouble", returnType:"void"}), writeFloat:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeFloat", returnType:"void"}), writeInt:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeInt", returnType:"void"}), writeMultiByte:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeMultiByte", returnType:"void"}), writeObject:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeObject", 
  returnType:"void"}), writeShort:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeShort", returnType:"void"}), writeUnsignedInt:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeUnsignedInt", returnType:"void"}), writeUTF:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeUTF", returnType:"void"}), writeUTFBytes:createDummyFunction$$module$as3shim$flash$net$Socket({name:"writeUTFBytes", returnType:"void"})});
  var proto$$module$as3shim$flash$net$Socket = Socket$$module$as3shim$flash$net$Socket.prototype;
  setDescriptor$$module$as3shim$flash$net$Socket(proto$$module$as3shim$flash$net$Socket, "bytesAvailable", {get:createDummyFunction$$module$as3shim$flash$net$Socket({name:"bytesAvailable", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$Socket(proto$$module$as3shim$flash$net$Socket, "connected", {get:createDummyFunction$$module$as3shim$flash$net$Socket({name:"connected", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$net$Socket(proto$$module$as3shim$flash$net$Socket, "endian", {get:createDummyFunction$$module$as3shim$flash$net$Socket({name:"endian", returnType:"String"}), set:noop$$module$as3shim$flash$net$Socket});
  setDescriptor$$module$as3shim$flash$net$Socket(proto$$module$as3shim$flash$net$Socket, "objectEncoding", {get:createDummyFunction$$module$as3shim$flash$net$Socket({name:"objectEncoding", returnType:"uint"}), set:noop$$module$as3shim$flash$net$Socket});
  setDescriptor$$module$as3shim$flash$net$Socket(proto$$module$as3shim$flash$net$Socket, "timeout", {get:createDummyFunction$$module$as3shim$flash$net$Socket({name:"timeout", returnType:"uint"}), set:noop$$module$as3shim$flash$net$Socket});
  module$as3shim$flash$net$Socket.module$exports = Socket$$module$as3shim$flash$net$Socket;
  module$as3shim$flash$net$Socket.module$exports && (module$as3shim$flash$net$Socket = module$as3shim$flash$net$Socket.module$exports);
  var module$as3shim$flash$net$URLLoaderDataFormat = {}, tools$$module$as3shim$flash$net$URLLoaderDataFormat = module$as3shim$tools, Class$$module$as3shim$flash$net$URLLoaderDataFormat = module$as3shim$Class, setConst$$module$as3shim$flash$net$URLLoaderDataFormat = tools$$module$as3shim$flash$net$URLLoaderDataFormat.setConst;
  function URLLoaderDataFormat$$module$as3shim$flash$net$URLLoaderDataFormat() {
  }
  setConst$$module$as3shim$flash$net$URLLoaderDataFormat(URLLoaderDataFormat$$module$as3shim$flash$net$URLLoaderDataFormat, "binary");
  setConst$$module$as3shim$flash$net$URLLoaderDataFormat(URLLoaderDataFormat$$module$as3shim$flash$net$URLLoaderDataFormat, "text");
  setConst$$module$as3shim$flash$net$URLLoaderDataFormat(URLLoaderDataFormat$$module$as3shim$flash$net$URLLoaderDataFormat, "variables");
  Class$$module$as3shim$flash$net$URLLoaderDataFormat({constructor:URLLoaderDataFormat$$module$as3shim$flash$net$URLLoaderDataFormat});
  module$as3shim$flash$net$URLLoaderDataFormat.module$exports = URLLoaderDataFormat$$module$as3shim$flash$net$URLLoaderDataFormat;
  module$as3shim$flash$net$URLLoaderDataFormat.module$exports && (module$as3shim$flash$net$URLLoaderDataFormat = module$as3shim$flash$net$URLLoaderDataFormat.module$exports);
  var module$as3shim$flash$net$URLRequestHeader = {}, Class$$module$as3shim$flash$net$URLRequestHeader = module$as3shim$Class;
  function URLRequestHeader$$module$as3shim$flash$net$URLRequestHeader(a, b) {
    this.name = a;
    this.value = b
  }
  Class$$module$as3shim$flash$net$URLRequestHeader({constructor:URLRequestHeader$$module$as3shim$flash$net$URLRequestHeader});
  module$as3shim$flash$net$URLRequestHeader.module$exports = URLRequestHeader$$module$as3shim$flash$net$URLRequestHeader;
  module$as3shim$flash$net$URLRequestHeader.module$exports && (module$as3shim$flash$net$URLRequestHeader = module$as3shim$flash$net$URLRequestHeader.module$exports);
  var module$as3shim$flash$net$URLRequestMethod = {}, tools$$module$as3shim$flash$net$URLRequestMethod = module$as3shim$tools, Class$$module$as3shim$flash$net$URLRequestMethod = module$as3shim$Class, setConst$$module$as3shim$flash$net$URLRequestMethod = tools$$module$as3shim$flash$net$URLRequestMethod.setConst;
  function URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod() {
  }
  setConst$$module$as3shim$flash$net$URLRequestMethod(URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod, "DELETE");
  setConst$$module$as3shim$flash$net$URLRequestMethod(URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod, "GET");
  setConst$$module$as3shim$flash$net$URLRequestMethod(URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod, "HEAD");
  setConst$$module$as3shim$flash$net$URLRequestMethod(URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod, "OPTIONS");
  setConst$$module$as3shim$flash$net$URLRequestMethod(URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod, "POST");
  setConst$$module$as3shim$flash$net$URLRequestMethod(URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod, "PUT");
  Class$$module$as3shim$flash$net$URLRequestMethod({constructor:URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod});
  module$as3shim$flash$net$URLRequestMethod.module$exports = URLRequestMethod$$module$as3shim$flash$net$URLRequestMethod;
  module$as3shim$flash$net$URLRequestMethod.module$exports && (module$as3shim$flash$net$URLRequestMethod = module$as3shim$flash$net$URLRequestMethod.module$exports);
  var module$as3shim$flash$net$URLRequest = {}, global$$module$as3shim$flash$net$URLRequest = module$as3shim$global, Class$$module$as3shim$flash$net$URLRequest = module$as3shim$Class, URLRequestMethod$$module$as3shim$flash$net$URLRequest = module$as3shim$flash$net$URLRequestMethod, userAgent$$module$as3shim$flash$net$URLRequest = global$$module$as3shim$flash$net$URLRequest.navigator && navigator.userAgent || "";
  function URLRequest$$module$as3shim$flash$net$URLRequest(a) {
    this.digest = this.data = this.contentType = null;
    this.method = URLRequestMethod$$module$as3shim$flash$net$URLRequest.GET;
    this.requestHeaders = [];
    this.url = a;
    this.userAgent = userAgent$$module$as3shim$flash$net$URLRequest
  }
  Class$$module$as3shim$flash$net$URLRequest({constructor:URLRequest$$module$as3shim$flash$net$URLRequest});
  module$as3shim$flash$net$URLRequest.module$exports = URLRequest$$module$as3shim$flash$net$URLRequest;
  module$as3shim$flash$net$URLRequest.module$exports && (module$as3shim$flash$net$URLRequest = module$as3shim$flash$net$URLRequest.module$exports);
  var module$as3shim$flash$net$URLStream = {}, tools$$module$as3shim$flash$net$URLStream = module$as3shim$tools, Class$$module$as3shim$flash$net$URLStream = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$URLStream = tools$$module$as3shim$flash$net$URLStream.createDummyFunction, noop$$module$as3shim$flash$net$URLStream = tools$$module$as3shim$flash$net$URLStream.noop, setDescriptor$$module$as3shim$flash$net$URLStream = tools$$module$as3shim$flash$net$URLStream.setDescriptor;
  function URLStream$$module$as3shim$flash$net$URLStream() {
  }
  Class$$module$as3shim$flash$net$URLStream({constructor:URLStream$$module$as3shim$flash$net$URLStream, close:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"close", returnType:"void"}), load:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"load", returnType:"void"}), readBoolean:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readBoolean", returnType:"Boolean"}), readByte:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readByte", returnType:"int"}), 
  readBytes:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readBytes", returnType:"void"}), readDouble:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readDouble", returnType:"Number"}), readFloat:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readFloat", returnType:"Number"}), readInt:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readInt", returnType:"int"}), readMultiByte:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readMultiByte", 
  returnType:"String"}), readObject:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readObject", returnType:""}), readShort:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readShort", returnType:"int"}), readUnsignedByte:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readUnsignedByte", returnType:"uint"}), readUnsignedInt:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readUnsignedInt", returnType:"uint"}), readUnsignedShort:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readUnsignedShort", 
  returnType:"uint"}), readUTF:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readUTF", returnType:"String"}), readUTFBytes:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"readUTFBytes", returnType:"String"})});
  var proto$$module$as3shim$flash$net$URLStream = URLStream$$module$as3shim$flash$net$URLStream.prototype;
  setDescriptor$$module$as3shim$flash$net$URLStream(proto$$module$as3shim$flash$net$URLStream, "bytesAvailable", {get:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"bytesAvailable", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$net$URLStream(proto$$module$as3shim$flash$net$URLStream, "connected", {get:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"connected", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$net$URLStream(proto$$module$as3shim$flash$net$URLStream, "endian", {get:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"endian", returnType:"String"}), set:noop$$module$as3shim$flash$net$URLStream});
  setDescriptor$$module$as3shim$flash$net$URLStream(proto$$module$as3shim$flash$net$URLStream, "objectEncoding", {get:createDummyFunction$$module$as3shim$flash$net$URLStream({name:"objectEncoding", returnType:"uint"}), set:noop$$module$as3shim$flash$net$URLStream});
  module$as3shim$flash$net$URLStream.module$exports = URLStream$$module$as3shim$flash$net$URLStream;
  module$as3shim$flash$net$URLStream.module$exports && (module$as3shim$flash$net$URLStream = module$as3shim$flash$net$URLStream.module$exports);
  var module$as3shim$flash$net$URLVariables = {}, bonsai$$module$as3shim$flash$net$URLVariables = module$as3shim$bonsai, global$$module$as3shim$flash$net$URLVariables = module$as3shim$global, tools$$module$as3shim$flash$net$URLVariables = module$as3shim$tools, Class$$module$as3shim$flash$net$URLVariables = module$as3shim$Class, identity$$module$as3shim$flash$net$URLVariables = function(a) {
    return a
  }, decodeURIComponent$$module$as3shim$flash$net$URLVariables = global$$module$as3shim$flash$net$URLVariables.decodeURIComponent || identity$$module$as3shim$flash$net$URLVariables, encodeURIComponent$$module$as3shim$flash$net$URLVariables = global$$module$as3shim$flash$net$URLVariables.encodeURIComponent || identity$$module$as3shim$flash$net$URLVariables, expando$$module$as3shim$flash$net$URLVariables = tools$$module$as3shim$flash$net$URLVariables.expando;
  function URLVariables$$module$as3shim$flash$net$URLVariables(a) {
    tools$$module$as3shim$flash$net$URLVariables.mixin(this, decode$$module$as3shim$flash$net$URLVariables(a))
  }
  function decode$$module$as3shim$flash$net$URLVariables(a) {
    return tools$$module$as3shim$flash$net$URLVariables.reduce((a || "").split("&"), function(a, c) {
      c && (c = tools$$module$as3shim$flash$net$URLVariables.map(c.split("="), decodeURIComponent$$module$as3shim$flash$net$URLVariables), tools$$module$as3shim$flash$net$URLVariables.hasKey(a, c[0]) || (a[c.shift()] = c.join("=")));
      return a
    }, {})
  }
  function toString$$module$as3shim$flash$net$URLVariables() {
    var a = [];
    tools$$module$as3shim$flash$net$URLVariables.forOwn(this, function(b, c) {
      a.push(encodeURIComponent$$module$as3shim$flash$net$URLVariables(c) + "=" + encodeURIComponent$$module$as3shim$flash$net$URLVariables(b))
    });
    return a.join("&")
  }
  Class$$module$as3shim$flash$net$URLVariables({constructor:URLVariables$$module$as3shim$flash$net$URLVariables, decode:decode$$module$as3shim$flash$net$URLVariables, toString:toString$$module$as3shim$flash$net$URLVariables});
  module$as3shim$flash$net$URLVariables.module$exports = URLVariables$$module$as3shim$flash$net$URLVariables;
  module$as3shim$flash$net$URLVariables.module$exports && (module$as3shim$flash$net$URLVariables = module$as3shim$flash$net$URLVariables.module$exports);
  var module$as3shim$flash$net$XMLSocket = {}, tools$$module$as3shim$flash$net$XMLSocket = module$as3shim$tools, Class$$module$as3shim$flash$net$XMLSocket = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$net$XMLSocket = tools$$module$as3shim$flash$net$XMLSocket.createDummyFunction, noop$$module$as3shim$flash$net$XMLSocket = tools$$module$as3shim$flash$net$XMLSocket.noop, setDescriptor$$module$as3shim$flash$net$XMLSocket = tools$$module$as3shim$flash$net$XMLSocket.setDescriptor;
  function XMLSocket$$module$as3shim$flash$net$XMLSocket() {
  }
  Class$$module$as3shim$flash$net$XMLSocket({constructor:XMLSocket$$module$as3shim$flash$net$XMLSocket, close:createDummyFunction$$module$as3shim$flash$net$XMLSocket({name:"close", returnType:"void"}), connect:createDummyFunction$$module$as3shim$flash$net$XMLSocket({name:"connect", returnType:"void"}), send:createDummyFunction$$module$as3shim$flash$net$XMLSocket({name:"send", returnType:"void"})});
  var proto$$module$as3shim$flash$net$XMLSocket = XMLSocket$$module$as3shim$flash$net$XMLSocket.prototype;
  setDescriptor$$module$as3shim$flash$net$XMLSocket(proto$$module$as3shim$flash$net$XMLSocket, "connected", {get:createDummyFunction$$module$as3shim$flash$net$XMLSocket({name:"connected", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$net$XMLSocket(proto$$module$as3shim$flash$net$XMLSocket, "timeout", {get:createDummyFunction$$module$as3shim$flash$net$XMLSocket({name:"timeout", returnType:"int"}), set:noop$$module$as3shim$flash$net$XMLSocket});
  module$as3shim$flash$net$XMLSocket.module$exports = XMLSocket$$module$as3shim$flash$net$XMLSocket;
  module$as3shim$flash$net$XMLSocket.module$exports && (module$as3shim$flash$net$XMLSocket = module$as3shim$flash$net$XMLSocket.module$exports);
  var module$as3shim$flash$system$Capabilities = {}, tools$$module$as3shim$flash$system$Capabilities = module$as3shim$tools, Class$$module$as3shim$flash$system$Capabilities = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$system$Capabilities = tools$$module$as3shim$flash$system$Capabilities.createDummyFunction, setDescriptor$$module$as3shim$flash$system$Capabilities = tools$$module$as3shim$flash$system$Capabilities.setDescriptor;
  function Capabilities$$module$as3shim$flash$system$Capabilities() {
  }
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "avHardwareDisable", {writable:!1, value:!0});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "cpuArchitecture", {writable:!1, value:"x86"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasAccessibility", {writable:!1, value:!0});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasAudio", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasAudioEncoder", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasEmbeddedVideo", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasIME", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasMP3", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasPrinting", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasScreenBroadcast", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasScreenPlayback", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasStreamingAudio", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasStreamingVideo", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasTLS", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "hasVideoEncoder", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "isDebugger", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "isEmbeddedInAcrobat", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "language", {writable:!1, value:"xu"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "localFileReadDisable", {writable:!1, value:!0});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "manufacturer", {writable:!1, value:"Adobe_Other"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "maxLevelIDC", {writable:!1, value:"5.1"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "os", {writable:!1, value:"OS"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "pixelAspectRatio", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "playerType", {writable:!1, value:"PlugIn"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "screenColor", {writable:!1, value:"color"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "screenDPI", {writable:!1, value:72});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "screenResolutionX", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "screenResolutionY", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "serverString", {writable:!1, value:"A=f&SA=f&SV=f&EV=f&MP3=f&AE=f&VE=f&ACC=f&PR=f&SP=f&SB=f&DEB=f&V=10&M=Adobe_Other&R=0x0&DP=72&COL=color&AR=0&OS=OS&L=xu&PT=PlugIn&AVD=t&LFD=t&WD=f"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "supports32BitProcesses", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "supports64BitProcesses", {writable:!1, value:!1});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "touchscreenType", {writable:!1, value:"finger"});
  setDescriptor$$module$as3shim$flash$system$Capabilities(Capabilities$$module$as3shim$flash$system$Capabilities, "version", {writable:!1, value:"10"});
  Class$$module$as3shim$flash$system$Capabilities({constructor:Capabilities$$module$as3shim$flash$system$Capabilities});
  var proto$$module$as3shim$flash$system$Capabilities = Capabilities$$module$as3shim$flash$system$Capabilities.prototype;
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "_internal", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"_internal", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "avHardwareDisable", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"avHardwareDisable", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "cpuArchitecture", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"cpuArchitecture", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasAccessibility", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasAccessibility", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasAudio", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasAudio", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasAudioEncoder", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasAudioEncoder", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasEmbeddedVideo", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasEmbeddedVideo", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasIME", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasIME", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasMP3", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasMP3", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasPrinting", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasPrinting", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasScreenBroadcast", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasScreenBroadcast", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasScreenPlayback", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasScreenPlayback", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasStreamingAudio", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasStreamingAudio", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasStreamingVideo", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasStreamingVideo", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasTLS", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasTLS", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "hasVideoEncoder", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"hasVideoEncoder", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "isDebugger", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"isDebugger", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "isEmbeddedInAcrobat", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"isEmbeddedInAcrobat", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "language", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"language", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "localFileReadDisable", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"localFileReadDisable", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "manufacturer", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"manufacturer", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "maxLevelIDC", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"maxLevelIDC", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "os", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"os", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "pixelAspectRatio", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"pixelAspectRatio", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "playerType", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"playerType", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "screenColor", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"screenColor", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "screenDPI", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"screenDPI", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "screenResolutionX", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"screenResolutionX", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "screenResolutionY", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"screenResolutionY", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "serverString", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"serverString", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "supports32BitProcesses", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"supports32BitProcesses", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "supports64BitProcesses", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"supports64BitProcesses", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "touchscreenType", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"touchscreenType", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$system$Capabilities(proto$$module$as3shim$flash$system$Capabilities, "version", {get:createDummyFunction$$module$as3shim$flash$system$Capabilities({name:"version", returnType:"String"})});
  module$as3shim$flash$system$Capabilities.module$exports = Capabilities$$module$as3shim$flash$system$Capabilities;
  module$as3shim$flash$system$Capabilities.module$exports && (module$as3shim$flash$system$Capabilities = module$as3shim$flash$system$Capabilities.module$exports);
  var module$as3shim$flash$system$System = {}, tools$$module$as3shim$flash$system$System = module$as3shim$tools, Class$$module$as3shim$flash$system$System = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$system$System = tools$$module$as3shim$flash$system$System.createDummyFunction, noop$$module$as3shim$flash$system$System = tools$$module$as3shim$flash$system$System.noop, setDescriptor$$module$as3shim$flash$system$System = tools$$module$as3shim$flash$system$System.setDescriptor;
  function System$$module$as3shim$flash$system$System() {
  }
  setDescriptor$$module$as3shim$flash$system$System(System$$module$as3shim$flash$system$System, "freeMemory", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$System(System$$module$as3shim$flash$system$System, "ime", {writable:!1, value:null});
  setDescriptor$$module$as3shim$flash$system$System(System$$module$as3shim$flash$system$System, "privateMemory", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$System(System$$module$as3shim$flash$system$System, "totalMemory", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$System(System$$module$as3shim$flash$system$System, "totalMemoryNumber", {writable:!1, value:0});
  setDescriptor$$module$as3shim$flash$system$System(System$$module$as3shim$flash$system$System, "vmVersion", {writable:!1, value:0});
  function disposeXML$$module$as3shim$flash$system$System() {
    console.error("disposeXML: Intentionally unimplemented")
  }
  function exit$$module$as3shim$flash$system$System() {
    console.error("exit: Intentionally unimplemented")
  }
  function gc$$module$as3shim$flash$system$System() {
    console.error("gc: Intentionally unimplemented")
  }
  function pause$$module$as3shim$flash$system$System() {
    console.error("pause: Intentionally unimplemented")
  }
  function pauseForGCIfCollectionImminent$$module$as3shim$flash$system$System() {
    console.error("pauseForGCIfCollectionImminent: Intentionally unimplemented")
  }
  function resume$$module$as3shim$flash$system$System() {
    console.error("resume: Intentionally unimplemented")
  }
  function setClipboard$$module$as3shim$flash$system$System() {
    console.error("setClipboard: Intentionally unimplemented")
  }
  System$$module$as3shim$flash$system$System.disposeXML = disposeXML$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.exit = exit$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.gc = gc$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.nativeConstructionOnly = createDummyFunction$$module$as3shim$flash$system$System({name:"nativeConstructionOnly", returnType:"void"});
  System$$module$as3shim$flash$system$System.pause = pause$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.pauseForGCIfCollectionImminent = pauseForGCIfCollectionImminent$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.resume = resume$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.setClipboard = setClipboard$$module$as3shim$flash$system$System;
  System$$module$as3shim$flash$system$System.useCodePage = !1;
  Class$$module$as3shim$flash$system$System({constructor:System$$module$as3shim$flash$system$System});
  var proto$$module$as3shim$flash$system$System = System$$module$as3shim$flash$system$System.prototype;
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "freeMemory", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"freeMemory", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "ime", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"ime", returnType:""})});
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "privateMemory", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"privateMemory", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "totalMemory", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"totalMemory", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "totalMemoryNumber", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"totalMemoryNumber", returnType:"Number"})});
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "useCodePage", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"useCodePage", returnType:"Boolean"}), set:noop$$module$as3shim$flash$system$System});
  setDescriptor$$module$as3shim$flash$system$System(proto$$module$as3shim$flash$system$System, "vmVersion", {get:createDummyFunction$$module$as3shim$flash$system$System({name:"vmVersion", returnType:"String"})});
  module$as3shim$flash$system$System.module$exports = System$$module$as3shim$flash$system$System;
  module$as3shim$flash$system$System.module$exports && (module$as3shim$flash$system$System = module$as3shim$flash$system$System.module$exports);
  var module$as3shim$flash$text$AntiAliasType = {}, tools$$module$as3shim$flash$text$AntiAliasType = module$as3shim$tools, Class$$module$as3shim$flash$text$AntiAliasType = module$as3shim$Class;
  function AntiAliasType$$module$as3shim$flash$text$AntiAliasType() {
  }
  tools$$module$as3shim$flash$text$AntiAliasType.setConst(AntiAliasType$$module$as3shim$flash$text$AntiAliasType, "advanced");
  tools$$module$as3shim$flash$text$AntiAliasType.setConst(AntiAliasType$$module$as3shim$flash$text$AntiAliasType, "normal");
  Class$$module$as3shim$flash$text$AntiAliasType({constructor:AntiAliasType$$module$as3shim$flash$text$AntiAliasType});
  module$as3shim$flash$text$AntiAliasType.module$exports = AntiAliasType$$module$as3shim$flash$text$AntiAliasType;
  module$as3shim$flash$text$AntiAliasType.module$exports && (module$as3shim$flash$text$AntiAliasType = module$as3shim$flash$text$AntiAliasType.module$exports);
  var module$as3shim$flash$text$CSMSettings = {}, Class$$module$as3shim$flash$text$CSMSettings = module$as3shim$Class;
  function CSMSettings$$module$as3shim$flash$text$CSMSettings(a, b, c) {
    this.fontSize = a;
    this.insideCutoff = Math.min(255, b);
    this.outsideCutoff = Math.max(0, c)
  }
  Class$$module$as3shim$flash$text$CSMSettings({constructor:CSMSettings$$module$as3shim$flash$text$CSMSettings});
  module$as3shim$flash$text$CSMSettings.module$exports = CSMSettings$$module$as3shim$flash$text$CSMSettings;
  module$as3shim$flash$text$CSMSettings.module$exports && (module$as3shim$flash$text$CSMSettings = module$as3shim$flash$text$CSMSettings.module$exports);
  var module$as3shim$flash$text$Font = {}, Class$$module$as3shim$flash$text$Font = module$as3shim$Class;
  function Font$$module$as3shim$flash$text$Font() {
    this.fontType = this.fontStyle = this.fontName = null
  }
  function enumerateFonts$$module$as3shim$flash$text$Font() {
    console.error("enumerateFonts: unimplemented");
    return[]
  }
  function registerFont$$module$as3shim$flash$text$Font() {
    console.error("registerFont: unimplemented")
  }
  function hasGlyphs$$module$as3shim$flash$text$Font() {
    console.error("hasGlyphs: unimplemented")
  }
  Font$$module$as3shim$flash$text$Font.enumerateFonts = enumerateFonts$$module$as3shim$flash$text$Font;
  Font$$module$as3shim$flash$text$Font.registerFont = registerFont$$module$as3shim$flash$text$Font;
  Class$$module$as3shim$flash$text$Font({constructor:Font$$module$as3shim$flash$text$Font, hasGlyphs:hasGlyphs$$module$as3shim$flash$text$Font});
  module$as3shim$flash$text$Font.module$exports = Font$$module$as3shim$flash$text$Font;
  module$as3shim$flash$text$Font.module$exports && (module$as3shim$flash$text$Font = module$as3shim$flash$text$Font.module$exports);
  var module$as3shim$flash$text$FontStyle = {}, tools$$module$as3shim$flash$text$FontStyle = module$as3shim$tools, Class$$module$as3shim$flash$text$FontStyle = module$as3shim$Class;
  function FontStyle$$module$as3shim$flash$text$FontStyle() {
  }
  tools$$module$as3shim$flash$text$FontStyle.setConst(FontStyle$$module$as3shim$flash$text$FontStyle, "bold");
  tools$$module$as3shim$flash$text$FontStyle.setConst(FontStyle$$module$as3shim$flash$text$FontStyle, "boldItalic");
  tools$$module$as3shim$flash$text$FontStyle.setConst(FontStyle$$module$as3shim$flash$text$FontStyle, "italic");
  tools$$module$as3shim$flash$text$FontStyle.setConst(FontStyle$$module$as3shim$flash$text$FontStyle, "regular");
  Class$$module$as3shim$flash$text$FontStyle({constructor:FontStyle$$module$as3shim$flash$text$FontStyle});
  module$as3shim$flash$text$FontStyle.module$exports = FontStyle$$module$as3shim$flash$text$FontStyle;
  module$as3shim$flash$text$FontStyle.module$exports && (module$as3shim$flash$text$FontStyle = module$as3shim$flash$text$FontStyle.module$exports);
  var module$as3shim$flash$text$FontType = {}, tools$$module$as3shim$flash$text$FontType = module$as3shim$tools, Class$$module$as3shim$flash$text$FontType = module$as3shim$Class;
  function FontType$$module$as3shim$flash$text$FontType() {
  }
  tools$$module$as3shim$flash$text$FontType.setConst(FontType$$module$as3shim$flash$text$FontType, "device");
  tools$$module$as3shim$flash$text$FontType.setConst(FontType$$module$as3shim$flash$text$FontType, "embedded");
  tools$$module$as3shim$flash$text$FontType.setConst(FontType$$module$as3shim$flash$text$FontType, "embeddedCFF");
  Class$$module$as3shim$flash$text$FontType({constructor:FontType$$module$as3shim$flash$text$FontType});
  module$as3shim$flash$text$FontType.module$exports = FontType$$module$as3shim$flash$text$FontType;
  module$as3shim$flash$text$FontType.module$exports && (module$as3shim$flash$text$FontType = module$as3shim$flash$text$FontType.module$exports);
  var module$as3shim$flash$text$GridFitType = {}, tools$$module$as3shim$flash$text$GridFitType = module$as3shim$tools, Class$$module$as3shim$flash$text$GridFitType = module$as3shim$Class;
  function GridFitType$$module$as3shim$flash$text$GridFitType() {
  }
  tools$$module$as3shim$flash$text$GridFitType.setConst(GridFitType$$module$as3shim$flash$text$GridFitType, "none");
  tools$$module$as3shim$flash$text$GridFitType.setConst(GridFitType$$module$as3shim$flash$text$GridFitType, "pixel");
  tools$$module$as3shim$flash$text$GridFitType.setConst(GridFitType$$module$as3shim$flash$text$GridFitType, "subpixel");
  Class$$module$as3shim$flash$text$GridFitType({constructor:GridFitType$$module$as3shim$flash$text$GridFitType});
  module$as3shim$flash$text$GridFitType.module$exports = GridFitType$$module$as3shim$flash$text$GridFitType;
  module$as3shim$flash$text$GridFitType.module$exports && (module$as3shim$flash$text$GridFitType = module$as3shim$flash$text$GridFitType.module$exports);
  var module$as3shim$flash$text$StaticText = {}, tools$$module$as3shim$flash$text$StaticText = module$as3shim$tools, Class$$module$as3shim$flash$text$StaticText = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$text$StaticText = tools$$module$as3shim$flash$text$StaticText.createDummyFunction, noop$$module$as3shim$flash$text$StaticText = tools$$module$as3shim$flash$text$StaticText.noop, setDescriptor$$module$as3shim$flash$text$StaticText = tools$$module$as3shim$flash$text$StaticText.setDescriptor;
  function StaticText$$module$as3shim$flash$text$StaticText() {
  }
  Class$$module$as3shim$flash$text$StaticText({constructor:StaticText$$module$as3shim$flash$text$StaticText});
  setDescriptor$$module$as3shim$flash$text$StaticText(StaticText$$module$as3shim$flash$text$StaticText.prototype, "text", {get:createDummyFunction$$module$as3shim$flash$text$StaticText({name:"text", returnType:"String"})});
  module$as3shim$flash$text$StaticText.module$exports = StaticText$$module$as3shim$flash$text$StaticText;
  module$as3shim$flash$text$StaticText.module$exports && (module$as3shim$flash$text$StaticText = module$as3shim$flash$text$StaticText.module$exports);
  var module$as3shim$flash$text$TextColorType = {}, tools$$module$as3shim$flash$text$TextColorType = module$as3shim$tools, Class$$module$as3shim$flash$text$TextColorType = module$as3shim$Class;
  function TextColorType$$module$as3shim$flash$text$TextColorType() {
  }
  tools$$module$as3shim$flash$text$TextColorType.setConst(TextColorType$$module$as3shim$flash$text$TextColorType, "DARK_COLOR", "dark");
  tools$$module$as3shim$flash$text$TextColorType.setConst(TextColorType$$module$as3shim$flash$text$TextColorType, "LIGHT_COLOR", "light");
  Class$$module$as3shim$flash$text$TextColorType({constructor:TextColorType$$module$as3shim$flash$text$TextColorType});
  module$as3shim$flash$text$TextColorType.module$exports = TextColorType$$module$as3shim$flash$text$TextColorType;
  module$as3shim$flash$text$TextColorType.module$exports && (module$as3shim$flash$text$TextColorType = module$as3shim$flash$text$TextColorType.module$exports);
  var module$as3shim$flash$text$TextDisplayMode = {}, tools$$module$as3shim$flash$text$TextDisplayMode = module$as3shim$tools, Class$$module$as3shim$flash$text$TextDisplayMode = module$as3shim$Class;
  function TextDisplayMode$$module$as3shim$flash$text$TextDisplayMode() {
  }
  tools$$module$as3shim$flash$text$TextDisplayMode.setConst(TextDisplayMode$$module$as3shim$flash$text$TextDisplayMode, "crt");
  tools$$module$as3shim$flash$text$TextDisplayMode.setConst(TextDisplayMode$$module$as3shim$flash$text$TextDisplayMode, "default");
  tools$$module$as3shim$flash$text$TextDisplayMode.setConst(TextDisplayMode$$module$as3shim$flash$text$TextDisplayMode, "lcd");
  Class$$module$as3shim$flash$text$TextDisplayMode({constructor:TextDisplayMode$$module$as3shim$flash$text$TextDisplayMode});
  module$as3shim$flash$text$TextDisplayMode.module$exports = TextDisplayMode$$module$as3shim$flash$text$TextDisplayMode;
  module$as3shim$flash$text$TextDisplayMode.module$exports && (module$as3shim$flash$text$TextDisplayMode = module$as3shim$flash$text$TextDisplayMode.module$exports);
  var module$as3shim$flash$text$TextExtent = {}, Class$$module$as3shim$flash$text$TextExtent = module$as3shim$Class;
  function TextExtent$$module$as3shim$flash$text$TextExtent(a, b, c, d, e, f) {
    this.width = a;
    this.height = b;
    this.textFieldWidth = c;
    this.textFieldHeight = d;
    this.ascent = e;
    this.descent = f
  }
  Class$$module$as3shim$flash$text$TextExtent({constructor:TextExtent$$module$as3shim$flash$text$TextExtent});
  module$as3shim$flash$text$TextExtent.module$exports = TextExtent$$module$as3shim$flash$text$TextExtent;
  module$as3shim$flash$text$TextExtent.module$exports && (module$as3shim$flash$text$TextExtent = module$as3shim$flash$text$TextExtent.module$exports);
  var module$as3shim$flash$text$TextFieldAutoSize = {}, tools$$module$as3shim$flash$text$TextFieldAutoSize = module$as3shim$tools, Class$$module$as3shim$flash$text$TextFieldAutoSize = module$as3shim$Class;
  function TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize() {
  }
  tools$$module$as3shim$flash$text$TextFieldAutoSize.setConst(TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize, "center");
  tools$$module$as3shim$flash$text$TextFieldAutoSize.setConst(TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize, "left");
  tools$$module$as3shim$flash$text$TextFieldAutoSize.setConst(TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize, "none");
  tools$$module$as3shim$flash$text$TextFieldAutoSize.setConst(TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize, "right");
  Class$$module$as3shim$flash$text$TextFieldAutoSize({constructor:TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize});
  module$as3shim$flash$text$TextFieldAutoSize.module$exports = TextFieldAutoSize$$module$as3shim$flash$text$TextFieldAutoSize;
  module$as3shim$flash$text$TextFieldAutoSize.module$exports && (module$as3shim$flash$text$TextFieldAutoSize = module$as3shim$flash$text$TextFieldAutoSize.module$exports);
  var module$as3shim$flash$text$TextFieldType = {}, tools$$module$as3shim$flash$text$TextFieldType = module$as3shim$tools, Class$$module$as3shim$flash$text$TextFieldType = module$as3shim$Class;
  function TextFieldType$$module$as3shim$flash$text$TextFieldType() {
  }
  tools$$module$as3shim$flash$text$TextFieldType.setConst(TextFieldType$$module$as3shim$flash$text$TextFieldType, "dynamic");
  tools$$module$as3shim$flash$text$TextFieldType.setConst(TextFieldType$$module$as3shim$flash$text$TextFieldType, "input");
  Class$$module$as3shim$flash$text$TextFieldType({constructor:TextFieldType$$module$as3shim$flash$text$TextFieldType});
  module$as3shim$flash$text$TextFieldType.module$exports = TextFieldType$$module$as3shim$flash$text$TextFieldType;
  module$as3shim$flash$text$TextFieldType.module$exports && (module$as3shim$flash$text$TextFieldType = module$as3shim$flash$text$TextFieldType.module$exports);
  var module$as3shim$flash$text$TextFormat = {}, tools$$module$as3shim$flash$text$TextFormat = module$as3shim$tools, Class$$module$as3shim$flash$text$TextFormat = module$as3shim$Class, expando$$module$as3shim$flash$text$TextFormat = tools$$module$as3shim$flash$text$TextFormat.expando, createDummyFunction$$module$as3shim$flash$text$TextFormat = tools$$module$as3shim$flash$text$TextFormat.createDummyFunction, noop$$module$as3shim$flash$text$TextFormat = tools$$module$as3shim$flash$text$TextFormat.noop, 
  setDescriptor$$module$as3shim$flash$text$TextFormat = tools$$module$as3shim$flash$text$TextFormat.setDescriptor;
  function TextFormat$$module$as3shim$flash$text$TextFormat(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    this.align = i;
    this.blockIndent = null;
    this.bold = d;
    this.bullet = null;
    this.color = c;
    this.font = a;
    this.indent = l;
    this.italic = e;
    this.kerning = null;
    this.leading = m;
    this.leftMargin = j;
    this.letterSpacing = null;
    this.rightMargin = k;
    this.size = b;
    this.tabStops = null;
    this.target = h;
    this.underline = f;
    this.url = g
  }
  TextFormat$$module$as3shim$flash$text$TextFormat[expando$$module$as3shim$flash$text$TextFormat] = {};
  TextFormat$$module$as3shim$flash$text$TextFormat[expando$$module$as3shim$flash$text$TextFormat].defaults = {align:"left", blockIndent:0, bold:!1, bullet:!1, color:0, font:"Times New Roman", indent:0, italic:!1, kerning:!1, leading:0, leftMargin:0, letterSpacing:0, rightMargin:0, size:12, tabStops:[], target:"", underline:!1, url:""};
  Class$$module$as3shim$flash$text$TextFormat({constructor:TextFormat$$module$as3shim$flash$text$TextFormat});
  setDescriptor$$module$as3shim$flash$text$TextFormat(TextFormat$$module$as3shim$flash$text$TextFormat.prototype, "display", {get:createDummyFunction$$module$as3shim$flash$text$TextFormat({name:"display", returnType:"String"}), set:noop$$module$as3shim$flash$text$TextFormat});
  module$as3shim$flash$text$TextFormat.module$exports = TextFormat$$module$as3shim$flash$text$TextFormat;
  module$as3shim$flash$text$TextFormat.module$exports && (module$as3shim$flash$text$TextFormat = module$as3shim$flash$text$TextFormat.module$exports);
  var module$as3shim$flash$text$TextFormatAlign = {}, tools$$module$as3shim$flash$text$TextFormatAlign = module$as3shim$tools, Class$$module$as3shim$flash$text$TextFormatAlign = module$as3shim$Class;
  function TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign() {
  }
  tools$$module$as3shim$flash$text$TextFormatAlign.setConst(TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign, "center");
  tools$$module$as3shim$flash$text$TextFormatAlign.setConst(TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign, "end");
  tools$$module$as3shim$flash$text$TextFormatAlign.setConst(TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign, "justify");
  tools$$module$as3shim$flash$text$TextFormatAlign.setConst(TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign, "left");
  tools$$module$as3shim$flash$text$TextFormatAlign.setConst(TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign, "right");
  tools$$module$as3shim$flash$text$TextFormatAlign.setConst(TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign, "start");
  Class$$module$as3shim$flash$text$TextFormatAlign({constructor:TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign});
  module$as3shim$flash$text$TextFormatAlign.module$exports = TextFormatAlign$$module$as3shim$flash$text$TextFormatAlign;
  module$as3shim$flash$text$TextFormatAlign.module$exports && (module$as3shim$flash$text$TextFormatAlign = module$as3shim$flash$text$TextFormatAlign.module$exports);
  var module$as3shim$flash$text$TextLineMetrics = {}, Class$$module$as3shim$flash$text$TextLineMetrics = module$as3shim$Class;
  function TextLineMetrics$$module$as3shim$flash$text$TextLineMetrics(a, b, c, d, e, f) {
    this.x = a;
    this.width = b;
    this.height = c;
    this.ascent = d;
    this.descent = e;
    this.leading = f
  }
  Class$$module$as3shim$flash$text$TextLineMetrics({constructor:TextLineMetrics$$module$as3shim$flash$text$TextLineMetrics});
  module$as3shim$flash$text$TextLineMetrics.module$exports = TextLineMetrics$$module$as3shim$flash$text$TextLineMetrics;
  module$as3shim$flash$text$TextLineMetrics.module$exports && (module$as3shim$flash$text$TextLineMetrics = module$as3shim$flash$text$TextLineMetrics.module$exports);
  var module$as3shim$flash$ui$Keyboard = {}, tools$$module$as3shim$flash$ui$Keyboard = module$as3shim$tools, Class$$module$as3shim$flash$ui$Keyboard = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$ui$Keyboard = tools$$module$as3shim$flash$ui$Keyboard.createDummyFunction, noop$$module$as3shim$flash$ui$Keyboard = tools$$module$as3shim$flash$ui$Keyboard.noop, setConsts$$module$as3shim$flash$ui$Keyboard = tools$$module$as3shim$flash$ui$Keyboard.setConsts, setDescriptor$$module$as3shim$flash$ui$Keyboard = 
  tools$$module$as3shim$flash$ui$Keyboard.setDescriptor;
  function Keyboard$$module$as3shim$flash$ui$Keyboard() {
  }
  Keyboard$$module$as3shim$flash$ui$Keyboard.isAccessible = createDummyFunction$$module$as3shim$flash$ui$Keyboard("flash.ui.Keyboard#isAccessible");
  setDescriptor$$module$as3shim$flash$ui$Keyboard(Keyboard$$module$as3shim$flash$ui$Keyboard, "CharCodeStrings", {configurable:!1, enumerable:!1, writable:!1, value:"Up,Down,Left,Right,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18,F19,F20,F21,F22,F23,F24,F25,F26,F27,F28,F29,F30,F31,F32,F33,F34,F35,Insert,Delete,Home,Begin,End,PgUp,PgDn,PrntScrn,ScrlLck,Pause,SysReq,Break,Reset,Stop,Menu,User,Sys,Print,ClrLn,ClrDsp,InsLn,DelLn,InsChr,DelChr,Prev,Next,Select,Exec,Undo,Redo,Find,Help,ModeSw".split(",")});
  setConsts$$module$as3shim$flash$ui$Keyboard(Keyboard$$module$as3shim$flash$ui$Keyboard, [["A", 65], ["ALTERNATE", 18], ["AUDIO", 16777239], ["B", 66], ["BACK", 16777238], ["BACKQUOTE", 192], ["BACKSLASH", 220], ["BACKSPACE", 8], ["BLUE", 16777219], ["C", 67], ["CAPS_LOCK", 20], ["CHANNEL_DOWN", 16777221], ["CHANNEL_UP", 16777220], ["COMMA", 188], ["COMMAND", 15], ["CONTROL", 17], ["D", 68], ["DELETE", 46], ["DOWN", 40], ["DVR", 16777241], ["E", 69], ["END", 35], ["ENTER", 13], ["EQUAL", 187], ["ESCAPE", 
  27], ["EXIT", 16777237], ["F", 70], ["F1", 112], ["F10", 121], ["F11", 122], ["F12", 123], ["F13", 124], ["F14", 125], ["F15", 126], ["F2", 113], ["F3", 114], ["F4", 115], ["F5", 116], ["F6", 117], ["F7", 118], ["F8", 119], ["F9", 120], ["FAST_FORWARD", 16777226], ["G", 71], ["GREEN", 16777217], ["GUIDE", 16777236], ["H", 72], ["HELP", 16777245], ["HOME", 36], ["I", 73], ["INFO", 16777235], ["INPUT", 16777243], ["INSERT", 45], ["J", 74], ["K", 75], ["KEYNAME_BEGIN", "Begin"], ["KEYNAME_BREAK", 
  "Break"], ["KEYNAME_CLEARDISPLAY", "ClrDsp"], ["KEYNAME_CLEARLINE", "ClrLn"], ["KEYNAME_DELETE", "Delete"], ["KEYNAME_DELETECHAR", "DelChr"], ["KEYNAME_DELETELINE", "DelLn"], ["KEYNAME_DOWNARROW", "Down"], ["KEYNAME_END", "End"], ["KEYNAME_EXECUTE", "Exec"], ["KEYNAME_F1", "F1"], ["KEYNAME_F10", "F10"], ["KEYNAME_F11", "F11"], ["KEYNAME_F12", "F12"], ["KEYNAME_F13", "F13"], ["KEYNAME_F14", "F14"], ["KEYNAME_F15", "F15"], ["KEYNAME_F16", "F16"], ["KEYNAME_F17", "F17"], ["KEYNAME_F18", "F18"], ["KEYNAME_F19", 
  "F19"], ["KEYNAME_F2", "F2"], ["KEYNAME_F20", "F20"], ["KEYNAME_F21", "F21"], ["KEYNAME_F22", "F22"], ["KEYNAME_F23", "F23"], ["KEYNAME_F24", "F24"], ["KEYNAME_F25", "F25"], ["KEYNAME_F26", "F26"], ["KEYNAME_F27", "F27"], ["KEYNAME_F28", "F28"], ["KEYNAME_F29", "F29"], ["KEYNAME_F3", "F3"], ["KEYNAME_F30", "F30"], ["KEYNAME_F31", "F31"], ["KEYNAME_F32", "F32"], ["KEYNAME_F33", "F33"], ["KEYNAME_F34", "F34"], ["KEYNAME_F35", "F35"], ["KEYNAME_F4", "F4"], ["KEYNAME_F5", "F5"], ["KEYNAME_F6", "F6"], 
  ["KEYNAME_F7", "F7"], ["KEYNAME_F8", "F8"], ["KEYNAME_F9", "F9"], ["KEYNAME_FIND", "Find"], ["KEYNAME_HELP", "Help"], ["KEYNAME_HOME", "Home"], ["KEYNAME_INSERT", "Insert"], ["KEYNAME_INSERTCHAR", "InsChr"], ["KEYNAME_INSERTLINE", "InsLn"], ["KEYNAME_LEFTARROW", "Left"], ["KEYNAME_MENU", "Menu"], ["KEYNAME_MODESWITCH", "ModeSw"], ["KEYNAME_NEXT", "Next"], ["KEYNAME_PAGEDOWN", "PgDn"], ["KEYNAME_PAGEUP", "PgUp"], ["KEYNAME_PAUSE", "Pause"], ["KEYNAME_PREV", "Prev"], ["KEYNAME_PRINT", "Print"], ["KEYNAME_PRINTSCREEN", 
  "PrntScrn"], ["KEYNAME_REDO", "Redo"], ["KEYNAME_RESET", "Reset"], ["KEYNAME_RIGHTARROW", "Right"], ["KEYNAME_SCROLLLOCK", "ScrlLck"], ["KEYNAME_SELECT", "Select"], ["KEYNAME_STOP", "Stop"], ["KEYNAME_SYSREQ", "SysReq"], ["KEYNAME_SYSTEM", "Sys"], ["KEYNAME_UNDO", "Undo"], ["KEYNAME_UPARROW", "Up"], ["KEYNAME_USER", "User"], ["L", 76], ["LAST", 16777233], ["LEFT", 37], ["LEFTBRACKET", 219], ["LIVE", 16777232], ["M", 77], ["MASTER_SHELL", 16777246], ["MENU", 16777234], ["MINUS", 189], ["N", 78], 
  ["NEXT", 16777230], ["NUMBER_0", 48], ["NUMBER_1", 49], ["NUMBER_2", 50], ["NUMBER_3", 51], ["NUMBER_4", 52], ["NUMBER_5", 53], ["NUMBER_6", 54], ["NUMBER_7", 55], ["NUMBER_8", 56], ["NUMBER_9", 57], ["NUMPAD", 21], ["NUMPAD_0", 96], ["NUMPAD_1", 97], ["NUMPAD_2", 98], ["NUMPAD_3", 99], ["NUMPAD_4", 100], ["NUMPAD_5", 101], ["NUMPAD_6", 102], ["NUMPAD_7", 103], ["NUMPAD_8", 104], ["NUMPAD_9", 105], ["NUMPAD_ADD", 107], ["NUMPAD_DECIMAL", 110], ["NUMPAD_DIVIDE", 111], ["NUMPAD_ENTER", 108], ["NUMPAD_MULTIPLY", 
  106], ["NUMPAD_SUBTRACT", 109], ["O", 79], ["P", 80], ["PAGE_DOWN", 34], ["PAGE_UP", 33], ["PAUSE", 16777224], ["PERIOD", 190], ["PLAY", 16777223], ["PREVIOUS", 16777231], ["Q", 81], ["QUOTE", 222], ["R", 82], ["RECORD", 16777222], ["RED", 16777216], ["REWIND", 16777227], ["RIGHT", 39], ["RIGHTBRACKET", 221], ["S", 83], ["SEARCH", 16777247], ["SEMICOLON", 186], ["SETUP", 16777244], ["SHIFT", 16], ["SKIP_BACKWARD", 16777229], ["SKIP_FORWARD", 16777228], ["SLASH", 191], ["SPACE", 32], ["STOP", 16777225], 
  ["STRING_BEGIN", "\uf72a"], ["STRING_BREAK", "\uf732"], ["STRING_CLEARDISPLAY", "\uf73a"], ["STRING_CLEARLINE", "\uf739"], ["STRING_DELETE", "\uf728"], ["STRING_DELETECHAR", "\uf73e"], ["STRING_DELETELINE", "\uf73c"], ["STRING_DOWNARROW", "\uf701"], ["STRING_END", "\uf72b"], ["STRING_EXECUTE", "\uf742"], ["STRING_F1", "\uf704"], ["STRING_F10", "\uf70d"], ["STRING_F11", "\uf70e"], ["STRING_F12", "\uf70f"], ["STRING_F13", "\uf710"], ["STRING_F14", "\uf711"], ["STRING_F15", "\uf712"], ["STRING_F16", 
  "\uf713"], ["STRING_F17", "\uf714"], ["STRING_F18", "\uf715"], ["STRING_F19", "\uf716"], ["STRING_F2", "\uf705"], ["STRING_F20", "\uf717"], ["STRING_F21", "\uf718"], ["STRING_F22", "\uf719"], ["STRING_F23", "\uf71a"], ["STRING_F24", "\uf71b"], ["STRING_F25", "\uf71c"], ["STRING_F26", "\uf71d"], ["STRING_F27", "\uf71e"], ["STRING_F28", "\uf71f"], ["STRING_F29", "\uf720"], ["STRING_F3", "\uf706"], ["STRING_F30", "\uf721"], ["STRING_F31", "\uf722"], ["STRING_F32", "\uf723"], ["STRING_F33", "\uf724"], 
  ["STRING_F34", "\uf725"], ["STRING_F35", "\uf726"], ["STRING_F4", "\uf707"], ["STRING_F5", "\uf708"], ["STRING_F6", "\uf709"], ["STRING_F7", "\uf70a"], ["STRING_F8", "\uf70b"], ["STRING_F9", "\uf70c"], ["STRING_FIND", "\uf745"], ["STRING_HELP", "\uf746"], ["STRING_HOME", "\uf729"], ["STRING_INSERT", "\uf727"], ["STRING_INSERTCHAR", "\uf73d"], ["STRING_INSERTLINE", "\uf73b"], ["STRING_LEFTARROW", "\uf702"], ["STRING_MENU", "\uf735"], ["STRING_MODESWITCH", "\uf747"], ["STRING_NEXT", "\uf740"], ["STRING_PAGEDOWN", 
  "\uf72d"], ["STRING_PAGEUP", "\uf72c"], ["STRING_PAUSE", "\uf730"], ["STRING_PREV", "\uf73f"], ["STRING_PRINT", "\uf738"], ["STRING_PRINTSCREEN", "\uf72e"], ["STRING_REDO", "\uf744"], ["STRING_RESET", "\uf733"], ["STRING_RIGHTARROW", "\uf703"], ["STRING_SCROLLLOCK", "\uf72f"], ["STRING_SELECT", "\uf741"], ["STRING_STOP", "\uf734"], ["STRING_SYSREQ", "\uf731"], ["STRING_SYSTEM", "\uf737"], ["STRING_UNDO", "\uf743"], ["STRING_UPARROW", "\uf700"], ["STRING_USER", "\uf736"], ["SUBTITLE", 16777240], 
  ["T", 84], ["TAB", 9], ["U", 85], ["UP", 38], ["V", 86], ["VOD", 16777242], ["W", 87], ["X", 88], ["Y", 89], ["YELLOW", 16777218], ["Z", 90]]);
  Class$$module$as3shim$flash$ui$Keyboard({constructor:Keyboard$$module$as3shim$flash$ui$Keyboard});
  var proto$$module$as3shim$flash$ui$Keyboard = Keyboard$$module$as3shim$flash$ui$Keyboard.prototype;
  setDescriptor$$module$as3shim$flash$ui$Keyboard(proto$$module$as3shim$flash$ui$Keyboard, "capsLock", {get:createDummyFunction$$module$as3shim$flash$ui$Keyboard({name:"capsLock", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$ui$Keyboard(proto$$module$as3shim$flash$ui$Keyboard, "hasVirtualKeyboard", {get:createDummyFunction$$module$as3shim$flash$ui$Keyboard({name:"hasVirtualKeyboard", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$ui$Keyboard(proto$$module$as3shim$flash$ui$Keyboard, "numLock", {get:createDummyFunction$$module$as3shim$flash$ui$Keyboard({name:"numLock", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$ui$Keyboard(proto$$module$as3shim$flash$ui$Keyboard, "physicalKeyboardType", {get:createDummyFunction$$module$as3shim$flash$ui$Keyboard({name:"physicalKeyboardType", returnType:"String"})});
  module$as3shim$flash$ui$Keyboard.module$exports = Keyboard$$module$as3shim$flash$ui$Keyboard;
  module$as3shim$flash$ui$Keyboard.module$exports && (module$as3shim$flash$ui$Keyboard = module$as3shim$flash$ui$Keyboard.module$exports);
  var module$as3shim$flash$ui$Mouse = {}, tools$$module$as3shim$flash$ui$Mouse = module$as3shim$tools, Class$$module$as3shim$flash$ui$Mouse = module$as3shim$Class, createDummyFunction$$module$as3shim$flash$ui$Mouse = tools$$module$as3shim$flash$ui$Mouse.createDummyFunction, noop$$module$as3shim$flash$ui$Mouse = tools$$module$as3shim$flash$ui$Mouse.noop, setDescriptor$$module$as3shim$flash$ui$Mouse = tools$$module$as3shim$flash$ui$Mouse.setDescriptor;
  function Mouse$$module$as3shim$flash$ui$Mouse() {
  }
  Mouse$$module$as3shim$flash$ui$Mouse.hide = tools$$module$as3shim$flash$ui$Mouse.createDummyFunction("flash.ui.Mouse#hide");
  Mouse$$module$as3shim$flash$ui$Mouse.registerCursor = tools$$module$as3shim$flash$ui$Mouse.createDummyFunction("flash.ui.Mouse#registerCursor");
  Mouse$$module$as3shim$flash$ui$Mouse.show = tools$$module$as3shim$flash$ui$Mouse.createDummyFunction("flash.ui.Mouse#show");
  Mouse$$module$as3shim$flash$ui$Mouse.unregisterCursor = tools$$module$as3shim$flash$ui$Mouse.createDummyFunction("flash.ui.Mouse#unregisterCursor");
  Class$$module$as3shim$flash$ui$Mouse({constructor:Mouse$$module$as3shim$flash$ui$Mouse});
  var proto$$module$as3shim$flash$ui$Mouse = Mouse$$module$as3shim$flash$ui$Mouse.prototype;
  setDescriptor$$module$as3shim$flash$ui$Mouse(proto$$module$as3shim$flash$ui$Mouse, "cursor", {get:createDummyFunction$$module$as3shim$flash$ui$Mouse({name:"cursor", returnType:"String"}), set:noop$$module$as3shim$flash$ui$Mouse});
  setDescriptor$$module$as3shim$flash$ui$Mouse(proto$$module$as3shim$flash$ui$Mouse, "supportsCursor", {get:createDummyFunction$$module$as3shim$flash$ui$Mouse({name:"supportsCursor", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$ui$Mouse(proto$$module$as3shim$flash$ui$Mouse, "supportsNativeCursor", {get:createDummyFunction$$module$as3shim$flash$ui$Mouse({name:"supportsNativeCursor", returnType:"Boolean"})});
  module$as3shim$flash$ui$Mouse.module$exports = Mouse$$module$as3shim$flash$ui$Mouse;
  module$as3shim$flash$ui$Mouse.module$exports && (module$as3shim$flash$ui$Mouse = module$as3shim$flash$ui$Mouse.module$exports);
  var module$as3shim$flash$utils$ByteArray = {}, tools$$module$as3shim$flash$utils$ByteArray = module$as3shim$tools, Class$$module$as3shim$flash$utils$ByteArray = module$as3shim$Class, EOFError$$module$as3shim$flash$utils$ByteArray = module$as3shim$flash$errors$EOFError, INITIAL_BUFFER_SIZE$$module$as3shim$flash$utils$ByteArray = 128, eofError$$module$as3shim$flash$utils$ByteArray = EOFError$$module$as3shim$flash$utils$ByteArray("Error #2030: End of file was encountered."), expando$$module$as3shim$flash$utils$ByteArray = 
  tools$$module$as3shim$flash$utils$ByteArray.expando, ArrayProto$$module$as3shim$flash$utils$ByteArray = Array.prototype, nativePop$$module$as3shim$flash$utils$ByteArray = ArrayProto$$module$as3shim$flash$utils$ByteArray.pop, nativePush$$module$as3shim$flash$utils$ByteArray = ArrayProto$$module$as3shim$flash$utils$ByteArray.push, nativeShift$$module$as3shim$flash$utils$ByteArray = ArrayProto$$module$as3shim$flash$utils$ByteArray.shift, nativeSplice$$module$as3shim$flash$utils$ByteArray = ArrayProto$$module$as3shim$flash$utils$ByteArray.splice, 
  nativeUnshift$$module$as3shim$flash$utils$ByteArray = ArrayProto$$module$as3shim$flash$utils$ByteArray.unshift, forEach$$module$as3shim$flash$utils$ByteArray = tools$$module$as3shim$flash$utils$ByteArray.forEach, setAccessor$$module$as3shim$flash$utils$ByteArray = tools$$module$as3shim$flash$utils$ByteArray.setAccessor, setDescriptor$$module$as3shim$flash$utils$ByteArray = tools$$module$as3shim$flash$utils$ByteArray.setDescriptor, setImmutable$$module$as3shim$flash$utils$ByteArray = tools$$module$as3shim$flash$utils$ByteArray.setImmutable;
  function ByteArray$$module$as3shim$flash$utils$ByteArray() {
    var a = new ArrayBuffer(INITIAL_BUFFER_SIZE$$module$as3shim$flash$utils$ByteArray);
    this[expando$$module$as3shim$flash$utils$ByteArray] = {data:this, length:Math.max(0, +length), deleteProperty:deleteProperty$$module$as3shim$flash$utils$ByteArray, get:get$$module$as3shim$flash$utils$ByteArray, has:has$$module$as3shim$flash$utils$ByteArray, set:set$$module$as3shim$flash$utils$ByteArray};
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_buffer", {value:a, enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_dataView", {enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_int8View", {enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_isLE", {value:!1, enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_length", {value:0, enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_objectEncoding", {value:3, enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "_position", {value:0, enumerable:!1});
    setDescriptor$$module$as3shim$flash$utils$ByteArray(this, "bytesAvailable", {get:function() {
      return this._length - this._position
    }, configurable:!1});
    setAccessor$$module$as3shim$flash$utils$ByteArray(this, "endian", {get:function() {
      return this._isLe ? "littleEndian" : "bigEndian"
    }, set:function(a) {
      if("littleEndian" != a && "bigEndian" != a) {
        throw ReferenceError("Error #2008");
      }
      this._isLe = "littleEndian" === a
    }, configurable:!1});
    setAccessor$$module$as3shim$flash$utils$ByteArray(this, "length", {get:function() {
      var a = this._length, c = -1, d;
      for(d in this) {
        d == +d && (c = Math.max(c, d))
      }
      return Math.max(a, c + 1)
    }, set:function(a) {
      var c = this._length;
      this._ensureBufferSize(a);
      this._length = a;
      for(c -= 1;c >= a;c--) {
        delete this[c]
      }
    }, configurable:!1});
    setAccessor$$module$as3shim$flash$utils$ByteArray(this, "objectEncoding", {get:function() {
      return this._objectEncoding
    }, set:function(a) {
      "string" == typeof a && (a = "0");
      if(isNaN(parseInt(a)) || 0 != a && 3 != a) {
        throw ReferenceError("Error #2008");
      }
      this._objectEncoding = parseInt(a)
    }, configurable:!1});
    setAccessor$$module$as3shim$flash$utils$ByteArray(this, "position", {get:function() {
      return this._position
    }, set:function(a) {
      if(0 > a) {
        throw ReferenceError("Error #1056");
      }
      this._position = a
    }, configurable:!1});
    this._setupViews()
  }
  function set$$module$as3shim$flash$utils$ByteArray(a, b) {
    var c = this.data;
    if(a > c.length) {
      throw RangeError("#1125: The index is ouf of range");
    }
    a + 1 >= c.length && (c.length += 1);
    c[a] = b
  }
  function get$$module$as3shim$flash$utils$ByteArray(a) {
    if(!this.has(a)) {
      throw RangeError("#1125: The index is ouf of range");
    }
    return this.data[a]
  }
  function has$$module$as3shim$flash$utils$ByteArray(a) {
    return this.data.hasOwnProperty(a)
  }
  function deleteProperty$$module$as3shim$flash$utils$ByteArray(a) {
    delete this.data[a]
  }
  function pop$$module$as3shim$flash$utils$ByteArray() {
    return nativePop$$module$as3shim$flash$utils$ByteArray.call(this)
  }
  function push$$module$as3shim$flash$utils$ByteArray() {
    var a = this;
    forEach$$module$as3shim$flash$utils$ByteArray(arguments, function(b) {
      a[expando$$module$as3shim$flash$utils$ByteArray].set(a.length, b)
    });
    return this.length
  }
  function shift$$module$as3shim$flash$utils$ByteArray() {
    return nativeShift$$module$as3shim$flash$utils$ByteArray.call(this)
  }
  function splice$$module$as3shim$flash$utils$ByteArray(a, b) {
    for(var c = nativeSplice$$module$as3shim$flash$utils$ByteArray.apply(this, arguments);b--;) {
      this[expando$$module$as3shim$flash$utils$ByteArray].set(a + b, this[a + b])
    }
    return c
  }
  function unshift$$module$as3shim$flash$utils$ByteArray() {
    return!this[expando$$module$as3shim$flash$utils$ByteArray].fixed ? nativeUnshift$$module$as3shim$flash$utils$ByteArray.apply(this, arguments) : this.length
  }
  function _setupViews$$module$as3shim$flash$utils$ByteArray() {
    this._dataView = new DataView(this._buffer);
    this._int8View = new Int8Array(this._buffer)
  }
  function _setBufferSize$$module$as3shim$flash$utils$ByteArray(a) {
    for(var b = this._buffer.byteLength, c = this._int8View;b < a;) {
      b *= 2
    }
    this._buffer = new ArrayBuffer(b);
    this._setupViews();
    this._int8View.set(c)
  }
  function _ensureBufferSize$$module$as3shim$flash$utils$ByteArray(a) {
    this._buffer.byteLength < a && this._setBufferSize(a)
  }
  function _read$$module$as3shim$flash$utils$ByteArray(a, b) {
    if(this._position + b > this._length) {
      throw eofError$$module$as3shim$flash$utils$ByteArray;
    }
    var c = this._dataView[a](this._position, this._isLE);
    this.position += b;
    return c
  }
  function _write$$module$as3shim$flash$utils$ByteArray(a, b, c) {
    b = this._position + b;
    b > this.length && (this.length = b);
    this._dataView[a](this._position, c, this._isLE);
    this.position = b
  }
  function clear$$module$as3shim$flash$utils$ByteArray() {
    this.length = this.position = 0;
    this._buffer = new ArrayBuffer(INITIAL_BUFFER_SIZE$$module$as3shim$flash$utils$ByteArray);
    this._setupViews()
  }
  function readBoolean$$module$as3shim$flash$utils$ByteArray() {
    return!!this.readByte()
  }
  function readBytes$$module$as3shim$flash$utils$ByteArray(a, b, c) {
    c = "undefined" != typeof c ? c : 0;
    if(this._position + c > this._length) {
      throw eofError$$module$as3shim$flash$utils$ByteArray;
    }
    a._int8View.set(new Int8Array(this._buffer, this._position, c), "undefined" != typeof b ? b : 0);
    a.length += c;
    this.position += c
  }
  function toString$$module$as3shim$flash$utils$ByteArray() {
    return utf8encode$$module$as3shim$flash$utils$ByteArray(new Int8Array(this._buffer, 0, this._length))
  }
  function writeBytes$$module$as3shim$flash$utils$ByteArray(a, b, c) {
    c = "undefined" != typeof c ? c : a.length;
    a = new Int8Array(a._buffer || a.buffer, "undefined" != typeof b ? b : 0, c);
    this.length = b = this._position + a.length;
    this._int8View.set(a, this._position);
    this.position = b
  }
  function writeBoolean$$module$as3shim$flash$utils$ByteArray(a) {
    this.writeByte(a)
  }
  function utf8decode$$module$as3shim$flash$utils$ByteArray(a) {
    for(var b = new Int8Array(4 * a.length), c = 0, d = 0, e = a.length;d < e;d++) {
      if(127 >= a.charCodeAt(d)) {
        b[c++] = a.charCodeAt(d)
      }else {
        for(var f = encodeURIComponent(a.charAt(d)).substr(1).split("%"), g = 0, h = f.length;g < h;g++) {
          b[c++] = parseInt(f[g], 16)
        }
      }
    }
    return b.subarray(0, c)
  }
  function utf8encode$$module$as3shim$flash$utils$ByteArray(a) {
    for(var b = "", c = String.fromCharCode, d = 0, e = a.length;d < e;d++) {
      var f = a[d], b = b + (127 >= f ? 37 === f ? "%25" : c(f) : "%" + f.toString(16).toUpperCase())
    }
    return decodeURIComponent(b)
  }
  function readUTF$$module$as3shim$flash$utils$ByteArray() {
    return this.readUTFBytes(this.readShort())
  }
  function readUTFBytes$$module$as3shim$flash$utils$ByteArray(a) {
    var b = this._position;
    if(b + a > this._length) {
      throw eofError$$module$as3shim$flash$utils$ByteArray;
    }
    this.position += a;
    return utf8encode$$module$as3shim$flash$utils$ByteArray(new Int8Array(this._buffer, b, a))
  }
  function writeUTF$$module$as3shim$flash$utils$ByteArray(a) {
    a = utf8decode$$module$as3shim$flash$utils$ByteArray(a || "");
    this.writeShort(a.length);
    this.writeBytes(a)
  }
  function writeUTFBytes$$module$as3shim$flash$utils$ByteArray(a) {
    this.writeBytes(utf8decode$$module$as3shim$flash$utils$ByteArray(a))
  }
  Class$$module$as3shim$flash$utils$ByteArray({constructor:ByteArray$$module$as3shim$flash$utils$ByteArray, _ensureBufferSize:_ensureBufferSize$$module$as3shim$flash$utils$ByteArray, _setBufferSize:_setBufferSize$$module$as3shim$flash$utils$ByteArray, _setupViews:_setupViews$$module$as3shim$flash$utils$ByteArray, _read:_read$$module$as3shim$flash$utils$ByteArray, _write:_write$$module$as3shim$flash$utils$ByteArray, clear:clear$$module$as3shim$flash$utils$ByteArray, compress:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#compress"), 
  deflate:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#deflate"), inflate:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#inflate"), readBoolean:readBoolean$$module$as3shim$flash$utils$ByteArray, readByte:function() {
    return this._read("getInt8", 1)
  }, readBytes:readBytes$$module$as3shim$flash$utils$ByteArray, readDouble:function() {
    return this._read("getFloat64", 8)
  }, readFloat:function() {
    return this._read("getFloat32", 4)
  }, readInt:function() {
    return this._read("getInt32", 4)
  }, readMultiByte:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#readMultiByte"), readObject:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#readObject"), readShort:function() {
    return this._read("getInt16", 2)
  }, readUnsignedByte:function() {
    return this._read("getUint8", 1)
  }, readUnsignedInt:function() {
    return this._read("getUint32", 4)
  }, readUnsignedShort:function() {
    return this._read("getUint16", 2)
  }, readUTF:readUTF$$module$as3shim$flash$utils$ByteArray, readUTFBytes:readUTFBytes$$module$as3shim$flash$utils$ByteArray, toString:toString$$module$as3shim$flash$utils$ByteArray, uncompress:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#uncompress"), writeBoolean:writeBoolean$$module$as3shim$flash$utils$ByteArray, writeByte:function(a) {
    this._write("setInt8", 1, a)
  }, writeBytes:writeBytes$$module$as3shim$flash$utils$ByteArray, writeDouble:function(a) {
    this._write("setFloat64", 8, a)
  }, writeFloat:function(a) {
    this._write("setFloat32", 4, a)
  }, writeInt:function(a) {
    this._write("setInt32", 4, a)
  }, writeMultiByte:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#writeMultiByte"), writeObject:tools$$module$as3shim$flash$utils$ByteArray.createUnimplementedFunction("flash.utils.ByteArray#writeObject"), writeShort:function(a) {
    this._write("setInt16", 2, a)
  }, writeUnsignedByte:function(a) {
    this._write("setUint8", 1, a)
  }, writeUnsignedInt:function(a) {
    this._write("setUint32", 4, a)
  }, writeUnsignedShort:function(a) {
    this._write("setUint16", 2, a)
  }, writeUTF:writeUTF$$module$as3shim$flash$utils$ByteArray, writeUTFBytes:writeUTFBytes$$module$as3shim$flash$utils$ByteArray});
  module$as3shim$flash$utils$ByteArray.module$exports = ByteArray$$module$as3shim$flash$utils$ByteArray;
  module$as3shim$flash$utils$ByteArray.module$exports && (module$as3shim$flash$utils$ByteArray = module$as3shim$flash$utils$ByteArray.module$exports);
  var module$as3shim$flash$utils$Dictionary = {}, Class$$module$as3shim$flash$utils$Dictionary = module$as3shim$Class, tools$$module$as3shim$flash$utils$Dictionary = module$as3shim$tools, counter$$module$as3shim$flash$utils$Dictionary = 1, expando$$module$as3shim$flash$utils$Dictionary = tools$$module$as3shim$flash$utils$Dictionary.expando;
  function Dictionary$$module$as3shim$flash$utils$Dictionary() {
    this[expando$$module$as3shim$flash$utils$Dictionary] = {data:{}, deleteProperty:deleteProperty$$module$as3shim$flash$utils$Dictionary, has:has$$module$as3shim$flash$utils$Dictionary, get:get$$module$as3shim$flash$utils$Dictionary, set:set$$module$as3shim$flash$utils$Dictionary}
  }
  function getKey$$module$as3shim$flash$utils$Dictionary(a) {
    a = a[expando$$module$as3shim$flash$utils$Dictionary] || (a[expando$$module$as3shim$flash$utils$Dictionary] = {});
    return a.dictionaryKey || (a.dictionaryKey = counter$$module$as3shim$flash$utils$Dictionary++)
  }
  function deleteProperty$$module$as3shim$flash$utils$Dictionary(a) {
    delete this.data[getKey$$module$as3shim$flash$utils$Dictionary(a)]
  }
  function has$$module$as3shim$flash$utils$Dictionary(a) {
    return this.data.hasOwnProperty(getKey$$module$as3shim$flash$utils$Dictionary(a))
  }
  function get$$module$as3shim$flash$utils$Dictionary(a) {
    var b = this.data, a = getKey$$module$as3shim$flash$utils$Dictionary(a);
    return b.hasOwnProperty(a) ? b[a].value : void 0
  }
  function set$$module$as3shim$flash$utils$Dictionary(a, b) {
    this.data[getKey$$module$as3shim$flash$utils$Dictionary(a)] = {key:a, value:b}
  }
  function toJSON$$module$as3shim$flash$utils$Dictionary() {
    var a = {};
    tools$$module$as3shim$flash$utils$Dictionary.forOwn(this[expando$$module$as3shim$flash$utils$Dictionary].data, function(b, c) {
      a[c] = b.value
    });
    return JSON.stringify(a)
  }
  Class$$module$as3shim$flash$utils$Dictionary({constructor:Dictionary$$module$as3shim$flash$utils$Dictionary, toJSON:toJSON$$module$as3shim$flash$utils$Dictionary});
  module$as3shim$flash$utils$Dictionary.module$exports = Dictionary$$module$as3shim$flash$utils$Dictionary;
  module$as3shim$flash$utils$Dictionary.module$exports && (module$as3shim$flash$utils$Dictionary = module$as3shim$flash$utils$Dictionary.module$exports);
  var module$as3shim$flash$xml$XMLNode = {}, global$$module$as3shim$flash$xml$XMLNode = module$as3shim$global, tools$$module$as3shim$flash$xml$XMLNode = module$as3shim$tools, Class$$module$as3shim$flash$xml$XMLNode = module$as3shim$Class, apply$$module$as3shim$flash$xml$XMLNode = Class$$module$as3shim$flash$xml$XMLNode.apply, doc$$module$as3shim$flash$xml$XMLNode = global$$module$as3shim$flash$xml$XMLNode.document, domParser$$module$as3shim$flash$xml$XMLNode = new (global$$module$as3shim$flash$xml$XMLNode.DOMParser || 
  Object), expando$$module$as3shim$flash$xml$XMLNode = tools$$module$as3shim$flash$xml$XMLNode.expando, xmlSerializer$$module$as3shim$flash$xml$XMLNode = new (global$$module$as3shim$flash$xml$XMLNode.XMLSerializer || Object), setAccessor$$module$as3shim$flash$xml$XMLNode = tools$$module$as3shim$flash$xml$XMLNode.setAccessor, getterProperties$$module$as3shim$flash$xml$XMLNode = "firstChild,lastChild,nextSibling,nodeName,nodeType,nodeValue,parentNode,previousSibling".split(","), wrappedMethods$$module$as3shim$flash$xml$XMLNode = 
  ["appendChild", "cloneNode", "hasChildNodes", "insertBefore", "removeNode"];
  function XMLNode$$module$as3shim$flash$xml$XMLNode(a, b) {
    var c;
    if(!(this instanceof XMLNode$$module$as3shim$flash$xml$XMLNode)) {
      return new XMLNode$$module$as3shim$flash$xml$XMLNode(a, text)
    }
    if(a instanceof XMLNode$$module$as3shim$flash$xml$XMLNode) {
      return a
    }
    if(a && "number" === typeof a.nodeType) {
      c = a
    }else {
      if(1 === a) {
        try {
          c = doc$$module$as3shim$flash$xml$XMLNode.createElement(b)
        }catch(d) {
          c = doc$$module$as3shim$flash$xml$XMLNode.createComment(b)
        }
      }else {
        3 === a ? c = doc$$module$as3shim$flash$xml$XMLNode.createTextNode(b) : 9 === a && (c = domParser$$module$as3shim$flash$xml$XMLNode.parseFromString(b, "text/xml"))
      }
    }
    this[expando$$module$as3shim$flash$xml$XMLNode] = {raw:c || {}};
    addGetter$$module$as3shim$flash$xml$XMLNode(this, "attributes");
    addGetter$$module$as3shim$flash$xml$XMLNode(this, "childNodes");
    addGetter$$module$as3shim$flash$xml$XMLNode(this, "localName");
    addGetter$$module$as3shim$flash$xml$XMLNode(this, "namespaceURI");
    addGetter$$module$as3shim$flash$xml$XMLNode(this, "prefix")
  }
  function addGetter$$module$as3shim$flash$xml$XMLNode(a, b) {
    setAccessor$$module$as3shim$flash$xml$XMLNode(a, b, {get:function() {
      var a = this[expando$$module$as3shim$flash$xml$XMLNode].raw[b];
      return a && "number" == typeof a.nodeType ? new XMLNode$$module$as3shim$flash$xml$XMLNode(a) : a
    }})
  }
  function getNamespaceForPrefix$$module$as3shim$flash$xml$XMLNode() {
    return null
  }
  function getPrefixForNamespace$$module$as3shim$flash$xml$XMLNode() {
    return null
  }
  function toString$$module$as3shim$flash$xml$XMLNode() {
    return xmlSerializer$$module$as3shim$flash$xml$XMLNode.serializeToString(this[expando$$module$as3shim$flash$xml$XMLNode].raw)
  }
  Class$$module$as3shim$flash$xml$XMLNode({constructor:XMLNode$$module$as3shim$flash$xml$XMLNode, getNamespaceForPrefix:getNamespaceForPrefix$$module$as3shim$flash$xml$XMLNode, getPrefixForNamespace:getPrefixForNamespace$$module$as3shim$flash$xml$XMLNode, toString:toString$$module$as3shim$flash$xml$XMLNode});
  tools$$module$as3shim$flash$xml$XMLNode.forEach(wrappedMethods$$module$as3shim$flash$xml$XMLNode, function(a) {
    XMLNode$$module$as3shim$flash$xml$XMLNode.prototype[a] = function() {
      var b = tools$$module$as3shim$flash$xml$XMLNode.map(arguments, function(a) {
        return a instanceof XMLNode$$module$as3shim$flash$xml$XMLNode ? a[expando$$module$as3shim$flash$xml$XMLNode].raw : a
      }), c = this[expando$$module$as3shim$flash$xml$XMLNode].raw;
      return(b = apply$$module$as3shim$flash$xml$XMLNode.call(c[a], c, b)) && "number" == typeof b.nodeType ? new XMLNode$$module$as3shim$flash$xml$XMLNode(b) : b
    }
  });
  tools$$module$as3shim$flash$xml$XMLNode.forEach(getterProperties$$module$as3shim$flash$xml$XMLNode, function(a) {
    addGetter$$module$as3shim$flash$xml$XMLNode(XMLNode$$module$as3shim$flash$xml$XMLNode.prototype, a)
  });
  module$as3shim$flash$xml$XMLNode.module$exports = XMLNode$$module$as3shim$flash$xml$XMLNode;
  module$as3shim$flash$xml$XMLNode.module$exports && (module$as3shim$flash$xml$XMLNode = module$as3shim$flash$xml$XMLNode.module$exports);
  var module$as3shim$flash$xml$XMLDocument = {}, global$$module$as3shim$flash$xml$XMLDocument = module$as3shim$global, tools$$module$as3shim$flash$xml$XMLDocument = module$as3shim$tools, Class$$module$as3shim$flash$xml$XMLDocument = module$as3shim$Class, XMLNode$$module$as3shim$flash$xml$XMLDocument = module$as3shim$flash$xml$XMLNode, domParser$$module$as3shim$flash$xml$XMLDocument = new (global$$module$as3shim$flash$xml$XMLDocument.DOMParser || Object), expando$$module$as3shim$flash$xml$XMLDocument = 
  tools$$module$as3shim$flash$xml$XMLDocument.expando, detachNode$$module$as3shim$flash$xml$XMLDocument = tools$$module$as3shim$flash$xml$XMLDocument.detachNode, forEachSnapshot$$module$as3shim$flash$xml$XMLDocument = tools$$module$as3shim$flash$xml$XMLDocument.forEachSnapshot, forOwn$$module$as3shim$flash$xml$XMLDocument = tools$$module$as3shim$flash$xml$XMLDocument.forOwn, xQuery$$module$as3shim$flash$xml$XMLDocument = tools$$module$as3shim$flash$xml$XMLDocument.xQuery;
  function XMLDocument$$module$as3shim$flash$xml$XMLDocument(a) {
    if(!(this instanceof XMLDocument$$module$as3shim$flash$xml$XMLDocument)) {
      return new XMLDocument$$module$as3shim$flash$xml$XMLDocument(a)
    }
    this.docTypeDecl = null;
    this.idMap = {};
    this.ignoreWhite = !1;
    this.xmlDecl = null;
    this.parseXML(a)
  }
  function createElement$$module$as3shim$flash$xml$XMLDocument(a) {
    return new XMLNode$$module$as3shim$flash$xml$XMLDocument(this[expando$$module$as3shim$flash$xml$XMLDocument].raw.createElement(a))
  }
  function createTextNode$$module$as3shim$flash$xml$XMLDocument(a) {
    return new XMLNode$$module$as3shim$flash$xml$XMLDocument(this[expando$$module$as3shim$flash$xml$XMLDocument].raw.createTextNode(a))
  }
  function parseXML$$module$as3shim$flash$xml$XMLDocument(a) {
    var a = domParser$$module$as3shim$flash$xml$XMLDocument.parseFromString(null == a ? "" : "" + a, "text/xml"), b = this.idMap;
    this.ignoreWhite && forEachSnapshot$$module$as3shim$flash$xml$XMLDocument(xQuery$$module$as3shim$flash$xml$XMLDocument('//text()[normalize-space()=""]', a), detachNode$$module$as3shim$flash$xml$XMLDocument);
    forOwn$$module$as3shim$flash$xml$XMLDocument(b, function(a, d) {
      delete b[d]
    });
    forEachSnapshot$$module$as3shim$flash$xml$XMLDocument(xQuery$$module$as3shim$flash$xml$XMLDocument('//*[(@id) and (@id!="")]', a, 7), function(a) {
      b[a.getAttribute("id")] = a
    });
    this[expando$$module$as3shim$flash$xml$XMLDocument] = {raw:a}
  }
  Class$$module$as3shim$flash$xml$XMLDocument({constructor:XMLDocument$$module$as3shim$flash$xml$XMLDocument, superClass:XMLNode$$module$as3shim$flash$xml$XMLDocument, createElement:createElement$$module$as3shim$flash$xml$XMLDocument, createTextNode:createTextNode$$module$as3shim$flash$xml$XMLDocument, parseXML:parseXML$$module$as3shim$flash$xml$XMLDocument});
  module$as3shim$flash$xml$XMLDocument.module$exports = XMLDocument$$module$as3shim$flash$xml$XMLDocument;
  module$as3shim$flash$xml$XMLDocument.module$exports && (module$as3shim$flash$xml$XMLDocument = module$as3shim$flash$xml$XMLDocument.module$exports);
  var module$as3shim$flash$xml$XMLNodeType = {}, tools$$module$as3shim$flash$xml$XMLNodeType = module$as3shim$tools, Class$$module$as3shim$flash$xml$XMLNodeType = module$as3shim$Class, setConst$$module$as3shim$flash$xml$XMLNodeType = tools$$module$as3shim$flash$xml$XMLNodeType.setConst;
  function XMLNodeType$$module$as3shim$flash$xml$XMLNodeType() {
  }
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "CDATA_NODE", 4);
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "COMMENT_NODE", 8);
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "DOCUMENT_TYPE_NODE", 10);
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "ELEMENT_NODE", 1);
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "PROCESSING_INSTRUCTION_NODE", 7);
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "TEXT_NODE", 3);
  setConst$$module$as3shim$flash$xml$XMLNodeType(XMLNodeType$$module$as3shim$flash$xml$XMLNodeType, "XML_DECLARATION", 13);
  Class$$module$as3shim$flash$xml$XMLNodeType({constructor:XMLNodeType$$module$as3shim$flash$xml$XMLNodeType});
  module$as3shim$flash$xml$XMLNodeType.module$exports = XMLNodeType$$module$as3shim$flash$xml$XMLNodeType;
  module$as3shim$flash$xml$XMLNodeType.module$exports && (module$as3shim$flash$xml$XMLNodeType = module$as3shim$flash$xml$XMLNodeType.module$exports);
  var module$as3shim$int_uint = {}, global$$module$as3shim$int_uint = module$as3shim$global, tools$$module$as3shim$int_uint = module$as3shim$tools, ret$$module$as3shim$int_uint = {"int":function(a) {
    return global$$module$as3shim$int_uint.Number(a) | 0
  }, uint:function(a) {
    return global$$module$as3shim$int_uint.Number(a) >>> 0
  }};
  tools$$module$as3shim$int_uint.mixin(ret$$module$as3shim$int_uint["int"], {MIN_VALUE:-2147483648, MAX_VALUE:2147483647});
  tools$$module$as3shim$int_uint.mixin(ret$$module$as3shim$int_uint.uint, {MIN_VALUE:0, MAX_VALUE:4294967295});
  module$as3shim$int_uint.module$exports = ret$$module$as3shim$int_uint;
  module$as3shim$int_uint.module$exports && (module$as3shim$int_uint = module$as3shim$int_uint.module$exports);
  var module$as3shim$Interface = {}, tools$$module$as3shim$Interface = module$as3shim$tools, Class$$module$as3shim$Interface = module$as3shim$Class;
  function Interface$$module$as3shim$Interface() {
    if(this instanceof Interface$$module$as3shim$Interface) {
      throw VerifyError("Error #1001");
    }
  }
  Class$$module$as3shim$Interface({constructor:Interface$$module$as3shim$Interface});
  module$as3shim$Interface.module$exports = Interface$$module$as3shim$Interface;
  module$as3shim$Interface.module$exports && (module$as3shim$Interface = module$as3shim$Interface.module$exports);
  var module$as3shim$flash$events$IEventDispatcher = {}, tools$$module$as3shim$flash$events$IEventDispatcher = module$as3shim$tools, Class$$module$as3shim$flash$events$IEventDispatcher = module$as3shim$Class, Interface$$module$as3shim$flash$events$IEventDispatcher = module$as3shim$Interface, noop$$module$as3shim$flash$events$IEventDispatcher = tools$$module$as3shim$flash$events$IEventDispatcher.noop;
  function IEventDispatcher$$module$as3shim$flash$events$IEventDispatcher() {
    IEventDispatcher$$module$as3shim$flash$events$IEventDispatcher.__super__.constructor.call(this)
  }
  Class$$module$as3shim$flash$events$IEventDispatcher({constructor:IEventDispatcher$$module$as3shim$flash$events$IEventDispatcher, addEventListener:noop$$module$as3shim$flash$events$IEventDispatcher, dispatchEvent:noop$$module$as3shim$flash$events$IEventDispatcher, hasEventListener:noop$$module$as3shim$flash$events$IEventDispatcher, removeEventListener:noop$$module$as3shim$flash$events$IEventDispatcher, willTrigger:noop$$module$as3shim$flash$events$IEventDispatcher, superClass:Interface$$module$as3shim$flash$events$IEventDispatcher});
  module$as3shim$flash$events$IEventDispatcher.module$exports = IEventDispatcher$$module$as3shim$flash$events$IEventDispatcher;
  module$as3shim$flash$events$IEventDispatcher.module$exports && (module$as3shim$flash$events$IEventDispatcher = module$as3shim$flash$events$IEventDispatcher.module$exports);
  var module$as3shim$flash$net$IDynamicPropertyOutput = {}, tools$$module$as3shim$flash$net$IDynamicPropertyOutput = module$as3shim$tools, Class$$module$as3shim$flash$net$IDynamicPropertyOutput = module$as3shim$Class, Interface$$module$as3shim$flash$net$IDynamicPropertyOutput = module$as3shim$Interface;
  function IDynamicPropertyOutput$$module$as3shim$flash$net$IDynamicPropertyOutput() {
    IDynamicPropertyOutput$$module$as3shim$flash$net$IDynamicPropertyOutput.__super__.constructor.call(this)
  }
  Class$$module$as3shim$flash$net$IDynamicPropertyOutput({constructor:IDynamicPropertyOutput$$module$as3shim$flash$net$IDynamicPropertyOutput, writeDynamicProperty:tools$$module$as3shim$flash$net$IDynamicPropertyOutput.noop, superClass:Interface$$module$as3shim$flash$net$IDynamicPropertyOutput});
  module$as3shim$flash$net$IDynamicPropertyOutput.module$exports = IDynamicPropertyOutput$$module$as3shim$flash$net$IDynamicPropertyOutput;
  module$as3shim$flash$net$IDynamicPropertyOutput.module$exports && (module$as3shim$flash$net$IDynamicPropertyOutput = module$as3shim$flash$net$IDynamicPropertyOutput.module$exports);
  var module$as3shim$flash$net$IDynamicPropertyWriter = {}, tools$$module$as3shim$flash$net$IDynamicPropertyWriter = module$as3shim$tools, Class$$module$as3shim$flash$net$IDynamicPropertyWriter = module$as3shim$Class, Interface$$module$as3shim$flash$net$IDynamicPropertyWriter = module$as3shim$Interface;
  function IDynamicPropertyWriter$$module$as3shim$flash$net$IDynamicPropertyWriter() {
    IDynamicPropertyWriter$$module$as3shim$flash$net$IDynamicPropertyWriter.__super__.constructor.call(this)
  }
  Class$$module$as3shim$flash$net$IDynamicPropertyWriter({constructor:IDynamicPropertyWriter$$module$as3shim$flash$net$IDynamicPropertyWriter, writeDynamicProperties:tools$$module$as3shim$flash$net$IDynamicPropertyWriter.noop, superClass:Interface$$module$as3shim$flash$net$IDynamicPropertyWriter});
  module$as3shim$flash$net$IDynamicPropertyWriter.module$exports = IDynamicPropertyWriter$$module$as3shim$flash$net$IDynamicPropertyWriter;
  module$as3shim$flash$net$IDynamicPropertyWriter.module$exports && (module$as3shim$flash$net$IDynamicPropertyWriter = module$as3shim$flash$net$IDynamicPropertyWriter.module$exports);
  var module$as3shim$iterables = {}, tools$$module$as3shim$iterables = module$as3shim$tools, expando$$module$as3shim$iterables = tools$$module$as3shim$iterables.expando, forEach$$module$as3shim$iterables = tools$$module$as3shim$iterables.forEach, setDescriptor$$module$as3shim$iterables = tools$$module$as3shim$iterables.setDescriptor;
  function mixin$$module$as3shim$iterables(a) {
    forEach$$module$as3shim$iterables(["XML", "XMLList", "Vector"], function(b) {
      var c = a[b].prototype;
      setDescriptor$$module$as3shim$iterables(c, "__nextIndex__", {enumerable:!1, value:function(a) {
        return a in ("Vector" == b ? this[expando$$module$as3shim$iterables].data : this) ? a + 1 : 0
      }});
      setDescriptor$$module$as3shim$iterables(c, "__nextObject__", {enumerable:!1, value:function(a) {
        return a in ("Vector" == b ? this[expando$$module$as3shim$iterables].data : this) ? this : null
      }});
      setDescriptor$$module$as3shim$iterables(c, "__nextName__", {enumerable:!1, value:function(a) {
        return a in ("Vector" == b ? this[expando$$module$as3shim$iterables].data : this) ? a : ""
      }})
    });
    (function() {
      var b = a.flash.utils.Dictionary.prototype;
      setDescriptor$$module$as3shim$iterables(b, "__nextIndex__", {enumerable:!1, value:function(a) {
        var b = tools$$module$as3shim$iterables.keys(this[expando$$module$as3shim$iterables].data);
        return a in b ? a + 1 : 0
      }});
      setDescriptor$$module$as3shim$iterables(b, "__nextName__", {enumerable:!1, value:function(a) {
        var b = this[expando$$module$as3shim$iterables].data, e = tools$$module$as3shim$iterables.keys(b);
        return b[e[a]].key || ""
      }});
      setDescriptor$$module$as3shim$iterables(b, "__nextObject__", {enumerable:!1, value:function(a) {
        var b = tools$$module$as3shim$iterables.keys(this[expando$$module$as3shim$iterables].data);
        return a in b ? this : null
      }})
    })();
    forEach$$module$as3shim$iterables(["Object", "Array"], function(b) {
      function c(a) {
        var b = a.__proto__;
        return!(null !== b && b !== d) ? null : 0 < Object.keys(a.__proto__).length ? a.__proto__ : c(a.__proto__)
      }
      var d = a[b].prototype;
      setDescriptor$$module$as3shim$iterables(d, "__nextIndex__", {enumerable:!1, value:function(a) {
        var b = tools$$module$as3shim$iterables.keys(this);
        return a in b ? a + 1 : c(this) ? 1 : 0
      }});
      setDescriptor$$module$as3shim$iterables(d, "__nextName__", {enumerable:!1, value:function(a) {
        return tools$$module$as3shim$iterables.keys(this)[a] || ""
      }});
      setDescriptor$$module$as3shim$iterables(d, "__nextObject__", {enumerable:!1, value:function(a) {
        var b = tools$$module$as3shim$iterables.keys(this);
        return a in b ? this : c(this)
      }})
    });
    return a
  }
  var iterables$$module$as3shim$iterables = {mixin:mixin$$module$as3shim$iterables};
  module$as3shim$iterables.module$exports = iterables$$module$as3shim$iterables;
  module$as3shim$iterables.module$exports && (module$as3shim$iterables = module$as3shim$iterables.module$exports);
  var module$as3shim$Object = {}, global$$module$as3shim$Object = module$as3shim$global, tools$$module$as3shim$Object = module$as3shim$tools, Class$$module$as3shim$Object = module$as3shim$Class, Object$$module$as3shim$Object = global$$module$as3shim$Object.Object, toString$$module$as3shim$Object = {}.toString, setDescriptor$$module$as3shim$Object = tools$$module$as3shim$Object.setDescriptor, setPseudoPrivate$$module$as3shim$Object = tools$$module$as3shim$Object.setPseudoPrivate;
  function setPropertyIsEnumerable$$module$as3shim$Object(a, b) {
    if(2 > arguments.length) {
      throw Error("Argument count mismatch. Expected 2, got 1.");
    }
    var c = tools$$module$as3shim$Object.getDescriptor(this, a);
    c && (c.enumerable = b, tools$$module$as3shim$Object.setDescriptor(this, a, c))
  }
  setDescriptor$$module$as3shim$Object(Object$$module$as3shim$Object.prototype, "setPropertyIsEnumerable", {enumerable:!1, value:setPropertyIsEnumerable$$module$as3shim$Object});
  setDescriptor$$module$as3shim$Object(Object$$module$as3shim$Object.prototype, "toString", {enumerable:!1, value:function() {
    var a, b = "object";
    if(null === this) {
      a = "Null"
    }else {
      if(void 0 === this) {
        a = "Undefined"
      }else {
        if(this.__isClass__) {
          b = "class", a = this.displayName || this.name || "Function"
        }else {
          if(a = (a = this.constructor) && (a.displayName || a.name), !a) {
            return toString$$module$as3shim$Object.call(this)
          }
        }
      }
    }
    return"[" + b + " " + a + "]"
  }});
  setPseudoPrivate$$module$as3shim$Object(Object$$module$as3shim$Object, "isBuiltIn", !0);
  setPseudoPrivate$$module$as3shim$Object(Object$$module$as3shim$Object, "isClass", !0);
  Object$$module$as3shim$Object.__proto__ = Class$$module$as3shim$Object.prototype;
  module$as3shim$Object.module$exports = Object$$module$as3shim$Object;
  module$as3shim$Object.module$exports && (module$as3shim$Object = module$as3shim$Object.module$exports);
  var module$as3shim$plugins = {}, global$$module$as3shim$plugins = module$as3shim$global, tools$$module$as3shim$plugins = module$as3shim$tools, plugins$$module$as3shim$plugins = global$$module$as3shim$plugins.exports;
  plugins$$module$as3shim$plugins.tools = tools$$module$as3shim$plugins;
  module$as3shim$plugins.module$exports = plugins$$module$as3shim$plugins;
  module$as3shim$plugins.module$exports && (module$as3shim$plugins = module$as3shim$plugins.module$exports);
  var module$as3shim$exports = {}, plugins$$module$as3shim$exports = module$as3shim$plugins, asGlobal$$module$as3shim$exports = plugins$$module$as3shim$exports.asGlobal = {};
  module$as3shim$exports.module$exports = asGlobal$$module$as3shim$exports;
  module$as3shim$exports.module$exports && (module$as3shim$exports = module$as3shim$exports.module$exports);
  var module$as3shim$flash$events$EventDispatcher = {}, exposes$$module$as3shim$flash$events$EventDispatcher = module$as3shim$exports, tools$$module$as3shim$flash$events$EventDispatcher = module$as3shim$tools, Class$$module$as3shim$flash$events$EventDispatcher = module$as3shim$Class, Event$$module$as3shim$flash$events$EventDispatcher = module$as3shim$flash$events$Event, HTTPStatusEvent$$module$as3shim$flash$events$EventDispatcher = module$as3shim$flash$events$HTTPStatusEvent, TimerEvent$$module$as3shim$flash$events$EventDispatcher = 
  module$as3shim$flash$events$TimerEvent, IEventDispatcher$$module$as3shim$flash$events$EventDispatcher = module$as3shim$flash$events$IEventDispatcher, expando$$module$as3shim$flash$events$EventDispatcher = tools$$module$as3shim$flash$events$EventDispatcher.expando, eventMap$$module$as3shim$flash$events$EventDispatcher = {activate:{target:isDisplayObject$$module$as3shim$flash$events$EventDispatcher}, added:{}, addedToStage:{bubbles:!0}, cancel:{}, change:{bubbles:!0}, clear:{target:isInteractiveObject$$module$as3shim$flash$events$EventDispatcher}, 
  close:{}, closing:{cancelable:!0}, complete:{}, connect:{}, context3DCreate:{}, copy:{target:isInteractiveObject$$module$as3shim$flash$events$EventDispatcher}, cut:{target:isInteractiveObject$$module$as3shim$flash$events$EventDispatcher}, deactivate:{target:isDisplayObject$$module$as3shim$flash$events$EventDispatcher}, displaying:{}, enterFrame:{target:isDisplayObject$$module$as3shim$flash$events$EventDispatcher}, exitFrame:{target:isDisplayObject$$module$as3shim$flash$events$EventDispatcher}, 
  exiting:{cancelable:!0, target:getNativeApplicationObject$$module$as3shim$flash$events$EventDispatcher}, frameConstructed:{target:isDisplayObject$$module$as3shim$flash$events$EventDispatcher}, fullScreen:{target:getStage$$module$as3shim$flash$events$EventDispatcher}, htmlBoundsChange:{}, htmlDOMInitialize:{}, htmlRender:{}, httpResponseStatus:{eventClass:HTTPStatusEvent$$module$as3shim$flash$events$EventDispatcher}, httpStatus:{eventClass:HTTPStatusEvent$$module$as3shim$flash$events$EventDispatcher}, 
  id3:{}, init:{}, locationChange:{}, mouseDown:{}, mouseLeave:{target:getStage$$module$as3shim$flash$events$EventDispatcher}, mouseMove:{}, mouseUp:{}, networkChange:{target:getNativeApplicationObject$$module$as3shim$flash$events$EventDispatcher}, open:{}, paste:{target:isInteractiveObject$$module$as3shim$flash$events$EventDispatcher}, removed:{bubbles:!0}, removedFromStage:{}, render:{target:isDisplayObject$$module$as3shim$flash$events$EventDispatcher}, resize:{target:getStage$$module$as3shim$flash$events$EventDispatcher}, 
  scroll:{}, select:{}, selectAll:{target:isInteractiveObject$$module$as3shim$flash$events$EventDispatcher}, soundComplete:{}, standardErrorClose:{target:getNativeProcessObject$$module$as3shim$flash$events$EventDispatcher}, standardInputClose:{target:getNativeProcessObject$$module$as3shim$flash$events$EventDispatcher}, standardOutputClose:{target:getNativeProcessObject$$module$as3shim$flash$events$EventDispatcher}, tabChildrenChange:{bubbles:!0}, tabEnabledChange:{bubbles:!0}, tabIndexChange:{bubbles:!0}, 
  textInteractionModeChange:{}, timer:{eventClass:TimerEvent$$module$as3shim$flash$events$EventDispatcher}, timerComplete:{eventClass:TimerEvent$$module$as3shim$flash$events$EventDispatcher}, unload:{target:getLoaderInfo$$module$as3shim$flash$events$EventDispatcher}, userIdle:{target:getNativeApplicationObject$$module$as3shim$flash$events$EventDispatcher}, userPresent:{target:getNativeApplicationObject$$module$as3shim$flash$events$EventDispatcher}};
  function EventDispatcher$$module$as3shim$flash$events$EventDispatcher() {
    tools$$module$as3shim$flash$events$EventDispatcher.getPrivateObjectOf(this).eventDispatcher = new bonsai.DisplayObject
  }
  function getLoaderInfo$$module$as3shim$flash$events$EventDispatcher() {
    return exposes$$module$as3shim$flash$events$EventDispatcher.stage.loaderInfo
  }
  function getNativeApplicationObject$$module$as3shim$flash$events$EventDispatcher() {
    return{}
  }
  function getNativeProcessObject$$module$as3shim$flash$events$EventDispatcher() {
    return{}
  }
  function getStage$$module$as3shim$flash$events$EventDispatcher() {
    return exposes$$module$as3shim$flash$events$EventDispatcher.stage
  }
  function isDisplayObject$$module$as3shim$flash$events$EventDispatcher(a) {
    return a instanceof exposes$$module$as3shim$flash$events$EventDispatcher.flash.display.DisplayObject
  }
  function isInteractiveObject$$module$as3shim$flash$events$EventDispatcher(a) {
    return a instanceof exposes$$module$as3shim$flash$events$EventDispatcher.flash.display.InteractiveObject
  }
  function addEventListener$$module$as3shim$flash$events$EventDispatcher(a, b) {
    var c = this, d = eventMap$$module$as3shim$flash$events$EventDispatcher[a] || {}, e = d.target, f = b[expando$$module$as3shim$flash$events$EventDispatcher];
    f || (f = b[expando$$module$as3shim$flash$events$EventDispatcher] = function(f) {
      var h = d.eventClass || Event$$module$as3shim$flash$events$EventDispatcher, i = null;
      f instanceof Event$$module$as3shim$flash$events$EventDispatcher || (f = new h(a, !!d.bubbles, !!d.cancelable));
      e && (i = e(c), f.target = !1 === i ? null : i);
      f.target = f.currentTarget = c;
      b.call(c, f)
    });
    this[expando$$module$as3shim$flash$events$EventDispatcher].eventDispatcher.on(d.type || a, f)
  }
  function dispatchEvent$$module$as3shim$flash$events$EventDispatcher(a) {
    this[expando$$module$as3shim$flash$events$EventDispatcher].eventDispatcher.emit(a.type, a)
  }
  function hasEventListener$$module$as3shim$flash$events$EventDispatcher(a) {
    return!!this[expando$$module$as3shim$flash$events$EventDispatcher].eventDispatcher.listeners(a)[0]
  }
  function removeEventListener$$module$as3shim$flash$events$EventDispatcher(a, b) {
    var c = eventMap$$module$as3shim$flash$events$EventDispatcher[a] || {}, d = b[expando$$module$as3shim$flash$events$EventDispatcher];
    d && this[expando$$module$as3shim$flash$events$EventDispatcher].eventDispatcher.removeListener(c.type || a, d)
  }
  function willTrigger$$module$as3shim$flash$events$EventDispatcher() {
    var a = this[expando$$module$as3shim$flash$events$EventDispatcher].eventDispatcher;
    do {
      if(a.listeners(type)[0]) {
        return!0
      }
    }while(a = a.parent);
    return!1
  }
  Class$$module$as3shim$flash$events$EventDispatcher({constructor:EventDispatcher$$module$as3shim$flash$events$EventDispatcher, interfaces:[IEventDispatcher$$module$as3shim$flash$events$EventDispatcher], addEventListener:addEventListener$$module$as3shim$flash$events$EventDispatcher, dispatchEvent:dispatchEvent$$module$as3shim$flash$events$EventDispatcher, hasEventListener:hasEventListener$$module$as3shim$flash$events$EventDispatcher, removeEventListener:removeEventListener$$module$as3shim$flash$events$EventDispatcher, 
  willTrigger:willTrigger$$module$as3shim$flash$events$EventDispatcher});
  module$as3shim$flash$events$EventDispatcher.module$exports = EventDispatcher$$module$as3shim$flash$events$EventDispatcher;
  module$as3shim$flash$events$EventDispatcher.module$exports && (module$as3shim$flash$events$EventDispatcher = module$as3shim$flash$events$EventDispatcher.module$exports);
  var module$as3shim$flash$display$DisplayObject = {}, bonsai$$module$as3shim$flash$display$DisplayObject = module$as3shim$bonsai, exposes$$module$as3shim$flash$display$DisplayObject = module$as3shim$exports, tools$$module$as3shim$flash$display$DisplayObject = module$as3shim$tools, ArgumentError$$module$as3shim$flash$display$DisplayObject = module$as3shim$ArgumentError, Class$$module$as3shim$flash$display$DisplayObject = module$as3shim$Class, EventDispatcher$$module$as3shim$flash$display$DisplayObject = 
  module$as3shim$flash$events$EventDispatcher, Event$$module$as3shim$flash$display$DisplayObject = module$as3shim$flash$events$Event, Transform$$module$as3shim$flash$display$DisplayObject = module$as3shim$flash$geom$Transform, dummyMethods$$module$as3shim$flash$display$DisplayObject = "getBounds,getRect,globalToLocal,globalToLocal3D,hitTestObject,hitTestPoint,local3DToGlobal,localToGlobal".split(","), attrDescriptors$$module$as3shim$flash$display$DisplayObject = {}, expando$$module$as3shim$flash$display$DisplayObject = 
  tools$$module$as3shim$flash$display$DisplayObject.expando, createDummyFunction$$module$as3shim$flash$display$DisplayObject = tools$$module$as3shim$flash$display$DisplayObject.createDummyFunction, setAccessor$$module$as3shim$flash$display$DisplayObject = tools$$module$as3shim$flash$display$DisplayObject.setAccessor, setImmutable$$module$as3shim$flash$display$DisplayObject = tools$$module$as3shim$flash$display$DisplayObject.setImmutable, setDescriptor$$module$as3shim$flash$display$DisplayObject = 
  tools$$module$as3shim$flash$display$DisplayObject.setDescriptor, nameIndex$$module$as3shim$flash$display$DisplayObject = 1, mouseX$$module$as3shim$flash$display$DisplayObject = 0, mouseY$$module$as3shim$flash$display$DisplayObject = 0;
  bonsai$$module$as3shim$flash$display$DisplayObject.stage.on("pointermove", function(a) {
    mouseX$$module$as3shim$flash$display$DisplayObject = a.x;
    mouseY$$module$as3shim$flash$display$DisplayObject = a.y
  });
  function markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(a) {
    a.__touchedByActionScript__ = !0
  }
  function DisplayObject$$module$as3shim$flash$display$DisplayObject() {
    EventDispatcher$$module$as3shim$flash$display$DisplayObject.call(this);
    var a = tools$$module$as3shim$flash$display$DisplayObject.getPrivateObjectOf(this);
    a.attrs.filters = [];
    bonsai$$module$as3shim$flash$display$DisplayObject.stage.on("tick", this, function() {
      this.dispatchEvent(new Event$$module$as3shim$flash$display$DisplayObject(Event$$module$as3shim$flash$display$DisplayObject.ENTER_FRAME))
    });
    a.raw.on("addedToStage", this, function() {
      this.dispatchEvent(new Event$$module$as3shim$flash$display$DisplayObject(Event$$module$as3shim$flash$display$DisplayObject.ADDED_TO_STAGE))
    });
    a.raw.on("removedFromStage", this, function() {
      this.dispatchEvent(new Event$$module$as3shim$flash$display$DisplayObject(Event$$module$as3shim$flash$display$DisplayObject.REMOVED_FROM_STAGE))
    });
    bonsai$$module$as3shim$flash$display$DisplayObject.stage.on("advance", this, function() {
      a.raw.stage && this.dispatchEvent(new Event$$module$as3shim$flash$display$DisplayObject(Event$$module$as3shim$flash$display$DisplayObject.FRAME_CONSTRUCTED))
    });
    a.raw.on("render", this, function() {
      this.dispatchEvent(new Event$$module$as3shim$flash$display$DisplayObject(Event$$module$as3shim$flash$display$DisplayObject.RENDER))
    });
    bonsai$$module$as3shim$flash$display$DisplayObject.stage.on("exitFrame", this, function() {
      a.raw.stage && this.dispatchEvent(new Event$$module$as3shim$flash$display$DisplayObject(Event$$module$as3shim$flash$display$DisplayObject.EXIT_FRAME))
    });
    var b = "[class Stage]" == "" + this.constructor;
    a.name = a.isRootMovie ? "root1" : b ? null : "instance" + nameIndex$$module$as3shim$flash$display$DisplayObject++;
    setAccessor$$module$as3shim$flash$display$DisplayObject(this, "name", {get:function() {
      return this[expando$$module$as3shim$flash$display$DisplayObject].name
    }, set:function(a) {
      this[expando$$module$as3shim$flash$display$DisplayObject].name = a
    }});
    this.accessibilityProperties = null;
    setAccessor$$module$as3shim$flash$display$DisplayObject(this, "alpha", {configurable:!1, get:getAlpha$$module$as3shim$flash$display$DisplayObject, set:setAlpha$$module$as3shim$flash$display$DisplayObject});
    setImmutable$$module$as3shim$flash$display$DisplayObject(this, {name:"loaderInfo", get:getLoaderInfo$$module$as3shim$flash$display$DisplayObject});
    setImmutable$$module$as3shim$flash$display$DisplayObject(this, {name:"mouseX", get:getMouseX$$module$as3shim$flash$display$DisplayObject});
    setImmutable$$module$as3shim$flash$display$DisplayObject(this, {name:"mouseY", get:getMouseY$$module$as3shim$flash$display$DisplayObject});
    setAccessor$$module$as3shim$flash$display$DisplayObject(this, "rotation", {configurable:!1, get:getRotation$$module$as3shim$flash$display$DisplayObject, set:setRotation$$module$as3shim$flash$display$DisplayObject});
    setImmutable$$module$as3shim$flash$display$DisplayObject(this, "root", this);
    setAttrAccessor$$module$as3shim$flash$display$DisplayObject(this, "scaleX");
    setAttrAccessor$$module$as3shim$flash$display$DisplayObject(this, "scaleY");
    setImmutable$$module$as3shim$flash$display$DisplayObject(this, {name:"stage", get:getStage$$module$as3shim$flash$display$DisplayObject});
    setAccessor$$module$as3shim$flash$display$DisplayObject(this, "visible", {configurable:!1, get:getVisible$$module$as3shim$flash$display$DisplayObject, set:setVisible$$module$as3shim$flash$display$DisplayObject});
    setAttrAccessor$$module$as3shim$flash$display$DisplayObject(this, "x");
    setAttrAccessor$$module$as3shim$flash$display$DisplayObject(this, "y");
    var c = new Transform$$module$as3shim$flash$display$DisplayObject(this);
    setDescriptor$$module$as3shim$flash$display$DisplayObject(this, "transform", {get:function() {
      return c
    }})
  }
  function getAlpha$$module$as3shim$flash$display$DisplayObject() {
    return this[expando$$module$as3shim$flash$display$DisplayObject].raw.attr("opacity")
  }
  function getLoaderInfo$$module$as3shim$flash$display$DisplayObject() {
    return this[expando$$module$as3shim$flash$display$DisplayObject].loaderInfo || exposes$$module$as3shim$flash$display$DisplayObject.stage.loaderInfo
  }
  function getMouseX$$module$as3shim$flash$display$DisplayObject() {
    return mouseX$$module$as3shim$flash$display$DisplayObject
  }
  function getMouseY$$module$as3shim$flash$display$DisplayObject() {
    return mouseY$$module$as3shim$flash$display$DisplayObject
  }
  function getRotation$$module$as3shim$flash$display$DisplayObject() {
    return tools$$module$as3shim$flash$display$DisplayObject.radToDeg(this[expando$$module$as3shim$flash$display$DisplayObject].raw.attr("rotation"))
  }
  function getStage$$module$as3shim$flash$display$DisplayObject() {
    return exposes$$module$as3shim$flash$display$DisplayObject.stage
  }
  function getVisible$$module$as3shim$flash$display$DisplayObject() {
    return this[expando$$module$as3shim$flash$display$DisplayObject].raw.attr("visible")
  }
  function setAttrAccessor$$module$as3shim$flash$display$DisplayObject(a, b, c) {
    var d = attrDescriptors$$module$as3shim$flash$display$DisplayObject[b];
    d || (c || (c = b), d = attrDescriptors$$module$as3shim$flash$display$DisplayObject[b] = {configurable:!1, get:function() {
      return this[expando$$module$as3shim$flash$display$DisplayObject].raw.attr(c)
    }, set:function(a) {
      var b = this[expando$$module$as3shim$flash$display$DisplayObject].raw;
      markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(b);
      b.attr(c, a)
    }});
    setAccessor$$module$as3shim$flash$display$DisplayObject(a, b, d)
  }
  function setAlpha$$module$as3shim$flash$display$DisplayObject(a) {
    var b = this[expando$$module$as3shim$flash$display$DisplayObject].raw;
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(b);
    b.attr("opacity", a)
  }
  function setRotation$$module$as3shim$flash$display$DisplayObject(a) {
    var b = this[expando$$module$as3shim$flash$display$DisplayObject].raw;
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(b);
    return b.attr("rotation", tools$$module$as3shim$flash$display$DisplayObject.degToRad(a))
  }
  function setVisible$$module$as3shim$flash$display$DisplayObject(a) {
    this[expando$$module$as3shim$flash$display$DisplayObject].raw.attr("visible", !!a)
  }
  Class$$module$as3shim$flash$display$DisplayObject({constructor:DisplayObject$$module$as3shim$flash$display$DisplayObject, superClass:EventDispatcher$$module$as3shim$flash$display$DisplayObject});
  var proto$$module$as3shim$flash$display$DisplayObject = DisplayObject$$module$as3shim$flash$display$DisplayObject.prototype;
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "blendMode", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject("flash.display.DisplayObject#blendMode"), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.blendMode
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "blendShader", {set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw)
  }, get:function() {
    throw new ReferenceError("Error #1077: Illegal read of write-only property blendShader.");
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "filters", {set:function(a) {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    this[expando$$module$as3shim$flash$display$DisplayObject].attrs.filters = a
  }, get:function() {
    return this[expando$$module$as3shim$flash$display$DisplayObject].attrs.filters
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "height", {set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw)
  }, get:function() {
    return this[expando$$module$as3shim$flash$display$DisplayObject].raw.getComputed("height")
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "width", {set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw)
  }, get:function() {
    return this[expando$$module$as3shim$flash$display$DisplayObject].raw.getComputed("width")
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "opaqueBackground", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject({name:"flash.display.DisplayObject#opaqueBackground", returnValue:null}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.opaqueBackground
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "rotationX", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject({name:"flash.display.DisplayObject#rotationX", returnValue:0}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.rotationX
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "rotationY", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject({name:"flash.display.DisplayObject#rotationY", returnValue:0}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.rotationY
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "rotationZ", {get:function() {
    return this.rotation
  }, set:function(a) {
    this.rotation = a
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "scale9Grid", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject({name:"flash.display.DisplayObject#scale9Grid", returnValue:null}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.scale9Grid
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "scaleZ", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject("flash.display.DisplayObject#scaleZ"), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.scaleZ
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "scrollRect", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject({name:"flash.display.DisplayObject#scrollRect", returnValue:null}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.scrollRect
  }});
  setAccessor$$module$as3shim$flash$display$DisplayObject(proto$$module$as3shim$flash$display$DisplayObject, "z", {get:createDummyFunction$$module$as3shim$flash$display$DisplayObject({name:"flash.display.DisplayObject#z", returnValue:0}), set:function() {
    markAsTouchedByAS$$module$as3shim$flash$display$DisplayObject(this[expando$$module$as3shim$flash$display$DisplayObject].raw);
    return this.z
  }});
  tools$$module$as3shim$flash$display$DisplayObject.forEach(dummyMethods$$module$as3shim$flash$display$DisplayObject, function(a) {
    proto$$module$as3shim$flash$display$DisplayObject[a] || (proto$$module$as3shim$flash$display$DisplayObject[a] = createDummyFunction$$module$as3shim$flash$display$DisplayObject("flash.display.DisplayObject#" + a))
  });
  module$as3shim$flash$display$DisplayObject.module$exports = DisplayObject$$module$as3shim$flash$display$DisplayObject;
  module$as3shim$flash$display$DisplayObject.module$exports && (module$as3shim$flash$display$DisplayObject = module$as3shim$flash$display$DisplayObject.module$exports);
  var module$as3shim$flash$display$InteractiveObject = {}, tools$$module$as3shim$flash$display$InteractiveObject = module$as3shim$tools, Class$$module$as3shim$flash$display$InteractiveObject = module$as3shim$Class, DisplayObject$$module$as3shim$flash$display$InteractiveObject = module$as3shim$flash$display$DisplayObject, MouseEvent$$module$as3shim$flash$display$InteractiveObject = module$as3shim$flash$events$MouseEvent;
  function InteractiveObject$$module$as3shim$flash$display$InteractiveObject() {
    var a = tools$$module$as3shim$flash$display$InteractiveObject.getPrivateObjectOf(this);
    (!a || !a.raw) && console.error("No `raw` is defined for InteractiveObject");
    DisplayObject$$module$as3shim$flash$display$InteractiveObject.call(this);
    registerMouseEvent$$module$as3shim$flash$display$InteractiveObject(this, "click", MouseEvent$$module$as3shim$flash$display$InteractiveObject.CLICK);
    registerMouseEvent$$module$as3shim$flash$display$InteractiveObject(this, "pointerdown", MouseEvent$$module$as3shim$flash$display$InteractiveObject.MOUSE_DOWN);
    registerMouseEvent$$module$as3shim$flash$display$InteractiveObject(this, "pointerup", MouseEvent$$module$as3shim$flash$display$InteractiveObject.MOUSE_UP);
    registerMouseEvent$$module$as3shim$flash$display$InteractiveObject(this, "pointermove", MouseEvent$$module$as3shim$flash$display$InteractiveObject.MOUSE_MOVE);
    var b = this;
    a.raw.on("mouseover", function() {
      tools$$module$as3shim$flash$display$InteractiveObject.hitch(b, dispatchMouseEvent$$module$as3shim$flash$display$InteractiveObject, MouseEvent$$module$as3shim$flash$display$InteractiveObject.MOUSE_OVER)();
      tools$$module$as3shim$flash$display$InteractiveObject.hitch(b, dispatchMouseEvent$$module$as3shim$flash$display$InteractiveObject, MouseEvent$$module$as3shim$flash$display$InteractiveObject.ROLL_OVER)()
    });
    a.raw.on("mouseout", function() {
      tools$$module$as3shim$flash$display$InteractiveObject.hitch(b, dispatchMouseEvent$$module$as3shim$flash$display$InteractiveObject, MouseEvent$$module$as3shim$flash$display$InteractiveObject.MOUSE_OUT)();
      tools$$module$as3shim$flash$display$InteractiveObject.hitch(b, dispatchMouseEvent$$module$as3shim$flash$display$InteractiveObject, MouseEvent$$module$as3shim$flash$display$InteractiveObject.ROLL_OUT)()
    })
  }
  function registerMouseEvent$$module$as3shim$flash$display$InteractiveObject(a, b, c) {
    tools$$module$as3shim$flash$display$InteractiveObject.getPrivateObjectOf(a).raw.on(b, tools$$module$as3shim$flash$display$InteractiveObject.hitch(a, dispatchMouseEvent$$module$as3shim$flash$display$InteractiveObject, c))
  }
  function dispatchMouseEvent$$module$as3shim$flash$display$InteractiveObject(a) {
    tools$$module$as3shim$flash$display$InteractiveObject.hitch(this, tools$$module$as3shim$flash$display$InteractiveObject.dispatchMouseEvent, MouseEvent$$module$as3shim$flash$display$InteractiveObject, a)()
  }
  Class$$module$as3shim$flash$display$InteractiveObject({constructor:InteractiveObject$$module$as3shim$flash$display$InteractiveObject, superClass:DisplayObject$$module$as3shim$flash$display$InteractiveObject});
  module$as3shim$flash$display$InteractiveObject.module$exports = InteractiveObject$$module$as3shim$flash$display$InteractiveObject;
  module$as3shim$flash$display$InteractiveObject.module$exports && (module$as3shim$flash$display$InteractiveObject = module$as3shim$flash$display$InteractiveObject.module$exports);
  var module$as3shim$flash$display$DisplayObjectContainer = {}, tools$$module$as3shim$flash$display$DisplayObjectContainer = module$as3shim$tools, Class$$module$as3shim$flash$display$DisplayObjectContainer = module$as3shim$Class, InteractiveObject$$module$as3shim$flash$display$DisplayObjectContainer = module$as3shim$flash$display$InteractiveObject, dummyMethods$$module$as3shim$flash$display$DisplayObjectContainer = "areInaccessibleObjectsUnderPoint,contains,getChildByName,getChildIndex,getObjectsUnderPoint,removeChildAt,removeChildren,setChildIndex,swapChildren,swapChildrenAt".split(","), 
  expando$$module$as3shim$flash$display$DisplayObjectContainer = tools$$module$as3shim$flash$display$DisplayObjectContainer.expando;
  function DisplayObjectContainer$$module$as3shim$flash$display$DisplayObjectContainer() {
    InteractiveObject$$module$as3shim$flash$display$DisplayObjectContainer.call(this)
  }
  function addChild$$module$as3shim$flash$display$DisplayObjectContainer(a) {
    a[expando$$module$as3shim$flash$display$DisplayObjectContainer].parent = this;
    var b = a[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw, c = this[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw;
    b.__flash__ !== a && (b.__flash__ = a);
    c.children().length ? c.addChild(b) : c.addChild(b, 1)
  }
  function getChildAt$$module$as3shim$flash$display$DisplayObjectContainer(a) {
    a = this[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw.children()[a + 1];
    if(!a) {
      throw RangeError("Error #2006");
    }
    return a.__flash__
  }
  function removeChild$$module$as3shim$flash$display$DisplayObjectContainer(a) {
    this[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw.removeChild(a[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw)
  }
  function addChildAt$$module$as3shim$flash$display$DisplayObjectContainer(a, b) {
    a[expando$$module$as3shim$flash$display$DisplayObjectContainer].parent = this;
    var c = a[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw;
    c.__flash__ !== a && (c.__flash__ = a);
    this[expando$$module$as3shim$flash$display$DisplayObjectContainer].raw.addChild(c, b + 1);
    return a
  }
  Class$$module$as3shim$flash$display$DisplayObjectContainer({constructor:DisplayObjectContainer$$module$as3shim$flash$display$DisplayObjectContainer, superClass:InteractiveObject$$module$as3shim$flash$display$DisplayObjectContainer, addChild:addChild$$module$as3shim$flash$display$DisplayObjectContainer, addChildAt:addChildAt$$module$as3shim$flash$display$DisplayObjectContainer, getChildAt:getChildAt$$module$as3shim$flash$display$DisplayObjectContainer, removeChild:removeChild$$module$as3shim$flash$display$DisplayObjectContainer});
  var proto$$module$as3shim$flash$display$DisplayObjectContainer = DisplayObjectContainer$$module$as3shim$flash$display$DisplayObjectContainer.prototype;
  tools$$module$as3shim$flash$display$DisplayObjectContainer.setAccessor(proto$$module$as3shim$flash$display$DisplayObjectContainer, "parent", {get:function() {
    return this[expando$$module$as3shim$flash$display$DisplayObjectContainer].parent || null
  }});
  tools$$module$as3shim$flash$display$DisplayObjectContainer.forEach(dummyMethods$$module$as3shim$flash$display$DisplayObjectContainer, function(a) {
    proto$$module$as3shim$flash$display$DisplayObjectContainer[a] = tools$$module$as3shim$flash$display$DisplayObjectContainer.createDummyFunction("flash.display.DisplayObjectContainer#" + a)
  });
  module$as3shim$flash$display$DisplayObjectContainer.module$exports = DisplayObjectContainer$$module$as3shim$flash$display$DisplayObjectContainer;
  module$as3shim$flash$display$DisplayObjectContainer.module$exports && (module$as3shim$flash$display$DisplayObjectContainer = module$as3shim$flash$display$DisplayObjectContainer.module$exports);
  var module$as3shim$flash$display$Loader = {}, exposes$$module$as3shim$flash$display$Loader = module$as3shim$exports, tools$$module$as3shim$flash$display$Loader = module$as3shim$tools, Class$$module$as3shim$flash$display$Loader = module$as3shim$Class, DisplayObjectContainer$$module$as3shim$flash$display$Loader = module$as3shim$flash$display$DisplayObjectContainer, createDummyFunction$$module$as3shim$flash$display$Loader = tools$$module$as3shim$flash$display$Loader.createDummyFunction, setDescriptor$$module$as3shim$flash$display$Loader = 
  tools$$module$as3shim$flash$display$Loader.setDescriptor, setImmutable$$module$as3shim$flash$display$Loader = tools$$module$as3shim$flash$display$Loader.setImmutable;
  function Loader$$module$as3shim$flash$display$Loader() {
    tools$$module$as3shim$flash$display$Loader.getPrivateObjectOf(this).raw = new bonsai.Group;
    Loader$$module$as3shim$flash$display$Loader.__super__.constructor.call(this);
    var a = exposes$$module$as3shim$flash$display$Loader.stage;
    setImmutable$$module$as3shim$flash$display$Loader(this, "content", a);
    setImmutable$$module$as3shim$flash$display$Loader(this, "contentLoaderInfo", a.loaderInfo)
  }
  Class$$module$as3shim$flash$display$Loader({constructor:Loader$$module$as3shim$flash$display$Loader, superClass:DisplayObjectContainer$$module$as3shim$flash$display$Loader, close:createDummyFunction$$module$as3shim$flash$display$Loader({name:"close", returnType:"void"}), load:tools$$module$as3shim$flash$display$Loader.noop, loadBytes:createDummyFunction$$module$as3shim$flash$display$Loader({name:"loadBytes", returnType:"void"}), unload:createDummyFunction$$module$as3shim$flash$display$Loader({name:"unload", 
  returnType:"void"}), unloadAndStop:createDummyFunction$$module$as3shim$flash$display$Loader({name:"unloadAndStop", returnType:"void"})});
  setDescriptor$$module$as3shim$flash$display$Loader(Loader$$module$as3shim$flash$display$Loader.prototype, "uncaughtErrorEvents", {get:createDummyFunction$$module$as3shim$flash$display$Loader({name:"uncaughtErrorEvents", returnType:""})});
  module$as3shim$flash$display$Loader.module$exports = Loader$$module$as3shim$flash$display$Loader;
  module$as3shim$flash$display$Loader.module$exports && (module$as3shim$flash$display$Loader = module$as3shim$flash$display$Loader.module$exports);
  var module$as3shim$flash$display$Shape = {}, tools$$module$as3shim$flash$display$Shape = module$as3shim$tools, Class$$module$as3shim$flash$display$Shape = module$as3shim$Class, DisplayObject$$module$as3shim$flash$display$Shape = module$as3shim$flash$display$DisplayObject, Graphics$$module$as3shim$flash$display$Shape = module$as3shim$flash$display$Graphics, expando$$module$as3shim$flash$display$Shape = tools$$module$as3shim$flash$display$Shape.expando;
  function Shape$$module$as3shim$flash$display$Shape() {
    var a = tools$$module$as3shim$flash$display$Shape.getPrivateObjectOf(this);
    a.raw = new bonsai.Group;
    DisplayObject$$module$as3shim$flash$display$Shape.call(this);
    a.graphics = new Graphics$$module$as3shim$flash$display$Shape;
    tools$$module$as3shim$flash$display$Shape.setDescriptor(this, "graphics", {get:function() {
      a.isRootMovie || a.graphics[expando$$module$as3shim$flash$display$Shape].raw.addTo(a.raw);
      return a.graphics
    }})
  }
  Class$$module$as3shim$flash$display$Shape({constructor:Shape$$module$as3shim$flash$display$Shape, superClass:DisplayObject$$module$as3shim$flash$display$Shape});
  module$as3shim$flash$display$Shape.module$exports = Shape$$module$as3shim$flash$display$Shape;
  module$as3shim$flash$display$Shape.module$exports && (module$as3shim$flash$display$Shape = module$as3shim$flash$display$Shape.module$exports);
  var module$as3shim$flash$display$SimpleButton = {}, plugins$$module$as3shim$flash$display$SimpleButton = module$as3shim$plugins, bonsai$$module$as3shim$flash$display$SimpleButton = module$as3shim$bonsai, tools$$module$as3shim$flash$display$SimpleButton = module$as3shim$tools, Class$$module$as3shim$flash$display$SimpleButton = module$as3shim$Class, InteractiveObject$$module$as3shim$flash$display$SimpleButton = module$as3shim$flash$display$InteractiveObject, expando$$module$as3shim$flash$display$SimpleButton = 
  tools$$module$as3shim$flash$display$SimpleButton.expando, setDescriptor$$module$as3shim$flash$display$SimpleButton = tools$$module$as3shim$flash$display$SimpleButton.setDescriptor;
  function SimpleButton$$module$as3shim$flash$display$SimpleButton(a, b, c, d) {
    var e = tools$$module$as3shim$flash$display$SimpleButton.getPrivateObjectOf(this);
    e.raw || (e.raw = new plugins$$module$as3shim$flash$display$SimpleButton.Button);
    InteractiveObject$$module$as3shim$flash$display$SimpleButton.call(this);
    e.up = null;
    e.over = null;
    e.down = null;
    e.hitTest = null;
    var f = !1;
    setDescriptor$$module$as3shim$flash$display$SimpleButton(this, "enabled", {get:function() {
      return f
    }, set:function(a) {
      f = a
    }});
    setDescriptor$$module$as3shim$flash$display$SimpleButton(this, "hitTestState", {get:function() {
      return e.hitTest
    }, set:function(a) {
      e.hitTest = a;
      e.raw.addEventAreaChild(a[expando$$module$as3shim$flash$display$SimpleButton].raw)
    }});
    setDescriptor$$module$as3shim$flash$display$SimpleButton(this, "downState", {get:function() {
      return e.down
    }, set:function(a) {
      e.down = a;
      e.raw.stateChildren.active.clear();
      e.raw.addActiveStateChild(a[expando$$module$as3shim$flash$display$SimpleButton].raw)
    }});
    setDescriptor$$module$as3shim$flash$display$SimpleButton(this, "overState", {get:function() {
      return e.over
    }, set:function(a) {
      e.over = a;
      e.raw.stateChildren.hover.clear();
      e.raw.addHoverStateChild(a[expando$$module$as3shim$flash$display$SimpleButton].raw)
    }});
    setDescriptor$$module$as3shim$flash$display$SimpleButton(this, "upState", {get:function() {
      return e.up
    }, set:function(a) {
      e.up = a;
      e.raw.stateChildren.normal.clear();
      e.raw.addNormalStateChild(a[expando$$module$as3shim$flash$display$SimpleButton].raw)
    }});
    var g = !0;
    setDescriptor$$module$as3shim$flash$display$SimpleButton(this, "useHandCursor", {get:function() {
      return g
    }, set:function(a) {
      g = a;
      e.raw.eventArea.attr("cursor", g ? "pointer" : "")
    }});
    a && (this.upState = a);
    b && (this.overState = b);
    c && (this.downState = c);
    d && (this.hitTestState = d);
    this.enabled = this.useHandCursor = !0;
    this.soundTransform = null;
    this.trackAsMenu = !1
  }
  Class$$module$as3shim$flash$display$SimpleButton({constructor:SimpleButton$$module$as3shim$flash$display$SimpleButton, superClass:InteractiveObject$$module$as3shim$flash$display$SimpleButton});
  module$as3shim$flash$display$SimpleButton.module$exports = SimpleButton$$module$as3shim$flash$display$SimpleButton;
  module$as3shim$flash$display$SimpleButton.module$exports && (module$as3shim$flash$display$SimpleButton = module$as3shim$flash$display$SimpleButton.module$exports);
  var module$as3shim$flash$display$Sprite = {}, exposes$$module$as3shim$flash$display$Sprite = module$as3shim$exports, Class$$module$as3shim$flash$display$Sprite = module$as3shim$Class, tools$$module$as3shim$flash$display$Sprite = module$as3shim$tools, DisplayObjectContainer$$module$as3shim$flash$display$Sprite = module$as3shim$flash$display$DisplayObjectContainer, Graphics$$module$as3shim$flash$display$Sprite = module$as3shim$flash$display$Graphics, expando$$module$as3shim$flash$display$Sprite = 
  tools$$module$as3shim$flash$display$Sprite.expando;
  function Sprite$$module$as3shim$flash$display$Sprite() {
    var a = tools$$module$as3shim$flash$display$Sprite.getPrivateObjectOf(this);
    tools$$module$as3shim$flash$display$Sprite.hasKey(a, "raw") || (a.raw = new bonsai.Group);
    tools$$module$as3shim$flash$display$Sprite.hasKey(a, "isRootMovie") || (a.isRootMovie = !1);
    DisplayObjectContainer$$module$as3shim$flash$display$Sprite.prototype.constructor.call(this);
    a.graphics = new Graphics$$module$as3shim$flash$display$Sprite;
    a.isRootMovie && setupRootMovie$$module$as3shim$flash$display$Sprite.call(this)
  }
  function setupRootMovie$$module$as3shim$flash$display$Sprite() {
    var a = this[expando$$module$as3shim$flash$display$Sprite];
    a.raw || (a.raw = new bonsai.Group);
    a.graphics[expando$$module$as3shim$flash$display$Sprite].raw.addTo(a.raw);
    a.parent = exposes$$module$as3shim$flash$display$Sprite.stage
  }
  function startDrag$$module$as3shim$flash$display$Sprite() {
    var a = this[expando$$module$as3shim$flash$display$Sprite], b = a.raw, c = null, d = function(a) {
      c || (c = {x:a.x - b.attr("x"), y:a.y - b.attr("y")});
      b.attr({x:a.x - c.x, y:a.y - c.y})
    };
    bonsai.stage.on("pointermove", d);
    a.positionUpdater = d
  }
  function stopDrag$$module$as3shim$flash$display$Sprite() {
    var a = this[expando$$module$as3shim$flash$display$Sprite];
    a.positionUpdater && bonsai.stage.removeListener("pointermove", a.positionUpdater);
    delete a.positionUpdater
  }
  Class$$module$as3shim$flash$display$Sprite({constructor:Sprite$$module$as3shim$flash$display$Sprite, superClass:DisplayObjectContainer$$module$as3shim$flash$display$Sprite, startDrag:startDrag$$module$as3shim$flash$display$Sprite, startTouchDrag:startDrag$$module$as3shim$flash$display$Sprite, stopDrag:stopDrag$$module$as3shim$flash$display$Sprite, stopTouchDrag:stopDrag$$module$as3shim$flash$display$Sprite});
  var proto$$module$as3shim$flash$display$Sprite = Sprite$$module$as3shim$flash$display$Sprite.prototype;
  tools$$module$as3shim$flash$display$Sprite.setAccessor(proto$$module$as3shim$flash$display$Sprite, "useHandCursor", {set:function(a) {
    a ? this[expando$$module$as3shim$flash$display$Sprite].raw.attr("cursor", "pointer") : this[expando$$module$as3shim$flash$display$Sprite].raw.attr("cursor", "default");
    this[expando$$module$as3shim$flash$display$Sprite].useHandCursor = a
  }, get:function() {
    return!!this[expando$$module$as3shim$flash$display$Sprite].useHandCursor
  }});
  tools$$module$as3shim$flash$display$Sprite.setDescriptor(proto$$module$as3shim$flash$display$Sprite, "graphics", {get:function() {
    var a = this[expando$$module$as3shim$flash$display$Sprite];
    a.isRootMovie || a.graphics[expando$$module$as3shim$flash$display$Sprite].raw.addTo(a.raw);
    return a.graphics
  }});
  module$as3shim$flash$display$Sprite.module$exports = Sprite$$module$as3shim$flash$display$Sprite;
  module$as3shim$flash$display$Sprite.module$exports && (module$as3shim$flash$display$Sprite = module$as3shim$flash$display$Sprite.module$exports);
  var module$as3shim$flash$display$MovieClip = {}, bonsai$$module$as3shim$flash$display$MovieClip = module$as3shim$bonsai, tools$$module$as3shim$flash$display$MovieClip = module$as3shim$tools, Class$$module$as3shim$flash$display$MovieClip = module$as3shim$Class, Sprite$$module$as3shim$flash$display$MovieClip = module$as3shim$flash$display$Sprite, Movie$$module$as3shim$flash$display$MovieClip = bonsai$$module$as3shim$flash$display$MovieClip.Movie, expando$$module$as3shim$flash$display$MovieClip = 
  tools$$module$as3shim$flash$display$MovieClip.expando, setImmutable$$module$as3shim$flash$display$MovieClip = tools$$module$as3shim$flash$display$MovieClip.setImmutable;
  function advanceThroughFrames$$module$as3shim$flash$display$MovieClip(a, b) {
    a.__transwf__.doIgnoreActionScript = !0;
    var c;
    c = a.currentFrame;
    var d = a._length;
    if(b > c) {
      for(c += 1;c < b;c++) {
        a.emit(c)
      }
    }else {
      if(b < c) {
        for(c += 1;c < d;c++) {
          a.emit(c)
        }
        for(c = 0;c < b;c++) {
          a.emit(c)
        }
      }
    }
    a.__transwf__.doIgnoreActionScript = !1
  }
  var privateObjectDefaults$$module$as3shim$flash$display$MovieClip = Object.create(Object.prototype, {frameScripts:{enumerable:!0, get:function() {
    return[]
  }}, raw:{enumerable:!0, get:function() {
    return new Movie$$module$as3shim$flash$display$MovieClip
  }}}), getPrivateObjectOf$$module$as3shim$flash$display$MovieClip = tools$$module$as3shim$flash$display$MovieClip.getPrivateObjectOf;
  function getPrivateObjectOfMovieClip$$module$as3shim$flash$display$MovieClip(a) {
    return getPrivateObjectOf$$module$as3shim$flash$display$MovieClip(a, privateObjectDefaults$$module$as3shim$flash$display$MovieClip)
  }
  function MovieClip$$module$as3shim$flash$display$MovieClip() {
    var a = getPrivateObjectOfMovieClip$$module$as3shim$flash$display$MovieClip(this);
    a.raw.shimsAreBound || (a.raw.shimsAreBound = !0, a.raw.on("advance", this, function() {
      if(!a.raw.__transwf__ || !a.raw.__transwf__.doIgnoreActionScript) {
        bonsai$$module$as3shim$flash$display$MovieClip.stage.once("subMoviesAdvanced", function() {
          try {
            a.raw.emit("runframescripts", a.raw, a.raw.currentFrame)
          }catch(b) {
            console.error("AS3VM threw an error... stopping movie.", b), bonsai$$module$as3shim$flash$display$MovieClip.stage.root.freeze()
          }
        })
      }
    }));
    Sprite$$module$as3shim$flash$display$MovieClip.prototype.constructor.call(this);
    this.enabled = !0
  }
  function handleFrameScripts$$module$as3shim$flash$display$MovieClip(a, b) {
    var c = this[expando$$module$as3shim$flash$display$MovieClip].frameScripts[b];
    c && c()
  }
  function addFrameScript$$module$as3shim$flash$display$MovieClip() {
    for(var a = getPrivateObjectOfMovieClip$$module$as3shim$flash$display$MovieClip(this), b = a.frameScripts, c = 0, d = arguments.length;c < d;c += 2) {
      b[arguments[c]] = arguments[c + 1]
    }
    a.handleFrameScripts || (a.handleFrameScripts = handleFrameScripts$$module$as3shim$flash$display$MovieClip, a.raw.on("runframescripts", tools$$module$as3shim$flash$display$MovieClip.hitch(this, a.handleFrameScripts)))
  }
  function gotoAndPlay$$module$as3shim$flash$display$MovieClip(a) {
    var b = this[expando$$module$as3shim$flash$display$MovieClip].raw;
    "string" === typeof a ? a in b.__transwf__.frameLabels ? a = b.__transwf__.frameLabels[a] : console.error("No frame found for label: " + a) : a -= 1;
    advanceThroughFrames$$module$as3shim$flash$display$MovieClip(b, a);
    b.play(a);
    b.emit("runframescripts", b, a)
  }
  function gotoAndStop$$module$as3shim$flash$display$MovieClip(a) {
    var b = this[expando$$module$as3shim$flash$display$MovieClip].raw;
    "string" === typeof a ? a in b.__transwf__.frameLabels ? a = b.__transwf__.frameLabels[a] : console.error("No frame found for label: " + a) : a -= 1;
    advanceThroughFrames$$module$as3shim$flash$display$MovieClip(b, a);
    b.stop(a);
    b.emit("runframescripts", b, a)
  }
  function nextFrame$$module$as3shim$flash$display$MovieClip() {
    this[expando$$module$as3shim$flash$display$MovieClip].raw.currentFrame += 1
  }
  function prevFrame$$module$as3shim$flash$display$MovieClip() {
    this[expando$$module$as3shim$flash$display$MovieClip].raw.currentFrame -= 1
  }
  function play$$module$as3shim$flash$display$MovieClip() {
    this[expando$$module$as3shim$flash$display$MovieClip].raw.play()
  }
  function stop$$module$as3shim$flash$display$MovieClip() {
    this[expando$$module$as3shim$flash$display$MovieClip].raw.stop()
  }
  Class$$module$as3shim$flash$display$MovieClip({constructor:MovieClip$$module$as3shim$flash$display$MovieClip, superClass:Sprite$$module$as3shim$flash$display$MovieClip, addFrameScript:addFrameScript$$module$as3shim$flash$display$MovieClip, gotoAndPlay:gotoAndPlay$$module$as3shim$flash$display$MovieClip, gotoAndStop:gotoAndStop$$module$as3shim$flash$display$MovieClip, nextFrame:nextFrame$$module$as3shim$flash$display$MovieClip, prevFrame:prevFrame$$module$as3shim$flash$display$MovieClip, play:play$$module$as3shim$flash$display$MovieClip, 
  stop:stop$$module$as3shim$flash$display$MovieClip});
  var proto$$module$as3shim$flash$display$MovieClip = MovieClip$$module$as3shim$flash$display$MovieClip.prototype;
  setImmutable$$module$as3shim$flash$display$MovieClip(proto$$module$as3shim$flash$display$MovieClip, {name:"totalFrames", get:function() {
    return this[expando$$module$as3shim$flash$display$MovieClip].raw.frames.length
  }});
  setImmutable$$module$as3shim$flash$display$MovieClip(proto$$module$as3shim$flash$display$MovieClip, {name:"framesLoaded", get:function() {
    return this[expando$$module$as3shim$flash$display$MovieClip].raw.frames.length
  }});
  setImmutable$$module$as3shim$flash$display$MovieClip(proto$$module$as3shim$flash$display$MovieClip, {name:"currentFrame", get:function() {
    return this[expando$$module$as3shim$flash$display$MovieClip].raw.currentFrame + 1
  }});
  module$as3shim$flash$display$MovieClip.module$exports = MovieClip$$module$as3shim$flash$display$MovieClip;
  module$as3shim$flash$display$MovieClip.module$exports && (module$as3shim$flash$display$MovieClip = module$as3shim$flash$display$MovieClip.module$exports);
  var module$as3shim$flash$events$UncaughtErrorEvents = {}, tools$$module$as3shim$flash$events$UncaughtErrorEvents = module$as3shim$tools, Class$$module$as3shim$flash$events$UncaughtErrorEvents = module$as3shim$Class, EventDispatcher$$module$as3shim$flash$events$UncaughtErrorEvents = module$as3shim$flash$events$EventDispatcher;
  function UncaughtErrorEvents$$module$as3shim$flash$events$UncaughtErrorEvents() {
  }
  Class$$module$as3shim$flash$events$UncaughtErrorEvents({constructor:UncaughtErrorEvents$$module$as3shim$flash$events$UncaughtErrorEvents, superClass:EventDispatcher$$module$as3shim$flash$events$UncaughtErrorEvents});
  module$as3shim$flash$events$UncaughtErrorEvents.module$exports = UncaughtErrorEvents$$module$as3shim$flash$events$UncaughtErrorEvents;
  module$as3shim$flash$events$UncaughtErrorEvents.module$exports && (module$as3shim$flash$events$UncaughtErrorEvents = module$as3shim$flash$events$UncaughtErrorEvents.module$exports);
  var module$as3shim$flash$display$LoaderInfo = {}, bonsai$$module$as3shim$flash$display$LoaderInfo = module$as3shim$bonsai, exposes$$module$as3shim$flash$display$LoaderInfo = module$as3shim$exports, tools$$module$as3shim$flash$display$LoaderInfo = module$as3shim$tools, Class$$module$as3shim$flash$display$LoaderInfo = module$as3shim$Class, EventDispatcher$$module$as3shim$flash$display$LoaderInfo = module$as3shim$flash$events$EventDispatcher, SWFVersion$$module$as3shim$flash$display$LoaderInfo = module$as3shim$flash$display$SWFVersion, 
  UncaughtErrorEvents$$module$as3shim$flash$display$LoaderInfo = module$as3shim$flash$events$UncaughtErrorEvents, expando$$module$as3shim$flash$display$LoaderInfo = tools$$module$as3shim$flash$display$LoaderInfo.expando, setAccessor$$module$as3shim$flash$display$LoaderInfo = tools$$module$as3shim$flash$display$LoaderInfo.setAccessor, setImmutable$$module$as3shim$flash$display$LoaderInfo = tools$$module$as3shim$flash$display$LoaderInfo.setImmutable;
  function LoaderInfo$$module$as3shim$flash$display$LoaderInfo() {
    this[expando$$module$as3shim$flash$display$LoaderInfo] || (this[expando$$module$as3shim$flash$display$LoaderInfo] = {childAllowsParent:!1, parentAllowsChild:!1});
    LoaderInfo$$module$as3shim$flash$display$LoaderInfo.__super__.constructor.call(this);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "actionScriptVersion", 3);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "applicationDomain", {});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "bytes", []);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "bytesLoaded", 1);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "bytesTotal", 1);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"childAllowsParent", get:getChildAllowsParent$$module$as3shim$flash$display$LoaderInfo});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"content", get:getContent$$module$as3shim$flash$display$LoaderInfo});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "contentType", "application/x-shockwave-flash");
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"frameRate", get:getFrameRate$$module$as3shim$flash$display$LoaderInfo});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"height", get:getHeight$$module$as3shim$flash$display$LoaderInfo});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "isURLInaccessible", !1);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "loader", null);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "loaderURL", "");
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"parameters", get:function() {
      return bonsai$$module$as3shim$flash$display$LoaderInfo.stage.options.flashvars || {}
    }});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"parentAllowsChild", get:getParentAllowsChild$$module$as3shim$flash$display$LoaderInfo});
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "sameDomain", !0);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "sharedEvents", new EventDispatcher$$module$as3shim$flash$display$LoaderInfo);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "swfVersion", SWFVersion$$module$as3shim$flash$display$LoaderInfo.FLASH9);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "uncaughtErrorEvents", new UncaughtErrorEvents$$module$as3shim$flash$display$LoaderInfo);
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, "url", "");
    setImmutable$$module$as3shim$flash$display$LoaderInfo(this, {name:"width", get:getWidth$$module$as3shim$flash$display$LoaderInfo})
  }
  function getChildAllowsParent$$module$as3shim$flash$display$LoaderInfo() {
    return this[expando$$module$as3shim$flash$display$LoaderInfo].childAllowsParent
  }
  function getContent$$module$as3shim$flash$display$LoaderInfo() {
    return exposes$$module$as3shim$flash$display$LoaderInfo.stage
  }
  function getFrameRate$$module$as3shim$flash$display$LoaderInfo() {
    return bonsai$$module$as3shim$flash$display$LoaderInfo.stage.framerate
  }
  function getHeight$$module$as3shim$flash$display$LoaderInfo() {
    return bonsai$$module$as3shim$flash$display$LoaderInfo.stage.height
  }
  function getParentAllowsChild$$module$as3shim$flash$display$LoaderInfo() {
    return this[expando$$module$as3shim$flash$display$LoaderInfo].parentAllowsChild
  }
  function getWidth$$module$as3shim$flash$display$LoaderInfo() {
    return bonsai$$module$as3shim$flash$display$LoaderInfo.stage.width
  }
  function getLoaderInfoByDefinition$$module$as3shim$flash$display$LoaderInfo() {
    return null
  }
  tools$$module$as3shim$flash$display$LoaderInfo.setImmutable(LoaderInfo$$module$as3shim$flash$display$LoaderInfo, "getLoaderInfoByDefinition", getLoaderInfoByDefinition$$module$as3shim$flash$display$LoaderInfo);
  Class$$module$as3shim$flash$display$LoaderInfo({constructor:LoaderInfo$$module$as3shim$flash$display$LoaderInfo, superClass:EventDispatcher$$module$as3shim$flash$display$LoaderInfo});
  module$as3shim$flash$display$LoaderInfo.module$exports = LoaderInfo$$module$as3shim$flash$display$LoaderInfo;
  module$as3shim$flash$display$LoaderInfo.module$exports && (module$as3shim$flash$display$LoaderInfo = module$as3shim$flash$display$LoaderInfo.module$exports);
  var module$as3shim$flash$display$Stage = {}, bonsai$$module$as3shim$flash$display$Stage = module$as3shim$bonsai, tools$$module$as3shim$flash$display$Stage = module$as3shim$tools, Class$$module$as3shim$flash$display$Stage = module$as3shim$Class, DisplayObjectContainer$$module$as3shim$flash$display$Stage = module$as3shim$flash$display$DisplayObjectContainer, LoaderInfo$$module$as3shim$flash$display$Stage = module$as3shim$flash$display$LoaderInfo, Event$$module$as3shim$flash$display$Stage = module$as3shim$flash$events$Event, 
  IEventDispatcher$$module$as3shim$flash$display$Stage = module$as3shim$flash$events$IEventDispatcher, createDummyFunction$$module$as3shim$flash$display$Stage = tools$$module$as3shim$flash$display$Stage.createDummyFunction, noop$$module$as3shim$flash$display$Stage = tools$$module$as3shim$flash$display$Stage.noop, setAccessor$$module$as3shim$flash$display$Stage = tools$$module$as3shim$flash$display$Stage.setAccessor, setDescriptor$$module$as3shim$flash$display$Stage = tools$$module$as3shim$flash$display$Stage.setDescriptor, 
  setImmutable$$module$as3shim$flash$display$Stage = tools$$module$as3shim$flash$display$Stage.setImmutable;
  function Stage$$module$as3shim$flash$display$Stage() {
    var a = tools$$module$as3shim$flash$display$Stage.getPrivateObjectOf(this);
    a.raw = bonsai$$module$as3shim$flash$display$Stage.stage;
    DisplayObjectContainer$$module$as3shim$flash$display$Stage.prototype.constructor.call(this);
    bonsai$$module$as3shim$flash$display$Stage.stage.on("mouseout", this, function(a) {
      a.target === bonsai$$module$as3shim$flash$display$Stage.stage && this.dispatchEvent(new Event$$module$as3shim$flash$display$Stage(Event$$module$as3shim$flash$display$Stage.MOUSE_LEAVE))
    });
    setAccessor$$module$as3shim$flash$display$Stage(this, "frameRate", {configurable:!1, get:getFrameRate$$module$as3shim$flash$display$Stage, set:setFrameRate$$module$as3shim$flash$display$Stage});
    a.loaderInfo = new LoaderInfo$$module$as3shim$flash$display$Stage;
    setImmutable$$module$as3shim$flash$display$Stage(this, "parent", null);
    setImmutable$$module$as3shim$flash$display$Stage(this, {name:"stageHeight", get:getStageHeight$$module$as3shim$flash$display$Stage});
    setImmutable$$module$as3shim$flash$display$Stage(this, {name:"stageWidth", get:getStageWidth$$module$as3shim$flash$display$Stage})
  }
  function getFrameRate$$module$as3shim$flash$display$Stage() {
    return bonsai$$module$as3shim$flash$display$Stage.stage.framerate
  }
  function getStageHeight$$module$as3shim$flash$display$Stage() {
    return bonsai$$module$as3shim$flash$display$Stage.stage.height
  }
  function getStageWidth$$module$as3shim$flash$display$Stage() {
    return bonsai$$module$as3shim$flash$display$Stage.stage.width
  }
  function setFrameRate$$module$as3shim$flash$display$Stage(a) {
    bonsai$$module$as3shim$flash$display$Stage.stage.setFramerate(a)
  }
  function invalidate$$module$as3shim$flash$display$Stage() {
  }
  Class$$module$as3shim$flash$display$Stage({constructor:Stage$$module$as3shim$flash$display$Stage, superClass:DisplayObjectContainer$$module$as3shim$flash$display$Stage, interfaces:[IEventDispatcher$$module$as3shim$flash$display$Stage], invalidate:invalidate$$module$as3shim$flash$display$Stage});
  var proto$$module$as3shim$flash$display$Stage = Stage$$module$as3shim$flash$display$Stage.prototype;
  proto$$module$as3shim$flash$display$Stage.isFocusInaccessible = createDummyFunction$$module$as3shim$flash$display$Stage({name:"isFocusInaccessible", returnType:"Boolean"});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "accessibilityImplementation", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "align", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"align", returnType:"String"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "allowsFullScreen", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"allowsFullScreen", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "blendMode", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "cacheAsBitmap", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "color", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"color", returnType:"uint"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "colorCorrection", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"colorCorrection", returnType:"String"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "colorCorrectionSupport", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"colorCorrectionSupport", returnType:"String"})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "contextMenu", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "displayState", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"displayState", returnType:"String"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "focus", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"focus", returnType:""}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "fullScreenHeight", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"fullScreenHeight", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "focusRect", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "fullScreenSourceRect", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"fullScreenSourceRect", returnType:""}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "fullScreenWidth", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"fullScreenWidth", returnType:"uint"})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "height", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"height", returnType:"Number"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "mask", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "mouseChildren", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"mouseChildren", returnType:"Boolean"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "mouseEnabled", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "numChildren", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"numChildren", returnType:"int"})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "opaqueBackground", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "quality", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"quality", returnType:"String"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "rotationX", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "rotationY", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "rotationZ", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "scale9Grid", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "scaleMode", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"scaleMode", returnType:"String"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "scaleZ", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "scrollRect", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "showDefaultContextMenu", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"showDefaultContextMenu", returnType:"Boolean"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "softKeyboardRect", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"softKeyboardRect", returnType:""})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "stageFocusRect", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"stageFocusRect", returnType:"Boolean"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "stageVideos", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"stageVideos", returnType:""})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "tabEnabled", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "tabIndex", {set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "tabChildren", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"tabChildren", returnType:"Boolean"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "textSnapshot", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"textSnapshot", returnType:""})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "width", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"width", returnType:"Number"}), set:noop$$module$as3shim$flash$display$Stage});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "wmodeGPU", {get:createDummyFunction$$module$as3shim$flash$display$Stage({name:"wmodeGPU", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$flash$display$Stage(proto$$module$as3shim$flash$display$Stage, "z", {set:noop$$module$as3shim$flash$display$Stage});
  module$as3shim$flash$display$Stage.module$exports = Stage$$module$as3shim$flash$display$Stage;
  module$as3shim$flash$display$Stage.module$exports && (module$as3shim$flash$display$Stage = module$as3shim$flash$display$Stage.module$exports);
  var module$as3shim$flash$net$LocalConnection = {}, tools$$module$as3shim$flash$net$LocalConnection = module$as3shim$tools, Class$$module$as3shim$flash$net$LocalConnection = module$as3shim$Class, EventDispatcher$$module$as3shim$flash$net$LocalConnection = module$as3shim$flash$events$EventDispatcher, noop$$module$as3shim$flash$net$LocalConnection = tools$$module$as3shim$flash$net$LocalConnection.noop, setImmutable$$module$as3shim$flash$net$LocalConnection = tools$$module$as3shim$flash$net$LocalConnection.setImmutable;
  function LocalConnection$$module$as3shim$flash$net$LocalConnection() {
    this.client = this;
    this.isPerUser = this.domain = "";
    setImmutable$$module$as3shim$flash$net$LocalConnection(this, "isSupported", !1)
  }
  Class$$module$as3shim$flash$net$LocalConnection({constructor:LocalConnection$$module$as3shim$flash$net$LocalConnection, superClass:EventDispatcher$$module$as3shim$flash$net$LocalConnection, allowDomain:noop$$module$as3shim$flash$net$LocalConnection, allowInsecureDomain:noop$$module$as3shim$flash$net$LocalConnection, close:noop$$module$as3shim$flash$net$LocalConnection, connect:noop$$module$as3shim$flash$net$LocalConnection, send:noop$$module$as3shim$flash$net$LocalConnection});
  module$as3shim$flash$net$LocalConnection.module$exports = LocalConnection$$module$as3shim$flash$net$LocalConnection;
  module$as3shim$flash$net$LocalConnection.module$exports && (module$as3shim$flash$net$LocalConnection = module$as3shim$flash$net$LocalConnection.module$exports);
  var module$as3shim$flash$net$SharedObject = {}, tools$$module$as3shim$flash$net$SharedObject = module$as3shim$tools, Class$$module$as3shim$flash$net$SharedObject = module$as3shim$Class, EventDispatcher$$module$as3shim$flash$net$SharedObject = module$as3shim$flash$events$EventDispatcher, ObjectEncoding$$module$as3shim$flash$net$SharedObject = module$as3shim$flash$net$ObjectEncoding, createDummyFunction$$module$as3shim$flash$net$SharedObject = tools$$module$as3shim$flash$net$SharedObject.createDummyFunction, 
  noop$$module$as3shim$flash$net$SharedObject = tools$$module$as3shim$flash$net$SharedObject.noop, setAccessor$$module$as3shim$flash$net$SharedObject = tools$$module$as3shim$flash$net$SharedObject.setAccessor, setDescriptor$$module$as3shim$flash$net$SharedObject = tools$$module$as3shim$flash$net$SharedObject.setDescriptor, setImmutable$$module$as3shim$flash$net$SharedObject = tools$$module$as3shim$flash$net$SharedObject.setImmutable;
  function SharedObject$$module$as3shim$flash$net$SharedObject() {
    this.client = this;
    this.domain = "";
    this.objectEncoding = SharedObject$$module$as3shim$flash$net$SharedObject.defaultObjectEncoding;
    setAccessor$$module$as3shim$flash$net$SharedObject(this, "fps");
    setImmutable$$module$as3shim$flash$net$SharedObject(this, "data", {});
    setImmutable$$module$as3shim$flash$net$SharedObject(this, "size", 0)
  }
  SharedObject$$module$as3shim$flash$net$SharedObject.defaultObjectEncoding = ObjectEncoding$$module$as3shim$flash$net$SharedObject.DEFAULT;
  Class$$module$as3shim$flash$net$SharedObject({constructor:SharedObject$$module$as3shim$flash$net$SharedObject, superClass:EventDispatcher$$module$as3shim$flash$net$SharedObject, clear:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"clear", returnType:"void"}), close:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"close", returnType:"void"}), connect:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"connect", returnType:"void"}), flush:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"flush", 
  returnType:"void"}), getLocal:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"getLocal", returnType:"void"}), getRemote:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"getRemote", returnType:"void"}), send:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"send", returnType:"void"}), setDirty:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"setDirty", returnType:"void"}), setProperty:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"setProperty", 
  returnType:"void"})});
  SharedObject$$module$as3shim$flash$net$SharedObject.deleteAll = createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"deleteAll", returnType:"int"});
  SharedObject$$module$as3shim$flash$net$SharedObject.getDiskUsage = createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"getDiskUsage", returnType:"int"});
  SharedObject$$module$as3shim$flash$net$SharedObject.getLocal = createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"getLocal", returnType:"flash.net.SharedObject"});
  SharedObject$$module$as3shim$flash$net$SharedObject.getRemote = createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"getRemote", returnType:"flash.net.SharedObject"});
  setDescriptor$$module$as3shim$flash$net$SharedObject(SharedObject$$module$as3shim$flash$net$SharedObject.prototype, "defaultObjectEncoding", {get:createDummyFunction$$module$as3shim$flash$net$SharedObject({name:"defaultObjectEncoding", returnType:"uint"}), set:noop$$module$as3shim$flash$net$SharedObject});
  module$as3shim$flash$net$SharedObject.module$exports = SharedObject$$module$as3shim$flash$net$SharedObject;
  module$as3shim$flash$net$SharedObject.module$exports && (module$as3shim$flash$net$SharedObject = module$as3shim$flash$net$SharedObject.module$exports);
  var module$as3shim$flash$net$URLLoader = {}, bonsai$$module$as3shim$flash$net$URLLoader = module$as3shim$bonsai, tools$$module$as3shim$flash$net$URLLoader = module$as3shim$tools, Class$$module$as3shim$flash$net$URLLoader = module$as3shim$Class, Event$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$events$Event, EventDispatcher$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$events$EventDispatcher, HTTPStatusEvent$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$events$HTTPStatusEvent, 
  IOErrorEvent$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$events$IOErrorEvent, ProgressEvent$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$events$ProgressEvent, URLLoaderDataFormat$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$net$URLLoaderDataFormat, URLRequestMethod$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$net$URLRequestMethod, URLVariables$$module$as3shim$flash$net$URLLoader = module$as3shim$flash$net$URLVariables, expando$$module$as3shim$flash$net$URLLoader = 
  tools$$module$as3shim$flash$net$URLLoader.expando;
  function URLLoader$$module$as3shim$flash$net$URLLoader() {
    this.bytesTotal = this.bytesLoaded = 0;
    this.data = void 0;
    this.dataFormat = URLLoaderDataFormat$$module$as3shim$flash$net$URLLoader.TEXT;
    this[expando$$module$as3shim$flash$net$URLLoader] = {xhr:new XMLHttpRequest};
    URLLoader$$module$as3shim$flash$net$URLLoader.__super__.constructor.call(this)
  }
  function close$$module$as3shim$flash$net$URLLoader() {
    this[expando$$module$as3shim$flash$net$URLLoader].xhr.abort()
  }
  function load$$module$as3shim$flash$net$URLLoader(a) {
    var b = this, c = a.method, d = a.url, e = b[expando$$module$as3shim$flash$net$URLLoader].xhr;
    e.open(c, d, !0);
    e.responseType = this.dataFormat;
    tools$$module$as3shim$flash$net$URLLoader.forEach(a.requestHeaders, function(a) {
      e.setRequestHeader(a.name, a.value)
    });
    e.setRequestHeader("Content-Type", a.contentType);
    e.addEventListener("error", function() {
      b.dispatchEvent(new IOErrorEvent$$module$as3shim$flash$net$URLLoader(IOErrorEvent$$module$as3shim$flash$net$URLLoader.IO_ERROR, !1, !1, "Error #2032: Stream Error. URL:" + d))
    }, !1);
    e.addEventListener("progress", function(a) {
      var c = b.bytesLoaded = a.loaded, a = b.bytesTotal || (b.bytesTotal = a.total);
      b.dispatchEvent(new ProgressEvent$$module$as3shim$flash$net$URLLoader(ProgressEvent$$module$as3shim$flash$net$URLLoader.PROGRESS, !1, !1, c, a))
    }, !1);
    e.addEventListener("load", function() {
      if(200 === this.status) {
        var a = this.response, c = new Event$$module$as3shim$flash$net$URLLoader(Event$$module$as3shim$flash$net$URLLoader.COMPLETE);
        b.dataFormat === URLLoaderDataFormat$$module$as3shim$flash$net$URLLoader.VARIABLES && (a = new URLVariables$$module$as3shim$flash$net$URLLoader(a));
        c.data = b.data = a;
        b.dispatchEvent(c)
      }
    }, !1);
    e.send(c === URLRequestMethod$$module$as3shim$flash$net$URLLoader.GET ? null : b.data);
    b.dispatchEvent(new Event$$module$as3shim$flash$net$URLLoader(Event$$module$as3shim$flash$net$URLLoader.OPEN))
  }
  Class$$module$as3shim$flash$net$URLLoader({constructor:URLLoader$$module$as3shim$flash$net$URLLoader, superClass:EventDispatcher$$module$as3shim$flash$net$URLLoader, close:close$$module$as3shim$flash$net$URLLoader, load:load$$module$as3shim$flash$net$URLLoader});
  module$as3shim$flash$net$URLLoader.module$exports = URLLoader$$module$as3shim$flash$net$URLLoader;
  module$as3shim$flash$net$URLLoader.module$exports && (module$as3shim$flash$net$URLLoader = module$as3shim$flash$net$URLLoader.module$exports);
  var module$as3shim$flash$text$StyleSheet = {}, tools$$module$as3shim$flash$text$StyleSheet = module$as3shim$tools, Class$$module$as3shim$flash$text$StyleSheet = module$as3shim$Class, EventDispatcher$$module$as3shim$flash$text$StyleSheet = module$as3shim$flash$events$EventDispatcher;
  function StyleSheet$$module$as3shim$flash$text$StyleSheet() {
    this.styleNames = [];
    this._rules = {}
  }
  function _parseCSSViaDOM$$module$as3shim$flash$text$StyleSheet(a) {
    var b = document.createElement("style"), c = document.styleSheets;
    b.innerHTML = a;
    (document.head || document.getElementsByTagName("head")[0]).appendChild(b);
    tools$$module$as3shim$flash$text$StyleSheet.forEach(c[c.length - 1].cssRules, function(a) {
      var b = {};
      tools$$module$as3shim$flash$text$StyleSheet.forEach(a.style, function(c) {
        var g = c.replace(/-(\w)/g, function(a, b) {
          return b.toUpperCase()
        });
        b[g] = a.style[c] || a.style[g]
      });
      this.setStyle(a.selectorText, b)
    }, this);
    b.parentNode.removeChild(b)
  }
  function clear$$module$as3shim$flash$text$StyleSheet() {
    this.styleNames.splice(0, this.styleNames.length);
    this._rules = {}
  }
  function getStyle$$module$as3shim$flash$text$StyleSheet(a) {
    return this._rules[a]
  }
  function parseCSS$$module$as3shim$flash$text$StyleSheet(a) {
    this._parseCSSViaDOM(a)
  }
  function setStyle$$module$as3shim$flash$text$StyleSheet(a, b) {
    0 > this.styleNames.indexOf(a) && this.styleNames.push(a);
    this._rules[a] = b
  }
  function transform$$module$as3shim$flash$text$StyleSheet() {
    console.error("Unimplemented: transform")
  }
  Class$$module$as3shim$flash$text$StyleSheet({constructor:StyleSheet$$module$as3shim$flash$text$StyleSheet, superClass:EventDispatcher$$module$as3shim$flash$text$StyleSheet, _parseCSSViaDOM:_parseCSSViaDOM$$module$as3shim$flash$text$StyleSheet, clear:clear$$module$as3shim$flash$text$StyleSheet, getStyle:getStyle$$module$as3shim$flash$text$StyleSheet, parseCSS:parseCSS$$module$as3shim$flash$text$StyleSheet, setStyle:setStyle$$module$as3shim$flash$text$StyleSheet, transform:transform$$module$as3shim$flash$text$StyleSheet});
  module$as3shim$flash$text$StyleSheet.module$exports = StyleSheet$$module$as3shim$flash$text$StyleSheet;
  module$as3shim$flash$text$StyleSheet.module$exports && (module$as3shim$flash$text$StyleSheet = module$as3shim$flash$text$StyleSheet.module$exports);
  var module$as3shim$flash$text$TextField = {}, plugins$$module$as3shim$flash$text$TextField = module$as3shim$plugins, bonsai$$module$as3shim$flash$text$TextField = module$as3shim$bonsai, tools$$module$as3shim$flash$text$TextField = module$as3shim$tools, ArgumentError$$module$as3shim$flash$text$TextField = module$as3shim$ArgumentError, Class$$module$as3shim$flash$text$TextField = module$as3shim$Class, Event$$module$as3shim$flash$text$TextField = module$as3shim$flash$events$Event, AntiAliasType$$module$as3shim$flash$text$TextField = 
  module$as3shim$flash$text$AntiAliasType, GridFitType$$module$as3shim$flash$text$TextField = module$as3shim$flash$text$GridFitType, InteractiveObject$$module$as3shim$flash$text$TextField = module$as3shim$flash$display$InteractiveObject, TextFieldAutoSize$$module$as3shim$flash$text$TextField = module$as3shim$flash$text$TextFieldAutoSize, TextFieldType$$module$as3shim$flash$text$TextField = module$as3shim$flash$text$TextFieldType, TextFormat$$module$as3shim$flash$text$TextField = module$as3shim$flash$text$TextFormat, 
  expando$$module$as3shim$flash$text$TextField = tools$$module$as3shim$flash$text$TextField.expando, escapeHtml$$module$as3shim$flash$text$TextField = plugins$$module$as3shim$flash$text$TextField.TextField.escapeHtml, unescapeHtml$$module$as3shim$flash$text$TextField = plugins$$module$as3shim$flash$text$TextField.TextField.unescapeHtml, htmlTextFormatWrapper$$module$as3shim$flash$text$TextField = plugins$$module$as3shim$flash$text$TextField.TextField.htmlTextFormatWrapper;
  function TextField$$module$as3shim$flash$text$TextField() {
    var a = tools$$module$as3shim$flash$text$TextField.getPrivateObjectOf(this);
    a.raw ? a.textField.innerHTML(htmlTextFormatWrapper$$module$as3shim$flash$text$TextField(a.textField.attr("htmlText"), "setHtmlFlag")) : (a.raw = new bonsai$$module$as3shim$flash$text$TextField.Group, a.textField = (new plugins$$module$as3shim$flash$text$TextField.TextField).addTo(a.raw));
    InteractiveObject$$module$as3shim$flash$text$TextField.call(this);
    this.alwaysShowSelection = !1;
    this.antiAliasType = AntiAliasType$$module$as3shim$flash$text$TextField.NORMAL;
    a.textField.on("change", this, function() {
      this.dispatchEvent(new Event$$module$as3shim$flash$text$TextField(Event$$module$as3shim$flash$text$TextField.CHANGE))
    });
    this.caretIndex = this.bottomScrollV = 0;
    this.embedFonts = this.displayAsPassword = this.condenseWhite = !1;
    this.gridFitType = GridFitType$$module$as3shim$flash$text$TextField.PIXEL;
    this.maxScrollV = this.maxScrollH = 0;
    this.mouseWheelEnabled = !0;
    this.numLines = 0;
    var b = null;
    tools$$module$as3shim$flash$text$TextField.setDescriptor(this, "restrict", {get:function() {
      return b
    }, set:function(c) {
      b = c;
      c = this._generateRestrictRegExp(b);
      a.textField._innerTextarea.setAttribute("onkeypress", "return /" + c.source + "/.test(String.fromCharCode(event.charCode));")
    }});
    this.scrollV = this.scrollH = 0;
    this.selectable = !0;
    this.sharpness = this.selectionEndIndex = this.selectionBeginIndex = 0;
    var c = null;
    tools$$module$as3shim$flash$text$TextField.setDescriptor(this, "styleSheet", {get:function() {
      return c
    }, set:function(b) {
      c = b;
      a.textField.attr("styleSheet", c)
    }});
    tools$$module$as3shim$flash$text$TextField.setDescriptor(this, "text", {get:function() {
      return this[expando$$module$as3shim$flash$text$TextField].textField.attr("text")
    }, set:function(a) {
      return this[expando$$module$as3shim$flash$text$TextField].textField.attr("text", a)
    }});
    this.textHeight = 0;
    this.textInteractionMode = null;
    this.thickness = this.textWidth = 0;
    var d = TextFieldType$$module$as3shim$flash$text$TextField.DYNAMIC;
    tools$$module$as3shim$flash$text$TextField.setDescriptor(this, "type", {get:function() {
      return d
    }, set:function(b) {
      d = b;
      a.textField.attr("editable", d === TextFieldType$$module$as3shim$flash$text$TextField.INPUT)
    }});
    this.useRichTextClipboard = !1
  }
  function isFontCompatible$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: isFontCompatible")
  }
  function _generateRestrictRegExp$$module$as3shim$flash$text$TextField(a) {
    var b, c = "", d = "", a = a.match(/(?:^|\^)(?:\\\^|.)+?(?=$|\^)/g);
    tools$$module$as3shim$flash$text$TextField.forEach(a, function(a) {
      "^" === a.charAt(0) && (a = a.slice(1), b = !b);
      b ? d += a : c += a
    });
    return RegExp((d ? "(?![" + d + "])" : "") + (c ? "[" + c + "]" : ""))
  }
  function appendText$$module$as3shim$flash$text$TextField(a) {
    this.text += a
  }
  function getCharBounderies$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getCharBounderies")
  }
  function getCharIndexAtPoint$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getCharIndexAtPoint")
  }
  function getFirstCharInParagraph$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getFirstCharInParagraph")
  }
  function getImageReference$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getImageReference")
  }
  function getLineIndexAtPoint$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getLineIndexAtPoint")
  }
  function getLineIndexOfChar$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getLineIndexOfChar")
  }
  function getLineLength$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getLineLength")
  }
  function getLineMetrics$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getLineMetrics")
  }
  function getLineOffset$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getLineOffset")
  }
  function getLineText$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getLineText")
  }
  function getParagraphLength$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: getParagraphLength")
  }
  function getTextFormat$$module$as3shim$flash$text$TextField() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.text.raw
  }
  function replaceSelectedText$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: replaceSelectedText")
  }
  function replaceText$$module$as3shim$flash$text$TextField(a, b, c) {
    if(!(0 > a || 0 > b)) {
      var d = this[expando$$module$as3shim$flash$text$TextField].textField, e = d.attr("text");
      d.attr("text", e.substring(0, a) + c + e.substring(b))
    }
  }
  function setSelection$$module$as3shim$flash$text$TextField() {
    console.error("Unimplemented: setSelection")
  }
  function setTextFormat$$module$as3shim$flash$text$TextField(a) {
    var b = this[expando$$module$as3shim$flash$text$TextField].textField, c;
    for(c in a) {
      b.text.attr(c, a[c])
    }
  }
  TextField$$module$as3shim$flash$text$TextField.isFontCompatible = tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#isFontCompatible");
  Class$$module$as3shim$flash$text$TextField({constructor:TextField$$module$as3shim$flash$text$TextField, superClass:InteractiveObject$$module$as3shim$flash$text$TextField, _generateRestrictRegExp:_generateRestrictRegExp$$module$as3shim$flash$text$TextField, appendText:appendText$$module$as3shim$flash$text$TextField, getCharBounderies:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getCharBounderies"), getCharIndexAtPoint:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getCharIndexAtPoint"), 
  getFirstCharInParagraph:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getFirstCharInParagraph"), getImageReference:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getImageReference"), getLineIndexAtPoint:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getLineIndexAtPoint"), getLineIndexOfChar:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getLineIndexOfChar"), 
  getLineLength:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getLineLength"), getLineMetrics:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getLineMetrics"), getLineOffset:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getLineOffset"), getLineText:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getLineText"), getParagraphLength:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#getParagraphLength"), 
  getTextFormat:getTextFormat$$module$as3shim$flash$text$TextField, replaceSelectedText:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#replaceSelectedText"), replaceText:replaceText$$module$as3shim$flash$text$TextField, setSelection:tools$$module$as3shim$flash$text$TextField.createDummyFunction("display.TextField#setSelection"), setTextFormat:setTextFormat$$module$as3shim$flash$text$TextField});
  var proto$$module$as3shim$flash$text$TextField = TextField$$module$as3shim$flash$text$TextField.prototype;
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "htmlText", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("htmlText")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("htmlText", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "textColor", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.text.attr("color")
  }, set:function(a) {
    return this[expando$$module$as3shim$flash$text$TextField].textField.text.attr("color", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "maxChars", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("maxChars")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("maxChars", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "wordWrap", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("wordWrap")
  }, set:function(a) {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("wordWrap", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "background", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("background")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("background", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "backgroundColor", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("backgroundColor")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("backgroundColor", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "autoSize", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("autoSize")
  }, set:function(a) {
    var b = this[expando$$module$as3shim$flash$text$TextField];
    switch(a) {
      case TextFieldAutoSize$$module$as3shim$flash$text$TextField.LEFT:
        b.textField.attr("autoSize", "left");
        break;
      case TextFieldAutoSize$$module$as3shim$flash$text$TextField.RIGHT:
        b.textField.attr("autoSize", "right");
        break;
      case TextFieldAutoSize$$module$as3shim$flash$text$TextField.CENTER:
        b.textField.attr("autoSize", "center");
        break;
      case TextFieldAutoSize$$module$as3shim$flash$text$TextField.NONE:
        b.textField.attr("autoSize", "none");
        break;
      default:
        throw new ArgumentError$$module$as3shim$flash$text$TextField("Error #2008: Parameter autoSize must be one of the accepted values.");
    }
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "border", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("border")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("border", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "borderColor", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("borderColor")
  }, set:function(a) {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("borderColor", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "defaultTextFormat", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.text.raw.defaults
  }, set:function(a) {
    var b = this[expando$$module$as3shim$flash$text$TextField].textField, c = b.text.raw.defaults, d;
    for(d in c) {
      "undefined" !== typeof a[d] && null !== a[d] && (c[d] = a[d], b.text.attr(d, a[d]))
    }
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "width", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("width")
  }, set:function(a) {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("width", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "height", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("height")
  }, set:function(a) {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("height", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "html", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("html")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("html", a)
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "length", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("text").length
  }});
  tools$$module$as3shim$flash$text$TextField.setDescriptor(proto$$module$as3shim$flash$text$TextField, "multiline", {get:function() {
    return this[expando$$module$as3shim$flash$text$TextField].textField.attr("multiline")
  }, set:function(a) {
    this[expando$$module$as3shim$flash$text$TextField].textField.attr("multiline", a)
  }});
  module$as3shim$flash$text$TextField.module$exports = TextField$$module$as3shim$flash$text$TextField;
  module$as3shim$flash$text$TextField.module$exports && (module$as3shim$flash$text$TextField = module$as3shim$flash$text$TextField.module$exports);
  var module$as3shim$flash$utils$Timer = {}, Class$$module$as3shim$flash$utils$Timer = module$as3shim$Class, tools$$module$as3shim$flash$utils$Timer = module$as3shim$tools, ArgumentError$$module$as3shim$flash$utils$Timer = module$as3shim$ArgumentError, EventDispatcher$$module$as3shim$flash$utils$Timer = module$as3shim$flash$events$EventDispatcher, TimerEvent$$module$as3shim$flash$utils$Timer = module$as3shim$flash$events$TimerEvent, expando$$module$as3shim$flash$utils$Timer = tools$$module$as3shim$flash$utils$Timer.expando, 
  noop$$module$as3shim$flash$utils$Timer = tools$$module$as3shim$flash$utils$Timer.noop;
  function Timer$$module$as3shim$flash$utils$Timer(a, b) {
    if(0 == arguments.length) {
      throw new ArgumentError$$module$as3shim$flash$utils$Timer("1136: Incorrect number of arguments. Expected 1.");
    }
    if(2 < arguments.length) {
      throw new ArgumentError$$module$as3shim$flash$utils$Timer("1137: Incorrect number of arguments. Expected no more than 2.");
    }
    Timer$$module$as3shim$flash$utils$Timer.__super__.constructor.call(this);
    var c = this[expando$$module$as3shim$flash$utils$Timer], d;
    tools$$module$as3shim$flash$utils$Timer.setDescriptor(this, "delay", {set:function(a) {
      if(0 > a || Infinity == a) {
        throw new RangeError("#2066: The Timer delay specified is out of range.");
      }
      d = a
    }, get:function() {
      return d
    }});
    this.delay = a;
    this.repeatCount = b || 0;
    tools$$module$as3shim$flash$utils$Timer.setImmutable(this, {name:"currentCount", get:function() {
      return c.currentCount
    }});
    tools$$module$as3shim$flash$utils$Timer.setImmutable(this, {name:"running", get:function() {
      return c.running
    }});
    c.currentCount = 0;
    c.running = !1;
    c.hitchedOneIteration = tools$$module$as3shim$flash$utils$Timer.hitch(this, oneIteration$$module$as3shim$flash$utils$Timer);
    c.stopped = !0;
    this.start = function() {
      c.stopped = !1;
      c.running = !0;
      setTimeout(c.hitchedOneIteration, this.delay)
    };
    this.stop = function() {
      c.stopped = !0
    };
    this.reset = function() {
      this.stop();
      c.currentCount = 0
    }
  }
  function oneIteration$$module$as3shim$flash$utils$Timer() {
    this[expando$$module$as3shim$flash$utils$Timer].stopped || (this[expando$$module$as3shim$flash$utils$Timer].currentCount++, this.dispatchEvent(new TimerEvent$$module$as3shim$flash$utils$Timer(TimerEvent$$module$as3shim$flash$utils$Timer.TIMER)), this[expando$$module$as3shim$flash$utils$Timer].currentCount < this.repeatCount ? setTimeout(this[expando$$module$as3shim$flash$utils$Timer].hitchedOneIteration, this.delay) : (this[expando$$module$as3shim$flash$utils$Timer].running = !1, this.dispatchEvent(new TimerEvent$$module$as3shim$flash$utils$Timer(TimerEvent$$module$as3shim$flash$utils$Timer.TIMER_COMPLETE))))
  }
  Class$$module$as3shim$flash$utils$Timer({constructor:Timer$$module$as3shim$flash$utils$Timer, superClass:EventDispatcher$$module$as3shim$flash$utils$Timer, reset:noop$$module$as3shim$flash$utils$Timer, start:noop$$module$as3shim$flash$utils$Timer, stop:noop$$module$as3shim$flash$utils$Timer});
  module$as3shim$flash$utils$Timer.module$exports = Timer$$module$as3shim$flash$utils$Timer;
  module$as3shim$flash$utils$Timer.module$exports && (module$as3shim$flash$utils$Timer = module$as3shim$flash$utils$Timer.module$exports);
  var module$as3shim$Namespace = {}, exposes$$module$as3shim$Namespace = module$as3shim$exports, isXMLName$$module$as3shim$Namespace = module$as3shim$isXMLName, tools$$module$as3shim$Namespace = module$as3shim$tools, Class$$module$as3shim$Namespace = module$as3shim$Class, setImmutable$$module$as3shim$Namespace = tools$$module$as3shim$Namespace.setImmutable, setPseudoPrivate$$module$as3shim$Namespace = tools$$module$as3shim$Namespace.setPseudoPrivate;
  function Namespace$$module$as3shim$Namespace(a, b) {
    var c = arguments.length, d = exposes$$module$as3shim$Namespace.QName;
    c || (a = b = "");
    if(1 === c) {
      if(a instanceof Namespace$$module$as3shim$Namespace) {
        b = a.uri, a = a.prefix
      }else {
        if(d && a instanceof d) {
          b = a.uri, a = ""
        }else {
          if(a === Object(a)) {
            return tools$$module$as3shim$Namespace.mixin(this, a)
          }
        }
      }
    }else {
      d && b instanceof d && (b = b.uri), a = isXMLName$$module$as3shim$Namespace(a) ? "" + a : void 0
    }
    setImmutable$$module$as3shim$Namespace(this, "prefix", a);
    setImmutable$$module$as3shim$Namespace(this, "uri", "" + b)
  }
  function toString$$module$as3shim$Namespace() {
    return this.uri
  }
  Class$$module$as3shim$Namespace({constructor:Namespace$$module$as3shim$Namespace});
  setPseudoPrivate$$module$as3shim$Namespace(Namespace$$module$as3shim$Namespace, "isBuiltIn", !0);
  setPseudoPrivate$$module$as3shim$Namespace(Namespace$$module$as3shim$Namespace.prototype, "isNamespace", !0);
  tools$$module$as3shim$Namespace.setDescriptor(Namespace$$module$as3shim$Namespace.prototype, "toString", {enumerable:!1, value:toString$$module$as3shim$Namespace});
  module$as3shim$Namespace.module$exports = Namespace$$module$as3shim$Namespace;
  module$as3shim$Namespace.module$exports && (module$as3shim$Namespace = module$as3shim$Namespace.module$exports);
  var module$as3shim$flash$display = {}, tools$$module$as3shim$flash$display = module$as3shim$tools, BlendMode$$module$as3shim$flash$display = module$as3shim$flash$display$BlendMode, Class$$module$as3shim$flash$display = module$as3shim$Class, DisplayObject$$module$as3shim$flash$display = module$as3shim$flash$display$DisplayObject, DisplayObjectContainer$$module$as3shim$flash$display = module$as3shim$flash$display$DisplayObjectContainer, FrameLabel$$module$as3shim$flash$display = module$as3shim$flash$display$FrameLabel, 
  Graphics$$module$as3shim$flash$display = module$as3shim$flash$display$Graphics, GradientType$$module$as3shim$flash$display = module$as3shim$flash$display$GradientType, InteractiveObject$$module$as3shim$flash$display = module$as3shim$flash$display$InteractiveObject, Loader$$module$as3shim$flash$display = module$as3shim$flash$display$Loader, LoaderInfo$$module$as3shim$flash$display = module$as3shim$flash$display$LoaderInfo, MovieClip$$module$as3shim$flash$display = module$as3shim$flash$display$MovieClip, 
  Namespace$$module$as3shim$flash$display = module$as3shim$Namespace, Shape$$module$as3shim$flash$display = module$as3shim$flash$display$Shape, SimpleButton$$module$as3shim$flash$display = module$as3shim$flash$display$SimpleButton, Sprite$$module$as3shim$flash$display = module$as3shim$flash$display$Sprite, Stage$$module$as3shim$flash$display = module$as3shim$flash$display$Stage, SWFVersion$$module$as3shim$flash$display = module$as3shim$flash$display$SWFVersion, display$$module$as3shim$flash$display = 
  new Namespace$$module$as3shim$flash$display({BlendMode:BlendMode$$module$as3shim$flash$display, ColorCorrection:new Class$$module$as3shim$flash$display, ColorCorrectionSupport:new Class$$module$as3shim$flash$display, DisplayObject:DisplayObject$$module$as3shim$flash$display, DisplayObjectContainer:DisplayObjectContainer$$module$as3shim$flash$display, FrameLabel:FrameLabel$$module$as3shim$flash$display, GradientType:GradientType$$module$as3shim$flash$display, Graphics:Graphics$$module$as3shim$flash$display, 
  InteractiveObject:InteractiveObject$$module$as3shim$flash$display, InterpolationMethod:new Class$$module$as3shim$flash$display, LineScaleMode:new Class$$module$as3shim$flash$display, Loader:Loader$$module$as3shim$flash$display, LoaderInfo:LoaderInfo$$module$as3shim$flash$display, MovieClip:MovieClip$$module$as3shim$flash$display, Shape:Shape$$module$as3shim$flash$display, SimpleButton:SimpleButton$$module$as3shim$flash$display, Sprite:Sprite$$module$as3shim$flash$display, Stage:Stage$$module$as3shim$flash$display, 
  StageAlign:new Class$$module$as3shim$flash$display, StageDisplayState:new Class$$module$as3shim$flash$display, StageQuality:new Class$$module$as3shim$flash$display, StageScaleMode:new Class$$module$as3shim$flash$display, SWFVersion:SWFVersion$$module$as3shim$flash$display});
  tools$$module$as3shim$flash$display.addConstantsToClass([[display$$module$as3shim$flash$display.ColorCorrection, "default", "on", "off"], [display$$module$as3shim$flash$display.ColorCorrectionSupport, "defaultOff", "defaultOn", "unsupported"], [display$$module$as3shim$flash$display.InterpolationMethod, "linearRGB", "rgb"], [display$$module$as3shim$flash$display.LineScaleMode, "horizontal", "none", "normal", "vertical"], [display$$module$as3shim$flash$display.StageAlign, "bottom", "bottomLeft", 
  "bottomRight", "left", "right", "top", "topLeft", "topRight"], [display$$module$as3shim$flash$display.StageDisplayState, "fullScreen", "fullScreenInteractive", "normal"], [display$$module$as3shim$flash$display.StageQuality, "best", "high", "low", "medium"], [display$$module$as3shim$flash$display.StageScaleMode, "exactFit", "noBorder", "noScale", "showAll"]]);
  module$as3shim$flash$display.module$exports = display$$module$as3shim$flash$display;
  module$as3shim$flash$display.module$exports && (module$as3shim$flash$display = module$as3shim$flash$display.module$exports);
  var module$as3shim$flash$errors = {}, tools$$module$as3shim$flash$errors = module$as3shim$tools, EOFError$$module$as3shim$flash$errors = module$as3shim$flash$errors$EOFError, Namespace$$module$as3shim$flash$errors = module$as3shim$Namespace, errors$$module$as3shim$flash$errors = new Namespace$$module$as3shim$flash$errors({EOFError:EOFError$$module$as3shim$flash$errors});
  module$as3shim$flash$errors.module$exports = errors$$module$as3shim$flash$errors;
  module$as3shim$flash$errors.module$exports && (module$as3shim$flash$errors = module$as3shim$flash$errors.module$exports);
  var module$as3shim$flash$events = {}, tools$$module$as3shim$flash$events = module$as3shim$tools, AccelerometerEvent$$module$as3shim$flash$events = module$as3shim$flash$events$AccelerometerEvent, ActivityEvent$$module$as3shim$flash$events = module$as3shim$flash$events$ActivityEvent, AsyncErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$AsyncErrorEvent, ContextMenuEvent$$module$as3shim$flash$events = module$as3shim$flash$events$ContextMenuEvent, DataEvent$$module$as3shim$flash$events = 
  module$as3shim$flash$events$DataEvent, DRMAuthenticationCompleteEvent$$module$as3shim$flash$events = module$as3shim$flash$events$DRMAuthenticationCompleteEvent, DRMAuthenticationErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$DRMAuthenticationErrorEvent, DRMErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$DRMErrorEvent, DRMStatusEvent$$module$as3shim$flash$events = module$as3shim$flash$events$DRMStatusEvent, ErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$ErrorEvent, 
  Event$$module$as3shim$flash$events = module$as3shim$flash$events$Event, EventDispatcher$$module$as3shim$flash$events = module$as3shim$flash$events$EventDispatcher, EventPhase$$module$as3shim$flash$events = module$as3shim$flash$events$EventPhase, FocusEvent$$module$as3shim$flash$events = module$as3shim$flash$events$FocusEvent, FullScreenEvent$$module$as3shim$flash$events = module$as3shim$flash$events$FullScreenEvent, GestureEvent$$module$as3shim$flash$events = module$as3shim$flash$events$GestureEvent, 
  HTTPStatusEvent$$module$as3shim$flash$events = module$as3shim$flash$events$HTTPStatusEvent, IEventDispatcher$$module$as3shim$flash$events = module$as3shim$flash$events$IEventDispatcher, IMEEvent$$module$as3shim$flash$events = module$as3shim$flash$events$IMEEvent, IOErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$IOErrorEvent, KeyboardEvent$$module$as3shim$flash$events = module$as3shim$flash$events$KeyboardEvent, MouseEvent$$module$as3shim$flash$events = module$as3shim$flash$events$MouseEvent, 
  NetStatusEvent$$module$as3shim$flash$events = module$as3shim$flash$events$NetStatusEvent, PressAndTapGestureEvent$$module$as3shim$flash$events = module$as3shim$flash$events$PressAndTapGestureEvent, ProgressEvent$$module$as3shim$flash$events = module$as3shim$flash$events$ProgressEvent, Namespace$$module$as3shim$flash$events = module$as3shim$Namespace, SampleDataEvent$$module$as3shim$flash$events = module$as3shim$flash$events$SampleDataEvent, SecurityErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$SecurityErrorEvent, 
  ShaderEvent$$module$as3shim$flash$events = module$as3shim$flash$events$ShaderEvent, SoftKeyboardEvent$$module$as3shim$flash$events = module$as3shim$flash$events$SoftKeyboardEvent, StageVideoAvailabilityEvent$$module$as3shim$flash$events = module$as3shim$flash$events$StageVideoAvailabilityEvent, StageVideoEvent$$module$as3shim$flash$events = module$as3shim$flash$events$StageVideoEvent, StatusEvent$$module$as3shim$flash$events = module$as3shim$flash$events$StatusEvent, SyncEvent$$module$as3shim$flash$events = 
  module$as3shim$flash$events$SyncEvent, TextEvent$$module$as3shim$flash$events = module$as3shim$flash$events$TextEvent, TimerEvent$$module$as3shim$flash$events = module$as3shim$flash$events$TimerEvent, TouchEvent$$module$as3shim$flash$events = module$as3shim$flash$events$TouchEvent, TransformGestureEvent$$module$as3shim$flash$events = module$as3shim$flash$events$TransformGestureEvent, UncaughtErrorEvent$$module$as3shim$flash$events = module$as3shim$flash$events$UncaughtErrorEvent, UncaughtErrorEvents$$module$as3shim$flash$events = 
  module$as3shim$flash$events$UncaughtErrorEvents, VideoEvent$$module$as3shim$flash$events = module$as3shim$flash$events$VideoEvent, eventConstMap$$module$as3shim$flash$events = {GesturePhase:"all begin end update", SoftKeyboardTrigger:"contentTriggered userTriggered"}, events$$module$as3shim$flash$events = new Namespace$$module$as3shim$flash$events({AccelerometerEvent:AccelerometerEvent$$module$as3shim$flash$events, ActivityEvent:ActivityEvent$$module$as3shim$flash$events, AsyncErrorEvent:AsyncErrorEvent$$module$as3shim$flash$events, 
  ContextMenuEvent:ContextMenuEvent$$module$as3shim$flash$events, DataEvent:DataEvent$$module$as3shim$flash$events, DRMAuthenticationCompleteEvent:DRMAuthenticationCompleteEvent$$module$as3shim$flash$events, DRMAuthenticationErrorEvent:DRMAuthenticationErrorEvent$$module$as3shim$flash$events, DRMErrorEvent:DRMErrorEvent$$module$as3shim$flash$events, DRMStatusEvent:DRMStatusEvent$$module$as3shim$flash$events, ErrorEvent:ErrorEvent$$module$as3shim$flash$events, EventDispatcher:EventDispatcher$$module$as3shim$flash$events, 
  EventPhase:EventPhase$$module$as3shim$flash$events, Event:Event$$module$as3shim$flash$events, FocusEvent:FocusEvent$$module$as3shim$flash$events, FullScreenEvent:FullScreenEvent$$module$as3shim$flash$events, GestureEvent:GestureEvent$$module$as3shim$flash$events, HTTPStatusEvent:HTTPStatusEvent$$module$as3shim$flash$events, IEventDispatcher:IEventDispatcher$$module$as3shim$flash$events, IMEEvent:IMEEvent$$module$as3shim$flash$events, IOErrorEvent:IOErrorEvent$$module$as3shim$flash$events, KeyboardEvent:KeyboardEvent$$module$as3shim$flash$events, 
  MouseEvent:MouseEvent$$module$as3shim$flash$events, NetStatusEvent:NetStatusEvent$$module$as3shim$flash$events, PressAndTapGestureEvent:PressAndTapGestureEvent$$module$as3shim$flash$events, ProgressEvent:ProgressEvent$$module$as3shim$flash$events, SampleDataEvent:SampleDataEvent$$module$as3shim$flash$events, SecurityErrorEvent:SecurityErrorEvent$$module$as3shim$flash$events, ShaderEvent:ShaderEvent$$module$as3shim$flash$events, SoftKeyboardEvent:SoftKeyboardEvent$$module$as3shim$flash$events, StageVideoAvailabilityEvent:StageVideoAvailabilityEvent$$module$as3shim$flash$events, 
  StageVideoEvent:StageVideoEvent$$module$as3shim$flash$events, StatusEvent:StatusEvent$$module$as3shim$flash$events, SyncEvent:SyncEvent$$module$as3shim$flash$events, TextEvent:TextEvent$$module$as3shim$flash$events, TimerEvent:TimerEvent$$module$as3shim$flash$events, TouchEvent:TouchEvent$$module$as3shim$flash$events, TransformGestureEvent:TransformGestureEvent$$module$as3shim$flash$events, UncaughtErrorEvent:UncaughtErrorEvent$$module$as3shim$flash$events, UncaughtErrorEvents:UncaughtErrorEvents$$module$as3shim$flash$events, 
  VideoEvent:VideoEvent$$module$as3shim$flash$events});
  tools$$module$as3shim$flash$events.forOwn(eventConstMap$$module$as3shim$flash$events, function(a, b) {
    tools$$module$as3shim$flash$events.forEach(a.split(" "), function(a) {
      var a = "@" == a ? tools$$module$as3shim$flash$events.toCamelCase(b.replace(/Event$/, "")) : a, d = tools$$module$as3shim$flash$events.toConstCase(a);
      (events$$module$as3shim$flash$events[b] || (events$$module$as3shim$flash$events[b] = tools$$module$as3shim$flash$events.createDummyFunction("flash.events." + b)))[d] = a
    })
  });
  module$as3shim$flash$events.module$exports = events$$module$as3shim$flash$events;
  module$as3shim$flash$events.module$exports && (module$as3shim$flash$events = module$as3shim$flash$events.module$exports);
  var module$as3shim$flash$external = {}, Namespace$$module$as3shim$flash$external = module$as3shim$Namespace, ExternalInterface$$module$as3shim$flash$external = module$as3shim$flash$external$ExternalInterface, external$$module$as3shim$flash$external = new Namespace$$module$as3shim$flash$external({ExternalInterface:ExternalInterface$$module$as3shim$flash$external});
  module$as3shim$flash$external.module$exports = external$$module$as3shim$flash$external;
  module$as3shim$flash$external.module$exports && (module$as3shim$flash$external = module$as3shim$flash$external.module$exports);
  var module$as3shim$flash$filters = {}, BitmapFilter$$module$as3shim$flash$filters = module$as3shim$flash$filters$BitmapFilter, BlurFilter$$module$as3shim$flash$filters = module$as3shim$flash$filters$BlurFilter, Namespace$$module$as3shim$flash$filters = module$as3shim$Namespace, filters$$module$as3shim$flash$filters = new Namespace$$module$as3shim$flash$filters({BitmapFilter:BitmapFilter$$module$as3shim$flash$filters, BlurFilter:BlurFilter$$module$as3shim$flash$filters});
  module$as3shim$flash$filters.module$exports = filters$$module$as3shim$flash$filters;
  module$as3shim$flash$filters.module$exports && (module$as3shim$flash$filters = module$as3shim$flash$filters.module$exports);
  var module$as3shim$flash$geom = {}, tools$$module$as3shim$flash$geom = module$as3shim$tools, Class$$module$as3shim$flash$geom = module$as3shim$Class, Namespace$$module$as3shim$flash$geom = module$as3shim$Namespace, ColorTransform$$module$as3shim$flash$geom = module$as3shim$flash$geom$ColorTransform, Point$$module$as3shim$flash$geom = module$as3shim$flash$geom$Point, Rectangle$$module$as3shim$flash$geom = module$as3shim$flash$geom$Rectangle, Transform$$module$as3shim$flash$geom = module$as3shim$flash$geom$Transform, 
  geom$$module$as3shim$flash$geom = new Namespace$$module$as3shim$flash$geom({ColorTransform:ColorTransform$$module$as3shim$flash$geom, Point:Point$$module$as3shim$flash$geom, Rectangle:Rectangle$$module$as3shim$flash$geom, Transform:Transform$$module$as3shim$flash$geom});
  module$as3shim$flash$geom.module$exports = geom$$module$as3shim$flash$geom;
  module$as3shim$flash$geom.module$exports && (module$as3shim$flash$geom = module$as3shim$flash$geom.module$exports);
  var module$as3shim$flash$net = {}, global$$module$as3shim$flash$net = module$as3shim$global, tools$$module$as3shim$flash$net = module$as3shim$tools, FileFilter$$module$as3shim$flash$net = module$as3shim$flash$net$FileFilter, FileReference$$module$as3shim$flash$net = module$as3shim$flash$net$FileReference, FileReferenceList$$module$as3shim$flash$net = module$as3shim$flash$net$FileReferenceList, GroupSpecifier$$module$as3shim$flash$net = module$as3shim$flash$net$GroupSpecifier, IDynamicPropertyOutput$$module$as3shim$flash$net = 
  module$as3shim$flash$net$IDynamicPropertyOutput, IDynamicPropertyWriter$$module$as3shim$flash$net = module$as3shim$flash$net$IDynamicPropertyWriter, LocalConnection$$module$as3shim$flash$net = module$as3shim$flash$net$LocalConnection, Namespace$$module$as3shim$flash$net = module$as3shim$Namespace, ObjectEncoding$$module$as3shim$flash$net = module$as3shim$flash$net$ObjectEncoding, NetConnection$$module$as3shim$flash$net = module$as3shim$flash$net$NetConnection, NetGroup$$module$as3shim$flash$net = 
  module$as3shim$flash$net$NetGroup, NetGroupInfo$$module$as3shim$flash$net = module$as3shim$flash$net$NetGroupInfo, NetGroupReceiveMode$$module$as3shim$flash$net = module$as3shim$flash$net$NetGroupReceiveMode, NetGroupReplicationStrategy$$module$as3shim$flash$net = module$as3shim$flash$net$NetGroupReplicationStrategy, NetGroupSendMode$$module$as3shim$flash$net = module$as3shim$flash$net$NetGroupSendMode, NetGroupSendResult$$module$as3shim$flash$net = module$as3shim$flash$net$NetGroupSendResult, 
  NetMonitor$$module$as3shim$flash$net = module$as3shim$flash$net$NetMonitor, NetStream$$module$as3shim$flash$net = module$as3shim$flash$net$NetStream, NetStreamAppendBytesAction$$module$as3shim$flash$net = module$as3shim$flash$net$NetStreamAppendBytesAction, NetStreamInfo$$module$as3shim$flash$net = module$as3shim$flash$net$NetStreamInfo, NetStreamMulticastInfo$$module$as3shim$flash$net = module$as3shim$flash$net$NetStreamMulticastInfo, NetStreamPlayTransitions$$module$as3shim$flash$net = module$as3shim$flash$net$NetStreamPlayTransitions, 
  SharedObject$$module$as3shim$flash$net = module$as3shim$flash$net$SharedObject, SharedObjectFlushStatus$$module$as3shim$flash$net = module$as3shim$flash$net$SharedObjectFlushStatus, Socket$$module$as3shim$flash$net = module$as3shim$flash$net$Socket, URLLoader$$module$as3shim$flash$net = module$as3shim$flash$net$URLLoader, URLLoaderDataFormat$$module$as3shim$flash$net = module$as3shim$flash$net$URLLoaderDataFormat, URLRequest$$module$as3shim$flash$net = module$as3shim$flash$net$URLRequest, URLRequestHeader$$module$as3shim$flash$net = 
  module$as3shim$flash$net$URLRequestHeader, URLRequestMethod$$module$as3shim$flash$net = module$as3shim$flash$net$URLRequestMethod, URLStream$$module$as3shim$flash$net = module$as3shim$flash$net$URLStream, URLVariables$$module$as3shim$flash$net = module$as3shim$flash$net$URLVariables, XMLSocket$$module$as3shim$flash$net = module$as3shim$flash$net$XMLSocket, dummyClasses$$module$as3shim$flash$net = ["NetStreamPlayOptions", "Responder", "SecureSocket"];
  function navigateToURL$$module$as3shim$flash$net(a, b) {
    var c = a.data, d = global$$module$as3shim$flash$net.parent, c = a.url + (c ? "?" + c : "");
    if(null == b || "_blank" == b) {
      d.open(c)
    }else {
      if(d = "_self" == b || "_top" == b ? d[b.slice(1)] : d.frames[b]) {
        d.location.href = c
      }
    }
  }
  function sendToURL$$module$as3shim$flash$net(a) {
    var b = a.method, c = new XMLHttpRequest;
    c.open(b, a.url, !0);
    c.send(b === URLRequestMethod$$module$as3shim$flash$net.GET ? null : a.data)
  }
  var net$$module$as3shim$flash$net = new Namespace$$module$as3shim$flash$net({FileFilter:FileFilter$$module$as3shim$flash$net, FileReference:FileReference$$module$as3shim$flash$net, FileReferenceList:FileReferenceList$$module$as3shim$flash$net, GroupSpecifier:GroupSpecifier$$module$as3shim$flash$net, LocalConnection:LocalConnection$$module$as3shim$flash$net, IDynamicPropertyOutput:IDynamicPropertyOutput$$module$as3shim$flash$net, IDynamicPropertyWriter:IDynamicPropertyWriter$$module$as3shim$flash$net, 
  ObjectEncoding:ObjectEncoding$$module$as3shim$flash$net, NetConnection:NetConnection$$module$as3shim$flash$net, NetGroup:NetGroup$$module$as3shim$flash$net, NetGroupInfo:NetGroupInfo$$module$as3shim$flash$net, NetGroupReceiveMode:NetGroupReceiveMode$$module$as3shim$flash$net, NetGroupReplicationStrategy:NetGroupReplicationStrategy$$module$as3shim$flash$net, NetGroupSendMode:NetGroupSendMode$$module$as3shim$flash$net, NetGroupSendResult:NetGroupSendResult$$module$as3shim$flash$net, NetMonitor:NetMonitor$$module$as3shim$flash$net, 
  NetStream:NetStream$$module$as3shim$flash$net, NetStreamAppendBytesAction:NetStreamAppendBytesAction$$module$as3shim$flash$net, NetStreamInfo:NetStreamInfo$$module$as3shim$flash$net, NetStreamMulticastInfo:NetStreamMulticastInfo$$module$as3shim$flash$net, NetStreamPlayTransitions:NetStreamPlayTransitions$$module$as3shim$flash$net, SharedObject:SharedObject$$module$as3shim$flash$net, SharedObjectFlushStatus:SharedObjectFlushStatus$$module$as3shim$flash$net, Socket:Socket$$module$as3shim$flash$net, 
  URLLoader:URLLoader$$module$as3shim$flash$net, URLLoaderDataFormat:URLLoaderDataFormat$$module$as3shim$flash$net, URLRequest:URLRequest$$module$as3shim$flash$net, URLRequestHeader:URLRequestHeader$$module$as3shim$flash$net, URLRequestMethod:URLRequestMethod$$module$as3shim$flash$net, URLStream:URLStream$$module$as3shim$flash$net, URLVariables:URLVariables$$module$as3shim$flash$net, XMLSocket:XMLSocket$$module$as3shim$flash$net, navigateToURL:navigateToURL$$module$as3shim$flash$net, sendToURL:sendToURL$$module$as3shim$flash$net});
  tools$$module$as3shim$flash$net.forEach(dummyClasses$$module$as3shim$flash$net, function(a) {
    net$$module$as3shim$flash$net[a] || (net$$module$as3shim$flash$net[a] = tools$$module$as3shim$flash$net.createDummyFunction("flash.net." + a))
  });
  module$as3shim$flash$net.module$exports = net$$module$as3shim$flash$net;
  module$as3shim$flash$net.module$exports && (module$as3shim$flash$net = module$as3shim$flash$net.module$exports);
  var module$as3shim$flash$system = {}, Namespace$$module$as3shim$flash$system = module$as3shim$Namespace, System$$module$as3shim$flash$system = module$as3shim$flash$system$System, Capabilities$$module$as3shim$flash$system = module$as3shim$flash$system$Capabilities, system$$module$as3shim$flash$system = new Namespace$$module$as3shim$flash$system({System:System$$module$as3shim$flash$system, Capabilities:Capabilities$$module$as3shim$flash$system});
  module$as3shim$flash$system.module$exports = system$$module$as3shim$flash$system;
  module$as3shim$flash$system.module$exports && (module$as3shim$flash$system = module$as3shim$flash$system.module$exports);
  var module$as3shim$flash$text = {}, AntiAliasType$$module$as3shim$flash$text = module$as3shim$flash$text$AntiAliasType, CSMSettings$$module$as3shim$flash$text = module$as3shim$flash$text$CSMSettings, Font$$module$as3shim$flash$text = module$as3shim$flash$text$Font, FontStyle$$module$as3shim$flash$text = module$as3shim$flash$text$FontStyle, FontType$$module$as3shim$flash$text = module$as3shim$flash$text$FontType, GridFitType$$module$as3shim$flash$text = module$as3shim$flash$text$GridFitType, Namespace$$module$as3shim$flash$text = 
  module$as3shim$Namespace, TextColorType$$module$as3shim$flash$text = module$as3shim$flash$text$TextColorType, TextDisplayMode$$module$as3shim$flash$text = module$as3shim$flash$text$TextDisplayMode, TextExtent$$module$as3shim$flash$text = module$as3shim$flash$text$TextExtent, TextField$$module$as3shim$flash$text = module$as3shim$flash$text$TextField, TextFieldAutoSize$$module$as3shim$flash$text = module$as3shim$flash$text$TextFieldAutoSize, TextFieldType$$module$as3shim$flash$text = module$as3shim$flash$text$TextFieldType, 
  TextFormat$$module$as3shim$flash$text = module$as3shim$flash$text$TextFormat, TextFormatAlign$$module$as3shim$flash$text = module$as3shim$flash$text$TextFormatAlign, TextLineMetrics$$module$as3shim$flash$text = module$as3shim$flash$text$TextLineMetrics, StaticText$$module$as3shim$flash$text = module$as3shim$flash$text$StaticText, StyleSheet$$module$as3shim$flash$text = module$as3shim$flash$text$StyleSheet, text$$module$as3shim$flash$text = new Namespace$$module$as3shim$flash$text({AntiAliasType:AntiAliasType$$module$as3shim$flash$text, 
  CSMSettings:CSMSettings$$module$as3shim$flash$text, Font:Font$$module$as3shim$flash$text, FontStyle:FontStyle$$module$as3shim$flash$text, FontType:FontType$$module$as3shim$flash$text, GridFitType:GridFitType$$module$as3shim$flash$text, TextColorType:TextColorType$$module$as3shim$flash$text, TextDisplayMode:TextDisplayMode$$module$as3shim$flash$text, TextExtent:TextExtent$$module$as3shim$flash$text, TextField:TextField$$module$as3shim$flash$text, TextFieldAutoSize:TextFieldAutoSize$$module$as3shim$flash$text, 
  TextFieldType:TextFieldType$$module$as3shim$flash$text, TextFormat:TextFormat$$module$as3shim$flash$text, TextFormatAlign:TextFormatAlign$$module$as3shim$flash$text, TextLineMetrics:TextLineMetrics$$module$as3shim$flash$text, StaticText:StaticText$$module$as3shim$flash$text, StyleSheet:StyleSheet$$module$as3shim$flash$text});
  module$as3shim$flash$text.module$exports = text$$module$as3shim$flash$text;
  module$as3shim$flash$text.module$exports && (module$as3shim$flash$text = module$as3shim$flash$text.module$exports);
  var module$as3shim$flash$ui = {}, tools$$module$as3shim$flash$ui = module$as3shim$tools, Class$$module$as3shim$flash$ui = module$as3shim$Class, Namespace$$module$as3shim$flash$ui = module$as3shim$Namespace, Keyboard$$module$as3shim$flash$ui = module$as3shim$flash$ui$Keyboard, Mouse$$module$as3shim$flash$ui = module$as3shim$flash$ui$Mouse, ui$$module$as3shim$flash$ui = new Namespace$$module$as3shim$flash$ui({Keyboard:Keyboard$$module$as3shim$flash$ui, Mouse:Mouse$$module$as3shim$flash$ui});
  module$as3shim$flash$ui.module$exports = ui$$module$as3shim$flash$ui;
  module$as3shim$flash$ui.module$exports && (module$as3shim$flash$ui = module$as3shim$flash$ui.module$exports);
  var module$as3shim$flash$utils = {}, tools$$module$as3shim$flash$utils = module$as3shim$tools, Class$$module$as3shim$flash$utils = module$as3shim$Class, Namespace$$module$as3shim$flash$utils = module$as3shim$Namespace, ByteArray$$module$as3shim$flash$utils = module$as3shim$flash$utils$ByteArray, Dictionary$$module$as3shim$flash$utils = module$as3shim$flash$utils$Dictionary, Timer$$module$as3shim$flash$utils = module$as3shim$flash$utils$Timer, XMLDocument$$module$as3shim$flash$utils = module$as3shim$flash$xml$XMLDocument, 
  toString$$module$as3shim$flash$utils = {}.toString;
  function _toXMLString$$module$as3shim$flash$utils(a, b, c) {
    var d = "<" + a, e;
    for(e in b) {
      d += " " + e + '="' + b[e].replace(/"/, "&quot;") + '"'
    }
    return c ? d + ">" + c + "</" + a + ">" : d + "/>"
  }
  function describeType$$module$as3shim$flash$utils() {
    console.error("Unimplemented: describeType")
  }
  function getQualifiedClassName$$module$as3shim$flash$utils(a) {
    return a.__qualifiedName__ || a.__proto__.constructor.__qualifiedName__ || a.__proto__.constructor.name.toString()
  }
  var utils$$module$as3shim$flash$utils = new Namespace$$module$as3shim$flash$utils({ByteArray:ByteArray$$module$as3shim$flash$utils, Endian:new Class$$module$as3shim$flash$utils, Dictionary:Dictionary$$module$as3shim$flash$utils, Timer:Timer$$module$as3shim$flash$utils, getTimer:function() {
    return new Date - tools$$module$as3shim$flash$utils.timestampAs3Started
  }, getQualifiedClassName:getQualifiedClassName$$module$as3shim$flash$utils, clearInterval:function() {
    window.clearInterval.apply(window, arguments)
  }, clearTimeout:function() {
    window.clearTimeout.apply(window, arguments)
  }, setInterval:function() {
    window.setInterval.apply(window, arguments)
  }, setTimeout:function() {
    window.setTimeout.apply(window, arguments)
  }});
  tools$$module$as3shim$flash$utils.addConstantsToClass([[utils$$module$as3shim$flash$utils.Endian, "bigEndian", "littleEndian"]]);
  module$as3shim$flash$utils.module$exports = utils$$module$as3shim$flash$utils;
  module$as3shim$flash$utils.module$exports && (module$as3shim$flash$utils = module$as3shim$flash$utils.module$exports);
  var module$as3shim$avmplus = {}, tools$$module$as3shim$avmplus = module$as3shim$tools, utils$$module$as3shim$avmplus = module$as3shim$flash$utils, avmplus$$module$as3shim$avmplus = {getQualifiedClassName:utils$$module$as3shim$avmplus.getQualifiedClassName};
  tools$$module$as3shim$avmplus.setPseudoPrivate(avmplus$$module$as3shim$avmplus, "isBuiltIn", !0);
  module$as3shim$avmplus.module$exports = avmplus$$module$as3shim$avmplus;
  module$as3shim$avmplus.module$exports && (module$as3shim$avmplus = module$as3shim$avmplus.module$exports);
  var module$as3shim$flash$xml = {}, Namespace$$module$as3shim$flash$xml = module$as3shim$Namespace, XMLDocument$$module$as3shim$flash$xml = module$as3shim$flash$xml$XMLDocument, XMLNode$$module$as3shim$flash$xml = module$as3shim$flash$xml$XMLNode, XMLNodeType$$module$as3shim$flash$xml = module$as3shim$flash$xml$XMLNodeType, xml$$module$as3shim$flash$xml = new Namespace$$module$as3shim$flash$xml({XMLDocument:XMLDocument$$module$as3shim$flash$xml, XMLNode:XMLNode$$module$as3shim$flash$xml, XMLNodeType:XMLNodeType$$module$as3shim$flash$xml});
  module$as3shim$flash$xml.module$exports = xml$$module$as3shim$flash$xml;
  module$as3shim$flash$xml.module$exports && (module$as3shim$flash$xml = module$as3shim$flash$xml.module$exports);
  var module$as3shim$flash = {}, display$$module$as3shim$flash = module$as3shim$flash$display, errors$$module$as3shim$flash = module$as3shim$flash$errors, events$$module$as3shim$flash = module$as3shim$flash$events, external$$module$as3shim$flash = module$as3shim$flash$external, filters$$module$as3shim$flash = module$as3shim$flash$filters, geom$$module$as3shim$flash = module$as3shim$flash$geom, system$$module$as3shim$flash = module$as3shim$flash$system, net$$module$as3shim$flash = module$as3shim$flash$net, 
  text$$module$as3shim$flash = module$as3shim$flash$text, ui$$module$as3shim$flash = module$as3shim$flash$ui, utils$$module$as3shim$flash = module$as3shim$flash$utils, xml$$module$as3shim$flash = module$as3shim$flash$xml, Namespace$$module$as3shim$flash = module$as3shim$Namespace, flash$$module$as3shim$flash = new Namespace$$module$as3shim$flash({display:display$$module$as3shim$flash, errors:errors$$module$as3shim$flash, events:events$$module$as3shim$flash, external:external$$module$as3shim$flash, 
  filters:filters$$module$as3shim$flash, geom:geom$$module$as3shim$flash, net:net$$module$as3shim$flash, system:system$$module$as3shim$flash, text:text$$module$as3shim$flash, ui:ui$$module$as3shim$flash, utils:utils$$module$as3shim$flash, xml:xml$$module$as3shim$flash});
  module$as3shim$flash.module$exports = flash$$module$as3shim$flash;
  module$as3shim$flash.module$exports && (module$as3shim$flash = module$as3shim$flash.module$exports);
  var module$as3shim$QName = {}, tools$$module$as3shim$QName = module$as3shim$tools, Class$$module$as3shim$QName = module$as3shim$Class, Namespace$$module$as3shim$QName = module$as3shim$Namespace, setImmutable$$module$as3shim$QName = tools$$module$as3shim$QName.setImmutable;
  function QName$$module$as3shim$QName(a, b) {
    if(1 === arguments.length && a instanceof QName$$module$as3shim$QName) {
      b = a.localName, a = a.uri
    }else {
      if(a instanceof Namespace$$module$as3shim$QName && (a = a.uri), b instanceof QName$$module$as3shim$QName) {
        b = b.localName
      }
    }
    void 0 === b && (b = "");
    void 0 === a && (a = "");
    setImmutable$$module$as3shim$QName(this, "localName", "" + b);
    setImmutable$$module$as3shim$QName(this, "uri", null === a ? null : "" + a)
  }
  function toString$$module$as3shim$QName() {
    var a = this.localName, b = this.uri;
    return"" === b ? a : null == b ? "*::" + a : b + "::" + a
  }
  Class$$module$as3shim$QName({constructor:QName$$module$as3shim$QName});
  tools$$module$as3shim$QName.setPseudoPrivate(QName$$module$as3shim$QName, "isBuiltIn", !0);
  tools$$module$as3shim$QName.setDescriptor(QName$$module$as3shim$QName.prototype, "toString", {enumerable:!1, value:toString$$module$as3shim$QName});
  module$as3shim$QName.module$exports = QName$$module$as3shim$QName;
  module$as3shim$QName.module$exports && (module$as3shim$QName = module$as3shim$QName.module$exports);
  var module$as3shim$RangeError = {}, global$$module$as3shim$RangeError = module$as3shim$global, tools$$module$as3shim$RangeError = module$as3shim$tools, Class$$module$as3shim$RangeError = module$as3shim$Class, Error$$module$as3shim$RangeError = module$as3shim$Error, RangeError$$module$as3shim$RangeError = global$$module$as3shim$RangeError.RangeError;
  Class$$module$as3shim$RangeError({constructor:RangeError$$module$as3shim$RangeError, superClass:Error$$module$as3shim$RangeError});
  tools$$module$as3shim$RangeError.setPseudoPrivate(RangeError$$module$as3shim$RangeError, "isBuiltIn", !0);
  module$as3shim$RangeError.module$exports = RangeError$$module$as3shim$RangeError;
  module$as3shim$RangeError.module$exports && (module$as3shim$RangeError = module$as3shim$RangeError.module$exports);
  var module$as3shim$ReferenceError = {}, global$$module$as3shim$ReferenceError = module$as3shim$global, tools$$module$as3shim$ReferenceError = module$as3shim$tools, Class$$module$as3shim$ReferenceError = module$as3shim$Class, Error$$module$as3shim$ReferenceError = module$as3shim$Error, ReferenceError$$module$as3shim$ReferenceError = global$$module$as3shim$ReferenceError.ReferenceError;
  Class$$module$as3shim$ReferenceError({constructor:ReferenceError$$module$as3shim$ReferenceError, superClass:Error$$module$as3shim$ReferenceError});
  tools$$module$as3shim$ReferenceError.setPseudoPrivate(ReferenceError$$module$as3shim$ReferenceError, "isBuiltIn", !0);
  module$as3shim$ReferenceError.module$exports = ReferenceError$$module$as3shim$ReferenceError;
  module$as3shim$ReferenceError.module$exports && (module$as3shim$ReferenceError = module$as3shim$ReferenceError.module$exports);
  var module$as3shim$RegExp = {}, bonsai$$module$as3shim$RegExp = module$as3shim$bonsai, global$$module$as3shim$RegExp = module$as3shim$global, tools$$module$as3shim$RegExp = module$as3shim$tools, Class$$module$as3shim$RegExp = module$as3shim$Class, RegExp$$module$as3shim$RegExp = global$$module$as3shim$RegExp.RegExp, expando$$module$as3shim$RegExp = tools$$module$as3shim$RegExp.expando, nativeMethods$$module$as3shim$RegExp = ["exec", "test"], regexpProto$$module$as3shim$RegExp = RegExp$$module$as3shim$RegExp.prototype, 
  reToken$$module$as3shim$RegExp = /\{\{token\}\}/g, token$$module$as3shim$RegExp = "{{token}}", toString$$module$as3shim$RegExp = {}.toString, setAccessor$$module$as3shim$RegExp = tools$$module$as3shim$RegExp.setAccessor, setDescriptor$$module$as3shim$RegExp = tools$$module$as3shim$RegExp.setDescriptor, setImmutable$$module$as3shim$RegExp = tools$$module$as3shim$RegExp.setImmutable, setPseudoPrivate$$module$as3shim$RegExp = tools$$module$as3shim$RegExp.setPseudoPrivate;
  function ASRegExp$$module$as3shim$RegExp(a, b) {
    var c = "[object RegExp]" === toString$$module$as3shim$RegExp.call(a) || a instanceof ASRegExp$$module$as3shim$RegExp, d = [];
    if(!(this instanceof ASRegExp$$module$as3shim$RegExp)) {
      return c ? a : new ASRegExp$$module$as3shim$RegExp(a, b)
    }
    if(c) {
      if(void 0 !== b) {
        throw TypeError();
      }
      b = a;
      a = a.source
    }else {
      b = "" + (b || ""), a = void 0 === a ? "" : "" + a, b = {dotall:-1 < b.indexOf("s"), extended:-1 < b.indexOf("x"), global:-1 < b.indexOf("g"), ignoreCase:-1 < b.indexOf("i"), multiline:-1 < b.indexOf("m")}
    }
    setImmutable$$module$as3shim$RegExp(this, "source", a);
    b.dotall && (a = a.replace(/([^\\]|^)(\[\^?\[?(?:\\\]|[^\]])*\])/g, function(a, b, c) {
      d.push(c);
      return b + token$$module$as3shim$RegExp
    }), a = a.replace(/\\\./g, function(a) {
      d.push(a);
      return token$$module$as3shim$RegExp
    }), a = a.replace(/\./g, "(?:.|\\n)"), a = a.replace(reToken$$module$as3shim$RegExp, function() {
      return d.shift()
    }));
    b.extended && (a = a.replace(/\s+/g, ""));
    setImmutable$$module$as3shim$RegExp(this, "dotall", b.dotall);
    setImmutable$$module$as3shim$RegExp(this, "extended", b.extended);
    setImmutable$$module$as3shim$RegExp(this, "global", b.global);
    setImmutable$$module$as3shim$RegExp(this, "ignoreCase", b.ignoreCase);
    setImmutable$$module$as3shim$RegExp(this, "multiline", b.multiline);
    setAccessor$$module$as3shim$RegExp(this, "lastIndex", {get:getLastIndex$$module$as3shim$RegExp, set:setLastIndex$$module$as3shim$RegExp});
    this[expando$$module$as3shim$RegExp] = {raw:RegExp$$module$as3shim$RegExp(a, (b.global ? "g" : "") + (b.ignoreCase ? "i" : "") + (b.multiline ? "m" : ""))}
  }
  function getLastIndex$$module$as3shim$RegExp() {
    return this[expando$$module$as3shim$RegExp].raw.lastIndex
  }
  function setLastIndex$$module$as3shim$RegExp(a) {
    this[expando$$module$as3shim$RegExp].raw.lastIndex = a
  }
  ASRegExp$$module$as3shim$RegExp.prototype = tools$$module$as3shim$RegExp.beget(RegExp$$module$as3shim$RegExp.prototype);
  setPseudoPrivate$$module$as3shim$RegExp(ASRegExp$$module$as3shim$RegExp, "isBuiltIn", !0);
  setPseudoPrivate$$module$as3shim$RegExp(ASRegExp$$module$as3shim$RegExp, "isClass", !0);
  ASRegExp$$module$as3shim$RegExp.__proto__ = Class$$module$as3shim$RegExp.prototype;
  tools$$module$as3shim$RegExp.forEach(nativeMethods$$module$as3shim$RegExp, function(a) {
    setDescriptor$$module$as3shim$RegExp(ASRegExp$$module$as3shim$RegExp.prototype, a, {enumerable:!1, value:function(b) {
      return this[expando$$module$as3shim$RegExp].raw[a](b)
    }})
  });
  setDescriptor$$module$as3shim$RegExp(ASRegExp$$module$as3shim$RegExp, "displayName", {enumerable:!1, value:"RegExp"});
  global$$module$as3shim$RegExp.RegExp = ASRegExp$$module$as3shim$RegExp;
  module$as3shim$RegExp.module$exports = ASRegExp$$module$as3shim$RegExp;
  module$as3shim$RegExp.module$exports && (module$as3shim$RegExp = module$as3shim$RegExp.module$exports);
  var module$as3shim$SecurityError = {}, tools$$module$as3shim$SecurityError = module$as3shim$tools, Class$$module$as3shim$SecurityError = module$as3shim$Class, Error$$module$as3shim$SecurityError = module$as3shim$Error;
  function SecurityError$$module$as3shim$SecurityError(a) {
    if(!(this instanceof SecurityError$$module$as3shim$SecurityError)) {
      return new SecurityError$$module$as3shim$SecurityError(a)
    }
    this.message = a
  }
  Class$$module$as3shim$SecurityError({constructor:SecurityError$$module$as3shim$SecurityError, superClass:Error$$module$as3shim$SecurityError});
  tools$$module$as3shim$SecurityError.setPseudoPrivate(SecurityError$$module$as3shim$SecurityError, "isBuiltIn", !0);
  module$as3shim$SecurityError.module$exports = SecurityError$$module$as3shim$SecurityError;
  module$as3shim$SecurityError.module$exports && (module$as3shim$SecurityError = module$as3shim$SecurityError.module$exports);
  var module$as3shim$String = {}, bonsai$$module$as3shim$String = module$as3shim$bonsai, global$$module$as3shim$String = module$as3shim$global, tools$$module$as3shim$String = module$as3shim$tools, Class$$module$as3shim$String = module$as3shim$Class, ASRegExp$$module$as3shim$String = module$as3shim$RegExp, String$$module$as3shim$String = global$$module$as3shim$String.String, expando$$module$as3shim$String = tools$$module$as3shim$String.expando, strProto$$module$as3shim$String = String$$module$as3shim$String.prototype, 
  setPseudoPrivate$$module$as3shim$String = tools$$module$as3shim$String.setPseudoPrivate, nativeMethods$$module$as3shim$String = {match:strProto$$module$as3shim$String.match, replace:strProto$$module$as3shim$String.replace, search:strProto$$module$as3shim$String.search, split:strProto$$module$as3shim$String.split};
  tools$$module$as3shim$String.forOwn(nativeMethods$$module$as3shim$String, function(a, b) {
    tools$$module$as3shim$String.setDescriptor(strProto$$module$as3shim$String, b, {enumerable:!1, value:function(b) {
      b instanceof ASRegExp$$module$as3shim$String && (arguments[0] = b[expando$$module$as3shim$String].raw);
      return a.apply(this, arguments)
    }})
  });
  setPseudoPrivate$$module$as3shim$String(String$$module$as3shim$String, "isBuiltIn", !0);
  setPseudoPrivate$$module$as3shim$String(String$$module$as3shim$String, "isClass", !0);
  String$$module$as3shim$String.__proto__ = Class$$module$as3shim$String.prototype;
  module$as3shim$String.module$exports = String$$module$as3shim$String;
  module$as3shim$String.module$exports && (module$as3shim$String = module$as3shim$String.module$exports);
  var module$as3shim$SyntaxError = {}, global$$module$as3shim$SyntaxError = module$as3shim$global, tools$$module$as3shim$SyntaxError = module$as3shim$tools, Class$$module$as3shim$SyntaxError = module$as3shim$Class, Error$$module$as3shim$SyntaxError = module$as3shim$Error, SyntaxError$$module$as3shim$SyntaxError = global$$module$as3shim$SyntaxError.SyntaxError;
  Class$$module$as3shim$SyntaxError({constructor:SyntaxError$$module$as3shim$SyntaxError, superClass:Error$$module$as3shim$SyntaxError});
  tools$$module$as3shim$SyntaxError.setPseudoPrivate(SyntaxError$$module$as3shim$SyntaxError, "isBuiltIn", !0);
  module$as3shim$SyntaxError.module$exports = SyntaxError$$module$as3shim$SyntaxError;
  module$as3shim$SyntaxError.module$exports && (module$as3shim$SyntaxError = module$as3shim$SyntaxError.module$exports);
  var module$as3shim$trace = {}, global$$module$as3shim$trace = module$as3shim$global, tools$$module$as3shim$trace = module$as3shim$tools, apply$$module$as3shim$trace = Function.apply, trace$$module$as3shim$trace = function() {
    var a = global$$module$as3shim$trace.console;
    if(!a) {
      return tools$$module$as3shim$trace.noop
    }
    var b = a.log;
    return function() {
      apply$$module$as3shim$trace.call(b, a, arguments)
    }
  }();
  module$as3shim$trace.module$exports = trace$$module$as3shim$trace;
  module$as3shim$trace.module$exports && (module$as3shim$trace = module$as3shim$trace.module$exports);
  var module$as3shim$TypeError = {}, global$$module$as3shim$TypeError = module$as3shim$global, tools$$module$as3shim$TypeError = module$as3shim$tools, Class$$module$as3shim$TypeError = module$as3shim$Class, Error$$module$as3shim$TypeError = module$as3shim$Error, TypeError$$module$as3shim$TypeError = global$$module$as3shim$TypeError.TypeError;
  Class$$module$as3shim$TypeError({constructor:TypeError$$module$as3shim$TypeError, superClass:Error$$module$as3shim$TypeError});
  tools$$module$as3shim$TypeError.setPseudoPrivate(TypeError$$module$as3shim$TypeError, "isBuiltIn", !0);
  module$as3shim$TypeError.module$exports = TypeError$$module$as3shim$TypeError;
  module$as3shim$TypeError.module$exports && (module$as3shim$TypeError = module$as3shim$TypeError.module$exports);
  var module$as3shim$URIError = {}, global$$module$as3shim$URIError = module$as3shim$global, tools$$module$as3shim$URIError = module$as3shim$tools, Class$$module$as3shim$URIError = module$as3shim$Class, Error$$module$as3shim$URIError = module$as3shim$Error, URIError$$module$as3shim$URIError = global$$module$as3shim$URIError.URIError;
  Class$$module$as3shim$URIError({constructor:URIError$$module$as3shim$URIError, superClass:Error$$module$as3shim$URIError});
  tools$$module$as3shim$URIError.setPseudoPrivate(URIError$$module$as3shim$URIError, "isBuiltIn", !0);
  module$as3shim$URIError.module$exports = URIError$$module$as3shim$URIError;
  module$as3shim$URIError.module$exports && (module$as3shim$URIError = module$as3shim$URIError.module$exports);
  var module$as3shim$Vector = {}, global$$module$as3shim$Vector = module$as3shim$global, tools$$module$as3shim$Vector = module$as3shim$tools, Class$$module$as3shim$Vector = module$as3shim$Class, Dictionary$$module$as3shim$Vector = module$as3shim$flash$utils$Dictionary, int_uint$$module$as3shim$Vector = module$as3shim$int_uint, expando$$module$as3shim$Vector = tools$$module$as3shim$Vector.expando, vectorCache$$module$as3shim$Vector = new Dictionary$$module$as3shim$Vector, ArrayProto$$module$as3shim$Vector = 
  Array.prototype, nativePop$$module$as3shim$Vector = ArrayProto$$module$as3shim$Vector.pop, nativePush$$module$as3shim$Vector = ArrayProto$$module$as3shim$Vector.push, nativeShift$$module$as3shim$Vector = ArrayProto$$module$as3shim$Vector.shift, nativeSplice$$module$as3shim$Vector = ArrayProto$$module$as3shim$Vector.splice, nativeUnshift$$module$as3shim$Vector = ArrayProto$$module$as3shim$Vector.unshift, forEach$$module$as3shim$Vector = tools$$module$as3shim$Vector.forEach, setAccessor$$module$as3shim$Vector = 
  tools$$module$as3shim$Vector.setAccessor, setImmutable$$module$as3shim$Vector = tools$$module$as3shim$Vector.setImmutable, setPseudoPrivate$$module$as3shim$Vector = tools$$module$as3shim$Vector.setPseudoPrivate, setDescriptor$$module$as3shim$Vector = tools$$module$as3shim$Vector.setDescriptor, alwaysCoerceTypes$$module$as3shim$Vector = [int_uint$$module$as3shim$Vector["int"], int_uint$$module$as3shim$Vector.uint, global$$module$as3shim$Vector.Number, global$$module$as3shim$Vector.Boolean, global$$module$as3shim$Vector.String];
  function Vector$$module$as3shim$Vector(a, b, c) {
    c || (c = Object);
    if(c != Object && !c.prototype) {
      throw Error("Constructor needs to be passed.");
    }
    this[expando$$module$as3shim$Vector] = {data:[], fixed:!!b, length:+a || 0};
    for(var b = this[expando$$module$as3shim$Vector].data, d = 0;d < a;++d) {
      b[d] = shouldCoerce$$module$as3shim$Vector(c) ? c() : null
    }
    setAccessor$$module$as3shim$Vector(this, "fixed", {configurable:!1, enumerable:!1, get:function() {
      return this[expando$$module$as3shim$Vector].fixed
    }, set:function(a) {
      this[expando$$module$as3shim$Vector].fixed = !!a
    }});
    setAccessor$$module$as3shim$Vector(this, "length", {configurable:!1, enumerable:!1, get:function() {
      return this[expando$$module$as3shim$Vector].data.length
    }, set:function(a) {
      if(this.fixed) {
        throw RangeError("Error #1126: Cannot change the length of a fixed Vector");
      }
      this[expando$$module$as3shim$Vector].data.length = a
    }});
    setImmutable$$module$as3shim$Vector(this, "type", c)
  }
  Class$$module$as3shim$Vector({__setIndex__:setIndex$$module$as3shim$Vector, constructor:Vector$$module$as3shim$Vector, pop:pop$$module$as3shim$Vector, push:push$$module$as3shim$Vector, shift:shift$$module$as3shim$Vector, unshift:unshift$$module$as3shim$Vector, splice:splice$$module$as3shim$Vector});
  setPseudoPrivate$$module$as3shim$Vector(Vector$$module$as3shim$Vector, "isBuiltIn", !0);
  setDescriptor$$module$as3shim$Vector(Vector$$module$as3shim$Vector.prototype, "toString", {enumerable:!1, value:toString$$module$as3shim$Vector});
  forEach$$module$as3shim$Vector(Object.getOwnPropertyNames(ArrayProto$$module$as3shim$Vector), function(a) {
    "function" === typeof ArrayProto$$module$as3shim$Vector[a] && (Vector$$module$as3shim$Vector.prototype[a] || (Vector$$module$as3shim$Vector.prototype[a] = function() {
      return ArrayProto$$module$as3shim$Vector[a].apply(this[expando$$module$as3shim$Vector].data, arguments)
    }))
  });
  function VectorFactory$$module$as3shim$Vector(a) {
    var a = null === a || "undefined" == typeof a ? Object : a, b = "string" === typeof a ? vectorCache$$module$as3shim$Vector[expando$$module$as3shim$Vector].data[a] : vectorCache$$module$as3shim$Vector[expando$$module$as3shim$Vector].get(a);
    if(b) {
      return b
    }
    var c = function(b, e) {
      this instanceof c || new c(b, e);
      return Vector$$module$as3shim$Vector.call(this, b, e, a)
    };
    Class$$module$as3shim$Vector({constructor:c, superClass:Vector$$module$as3shim$Vector});
    setPseudoPrivate$$module$as3shim$Vector(c, "isBuiltIn", !0);
    vectorCache$$module$as3shim$Vector[expando$$module$as3shim$Vector].set(a, c);
    return c
  }
  setPseudoPrivate$$module$as3shim$Vector(VectorFactory$$module$as3shim$Vector, "isClass", !0);
  function coerce$$module$as3shim$Vector(a, b) {
    return shouldCoerce$$module$as3shim$Vector(a) ? a(b) : b
  }
  function pop$$module$as3shim$Vector() {
    if(this[expando$$module$as3shim$Vector].fixed) {
      throw new RangeError("Error #1126: Cannot change the length of a fixed Vector.");
    }
    return coerce$$module$as3shim$Vector(this.type, nativePop$$module$as3shim$Vector.call(this[expando$$module$as3shim$Vector].data))
  }
  function push$$module$as3shim$Vector() {
    if(this[expando$$module$as3shim$Vector].fixed) {
      throw new RangeError("Error #1126: Cannot change the length of a fixed Vector.");
    }
    forEach$$module$as3shim$Vector(arguments, function(a) {
      this.__setIndex__(this[expando$$module$as3shim$Vector].data.length, a)
    }, this);
    return this.length
  }
  function setIndex$$module$as3shim$Vector(a, b) {
    var c = this[expando$$module$as3shim$Vector].data, d = this.type;
    if(a > c.length) {
      throw RangeError("Error #1125: The index is ouf of range");
    }
    if(this.fixed && a >= c.length) {
      throw RangeError("Error #1126: Cannot change the length of a fixed Vector");
    }
    if(d !== Object && d !== global$$module$as3shim$Vector.Object && !shouldCoerce$$module$as3shim$Vector(d) && !(b instanceof d)) {
      throw TypeError("Error #1034: Type Coercion failed");
    }
    shouldCoerce$$module$as3shim$Vector(d) && (b = d(b));
    a >= c.length && (c.length += 1);
    c[a] = b
  }
  function shift$$module$as3shim$Vector() {
    if(this[expando$$module$as3shim$Vector].fixed) {
      throw new RangeError("Error #1126: Cannot change the length of a fixed Vector.");
    }
    return coerce$$module$as3shim$Vector(this.type, nativeShift$$module$as3shim$Vector.call(this[expando$$module$as3shim$Vector].data))
  }
  function shouldCoerce$$module$as3shim$Vector(a) {
    return-1 < alwaysCoerceTypes$$module$as3shim$Vector.indexOf(a)
  }
  function splice$$module$as3shim$Vector(a, b) {
    var c = this[expando$$module$as3shim$Vector].fixed;
    if(!c || c && b === arguments.length - 2) {
      for(c = nativeSplice$$module$as3shim$Vector.apply(this[expando$$module$as3shim$Vector].data, arguments);b--;) {
        setIndex$$module$as3shim$Vector.call(this, a + b, this[a + b])
      }
      return c
    }
    return[]
  }
  function toString$$module$as3shim$Vector() {
    return tools$$module$as3shim$Vector.map(this[expando$$module$as3shim$Vector].data, function(a) {
      return a + ""
    }).join(",")
  }
  function unshift$$module$as3shim$Vector() {
    if(this[expando$$module$as3shim$Vector].fixed) {
      throw new RangeError("Error #1126: Cannot change the length of a fixed Vector.");
    }
    return nativeUnshift$$module$as3shim$Vector.apply(this[expando$$module$as3shim$Vector].data, arguments)
  }
  module$as3shim$Vector.module$exports = {Vector:Vector$$module$as3shim$Vector, VectorFactory:VectorFactory$$module$as3shim$Vector};
  module$as3shim$Vector.module$exports && (module$as3shim$Vector = module$as3shim$Vector.module$exports);
  var module$as3shim$VerifyError = {}, tools$$module$as3shim$VerifyError = module$as3shim$tools, Class$$module$as3shim$VerifyError = module$as3shim$Class, Error$$module$as3shim$VerifyError = module$as3shim$Error;
  function VerifyError$$module$as3shim$VerifyError(a) {
    if(!(this instanceof VerifyError$$module$as3shim$VerifyError)) {
      return new VerifyError$$module$as3shim$VerifyError(a)
    }
    this.message = a
  }
  Class$$module$as3shim$VerifyError({constructor:VerifyError$$module$as3shim$VerifyError, superClass:Error$$module$as3shim$VerifyError});
  tools$$module$as3shim$VerifyError.setPseudoPrivate(VerifyError$$module$as3shim$VerifyError, "isBuiltIn", !0);
  module$as3shim$VerifyError.module$exports = VerifyError$$module$as3shim$VerifyError;
  module$as3shim$VerifyError.module$exports && (module$as3shim$VerifyError = module$as3shim$VerifyError.module$exports);
  var module$as3shim$XMLList = {}, bonsai$$module$as3shim$XMLList = module$as3shim$bonsai, exposes$$module$as3shim$XMLList = module$as3shim$exports, global$$module$as3shim$XMLList = module$as3shim$global, tools$$module$as3shim$XMLList = module$as3shim$tools, ArgumentError$$module$as3shim$XMLList = module$as3shim$ArgumentError, Class$$module$as3shim$XMLList = module$as3shim$Class, apply$$module$as3shim$XMLList = Class$$module$as3shim$XMLList.apply, expando$$module$as3shim$XMLList = tools$$module$as3shim$XMLList.expando, 
  toString$$module$as3shim$XMLList = {}.toString, xmlSerializer$$module$as3shim$XMLList = new (global$$module$as3shim$XMLList.XMLSerializer || Object), invokableMethods$$module$as3shim$XMLList = "attribute,attributes,child,children,comments,descendants,elements,normalize,processingInstructions,text".split(","), setImmutable$$module$as3shim$XMLList = tools$$module$as3shim$XMLList.setImmutable;
  function XMLList$$module$as3shim$XMLList(a) {
    function b(a) {
      var b = e.length;
      a[expando$$module$as3shim$XMLList] && (a = a[expando$$module$as3shim$XMLList].raw);
      b in d || tools$$module$as3shim$XMLList.setAccessor(d, e.length, {configurable:!1, get:function() {
        return new exposes$$module$as3shim$XMLList.XML(this[expando$$module$as3shim$XMLList].raw[b])
      }});
      e.push(a)
    }
    function c(a) {
      var c = a instanceof XMLList$$module$as3shim$XMLList;
      "" === a || null == a || c && 0 === a.length() || a[expando$$module$as3shim$XMLList] && "" === a[expando$$module$as3shim$XMLList].raw || (c ? tools$$module$as3shim$XMLList.forEach(a[expando$$module$as3shim$XMLList].raw, b) : b(a))
    }
    var d = this;
    if(!(this instanceof XMLList$$module$as3shim$XMLList)) {
      return new XMLList$$module$as3shim$XMLList(a)
    }
    if(null == a) {
      return d[expando$$module$as3shim$XMLList] = {raw:[]}, d
    }
    if(a instanceof XMLList$$module$as3shim$XMLList) {
      return a
    }
    var e = [];
    if(a.length === +a.length && "[object String]" !== toString$$module$as3shim$XMLList.call(a)) {
      tools$$module$as3shim$XMLList.forEach(a, c)
    }else {
      if(null == a) {
        c(a)
      }else {
        return new exposes$$module$as3shim$XMLList.XML(a)
      }
    }
    if(1 === e.length) {
      return new exposes$$module$as3shim$XMLList.XML(e[0])
    }
    d[expando$$module$as3shim$XMLList] = {raw:e}
  }
  function invoke$$module$as3shim$XMLList(a, b, c) {
    for(var d, e = -1, f = a.length, g = Array(f), h = new exposes$$module$as3shim$XMLList.XML;++e < f;) {
      d = a[e], h[expando$$module$as3shim$XMLList].raw = d, d = h[b], g[e] = d ? apply$$module$as3shim$XMLList.call(d, h, c) : "", g[e] === h && (g[e] = new exposes$$module$as3shim$XMLList.XML(g[e][expando$$module$as3shim$XMLList].raw))
    }
    return g
  }
  function contains$$module$as3shim$XMLList(a) {
    return tools$$module$as3shim$XMLList.some(invoke$$module$as3shim$XMLList(this[expando$$module$as3shim$XMLList].raw, "contains", [a]), Boolean)
  }
  function copy$$module$as3shim$XMLList() {
    var a = [];
    tools$$module$as3shim$XMLList.forEach(this[expando$$module$as3shim$XMLList].raw, function(b) {
      a.push(b instanceof exposes$$module$as3shim$XMLList.XML ? b.clone() : b)
    });
    return new XMLList$$module$as3shim$XMLList(a)
  }
  function hasComplexContent$$module$as3shim$XMLList() {
    for(var a = -1, b = this[expando$$module$as3shim$XMLList].raw.length;++a < b;) {
      if(this[a].hasComplexContent()) {
        return!0
      }
    }
    return!1
  }
  function hasSimpleContent$$module$as3shim$XMLList() {
    return!this.hasComplexContent()
  }
  function length$$module$as3shim$XMLList() {
    return this[expando$$module$as3shim$XMLList].raw.length
  }
  function parent$$module$as3shim$XMLList() {
    var a = invoke$$module$as3shim$XMLList(this[expando$$module$as3shim$XMLList].raw, "parent", []);
    if(a[0] && tools$$module$as3shim$XMLList.every(a, function(b, c) {
      return c ? b[expando$$module$as3shim$XMLList].raw === a[c - 1][expando$$module$as3shim$XMLList].raw : !0
    })) {
      return a[0]
    }
  }
  function toXMLString$$module$as3shim$XMLList() {
    return tools$$module$as3shim$XMLList.reduce(this[expando$$module$as3shim$XMLList].raw, function(a, b) {
      var c;
      c = Object(b);
      var d = c.nodeType, e = a ? "\n" : "";
      c = c.toXMLString ? b.toXMLString() : d ? xmlSerializer$$module$as3shim$XMLList.serializeToString(b) : null == b ? "" : "" + b;
      return a + e + c
    }, "")
  }
  Class$$module$as3shim$XMLList({constructor:XMLList$$module$as3shim$XMLList, contains:contains$$module$as3shim$XMLList, copy:copy$$module$as3shim$XMLList, hasComplexContent:hasComplexContent$$module$as3shim$XMLList, hasSimpleContent:hasSimpleContent$$module$as3shim$XMLList, length:length$$module$as3shim$XMLList, parent:parent$$module$as3shim$XMLList, toString:toXMLString$$module$as3shim$XMLList, toXMLString:toXMLString$$module$as3shim$XMLList});
  tools$$module$as3shim$XMLList.forEach(invokableMethods$$module$as3shim$XMLList, function(a) {
    XMLList$$module$as3shim$XMLList.prototype[a] = function() {
      return new XMLList$$module$as3shim$XMLList(invoke$$module$as3shim$XMLList(this[expando$$module$as3shim$XMLList].raw, a, arguments))
    }
  });
  tools$$module$as3shim$XMLList.setPseudoPrivate(XMLList$$module$as3shim$XMLList, "isBuiltIn", !0);
  module$as3shim$XMLList.module$exports = XMLList$$module$as3shim$XMLList;
  module$as3shim$XMLList.module$exports && (module$as3shim$XMLList = module$as3shim$XMLList.module$exports);
  var module$as3shim$XML = {}, bonsai$$module$as3shim$XML = module$as3shim$bonsai, global$$module$as3shim$XML = module$as3shim$global, tools$$module$as3shim$XML = module$as3shim$tools, ArgumentError$$module$as3shim$XML = module$as3shim$ArgumentError, Class$$module$as3shim$XML = module$as3shim$Class, QName$$module$as3shim$XML = module$as3shim$QName, XMLList$$module$as3shim$XML = module$as3shim$XMLList, doc$$module$as3shim$XML = global$$module$as3shim$XML.document, domParser$$module$as3shim$XML = new (global$$module$as3shim$XML.DOMParser || 
  Object), expando$$module$as3shim$XML = tools$$module$as3shim$XML.expando, toString$$module$as3shim$XML = {}.toString, xmlSerializer$$module$as3shim$XML = new (global$$module$as3shim$XML.XMLSerializer || Object), detachNode$$module$as3shim$XML = tools$$module$as3shim$XML.detachNode, forEach$$module$as3shim$XML = tools$$module$as3shim$XML.forEach, forEachSnapshot$$module$as3shim$XML = tools$$module$as3shim$XML.forEachSnapshot, indexOf$$module$as3shim$XML = tools$$module$as3shim$XML.indexOf, noop$$module$as3shim$XML = 
  tools$$module$as3shim$XML.noop, setAccessor$$module$as3shim$XML = tools$$module$as3shim$XML.setAccessor, setImmutable$$module$as3shim$XML = tools$$module$as3shim$XML.setImmutable, toArray$$module$as3shim$XML = tools$$module$as3shim$XML.toArray, xQuery$$module$as3shim$XML = tools$$module$as3shim$XML.xQuery;
  function XML$$module$as3shim$XML(a) {
    var b;
    b = toString$$module$as3shim$XML.call(a);
    var c = !!arguments.length;
    if(!(this instanceof XML$$module$as3shim$XML)) {
      return c ? new XML$$module$as3shim$XML(a) : new XML$$module$as3shim$XML
    }
    if(a instanceof XML$$module$as3shim$XML) {
      return a
    }
    a instanceof XMLList$$module$as3shim$XML && (a = 1 < a.length() ? null : a.toXMLString());
    if(c && null == a || "[object Object]" === b || "[object Array]" === b) {
      throw ArgumentError$$module$as3shim$XML();
    }
    c = this[expando$$module$as3shim$XML] = {raw:a, tags:{}};
    a && "number" !== typeof a.nodeType && (b = (b = domParser$$module$as3shim$XML.parseFromString(null == a ? "" : "" + a, "text/xml")) && 1 !== b.getElementsByTagName("parsererror").length && b.firstChild) && (a = c.raw = b);
    b = a && a.nodeType;
    if(1 === b || 9 === b) {
      XML$$module$as3shim$XML.ignoreComments && forEachSnapshot$$module$as3shim$XML(xQuery$$module$as3shim$XML("//comment()", a), detachNode$$module$as3shim$XML);
      XML$$module$as3shim$XML.ignoreWhitespace && forEachSnapshot$$module$as3shim$XML(xQuery$$module$as3shim$XML('//text()[normalize-space()=""]', a), detachNode$$module$as3shim$XML);
      var d = this;
      forEach$$module$as3shim$XML(a.getElementsByTagName("*"), function(a) {
        addTagExpando$$module$as3shim$XML(d, a)
      })
    }
    setImmutable$$module$as3shim$XML(this, "0", this)
  }
  function addTagExpando$$module$as3shim$XML(a, b, c) {
    var d = b.tagName;
    if(d) {
      var e = a[expando$$module$as3shim$XML].tags, e = e[d] || (e[d] = []);
      d in a || setAccessor$$module$as3shim$XML(a, d, {configurable:!1, get:function() {
        return new XMLList$$module$as3shim$XML(this[expando$$module$as3shim$XML].tags[d])
      }});
      null != c ? e.splice(c, 0, b) : e.push(b)
    }
  }
  function getElement$$module$as3shim$XML(a) {
    return(a = a[expando$$module$as3shim$XML] ? a[expando$$module$as3shim$XML].raw : a) && "number" === typeof a.nodeType ? a : null
  }
  function matchNode$$module$as3shim$XML(a, b) {
    for(var c = -1, d = a.length, e = toXMLString$$module$as3shim$XML.call(b);++c < d;) {
      if(toXMLString$$module$as3shim$XML.call(a[c]) === e) {
        return a[c]
      }
    }
    return null
  }
  function removeTagExpando$$module$as3shim$XML(a, b) {
    var c = b.tagName;
    if(c) {
      var d = a[expando$$module$as3shim$XML].tags, c = d[c] || (d[c] = []);
      c.splice(indexOf$$module$as3shim$XML(c, b), 1)
    }
  }
  function defaultSettings$$module$as3shim$XML() {
    return{ignoreComments:!0, ignoreProcessingInstructions:!0, ignoreWhitespace:!0, prettyIndent:2, prettyPrinting:!0}
  }
  function setSettings$$module$as3shim$XML(a) {
    a || (a = defaultSettings$$module$as3shim$XML());
    this.ignoreComments = !!a.ignoreComments;
    this.ignoreProcessingInstructions = !!a.ignoreProcessingInstructions;
    this.ignoreWhitespace = !!a.ignoreWhitespace;
    this.prettyIndent = Number(a.prettyIndent) || 0;
    this.prettyPrinting = !!a.prettyIndent
  }
  function settings$$module$as3shim$XML() {
    return{ignoreComments:this.ignoreComments, ignoreProcessingInstructions:this.ignoreProcessingInstructions, ignoreWhitespace:this.ignoreWhitespace, prettyIndent:this.prettyIndent, prettyPrinting:this.prettyPrinting}
  }
  function addNamespace$$module$as3shim$XML() {
    return this
  }
  function appendChild$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this), a = getElement$$module$as3shim$XML(a);
    b && a && (a = a.cloneNode(!0), addTagExpando$$module$as3shim$XML(this, b.appendChild(a)));
    return this
  }
  function attribute$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this);
    return new XMLList$$module$as3shim$XML(b && b.getAttributeNode(a) || "")
  }
  function attributes$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    return new XMLList$$module$as3shim$XML(a && a.attributes)
  }
  function child$$module$as3shim$XML(a) {
    var b, c = getElement$$module$as3shim$XML(this);
    if(c) {
      if("number" === typeof a) {
        return(b = c.childNodes[a]) ? new XML$$module$as3shim$XML(b) : new XMLList$$module$as3shim$XML
      }
      b = c.getElementsByTagName(a)
    }
    return b && 1 === b.length ? new XML$$module$as3shim$XML(b[0]) : new XMLList$$module$as3shim$XML(b)
  }
  function childIndex$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this), b = a && a.parentNode;
    return b && 9 !== b.nodeType ? indexOf$$module$as3shim$XML(b.childNodes, a) : -1
  }
  function children$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    return new XMLList$$module$as3shim$XML(a && a.childNodes)
  }
  function comments$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this), b = [];
    a && forEachSnapshot$$module$as3shim$XML(xQuery$$module$as3shim$XML("descendant::comment()", a), function(a, d) {
      b[d] = a
    });
    return new XMLList$$module$as3shim$XML(b)
  }
  function contains$$module$as3shim$XML(a) {
    return toXMLString$$module$as3shim$XML.call(this) === toXMLString$$module$as3shim$XML.call(a)
  }
  function copy$$module$as3shim$XML() {
    return new XML$$module$as3shim$XML(this.toXMLString())
  }
  function descendants$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this);
    return new XMLList$$module$as3shim$XML(b && b.getElementsByTagName(null == a ? "*" : a))
  }
  function elements$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this);
    if(!b) {
      return new XMLList$$module$as3shim$XML
    }
    for(var c = b.childNodes, d = -1, e = c.length, f = [], a = null == a ? "*" : "" + a;++d < e;) {
      b = c[d], (b.tagName === a || "*" === a && 1 === b.nodeType) && f.push(b)
    }
    return new XMLList$$module$as3shim$XML(f)
  }
  function hasComplexContent$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    if(!a) {
      return!1
    }
    for(var b = a.childNodes, c = -1, d = b.length;++c < d;) {
      if(a = b[c].nodeType, 1 === a || 9 === a) {
        return!0
      }
    }
    return!1
  }
  function hasSimpleContent$$module$as3shim$XML() {
    return!this.hasComplexContent()
  }
  function inScopeNamespaces$$module$as3shim$XML() {
    return[]
  }
  function insertChildAfter$$module$as3shim$XML(a, b) {
    var c = getElement$$module$as3shim$XML(this), b = getElement$$module$as3shim$XML(b);
    if(!c || !b) {
      return this
    }
    var d = c.childNodes, b = b.cloneNode(!0);
    if(null === a) {
      c.insertBefore(b, c.firstChild)
    }else {
      if(a = matchNode$$module$as3shim$XML(toArray$$module$as3shim$XML(d), a)) {
        c.insertBefore(b, a.nextSibling)
      }else {
        return
      }
    }
    addTagExpando$$module$as3shim$XML(this, b, indexOf$$module$as3shim$XML(toArray$$module$as3shim$XML(d), b));
    return this
  }
  function insertChildBefore$$module$as3shim$XML(a, b) {
    var c = getElement$$module$as3shim$XML(this), b = getElement$$module$as3shim$XML(b);
    if(!c || !b) {
      return this
    }
    var d = c.childNodes, b = b.cloneNode(!0);
    if(null === a) {
      c.appendChild(b)
    }else {
      if(a = matchNode$$module$as3shim$XML(toArray$$module$as3shim$XML(d), a)) {
        c.insertBefore(b, a)
      }else {
        return
      }
    }
    addTagExpando$$module$as3shim$XML(this, b, indexOf$$module$as3shim$XML(toArray$$module$as3shim$XML(d), b));
    return this
  }
  function length$$module$as3shim$XML() {
    return 1
  }
  function localName$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    return a ? a.nodeName : null
  }
  function name$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    return a ? new QName$$module$as3shim$XML(null, a.nodeName) : null
  }
  function namespace$$module$as3shim$XML(a) {
    return null == a ? void 0 : null
  }
  function namespaceDeclarations$$module$as3shim$XML() {
    return[]
  }
  function nodeKind$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    if(a) {
      switch(a.nodeType) {
        case 2:
          return"attribute";
        case 8:
          return"comment";
        case 1:
          return"element";
        case 7:
          return"processing-instruction";
        case 3:
          return"text"
      }
    }
    return""
  }
  function normalize$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    a && a.normalize();
    return this
  }
  function parent$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    return(a = a && a.parentNode) && 9 !== a.nodeType ? new XML$$module$as3shim$XML(a) : void 0
  }
  function prependChild$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this), a = getElement$$module$as3shim$XML(a);
    b && a && (a = a.cloneNode(!0), b.insertBefore(a, b.firstChild), addTagExpando$$module$as3shim$XML(this, a, 0));
    return this
  }
  function processingInstructions$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this), c = [];
    b && forEachSnapshot$$module$as3shim$XML(xQuery$$module$as3shim$XML("child::processing-instruction(" + (a ? "'" + a + "'" : "") + ")", b), function(a, b) {
      c[b] = a
    });
    return new XMLList$$module$as3shim$XML(c)
  }
  function removeNamespace$$module$as3shim$XML() {
    return this
  }
  function replace$$module$as3shim$XML(a, b) {
    var c, d, e = getElement$$module$as3shim$XML(this), b = getElement$$module$as3shim$XML(b);
    if(!e || !b) {
      return this
    }
    c = e.childNodes;
    b = b.cloneNode(!0);
    if("number" === typeof a && -1 < a && a < c.length) {
      e.replaceChild(b, c[a])
    }else {
      if("*" === a) {
        for(;c = e.firstChild;) {
          tools$$module$as3shim$XML.detachNode(c)
        }
        e.appendChild(b)
      }else {
        var f = !1;
        for(c = e.firstChild;c;) {
          d = c.nextSibling, c.nodeName === a && (f || (f = e.insertBefore(b, c)), tools$$module$as3shim$XML.detachNode(c)), c = d
        }
      }
    }
    return this
  }
  function setChildren$$module$as3shim$XML(a) {
    var b, c = getElement$$module$as3shim$XML(this);
    if(c) {
      for(;b = c.firstChild;) {
        c.removeChild(b)
      }
      a = (new XMLList$$module$as3shim$XML(a))[expando$$module$as3shim$XML].raw;
      forEach$$module$as3shim$XML(tools$$module$as3shim$XML.isArray(a) ? a : [a], function(a) {
        c.appendChild(a.cloneNode(!0))
      })
    }
    return this
  }
  function setName$$module$as3shim$XML(a) {
    var b = getElement$$module$as3shim$XML(this);
    if(b) {
      var b = b.attributes, c = this.parent(), a = new XML$$module$as3shim$XML("<" + a + "/>"), d = getElement$$module$as3shim$XML(a);
      c && c.replace(this, newSelf);
      forEach$$module$as3shim$XML(b, function(a) {
        (a.specified || a.nodeValue) && d.setAttribute(a.name, a.nodeValue)
      });
      a.setChildren(this.children());
      this[expando$$module$as3shim$XML].raw = d
    }
  }
  function setNamespace$$module$as3shim$XML() {
  }
  function text$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this), b = [];
    a && forEachSnapshot$$module$as3shim$XML(xQuery$$module$as3shim$XML("child::text()", a), function(a, d) {
      b[d] = a
    });
    return new XMLList$$module$as3shim$XML(b)
  }
  function toJSON$$module$as3shim$XML() {
    throw new TypeError("Error #1006: value is not a function.");
  }
  function toTextString$$module$as3shim$XML() {
    if(this.hasComplexContent()) {
      return this.toXMLString()
    }
    var a = getElement$$module$as3shim$XML(this);
    return a ? a.textContent : "" + this[expando$$module$as3shim$XML].raw
  }
  function toXMLString$$module$as3shim$XML() {
    var a = getElement$$module$as3shim$XML(this);
    return a ? xmlSerializer$$module$as3shim$XML.serializeToString(a) : "" + this[expando$$module$as3shim$XML].raw
  }
  XML$$module$as3shim$XML.ignoreComments = !0;
  XML$$module$as3shim$XML.ignoreProcessingInstructions = !0;
  XML$$module$as3shim$XML.ignoreWhitespace = !0;
  XML$$module$as3shim$XML.prettyIndent = 2;
  XML$$module$as3shim$XML.prettyPrinting = !0;
  XML$$module$as3shim$XML.defaultSettings = defaultSettings$$module$as3shim$XML;
  XML$$module$as3shim$XML.setSettings = setSettings$$module$as3shim$XML;
  XML$$module$as3shim$XML.settings = settings$$module$as3shim$XML;
  Class$$module$as3shim$XML({ignoreComments:!0, ignoreProcessingInstructions:!0, ignoreWhitespace:!0, prettyIndent:2, prettyPrinting:!0, constructor:XML$$module$as3shim$XML, addNamespace:addNamespace$$module$as3shim$XML, appendChild:appendChild$$module$as3shim$XML, attribute:attribute$$module$as3shim$XML, attributes:attributes$$module$as3shim$XML, child:child$$module$as3shim$XML, childIndex:childIndex$$module$as3shim$XML, children:children$$module$as3shim$XML, comments:comments$$module$as3shim$XML, 
  contains:contains$$module$as3shim$XML, copy:copy$$module$as3shim$XML, descendants:descendants$$module$as3shim$XML, elements:elements$$module$as3shim$XML, hasComplexContent:hasComplexContent$$module$as3shim$XML, hasSimpleContent:hasSimpleContent$$module$as3shim$XML, inScopeNamespaces:inScopeNamespaces$$module$as3shim$XML, insertChildAfter:insertChildAfter$$module$as3shim$XML, insertChildBefore:insertChildBefore$$module$as3shim$XML, length:length$$module$as3shim$XML, localName:localName$$module$as3shim$XML, 
  name:name$$module$as3shim$XML, namespace:namespace$$module$as3shim$XML, namespaceDeclarations:namespaceDeclarations$$module$as3shim$XML, nodeKind:nodeKind$$module$as3shim$XML, normalize:normalize$$module$as3shim$XML, parent:parent$$module$as3shim$XML, prependChild:prependChild$$module$as3shim$XML, processingInstructions:processingInstructions$$module$as3shim$XML, removeNamespace:removeNamespace$$module$as3shim$XML, replace:replace$$module$as3shim$XML, setChildren:setChildren$$module$as3shim$XML, 
  setLocalName:setName$$module$as3shim$XML, setName:setName$$module$as3shim$XML, setNamespace:setNamespace$$module$as3shim$XML, text:text$$module$as3shim$XML, toJSON:toJSON$$module$as3shim$XML, toString:toTextString$$module$as3shim$XML, toXMLString:toXMLString$$module$as3shim$XML});
  tools$$module$as3shim$XML.setPseudoPrivate(XML$$module$as3shim$XML, "isBuiltIn", !0);
  module$as3shim$XML.module$exports = XML$$module$as3shim$XML;
  module$as3shim$XML.module$exports && (module$as3shim$XML = module$as3shim$XML.module$exports);
  var module$as3shim$prepackage = {}, exposes$$module$as3shim$prepackage = module$as3shim$exports, avmplus$$module$as3shim$prepackage = module$as3shim$avmplus, bonsai$$module$as3shim$prepackage = module$as3shim$bonsai, flash$$module$as3shim$prepackage = module$as3shim$flash, global$$module$as3shim$prepackage = module$as3shim$global, int_uint$$module$as3shim$prepackage = module$as3shim$int_uint, isXMLName$$module$as3shim$prepackage = module$as3shim$isXMLName, iterables$$module$as3shim$prepackage = 
  module$as3shim$iterables, plugins$$module$as3shim$prepackage = module$as3shim$plugins, tools$$module$as3shim$prepackage = module$as3shim$tools, trace$$module$as3shim$prepackage = module$as3shim$trace, Array$$module$as3shim$prepackage = module$as3shim$Array, ArgumentError$$module$as3shim$prepackage = module$as3shim$ArgumentError, Class$$module$as3shim$prepackage = module$as3shim$Class, DefinitionError$$module$as3shim$prepackage = module$as3shim$DefinitionError, Error$$module$as3shim$prepackage = 
  module$as3shim$Error, EvalError$$module$as3shim$prepackage = module$as3shim$EvalError, Interface$$module$as3shim$prepackage = module$as3shim$Interface, Object$$module$as3shim$prepackage = module$as3shim$Object, Namespace$$module$as3shim$prepackage = module$as3shim$Namespace, QName$$module$as3shim$prepackage = module$as3shim$QName, RangeError$$module$as3shim$prepackage = module$as3shim$RangeError, ReferenceError$$module$as3shim$prepackage = module$as3shim$ReferenceError, RegExp$$module$as3shim$prepackage = 
  module$as3shim$RegExp, SecurityError$$module$as3shim$prepackage = module$as3shim$SecurityError, String$$module$as3shim$prepackage = module$as3shim$String, SyntaxError$$module$as3shim$prepackage = module$as3shim$SyntaxError, TypeError$$module$as3shim$prepackage = module$as3shim$TypeError, URIError$$module$as3shim$prepackage = module$as3shim$URIError, Vector$$module$as3shim$prepackage = module$as3shim$Vector, VerifyError$$module$as3shim$prepackage = module$as3shim$VerifyError, XML$$module$as3shim$prepackage = 
  module$as3shim$XML, XMLList$$module$as3shim$prepackage = module$as3shim$XMLList, builtIns$$module$as3shim$prepackage = "Boolean,Date,Error,EvalError,Function,Math,Number,RangeError,ReferenceError,SyntaxError,TypeError,URIError,int,isFinite,isNaN,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,escape,uint,unescape,parseInt,parseFloat".split(","), builtInClasses$$module$as3shim$prepackage = {Boolean:!0, Date:!0, Error:!0, EvalError:!0, Function:!0, "int":!0, Math:!0, Number:!0, RangeError:!0, 
  ReferenceError:!0, SyntaxError:!0, TypeError:!0, uint:!0, URIError:!0}, createDummyFunction$$module$as3shim$prepackage = tools$$module$as3shim$prepackage.createDummyFunction, forEach$$module$as3shim$prepackage = tools$$module$as3shim$prepackage.forEach, setPseudoPrivate$$module$as3shim$prepackage = tools$$module$as3shim$prepackage.setPseudoPrivate;
  exposes$$module$as3shim$prepackage.Array = Array$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.ArgumentError = ArgumentError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.Class = Class$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.DefinitionError = DefinitionError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.Error = Error$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.EvalError = EvalError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.Interface = Interface$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.Object = Object$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.Namespace = Namespace$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.QName = QName$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.RangeError = RangeError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.ReferenceError = ReferenceError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.RegExp = RegExp$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.SecurityError = SecurityError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.String = String$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.SyntaxError = SyntaxError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.TypeError = TypeError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.URIError = URIError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.Vector = Vector$$module$as3shim$prepackage.Vector;
  exposes$$module$as3shim$prepackage.VectorFactory = Vector$$module$as3shim$prepackage.VectorFactory;
  exposes$$module$as3shim$prepackage.VerifyError = VerifyError$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.XML = XML$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.XMLList = XMLList$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage["int"] = int_uint$$module$as3shim$prepackage["int"];
  exposes$$module$as3shim$prepackage.uint = int_uint$$module$as3shim$prepackage.uint;
  tools$$module$as3shim$prepackage.forEach(builtIns$$module$as3shim$prepackage, function(a) {
    var b = exposes$$module$as3shim$prepackage[a] || (exposes$$module$as3shim$prepackage[a] = global$$module$as3shim$prepackage[a]);
    builtInClasses$$module$as3shim$prepackage[a] && (b.__proto__ = Class$$module$as3shim$prepackage.prototype, setPseudoPrivate$$module$as3shim$prepackage(b, "isClass", !0));
    setPseudoPrivate$$module$as3shim$prepackage(b, "isBuiltIn", !0)
  });
  exposes$$module$as3shim$prepackage.flash = flash$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.stage = new flash$$module$as3shim$prepackage.display.Stage;
  exposes$$module$as3shim$prepackage.Infinity = Infinity;
  exposes$$module$as3shim$prepackage.NaN = NaN;
  exposes$$module$as3shim$prepackage.undefined = void 0;
  exposes$$module$as3shim$prepackage.isXMLName = isXMLName$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.trace = trace$$module$as3shim$prepackage;
  exposes$$module$as3shim$prepackage.getQualifiedClassName = avmplus$$module$as3shim$prepackage.getQualifiedClassName;
  iterables$$module$as3shim$prepackage.mixin(exposes$$module$as3shim$prepackage);
  module$as3shim$prepackage.module$exports = tools$$module$as3shim$prepackage.mixin(plugins$$module$as3shim$prepackage, exposes$$module$as3shim$prepackage);
  module$as3shim$prepackage.module$exports && (module$as3shim$prepackage = module$as3shim$prepackage.module$exports);
  var module$as3shim$packages = {}, exposes$$module$as3shim$packages = module$as3shim$exports, plugins$$module$as3shim$packages = module$as3shim$prepackage, tools$$module$as3shim$packages = module$as3shim$tools, Class$$module$as3shim$packages = module$as3shim$Class, Namespace$$module$as3shim$packages = module$as3shim$Namespace, display$$module$as3shim$packages = module$as3shim$flash$display, errors$$module$as3shim$packages = module$as3shim$flash$errors, events$$module$as3shim$packages = module$as3shim$flash$events, 
  external$$module$as3shim$packages = module$as3shim$flash$external, filters$$module$as3shim$packages = module$as3shim$flash$filters, geom$$module$as3shim$packages = module$as3shim$flash$geom, net$$module$as3shim$packages = module$as3shim$flash$net, system$$module$as3shim$packages = module$as3shim$flash$system, text$$module$as3shim$packages = module$as3shim$flash$text, ui$$module$as3shim$packages = module$as3shim$flash$ui, utils$$module$as3shim$packages = module$as3shim$flash$utils, xml$$module$as3shim$packages = 
  module$as3shim$flash$xml, Klass$$module$as3shim$packages, proto$$module$as3shim$packages, root$$module$as3shim$packages, createDummyFunction$$module$as3shim$packages = tools$$module$as3shim$packages.createDummyFunction, noop$$module$as3shim$packages = tools$$module$as3shim$packages.noop, setConst$$module$as3shim$packages = tools$$module$as3shim$packages.setConst, setDescriptor$$module$as3shim$packages = tools$$module$as3shim$packages.setDescriptor;
  function createNamespace$$module$as3shim$packages(a) {
    for(var b = -1, c = exposes$$module$as3shim$packages, a = a.split("."), d = a.length;++b < d;) {
      c[a[b]] || (c[a[b]] = new Namespace$$module$as3shim$packages), c = c[a[b]]
    }
    return c
  }
  root$$module$as3shim$packages = exposes$$module$as3shim$packages;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Object;
  Klass$$module$as3shim$packages._init = createDummyFunction$$module$as3shim$packages({name:"_init", returnType:""});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Class;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Namespace;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.String;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Array;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DefinitionError;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SecurityError;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.VerifyError;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.UninitializedError = createDummyFunction$$module$as3shim$packages("UninitializedError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ArgumentError;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XML;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLList;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.QName;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.RegExp;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Vector;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CustomActions = createDummyFunction$$module$as3shim$packages("CustomActions");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "actionsList", {get:createDummyFunction$$module$as3shim$packages({name:"actionsList", returnType:"Array"})});
  Klass$$module$as3shim$packages.getActions = createDummyFunction$$module$as3shim$packages({name:"getActions", returnType:"String"});
  Klass$$module$as3shim$packages.installActions = createDummyFunction$$module$as3shim$packages({name:"installActions", returnType:"void"});
  Klass$$module$as3shim$packages.uninstallActions = createDummyFunction$$module$as3shim$packages({name:"uninstallActions", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ProductManager = createDummyFunction$$module$as3shim$packages("ProductManager");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "installed", {get:createDummyFunction$$module$as3shim$packages({name:"installed", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "installedVersion", {get:createDummyFunction$$module$as3shim$packages({name:"installedVersion", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "running", {get:createDummyFunction$$module$as3shim$packages({name:"running", returnType:"Boolean"})});
  proto$$module$as3shim$packages.doSelfUpgrade = createDummyFunction$$module$as3shim$packages({name:"doSelfUpgrade", returnType:"Boolean"});
  proto$$module$as3shim$packages.download = createDummyFunction$$module$as3shim$packages({name:"download", returnType:"Boolean"});
  proto$$module$as3shim$packages.launch = createDummyFunction$$module$as3shim$packages({name:"launch", returnType:"Boolean"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLUI = createDummyFunction$$module$as3shim$packages("XMLUI");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages.accept = createDummyFunction$$module$as3shim$packages({name:"accept", returnType:"void"});
  Klass$$module$as3shim$packages.cancel = createDummyFunction$$module$as3shim$packages({name:"cancel", returnType:"void"});
  Klass$$module$as3shim$packages.getProperty = createDummyFunction$$module$as3shim$packages({name:"getProperty", returnType:"String"});
  Klass$$module$as3shim$packages.setProperty = createDummyFunction$$module$as3shim$packages({name:"setProperty", returnType:"void"});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.accessibility");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Accessibility = createDummyFunction$$module$as3shim$packages("Accessibility");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "active", {get:createDummyFunction$$module$as3shim$packages({name:"active", returnType:"Boolean"})});
  Klass$$module$as3shim$packages.sendEvent = createDummyFunction$$module$as3shim$packages({name:"sendEvent", returnType:"void"});
  Klass$$module$as3shim$packages.updateProperties = createDummyFunction$$module$as3shim$packages({name:"updateProperties", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AccessibilityProperties = createDummyFunction$$module$as3shim$packages("AccessibilityProperties");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AccessibilityImplementation = createDummyFunction$$module$as3shim$packages("AccessibilityImplementation");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.accDoDefaultAction = createDummyFunction$$module$as3shim$packages({name:"accDoDefaultAction", returnType:"void"});
  proto$$module$as3shim$packages.accLocation = createDummyFunction$$module$as3shim$packages({name:"accLocation", returnType:""});
  proto$$module$as3shim$packages.accSelect = createDummyFunction$$module$as3shim$packages({name:"accSelect", returnType:"void"});
  proto$$module$as3shim$packages.get_accDefaultAction = createDummyFunction$$module$as3shim$packages({name:"get_accDefaultAction", returnType:"String"});
  proto$$module$as3shim$packages.get_accFocus = createDummyFunction$$module$as3shim$packages({name:"get_accFocus", returnType:"uint"});
  proto$$module$as3shim$packages.get_accName = createDummyFunction$$module$as3shim$packages({name:"get_accName", returnType:"String"});
  proto$$module$as3shim$packages.get_accRole = createDummyFunction$$module$as3shim$packages({name:"get_accRole", returnType:"uint"});
  proto$$module$as3shim$packages.get_accSelection = createDummyFunction$$module$as3shim$packages({name:"get_accSelection", returnType:"Array"});
  proto$$module$as3shim$packages.get_accState = createDummyFunction$$module$as3shim$packages({name:"get_accState", returnType:"uint"});
  proto$$module$as3shim$packages.get_accValue = createDummyFunction$$module$as3shim$packages({name:"get_accValue", returnType:"String"});
  proto$$module$as3shim$packages.getChildIDArray = createDummyFunction$$module$as3shim$packages({name:"getChildIDArray", returnType:"Array"});
  proto$$module$as3shim$packages.isLabeledBy = createDummyFunction$$module$as3shim$packages({name:"isLabeledBy", returnType:"Boolean"});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.automation");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ActionGenerator = createDummyFunction$$module$as3shim$packages("ActionGenerator");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.generateAction = createDummyFunction$$module$as3shim$packages({name:"generateAction", returnType:"void"});
  proto$$module$as3shim$packages.generateActions = createDummyFunction$$module$as3shim$packages({name:"generateActions", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AutomationAction = createDummyFunction$$module$as3shim$packages("AutomationAction");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.KeyboardAutomationAction = createDummyFunction$$module$as3shim$packages("KeyboardAutomationAction");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.automation.AutomationAction});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "keyCode", {get:createDummyFunction$$module$as3shim$packages({name:"keyCode", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "keyCode", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KEY_DOWN", "keyDown");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KEY_UP", "keyUp");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MouseAutomationAction = createDummyFunction$$module$as3shim$packages("MouseAutomationAction");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.automation.AutomationAction});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "delta", {get:createDummyFunction$$module$as3shim$packages({name:"delta", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "stageX", {get:createDummyFunction$$module$as3shim$packages({name:"stageX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "stageY", {get:createDummyFunction$$module$as3shim$packages({name:"stageY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "delta", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "stageX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "stageY", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MIDDLE_MOUSE_DOWN", "middleMouseDown");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MIDDLE_MOUSE_UP", "middleMouseUp");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MOUSE_DOWN", "mouseDown");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MOUSE_MOVE", "mouseMove");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MOUSE_UP", "mouseUp");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MOUSE_WHEEL", "mouseWheel");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "RIGHT_MOUSE_DOWN", "rightMouseDown");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "RIGHT_MOUSE_UP", "rightMouseUp");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageCapture = createDummyFunction$$module$as3shim$packages("StageCapture");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clipRect", {get:createDummyFunction$$module$as3shim$packages({name:"clipRect", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fileNameBase", {get:createDummyFunction$$module$as3shim$packages({name:"fileNameBase", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clipRect", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fileNameBase", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CURRENT", "current");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MULTIPLE", "multiple");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NEXT", "next");
  proto$$module$as3shim$packages.cancel = createDummyFunction$$module$as3shim$packages({name:"cancel", returnType:"void"});
  proto$$module$as3shim$packages.capture = createDummyFunction$$module$as3shim$packages({name:"capture", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageCaptureEvent = createDummyFunction$$module$as3shim$packages("StageCaptureEvent");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.Event});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "checksum", {get:createDummyFunction$$module$as3shim$packages({name:"checksum", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "url", {get:createDummyFunction$$module$as3shim$packages({name:"url", returnType:"String"})});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CAPTURE", "capture");
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.events.Event"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Configuration = createDummyFunction$$module$as3shim$packages("Configuration");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "testAutomationConfiguration", {get:createDummyFunction$$module$as3shim$packages({name:"testAutomationConfiguration", returnType:"String"})});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.desktop");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ClipboardFormats = createDummyFunction$$module$as3shim$packages("ClipboardFormats");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BITMAP_FORMAT", "air:bitmap");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FILE_LIST_FORMAT", "air:file list");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FILE_PROMISE_LIST_FORMAT", "air:file promise list");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "HTML_FORMAT", "air:html");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "RICH_TEXT_FORMAT", "air:rtf");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TEXT_FORMAT", "air:text");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "URL_FORMAT", "air:url");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ClipboardTransferMode = createDummyFunction$$module$as3shim$packages("ClipboardTransferMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CLONE_ONLY", "cloneOnly");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CLONE_PREFERRED", "clonePreferred");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ORIGINAL_ONLY", "originalOnly");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ORIGINAL_PREFERRED", "originalPreferred");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Clipboard = createDummyFunction$$module$as3shim$packages("Clipboard");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "generalClipboard", {get:createDummyFunction$$module$as3shim$packages({name:"generalClipboard", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "formats", {get:createDummyFunction$$module$as3shim$packages({name:"formats", returnType:"Array"})});
  proto$$module$as3shim$packages.clear = createDummyFunction$$module$as3shim$packages({name:"clear", returnType:"void"});
  proto$$module$as3shim$packages.clearData = createDummyFunction$$module$as3shim$packages({name:"clearData", returnType:"void"});
  proto$$module$as3shim$packages.getData = createDummyFunction$$module$as3shim$packages({name:"getData", returnType:"Object"});
  proto$$module$as3shim$packages.hasFormat = createDummyFunction$$module$as3shim$packages({name:"hasFormat", returnType:"Boolean"});
  proto$$module$as3shim$packages.setData = createDummyFunction$$module$as3shim$packages({name:"setData", returnType:"Boolean"});
  proto$$module$as3shim$packages.setDataHandler = createDummyFunction$$module$as3shim$packages({name:"setDataHandler", returnType:"Boolean"});
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.display;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NativeMenu = createDummyFunction$$module$as3shim$packages("NativeMenu");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DisplayObject;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Bitmap = createDummyFunction$$module$as3shim$packages("Bitmap");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.DisplayObject});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bitmapData", {get:createDummyFunction$$module$as3shim$packages({name:"bitmapData", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pixelSnapping", {get:createDummyFunction$$module$as3shim$packages({name:"pixelSnapping", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "smoothing", {get:createDummyFunction$$module$as3shim$packages({name:"smoothing", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bitmapData", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pixelSnapping", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "smoothing", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.InteractiveObject;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DisplayObjectContainer;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FocusDirection = createDummyFunction$$module$as3shim$packages("FocusDirection");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BOTTOM", "bottom");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TOP", "top");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Stage;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsEndFill = createDummyFunction$$module$as3shim$packages("GraphicsEndFill");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderJob = createDummyFunction$$module$as3shim$packages("ShaderJob");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "height", {get:createDummyFunction$$module$as3shim$packages({name:"height", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "progress", {get:createDummyFunction$$module$as3shim$packages({name:"progress", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shader", {get:createDummyFunction$$module$as3shim$packages({name:"shader", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "width", {get:createDummyFunction$$module$as3shim$packages({name:"width", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "height", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shader", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "width", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.cancel = createDummyFunction$$module$as3shim$packages({name:"cancel", returnType:"void"});
  proto$$module$as3shim$packages.start = createDummyFunction$$module$as3shim$packages({name:"start", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsShaderFill = createDummyFunction$$module$as3shim$packages("GraphicsShaderFill");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageQuality;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsSolidFill = createDummyFunction$$module$as3shim$packages("GraphicsSolidFill");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderParameterType = createDummyFunction$$module$as3shim$packages("ShaderParameterType");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BOOL2", "bool2");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BOOL3", "bool3");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BOOL4", "bool4");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BOOL", "bool");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FLOAT2", "float2");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FLOAT3", "float3");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FLOAT4", "float4");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FLOAT", "float");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INT2", "int2");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INT3", "int3");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INT4", "int4");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INT", "int");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MATRIX2X2", "matrix2x2");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MATRIX3X3", "matrix3x3");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MATRIX4X4", "matrix4x4");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MorphShape = createDummyFunction$$module$as3shim$packages("MorphShape");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.DisplayObject});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TriangleCulling = createDummyFunction$$module$as3shim$packages("TriangleCulling");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NEGATIVE", "negative");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "POSITIVE", "positive");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsTrianglePath = createDummyFunction$$module$as3shim$packages("GraphicsTrianglePath");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "culling", {get:createDummyFunction$$module$as3shim$packages({name:"culling", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "culling", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.PixelSnapping = createDummyFunction$$module$as3shim$packages("PixelSnapping");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALWAYS", "always");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTO", "auto");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NEVER", "never");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Shape;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderData = createDummyFunction$$module$as3shim$packages("ShaderData");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SWFVersion;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ColorCorrectionSupport;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LineScaleMode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageScaleMode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BitmapData = createDummyFunction$$module$as3shim$packages("BitmapData");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "height", {get:createDummyFunction$$module$as3shim$packages({name:"height", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rect", {get:createDummyFunction$$module$as3shim$packages({name:"rect", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "transparent", {get:createDummyFunction$$module$as3shim$packages({name:"transparent", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "width", {get:createDummyFunction$$module$as3shim$packages({name:"width", returnType:"int"})});
  proto$$module$as3shim$packages.applyFilter = createDummyFunction$$module$as3shim$packages({name:"applyFilter", returnType:"void"});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.display.BitmapData"});
  proto$$module$as3shim$packages.colorTransform = createDummyFunction$$module$as3shim$packages({name:"colorTransform", returnType:"void"});
  proto$$module$as3shim$packages.compare = createDummyFunction$$module$as3shim$packages({name:"compare", returnType:"Object"});
  proto$$module$as3shim$packages.copyChannel = createDummyFunction$$module$as3shim$packages({name:"copyChannel", returnType:"void"});
  proto$$module$as3shim$packages.copyPixels = createDummyFunction$$module$as3shim$packages({name:"copyPixels", returnType:"void"});
  proto$$module$as3shim$packages.dispose = createDummyFunction$$module$as3shim$packages({name:"dispose", returnType:"void"});
  proto$$module$as3shim$packages.draw = createDummyFunction$$module$as3shim$packages({name:"draw", returnType:"void"});
  proto$$module$as3shim$packages.fillRect = createDummyFunction$$module$as3shim$packages({name:"fillRect", returnType:"void"});
  proto$$module$as3shim$packages.floodFill = createDummyFunction$$module$as3shim$packages({name:"floodFill", returnType:"void"});
  proto$$module$as3shim$packages.generateFilterRect = createDummyFunction$$module$as3shim$packages({name:"generateFilterRect", returnType:"flash.geom.Rectangle"});
  proto$$module$as3shim$packages.getColorBoundsRect = createDummyFunction$$module$as3shim$packages({name:"getColorBoundsRect", returnType:"flash.geom.Rectangle"});
  proto$$module$as3shim$packages.getPixel = createDummyFunction$$module$as3shim$packages({name:"getPixel", returnType:"uint"});
  proto$$module$as3shim$packages.getPixel32 = createDummyFunction$$module$as3shim$packages({name:"getPixel32", returnType:"uint"});
  proto$$module$as3shim$packages.getPixels = createDummyFunction$$module$as3shim$packages({name:"getPixels", returnType:"flash.utils.ByteArray"});
  proto$$module$as3shim$packages.getVector = createDummyFunction$$module$as3shim$packages({name:"getVector", returnType:""});
  proto$$module$as3shim$packages.histogram = createDummyFunction$$module$as3shim$packages({name:"histogram", returnType:""});
  proto$$module$as3shim$packages.hitTest = createDummyFunction$$module$as3shim$packages({name:"hitTest", returnType:"Boolean"});
  proto$$module$as3shim$packages.lock = createDummyFunction$$module$as3shim$packages({name:"lock", returnType:"void"});
  proto$$module$as3shim$packages.merge = createDummyFunction$$module$as3shim$packages({name:"merge", returnType:"void"});
  proto$$module$as3shim$packages.noise = createDummyFunction$$module$as3shim$packages({name:"noise", returnType:"void"});
  proto$$module$as3shim$packages.paletteMap = createDummyFunction$$module$as3shim$packages({name:"paletteMap", returnType:"void"});
  proto$$module$as3shim$packages.perlinNoise = createDummyFunction$$module$as3shim$packages({name:"perlinNoise", returnType:"void"});
  proto$$module$as3shim$packages.pixelDissolve = createDummyFunction$$module$as3shim$packages({name:"pixelDissolve", returnType:"int"});
  proto$$module$as3shim$packages.scroll = createDummyFunction$$module$as3shim$packages({name:"scroll", returnType:"void"});
  proto$$module$as3shim$packages.setPixel = createDummyFunction$$module$as3shim$packages({name:"setPixel", returnType:"void"});
  proto$$module$as3shim$packages.setPixel32 = createDummyFunction$$module$as3shim$packages({name:"setPixel32", returnType:"void"});
  proto$$module$as3shim$packages.setPixels = createDummyFunction$$module$as3shim$packages({name:"setPixels", returnType:"void"});
  proto$$module$as3shim$packages.setVector = createDummyFunction$$module$as3shim$packages({name:"setVector", returnType:"void"});
  proto$$module$as3shim$packages.threshold = createDummyFunction$$module$as3shim$packages({name:"threshold", returnType:"uint"});
  proto$$module$as3shim$packages.unlock = createDummyFunction$$module$as3shim$packages({name:"unlock", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NativeMenuItem = createDummyFunction$$module$as3shim$packages("NativeMenuItem");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enabled", {get:createDummyFunction$$module$as3shim$packages({name:"enabled", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enabled", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderParameter = createDummyFunction$$module$as3shim$packages("ShaderParameter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "index", {get:createDummyFunction$$module$as3shim$packages({name:"index", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "value", {get:createDummyFunction$$module$as3shim$packages({name:"value", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "value", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsBitmapFill = createDummyFunction$$module$as3shim$packages("GraphicsBitmapFill");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LoaderInfo;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Shader = createDummyFunction$$module$as3shim$packages("Shader");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "data", {get:createDummyFunction$$module$as3shim$packages({name:"data", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "precisionHint", {get:createDummyFunction$$module$as3shim$packages({name:"precisionHint", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "byteCode", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "data", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "precisionHint", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsGradientFill = createDummyFunction$$module$as3shim$packages("GraphicsGradientFill");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "interpolationMethod", {get:createDummyFunction$$module$as3shim$packages({name:"interpolationMethod", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "spreadMethod", {get:createDummyFunction$$module$as3shim$packages({name:"spreadMethod", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "interpolationMethod", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "spreadMethod", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FrameLabel;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Scene = createDummyFunction$$module$as3shim$packages("Scene");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "labels", {get:createDummyFunction$$module$as3shim$packages({name:"labels", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "name", {get:createDummyFunction$$module$as3shim$packages({name:"name", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "numFrames", {get:createDummyFunction$$module$as3shim$packages({name:"numFrames", returnType:"int"})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SpreadMethod = createDummyFunction$$module$as3shim$packages("SpreadMethod");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PAD", "pad");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "REFLECT", "reflect");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "REPEAT", "repeat");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Graphics;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BitmapDataChannel = createDummyFunction$$module$as3shim$packages("BitmapDataChannel");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALPHA", 8);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BLUE", 4);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "GREEN", 2);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "RED", 1);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BlendMode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsPath = createDummyFunction$$module$as3shim$packages("GraphicsPath");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "winding", {get:createDummyFunction$$module$as3shim$packages({name:"winding", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "winding", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.curveTo = createDummyFunction$$module$as3shim$packages({name:"curveTo", returnType:"void"});
  proto$$module$as3shim$packages.lineTo = createDummyFunction$$module$as3shim$packages({name:"lineTo", returnType:"void"});
  proto$$module$as3shim$packages.moveTo = createDummyFunction$$module$as3shim$packages({name:"moveTo", returnType:"void"});
  proto$$module$as3shim$packages.wideLineTo = createDummyFunction$$module$as3shim$packages({name:"wideLineTo", returnType:"void"});
  proto$$module$as3shim$packages.wideMoveTo = createDummyFunction$$module$as3shim$packages({name:"wideMoveTo", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageAlign;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsStroke = createDummyFunction$$module$as3shim$packages("GraphicsStroke");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "caps", {get:createDummyFunction$$module$as3shim$packages({name:"caps", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "joints", {get:createDummyFunction$$module$as3shim$packages({name:"joints", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "scaleMode", {get:createDummyFunction$$module$as3shim$packages({name:"scaleMode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "caps", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "joints", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "scaleMode", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageDisplayState;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ActionScriptVersion = createDummyFunction$$module$as3shim$packages("ActionScriptVersion");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ACTIONSCRIPT2", 2);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ACTIONSCRIPT3", 3);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AVM1Movie = createDummyFunction$$module$as3shim$packages("AVM1Movie");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.DisplayObject});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.addCallback = createDummyFunction$$module$as3shim$packages({name:"addCallback", returnType:"void"});
  proto$$module$as3shim$packages.call = createDummyFunction$$module$as3shim$packages({name:"call", returnType:""});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Sprite;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.JointStyle = createDummyFunction$$module$as3shim$packages("JointStyle");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BEVEL", "bevel");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MITER", "miter");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROUND", "round");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderPrecision = createDummyFunction$$module$as3shim$packages("ShaderPrecision");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FAST", "fast");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FULL", "full");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderInput = createDummyFunction$$module$as3shim$packages("ShaderInput");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "channels", {get:createDummyFunction$$module$as3shim$packages({name:"channels", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "height", {get:createDummyFunction$$module$as3shim$packages({name:"height", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "index", {get:createDummyFunction$$module$as3shim$packages({name:"index", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "input", {get:createDummyFunction$$module$as3shim$packages({name:"input", returnType:"Object"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "width", {get:createDummyFunction$$module$as3shim$packages({name:"width", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "height", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "input", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "width", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.InterpolationMethod;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SimpleButton;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GradientType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Loader;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ColorCorrection;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CapsStyle = createDummyFunction$$module$as3shim$packages("CapsStyle");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROUND", "round");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SQUARE", "square");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsPathWinding = createDummyFunction$$module$as3shim$packages("GraphicsPathWinding");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EVEN_ODD", "evenOdd");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NON_ZERO", "nonZero");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicsPathCommand = createDummyFunction$$module$as3shim$packages("GraphicsPathCommand");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CURVE_TO", 3);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LINE_TO", 2);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MOVE_TO", 1);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NO_OP", 0);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "WIDE_LINE_TO", 5);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "WIDE_MOVE_TO", 4);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MovieClip;
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.errors;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.IOError = createDummyFunction$$module$as3shim$packages("IOError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.EOFError;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MemoryError = createDummyFunction$$module$as3shim$packages("MemoryError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.IllegalOperationError = createDummyFunction$$module$as3shim$packages("IllegalOperationError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StackOverflowError = createDummyFunction$$module$as3shim$packages("StackOverflowError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ScriptTimeoutError = createDummyFunction$$module$as3shim$packages("ScriptTimeoutError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.InvalidSWFError = createDummyFunction$$module$as3shim$packages("InvalidSWFError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMManagerError = createDummyFunction$$module$as3shim$packages("DRMManagerError");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.Error});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "subErrorID", {get:createDummyFunction$$module$as3shim$packages({name:"subErrorID", returnType:"int"})});
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.events;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.EventDispatcher;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.EventPhase;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Event;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.KeyboardEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoftKeyboardTrigger;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.UncaughtErrorEvents;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StatusEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ProgressEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.IOErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AsyncErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TimerEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMAuthenticateEvent = createDummyFunction$$module$as3shim$packages("DRMAuthenticateEvent");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.Event});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "authenticationType", {get:createDummyFunction$$module$as3shim$packages({name:"authenticationType", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "header", {get:createDummyFunction$$module$as3shim$packages({name:"header", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "netstream", {get:createDummyFunction$$module$as3shim$packages({name:"netstream", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "passwordPrompt", {get:createDummyFunction$$module$as3shim$packages({name:"passwordPrompt", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "urlPrompt", {get:createDummyFunction$$module$as3shim$packages({name:"urlPrompt", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "usernamePrompt", {get:createDummyFunction$$module$as3shim$packages({name:"usernamePrompt", returnType:"String"})});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTHENTICATION_TYPE_DRM", "drm");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTHENTICATION_TYPE_PROXY", "proxy");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DRM_AUTHENTICATE", "drmAuthenticate");
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.events.Event"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SampleDataEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AccelerometerEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMStatusEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStatusEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetDataEvent = createDummyFunction$$module$as3shim$packages("NetDataEvent");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.Event});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "info", {get:createDummyFunction$$module$as3shim$packages({name:"info", returnType:"Object"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "timestamp", {get:createDummyFunction$$module$as3shim$packages({name:"timestamp", returnType:"Number"})});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MEDIA_TYPE_DATA", "mediaTypeData");
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.events.Event"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.IMEEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ActivityEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.VideoEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GestureEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.PressAndTapGestureEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageVideoAvailabilityEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TransformGestureEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DataEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FocusEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.HTTPStatusEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMAuthenticationErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetFilterEvent = createDummyFunction$$module$as3shim$packages("NetFilterEvent");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.Event});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.events.Event"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GesturePhase;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SyncEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TouchEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MouseEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoftKeyboardEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMAuthenticationCompleteEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SecurityErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetMonitorEvent = createDummyFunction$$module$as3shim$packages("NetMonitorEvent");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.Event});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "netStream", {get:createDummyFunction$$module$as3shim$packages({name:"netStream", returnType:""})});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NET_STREAM_CREATE", "netStreamCreate");
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.events.Event"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FullScreenEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageVideoEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.UncaughtErrorEvent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GeolocationEvent = createDummyFunction$$module$as3shim$packages("GeolocationEvent");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.Event});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "altitude", {get:createDummyFunction$$module$as3shim$packages({name:"altitude", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "heading", {get:createDummyFunction$$module$as3shim$packages({name:"heading", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "horizontalAccuracy", {get:createDummyFunction$$module$as3shim$packages({name:"horizontalAccuracy", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "latitude", {get:createDummyFunction$$module$as3shim$packages({name:"latitude", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "longitude", {get:createDummyFunction$$module$as3shim$packages({name:"longitude", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "speed", {get:createDummyFunction$$module$as3shim$packages({name:"speed", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "timestamp", {get:createDummyFunction$$module$as3shim$packages({name:"timestamp", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "verticalAccuracy", {get:createDummyFunction$$module$as3shim$packages({name:"verticalAccuracy", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "altitude", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "heading", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "horizontalAccuracy", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "latitude", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "longitude", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "speed", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "timestamp", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "verticalAccuracy", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UPDATE", "update");
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.events.Event"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ContextMenuEvent;
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.external;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ExternalInterface;
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.filters;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DisplacementMapFilterMode = createDummyFunction$$module$as3shim$packages("DisplacementMapFilterMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CLAMP", "clamp");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "COLOR", "color");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "IGNORE", "ignore");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "WRAP", "wrap");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BitmapFilter;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DropShadowFilter = createDummyFunction$$module$as3shim$packages("DropShadowFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {get:createDummyFunction$$module$as3shim$packages({name:"alpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {get:createDummyFunction$$module$as3shim$packages({name:"angle", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {get:createDummyFunction$$module$as3shim$packages({name:"blurX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {get:createDummyFunction$$module$as3shim$packages({name:"blurY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {get:createDummyFunction$$module$as3shim$packages({name:"color", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {get:createDummyFunction$$module$as3shim$packages({name:"distance", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "hideObject", {get:createDummyFunction$$module$as3shim$packages({name:"hideObject", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "inner", {get:createDummyFunction$$module$as3shim$packages({name:"inner", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {get:createDummyFunction$$module$as3shim$packages({name:"knockout", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {get:createDummyFunction$$module$as3shim$packages({name:"strength", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "hideObject", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "inner", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GradientGlowFilter = createDummyFunction$$module$as3shim$packages("GradientGlowFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alphas", {get:createDummyFunction$$module$as3shim$packages({name:"alphas", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {get:createDummyFunction$$module$as3shim$packages({name:"angle", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {get:createDummyFunction$$module$as3shim$packages({name:"blurX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {get:createDummyFunction$$module$as3shim$packages({name:"blurY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "colors", {get:createDummyFunction$$module$as3shim$packages({name:"colors", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {get:createDummyFunction$$module$as3shim$packages({name:"distance", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {get:createDummyFunction$$module$as3shim$packages({name:"knockout", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ratios", {get:createDummyFunction$$module$as3shim$packages({name:"ratios", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {get:createDummyFunction$$module$as3shim$packages({name:"strength", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alphas", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "colors", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ratios", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ConvolutionFilter = createDummyFunction$$module$as3shim$packages("ConvolutionFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {get:createDummyFunction$$module$as3shim$packages({name:"alpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bias", {get:createDummyFunction$$module$as3shim$packages({name:"bias", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clamp", {get:createDummyFunction$$module$as3shim$packages({name:"clamp", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {get:createDummyFunction$$module$as3shim$packages({name:"color", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "divisor", {get:createDummyFunction$$module$as3shim$packages({name:"divisor", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrix", {get:createDummyFunction$$module$as3shim$packages({name:"matrix", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrixX", {get:createDummyFunction$$module$as3shim$packages({name:"matrixX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrixY", {get:createDummyFunction$$module$as3shim$packages({name:"matrixY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "preserveAlpha", {get:createDummyFunction$$module$as3shim$packages({name:"preserveAlpha", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bias", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clamp", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "divisor", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrix", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrixX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrixY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "preserveAlpha", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BitmapFilterQuality = createDummyFunction$$module$as3shim$packages("BitmapFilterQuality");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "HIGH", 3);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOW", 1);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MEDIUM", 2);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BevelFilter = createDummyFunction$$module$as3shim$packages("BevelFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {get:createDummyFunction$$module$as3shim$packages({name:"angle", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {get:createDummyFunction$$module$as3shim$packages({name:"blurX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {get:createDummyFunction$$module$as3shim$packages({name:"blurY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {get:createDummyFunction$$module$as3shim$packages({name:"distance", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "highlightAlpha", {get:createDummyFunction$$module$as3shim$packages({name:"highlightAlpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "highlightColor", {get:createDummyFunction$$module$as3shim$packages({name:"highlightColor", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {get:createDummyFunction$$module$as3shim$packages({name:"knockout", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shadowAlpha", {get:createDummyFunction$$module$as3shim$packages({name:"shadowAlpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shadowColor", {get:createDummyFunction$$module$as3shim$packages({name:"shadowColor", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {get:createDummyFunction$$module$as3shim$packages({name:"strength", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "highlightAlpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "highlightColor", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shadowAlpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shadowColor", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BitmapFilterType = createDummyFunction$$module$as3shim$packages("BitmapFilterType");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FULL", "full");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INNER", "inner");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OUTER", "outer");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DisplacementMapFilter = createDummyFunction$$module$as3shim$packages("DisplacementMapFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {get:createDummyFunction$$module$as3shim$packages({name:"alpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {get:createDummyFunction$$module$as3shim$packages({name:"color", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "componentX", {get:createDummyFunction$$module$as3shim$packages({name:"componentX", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "componentY", {get:createDummyFunction$$module$as3shim$packages({name:"componentY", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mapBitmap", {get:createDummyFunction$$module$as3shim$packages({name:"mapBitmap", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mapPoint", {get:createDummyFunction$$module$as3shim$packages({name:"mapPoint", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mode", {get:createDummyFunction$$module$as3shim$packages({name:"mode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "scaleX", {get:createDummyFunction$$module$as3shim$packages({name:"scaleX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "scaleY", {get:createDummyFunction$$module$as3shim$packages({name:"scaleY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "componentX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "componentY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mapBitmap", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mapPoint", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mode", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "scaleX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "scaleY", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BlurFilter;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ColorMatrixFilter = createDummyFunction$$module$as3shim$packages("ColorMatrixFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrix", {get:createDummyFunction$$module$as3shim$packages({name:"matrix", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "matrix", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GradientBevelFilter = createDummyFunction$$module$as3shim$packages("GradientBevelFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alphas", {get:createDummyFunction$$module$as3shim$packages({name:"alphas", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {get:createDummyFunction$$module$as3shim$packages({name:"angle", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {get:createDummyFunction$$module$as3shim$packages({name:"blurX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {get:createDummyFunction$$module$as3shim$packages({name:"blurY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "colors", {get:createDummyFunction$$module$as3shim$packages({name:"colors", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {get:createDummyFunction$$module$as3shim$packages({name:"distance", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {get:createDummyFunction$$module$as3shim$packages({name:"knockout", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ratios", {get:createDummyFunction$$module$as3shim$packages({name:"ratios", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {get:createDummyFunction$$module$as3shim$packages({name:"strength", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alphas", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "angle", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "colors", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "distance", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ratios", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ShaderFilter = createDummyFunction$$module$as3shim$packages("ShaderFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bottomExtension", {get:createDummyFunction$$module$as3shim$packages({name:"bottomExtension", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftExtension", {get:createDummyFunction$$module$as3shim$packages({name:"leftExtension", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightExtension", {get:createDummyFunction$$module$as3shim$packages({name:"rightExtension", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shader", {get:createDummyFunction$$module$as3shim$packages({name:"shader", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "topExtension", {get:createDummyFunction$$module$as3shim$packages({name:"topExtension", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bottomExtension", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftExtension", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightExtension", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "shader", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "topExtension", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GlowFilter = createDummyFunction$$module$as3shim$packages("GlowFilter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.filters.BitmapFilter});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {get:createDummyFunction$$module$as3shim$packages({name:"alpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {get:createDummyFunction$$module$as3shim$packages({name:"blurX", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {get:createDummyFunction$$module$as3shim$packages({name:"blurY", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {get:createDummyFunction$$module$as3shim$packages({name:"color", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "inner", {get:createDummyFunction$$module$as3shim$packages({name:"inner", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {get:createDummyFunction$$module$as3shim$packages({name:"knockout", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {get:createDummyFunction$$module$as3shim$packages({name:"strength", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurX", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "blurY", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "inner", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "knockout", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "strength", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.filters.BitmapFilter"});
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.geom;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.PerspectiveProjection = createDummyFunction$$module$as3shim$packages("PerspectiveProjection");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fieldOfView", {get:createDummyFunction$$module$as3shim$packages({name:"fieldOfView", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "focalLength", {get:createDummyFunction$$module$as3shim$packages({name:"focalLength", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "projectionCenter", {get:createDummyFunction$$module$as3shim$packages({name:"projectionCenter", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fieldOfView", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "focalLength", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "projectionCenter", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.toMatrix3D = createDummyFunction$$module$as3shim$packages({name:"toMatrix3D", returnType:"flash.geom.Matrix3D"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Matrix = createDummyFunction$$module$as3shim$packages("Matrix");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.geom.Matrix"});
  proto$$module$as3shim$packages.concat = createDummyFunction$$module$as3shim$packages({name:"concat", returnType:"void"});
  proto$$module$as3shim$packages.createBox = createDummyFunction$$module$as3shim$packages({name:"createBox", returnType:"void"});
  proto$$module$as3shim$packages.createGradientBox = createDummyFunction$$module$as3shim$packages({name:"createGradientBox", returnType:"void"});
  proto$$module$as3shim$packages.deltaTransformPoint = createDummyFunction$$module$as3shim$packages({name:"deltaTransformPoint", returnType:"flash.geom.Point"});
  proto$$module$as3shim$packages.identity = createDummyFunction$$module$as3shim$packages({name:"identity", returnType:"void"});
  proto$$module$as3shim$packages.invert = createDummyFunction$$module$as3shim$packages({name:"invert", returnType:"void"});
  proto$$module$as3shim$packages.rotate = createDummyFunction$$module$as3shim$packages({name:"rotate", returnType:"void"});
  proto$$module$as3shim$packages.scale = createDummyFunction$$module$as3shim$packages({name:"scale", returnType:"void"});
  proto$$module$as3shim$packages.transformPoint = createDummyFunction$$module$as3shim$packages({name:"transformPoint", returnType:"flash.geom.Point"});
  proto$$module$as3shim$packages.translate = createDummyFunction$$module$as3shim$packages({name:"translate", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Rectangle;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Point;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Transform;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Matrix3D = createDummyFunction$$module$as3shim$packages("Matrix3D");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "determinant", {get:createDummyFunction$$module$as3shim$packages({name:"determinant", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "position", {get:createDummyFunction$$module$as3shim$packages({name:"position", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rawData", {get:createDummyFunction$$module$as3shim$packages({name:"rawData", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "position", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rawData", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.interpolate = createDummyFunction$$module$as3shim$packages({name:"interpolate", returnType:"flash.geom.Matrix3D"});
  proto$$module$as3shim$packages.append = createDummyFunction$$module$as3shim$packages({name:"append", returnType:"void"});
  proto$$module$as3shim$packages.appendRotation = createDummyFunction$$module$as3shim$packages({name:"appendRotation", returnType:"void"});
  proto$$module$as3shim$packages.appendScale = createDummyFunction$$module$as3shim$packages({name:"appendScale", returnType:"void"});
  proto$$module$as3shim$packages.appendTranslation = createDummyFunction$$module$as3shim$packages({name:"appendTranslation", returnType:"void"});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.geom.Matrix3D"});
  proto$$module$as3shim$packages.decompose = createDummyFunction$$module$as3shim$packages({name:"decompose", returnType:""});
  proto$$module$as3shim$packages.deltaTransformVector = createDummyFunction$$module$as3shim$packages({name:"deltaTransformVector", returnType:"flash.geom.Vector3D"});
  proto$$module$as3shim$packages.identity = createDummyFunction$$module$as3shim$packages({name:"identity", returnType:"void"});
  proto$$module$as3shim$packages.interpolateTo = createDummyFunction$$module$as3shim$packages({name:"interpolateTo", returnType:"void"});
  proto$$module$as3shim$packages.invert = createDummyFunction$$module$as3shim$packages({name:"invert", returnType:"Boolean"});
  proto$$module$as3shim$packages.pointAt = createDummyFunction$$module$as3shim$packages({name:"pointAt", returnType:"void"});
  proto$$module$as3shim$packages.prepend = createDummyFunction$$module$as3shim$packages({name:"prepend", returnType:"void"});
  proto$$module$as3shim$packages.prependRotation = createDummyFunction$$module$as3shim$packages({name:"prependRotation", returnType:"void"});
  proto$$module$as3shim$packages.prependScale = createDummyFunction$$module$as3shim$packages({name:"prependScale", returnType:"void"});
  proto$$module$as3shim$packages.prependTranslation = createDummyFunction$$module$as3shim$packages({name:"prependTranslation", returnType:"void"});
  proto$$module$as3shim$packages.recompose = createDummyFunction$$module$as3shim$packages({name:"recompose", returnType:"Boolean"});
  proto$$module$as3shim$packages.transformVector = createDummyFunction$$module$as3shim$packages({name:"transformVector", returnType:"flash.geom.Vector3D"});
  proto$$module$as3shim$packages.transformVectors = createDummyFunction$$module$as3shim$packages({name:"transformVectors", returnType:"void"});
  proto$$module$as3shim$packages.transpose = createDummyFunction$$module$as3shim$packages({name:"transpose", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Utils3D = createDummyFunction$$module$as3shim$packages("Utils3D");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages.pointTowards = createDummyFunction$$module$as3shim$packages({name:"pointTowards", returnType:"flash.geom.Matrix3D"});
  Klass$$module$as3shim$packages.projectVector = createDummyFunction$$module$as3shim$packages({name:"projectVector", returnType:"flash.geom.Vector3D"});
  Klass$$module$as3shim$packages.projectVectors = createDummyFunction$$module$as3shim$packages({name:"projectVectors", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Orientation3D = createDummyFunction$$module$as3shim$packages("Orientation3D");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AXIS_ANGLE", "axisAngle");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EULER_ANGLES", "eulerAngles");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "QUATERNION", "quaternion");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Vector3D = createDummyFunction$$module$as3shim$packages("Vector3D");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {get:createDummyFunction$$module$as3shim$packages({name:"length", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lengthSquared", {get:createDummyFunction$$module$as3shim$packages({name:"lengthSquared", returnType:"Number"})});
  Klass$$module$as3shim$packages.angleBetween = createDummyFunction$$module$as3shim$packages({name:"angleBetween", returnType:"Number"});
  Klass$$module$as3shim$packages.distance = createDummyFunction$$module$as3shim$packages({name:"distance", returnType:"Number"});
  proto$$module$as3shim$packages.add = createDummyFunction$$module$as3shim$packages({name:"add", returnType:"flash.geom.Vector3D"});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.geom.Vector3D"});
  proto$$module$as3shim$packages.crossProduct = createDummyFunction$$module$as3shim$packages({name:"crossProduct", returnType:"flash.geom.Vector3D"});
  proto$$module$as3shim$packages.decrementBy = createDummyFunction$$module$as3shim$packages({name:"decrementBy", returnType:"void"});
  proto$$module$as3shim$packages.dotProduct = createDummyFunction$$module$as3shim$packages({name:"dotProduct", returnType:"Number"});
  proto$$module$as3shim$packages.equals = createDummyFunction$$module$as3shim$packages({name:"equals", returnType:"Boolean"});
  proto$$module$as3shim$packages.incrementBy = createDummyFunction$$module$as3shim$packages({name:"incrementBy", returnType:"void"});
  proto$$module$as3shim$packages.nearEquals = createDummyFunction$$module$as3shim$packages({name:"nearEquals", returnType:"Boolean"});
  proto$$module$as3shim$packages.negate = createDummyFunction$$module$as3shim$packages({name:"negate", returnType:"void"});
  proto$$module$as3shim$packages.normalize = createDummyFunction$$module$as3shim$packages({name:"normalize", returnType:"Number"});
  proto$$module$as3shim$packages.project = createDummyFunction$$module$as3shim$packages({name:"project", returnType:"void"});
  proto$$module$as3shim$packages.scaleBy = createDummyFunction$$module$as3shim$packages({name:"scaleBy", returnType:"void"});
  proto$$module$as3shim$packages.subtract = createDummyFunction$$module$as3shim$packages({name:"subtract", returnType:"flash.geom.Vector3D"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ColorTransform;
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.globalization");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DateTimeFormatter = createDummyFunction$$module$as3shim$packages("DateTimeFormatter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "actualLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"actualLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastOperationStatus", {get:createDummyFunction$$module$as3shim$packages({name:"lastOperationStatus", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "requestedLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"requestedLocaleIDName", returnType:"String"})});
  Klass$$module$as3shim$packages.getAvailableLocaleIDNames = createDummyFunction$$module$as3shim$packages({name:"getAvailableLocaleIDNames", returnType:""});
  proto$$module$as3shim$packages.format = createDummyFunction$$module$as3shim$packages({name:"format", returnType:"String"});
  proto$$module$as3shim$packages.formatUTC = createDummyFunction$$module$as3shim$packages({name:"formatUTC", returnType:"String"});
  proto$$module$as3shim$packages.getDateStyle = createDummyFunction$$module$as3shim$packages({name:"getDateStyle", returnType:"String"});
  proto$$module$as3shim$packages.getDateTimePattern = createDummyFunction$$module$as3shim$packages({name:"getDateTimePattern", returnType:"String"});
  proto$$module$as3shim$packages.getFirstWeekday = createDummyFunction$$module$as3shim$packages({name:"getFirstWeekday", returnType:"int"});
  proto$$module$as3shim$packages.getMonthNames = createDummyFunction$$module$as3shim$packages({name:"getMonthNames", returnType:""});
  proto$$module$as3shim$packages.getTimeStyle = createDummyFunction$$module$as3shim$packages({name:"getTimeStyle", returnType:"String"});
  proto$$module$as3shim$packages.getWeekdayNames = createDummyFunction$$module$as3shim$packages({name:"getWeekdayNames", returnType:""});
  proto$$module$as3shim$packages.setDateTimePattern = createDummyFunction$$module$as3shim$packages({name:"setDateTimePattern", returnType:"void"});
  proto$$module$as3shim$packages.setDateTimeStyles = createDummyFunction$$module$as3shim$packages({name:"setDateTimeStyles", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CollatorMode = createDummyFunction$$module$as3shim$packages("CollatorMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MATCHING", "matching");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SORTING", "sorting");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DateTimeNameContext = createDummyFunction$$module$as3shim$packages("DateTimeNameContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FORMAT", "format");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "STANDALONE", "standalone");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LastOperationStatus = createDummyFunction$$module$as3shim$packages("LastOperationStatus");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BUFFER_OVERFLOW_ERROR", "bufferOverflowError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ERROR_CODE_UNKNOWN", "errorCodeUnknown");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ILLEGAL_ARGUMENT_ERROR", "illegalArgumentError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INDEX_OUT_OF_BOUNDS_ERROR", "indexOutOfBoundsError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INVALID_ATTR_VALUE", "invalidAttrValue");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INVALID_CHAR_FOUND", "invalidCharFound");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MEMORY_ALLOCATION_ERROR", "memoryAllocationError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NO_ERROR", "noError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NUMBER_OVERFLOW_ERROR", "numberOverflowError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PARSE_ERROR", "parseError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PATTERN_SYNTAX_ERROR", "patternSyntaxError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PLATFORM_API_FAILED", "platformAPIFailed");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TRUNCATED_CHAR_FOUND", "truncatedCharFound");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNEXPECTED_TOKEN", "unexpectedToken");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNSUPPORTED_ERROR", "unsupportedError");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "USING_DEFAULT_WARNING", "usingDefaultWarning");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "USING_FALLBACK_WARNING", "usingFallbackWarning");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CurrencyParseResult = createDummyFunction$$module$as3shim$packages("CurrencyParseResult");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "currencyString", {get:createDummyFunction$$module$as3shim$packages({name:"currencyString", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "value", {get:createDummyFunction$$module$as3shim$packages({name:"value", returnType:"Number"})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Collator = createDummyFunction$$module$as3shim$packages("Collator");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "actualLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"actualLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreCase", {get:createDummyFunction$$module$as3shim$packages({name:"ignoreCase", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreCharacterWidth", {get:createDummyFunction$$module$as3shim$packages({name:"ignoreCharacterWidth", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreDiacritics", {get:createDummyFunction$$module$as3shim$packages({name:"ignoreDiacritics", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreKanaType", {get:createDummyFunction$$module$as3shim$packages({name:"ignoreKanaType", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreSymbols", {get:createDummyFunction$$module$as3shim$packages({name:"ignoreSymbols", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastOperationStatus", {get:createDummyFunction$$module$as3shim$packages({name:"lastOperationStatus", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "numericComparison", {get:createDummyFunction$$module$as3shim$packages({name:"numericComparison", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "requestedLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"requestedLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreCase", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreCharacterWidth", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreDiacritics", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreKanaType", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ignoreSymbols", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "numericComparison", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.getAvailableLocaleIDNames = createDummyFunction$$module$as3shim$packages({name:"getAvailableLocaleIDNames", returnType:""});
  proto$$module$as3shim$packages.compare = createDummyFunction$$module$as3shim$packages({name:"compare", returnType:"int"});
  proto$$module$as3shim$packages.equals = createDummyFunction$$module$as3shim$packages({name:"equals", returnType:"Boolean"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DateTimeStyle = createDummyFunction$$module$as3shim$packages("DateTimeStyle");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CUSTOM", "custom");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LONG", "long");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MEDIUM", "medium");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SHORT", "short");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LocaleID = createDummyFunction$$module$as3shim$packages("LocaleID");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastOperationStatus", {get:createDummyFunction$$module$as3shim$packages({name:"lastOperationStatus", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "name", {get:createDummyFunction$$module$as3shim$packages({name:"name", returnType:"String"})});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEFAULT", "i-default");
  Klass$$module$as3shim$packages.determinePreferredLocales = createDummyFunction$$module$as3shim$packages({name:"determinePreferredLocales", returnType:""});
  proto$$module$as3shim$packages.getKeysAndValues = createDummyFunction$$module$as3shim$packages({name:"getKeysAndValues", returnType:"Object"});
  proto$$module$as3shim$packages.getLanguage = createDummyFunction$$module$as3shim$packages({name:"getLanguage", returnType:"String"});
  proto$$module$as3shim$packages.getRegion = createDummyFunction$$module$as3shim$packages({name:"getRegion", returnType:"String"});
  proto$$module$as3shim$packages.getScript = createDummyFunction$$module$as3shim$packages({name:"getScript", returnType:"String"});
  proto$$module$as3shim$packages.getVariant = createDummyFunction$$module$as3shim$packages({name:"getVariant", returnType:"String"});
  proto$$module$as3shim$packages.isRightToLeft = createDummyFunction$$module$as3shim$packages({name:"isRightToLeft", returnType:"Boolean"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DateTimeNameStyle = createDummyFunction$$module$as3shim$packages("DateTimeNameStyle");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FULL", "full");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LONG_ABBREVIATION", "longAbbreviation");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SHORT_ABBREVIATION", "shortAbbreviation");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NumberFormatter = createDummyFunction$$module$as3shim$packages("NumberFormatter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "actualLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"actualLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "decimalSeparator", {get:createDummyFunction$$module$as3shim$packages({name:"decimalSeparator", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitsType", {get:createDummyFunction$$module$as3shim$packages({name:"digitsType", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fractionalDigits", {get:createDummyFunction$$module$as3shim$packages({name:"fractionalDigits", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingPattern", {get:createDummyFunction$$module$as3shim$packages({name:"groupingPattern", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingSeparator", {get:createDummyFunction$$module$as3shim$packages({name:"groupingSeparator", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastOperationStatus", {get:createDummyFunction$$module$as3shim$packages({name:"lastOperationStatus", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leadingZero", {get:createDummyFunction$$module$as3shim$packages({name:"leadingZero", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeNumberFormat", {get:createDummyFunction$$module$as3shim$packages({name:"negativeNumberFormat", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeSymbol", {get:createDummyFunction$$module$as3shim$packages({name:"negativeSymbol", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "requestedLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"requestedLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trailingZeros", {get:createDummyFunction$$module$as3shim$packages({name:"trailingZeros", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "useGrouping", {get:createDummyFunction$$module$as3shim$packages({name:"useGrouping", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "decimalSeparator", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitsType", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fractionalDigits", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingPattern", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingSeparator", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leadingZero", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeNumberFormat", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeSymbol", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trailingZeros", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "useGrouping", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.getAvailableLocaleIDNames = createDummyFunction$$module$as3shim$packages({name:"getAvailableLocaleIDNames", returnType:""});
  proto$$module$as3shim$packages.formatInt = createDummyFunction$$module$as3shim$packages({name:"formatInt", returnType:"String"});
  proto$$module$as3shim$packages.formatNumber = createDummyFunction$$module$as3shim$packages({name:"formatNumber", returnType:"String"});
  proto$$module$as3shim$packages.formatUint = createDummyFunction$$module$as3shim$packages({name:"formatUint", returnType:"String"});
  proto$$module$as3shim$packages.parse = createDummyFunction$$module$as3shim$packages({name:"parse", returnType:"flash.globalization.NumberParseResult"});
  proto$$module$as3shim$packages.parseNumber = createDummyFunction$$module$as3shim$packages({name:"parseNumber", returnType:"Number"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NationalDigitsType = createDummyFunction$$module$as3shim$packages("NationalDigitsType");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ARABIC_INDIC", 1632);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BALINESE", 6992);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BENGALI", 2534);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CHAM", 43600);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEVANAGARI", 2406);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EUROPEAN", 48);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EXTENDED_ARABIC_INDIC", 1776);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FULL_WIDTH", 65296);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "GUJARATI", 2790);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "GURMUKHI", 2662);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KANNADA", 3302);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KAYAH_LI", 43264);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KHMER", 6112);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LAO", 3792);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LEPCHA", 7232);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LIMBU", 6470);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MALAYALAM", 3430);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MONGOLIAN", 6160);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MYANMAR", 4160);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MYANMAR_SHAN", 4240);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NEW_TAI_LUE", 6608);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NKO", 1984);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OL_CHIKI", 7248);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ORIYA", 2918);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OSMANYA", 66720);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SAURASHTRA", 43216);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SUNDANESE", 7088);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TAMIL", 3046);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TELUGU", 3174);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "THAI", 3664);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TIBETAN", 3872);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "VAI", 42528);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StringTools = createDummyFunction$$module$as3shim$packages("StringTools");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "actualLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"actualLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastOperationStatus", {get:createDummyFunction$$module$as3shim$packages({name:"lastOperationStatus", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "requestedLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"requestedLocaleIDName", returnType:"String"})});
  Klass$$module$as3shim$packages.getAvailableLocaleIDNames = createDummyFunction$$module$as3shim$packages({name:"getAvailableLocaleIDNames", returnType:""});
  proto$$module$as3shim$packages.toLowerCase = createDummyFunction$$module$as3shim$packages({name:"toLowerCase", returnType:"String"});
  proto$$module$as3shim$packages.toUpperCase = createDummyFunction$$module$as3shim$packages({name:"toUpperCase", returnType:"String"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CurrencyFormatter = createDummyFunction$$module$as3shim$packages("CurrencyFormatter");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "actualLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"actualLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "currencyISOCode", {get:createDummyFunction$$module$as3shim$packages({name:"currencyISOCode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "currencySymbol", {get:createDummyFunction$$module$as3shim$packages({name:"currencySymbol", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "decimalSeparator", {get:createDummyFunction$$module$as3shim$packages({name:"decimalSeparator", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitsType", {get:createDummyFunction$$module$as3shim$packages({name:"digitsType", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fractionalDigits", {get:createDummyFunction$$module$as3shim$packages({name:"fractionalDigits", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingPattern", {get:createDummyFunction$$module$as3shim$packages({name:"groupingPattern", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingSeparator", {get:createDummyFunction$$module$as3shim$packages({name:"groupingSeparator", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastOperationStatus", {get:createDummyFunction$$module$as3shim$packages({name:"lastOperationStatus", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leadingZero", {get:createDummyFunction$$module$as3shim$packages({name:"leadingZero", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeCurrencyFormat", {get:createDummyFunction$$module$as3shim$packages({name:"negativeCurrencyFormat", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeSymbol", {get:createDummyFunction$$module$as3shim$packages({name:"negativeSymbol", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "positiveCurrencyFormat", {get:createDummyFunction$$module$as3shim$packages({name:"positiveCurrencyFormat", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "requestedLocaleIDName", {get:createDummyFunction$$module$as3shim$packages({name:"requestedLocaleIDName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trailingZeros", {get:createDummyFunction$$module$as3shim$packages({name:"trailingZeros", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "useGrouping", {get:createDummyFunction$$module$as3shim$packages({name:"useGrouping", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "decimalSeparator", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitsType", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fractionalDigits", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingPattern", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupingSeparator", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leadingZero", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeCurrencyFormat", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "negativeSymbol", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "positiveCurrencyFormat", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trailingZeros", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "useGrouping", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.getAvailableLocaleIDNames = createDummyFunction$$module$as3shim$packages({name:"getAvailableLocaleIDNames", returnType:""});
  proto$$module$as3shim$packages.format = createDummyFunction$$module$as3shim$packages({name:"format", returnType:"String"});
  proto$$module$as3shim$packages.formattingWithCurrencySymbolIsSafe = createDummyFunction$$module$as3shim$packages({name:"formattingWithCurrencySymbolIsSafe", returnType:"Boolean"});
  proto$$module$as3shim$packages.parse = createDummyFunction$$module$as3shim$packages({name:"parse", returnType:"flash.globalization.CurrencyParseResult"});
  proto$$module$as3shim$packages.setCurrency = createDummyFunction$$module$as3shim$packages({name:"setCurrency", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NumberParseResult = createDummyFunction$$module$as3shim$packages("NumberParseResult");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "endIndex", {get:createDummyFunction$$module$as3shim$packages({name:"endIndex", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "startIndex", {get:createDummyFunction$$module$as3shim$packages({name:"startIndex", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "value", {get:createDummyFunction$$module$as3shim$packages({name:"value", returnType:"Number"})});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.media");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.VideoStatus = createDummyFunction$$module$as3shim$packages("VideoStatus");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ACCELERATED", "accelerated");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SOFTWARE", "software");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNAVAILABLE", "unavailable");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Microphone = createDummyFunction$$module$as3shim$packages("Microphone");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "names", {get:createDummyFunction$$module$as3shim$packages({name:"names", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "activityLevel", {get:createDummyFunction$$module$as3shim$packages({name:"activityLevel", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "codec", {get:createDummyFunction$$module$as3shim$packages({name:"codec", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enableVAD", {get:createDummyFunction$$module$as3shim$packages({name:"enableVAD", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "encodeQuality", {get:createDummyFunction$$module$as3shim$packages({name:"encodeQuality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enhancedOptions", {get:createDummyFunction$$module$as3shim$packages({name:"enhancedOptions", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "framesPerPacket", {get:createDummyFunction$$module$as3shim$packages({name:"framesPerPacket", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "gain", {get:createDummyFunction$$module$as3shim$packages({name:"gain", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "index", {get:createDummyFunction$$module$as3shim$packages({name:"index", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "muted", {get:createDummyFunction$$module$as3shim$packages({name:"muted", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "name", {get:createDummyFunction$$module$as3shim$packages({name:"name", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "noiseSuppressionLevel", {get:createDummyFunction$$module$as3shim$packages({name:"noiseSuppressionLevel", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rate", {get:createDummyFunction$$module$as3shim$packages({name:"rate", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "silenceLevel", {get:createDummyFunction$$module$as3shim$packages({name:"silenceLevel", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "silenceTimeout", {get:createDummyFunction$$module$as3shim$packages({name:"silenceTimeout", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "soundTransform", {get:createDummyFunction$$module$as3shim$packages({name:"soundTransform", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "useEchoSuppression", {get:createDummyFunction$$module$as3shim$packages({name:"useEchoSuppression", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "codec", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enableVAD", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "encodeQuality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enhancedOptions", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "framesPerPacket", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "gain", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "noiseSuppressionLevel", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rate", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "soundTransform", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.getEnhancedMicrophone = createDummyFunction$$module$as3shim$packages({name:"getEnhancedMicrophone", returnType:"flash.media.Microphone"});
  Klass$$module$as3shim$packages.getMicrophone = createDummyFunction$$module$as3shim$packages({name:"getMicrophone", returnType:"flash.media.Microphone"});
  proto$$module$as3shim$packages.setLoopBack = createDummyFunction$$module$as3shim$packages({name:"setLoopBack", returnType:"void"});
  proto$$module$as3shim$packages.setSilenceLevel = createDummyFunction$$module$as3shim$packages({name:"setSilenceLevel", returnType:"void"});
  proto$$module$as3shim$packages.setUseEchoSuppression = createDummyFunction$$module$as3shim$packages({name:"setUseEchoSuppression", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoundTransform = createDummyFunction$$module$as3shim$packages("SoundTransform");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftToLeft", {get:createDummyFunction$$module$as3shim$packages({name:"leftToLeft", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftToRight", {get:createDummyFunction$$module$as3shim$packages({name:"leftToRight", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pan", {get:createDummyFunction$$module$as3shim$packages({name:"pan", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightToLeft", {get:createDummyFunction$$module$as3shim$packages({name:"rightToLeft", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightToRight", {get:createDummyFunction$$module$as3shim$packages({name:"rightToRight", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "volume", {get:createDummyFunction$$module$as3shim$packages({name:"volume", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftToLeft", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftToRight", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pan", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightToLeft", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightToRight", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "volume", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoundMixer = createDummyFunction$$module$as3shim$packages("SoundMixer");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bufferTime", {get:createDummyFunction$$module$as3shim$packages({name:"bufferTime", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "soundTransform", {get:createDummyFunction$$module$as3shim$packages({name:"soundTransform", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bufferTime", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "soundTransform", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.areSoundsInaccessible = createDummyFunction$$module$as3shim$packages({name:"areSoundsInaccessible", returnType:"Boolean"});
  Klass$$module$as3shim$packages.computeSpectrum = createDummyFunction$$module$as3shim$packages({name:"computeSpectrum", returnType:"void"});
  Klass$$module$as3shim$packages.stopAll = createDummyFunction$$module$as3shim$packages({name:"stopAll", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Camera = createDummyFunction$$module$as3shim$packages("Camera");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "names", {get:createDummyFunction$$module$as3shim$packages({name:"names", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "activityLevel", {get:createDummyFunction$$module$as3shim$packages({name:"activityLevel", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bandwidth", {get:createDummyFunction$$module$as3shim$packages({name:"bandwidth", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "currentFPS", {get:createDummyFunction$$module$as3shim$packages({name:"currentFPS", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fps", {get:createDummyFunction$$module$as3shim$packages({name:"fps", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "height", {get:createDummyFunction$$module$as3shim$packages({name:"height", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "index", {get:createDummyFunction$$module$as3shim$packages({name:"index", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "keyFrameInterval", {get:createDummyFunction$$module$as3shim$packages({name:"keyFrameInterval", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "loopback", {get:createDummyFunction$$module$as3shim$packages({name:"loopback", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "motionLevel", {get:createDummyFunction$$module$as3shim$packages({name:"motionLevel", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "motionTimeout", {get:createDummyFunction$$module$as3shim$packages({name:"motionTimeout", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "muted", {get:createDummyFunction$$module$as3shim$packages({name:"muted", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "name", {get:createDummyFunction$$module$as3shim$packages({name:"name", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "width", {get:createDummyFunction$$module$as3shim$packages({name:"width", returnType:"int"})});
  Klass$$module$as3shim$packages.getCamera = createDummyFunction$$module$as3shim$packages({name:"getCamera", returnType:"flash.media.Camera"});
  proto$$module$as3shim$packages.setCursor = createDummyFunction$$module$as3shim$packages({name:"setCursor", returnType:"void"});
  proto$$module$as3shim$packages.setKeyFrameInterval = createDummyFunction$$module$as3shim$packages({name:"setKeyFrameInterval", returnType:"void"});
  proto$$module$as3shim$packages.setLoopback = createDummyFunction$$module$as3shim$packages({name:"setLoopback", returnType:"void"});
  proto$$module$as3shim$packages.setMode = createDummyFunction$$module$as3shim$packages({name:"setMode", returnType:"void"});
  proto$$module$as3shim$packages.setMotionLevel = createDummyFunction$$module$as3shim$packages({name:"setMotionLevel", returnType:"void"});
  proto$$module$as3shim$packages.setQuality = createDummyFunction$$module$as3shim$packages({name:"setQuality", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoundLoaderContext = createDummyFunction$$module$as3shim$packages("SoundLoaderContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoundCodec = createDummyFunction$$module$as3shim$packages("SoundCodec");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NELLYMOSER", "NellyMoser");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SPEEX", "Speex");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SoundChannel = createDummyFunction$$module$as3shim$packages("SoundChannel");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "leftPeak", {get:createDummyFunction$$module$as3shim$packages({name:"leftPeak", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "position", {get:createDummyFunction$$module$as3shim$packages({name:"position", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rightPeak", {get:createDummyFunction$$module$as3shim$packages({name:"rightPeak", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "soundTransform", {get:createDummyFunction$$module$as3shim$packages({name:"soundTransform", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "soundTransform", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.stop = createDummyFunction$$module$as3shim$packages({name:"stop", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageVideoAvailability = createDummyFunction$$module$as3shim$packages("StageVideoAvailability");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AVAILABLE", "available");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNAVAILABLE", "unavailable");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MicrophoneEnhancedOptions = createDummyFunction$$module$as3shim$packages("MicrophoneEnhancedOptions");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "autoGain", {get:createDummyFunction$$module$as3shim$packages({name:"autoGain", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "echoPath", {get:createDummyFunction$$module$as3shim$packages({name:"echoPath", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isVoiceDetected", {get:createDummyFunction$$module$as3shim$packages({name:"isVoiceDetected", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mode", {get:createDummyFunction$$module$as3shim$packages({name:"mode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "nonLinearProcessing", {get:createDummyFunction$$module$as3shim$packages({name:"nonLinearProcessing", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "autoGain", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "echoPath", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mode", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "nonLinearProcessing", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Video = createDummyFunction$$module$as3shim$packages("Video");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.DisplayObject});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "deblocking", {get:createDummyFunction$$module$as3shim$packages({name:"deblocking", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "smoothing", {get:createDummyFunction$$module$as3shim$packages({name:"smoothing", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "videoHeight", {get:createDummyFunction$$module$as3shim$packages({name:"videoHeight", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "videoWidth", {get:createDummyFunction$$module$as3shim$packages({name:"videoWidth", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "deblocking", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "smoothing", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.attachCamera = createDummyFunction$$module$as3shim$packages({name:"attachCamera", returnType:"void"});
  proto$$module$as3shim$packages.attachNetStream = createDummyFunction$$module$as3shim$packages({name:"attachNetStream", returnType:"void"});
  proto$$module$as3shim$packages.clear = createDummyFunction$$module$as3shim$packages({name:"clear", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StageVideo = createDummyFunction$$module$as3shim$packages("StageVideo");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "colorSpaces", {get:createDummyFunction$$module$as3shim$packages({name:"colorSpaces", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "depth", {get:createDummyFunction$$module$as3shim$packages({name:"depth", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pan", {get:createDummyFunction$$module$as3shim$packages({name:"pan", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "videoHeight", {get:createDummyFunction$$module$as3shim$packages({name:"videoHeight", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "videoWidth", {get:createDummyFunction$$module$as3shim$packages({name:"videoWidth", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "viewPort", {get:createDummyFunction$$module$as3shim$packages({name:"viewPort", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "zoom", {get:createDummyFunction$$module$as3shim$packages({name:"zoom", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "depth", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pan", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "viewPort", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "zoom", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.attachNetStream = createDummyFunction$$module$as3shim$packages({name:"attachNetStream", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ID3Info = createDummyFunction$$module$as3shim$packages("ID3Info");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Sound = createDummyFunction$$module$as3shim$packages("Sound");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bytesLoaded", {get:createDummyFunction$$module$as3shim$packages({name:"bytesLoaded", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bytesTotal", {get:createDummyFunction$$module$as3shim$packages({name:"bytesTotal", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "id3", {get:createDummyFunction$$module$as3shim$packages({name:"id3", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isBuffering", {get:createDummyFunction$$module$as3shim$packages({name:"isBuffering", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isURLInaccessible", {get:createDummyFunction$$module$as3shim$packages({name:"isURLInaccessible", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {get:createDummyFunction$$module$as3shim$packages({name:"length", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "url", {get:createDummyFunction$$module$as3shim$packages({name:"url", returnType:"String"})});
  proto$$module$as3shim$packages.close = createDummyFunction$$module$as3shim$packages({name:"close", returnType:"void"});
  proto$$module$as3shim$packages.extract = createDummyFunction$$module$as3shim$packages({name:"extract", returnType:"Number"});
  proto$$module$as3shim$packages.load = createDummyFunction$$module$as3shim$packages({name:"load", returnType:"void"});
  proto$$module$as3shim$packages.play = createDummyFunction$$module$as3shim$packages({name:"play", returnType:"flash.media.SoundChannel"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MicrophoneEnhancedMode = createDummyFunction$$module$as3shim$packages("MicrophoneEnhancedMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FULL_DUPLEX", "fullDuplex");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "HALF_DUPLEX", "halfDuplex");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "HEADSET", "headset");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OFF", "off");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SPEAKER_MUTE", "speakerMute");
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.net;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStreamInfo;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Responder;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLLoaderDataFormat;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetGroupInfo;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStream;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FileReference;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LocalConnection;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLRequestHeader;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLLoader;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetGroupReceiveMode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Socket;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetGroup;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStreamAppendBytesAction;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetGroupSendResult;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FileFilter;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SharedObject;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLRequestMethod;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ObjectEncoding;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStreamMulticastInfo;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetConnection;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetGroupSendMode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLSocket;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStreamPlayOptions;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GroupSpecifier;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FileReferenceList;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SharedObjectFlushStatus;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetGroupReplicationStrategy;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetMonitor;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLRequest;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NetStreamPlayTransitions;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLStream;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.URLVariables;
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.net.drm");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMPlaybackTimeWindow = createDummyFunction$$module$as3shim$packages("DRMPlaybackTimeWindow");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "endDate", {get:createDummyFunction$$module$as3shim$packages({name:"endDate", returnType:"Date"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "period", {get:createDummyFunction$$module$as3shim$packages({name:"period", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "startDate", {get:createDummyFunction$$module$as3shim$packages({name:"startDate", returnType:"Date"})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMVoucher = createDummyFunction$$module$as3shim$packages("DRMVoucher");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "offlineLeaseEndDate", {get:createDummyFunction$$module$as3shim$packages({name:"offlineLeaseEndDate", returnType:"Date"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "offlineLeaseStartDate", {get:createDummyFunction$$module$as3shim$packages({name:"offlineLeaseStartDate", returnType:"Date"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "playbackTimeWindow", {get:createDummyFunction$$module$as3shim$packages({name:"playbackTimeWindow", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "policies", {get:createDummyFunction$$module$as3shim$packages({name:"policies", returnType:"Object"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "voucherEndDate", {get:createDummyFunction$$module$as3shim$packages({name:"voucherEndDate", returnType:"Date"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "voucherStartDate", {get:createDummyFunction$$module$as3shim$packages({name:"voucherStartDate", returnType:"Date"})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMManager = createDummyFunction$$module$as3shim$packages("DRMManager");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  Klass$$module$as3shim$packages.getDRMManager = createDummyFunction$$module$as3shim$packages({name:"getDRMManager", returnType:"flash.net.drm.DRMManager"});
  proto$$module$as3shim$packages.authenticate = createDummyFunction$$module$as3shim$packages({name:"authenticate", returnType:"void"});
  proto$$module$as3shim$packages.loadPreviewVoucher = createDummyFunction$$module$as3shim$packages({name:"loadPreviewVoucher", returnType:"void"});
  proto$$module$as3shim$packages.loadVoucher = createDummyFunction$$module$as3shim$packages({name:"loadVoucher", returnType:"void"});
  proto$$module$as3shim$packages.setAuthenticationToken = createDummyFunction$$module$as3shim$packages({name:"setAuthenticationToken", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AuthenticationMethod = createDummyFunction$$module$as3shim$packages("AuthenticationMethod");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ANONYMOUS", "anonymous");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "USERNAME_AND_PASSWORD", "usernameAndPassword");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LoadVoucherSetting = createDummyFunction$$module$as3shim$packages("LoadVoucherSetting");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALLOW_SERVER", "allowServer");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FORCE_REFRESH", "forceRefresh");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOCAL_ONLY", "localOnly");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMContentData = createDummyFunction$$module$as3shim$packages("DRMContentData");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "authenticationMethod", {get:createDummyFunction$$module$as3shim$packages({name:"authenticationMethod", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "domain", {get:createDummyFunction$$module$as3shim$packages({name:"domain", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "licenseID", {get:createDummyFunction$$module$as3shim$packages({name:"licenseID", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "serverURL", {get:createDummyFunction$$module$as3shim$packages({name:"serverURL", returnType:"String"})});
  proto$$module$as3shim$packages.getVoucherAccessInfo = createDummyFunction$$module$as3shim$packages({name:"getVoucherAccessInfo", returnType:""});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.VoucherAccessInfo = createDummyFunction$$module$as3shim$packages("VoucherAccessInfo");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "authenticationMethod", {get:createDummyFunction$$module$as3shim$packages({name:"authenticationMethod", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "displayName", {get:createDummyFunction$$module$as3shim$packages({name:"displayName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "domain", {get:createDummyFunction$$module$as3shim$packages({name:"domain", returnType:"String"})});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.printing");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.PrintJobOptions = createDummyFunction$$module$as3shim$packages("PrintJobOptions");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.PrintJob = createDummyFunction$$module$as3shim$packages("PrintJob");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "orientation", {get:createDummyFunction$$module$as3shim$packages({name:"orientation", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pageHeight", {get:createDummyFunction$$module$as3shim$packages({name:"pageHeight", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pageWidth", {get:createDummyFunction$$module$as3shim$packages({name:"pageWidth", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "paperHeight", {get:createDummyFunction$$module$as3shim$packages({name:"paperHeight", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "paperWidth", {get:createDummyFunction$$module$as3shim$packages({name:"paperWidth", returnType:"int"})});
  proto$$module$as3shim$packages.addPage = createDummyFunction$$module$as3shim$packages({name:"addPage", returnType:"void"});
  proto$$module$as3shim$packages.send = createDummyFunction$$module$as3shim$packages({name:"send", returnType:"void"});
  proto$$module$as3shim$packages.start = createDummyFunction$$module$as3shim$packages({name:"start", returnType:"Boolean"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.PrintJobOrientation = createDummyFunction$$module$as3shim$packages("PrintJobOrientation");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LANDSCAPE", "landscape");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PORTRAIT", "portrait");
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.sampler");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StackFrame = createDummyFunction$$module$as3shim$packages("StackFrame");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Sample = createDummyFunction$$module$as3shim$packages("Sample");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.NewObjectSample = createDummyFunction$$module$as3shim$packages("NewObjectSample");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.sampler.Sample});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "object", {get:createDummyFunction$$module$as3shim$packages({name:"object", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "size", {get:createDummyFunction$$module$as3shim$packages({name:"size", returnType:"Number"})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DeleteObjectSample = createDummyFunction$$module$as3shim$packages("DeleteObjectSample");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.sampler.Sample});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.sensors");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Geolocation = createDummyFunction$$module$as3shim$packages("Geolocation");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "muted", {get:createDummyFunction$$module$as3shim$packages({name:"muted", returnType:"Boolean"})});
  proto$$module$as3shim$packages.setRequestedUpdateInterval = createDummyFunction$$module$as3shim$packages({name:"setRequestedUpdateInterval", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Accelerometer = createDummyFunction$$module$as3shim$packages("Accelerometer");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "muted", {get:createDummyFunction$$module$as3shim$packages({name:"muted", returnType:"Boolean"})});
  proto$$module$as3shim$packages.setRequestedUpdateInterval = createDummyFunction$$module$as3shim$packages({name:"setRequestedUpdateInterval", returnType:"void"});
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.system;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Security = createDummyFunction$$module$as3shim$packages("Security");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "disableAVM1Loading", {get:createDummyFunction$$module$as3shim$packages({name:"disableAVM1Loading", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "exactSettings", {get:createDummyFunction$$module$as3shim$packages({name:"exactSettings", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "pageDomain", {get:createDummyFunction$$module$as3shim$packages({name:"pageDomain", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "sandboxType", {get:createDummyFunction$$module$as3shim$packages({name:"sandboxType", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "disableAVM1Loading", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "exactSettings", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "APPLICATION", "application");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOCAL_TRUSTED", "localTrusted");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOCAL_WITH_FILE", "localWithFile");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOCAL_WITH_NETWORK", "localWithNetwork");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "REMOTE", "remote");
  Klass$$module$as3shim$packages.allowDomain = createDummyFunction$$module$as3shim$packages({name:"allowDomain", returnType:"void"});
  Klass$$module$as3shim$packages.allowInsecureDomain = createDummyFunction$$module$as3shim$packages({name:"allowInsecureDomain", returnType:"void"});
  Klass$$module$as3shim$packages.loadPolicyFile = createDummyFunction$$module$as3shim$packages({name:"loadPolicyFile", returnType:"void"});
  Klass$$module$as3shim$packages.showSettings = createDummyFunction$$module$as3shim$packages({name:"showSettings", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SecurityDomain = createDummyFunction$$module$as3shim$packages("SecurityDomain");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "currentDomain", {get:createDummyFunction$$module$as3shim$packages({name:"currentDomain", returnType:""})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LoaderContext = createDummyFunction$$module$as3shim$packages("LoaderContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "allowLoadBytesCodeExecution", {get:createDummyFunction$$module$as3shim$packages({name:"allowLoadBytesCodeExecution", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "allowLoadBytesCodeExecution", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.JPEGLoaderContext = createDummyFunction$$module$as3shim$packages("JPEGLoaderContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.system.LoaderContext});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SecurityPanel = createDummyFunction$$module$as3shim$packages("SecurityPanel");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CAMERA", "camera");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEFAULT", "default");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DISPLAY", "display");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOCAL_STORAGE", "localStorage");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MICROPHONE", "microphone");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PRIVACY", "privacy");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SETTINGS_MANAGER", "settingsManager");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.System;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Capabilities;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ApplicationDomain = createDummyFunction$$module$as3shim$packages("ApplicationDomain");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "currentDomain", {get:createDummyFunction$$module$as3shim$packages({name:"currentDomain", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "MIN_DOMAIN_MEMORY_LENGTH", {get:createDummyFunction$$module$as3shim$packages({name:"MIN_DOMAIN_MEMORY_LENGTH", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "domainMemory", {get:createDummyFunction$$module$as3shim$packages({name:"domainMemory", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "parentDomain", {get:createDummyFunction$$module$as3shim$packages({name:"parentDomain", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "domainMemory", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.getDefinition = createDummyFunction$$module$as3shim$packages({name:"getDefinition", returnType:"Object"});
  proto$$module$as3shim$packages.hasDefinition = createDummyFunction$$module$as3shim$packages({name:"hasDefinition", returnType:"Boolean"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.IMEConversionMode = createDummyFunction$$module$as3shim$packages("IMEConversionMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALPHANUMERIC_FULL", "ALPHANUMERIC_FULL");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALPHANUMERIC_HALF", "ALPHANUMERIC_HALF");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CHINESE", "CHINESE");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "JAPANESE_HIRAGANA", "JAPANESE_HIRAGANA");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "JAPANESE_KATAKANA_FULL", "JAPANESE_KATAKANA_FULL");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "JAPANESE_KATAKANA_HALF", "JAPANESE_KATAKANA_HALF");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KOREAN", "KOREAN");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNKNOWN", "UNKNOWN");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SystemUpdater = createDummyFunction$$module$as3shim$packages("SystemUpdater");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.cancel = createDummyFunction$$module$as3shim$packages({name:"cancel", returnType:"void"});
  proto$$module$as3shim$packages.update = createDummyFunction$$module$as3shim$packages({name:"update", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SystemUpdaterType = createDummyFunction$$module$as3shim$packages("SystemUpdaterType");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DRM", "drm");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SYSTEM", "system");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.IME = createDummyFunction$$module$as3shim$packages("IME");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "conversionMode", {get:createDummyFunction$$module$as3shim$packages({name:"conversionMode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enabled", {get:createDummyFunction$$module$as3shim$packages({name:"enabled", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "constructOK", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "conversionMode", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "enabled", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.compositionAbandoned = createDummyFunction$$module$as3shim$packages({name:"compositionAbandoned", returnType:"void"});
  Klass$$module$as3shim$packages.compositionSelectionChanged = createDummyFunction$$module$as3shim$packages({name:"compositionSelectionChanged", returnType:"void"});
  Klass$$module$as3shim$packages.doConversion = createDummyFunction$$module$as3shim$packages({name:"doConversion", returnType:"void"});
  Klass$$module$as3shim$packages.setCompositionString = createDummyFunction$$module$as3shim$packages({name:"setCompositionString", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TouchscreenType = createDummyFunction$$module$as3shim$packages("TouchscreenType");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FINGER", "finger");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "STYLUS", "stylus");
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.text;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextInteractionMode = createDummyFunction$$module$as3shim$packages("TextInteractionMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NORMAL", "normal");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SELECTION", "selection");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GridFitType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontStyle;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.AntiAliasType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextFormatAlign;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Font;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextFormat;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextDisplayMode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextField;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CSMSettings;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextRun = createDummyFunction$$module$as3shim$packages("TextRun");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextFieldAutoSize;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextColorType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StaticText;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextFieldType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextFormatDisplay = createDummyFunction$$module$as3shim$packages("TextFormatDisplay");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BLOCK", "block");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INLINE", "inline");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextExtent;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.StyleSheet;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextSnapshot = createDummyFunction$$module$as3shim$packages("TextSnapshot");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "charCount", {get:createDummyFunction$$module$as3shim$packages({name:"charCount", returnType:"int"})});
  proto$$module$as3shim$packages.findText = createDummyFunction$$module$as3shim$packages({name:"findText", returnType:"int"});
  proto$$module$as3shim$packages.getSelected = createDummyFunction$$module$as3shim$packages({name:"getSelected", returnType:"Boolean"});
  proto$$module$as3shim$packages.getSelectedText = createDummyFunction$$module$as3shim$packages({name:"getSelectedText", returnType:"String"});
  proto$$module$as3shim$packages.getText = createDummyFunction$$module$as3shim$packages({name:"getText", returnType:"String"});
  proto$$module$as3shim$packages.getTextRunInfo = createDummyFunction$$module$as3shim$packages({name:"getTextRunInfo", returnType:"Array"});
  proto$$module$as3shim$packages.hitTestTextNearPos = createDummyFunction$$module$as3shim$packages({name:"hitTestTextNearPos", returnType:"Number"});
  proto$$module$as3shim$packages.setSelectColor = createDummyFunction$$module$as3shim$packages({name:"setSelectColor", returnType:"void"});
  proto$$module$as3shim$packages.setSelected = createDummyFunction$$module$as3shim$packages({name:"setSelected", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextRenderer = createDummyFunction$$module$as3shim$packages("TextRenderer");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "antiAliasType", {get:createDummyFunction$$module$as3shim$packages({name:"antiAliasType", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "displayMode", {get:createDummyFunction$$module$as3shim$packages({name:"displayMode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "maxLevel", {get:createDummyFunction$$module$as3shim$packages({name:"maxLevel", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "antiAliasType", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "displayMode", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "maxLevel", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.setAdvancedAntiAliasingTable = createDummyFunction$$module$as3shim$packages({name:"setAdvancedAntiAliasingTable", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextLineMetrics;
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.text.engine");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CFFHinting = createDummyFunction$$module$as3shim$packages("CFFHinting");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "HORIZONTAL_STEM", "horizontalStem");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ContentElement = createDummyFunction$$module$as3shim$packages("ContentElement");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementFormat", {get:createDummyFunction$$module$as3shim$packages({name:"elementFormat", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "eventMirror", {get:createDummyFunction$$module$as3shim$packages({name:"eventMirror", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "groupElement", {get:createDummyFunction$$module$as3shim$packages({name:"groupElement", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rawText", {get:createDummyFunction$$module$as3shim$packages({name:"rawText", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "text", {get:createDummyFunction$$module$as3shim$packages({name:"text", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textBlock", {get:createDummyFunction$$module$as3shim$packages({name:"textBlock", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textBlockBeginIndex", {get:createDummyFunction$$module$as3shim$packages({name:"textBlockBeginIndex", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textRotation", {get:createDummyFunction$$module$as3shim$packages({name:"textRotation", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementFormat", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "eventMirror", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textRotation", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "GRAPHIC_ELEMENT", 65007);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextElement = createDummyFunction$$module$as3shim$packages("TextElement");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.text.engine.ContentElement});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "text", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.replaceText = createDummyFunction$$module$as3shim$packages({name:"replaceText", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextJustifier = createDummyFunction$$module$as3shim$packages("TextJustifier");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lineJustification", {get:createDummyFunction$$module$as3shim$packages({name:"lineJustification", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locale", {get:createDummyFunction$$module$as3shim$packages({name:"locale", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lineJustification", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.getJustifierForLocale = createDummyFunction$$module$as3shim$packages({name:"getJustifierForLocale", returnType:"flash.text.engine.TextJustifier"});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.text.engine.TextJustifier"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontLookup = createDummyFunction$$module$as3shim$packages("FontLookup");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEVICE", "device");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EMBEDDED_CFF", "embeddedCFF");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TypographicCase = createDummyFunction$$module$as3shim$packages("TypographicCase");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CAPS", "caps");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CAPS_AND_SMALL_CAPS", "capsAndSmallCaps");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEFAULT", "default");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LOWERCASE", "lowercase");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SMALL_CAPS", "smallCaps");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TITLE", "title");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UPPERCASE", "uppercase");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextLineCreationResult = createDummyFunction$$module$as3shim$packages("TextLineCreationResult");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "COMPLETE", "complete");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EMERGENCY", "emergency");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INSUFFICIENT_WIDTH", "insufficientWidth");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "SUCCESS", "success");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextBaseline = createDummyFunction$$module$as3shim$packages("TextBaseline");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ASCENT", "ascent");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DESCENT", "descent");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "IDEOGRAPHIC_BOTTOM", "ideographicBottom");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "IDEOGRAPHIC_CENTER", "ideographicCenter");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "IDEOGRAPHIC_TOP", "ideographicTop");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROMAN", "roman");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "USE_DOMINANT_BASELINE", "useDominantBaseline");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Kerning = createDummyFunction$$module$as3shim$packages("Kerning");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTO", "auto");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OFF", "off");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ON", "on");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextLineMirrorRegion = createDummyFunction$$module$as3shim$packages("TextLineMirrorRegion");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bounds", {get:createDummyFunction$$module$as3shim$packages({name:"bounds", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "element", {get:createDummyFunction$$module$as3shim$packages({name:"element", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mirror", {get:createDummyFunction$$module$as3shim$packages({name:"mirror", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "nextRegion", {get:createDummyFunction$$module$as3shim$packages({name:"nextRegion", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "previousRegion", {get:createDummyFunction$$module$as3shim$packages({name:"previousRegion", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textLine", {get:createDummyFunction$$module$as3shim$packages({name:"textLine", returnType:""})});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextLine = createDummyFunction$$module$as3shim$packages("TextLine");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.DisplayObjectContainer});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ascent", {get:createDummyFunction$$module$as3shim$packages({name:"ascent", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "atomCount", {get:createDummyFunction$$module$as3shim$packages({name:"atomCount", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "descent", {get:createDummyFunction$$module$as3shim$packages({name:"descent", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "hasGraphicElement", {get:createDummyFunction$$module$as3shim$packages({name:"hasGraphicElement", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "hasTabs", {get:createDummyFunction$$module$as3shim$packages({name:"hasTabs", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "mirrorRegions", {get:createDummyFunction$$module$as3shim$packages({name:"mirrorRegions", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "nextLine", {get:createDummyFunction$$module$as3shim$packages({name:"nextLine", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "previousLine", {get:createDummyFunction$$module$as3shim$packages({name:"previousLine", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rawTextLength", {get:createDummyFunction$$module$as3shim$packages({name:"rawTextLength", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "specifiedWidth", {get:createDummyFunction$$module$as3shim$packages({name:"specifiedWidth", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textBlock", {get:createDummyFunction$$module$as3shim$packages({name:"textBlock", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textBlockBeginIndex", {get:createDummyFunction$$module$as3shim$packages({name:"textBlockBeginIndex", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textHeight", {get:createDummyFunction$$module$as3shim$packages({name:"textHeight", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textWidth", {get:createDummyFunction$$module$as3shim$packages({name:"textWidth", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "totalAscent", {get:createDummyFunction$$module$as3shim$packages({name:"totalAscent", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "totalDescent", {get:createDummyFunction$$module$as3shim$packages({name:"totalDescent", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "totalHeight", {get:createDummyFunction$$module$as3shim$packages({name:"totalHeight", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "unjustifiedTextWidth", {get:createDummyFunction$$module$as3shim$packages({name:"unjustifiedTextWidth", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "validity", {get:createDummyFunction$$module$as3shim$packages({name:"validity", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "contextMenu", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "focusRect", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "tabChildren", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "tabEnabled", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "tabIndex", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "validity", {set:noop$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MAX_LINE_WIDTH", 1E6);
  proto$$module$as3shim$packages.dump = createDummyFunction$$module$as3shim$packages({name:"dump", returnType:"String"});
  proto$$module$as3shim$packages.flushAtomData = createDummyFunction$$module$as3shim$packages({name:"flushAtomData", returnType:"void"});
  proto$$module$as3shim$packages.getAtomBidiLevel = createDummyFunction$$module$as3shim$packages({name:"getAtomBidiLevel", returnType:"int"});
  proto$$module$as3shim$packages.getAtomBounds = createDummyFunction$$module$as3shim$packages({name:"getAtomBounds", returnType:"flash.geom.Rectangle"});
  proto$$module$as3shim$packages.getAtomCenter = createDummyFunction$$module$as3shim$packages({name:"getAtomCenter", returnType:"Number"});
  proto$$module$as3shim$packages.getAtomGraphic = createDummyFunction$$module$as3shim$packages({name:"getAtomGraphic", returnType:"flash.display.DisplayObject"});
  proto$$module$as3shim$packages.getAtomIndexAtCharIndex = createDummyFunction$$module$as3shim$packages({name:"getAtomIndexAtCharIndex", returnType:"int"});
  proto$$module$as3shim$packages.getAtomIndexAtPoint = createDummyFunction$$module$as3shim$packages({name:"getAtomIndexAtPoint", returnType:"int"});
  proto$$module$as3shim$packages.getAtomTextBlockBeginIndex = createDummyFunction$$module$as3shim$packages({name:"getAtomTextBlockBeginIndex", returnType:"int"});
  proto$$module$as3shim$packages.getAtomTextBlockEndIndex = createDummyFunction$$module$as3shim$packages({name:"getAtomTextBlockEndIndex", returnType:"int"});
  proto$$module$as3shim$packages.getAtomTextRotation = createDummyFunction$$module$as3shim$packages({name:"getAtomTextRotation", returnType:"String"});
  proto$$module$as3shim$packages.getAtomWordBoundaryOnLeft = createDummyFunction$$module$as3shim$packages({name:"getAtomWordBoundaryOnLeft", returnType:"Boolean"});
  proto$$module$as3shim$packages.getBaselinePosition = createDummyFunction$$module$as3shim$packages({name:"getBaselinePosition", returnType:"Number"});
  proto$$module$as3shim$packages.getMirrorRegion = createDummyFunction$$module$as3shim$packages({name:"getMirrorRegion", returnType:"flash.text.engine.TextLineMirrorRegion"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.EastAsianJustifier = createDummyFunction$$module$as3shim$packages("EastAsianJustifier");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.text.engine.TextJustifier});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "justificationStyle", {get:createDummyFunction$$module$as3shim$packages({name:"justificationStyle", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "justificationStyle", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.text.engine.TextJustifier"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GroupElement = createDummyFunction$$module$as3shim$packages("GroupElement");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.text.engine.ContentElement});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementCount", {get:createDummyFunction$$module$as3shim$packages({name:"elementCount", returnType:"int"})});
  proto$$module$as3shim$packages.getElementAt = createDummyFunction$$module$as3shim$packages({name:"getElementAt", returnType:"flash.text.engine.ContentElement"});
  proto$$module$as3shim$packages.getElementAtCharIndex = createDummyFunction$$module$as3shim$packages({name:"getElementAtCharIndex", returnType:"flash.text.engine.ContentElement"});
  proto$$module$as3shim$packages.getElementIndex = createDummyFunction$$module$as3shim$packages({name:"getElementIndex", returnType:"int"});
  proto$$module$as3shim$packages.groupElements = createDummyFunction$$module$as3shim$packages({name:"groupElements", returnType:"flash.text.engine.GroupElement"});
  proto$$module$as3shim$packages.mergeTextElements = createDummyFunction$$module$as3shim$packages({name:"mergeTextElements", returnType:"flash.text.engine.TextElement"});
  proto$$module$as3shim$packages.replaceElements = createDummyFunction$$module$as3shim$packages({name:"replaceElements", returnType:""});
  proto$$module$as3shim$packages.setElements = createDummyFunction$$module$as3shim$packages({name:"setElements", returnType:"void"});
  proto$$module$as3shim$packages.splitTextElement = createDummyFunction$$module$as3shim$packages({name:"splitTextElement", returnType:"flash.text.engine.TextElement"});
  proto$$module$as3shim$packages.ungroupElements = createDummyFunction$$module$as3shim$packages({name:"ungroupElements", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ElementFormat = createDummyFunction$$module$as3shim$packages("ElementFormat");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alignmentBaseline", {get:createDummyFunction$$module$as3shim$packages({name:"alignmentBaseline", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {get:createDummyFunction$$module$as3shim$packages({name:"alpha", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineShift", {get:createDummyFunction$$module$as3shim$packages({name:"baselineShift", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "breakOpportunity", {get:createDummyFunction$$module$as3shim$packages({name:"breakOpportunity", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {get:createDummyFunction$$module$as3shim$packages({name:"color", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitCase", {get:createDummyFunction$$module$as3shim$packages({name:"digitCase", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitWidth", {get:createDummyFunction$$module$as3shim$packages({name:"digitWidth", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "dominantBaseline", {get:createDummyFunction$$module$as3shim$packages({name:"dominantBaseline", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontDescription", {get:createDummyFunction$$module$as3shim$packages({name:"fontDescription", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontSize", {get:createDummyFunction$$module$as3shim$packages({name:"fontSize", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "kerning", {get:createDummyFunction$$module$as3shim$packages({name:"kerning", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ligatureLevel", {get:createDummyFunction$$module$as3shim$packages({name:"ligatureLevel", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locale", {get:createDummyFunction$$module$as3shim$packages({name:"locale", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locked", {get:createDummyFunction$$module$as3shim$packages({name:"locked", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textRotation", {get:createDummyFunction$$module$as3shim$packages({name:"textRotation", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trackingLeft", {get:createDummyFunction$$module$as3shim$packages({name:"trackingLeft", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trackingRight", {get:createDummyFunction$$module$as3shim$packages({name:"trackingRight", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "typographicCase", {get:createDummyFunction$$module$as3shim$packages({name:"typographicCase", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alignmentBaseline", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alpha", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineShift", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "breakOpportunity", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "color", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitCase", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "digitWidth", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "dominantBaseline", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontDescription", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontSize", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "kerning", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "ligatureLevel", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locale", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locked", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textRotation", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trackingLeft", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "trackingRight", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "typographicCase", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.text.engine.ElementFormat"});
  proto$$module$as3shim$packages.getFontMetrics = createDummyFunction$$module$as3shim$packages({name:"getFontMetrics", returnType:"flash.text.engine.FontMetrics"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextBlock = createDummyFunction$$module$as3shim$packages("TextBlock");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "applyNonLinearFontScaling", {get:createDummyFunction$$module$as3shim$packages({name:"applyNonLinearFontScaling", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineFontDescription", {get:createDummyFunction$$module$as3shim$packages({name:"baselineFontDescription", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineFontSize", {get:createDummyFunction$$module$as3shim$packages({name:"baselineFontSize", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineZero", {get:createDummyFunction$$module$as3shim$packages({name:"baselineZero", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bidiLevel", {get:createDummyFunction$$module$as3shim$packages({name:"bidiLevel", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "content", {get:createDummyFunction$$module$as3shim$packages({name:"content", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "firstInvalidLine", {get:createDummyFunction$$module$as3shim$packages({name:"firstInvalidLine", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "firstLine", {get:createDummyFunction$$module$as3shim$packages({name:"firstLine", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lastLine", {get:createDummyFunction$$module$as3shim$packages({name:"lastLine", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lineRotation", {get:createDummyFunction$$module$as3shim$packages({name:"lineRotation", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "tabStops", {get:createDummyFunction$$module$as3shim$packages({name:"tabStops", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textJustifier", {get:createDummyFunction$$module$as3shim$packages({name:"textJustifier", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textLineCreationResult", {get:createDummyFunction$$module$as3shim$packages({name:"textLineCreationResult", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "applyNonLinearFontScaling", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineFontDescription", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineFontSize", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "baselineZero", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bidiLevel", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "content", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "lineRotation", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "tabStops", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "textJustifier", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.createTextLine = createDummyFunction$$module$as3shim$packages({name:"createTextLine", returnType:"flash.text.engine.TextLine"});
  proto$$module$as3shim$packages.dump = createDummyFunction$$module$as3shim$packages({name:"dump", returnType:"String"});
  proto$$module$as3shim$packages.findNextAtomBoundary = createDummyFunction$$module$as3shim$packages({name:"findNextAtomBoundary", returnType:"int"});
  proto$$module$as3shim$packages.findNextWordBoundary = createDummyFunction$$module$as3shim$packages({name:"findNextWordBoundary", returnType:"int"});
  proto$$module$as3shim$packages.findPreviousAtomBoundary = createDummyFunction$$module$as3shim$packages({name:"findPreviousAtomBoundary", returnType:"int"});
  proto$$module$as3shim$packages.findPreviousWordBoundary = createDummyFunction$$module$as3shim$packages({name:"findPreviousWordBoundary", returnType:"int"});
  proto$$module$as3shim$packages.getTextLineAtCharIndex = createDummyFunction$$module$as3shim$packages({name:"getTextLineAtCharIndex", returnType:"flash.text.engine.TextLine"});
  proto$$module$as3shim$packages.recreateTextLine = createDummyFunction$$module$as3shim$packages({name:"recreateTextLine", returnType:"flash.text.engine.TextLine"});
  proto$$module$as3shim$packages.releaseLineCreationData = createDummyFunction$$module$as3shim$packages({name:"releaseLineCreationData", returnType:"void"});
  proto$$module$as3shim$packages.releaseLines = createDummyFunction$$module$as3shim$packages({name:"releaseLines", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.BreakOpportunity = createDummyFunction$$module$as3shim$packages("BreakOpportunity");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALL", "all");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ANY", "any");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTO", "auto");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.GraphicElement = createDummyFunction$$module$as3shim$packages("GraphicElement");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.text.engine.ContentElement});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementHeight", {get:createDummyFunction$$module$as3shim$packages({name:"elementHeight", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementWidth", {get:createDummyFunction$$module$as3shim$packages({name:"elementWidth", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "graphic", {get:createDummyFunction$$module$as3shim$packages({name:"graphic", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementHeight", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "elementWidth", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "graphic", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontMetrics = createDummyFunction$$module$as3shim$packages("FontMetrics");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextRotation = createDummyFunction$$module$as3shim$packages("TextRotation");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTO", "auto");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROTATE_0", "rotate0");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROTATE_180", "rotate180");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROTATE_270", "rotate270");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ROTATE_90", "rotate90");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.RenderingMode = createDummyFunction$$module$as3shim$packages("RenderingMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CFF", "cff");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NORMAL", "normal");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontPosture = createDummyFunction$$module$as3shim$packages("FontPosture");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ITALIC", "italic");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NORMAL", "normal");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LineJustification = createDummyFunction$$module$as3shim$packages("LineJustification");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALL_BUT_LAST", "allButLast");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALL_INCLUDING_LAST", "allIncludingLast");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNJUSTIFIED", "unjustified");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TextLineValidity = createDummyFunction$$module$as3shim$packages("TextLineValidity");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "INVALID", "invalid");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "POSSIBLY_INVALID", "possiblyInvalid");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "STATIC", "static");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "VALID", "valid");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontDescription = createDummyFunction$$module$as3shim$packages("FontDescription");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "cffHinting", {get:createDummyFunction$$module$as3shim$packages({name:"cffHinting", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontLookup", {get:createDummyFunction$$module$as3shim$packages({name:"fontLookup", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontName", {get:createDummyFunction$$module$as3shim$packages({name:"fontName", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontPosture", {get:createDummyFunction$$module$as3shim$packages({name:"fontPosture", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontWeight", {get:createDummyFunction$$module$as3shim$packages({name:"fontWeight", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locked", {get:createDummyFunction$$module$as3shim$packages({name:"locked", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "renderingMode", {get:createDummyFunction$$module$as3shim$packages({name:"renderingMode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "cffHinting", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontLookup", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontName", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontPosture", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fontWeight", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "locked", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "renderingMode", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages.isDeviceFontCompatible = createDummyFunction$$module$as3shim$packages({name:"isDeviceFontCompatible", returnType:"Boolean"});
  Klass$$module$as3shim$packages.isFontCompatible = createDummyFunction$$module$as3shim$packages({name:"isFontCompatible", returnType:"Boolean"});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.text.engine.FontDescription"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.LigatureLevel = createDummyFunction$$module$as3shim$packages("LigatureLevel");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "COMMON", "common");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "EXOTIC", "exotic");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "MINIMUM", "minimum");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "UNCOMMON", "uncommon");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.JustificationStyle = createDummyFunction$$module$as3shim$packages("JustificationStyle");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PRIORITIZE_LEAST_ADJUSTMENT", "prioritizeLeastAdjustment");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PUSH_IN_KINSOKU", "pushInKinsoku");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PUSH_OUT_ONLY", "pushOutOnly");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TabStop = createDummyFunction$$module$as3shim$packages("TabStop");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alignment", {get:createDummyFunction$$module$as3shim$packages({name:"alignment", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "decimalAlignmentToken", {get:createDummyFunction$$module$as3shim$packages({name:"decimalAlignmentToken", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "position", {get:createDummyFunction$$module$as3shim$packages({name:"position", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "alignment", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "decimalAlignmentToken", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "position", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FontWeight = createDummyFunction$$module$as3shim$packages("FontWeight");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BOLD", "bold");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NORMAL", "normal");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DigitWidth = createDummyFunction$$module$as3shim$packages("DigitWidth");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEFAULT", "default");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "PROPORTIONAL", "proportional");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TABULAR", "tabular");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.TabAlignment = createDummyFunction$$module$as3shim$packages("TabAlignment");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "CENTER", "center");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DECIMAL", "decimal");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "END", "end");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "START", "start");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DigitCase = createDummyFunction$$module$as3shim$packages("DigitCase");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "DEFAULT", "default");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LINING", "lining");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OLD_STYLE", "oldStyle");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SpaceJustifier = createDummyFunction$$module$as3shim$packages("SpaceJustifier");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.text.engine.TextJustifier});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "letterSpacing", {get:createDummyFunction$$module$as3shim$packages({name:"letterSpacing", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "maximumSpacing", {get:createDummyFunction$$module$as3shim$packages({name:"maximumSpacing", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "minimumSpacing", {get:createDummyFunction$$module$as3shim$packages({name:"minimumSpacing", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "optimumSpacing", {get:createDummyFunction$$module$as3shim$packages({name:"optimumSpacing", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "letterSpacing", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "maximumSpacing", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "minimumSpacing", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "optimumSpacing", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.text.engine.TextJustifier"});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.text.ime");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.CompositionAttributeRange = createDummyFunction$$module$as3shim$packages("CompositionAttributeRange");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("flash.trace");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Trace = createDummyFunction$$module$as3shim$packages("Trace");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "FILE", 1);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LISTENER", 2);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "METHODS", 1);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "METHODS_AND_LINES", 3);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "METHODS_AND_LINES_WITH_ARGS", 4);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "METHODS_WITH_ARGS", 2);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "OFF", 0);
  Klass$$module$as3shim$packages.getLevel = createDummyFunction$$module$as3shim$packages({name:"getLevel", returnType:"int"});
  Klass$$module$as3shim$packages.getListener = createDummyFunction$$module$as3shim$packages({name:"getListener", returnType:"Function"});
  Klass$$module$as3shim$packages.setLevel = createDummyFunction$$module$as3shim$packages({name:"setLevel", returnType:""});
  Klass$$module$as3shim$packages.setListener = createDummyFunction$$module$as3shim$packages({name:"setListener", returnType:""});
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.ui;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ContextMenu = createDummyFunction$$module$as3shim$packages("ContextMenu");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.NativeMenu});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "isSupported", {get:createDummyFunction$$module$as3shim$packages({name:"isSupported", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "builtInItems", {get:createDummyFunction$$module$as3shim$packages({name:"builtInItems", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clipboardItems", {get:createDummyFunction$$module$as3shim$packages({name:"clipboardItems", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clipboardMenu", {get:createDummyFunction$$module$as3shim$packages({name:"clipboardMenu", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "customItems", {get:createDummyFunction$$module$as3shim$packages({name:"customItems", returnType:"Array"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "link", {get:createDummyFunction$$module$as3shim$packages({name:"link", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "builtInItems", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clipboardItems", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clipboardMenu", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "customItems", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "link", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.ui.ContextMenu"});
  proto$$module$as3shim$packages.hideBuiltInItems = createDummyFunction$$module$as3shim$packages({name:"hideBuiltInItems", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Mouse;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MouseCursor = createDummyFunction$$module$as3shim$packages("MouseCursor");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ARROW", "arrow");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "AUTO", "auto");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "BUTTON", "button");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "HAND", "hand");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "IBEAM", "ibeam");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Multitouch = createDummyFunction$$module$as3shim$packages("Multitouch");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "inputMode", {get:createDummyFunction$$module$as3shim$packages({name:"inputMode", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "maxTouchPoints", {get:createDummyFunction$$module$as3shim$packages({name:"maxTouchPoints", returnType:"int"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "supportedGestures", {get:createDummyFunction$$module$as3shim$packages({name:"supportedGestures", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "supportsGestureEvents", {get:createDummyFunction$$module$as3shim$packages({name:"supportsGestureEvents", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "supportsTouchEvents", {get:createDummyFunction$$module$as3shim$packages({name:"supportsTouchEvents", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "inputMode", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MultitouchInputMode = createDummyFunction$$module$as3shim$packages("MultitouchInputMode");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "GESTURE", "gesture");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "TOUCH_POINT", "touchPoint");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ContextMenuClipboardItems = createDummyFunction$$module$as3shim$packages("ContextMenuClipboardItems");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clear", {get:createDummyFunction$$module$as3shim$packages({name:"clear", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "copy", {get:createDummyFunction$$module$as3shim$packages({name:"copy", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "cut", {get:createDummyFunction$$module$as3shim$packages({name:"cut", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "paste", {get:createDummyFunction$$module$as3shim$packages({name:"paste", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "selectAll", {get:createDummyFunction$$module$as3shim$packages({name:"selectAll", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "clear", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "copy", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "cut", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "paste", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "selectAll", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.ui.ContextMenuClipboardItems"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ContextMenuItem = createDummyFunction$$module$as3shim$packages("ContextMenuItem");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.display.NativeMenuItem});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "caption", {get:createDummyFunction$$module$as3shim$packages({name:"caption", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "separatorBefore", {get:createDummyFunction$$module$as3shim$packages({name:"separatorBefore", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "visible", {get:createDummyFunction$$module$as3shim$packages({name:"visible", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "caption", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "separatorBefore", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "visible", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.ui.ContextMenuItem"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.KeyLocation = createDummyFunction$$module$as3shim$packages("KeyLocation");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "D_PAD", 4);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "LEFT", 1);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NUM_PAD", 3);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "RIGHT", 2);
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "STANDARD", 0);
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.MouseCursorData = createDummyFunction$$module$as3shim$packages("MouseCursorData");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "data", {get:createDummyFunction$$module$as3shim$packages({name:"data", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "frameRate", {get:createDummyFunction$$module$as3shim$packages({name:"frameRate", returnType:"Number"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "hotSpot", {get:createDummyFunction$$module$as3shim$packages({name:"hotSpot", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "data", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "frameRate", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "hotSpot", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ContextMenuBuiltInItems = createDummyFunction$$module$as3shim$packages("ContextMenuBuiltInItems");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "forwardAndBack", {get:createDummyFunction$$module$as3shim$packages({name:"forwardAndBack", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "loop", {get:createDummyFunction$$module$as3shim$packages({name:"loop", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "play", {get:createDummyFunction$$module$as3shim$packages({name:"play", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "print", {get:createDummyFunction$$module$as3shim$packages({name:"print", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {get:createDummyFunction$$module$as3shim$packages({name:"quality", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rewind", {get:createDummyFunction$$module$as3shim$packages({name:"rewind", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "save", {get:createDummyFunction$$module$as3shim$packages({name:"save", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "zoom", {get:createDummyFunction$$module$as3shim$packages({name:"zoom", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "forwardAndBack", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "loop", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "play", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "print", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "quality", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "rewind", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "save", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "zoom", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.clone = createDummyFunction$$module$as3shim$packages({name:"clone", returnType:"flash.ui.ContextMenuBuiltInItems"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.KeyboardType = createDummyFunction$$module$as3shim$packages("KeyboardType");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "ALPHANUMERIC", "alphanumeric");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "KEYPAD", "keypad");
  setConst$$module$as3shim$packages(Klass$$module$as3shim$packages, "NONE", "none");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Keyboard;
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.utils;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Timer;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Endian;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Dictionary;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Proxy = createDummyFunction$$module$as3shim$packages("Proxy");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ByteArray;
  root$$module$as3shim$packages = exposes$$module$as3shim$packages.flash.xml;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLNodeType;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLNode;
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLDocument;
  root$$module$as3shim$packages = createNamespace$$module$as3shim$packages("internal");
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Vector$object = createDummyFunction$$module$as3shim$packages("Vector$object");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {get:createDummyFunction$$module$as3shim$packages({name:"fixed", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {get:createDummyFunction$$module$as3shim$packages({name:"length", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Vector$int = createDummyFunction$$module$as3shim$packages("Vector$int");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {get:createDummyFunction$$module$as3shim$packages({name:"fixed", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {get:createDummyFunction$$module$as3shim$packages({name:"length", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Vector$uint = createDummyFunction$$module$as3shim$packages("Vector$uint");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {get:createDummyFunction$$module$as3shim$packages({name:"fixed", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {get:createDummyFunction$$module$as3shim$packages({name:"length", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.Vector$double = createDummyFunction$$module$as3shim$packages("Vector$double");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {get:createDummyFunction$$module$as3shim$packages({name:"fixed", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {get:createDummyFunction$$module$as3shim$packages({name:"length", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "fixed", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "length", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLTag = createDummyFunction$$module$as3shim$packages("XMLTag");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "attrs", {get:createDummyFunction$$module$as3shim$packages({name:"attrs", returnType:"Object"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "empty", {get:createDummyFunction$$module$as3shim$packages({name:"empty", returnType:"Boolean"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {get:createDummyFunction$$module$as3shim$packages({name:"type", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "value", {get:createDummyFunction$$module$as3shim$packages({name:"value", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "attrs", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "empty", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "type", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "value", {set:noop$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.WeakMethodClosure = createDummyFunction$$module$as3shim$packages("WeakMethodClosure");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.WeakFunctionClosure = createDummyFunction$$module$as3shim$packages("WeakFunctionClosure");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ObjectInput = createDummyFunction$$module$as3shim$packages("ObjectInput");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "bytesAvailable", {get:createDummyFunction$$module$as3shim$packages({name:"bytesAvailable", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "endian", {get:createDummyFunction$$module$as3shim$packages({name:"endian", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "objectEncoding", {get:createDummyFunction$$module$as3shim$packages({name:"objectEncoding", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "endian", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "objectEncoding", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.readBoolean = createDummyFunction$$module$as3shim$packages({name:"readBoolean", returnType:"Boolean"});
  proto$$module$as3shim$packages.readByte = createDummyFunction$$module$as3shim$packages({name:"readByte", returnType:"int"});
  proto$$module$as3shim$packages.readBytes = createDummyFunction$$module$as3shim$packages({name:"readBytes", returnType:"void"});
  proto$$module$as3shim$packages.readDouble = createDummyFunction$$module$as3shim$packages({name:"readDouble", returnType:"Number"});
  proto$$module$as3shim$packages.readFloat = createDummyFunction$$module$as3shim$packages({name:"readFloat", returnType:"Number"});
  proto$$module$as3shim$packages.readInt = createDummyFunction$$module$as3shim$packages({name:"readInt", returnType:"int"});
  proto$$module$as3shim$packages.readMultiByte = createDummyFunction$$module$as3shim$packages({name:"readMultiByte", returnType:"String"});
  proto$$module$as3shim$packages.readObject = createDummyFunction$$module$as3shim$packages({name:"readObject", returnType:""});
  proto$$module$as3shim$packages.readShort = createDummyFunction$$module$as3shim$packages({name:"readShort", returnType:"int"});
  proto$$module$as3shim$packages.readUnsignedByte = createDummyFunction$$module$as3shim$packages({name:"readUnsignedByte", returnType:"uint"});
  proto$$module$as3shim$packages.readUnsignedInt = createDummyFunction$$module$as3shim$packages({name:"readUnsignedInt", returnType:"uint"});
  proto$$module$as3shim$packages.readUnsignedShort = createDummyFunction$$module$as3shim$packages({name:"readUnsignedShort", returnType:"uint"});
  proto$$module$as3shim$packages.readUTF = createDummyFunction$$module$as3shim$packages({name:"readUTF", returnType:"String"});
  proto$$module$as3shim$packages.readUTFBytes = createDummyFunction$$module$as3shim$packages({name:"readUTFBytes", returnType:"String"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMManagerSession = createDummyFunction$$module$as3shim$packages("DRMManagerSession");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "metadata", {get:createDummyFunction$$module$as3shim$packages({name:"metadata", returnType:""})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "metadata", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.checkStatus = createDummyFunction$$module$as3shim$packages({name:"checkStatus", returnType:"uint"});
  proto$$module$as3shim$packages.errorCodeToThrow = createDummyFunction$$module$as3shim$packages({name:"errorCodeToThrow", returnType:"void"});
  proto$$module$as3shim$packages.getLastError = createDummyFunction$$module$as3shim$packages({name:"getLastError", returnType:"uint"});
  proto$$module$as3shim$packages.getLastSubErrorID = createDummyFunction$$module$as3shim$packages({name:"getLastSubErrorID", returnType:"uint"});
  proto$$module$as3shim$packages.issueDRMErrorEvent = createDummyFunction$$module$as3shim$packages({name:"issueDRMErrorEvent", returnType:"void"});
  proto$$module$as3shim$packages.issueDRMStatusEvent = createDummyFunction$$module$as3shim$packages({name:"issueDRMStatusEvent", returnType:""});
  proto$$module$as3shim$packages.onSessionComplete = createDummyFunction$$module$as3shim$packages({name:"onSessionComplete", returnType:"void"});
  proto$$module$as3shim$packages.onSessionError = createDummyFunction$$module$as3shim$packages({name:"onSessionError", returnType:"void"});
  proto$$module$as3shim$packages.setTimerUp = createDummyFunction$$module$as3shim$packages({name:"setTimerUp", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMAuthenticationContext = createDummyFunction$$module$as3shim$packages("DRMAuthenticationContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.DRMManagerSession});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "authenticationToken", {get:createDummyFunction$$module$as3shim$packages({name:"authenticationToken", returnType:""})});
  proto$$module$as3shim$packages.authenticate = createDummyFunction$$module$as3shim$packages({name:"authenticate", returnType:"void"});
  proto$$module$as3shim$packages.checkStatus = createDummyFunction$$module$as3shim$packages({name:"checkStatus", returnType:"uint"});
  proto$$module$as3shim$packages.onSessionComplete = createDummyFunction$$module$as3shim$packages({name:"onSessionComplete", returnType:"void"});
  proto$$module$as3shim$packages.onSessionError = createDummyFunction$$module$as3shim$packages({name:"onSessionError", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMVoucherDownloadContext = createDummyFunction$$module$as3shim$packages("DRMVoucherDownloadContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.DRMManagerSession});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "voucher", {get:createDummyFunction$$module$as3shim$packages({name:"voucher", returnType:""})});
  proto$$module$as3shim$packages.checkStatus = createDummyFunction$$module$as3shim$packages({name:"checkStatus", returnType:"uint"});
  proto$$module$as3shim$packages.download = createDummyFunction$$module$as3shim$packages({name:"download", returnType:"void"});
  proto$$module$as3shim$packages.onSessionComplete = createDummyFunction$$module$as3shim$packages({name:"onSessionComplete", returnType:"void"});
  proto$$module$as3shim$packages.onSessionError = createDummyFunction$$module$as3shim$packages({name:"onSessionError", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMVoucherStoreContext = createDummyFunction$$module$as3shim$packages("DRMVoucherStoreContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.DRMManagerSession});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "voucher", {get:createDummyFunction$$module$as3shim$packages({name:"voucher", returnType:""})});
  proto$$module$as3shim$packages.checkStatus = createDummyFunction$$module$as3shim$packages({name:"checkStatus", returnType:"uint"});
  proto$$module$as3shim$packages.getVoucherFromStore = createDummyFunction$$module$as3shim$packages({name:"getVoucherFromStore", returnType:"void"});
  proto$$module$as3shim$packages.onSessionComplete = createDummyFunction$$module$as3shim$packages({name:"onSessionComplete", returnType:"void"});
  proto$$module$as3shim$packages.onSessionError = createDummyFunction$$module$as3shim$packages({name:"onSessionError", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMModuleCycleProvider = createDummyFunction$$module$as3shim$packages("DRMModuleCycleProvider");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMURLDownloadContext = createDummyFunction$$module$as3shim$packages("DRMURLDownloadContext");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.events.EventDispatcher});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.FSCommand = createDummyFunction$$module$as3shim$packages("FSCommand");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages._fscommand = createDummyFunction$$module$as3shim$packages({name:"_fscommand", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.SetIntervalTimer = createDummyFunction$$module$as3shim$packages("SetIntervalTimer");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages, superClass:exposes$$module$as3shim$packages.flash.utils.Timer});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.XMLParser = createDummyFunction$$module$as3shim$packages("XMLParser");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.getNext = createDummyFunction$$module$as3shim$packages({name:"getNext", returnType:"int"});
  proto$$module$as3shim$packages.startParse = createDummyFunction$$module$as3shim$packages({name:"startParse", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DynamicPropertyOutput = createDummyFunction$$module$as3shim$packages("DynamicPropertyOutput");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  proto$$module$as3shim$packages.writeDynamicProperty = createDummyFunction$$module$as3shim$packages({name:"writeDynamicProperty", returnType:"void"});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.DRMCustomProperties = createDummyFunction$$module$as3shim$packages("DRMCustomProperties");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  Klass$$module$as3shim$packages = root$$module$as3shim$packages.ObjectOutput = createDummyFunction$$module$as3shim$packages("ObjectOutput");
  Class$$module$as3shim$packages({constructor:Klass$$module$as3shim$packages});
  proto$$module$as3shim$packages = Klass$$module$as3shim$packages.prototype;
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "endian", {get:createDummyFunction$$module$as3shim$packages({name:"endian", returnType:"String"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "objectEncoding", {get:createDummyFunction$$module$as3shim$packages({name:"objectEncoding", returnType:"uint"})});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "endian", {set:noop$$module$as3shim$packages});
  setDescriptor$$module$as3shim$packages(proto$$module$as3shim$packages, "objectEncoding", {set:noop$$module$as3shim$packages});
  proto$$module$as3shim$packages.writeBoolean = createDummyFunction$$module$as3shim$packages({name:"writeBoolean", returnType:"void"});
  proto$$module$as3shim$packages.writeByte = createDummyFunction$$module$as3shim$packages({name:"writeByte", returnType:"void"});
  proto$$module$as3shim$packages.writeBytes = createDummyFunction$$module$as3shim$packages({name:"writeBytes", returnType:"void"});
  proto$$module$as3shim$packages.writeDouble = createDummyFunction$$module$as3shim$packages({name:"writeDouble", returnType:"void"});
  proto$$module$as3shim$packages.writeFloat = createDummyFunction$$module$as3shim$packages({name:"writeFloat", returnType:"void"});
  proto$$module$as3shim$packages.writeInt = createDummyFunction$$module$as3shim$packages({name:"writeInt", returnType:"void"});
  proto$$module$as3shim$packages.writeMultiByte = createDummyFunction$$module$as3shim$packages({name:"writeMultiByte", returnType:"void"});
  proto$$module$as3shim$packages.writeObject = createDummyFunction$$module$as3shim$packages({name:"writeObject", returnType:"void"});
  proto$$module$as3shim$packages.writeShort = createDummyFunction$$module$as3shim$packages({name:"writeShort", returnType:"void"});
  proto$$module$as3shim$packages.writeUnsignedInt = createDummyFunction$$module$as3shim$packages({name:"writeUnsignedInt", returnType:"void"});
  proto$$module$as3shim$packages.writeUTF = createDummyFunction$$module$as3shim$packages({name:"writeUTF", returnType:"void"});
  proto$$module$as3shim$packages.writeUTFBytes = createDummyFunction$$module$as3shim$packages({name:"writeUTFBytes", returnType:"void"});
  module$as3shim$packages.module$exports = tools$$module$as3shim$packages.mixin(plugins$$module$as3shim$packages, exposes$$module$as3shim$packages);
  module$as3shim$packages.module$exports && (module$as3shim$packages = module$as3shim$packages.module$exports);
  var module$as3shim$as3shim = {}, plugins$$module$as3shim$as3shim = module$as3shim$packages;
  module$as3shim$as3shim.module$exports = plugins$$module$as3shim$as3shim;
  module$as3shim$as3shim.module$exports && (module$as3shim$as3shim = module$as3shim$as3shim.module$exports)
})();


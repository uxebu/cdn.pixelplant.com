/**
 * as3vm is (C) 2012 uxebu Inc.
 * 
 * No permission or right to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software is granted.
 * All rights reserved to the copyright holders.
 */
(function() {
  var module$ecma = {}, Ecma$$module$ecma = {DefaultValue:function(a, b) {
    if("String" === b) {
      if("function" == typeof a.toString) {
        var c = a.toString();
        if(null == c || "string" == typeof c || "boolean" == typeof c || "number" == typeof c) {
          return c
        }
      }
      if("function" == typeof a.valueOf && (c = a.valueOf(), null == c || "string" == typeof c || "boolean" == typeof c || "number" == typeof c)) {
        return c
      }
      throw new TypeError("Ecma.DefaultValue: unable to get the default value for hint String");
    }
    if("Number" === b || !b) {
      if("function" == typeof a.valueOf && (c = a.valueOf(), null == c || "string" == typeof c || "boolean" == typeof c || "number" == typeof c) || "function" == typeof a.toString && (c = a.toString(), null == c || "string" == typeof c || "boolean" == typeof c || "number" == typeof c)) {
        return c
      }
      throw new TypeError("Ecma.DefaultValue: unable to get the default value for hint Number");
    }
    throw Error("WTF? hint should always be Number or String");
  }, ToPrimitive:function(a, b) {
    return null == a || "object" != typeof a ? a : Ecma$$module$ecma.DefaultValue(a, b)
  }, ToNumber:function(a) {
    return+a
  }, ToBoolean:function(a) {
    return!!a
  }, ToInt32:function(a) {
    return a | 0
  }, ToString:function(a) {
    return"" + a
  }, ToUint32:function(a) {
    return a >>> 0
  }, Type:function(a) {
    return void 0 === a ? "undefined" : null === a ? "null" : "boolean" == typeof a ? "boolean" : "number" == typeof a ? "number" : "string" == typeof a ? "string" : "object"
  }};
  module$ecma.module$exports = Ecma$$module$ecma;
  module$ecma.module$exports && (module$ecma = module$ecma.module$exports);
  var module$coerce = {}, Ecma$$module$coerce = module$ecma, coerce$$module$coerce = {explicitlyCoerce:function(a, b, c) {
    var d = !1;
    switch(typeof a) {
      case "undefined":
        a = null;
        break;
      case "string":
        b != c.Object && b != c.String && (d = "string");
        break;
      case "number":
        b != c.Object && b != c.Number && (d = "number");
        break;
      case "boolean":
        b != c.Object && b != c.Boolean && (d = "boolean");
        break;
      case "object":
      ;
      case "function":
      ;
      case "xml":
        null !== a && (a instanceof b || (d = "object"))
    }
    if(d) {
      throw new TypeError("Error #1034: Value of type " + d + " can not be coerced to target type");
    }
    return a
  }, applyClassCoercion:function(a, b, c, d) {
    if(b.__isClass__) {
      var e = null;
      switch(b instanceof d.Error ? d.Error : b) {
        case d.Boolean:
        ;
        case d.String:
        ;
        case d.Number:
        ;
        case d.RegExp:
        ;
        case d["int"]:
        ;
        case d.uint:
        ;
        case d.Function:
        ;
        case d.Error:
        ;
        case d.Namespace:
          e = b.apply(a, c);
          break;
        case d.Array:
          if(1 == c.length && "number" == typeof c[0]) {
            d = c[0];
            if(d % 1) {
              throw new RangeError("Error #1005: new Array does not accept a single fraction number for initialization");
            }
            if(0 > d) {
              throw new RangeError("Error #1005: new Array does not accept a single negative number for initialization");
            }
            if(isNaN(d)) {
              throw new RangeError("Error #1005: new Array does not accept a NaN for initialization");
            }
          }
          e = b.apply(a, c);
          break;
        default:
          if(1 != c.length) {
            throw new TypeError("Error #1112: Argument count mismatch on class coercion. Expected 1, got " + c.length);
          }
          e = this.explicitlyCoerce(c[0], b, d)
      }
      return e
    }
    console.warn("as3vm/coerce.js:applyClassCoercion:please report this error to peter and how/where you got it")
  }, safeCoercion:function(a, b, c, d) {
    switch(d) {
      case "string":
        return c(Ecma$$module$coerce.ToString(a), Ecma$$module$coerce.ToString(b));
      case "number":
        return c(Ecma$$module$coerce.ToNumber(a), Ecma$$module$coerce.ToNumber(b));
      case "boolean":
        return c(Ecma$$module$coerce.ToBoolean(a), Ecma$$module$coerce.ToBoolean(b));
      case "add":
        return a = Ecma$$module$coerce.ToPrimitive(a), b = Ecma$$module$coerce.ToPrimitive(b), "string" == typeof a || "string" == typeof b ? c(Ecma$$module$coerce.ToString(a), Ecma$$module$coerce.ToString(b), c) : c(Ecma$$module$coerce.ToNumber(a), Ecma$$module$coerce.ToNumber(b), c);
      case "equals":
        return this.coerceForEquals(a, b, c)
    }
    if(d && "compare" != d) {
      throw"op.js: safeCoercion: unexpected hint [" + d + "]";
    }
    return this.coerceForComparison(a, b, c)
  }, coerceForComparison:function(a, b, c) {
    var a = Ecma$$module$coerce.ToPrimitive(a, "Number"), b = Ecma$$module$coerce.ToPrimitive(b, "Number"), d = Ecma$$module$coerce.Type(a), e = Ecma$$module$coerce.Type(b);
    if("string" != d || "string" != e) {
      a = Ecma$$module$coerce.ToNumber(a), b = Ecma$$module$coerce.ToNumber(b)
    }
    return c(a, b)
  }, coerceForEquals:function(a, b, c) {
    if(a === b) {
      return c(a, b)
    }
    var d = Ecma$$module$coerce.Type(a), e = Ecma$$module$coerce.Type(b);
    return d === e || null == a && null == b ? c(a, b) : "number" == d && "string" == e ? this._coerceForEquals(a, Ecma$$module$coerce.ToNumber(b), c) : "string" == d && "number" == e || "boolean" == d ? this._coerceForEquals(Ecma$$module$coerce.ToNumber(a), b, c) : "boolean" == e ? this._coerceForEquals(a, Ecma$$module$coerce.ToNumber(b), c) : ("number" == d || "string" == d) && "object" == e ? this._coerceForEquals(a, Ecma$$module$coerce.ToPrimitive(b), c) : "object" == d && ("number" == e || "string" == 
    e) ? this._coerceForEquals(Ecma$$module$coerce.ToPrimitive(a), b, c) : !1
  }};
  module$coerce.module$exports = coerce$$module$coerce;
  module$coerce.module$exports && (module$coerce = module$coerce.module$exports);
  var module$global = {};
  module$global.module$exports = Function("return this")();
  module$global.module$exports && (module$global = module$global.module$exports);
  var module$method_closure = {}, global$$module$method_closure = module$global;
  function create$$module$method_closure(a, b) {
    var c = global$$module$method_closure.exports.tools.hitch, d = c(a, b);
    Object.defineProperties(d, {__isMethodClosure__:{value:!0}, apply:{value:c(d, d.apply)}, call:{value:c(d, d.call)}});
    return d
  }
  function shouldCreate$$module$method_closure(a, b) {
    return b && b.__isMethod__
  }
  module$method_closure.module$exports = {create:create$$module$method_closure, shouldCreate:shouldCreate$$module$method_closure};
  module$method_closure.module$exports && (module$method_closure = module$method_closure.module$exports);
  var module$method_signature = {}, ret$$module$method_signature = {create:function(a, b) {
    var c = parseParameters$$module$method_signature(a, b.param_type), d = a.multinames[b.return_type], e = parseName$$module$method_signature(a, b.name), f = parseFlags$$module$method_signature(b.flags), g = parseOptions$$module$method_signature(a, f, b.options), h = parseParameterNames$$module$method_signature(a, f, b.param_names);
    return new MethodSignature$$module$method_signature(c, d, e, f, g, h)
  }};
  function parseOptions$$module$method_signature(a, b, c) {
    if(b.hasOptionalParameters) {
      return c.option.map(function(b) {
        return a.getConstant(b.kind, b.value)
      })
    }
  }
  function parseParameters$$module$method_signature(a, b) {
    return b.map(function(b) {
      return 0 === b ? "*" : a.multinames[b]
    })
  }
  function parseParameterNames$$module$method_signature(a, b, c) {
    if(b.hasParameterNames) {
      return c.map(function(b) {
        return a.strings[b]
      })
    }
  }
  function parseFlags$$module$method_signature(a) {
    return{needsArguments:!!(a & 1), needsActivation:!!(a & 2), needsRestArguments:!!(a & 4), hasOptionalParameters:!!(a & 8), usesDxns:!!(a & 64), hasParameterNames:!!(a & 128)}
  }
  function parseName$$module$method_signature(a, b) {
    if(0 !== b) {
      return a.strings[b]
    }
  }
  var MethodSignature$$module$method_signature = ret$$module$method_signature.MethodSignature = function(a, b, c, d, e, f) {
    this.parameters = a;
    this.returnType = b;
    this.name = c;
    this.needsArguments = d.needsArguments;
    this.needsActivation = d.needsActivation;
    this.needsRestArguments = d.needsRestArguments;
    this.usesDxns = d.usesDxns;
    this.optionalParameters = e;
    this.parameterNames = f
  };
  module$method_signature.module$exports = ret$$module$method_signature;
  module$method_signature.module$exports && (module$method_signature = module$method_signature.module$exports);
  var module$namespace = {};
  function create$$module$namespace(a, b) {
    var c = b.name;
    return new kinds$$module$namespace[b.kind](0 !== c ? a.strings[c] : "")
  }
  function Namespace$$module$namespace(a) {
    this.name = a
  }
  function PackageNamespace$$module$namespace(a) {
    this.name = a
  }
  function PackageInternalNamespace$$module$namespace(a) {
    this.name = a
  }
  function ProtectedNamespace$$module$namespace(a) {
    this.name = a
  }
  function ExplicitNamespace$$module$namespace(a) {
    this.name = a
  }
  function StaticProtectedNamespace$$module$namespace(a) {
    this.name = a
  }
  function PrivateNamespace$$module$namespace(a) {
    this.name = a
  }
  Namespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return"" === this.name
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  PackageNamespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return"" === this.name
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  PackageInternalNamespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return!1
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  ProtectedNamespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return!1
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  ExplicitNamespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return!1
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  StaticProtectedNamespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return!1
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  PrivateNamespace$$module$namespace.prototype = {isPublicNamespace:function() {
    return!1
  }, match:function(a) {
    return this.name === a.name
  }, toString:function() {
    return this.name
  }};
  var kinds$$module$namespace = {8:Namespace$$module$namespace, 22:PackageNamespace$$module$namespace, 23:PackageInternalNamespace$$module$namespace, 24:ProtectedNamespace$$module$namespace, 25:ExplicitNamespace$$module$namespace, 26:StaticProtectedNamespace$$module$namespace, 5:PrivateNamespace$$module$namespace};
  module$namespace.module$exports = {create:create$$module$namespace, Namespace:Namespace$$module$namespace, PackageNamespace:PackageNamespace$$module$namespace, PackageInternalNamespace:PackageInternalNamespace$$module$namespace, ProtectedNamespace:ProtectedNamespace$$module$namespace, ExplicitNamespace:ExplicitNamespace$$module$namespace, StaticProtectedNamespace:StaticProtectedNamespace$$module$namespace, PrivateNamespace:PrivateNamespace$$module$namespace};
  module$namespace.module$exports && (module$namespace = module$namespace.module$exports);
  var module$multiname = {}, method_closure$$module$multiname = module$method_closure, namespace$$module$multiname = module$namespace;
  function QName$$module$multiname(a, b) {
    this.namespace = a;
    this.name = b
  }
  QName$$module$multiname.create = function(a, b) {
    return new QName$$module$multiname(a.namespaces[b.ns], a.strings[b.name])
  };
  QName$$module$multiname.fromStrings = function(a, b) {
    var c = "" === a ? new namespace$$module$multiname.PackageNamespace("") : new namespace$$module$multiname.Namespace(a);
    return new QName$$module$multiname(c, b)
  };
  QName$$module$multiname.fromSymbolClass = function(a) {
    var b = a.split("."), a = b.pop(), b = b.join(".");
    return QName$$module$multiname.fromStrings(b, a)
  };
  QName$$module$multiname.parse = function(a) {
    var b = a.split("\u03bb"), a = b.pop(), b = b.join("\u03bb");
    return QName$$module$multiname.fromStrings(b, a)
  };
  QName$$module$multiname.prototype.deleteFrom = function(a) {
    var b = this.toProperty(), c = Object.getOwnPropertyDescriptor(a, b);
    return c && c.configurable ? delete a[b] : !1
  };
  QName$$module$multiname.prototype.getFrom = function(a) {
    var b = this.getUnboundFrom(a);
    method_closure$$module$multiname.shouldCreate(a, b) && (b = method_closure$$module$multiname.create(a, b), this.setIn(a, b, {}));
    return b
  };
  QName$$module$multiname.prototype.getUnboundFrom = function(a) {
    var b = this.toProperty();
    return a[b]
  };
  QName$$module$multiname.prototype.inObject = function(a) {
    return this.toProperty() in Object(a)
  };
  QName$$module$multiname.prototype.isPublic = function() {
    return this.namespace.isPublicNamespace()
  };
  QName$$module$multiname.prototype.match = function(a) {
    return this.name === a.name && this.namespace.match(a.namespace)
  };
  QName$$module$multiname.prototype.resolve = function() {
    return this
  };
  QName$$module$multiname.prototype.setIn = function(a, b, c) {
    c ? (c.value = b, Object.defineProperty(a, this.toProperty(), c)) : a[this.toProperty()] = b
  };
  QName$$module$multiname.prototype.toProperty = function() {
    return this.isPublic() ? this.name : this.namespace.name + "\u03bb" + this.name
  };
  QName$$module$multiname.prototype.toString = function() {
    return this.isPublic() ? this.name : this.namespace + "." + this.name
  };
  function RTQName$$module$multiname(a) {
    this.name = a
  }
  RTQName$$module$multiname.create = function(a, b) {
    return new RTQName$$module$multiname(a.strings[b.name])
  };
  RTQName$$module$multiname.prototype.resolve = function(a) {
    a = a.pop();
    return new QName$$module$multiname(a, this.name)
  };
  function RTQNameL$$module$multiname() {
  }
  RTQNameL$$module$multiname.create = function() {
    return new RTQNameL$$module$multiname
  };
  RTQNameL$$module$multiname.prototype.resolve = function(a) {
    var b = a.pop(), a = a.pop();
    return new QName$$module$multiname(a, b)
  };
  function Multiname$$module$multiname(a, b) {
    this.namespaceSet = a;
    this.name = b
  }
  Multiname$$module$multiname.create = function(a, b) {
    return new Multiname$$module$multiname(a.namespaceSets[b.ns_set], a.strings[b.name])
  };
  Multiname$$module$multiname.prototype.deleteFrom = function(a) {
    var b = !0;
    this.qnames().some(function(c) {
      if(c.inObject(a)) {
        return b = c.deleteFrom(a), !0
      }
    });
    return b
  };
  Multiname$$module$multiname.prototype.getFrom = function(a) {
    var b;
    this.qnames().some(function(c) {
      if(c.inObject(a)) {
        return b = c.getFrom(a), !0
      }
    }, this);
    return b
  };
  Multiname$$module$multiname.prototype.getUnboundFrom = function(a) {
    var b;
    this.qnames().some(function(c) {
      if(c.inObject(a)) {
        return b = c.getUnboundFrom(a), !0
      }
    }, this);
    return b
  };
  Multiname$$module$multiname.prototype.inObject = function(a) {
    return this.qnames().some(function(b) {
      return b.inObject(a)
    })
  };
  Multiname$$module$multiname.prototype.match = function(a) {
    return this.name === a.name && this.namespaceSet.match(a.namespace)
  };
  Multiname$$module$multiname.prototype.resolve = function() {
    return this
  };
  Multiname$$module$multiname.prototype.setIn = function(a, b, c) {
    if(!this.qnames().some(function(d) {
      if(d.inObject(a) || d.isPublic()) {
        return d.setIn(a, b, c), !0
      }
    })) {
      throw new TypeError("Cannot find property '" + this + "' in object");
    }
  };
  Multiname$$module$multiname.prototype.toString = function() {
    return this.namespaceSet + "." + this.name
  };
  Multiname$$module$multiname.prototype.qnames = function() {
    return this.namespaceSet.namespaces.map(function(a) {
      return new QName$$module$multiname(a, this.name)
    }, this)
  };
  function MultinameL$$module$multiname(a) {
    this.namespaceSet = a
  }
  MultinameL$$module$multiname.create = function(a, b) {
    return new MultinameL$$module$multiname(a.namespaceSets[b.ns_set])
  };
  MultinameL$$module$multiname.prototype.resolve = function(a) {
    a = a.pop();
    return new Multiname$$module$multiname(this.namespaceSet, a)
  };
  function Typename$$module$multiname(a, b) {
    this.type = a;
    this.parameter = b
  }
  Typename$$module$multiname.create = function(a, b) {
    var c = new Typename$$module$multiname;
    c.typeIndex = b.type;
    c.parameterIndex = b.param;
    return c
  };
  Typename$$module$multiname.prototype = Object.create(QName$$module$multiname.prototype);
  Typename$$module$multiname.prototype.isPublic = function() {
    return!0
  };
  Typename$$module$multiname.prototype.isTypename = !0;
  Typename$$module$multiname.prototype.resolveType = function(a) {
    this.type = a.multinames[this.typeIndex];
    this.parameter = a.multinames[this.parameterIndex]
  };
  Typename$$module$multiname.prototype.toProperty = function() {
    return this.type.toProperty() + "$" + this.parameter.toProperty()
  };
  Typename$$module$multiname.prototype.toString = function() {
    return this.type + "$" + this.parameter
  };
  function create$$module$multiname(a, b) {
    var c = b.kind, d = kinds$$module$multiname[c];
    if(!d) {
      throw Error("Encountered unknown kind... [" + c + "]");
    }
    return d.create(a, b.data)
  }
  var kinds$$module$multiname = {7:QName$$module$multiname, 13:QName$$module$multiname, 15:RTQName$$module$multiname, 16:RTQName$$module$multiname, 17:RTQNameL$$module$multiname, 18:RTQNameL$$module$multiname, 9:Multiname$$module$multiname, 14:Multiname$$module$multiname, 27:MultinameL$$module$multiname, 28:MultinameL$$module$multiname, 29:Typename$$module$multiname};
  module$multiname.module$exports = {Multiname:Multiname$$module$multiname, MultinameL:MultinameL$$module$multiname, QName:QName$$module$multiname, RTQName:RTQName$$module$multiname, RTQNameL:RTQNameL$$module$multiname, Typename:Typename$$module$multiname, create:create$$module$multiname};
  module$multiname.module$exports && (module$multiname = module$multiname.module$exports);
  var module$interface = {}, multiname$$module$interface = module$multiname, QName$$module$interface = multiname$$module$interface.QName, cache$$module$interface = {};
  function applyInterfaces$$module$interface(a, b, c, d, e) {
    d.forEach(function(d) {
      d = getInterface$$module$interface(a, b, c, d);
      applyTo$$module$interface(a, d, e)
    })
  }
  function applyTo$$module$interface(a, b, c) {
    if(!c.hasOwnProperty("__interfaces__")) {
      var d = c.__proto__;
      c.__interfaces__ = d && d.__interfaces__ ? d.__interfaces__.slice() : []
    }
    c.__interfaces__.push(b);
    b.__interfaces__ && b.__interfaces__.forEach(function(b) {
      applyTo$$module$interface(a, b, c)
    });
    var e = b.prototype;
    Object.getOwnPropertyNames(e).forEach(function(a) {
      var b = Object.getOwnPropertyDescriptor(e, a);
      if((b = b && (b.value || b.get || b.set)) && b.__isMethod__) {
        b = QName$$module$interface.parse(a), a = b.name, b = b.toProperty(), a = methodDescriptor$$module$interface(a), Object.defineProperty(c, b, a)
      }
    })
  }
  function create$$module$interface(a, b, c, d) {
    var e = function() {
    };
    b.createObjectFromTraits(d.traits, e.prototype, c.scope);
    e.__interfaces__ = d.interfaces.map(function(d) {
      return getInterface$$module$interface(a, b, c, d)
    });
    e.__is__ = function(a) {
      return is$$module$interface(e, a)
    };
    return e
  }
  function findInstance$$module$interface(a, b) {
    var c;
    a.abcs.some(function(a) {
      return a.instances.some(function(a) {
        if(b.match(a.name)) {
          return c = a, !0
        }
      })
    });
    return c
  }
  function isCached$$module$interface(a) {
    return cache$$module$interface.__has__(a)
  }
  function getCached$$module$interface(a) {
    return cache$$module$interface.__get__(a)
  }
  function getInterface$$module$interface(a, b, c, d) {
    if(isCached$$module$interface(d)) {
      return getCached$$module$interface(d)
    }
    var e = a.getType(d);
    if(e) {
      a = QName$$module$interface.parse(e.__name__)
    }else {
      var f = findInstance$$module$interface(a, d);
      if(!f) {
        throw new TypeError("Cannot find interface " + d);
      }
      e = create$$module$interface(a, b, c, f);
      a = f.name
    }
    setCached$$module$interface(a, e);
    return e
  }
  function is$$module$interface(a, b) {
    return b && b.__interfaces__ && -1 !== b.__interfaces__.indexOf(a)
  }
  function methodDescriptor$$module$interface(a) {
    return{get:function() {
      return this[a]
    }, set:function(b) {
      this[a] = b
    }}
  }
  function setCached$$module$interface(a, b) {
    cache$$module$interface.__set__(a, b)
  }
  module$interface.module$exports = {applyInterfaces:applyInterfaces$$module$interface, getInterface:getInterface$$module$interface};
  module$interface.module$exports && (module$interface = module$interface.module$exports);
  var module$namespace_set = {};
  function create$$module$namespace_set(a, b) {
    var c = b.ns.map(function(b) {
      return a.namespaces[b]
    });
    return new NamespaceSet$$module$namespace_set(c)
  }
  function NamespaceSet$$module$namespace_set(a) {
    this.namespaces = a
  }
  NamespaceSet$$module$namespace_set.prototype = {match:function(a) {
    return this.namespaces.some(function(b) {
      return b.name === a.name
    })
  }, toString:function() {
    return"{" + this.namespaces.map(function(a) {
      return a.toString()
    }).join(", ") + "}"
  }};
  module$namespace_set.module$exports = {create:create$$module$namespace_set, NamespaceSet:NamespaceSet$$module$namespace_set};
  module$namespace_set.module$exports && (module$namespace_set = module$namespace_set.module$exports);
  var module$op = {}, Ecma$$module$op = module$ecma, interface_$$module$op = module$interface, global$$module$op = module$global, multiname$$module$op = module$multiname, coerce$$module$op = module$coerce;
  function nop$$module$op() {
  }
  var QName$$module$op = multiname$$module$op.QName, Typename$$module$op = multiname$$module$op.Typename, applyInterfaces$$module$op = interface_$$module$op.applyInterfaces, getInterface$$module$op = interface_$$module$op.getInterface, slotDescriptorNull$$module$op = {value:null, writable:!0}, slotDescriptorUndefined$$module$op = {value:void 0, writable:!0}, slotDescriptorZero$$module$op = {value:0, writable:!0}, slotDescriptorNaN$$module$op = {value:0 / 0, writable:!0};
  function getSlotDescriptors$$module$op(a, b) {
    for(var c = {}, d, e, f, g;a && a.__traits__;) {
      if(a.hasOwnProperty("__traits__")) {
        d = 0;
        for(g = a.__traits__;e = g[d];d += 1) {
          e.isSlot && (f = e.name.toProperty(), e = b.coerceTraitValue(e), c[f] = null === e ? slotDescriptorNull$$module$op : void 0 === e ? slotDescriptorUndefined$$module$op : 0 === e ? slotDescriptorZero$$module$op : e !== e ? slotDescriptorNaN$$module$op : {value:e, writable:!0})
        }
      }
      a = Object.getPrototypeOf(a)
    }
    return c
  }
  var Op$$module$op = function(a) {
    this.vm = a;
    this.abcFile = a.abcFile;
    this.toplevel = a.toplevel
  };
  Op$$module$op.prototype = {bkpt:function() {
    throw Error("Not implemented");
  }, nop:function() {
  }, "throw":function() {
    throw this.vm.stack.pop();
  }, setsuper:function(a) {
    var b = this.vm.stack.pop(), a = this.vm.getMultinameByIndex(a), c = this.vm.stack.pop();
    Object.getOwnPropertyDescriptor(c.constructor.__super__, a.toProperty()).set.call(c, b)
  }, getsuper:function(a) {
    var a = this.vm.getMultinameByIndex(a), b = this.vm.stack.pop();
    if(null === b) {
      throw new TypeError("Error #1009: Unable to generate super from null");
    }
    if(void 0 === b) {
      throw new TypeError("Error #1010: Unable to generate super from undefined");
    }
    this.vm.stack.push(Object.getOwnPropertyDescriptor(b.constructor.__super__, a.toProperty()).get.call(b))
  }, dxns:function() {
    throw Error("Not implemented");
  }, dxnslate:function() {
    throw Error("Not implemented");
  }, kill:function(a) {
    this.vm.localRegisters[a] = void 0
  }, label:nop$$module$op, lf32x4:function() {
    throw Error("Not implemented");
  }, sf32x4:function() {
    throw Error("Not implemented");
  }, ifnlt:function(a) {
    var b = !this.safeCoercion(this._lessthan);
    b && (this.vm.nextLabel = a);
    return b
  }, ifnle:function(a) {
    var b = !this.safeCoercion(this._lessequals);
    b && (this.vm.nextLabel = a);
    return b
  }, ifngt:function(a) {
    var b = !this.safeCoercion(this._greaterthan);
    b && (this.vm.nextLabel = a);
    return b
  }, ifnge:function(a) {
    var b = !this.safeCoercion(this._greaterequals);
    b && (this.vm.nextLabel = a);
    return b
  }, jump:function(a) {
    this.vm.nextLabel = a
  }, iftrue:function(a) {
    var b = !!this.vm.stack.pop();
    b && (this.vm.nextLabel = a);
    return b
  }, iffalse:function(a) {
    var b = !this.vm.stack.pop();
    b && (this.vm.nextLabel = a);
    return b
  }, ifeq:function(a) {
    var b = this.safeCoercion(this._equals, "equals");
    b && (this.vm.nextLabel = a);
    return b
  }, ifne:function(a) {
    var b = !this.safeCoercion(this._equals, "equals");
    b && (this.vm.nextLabel = a);
    return b
  }, iflt:function(a) {
    var b = this.safeCoercion(this._lessthan);
    b && (this.vm.nextLabel = a);
    return b
  }, ifle:function(a) {
    var b = this.safeCoercion(this._lessequals);
    b && (this.vm.nextLabel = a);
    return b
  }, ifgt:function(a) {
    var b = this.safeCoercion(this._greaterthan);
    b && (this.vm.nextLabel = a);
    return b
  }, ifge:function(a) {
    var b = this.safeCoercion(this._greaterequals);
    b && (this.vm.nextLabel = a);
    return b
  }, ifstricteq:function(a) {
    this.strictequals();
    var b = this.vm.stack.pop();
    b && (this.vm.nextLabel = a);
    return b
  }, ifstrictne:function(a) {
    this.strictequals();
    var b = !this.vm.stack.pop();
    b && (this.vm.nextLabel = a);
    return b
  }, x1b:function() {
    throw Error("Not implemented");
  }, pushwith:function() {
    var a = this.vm.stack.pop();
    if(null === a) {
      throw new TypeError("Error #1009: with can not use null");
    }
    if(void 0 === a) {
      throw new TypeError("Error #1010: with can not use undefined");
    }
    this.vm.scope.push(a)
  }, popscope:function() {
    this.vm.scope.pop()
  }, nextname:function() {
    var a = this.vm.stack.pop() - 1;
    this.vm.stack.push(this.vm.stack.pop().__nextName__(a))
  }, hasnext:function() {
    throw Error("Not implemented");
  }, pushnull:function() {
    this.vm.stack.push(null)
  }, pushundefined:function() {
    this.vm.stack.push(void 0)
  }, nextvalue:function() {
    var a = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XML")), b = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XMLList")), c = this.vm.stack.pop() - 1, d = this.vm.stack.pop();
    if("[object Array]" === Object.prototype.toString.call(d) || d instanceof a || d instanceof b) {
      d = d[c] || ""
    }else {
      if(d && "[object Object]" === Object.prototype.toString.call(d)) {
        a = Object.keys(d)[c], d = d[a] || ""
      }else {
        throw Error("nextvalue is not implemented for non-object/non-array types");
      }
    }
    this.vm.stack.push(d)
  }, pushbyte:function(a) {
    this.vm.stack.push(a << 24 >> 24)
  }, pushshort:function(a) {
    this.vm.stack.push(a & 65535)
  }, pushtrue:function() {
    this.vm.stack.push(!0)
  }, pushfalse:function() {
    this.vm.stack.push(!1)
  }, pushnan:function() {
    this.vm.stack.push(NaN)
  }, pop:function() {
    this.vm.stack.pop()
  }, dup:function() {
    var a = this.vm.stack;
    a.push(a[a.length - 1])
  }, swap:function() {
    var a = this.vm.stack, b = a.pop(), c = a.pop();
    a.push(b, c)
  }, pushstring:function(a) {
    this.vm.stack.push(this.abcFile.strings[a])
  }, pushint:function(a) {
    this.vm.stack.push(this.abcFile.integers[a])
  }, pushuint:function(a) {
    this.vm.stack.push(this.abcFile.uintegers[a])
  }, pushdouble:function(a) {
    this.vm.stack.push(this.abcFile.doubles[a])
  }, pushscope:function() {
    var a = this.vm.stack.pop();
    if(null === a) {
      throw new TypeError("Error #1009: scope can not be null");
    }
    if(void 0 === a) {
      throw new TypeError("Error #1010: scope can not be undefined");
    }
    this.vm.scope.push(a)
  }, pushnamespace:function(a) {
    this.vm.stack.push(this.abcFile.namespaces[a])
  }, hasnext2:function(a, b) {
    var c = this.vm.localRegisters[b], d = this.vm.localRegisters[a];
    if(d) {
      var e = d.__nextIndex__(c), c = d.__nextObject__(c);
      this.vm.localRegisters[b] = e;
      this.vm.localRegisters[a] = c;
      this.vm.stack.push(0 !== e)
    }else {
      this.vm.stack.push(!1)
    }
  }, li8:function() {
    throw Error("Not implemented");
  }, li16:function() {
    throw Error("Not implemented");
  }, li32:function() {
    throw Error("Not implemented");
  }, lf32:function() {
    throw Error("Not implemented");
  }, lf64:function() {
    throw Error("Not implemented");
  }, si8:function() {
    throw Error("Not implemented");
  }, si16:function() {
    throw Error("Not implemented");
  }, si32:function() {
    throw Error("Not implemented");
  }, sf32:function() {
    throw Error("Not implemented");
  }, sf64:function() {
    throw Error("Not implemented");
  }, newfunction:function(a) {
    this.vm.stack.push(this.abcFile.methods[a].toFunction(this.vm.scope))
  }, _call:function(a, b, c) {
    b.__isClass__ ? this.vm.stack.push(coerce$$module$op.applyClassCoercion(a, b, c, this.vm.toplevel.global)) : (this.nativeFunctionCallValidation(a, b, c), this.vm.stack.push(b.apply(a, c)))
  }, nativeFunctionCallValidation:function(a, b, c) {
    var d = this.vm.toplevel.global, e = d.Number;
    if(b == e.prototype.valueOf && !(a instanceof Number)) {
      throw new TypeError("Error #1004: Method was Number.prototype.valueOf invoked on an incompatible object");
    }
    if(b == e.prototype.toString && 0 < c.length) {
      if(isNaN(c[0])) {
        throw new RangeError("Error #1003: The radix argument for Number#toString must be between 2 and 36, was NaN");
      }
      if(2 > c[0] || 36 < c[0]) {
        throw new RangeError("Error #1003: The radix argument for Number#toString must be between 2 and 36, was [" + c[0] + "]");
      }
      if(0 != c[0] % 1) {
        throw new RangeError("Error #1003: The radix argument for Number#toString must be an integer, was [" + c[0] + "]");
      }
    }
    if(b == e.prototype.toPrecision && 0 < c.length) {
      if(isNaN(c[0])) {
        throw new RangeError("Error #1002: The precision argument for Number#toPrecision must be between 0 and 20, was NaN");
      }
      if(2 > c[0] || 36 < c[0]) {
        throw new RangeError("Error #1002: The precision argument for Number#toPrecision must be between 0 and 20, was [" + c[0] + "]");
      }
      if(0 != c[0] % 1) {
        throw new RangeError("Error #1002: The precision argument for Number#toPrecision must be an integer between 0 and 20, was [" + c[0] + "]");
      }
    }
    if(b == d.Function.prototype.apply && 1 < c.length && !(c[1] instanceof Array)) {
      throw new TypeError("Error #1116: second argument to Function.prototype.apply must be an array");
    }
    if(b == d.Math) {
      throw new TypeError("Error #1075: Math is not a function");
    }
  }, call:function(a) {
    var a = this.vm.getArgsFromStack(a), b = this.vm.stack.pop(), c = this.vm.stack.pop();
    if("function" != typeof c) {
      throw new TypeError("Error #1006: cannot call a non-function");
    }
    this._call(b, c, a)
  }, construct:function(a) {
    var a = this.vm.getArgsFromStack(a), b = this.vm.stack.pop();
    if(null === b) {
      throw new TypeError("Error #1007: Constructor instantiation attempted on null");
    }
    if(void 0 === b) {
      throw new TypeError("Error #1007: Constructor instantiation attempted on undefined");
    }
    if("object" != typeof b && "function" != typeof b) {
      throw new TypeError("Error #1041: Constructor instantiation attempted on a primitive");
    }
    if(!(b instanceof Function)) {
      throw new TypeError("Error #1007: Constructor instantiation attempted on a non-constructor");
    }
    this.vm.stack.push(this.vm.construct(b, a))
  }, callmethod:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    util$$module$op.assertProperObject(e, d);
    var f = e.__getUnbound__(d);
    util$$module$op.assertProperMethod(f, d);
    this.vm.stack.push(this.vm.wrap(f).apply(e, c))
  }, callstatic:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.stack.pop();
    if(null === d) {
      throw new TypeError("Error #1009: Cannot call static null");
    }
    if(void 0 === d) {
      throw new TypeError("Error #1010: Cannot call static undefined");
    }
    var e = this.abcFile.methods[a].toFunction(this.vm.scope);
    util$$module$op.assertProperMethod(e, multiname$$module$op);
    this.vm.stack.push(this.vm.wrap(e).apply(d, c))
  }, callsuper:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    if(null === e) {
      throw new TypeError("Error #1009: Cannot call super null");
    }
    if(void 0 === e) {
      throw new TypeError("Error #1010: Cannot call super undefined");
    }
    d = getSuperObject$$module$op.call(this, e).__getUnbound__(d);
    if(null === d) {
      throw new ReferenceError("Error #1070: Cannot call missing super method");
    }
    if(void 0 === d) {
      throw new ReferenceError("Error #1070: Cannot call missing super method");
    }
    this.vm.stack.push(d.apply(e, c))
  }, callproperty:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    util$$module$op.assertProperObject(e, d);
    var f = e.__getUnbound__(d);
    util$$module$op.assertProperMethod(f, d);
    this._call(e, f, c)
  }, returnvoid:function() {
    this.vm.returnValue = void 0
  }, returnvalue:function() {
    this.vm.returnValue = this.vm.stack.pop()
  }, constructsuper:function(a) {
    var a = this.vm.getArgsFromStack(a), b = this.vm.stack.pop();
    if(null === b) {
      throw new TypeError("Error #1009: Cannot constructsuper on null");
    }
    if(void 0 === b) {
      throw new TypeError("Error #1010: Cannot constructsuper on undefined");
    }
    var c = this.vm.toplevel.getType(this.vm.currentMethod.instance.superName);
    this.vm.validateConstruct(c, a);
    c.apply(b, a)
  }, constructprop:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    if(null === e) {
      throw new TypeError("Error #1009: Null object can not have constructor properties");
    }
    if(void 0 === e) {
      throw new TypeError("Error #1010: Undefined object can not have constructor properties");
    }
    d = e.__get__(d);
    if(d == this.vm.toplevel.global.Array && 1 == c.length && "number" == typeof c[0]) {
      e = c[0];
      if(e % 1) {
        throw new RangeError("Error #1005: new Array does not accept a single fraction number for initialization");
      }
      if(0 > e) {
        throw new RangeError("Error #1005: new Array does not accept a single negative number for initialization");
      }
      if(isNaN(e)) {
        throw new RangeError("Error #1005: new Array does not accept a NaN for initialization");
      }
    }
    this.vm.stack.push(this.vm.construct(d, c))
  }, callproplex:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    util$$module$op.assertProperObject(e, d);
    e = e.__getUnbound__(d);
    util$$module$op.assertProperMethod(e, d);
    this.vm.stack.push(e.apply(null, c))
  }, callsupervoid:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    if(null === e) {
      throw new TypeError("Error #1009: Cannot call supervoid null");
    }
    if(void 0 === e) {
      throw new TypeError("Error #1010: Cannot call supervoid undefined");
    }
    d = getSuperObject$$module$op.call(this, e).__getUnbound__(d);
    if(null === d) {
      throw new ReferenceError("Error #1070: Cannot call missing super method");
    }
    if(void 0 === d) {
      throw new ReferenceError("Error #1070: Cannot call missing super method");
    }
    d.apply(e, c)
  }, callpropvoid:function(a, b) {
    var c = this.vm.getArgsFromStack(b), d = this.vm.getMultinameByIndex(a), e = this.vm.stack.pop();
    util$$module$op.assertProperObject(e, d);
    var f = e.__getUnbound__(d);
    util$$module$op.assertProperMethod(f, d);
    f.apply(e, c)
  }, sxi1:function() {
    throw Error("Not implemented");
  }, sxi8:function() {
    throw Error("Not implemented");
  }, sxi16:function() {
    throw Error("Not implemented");
  }, applytype:function(a) {
    if(0 >= a) {
      throw Error("VerifyError: Vectors require at least one type argument");
    }
    if(1 < a) {
      throw new TypeError("Error #1128: Incorrect number of type parameters");
    }
    a = this.vm.stack.pop();
    if(void 0 === a) {
      throw new TypeError("Error #1010: Unable to create Vector of undefined");
    }
    if(null !== a && !a.__isClass__) {
      throw Error("VerifyError: Expecting a class...");
    }
    if(this.vm.stack.pop() !== this.toplevel.global.Vector) {
      throw new TypeError("Error #1010: Unable to create non-Vector<T> types");
    }
    this.vm.stack.push(this.vm.toplevel.getType(new Typename$$module$op(QName$$module$op.fromStrings("__AS3__.vec", "Vector"), QName$$module$op.fromSymbolClass(a ? a.__qualifiedName__ : "Object"))))
  }, newobject:function(a) {
    for(var b = {};a--;) {
      var c = this.vm.stack.pop(), d = this.vm.stack.pop();
      b[d] = c
    }
    this.vm.stack.push(b)
  }, newarray:function(a) {
    this.vm.stack.push(this.vm.stack.splice(-a, a))
  }, newactivation:function() {
    this.vm.stack.push(this.vm.abcFile.createObjectFromTraits(this.vm.body.traits))
  }, newclass:function(a) {
    var b = this.vm, c = b.abcFile, d = b.toplevel, e = b.stack.pop(), f = this.abcFile.instances[a], a = this.abcFile.classes[a], g;
    f.isInterface ? g = getInterface$$module$op(d, c, b, f.name) : (g = f.initializer.toFunction(b.scope), g.__capturedScope__.push(g), g.__super__ = e.prototype, e = g.prototype = Object.create(e.prototype), c.createObjectFromTraits(a.traits, g, b.scope), c.createObjectFromTraits(f.traits, e, b.scope, g, {skipSlots:!0}), applyInterfaces$$module$op(d, c, b, f.interfaces, g.prototype), f.initializer.currentMethod.instance = f, a.initializer.toFunction(b.scope).apply(g), Object.defineProperties(e, 
    {constructor:{value:g}, __slotDescriptors__:{value:getSlotDescriptors$$module$op(e, c)}}));
    Object.defineProperties(g, {__isClass__:{value:!0}, __name__:{value:f.name.name}, __qualifiedName__:{value:f.name.toString()}, displayName:{value:f.name.name}});
    b.stack.push(g)
  }, getdescendants:function(a) {
    var b = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XML")), c = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XMLList")), a = this.vm.getMultinameByIndex(a), d = this.vm.stack.pop();
    if(!(d instanceof b) || !(d instanceof c)) {
      throw new TypeError("Error #1016: Object is not of type XML or XMLList");
    }
    this.vm.stack.push(d.descendants(a.name))
  }, newcatch:function(a) {
    this.vm.stack.push(this.vm.getExceptionHandlerByIndex(a).createCatchScope())
  }, findpropstrict:function(a) {
    this.vm.stack.push(this.vm.scope.strictFind(this.vm.getMultinameByIndex(a)))
  }, findproperty:function(a) {
    this.vm.stack.push(this.vm.scope.find(this.vm.getMultinameByIndex(a), !0))
  }, finddef:function() {
    throw Error("Not implemented");
  }, getlex:function(a) {
    this.vm.op.findpropstrict(a);
    this.vm.op.getproperty(a)
  }, setproperty:function(a) {
    var b = this.vm, c = b.stack.pop(), a = b.getMultinameByIndex(a), b = b.stack.pop();
    if(null === b) {
      throw new TypeError("Error #1009: Unable to set property on null");
    }
    if(void 0 === b) {
      throw new TypeError("Error #1010: Unable to set property on undefined");
    }
    b.__set__(a, c)
  }, getlocal:function(a) {
    this.vm.stack.push(this.vm.localRegisters[a])
  }, setlocal:function(a) {
    this.vm.localRegisters[a] = this.vm.stack.pop()
  }, getglobalscope:function() {
    this.vm.stack.push(this.toplevel.global)
  }, getscopeobject:function(a) {
    this.vm.stack.push(this.vm.scope.get(a))
  }, getproperty:function(a) {
    var b = this.vm, a = b.getMultinameByIndex(a), c = b.stack.pop();
    if(null === c) {
      throw new TypeError("Error #1009: Unable to get property from null");
    }
    if(void 0 === c) {
      throw new TypeError("Error #1010: Unable to get property from undefined");
    }
    a = c.__get__(a);
    b.stack.push(a)
  }, getouterscope:function() {
    throw Error("Not implemented");
  }, initproperty:function(a) {
    var b = this.vm.stack.pop(), a = this.vm.getMultinameByIndex(a), c = this.vm.stack.pop();
    if(null === c) {
      throw new TypeError("Error #1009: Unable to init null");
    }
    if(void 0 === c) {
      throw new TypeError("Error #1010: Unable to init undefined");
    }
    c.__set__(a, b)
  }, deleteproperty:function(a) {
    var a = this.vm.getMultinameByIndex(a), b = this.vm.stack.pop();
    if(null === b) {
      throw new ReferenceError("Error #1009: Cannot delete from null object");
    }
    if(void 0 === b) {
      throw new ReferenceError("Error #1010: Cannot delete from undefined object");
    }
    this.vm.stack.push(b.__deleteProperty__(a))
  }, getslot:function(a) {
    var b = this.vm.stack.pop();
    if(null === b) {
      throw new TypeError("Error #1009: Unable to get slot on null");
    }
    if(void 0 === b) {
      throw new TypeError("Error #1010: Unable to get slot on undefined");
    }
    this.vm.stack.push(b.__get__(b.__slots__[a].name))
  }, setslot:function(a) {
    var b = this.vm.stack.pop(), c = this.vm.stack.pop();
    if(null === c) {
      throw new TypeError("Error #1009: Unable to set slot on null");
    }
    if(void 0 === c) {
      throw new TypeError("Error #1010: Unable to set slot on undefined");
    }
    c.__set__(c.__slots__[a].name, b)
  }, getglobalslot:function() {
    throw Error("Not implemented");
  }, setglobalslot:function() {
    throw Error("Not implemented");
  }, convert_s:function() {
    var a = this.vm.stack.pop();
    null != a && (a = "" + a);
    this.vm.stack.push(a)
  }, esc_xelem:function() {
    this.vm.stack.push(this.vm.stack.pop().toXmlString())
  }, esc_xattr:function() {
    throw Error("Not implemented");
  }, convert_i:function() {
    var a = this.vm.stack.pop(), a = Ecma$$module$op.ToInt32(a);
    this.vm.stack.push(a)
  }, convert_u:function() {
    this.vm.stack.push(Ecma$$module$op.ToUint32(this.vm.stack.pop()))
  }, convert_d:function() {
    this.vm.stack.push(+this.vm.stack.pop())
  }, convert_b:function() {
    var a = this.vm.stack.pop();
    this.vm.stack.push(Boolean(a))
  }, convert_o:function() {
    var a = this.vm.stack.pop();
    if(null === a) {
      throw new TypeError("Error #1009: Unable to convert null to an object");
    }
    if(void 0 === a) {
      throw new TypeError("Error #1010: Unable to convert undefined to an object");
    }
    var b = typeof a;
    if("object" != b && "function" != b) {
      throw new TypeError("Error #1034: Convert_o only passes objects, this wasnt one");
    }
    this.vm.stack.push(a)
  }, checkfilter:function() {
    var a = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XML")), b = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XMLList")), c = this.vm.stack.pop();
    if(!(c instanceof a) && !(c instanceof b)) {
      throw new TypeError("Error #1123: Object is not of type XML or XMLList");
    }
    this.vm.stack.push(c)
  }, coerce:function(a) {
    var a = this.vm.toplevel.getType(this.vm.getMultinameByIndex(a)), b = this.vm.stack.pop();
    this.vm.stack.push(coerce$$module$op.explicitlyCoerce(b, a))
  }, coerce_b:function() {
    throw Error("Not implemented");
  }, coerce_a:function() {
  }, coerce_i:function() {
    throw Error("Not implemented");
  }, coerce_d:function() {
    throw Error("Not implemented");
  }, coerce_s:function() {
    var a = this.vm.stack.pop();
    null == a ? this.vm.stack.push(null) : this.vm.stack.push("" + a)
  }, astype:function() {
    throw Error("Not implemented");
  }, astypelate:function() {
    var a = this.vm.stack.pop(), b = this.vm.stack.pop();
    if(!a || !a.__isClass__ && !a.__isInterface__) {
      throw new TypeError("Error #1040: Expecting a class in as check");
    }
    var c = this.vm.toplevel.global;
    a === c.Class && b.__isClass__ ? this.vm.stack.push(b) : "string" == typeof b ? a == c.String || a == c.Object ? this.vm.stack.push(b) : this.vm.stack.push(null) : "number" == typeof b ? a == c.Number || a == c.Object ? this.vm.stack.push(b) : a == c["int"] ? 0 === b % 1 && b >= c["int"].MIN_VALUE && b <= c["int"].MAX_VALUE ? this.vm.stack.push(b) : this.vm.stack.push(null) : a == c.uint ? 0 === b % 1 && 0 <= b && b <= c.uint.MAX_VALUE ? this.vm.stack.push(b) : this.vm.stack.push(null) : this.vm.stack.push(null) : 
    "boolean" == typeof b ? a == c.Boolean || a == c.Object ? this.vm.stack.push(b) : this.vm.stack.push(null) : this.vm.stack.push(b && b instanceof a ? b : null)
  }, coerce_u:function() {
    throw Error("Not implemented");
  }, coerce_o:function() {
    var a = this.vm.stack[this.vm.stack.length - 1];
    if(null === a) {
      throw new TypeError("Error #1009: Unable to coerce null to an object");
    }
    if(void 0 === a) {
      throw new TypeError("Error #1010: Unable to coerce undefined to an object");
    }
  }, negate:function() {
    this.vm.stack.push(-Ecma$$module$op.ToNumber(this.vm.stack.pop()))
  }, increment:function() {
    this.vm.stack.push(Ecma$$module$op.ToNumber(this.vm.stack.pop()) + 1)
  }, inclocal:function() {
    throw Error("Not implemented");
  }, decrement:function() {
    this.vm.stack.push(Ecma$$module$op.ToNumber(this.vm.stack.pop()) - 1)
  }, declocal:function() {
    throw Error("Not implemented");
  }, "typeof":function() {
    var a = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "int")), b = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "uint")), c = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XML")), d = this.vm.toplevel.getType(QName$$module$op.fromStrings("", "XMLList")), e = this.vm.stack, f = e.pop();
    void 0 === f ? e.push("undefined") : null === f ? e.push("object") : "boolean" == typeof f || f instanceof Boolean ? e.push("boolean") : "number" == typeof f || f instanceof Number ? e.push("number") : f instanceof a ? e.push("number") : f instanceof b ? e.push("number") : "string" == typeof f || f instanceof String ? e.push("string") : "function" == typeof f ? e.push("function") : f instanceof c || f instanceof d ? e.push("xml") : e.push("object")
  }, not:function() {
    this.vm.stack.push(!this.vm.stack.pop())
  }, bitnot:function() {
    this.vm.stack.push(~this.vm.stack.pop())
  }, lookupswitch:function(a, b, c) {
    var d = this.vm.stack.pop();
    this.vm.nextLabel = isNaN(d) || 0 > d || d > a ? b : arguments[d + 2]
  }, _add:function(a, b) {
    return a + b
  }, add:function() {
    this.vm.stack.push(this.safeCoercion(this._add, "add"))
  }, _subtract:function(a, b) {
    return a - b
  }, subtract:function() {
    this.vm.stack.push(this.safeCoercion(this._subtract, "number"))
  }, _multiply:function(a, b) {
    return a * b
  }, multiply:function() {
    this.vm.stack.push(this.safeCoercion(this._multiply, "number"))
  }, _divide:function(a, b) {
    return a / b
  }, divide:function() {
    this.vm.stack.push(this.safeCoercion(this._divide, "number"))
  }, _modulo:function(a, b) {
    return a % b
  }, modulo:function() {
    this.vm.stack.push(this.safeCoercion(this._modulo, "number"))
  }, _lshift:function(a, b) {
    return a << b
  }, lshift:function() {
    this.vm.stack.push(this.safeCoercion(this._lshift, "number"))
  }, _rshift:function(a, b) {
    return a >> b
  }, rshift:function() {
    this.vm.stack.push(this.safeCoercion(this._rshift, "number"))
  }, _urshift:function(a, b) {
    return a >>> b
  }, urshift:function() {
    this.vm.stack.push(this.safeCoercion(this._urshift, "number"))
  }, _bitand:function(a, b) {
    return a & b
  }, bitand:function() {
    this.vm.stack.push(this.safeCoercion(this._bitand, "number"))
  }, _bitor:function(a, b) {
    return a | b
  }, bitor:function() {
    this.vm.stack.push(this.safeCoercion(this._bitor, "number"))
  }, _bitxor:function(a, b) {
    return a ^ b
  }, bitxor:function() {
    this.vm.stack.push(this.safeCoercion(this._bitxor, "number"))
  }, _equals:function(a, b) {
    return a == b
  }, equals:function() {
    this.vm.stack.push(this.safeCoercion(this._equals, "equals"))
  }, strictequals:function() {
    var a = this.vm.stack.pop(), b = this.vm.stack.pop();
    "string" == typeof b && a instanceof String ? this.vm.stack.push(b === a.valueOf()) : "string" == typeof a && b instanceof String ? this.vm.stack.push(a === b.valueOf()) : "number" == typeof b && a instanceof Number ? this.vm.stack.push(b === a.valueOf()) : "number" == typeof a && b instanceof Number ? this.vm.stack.push(a === b.valueOf()) : "boolean" == typeof b && a instanceof Boolean ? this.vm.stack.push(b === a.valueOf()) : "boolean" == typeof a && b instanceof Boolean ? this.vm.stack.push(a === 
    b.valueOf()) : b instanceof String && a instanceof String ? this.vm.stack.push(b.toString() == a.toString()) : b instanceof Number && a instanceof Number ? this.vm.stack.push(b.valueOf() == a.valueOf()) : b instanceof Boolean && a instanceof Boolean ? this.vm.stack.push(b.valueOf() == a.valueOf()) : b instanceof Date && a instanceof Date ? this.vm.stack.push(b.valueOf() == a.valueOf()) : this.vm.stack.push(b === a)
  }, _lessthan:function(a, b) {
    return a < b
  }, lessthan:function() {
    this.vm.stack.push(this.safeCoercion(this._lessthan))
  }, _lessequals:function(a, b) {
    return a <= b
  }, lessequals:function() {
    this.vm.stack.push(this.safeCoercion(this._lessequals))
  }, _greaterthan:function(a, b) {
    return a > b
  }, greaterthan:function() {
    this.vm.stack.push(this.safeCoercion(this._greaterthan))
  }, _greaterequals:function(a, b) {
    return a >= b
  }, greaterequals:function() {
    this.vm.stack.push(this.safeCoercion(this._greaterequals))
  }, "instanceof":function() {
    var a = this.vm.stack.pop(), b = this.vm.stack.pop();
    if(!a || "object" != typeof a && "function" != typeof a) {
      throw new TypeError("Error #1040: Expecting an object in instanceof check, but got " + a);
    }
    a === this.vm.toplevel.global.Class && b.__isClass__ ? this.vm.stack.push(!0) : this.vm.stack.push(b instanceof a)
  }, istype:function() {
    throw Error("Not implemented");
  }, istypelate:function() {
    var a = this.vm.stack.pop(), b = this.vm.stack.pop();
    if(a.__is__) {
      this.vm.stack.push(!!a.__is__(b))
    }else {
      switch(typeof a) {
        case "string":
        ;
        case "number":
        ;
        case "boolean":
          throw new TypeError("Error #1009: Invalid type on rhs, does not have required properties");
      }
      if("function" != typeof a) {
        throw new TypeError("Error #1041: Expecting a class in istypelate check, but got " + b);
      }
      var c = null, d = this.toplevel.global;
      if("string" == typeof b && (a == d.String || a == d.Object)) {
        c = !0
      }else {
        if("boolean" == typeof b && (a == d.Boolean || a == d.Object)) {
          c = !0
        }else {
          if("number" == typeof b) {
            if(a == d.Number || a == d.Object) {
              c = !0
            }else {
              if(0 == b % 1) {
                var e = d["int"];
                a == e ? c = b >= e.MIN_VALUE && b <= e.MAX_VALUE : (d = d.uint, a == d && (c = b >= d.MIN_VALUE && b <= d.MAX_VALUE))
              }
            }
          }
        }
      }
      null === c && (c = b instanceof a);
      this.vm.stack.push(c)
    }
  }, "in":function() {
    var a = this.vm.stack.pop(), b = this.vm.stack.pop(), c = global$$module$op.exports.tools.expando;
    a[c] && a[c].has ? this.vm.stack.push(a.__has__(QName$$module$op.fromStrings("", b))) : this.vm.stack.push(Ecma$$module$op.ToString(b) in Object(a))
  }, increment_i:function() {
    this.vm.stack.push(Ecma$$module$op.ToInt32(this.vm.stack.pop()) + 1)
  }, decrement_i:function() {
    this.vm.stack.push(Ecma$$module$op.ToInt32(this.vm.stack.pop()) - 1)
  }, inclocal_i:function(a) {
    var b = this.vm.localRegisters;
    b[a] = Ecma$$module$op.ToInt32(b[a]) + 1
  }, declocal_i:function(a) {
    var b = this.vm.localRegisters;
    b[a] = Ecma$$module$op.ToInt32(b[a]) - 1
  }, negate_i:function() {
    throw Error("Not implemented");
  }, _add_i:function(a, b) {
    a = Ecma$$module$op.ToUint32(a);
    b = Ecma$$module$op.ToUint32(b);
    return a + b >>> 0
  }, add_i:function() {
    this.vm.stack.push(this.safeCoercion(this._add_i, "number"))
  }, _subtract_i:function(a, b) {
    a = Ecma$$module$op.ToUint32(a);
    b = Ecma$$module$op.ToUint32(b);
    return a - b >>> 0
  }, subtract_i:function() {
    this.vm.stack.push(this.safeCoercion(this._subtract_i, "number"))
  }, _multiply_i:function(a, b) {
    a = Ecma$$module$op.ToUint32(a);
    b = Ecma$$module$op.ToUint32(b);
    return a * b >>> 0
  }, multiply_i:function() {
    this.vm.stack.push(this.safeCoercion(this._multiply_i, "number"))
  }, getlocal0:function() {
    this.vm.stack.push(this.vm.localRegisters[0])
  }, getlocal1:function() {
    this.vm.stack.push(this.vm.localRegisters[1])
  }, getlocal2:function() {
    this.vm.stack.push(this.vm.localRegisters[2])
  }, getlocal3:function() {
    this.vm.stack.push(this.vm.localRegisters[3])
  }, setlocal0:function() {
    this.vm.localRegisters[0] = this.vm.stack.pop()
  }, setlocal1:function() {
    this.vm.localRegisters[1] = this.vm.stack.pop()
  }, setlocal2:function() {
    this.vm.localRegisters[2] = this.vm.stack.pop()
  }, setlocal3:function() {
    this.vm.localRegisters[3] = this.vm.stack.pop()
  }, debug:nop$$module$op, debugline:nop$$module$op, debugfile:nop$$module$op, bkptline:function() {
    throw Error("Not implemented");
  }, timestamp:function() {
    throw Error("Not implemented");
  }, safeCoercion:function(a) {
    var b = this.vm.stack.pop(), c = this.vm.stack.pop();
    return a(c, b)
  }};
  var util$$module$op = {assertProperObject:function(a, b) {
    if(null === a) {
      throw new TypeError("Error #1009: Cannot call method '" + b + "' of null");
    }
    if("undefined" === typeof a) {
      throw new TypeError("Error #1010: Cannot call method '" + b + "' of undefined");
    }
  }, assertProperMethod:function(a, b) {
    if(null === a) {
      throw new TypeError("Error #1009: Cannot call null property '" + b + "'");
    }
    if("undefined" === typeof a) {
      throw new TypeError("Error #1010: Cannot call undefined property '" + b + "'");
    }
    if(!1 === a) {
      throw new TypeError("(AS3) Cannot call false property '" + b + "'");
    }
  }};
  function getSuperObject$$module$op(a) {
    for(var b = a, a = !1;!a;) {
      a = Object.getOwnPropertyNames(b).some(function(a) {
        a = b[a];
        return!a || !a.__method__ ? void 0 : a.__method__ === this.vm.currentMethod
      }, this), b = b.__proto__
    }
    return b
  }
  module$op.module$exports = Op$$module$op;
  module$op.module$exports && (module$op = module$op.module$exports);
  var module$parameters = {};
  function convertRest$$module$parameters(a, b) {
    var c = a.slice(0, b), d = a.slice(b);
    c.push(d);
    return c
  }
  function setDefaults$$module$parameters(a, b, c) {
    var d = c - b.length;
    b.forEach(function(b, c) {
      var g = d + c;
      g in a || (a[g] = b)
    })
  }
  function toRegisters$$module$parameters(a, b) {
    return[a].concat(b)
  }
  module$parameters.module$exports = {convertRest:convertRest$$module$parameters, setDefaults:setDefaults$$module$parameters, toRegisters:toRegisters$$module$parameters};
  module$parameters.module$exports && (module$parameters = module$parameters.module$exports);
  var module$proxy = {}, global$$module$proxy = module$global;
  function addToBuiltins$$module$proxy(a) {
    a.Object.prototype.__get__ || (addToObject$$module$proxy(a.Object.prototype), a.Vector && addToVector$$module$proxy(a.Vector.prototype))
  }
  function addToObject$$module$proxy(a) {
    Object.defineProperties(a, {__deleteProperty__:{enumerable:!1, value:function(a) {
      return a.deleteFrom(this)
    }, writable:!1}, __get__:{enumerable:!1, value:function(a) {
      return a.getFrom(this)
    }, writable:!1}, __getUnbound__:{enumerable:!1, value:function(a) {
      return a.getUnboundFrom(this)
    }, writable:!1}, __has__:{enumerable:!1, value:function(a) {
      return a.inObject(this)
    }, writable:!1}, __set__:{enumerable:!1, value:function(a, c) {
      a.setIn(this, c)
    }, writable:!1}})
  }
  function isVectorIndex$$module$proxy(a) {
    return!isNaN(Number(a))
  }
  function addToVector$$module$proxy(a) {
    var b = global$$module$proxy.exports.tools.expando;
    Object.defineProperties(a, {__deleteProperty__:{enumerable:!1, value:function(a) {
      if(!isVectorIndex$$module$proxy(a.name)) {
        return Object.prototype.__deleteProperty__.call(this, a)
      }
      delete this[b].data[a.name]
    }, writable:!1}, __get__:{enumerable:!1, value:function(a) {
      if(!isVectorIndex$$module$proxy(a.name)) {
        return Object.prototype.__get__.call(this, a)
      }
      if(!this.__has__(a)) {
        throw RangeError("Error #1125: The index is ouf of range");
      }
      return this[b].data[a.name]
    }, writable:!1}, __has__:{enumerable:!1, value:function(a) {
      return!isVectorIndex$$module$proxy(a.name) ? Object.prototype.__get__.call(this, a) : this[b].data.hasOwnProperty(a.name)
    }, writable:!1}, __set__:{enumerable:!1, value:function(a, b) {
      if(!isVectorIndex$$module$proxy(a.name)) {
        return Object.prototype.__set__.call(this, a, b)
      }
      this.__setIndex__.call(this, a.name, b)
    }, writable:!1}})
  }
  module$proxy.module$exports = {addToBuiltins:addToBuiltins$$module$proxy};
  module$proxy.module$exports && (module$proxy = module$proxy.module$exports);
  var module$map_names = {}, multiname$$module$map_names = module$multiname, proxy$$module$map_names = module$proxy, QName$$module$map_names = multiname$$module$map_names.QName;
  function collectNamespaces$$module$map_names(a, b, c) {
    c = c || [];
    Object.keys(a).forEach(function(d) {
      var e = a[d];
      isNamespace$$module$map_names(e) ? collectNamespaces$$module$map_names(e, b, c.concat(d)) : (isBuiltIn$$module$map_names(e) && mapBuiltIn$$module$map_names(e), d = QName$$module$map_names.fromStrings(c.join("."), d), e && e.__isClass__ && Object.defineProperties(e, {__name__:{value:d.name}, __qualifiedName__:{value:d.toString()}}), b.__set__(d, e))
    })
  }
  function getMappableProperties$$module$map_names(a) {
    return Object.getOwnPropertyNames(a.prototype).filter(shouldMapPropertyName$$module$map_names).filter(function(b) {
      return isFunction$$module$map_names(a.prototype[b])
    })
  }
  function isBuiltIn$$module$map_names(a) {
    return a && a.__isBuiltIn__ && a.prototype
  }
  function isFunction$$module$map_names(a) {
    return"function" === typeof a
  }
  function isNamespace$$module$map_names(a) {
    return a && "undefined" !== typeof a.__isNamespace__
  }
  function shouldMapPropertyName$$module$map_names(a) {
    return"constructor" !== a && 0 !== a.indexOf("__")
  }
  function mapBuiltIn$$module$map_names(a) {
    getMappableProperties$$module$map_names(a).forEach(function(b) {
      var c = a.prototype[b], b = QName$$module$map_names.fromStrings("http://adobe.com/AS3/2006/builtin", b);
      Object.defineProperty(a.prototype, b.toProperty(), {enumerable:!1, value:c})
    })
  }
  function mapPublicVector$$module$map_names(a) {
    a.__set__(QName$$module$map_names.fromStrings("__AS3__.vec", "Vector"), a.Vector)
  }
  function mapNames$$module$map_names(a, b) {
    var b = b || {}, c = b.map || {};
    proxy$$module$map_names.addToBuiltins(a);
    collectNamespaces$$module$map_names(a, c);
    mapPublicVector$$module$map_names(c);
    return c
  }
  module$map_names.module$exports = mapNames$$module$map_names;
  module$map_names.module$exports && (module$map_names = module$map_names.module$exports);
  var module$scope = {};
  function CapturedScope$$module$scope(a) {
    this.global = a.global;
    this.scopes = a.scopes.slice(0)
  }
  CapturedScope$$module$scope.prototype = {push:function(a) {
    this.scopes.push(a);
    this.localOffset++
  }, toScope:function() {
    return Scope$$module$scope.fromCapturedScope(this)
  }};
  function Scope$$module$scope(a) {
    this.global = a;
    this.localOffset = 0;
    this.scopes = []
  }
  Scope$$module$scope.fromCapturedScope = function(a) {
    var b = new Scope$$module$scope(a.global);
    b.scopes = a.scopes.slice(0);
    b.localOffset = a.scopes.length;
    return b
  };
  Scope$$module$scope.prototype = {global:null, localOffset:null, scopes:null, capture:function() {
    return new CapturedScope$$module$scope(this)
  }, clear:function() {
    this.localOffset = 0;
    this.scopes = []
  }, find:function(a) {
    a = this._find(a);
    a || (a = this.global);
    return a
  }, _find:function(a) {
    var b;
    this.scopes.slice().reverse().some(function(c) {
      if(c.__has__(a)) {
        return b = c, !0
      }
    });
    return!b && this.global.__has__(a) ? this.global : b
  }, get:function(a) {
    var b = this.localOffset + a;
    if(!(b in this.scopes)) {
      throw Error("Cannot get scope object at index " + a);
    }
    return this.scopes[b]
  }, pop:function() {
    if(this.scopes.length === this.localOffset) {
      throw Error("Cannot pop empty scope stack");
    }
    return this.scopes.pop()
  }, push:function(a) {
    this.scopes.push(a)
  }, strictFind:function(a) {
    var b = this._find(a);
    if(!b) {
      throw new ReferenceError("Error #1065: Variable/property not defined: " + a);
    }
    return b
  }};
  module$scope.module$exports = Scope$$module$scope;
  module$scope.module$exports && (module$scope = module$scope.module$exports);
  var module$top_level = {}, Interface$$module$top_level = module$interface, map_names$$module$top_level = module$map_names, multiname$$module$top_level = module$multiname;
  function TopLevel$$module$top_level(a, b) {
    this.global = map_names$$module$top_level(b);
    this.hooks = {};
    this.abcs = a.map(function(a) {
      return a(this)
    }, this);
    var c = this;
    Object.defineProperty(this.global, "__has__", {value:function(a) {
      c.abcs.some(function(b) {
        return b.hasType(a)
      });
      if(a.isTypename) {
        if(c.getType(a.type) !== this.Vector) {
          throw new TypeError("Error #1010: Unable to create non-Vector<T> types");
        }
        var b = this.VectorFactory(c.getType(a.parameter)), f = a.toString();
        Object.defineProperties(b, {__name__:{value:f}, __qualifiedName__:{value:f}});
        this.__set__(a, b)
      }
      return Object.prototype.__has__.call(this, a)
    }})
  }
  TopLevel$$module$top_level.prototype = {getPreConstructorHook:function(a) {
    a = normalizeQName$$module$top_level(a);
    return this.hooks.__get__(a)
  }, getType:function(a) {
    a = normalizeQName$$module$top_level(a);
    if(!this.global.__has__(a)) {
      throw new TypeError("Cannot find type " + a);
    }
    return this.global.__get__(a)
  }, hasPreConstructorHook:function(a) {
    a = normalizeQName$$module$top_level(a);
    return this.hooks.__has__(a)
  }, runAbc:function(a) {
    return this.abcs[a].run()
  }, setPreConstructorHook:function(a, b) {
    a = normalizeQName$$module$top_level(a);
    this.hooks.__set__(a, b)
  }};
  function normalizeQName$$module$top_level(a) {
    return"string" === typeof a ? multiname$$module$top_level.QName.fromSymbolClass(a) : a
  }
  module$top_level.module$exports = TopLevel$$module$top_level;
  module$top_level.module$exports && (module$top_level = module$top_level.module$exports);
  var module$trait = {}, multiname$$module$trait = module$multiname;
  function createSlotType$$module$trait() {
    var a = function(a, c, d, e) {
      this.name = a;
      this.slotId = c;
      this.typeName = d;
      this.value = e
    };
    a.create = function(b, c, d, e) {
      var d = e.slot_id, f = e.type_name, g = e.vkind, e = e.vindex, h, i;
      0 !== f && (h = b.multinames[f]);
      g && (i = b.getConstant(g, e));
      return new a(c, d, h, i)
    };
    return a
  }
  var ConstTrait$$module$trait = createSlotType$$module$trait(), SlotTrait$$module$trait = createSlotType$$module$trait();
  SlotTrait$$module$trait.prototype.isSlot = !0;
  function ClassTrait$$module$trait(a, b, c) {
    this.name = a;
    this.slotId = b;
    this.klass = c
  }
  ClassTrait$$module$trait.create = function(a, b, c, d) {
    return new ClassTrait$$module$trait(b, d.slot_id, a.classes[d.classi])
  };
  ClassTrait$$module$trait.prototype.isClass = !0;
  function FunctionTrait$$module$trait(a, b, c) {
    this.name = a;
    this.slotId = b;
    this.method = c
  }
  FunctionTrait$$module$trait.create = function(a, b, c, d) {
    return new FunctionTrait$$module$trait(b, d.slot_id, a.methods[d["function"]])
  };
  function MethodTrait$$module$trait(a, b, c, d) {
    this.name = a;
    this.dispatchId = b;
    this.value = this.method = c;
    d && (this.isFinal = d.isFinal, this.isOverride = d.isOverride)
  }
  MethodTrait$$module$trait.create = function(a, b, c, d) {
    return new MethodTrait$$module$trait(b, d.disp_id, a.methods[d.method], {isFinal:!!(c & 1), isOverride:!!(c & 2)})
  };
  MethodTrait$$module$trait.prototype = {isMethod:!0, toInterfaceDescriptor:function(a) {
    return{get:function() {
      return this[a]
    }}
  }};
  function GetterTrait$$module$trait(a, b, c, d) {
    this.name = a;
    this.dispatchId = b;
    this.value = this.method = c;
    d && (this.isFinal = d.isFinal, this.isOverride = d.isOverride)
  }
  GetterTrait$$module$trait.create = function(a, b, c, d) {
    return new GetterTrait$$module$trait(b, d.disp_id, a.methods[d.method], {isFinal:!!(c & 1), isOverride:!!(c & 2)})
  };
  GetterTrait$$module$trait.prototype = {isGetter:!0, toInterfaceDescriptor:function(a) {
    return{configurable:!0, get:function() {
      var b = Object.getOwnPropertyDescriptor(this.constructor.prototype, a).get;
      return b()
    }}
  }};
  function SetterTrait$$module$trait(a, b, c, d) {
    this.name = a;
    this.dispatchId = b;
    this.value = this.method = c;
    d && (this.isFinal = d.isFinal, this.isOverride = d.isOverride)
  }
  SetterTrait$$module$trait.create = function(a, b, c, d) {
    return new SetterTrait$$module$trait(b, d.disp_id, a.methods[d.method], {isFinal:!!(c & 1), isOverride:!!(c & 2)})
  };
  SetterTrait$$module$trait.prototype = {isSetter:!0, toInterfaceDescriptor:function(a) {
    return{configurable:!0, set:function(b) {
      var c = Object.getOwnPropertyDescriptor(this.constructor.prototype, a).set;
      c(b)
    }}
  }};
  function create$$module$trait(a, b) {
    return kinds$$module$trait[b.kind & 15].create(a, a.multinames[b.name], b.kind >>> 4, b.data)
  }
  var kinds$$module$trait = {"0":SlotTrait$$module$trait, 1:MethodTrait$$module$trait, 2:GetterTrait$$module$trait, 3:SetterTrait$$module$trait, 4:ClassTrait$$module$trait, 5:FunctionTrait$$module$trait, 6:ConstTrait$$module$trait};
  module$trait.module$exports = {ConstTrait:ConstTrait$$module$trait, ClassTrait:ClassTrait$$module$trait, FunctionTrait:FunctionTrait$$module$trait, GetterTrait:GetterTrait$$module$trait, MethodTrait:MethodTrait$$module$trait, SetterTrait:SetterTrait$$module$trait, SlotTrait:SlotTrait$$module$trait, create:create$$module$trait};
  module$trait.module$exports && (module$trait = module$trait.module$exports);
  var module$class = {}, trait$$module$class = module$trait, ret$$module$class = {create:function(a, b) {
    var c = a.methods[b.cinit], d = parseTraits$$module$class(a, b.trait);
    return new Class$$module$class(c, d)
  }};
  function parseTraits$$module$class(a, b) {
    return b.map(function(b) {
      return trait$$module$class.create(a, b)
    })
  }
  var Class$$module$class = ret$$module$class.Class = function(a, b) {
    this.initializer = a;
    this.traits = b
  };
  module$class.module$exports = ret$$module$class;
  module$class.module$exports && (module$class = module$class.module$exports);
  var module$exception = {}, multiname$$module$exception = module$multiname, trait$$module$exception = module$trait, ret$$module$exception = {create:function(a, b) {
    var c = b.from, d = b.to, e = b.target, f = parseExceptionType$$module$exception(a, b.exc_type);
    return new Exception$$module$exception(a, c, d, e, f, a.multinames[b.var_name])
  }};
  function parseExceptionType$$module$exception(a, b) {
    return 0 === b ? Exception$$module$exception.ANY_TYPENAME : a.multinames[b]
  }
  var Exception$$module$exception = ret$$module$exception.Exception = function(a, b, c, d, e, f) {
    this.abcFile = a;
    this.from = b;
    this.to = c;
    this.target = d;
    this.typeName = e;
    this.varName = f
  };
  Exception$$module$exception.ANY_TYPENAME = multiname$$module$exception.QName.fromStrings("", "Object");
  Exception$$module$exception.prototype.createCatchScope = function() {
    return!this.varName ? {} : this.abcFile.createObjectFromTraits([new trait$$module$exception.SlotTrait(this.varName, 1, this.typeName)])
  };
  Exception$$module$exception.prototype.handles = function(a, b) {
    if(this.handlesAny()) {
      return!0
    }
    var c = a.__get__(this.typeName);
    return c instanceof Function && b instanceof c
  };
  Exception$$module$exception.prototype.handlesAny = function() {
    return this.typeName === Exception$$module$exception.ANY_TYPENAME
  };
  Exception$$module$exception.prototype.isRelatedTo = function(a) {
    return this.from === a.from && this.to === a.to
  };
  module$exception.module$exports = ret$$module$exception;
  module$exception.module$exports && (module$exception = module$exception.module$exports);
  var module$instance = {}, trait$$module$instance = module$trait, ret$$module$instance = {create:function(a, b) {
    var c = a.multinames[b.name], d = parseSuperName$$module$instance(a, b), e = parseFlags$$module$instance(b.flags), f = parseProtectedNamespace$$module$instance(a, e, b), g = parseInterfaces$$module$instance(a, b), h = a.methods[b.iinit], i = parseTraits$$module$instance(a, b.trait);
    return new Instance$$module$instance(c, d, e, f, g, h, i)
  }};
  function parseSuperName$$module$instance(a, b) {
    if(0 !== b.super_name) {
      return a.multinames[b.super_name]
    }
  }
  function parseInterfaces$$module$instance(a, b) {
    return b["interface"].map(function(b) {
      return a.multinames[b]
    })
  }
  function parseFlags$$module$instance(a) {
    return{isSealed:!!(a & 1), isFinal:!!(a & 2), isInterface:!!(a & 4), hasProtectedNamespace:!!(a & 8)}
  }
  function parseProtectedNamespace$$module$instance(a, b, c) {
    if(b.hasProtectedNamespace) {
      return a.namespaces[c.protectedNs]
    }
  }
  function parseTraits$$module$instance(a, b) {
    return b.map(function(b) {
      return trait$$module$instance.create(a, b)
    })
  }
  var Instance$$module$instance = ret$$module$instance.Instance = function(a, b, c, d, e, f, g) {
    this.name = a;
    this.superName = b;
    this.isSealed = c.isSealed;
    this.isFinal = c.isFinal;
    this.isInterface = c.isInterface;
    this.protectedNamespace = d;
    this.interfaces = e;
    this.initializer = f;
    this.traits = g
  };
  module$instance.module$exports = ret$$module$instance;
  module$instance.module$exports && (module$instance = module$instance.module$exports);
  var module$method_body = {}, exception$$module$method_body = module$exception, trait$$module$method_body = module$trait, ret$$module$method_body = {create:function(a, b) {
    var c = a.methodSignatures[b.method], d = b.max_stack, e = b.local_count, f = b.init_scope_depth, g = b.max_scope_depth, h = b.code, i = parseExceptions$$module$method_body(a, b.exception), k = parseTraits$$module$method_body(a, b.trait);
    return new MethodBody$$module$method_body(c, d, e, f, g, h, i, k)
  }};
  function parseExceptions$$module$method_body(a, b) {
    return b.map(function(b) {
      return exception$$module$method_body.create(a, b)
    })
  }
  function parseTraits$$module$method_body(a, b) {
    return b.map(function(b) {
      return trait$$module$method_body.create(a, b)
    })
  }
  var MethodBody$$module$method_body = ret$$module$method_body.MethodBody = function(a, b, c, d, e, f, g, h) {
    this.signature = a;
    this.maxStack = b;
    this.localCount = c;
    this.initScopeDepth = d;
    this.maxScopeDepth = e;
    this.code = f;
    this.exceptions = g;
    this.traits = h
  };
  module$method_body.module$exports = ret$$module$method_body;
  module$method_body.module$exports && (module$method_body = module$method_body.module$exports);
  var module$vm = {}, Op$$module$vm = module$op, multiname$$module$vm = module$multiname, parameters$$module$vm = module$parameters, slice$$module$vm = Array.prototype.slice;
  function Vm$$module$vm(a, b, c, d) {
    this.abcFile = b;
    this.currentMethod = (this.body = c) ? c.code : {};
    this.signature = d;
    this.toplevel = a
  }
  Vm$$module$vm.prototype = {toFunction:function(a) {
    var b = a.capture(), c = this, a = function() {
      var a = Object.create(c);
      a.localRegisters = toRegisters$$module$vm(this, slice$$module$vm.call(arguments), a.getSignature(), a);
      a.nextLabel = "start";
      a.op = new Op$$module$vm(a);
      a.registeredExceptions = [];
      a.scope = b.toScope();
      a.stack = [];
      (function f() {
        try {
          a.currentMethod(a)
        }catch(b) {
          a.tryHandlingException(b, f)
        }
      })();
      return a.coerceReturnValue(a.returnValue)
    };
    a.__capturedScope__ = b;
    a.__method__ = this.currentMethod;
    return a
  }, coerce:function(a, b) {
    if(!a || "*" === a) {
      return b
    }
    var c = this.toplevel, d = "void" === a.toString() ? void 0 : c.getType(a), c = c.global;
    switch(d) {
      case c.String:
      ;
      case c.Object:
        return null === b || void 0 === b ? null : d(b);
      case c.Boolean:
      ;
      case c.Number:
      ;
      case c.int:
      ;
      case c.uint:
        return d(b);
      case void 0:
        if(void 0 === b) {
          return
        }
        break;
      default:
        if(b instanceof d) {
          return b
        }
        if(null === b || void 0 === b) {
          return null
        }
        if("function" === typeof d.__is__ && d.__is__(b)) {
          return b
        }
    }
    throw new TypeError("Error #1034: unable to convert value to " + a);
  }, coerceReturnValue:function(a) {
    return this.coerce(this.getReturnTypeName(), a)
  }, construct:function(a, b) {
    this.validateConstruct(a, b);
    return this._construct(a, b)
  }, _construct:function(a, b) {
    var b = b || [], c = b.length, d, e, f = a.prototype || Object.prototype, g = f.__slotDescriptors__ || void 0, h = a.__qualifiedName__;
    h && (e = this.toplevel.hasPreConstructorHook(h) && this.toplevel.getPreConstructorHook(h));
    if(g || e || 7 < c) {
      d = Object.create(f, g), e && e(d), c = a.apply(d, b), Object(c) === c && (d = c)
    }else {
      switch(c) {
        case 0:
          d = new a;
          break;
        case 1:
          d = new a(b[0]);
          break;
        case 2:
          d = new a(b[0], b[1]);
          break;
        case 3:
          d = new a(b[0], b[1], b[2]);
          break;
        case 4:
          d = new a(b[0], b[1], b[2], b[3]);
          break;
        case 5:
          d = new a(b[0], b[1], b[2], b[3], b[4]);
          break;
        case 6:
          d = new a(b[0], b[1], b[2], b[3], b[4], b[5]);
          break;
        case 7:
          d = new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6])
      }
    }
    Object.defineProperty(d, "constructor", {value:a});
    return d
  }, validateConstruct:function(a, b) {
    if(!a || !(a instanceof Function)) {
      if(a && a.__isClass__) {
        throw Error("Oh dear, we need to handle the non-function __isClass__ cases explicitly, `new` wont work");
      }
      throw new TypeError("Error 1041: (vm.validateConstruct) Expected function to be a constructor");
    }
    if(a.__isMethodClosure__) {
      throw new TypeError("Error #1064: Cannot call method closure as constructor");
    }
    if(a == this.toplevel.global.Array && 1 == b.length && "number" == typeof b[0]) {
      if(0 > b[0] || 0 != b[0] % 1) {
        throw new RangeError("Error #1005: Given initial array length is not a positive integer");
      }
      if(isNaN(b[0])) {
        throw new RangeError("Error #1005: Given initial array length index is NaN");
      }
    }
    if(a == this.toplevel.global.Math) {
      throw new TypeError("Error #1076: Math is not a constructor");
    }
    if(a == this.toplevel.global.Function && b.length) {
      throw new EvalError("Error #1066: The form function('function body') is not supported");
    }
  }, deregisterException:function(a) {
    a = this.registeredExceptions.indexOf(this.currentMethod.methodBody.exceptions[a]);
    -1 !== a && this.registeredExceptions.splice(a, 1)
  }, findExceptionHandler:function(a) {
    var b;
    this.registeredExceptions.slice().reverse().some(function(c) {
      if(c.handles(this.toplevel.global, a)) {
        return this.removeRelatedExceptionHandlers(c), b = c, !0
      }
    }, this);
    return b
  }, getArgsFromStack:function(a) {
    var b = this.stack.splice(-a, a);
    if(b.length !== a) {
      throw new (this.toplevel.getType(multiname$$module$vm.QName.fromStrings("", "ArgumentError")))("Error #2001: Insufficient arguments on stack");
    }
    return b
  }, getMethodTraits:function() {
    return this.body.traits
  }, getMultinameByIndex:function(a) {
    return this.abcFile.multinames[a].resolve(this.stack)
  }, getSignature:function() {
    return this.signature
  }, getReturnTypeName:function() {
    return this.signature.returnType
  }, getExceptionHandlerByIndex:function(a) {
    return this.currentMethod.methodBody.exceptions[a]
  }, "goto":function() {
    if(1E5 < ++this.loopProtection) {
      throw Error("Runaway loop protection (vm.js:goto)");
    }
    return this.nextLabel
  }, handleException:function(a, b, c) {
    this.nextLabel = b.targetLabel;
    this.scope.clear();
    this.stack = [a];
    c()
  }, removeRelatedExceptionHandlers:function(a) {
    this.registeredExceptions = this.registeredExceptions.filter(function(b) {
      return!a.isRelatedTo(b)
    })
  }, registerException:function(a, b) {
    var c = this.currentMethod.methodBody.exceptions[a];
    c.targetLabel = b;
    this.registeredExceptions.push(c)
  }, tryHandlingException:function(a, b) {
    var c = this.findExceptionHandler(a);
    if(c) {
      this.handleException(a, c, b)
    }else {
      throw this.uncaughtErrorThrown = a, a;
    }
  }};
  function toRegisters$$module$vm(a, b, c, d) {
    var e = c.parameters.length;
    c.optionalParameters && parameters$$module$vm.setDefaults(b, c.optionalParameters, e);
    c.needsRestArguments && (b = parameters$$module$vm.convertRest(b, e));
    b = b.map(function(a, b) {
      return d.coerce(c.parameters[b], a)
    });
    c.needsArguments && (b = handleArgumentsObject$$module$vm(b, c.parameters.length));
    return parameters$$module$vm.toRegisters(a, b)
  }
  function handleArgumentsObject$$module$vm(a, b) {
    return a.slice(0, b).concat([a.slice(0)])
  }
  module$vm.module$exports = Vm$$module$vm;
  module$vm.module$exports && (module$vm = module$vm.module$exports);
  var module$script = {}, Scope$$module$script = module$scope, Vm$$module$script = module$vm, trait$$module$script = module$trait;
  function Script$$module$script(a, b, c) {
    this.abcFile = a;
    this.executed = !1;
    this.method = b;
    this.traits = c;
    this.scope = new Scope$$module$script(this.abcFile.toplevel.global)
  }
  Script$$module$script.create = function(a, b) {
    var c = a.methods[b.init], d = parseTraits$$module$script(a, b.trait);
    return new Script$$module$script(a, c, d)
  };
  function parseTraits$$module$script(a, b) {
    return b.map(function(b) {
      return trait$$module$script.create(a, b)
    })
  }
  Script$$module$script.prototype = {run:function() {
    if(!this.executed) {
      return this.executed = !0, this.global = this.abcFile.createObjectFromTraits(this.traits, this.abcFile.toplevel.global, this.scope), this.method.toFunction(this.scope).call(this.global)
    }
  }};
  module$script.module$exports = Script$$module$script;
  module$script.module$exports && (module$script = module$script.module$exports);
  var module$abc_file = {}, Vm$$module$abc_file = module$vm, klass$$module$abc_file = module$class, instance$$module$abc_file = module$instance, method_body$$module$abc_file = module$method_body, method_signature$$module$abc_file = module$method_signature, multiname$$module$abc_file = module$multiname, namespace$$module$abc_file = module$namespace, namespace_set$$module$abc_file = module$namespace_set, script$$module$abc_file = module$script;
  function AbcFile$$module$abc_file(a, b, c) {
    this.toplevel = a;
    this.version = {major:b.major_version, minor:b.minor_version};
    this.strings = b.constant_pool.string;
    this.integers = b.constant_pool.integer.map(Number);
    this.uintegers = b.constant_pool.uinteger.map(Number);
    this.doubles = b.constant_pool["double"].map(Number);
    this.namespaces = parseNamespaces$$module$abc_file(this, b.constant_pool.namespace);
    this.namespaceSets = parseNamespaceSets$$module$abc_file(this, b.constant_pool.ns_set);
    this.multinames = parseMultinames$$module$abc_file(this, b.constant_pool.multiname);
    applyTypenames$$module$abc_file(this);
    this.methodSignatures = parseMethodSignatures$$module$abc_file(this, b.method_info);
    this.methodBodies = parseMethodBodies$$module$abc_file(this, b.method_body_info);
    this.methods = parseMethods$$module$abc_file(this, c);
    this.classes = parseClasses$$module$abc_file(this, b.class_info);
    this.instances = parseInstances$$module$abc_file(this, b.instance_info);
    this.scripts = parseScripts$$module$abc_file(this, b.script_info)
  }
  function pruneConstants$$module$abc_file(a) {
    var b = a.constant_pool;
    delete b.int_count;
    delete b.uint_count;
    delete b.double_count;
    delete b.string_count;
    delete b.namespace_count;
    delete b.ns_set_count;
    delete b.multiname_count;
    delete a.method_count;
    delete a.metadata_count;
    delete a.class_count;
    delete a.script_count;
    delete a.method_body_count;
    a.method_info.forEach(function(a) {
      delete a.param_count
    });
    a.script_info.forEach(function(a) {
      delete a.trait_count
    });
    a.method_body_info.forEach(function(a) {
      delete a.code_length;
      delete a.exception_count;
      delete a.trait_count;
      delete a.max_stack;
      delete a.local_count;
      delete a.init_scope_depth;
      delete a.max_scope_depth
    });
    a.class_info.forEach(function(a) {
      delete a.trait_count
    });
    a.instance_info.forEach(function(a) {
      delete a.trait_count;
      delete a.intrf_count
    })
  }
  function parseNamespaces$$module$abc_file(a, b) {
    return[null].concat(b.slice(1).map(function(b) {
      return namespace$$module$abc_file.create(a, b)
    }))
  }
  function parseNamespaceSets$$module$abc_file(a, b) {
    return[null].concat(b.slice(1).map(function(b) {
      return namespace_set$$module$abc_file.create(a, b)
    }))
  }
  function parseMultinames$$module$abc_file(a, b) {
    return[null].concat(b.slice(1).map(function(b) {
      return multiname$$module$abc_file.create(a, b)
    }))
  }
  function applyTypenames$$module$abc_file(a) {
    a.multinames.slice(1).filter(function(a) {
      return a.isTypename
    }).forEach(function(b) {
      b.resolveType(a)
    })
  }
  function parseMethodSignatures$$module$abc_file(a, b) {
    return b.map(function(b) {
      return method_signature$$module$abc_file.create(a, b)
    })
  }
  function parseMethodBodies$$module$abc_file(a, b) {
    return b.map(function(b) {
      return method_body$$module$abc_file.create(a, b)
    })
  }
  function parseMethods$$module$abc_file(a, b) {
    b && a.methodBodies.forEach(function(a, d) {
      a.code = b[d];
      b[d].methodBody = a
    });
    return a.methodSignatures.map(function(b) {
      var d = a.getMethodBodyBySignature(b);
      return new Vm$$module$abc_file(a.toplevel, a, d, b)
    })
  }
  function parseClasses$$module$abc_file(a, b) {
    return b.map(function(b) {
      return klass$$module$abc_file.create(a, b)
    })
  }
  function parseInstances$$module$abc_file(a, b) {
    return b.map(function(b) {
      return instance$$module$abc_file.create(a, b)
    })
  }
  function parseScripts$$module$abc_file(a, b) {
    return b.map(function(b) {
      return script$$module$abc_file.create(a, b)
    })
  }
  function getNamespaceByIndex$$module$abc_file(a) {
    return this.namespaces[a]
  }
  AbcFile$$module$abc_file.constantKindGetters = {1:function(a) {
    return this.strings[a]
  }, 3:function(a) {
    return this.integers[a]
  }, 4:function(a) {
    return this.uintegers[a]
  }, 6:function(a) {
    return this.doubles[a]
  }, 10:function() {
    return!1
  }, 11:function() {
    return!0
  }, 12:function() {
    return null
  }, "0":function() {
  }, 8:getNamespaceByIndex$$module$abc_file, 22:getNamespaceByIndex$$module$abc_file, 23:getNamespaceByIndex$$module$abc_file, 24:getNamespaceByIndex$$module$abc_file, 25:getNamespaceByIndex$$module$abc_file, 26:getNamespaceByIndex$$module$abc_file, 5:getNamespaceByIndex$$module$abc_file};
  AbcFile$$module$abc_file.prototype = {coerceTraitValue:function(a) {
    if(!a.typeName) {
      return a.value
    }
    switch(a.typeName.name) {
      case "Object":
      ;
      case "String":
        if(!a.value) {
          return null
        }
      ;
      case "Boolean":
      ;
      case "Number":
      ;
      case "int":
      ;
      case "uint":
        return(0, this.toplevel.global[a.typeName.name])(a.value)
    }
  }, createObjectFromTraits:function(a, b, c, d, e) {
    var b = b || {}, f = b.__traits__;
    f ? b.__traits__ = f.concat(a) : Object.defineProperties(b, {__traits__:{value:a, writable:!0}, __slots__:{value:[]}});
    var g = !(!e || !e.skipSlots);
    a.forEach(function(a) {
      var e = this.coerceTraitValue(a), f = 0;
      "slotId" in a && (b.__slots__[a.slotId || ++f] = a);
      if("dispatchId" in a) {
        e = e.toFunction(c);
        d && e.__capturedScope__.push(d);
        Object.defineProperty(e, "__isMethod__", {enumerable:!1, value:!0, writable:!1});
        var f = {configurable:!0}, j = a.isGetter ? "get" : a.isSetter ? "set" : "value";
        f[j] = e;
        "value" === j && (f.writable = !0);
        Object.defineProperty(b, a.name.toProperty(), f)
      }else {
        (!g || !a.isSlot) && Object.defineProperty(b, a.name.toProperty(), {value:e, writable:!0})
      }
    }, this);
    return b
  }, getConstant:function(a, b) {
    if(!(a in AbcFile$$module$abc_file.constantKindGetters)) {
      throw Error("Cannot get unknown constant kind from abcFile: " + a);
    }
    return AbcFile$$module$abc_file.constantKindGetters[a].call(this, b)
  }, getMethodBodyBySignature:function(a) {
    var b;
    this.methodBodies.some(function(c) {
      if(c.signature === a) {
        return b = c, !0
      }
    });
    return b
  }, hasType:function(a) {
    var b;
    this.scripts.some(function(c) {
      c.traits.some(function(d) {
        if(d.name.name === a.name) {
          return b = c, !0
        }
      })
    });
    return b && !b.executed ? (b.run(), !0) : !1
  }, run:function() {
    this.scripts.slice(-1)[0].run()
  }};
  AbcFile$$module$abc_file.getMethodNameByIndex = function(a, b) {
    for(var c, d = a.methods[b], e = 0;e < a.classes.length;++e) {
      var f = a.classes[e], g = a.instances[e];
      f.initializer === d && (c = g.name.name + "_$StaticInitializer$");
      g.initializer === d && (c = g.name.name + "_$Constructor$");
      f.traits.some(function(a) {
        if(a.method === d) {
          return c = g.name.name + "_" + a.name.name + "_$StaticMethod$", !0
        }
      });
      g.traits.some(function(a) {
        if(a.method === d) {
          return c = g.name.name + "_" + a.name.name, !0
        }
      });
      if(c) {
        break
      }
    }
    return c
  };
  module$abc_file.module$exports = AbcFile$$module$abc_file;
  module$abc_file.module$exports && (module$abc_file = module$abc_file.module$exports);
  var module$as3vm = {}, AbcFile$$module$as3vm = module$abc_file, TopLevel$$module$as3vm = module$top_level, global$$module$as3vm = module$global, multiname$$module$as3vm = module$multiname, as3vm$$module$as3vm = {AbcFile:AbcFile$$module$as3vm, TopLevel:TopLevel$$module$as3vm, multiname:multiname$$module$as3vm};
  "undefined" !== typeof global$$module$as3vm.exports && (global$$module$as3vm.exports.as3vm = as3vm$$module$as3vm);
  module$as3vm.module$exports = as3vm$$module$as3vm;
  module$as3vm.module$exports && (module$as3vm = module$as3vm.module$exports)
})();


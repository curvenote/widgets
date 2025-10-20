import * as cs from "react";
import Ci, { cloneElement as cl, useRef as fl, useState as xu, useEffect as Eu, useLayoutEffect as Ru, forwardRef as ku, isValidElement as Au, createRef as cu, Component as Iu, PureComponent as Nu } from "react";
import fu, { findDOMNode as _u } from "react-dom";
var Nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ou(ee) {
  if (ee.__esModule) return ee;
  var X = ee.default;
  if (typeof X == "function") {
    var ie = function K() {
      return this instanceof K ? Reflect.construct(X, arguments, this.constructor) : X.apply(this, arguments);
    };
    ie.prototype = X.prototype;
  } else ie = {};
  return Object.defineProperty(ie, "__esModule", { value: !0 }), Object.keys(ee).forEach(function(K) {
    var oe = Object.getOwnPropertyDescriptor(ee, K);
    Object.defineProperty(ie, K, oe.get ? oe : {
      enumerable: !0,
      get: function() {
        return ee[K];
      }
    });
  }), ie;
}
var is = { exports: {} }, vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l;
function Pu() {
  if (_l) return vo;
  _l = 1;
  var ee = Ci, X = Symbol.for("react.element"), ie = Symbol.for("react.fragment"), K = Object.prototype.hasOwnProperty, oe = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(m, b, g) {
    var p, _ = {}, x = null, N = null;
    g !== void 0 && (x = "" + g), b.key !== void 0 && (x = "" + b.key), b.ref !== void 0 && (N = b.ref);
    for (p in b) K.call(b, p) && !B.hasOwnProperty(p) && (_[p] = b[p]);
    if (m && m.defaultProps) for (p in b = m.defaultProps, b) _[p] === void 0 && (_[p] = b[p]);
    return { $$typeof: X, type: m, key: x, ref: N, props: _, _owner: oe.current };
  }
  return vo.Fragment = ie, vo.jsx = Z, vo.jsxs = Z, vo;
}
var go = {}, Ol;
function Mu() {
  if (Ol) return go;
  Ol = 1;
  var ee = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return ee.NODE_ENV !== "production" && function() {
    var X = Ci, ie = Symbol.for("react.element"), K = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), b = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), A = Symbol.iterator, y = "@@iterator";
    function a(V) {
      if (V === null || typeof V != "object")
        return null;
      var be = A && V[A] || V[y];
      return typeof be == "function" ? be : null;
    }
    var i = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(V) {
      {
        for (var be = arguments.length, Ie = new Array(be > 1 ? be - 1 : 0), Fe = 1; Fe < be; Fe++)
          Ie[Fe - 1] = arguments[Fe];
        d("error", V, Ie);
      }
    }
    function d(V, be, Ie) {
      {
        var Fe = i.ReactDebugCurrentFrame, je = Fe.getStackAddendum();
        je !== "" && (be += "%s", Ie = Ie.concat([je]));
        var rt = Ie.map(function(Ve) {
          return String(Ve);
        });
        rt.unshift("Warning: " + be), Function.prototype.apply.call(console[V], console, rt);
      }
    }
    var c = !1, l = !1, h = !1, C = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function I(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === oe || V === Z || S || V === B || V === p || V === _ || C || V === T || c || l || h || typeof V == "object" && V !== null && (V.$$typeof === N || V.$$typeof === x || V.$$typeof === m || V.$$typeof === b || V.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === w || V.getModuleId !== void 0));
    }
    function O(V, be, Ie) {
      var Fe = V.displayName;
      if (Fe)
        return Fe;
      var je = be.displayName || be.name || "";
      return je !== "" ? Ie + "(" + je + ")" : Ie;
    }
    function G(V) {
      return V.displayName || "Context";
    }
    function F(V) {
      if (V == null)
        return null;
      if (typeof V.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof V == "function")
        return V.displayName || V.name || null;
      if (typeof V == "string")
        return V;
      switch (V) {
        case oe:
          return "Fragment";
        case K:
          return "Portal";
        case Z:
          return "Profiler";
        case B:
          return "StrictMode";
        case p:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case b:
            var be = V;
            return G(be) + ".Consumer";
          case m:
            var Ie = V;
            return G(Ie._context) + ".Provider";
          case g:
            return O(V, V.render, "ForwardRef");
          case x:
            var Fe = V.displayName || null;
            return Fe !== null ? Fe : F(V.type) || "Memo";
          case N: {
            var je = V, rt = je._payload, Ve = je._init;
            try {
              return F(Ve(rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, q = 0, H, J, U, Y, te, se, ce;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function fe() {
      {
        if (q === 0) {
          H = console.log, J = console.info, U = console.warn, Y = console.error, te = console.group, se = console.groupCollapsed, ce = console.groupEnd;
          var V = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: V,
            log: V,
            warn: V,
            error: V,
            group: V,
            groupCollapsed: V,
            groupEnd: V
          });
        }
        q++;
      }
    }
    function pe() {
      {
        if (q--, q === 0) {
          var V = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, V, {
              value: H
            }),
            info: W({}, V, {
              value: J
            }),
            warn: W({}, V, {
              value: U
            }),
            error: W({}, V, {
              value: Y
            }),
            group: W({}, V, {
              value: te
            }),
            groupCollapsed: W({}, V, {
              value: se
            }),
            groupEnd: W({}, V, {
              value: ce
            })
          });
        }
        q < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = i.ReactCurrentDispatcher, Re;
    function Ee(V, be, Ie) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (je) {
            var Fe = je.stack.trim().match(/\n( *(at )?)/);
            Re = Fe && Fe[1] || "";
          }
        return `
` + Re + V;
      }
    }
    var _e = !1, De;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      De = new He();
    }
    function We(V, be) {
      if (!V || _e)
        return "";
      {
        var Ie = De.get(V);
        if (Ie !== void 0)
          return Ie;
      }
      var Fe;
      _e = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var rt;
      rt = xe.current, xe.current = null, fe();
      try {
        if (be) {
          var Ve = function() {
            throw Error();
          };
          if (Object.defineProperty(Ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ve, []);
            } catch (it) {
              Fe = it;
            }
            Reflect.construct(V, [], Ve);
          } else {
            try {
              Ve.call();
            } catch (it) {
              Fe = it;
            }
            V.call(Ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (it) {
            Fe = it;
          }
          V();
        }
      } catch (it) {
        if (it && Fe && typeof it.stack == "string") {
          for (var ze = it.stack.split(`
`), mt = Fe.stack.split(`
`), ot = ze.length - 1, dt = mt.length - 1; ot >= 1 && dt >= 0 && ze[ot] !== mt[dt]; )
            dt--;
          for (; ot >= 1 && dt >= 0; ot--, dt--)
            if (ze[ot] !== mt[dt]) {
              if (ot !== 1 || dt !== 1)
                do
                  if (ot--, dt--, dt < 0 || ze[ot] !== mt[dt]) {
                    var pt = `
` + ze[ot].replace(" at new ", " at ");
                    return V.displayName && pt.includes("<anonymous>") && (pt = pt.replace("<anonymous>", V.displayName)), typeof V == "function" && De.set(V, pt), pt;
                  }
                while (ot >= 1 && dt >= 0);
              break;
            }
        }
      } finally {
        _e = !1, xe.current = rt, pe(), Error.prepareStackTrace = je;
      }
      var Qt = V ? V.displayName || V.name : "", Ht = Qt ? Ee(Qt) : "";
      return typeof V == "function" && De.set(V, Ht), Ht;
    }
    function nt(V, be, Ie) {
      return We(V, !1);
    }
    function Ye(V) {
      var be = V.prototype;
      return !!(be && be.isReactComponent);
    }
    function Ae(V, be, Ie) {
      if (V == null)
        return "";
      if (typeof V == "function")
        return We(V, Ye(V));
      if (typeof V == "string")
        return Ee(V);
      switch (V) {
        case p:
          return Ee("Suspense");
        case _:
          return Ee("SuspenseList");
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case g:
            return nt(V.render);
          case x:
            return Ae(V.type, be, Ie);
          case N: {
            var Fe = V, je = Fe._payload, rt = Fe._init;
            try {
              return Ae(rt(je), be, Ie);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, at = {}, Qe = i.ReactDebugCurrentFrame;
    function gt(V) {
      if (V) {
        var be = V._owner, Ie = Ae(V.type, V._source, be ? be.type : null);
        Qe.setExtraStackFrame(Ie);
      } else
        Qe.setExtraStackFrame(null);
    }
    function It(V, be, Ie, Fe, je) {
      {
        var rt = Function.call.bind($e);
        for (var Ve in V)
          if (rt(V, Ve)) {
            var ze = void 0;
            try {
              if (typeof V[Ve] != "function") {
                var mt = Error((Fe || "React class") + ": " + Ie + " type `" + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof V[Ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw mt.name = "Invariant Violation", mt;
              }
              ze = V[Ve](be, Ve, Fe, Ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              ze = ot;
            }
            ze && !(ze instanceof Error) && (gt(je), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", Ie, Ve, typeof ze), gt(null)), ze instanceof Error && !(ze.message in at) && (at[ze.message] = !0, gt(je), s("Failed %s type: %s", Ie, ze.message), gt(null));
          }
      }
    }
    var lt = Array.isArray;
    function et(V) {
      return lt(V);
    }
    function Nt(V) {
      {
        var be = typeof Symbol == "function" && Symbol.toStringTag, Ie = be && V[Symbol.toStringTag] || V.constructor.name || "Object";
        return Ie;
      }
    }
    function ht(V) {
      try {
        return Ft(V), !1;
      } catch {
        return !0;
      }
    }
    function Ft(V) {
      return "" + V;
    }
    function Dt(V) {
      if (ht(V))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(V)), Ft(V);
    }
    var _t = i.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, Jt;
    function D(V) {
      if ($e.call(V, "ref")) {
        var be = Object.getOwnPropertyDescriptor(V, "ref").get;
        if (be && be.isReactWarning)
          return !1;
      }
      return V.ref !== void 0;
    }
    function Q(V) {
      if ($e.call(V, "key")) {
        var be = Object.getOwnPropertyDescriptor(V, "key").get;
        if (be && be.isReactWarning)
          return !1;
      }
      return V.key !== void 0;
    }
    function me(V, be) {
      typeof V.ref == "string" && _t.current;
    }
    function de(V, be) {
      {
        var Ie = function() {
          xt || (xt = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", be));
        };
        Ie.isReactWarning = !0, Object.defineProperty(V, "key", {
          get: Ie,
          configurable: !0
        });
      }
    }
    function Ce(V, be) {
      {
        var Ie = function() {
          Jt || (Jt = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", be));
        };
        Ie.isReactWarning = !0, Object.defineProperty(V, "ref", {
          get: Ie,
          configurable: !0
        });
      }
    }
    var Ne = function(V, be, Ie, Fe, je, rt, Ve) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: ie,
        // Built-in properties that belong on the element
        type: V,
        key: be,
        ref: Ie,
        props: Ve,
        // Record the component responsible for creating this element.
        _owner: rt
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function Oe(V, be, Ie, Fe, je) {
      {
        var rt, Ve = {}, ze = null, mt = null;
        Ie !== void 0 && (Dt(Ie), ze = "" + Ie), Q(be) && (Dt(be.key), ze = "" + be.key), D(be) && (mt = be.ref, me(be, je));
        for (rt in be)
          $e.call(be, rt) && !ft.hasOwnProperty(rt) && (Ve[rt] = be[rt]);
        if (V && V.defaultProps) {
          var ot = V.defaultProps;
          for (rt in ot)
            Ve[rt] === void 0 && (Ve[rt] = ot[rt]);
        }
        if (ze || mt) {
          var dt = typeof V == "function" ? V.displayName || V.name || "Unknown" : V;
          ze && de(Ve, dt), mt && Ce(Ve, dt);
        }
        return Ne(V, ze, mt, je, Fe, _t.current, Ve);
      }
    }
    var Be = i.ReactCurrentOwner, Je = i.ReactDebugCurrentFrame;
    function Xe(V) {
      if (V) {
        var be = V._owner, Ie = Ae(V.type, V._source, be ? be.type : null);
        Je.setExtraStackFrame(Ie);
      } else
        Je.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function ct(V) {
      return typeof V == "object" && V !== null && V.$$typeof === ie;
    }
    function St() {
      {
        if (Be.current) {
          var V = F(Be.current.type);
          if (V)
            return `

Check the render method of \`` + V + "`.";
        }
        return "";
      }
    }
    function Ot(V) {
      return "";
    }
    var Mt = {};
    function mn(V) {
      {
        var be = St();
        if (!be) {
          var Ie = typeof V == "string" ? V : V.displayName || V.name;
          Ie && (be = `

Check the top-level render call using <` + Ie + ">.");
        }
        return be;
      }
    }
    function Ut(V, be) {
      {
        if (!V._store || V._store.validated || V.key != null)
          return;
        V._store.validated = !0;
        var Ie = mn(be);
        if (Mt[Ie])
          return;
        Mt[Ie] = !0;
        var Fe = "";
        V && V._owner && V._owner !== Be.current && (Fe = " It was passed a child from " + F(V._owner.type) + "."), Xe(V), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ie, Fe), Xe(null);
      }
    }
    function xn(V, be) {
      {
        if (typeof V != "object")
          return;
        if (et(V))
          for (var Ie = 0; Ie < V.length; Ie++) {
            var Fe = V[Ie];
            ct(Fe) && Ut(Fe, be);
          }
        else if (ct(V))
          V._store && (V._store.validated = !0);
        else if (V) {
          var je = a(V);
          if (typeof je == "function" && je !== V.entries)
            for (var rt = je.call(V), Ve; !(Ve = rt.next()).done; )
              ct(Ve.value) && Ut(Ve.value, be);
        }
      }
    }
    function Et(V) {
      {
        var be = V.type;
        if (be == null || typeof be == "string")
          return;
        var Ie;
        if (typeof be == "function")
          Ie = be.propTypes;
        else if (typeof be == "object" && (be.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        be.$$typeof === x))
          Ie = be.propTypes;
        else
          return;
        if (Ie) {
          var Fe = F(be);
          It(Ie, V.props, "prop", Fe, V);
        } else if (be.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var je = F(be);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof be.getDefaultProps == "function" && !be.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function En(V) {
      {
        for (var be = Object.keys(V.props), Ie = 0; Ie < be.length; Ie++) {
          var Fe = be[Ie];
          if (Fe !== "children" && Fe !== "key") {
            Xe(V), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), Xe(null);
            break;
          }
        }
        V.ref !== null && (Xe(V), s("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var Rn = {};
    function kn(V, be, Ie, Fe, je, rt) {
      {
        var Ve = I(V);
        if (!Ve) {
          var ze = "";
          (V === void 0 || typeof V == "object" && V !== null && Object.keys(V).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var mt = Ot();
          mt ? ze += mt : ze += St();
          var ot;
          V === null ? ot = "null" : et(V) ? ot = "array" : V !== void 0 && V.$$typeof === ie ? (ot = "<" + (F(V.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof V, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, ze);
        }
        var dt = Oe(V, be, Ie, je, rt);
        if (dt == null)
          return dt;
        if (Ve) {
          var pt = be.children;
          if (pt !== void 0)
            if (Fe)
              if (et(pt)) {
                for (var Qt = 0; Qt < pt.length; Qt++)
                  xn(pt[Qt], V);
                Object.freeze && Object.freeze(pt);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xn(pt, V);
        }
        if ($e.call(be, "key")) {
          var Ht = F(V), it = Object.keys(be).filter(function($t) {
            return $t !== "key";
          }), jt = it.length > 0 ? "{key: someKey, " + it.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Rn[Ht + jt]) {
            var Wt = it.length > 0 ? "{" + it.join(": ..., ") + ": ...}" : "{}";
            s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, jt, Ht, Wt, Ht), Rn[Ht + jt] = !0;
          }
        }
        return V === oe ? En(dt) : Et(dt), dt;
      }
    }
    function Ct(V, be, Ie) {
      return kn(V, be, Ie, !0);
    }
    function Fn(V, be, Ie) {
      return kn(V, be, Ie, !1);
    }
    var Vn = Fn, yn = Ct;
    go.Fragment = oe, go.jsx = Vn, go.jsxs = yn;
  }(), go;
}
var Pl;
function Lu() {
  if (Pl) return is.exports;
  Pl = 1;
  var ee = {};
  return ee.NODE_ENV === "production" ? is.exports = Pu() : is.exports = Mu(), is.exports;
}
var fs = Lu(), Ca = {}, Ml;
function Fu() {
  if (Ml) return Ca;
  Ml = 1;
  var ee = {}, X = fu;
  if (ee.NODE_ENV === "production")
    Ca.createRoot = X.createRoot, Ca.hydrateRoot = X.hydrateRoot;
  else {
    var ie = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ca.createRoot = function(K, oe) {
      ie.usingClientEntryPoint = !0;
      try {
        return X.createRoot(K, oe);
      } finally {
        ie.usingClientEntryPoint = !1;
      }
    }, Ca.hydrateRoot = function(K, oe, B) {
      ie.usingClientEntryPoint = !0;
      try {
        return X.hydrateRoot(K, oe, B);
      } finally {
        ie.usingClientEntryPoint = !1;
      }
    };
  }
  return Ca;
}
var Bu = Fu(), ds = { exports: {} }, Dr = {}, wi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ll;
function Gu() {
  if (Ll) return wi;
  Ll = 1;
  var ee = Ci;
  function X(u) {
    for (var R = "https://reactjs.org/docs/error-decoder.html?invariant=" + u, L = 1; L < arguments.length; L++) R += "&args[]=" + encodeURIComponent(arguments[L]);
    return "Minified React error #" + u + "; visit " + R + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ie = Object.prototype.hasOwnProperty, K = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = {}, B = {};
  function Z(u) {
    return ie.call(B, u) ? !0 : ie.call(oe, u) ? !1 : K.test(u) ? B[u] = !0 : (oe[u] = !0, !1);
  }
  function m(u, R, L, z, le, re, he) {
    this.acceptsBooleans = R === 2 || R === 3 || R === 4, this.attributeName = z, this.attributeNamespace = le, this.mustUseProperty = L, this.propertyName = u, this.type = R, this.sanitizeURL = re, this.removeEmptyString = he;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(u) {
    b[u] = new m(u, 0, !1, u, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(u) {
    var R = u[0];
    b[R] = new m(R, 1, !1, u[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(u) {
    b[u] = new m(u, 2, !1, u.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(u) {
    b[u] = new m(u, 2, !1, u, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(u) {
    b[u] = new m(u, 3, !1, u.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(u) {
    b[u] = new m(u, 3, !0, u, null, !1, !1);
  }), ["capture", "download"].forEach(function(u) {
    b[u] = new m(u, 4, !1, u, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(u) {
    b[u] = new m(u, 6, !1, u, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(u) {
    b[u] = new m(u, 5, !1, u.toLowerCase(), null, !1, !1);
  });
  var g = /[\-:]([a-z])/g;
  function p(u) {
    return u[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(u) {
    var R = u.replace(
      g,
      p
    );
    b[R] = new m(R, 1, !1, u, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(u) {
    var R = u.replace(g, p);
    b[R] = new m(R, 1, !1, u, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(u) {
    var R = u.replace(g, p);
    b[R] = new m(R, 1, !1, u, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(u) {
    b[u] = new m(u, 1, !1, u.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(u) {
    b[u] = new m(u, 1, !1, u.toLowerCase(), null, !0, !0);
  });
  var _ = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, x = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_).forEach(function(u) {
    x.forEach(function(R) {
      R = R + u.charAt(0).toUpperCase() + u.substring(1), _[R] = _[u];
    });
  });
  var N = /["'&<>]/;
  function T(u) {
    if (typeof u == "boolean" || typeof u == "number") return "" + u;
    u = "" + u;
    var R = N.exec(u);
    if (R) {
      var L = "", z, le = 0;
      for (z = R.index; z < u.length; z++) {
        switch (u.charCodeAt(z)) {
          case 34:
            R = "&quot;";
            break;
          case 38:
            R = "&amp;";
            break;
          case 39:
            R = "&#x27;";
            break;
          case 60:
            R = "&lt;";
            break;
          case 62:
            R = "&gt;";
            break;
          default:
            continue;
        }
        le !== z && (L += u.substring(le, z)), le = z + 1, L += R;
      }
      u = le !== z ? L + u.substring(le, z) : L;
    }
    return u;
  }
  var A = /([A-Z])/g, y = /^ms-/, a = Array.isArray;
  function i(u, R) {
    return { insertionMode: u, selectedValue: R };
  }
  function s(u, R, L) {
    switch (R) {
      case "select":
        return i(1, L.value != null ? L.value : L.defaultValue);
      case "svg":
        return i(2, null);
      case "math":
        return i(3, null);
      case "foreignObject":
        return i(1, null);
      case "table":
        return i(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return i(5, null);
      case "colgroup":
        return i(7, null);
      case "tr":
        return i(6, null);
    }
    return 4 <= u.insertionMode || u.insertionMode === 0 ? i(1, null) : u;
  }
  var d = /* @__PURE__ */ new Map();
  function c(u, R, L) {
    if (typeof L != "object") throw Error(X(62));
    R = !0;
    for (var z in L) if (ie.call(L, z)) {
      var le = L[z];
      if (le != null && typeof le != "boolean" && le !== "") {
        if (z.indexOf("--") === 0) {
          var re = T(z);
          le = T(("" + le).trim());
        } else {
          re = z;
          var he = d.get(re);
          he !== void 0 || (he = T(re.replace(A, "-$1").toLowerCase().replace(y, "-ms-")), d.set(re, he)), re = he, le = typeof le == "number" ? le === 0 || ie.call(_, z) ? "" + le : le + "px" : T(("" + le).trim());
        }
        R ? (R = !1, u.push(' style="', re, ":", le)) : u.push(";", re, ":", le);
      }
    }
    R || u.push('"');
  }
  function l(u, R, L, z) {
    switch (L) {
      case "style":
        c(u, R, z);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < L.length) || L[0] !== "o" && L[0] !== "O" || L[1] !== "n" && L[1] !== "N") {
      if (R = b.hasOwnProperty(L) ? b[L] : null, R !== null) {
        switch (typeof z) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!R.acceptsBooleans) return;
        }
        switch (L = R.attributeName, R.type) {
          case 3:
            z && u.push(" ", L, '=""');
            break;
          case 4:
            z === !0 ? u.push(" ", L, '=""') : z !== !1 && u.push(" ", L, '="', T(z), '"');
            break;
          case 5:
            isNaN(z) || u.push(" ", L, '="', T(z), '"');
            break;
          case 6:
            !isNaN(z) && 1 <= z && u.push(" ", L, '="', T(z), '"');
            break;
          default:
            R.sanitizeURL && (z = "" + z), u.push(" ", L, '="', T(z), '"');
        }
      } else if (Z(L)) {
        switch (typeof z) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (R = L.toLowerCase().slice(0, 5), R !== "data-" && R !== "aria-") return;
        }
        u.push(" ", L, '="', T(z), '"');
      }
    }
  }
  function h(u, R, L) {
    if (R != null) {
      if (L != null) throw Error(X(60));
      if (typeof R != "object" || !("__html" in R)) throw Error(X(61));
      R = R.__html, R != null && u.push("" + R);
    }
  }
  function C(u) {
    var R = "";
    return ee.Children.forEach(u, function(L) {
      L != null && (R += L);
    }), R;
  }
  function S(u, R, L, z) {
    u.push(O(L));
    var le = L = null, re;
    for (re in R) if (ie.call(R, re)) {
      var he = R[re];
      if (he != null) switch (re) {
        case "children":
          L = he;
          break;
        case "dangerouslySetInnerHTML":
          le = he;
          break;
        default:
          l(u, z, re, he);
      }
    }
    return u.push(">"), h(u, le, L), typeof L == "string" ? (u.push(T(L)), null) : L;
  }
  var w = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, I = /* @__PURE__ */ new Map();
  function O(u) {
    var R = I.get(u);
    if (R === void 0) {
      if (!w.test(u)) throw Error(X(65, u));
      R = "<" + u, I.set(u, R);
    }
    return R;
  }
  function G(u, R, L, z, le) {
    switch (R) {
      case "select":
        u.push(O("select"));
        var re = null, he = null;
        for (Ue in L) if (ie.call(L, Ue)) {
          var Se = L[Ue];
          if (Se != null) switch (Ue) {
            case "children":
              re = Se;
              break;
            case "dangerouslySetInnerHTML":
              he = Se;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              l(u, z, Ue, Se);
          }
        }
        return u.push(">"), h(u, he, re), re;
      case "option":
        he = le.selectedValue, u.push(O("option"));
        var Me = Se = null, Le = null, Ue = null;
        for (re in L) if (ie.call(L, re)) {
          var tt = L[re];
          if (tt != null) switch (re) {
            case "children":
              Se = tt;
              break;
            case "selected":
              Le = tt;
              break;
            case "dangerouslySetInnerHTML":
              Ue = tt;
              break;
            case "value":
              Me = tt;
            default:
              l(u, z, re, tt);
          }
        }
        if (he != null) if (L = Me !== null ? "" + Me : C(Se), a(he)) {
          for (z = 0; z < he.length; z++)
            if ("" + he[z] === L) {
              u.push(' selected=""');
              break;
            }
        } else "" + he === L && u.push(' selected=""');
        else Le && u.push(' selected=""');
        return u.push(">"), h(u, Ue, Se), Se;
      case "textarea":
        u.push(O("textarea")), Ue = he = re = null;
        for (Se in L) if (ie.call(L, Se) && (Me = L[Se], Me != null)) switch (Se) {
          case "children":
            Ue = Me;
            break;
          case "value":
            re = Me;
            break;
          case "defaultValue":
            he = Me;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(X(91));
          default:
            l(
              u,
              z,
              Se,
              Me
            );
        }
        if (re === null && he !== null && (re = he), u.push(">"), Ue != null) {
          if (re != null) throw Error(X(92));
          if (a(Ue) && 1 < Ue.length) throw Error(X(93));
          re = "" + Ue;
        }
        return typeof re == "string" && re[0] === `
` && u.push(`
`), re !== null && u.push(T("" + re)), null;
      case "input":
        u.push(O("input")), Me = Ue = Se = re = null;
        for (he in L) if (ie.call(L, he) && (Le = L[he], Le != null)) switch (he) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(X(399, "input"));
          case "defaultChecked":
            Me = Le;
            break;
          case "defaultValue":
            Se = Le;
            break;
          case "checked":
            Ue = Le;
            break;
          case "value":
            re = Le;
            break;
          default:
            l(u, z, he, Le);
        }
        return Ue !== null ? l(u, z, "checked", Ue) : Me !== null && l(u, z, "checked", Me), re !== null ? l(u, z, "value", re) : Se !== null && l(u, z, "value", Se), u.push("/>"), null;
      case "menuitem":
        u.push(O("menuitem"));
        for (var kt in L) if (ie.call(L, kt) && (re = L[kt], re != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(X(400));
          default:
            l(u, z, kt, re);
        }
        return u.push(">"), null;
      case "title":
        u.push(O("title")), re = null;
        for (tt in L) if (ie.call(L, tt) && (he = L[tt], he != null)) switch (tt) {
          case "children":
            re = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(X(434));
          default:
            l(u, z, tt, he);
        }
        return u.push(">"), re;
      case "listing":
      case "pre":
        u.push(O(R)), he = re = null;
        for (Me in L) if (ie.call(L, Me) && (Se = L[Me], Se != null)) switch (Me) {
          case "children":
            re = Se;
            break;
          case "dangerouslySetInnerHTML":
            he = Se;
            break;
          default:
            l(u, z, Me, Se);
        }
        if (u.push(">"), he != null) {
          if (re != null) throw Error(X(60));
          if (typeof he != "object" || !("__html" in he)) throw Error(X(61));
          L = he.__html, L != null && (typeof L == "string" && 0 < L.length && L[0] === `
` ? u.push(`
`, L) : u.push("" + L));
        }
        return typeof re == "string" && re[0] === `
` && u.push(`
`), re;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        u.push(O(R));
        for (var Bt in L) if (ie.call(L, Bt) && (re = L[Bt], re != null)) switch (Bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(X(399, R));
          default:
            l(u, z, Bt, re);
        }
        return u.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return S(
          u,
          L,
          R,
          z
        );
      case "html":
        return le.insertionMode === 0 && u.push("<!DOCTYPE html>"), S(u, L, R, z);
      default:
        if (R.indexOf("-") === -1 && typeof L.is != "string") return S(u, L, R, z);
        u.push(O(R)), he = re = null;
        for (Le in L) if (ie.call(L, Le) && (Se = L[Le], Se != null)) switch (Le) {
          case "children":
            re = Se;
            break;
          case "dangerouslySetInnerHTML":
            he = Se;
            break;
          case "style":
            c(u, z, Se);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Z(Le) && typeof Se != "function" && typeof Se != "symbol" && u.push(" ", Le, '="', T(Se), '"');
        }
        return u.push(">"), h(u, he, re), re;
    }
  }
  function F(u, R, L) {
    if (u.push('<!--$?--><template id="'), L === null) throw Error(X(395));
    return u.push(L), u.push('"></template>');
  }
  function W(u, R, L, z) {
    switch (L.insertionMode) {
      case 0:
      case 1:
        return u.push('<div hidden id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      case 2:
        return u.push('<svg aria-hidden="true" style="display:none" id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      case 3:
        return u.push('<math aria-hidden="true" style="display:none" id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      case 4:
        return u.push('<table hidden id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      case 5:
        return u.push('<table hidden><tbody id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      case 6:
        return u.push('<table hidden><tr id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      case 7:
        return u.push('<table hidden><colgroup id="'), u.push(R.segmentPrefix), R = z.toString(16), u.push(R), u.push('">');
      default:
        throw Error(X(397));
    }
  }
  function q(u, R) {
    switch (R.insertionMode) {
      case 0:
      case 1:
        return u.push("</div>");
      case 2:
        return u.push("</svg>");
      case 3:
        return u.push("</math>");
      case 4:
        return u.push("</table>");
      case 5:
        return u.push("</tbody></table>");
      case 6:
        return u.push("</tr></table>");
      case 7:
        return u.push("</colgroup></table>");
      default:
        throw Error(X(397));
    }
  }
  var H = /[<\u2028\u2029]/g;
  function J(u) {
    return JSON.stringify(u).replace(H, function(R) {
      switch (R) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function U(u, R) {
    return R = R === void 0 ? "" : R, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: R + "P:", segmentPrefix: R + "S:", boundaryPrefix: R + "B:", idPrefix: R, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: u };
  }
  function Y(u, R, L, z) {
    return L.generateStaticMarkup ? (u.push(T(R)), !1) : (R === "" ? u = z : (z && u.push("<!-- -->"), u.push(T(R)), u = !0), u);
  }
  var te = Object.assign, se = Symbol.for("react.element"), ce = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), Re = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), He = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), nt = Symbol.for("react.scope"), Ye = Symbol.for("react.debug_trace_mode"), Ae = Symbol.for("react.legacy_hidden"), $e = Symbol.for("react.default_value"), at = Symbol.iterator;
  function Qe(u) {
    if (u == null) return null;
    if (typeof u == "function") return u.displayName || u.name || null;
    if (typeof u == "string") return u;
    switch (u) {
      case ve:
        return "Fragment";
      case ce:
        return "Portal";
      case pe:
        return "Profiler";
      case fe:
        return "StrictMode";
      case _e:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof u == "object") switch (u.$$typeof) {
      case Re:
        return (u.displayName || "Context") + ".Consumer";
      case xe:
        return (u._context.displayName || "Context") + ".Provider";
      case Ee:
        var R = u.render;
        return u = u.displayName, u || (u = R.displayName || R.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
      case He:
        return R = u.displayName || null, R !== null ? R : Qe(u.type) || "Memo";
      case We:
        R = u._payload, u = u._init;
        try {
          return Qe(u(R));
        } catch {
        }
    }
    return null;
  }
  var gt = {};
  function It(u, R) {
    if (u = u.contextTypes, !u) return gt;
    var L = {}, z;
    for (z in u) L[z] = R[z];
    return L;
  }
  var lt = null;
  function et(u, R) {
    if (u !== R) {
      u.context._currentValue2 = u.parentValue, u = u.parent;
      var L = R.parent;
      if (u === null) {
        if (L !== null) throw Error(X(401));
      } else {
        if (L === null) throw Error(X(401));
        et(u, L);
      }
      R.context._currentValue2 = R.value;
    }
  }
  function Nt(u) {
    u.context._currentValue2 = u.parentValue, u = u.parent, u !== null && Nt(u);
  }
  function ht(u) {
    var R = u.parent;
    R !== null && ht(R), u.context._currentValue2 = u.value;
  }
  function Ft(u, R) {
    if (u.context._currentValue2 = u.parentValue, u = u.parent, u === null) throw Error(X(402));
    u.depth === R.depth ? et(u, R) : Ft(u, R);
  }
  function Dt(u, R) {
    var L = R.parent;
    if (L === null) throw Error(X(402));
    u.depth === L.depth ? et(u, L) : Dt(u, L), R.context._currentValue2 = R.value;
  }
  function _t(u) {
    var R = lt;
    R !== u && (R === null ? ht(u) : u === null ? Nt(R) : R.depth === u.depth ? et(R, u) : R.depth > u.depth ? Ft(R, u) : Dt(R, u), lt = u);
  }
  var ft = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(u, R) {
    u = u._reactInternals, u.queue !== null && u.queue.push(R);
  }, enqueueReplaceState: function(u, R) {
    u = u._reactInternals, u.replace = !0, u.queue = [R];
  }, enqueueForceUpdate: function() {
  } };
  function xt(u, R, L, z) {
    var le = u.state !== void 0 ? u.state : null;
    u.updater = ft, u.props = L, u.state = le;
    var re = { queue: [], replace: !1 };
    u._reactInternals = re;
    var he = R.contextType;
    if (u.context = typeof he == "object" && he !== null ? he._currentValue2 : z, he = R.getDerivedStateFromProps, typeof he == "function" && (he = he(L, le), le = he == null ? le : te({}, le, he), u.state = le), typeof R.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function")) if (R = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), R !== u.state && ft.enqueueReplaceState(u, u.state, null), re.queue !== null && 0 < re.queue.length) if (R = re.queue, he = re.replace, re.queue = null, re.replace = !1, he && R.length === 1) u.state = R[0];
    else {
      for (re = he ? R[0] : u.state, le = !0, he = he ? 1 : 0; he < R.length; he++) {
        var Se = R[he];
        Se = typeof Se == "function" ? Se.call(u, re, L, z) : Se, Se != null && (le ? (le = !1, re = te({}, re, Se)) : te(re, Se));
      }
      u.state = re;
    }
    else re.queue = null;
  }
  var Jt = { id: 1, overflow: "" };
  function D(u, R, L) {
    var z = u.id;
    u = u.overflow;
    var le = 32 - Q(z) - 1;
    z &= ~(1 << le), L += 1;
    var re = 32 - Q(R) + le;
    if (30 < re) {
      var he = le - le % 5;
      return re = (z & (1 << he) - 1).toString(32), z >>= he, le -= he, { id: 1 << 32 - Q(R) + le | L << le | z, overflow: re + u };
    }
    return { id: 1 << re | L << le | z, overflow: u };
  }
  var Q = Math.clz32 ? Math.clz32 : Ce, me = Math.log, de = Math.LN2;
  function Ce(u) {
    return u >>>= 0, u === 0 ? 32 : 31 - (me(u) / de | 0) | 0;
  }
  function Ne(u, R) {
    return u === R && (u !== 0 || 1 / u === 1 / R) || u !== u && R !== R;
  }
  var Oe = typeof Object.is == "function" ? Object.is : Ne, Be = null, Je = null, Xe = null, Pe = null, ct = !1, St = !1, Ot = 0, Mt = null, mn = 0;
  function Ut() {
    if (Be === null) throw Error(X(321));
    return Be;
  }
  function xn() {
    if (0 < mn) throw Error(X(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Et() {
    return Pe === null ? Xe === null ? (ct = !1, Xe = Pe = xn()) : (ct = !0, Pe = Xe) : Pe.next === null ? (ct = !1, Pe = Pe.next = xn()) : (ct = !0, Pe = Pe.next), Pe;
  }
  function En() {
    Je = Be = null, St = !1, Xe = null, mn = 0, Pe = Mt = null;
  }
  function Rn(u, R) {
    return typeof R == "function" ? R(u) : R;
  }
  function kn(u, R, L) {
    if (Be = Ut(), Pe = Et(), ct) {
      var z = Pe.queue;
      if (R = z.dispatch, Mt !== null && (L = Mt.get(z), L !== void 0)) {
        Mt.delete(z), z = Pe.memoizedState;
        do
          z = u(z, L.action), L = L.next;
        while (L !== null);
        return Pe.memoizedState = z, [z, R];
      }
      return [Pe.memoizedState, R];
    }
    return u = u === Rn ? typeof R == "function" ? R() : R : L !== void 0 ? L(R) : R, Pe.memoizedState = u, u = Pe.queue = { last: null, dispatch: null }, u = u.dispatch = Fn.bind(null, Be, u), [Pe.memoizedState, u];
  }
  function Ct(u, R) {
    if (Be = Ut(), Pe = Et(), R = R === void 0 ? null : R, Pe !== null) {
      var L = Pe.memoizedState;
      if (L !== null && R !== null) {
        var z = L[1];
        e: if (z === null) z = !1;
        else {
          for (var le = 0; le < z.length && le < R.length; le++) if (!Oe(R[le], z[le])) {
            z = !1;
            break e;
          }
          z = !0;
        }
        if (z) return L[0];
      }
    }
    return u = u(), Pe.memoizedState = [u, R], u;
  }
  function Fn(u, R, L) {
    if (25 <= mn) throw Error(X(301));
    if (u === Be) if (St = !0, u = { action: L, next: null }, Mt === null && (Mt = /* @__PURE__ */ new Map()), L = Mt.get(R), L === void 0) Mt.set(R, u);
    else {
      for (R = L; R.next !== null; ) R = R.next;
      R.next = u;
    }
  }
  function Vn() {
    throw Error(X(394));
  }
  function yn() {
  }
  var V = { readContext: function(u) {
    return u._currentValue2;
  }, useContext: function(u) {
    return Ut(), u._currentValue2;
  }, useMemo: Ct, useReducer: kn, useRef: function(u) {
    Be = Ut(), Pe = Et();
    var R = Pe.memoizedState;
    return R === null ? (u = { current: u }, Pe.memoizedState = u) : R;
  }, useState: function(u) {
    return kn(Rn, u);
  }, useInsertionEffect: yn, useLayoutEffect: function() {
  }, useCallback: function(u, R) {
    return Ct(function() {
      return u;
    }, R);
  }, useImperativeHandle: yn, useEffect: yn, useDebugValue: yn, useDeferredValue: function(u) {
    return Ut(), u;
  }, useTransition: function() {
    return Ut(), [
      !1,
      Vn
    ];
  }, useId: function() {
    var u = Je.treeContext, R = u.overflow;
    u = u.id, u = (u & ~(1 << 32 - Q(u) - 1)).toString(32) + R;
    var L = be;
    if (L === null) throw Error(X(404));
    return R = Ot++, u = ":" + L.idPrefix + "R" + u, 0 < R && (u += "H" + R.toString(32)), u + ":";
  }, useMutableSource: function(u, R) {
    return Ut(), R(u._source);
  }, useSyncExternalStore: function(u, R, L) {
    if (L === void 0) throw Error(X(407));
    return L();
  } }, be = null, Ie = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Fe(u) {
    return console.error(u), null;
  }
  function je() {
  }
  function rt(u, R, L, z, le, re, he, Se, Me) {
    var Le = [], Ue = /* @__PURE__ */ new Set();
    return R = { destination: null, responseState: R, progressiveChunkSize: z === void 0 ? 12800 : z, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ue, pingedTasks: Le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: le === void 0 ? Fe : le, onAllReady: je, onShellReady: he === void 0 ? je : he, onShellError: je, onFatalError: je }, L = ze(R, 0, null, L, !1, !1), L.parentFlushed = !0, u = Ve(R, u, null, L, Ue, gt, null, Jt), Le.push(u), R;
  }
  function Ve(u, R, L, z, le, re, he, Se) {
    u.allPendingTasks++, L === null ? u.pendingRootTasks++ : L.pendingTasks++;
    var Me = { node: R, ping: function() {
      var Le = u.pingedTasks;
      Le.push(Me), Le.length === 1 && Bn(u);
    }, blockedBoundary: L, blockedSegment: z, abortSet: le, legacyContext: re, context: he, treeContext: Se };
    return le.add(Me), Me;
  }
  function ze(u, R, L, z, le, re) {
    return { status: 0, id: -1, index: R, parentFlushed: !1, chunks: [], children: [], formatContext: z, boundary: L, lastPushedText: le, textEmbedded: re };
  }
  function mt(u, R) {
    if (u = u.onError(R), u != null && typeof u != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof u + '" instead');
    return u;
  }
  function ot(u, R) {
    var L = u.onShellError;
    L(R), L = u.onFatalError, L(R), u.destination !== null ? (u.status = 2, u.destination.destroy(R)) : (u.status = 1, u.fatalError = R);
  }
  function dt(u, R, L, z, le) {
    for (Be = {}, Je = R, Ot = 0, u = L(z, le); St; ) St = !1, Ot = 0, mn += 1, Pe = null, u = L(z, le);
    return En(), u;
  }
  function pt(u, R, L, z) {
    var le = L.render(), re = z.childContextTypes;
    if (re != null) {
      var he = R.legacyContext;
      if (typeof L.getChildContext != "function") z = he;
      else {
        L = L.getChildContext();
        for (var Se in L) if (!(Se in re)) throw Error(X(108, Qe(z) || "Unknown", Se));
        z = te({}, he, L);
      }
      R.legacyContext = z, it(u, R, le), R.legacyContext = he;
    } else it(u, R, le);
  }
  function Qt(u, R) {
    if (u && u.defaultProps) {
      R = te({}, R), u = u.defaultProps;
      for (var L in u) R[L] === void 0 && (R[L] = u[L]);
      return R;
    }
    return R;
  }
  function Ht(u, R, L, z, le) {
    if (typeof L == "function") if (L.prototype && L.prototype.isReactComponent) {
      le = It(L, R.legacyContext);
      var re = L.contextType;
      re = new L(z, typeof re == "object" && re !== null ? re._currentValue2 : le), xt(re, L, z, le), pt(u, R, re, L);
    } else {
      re = It(L, R.legacyContext), le = dt(u, R, L, z, re);
      var he = Ot !== 0;
      if (typeof le == "object" && le !== null && typeof le.render == "function" && le.$$typeof === void 0) xt(le, L, z, re), pt(u, R, le, L);
      else if (he) {
        z = R.treeContext, R.treeContext = D(z, 1, 0);
        try {
          it(u, R, le);
        } finally {
          R.treeContext = z;
        }
      } else it(u, R, le);
    }
    else if (typeof L == "string") {
      switch (le = R.blockedSegment, re = G(le.chunks, L, z, u.responseState, le.formatContext), le.lastPushedText = !1, he = le.formatContext, le.formatContext = s(he, L, z), Wt(u, R, re), le.formatContext = he, L) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          le.chunks.push("</", L, ">");
      }
      le.lastPushedText = !1;
    } else {
      switch (L) {
        case Ae:
        case Ye:
        case fe:
        case pe:
        case ve:
          it(u, R, z.children);
          return;
        case De:
          it(u, R, z.children);
          return;
        case nt:
          throw Error(X(343));
        case _e:
          e: {
            L = R.blockedBoundary, le = R.blockedSegment, re = z.fallback, z = z.children, he = /* @__PURE__ */ new Set();
            var Se = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: he, errorDigest: null }, Me = ze(u, le.chunks.length, Se, le.formatContext, !1, !1);
            le.children.push(Me), le.lastPushedText = !1;
            var Le = ze(u, 0, null, le.formatContext, !1, !1);
            Le.parentFlushed = !0, R.blockedBoundary = Se, R.blockedSegment = Le;
            try {
              if (Wt(
                u,
                R,
                z
              ), u.responseState.generateStaticMarkup || Le.lastPushedText && Le.textEmbedded && Le.chunks.push("<!-- -->"), Le.status = 1, cn(Se, Le), Se.pendingTasks === 0) break e;
            } catch (Ue) {
              Le.status = 4, Se.forceClientRender = !0, Se.errorDigest = mt(u, Ue);
            } finally {
              R.blockedBoundary = L, R.blockedSegment = le;
            }
            R = Ve(u, re, L, Me, he, R.legacyContext, R.context, R.treeContext), u.pingedTasks.push(R);
          }
          return;
      }
      if (typeof L == "object" && L !== null) switch (L.$$typeof) {
        case Ee:
          if (z = dt(u, R, L.render, z, le), Ot !== 0) {
            L = R.treeContext, R.treeContext = D(L, 1, 0);
            try {
              it(u, R, z);
            } finally {
              R.treeContext = L;
            }
          } else it(u, R, z);
          return;
        case He:
          L = L.type, z = Qt(L, z), Ht(u, R, L, z, le);
          return;
        case xe:
          if (le = z.children, L = L._context, z = z.value, re = L._currentValue2, L._currentValue2 = z, he = lt, lt = z = { parent: he, depth: he === null ? 0 : he.depth + 1, context: L, parentValue: re, value: z }, R.context = z, it(u, R, le), u = lt, u === null) throw Error(X(403));
          z = u.parentValue, u.context._currentValue2 = z === $e ? u.context._defaultValue : z, u = lt = u.parent, R.context = u;
          return;
        case Re:
          z = z.children, z = z(L._currentValue2), it(u, R, z);
          return;
        case We:
          le = L._init, L = le(L._payload), z = Qt(L, z), Ht(
            u,
            R,
            L,
            z,
            void 0
          );
          return;
      }
      throw Error(X(130, L == null ? L : typeof L, ""));
    }
  }
  function it(u, R, L) {
    if (R.node = L, typeof L == "object" && L !== null) {
      switch (L.$$typeof) {
        case se:
          Ht(u, R, L.type, L.props, L.ref);
          return;
        case ce:
          throw Error(X(257));
        case We:
          var z = L._init;
          L = z(L._payload), it(u, R, L);
          return;
      }
      if (a(L)) {
        jt(u, R, L);
        return;
      }
      if (L === null || typeof L != "object" ? z = null : (z = at && L[at] || L["@@iterator"], z = typeof z == "function" ? z : null), z && (z = z.call(L))) {
        if (L = z.next(), !L.done) {
          var le = [];
          do
            le.push(L.value), L = z.next();
          while (!L.done);
          jt(u, R, le);
        }
        return;
      }
      throw u = Object.prototype.toString.call(L), Error(X(31, u === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : u));
    }
    typeof L == "string" ? (z = R.blockedSegment, z.lastPushedText = Y(R.blockedSegment.chunks, L, u.responseState, z.lastPushedText)) : typeof L == "number" && (z = R.blockedSegment, z.lastPushedText = Y(R.blockedSegment.chunks, "" + L, u.responseState, z.lastPushedText));
  }
  function jt(u, R, L) {
    for (var z = L.length, le = 0; le < z; le++) {
      var re = R.treeContext;
      R.treeContext = D(re, z, le);
      try {
        Wt(u, R, L[le]);
      } finally {
        R.treeContext = re;
      }
    }
  }
  function Wt(u, R, L) {
    var z = R.blockedSegment.formatContext, le = R.legacyContext, re = R.context;
    try {
      return it(u, R, L);
    } catch (Me) {
      if (En(), typeof Me == "object" && Me !== null && typeof Me.then == "function") {
        L = Me;
        var he = R.blockedSegment, Se = ze(u, he.chunks.length, null, he.formatContext, he.lastPushedText, !0);
        he.children.push(Se), he.lastPushedText = !1, u = Ve(u, R.node, R.blockedBoundary, Se, R.abortSet, R.legacyContext, R.context, R.treeContext).ping, L.then(u, u), R.blockedSegment.formatContext = z, R.legacyContext = le, R.context = re, _t(re);
      } else throw R.blockedSegment.formatContext = z, R.legacyContext = le, R.context = re, _t(re), Me;
    }
  }
  function $t(u) {
    var R = u.blockedBoundary;
    u = u.blockedSegment, u.status = 3, Kt(this, R, u);
  }
  function An(u, R, L) {
    var z = u.blockedBoundary;
    u.blockedSegment.status = 3, z === null ? (R.allPendingTasks--, R.status !== 2 && (R.status = 2, R.destination !== null && R.destination.push(null))) : (z.pendingTasks--, z.forceClientRender || (z.forceClientRender = !0, u = L === void 0 ? Error(X(432)) : L, z.errorDigest = R.onError(u), z.parentFlushed && R.clientRenderedBoundaries.push(z)), z.fallbackAbortableTasks.forEach(function(le) {
      return An(le, R, L);
    }), z.fallbackAbortableTasks.clear(), R.allPendingTasks--, R.allPendingTasks === 0 && (z = R.onAllReady, z()));
  }
  function cn(u, R) {
    if (R.chunks.length === 0 && R.children.length === 1 && R.children[0].boundary === null) {
      var L = R.children[0];
      L.id = R.id, L.parentFlushed = !0, L.status === 1 && cn(u, L);
    } else u.completedSegments.push(R);
  }
  function Kt(u, R, L) {
    if (R === null) {
      if (L.parentFlushed) {
        if (u.completedRootSegment !== null) throw Error(X(389));
        u.completedRootSegment = L;
      }
      u.pendingRootTasks--, u.pendingRootTasks === 0 && (u.onShellError = je, R = u.onShellReady, R());
    } else R.pendingTasks--, R.forceClientRender || (R.pendingTasks === 0 ? (L.parentFlushed && L.status === 1 && cn(R, L), R.parentFlushed && u.completedBoundaries.push(R), R.fallbackAbortableTasks.forEach($t, u), R.fallbackAbortableTasks.clear()) : L.parentFlushed && L.status === 1 && (cn(R, L), R.completedSegments.length === 1 && R.parentFlushed && u.partialBoundaries.push(R)));
    u.allPendingTasks--, u.allPendingTasks === 0 && (u = u.onAllReady, u());
  }
  function Bn(u) {
    if (u.status !== 2) {
      var R = lt, L = Ie.current;
      Ie.current = V;
      var z = be;
      be = u.responseState;
      try {
        var le = u.pingedTasks, re;
        for (re = 0; re < le.length; re++) {
          var he = le[re], Se = u, Me = he.blockedSegment;
          if (Me.status === 0) {
            _t(he.context);
            try {
              it(Se, he, he.node), Se.responseState.generateStaticMarkup || Me.lastPushedText && Me.textEmbedded && Me.chunks.push("<!-- -->"), he.abortSet.delete(he), Me.status = 1, Kt(Se, he.blockedBoundary, Me);
            } catch (Pt) {
              if (En(), typeof Pt == "object" && Pt !== null && typeof Pt.then == "function") {
                var Le = he.ping;
                Pt.then(Le, Le);
              } else {
                he.abortSet.delete(he), Me.status = 4;
                var Ue = he.blockedBoundary, tt = Pt, kt = mt(Se, tt);
                if (Ue === null ? ot(Se, tt) : (Ue.pendingTasks--, Ue.forceClientRender || (Ue.forceClientRender = !0, Ue.errorDigest = kt, Ue.parentFlushed && Se.clientRenderedBoundaries.push(Ue))), Se.allPendingTasks--, Se.allPendingTasks === 0) {
                  var Bt = Se.onAllReady;
                  Bt();
                }
              }
            } finally {
            }
          }
        }
        le.splice(0, re), u.destination !== null && en(u, u.destination);
      } catch (Pt) {
        mt(u, Pt), ot(u, Pt);
      } finally {
        be = z, Ie.current = L, L === V && _t(R);
      }
    }
  }
  function At(u, R, L) {
    switch (L.parentFlushed = !0, L.status) {
      case 0:
        var z = L.id = u.nextSegmentId++;
        return L.lastPushedText = !1, L.textEmbedded = !1, u = u.responseState, R.push('<template id="'), R.push(u.placeholderPrefix), u = z.toString(16), R.push(u), R.push('"></template>');
      case 1:
        L.status = 2;
        var le = !0;
        z = L.chunks;
        var re = 0;
        L = L.children;
        for (var he = 0; he < L.length; he++) {
          for (le = L[he]; re < le.index; re++) R.push(z[re]);
          le = bn(u, R, le);
        }
        for (; re < z.length - 1; re++) R.push(z[re]);
        return re < z.length && (le = R.push(z[re])), le;
      default:
        throw Error(X(390));
    }
  }
  function bn(u, R, L) {
    var z = L.boundary;
    if (z === null) return At(u, R, L);
    if (z.parentFlushed = !0, z.forceClientRender) return u.responseState.generateStaticMarkup || (z = z.errorDigest, R.push("<!--$!-->"), R.push("<template"), z && (R.push(' data-dgst="'), z = T(z), R.push(z), R.push('"')), R.push("></template>")), At(u, R, L), u = u.responseState.generateStaticMarkup ? !0 : R.push("<!--/$-->"), u;
    if (0 < z.pendingTasks) {
      z.rootSegmentID = u.nextSegmentId++, 0 < z.completedSegments.length && u.partialBoundaries.push(z);
      var le = u.responseState, re = le.nextSuspenseID++;
      return le = le.boundaryPrefix + re.toString(16), z = z.id = le, F(R, u.responseState, z), At(u, R, L), R.push("<!--/$-->");
    }
    if (z.byteSize > u.progressiveChunkSize) return z.rootSegmentID = u.nextSegmentId++, u.completedBoundaries.push(z), F(R, u.responseState, z.id), At(u, R, L), R.push("<!--/$-->");
    if (u.responseState.generateStaticMarkup || R.push("<!--$-->"), L = z.completedSegments, L.length !== 1) throw Error(X(391));
    return bn(u, R, L[0]), u = u.responseState.generateStaticMarkup ? !0 : R.push("<!--/$-->"), u;
  }
  function Yn(u, R, L) {
    return W(R, u.responseState, L.formatContext, L.id), bn(u, R, L), q(R, L.formatContext);
  }
  function Gn(u, R, L) {
    for (var z = L.completedSegments, le = 0; le < z.length; le++) Vt(u, R, L, z[le]);
    if (z.length = 0, u = u.responseState, z = L.id, L = L.rootSegmentID, R.push(u.startInlineScript), u.sentCompleteBoundaryFunction ? R.push('$RC("') : (u.sentCompleteBoundaryFunction = !0, R.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), z === null) throw Error(X(395));
    return L = L.toString(16), R.push(z), R.push('","'), R.push(u.segmentPrefix), R.push(L), R.push('")<\/script>');
  }
  function Vt(u, R, L, z) {
    if (z.status === 2) return !0;
    var le = z.id;
    if (le === -1) {
      if ((z.id = L.rootSegmentID) === -1) throw Error(X(392));
      return Yn(u, R, z);
    }
    return Yn(u, R, z), u = u.responseState, R.push(u.startInlineScript), u.sentCompleteSegmentFunction ? R.push('$RS("') : (u.sentCompleteSegmentFunction = !0, R.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), R.push(u.segmentPrefix), le = le.toString(16), R.push(le), R.push('","'), R.push(u.placeholderPrefix), R.push(le), R.push('")<\/script>');
  }
  function en(u, R) {
    try {
      var L = u.completedRootSegment;
      if (L !== null && u.pendingRootTasks === 0) {
        bn(u, R, L), u.completedRootSegment = null;
        var z = u.responseState.bootstrapChunks;
        for (L = 0; L < z.length - 1; L++) R.push(z[L]);
        L < z.length && R.push(z[L]);
      }
      var le = u.clientRenderedBoundaries, re;
      for (re = 0; re < le.length; re++) {
        var he = le[re];
        z = R;
        var Se = u.responseState, Me = he.id, Le = he.errorDigest, Ue = he.errorMessage, tt = he.errorComponentStack;
        if (z.push(Se.startInlineScript), Se.sentClientRenderFunction ? z.push('$RX("') : (Se.sentClientRenderFunction = !0, z.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), Me === null) throw Error(X(395));
        if (z.push(Me), z.push('"'), Le || Ue || tt) {
          z.push(",");
          var kt = J(Le || "");
          z.push(kt);
        }
        if (Ue || tt) {
          z.push(",");
          var Bt = J(Ue || "");
          z.push(Bt);
        }
        if (tt) {
          z.push(",");
          var Pt = J(tt);
          z.push(Pt);
        }
        if (!z.push(")<\/script>")) {
          u.destination = null, re++, le.splice(0, re);
          return;
        }
      }
      le.splice(0, re);
      var wn = u.completedBoundaries;
      for (re = 0; re < wn.length; re++) if (!Gn(u, R, wn[re])) {
        u.destination = null, re++, wn.splice(0, re);
        return;
      }
      wn.splice(0, re);
      var fn = u.partialBoundaries;
      for (re = 0; re < fn.length; re++) {
        var Hn = fn[re];
        e: {
          le = u, he = R;
          var Sn = Hn.completedSegments;
          for (Se = 0; Se < Sn.length; Se++) if (!Vt(le, he, Hn, Sn[Se])) {
            Se++, Sn.splice(0, Se);
            var Xn = !1;
            break e;
          }
          Sn.splice(0, Se), Xn = !0;
        }
        if (!Xn) {
          u.destination = null, re++, fn.splice(0, re);
          return;
        }
      }
      fn.splice(0, re);
      var tn = u.completedBoundaries;
      for (re = 0; re < tn.length; re++) if (!Gn(u, R, tn[re])) {
        u.destination = null, re++, tn.splice(0, re);
        return;
      }
      tn.splice(0, re);
    } finally {
      u.allPendingTasks === 0 && u.pingedTasks.length === 0 && u.clientRenderedBoundaries.length === 0 && u.completedBoundaries.length === 0 && R.push(null);
    }
  }
  function Yt(u, R) {
    try {
      var L = u.abortableTasks;
      L.forEach(function(z) {
        return An(z, u, R);
      }), L.clear(), u.destination !== null && en(u, u.destination);
    } catch (z) {
      mt(u, z), ot(u, z);
    }
  }
  function Dn() {
  }
  function Rt(u, R, L, z) {
    var le = !1, re = null, he = "", Se = { push: function(Le) {
      return Le !== null && (he += Le), !0;
    }, destroy: function(Le) {
      le = !0, re = Le;
    } }, Me = !1;
    if (u = rt(u, U(L, R ? R.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Dn, void 0, function() {
      Me = !0;
    }), Bn(u), Yt(u, z), u.status === 1) u.status = 2, Se.destroy(u.fatalError);
    else if (u.status !== 2 && u.destination === null) {
      u.destination = Se;
      try {
        en(u, Se);
      } catch (Le) {
        mt(u, Le), ot(u, Le);
      }
    }
    if (le) throw re;
    if (!Me) throw Error(X(426));
    return he;
  }
  return wi.renderToNodeStream = function() {
    throw Error(X(207));
  }, wi.renderToStaticMarkup = function(u, R) {
    return Rt(u, R, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, wi.renderToStaticNodeStream = function() {
    throw Error(X(208));
  }, wi.renderToString = function(u, R) {
    return Rt(u, R, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, wi.version = "18.3.1", wi;
}
var as = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fl;
function Du() {
  if (Fl) return as;
  Fl = 1;
  var ee = Ci;
  function X(f) {
    for (var E = "https://reactjs.org/docs/error-decoder.html?invariant=" + f, P = 1; P < arguments.length; P++) E += "&args[]=" + encodeURIComponent(arguments[P]);
    return "Minified React error #" + f + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ie = null, K = 0;
  function oe(f, E) {
    if (E.length !== 0) if (512 < E.length) 0 < K && (f.enqueue(new Uint8Array(ie.buffer, 0, K)), ie = new Uint8Array(512), K = 0), f.enqueue(E);
    else {
      var P = ie.length - K;
      P < E.length && (P === 0 ? f.enqueue(ie) : (ie.set(E.subarray(0, P), K), f.enqueue(ie), E = E.subarray(P)), ie = new Uint8Array(512), K = 0), ie.set(E, K), K += E.length;
    }
  }
  function B(f, E) {
    return oe(f, E), !0;
  }
  function Z(f) {
    ie && 0 < K && (f.enqueue(new Uint8Array(ie.buffer, 0, K)), ie = null, K = 0);
  }
  var m = new TextEncoder();
  function b(f) {
    return m.encode(f);
  }
  function g(f) {
    return m.encode(f);
  }
  function p(f, E) {
    typeof f.error == "function" ? f.error(E) : f.close();
  }
  var _ = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, T = {};
  function A(f) {
    return _.call(T, f) ? !0 : _.call(N, f) ? !1 : x.test(f) ? T[f] = !0 : (N[f] = !0, !1);
  }
  function y(f, E, P, j, ue, ae, ge) {
    this.acceptsBooleans = E === 2 || E === 3 || E === 4, this.attributeName = j, this.attributeNamespace = ue, this.mustUseProperty = P, this.propertyName = f, this.type = E, this.sanitizeURL = ae, this.removeEmptyString = ge;
  }
  var a = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(f) {
    a[f] = new y(f, 0, !1, f, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(f) {
    var E = f[0];
    a[E] = new y(E, 1, !1, f[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(f) {
    a[f] = new y(f, 2, !1, f.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(f) {
    a[f] = new y(f, 2, !1, f, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(f) {
    a[f] = new y(f, 3, !1, f.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(f) {
    a[f] = new y(f, 3, !0, f, null, !1, !1);
  }), ["capture", "download"].forEach(function(f) {
    a[f] = new y(f, 4, !1, f, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(f) {
    a[f] = new y(f, 6, !1, f, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(f) {
    a[f] = new y(f, 5, !1, f.toLowerCase(), null, !1, !1);
  });
  var i = /[\-:]([a-z])/g;
  function s(f) {
    return f[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(f) {
    var E = f.replace(
      i,
      s
    );
    a[E] = new y(E, 1, !1, f, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(f) {
    var E = f.replace(i, s);
    a[E] = new y(E, 1, !1, f, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(f) {
    var E = f.replace(i, s);
    a[E] = new y(E, 1, !1, f, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(f) {
    a[f] = new y(f, 1, !1, f.toLowerCase(), null, !1, !1);
  }), a.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(f) {
    a[f] = new y(f, 1, !1, f.toLowerCase(), null, !0, !0);
  });
  var d = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, c = ["Webkit", "ms", "Moz", "O"];
  Object.keys(d).forEach(function(f) {
    c.forEach(function(E) {
      E = E + f.charAt(0).toUpperCase() + f.substring(1), d[E] = d[f];
    });
  });
  var l = /["'&<>]/;
  function h(f) {
    if (typeof f == "boolean" || typeof f == "number") return "" + f;
    f = "" + f;
    var E = l.exec(f);
    if (E) {
      var P = "", j, ue = 0;
      for (j = E.index; j < f.length; j++) {
        switch (f.charCodeAt(j)) {
          case 34:
            E = "&quot;";
            break;
          case 38:
            E = "&amp;";
            break;
          case 39:
            E = "&#x27;";
            break;
          case 60:
            E = "&lt;";
            break;
          case 62:
            E = "&gt;";
            break;
          default:
            continue;
        }
        ue !== j && (P += f.substring(ue, j)), ue = j + 1, P += E;
      }
      f = ue !== j ? P + f.substring(ue, j) : P;
    }
    return f;
  }
  var C = /([A-Z])/g, S = /^ms-/, w = Array.isArray, I = g("<script>"), O = g("<\/script>"), G = g('<script src="'), F = g('<script type="module" src="'), W = g('" async=""><\/script>'), q = /(<\/|<)(s)(cript)/gi;
  function H(f, E, P, j) {
    return "" + E + (P === "s" ? "\\u0073" : "\\u0053") + j;
  }
  function J(f, E, P, j, ue) {
    f = f === void 0 ? "" : f, E = E === void 0 ? I : g('<script nonce="' + h(E) + '">');
    var ae = [];
    if (P !== void 0 && ae.push(E, b(("" + P).replace(q, H)), O), j !== void 0) for (P = 0; P < j.length; P++) ae.push(G, b(h(j[P])), W);
    if (ue !== void 0) for (j = 0; j < ue.length; j++) ae.push(F, b(h(ue[j])), W);
    return { bootstrapChunks: ae, startInlineScript: E, placeholderPrefix: g(f + "P:"), segmentPrefix: g(f + "S:"), boundaryPrefix: f + "B:", idPrefix: f, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function U(f, E) {
    return { insertionMode: f, selectedValue: E };
  }
  function Y(f) {
    return U(f === "http://www.w3.org/2000/svg" ? 2 : f === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function te(f, E, P) {
    switch (E) {
      case "select":
        return U(1, P.value != null ? P.value : P.defaultValue);
      case "svg":
        return U(2, null);
      case "math":
        return U(3, null);
      case "foreignObject":
        return U(1, null);
      case "table":
        return U(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return U(5, null);
      case "colgroup":
        return U(7, null);
      case "tr":
        return U(6, null);
    }
    return 4 <= f.insertionMode || f.insertionMode === 0 ? U(1, null) : f;
  }
  var se = g("<!-- -->");
  function ce(f, E, P, j) {
    return E === "" ? j : (j && f.push(se), f.push(b(h(E))), !0);
  }
  var ve = /* @__PURE__ */ new Map(), fe = g(' style="'), pe = g(":"), xe = g(";");
  function Re(f, E, P) {
    if (typeof P != "object") throw Error(X(62));
    E = !0;
    for (var j in P) if (_.call(P, j)) {
      var ue = P[j];
      if (ue != null && typeof ue != "boolean" && ue !== "") {
        if (j.indexOf("--") === 0) {
          var ae = b(h(j));
          ue = b(h(("" + ue).trim()));
        } else {
          ae = j;
          var ge = ve.get(ae);
          ge !== void 0 || (ge = g(h(ae.replace(C, "-$1").toLowerCase().replace(S, "-ms-"))), ve.set(ae, ge)), ae = ge, ue = typeof ue == "number" ? ue === 0 || _.call(d, j) ? b("" + ue) : b(ue + "px") : b(h(("" + ue).trim()));
        }
        E ? (E = !1, f.push(fe, ae, pe, ue)) : f.push(xe, ae, pe, ue);
      }
    }
    E || f.push(De);
  }
  var Ee = g(" "), _e = g('="'), De = g('"'), He = g('=""');
  function We(f, E, P, j) {
    switch (P) {
      case "style":
        Re(f, E, j);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < P.length) || P[0] !== "o" && P[0] !== "O" || P[1] !== "n" && P[1] !== "N") {
      if (E = a.hasOwnProperty(P) ? a[P] : null, E !== null) {
        switch (typeof j) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!E.acceptsBooleans) return;
        }
        switch (P = b(E.attributeName), E.type) {
          case 3:
            j && f.push(Ee, P, He);
            break;
          case 4:
            j === !0 ? f.push(Ee, P, He) : j !== !1 && f.push(Ee, P, _e, b(h(j)), De);
            break;
          case 5:
            isNaN(j) || f.push(Ee, P, _e, b(h(j)), De);
            break;
          case 6:
            !isNaN(j) && 1 <= j && f.push(Ee, P, _e, b(h(j)), De);
            break;
          default:
            E.sanitizeURL && (j = "" + j), f.push(Ee, P, _e, b(h(j)), De);
        }
      } else if (A(P)) {
        switch (typeof j) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (E = P.toLowerCase().slice(0, 5), E !== "data-" && E !== "aria-") return;
        }
        f.push(Ee, b(P), _e, b(h(j)), De);
      }
    }
  }
  var nt = g(">"), Ye = g("/>");
  function Ae(f, E, P) {
    if (E != null) {
      if (P != null) throw Error(X(60));
      if (typeof E != "object" || !("__html" in E)) throw Error(X(61));
      E = E.__html, E != null && f.push(b("" + E));
    }
  }
  function $e(f) {
    var E = "";
    return ee.Children.forEach(f, function(P) {
      P != null && (E += P);
    }), E;
  }
  var at = g(' selected=""');
  function Qe(f, E, P, j) {
    f.push(et(P));
    var ue = P = null, ae;
    for (ae in E) if (_.call(E, ae)) {
      var ge = E[ae];
      if (ge != null) switch (ae) {
        case "children":
          P = ge;
          break;
        case "dangerouslySetInnerHTML":
          ue = ge;
          break;
        default:
          We(f, j, ae, ge);
      }
    }
    return f.push(nt), Ae(f, ue, P), typeof P == "string" ? (f.push(b(h(P))), null) : P;
  }
  var gt = g(`
`), It = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, lt = /* @__PURE__ */ new Map();
  function et(f) {
    var E = lt.get(f);
    if (E === void 0) {
      if (!It.test(f)) throw Error(X(65, f));
      E = g("<" + f), lt.set(f, E);
    }
    return E;
  }
  var Nt = g("<!DOCTYPE html>");
  function ht(f, E, P, j, ue) {
    switch (E) {
      case "select":
        f.push(et("select"));
        var ae = null, ge = null;
        for (Ze in P) if (_.call(P, Ze)) {
          var Te = P[Ze];
          if (Te != null) switch (Ze) {
            case "children":
              ae = Te;
              break;
            case "dangerouslySetInnerHTML":
              ge = Te;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              We(f, j, Ze, Te);
          }
        }
        return f.push(nt), Ae(f, ge, ae), ae;
      case "option":
        ge = ue.selectedValue, f.push(et("option"));
        var Ge = Te = null, Ke = null, Ze = null;
        for (ae in P) if (_.call(P, ae)) {
          var yt = P[ae];
          if (yt != null) switch (ae) {
            case "children":
              Te = yt;
              break;
            case "selected":
              Ke = yt;
              break;
            case "dangerouslySetInnerHTML":
              Ze = yt;
              break;
            case "value":
              Ge = yt;
            default:
              We(f, j, ae, yt);
          }
        }
        if (ge != null) if (P = Ge !== null ? "" + Ge : $e(Te), w(ge)) {
          for (j = 0; j < ge.length; j++)
            if ("" + ge[j] === P) {
              f.push(at);
              break;
            }
        } else "" + ge === P && f.push(at);
        else Ke && f.push(at);
        return f.push(nt), Ae(f, Ze, Te), Te;
      case "textarea":
        f.push(et("textarea")), Ze = ge = ae = null;
        for (Te in P) if (_.call(P, Te) && (Ge = P[Te], Ge != null)) switch (Te) {
          case "children":
            Ze = Ge;
            break;
          case "value":
            ae = Ge;
            break;
          case "defaultValue":
            ge = Ge;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(X(91));
          default:
            We(f, j, Te, Ge);
        }
        if (ae === null && ge !== null && (ae = ge), f.push(nt), Ze != null) {
          if (ae != null) throw Error(X(92));
          if (w(Ze) && 1 < Ze.length) throw Error(X(93));
          ae = "" + Ze;
        }
        return typeof ae == "string" && ae[0] === `
` && f.push(gt), ae !== null && f.push(b(h("" + ae))), null;
      case "input":
        f.push(et("input")), Ge = Ze = Te = ae = null;
        for (ge in P) if (_.call(P, ge) && (Ke = P[ge], Ke != null)) switch (ge) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(X(399, "input"));
          case "defaultChecked":
            Ge = Ke;
            break;
          case "defaultValue":
            Te = Ke;
            break;
          case "checked":
            Ze = Ke;
            break;
          case "value":
            ae = Ke;
            break;
          default:
            We(f, j, ge, Ke);
        }
        return Ze !== null ? We(
          f,
          j,
          "checked",
          Ze
        ) : Ge !== null && We(f, j, "checked", Ge), ae !== null ? We(f, j, "value", ae) : Te !== null && We(f, j, "value", Te), f.push(Ye), null;
      case "menuitem":
        f.push(et("menuitem"));
        for (var zt in P) if (_.call(P, zt) && (ae = P[zt], ae != null)) switch (zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(X(400));
          default:
            We(f, j, zt, ae);
        }
        return f.push(nt), null;
      case "title":
        f.push(et("title")), ae = null;
        for (yt in P) if (_.call(P, yt) && (ge = P[yt], ge != null)) switch (yt) {
          case "children":
            ae = ge;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(X(434));
          default:
            We(f, j, yt, ge);
        }
        return f.push(nt), ae;
      case "listing":
      case "pre":
        f.push(et(E)), ge = ae = null;
        for (Ge in P) if (_.call(P, Ge) && (Te = P[Ge], Te != null)) switch (Ge) {
          case "children":
            ae = Te;
            break;
          case "dangerouslySetInnerHTML":
            ge = Te;
            break;
          default:
            We(f, j, Ge, Te);
        }
        if (f.push(nt), ge != null) {
          if (ae != null) throw Error(X(60));
          if (typeof ge != "object" || !("__html" in ge)) throw Error(X(61));
          P = ge.__html, P != null && (typeof P == "string" && 0 < P.length && P[0] === `
` ? f.push(gt, b(P)) : f.push(b("" + P)));
        }
        return typeof ae == "string" && ae[0] === `
` && f.push(gt), ae;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        f.push(et(E));
        for (var nn in P) if (_.call(P, nn) && (ae = P[nn], ae != null)) switch (nn) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(X(399, E));
          default:
            We(f, j, nn, ae);
        }
        return f.push(Ye), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Qe(f, P, E, j);
      case "html":
        return ue.insertionMode === 0 && f.push(Nt), Qe(f, P, E, j);
      default:
        if (E.indexOf("-") === -1 && typeof P.is != "string") return Qe(f, P, E, j);
        f.push(et(E)), ge = ae = null;
        for (Ke in P) if (_.call(P, Ke) && (Te = P[Ke], Te != null)) switch (Ke) {
          case "children":
            ae = Te;
            break;
          case "dangerouslySetInnerHTML":
            ge = Te;
            break;
          case "style":
            Re(f, j, Te);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            A(Ke) && typeof Te != "function" && typeof Te != "symbol" && f.push(Ee, b(Ke), _e, b(h(Te)), De);
        }
        return f.push(nt), Ae(f, ge, ae), ae;
    }
  }
  var Ft = g("</"), Dt = g(">"), _t = g('<template id="'), ft = g('"></template>'), xt = g("<!--$-->"), Jt = g('<!--$?--><template id="'), D = g('"></template>'), Q = g("<!--$!-->"), me = g("<!--/$-->"), de = g("<template"), Ce = g('"'), Ne = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Oe = g("></template>");
  function Be(f, E, P) {
    if (oe(f, Jt), P === null) throw Error(X(395));
    return oe(f, P), B(f, D);
  }
  var Je = g('<div hidden id="'), Xe = g('">'), Pe = g("</div>"), ct = g('<svg aria-hidden="true" style="display:none" id="'), St = g('">'), Ot = g("</svg>"), Mt = g('<math aria-hidden="true" style="display:none" id="'), mn = g('">'), Ut = g("</math>"), xn = g('<table hidden id="'), Et = g('">'), En = g("</table>"), Rn = g('<table hidden><tbody id="'), kn = g('">'), Ct = g("</tbody></table>"), Fn = g('<table hidden><tr id="'), Vn = g('">'), yn = g("</tr></table>"), V = g('<table hidden><colgroup id="'), be = g('">'), Ie = g("</colgroup></table>");
  function Fe(f, E, P, j) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return oe(f, Je), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, Xe);
      case 2:
        return oe(f, ct), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, St);
      case 3:
        return oe(f, Mt), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, mn);
      case 4:
        return oe(f, xn), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, Et);
      case 5:
        return oe(f, Rn), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, kn);
      case 6:
        return oe(f, Fn), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, Vn);
      case 7:
        return oe(
          f,
          V
        ), oe(f, E.segmentPrefix), oe(f, b(j.toString(16))), B(f, be);
      default:
        throw Error(X(397));
    }
  }
  function je(f, E) {
    switch (E.insertionMode) {
      case 0:
      case 1:
        return B(f, Pe);
      case 2:
        return B(f, Ot);
      case 3:
        return B(f, Ut);
      case 4:
        return B(f, En);
      case 5:
        return B(f, Ct);
      case 6:
        return B(f, yn);
      case 7:
        return B(f, Ie);
      default:
        throw Error(X(397));
    }
  }
  var rt = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ve = g('$RS("'), ze = g('","'), mt = g('")<\/script>'), ot = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), dt = g('$RC("'), pt = g('","'), Qt = g('")<\/script>'), Ht = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), it = g('$RX("'), jt = g('"'), Wt = g(")<\/script>"), $t = g(","), An = /[<\u2028\u2029]/g;
  function cn(f) {
    return JSON.stringify(f).replace(An, function(E) {
      switch (E) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Kt = Object.assign, Bn = Symbol.for("react.element"), At = Symbol.for("react.portal"), bn = Symbol.for("react.fragment"), Yn = Symbol.for("react.strict_mode"), Gn = Symbol.for("react.profiler"), Vt = Symbol.for("react.provider"), en = Symbol.for("react.context"), Yt = Symbol.for("react.forward_ref"), Dn = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), L = Symbol.for("react.scope"), z = Symbol.for("react.debug_trace_mode"), le = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), he = Symbol.iterator;
  function Se(f) {
    if (f == null) return null;
    if (typeof f == "function") return f.displayName || f.name || null;
    if (typeof f == "string") return f;
    switch (f) {
      case bn:
        return "Fragment";
      case At:
        return "Portal";
      case Gn:
        return "Profiler";
      case Yn:
        return "StrictMode";
      case Dn:
        return "Suspense";
      case Rt:
        return "SuspenseList";
    }
    if (typeof f == "object") switch (f.$$typeof) {
      case en:
        return (f.displayName || "Context") + ".Consumer";
      case Vt:
        return (f._context.displayName || "Context") + ".Provider";
      case Yt:
        var E = f.render;
        return f = f.displayName, f || (f = E.displayName || E.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
      case u:
        return E = f.displayName || null, E !== null ? E : Se(f.type) || "Memo";
      case R:
        E = f._payload, f = f._init;
        try {
          return Se(f(E));
        } catch {
        }
    }
    return null;
  }
  var Me = {};
  function Le(f, E) {
    if (f = f.contextTypes, !f) return Me;
    var P = {}, j;
    for (j in f) P[j] = E[j];
    return P;
  }
  var Ue = null;
  function tt(f, E) {
    if (f !== E) {
      f.context._currentValue = f.parentValue, f = f.parent;
      var P = E.parent;
      if (f === null) {
        if (P !== null) throw Error(X(401));
      } else {
        if (P === null) throw Error(X(401));
        tt(f, P);
      }
      E.context._currentValue = E.value;
    }
  }
  function kt(f) {
    f.context._currentValue = f.parentValue, f = f.parent, f !== null && kt(f);
  }
  function Bt(f) {
    var E = f.parent;
    E !== null && Bt(E), f.context._currentValue = f.value;
  }
  function Pt(f, E) {
    if (f.context._currentValue = f.parentValue, f = f.parent, f === null) throw Error(X(402));
    f.depth === E.depth ? tt(f, E) : Pt(f, E);
  }
  function wn(f, E) {
    var P = E.parent;
    if (P === null) throw Error(X(402));
    f.depth === P.depth ? tt(f, P) : wn(f, P), E.context._currentValue = E.value;
  }
  function fn(f) {
    var E = Ue;
    E !== f && (E === null ? Bt(f) : f === null ? kt(E) : E.depth === f.depth ? tt(E, f) : E.depth > f.depth ? Pt(E, f) : wn(E, f), Ue = f);
  }
  var Hn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(f, E) {
    f = f._reactInternals, f.queue !== null && f.queue.push(E);
  }, enqueueReplaceState: function(f, E) {
    f = f._reactInternals, f.replace = !0, f.queue = [E];
  }, enqueueForceUpdate: function() {
  } };
  function Sn(f, E, P, j) {
    var ue = f.state !== void 0 ? f.state : null;
    f.updater = Hn, f.props = P, f.state = ue;
    var ae = { queue: [], replace: !1 };
    f._reactInternals = ae;
    var ge = E.contextType;
    if (f.context = typeof ge == "object" && ge !== null ? ge._currentValue : j, ge = E.getDerivedStateFromProps, typeof ge == "function" && (ge = ge(P, ue), ue = ge == null ? ue : Kt({}, ue, ge), f.state = ue), typeof E.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function")) if (E = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), E !== f.state && Hn.enqueueReplaceState(f, f.state, null), ae.queue !== null && 0 < ae.queue.length) if (E = ae.queue, ge = ae.replace, ae.queue = null, ae.replace = !1, ge && E.length === 1) f.state = E[0];
    else {
      for (ae = ge ? E[0] : f.state, ue = !0, ge = ge ? 1 : 0; ge < E.length; ge++) {
        var Te = E[ge];
        Te = typeof Te == "function" ? Te.call(f, ae, P, j) : Te, Te != null && (ue ? (ue = !1, ae = Kt({}, ae, Te)) : Kt(ae, Te));
      }
      f.state = ae;
    }
    else ae.queue = null;
  }
  var Xn = { id: 1, overflow: "" };
  function tn(f, E, P) {
    var j = f.id;
    f = f.overflow;
    var ue = 32 - Zn(j) - 1;
    j &= ~(1 << ue), P += 1;
    var ae = 32 - Zn(E) + ue;
    if (30 < ae) {
      var ge = ue - ue % 5;
      return ae = (j & (1 << ge) - 1).toString(32), j >>= ge, ue -= ge, { id: 1 << 32 - Zn(E) + ue | P << ue | j, overflow: ae + f };
    }
    return { id: 1 << ae | P << ue | j, overflow: f };
  }
  var Zn = Math.clz32 ? Math.clz32 : Ea, dr = Math.log, xa = Math.LN2;
  function Ea(f) {
    return f >>>= 0, f === 0 ? 32 : 31 - (dr(f) / xa | 0) | 0;
  }
  function hr(f, E) {
    return f === E && (f !== 0 || 1 / f === 1 / E) || f !== f && E !== E;
  }
  var dn = typeof Object.is == "function" ? Object.is : hr, pn = null, jr = null, pr = null, vt = null, Jn = !1, jn = !1, Qn = 0, hn = null, vr = 0;
  function In() {
    if (pn === null) throw Error(X(321));
    return pn;
  }
  function Wr() {
    if (0 < vr) throw Error(X(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Xt() {
    return vt === null ? pr === null ? (Jn = !1, pr = vt = Wr()) : (Jn = !0, vt = pr) : vt.next === null ? (Jn = !1, vt = vt.next = Wr()) : (Jn = !0, vt = vt.next), vt;
  }
  function zr() {
    jr = pn = null, jn = !1, pr = null, vr = 0, vt = hn = null;
  }
  function gr(f, E) {
    return typeof E == "function" ? E(f) : E;
  }
  function Ti(f, E, P) {
    if (pn = In(), vt = Xt(), Jn) {
      var j = vt.queue;
      if (E = j.dispatch, hn !== null && (P = hn.get(j), P !== void 0)) {
        hn.delete(j), j = vt.memoizedState;
        do
          j = f(j, P.action), P = P.next;
        while (P !== null);
        return vt.memoizedState = j, [j, E];
      }
      return [vt.memoizedState, E];
    }
    return f = f === gr ? typeof E == "function" ? E() : E : P !== void 0 ? P(E) : E, vt.memoizedState = f, f = vt.queue = { last: null, dispatch: null }, f = f.dispatch = Ra.bind(null, pn, f), [vt.memoizedState, f];
  }
  function mr(f, E) {
    if (pn = In(), vt = Xt(), E = E === void 0 ? null : E, vt !== null) {
      var P = vt.memoizedState;
      if (P !== null && E !== null) {
        var j = P[1];
        e: if (j === null) j = !1;
        else {
          for (var ue = 0; ue < j.length && ue < E.length; ue++) if (!dn(E[ue], j[ue])) {
            j = !1;
            break e;
          }
          j = !0;
        }
        if (j) return P[0];
      }
    }
    return f = f(), vt.memoizedState = [f, E], f;
  }
  function Ra(f, E, P) {
    if (25 <= vr) throw Error(X(301));
    if (f === pn) if (jn = !0, f = { action: P, next: null }, hn === null && (hn = /* @__PURE__ */ new Map()), P = hn.get(E), P === void 0) hn.set(E, f);
    else {
      for (E = P; E.next !== null; ) E = E.next;
      E.next = f;
    }
  }
  function ka() {
    throw Error(X(394));
  }
  function yr() {
  }
  var xi = { readContext: function(f) {
    return f._currentValue;
  }, useContext: function(f) {
    return In(), f._currentValue;
  }, useMemo: mr, useReducer: Ti, useRef: function(f) {
    pn = In(), vt = Xt();
    var E = vt.memoizedState;
    return E === null ? (f = { current: f }, vt.memoizedState = f) : E;
  }, useState: function(f) {
    return Ti(gr, f);
  }, useInsertionEffect: yr, useLayoutEffect: function() {
  }, useCallback: function(f, E) {
    return mr(function() {
      return f;
    }, E);
  }, useImperativeHandle: yr, useEffect: yr, useDebugValue: yr, useDeferredValue: function(f) {
    return In(), f;
  }, useTransition: function() {
    return In(), [!1, ka];
  }, useId: function() {
    var f = jr.treeContext, E = f.overflow;
    f = f.id, f = (f & ~(1 << 32 - Zn(f) - 1)).toString(32) + E;
    var P = br;
    if (P === null) throw Error(X(404));
    return E = Qn++, f = ":" + P.idPrefix + "R" + f, 0 < E && (f += "H" + E.toString(32)), f + ":";
  }, useMutableSource: function(f, E) {
    return In(), E(f._source);
  }, useSyncExternalStore: function(f, E, P) {
    if (P === void 0) throw Error(X(407));
    return P();
  } }, br = null, wr = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Aa(f) {
    return console.error(f), null;
  }
  function Kn() {
  }
  function Ei(f, E, P, j, ue, ae, ge, Te, Ge) {
    var Ke = [], Ze = /* @__PURE__ */ new Set();
    return E = { destination: null, responseState: E, progressiveChunkSize: j === void 0 ? 12800 : j, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ze, pingedTasks: Ke, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ue === void 0 ? Aa : ue, onAllReady: ae === void 0 ? Kn : ae, onShellReady: ge === void 0 ? Kn : ge, onShellError: Te === void 0 ? Kn : Te, onFatalError: Ge === void 0 ? Kn : Ge }, P = Sr(E, 0, null, P, !1, !1), P.parentFlushed = !0, f = er(E, f, null, P, Ze, Me, null, Xn), Ke.push(f), E;
  }
  function er(f, E, P, j, ue, ae, ge, Te) {
    f.allPendingTasks++, P === null ? f.pendingRootTasks++ : P.pendingTasks++;
    var Ge = { node: E, ping: function() {
      var Ke = f.pingedTasks;
      Ke.push(Ge), Ke.length === 1 && Pi(f);
    }, blockedBoundary: P, blockedSegment: j, abortSet: ue, legacyContext: ae, context: ge, treeContext: Te };
    return ue.add(Ge), Ge;
  }
  function Sr(f, E, P, j, ue, ae) {
    return { status: 0, id: -1, index: E, parentFlushed: !1, chunks: [], children: [], formatContext: j, boundary: P, lastPushedText: ue, textEmbedded: ae };
  }
  function Nn(f, E) {
    if (f = f.onError(E), f != null && typeof f != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof f + '" instead');
    return f;
  }
  function Cr(f, E) {
    var P = f.onShellError;
    P(E), P = f.onFatalError, P(E), f.destination !== null ? (f.status = 2, p(f.destination, E)) : (f.status = 1, f.fatalError = E);
  }
  function Ri(f, E, P, j, ue) {
    for (pn = {}, jr = E, Qn = 0, f = P(j, ue); jn; ) jn = !1, Qn = 0, vr += 1, vt = null, f = P(j, ue);
    return zr(), f;
  }
  function ki(f, E, P, j) {
    var ue = P.render(), ae = j.childContextTypes;
    if (ae != null) {
      var ge = E.legacyContext;
      if (typeof P.getChildContext != "function") j = ge;
      else {
        P = P.getChildContext();
        for (var Te in P) if (!(Te in ae)) throw Error(X(108, Se(j) || "Unknown", Te));
        j = Kt({}, ge, P);
      }
      E.legacyContext = j, Gt(f, E, ue), E.legacyContext = ge;
    } else Gt(f, E, ue);
  }
  function Ai(f, E) {
    if (f && f.defaultProps) {
      E = Kt({}, E), f = f.defaultProps;
      for (var P in f) E[P] === void 0 && (E[P] = f[P]);
      return E;
    }
    return E;
  }
  function qr(f, E, P, j, ue) {
    if (typeof P == "function") if (P.prototype && P.prototype.isReactComponent) {
      ue = Le(P, E.legacyContext);
      var ae = P.contextType;
      ae = new P(j, typeof ae == "object" && ae !== null ? ae._currentValue : ue), Sn(ae, P, j, ue), ki(f, E, ae, P);
    } else {
      ae = Le(P, E.legacyContext), ue = Ri(f, E, P, j, ae);
      var ge = Qn !== 0;
      if (typeof ue == "object" && ue !== null && typeof ue.render == "function" && ue.$$typeof === void 0) Sn(ue, P, j, ae), ki(f, E, ue, P);
      else if (ge) {
        j = E.treeContext, E.treeContext = tn(j, 1, 0);
        try {
          Gt(f, E, ue);
        } finally {
          E.treeContext = j;
        }
      } else Gt(f, E, ue);
    }
    else if (typeof P == "string") {
      switch (ue = E.blockedSegment, ae = ht(ue.chunks, P, j, f.responseState, ue.formatContext), ue.lastPushedText = !1, ge = ue.formatContext, ue.formatContext = te(ge, P, j), Ur(f, E, ae), ue.formatContext = ge, P) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          ue.chunks.push(Ft, b(P), Dt);
      }
      ue.lastPushedText = !1;
    } else {
      switch (P) {
        case le:
        case z:
        case Yn:
        case Gn:
        case bn:
          Gt(f, E, j.children);
          return;
        case Rt:
          Gt(f, E, j.children);
          return;
        case L:
          throw Error(X(343));
        case Dn:
          e: {
            P = E.blockedBoundary, ue = E.blockedSegment, ae = j.fallback, j = j.children, ge = /* @__PURE__ */ new Set();
            var Te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: ge, errorDigest: null }, Ge = Sr(f, ue.chunks.length, Te, ue.formatContext, !1, !1);
            ue.children.push(Ge), ue.lastPushedText = !1;
            var Ke = Sr(f, 0, null, ue.formatContext, !1, !1);
            Ke.parentFlushed = !0, E.blockedBoundary = Te, E.blockedSegment = Ke;
            try {
              if (Ur(
                f,
                E,
                j
              ), Ke.lastPushedText && Ke.textEmbedded && Ke.chunks.push(se), Ke.status = 1, Tr(Te, Ke), Te.pendingTasks === 0) break e;
            } catch (Ze) {
              Ke.status = 4, Te.forceClientRender = !0, Te.errorDigest = Nn(f, Ze);
            } finally {
              E.blockedBoundary = P, E.blockedSegment = ue;
            }
            E = er(f, ae, P, Ge, ge, E.legacyContext, E.context, E.treeContext), f.pingedTasks.push(E);
          }
          return;
      }
      if (typeof P == "object" && P !== null) switch (P.$$typeof) {
        case Yt:
          if (j = Ri(f, E, P.render, j, ue), Qn !== 0) {
            P = E.treeContext, E.treeContext = tn(P, 1, 0);
            try {
              Gt(f, E, j);
            } finally {
              E.treeContext = P;
            }
          } else Gt(f, E, j);
          return;
        case u:
          P = P.type, j = Ai(P, j), qr(f, E, P, j, ue);
          return;
        case Vt:
          if (ue = j.children, P = P._context, j = j.value, ae = P._currentValue, P._currentValue = j, ge = Ue, Ue = j = { parent: ge, depth: ge === null ? 0 : ge.depth + 1, context: P, parentValue: ae, value: j }, E.context = j, Gt(f, E, ue), f = Ue, f === null) throw Error(X(403));
          j = f.parentValue, f.context._currentValue = j === re ? f.context._defaultValue : j, f = Ue = f.parent, E.context = f;
          return;
        case en:
          j = j.children, j = j(P._currentValue), Gt(f, E, j);
          return;
        case R:
          ue = P._init, P = ue(P._payload), j = Ai(P, j), qr(f, E, P, j, void 0);
          return;
      }
      throw Error(X(
        130,
        P == null ? P : typeof P,
        ""
      ));
    }
  }
  function Gt(f, E, P) {
    if (E.node = P, typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case Bn:
          qr(f, E, P.type, P.props, P.ref);
          return;
        case At:
          throw Error(X(257));
        case R:
          var j = P._init;
          P = j(P._payload), Gt(f, E, P);
          return;
      }
      if (w(P)) {
        Ii(f, E, P);
        return;
      }
      if (P === null || typeof P != "object" ? j = null : (j = he && P[he] || P["@@iterator"], j = typeof j == "function" ? j : null), j && (j = j.call(P))) {
        if (P = j.next(), !P.done) {
          var ue = [];
          do
            ue.push(P.value), P = j.next();
          while (!P.done);
          Ii(f, E, ue);
        }
        return;
      }
      throw f = Object.prototype.toString.call(P), Error(X(31, f === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : f));
    }
    typeof P == "string" ? (j = E.blockedSegment, j.lastPushedText = ce(E.blockedSegment.chunks, P, f.responseState, j.lastPushedText)) : typeof P == "number" && (j = E.blockedSegment, j.lastPushedText = ce(E.blockedSegment.chunks, "" + P, f.responseState, j.lastPushedText));
  }
  function Ii(f, E, P) {
    for (var j = P.length, ue = 0; ue < j; ue++) {
      var ae = E.treeContext;
      E.treeContext = tn(ae, j, ue);
      try {
        Ur(f, E, P[ue]);
      } finally {
        E.treeContext = ae;
      }
    }
  }
  function Ur(f, E, P) {
    var j = E.blockedSegment.formatContext, ue = E.legacyContext, ae = E.context;
    try {
      return Gt(f, E, P);
    } catch (Ge) {
      if (zr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
        P = Ge;
        var ge = E.blockedSegment, Te = Sr(f, ge.chunks.length, null, ge.formatContext, ge.lastPushedText, !0);
        ge.children.push(Te), ge.lastPushedText = !1, f = er(f, E.node, E.blockedBoundary, Te, E.abortSet, E.legacyContext, E.context, E.treeContext).ping, P.then(f, f), E.blockedSegment.formatContext = j, E.legacyContext = ue, E.context = ae, fn(ae);
      } else throw E.blockedSegment.formatContext = j, E.legacyContext = ue, E.context = ae, fn(ae), Ge;
    }
  }
  function Ni(f) {
    var E = f.blockedBoundary;
    f = f.blockedSegment, f.status = 3, Oi(this, E, f);
  }
  function _i(f, E, P) {
    var j = f.blockedBoundary;
    f.blockedSegment.status = 3, j === null ? (E.allPendingTasks--, E.status !== 2 && (E.status = 2, E.destination !== null && E.destination.close())) : (j.pendingTasks--, j.forceClientRender || (j.forceClientRender = !0, f = P === void 0 ? Error(X(432)) : P, j.errorDigest = E.onError(f), j.parentFlushed && E.clientRenderedBoundaries.push(j)), j.fallbackAbortableTasks.forEach(function(ue) {
      return _i(ue, E, P);
    }), j.fallbackAbortableTasks.clear(), E.allPendingTasks--, E.allPendingTasks === 0 && (j = E.onAllReady, j()));
  }
  function Tr(f, E) {
    if (E.chunks.length === 0 && E.children.length === 1 && E.children[0].boundary === null) {
      var P = E.children[0];
      P.id = E.id, P.parentFlushed = !0, P.status === 1 && Tr(f, P);
    } else f.completedSegments.push(E);
  }
  function Oi(f, E, P) {
    if (E === null) {
      if (P.parentFlushed) {
        if (f.completedRootSegment !== null) throw Error(X(389));
        f.completedRootSegment = P;
      }
      f.pendingRootTasks--, f.pendingRootTasks === 0 && (f.onShellError = Kn, E = f.onShellReady, E());
    } else E.pendingTasks--, E.forceClientRender || (E.pendingTasks === 0 ? (P.parentFlushed && P.status === 1 && Tr(E, P), E.parentFlushed && f.completedBoundaries.push(E), E.fallbackAbortableTasks.forEach(Ni, f), E.fallbackAbortableTasks.clear()) : P.parentFlushed && P.status === 1 && (Tr(E, P), E.completedSegments.length === 1 && E.parentFlushed && f.partialBoundaries.push(E)));
    f.allPendingTasks--, f.allPendingTasks === 0 && (f = f.onAllReady, f());
  }
  function Pi(f) {
    if (f.status !== 2) {
      var E = Ue, P = wr.current;
      wr.current = xi;
      var j = br;
      br = f.responseState;
      try {
        var ue = f.pingedTasks, ae;
        for (ae = 0; ae < ue.length; ae++) {
          var ge = ue[ae], Te = f, Ge = ge.blockedSegment;
          if (Ge.status === 0) {
            fn(ge.context);
            try {
              Gt(Te, ge, ge.node), Ge.lastPushedText && Ge.textEmbedded && Ge.chunks.push(se), ge.abortSet.delete(ge), Ge.status = 1, Oi(Te, ge.blockedBoundary, Ge);
            } catch (rn) {
              if (zr(), typeof rn == "object" && rn !== null && typeof rn.then == "function") {
                var Ke = ge.ping;
                rn.then(Ke, Ke);
              } else {
                ge.abortSet.delete(ge), Ge.status = 4;
                var Ze = ge.blockedBoundary, yt = rn, zt = Nn(Te, yt);
                if (Ze === null ? Cr(Te, yt) : (Ze.pendingTasks--, Ze.forceClientRender || (Ze.forceClientRender = !0, Ze.errorDigest = zt, Ze.parentFlushed && Te.clientRenderedBoundaries.push(Ze))), Te.allPendingTasks--, Te.allPendingTasks === 0) {
                  var nn = Te.onAllReady;
                  nn();
                }
              }
            } finally {
            }
          }
        }
        ue.splice(0, ae), f.destination !== null && $r(f, f.destination);
      } catch (rn) {
        Nn(f, rn), Cr(f, rn);
      } finally {
        br = j, wr.current = P, P === xi && fn(E);
      }
    }
  }
  function xr(f, E, P) {
    switch (P.parentFlushed = !0, P.status) {
      case 0:
        var j = P.id = f.nextSegmentId++;
        return P.lastPushedText = !1, P.textEmbedded = !1, f = f.responseState, oe(E, _t), oe(E, f.placeholderPrefix), f = b(j.toString(16)), oe(E, f), B(E, ft);
      case 1:
        P.status = 2;
        var ue = !0;
        j = P.chunks;
        var ae = 0;
        P = P.children;
        for (var ge = 0; ge < P.length; ge++) {
          for (ue = P[ge]; ae < ue.index; ae++) oe(E, j[ae]);
          ue = Er(f, E, ue);
        }
        for (; ae < j.length - 1; ae++) oe(E, j[ae]);
        return ae < j.length && (ue = B(E, j[ae])), ue;
      default:
        throw Error(X(390));
    }
  }
  function Er(f, E, P) {
    var j = P.boundary;
    if (j === null) return xr(f, E, P);
    if (j.parentFlushed = !0, j.forceClientRender) j = j.errorDigest, B(E, Q), oe(E, de), j && (oe(E, Ne), oe(E, b(h(j))), oe(E, Ce)), B(E, Oe), xr(f, E, P);
    else if (0 < j.pendingTasks) {
      j.rootSegmentID = f.nextSegmentId++, 0 < j.completedSegments.length && f.partialBoundaries.push(j);
      var ue = f.responseState, ae = ue.nextSuspenseID++;
      ue = g(ue.boundaryPrefix + ae.toString(16)), j = j.id = ue, Be(E, f.responseState, j), xr(f, E, P);
    } else if (j.byteSize > f.progressiveChunkSize) j.rootSegmentID = f.nextSegmentId++, f.completedBoundaries.push(j), Be(E, f.responseState, j.id), xr(f, E, P);
    else {
      if (B(E, xt), P = j.completedSegments, P.length !== 1) throw Error(X(391));
      Er(f, E, P[0]);
    }
    return B(E, me);
  }
  function Mi(f, E, P) {
    return Fe(E, f.responseState, P.formatContext, P.id), Er(f, E, P), je(E, P.formatContext);
  }
  function Li(f, E, P) {
    for (var j = P.completedSegments, ue = 0; ue < j.length; ue++) Fi(f, E, P, j[ue]);
    if (j.length = 0, f = f.responseState, j = P.id, P = P.rootSegmentID, oe(E, f.startInlineScript), f.sentCompleteBoundaryFunction ? oe(E, dt) : (f.sentCompleteBoundaryFunction = !0, oe(E, ot)), j === null) throw Error(X(395));
    return P = b(P.toString(16)), oe(E, j), oe(E, pt), oe(E, f.segmentPrefix), oe(E, P), B(E, Qt);
  }
  function Fi(f, E, P, j) {
    if (j.status === 2) return !0;
    var ue = j.id;
    if (ue === -1) {
      if ((j.id = P.rootSegmentID) === -1) throw Error(X(392));
      return Mi(f, E, j);
    }
    return Mi(f, E, j), f = f.responseState, oe(E, f.startInlineScript), f.sentCompleteSegmentFunction ? oe(E, Ve) : (f.sentCompleteSegmentFunction = !0, oe(E, rt)), oe(E, f.segmentPrefix), ue = b(ue.toString(16)), oe(E, ue), oe(E, ze), oe(E, f.placeholderPrefix), oe(E, ue), B(E, mt);
  }
  function $r(f, E) {
    ie = new Uint8Array(512), K = 0;
    try {
      var P = f.completedRootSegment;
      if (P !== null && f.pendingRootTasks === 0) {
        Er(f, E, P), f.completedRootSegment = null;
        var j = f.responseState.bootstrapChunks;
        for (P = 0; P < j.length - 1; P++) oe(E, j[P]);
        P < j.length && B(E, j[P]);
      }
      var ue = f.clientRenderedBoundaries, ae;
      for (ae = 0; ae < ue.length; ae++) {
        var ge = ue[ae];
        j = E;
        var Te = f.responseState, Ge = ge.id, Ke = ge.errorDigest, Ze = ge.errorMessage, yt = ge.errorComponentStack;
        if (oe(j, Te.startInlineScript), Te.sentClientRenderFunction ? oe(j, it) : (Te.sentClientRenderFunction = !0, oe(
          j,
          Ht
        )), Ge === null) throw Error(X(395));
        oe(j, Ge), oe(j, jt), (Ke || Ze || yt) && (oe(j, $t), oe(j, b(cn(Ke || "")))), (Ze || yt) && (oe(j, $t), oe(j, b(cn(Ze || "")))), yt && (oe(j, $t), oe(j, b(cn(yt)))), B(j, Wt);
      }
      ue.splice(0, ae);
      var zt = f.completedBoundaries;
      for (ae = 0; ae < zt.length; ae++) Li(f, E, zt[ae]);
      zt.splice(0, ae), Z(E), ie = new Uint8Array(512), K = 0;
      var nn = f.partialBoundaries;
      for (ae = 0; ae < nn.length; ae++) {
        var rn = nn[ae];
        e: {
          ue = f, ge = E;
          var Rr = rn.completedSegments;
          for (Te = 0; Te < Rr.length; Te++) if (!Fi(
            ue,
            ge,
            rn,
            Rr[Te]
          )) {
            Te++, Rr.splice(0, Te);
            var Gi = !1;
            break e;
          }
          Rr.splice(0, Te), Gi = !0;
        }
        if (!Gi) {
          f.destination = null, ae++, nn.splice(0, ae);
          return;
        }
      }
      nn.splice(0, ae);
      var Vr = f.completedBoundaries;
      for (ae = 0; ae < Vr.length; ae++) Li(f, E, Vr[ae]);
      Vr.splice(0, ae);
    } finally {
      Z(E), f.allPendingTasks === 0 && f.pingedTasks.length === 0 && f.clientRenderedBoundaries.length === 0 && f.completedBoundaries.length === 0 && E.close();
    }
  }
  function Bi(f, E) {
    try {
      var P = f.abortableTasks;
      P.forEach(function(j) {
        return _i(j, f, E);
      }), P.clear(), f.destination !== null && $r(f, f.destination);
    } catch (j) {
      Nn(f, j), Cr(f, j);
    }
  }
  return as.renderToReadableStream = function(f, E) {
    return new Promise(function(P, j) {
      var ue, ae, ge = new Promise(function(Ze, yt) {
        ae = Ze, ue = yt;
      }), Te = Ei(f, J(E ? E.identifierPrefix : void 0, E ? E.nonce : void 0, E ? E.bootstrapScriptContent : void 0, E ? E.bootstrapScripts : void 0, E ? E.bootstrapModules : void 0), Y(E ? E.namespaceURI : void 0), E ? E.progressiveChunkSize : void 0, E ? E.onError : void 0, ae, function() {
        var Ze = new ReadableStream({ type: "bytes", pull: function(yt) {
          if (Te.status === 1) Te.status = 2, p(yt, Te.fatalError);
          else if (Te.status !== 2 && Te.destination === null) {
            Te.destination = yt;
            try {
              $r(Te, yt);
            } catch (zt) {
              Nn(Te, zt), Cr(Te, zt);
            }
          }
        }, cancel: function() {
          Bi(Te);
        } }, { highWaterMark: 0 });
        Ze.allReady = ge, P(Ze);
      }, function(Ze) {
        ge.catch(function() {
        }), j(Ze);
      }, ue);
      if (E && E.signal) {
        var Ge = E.signal, Ke = function() {
          Bi(Te, Ge.reason), Ge.removeEventListener("abort", Ke);
        };
        Ge.addEventListener("abort", Ke);
      }
      Pi(Te);
    });
  }, as.version = "18.3.1", as;
}
var Si = {}, Bl;
function Hu() {
  if (Bl) return Si;
  Bl = 1;
  var ee = {};
  /**
   * @license React
   * react-dom-server-legacy.browser.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return ee.NODE_ENV !== "production" && function() {
    var X = Ci, ie = "18.3.1", K = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function oe(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        Z("warn", e, n);
      }
    }
    function B(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        Z("error", e, n);
      }
    }
    function Z(e, t, n) {
      {
        var o = K.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (t += "%s", n = n.concat([v]));
        var k = n.map(function(M) {
          return String(M);
        });
        k.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, k);
      }
    }
    function m(e) {
      e();
    }
    function b(e) {
    }
    function g(e, t) {
      p(e, t);
    }
    function p(e, t) {
      return e.push(t);
    }
    function _(e) {
    }
    function x(e) {
      e.push(null);
    }
    function N(e) {
      return e;
    }
    function T(e) {
      return e;
    }
    function A(e, t) {
      e.destroy(t);
    }
    function y(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function a(e) {
      try {
        return i(e), !1;
      } catch {
        return !0;
      }
    }
    function i(e) {
      return "" + e;
    }
    function s(e, t) {
      if (a(e))
        return B("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, y(e)), i(e);
    }
    function d(e, t) {
      if (a(e))
        return B("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, y(e)), i(e);
    }
    function c(e) {
      if (a(e))
        return B("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", y(e)), i(e);
    }
    var l = Object.prototype.hasOwnProperty, h = 0, C = 1, S = 2, w = 3, I = 4, O = 5, G = 6, F = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", W = F + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", q = new RegExp("^[" + F + "][" + W + "]*$"), H = {}, J = {};
    function U(e) {
      return l.call(J, e) ? !0 : l.call(H, e) ? !1 : q.test(e) ? (J[e] = !0, !0) : (H[e] = !0, B("Invalid attribute name: `%s`", e), !1);
    }
    function Y(e, t, n, o) {
      if (n !== null && n.type === h)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (n !== null)
            return !n.acceptsBooleans;
          var v = e.toLowerCase().slice(0, 5);
          return v !== "data-" && v !== "aria-";
        }
        default:
          return !1;
      }
    }
    function te(e) {
      return ce.hasOwnProperty(e) ? ce[e] : null;
    }
    function se(e, t, n, o, v, k, M) {
      this.acceptsBooleans = t === S || t === w || t === I, this.attributeName = o, this.attributeNamespace = v, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = k, this.removeEmptyString = M;
    }
    var ce = {}, ve = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ve.forEach(function(e) {
      ce[e] = new se(
        e,
        h,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      ce[t] = new se(
        t,
        C,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ce[e] = new se(
        e,
        S,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ce[e] = new se(
        e,
        S,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ce[e] = new se(
        e,
        w,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ce[e] = new se(
        e,
        w,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ce[e] = new se(
        e,
        I,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ce[e] = new se(
        e,
        G,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ce[e] = new se(
        e,
        O,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var fe = /[\-\:]([a-z])/g, pe = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(fe, pe);
      ce[t] = new se(
        t,
        C,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(fe, pe);
      ce[t] = new se(
        t,
        C,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(fe, pe);
      ce[t] = new se(
        t,
        C,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ce[e] = new se(
        e,
        C,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xe = "xlinkHref";
    ce[xe] = new se(
      "xlinkHref",
      C,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ce[e] = new se(
        e,
        C,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Re = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ee(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var _e = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Re).forEach(function(e) {
      _e.forEach(function(t) {
        Re[Ee(t, e)] = Re[e];
      });
    });
    var De = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function He(e, t) {
      De[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || B("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || B("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function We(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var nt = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ye = {}, Ae = new RegExp("^(aria)-[" + W + "]*$"), $e = new RegExp("^(aria)[A-Z][" + W + "]*$");
    function at(e, t) {
      {
        if (l.call(Ye, t) && Ye[t])
          return !0;
        if ($e.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = nt.hasOwnProperty(n) ? n : null;
          if (o == null)
            return B("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ye[t] = !0, !0;
          if (t !== o)
            return B("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Ye[t] = !0, !0;
        }
        if (Ae.test(t)) {
          var v = t.toLowerCase(), k = nt.hasOwnProperty(v) ? v : null;
          if (k == null)
            return Ye[t] = !0, !1;
          if (t !== k)
            return B("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, k), Ye[t] = !0, !0;
        }
      }
      return !0;
    }
    function Qe(e, t) {
      {
        var n = [];
        for (var o in t) {
          var v = at(e, o);
          v || n.push(o);
        }
        var k = n.map(function(M) {
          return "`" + M + "`";
        }).join(", ");
        n.length === 1 ? B("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", k, e) : n.length > 1 && B("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", k, e);
      }
    }
    function gt(e, t) {
      We(e, t) || Qe(e, t);
    }
    var It = !1;
    function lt(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !It && (It = !0, e === "select" && t.multiple ? B("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : B("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var et = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Nt = function() {
    };
    {
      var ht = {}, Ft = /^on./, Dt = /^on[^A-Z]/, _t = new RegExp("^(aria)-[" + W + "]*$"), ft = new RegExp("^(aria)[A-Z][" + W + "]*$");
      Nt = function(e, t, n, o) {
        if (l.call(ht, t) && ht[t])
          return !0;
        var v = t.toLowerCase();
        if (v === "onfocusin" || v === "onfocusout")
          return B("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ht[t] = !0, !0;
        if (o != null) {
          var k = o.registrationNameDependencies, M = o.possibleRegistrationNames;
          if (k.hasOwnProperty(t))
            return !0;
          var $ = M.hasOwnProperty(v) ? M[v] : null;
          if ($ != null)
            return B("Invalid event handler property `%s`. Did you mean `%s`?", t, $), ht[t] = !0, !0;
          if (Ft.test(t))
            return B("Unknown event handler property `%s`. It will be ignored.", t), ht[t] = !0, !0;
        } else if (Ft.test(t))
          return Dt.test(t) && B("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ht[t] = !0, !0;
        if (_t.test(t) || ft.test(t))
          return !0;
        if (v === "innerhtml")
          return B("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ht[t] = !0, !0;
        if (v === "aria")
          return B("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ht[t] = !0, !0;
        if (v === "is" && n !== null && n !== void 0 && typeof n != "string")
          return B("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), ht[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return B("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ht[t] = !0, !0;
        var ne = te(t), ye = ne !== null && ne.type === h;
        if (et.hasOwnProperty(v)) {
          var we = et[v];
          if (we !== t)
            return B("Invalid DOM property `%s`. Did you mean `%s`?", t, we), ht[t] = !0, !0;
        } else if (!ye && t !== v)
          return B("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, v), ht[t] = !0, !0;
        return typeof n == "boolean" && Y(t, n, ne) ? (n ? B('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : B('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), ht[t] = !0, !0) : ye ? !0 : Y(t, n, ne) ? (ht[t] = !0, !1) : ((n === "false" || n === "true") && ne !== null && ne.type === w && (B("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), ht[t] = !0), !0);
      };
    }
    var xt = function(e, t, n) {
      {
        var o = [];
        for (var v in t) {
          var k = Nt(e, v, t[v], n);
          k || o.push(v);
        }
        var M = o.map(function($) {
          return "`" + $ + "`";
        }).join(", ");
        o.length === 1 ? B("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", M, e) : o.length > 1 && B("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", M, e);
      }
    };
    function Jt(e, t, n) {
      We(e, t) || xt(e, t, n);
    }
    var D = function() {
    };
    {
      var Q = /^(?:webkit|moz|o)[A-Z]/, me = /^-ms-/, de = /-(.)/g, Ce = /;\s*$/, Ne = {}, Oe = {}, Be = !1, Je = !1, Xe = function(e) {
        return e.replace(de, function(t, n) {
          return n.toUpperCase();
        });
      }, Pe = function(e) {
        Ne.hasOwnProperty(e) && Ne[e] || (Ne[e] = !0, B(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xe(e.replace(me, "ms-"))
        ));
      }, ct = function(e) {
        Ne.hasOwnProperty(e) && Ne[e] || (Ne[e] = !0, B("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, St = function(e, t) {
        Oe.hasOwnProperty(t) && Oe[t] || (Oe[t] = !0, B(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ce, "")));
      }, Ot = function(e, t) {
        Be || (Be = !0, B("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Mt = function(e, t) {
        Je || (Je = !0, B("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      D = function(e, t) {
        e.indexOf("-") > -1 ? Pe(e) : Q.test(e) ? ct(e) : Ce.test(t) && St(e, t), typeof t == "number" && (isNaN(t) ? Ot(e, t) : isFinite(t) || Mt(e, t));
      };
    }
    var mn = D, Ut = /["'&<>]/;
    function xn(e) {
      c(e);
      var t = "" + e, n = Ut.exec(t);
      if (!n)
        return t;
      var o, v = "", k, M = 0;
      for (k = n.index; k < t.length; k++) {
        switch (t.charCodeAt(k)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        M !== k && (v += t.substring(M, k)), M = k + 1, v += o;
      }
      return M !== k ? v + t.substring(M, k) : v;
    }
    function Et(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : xn(e);
    }
    var En = /([A-Z])/g, Rn = /^ms-/;
    function kn(e) {
      return e.replace(En, "-$1").toLowerCase().replace(Rn, "-ms-");
    }
    var Ct = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Fn = !1;
    function Vn(e) {
      !Fn && Ct.test(e) && (Fn = !0, B("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var yn = Array.isArray;
    function V(e) {
      return yn(e);
    }
    var be = "<script>";
    function Ie(e, t, n, o, v) {
      var k = e === void 0 ? "" : e, M = be, $ = [];
      return {
        bootstrapChunks: $,
        startInlineScript: M,
        placeholderPrefix: k + "P:",
        segmentPrefix: k + "S:",
        boundaryPrefix: k + "B:",
        idPrefix: k,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Fe = 0, je = 1, rt = 2, Ve = 3, ze = 4, mt = 5, ot = 6, dt = 7;
    function pt(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function Qt(e, t, n) {
      switch (t) {
        case "select":
          return pt(je, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return pt(rt, null);
        case "math":
          return pt(Ve, null);
        case "foreignObject":
          return pt(je, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return pt(ze, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return pt(mt, null);
        case "colgroup":
          return pt(dt, null);
        case "tr":
          return pt(ot, null);
      }
      return e.insertionMode >= ze || e.insertionMode === Fe ? pt(je, null) : e;
    }
    var Ht = null;
    function it(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function jt(e, t, n) {
      var o = e.idPrefix, v = ":" + o + "R" + t;
      return n > 0 && (v += "H" + n.toString(32)), v + ":";
    }
    function Wt(e) {
      return Et(e);
    }
    var $t = "<!-- -->";
    function An(e, t, n, o) {
      return t === "" ? o : (o && e.push($t), e.push(Wt(t)), !0);
    }
    function cn(e, t, n, o) {
      n && o && e.push($t);
    }
    var Kt = /* @__PURE__ */ new Map();
    function Bn(e) {
      var t = Kt.get(e);
      if (t !== void 0)
        return t;
      var n = Et(kn(e));
      return Kt.set(e, n), n;
    }
    var At = ' style="', bn = ":", Yn = ";";
    function Gn(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var v in n)
        if (l.call(n, v)) {
          var k = n[v];
          if (!(k == null || typeof k == "boolean" || k === "")) {
            var M = void 0, $ = void 0, ne = v.indexOf("--") === 0;
            ne ? (M = Et(v), d(k, v), $ = Et(("" + k).trim())) : (mn(v, k), M = Bn(v), typeof k == "number" ? k !== 0 && !l.call(Re, v) ? $ = k + "px" : $ = "" + k : (d(k, v), $ = Et(("" + k).trim()))), o ? (o = !1, e.push(At, M, bn, $)) : e.push(Yn, M, bn, $);
          }
        }
      o || e.push(Yt);
    }
    var Vt = " ", en = '="', Yt = '"', Dn = '=""';
    function Rt(e, t, n, o) {
      switch (n) {
        case "style": {
          Gn(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        // These shouldn't be set as attributes on generic HTML elements.
        case "innerHTML":
        // Must use dangerouslySetInnerHTML instead.
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(n.length > 2 && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N"))
      ) {
        var v = te(n);
        if (v !== null) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!v.acceptsBooleans)
                return;
          }
          var k = v.attributeName, M = k;
          switch (v.type) {
            case w:
              o && e.push(Vt, M, Dn);
              return;
            case I:
              o === !0 ? e.push(Vt, M, Dn) : o === !1 || e.push(Vt, M, en, Et(o), Yt);
              return;
            case O:
              isNaN(o) || e.push(Vt, M, en, Et(o), Yt);
              break;
            case G:
              !isNaN(o) && o >= 1 && e.push(Vt, M, en, Et(o), Yt);
              break;
            default:
              v.sanitizeURL && (s(o, k), o = "" + o, Vn(o)), e.push(Vt, M, en, Et(o), Yt);
          }
        } else if (U(n)) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var $ = n.toLowerCase().slice(0, 5);
              if ($ !== "data-" && $ !== "aria-")
                return;
            }
          }
          e.push(Vt, n, en, Et(o), Yt);
        }
      }
    }
    var u = ">", R = "/>";
    function L(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (c(o), e.push("" + o));
      }
    }
    var z = !1, le = !1, re = !1, he = !1, Se = !1, Me = !1, Le = !1;
    function Ue(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = V(n);
          e.multiple && !o ? B("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && B("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function tt(e, t, n) {
      He("select", t), Ue(t, "value"), Ue(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !re && (B("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), re = !0), e.push(dn("select"));
      var o = null, v = null;
      for (var k in t)
        if (l.call(t, k)) {
          var M = t[k];
          if (M == null)
            continue;
          switch (k) {
            case "children":
              o = M;
              break;
            case "dangerouslySetInnerHTML":
              v = M;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Rt(e, n, k, M);
              break;
          }
        }
      return e.push(u), L(e, v, o), o;
    }
    function kt(e) {
      var t = "";
      return X.Children.forEach(e, function(n) {
        n != null && (t += n, !Se && typeof n != "string" && typeof n != "number" && (Se = !0, B("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var Bt = ' selected=""';
    function Pt(e, t, n, o) {
      var v = o.selectedValue;
      e.push(dn("option"));
      var k = null, M = null, $ = null, ne = null;
      for (var ye in t)
        if (l.call(t, ye)) {
          var we = t[ye];
          if (we == null)
            continue;
          switch (ye) {
            case "children":
              k = we;
              break;
            case "selected":
              $ = we, Le || (B("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Le = !0);
              break;
            case "dangerouslySetInnerHTML":
              ne = we;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              M = we;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              Rt(e, n, ye, we);
              break;
          }
        }
      if (v != null) {
        var ke;
        if (M !== null ? (s(M, "value"), ke = "" + M) : (ne !== null && (Me || (Me = !0, B("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), ke = kt(k)), V(v))
          for (var qe = 0; qe < v.length; qe++) {
            s(v[qe], "value");
            var ut = "" + v[qe];
            if (ut === ke) {
              e.push(Bt);
              break;
            }
          }
        else
          s(v, "select.value"), "" + v === ke && e.push(Bt);
      } else $ && e.push(Bt);
      return e.push(u), L(e, ne, k), k;
    }
    function wn(e, t, n) {
      He("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !le && (B("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), le = !0), t.value !== void 0 && t.defaultValue !== void 0 && !z && (B("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), z = !0), e.push(dn("input"));
      var o = null, v = null, k = null, M = null;
      for (var $ in t)
        if (l.call(t, $)) {
          var ne = t[$];
          if (ne == null)
            continue;
          switch ($) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              M = ne;
              break;
            case "defaultValue":
              v = ne;
              break;
            case "checked":
              k = ne;
              break;
            case "value":
              o = ne;
              break;
            default:
              Rt(e, n, $, ne);
              break;
          }
        }
      return k !== null ? Rt(e, n, "checked", k) : M !== null && Rt(e, n, "checked", M), o !== null ? Rt(e, n, "value", o) : v !== null && Rt(e, n, "value", v), e.push(R), null;
    }
    function fn(e, t, n) {
      He("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !he && (B("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), he = !0), e.push(dn("textarea"));
      var o = null, v = null, k = null;
      for (var M in t)
        if (l.call(t, M)) {
          var $ = t[M];
          if ($ == null)
            continue;
          switch (M) {
            case "children":
              k = $;
              break;
            case "value":
              o = $;
              break;
            case "defaultValue":
              v = $;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              Rt(e, n, M, $);
              break;
          }
        }
      if (o === null && v !== null && (o = v), e.push(u), k != null) {
        if (B("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (V(k)) {
          if (k.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          c(k[0]), o = "" + k[0];
        }
        c(k), o = "" + k;
      }
      return typeof o == "string" && o[0] === `
` && e.push(dr), o !== null && (s(o, "value"), e.push(Wt("" + o))), null;
    }
    function Hn(e, t, n, o) {
      e.push(dn(n));
      for (var v in t)
        if (l.call(t, v)) {
          var k = t[v];
          if (k == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              Rt(e, o, v, k);
              break;
          }
        }
      return e.push(R), null;
    }
    function Sn(e, t, n) {
      e.push(dn("menuitem"));
      for (var o in t)
        if (l.call(t, o)) {
          var v = t[o];
          if (v == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              Rt(e, n, o, v);
              break;
          }
        }
      return e.push(u), null;
    }
    function Xn(e, t, n) {
      e.push(dn("title"));
      var o = null;
      for (var v in t)
        if (l.call(t, v)) {
          var k = t[v];
          if (k == null)
            continue;
          switch (v) {
            case "children":
              o = k;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              Rt(e, n, v, k);
              break;
          }
        }
      e.push(u);
      {
        var M = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? B("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : M != null && M.$$typeof != null ? B("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : M != null && typeof M != "string" && typeof M != "number" && B("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function tn(e, t, n, o) {
      e.push(dn(n));
      var v = null, k = null;
      for (var M in t)
        if (l.call(t, M)) {
          var $ = t[M];
          if ($ == null)
            continue;
          switch (M) {
            case "children":
              v = $;
              break;
            case "dangerouslySetInnerHTML":
              k = $;
              break;
            default:
              Rt(e, o, M, $);
              break;
          }
        }
      return e.push(u), L(e, k, v), typeof v == "string" ? (e.push(Wt(v)), null) : v;
    }
    function Zn(e, t, n, o) {
      e.push(dn(n));
      var v = null, k = null;
      for (var M in t)
        if (l.call(t, M)) {
          var $ = t[M];
          if ($ == null)
            continue;
          switch (M) {
            case "children":
              v = $;
              break;
            case "dangerouslySetInnerHTML":
              k = $;
              break;
            case "style":
              Gn(e, o, $);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              U(M) && typeof $ != "function" && typeof $ != "symbol" && e.push(Vt, M, en, Et($), Yt);
              break;
          }
        }
      return e.push(u), L(e, k, v), v;
    }
    var dr = `
`;
    function xa(e, t, n, o) {
      e.push(dn(n));
      var v = null, k = null;
      for (var M in t)
        if (l.call(t, M)) {
          var $ = t[M];
          if ($ == null)
            continue;
          switch (M) {
            case "children":
              v = $;
              break;
            case "dangerouslySetInnerHTML":
              k = $;
              break;
            default:
              Rt(e, o, M, $);
              break;
          }
        }
      if (e.push(u), k != null) {
        if (v != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof k != "object" || !("__html" in k))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var ne = k.__html;
        ne != null && (typeof ne == "string" && ne.length > 0 && ne[0] === `
` ? e.push(dr, ne) : (c(ne), e.push("" + ne)));
      }
      return typeof v == "string" && v[0] === `
` && e.push(dr), v;
    }
    var Ea = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, hr = /* @__PURE__ */ new Map();
    function dn(e) {
      var t = hr.get(e);
      if (t === void 0) {
        if (!Ea.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, hr.set(e, t);
      }
      return t;
    }
    var pn = "<!DOCTYPE html>";
    function jr(e, t, n, o, v) {
      switch (gt(t, n), lt(t, n), Jt(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && B("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== rt && v.insertionMode !== Ve && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && B("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return tt(e, n, o);
        case "option":
          return Pt(e, n, o, v);
        case "textarea":
          return fn(e, n, o);
        case "input":
          return wn(e, n, o);
        case "menuitem":
          return Sn(e, n, o);
        case "title":
          return Xn(e, n, o);
        // Newline eating tags
        case "listing":
        case "pre":
          return xa(e, n, t, o);
        // Omitted close tags
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Hn(e, n, t, o);
        // These are reserved SVG and MathML elements, that are never custom elements.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return tn(e, n, t, o);
        case "html":
          return v.insertionMode === Fe && e.push(pn), tn(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? tn(e, n, t, o) : Zn(e, n, t, o);
      }
    }
    var pr = "</", vt = ">";
    function Jn(e, t, n) {
      switch (t) {
        // Omitted close tags
        // TODO: Instead of repeating this switch we could try to pass a flag from above.
        // That would require returning a tuple. Which might be ok if it gets inlined.
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(pr, t, vt);
      }
    }
    function jn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        g(e, n[o]);
      return o < n.length ? p(e, n[o]) : !0;
    }
    var Qn = '<template id="', hn = '"></template>';
    function vr(e, t, n) {
      g(e, Qn), g(e, t.placeholderPrefix);
      var o = n.toString(16);
      return g(e, o), p(e, hn);
    }
    var In = "<!--$-->", Wr = '<!--$?--><template id="', Xt = '"></template>', zr = "<!--$!-->", gr = "<!--/$-->", Ti = "<template", mr = '"', Ra = ' data-dgst="', ka = ' data-msg="', yr = ' data-stck="', xi = "></template>";
    function br(e, t) {
      return p(e, In);
    }
    function wr(e, t, n) {
      if (g(e, Wr), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return g(e, n), p(e, Xt);
    }
    function Aa(e, t, n, o, v) {
      var k;
      return k = p(e, zr), g(e, Ti), n && (g(e, Ra), g(e, Et(n)), g(e, mr)), o && (g(e, ka), g(e, Et(o)), g(e, mr)), v && (g(e, yr), g(e, Et(v)), g(e, mr)), k = p(e, xi), k;
    }
    function Kn(e, t) {
      return p(e, gr);
    }
    function Ei(e, t) {
      return p(e, gr);
    }
    function er(e, t) {
      return p(e, gr);
    }
    var Sr = '<div hidden id="', Nn = '">', Cr = "</div>", Ri = '<svg aria-hidden="true" style="display:none" id="', ki = '">', Ai = "</svg>", qr = '<math aria-hidden="true" style="display:none" id="', Gt = '">', Ii = "</math>", Ur = '<table hidden id="', Ni = '">', _i = "</table>", Tr = '<table hidden><tbody id="', Oi = '">', Pi = "</tbody></table>", xr = '<table hidden><tr id="', Er = '">', Mi = "</tr></table>", Li = '<table hidden><colgroup id="', Fi = '">', $r = "</colgroup></table>";
    function Bi(e, t, n, o) {
      switch (n.insertionMode) {
        case Fe:
        case je:
          return g(e, Sr), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, Nn);
        case rt:
          return g(e, Ri), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, ki);
        case Ve:
          return g(e, qr), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, Gt);
        case ze:
          return g(e, Ur), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, Ni);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case mt:
          return g(e, Tr), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, Oi);
        case ot:
          return g(e, xr), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, Er);
        case dt:
          return g(e, Li), g(e, t.segmentPrefix), g(e, o.toString(16)), p(e, Fi);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function f(e, t) {
      switch (t.insertionMode) {
        case Fe:
        case je:
          return p(e, Cr);
        case rt:
          return p(e, Ai);
        case Ve:
          return p(e, Ii);
        case ze:
          return p(e, _i);
        case mt:
          return p(e, Pi);
        case ot:
          return p(e, Mi);
        case dt:
          return p(e, $r);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var E = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", P = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', j = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', ue = E + ';$RS("', ae = '$RS("', ge = '","', Te = '")<\/script>';
    function Ge(e, t, n) {
      g(e, t.startInlineScript), t.sentCompleteSegmentFunction ? g(e, ae) : (t.sentCompleteSegmentFunction = !0, g(e, ue)), g(e, t.segmentPrefix);
      var o = n.toString(16);
      return g(e, o), g(e, ge), g(e, t.placeholderPrefix), g(e, o), p(e, Te);
    }
    var Ke = P + ';$RC("', Ze = '$RC("', yt = '","', zt = '")<\/script>';
    function nn(e, t, n, o) {
      if (g(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? g(e, Ze) : (t.sentCompleteBoundaryFunction = !0, g(e, Ke)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var v = o.toString(16);
      return g(e, n), g(e, yt), g(e, t.segmentPrefix), g(e, v), p(e, zt);
    }
    var rn = j + ';$RX("', Rr = '$RX("', Gi = '"', Vr = ")<\/script>", Ia = ",";
    function ps(e, t, n, o, v, k) {
      if (g(e, t.startInlineScript), t.sentClientRenderFunction ? g(e, Rr) : (t.sentClientRenderFunction = !0, g(e, rn)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return g(e, n), g(e, Gi), (o || v || k) && (g(e, Ia), g(e, Na(o || ""))), (v || k) && (g(e, Ia), g(e, Na(v || ""))), k && (g(e, Ia), g(e, Na(k))), p(e, Vr);
    }
    var vs = /[<\u2028\u2029]/g;
    function Na(e) {
      var t = JSON.stringify(e);
      return t.replace(vs, function(n) {
        switch (n) {
          // santizing breaking out of strings and script tags
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function gs(e, t) {
      var n = Ie(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: n.bootstrapChunks,
        startInlineScript: n.startInlineScript,
        placeholderPrefix: n.placeholderPrefix,
        segmentPrefix: n.segmentPrefix,
        boundaryPrefix: n.boundaryPrefix,
        idPrefix: n.idPrefix,
        nextSuspenseID: n.nextSuspenseID,
        sentCompleteSegmentFunction: n.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: n.sentCompleteBoundaryFunction,
        sentClientRenderFunction: n.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function ms() {
      return {
        insertionMode: je,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function yo(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(Et(t)), !1) : An(e, t, n, o);
    }
    function bo(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return cn(e, t, n, o);
    }
    function ys(e, t) {
      return t.generateStaticMarkup ? !0 : br(e);
    }
    function bs(e, t, n, o, v) {
      return t.generateStaticMarkup ? !0 : Aa(e, t, n, o, v);
    }
    function ws(e, t) {
      return t.generateStaticMarkup ? !0 : Kn(e);
    }
    function Ss(e, t) {
      return t.generateStaticMarkup ? !0 : er(e);
    }
    var Zt = Object.assign, Cs = Symbol.for("react.element"), wo = Symbol.for("react.portal"), Di = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), So = Symbol.for("react.profiler"), Hi = Symbol.for("react.provider"), ji = Symbol.for("react.context"), Wi = Symbol.for("react.forward_ref"), zi = Symbol.for("react.suspense"), Yr = Symbol.for("react.suspense_list"), Xr = Symbol.for("react.memo"), kr = Symbol.for("react.lazy"), _a = Symbol.for("react.scope"), Oa = Symbol.for("react.debug_trace_mode"), Pa = Symbol.for("react.legacy_hidden"), qi = Symbol.for("react.default_value"), Co = Symbol.iterator, Ts = "@@iterator";
    function xs(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Co && e[Co] || e[Ts];
      return typeof t == "function" ? t : null;
    }
    function Es(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var v = t.displayName || t.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function Ma(e) {
      return e.displayName || "Context";
    }
    function Tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Di:
          return "Fragment";
        case wo:
          return "Portal";
        case So:
          return "Profiler";
        case an:
          return "StrictMode";
        case zi:
          return "Suspense";
        case Yr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ji:
            var t = e;
            return Ma(t) + ".Consumer";
          case Hi:
            var n = e;
            return Ma(n._context) + ".Provider";
          case Wi:
            return Es(e, e.render, "ForwardRef");
          case Xr:
            var o = e.displayName || null;
            return o !== null ? o : Tt(e.type) || "Memo";
          case kr: {
            var v = e, k = v._payload, M = v._init;
            try {
              return Tt(M(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Zr = 0, To, La, wt, Ar, Fa, Ba, Ga;
    function Da() {
    }
    Da.__reactDisabledLog = !0;
    function xo() {
      {
        if (Zr === 0) {
          To = console.log, La = console.info, wt = console.warn, Ar = console.error, Fa = console.group, Ba = console.groupCollapsed, Ga = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Da,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Zr++;
      }
    }
    function Eo() {
      {
        if (Zr--, Zr === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Zt({}, e, {
              value: To
            }),
            info: Zt({}, e, {
              value: La
            }),
            warn: Zt({}, e, {
              value: wt
            }),
            error: Zt({}, e, {
              value: Ar
            }),
            group: Zt({}, e, {
              value: Fa
            }),
            groupCollapsed: Zt({}, e, {
              value: Ba
            }),
            groupEnd: Zt({}, e, {
              value: Ga
            })
          });
        }
        Zr < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ui = K.ReactCurrentDispatcher, $i;
    function Jr(e, t, n) {
      {
        if ($i === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            $i = o && o[1] || "";
          }
        return `
` + $i + e;
      }
    }
    var Ha = !1, Ir;
    {
      var ja = typeof WeakMap == "function" ? WeakMap : Map;
      Ir = new ja();
    }
    function tr(e, t) {
      if (!e || Ha)
        return "";
      {
        var n = Ir.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      Ha = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Ui.current, Ui.current = null, xo();
      try {
        if (t) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (Lt) {
              o = Lt;
            }
            Reflect.construct(e, [], M);
          } else {
            try {
              M.call();
            } catch (Lt) {
              o = Lt;
            }
            e.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Lt) {
            o = Lt;
          }
          e();
        }
      } catch (Lt) {
        if (Lt && o && typeof Lt.stack == "string") {
          for (var $ = Lt.stack.split(`
`), ne = o.stack.split(`
`), ye = $.length - 1, we = ne.length - 1; ye >= 1 && we >= 0 && $[ye] !== ne[we]; )
            we--;
          for (; ye >= 1 && we >= 0; ye--, we--)
            if ($[ye] !== ne[we]) {
              if (ye !== 1 || we !== 1)
                do
                  if (ye--, we--, we < 0 || $[ye] !== ne[we]) {
                    var ke = `
` + $[ye].replace(" at new ", " at ");
                    return e.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", e.displayName)), typeof e == "function" && Ir.set(e, ke), ke;
                  }
                while (ye >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        Ha = !1, Ui.current = k, Eo(), Error.prepareStackTrace = v;
      }
      var qe = e ? e.displayName || e.name : "", ut = qe ? Jr(qe) : "";
      return typeof e == "function" && Ir.set(e, ut), ut;
    }
    function Wa(e, t, n) {
      return tr(e, !0);
    }
    function Qr(e, t, n) {
      return tr(e, !1);
    }
    function Rs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Kr(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return tr(e, Rs(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case zi:
          return Jr("Suspense");
        case Yr:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Wi:
            return Qr(e.render);
          case Xr:
            return Kr(e.type, t, n);
          case kr: {
            var o = e, v = o._payload, k = o._init;
            try {
              return Kr(k(v), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ro = {}, za = K.ReactDebugCurrentFrame;
    function Vi(e) {
      if (e) {
        var t = e._owner, n = Kr(e.type, e._source, t ? t.type : null);
        za.setExtraStackFrame(n);
      } else
        za.setExtraStackFrame(null);
    }
    function Yi(e, t, n, o, v) {
      {
        var k = Function.call.bind(l);
        for (var M in e)
          if (k(e, M)) {
            var $ = void 0;
            try {
              if (typeof e[M] != "function") {
                var ne = Error((o || "React class") + ": " + n + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              $ = e[M](t, M, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              $ = ye;
            }
            $ && !($ instanceof Error) && (Vi(v), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, M, typeof $), Vi(null)), $ instanceof Error && !($.message in Ro) && (Ro[$.message] = !0, Vi(v), B("Failed %s type: %s", n, $.message), Vi(null));
          }
      }
    }
    var Xi;
    Xi = {};
    var ei = {};
    Object.freeze(ei);
    function ti(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return ei;
        var o = {};
        for (var v in n)
          o[v] = t[v];
        {
          var k = Tt(e) || "Unknown";
          Yi(n, o, "context", k);
        }
        return o;
      }
    }
    function ko(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var v = Tt(t) || "Unknown";
            Xi[v] || (Xi[v] = !0, B("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return n;
        }
        var k = e.getChildContext();
        for (var M in k)
          if (!(M in o))
            throw new Error((Tt(t) || "Unknown") + '.getChildContext(): key "' + M + '" is not defined in childContextTypes.');
        {
          var $ = Tt(t) || "Unknown";
          Yi(o, k, "child context", $);
        }
        return Zt({}, n, k);
      }
    }
    var nr;
    nr = {};
    var Zi = null, Wn = null;
    function qa(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function rr(e) {
      e.context._currentValue2 = e.value;
    }
    function Ji(e, t) {
      if (e !== t) {
        qa(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Ji(n, o);
        }
        rr(t);
      }
    }
    function zn(e) {
      qa(e);
      var t = e.parent;
      t !== null && zn(t);
    }
    function Qi(e) {
      var t = e.parent;
      t !== null && Qi(t), rr(e);
    }
    function Ki(e, t) {
      qa(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? Ji(n, t) : Ki(n, t);
    }
    function ni(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? Ji(e, n) : ni(e, n), rr(t);
    }
    function ri(e) {
      var t = Wn, n = e;
      t !== n && (t === null ? Qi(n) : n === null ? zn(t) : t.depth === n.depth ? Ji(t, n) : t.depth > n.depth ? Ki(t, n) : ni(t, n), Wn = n);
    }
    function Ao(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== nr && B("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = nr;
      var o = Wn, v = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return Wn = v, v;
    }
    function Io(e) {
      var t = Wn;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && B("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === qi ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== nr && B("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = nr;
      }
      return Wn = t.parent;
    }
    function No() {
      return Wn;
    }
    function qn(e) {
      var t = e._currentValue2;
      return t;
    }
    function Ua(e) {
      return e._reactInternals;
    }
    function ks(e, t) {
      e._reactInternals = t;
    }
    var _o = {}, Nr = {}, ii, $a, ea, ta, na, _r, ai, oi, ra;
    {
      ii = /* @__PURE__ */ new Set(), $a = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), ta = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Set();
      var si = /* @__PURE__ */ new Set();
      _r = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          si.has(n) || (si.add(n), B("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, na = function(e, t) {
        if (t === void 0) {
          var n = Tt(e) || "Component";
          ta.has(n) || (ta.add(n), B("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ia(e, t) {
      {
        var n = e.constructor, o = n && Tt(n) || "ReactClass", v = o + "." + t;
        if (_o[v])
          return;
        B(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), _o[v] = !0;
      }
    }
    var aa = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = Ua(e);
        o.queue === null ? ia(e, "setState") : (o.queue.push(t), n != null && _r(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = Ua(e);
        o.replace = !0, o.queue = [t], n != null && _r(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = Ua(e);
        n.queue === null ? ia(e, "forceUpdate") : t != null && _r(t, "setState");
      }
    };
    function Va(e, t, n, o, v) {
      var k = n(v, o);
      na(t, k);
      var M = k == null ? o : Zt({}, o, k);
      return M;
    }
    function Oo(e, t, n) {
      var o = ei, v = e.contextType;
      if ("contextType" in e) {
        var k = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ji && v._context === void 0
        );
        if (!k && !ra.has(e)) {
          ra.add(e);
          var M = "";
          v === void 0 ? M = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? M = " However, it is set to a " + typeof v + "." : v.$$typeof === Hi ? M = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? M = " Did you accidentally pass the Context.Consumer instead?" : M = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", B("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Tt(e) || "Component", M);
        }
      }
      typeof v == "object" && v !== null ? o = qn(v) : o = n;
      var $ = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && ($.state === null || $.state === void 0)) {
          var ne = Tt(e) || "Component";
          ii.has(ne) || (ii.add(ne), B("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", ne, $.state === null ? "null" : "undefined", ne));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof $.getSnapshotBeforeUpdate == "function") {
          var ye = null, we = null, ke = null;
          if (typeof $.componentWillMount == "function" && $.componentWillMount.__suppressDeprecationWarning !== !0 ? ye = "componentWillMount" : typeof $.UNSAFE_componentWillMount == "function" && (ye = "UNSAFE_componentWillMount"), typeof $.componentWillReceiveProps == "function" && $.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? we = "componentWillReceiveProps" : typeof $.UNSAFE_componentWillReceiveProps == "function" && (we = "UNSAFE_componentWillReceiveProps"), typeof $.componentWillUpdate == "function" && $.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ke = "componentWillUpdate" : typeof $.UNSAFE_componentWillUpdate == "function" && (ke = "UNSAFE_componentWillUpdate"), ye !== null || we !== null || ke !== null) {
            var qe = Tt(e) || "Component", ut = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ea.has(qe) || (ea.add(qe), B(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, qe, ut, ye !== null ? `
  ` + ye : "", we !== null ? `
  ` + we : "", ke !== null ? `
  ` + ke : ""));
          }
        }
      }
      return $;
    }
    function Po(e, t, n) {
      {
        var o = Tt(t) || "Component", v = e.render;
        v || (t.prototype && typeof t.prototype.render == "function" ? B("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : B("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && B("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && B("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && B("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && B("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && B("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !oi.has(t) && (oi.add(t), B("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && B("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && B("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Tt(t) || "A pure component"), typeof e.componentDidUnmount == "function" && B("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && B("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && B("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && B("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var k = e.props !== n;
        e.props !== void 0 && k && B("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && B("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !$a.has(t) && ($a.add(t), B("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Tt(t))), typeof e.getDerivedStateFromProps == "function" && B("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && B("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && B("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var M = e.state;
        M && (typeof M != "object" || V(M)) && B("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && B("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Mo(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = Tt(e) || "Unknown";
          Nr[o] || (oe(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Nr[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (B("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Tt(e) || "Component"), aa.enqueueReplaceState(t, t.state, null));
    }
    function As(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var v = e.queue, k = e.replace;
        if (e.queue = null, e.replace = !1, k && v.length === 1)
          t.state = v[0];
        else {
          for (var M = k ? v[0] : t.state, $ = !0, ne = k ? 1 : 0; ne < v.length; ne++) {
            var ye = v[ne], we = typeof ye == "function" ? ye.call(t, M, n, o) : ye;
            we != null && ($ ? ($ = !1, M = Zt({}, M, we)) : Zt(M, we));
          }
          t.state = M;
        }
      } else
        e.queue = null;
    }
    function Lo(e, t, n, o) {
      Po(e, t, n);
      var v = e.state !== void 0 ? e.state : null;
      e.updater = aa, e.props = n, e.state = v;
      var k = {
        queue: [],
        replace: !1
      };
      ks(e, k);
      var M = t.contextType;
      if (typeof M == "object" && M !== null ? e.context = qn(M) : e.context = o, e.state === n) {
        var $ = Tt(t) || "Component";
        ai.has($) || (ai.add($), B("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", $));
      }
      var ne = t.getDerivedStateFromProps;
      typeof ne == "function" && (e.state = Va(e, t, ne, v, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Mo(t, e), As(k, e, n, o));
    }
    var Is = {
      id: 1,
      overflow: ""
    };
    function Ns(e) {
      var t = e.overflow, n = e.id, o = n & ~_s(n);
      return o.toString(32) + t;
    }
    function Ya(e, t, n) {
      var o = e.id, v = e.overflow, k = li(o) - 1, M = o & ~(1 << k), $ = n + 1, ne = li(t) + k;
      if (ne > 30) {
        var ye = k - k % 5, we = (1 << ye) - 1, ke = (M & we).toString(32), qe = M >> ye, ut = k - ye, Lt = li(t) + ut, cr = $ << ut, fr = cr | qe, Ln = ke + v;
        return {
          id: 1 << Lt | fr,
          overflow: Ln
        };
      } else {
        var Gr = $ << k, ul = Gr | M, Tu = v;
        return {
          id: 1 << ne | ul,
          overflow: Tu
        };
      }
    }
    function li(e) {
      return 32 - Os(e);
    }
    function _s(e) {
      return 1 << li(e) - 1;
    }
    var Os = Math.clz32 ? Math.clz32 : Ps, Xa = Math.log, oa = Math.LN2;
    function Ps(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Xa(t) / oa | 0) | 0;
    }
    function Ms(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ls = typeof Object.is == "function" ? Object.is : Ms, _n = null, Za = null, sa = null, bt = null, on = !1, Or = !1, ir = 0, st = null, Un = 0, la = 25, sn = !1, ln;
    function Cn() {
      if (_n === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return sn && B("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), _n;
    }
    function Fs(e, t) {
      if (t === null)
        return B("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ln), !1;
      e.length !== t.length && B(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ln, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ls(e[n], t[n]))
          return !1;
      return !0;
    }
    function vn() {
      if (Un > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function $n() {
      return bt === null ? sa === null ? (on = !1, sa = bt = vn()) : (on = !0, bt = sa) : bt.next === null ? (on = !1, bt = bt.next = vn()) : (on = !0, bt = bt.next), bt;
    }
    function ar(e, t) {
      _n = t, Za = e, sn = !1, ir = 0;
    }
    function Bs(e, t, n, o) {
      for (; Or; )
        Or = !1, ir = 0, Un += 1, bt = null, n = e(t, o);
      return ui(), n;
    }
    function Ja() {
      var e = ir !== 0;
      return e;
    }
    function ui() {
      sn = !1, _n = null, Za = null, Or = !1, sa = null, Un = 0, st = null, bt = null;
    }
    function Gs(e) {
      return sn && B("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), qn(e);
    }
    function Ds(e) {
      return ln = "useContext", Cn(), qn(e);
    }
    function ua(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Qa(e) {
      return ln = "useState", Fo(
        ua,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Fo(e, t, n) {
      if (e !== ua && (ln = "useReducer"), _n = Cn(), bt = $n(), on) {
        var o = bt.queue, v = o.dispatch;
        if (st !== null) {
          var k = st.get(o);
          if (k !== void 0) {
            st.delete(o);
            var M = bt.memoizedState, $ = k;
            do {
              var ne = $.action;
              sn = !0, M = e(M, ne), sn = !1, $ = $.next;
            } while ($ !== null);
            return bt.memoizedState = M, [M, v];
          }
        }
        return [bt.memoizedState, v];
      } else {
        sn = !0;
        var ye;
        e === ua ? ye = typeof t == "function" ? t() : t : ye = n !== void 0 ? n(t) : t, sn = !1, bt.memoizedState = ye;
        var we = bt.queue = {
          last: null,
          dispatch: null
        }, ke = we.dispatch = Go.bind(null, _n, we);
        return [bt.memoizedState, ke];
      }
    }
    function Bo(e, t) {
      _n = Cn(), bt = $n();
      var n = t === void 0 ? null : t;
      if (bt !== null) {
        var o = bt.memoizedState;
        if (o !== null && n !== null) {
          var v = o[1];
          if (Fs(n, v))
            return o[0];
        }
      }
      sn = !0;
      var k = e();
      return sn = !1, bt.memoizedState = [k, n], k;
    }
    function Ka(e) {
      _n = Cn(), bt = $n();
      var t = bt.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), bt.memoizedState = n, n;
      } else
        return t;
    }
    function Hs(e, t) {
      ln = "useLayoutEffect", B("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Go(e, t, n) {
      if (Un >= la)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === _n) {
        Or = !0;
        var o = {
          action: n,
          next: null
        };
        st === null && (st = /* @__PURE__ */ new Map());
        var v = st.get(t);
        if (v === void 0)
          st.set(t, o);
        else {
          for (var k = v; k.next !== null; )
            k = k.next;
          k.next = o;
        }
      }
    }
    function Do(e, t) {
      return Bo(function() {
        return e;
      }, t);
    }
    function js(e, t, n) {
      return Cn(), t(e._source);
    }
    function Ws(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function zs(e) {
      return Cn(), e;
    }
    function qs() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Us() {
      return Cn(), [!1, qs];
    }
    function $s() {
      var e = Za, t = Ns(e.treeContext), n = eo;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = ir++;
      return jt(n, t, o);
    }
    function ca() {
    }
    var Ho = {
      readContext: Gs,
      useContext: Ds,
      useMemo: Bo,
      useReducer: Fo,
      useRef: Ka,
      useState: Qa,
      useInsertionEffect: ca,
      useLayoutEffect: Hs,
      useCallback: Do,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ca,
      // Effects are not run in the server environment.
      useEffect: ca,
      // Debugging effect
      useDebugValue: ca,
      useDeferredValue: zs,
      useTransition: Us,
      useId: $s,
      // Subscriptions are not setup in a server environment.
      useMutableSource: js,
      useSyncExternalStore: Ws
    }, eo = null;
    function jo(e) {
      eo = e;
    }
    function fa(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += Jr(n.type, null, null);
              break;
            case 1:
              t += Qr(n.type, null, null);
              break;
            case 2:
              t += Wa(n.type, null, null);
              break;
          }
          n = n.parent;
        } while (n);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var da = K.ReactCurrentDispatcher, ci = K.ReactDebugCurrentFrame, ha = 0, Pr = 1, pa = 2, va = 3, ga = 4, Mr = 0, to = 1, or = 2, Wo = 12800;
    function Vs(e) {
      return console.error(e), null;
    }
    function Lr() {
    }
    function Fr(e, t, n, o, v, k, M, $, ne) {
      var ye = [], we = /* @__PURE__ */ new Set(), ke = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? Wo : o,
        status: Mr,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: we,
        pingedTasks: ye,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? Vs : v,
        onAllReady: Lr,
        onShellReady: M === void 0 ? Lr : M,
        onShellError: Lr,
        onFatalError: Lr
      }, qe = ma(
        ke,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      qe.parentFlushed = !0;
      var ut = sr(ke, e, null, qe, we, ei, Zi, Is);
      return ye.push(ut), ke;
    }
    function Ys(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && m(function() {
        return fo(e);
      });
    }
    function Xs(e, t) {
      return {
        id: Ht,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function sr(e, t, n, o, v, k, M, $) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var ne = {
        node: t,
        ping: function() {
          return Ys(e, ne);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: v,
        legacyContext: k,
        context: M,
        treeContext: $
      };
      return ne.componentStack = null, v.add(ne), ne;
    }
    function ma(e, t, n, o, v, k) {
      return {
        status: ha,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: n,
        lastPushedText: v,
        textEmbedded: k
      };
    }
    var On = null;
    function no() {
      return On === null || On.componentStack === null ? "" : fa(On.componentStack);
    }
    function lr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function fi(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function Pn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function Tn(e) {
      e.componentStack === null ? B("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Mn = null;
    function ya(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var o = Mn || no();
        Mn = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function di(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function gn(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = or, A(e.destination, t)) : (e.status = to, e.fatalError = t);
    }
    function hi(e, t, n) {
      lr(t, "Suspense");
      var o = t.blockedBoundary, v = t.blockedSegment, k = n.fallback, M = n.children, $ = /* @__PURE__ */ new Set(), ne = Xs(e, $), ye = v.chunks.length, we = ma(
        e,
        ye,
        ne,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      v.children.push(we), v.lastPushedText = !1;
      var ke = ma(
        e,
        0,
        null,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      ke.parentFlushed = !0, t.blockedBoundary = ne, t.blockedSegment = ke;
      try {
        if (qt(e, t, M), bo(ke.chunks, e.responseState, ke.lastPushedText, ke.textEmbedded), ke.status = Pr, Br(ne, ke), ne.pendingTasks === 0) {
          Tn(t);
          return;
        }
      } catch (ut) {
        ke.status = ga, ne.forceClientRender = !0, ne.errorDigest = di(e, ut), ya(ne, ut);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = v;
      }
      var qe = sr(e, k, o, we, $, t.legacyContext, t.context, t.treeContext);
      qe.componentStack = t.componentStack, e.pingedTasks.push(qe), Tn(t);
    }
    function ro(e, t, n, o) {
      lr(t, n);
      var v = t.blockedSegment, k = jr(v.chunks, n, o, e.responseState, v.formatContext);
      v.lastPushedText = !1;
      var M = v.formatContext;
      v.formatContext = Qt(M, n, o), qt(e, t, k), v.formatContext = M, Jn(v.chunks, n), v.lastPushedText = !1, Tn(t);
    }
    function pi(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function vi(e, t, n, o, v) {
      var k = {};
      ar(t, k);
      var M = n(o, v);
      return Bs(n, o, M, v);
    }
    function zo(e, t, n, o, v) {
      var k = n.render();
      n.props !== v && (ao || B("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Tt(o) || "a component"), ao = !0);
      {
        var M = o.childContextTypes;
        if (M != null) {
          var $ = t.legacyContext, ne = ko(n, o, $, M);
          t.legacyContext = ne, un(e, t, k), t.legacyContext = $;
          return;
        }
      }
      un(e, t, k);
    }
    function Zs(e, t, n, o) {
      Pn(t, n);
      var v = ti(n, t.legacyContext), k = Oo(n, o, v);
      Lo(k, n, o, v), zo(e, t, k, n, o), Tn(t);
    }
    var qo = {}, gi = {}, io = {}, Uo = {}, ao = !1, mi = {}, oo = !1, so = !1, lo = !1;
    function $o(e, t, n, o) {
      var v;
      if (v = ti(n, t.legacyContext), fi(t, n), n.prototype && typeof n.prototype.render == "function") {
        var k = Tt(n) || "Unknown";
        qo[k] || (B("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", k, k), qo[k] = !0);
      }
      var M = vi(e, t, n, o, v), $ = Ja();
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) {
        var ne = Tt(n) || "Unknown";
        gi[ne] || (B("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ne, ne, ne), gi[ne] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0
      ) {
        {
          var ye = Tt(n) || "Unknown";
          gi[ye] || (B("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ye, ye, ye), gi[ye] = !0);
        }
        Lo(M, n, o, v), zo(e, t, M, n, o);
      } else if (Vo(n), $) {
        var we = t.treeContext, ke = 1, qe = 0;
        t.treeContext = Ya(we, ke, qe);
        try {
          un(e, t, M);
        } finally {
          t.treeContext = we;
        }
      } else
        un(e, t, M);
      Tn(t);
    }
    function Vo(e) {
      {
        if (e && e.childContextTypes && B("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = Tt(e) || "Unknown";
          mi[t] || (B("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), mi[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = Tt(e) || "Unknown";
          Uo[n] || (B("%s: Function components do not support getDerivedStateFromProps.", n), Uo[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = Tt(e) || "Unknown";
          io[o] || (B("%s: Function components do not support contextType.", o), io[o] = !0);
        }
      }
    }
    function uo(e, t) {
      if (e && e.defaultProps) {
        var n = Zt({}, t), o = e.defaultProps;
        for (var v in o)
          n[v] === void 0 && (n[v] = o[v]);
        return n;
      }
      return t;
    }
    function Yo(e, t, n, o, v) {
      fi(t, n.render);
      var k = vi(e, t, n.render, o, v), M = Ja();
      if (M) {
        var $ = t.treeContext, ne = 1, ye = 0;
        t.treeContext = Ya($, ne, ye);
        try {
          un(e, t, k);
        } finally {
          t.treeContext = $;
        }
      } else
        un(e, t, k);
      Tn(t);
    }
    function Js(e, t, n, o, v) {
      var k = n.type, M = uo(k, o);
      co(e, t, k, M, v);
    }
    function Qs(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (lo || (lo = !0, B("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var v = o.children;
      typeof v != "function" && B("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var k = qn(n), M = v(k);
      un(e, t, M);
    }
    function Xo(e, t, n, o) {
      var v = n._context, k = o.value, M = o.children, $;
      $ = t.context, t.context = Ao(v, k), un(e, t, M), t.context = Io(v), $ !== t.context && B("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Ks(e, t, n, o, v) {
      lr(t, "Lazy");
      var k = n._payload, M = n._init, $ = M(k), ne = uo($, o);
      co(e, t, $, ne, v), Tn(t);
    }
    function co(e, t, n, o, v) {
      if (typeof n == "function")
        if (pi(n)) {
          Zs(e, t, n, o);
          return;
        } else {
          $o(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        ro(e, t, n, o);
        return;
      }
      switch (n) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case Pa:
        case Oa:
        case an:
        case So:
        case Di: {
          un(e, t, o.children);
          return;
        }
        case Yr: {
          lr(t, "SuspenseList"), un(e, t, o.children), Tn(t);
          return;
        }
        case _a:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case zi: {
          hi(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case Wi: {
            Yo(e, t, n, o, v);
            return;
          }
          case Xr: {
            Js(e, t, n, o, v);
            return;
          }
          case Hi: {
            Xo(e, t, n, o);
            return;
          }
          case ji: {
            Qs(e, t, n, o);
            return;
          }
          case kr: {
            Ks(e, t, n, o);
            return;
          }
        }
      var k = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + k));
    }
    function el(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (oo || B("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), oo = !0), e.entries === t && (so || B("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), so = !0);
    }
    function un(e, t, n) {
      try {
        return tl(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Mn = Mn !== null ? Mn : no()), o;
      }
    }
    function tl(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case Cs: {
            var o = n, v = o.type, k = o.props, M = o.ref;
            co(e, t, v, k, M);
            return;
          }
          case wo:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case kr: {
            var $ = n, ne = $._payload, ye = $._init, we;
            try {
              we = ye(ne);
            } catch (Gr) {
              throw typeof Gr == "object" && Gr !== null && typeof Gr.then == "function" && lr(t, "Lazy"), Gr;
            }
            un(e, t, we);
            return;
          }
        }
        if (V(n)) {
          ba(e, t, n);
          return;
        }
        var ke = xs(n);
        if (ke) {
          el(n, ke);
          var qe = ke.call(n);
          if (qe) {
            var ut = qe.next();
            if (!ut.done) {
              var Lt = [];
              do
                Lt.push(ut.value), ut = qe.next();
              while (!ut.done);
              ba(e, t, Lt);
              return;
            }
            return;
          }
        }
        var cr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (cr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : cr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var fr = t.blockedSegment;
        fr.lastPushedText = yo(t.blockedSegment.chunks, n, e.responseState, fr.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var Ln = t.blockedSegment;
        Ln.lastPushedText = yo(t.blockedSegment.chunks, "" + n, e.responseState, Ln.lastPushedText);
        return;
      }
      typeof n == "function" && B("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ba(e, t, n) {
      for (var o = n.length, v = 0; v < o; v++) {
        var k = t.treeContext;
        t.treeContext = Ya(k, o, v);
        try {
          qt(e, t, n[v]);
        } finally {
          t.treeContext = k;
        }
      }
    }
    function nl(e, t, n) {
      var o = t.blockedSegment, v = o.chunks.length, k = ma(
        e,
        v,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(k), o.lastPushedText = !1;
      var M = sr(e, t.node, t.blockedBoundary, k, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (M.componentStack = t.componentStack.parent);
      var $ = M.ping;
      n.then($, $);
    }
    function qt(e, t, n) {
      var o = t.blockedSegment.formatContext, v = t.legacyContext, k = t.context, M = null;
      M = t.componentStack;
      try {
        return un(e, t, n);
      } catch ($) {
        if (ui(), typeof $ == "object" && $ !== null && typeof $.then == "function") {
          nl(e, t, $), t.blockedSegment.formatContext = o, t.legacyContext = v, t.context = k, ri(k), t.componentStack = M;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = v, t.context = k, ri(k), t.componentStack = M, $;
      }
    }
    function rl(e, t, n, o) {
      var v = di(e, o);
      if (t === null ? gn(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = v, ya(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var k = e.onAllReady;
        k();
      }
    }
    function Zo(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = va, Qo(t, n, o);
    }
    function Jo(e, t, n) {
      var o = e.blockedBoundary, v = e.blockedSegment;
      if (v.status = va, o === null)
        t.allPendingTasks--, t.status !== or && (t.status = or, t.destination !== null && x(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var k = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(k);
          {
            var M = "The server did not finish this Suspense boundary: ";
            k && typeof k.message == "string" ? k = M + k.message : k = M + String(k);
            var $ = On;
            On = e;
            try {
              ya(o, k);
            } finally {
              On = $;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(ye) {
          return Jo(ye, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var ne = t.onAllReady;
          ne();
        }
      }
    }
    function Br(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Pr && Br(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function Qo(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Lr;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === Pr && Br(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Zo, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Pr) {
          Br(t, n);
          var v = t.completedSegments;
          v.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var k = e.onAllReady;
        k();
      }
    }
    function il(e, t) {
      var n = t.blockedSegment;
      if (n.status === ha) {
        ri(t.context);
        var o = null;
        o = On, On = t;
        try {
          un(e, t, t.node), bo(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Pr, Qo(e, t.blockedBoundary, n);
        } catch (k) {
          if (ui(), typeof k == "object" && k !== null && typeof k.then == "function") {
            var v = t.ping;
            k.then(v, v);
          } else
            t.abortSet.delete(t), n.status = ga, rl(e, t.blockedBoundary, n, k);
        } finally {
          On = o;
        }
      }
    }
    function fo(e) {
      if (e.status !== or) {
        var t = No(), n = da.current;
        da.current = Ho;
        var o;
        o = ci.getCurrentStack, ci.getCurrentStack = no;
        var v = eo;
        jo(e.responseState);
        try {
          var k = e.pingedTasks, M;
          for (M = 0; M < k.length; M++) {
            var $ = k[M];
            il(e, $);
          }
          k.splice(0, M), e.destination !== null && Sa(e, e.destination);
        } catch (ne) {
          di(e, ne), gn(e, ne);
        } finally {
          jo(v), da.current = n, ci.getCurrentStack = o, n === Ho && ri(t);
        }
      }
    }
    function ur(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case ha: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, vr(t, e.responseState, o);
        }
        case Pr: {
          n.status = pa;
          for (var v = !0, k = n.chunks, M = 0, $ = n.children, ne = 0; ne < $.length; ne++) {
            for (var ye = $[ne]; M < ye.index; M++)
              g(t, k[M]);
            v = yi(e, t, ye);
          }
          for (; M < k.length - 1; M++)
            g(t, k[M]);
          return M < k.length && (v = p(t, k[M])), v;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function yi(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return ur(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return bs(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), ur(e, t, n), Ss(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var v = o.id = it(e.responseState);
        return wr(t, e.responseState, v), ur(e, t, n), Ei(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), wr(t, e.responseState, o.id), ur(e, t, n), Ei(t, e.responseState);
        ys(t, e.responseState);
        var k = o.completedSegments;
        if (k.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var M = k[0];
        return yi(e, t, M), ws(t, e.responseState);
      }
    }
    function al(e, t, n) {
      return ps(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function ho(e, t, n) {
      return Bi(t, e.responseState, n.formatContext, n.id), yi(e, t, n), f(t, n.formatContext);
    }
    function bi(e, t, n) {
      for (var o = n.completedSegments, v = 0; v < o.length; v++) {
        var k = o[v];
        Ko(e, t, n, k);
      }
      return o.length = 0, nn(t, e.responseState, n.id, n.rootSegmentID);
    }
    function wa(e, t, n) {
      for (var o = n.completedSegments, v = 0; v < o.length; v++) {
        var k = o[v];
        if (!Ko(e, t, n, k))
          return v++, o.splice(0, v), !1;
      }
      return o.splice(0, v), !0;
    }
    function Ko(e, t, n, o) {
      if (o.status === pa)
        return !0;
      var v = o.id;
      if (v === -1) {
        var k = o.id = n.rootSegmentID;
        if (k === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ho(e, t, o);
      } else
        return ho(e, t, o), Ge(t, e.responseState, v);
    }
    function Sa(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (yi(e, t, n), e.completedRootSegment = null, jn(t, e.responseState));
        var o = e.clientRenderedBoundaries, v;
        for (v = 0; v < o.length; v++) {
          var k = o[v];
          if (!al(e, t, k)) {
            e.destination = null, v++, o.splice(0, v);
            return;
          }
        }
        o.splice(0, v);
        var M = e.completedBoundaries;
        for (v = 0; v < M.length; v++) {
          var $ = M[v];
          if (!bi(e, t, $)) {
            e.destination = null, v++, M.splice(0, v);
            return;
          }
        }
        M.splice(0, v);
        var ne = e.partialBoundaries;
        for (v = 0; v < ne.length; v++) {
          var ye = ne[v];
          if (!wa(e, t, ye)) {
            e.destination = null, v++, ne.splice(0, v);
            return;
          }
        }
        ne.splice(0, v);
        var we = e.completedBoundaries;
        for (v = 0; v < we.length; v++) {
          var ke = we[v];
          if (!bi(e, t, ke)) {
            e.destination = null, v++, we.splice(0, v);
            return;
          }
        }
        we.splice(0, v);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && B("There was still abortable task at the root when we closed. This is a bug in React."), x(t));
      }
    }
    function es(e) {
      m(function() {
        return fo(e);
      });
    }
    function ol(e, t) {
      if (e.status === to) {
        e.status = or, A(t, e.fatalError);
        return;
      }
      if (e.status !== or && e.destination === null) {
        e.destination = t;
        try {
          Sa(e, t);
        } catch (n) {
          di(e, n), gn(e, n);
        }
      }
    }
    function ts(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return Jo(o, e, t);
        }), n.clear(), e.destination !== null && Sa(e, e.destination);
      } catch (o) {
        di(e, o), gn(e, o);
      }
    }
    function po() {
    }
    function ns(e, t, n, o) {
      var v = !1, k = null, M = "", $ = {
        push: function(ke) {
          return ke !== null && (M += ke), !0;
        },
        destroy: function(ke) {
          v = !0, k = ke;
        }
      }, ne = !1;
      function ye() {
        ne = !0;
      }
      var we = Fr(e, gs(n, t ? t.identifierPrefix : void 0), ms(), 1 / 0, po, void 0, ye);
      if (es(we), ts(we, o), ol(we, $), v)
        throw k;
      if (!ne)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return M;
    }
    function sl(e, t) {
      return ns(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function rs(e, t) {
      return ns(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ll() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Si.renderToNodeStream = ll, Si.renderToStaticMarkup = rs, Si.renderToStaticNodeStream = r, Si.renderToString = sl, Si.version = ie;
  }(), Si;
}
var os = {}, Gl;
function ju() {
  if (Gl) return os;
  Gl = 1;
  var ee = {};
  /**
   * @license React
   * react-dom-server.browser.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return ee.NODE_ENV !== "production" && function() {
    var X = Ci, ie = "18.3.1", K = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function oe(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        Z("warn", r, t);
      }
    }
    function B(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        Z("error", r, t);
      }
    }
    function Z(r, e, t) {
      {
        var n = K.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var v = t.map(function(k) {
          return String(k);
        });
        v.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, v);
      }
    }
    function m(r) {
      r();
    }
    var b = 512, g = null, p = 0;
    function _(r) {
      g = new Uint8Array(b), p = 0;
    }
    function x(r, e) {
      if (e.length !== 0) {
        if (e.length > b) {
          p > 0 && (r.enqueue(new Uint8Array(g.buffer, 0, p)), g = new Uint8Array(b), p = 0), r.enqueue(e);
          return;
        }
        var t = e, n = g.length - p;
        n < t.length && (n === 0 ? r.enqueue(g) : (g.set(t.subarray(0, n), p), r.enqueue(g), t = t.subarray(n)), g = new Uint8Array(b), p = 0), g.set(t, p), p += t.length;
      }
    }
    function N(r, e) {
      return x(r, e), !0;
    }
    function T(r) {
      g && p > 0 && (r.enqueue(new Uint8Array(g.buffer, 0, p)), g = null, p = 0);
    }
    function A(r) {
      r.close();
    }
    var y = new TextEncoder();
    function a(r) {
      return y.encode(r);
    }
    function i(r) {
      return y.encode(r);
    }
    function s(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function d(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function c(r) {
      try {
        return l(r), !1;
      } catch {
        return !0;
      }
    }
    function l(r) {
      return "" + r;
    }
    function h(r, e) {
      if (c(r))
        return B("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, d(r)), l(r);
    }
    function C(r, e) {
      if (c(r))
        return B("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, d(r)), l(r);
    }
    function S(r) {
      if (c(r))
        return B("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", d(r)), l(r);
    }
    var w = Object.prototype.hasOwnProperty, I = 0, O = 1, G = 2, F = 3, W = 4, q = 5, H = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", U = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Y = new RegExp("^[" + J + "][" + U + "]*$"), te = {}, se = {};
    function ce(r) {
      return w.call(se, r) ? !0 : w.call(te, r) ? !1 : Y.test(r) ? (se[r] = !0, !0) : (te[r] = !0, B("Invalid attribute name: `%s`", r), !1);
    }
    function ve(r, e, t, n) {
      if (t !== null && t.type === I)
        return !1;
      switch (typeof e) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = r.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function fe(r) {
      return xe.hasOwnProperty(r) ? xe[r] : null;
    }
    function pe(r, e, t, n, o, v, k) {
      this.acceptsBooleans = e === G || e === F || e === W, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = v, this.removeEmptyString = k;
    }
    var xe = {}, Re = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Re.forEach(function(r) {
      xe[r] = new pe(
        r,
        I,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
      var e = r[0], t = r[1];
      xe[e] = new pe(
        e,
        O,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
      xe[r] = new pe(
        r,
        G,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
      xe[r] = new pe(
        r,
        G,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(r) {
      xe[r] = new pe(
        r,
        F,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      xe[r] = new pe(
        r,
        F,
        !0,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      xe[r] = new pe(
        r,
        W,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      xe[r] = new pe(
        r,
        H,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(r) {
      xe[r] = new pe(
        r,
        q,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ee = /[\-\:]([a-z])/g, _e = function(r) {
      return r[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Ee, _e);
      xe[e] = new pe(
        e,
        O,
        !1,
        // mustUseProperty
        r,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Ee, _e);
      xe[e] = new pe(
        e,
        O,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Ee, _e);
      xe[e] = new pe(
        e,
        O,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      xe[r] = new pe(
        r,
        O,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var De = "xlinkHref";
    xe[De] = new pe(
      "xlinkHref",
      O,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      xe[r] = new pe(
        r,
        O,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var He = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function We(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var nt = ["Webkit", "ms", "Moz", "O"];
    Object.keys(He).forEach(function(r) {
      nt.forEach(function(e) {
        He[We(e, r)] = He[r];
      });
    });
    var Ye = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ae(r, e) {
      Ye[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || B("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || B("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function $e(r, e) {
      if (r.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (r) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var at = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Qe = {}, gt = new RegExp("^(aria)-[" + U + "]*$"), It = new RegExp("^(aria)[A-Z][" + U + "]*$");
    function lt(r, e) {
      {
        if (w.call(Qe, e) && Qe[e])
          return !0;
        if (It.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = at.hasOwnProperty(t) ? t : null;
          if (n == null)
            return B("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Qe[e] = !0, !0;
          if (e !== n)
            return B("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), Qe[e] = !0, !0;
        }
        if (gt.test(e)) {
          var o = e.toLowerCase(), v = at.hasOwnProperty(o) ? o : null;
          if (v == null)
            return Qe[e] = !0, !1;
          if (e !== v)
            return B("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, v), Qe[e] = !0, !0;
        }
      }
      return !0;
    }
    function et(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = lt(r, n);
          o || t.push(n);
        }
        var v = t.map(function(k) {
          return "`" + k + "`";
        }).join(", ");
        t.length === 1 ? B("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", v, r) : t.length > 1 && B("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", v, r);
      }
    }
    function Nt(r, e) {
      $e(r, e) || et(r, e);
    }
    var ht = !1;
    function Ft(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !ht && (ht = !0, r === "select" && e.multiple ? B("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : B("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var Dt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, _t = function() {
    };
    {
      var ft = {}, xt = /^on./, Jt = /^on[^A-Z]/, D = new RegExp("^(aria)-[" + U + "]*$"), Q = new RegExp("^(aria)[A-Z][" + U + "]*$");
      _t = function(r, e, t, n) {
        if (w.call(ft, e) && ft[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return B("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ft[e] = !0, !0;
        if (n != null) {
          var v = n.registrationNameDependencies, k = n.possibleRegistrationNames;
          if (v.hasOwnProperty(e))
            return !0;
          var M = k.hasOwnProperty(o) ? k[o] : null;
          if (M != null)
            return B("Invalid event handler property `%s`. Did you mean `%s`?", e, M), ft[e] = !0, !0;
          if (xt.test(e))
            return B("Unknown event handler property `%s`. It will be ignored.", e), ft[e] = !0, !0;
        } else if (xt.test(e))
          return Jt.test(e) && B("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), ft[e] = !0, !0;
        if (D.test(e) || Q.test(e))
          return !0;
        if (o === "innerhtml")
          return B("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ft[e] = !0, !0;
        if (o === "aria")
          return B("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ft[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return B("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), ft[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return B("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), ft[e] = !0, !0;
        var $ = fe(e), ne = $ !== null && $.type === I;
        if (Dt.hasOwnProperty(o)) {
          var ye = Dt[o];
          if (ye !== e)
            return B("Invalid DOM property `%s`. Did you mean `%s`?", e, ye), ft[e] = !0, !0;
        } else if (!ne && e !== o)
          return B("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), ft[e] = !0, !0;
        return typeof t == "boolean" && ve(e, t, $) ? (t ? B('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : B('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), ft[e] = !0, !0) : ne ? !0 : ve(e, t, $) ? (ft[e] = !0, !1) : ((t === "false" || t === "true") && $ !== null && $.type === F && (B("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), ft[e] = !0), !0);
      };
    }
    var me = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var v = _t(r, o, e[o], t);
          v || n.push(o);
        }
        var k = n.map(function(M) {
          return "`" + M + "`";
        }).join(", ");
        n.length === 1 ? B("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", k, r) : n.length > 1 && B("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", k, r);
      }
    };
    function de(r, e, t) {
      $e(r, e) || me(r, e, t);
    }
    var Ce = function() {
    };
    {
      var Ne = /^(?:webkit|moz|o)[A-Z]/, Oe = /^-ms-/, Be = /-(.)/g, Je = /;\s*$/, Xe = {}, Pe = {}, ct = !1, St = !1, Ot = function(r) {
        return r.replace(Be, function(e, t) {
          return t.toUpperCase();
        });
      }, Mt = function(r) {
        Xe.hasOwnProperty(r) && Xe[r] || (Xe[r] = !0, B(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ot(r.replace(Oe, "ms-"))
        ));
      }, mn = function(r) {
        Xe.hasOwnProperty(r) && Xe[r] || (Xe[r] = !0, B("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, Ut = function(r, e) {
        Pe.hasOwnProperty(e) && Pe[e] || (Pe[e] = !0, B(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(Je, "")));
      }, xn = function(r, e) {
        ct || (ct = !0, B("`NaN` is an invalid value for the `%s` css style property.", r));
      }, Et = function(r, e) {
        St || (St = !0, B("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      Ce = function(r, e) {
        r.indexOf("-") > -1 ? Mt(r) : Ne.test(r) ? mn(r) : Je.test(e) && Ut(r, e), typeof e == "number" && (isNaN(e) ? xn(r, e) : isFinite(e) || Et(r, e));
      };
    }
    var En = Ce, Rn = /["'&<>]/;
    function kn(r) {
      S(r);
      var e = "" + r, t = Rn.exec(e);
      if (!t)
        return e;
      var n, o = "", v, k = 0;
      for (v = t.index; v < e.length; v++) {
        switch (e.charCodeAt(v)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        k !== v && (o += e.substring(k, v)), k = v + 1, o += n;
      }
      return k !== v ? o + e.substring(k, v) : o;
    }
    function Ct(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : kn(r);
    }
    var Fn = /([A-Z])/g, Vn = /^ms-/;
    function yn(r) {
      return r.replace(Fn, "-$1").toLowerCase().replace(Vn, "-ms-");
    }
    var V = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, be = !1;
    function Ie(r) {
      !be && V.test(r) && (be = !0, B("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var Fe = Array.isArray;
    function je(r) {
      return Fe(r);
    }
    var rt = i("<script>"), Ve = i("<\/script>"), ze = i('<script src="'), mt = i('<script type="module" src="'), ot = i('" async=""><\/script>');
    function dt(r) {
      return S(r), ("" + r).replace(pt, Qt);
    }
    var pt = /(<\/|<)(s)(cript)/gi, Qt = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function Ht(r, e, t, n, o) {
      var v = r === void 0 ? "" : r, k = e === void 0 ? rt : i('<script nonce="' + Ct(e) + '">'), M = [];
      if (t !== void 0 && M.push(k, a(dt(t)), Ve), n !== void 0)
        for (var $ = 0; $ < n.length; $++)
          M.push(ze, a(Ct(n[$])), ot);
      if (o !== void 0)
        for (var ne = 0; ne < o.length; ne++)
          M.push(mt, a(Ct(o[ne])), ot);
      return {
        bootstrapChunks: M,
        startInlineScript: k,
        placeholderPrefix: i(v + "P:"),
        segmentPrefix: i(v + "S:"),
        boundaryPrefix: v + "B:",
        idPrefix: v,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var it = 0, jt = 1, Wt = 2, $t = 3, An = 4, cn = 5, Kt = 6, Bn = 7;
    function At(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function bn(r) {
      var e = r === "http://www.w3.org/2000/svg" ? Wt : r === "http://www.w3.org/1998/Math/MathML" ? $t : it;
      return At(e, null);
    }
    function Yn(r, e, t) {
      switch (e) {
        case "select":
          return At(jt, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return At(Wt, null);
        case "math":
          return At($t, null);
        case "foreignObject":
          return At(jt, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return At(An, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return At(cn, null);
        case "colgroup":
          return At(Bn, null);
        case "tr":
          return At(Kt, null);
      }
      return r.insertionMode >= An || r.insertionMode === it ? At(jt, null) : r;
    }
    var Gn = null;
    function Vt(r) {
      var e = r.nextSuspenseID++;
      return i(r.boundaryPrefix + e.toString(16));
    }
    function en(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function Yt(r) {
      return Ct(r);
    }
    var Dn = i("<!-- -->");
    function Rt(r, e, t, n) {
      return e === "" ? n : (n && r.push(Dn), r.push(a(Yt(e))), !0);
    }
    function u(r, e, t, n) {
      t && n && r.push(Dn);
    }
    var R = /* @__PURE__ */ new Map();
    function L(r) {
      var e = R.get(r);
      if (e !== void 0)
        return e;
      var t = i(Ct(yn(r)));
      return R.set(r, t), t;
    }
    var z = i(' style="'), le = i(":"), re = i(";");
    function he(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (w.call(t, o)) {
          var v = t[o];
          if (!(v == null || typeof v == "boolean" || v === "")) {
            var k = void 0, M = void 0, $ = o.indexOf("--") === 0;
            $ ? (k = a(Ct(o)), C(v, o), M = a(Ct(("" + v).trim()))) : (En(o, v), k = L(o), typeof v == "number" ? v !== 0 && !w.call(He, o) ? M = a(v + "px") : M = a("" + v) : (C(v, o), M = a(Ct(("" + v).trim())))), n ? (n = !1, r.push(z, k, le, M)) : r.push(re, k, le, M);
          }
        }
      n || r.push(Le);
    }
    var Se = i(" "), Me = i('="'), Le = i('"'), Ue = i('=""');
    function tt(r, e, t, n) {
      switch (t) {
        case "style": {
          he(r, e, n);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        // These shouldn't be set as attributes on generic HTML elements.
        case "innerHTML":
        // Must use dangerouslySetInnerHTML instead.
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = fe(t);
        if (o !== null) {
          switch (typeof n) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var v = o.attributeName, k = a(v);
          switch (o.type) {
            case F:
              n && r.push(Se, k, Ue);
              return;
            case W:
              n === !0 ? r.push(Se, k, Ue) : n === !1 || r.push(Se, k, Me, a(Ct(n)), Le);
              return;
            case q:
              isNaN(n) || r.push(Se, k, Me, a(Ct(n)), Le);
              break;
            case H:
              !isNaN(n) && n >= 1 && r.push(Se, k, Me, a(Ct(n)), Le);
              break;
            default:
              o.sanitizeURL && (h(n, v), n = "" + n, Ie(n)), r.push(Se, k, Me, a(Ct(n)), Le);
          }
        } else if (ce(t)) {
          switch (typeof n) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var M = t.toLowerCase().slice(0, 5);
              if (M !== "data-" && M !== "aria-")
                return;
            }
          }
          r.push(Se, a(t), Me, a(Ct(n)), Le);
        }
      }
    }
    var kt = i(">"), Bt = i("/>");
    function Pt(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (S(n), r.push(a("" + n)));
      }
    }
    var wn = !1, fn = !1, Hn = !1, Sn = !1, Xn = !1, tn = !1, Zn = !1;
    function dr(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = je(t);
          r.multiple && !n ? B("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && B("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function xa(r, e, t) {
      Ae("select", e), dr(e, "value"), dr(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !Hn && (B("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Hn = !0), r.push(Xt("select"));
      var n = null, o = null;
      for (var v in e)
        if (w.call(e, v)) {
          var k = e[v];
          if (k == null)
            continue;
          switch (v) {
            case "children":
              n = k;
              break;
            case "dangerouslySetInnerHTML":
              o = k;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              tt(r, t, v, k);
              break;
          }
        }
      return r.push(kt), Pt(r, o, n), n;
    }
    function Ea(r) {
      var e = "";
      return X.Children.forEach(r, function(t) {
        t != null && (e += t, !Xn && typeof t != "string" && typeof t != "number" && (Xn = !0, B("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var hr = i(' selected=""');
    function dn(r, e, t, n) {
      var o = n.selectedValue;
      r.push(Xt("option"));
      var v = null, k = null, M = null, $ = null;
      for (var ne in e)
        if (w.call(e, ne)) {
          var ye = e[ne];
          if (ye == null)
            continue;
          switch (ne) {
            case "children":
              v = ye;
              break;
            case "selected":
              M = ye, Zn || (B("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Zn = !0);
              break;
            case "dangerouslySetInnerHTML":
              $ = ye;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              k = ye;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              tt(r, t, ne, ye);
              break;
          }
        }
      if (o != null) {
        var we;
        if (k !== null ? (h(k, "value"), we = "" + k) : ($ !== null && (tn || (tn = !0, B("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), we = Ea(v)), je(o))
          for (var ke = 0; ke < o.length; ke++) {
            h(o[ke], "value");
            var qe = "" + o[ke];
            if (qe === we) {
              r.push(hr);
              break;
            }
          }
        else
          h(o, "select.value"), "" + o === we && r.push(hr);
      } else M && r.push(hr);
      return r.push(kt), Pt(r, $, v), v;
    }
    function pn(r, e, t) {
      Ae("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !fn && (B("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), fn = !0), e.value !== void 0 && e.defaultValue !== void 0 && !wn && (B("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), wn = !0), r.push(Xt("input"));
      var n = null, o = null, v = null, k = null;
      for (var M in e)
        if (w.call(e, M)) {
          var $ = e[M];
          if ($ == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              k = $;
              break;
            case "defaultValue":
              o = $;
              break;
            case "checked":
              v = $;
              break;
            case "value":
              n = $;
              break;
            default:
              tt(r, t, M, $);
              break;
          }
        }
      return v !== null ? tt(r, t, "checked", v) : k !== null && tt(r, t, "checked", k), n !== null ? tt(r, t, "value", n) : o !== null && tt(r, t, "value", o), r.push(Bt), null;
    }
    function jr(r, e, t) {
      Ae("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Sn && (B("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Sn = !0), r.push(Xt("textarea"));
      var n = null, o = null, v = null;
      for (var k in e)
        if (w.call(e, k)) {
          var M = e[k];
          if (M == null)
            continue;
          switch (k) {
            case "children":
              v = M;
              break;
            case "value":
              n = M;
              break;
            case "defaultValue":
              o = M;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              tt(r, t, k, M);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(kt), v != null) {
        if (B("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (je(v)) {
          if (v.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          S(v[0]), n = "" + v[0];
        }
        S(v), n = "" + v;
      }
      return typeof n == "string" && n[0] === `
` && r.push(hn), n !== null && (h(n, "value"), r.push(a(Yt("" + n)))), null;
    }
    function pr(r, e, t, n) {
      r.push(Xt(t));
      for (var o in e)
        if (w.call(e, o)) {
          var v = e[o];
          if (v == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              tt(r, n, o, v);
              break;
          }
        }
      return r.push(Bt), null;
    }
    function vt(r, e, t) {
      r.push(Xt("menuitem"));
      for (var n in e)
        if (w.call(e, n)) {
          var o = e[n];
          if (o == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              tt(r, t, n, o);
              break;
          }
        }
      return r.push(kt), null;
    }
    function Jn(r, e, t) {
      r.push(Xt("title"));
      var n = null;
      for (var o in e)
        if (w.call(e, o)) {
          var v = e[o];
          if (v == null)
            continue;
          switch (o) {
            case "children":
              n = v;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              tt(r, t, o, v);
              break;
          }
        }
      r.push(kt);
      {
        var k = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? B("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : k != null && k.$$typeof != null ? B("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : k != null && typeof k != "string" && typeof k != "number" && B("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function jn(r, e, t, n) {
      r.push(Xt(t));
      var o = null, v = null;
      for (var k in e)
        if (w.call(e, k)) {
          var M = e[k];
          if (M == null)
            continue;
          switch (k) {
            case "children":
              o = M;
              break;
            case "dangerouslySetInnerHTML":
              v = M;
              break;
            default:
              tt(r, n, k, M);
              break;
          }
        }
      return r.push(kt), Pt(r, v, o), typeof o == "string" ? (r.push(a(Yt(o))), null) : o;
    }
    function Qn(r, e, t, n) {
      r.push(Xt(t));
      var o = null, v = null;
      for (var k in e)
        if (w.call(e, k)) {
          var M = e[k];
          if (M == null)
            continue;
          switch (k) {
            case "children":
              o = M;
              break;
            case "dangerouslySetInnerHTML":
              v = M;
              break;
            case "style":
              he(r, n, M);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ce(k) && typeof M != "function" && typeof M != "symbol" && r.push(Se, a(k), Me, a(Ct(M)), Le);
              break;
          }
        }
      return r.push(kt), Pt(r, v, o), o;
    }
    var hn = i(`
`);
    function vr(r, e, t, n) {
      r.push(Xt(t));
      var o = null, v = null;
      for (var k in e)
        if (w.call(e, k)) {
          var M = e[k];
          if (M == null)
            continue;
          switch (k) {
            case "children":
              o = M;
              break;
            case "dangerouslySetInnerHTML":
              v = M;
              break;
            default:
              tt(r, n, k, M);
              break;
          }
        }
      if (r.push(kt), v != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof v != "object" || !("__html" in v))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var $ = v.__html;
        $ != null && (typeof $ == "string" && $.length > 0 && $[0] === `
` ? r.push(hn, a($)) : (S($), r.push(a("" + $))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(hn), o;
    }
    var In = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Wr = /* @__PURE__ */ new Map();
    function Xt(r) {
      var e = Wr.get(r);
      if (e === void 0) {
        if (!In.test(r))
          throw new Error("Invalid tag: " + r);
        e = i("<" + r), Wr.set(r, e);
      }
      return e;
    }
    var zr = i("<!DOCTYPE html>");
    function gr(r, e, t, n, o) {
      switch (Nt(e, t), Ft(e, t), de(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && B("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Wt && o.insertionMode !== $t && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && B("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return xa(r, t, n);
        case "option":
          return dn(r, t, n, o);
        case "textarea":
          return jr(r, t, n);
        case "input":
          return pn(r, t, n);
        case "menuitem":
          return vt(r, t, n);
        case "title":
          return Jn(r, t, n);
        // Newline eating tags
        case "listing":
        case "pre":
          return vr(r, t, e, n);
        // Omitted close tags
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return pr(r, t, e, n);
        // These are reserved SVG and MathML elements, that are never custom elements.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return jn(r, t, e, n);
        case "html":
          return o.insertionMode === it && r.push(zr), jn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? jn(r, t, e, n) : Qn(r, t, e, n);
      }
    }
    var Ti = i("</"), mr = i(">");
    function Ra(r, e, t) {
      switch (e) {
        // Omitted close tags
        // TODO: Instead of repeating this switch we could try to pass a flag from above.
        // That would require returning a tuple. Which might be ok if it gets inlined.
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.push(Ti, a(e), mr);
      }
    }
    function ka(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        x(r, t[n]);
      return n < t.length ? N(r, t[n]) : !0;
    }
    var yr = i('<template id="'), xi = i('"></template>');
    function br(r, e, t) {
      x(r, yr), x(r, e.placeholderPrefix);
      var n = a(t.toString(16));
      return x(r, n), N(r, xi);
    }
    var wr = i("<!--$-->"), Aa = i('<!--$?--><template id="'), Kn = i('"></template>'), Ei = i("<!--$!-->"), er = i("<!--/$-->"), Sr = i("<template"), Nn = i('"'), Cr = i(' data-dgst="'), Ri = i(' data-msg="'), ki = i(' data-stck="'), Ai = i("></template>");
    function qr(r, e) {
      return N(r, wr);
    }
    function Gt(r, e, t) {
      if (x(r, Aa), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(r, t), N(r, Kn);
    }
    function Ii(r, e, t, n, o) {
      var v;
      return v = N(r, Ei), x(r, Sr), t && (x(r, Cr), x(r, a(Ct(t))), x(r, Nn)), n && (x(r, Ri), x(r, a(Ct(n))), x(r, Nn)), o && (x(r, ki), x(r, a(Ct(o))), x(r, Nn)), v = N(r, Ai), v;
    }
    function Ur(r, e) {
      return N(r, er);
    }
    function Ni(r, e) {
      return N(r, er);
    }
    function _i(r, e) {
      return N(r, er);
    }
    var Tr = i('<div hidden id="'), Oi = i('">'), Pi = i("</div>"), xr = i('<svg aria-hidden="true" style="display:none" id="'), Er = i('">'), Mi = i("</svg>"), Li = i('<math aria-hidden="true" style="display:none" id="'), Fi = i('">'), $r = i("</math>"), Bi = i('<table hidden id="'), f = i('">'), E = i("</table>"), P = i('<table hidden><tbody id="'), j = i('">'), ue = i("</tbody></table>"), ae = i('<table hidden><tr id="'), ge = i('">'), Te = i("</tr></table>"), Ge = i('<table hidden><colgroup id="'), Ke = i('">'), Ze = i("</colgroup></table>");
    function yt(r, e, t, n) {
      switch (t.insertionMode) {
        case it:
        case jt:
          return x(r, Tr), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, Oi);
        case Wt:
          return x(r, xr), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, Er);
        case $t:
          return x(r, Li), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, Fi);
        case An:
          return x(r, Bi), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, f);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case cn:
          return x(r, P), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, j);
        case Kt:
          return x(r, ae), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, ge);
        case Bn:
          return x(r, Ge), x(r, e.segmentPrefix), x(r, a(n.toString(16))), N(r, Ke);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zt(r, e) {
      switch (e.insertionMode) {
        case it:
        case jt:
          return N(r, Pi);
        case Wt:
          return N(r, Mi);
        case $t:
          return N(r, $r);
        case An:
          return N(r, E);
        case cn:
          return N(r, ue);
        case Kt:
          return N(r, Te);
        case Bn:
          return N(r, Ze);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var nn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", rn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Rr = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Gi = i(nn + ';$RS("'), Vr = i('$RS("'), Ia = i('","'), ps = i('")<\/script>');
    function vs(r, e, t) {
      x(r, e.startInlineScript), e.sentCompleteSegmentFunction ? x(r, Vr) : (e.sentCompleteSegmentFunction = !0, x(r, Gi)), x(r, e.segmentPrefix);
      var n = a(t.toString(16));
      return x(r, n), x(r, Ia), x(r, e.placeholderPrefix), x(r, n), N(r, ps);
    }
    var Na = i(rn + ';$RC("'), gs = i('$RC("'), ms = i('","'), yo = i('")<\/script>');
    function bo(r, e, t, n) {
      if (x(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? x(r, gs) : (e.sentCompleteBoundaryFunction = !0, x(r, Na)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = a(n.toString(16));
      return x(r, t), x(r, ms), x(r, e.segmentPrefix), x(r, o), N(r, yo);
    }
    var ys = i(Rr + ';$RX("'), bs = i('$RX("'), ws = i('"'), Ss = i(")<\/script>"), Zt = i(",");
    function Cs(r, e, t, n, o, v) {
      if (x(r, e.startInlineScript), e.sentClientRenderFunction ? x(r, bs) : (e.sentClientRenderFunction = !0, x(r, ys)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(r, t), x(r, ws), (n || o || v) && (x(r, Zt), x(r, a(Di(n || "")))), (o || v) && (x(r, Zt), x(r, a(Di(o || "")))), v && (x(r, Zt), x(r, a(Di(v)))), N(r, Ss);
    }
    var wo = /[<\u2028\u2029]/g;
    function Di(r) {
      var e = JSON.stringify(r);
      return e.replace(wo, function(t) {
        switch (t) {
          // santizing breaking out of strings and script tags
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var an = Object.assign, So = Symbol.for("react.element"), Hi = Symbol.for("react.portal"), ji = Symbol.for("react.fragment"), Wi = Symbol.for("react.strict_mode"), zi = Symbol.for("react.profiler"), Yr = Symbol.for("react.provider"), Xr = Symbol.for("react.context"), kr = Symbol.for("react.forward_ref"), _a = Symbol.for("react.suspense"), Oa = Symbol.for("react.suspense_list"), Pa = Symbol.for("react.memo"), qi = Symbol.for("react.lazy"), Co = Symbol.for("react.scope"), Ts = Symbol.for("react.debug_trace_mode"), xs = Symbol.for("react.legacy_hidden"), Es = Symbol.for("react.default_value"), Ma = Symbol.iterator, Tt = "@@iterator";
    function Zr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Ma && r[Ma] || r[Tt];
      return typeof e == "function" ? e : null;
    }
    function To(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function La(r) {
      return r.displayName || "Context";
    }
    function wt(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case ji:
          return "Fragment";
        case Hi:
          return "Portal";
        case zi:
          return "Profiler";
        case Wi:
          return "StrictMode";
        case _a:
          return "Suspense";
        case Oa:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Xr:
            var e = r;
            return La(e) + ".Consumer";
          case Yr:
            var t = r;
            return La(t._context) + ".Provider";
          case kr:
            return To(r, r.render, "ForwardRef");
          case Pa:
            var n = r.displayName || null;
            return n !== null ? n : wt(r.type) || "Memo";
          case qi: {
            var o = r, v = o._payload, k = o._init;
            try {
              return wt(k(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ar = 0, Fa, Ba, Ga, Da, xo, Eo, Ui;
    function $i() {
    }
    $i.__reactDisabledLog = !0;
    function Jr() {
      {
        if (Ar === 0) {
          Fa = console.log, Ba = console.info, Ga = console.warn, Da = console.error, xo = console.group, Eo = console.groupCollapsed, Ui = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: $i,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Ar++;
      }
    }
    function Ha() {
      {
        if (Ar--, Ar === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: an({}, r, {
              value: Fa
            }),
            info: an({}, r, {
              value: Ba
            }),
            warn: an({}, r, {
              value: Ga
            }),
            error: an({}, r, {
              value: Da
            }),
            group: an({}, r, {
              value: xo
            }),
            groupCollapsed: an({}, r, {
              value: Eo
            }),
            groupEnd: an({}, r, {
              value: Ui
            })
          });
        }
        Ar < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ir = K.ReactCurrentDispatcher, ja;
    function tr(r, e, t) {
      {
        if (ja === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ja = n && n[1] || "";
          }
        return `
` + ja + r;
      }
    }
    var Wa = !1, Qr;
    {
      var Rs = typeof WeakMap == "function" ? WeakMap : Map;
      Qr = new Rs();
    }
    function Kr(r, e) {
      if (!r || Wa)
        return "";
      {
        var t = Qr.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      Wa = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Ir.current, Ir.current = null, Jr();
      try {
        if (e) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (ut) {
              n = ut;
            }
            Reflect.construct(r, [], k);
          } else {
            try {
              k.call();
            } catch (ut) {
              n = ut;
            }
            r.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ut) {
            n = ut;
          }
          r();
        }
      } catch (ut) {
        if (ut && n && typeof ut.stack == "string") {
          for (var M = ut.stack.split(`
`), $ = n.stack.split(`
`), ne = M.length - 1, ye = $.length - 1; ne >= 1 && ye >= 0 && M[ne] !== $[ye]; )
            ye--;
          for (; ne >= 1 && ye >= 0; ne--, ye--)
            if (M[ne] !== $[ye]) {
              if (ne !== 1 || ye !== 1)
                do
                  if (ne--, ye--, ye < 0 || M[ne] !== $[ye]) {
                    var we = `
` + M[ne].replace(" at new ", " at ");
                    return r.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", r.displayName)), typeof r == "function" && Qr.set(r, we), we;
                  }
                while (ne >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        Wa = !1, Ir.current = v, Ha(), Error.prepareStackTrace = o;
      }
      var ke = r ? r.displayName || r.name : "", qe = ke ? tr(ke) : "";
      return typeof r == "function" && Qr.set(r, qe), qe;
    }
    function Ro(r, e, t) {
      return Kr(r, !0);
    }
    function za(r, e, t) {
      return Kr(r, !1);
    }
    function Vi(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function Yi(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Kr(r, Vi(r));
      if (typeof r == "string")
        return tr(r);
      switch (r) {
        case _a:
          return tr("Suspense");
        case Oa:
          return tr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case kr:
            return za(r.render);
          case Pa:
            return Yi(r.type, e, t);
          case qi: {
            var n = r, o = n._payload, v = n._init;
            try {
              return Yi(v(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Xi = {}, ei = K.ReactDebugCurrentFrame;
    function ti(r) {
      if (r) {
        var e = r._owner, t = Yi(r.type, r._source, e ? e.type : null);
        ei.setExtraStackFrame(t);
      } else
        ei.setExtraStackFrame(null);
    }
    function ko(r, e, t, n, o) {
      {
        var v = Function.call.bind(w);
        for (var k in r)
          if (v(r, k)) {
            var M = void 0;
            try {
              if (typeof r[k] != "function") {
                var $ = Error((n || "React class") + ": " + t + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              M = r[k](e, k, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              M = ne;
            }
            M && !(M instanceof Error) && (ti(o), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, k, typeof M), ti(null)), M instanceof Error && !(M.message in Xi) && (Xi[M.message] = !0, ti(o), B("Failed %s type: %s", t, M.message), ti(null));
          }
      }
    }
    var nr;
    nr = {};
    var Zi = {};
    Object.freeze(Zi);
    function Wn(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return Zi;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var v = wt(r) || "Unknown";
          ko(t, n, "context", v);
        }
        return n;
      }
    }
    function qa(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = wt(e) || "Unknown";
            nr[o] || (nr[o] = !0, B("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var v = r.getChildContext();
        for (var k in v)
          if (!(k in n))
            throw new Error((wt(e) || "Unknown") + '.getChildContext(): key "' + k + '" is not defined in childContextTypes.');
        {
          var M = wt(e) || "Unknown";
          ko(n, v, "child context", M);
        }
        return an({}, t, v);
      }
    }
    var rr;
    rr = {};
    var Ji = null, zn = null;
    function Qi(r) {
      r.context._currentValue = r.parentValue;
    }
    function Ki(r) {
      r.context._currentValue = r.value;
    }
    function ni(r, e) {
      if (r !== e) {
        Qi(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ni(t, n);
        }
        Ki(e);
      }
    }
    function ri(r) {
      Qi(r);
      var e = r.parent;
      e !== null && ri(e);
    }
    function Ao(r) {
      var e = r.parent;
      e !== null && Ao(e), Ki(r);
    }
    function Io(r, e) {
      Qi(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? ni(t, e) : Io(t, e);
    }
    function No(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? ni(r, t) : No(r, t), Ki(e);
    }
    function qn(r) {
      var e = zn, t = r;
      e !== t && (e === null ? Ao(t) : t === null ? ri(e) : e.depth === t.depth ? ni(e, t) : e.depth > t.depth ? Io(e, t) : No(e, t), zn = t);
    }
    function Ua(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== rr && B("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = rr;
      var n = zn, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return zn = o, o;
    }
    function ks(r) {
      var e = zn;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && B("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === Es ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== rr && B("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = rr;
      }
      return zn = e.parent;
    }
    function _o() {
      return zn;
    }
    function Nr(r) {
      var e = r._currentValue;
      return e;
    }
    function ii(r) {
      return r._reactInternals;
    }
    function $a(r, e) {
      r._reactInternals = e;
    }
    var ea = {}, ta = {}, na, _r, ai, oi, ra, si, ia, aa, Va;
    {
      na = /* @__PURE__ */ new Set(), _r = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), ia = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), aa = /* @__PURE__ */ new Set(), Va = /* @__PURE__ */ new Set();
      var Oo = /* @__PURE__ */ new Set();
      si = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          Oo.has(t) || (Oo.add(t), B("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, ra = function(r, e) {
        if (e === void 0) {
          var t = wt(r) || "Component";
          oi.has(t) || (oi.add(t), B("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Po(r, e) {
      {
        var t = r.constructor, n = t && wt(t) || "ReactClass", o = n + "." + e;
        if (ea[o])
          return;
        B(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), ea[o] = !0;
      }
    }
    var Mo = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = ii(r);
        n.queue === null ? Po(r, "setState") : (n.queue.push(e), t != null && si(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = ii(r);
        n.replace = !0, n.queue = [e], t != null && si(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = ii(r);
        t.queue === null ? Po(r, "forceUpdate") : e != null && si(e, "setState");
      }
    };
    function As(r, e, t, n, o) {
      var v = t(o, n);
      ra(e, v);
      var k = v == null ? n : an({}, n, v);
      return k;
    }
    function Lo(r, e, t) {
      var n = Zi, o = r.contextType;
      if ("contextType" in r) {
        var v = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === Xr && o._context === void 0
        );
        if (!v && !Va.has(r)) {
          Va.add(r);
          var k = "";
          o === void 0 ? k = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? k = " However, it is set to a " + typeof o + "." : o.$$typeof === Yr ? k = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? k = " Did you accidentally pass the Context.Consumer instead?" : k = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", B("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(r) || "Component", k);
        }
      }
      typeof o == "object" && o !== null ? n = Nr(o) : n = t;
      var M = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (M.state === null || M.state === void 0)) {
          var $ = wt(r) || "Component";
          na.has($) || (na.add($), B("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, M.state === null ? "null" : "undefined", $));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof M.getSnapshotBeforeUpdate == "function") {
          var ne = null, ye = null, we = null;
          if (typeof M.componentWillMount == "function" && M.componentWillMount.__suppressDeprecationWarning !== !0 ? ne = "componentWillMount" : typeof M.UNSAFE_componentWillMount == "function" && (ne = "UNSAFE_componentWillMount"), typeof M.componentWillReceiveProps == "function" && M.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ye = "componentWillReceiveProps" : typeof M.UNSAFE_componentWillReceiveProps == "function" && (ye = "UNSAFE_componentWillReceiveProps"), typeof M.componentWillUpdate == "function" && M.componentWillUpdate.__suppressDeprecationWarning !== !0 ? we = "componentWillUpdate" : typeof M.UNSAFE_componentWillUpdate == "function" && (we = "UNSAFE_componentWillUpdate"), ne !== null || ye !== null || we !== null) {
            var ke = wt(r) || "Component", qe = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ai.has(ke) || (ai.add(ke), B(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ke, qe, ne !== null ? `
  ` + ne : "", ye !== null ? `
  ` + ye : "", we !== null ? `
  ` + we : ""));
          }
        }
      }
      return M;
    }
    function Is(r, e, t) {
      {
        var n = wt(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? B("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : B("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && B("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && B("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && B("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && B("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && B("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !aa.has(e) && (aa.add(e), B("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && B("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && B("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(e) || "A pure component"), typeof r.componentDidUnmount == "function" && B("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && B("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && B("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && B("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var v = r.props !== t;
        r.props !== void 0 && v && B("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && B("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !_r.has(e) && (_r.add(e), B("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(e))), typeof r.getDerivedStateFromProps == "function" && B("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && B("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && B("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var k = r.state;
        k && (typeof k != "object" || je(k)) && B("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && B("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function Ns(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = wt(r) || "Unknown";
          ta[n] || (oe(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), ta[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (B("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", wt(r) || "Component"), Mo.enqueueReplaceState(e, e.state, null));
    }
    function Ya(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, v = r.replace;
        if (r.queue = null, r.replace = !1, v && o.length === 1)
          e.state = o[0];
        else {
          for (var k = v ? o[0] : e.state, M = !0, $ = v ? 1 : 0; $ < o.length; $++) {
            var ne = o[$], ye = typeof ne == "function" ? ne.call(e, k, t, n) : ne;
            ye != null && (M ? (M = !1, k = an({}, k, ye)) : an(k, ye));
          }
          e.state = k;
        }
      } else
        r.queue = null;
    }
    function li(r, e, t, n) {
      Is(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = Mo, r.props = t, r.state = o;
      var v = {
        queue: [],
        replace: !1
      };
      $a(r, v);
      var k = e.contextType;
      if (typeof k == "object" && k !== null ? r.context = Nr(k) : r.context = n, r.state === t) {
        var M = wt(e) || "Component";
        ia.has(M) || (ia.add(M), B("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", M));
      }
      var $ = e.getDerivedStateFromProps;
      typeof $ == "function" && (r.state = As(r, e, $, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (Ns(e, r), Ya(v, r, t, n));
    }
    var _s = {
      id: 1,
      overflow: ""
    };
    function Os(r) {
      var e = r.overflow, t = r.id, n = t & ~Ps(t);
      return n.toString(32) + e;
    }
    function Xa(r, e, t) {
      var n = r.id, o = r.overflow, v = oa(n) - 1, k = n & ~(1 << v), M = t + 1, $ = oa(e) + v;
      if ($ > 30) {
        var ne = v - v % 5, ye = (1 << ne) - 1, we = (k & ye).toString(32), ke = k >> ne, qe = v - ne, ut = oa(e) + qe, Lt = M << qe, cr = Lt | ke, fr = we + o;
        return {
          id: 1 << ut | cr,
          overflow: fr
        };
      } else {
        var Ln = M << v, Gr = Ln | k, ul = o;
        return {
          id: 1 << $ | Gr,
          overflow: ul
        };
      }
    }
    function oa(r) {
      return 32 - Ms(r);
    }
    function Ps(r) {
      return 1 << oa(r) - 1;
    }
    var Ms = Math.clz32 ? Math.clz32 : Za, Ls = Math.log, _n = Math.LN2;
    function Za(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (Ls(e) / _n | 0) | 0;
    }
    function sa(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var bt = typeof Object.is == "function" ? Object.is : sa, on = null, Or = null, ir = null, st = null, Un = !1, la = !1, sn = 0, ln = null, Cn = 0, Fs = 25, vn = !1, $n;
    function ar() {
      if (on === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return vn && B("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), on;
    }
    function Bs(r, e) {
      if (e === null)
        return B("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $n), !1;
      r.length !== e.length && B(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $n, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!bt(r[t], e[t]))
          return !1;
      return !0;
    }
    function Ja() {
      if (Cn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function ui() {
      return st === null ? ir === null ? (Un = !1, ir = st = Ja()) : (Un = !0, st = ir) : st.next === null ? (Un = !1, st = st.next = Ja()) : (Un = !0, st = st.next), st;
    }
    function Gs(r, e) {
      on = e, Or = r, vn = !1, sn = 0;
    }
    function Ds(r, e, t, n) {
      for (; la; )
        la = !1, sn = 0, Cn += 1, st = null, t = r(e, n);
      return Qa(), t;
    }
    function ua() {
      var r = sn !== 0;
      return r;
    }
    function Qa() {
      vn = !1, on = null, Or = null, la = !1, ir = null, Cn = 0, ln = null, st = null;
    }
    function Fo(r) {
      return vn && B("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Nr(r);
    }
    function Bo(r) {
      return $n = "useContext", ar(), Nr(r);
    }
    function Ka(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function Hs(r) {
      return $n = "useState", Go(
        Ka,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function Go(r, e, t) {
      if (r !== Ka && ($n = "useReducer"), on = ar(), st = ui(), Un) {
        var n = st.queue, o = n.dispatch;
        if (ln !== null) {
          var v = ln.get(n);
          if (v !== void 0) {
            ln.delete(n);
            var k = st.memoizedState, M = v;
            do {
              var $ = M.action;
              vn = !0, k = r(k, $), vn = !1, M = M.next;
            } while (M !== null);
            return st.memoizedState = k, [k, o];
          }
        }
        return [st.memoizedState, o];
      } else {
        vn = !0;
        var ne;
        r === Ka ? ne = typeof e == "function" ? e() : e : ne = t !== void 0 ? t(e) : e, vn = !1, st.memoizedState = ne;
        var ye = st.queue = {
          last: null,
          dispatch: null
        }, we = ye.dispatch = zs.bind(null, on, ye);
        return [st.memoizedState, we];
      }
    }
    function Do(r, e) {
      on = ar(), st = ui();
      var t = e === void 0 ? null : e;
      if (st !== null) {
        var n = st.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (Bs(t, o))
            return n[0];
        }
      }
      vn = !0;
      var v = r();
      return vn = !1, st.memoizedState = [v, t], v;
    }
    function js(r) {
      on = ar(), st = ui();
      var e = st.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), st.memoizedState = t, t;
      } else
        return e;
    }
    function Ws(r, e) {
      $n = "useLayoutEffect", B("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function zs(r, e, t) {
      if (Cn >= Fs)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === on) {
        la = !0;
        var n = {
          action: t,
          next: null
        };
        ln === null && (ln = /* @__PURE__ */ new Map());
        var o = ln.get(e);
        if (o === void 0)
          ln.set(e, n);
        else {
          for (var v = o; v.next !== null; )
            v = v.next;
          v.next = n;
        }
      }
    }
    function qs(r, e) {
      return Do(function() {
        return r;
      }, e);
    }
    function Us(r, e, t) {
      return ar(), e(r._source);
    }
    function $s(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function ca(r) {
      return ar(), r;
    }
    function Ho() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function eo() {
      return ar(), [!1, Ho];
    }
    function jo() {
      var r = Or, e = Os(r.treeContext), t = ci;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = sn++;
      return en(t, e, n);
    }
    function fa() {
    }
    var da = {
      readContext: Fo,
      useContext: Bo,
      useMemo: Do,
      useReducer: Go,
      useRef: js,
      useState: Hs,
      useInsertionEffect: fa,
      useLayoutEffect: Ws,
      useCallback: qs,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: fa,
      // Effects are not run in the server environment.
      useEffect: fa,
      // Debugging effect
      useDebugValue: fa,
      useDeferredValue: ca,
      useTransition: eo,
      useId: jo,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Us,
      useSyncExternalStore: $s
    }, ci = null;
    function ha(r) {
      ci = r;
    }
    function Pr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += tr(t.type, null, null);
              break;
            case 1:
              e += za(t.type, null, null);
              break;
            case 2:
              e += Ro(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var pa = K.ReactCurrentDispatcher, va = K.ReactDebugCurrentFrame, ga = 0, Mr = 1, to = 2, or = 3, Wo = 4, Vs = 0, Lr = 1, Fr = 2, Ys = 12800;
    function Xs(r) {
      return console.error(r), null;
    }
    function sr() {
    }
    function ma(r, e, t, n, o, v, k, M, $) {
      var ne = [], ye = /* @__PURE__ */ new Set(), we = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? Ys : n,
        status: Vs,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ye,
        pingedTasks: ne,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Xs : o,
        onAllReady: v === void 0 ? sr : v,
        onShellReady: k === void 0 ? sr : k,
        onShellError: M === void 0 ? sr : M,
        onFatalError: $ === void 0 ? sr : $
      }, ke = fi(
        we,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ke.parentFlushed = !0;
      var qe = lr(we, r, null, ke, ye, Zi, Ji, _s);
      return ne.push(qe), we;
    }
    function On(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && m(function() {
        return ho(r);
      });
    }
    function no(r, e) {
      return {
        id: Gn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function lr(r, e, t, n, o, v, k, M) {
      r.allPendingTasks++, t === null ? r.pendingRootTasks++ : t.pendingTasks++;
      var $ = {
        node: e,
        ping: function() {
          return On(r, $);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: o,
        legacyContext: v,
        context: k,
        treeContext: M
      };
      return $.componentStack = null, o.add($), $;
    }
    function fi(r, e, t, n, o, v) {
      return {
        status: ga,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: n,
        boundary: t,
        lastPushedText: o,
        textEmbedded: v
      };
    }
    var Pn = null;
    function Tn() {
      return Pn === null || Pn.componentStack === null ? "" : Pr(Pn.componentStack);
    }
    function Mn(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function ya(r, e) {
      r.componentStack = {
        tag: 1,
        parent: r.componentStack,
        type: e
      };
    }
    function di(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function gn(r) {
      r.componentStack === null ? B("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var hi = null;
    function ro(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = hi || Tn();
        hi = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function pi(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function vi(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = Fr, s(r.destination, e)) : (r.status = Lr, r.fatalError = e);
    }
    function zo(r, e, t) {
      Mn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, v = t.fallback, k = t.children, M = /* @__PURE__ */ new Set(), $ = no(r, M), ne = o.chunks.length, ye = fi(
        r,
        ne,
        $,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(ye), o.lastPushedText = !1;
      var we = fi(
        r,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      we.parentFlushed = !0, e.blockedBoundary = $, e.blockedSegment = we;
      try {
        if (Br(r, e, k), u(we.chunks, r.responseState, we.lastPushedText, we.textEmbedded), we.status = Mr, ur($, we), $.pendingTasks === 0) {
          gn(e);
          return;
        }
      } catch (qe) {
        we.status = Wo, $.forceClientRender = !0, $.errorDigest = pi(r, qe), ro($, qe);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var ke = lr(r, v, n, ye, M, e.legacyContext, e.context, e.treeContext);
      ke.componentStack = e.componentStack, r.pingedTasks.push(ke), gn(e);
    }
    function Zs(r, e, t, n) {
      Mn(e, t);
      var o = e.blockedSegment, v = gr(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var k = o.formatContext;
      o.formatContext = Yn(k, t, n), Br(r, e, v), o.formatContext = k, Ra(o.chunks, t), o.lastPushedText = !1, gn(e);
    }
    function qo(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function gi(r, e, t, n, o) {
      var v = {};
      Gs(e, v);
      var k = t(n, o);
      return Ds(t, n, k, o);
    }
    function io(r, e, t, n, o) {
      var v = t.render();
      t.props !== o && (lo || B("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", wt(n) || "a component"), lo = !0);
      {
        var k = n.childContextTypes;
        if (k != null) {
          var M = e.legacyContext, $ = qa(t, n, M, k);
          e.legacyContext = $, qt(r, e, v), e.legacyContext = M;
          return;
        }
      }
      qt(r, e, v);
    }
    function Uo(r, e, t, n) {
      di(e, t);
      var o = Wn(t, e.legacyContext), v = Lo(t, n, o);
      li(v, t, n, o), io(r, e, v, t, n), gn(e);
    }
    var ao = {}, mi = {}, oo = {}, so = {}, lo = !1, $o = {}, Vo = !1, uo = !1, Yo = !1;
    function Js(r, e, t, n) {
      var o;
      if (o = Wn(t, e.legacyContext), ya(e, t), t.prototype && typeof t.prototype.render == "function") {
        var v = wt(t) || "Unknown";
        ao[v] || (B("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", v, v), ao[v] = !0);
      }
      var k = gi(r, e, t, n, o), M = ua();
      if (typeof k == "object" && k !== null && typeof k.render == "function" && k.$$typeof === void 0) {
        var $ = wt(t) || "Unknown";
        mi[$] || (B("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), mi[$] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof k == "object" && k !== null && typeof k.render == "function" && k.$$typeof === void 0
      ) {
        {
          var ne = wt(t) || "Unknown";
          mi[ne] || (B("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ne, ne, ne), mi[ne] = !0);
        }
        li(k, t, n, o), io(r, e, k, t, n);
      } else if (Qs(t), M) {
        var ye = e.treeContext, we = 1, ke = 0;
        e.treeContext = Xa(ye, we, ke);
        try {
          qt(r, e, k);
        } finally {
          e.treeContext = ye;
        }
      } else
        qt(r, e, k);
      gn(e);
    }
    function Qs(r) {
      {
        if (r && r.childContextTypes && B("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = wt(r) || "Unknown";
          $o[e] || (B("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), $o[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = wt(r) || "Unknown";
          so[t] || (B("%s: Function components do not support getDerivedStateFromProps.", t), so[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = wt(r) || "Unknown";
          oo[n] || (B("%s: Function components do not support contextType.", n), oo[n] = !0);
        }
      }
    }
    function Xo(r, e) {
      if (r && r.defaultProps) {
        var t = an({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function Ks(r, e, t, n, o) {
      ya(e, t.render);
      var v = gi(r, e, t.render, n, o), k = ua();
      if (k) {
        var M = e.treeContext, $ = 1, ne = 0;
        e.treeContext = Xa(M, $, ne);
        try {
          qt(r, e, v);
        } finally {
          e.treeContext = M;
        }
      } else
        qt(r, e, v);
      gn(e);
    }
    function co(r, e, t, n, o) {
      var v = t.type, k = Xo(v, n);
      ba(r, e, v, k, o);
    }
    function el(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (Yo || (Yo = !0, B("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && B("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var v = Nr(t), k = o(v);
      qt(r, e, k);
    }
    function un(r, e, t, n) {
      var o = t._context, v = n.value, k = n.children, M;
      M = e.context, e.context = Ua(o, v), qt(r, e, k), e.context = ks(o), M !== e.context && B("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function tl(r, e, t, n, o) {
      Mn(e, "Lazy");
      var v = t._payload, k = t._init, M = k(v), $ = Xo(M, n);
      ba(r, e, M, $, o), gn(e);
    }
    function ba(r, e, t, n, o) {
      if (typeof t == "function")
        if (qo(t)) {
          Uo(r, e, t, n);
          return;
        } else {
          Js(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        Zs(r, e, t, n);
        return;
      }
      switch (t) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case xs:
        case Ts:
        case Wi:
        case zi:
        case ji: {
          qt(r, e, n.children);
          return;
        }
        case Oa: {
          Mn(e, "SuspenseList"), qt(r, e, n.children), gn(e);
          return;
        }
        case Co:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case _a: {
          zo(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case kr: {
            Ks(r, e, t, n, o);
            return;
          }
          case Pa: {
            co(r, e, t, n, o);
            return;
          }
          case Yr: {
            un(r, e, t, n);
            return;
          }
          case Xr: {
            el(r, e, t, n);
            return;
          }
          case qi: {
            tl(r, e, t, n);
            return;
          }
        }
      var v = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + v));
    }
    function nl(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (Vo || B("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Vo = !0), r.entries === e && (uo || B("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uo = !0);
    }
    function qt(r, e, t) {
      try {
        return rl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (hi = hi !== null ? hi : Tn()), n;
      }
    }
    function rl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case So: {
            var n = t, o = n.type, v = n.props, k = n.ref;
            ba(r, e, o, v, k);
            return;
          }
          case Hi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case qi: {
            var M = t, $ = M._payload, ne = M._init, ye;
            try {
              ye = ne($);
            } catch (Ln) {
              throw typeof Ln == "object" && Ln !== null && typeof Ln.then == "function" && Mn(e, "Lazy"), Ln;
            }
            qt(r, e, ye);
            return;
          }
        }
        if (je(t)) {
          Zo(r, e, t);
          return;
        }
        var we = Zr(t);
        if (we) {
          nl(t, we);
          var ke = we.call(t);
          if (ke) {
            var qe = ke.next();
            if (!qe.done) {
              var ut = [];
              do
                ut.push(qe.value), qe = ke.next();
              while (!qe.done);
              Zo(r, e, ut);
              return;
            }
            return;
          }
        }
        var Lt = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (Lt === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Lt) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var cr = e.blockedSegment;
        cr.lastPushedText = Rt(e.blockedSegment.chunks, t, r.responseState, cr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var fr = e.blockedSegment;
        fr.lastPushedText = Rt(e.blockedSegment.chunks, "" + t, r.responseState, fr.lastPushedText);
        return;
      }
      typeof t == "function" && B("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Zo(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var v = e.treeContext;
        e.treeContext = Xa(v, n, o);
        try {
          Br(r, e, t[o]);
        } finally {
          e.treeContext = v;
        }
      }
    }
    function Jo(r, e, t) {
      var n = e.blockedSegment, o = n.chunks.length, v = fi(
        r,
        o,
        null,
        n.formatContext,
        // Adopt the parent segment's leading text embed
        n.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      n.children.push(v), n.lastPushedText = !1;
      var k = lr(r, e.node, e.blockedBoundary, v, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (k.componentStack = e.componentStack.parent);
      var M = k.ping;
      t.then(M, M);
    }
    function Br(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, v = e.context, k = null;
      k = e.componentStack;
      try {
        return qt(r, e, t);
      } catch (M) {
        if (Qa(), typeof M == "object" && M !== null && typeof M.then == "function") {
          Jo(r, e, M), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = v, qn(v), e.componentStack = k;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = v, qn(v), e.componentStack = k, M;
      }
    }
    function Qo(r, e, t, n) {
      var o = pi(r, n);
      if (e === null ? vi(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, ro(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var v = r.onAllReady;
        v();
      }
    }
    function il(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = or, yi(e, t, n);
    }
    function fo(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = or, n === null)
        e.allPendingTasks--, e.status !== Fr && (e.status = Fr, e.destination !== null && A(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var v = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(v);
          {
            var k = "The server did not finish this Suspense boundary: ";
            v && typeof v.message == "string" ? v = k + v.message : v = k + String(v);
            var M = Pn;
            Pn = r;
            try {
              ro(n, v);
            } finally {
              Pn = M;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(ne) {
          return fo(ne, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var $ = e.onAllReady;
          $();
        }
      }
    }
    function ur(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Mr && ur(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function yi(r, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (r.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          r.completedRootSegment = t;
        }
        if (r.pendingRootTasks--, r.pendingRootTasks === 0) {
          r.onShellError = sr;
          var n = r.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Mr && ur(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(il, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Mr) {
          ur(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var v = r.onAllReady;
        v();
      }
    }
    function al(r, e) {
      var t = e.blockedSegment;
      if (t.status === ga) {
        qn(e.context);
        var n = null;
        n = Pn, Pn = e;
        try {
          qt(r, e, e.node), u(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Mr, yi(r, e.blockedBoundary, t);
        } catch (v) {
          if (Qa(), typeof v == "object" && v !== null && typeof v.then == "function") {
            var o = e.ping;
            v.then(o, o);
          } else
            e.abortSet.delete(e), t.status = Wo, Qo(r, e.blockedBoundary, t, v);
        } finally {
          Pn = n;
        }
      }
    }
    function ho(r) {
      if (r.status !== Fr) {
        var e = _o(), t = pa.current;
        pa.current = da;
        var n;
        n = va.getCurrentStack, va.getCurrentStack = Tn;
        var o = ci;
        ha(r.responseState);
        try {
          var v = r.pingedTasks, k;
          for (k = 0; k < v.length; k++) {
            var M = v[k];
            al(r, M);
          }
          v.splice(0, k), r.destination !== null && po(r, r.destination);
        } catch ($) {
          pi(r, $), vi(r, $);
        } finally {
          ha(o), pa.current = t, va.getCurrentStack = n, t === da && qn(e);
        }
      }
    }
    function bi(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case ga: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, br(e, r.responseState, n);
        }
        case Mr: {
          t.status = to;
          for (var o = !0, v = t.chunks, k = 0, M = t.children, $ = 0; $ < M.length; $++) {
            for (var ne = M[$]; k < ne.index; k++)
              x(e, v[k]);
            o = wa(r, e, ne);
          }
          for (; k < v.length - 1; k++)
            x(e, v[k]);
          return k < v.length && (o = N(e, v[k])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function wa(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return bi(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return Ii(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), bi(r, e, t), _i(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = Vt(r.responseState);
        return Gt(e, r.responseState, o), bi(r, e, t), Ni(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Gt(e, r.responseState, n.id), bi(r, e, t), Ni(e, r.responseState);
        qr(e, r.responseState);
        var v = n.completedSegments;
        if (v.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var k = v[0];
        return wa(r, e, k), Ur(e, r.responseState);
      }
    }
    function Ko(r, e, t) {
      return Cs(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Sa(r, e, t) {
      return yt(e, r.responseState, t.formatContext, t.id), wa(r, e, t), zt(e, t.formatContext);
    }
    function es(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var v = n[o];
        ts(r, e, t, v);
      }
      return n.length = 0, bo(e, r.responseState, t.id, t.rootSegmentID);
    }
    function ol(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var v = n[o];
        if (!ts(r, e, t, v))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function ts(r, e, t, n) {
      if (n.status === to)
        return !0;
      var o = n.id;
      if (o === -1) {
        var v = n.id = t.rootSegmentID;
        if (v === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Sa(r, e, n);
      } else
        return Sa(r, e, n), vs(e, r.responseState, o);
    }
    function po(r, e) {
      _();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (wa(r, e, t), r.completedRootSegment = null, ka(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var v = n[o];
          Ko(r, e, v);
        }
        n.splice(0, o);
        var k = r.completedBoundaries;
        for (o = 0; o < k.length; o++) {
          var M = k[o];
          es(r, e, M);
        }
        k.splice(0, o), T(e), _(e);
        var $ = r.partialBoundaries;
        for (o = 0; o < $.length; o++) {
          var ne = $[o];
          if (!ol(r, e, ne)) {
            r.destination = null, o++, $.splice(0, o);
            return;
          }
        }
        $.splice(0, o);
        var ye = r.completedBoundaries;
        for (o = 0; o < ye.length; o++) {
          var we = ye[o];
          es(r, e, we);
        }
        ye.splice(0, o);
      } finally {
        T(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && B("There was still abortable task at the root when we closed. This is a bug in React."), A(e));
      }
    }
    function ns(r) {
      m(function() {
        return ho(r);
      });
    }
    function sl(r, e) {
      if (r.status === Lr) {
        r.status = Fr, s(e, r.fatalError);
        return;
      }
      if (r.status !== Fr && r.destination === null) {
        r.destination = e;
        try {
          po(r, e);
        } catch (t) {
          pi(r, t), vi(r, t);
        }
      }
    }
    function rs(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return fo(n, r, e);
        }), t.clear(), r.destination !== null && po(r, r.destination);
      } catch (n) {
        pi(r, n), vi(r, n);
      }
    }
    function ll(r, e) {
      return new Promise(function(t, n) {
        var o, v, k = new Promise(function(ke, qe) {
          v = ke, o = qe;
        });
        function M() {
          var ke = new ReadableStream(
            {
              type: "bytes",
              pull: function(qe) {
                sl(ne, qe);
              },
              cancel: function(qe) {
                rs(ne);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          ke.allReady = k, t(ke);
        }
        function $(ke) {
          k.catch(function() {
          }), n(ke);
        }
        var ne = ma(r, Ht(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), bn(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, v, M, $, o);
        if (e && e.signal) {
          var ye = e.signal, we = function() {
            rs(ne, ye.reason), ye.removeEventListener("abort", we);
          };
          ye.addEventListener("abort", we);
        }
        ns(ne);
      });
    }
    os.renderToReadableStream = ll, os.version = ie;
  }(), os;
}
var Dl;
function Wu() {
  if (Dl) return Dr;
  Dl = 1;
  var ee = {}, X, ie;
  return ee.NODE_ENV === "production" ? (X = Gu(), ie = Du()) : (X = Hu(), ie = ju()), Dr.version = X.version, Dr.renderToString = X.renderToString, Dr.renderToStaticMarkup = X.renderToStaticMarkup, Dr.renderToNodeStream = X.renderToNodeStream, Dr.renderToStaticNodeStream = X.renderToStaticNodeStream, Dr.renderToReadableStream = ie.renderToReadableStream, Dr;
}
var Rl = function(ee, X) {
  return Rl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(ie, K) {
    ie.__proto__ = K;
  } || function(ie, K) {
    for (var oe in K) Object.prototype.hasOwnProperty.call(K, oe) && (ie[oe] = K[oe]);
  }, Rl(ee, X);
};
function du(ee, X) {
  if (typeof X != "function" && X !== null)
    throw new TypeError("Class extends value " + String(X) + " is not a constructor or null");
  Rl(ee, X);
  function ie() {
    this.constructor = ee;
  }
  ee.prototype = X === null ? Object.create(X) : (ie.prototype = X.prototype, new ie());
}
var Ta = function() {
  return Ta = Object.assign || function(X) {
    for (var ie, K = 1, oe = arguments.length; K < oe; K++) {
      ie = arguments[K];
      for (var B in ie) Object.prototype.hasOwnProperty.call(ie, B) && (X[B] = ie[B]);
    }
    return X;
  }, Ta.apply(this, arguments);
};
function hu(ee, X) {
  var ie = {};
  for (var K in ee) Object.prototype.hasOwnProperty.call(ee, K) && X.indexOf(K) < 0 && (ie[K] = ee[K]);
  if (ee != null && typeof Object.getOwnPropertySymbols == "function")
    for (var oe = 0, K = Object.getOwnPropertySymbols(ee); oe < K.length; oe++)
      X.indexOf(K[oe]) < 0 && Object.prototype.propertyIsEnumerable.call(ee, K[oe]) && (ie[K[oe]] = ee[K[oe]]);
  return ie;
}
var ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zu(ee) {
  var X = typeof ee;
  return ee != null && (X == "object" || X == "function");
}
var Al = zu, qu = typeof ss == "object" && ss && ss.Object === Object && ss, Uu = qu, $u = Uu, Vu = typeof self == "object" && self && self.Object === Object && self, Yu = $u || Vu || Function("return this")(), pu = Yu, Xu = pu, Zu = function() {
  return Xu.Date.now();
}, Ju = Zu, Qu = /\s/;
function Ku(ee) {
  for (var X = ee.length; X-- && Qu.test(ee.charAt(X)); )
    ;
  return X;
}
var ec = Ku, tc = ec, nc = /^\s+/;
function rc(ee) {
  return ee && ee.slice(0, tc(ee) + 1).replace(nc, "");
}
var ic = rc, ac = pu, oc = ac.Symbol, vu = oc, Hl = vu, gu = Object.prototype, sc = gu.hasOwnProperty, lc = gu.toString, mo = Hl ? Hl.toStringTag : void 0;
function uc(ee) {
  var X = sc.call(ee, mo), ie = ee[mo];
  try {
    ee[mo] = void 0;
    var K = !0;
  } catch {
  }
  var oe = lc.call(ee);
  return K && (X ? ee[mo] = ie : delete ee[mo]), oe;
}
var cc = uc, fc = Object.prototype, dc = fc.toString;
function hc(ee) {
  return dc.call(ee);
}
var pc = hc, jl = vu, vc = cc, gc = pc, mc = "[object Null]", yc = "[object Undefined]", Wl = jl ? jl.toStringTag : void 0;
function bc(ee) {
  return ee == null ? ee === void 0 ? yc : mc : Wl && Wl in Object(ee) ? vc(ee) : gc(ee);
}
var wc = bc;
function Sc(ee) {
  return ee != null && typeof ee == "object";
}
var Cc = Sc, Tc = wc, xc = Cc, Ec = "[object Symbol]";
function Rc(ee) {
  return typeof ee == "symbol" || xc(ee) && Tc(ee) == Ec;
}
var kc = Rc, Ac = ic, zl = Al, Ic = kc, ql = NaN, Nc = /^[-+]0x[0-9a-f]+$/i, _c = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, Pc = parseInt;
function Mc(ee) {
  if (typeof ee == "number")
    return ee;
  if (Ic(ee))
    return ql;
  if (zl(ee)) {
    var X = typeof ee.valueOf == "function" ? ee.valueOf() : ee;
    ee = zl(X) ? X + "" : X;
  }
  if (typeof ee != "string")
    return ee === 0 ? ee : +ee;
  ee = Ac(ee);
  var ie = _c.test(ee);
  return ie || Oc.test(ee) ? Pc(ee.slice(2), ie ? 2 : 8) : Nc.test(ee) ? ql : +ee;
}
var Lc = Mc, Fc = Al, dl = Ju, Ul = Lc, Bc = "Expected a function", Gc = Math.max, Dc = Math.min;
function Hc(ee, X, ie) {
  var K, oe, B, Z, m, b, g = 0, p = !1, _ = !1, x = !0;
  if (typeof ee != "function")
    throw new TypeError(Bc);
  X = Ul(X) || 0, Fc(ie) && (p = !!ie.leading, _ = "maxWait" in ie, B = _ ? Gc(Ul(ie.maxWait) || 0, X) : B, x = "trailing" in ie ? !!ie.trailing : x);
  function N(l) {
    var h = K, C = oe;
    return K = oe = void 0, g = l, Z = ee.apply(C, h), Z;
  }
  function T(l) {
    return g = l, m = setTimeout(a, X), p ? N(l) : Z;
  }
  function A(l) {
    var h = l - b, C = l - g, S = X - h;
    return _ ? Dc(S, B - C) : S;
  }
  function y(l) {
    var h = l - b, C = l - g;
    return b === void 0 || h >= X || h < 0 || _ && C >= B;
  }
  function a() {
    var l = dl();
    if (y(l))
      return i(l);
    m = setTimeout(a, A(l));
  }
  function i(l) {
    return m = void 0, x && K ? N(l) : (K = oe = void 0, Z);
  }
  function s() {
    m !== void 0 && clearTimeout(m), g = 0, K = b = oe = m = void 0;
  }
  function d() {
    return m === void 0 ? Z : i(dl());
  }
  function c() {
    var l = dl(), h = y(l);
    if (K = arguments, oe = this, b = l, h) {
      if (m === void 0)
        return T(b);
      if (_)
        return clearTimeout(m), m = setTimeout(a, X), N(b);
    }
    return m === void 0 && (m = setTimeout(a, X)), Z;
  }
  return c.cancel = s, c.flush = d, c;
}
var mu = Hc, jc = mu, Wc = Al, zc = "Expected a function";
function qc(ee, X, ie) {
  var K = !0, oe = !0;
  if (typeof ee != "function")
    throw new TypeError(zc);
  return Wc(ie) && (K = "leading" in ie ? !!ie.leading : K, oe = "trailing" in ie ? !!ie.trailing : oe), jc(ee, X, {
    leading: K,
    maxWait: X,
    trailing: oe
  });
}
var Uc = qc, yu = function(ee, X, ie, K) {
  switch (X) {
    case "debounce":
      return mu(ee, ie, K);
    case "throttle":
      return Uc(ee, ie, K);
    default:
      return ee;
  }
}, kl = function(ee) {
  return typeof ee == "function";
}, Hr = function() {
  return typeof window > "u";
}, $l = function(ee) {
  return ee instanceof Element || ee instanceof HTMLDocument;
}, bu = function(ee, X, ie, K) {
  return function(oe) {
    var B = oe.width, Z = oe.height;
    X(function(m) {
      return m.width === B && m.height === Z || m.width === B && !K || m.height === Z && !ie ? m : (ee && kl(ee) && ee(B, Z), { width: B, height: Z });
    });
  };
}, wu = (
  /** @class */
  function(ee) {
    du(X, ee);
    function X(ie) {
      var K = ee.call(this, ie) || this;
      K.cancelHandler = function() {
        K.resizeHandler && K.resizeHandler.cancel && (K.resizeHandler.cancel(), K.resizeHandler = null);
      }, K.attachObserver = function() {
        var g = K.props, p = g.targetRef, _ = g.observerOptions;
        if (!Hr()) {
          p && p.current && (K.targetRef.current = p.current);
          var x = K.getElement();
          x && (K.observableElement && K.observableElement === x || (K.observableElement = x, K.resizeObserver.observe(x, _)));
        }
      }, K.getElement = function() {
        var g = K.props, p = g.querySelector, _ = g.targetDomEl;
        if (Hr())
          return null;
        if (p)
          return document.querySelector(p);
        if (_ && $l(_))
          return _;
        if (K.targetRef && $l(K.targetRef.current))
          return K.targetRef.current;
        var x = _u(K);
        if (!x)
          return null;
        var N = K.getRenderType();
        switch (N) {
          case "renderProp":
            return x;
          case "childFunction":
            return x;
          case "child":
            return x;
          case "childArray":
            return x;
          default:
            return x.parentElement;
        }
      }, K.createResizeHandler = function(g) {
        var p = K.props, _ = p.handleWidth, x = _ === void 0 ? !0 : _, N = p.handleHeight, T = N === void 0 ? !0 : N, A = p.onResize;
        if (!(!x && !T)) {
          var y = bu(A, K.setState.bind(K), x, T);
          g.forEach(function(a) {
            var i = a && a.contentRect || {}, s = i.width, d = i.height, c = !K.skipOnMount && !Hr();
            c && y({ width: s, height: d }), K.skipOnMount = !1;
          });
        }
      }, K.getRenderType = function() {
        var g = K.props, p = g.render, _ = g.children;
        return kl(p) ? "renderProp" : kl(_) ? "childFunction" : Au(_) ? "child" : Array.isArray(_) ? "childArray" : "parent";
      };
      var oe = ie.skipOnMount, B = ie.refreshMode, Z = ie.refreshRate, m = Z === void 0 ? 1e3 : Z, b = ie.refreshOptions;
      return K.state = {
        width: void 0,
        height: void 0
      }, K.skipOnMount = oe, K.targetRef = cu(), K.observableElement = null, Hr() || (K.resizeHandler = yu(K.createResizeHandler, B, m, b), K.resizeObserver = new window.ResizeObserver(K.resizeHandler)), K;
    }
    return X.prototype.componentDidMount = function() {
      this.attachObserver();
    }, X.prototype.componentDidUpdate = function() {
      this.attachObserver();
    }, X.prototype.componentWillUnmount = function() {
      Hr() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler());
    }, X.prototype.render = function() {
      var ie = this.props, K = ie.render, oe = ie.children, B = ie.nodeType, Z = B === void 0 ? "div" : B, m = this.state, b = m.width, g = m.height, p = { width: b, height: g, targetRef: this.targetRef }, _ = this.getRenderType(), x;
      switch (_) {
        case "renderProp":
          return K && K(p);
        case "childFunction":
          return x = oe, x(p);
        case "child":
          if (x = oe, x.type && typeof x.type == "string") {
            p.targetRef;
            var N = hu(p, ["targetRef"]);
            return cl(x, N);
          }
          return cl(x, p);
        case "childArray":
          return x = oe, x.map(function(T) {
            return !!T && cl(T, p);
          });
        default:
          return cs.createElement(Z, null);
      }
    }, X;
  }(Nu)
);
function $c(ee, X) {
  X === void 0 && (X = {});
  var ie = (
    /** @class */
    function(B) {
      du(Z, B);
      function Z() {
        var m = B !== null && B.apply(this, arguments) || this;
        return m.ref = cu(), m;
      }
      return Z.prototype.render = function() {
        var m = this.props, b = m.forwardedRef, g = hu(m, ["forwardedRef"]), p = b ?? this.ref;
        return cs.createElement(
          wu,
          Ta({}, X, { targetRef: p }),
          cs.createElement(ee, Ta({ targetRef: p }, g))
        );
      }, Z;
    }(Iu)
  );
  function K(B, Z) {
    return cs.createElement(ie, Ta({}, B, { forwardedRef: Z }));
  }
  var oe = ee.displayName || ee.name;
  return K.displayName = "withResizeDetector(".concat(oe, ")"), ku(K);
}
var Vc = Hr() ? Eu : Ru;
function Yc(ee) {
  ee === void 0 && (ee = {});
  var X = ee.skipOnMount, ie = X === void 0 ? !1 : X, K = ee.refreshMode, oe = ee.refreshRate, B = oe === void 0 ? 1e3 : oe, Z = ee.refreshOptions, m = ee.handleWidth, b = m === void 0 ? !0 : m, g = ee.handleHeight, p = g === void 0 ? !0 : g, _ = ee.targetRef, x = ee.observerOptions, N = ee.onResize, T = fl(ie), A = fl(null), y = _ ?? A, a = fl(), i = xu({
    width: void 0,
    height: void 0
  }), s = i[0], d = i[1];
  return Vc(function() {
    if (!Hr()) {
      var c = bu(N, d, b, p), l = function(C) {
        !b && !p || C.forEach(function(S) {
          var w = S && S.contentRect || {}, I = w.width, O = w.height, G = !T.current && !Hr();
          G && c({ width: I, height: O }), T.current = !1;
        });
      };
      a.current = yu(l, K, B, Z);
      var h = new window.ResizeObserver(a.current);
      return y.current && h.observe(y.current, x), function() {
        h.disconnect();
        var C = a.current;
        C && C.cancel && C.cancel();
      };
    }
  }, [K, B, Z, b, p, N, x, y.current]), Ta({ ref: y }, s);
}
const Xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wu,
  useResizeDetector: Yc,
  withResizeDetector: $c
}, Symbol.toStringTag, { value: "Module" })), Zc = /* @__PURE__ */ Ou(Xc);
var hs = { exports: {} }, ls = { exports: {} }, Vl;
function Jc() {
  return Vl || (Vl = 1, function(ee, X) {
    var ie = function() {
      if (typeof self < "u")
        return self;
      if (typeof window < "u")
        return window;
      if (typeof Nl < "u")
        return Nl;
      throw new Error("unable to locate global object");
    }, K = ie();
    ee.exports = X = K.fetch, K.fetch && (X.default = K.fetch.bind(K)), X.Headers = K.Headers, X.Request = K.Request, X.Response = K.Response;
  }(ls, ls.exports)), ls.exports;
}
var hl = {}, pl = {}, Yl;
function Il() {
  return Yl || (Yl = 1, function(ee) {
    const X = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ie = X + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", K = "[" + X + "][" + ie + "]*", oe = new RegExp("^" + K + "$"), B = function(m, b) {
      const g = [];
      let p = b.exec(m);
      for (; p; ) {
        const _ = [];
        _.startIndex = b.lastIndex - p[0].length;
        const x = p.length;
        for (let N = 0; N < x; N++)
          _.push(p[N]);
        g.push(_), p = b.exec(m);
      }
      return g;
    }, Z = function(m) {
      const b = oe.exec(m);
      return !(b === null || typeof b > "u");
    };
    ee.isExist = function(m) {
      return typeof m < "u";
    }, ee.isEmptyObject = function(m) {
      return Object.keys(m).length === 0;
    }, ee.merge = function(m, b, g) {
      if (b) {
        const p = Object.keys(b), _ = p.length;
        for (let x = 0; x < _; x++)
          g === "strict" ? m[p[x]] = [b[p[x]]] : m[p[x]] = b[p[x]];
      }
    }, ee.getValue = function(m) {
      return ee.isExist(m) ? m : "";
    }, ee.isName = Z, ee.getAllMatches = B, ee.nameRegexp = K;
  }(pl)), pl;
}
var Xl;
function Su() {
  if (Xl) return hl;
  Xl = 1;
  const ee = Il(), X = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  hl.validate = function(a, i) {
    i = Object.assign({}, X, i);
    const s = [];
    let d = !1, c = !1;
    a[0] === "\uFEFF" && (a = a.substr(1));
    for (let l = 0; l < a.length; l++)
      if (a[l] === "<" && a[l + 1] === "?") {
        if (l += 2, l = K(a, l), l.err) return l;
      } else if (a[l] === "<") {
        let h = l;
        if (l++, a[l] === "!") {
          l = oe(a, l);
          continue;
        } else {
          let C = !1;
          a[l] === "/" && (C = !0, l++);
          let S = "";
          for (; l < a.length && a[l] !== ">" && a[l] !== " " && a[l] !== "	" && a[l] !== `
` && a[l] !== "\r"; l++)
            S += a[l];
          if (S = S.trim(), S[S.length - 1] === "/" && (S = S.substring(0, S.length - 1), l--), !T(S)) {
            let O;
            return S.trim().length === 0 ? O = "Invalid space after '<'." : O = "Tag '" + S + "' is an invalid name.", x("InvalidTag", O, A(a, l));
          }
          const w = m(a, l);
          if (w === !1)
            return x("InvalidAttr", "Attributes for '" + S + "' have open quote.", A(a, l));
          let I = w.value;
          if (l = w.index, I[I.length - 1] === "/") {
            const O = l - I.length;
            I = I.substring(0, I.length - 1);
            const G = g(I, i);
            if (G === !0)
              d = !0;
            else
              return x(G.err.code, G.err.msg, A(a, O + G.err.line));
          } else if (C)
            if (w.tagClosed) {
              if (I.trim().length > 0)
                return x("InvalidTag", "Closing tag '" + S + "' can't have attributes or invalid starting.", A(a, h));
              if (s.length === 0)
                return x("InvalidTag", "Closing tag '" + S + "' has not been opened.", A(a, h));
              {
                const O = s.pop();
                if (S !== O.tagName) {
                  let G = A(a, O.tagStartPos);
                  return x(
                    "InvalidTag",
                    "Expected closing tag '" + O.tagName + "' (opened in line " + G.line + ", col " + G.col + ") instead of closing tag '" + S + "'.",
                    A(a, h)
                  );
                }
                s.length == 0 && (c = !0);
              }
            } else return x("InvalidTag", "Closing tag '" + S + "' doesn't have proper closing.", A(a, l));
          else {
            const O = g(I, i);
            if (O !== !0)
              return x(O.err.code, O.err.msg, A(a, l - I.length + O.err.line));
            if (c === !0)
              return x("InvalidXml", "Multiple possible root nodes found.", A(a, l));
            i.unpairedTags.indexOf(S) !== -1 || s.push({ tagName: S, tagStartPos: h }), d = !0;
          }
          for (l++; l < a.length; l++)
            if (a[l] === "<")
              if (a[l + 1] === "!") {
                l++, l = oe(a, l);
                continue;
              } else if (a[l + 1] === "?") {
                if (l = K(a, ++l), l.err) return l;
              } else
                break;
            else if (a[l] === "&") {
              const O = _(a, l);
              if (O == -1)
                return x("InvalidChar", "char '&' is not expected.", A(a, l));
              l = O;
            } else if (c === !0 && !ie(a[l]))
              return x("InvalidXml", "Extra text at the end", A(a, l));
          a[l] === "<" && l--;
        }
      } else {
        if (ie(a[l]))
          continue;
        return x("InvalidChar", "char '" + a[l] + "' is not expected.", A(a, l));
      }
    if (d) {
      if (s.length == 1)
        return x("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", A(a, s[0].tagStartPos));
      if (s.length > 0)
        return x("InvalidXml", "Invalid '" + JSON.stringify(s.map((l) => l.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return x("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function ie(a) {
    return a === " " || a === "	" || a === `
` || a === "\r";
  }
  function K(a, i) {
    const s = i;
    for (; i < a.length; i++)
      if (a[i] == "?" || a[i] == " ") {
        const d = a.substr(s, i - s);
        if (i > 5 && d === "xml")
          return x("InvalidXml", "XML declaration allowed only at the start of the document.", A(a, i));
        if (a[i] == "?" && a[i + 1] == ">") {
          i++;
          break;
        } else
          continue;
      }
    return i;
  }
  function oe(a, i) {
    if (a.length > i + 5 && a[i + 1] === "-" && a[i + 2] === "-") {
      for (i += 3; i < a.length; i++)
        if (a[i] === "-" && a[i + 1] === "-" && a[i + 2] === ">") {
          i += 2;
          break;
        }
    } else if (a.length > i + 8 && a[i + 1] === "D" && a[i + 2] === "O" && a[i + 3] === "C" && a[i + 4] === "T" && a[i + 5] === "Y" && a[i + 6] === "P" && a[i + 7] === "E") {
      let s = 1;
      for (i += 8; i < a.length; i++)
        if (a[i] === "<")
          s++;
        else if (a[i] === ">" && (s--, s === 0))
          break;
    } else if (a.length > i + 9 && a[i + 1] === "[" && a[i + 2] === "C" && a[i + 3] === "D" && a[i + 4] === "A" && a[i + 5] === "T" && a[i + 6] === "A" && a[i + 7] === "[") {
      for (i += 8; i < a.length; i++)
        if (a[i] === "]" && a[i + 1] === "]" && a[i + 2] === ">") {
          i += 2;
          break;
        }
    }
    return i;
  }
  const B = '"', Z = "'";
  function m(a, i) {
    let s = "", d = "", c = !1;
    for (; i < a.length; i++) {
      if (a[i] === B || a[i] === Z)
        d === "" ? d = a[i] : d !== a[i] || (d = "");
      else if (a[i] === ">" && d === "") {
        c = !0;
        break;
      }
      s += a[i];
    }
    return d !== "" ? !1 : {
      value: s,
      index: i,
      tagClosed: c
    };
  }
  const b = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function g(a, i) {
    const s = ee.getAllMatches(a, b), d = {};
    for (let c = 0; c < s.length; c++) {
      if (s[c][1].length === 0)
        return x("InvalidAttr", "Attribute '" + s[c][2] + "' has no space in starting.", y(s[c]));
      if (s[c][3] !== void 0 && s[c][4] === void 0)
        return x("InvalidAttr", "Attribute '" + s[c][2] + "' is without value.", y(s[c]));
      if (s[c][3] === void 0 && !i.allowBooleanAttributes)
        return x("InvalidAttr", "boolean attribute '" + s[c][2] + "' is not allowed.", y(s[c]));
      const l = s[c][2];
      if (!N(l))
        return x("InvalidAttr", "Attribute '" + l + "' is an invalid name.", y(s[c]));
      if (!d.hasOwnProperty(l))
        d[l] = 1;
      else
        return x("InvalidAttr", "Attribute '" + l + "' is repeated.", y(s[c]));
    }
    return !0;
  }
  function p(a, i) {
    let s = /\d/;
    for (a[i] === "x" && (i++, s = /[\da-fA-F]/); i < a.length; i++) {
      if (a[i] === ";")
        return i;
      if (!a[i].match(s))
        break;
    }
    return -1;
  }
  function _(a, i) {
    if (i++, a[i] === ";")
      return -1;
    if (a[i] === "#")
      return i++, p(a, i);
    let s = 0;
    for (; i < a.length; i++, s++)
      if (!(a[i].match(/\w/) && s < 20)) {
        if (a[i] === ";")
          break;
        return -1;
      }
    return i;
  }
  function x(a, i, s) {
    return {
      err: {
        code: a,
        msg: i,
        line: s.line || s,
        col: s.col
      }
    };
  }
  function N(a) {
    return ee.isName(a);
  }
  function T(a) {
    return ee.isName(a);
  }
  function A(a, i) {
    const s = a.substring(0, i).split(/\r?\n/);
    return {
      line: s.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: s[s.length - 1].length + 1
    };
  }
  function y(a) {
    return a.startIndex + a[1].length;
  }
  return hl;
}
var us = {}, Zl;
function Qc() {
  if (Zl) return us;
  Zl = 1;
  const ee = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    // remove NS from tag name or attribute name if true
    allowBooleanAttributes: !1,
    //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    //Trim string values of tag and attributes
    cdataPropName: !1,
    numberParseOptions: {
      hex: !0,
      leadingZeros: !0,
      eNotation: !0
    },
    tagValueProcessor: function(ie, K) {
      return K;
    },
    attributeValueProcessor: function(ie, K) {
      return K;
    },
    stopNodes: [],
    //nested tags will not be parsed even for errors
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(ie, K, oe) {
      return ie;
    }
    // skipEmptyListItem: false
  }, X = function(ie) {
    return Object.assign({}, ee, ie);
  };
  return us.buildOptions = X, us.defaultOptions = ee, us;
}
var vl, Jl;
function Kc() {
  if (Jl) return vl;
  Jl = 1;
  class ee {
    constructor(ie) {
      this.tagname = ie, this.child = [], this[":@"] = {};
    }
    add(ie, K) {
      ie === "__proto__" && (ie = "#__proto__"), this.child.push({ [ie]: K });
    }
    addChild(ie) {
      ie.tagname === "__proto__" && (ie.tagname = "#__proto__"), ie[":@"] && Object.keys(ie[":@"]).length > 0 ? this.child.push({ [ie.tagname]: ie.child, ":@": ie[":@"] }) : this.child.push({ [ie.tagname]: ie.child });
    }
  }
  return vl = ee, vl;
}
var gl, Ql;
function ef() {
  if (Ql) return gl;
  Ql = 1;
  const ee = Il();
  function X(g, p) {
    const _ = {};
    if (g[p + 3] === "O" && g[p + 4] === "C" && g[p + 5] === "T" && g[p + 6] === "Y" && g[p + 7] === "P" && g[p + 8] === "E") {
      p = p + 9;
      let x = 1, N = !1, T = !1, A = "";
      for (; p < g.length; p++)
        if (g[p] === "<" && !T) {
          if (N && oe(g, p)) {
            p += 7;
            let y, a;
            [y, a, p] = ie(g, p + 1), a.indexOf("&") === -1 && (_[b(y)] = {
              regx: RegExp(`&${y};`, "g"),
              val: a
            });
          } else if (N && B(g, p)) p += 8;
          else if (N && Z(g, p)) p += 8;
          else if (N && m(g, p)) p += 9;
          else if (K) T = !0;
          else throw new Error("Invalid DOCTYPE");
          x++, A = "";
        } else if (g[p] === ">") {
          if (T ? g[p - 1] === "-" && g[p - 2] === "-" && (T = !1, x--) : x--, x === 0)
            break;
        } else g[p] === "[" ? N = !0 : A += g[p];
      if (x !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: _, i: p };
  }
  function ie(g, p) {
    let _ = "";
    for (; p < g.length && g[p] !== "'" && g[p] !== '"'; p++)
      _ += g[p];
    if (_ = _.trim(), _.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const x = g[p++];
    let N = "";
    for (; p < g.length && g[p] !== x; p++)
      N += g[p];
    return [_, N, p];
  }
  function K(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "-" && g[p + 3] === "-";
  }
  function oe(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "E" && g[p + 3] === "N" && g[p + 4] === "T" && g[p + 5] === "I" && g[p + 6] === "T" && g[p + 7] === "Y";
  }
  function B(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "E" && g[p + 3] === "L" && g[p + 4] === "E" && g[p + 5] === "M" && g[p + 6] === "E" && g[p + 7] === "N" && g[p + 8] === "T";
  }
  function Z(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "A" && g[p + 3] === "T" && g[p + 4] === "T" && g[p + 5] === "L" && g[p + 6] === "I" && g[p + 7] === "S" && g[p + 8] === "T";
  }
  function m(g, p) {
    return g[p + 1] === "!" && g[p + 2] === "N" && g[p + 3] === "O" && g[p + 4] === "T" && g[p + 5] === "A" && g[p + 6] === "T" && g[p + 7] === "I" && g[p + 8] === "O" && g[p + 9] === "N";
  }
  function b(g) {
    if (ee.isName(g))
      return g;
    throw new Error(`Invalid entity name ${g}`);
  }
  return gl = X, gl;
}
var ml, Kl;
function tf() {
  if (Kl) return ml;
  Kl = 1;
  const ee = /^[-+]?0x[a-fA-F0-9]+$/, X = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, ie = {
    hex: !0,
    // oct: false,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function K(Z, m = {}) {
    if (m = Object.assign({}, ie, m), !Z || typeof Z != "string") return Z;
    let b = Z.trim();
    if (m.skipLike !== void 0 && m.skipLike.test(b)) return Z;
    if (Z === "0") return 0;
    if (m.hex && ee.test(b))
      return B(b, 16);
    if (b.search(/[eE]/) !== -1) {
      const g = b.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
      if (g) {
        if (m.leadingZeros)
          b = (g[1] || "") + g[3];
        else if (!(g[2] === "0" && g[3][0] === ".")) return Z;
        return m.eNotation ? Number(b) : Z;
      } else
        return Z;
    } else {
      const g = X.exec(b);
      if (g) {
        const p = g[1], _ = g[2];
        let x = oe(g[3]);
        if (!m.leadingZeros && _.length > 0 && p && b[2] !== ".") return Z;
        if (!m.leadingZeros && _.length > 0 && !p && b[1] !== ".") return Z;
        if (m.leadingZeros && _ === Z) return 0;
        {
          const N = Number(b), T = "" + N;
          return T.search(/[eE]/) !== -1 ? m.eNotation ? N : Z : b.indexOf(".") !== -1 ? T === "0" && x === "" || T === x || p && T === "-" + x ? N : Z : _ ? x === T || p + x === T ? N : Z : b === T || b === p + T ? N : Z;
        }
      } else
        return Z;
    }
  }
  function oe(Z) {
    return Z && Z.indexOf(".") !== -1 && (Z = Z.replace(/0+$/, ""), Z === "." ? Z = "0" : Z[0] === "." ? Z = "0" + Z : Z[Z.length - 1] === "." && (Z = Z.substr(0, Z.length - 1))), Z;
  }
  function B(Z, m) {
    if (parseInt) return parseInt(Z, m);
    if (Number.parseInt) return Number.parseInt(Z, m);
    if (window && window.parseInt) return window.parseInt(Z, m);
    throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
  }
  return ml = K, ml;
}
var yl, eu;
function Cu() {
  if (eu) return yl;
  eu = 1;
  function ee(X) {
    return typeof X == "function" ? X : Array.isArray(X) ? (ie) => {
      for (const K of X)
        if (typeof K == "string" && ie === K || K instanceof RegExp && K.test(ie))
          return !0;
    } : () => !1;
  }
  return yl = ee, yl;
}
var bl, tu;
function nf() {
  if (tu) return bl;
  tu = 1;
  const ee = Il(), X = Kc(), ie = ef(), K = tf(), oe = Cu();
  class B {
    constructor(l) {
      this.options = l, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
      }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        // "lt" : { regex: /&(lt|#60);/g, val: "<" },
        // "gt" : { regex: /&(gt|#62);/g, val: ">" },
        // "amp" : { regex: /&(amp|#38);/g, val: "&" },
        // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
        // "apos" : { regex: /&(apos|#39);/g, val: "'" },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (h, C) => String.fromCharCode(Number.parseInt(C, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (h, C) => String.fromCharCode(Number.parseInt(C, 16)) }
      }, this.addExternalEntities = Z, this.parseXml = _, this.parseTextData = m, this.resolveNameSpace = b, this.buildAttributesMap = p, this.isItStopNode = A, this.replaceEntitiesValue = N, this.readStopNodeData = s, this.saveTextToParentTag = T, this.addChild = x, this.ignoreAttributesFn = oe(this.options.ignoreAttributes);
    }
  }
  function Z(c) {
    const l = Object.keys(c);
    for (let h = 0; h < l.length; h++) {
      const C = l[h];
      this.lastEntities[C] = {
        regex: new RegExp("&" + C + ";", "g"),
        val: c[C]
      };
    }
  }
  function m(c, l, h, C, S, w, I) {
    if (c !== void 0 && (this.options.trimValues && !C && (c = c.trim()), c.length > 0)) {
      I || (c = this.replaceEntitiesValue(c));
      const O = this.options.tagValueProcessor(l, c, h, S, w);
      return O == null ? c : typeof O != typeof c || O !== c ? O : this.options.trimValues ? d(c, this.options.parseTagValue, this.options.numberParseOptions) : c.trim() === c ? d(c, this.options.parseTagValue, this.options.numberParseOptions) : c;
    }
  }
  function b(c) {
    if (this.options.removeNSPrefix) {
      const l = c.split(":"), h = c.charAt(0) === "/" ? "/" : "";
      if (l[0] === "xmlns")
        return "";
      l.length === 2 && (c = h + l[1]);
    }
    return c;
  }
  const g = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function p(c, l, h) {
    if (this.options.ignoreAttributes !== !0 && typeof c == "string") {
      const C = ee.getAllMatches(c, g), S = C.length, w = {};
      for (let I = 0; I < S; I++) {
        const O = this.resolveNameSpace(C[I][1]);
        if (this.ignoreAttributesFn(O, l))
          continue;
        let G = C[I][4], F = this.options.attributeNamePrefix + O;
        if (O.length)
          if (this.options.transformAttributeName && (F = this.options.transformAttributeName(F)), F === "__proto__" && (F = "#__proto__"), G !== void 0) {
            this.options.trimValues && (G = G.trim()), G = this.replaceEntitiesValue(G);
            const W = this.options.attributeValueProcessor(O, G, l);
            W == null ? w[F] = G : typeof W != typeof G || W !== G ? w[F] = W : w[F] = d(
              G,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (w[F] = !0);
      }
      if (!Object.keys(w).length)
        return;
      if (this.options.attributesGroupName) {
        const I = {};
        return I[this.options.attributesGroupName] = w, I;
      }
      return w;
    }
  }
  const _ = function(c) {
    c = c.replace(/\r\n?/g, `
`);
    const l = new X("!xml");
    let h = l, C = "", S = "";
    for (let w = 0; w < c.length; w++)
      if (c[w] === "<")
        if (c[w + 1] === "/") {
          const O = a(c, ">", w, "Closing Tag is not closed.");
          let G = c.substring(w + 2, O).trim();
          if (this.options.removeNSPrefix) {
            const q = G.indexOf(":");
            q !== -1 && (G = G.substr(q + 1));
          }
          this.options.transformTagName && (G = this.options.transformTagName(G)), h && (C = this.saveTextToParentTag(C, h, S));
          const F = S.substring(S.lastIndexOf(".") + 1);
          if (G && this.options.unpairedTags.indexOf(G) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${G}>`);
          let W = 0;
          F && this.options.unpairedTags.indexOf(F) !== -1 ? (W = S.lastIndexOf(".", S.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : W = S.lastIndexOf("."), S = S.substring(0, W), h = this.tagsNodeStack.pop(), C = "", w = O;
        } else if (c[w + 1] === "?") {
          let O = i(c, w, !1, "?>");
          if (!O) throw new Error("Pi Tag is not closed.");
          if (C = this.saveTextToParentTag(C, h, S), !(this.options.ignoreDeclaration && O.tagName === "?xml" || this.options.ignorePiTags)) {
            const G = new X(O.tagName);
            G.add(this.options.textNodeName, ""), O.tagName !== O.tagExp && O.attrExpPresent && (G[":@"] = this.buildAttributesMap(O.tagExp, S, O.tagName)), this.addChild(h, G, S);
          }
          w = O.closeIndex + 1;
        } else if (c.substr(w + 1, 3) === "!--") {
          const O = a(c, "-->", w + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const G = c.substring(w + 4, O - 2);
            C = this.saveTextToParentTag(C, h, S), h.add(this.options.commentPropName, [{ [this.options.textNodeName]: G }]);
          }
          w = O;
        } else if (c.substr(w + 1, 2) === "!D") {
          const O = ie(c, w);
          this.docTypeEntities = O.entities, w = O.i;
        } else if (c.substr(w + 1, 2) === "![") {
          const O = a(c, "]]>", w, "CDATA is not closed.") - 2, G = c.substring(w + 9, O);
          C = this.saveTextToParentTag(C, h, S);
          let F = this.parseTextData(G, h.tagname, S, !0, !1, !0, !0);
          F == null && (F = ""), this.options.cdataPropName ? h.add(this.options.cdataPropName, [{ [this.options.textNodeName]: G }]) : h.add(this.options.textNodeName, F), w = O + 2;
        } else {
          let O = i(c, w, this.options.removeNSPrefix), G = O.tagName;
          const F = O.rawTagName;
          let W = O.tagExp, q = O.attrExpPresent, H = O.closeIndex;
          this.options.transformTagName && (G = this.options.transformTagName(G)), h && C && h.tagname !== "!xml" && (C = this.saveTextToParentTag(C, h, S, !1));
          const J = h;
          if (J && this.options.unpairedTags.indexOf(J.tagname) !== -1 && (h = this.tagsNodeStack.pop(), S = S.substring(0, S.lastIndexOf("."))), G !== l.tagname && (S += S ? "." + G : G), this.isItStopNode(this.options.stopNodes, S, G)) {
            let U = "";
            if (W.length > 0 && W.lastIndexOf("/") === W.length - 1)
              G[G.length - 1] === "/" ? (G = G.substr(0, G.length - 1), S = S.substr(0, S.length - 1), W = G) : W = W.substr(0, W.length - 1), w = O.closeIndex;
            else if (this.options.unpairedTags.indexOf(G) !== -1)
              w = O.closeIndex;
            else {
              const te = this.readStopNodeData(c, F, H + 1);
              if (!te) throw new Error(`Unexpected end of ${F}`);
              w = te.i, U = te.tagContent;
            }
            const Y = new X(G);
            G !== W && q && (Y[":@"] = this.buildAttributesMap(W, S, G)), U && (U = this.parseTextData(U, G, S, !0, q, !0, !0)), S = S.substr(0, S.lastIndexOf(".")), Y.add(this.options.textNodeName, U), this.addChild(h, Y, S);
          } else {
            if (W.length > 0 && W.lastIndexOf("/") === W.length - 1) {
              G[G.length - 1] === "/" ? (G = G.substr(0, G.length - 1), S = S.substr(0, S.length - 1), W = G) : W = W.substr(0, W.length - 1), this.options.transformTagName && (G = this.options.transformTagName(G));
              const U = new X(G);
              G !== W && q && (U[":@"] = this.buildAttributesMap(W, S, G)), this.addChild(h, U, S), S = S.substr(0, S.lastIndexOf("."));
            } else {
              const U = new X(G);
              this.tagsNodeStack.push(h), G !== W && q && (U[":@"] = this.buildAttributesMap(W, S, G)), this.addChild(h, U, S), h = U;
            }
            C = "", w = H;
          }
        }
      else
        C += c[w];
    return l.child;
  };
  function x(c, l, h) {
    const C = this.options.updateTag(l.tagname, h, l[":@"]);
    C === !1 || (typeof C == "string" && (l.tagname = C), c.addChild(l));
  }
  const N = function(c) {
    if (this.options.processEntities) {
      for (let l in this.docTypeEntities) {
        const h = this.docTypeEntities[l];
        c = c.replace(h.regx, h.val);
      }
      for (let l in this.lastEntities) {
        const h = this.lastEntities[l];
        c = c.replace(h.regex, h.val);
      }
      if (this.options.htmlEntities)
        for (let l in this.htmlEntities) {
          const h = this.htmlEntities[l];
          c = c.replace(h.regex, h.val);
        }
      c = c.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return c;
  };
  function T(c, l, h, C) {
    return c && (C === void 0 && (C = l.child.length === 0), c = this.parseTextData(
      c,
      l.tagname,
      h,
      !1,
      l[":@"] ? Object.keys(l[":@"]).length !== 0 : !1,
      C
    ), c !== void 0 && c !== "" && l.add(this.options.textNodeName, c), c = ""), c;
  }
  function A(c, l, h) {
    const C = "*." + h;
    for (const S in c) {
      const w = c[S];
      if (C === w || l === w) return !0;
    }
    return !1;
  }
  function y(c, l, h = ">") {
    let C, S = "";
    for (let w = l; w < c.length; w++) {
      let I = c[w];
      if (C)
        I === C && (C = "");
      else if (I === '"' || I === "'")
        C = I;
      else if (I === h[0])
        if (h[1]) {
          if (c[w + 1] === h[1])
            return {
              data: S,
              index: w
            };
        } else
          return {
            data: S,
            index: w
          };
      else I === "	" && (I = " ");
      S += I;
    }
  }
  function a(c, l, h, C) {
    const S = c.indexOf(l, h);
    if (S === -1)
      throw new Error(C);
    return S + l.length - 1;
  }
  function i(c, l, h, C = ">") {
    const S = y(c, l + 1, C);
    if (!S) return;
    let w = S.data;
    const I = S.index, O = w.search(/\s/);
    let G = w, F = !0;
    O !== -1 && (G = w.substring(0, O), w = w.substring(O + 1).trimStart());
    const W = G;
    if (h) {
      const q = G.indexOf(":");
      q !== -1 && (G = G.substr(q + 1), F = G !== S.data.substr(q + 1));
    }
    return {
      tagName: G,
      tagExp: w,
      closeIndex: I,
      attrExpPresent: F,
      rawTagName: W
    };
  }
  function s(c, l, h) {
    const C = h;
    let S = 1;
    for (; h < c.length; h++)
      if (c[h] === "<")
        if (c[h + 1] === "/") {
          const w = a(c, ">", h, `${l} is not closed`);
          if (c.substring(h + 2, w).trim() === l && (S--, S === 0))
            return {
              tagContent: c.substring(C, h),
              i: w
            };
          h = w;
        } else if (c[h + 1] === "?")
          h = a(c, "?>", h + 1, "StopNode is not closed.");
        else if (c.substr(h + 1, 3) === "!--")
          h = a(c, "-->", h + 3, "StopNode is not closed.");
        else if (c.substr(h + 1, 2) === "![")
          h = a(c, "]]>", h, "StopNode is not closed.") - 2;
        else {
          const w = i(c, h, ">");
          w && ((w && w.tagName) === l && w.tagExp[w.tagExp.length - 1] !== "/" && S++, h = w.closeIndex);
        }
  }
  function d(c, l, h) {
    if (l && typeof c == "string") {
      const C = c.trim();
      return C === "true" ? !0 : C === "false" ? !1 : K(c, h);
    } else
      return ee.isExist(c) ? c : "";
  }
  return bl = B, bl;
}
var wl = {}, nu;
function rf() {
  if (nu) return wl;
  nu = 1;
  function ee(B, Z) {
    return X(B, Z);
  }
  function X(B, Z, m) {
    let b;
    const g = {};
    for (let p = 0; p < B.length; p++) {
      const _ = B[p], x = ie(_);
      let N = "";
      if (m === void 0 ? N = x : N = m + "." + x, x === Z.textNodeName)
        b === void 0 ? b = _[x] : b += "" + _[x];
      else {
        if (x === void 0)
          continue;
        if (_[x]) {
          let T = X(_[x], Z, N);
          const A = oe(T, Z);
          _[":@"] ? K(T, _[":@"], N, Z) : Object.keys(T).length === 1 && T[Z.textNodeName] !== void 0 && !Z.alwaysCreateTextNode ? T = T[Z.textNodeName] : Object.keys(T).length === 0 && (Z.alwaysCreateTextNode ? T[Z.textNodeName] = "" : T = ""), g[x] !== void 0 && g.hasOwnProperty(x) ? (Array.isArray(g[x]) || (g[x] = [g[x]]), g[x].push(T)) : Z.isArray(x, N, A) ? g[x] = [T] : g[x] = T;
        }
      }
    }
    return typeof b == "string" ? b.length > 0 && (g[Z.textNodeName] = b) : b !== void 0 && (g[Z.textNodeName] = b), g;
  }
  function ie(B) {
    const Z = Object.keys(B);
    for (let m = 0; m < Z.length; m++) {
      const b = Z[m];
      if (b !== ":@") return b;
    }
  }
  function K(B, Z, m, b) {
    if (Z) {
      const g = Object.keys(Z), p = g.length;
      for (let _ = 0; _ < p; _++) {
        const x = g[_];
        b.isArray(x, m + "." + x, !0, !0) ? B[x] = [Z[x]] : B[x] = Z[x];
      }
    }
  }
  function oe(B, Z) {
    const { textNodeName: m } = Z, b = Object.keys(B).length;
    return !!(b === 0 || b === 1 && (B[m] || typeof B[m] == "boolean" || B[m] === 0));
  }
  return wl.prettify = ee, wl;
}
var Sl, ru;
function af() {
  if (ru) return Sl;
  ru = 1;
  const { buildOptions: ee } = Qc(), X = nf(), { prettify: ie } = rf(), K = Su();
  class oe {
    constructor(Z) {
      this.externalEntities = {}, this.options = ee(Z);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(Z, m) {
      if (typeof Z != "string") if (Z.toString)
        Z = Z.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (m) {
        m === !0 && (m = {});
        const p = K.validate(Z, m);
        if (p !== !0)
          throw Error(`${p.err.msg}:${p.err.line}:${p.err.col}`);
      }
      const b = new X(this.options);
      b.addExternalEntities(this.externalEntities);
      const g = b.parseXml(Z);
      return this.options.preserveOrder || g === void 0 ? g : ie(g, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(Z, m) {
      if (m.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (Z.indexOf("&") !== -1 || Z.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (m === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[Z] = m;
    }
  }
  return Sl = oe, Sl;
}
var Cl, iu;
function of() {
  if (iu) return Cl;
  iu = 1;
  const ee = `
`;
  function X(m, b) {
    let g = "";
    return b.format && b.indentBy.length > 0 && (g = ee), ie(m, b, "", g);
  }
  function ie(m, b, g, p) {
    let _ = "", x = !1;
    for (let N = 0; N < m.length; N++) {
      const T = m[N], A = K(T);
      if (A === void 0) continue;
      let y = "";
      if (g.length === 0 ? y = A : y = `${g}.${A}`, A === b.textNodeName) {
        let c = T[A];
        B(y, b) || (c = b.tagValueProcessor(A, c), c = Z(c, b)), x && (_ += p), _ += c, x = !1;
        continue;
      } else if (A === b.cdataPropName) {
        x && (_ += p), _ += `<![CDATA[${T[A][0][b.textNodeName]}]]>`, x = !1;
        continue;
      } else if (A === b.commentPropName) {
        _ += p + `<!--${T[A][0][b.textNodeName]}-->`, x = !0;
        continue;
      } else if (A[0] === "?") {
        const c = oe(T[":@"], b), l = A === "?xml" ? "" : p;
        let h = T[A][0][b.textNodeName];
        h = h.length !== 0 ? " " + h : "", _ += l + `<${A}${h}${c}?>`, x = !0;
        continue;
      }
      let a = p;
      a !== "" && (a += b.indentBy);
      const i = oe(T[":@"], b), s = p + `<${A}${i}`, d = ie(T[A], b, y, a);
      b.unpairedTags.indexOf(A) !== -1 ? b.suppressUnpairedNode ? _ += s + ">" : _ += s + "/>" : (!d || d.length === 0) && b.suppressEmptyNode ? _ += s + "/>" : d && d.endsWith(">") ? _ += s + `>${d}${p}</${A}>` : (_ += s + ">", d && p !== "" && (d.includes("/>") || d.includes("</")) ? _ += p + b.indentBy + d + p : _ += d, _ += `</${A}>`), x = !0;
    }
    return _;
  }
  function K(m) {
    const b = Object.keys(m);
    for (let g = 0; g < b.length; g++) {
      const p = b[g];
      if (m.hasOwnProperty(p) && p !== ":@")
        return p;
    }
  }
  function oe(m, b) {
    let g = "";
    if (m && !b.ignoreAttributes)
      for (let p in m) {
        if (!m.hasOwnProperty(p)) continue;
        let _ = b.attributeValueProcessor(p, m[p]);
        _ = Z(_, b), _ === !0 && b.suppressBooleanAttributes ? g += ` ${p.substr(b.attributeNamePrefix.length)}` : g += ` ${p.substr(b.attributeNamePrefix.length)}="${_}"`;
      }
    return g;
  }
  function B(m, b) {
    m = m.substr(0, m.length - b.textNodeName.length - 1);
    let g = m.substr(m.lastIndexOf(".") + 1);
    for (let p in b.stopNodes)
      if (b.stopNodes[p] === m || b.stopNodes[p] === "*." + g) return !0;
    return !1;
  }
  function Z(m, b) {
    if (m && m.length > 0 && b.processEntities)
      for (let g = 0; g < b.entities.length; g++) {
        const p = b.entities[g];
        m = m.replace(p.regex, p.val);
      }
    return m;
  }
  return Cl = X, Cl;
}
var Tl, au;
function sf() {
  if (au) return Tl;
  au = 1;
  const ee = of(), X = Cu(), ie = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function(m, b) {
      return b;
    },
    attributeValueProcessor: function(m, b) {
      return b;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      //it must be on top
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" }
    ],
    processEntities: !0,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: !1
  };
  function K(m) {
    this.options = Object.assign({}, ie, m), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.ignoreAttributesFn = X(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Z), this.processTextOrObjNode = oe, this.options.format ? (this.indentate = B, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  K.prototype.build = function(m) {
    return this.options.preserveOrder ? ee(m, this.options) : (Array.isArray(m) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (m = {
      [this.options.arrayNodeName]: m
    }), this.j2x(m, 0, []).val);
  }, K.prototype.j2x = function(m, b, g) {
    let p = "", _ = "";
    const x = g.join(".");
    for (let N in m)
      if (Object.prototype.hasOwnProperty.call(m, N))
        if (typeof m[N] > "u")
          this.isAttribute(N) && (_ += "");
        else if (m[N] === null)
          this.isAttribute(N) || N === this.options.cdataPropName ? _ += "" : N[0] === "?" ? _ += this.indentate(b) + "<" + N + "?" + this.tagEndChar : _ += this.indentate(b) + "<" + N + "/" + this.tagEndChar;
        else if (m[N] instanceof Date)
          _ += this.buildTextValNode(m[N], N, "", b);
        else if (typeof m[N] != "object") {
          const T = this.isAttribute(N);
          if (T && !this.ignoreAttributesFn(T, x))
            p += this.buildAttrPairStr(T, "" + m[N]);
          else if (!T)
            if (N === this.options.textNodeName) {
              let A = this.options.tagValueProcessor(N, "" + m[N]);
              _ += this.replaceEntitiesValue(A);
            } else
              _ += this.buildTextValNode(m[N], N, "", b);
        } else if (Array.isArray(m[N])) {
          const T = m[N].length;
          let A = "", y = "";
          for (let a = 0; a < T; a++) {
            const i = m[N][a];
            if (!(typeof i > "u")) if (i === null)
              N[0] === "?" ? _ += this.indentate(b) + "<" + N + "?" + this.tagEndChar : _ += this.indentate(b) + "<" + N + "/" + this.tagEndChar;
            else if (typeof i == "object")
              if (this.options.oneListGroup) {
                const s = this.j2x(i, b + 1, g.concat(N));
                A += s.val, this.options.attributesGroupName && i.hasOwnProperty(this.options.attributesGroupName) && (y += s.attrStr);
              } else
                A += this.processTextOrObjNode(i, N, b, g);
            else if (this.options.oneListGroup) {
              let s = this.options.tagValueProcessor(N, i);
              s = this.replaceEntitiesValue(s), A += s;
            } else
              A += this.buildTextValNode(i, N, "", b);
          }
          this.options.oneListGroup && (A = this.buildObjectNode(A, N, y, b)), _ += A;
        } else if (this.options.attributesGroupName && N === this.options.attributesGroupName) {
          const T = Object.keys(m[N]), A = T.length;
          for (let y = 0; y < A; y++)
            p += this.buildAttrPairStr(T[y], "" + m[N][T[y]]);
        } else
          _ += this.processTextOrObjNode(m[N], N, b, g);
    return { attrStr: p, val: _ };
  }, K.prototype.buildAttrPairStr = function(m, b) {
    return b = this.options.attributeValueProcessor(m, "" + b), b = this.replaceEntitiesValue(b), this.options.suppressBooleanAttributes && b === "true" ? " " + m : " " + m + '="' + b + '"';
  };
  function oe(m, b, g, p) {
    const _ = this.j2x(m, g + 1, p.concat(b));
    return m[this.options.textNodeName] !== void 0 && Object.keys(m).length === 1 ? this.buildTextValNode(m[this.options.textNodeName], b, _.attrStr, g) : this.buildObjectNode(_.val, b, _.attrStr, g);
  }
  K.prototype.buildObjectNode = function(m, b, g, p) {
    if (m === "")
      return b[0] === "?" ? this.indentate(p) + "<" + b + g + "?" + this.tagEndChar : this.indentate(p) + "<" + b + g + this.closeTag(b) + this.tagEndChar;
    {
      let _ = "</" + b + this.tagEndChar, x = "";
      return b[0] === "?" && (x = "?", _ = ""), (g || g === "") && m.indexOf("<") === -1 ? this.indentate(p) + "<" + b + g + x + ">" + m + _ : this.options.commentPropName !== !1 && b === this.options.commentPropName && x.length === 0 ? this.indentate(p) + `<!--${m}-->` + this.newLine : this.indentate(p) + "<" + b + g + x + this.tagEndChar + m + this.indentate(p) + _;
    }
  }, K.prototype.closeTag = function(m) {
    let b = "";
    return this.options.unpairedTags.indexOf(m) !== -1 ? this.options.suppressUnpairedNode || (b = "/") : this.options.suppressEmptyNode ? b = "/" : b = `></${m}`, b;
  }, K.prototype.buildTextValNode = function(m, b, g, p) {
    if (this.options.cdataPropName !== !1 && b === this.options.cdataPropName)
      return this.indentate(p) + `<![CDATA[${m}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && b === this.options.commentPropName)
      return this.indentate(p) + `<!--${m}-->` + this.newLine;
    if (b[0] === "?")
      return this.indentate(p) + "<" + b + g + "?" + this.tagEndChar;
    {
      let _ = this.options.tagValueProcessor(b, m);
      return _ = this.replaceEntitiesValue(_), _ === "" ? this.indentate(p) + "<" + b + g + this.closeTag(b) + this.tagEndChar : this.indentate(p) + "<" + b + g + ">" + _ + "</" + b + this.tagEndChar;
    }
  }, K.prototype.replaceEntitiesValue = function(m) {
    if (m && m.length > 0 && this.options.processEntities)
      for (let b = 0; b < this.options.entities.length; b++) {
        const g = this.options.entities[b];
        m = m.replace(g.regex, g.val);
      }
    return m;
  };
  function B(m) {
    return this.options.indentBy.repeat(m);
  }
  function Z(m) {
    return m.startsWith(this.options.attributeNamePrefix) && m !== this.options.textNodeName ? m.substr(this.attrPrefixLen) : !1;
  }
  return Tl = K, Tl;
}
var xl, ou;
function lf() {
  if (ou) return xl;
  ou = 1;
  const ee = Su(), X = af(), ie = sf();
  return xl = {
    XMLParser: X,
    XMLValidator: ee,
    XMLBuilder: ie
  }, xl;
}
var uf = hs.exports, su;
function cf() {
  return su || (su = 1, function(ee, X) {
    (function(K, oe) {
      ee.exports = oe();
    })(uf, () => (
      /******/
      (() => {
        var ie = [
          /* 0 */
          /***/
          function(Z, m, b) {
            var g = this && this.__awaiter || function(N, T, A, y) {
              function a(i) {
                return i instanceof A ? i : new A(function(s) {
                  s(i);
                });
              }
              return new (A || (A = Promise))(function(i, s) {
                function d(h) {
                  try {
                    l(y.next(h));
                  } catch (C) {
                    s(C);
                  }
                }
                function c(h) {
                  try {
                    l(y.throw(h));
                  } catch (C) {
                    s(C);
                  }
                }
                function l(h) {
                  h.done ? i(h.value) : a(h.value).then(d, c);
                }
                l((y = y.apply(N, T || [])).next());
              });
            }, p = this && this.__generator || function(N, T) {
              var A = { label: 0, sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1];
              }, trys: [], ops: [] }, y, a, i, s;
              return s = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
                return this;
              }), s;
              function d(l) {
                return function(h) {
                  return c([l, h]);
                };
              }
              function c(l) {
                if (y) throw new TypeError("Generator is already executing.");
                for (; A; ) try {
                  if (y = 1, a && (i = l[0] & 2 ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i;
                  switch (a = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
                    case 0:
                    case 1:
                      i = l;
                      break;
                    case 4:
                      return A.label++, { value: l[1], done: !1 };
                    case 5:
                      A.label++, a = l[1], l = [0];
                      continue;
                    case 7:
                      l = A.ops.pop(), A.trys.pop();
                      continue;
                    default:
                      if (i = A.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        A = 0;
                        continue;
                      }
                      if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
                        A.label = l[1];
                        break;
                      }
                      if (l[0] === 6 && A.label < i[1]) {
                        A.label = i[1], i = l;
                        break;
                      }
                      if (i && A.label < i[2]) {
                        A.label = i[2], A.ops.push(l);
                        break;
                      }
                      i[2] && A.ops.pop(), A.trys.pop();
                      continue;
                  }
                  l = T.call(N, A);
                } catch (h) {
                  l = [6, h], a = 0;
                } finally {
                  y = i = 0;
                }
                if (l[0] & 5) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              }
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.parseFile = void 0;
            var _ = b(1), x = b(3);
            m.parseFile = x.default, m.default = function(N, T) {
              return g(void 0, void 0, void 0, function() {
                return p(this, function(A) {
                  switch (A.label) {
                    case 0:
                      return !T?.fileName && (0, _.isAccession)(N) ? [4, (0, _.default)(N, T)] : [3, 2];
                    case 1:
                      return [2, A.sent()];
                    case 2:
                      return [2, (0, x.default)(N, T)[0]];
                  }
                });
              });
            };
          },
          /* 1 */
          /***/
          function(Z, m, b) {
            var g = this && this.__awaiter || function(T, A, y, a) {
              function i(s) {
                return s instanceof y ? s : new y(function(d) {
                  d(s);
                });
              }
              return new (y || (y = Promise))(function(s, d) {
                function c(C) {
                  try {
                    h(a.next(C));
                  } catch (S) {
                    d(S);
                  }
                }
                function l(C) {
                  try {
                    h(a.throw(C));
                  } catch (S) {
                    d(S);
                  }
                }
                function h(C) {
                  C.done ? s(C.value) : i(C.value).then(c, l);
                }
                h((a = a.apply(T, A || [])).next());
              });
            }, p = this && this.__generator || function(T, A) {
              var y = { label: 0, sent: function() {
                if (s[0] & 1) throw s[1];
                return s[1];
              }, trys: [], ops: [] }, a, i, s, d;
              return d = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
                return this;
              }), d;
              function c(h) {
                return function(C) {
                  return l([h, C]);
                };
              }
              function l(h) {
                if (a) throw new TypeError("Generator is already executing.");
                for (; y; ) try {
                  if (a = 1, i && (s = h[0] & 2 ? i.return : h[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, h[1])).done) return s;
                  switch (i = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
                    case 0:
                    case 1:
                      s = h;
                      break;
                    case 4:
                      return y.label++, { value: h[1], done: !1 };
                    case 5:
                      y.label++, i = h[1], h = [0];
                      continue;
                    case 7:
                      h = y.ops.pop(), y.trys.pop();
                      continue;
                    default:
                      if (s = y.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                        y = 0;
                        continue;
                      }
                      if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
                        y.label = h[1];
                        break;
                      }
                      if (h[0] === 6 && y.label < s[1]) {
                        y.label = s[1], s = h;
                        break;
                      }
                      if (s && y.label < s[2]) {
                        y.label = s[2], y.ops.push(h);
                        break;
                      }
                      s[2] && y.ops.pop(), y.trys.pop();
                      continue;
                  }
                  h = A.call(T, y);
                } catch (C) {
                  h = [6, C], i = 0;
                } finally {
                  a = s = 0;
                }
                if (h[0] & 5) throw h[1];
                return { value: h[0] ? h[1] : void 0, done: !0 };
              }
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.isAccession = void 0;
            var _ = b(2), x = b(3);
            m.default = function(T, A) {
              return g(void 0, void 0, void 0, function() {
                var y, a, i, s;
                return p(this, function(d) {
                  switch (d.label) {
                    case 0:
                      y = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=".concat(T.trim(), "&rettype=gbwithparts&retmode=text"), T.startsWith("BB") && (typeof window < "u" && typeof process > "u" || A?.cors ? y = "https://cors-anywhere.herokuapp.com/http://parts.igem.org/cgi/xml/part.cgi?part=".concat(T.trim()) : y = "http://parts.igem.org/cgi/xml/part.cgi?part=".concat(T.trim())), a = "", d.label = 1;
                    case 1:
                      return d.trys.push([1, 4, , 5]), [4, (0, _.default)(y)];
                    case 2:
                      return i = d.sent(), [4, i.text()];
                    case 3:
                      return a = d.sent(), [3, 5];
                    case 4:
                      throw s = d.sent(), new Error("Failed to get part: accession=".concat(T, " url=").concat(y, " err=").concat(s));
                    case 5:
                      if (!i.ok || !a.length)
                        throw new Error("Failed to get part, no body returned: accession=".concat(T, " url=").concat(y));
                      return [4, (0, x.default)(a)];
                    case 6:
                      return [2, d.sent()[0]];
                  }
                });
              });
            };
            var N = function(T) {
              return !!(T.startsWith("BB") || T.length < 14 && T.match(/^[a-z0-9_\-.]+$/i));
            };
            m.isAccession = N;
          },
          /* 2 */
          /***/
          (Z) => {
            Z.exports = Jc();
          },
          /* 3 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(4), p = b(5), _ = b(7), x = b(9), N = b(10), T = b(11), A = b(12), y = b(15), a = b(16), i = b(6);
            m.default = function(s, d) {
              var c = d?.fileName || "", l = c.split(g.sep).pop() || c;
              if (!s)
                throw Error("cannot parse null or empty string");
              var h = s.substring(0, s.search(`
`)), C = h.replace(/[^atcgATCG]/, "").length, S = C / h.length > 0.8, w = c && l ? l.substring(0, l.search("\\.")) : "Untitled", I = !1;
              try {
                var O = JSON.parse(s);
                ["bases", "annotations", "primers"].every(function(q) {
                  return typeof O[q] < "u";
                }) && (I = !0);
              } catch {
              }
              var G = s.substring(0, 200), F;
              switch (!0) {
                // JBEI
                case G.includes(':seq="http://jbei.org/sequence"'):
                case s.startsWith("<seq:seq"):
                  F = (0, T.default)(s);
                  break;
                // FASTA
                case s.startsWith(">"):
                case s.startsWith(";"):
                case c.endsWith(".seq"):
                case c.endsWith(".fa"):
                case c.endsWith(".fas"):
                case c.endsWith(".fasta"):
                  F = (0, x.default)(s, c);
                  break;
                // Genbank
                case (s.includes("LOCUS") && s.includes("ORIGIN")):
                case c.endsWith(".gb"):
                case c.endsWith(".gbk"):
                case c.endsWith(".genbank"):
                case c.endsWith(".ape"):
                  F = (0, N.default)(s, c);
                  break;
                // SnapGene
                case c.endsWith(".dna"):
                  F = (0, a.default)(d);
                  break;
                // SeqBuilder
                case G.includes("Written by SeqBuilder"):
                case c.endsWith(".sbd"):
                  F = (0, y.default)(s, c);
                  break;
                // BioBrick XML
                case G.includes("Parts from the iGEM"):
                case G.includes("<part_list>"):
                  F = (0, _.default)(s);
                  break;
                // Benchling JSON
                case I:
                  F = (0, p.default)(s);
                  break;
                // SBOL
                case G.includes("RDF"):
                  F = (0, A.default)(s, c);
                  break;
                // a DNA text file without an official formatting
                case S: {
                  var W = (0, i.complement)(s).seq;
                  F = [{ annotations: [], name: w, seq: W, type: (0, i.guessType)(W) }];
                  break;
                }
                default:
                  throw Error("".concat(c, " File type not recognized: ").concat(s));
              }
              return F.map(function(q) {
                return {
                  annotations: q.annotations.sort(function(H, J) {
                    return H.start - J.start || H.end - J.end;
                  }).map(function(H) {
                    return {
                      color: H.color,
                      direction: H.direction,
                      end: H.end,
                      name: H.name,
                      start: H.start,
                      type: H.type
                    };
                  }),
                  name: q.name,
                  seq: q.seq,
                  type: q.type
                };
              });
            };
          },
          /* 4 */
          /***/
          (Z) => {
            function m(_) {
              if (typeof _ != "string")
                throw new TypeError("Path must be a string. Received " + JSON.stringify(_));
            }
            function b(_, x) {
              for (var N = "", T = 0, A = -1, y = 0, a, i = 0; i <= _.length; ++i) {
                if (i < _.length)
                  a = _.charCodeAt(i);
                else {
                  if (a === 47)
                    break;
                  a = 47;
                }
                if (a === 47) {
                  if (!(A === i - 1 || y === 1)) if (A !== i - 1 && y === 2) {
                    if (N.length < 2 || T !== 2 || N.charCodeAt(N.length - 1) !== 46 || N.charCodeAt(N.length - 2) !== 46) {
                      if (N.length > 2) {
                        var s = N.lastIndexOf("/");
                        if (s !== N.length - 1) {
                          s === -1 ? (N = "", T = 0) : (N = N.slice(0, s), T = N.length - 1 - N.lastIndexOf("/")), A = i, y = 0;
                          continue;
                        }
                      } else if (N.length === 2 || N.length === 1) {
                        N = "", T = 0, A = i, y = 0;
                        continue;
                      }
                    }
                    x && (N.length > 0 ? N += "/.." : N = "..", T = 2);
                  } else
                    N.length > 0 ? N += "/" + _.slice(A + 1, i) : N = _.slice(A + 1, i), T = i - A - 1;
                  A = i, y = 0;
                } else a === 46 && y !== -1 ? ++y : y = -1;
              }
              return N;
            }
            function g(_, x) {
              var N = x.dir || x.root, T = x.base || (x.name || "") + (x.ext || "");
              return N ? N === x.root ? N + T : N + _ + T : T;
            }
            var p = {
              // path.resolve([from ...], to)
              resolve: function() {
                for (var x = "", N = !1, T, A = arguments.length - 1; A >= -1 && !N; A--) {
                  var y;
                  A >= 0 ? y = arguments[A] : (T === void 0 && (T = process.cwd()), y = T), m(y), y.length !== 0 && (x = y + "/" + x, N = y.charCodeAt(0) === 47);
                }
                return x = b(x, !N), N ? x.length > 0 ? "/" + x : "/" : x.length > 0 ? x : ".";
              },
              normalize: function(x) {
                if (m(x), x.length === 0) return ".";
                var N = x.charCodeAt(0) === 47, T = x.charCodeAt(x.length - 1) === 47;
                return x = b(x, !N), x.length === 0 && !N && (x = "."), x.length > 0 && T && (x += "/"), N ? "/" + x : x;
              },
              isAbsolute: function(x) {
                return m(x), x.length > 0 && x.charCodeAt(0) === 47;
              },
              join: function() {
                if (arguments.length === 0)
                  return ".";
                for (var x, N = 0; N < arguments.length; ++N) {
                  var T = arguments[N];
                  m(T), T.length > 0 && (x === void 0 ? x = T : x += "/" + T);
                }
                return x === void 0 ? "." : p.normalize(x);
              },
              relative: function(x, N) {
                if (m(x), m(N), x === N || (x = p.resolve(x), N = p.resolve(N), x === N)) return "";
                for (var T = 1; T < x.length && x.charCodeAt(T) === 47; ++T)
                  ;
                for (var A = x.length, y = A - T, a = 1; a < N.length && N.charCodeAt(a) === 47; ++a)
                  ;
                for (var i = N.length, s = i - a, d = y < s ? y : s, c = -1, l = 0; l <= d; ++l) {
                  if (l === d) {
                    if (s > d) {
                      if (N.charCodeAt(a + l) === 47)
                        return N.slice(a + l + 1);
                      if (l === 0)
                        return N.slice(a + l);
                    } else y > d && (x.charCodeAt(T + l) === 47 ? c = l : l === 0 && (c = 0));
                    break;
                  }
                  var h = x.charCodeAt(T + l), C = N.charCodeAt(a + l);
                  if (h !== C)
                    break;
                  h === 47 && (c = l);
                }
                var S = "";
                for (l = T + c + 1; l <= A; ++l)
                  (l === A || x.charCodeAt(l) === 47) && (S.length === 0 ? S += ".." : S += "/..");
                return S.length > 0 ? S + N.slice(a + c) : (a += c, N.charCodeAt(a) === 47 && ++a, N.slice(a));
              },
              _makeLong: function(x) {
                return x;
              },
              dirname: function(x) {
                if (m(x), x.length === 0) return ".";
                for (var N = x.charCodeAt(0), T = N === 47, A = -1, y = !0, a = x.length - 1; a >= 1; --a)
                  if (N = x.charCodeAt(a), N === 47) {
                    if (!y) {
                      A = a;
                      break;
                    }
                  } else
                    y = !1;
                return A === -1 ? T ? "/" : "." : T && A === 1 ? "//" : x.slice(0, A);
              },
              basename: function(x, N) {
                if (N !== void 0 && typeof N != "string") throw new TypeError('"ext" argument must be a string');
                m(x);
                var T = 0, A = -1, y = !0, a;
                if (N !== void 0 && N.length > 0 && N.length <= x.length) {
                  if (N.length === x.length && N === x) return "";
                  var i = N.length - 1, s = -1;
                  for (a = x.length - 1; a >= 0; --a) {
                    var d = x.charCodeAt(a);
                    if (d === 47) {
                      if (!y) {
                        T = a + 1;
                        break;
                      }
                    } else
                      s === -1 && (y = !1, s = a + 1), i >= 0 && (d === N.charCodeAt(i) ? --i === -1 && (A = a) : (i = -1, A = s));
                  }
                  return T === A ? A = s : A === -1 && (A = x.length), x.slice(T, A);
                } else {
                  for (a = x.length - 1; a >= 0; --a)
                    if (x.charCodeAt(a) === 47) {
                      if (!y) {
                        T = a + 1;
                        break;
                      }
                    } else A === -1 && (y = !1, A = a + 1);
                  return A === -1 ? "" : x.slice(T, A);
                }
              },
              extname: function(x) {
                m(x);
                for (var N = -1, T = 0, A = -1, y = !0, a = 0, i = x.length - 1; i >= 0; --i) {
                  var s = x.charCodeAt(i);
                  if (s === 47) {
                    if (!y) {
                      T = i + 1;
                      break;
                    }
                    continue;
                  }
                  A === -1 && (y = !1, A = i + 1), s === 46 ? N === -1 ? N = i : a !== 1 && (a = 1) : N !== -1 && (a = -1);
                }
                return N === -1 || A === -1 || // We saw a non-dot character immediately before the dot
                a === 0 || // The (right-most) trimmed path component is exactly '..'
                a === 1 && N === A - 1 && N === T + 1 ? "" : x.slice(N, A);
              },
              format: function(x) {
                if (x === null || typeof x != "object")
                  throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof x);
                return g("/", x);
              },
              parse: function(x) {
                m(x);
                var N = { root: "", dir: "", base: "", ext: "", name: "" };
                if (x.length === 0) return N;
                var T = x.charCodeAt(0), A = T === 47, y;
                A ? (N.root = "/", y = 1) : y = 0;
                for (var a = -1, i = 0, s = -1, d = !0, c = x.length - 1, l = 0; c >= y; --c) {
                  if (T = x.charCodeAt(c), T === 47) {
                    if (!d) {
                      i = c + 1;
                      break;
                    }
                    continue;
                  }
                  s === -1 && (d = !1, s = c + 1), T === 46 ? a === -1 ? a = c : l !== 1 && (l = 1) : a !== -1 && (l = -1);
                }
                return a === -1 || s === -1 || // We saw a non-dot character immediately before the dot
                l === 0 || // The (right-most) trimmed path component is exactly '..'
                l === 1 && a === s - 1 && a === i + 1 ? s !== -1 && (i === 0 && A ? N.base = N.name = x.slice(1, s) : N.base = N.name = x.slice(i, s)) : (i === 0 && A ? (N.name = x.slice(1, a), N.base = x.slice(1, s)) : (N.name = x.slice(i, a), N.base = x.slice(i, s)), N.ext = x.slice(a, s)), i > 0 ? N.dir = x.slice(0, i - 1) : A && (N.dir = "/"), N;
              },
              sep: "/",
              delimiter: ":",
              win32: null,
              posix: null
            };
            p.posix = p, Z.exports = p;
          },
          /* 5 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(_) {
                for (var x, N = 1, T = arguments.length; N < T; N++) {
                  x = arguments[N];
                  for (var A in x) Object.prototype.hasOwnProperty.call(x, A) && (_[A] = x[A]);
                }
                return _;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var p = b(6);
            m.default = function(_) {
              var x = JSON.parse(_), N = (0, p.complement)(x.bases).seq;
              if (N.length < 1)
                throw new Error("Invalid Benchling part: empty sequence");
              return [
                {
                  annotations: x.annotations.map(function(T) {
                    return g(g({}, T), { direction: (0, p.parseDirection)(T.strand) });
                  }),
                  name: x.name || x._id,
                  seq: N,
                  type: (0, p.guessType)(N)
                }
              ];
            };
          },
          /* 6 */
          /***/
          (Z, m) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.guessType = m.parseDirection = m.firstElement = m.reverseComplement = m.complement = void 0;
            var b = {
              A: "T",
              B: "V",
              C: "G",
              D: "H",
              G: "C",
              H: "D",
              K: "M",
              M: "K",
              N: "N",
              R: "Y",
              S: "S",
              T: "A",
              U: "A",
              V: "B",
              W: "W",
              X: "X",
              Y: "R",
              a: "t",
              b: "v",
              c: "g",
              d: "h",
              g: "c",
              h: "d",
              k: "m",
              m: "k",
              n: "n",
              r: "y",
              s: "s",
              t: "a",
              u: "a",
              v: "b",
              w: "w",
              x: "x",
              y: "r"
            }, g = function(s) {
              if (!s)
                return { compSeq: "", seq: "" };
              for (var d = "", c = "", l = 0, h = s.length; l < h; l += 1)
                b[s[l]] && (d += s[l], c += b[s[l]]);
              return { compSeq: c, seq: d };
            };
            m.complement = g;
            var p = function(s) {
              var d = (0, m.complement)(s).compSeq;
              return d.split("").reverse().join("");
            };
            m.reverseComplement = p;
            var _ = function(s) {
              if (Array.isArray(s))
                return s[0];
            };
            m.firstElement = _;
            var x = /* @__PURE__ */ new Set(["FWD", "fwd", "FORWARD", "forward", "FOR", "for", "TOP", "top", "1", 1]), N = /* @__PURE__ */ new Set(["REV", "rev", "REVERSE", "reverse", "BOTTOM", "bottom", "-1", -1]), T = function(s) {
              return s ? x.has(s) ? 1 : N.has(s) ? -1 : 0 : 0;
            };
            m.parseDirection = T;
            var A = {
              AAA: "K",
              AAC: "N",
              AAG: "K",
              AAT: "N",
              ACA: "T",
              ACC: "T",
              ACG: "T",
              ACT: "T",
              AGA: "R",
              AGC: "S",
              AGG: "R",
              AGT: "S",
              ATA: "I",
              ATC: "I",
              ATG: "M",
              ATT: "I",
              CAA: "Q",
              CAC: "H",
              CAG: "Q",
              CAT: "H",
              CCA: "P",
              CCC: "P",
              CCG: "P",
              CCT: "P",
              CGA: "R",
              CGC: "R",
              CGG: "R",
              CGT: "R",
              CTA: "L",
              CTC: "L",
              CTG: "L",
              CTT: "L",
              GAA: "E",
              GAC: "D",
              GAG: "E",
              GAT: "D",
              GCA: "A",
              GCC: "A",
              GCG: "A",
              GCT: "A",
              GGA: "G",
              GGC: "G",
              GGG: "G",
              GGT: "G",
              GTA: "V",
              GTC: "V",
              GTG: "V",
              GTT: "V",
              TAA: "*",
              TAC: "Y",
              TAG: "*",
              TAT: "Y",
              TCA: "S",
              TCC: "S",
              TCG: "S",
              TCT: "S",
              TGA: "*",
              TGC: "C",
              TGG: "W",
              TGT: "C",
              TTA: "L",
              TTC: "F",
              TTG: "L",
              TTT: "F"
            }, y = Array.from(new Set(Object.values(A)).values()).join(""), a = new RegExp("^[".concat(y, "]+$"), "i"), i = function(s) {
              return /^[atgcn.]+$/i.test(s) ? "dna" : /^[augcn.]+$/i.test(s) ? "rna" : a.test(s) ? "aa" : "unknown";
            };
            m.guessType = i;
          },
          /* 7 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(8), p = b(6);
            m.default = function(_) {
              var x = function(c) {
                throw new Error("Failed on BioBrick: ".concat(c));
              }, N = new g.XMLParser({
                isArray: function(c) {
                  return ["features", "part_name", "sequences"].includes(c);
                },
                removeNSPrefix: !0
              }).parse(_), T = N.rsbpml.part_list.part;
              T || x("No part seen in part_list");
              var A = T.features, y = T.part_name, a = T.sequences, i = (0, p.firstElement)(y), s = A.map(function(c) {
                var l = c.feature;
                if (!l)
                  return null;
                var h = l.direction, C = l.endpos, S = l.startpos, w = l.type;
                return {
                  direction: (0, p.parseDirection)(h),
                  end: +C,
                  name: "".concat(h, "-").concat(S),
                  start: +S || 0,
                  type: w || void 0
                };
              }).filter(function(c) {
                return c;
              }), d = (0, p.complement)(a[0].seq_data).seq;
              return [
                {
                  annotations: s,
                  name: i,
                  seq: d,
                  type: (0, p.guessType)(d)
                }
              ];
            };
          },
          /* 8 */
          /***/
          (Z) => {
            Z.exports = lf();
          },
          /* 9 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(6);
            m.default = function(p, _) {
              if (p.trim().startsWith(">"))
                return p.split(">").map(function(i) {
                  var s = i.substr(i.indexOf(`
`), i.length).replace(/\s/g, ""), d = i.substring(0, i.search(/\n|\|/)).replace(/\//g, "");
                  return {
                    annotations: [],
                    name: d,
                    seq: s,
                    type: (0, g.guessType)(s)
                  };
                }).filter(function(i) {
                  return i.name && i.seq;
                });
              if (p.trim().startsWith(";")) {
                var x = p.substring(0, p.search(/\n|\|/)).replace(/\//g, ""), N = p.indexOf(`
`, p.lastIndexOf(";")), T = p.substring(N, p.length);
                return [
                  {
                    annotations: [],
                    name: x,
                    seq: T,
                    type: (0, g.guessType)(T)
                  }
                ];
              }
              var A = _.lastIndexOf(".") || _.length, y = _.substring(0, A) || "Untitled", a = p;
              return [
                {
                  annotations: [],
                  name: y,
                  seq: a,
                  type: (0, g.guessType)(a)
                }
              ];
            };
          },
          /* 10 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(6), p = /* @__PURE__ */ new Set(["gene", "product", "note", "db_xref", "protein_id", "label", "lab_host", "locus_tag"]), _ = /* @__PURE__ */ new Set(["ApEinfo_fwdcolor", "ApEinfo_revcolor", "loom_color"]);
            m.default = function(x, N) {
              return x.split(/\/\/\s/g).filter(function(T) {
                return T.length > 5;
              }).map(function(T) {
                var A = T.substring(T.indexOf("LOCUS"), T.search(/\\n|\n/)), y = A.split(/\s{2,}/g).filter(function(G) {
                  return G;
                }), a = y[1], i = a;
                if (i === "Exported" && T.includes("SnapGene") || // stupid Snapgene name
                Number.parseInt(i, 10)) {
                  var s = !1;
                  if (T.includes("ACCESSION")) {
                    var d = T.substring(T.indexOf("ACCESSION"), T.indexOf(`
`, T.indexOf("ACCESSION"))).replace(".", "").split(/\s{2,}/).filter(function(G) {
                      return G !== "ACCESSION";
                    }).pop();
                    d && (i = d, s = !0);
                  }
                  !s && N ? i = N.substring(0, Math.max(N.search(/\n|\||\./), N.lastIndexOf("."))).replace(/\/\s/g, "") : s || (i = "Unnamed");
                }
                var c = T.substring(T.lastIndexOf("ORIGIN") + 6, T.length), l = c.replace(/[^gatc]/gi, "");
                l = (0, g.complement)(l).seq;
                var h = [], C = [];
                if (T.indexOf("FEATURES")) {
                  var S = T.indexOf("FEATURES"), w = T.indexOf(`
`, S), I = T.lastIndexOf("ORIGIN");
                  T.includes("CONTIG") && (I = Math.min(I, T.indexOf("CONTIG")));
                  var O = T.substring(w, I).split(/\n/).filter(function(G) {
                    return G;
                  });
                  O.forEach(function(G) {
                    var F = G.split(/\s{2,}/g).filter(function(Ee) {
                      return Ee;
                    });
                    if (F.length > 1) {
                      var W = F[0], q = F[1], H = /\d+/g, J = G.includes("complement") ? -1 : 1, U = [0, 0], Y = U[0], te = U[1], se = H.exec(q);
                      if (se) {
                        Y = +se[0] - 1 % l.length, te = (Y + 1) % l.length;
                        var ce = H.exec(q);
                        ce && (te = +ce[0] % l.length);
                      }
                      W !== "source" && h.push({
                        direction: J,
                        // set in next block
                        end: te,
                        name: "",
                        start: Y,
                        type: W
                      });
                    } else if (F.length === 1 && F[0].startsWith("/")) {
                      var ve = F[0];
                      ve = ve.replace(/[/"]/g, "");
                      var fe = ve.split(/=/), pe = fe[0], xe = fe[1], Re = h.length - 1;
                      p.has(pe.toLowerCase()) ? Re >= 0 && !h[Re].name && (h[Re].name = xe.trim()) : _.has(pe) && Re > -1 && (h[Re].color = xe);
                    }
                  });
                }
                return {
                  annotations: h,
                  name: i.trim() || N,
                  primers: C,
                  seq: l,
                  type: (0, g.guessType)(l)
                };
              });
            };
          },
          /* 11 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(8), p = b(6);
            m.default = function(_) {
              var x = _.replace(/“|”/g, '"'), N = new g.XMLParser({
                removeNSPrefix: !0
              }).parse(x), T = N.seq, A = T.features, y = T.name, a = T.sequence, i = "Unnamed";
              y && (i = y);
              var s = (0, p.complement)(a).seq;
              if (!s)
                return [];
              var d = [];
              return A && A.feature && A.feature.forEach(function(c) {
                if (c) {
                  var l = c.complement, h = c.label, C = c.location, S = c.type;
                  C && C.genbankStart && C.end && d.push({
                    direction: l ? -1 : 1,
                    // JBEI is 1-based
                    end: +C.end || 0,
                    name: h || "Untitled",
                    start: +C.genbankStart - 1 || 0,
                    type: S || "N/A"
                  });
                }
              }), [
                {
                  annotations: d,
                  name: i,
                  seq: s,
                  type: (0, p.guessType)(s)
                }
              ];
            };
          },
          /* 12 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(13), p = b(14);
            m.default = function(_, x) {
              return _.includes("sbols.org/v1#") ? (0, g.default)(_) : (0, p.default)(_, x);
            };
          },
          /* 13 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(8), p = b(6);
            m.default = function(A) {
              var y = A.replace(/“|”/g, '"'), a = new g.XMLParser({
                ignoreAttributes: !1,
                isArray: function(w) {
                  return [
                    "Sequence",
                    "Collection",
                    "DnaComponent",
                    "dnaSequence",
                    "ComponentDefinition",
                    "SequenceAnnotation",
                    "sequenceAnnotation",
                    "elements",
                    "component",
                    "annotation"
                  ].includes(w);
                },
                removeNSPrefix: !0
              }).parse(y), i = null;
              a.RDF && (i = a.RDF);
              var s = i.Collection, d = i.DnaComponent;
              if (s && s.length) {
                var c = [];
                if (s.forEach(function(w) {
                  var I = w.component;
                  I && I.length && I.forEach(function(O) {
                    var G = O.DnaComponent;
                    c.push(
                      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ seq: string; compSeq: string; ... Remove this comment to see the full error message
                      x(G[0], {
                        strict: !1
                      })
                    );
                  });
                }), c.length)
                  return c;
              } else if (d && d.length) {
                var l = x(d[0], {
                  strict: !1
                });
                if (l)
                  return [l];
              }
              var h = [];
              T(h, i);
              var C = h.map(function(w) {
                return x(w, {
                  strict: !0
                });
              }).filter(function(w) {
                return !!w;
              });
              if (C.length)
                return C;
              var S = [];
              return _(S, i), S.map(function(w) {
                return N(w, A);
              }).filter(function(w) {
                return w;
              });
            };
            var _ = function(A, y) {
              Object.keys(y).forEach(function(a) {
                a === "Sequence" && y[a].length && A.push.apply(A, y[a]), Array.isArray(y[a]) && y[a].forEach(function(i) {
                  _(A, i);
                });
              });
            }, x = function(A, y) {
              var a = y.strict, i = a === void 0 ? !1 : a, s = A.annotation, d = A.displayId, c = A.dnaSequence, l = A.name, h = "Unnamed";
              if (l)
                h = l;
              else if (d)
                h = d;
              else if (i)
                return null;
              var C = "";
              c && c[0].DnaSequence && (C = c[0].DnaSequence.nucleotides);
              var S = (0, p.complement)(C).seq;
              if (!S)
                return null;
              var w = [];
              return s && s.forEach(function(I) {
                var O = I.SequenceAnnotation;
                if (!(!O || !O[0])) {
                  var G = O[0], F = G.bioEnd, W = G.bioStart, q = G.strand, H = G.subComponent;
                  if (H && H.DnaComponent && H.DnaComponent[0]) {
                    var J = H.DnaComponent[0], U = J.displayId, Y = J.name, te = J.type;
                    w.push({
                      direction: q === "+" ? 1 : -1,
                      end: F - 1 || 0,
                      name: Y || U || "Untitled",
                      start: W - 1 || 0,
                      type: te["@_resource"] || "N/A"
                    });
                  }
                }
              }), {
                annotations: w,
                name: h,
                seq: S,
                type: (0, p.guessType)(C)
              };
            }, N = function(A, y) {
              var a = A.displayId || A.title || "Unnamed", i = A.elements[0] || "", s = (0, p.complement)(i), d = s.compSeq, c = s.seq, l = y.search(/plasmid/i) > 0;
              return { annotations: [], circular: l, compSeq: d, name: a, seq: c, type: (0, p.guessType)(c) };
            }, T = function(A, y) {
              Object.keys(y).forEach(function(a) {
                a === "DnaComponent" && y[a].length && A.push.apply(A, y[a]), Array.isArray(y[a]) && y[a].forEach(function(i) {
                  T(A, i);
                });
              });
            };
          },
          /* 14 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(8), p = b(6);
            m.default = function(x, N) {
              var T = x.replace(/“|”/g, '"'), A = new g.XMLParser({
                ignoreAttributes: !1,
                isArray: function(a) {
                  return ["Sequence", "ComponentDefinition", "SequenceAnnotation", "sequenceAnnotation", "elements"].includes(a);
                },
                removeNSPrefix: !0
              }).parse(T);
              try {
                var y = _(A, N);
                if (y.length)
                  return y;
                throw new Error("No Sequence info found");
              } catch (a) {
                throw new Error("Failed to parse SBOL v2 file: ".concat(a));
              }
            };
            var _ = function(x, N) {
              var T = null;
              if (x.RDF && (T = x.RDF), !T)
                throw new Error("No root RDF document");
              var A = T.ComponentDefinition, y = T.Sequence;
              if (!A && !y)
                throw new Error("Failed to parse SBOL v2: No ComponentDefinition or Sequence");
              var a = function(d) {
                var c = d ? (
                  // @ts-ignore
                  y.find(function(h) {
                    return h.persistentIdentity && h.persistentIdentity.length && h.persistentIdentity["@_resource"] === d || h["@_about"] === d;
                  })
                ) : y[0];
                if (c && c.elements) {
                  var l = (0, p.complement)(c.elements[0] || "").seq;
                  return {
                    annotations: [],
                    name: c.displayId,
                    seq: l,
                    type: (0, p.guessType)(l)
                  };
                }
                return null;
              }, i = [];
              A?.forEach(function(d, c) {
                if (d.sequence) {
                  var l = d.displayId, h = d.sequence, C = d.sequenceAnnotation, S = l || "".concat(N, "_").concat(c + 1), w = [];
                  (C || []).forEach(function(O) {
                    var G = O.SequenceAnnotation, F = G[0], W = F.displayId, q = F.location.Range, H = q;
                    H && w.push({
                      end: H.end - 1,
                      name: W,
                      start: H.start - 1
                    });
                  });
                  var I = a(h["@_resource"]);
                  I && i.push({
                    annotations: w,
                    name: S,
                    seq: I.seq,
                    type: I.type
                  });
                }
              });
              var s = a();
              return !i.length && s && i.push(s), i;
            };
          },
          /* 15 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(6), p = ["gene", "product", "note", "db_xref", "protein_id", "label", "lab_host"], _ = ["ApEinfo_fwdcolor", "ApEinfo_revcolor", "loom_color"];
            m.default = function(x, N) {
              return x.split(/\/\/\s/g).map(function(T) {
                var A = T.substring(T.search(/.*?written by seqbuilder .*?[0-9.]+[^actg]+/i) + // @ts-ignore
                T.match(/.*?written by seqbuilder .*?[0-9.]+[^actg]+/i)[0].length, T.length).match(/[actgyrwskmdvhbxn]+/gim)[0], y = A;
                y = (0, g.complement)(y).seq;
                var a = N.length > 0 ? N : "Unnamed";
                if (~T.indexOf("LOCUS")) {
                  var i = T.substring(T.indexOf("LOCUS"), T.search(/\\n|\n/));
                  if (i && i.split(/\s{2,}/g)) {
                    var s = i.split(/\s{2,}/g).filter(function(O) {
                      return O;
                    }), d = s[1];
                    a = d;
                  }
                }
                if (a === "Exported" && T.includes("SnapGene") || // stupid Snapgene name
                Number.parseInt(a, 10)) {
                  var c = !1;
                  if (T.includes("ACCESSION")) {
                    var l = T.substring(T.indexOf("ACCESSION"), T.indexOf(`
`, T.indexOf("ACCESSION"))).replace(".", "").split(/\s{2,}/).filter(function(O) {
                      return O !== "ACCESSION";
                    }).pop();
                    l && (a = l, c = !0);
                  }
                  !c && N ? a = N.substring(0, Math.max(N.search(/\n|\||\./), N.lastIndexOf("."))).replace(/\/\s/g, "") : c || (a = "Unnamed");
                }
                var h = [];
                if (T.indexOf("FEATURES")) {
                  var C = T.indexOf("FEATURES"), S = T.indexOf(`
`, C), w = T.lastIndexOf("ORIGIN");
                  T.includes("CONTIG") && (w = Math.min(w, T.indexOf("CONTIG")));
                  var I = T.substring(S, w).split(/\n/).filter(function(O) {
                    return O;
                  });
                  I.forEach(function(O) {
                    var G = O.split(/\s{2,}/g).filter(function(Re) {
                      return Re;
                    });
                    if (G.length > 1) {
                      var F = G[0], W = G[1], q = /\d+/g, H = O.includes("complement") ? -1 : 1, J = [0, 0], U = J[0], Y = J[1], te = q.exec(W);
                      if (te) {
                        U = +te[0] - 1 % y.length;
                        var se = q.exec(W);
                        se && (Y = +se[0] % y.length);
                      }
                      F !== "source" && h.push({
                        direction: H,
                        end: Y,
                        name: "",
                        start: U,
                        type: F
                      });
                    } else if (G.length === 1) {
                      var ce = G[0];
                      ce = ce.replace(/[/"]/g, "");
                      var ve = ce.split(/=/), fe = ve[0], pe = ve[1], xe = h.length - 1;
                      p.includes(fe) ? xe > -1 && !h[h.length - 1].name && (h[h.length - 1].name = pe.trim()) : _.includes(fe) && xe > -1 && (h[h.length - 1].color = pe);
                    }
                  });
                }
                return {
                  annotations: h,
                  name: a.trim() || N,
                  seq: y,
                  type: (0, g.guessType)(y)
                };
              });
            };
          },
          /* 16 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(N) {
                for (var T, A = 1, y = arguments.length; A < y; A++) {
                  T = arguments[A];
                  for (var a in T) Object.prototype.hasOwnProperty.call(T, a) && (N[a] = T[a]);
                }
                return N;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var p = b(8), _ = b(4), x = b(6);
            m.default = function(N) {
              var T;
              if (!N || !N.source)
                throw new Error("Failed to parse SnapGene file. No valid file input");
              var A = N?.fileName || "", y = {
                annotations: [],
                circular: !1,
                name: "",
                seq: "",
                type: "unknown"
              }, a = Buffer.from(N.source), i = 0, s = function(G) {
                var F = i;
                return i += G, a.subarray(F, i);
              }, d = function(G, F) {
                return s(G).toString(F);
              };
              s(1);
              var c = s(4).readUInt32BE(), l = d(8, "ascii");
              if (c !== 14 || l !== "SnapGene")
                throw new Error("Wrong format for a SnapGene file: length=".concat(c, " title=").concat(l));
              for (s(2), s(2), s(2); i < a.length; ) {
                var h = s(1), C = s(4).readUInt32BE(), S = h.toString().charCodeAt(0);
                if (S === 0) {
                  s(1);
                  var w = C - 1;
                  if (w < 0)
                    throw new Error("Failed parsing SnapGene: < 0 length sequence");
                  y.seq = d(w, "ascii");
                } else if (S === 10) {
                  var I = d(C, "utf8"), O = new p.XMLParser({
                    attributeNamePrefix: "",
                    ignoreAttributes: !1,
                    isArray: function(G) {
                      return G === "Q" || G === "Segment";
                    },
                    removeNSPrefix: !0
                  }).parse(I);
                  O.Features.Feature.forEach(function(G) {
                    var F = 0, W = 0, q = G.Segment[0].range, H = q.split("-"), J = H[0], U = H[1];
                    F = F === 0 ? +J : Math.min(F, +J), W = Math.max(W, +U), y.annotations.push({
                      direction: (0, x.parseDirection)({
                        0: "NONE",
                        1: 1,
                        2: -1,
                        3: "BIDIRECTIONAL",
                        undefined: "NONE"
                      }[G.directionality]),
                      end: W - 1,
                      name: G.name,
                      start: F - 1,
                      type: G.type
                    });
                  });
                } else
                  s(C);
              }
              return [
                g(g({}, y), {
                  // SnapGene uses the filename as the sequence name
                  name: ((T = A.split(_.sep).pop()) === null || T === void 0 ? void 0 : T.replace(".dna", "")) || A,
                  type: (0, x.guessType)(y.seq)
                })
              ];
            };
          }
          /******/
        ], K = {};
        function oe(Z) {
          var m = K[Z];
          if (m !== void 0)
            return m.exports;
          var b = K[Z] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return ie[Z].call(b.exports, b, b.exports, oe), b.exports;
        }
        var B = oe(0);
        return B;
      })()
    ));
  }(hs)), hs.exports;
}
var El = { exports: {} }, lu;
function ff() {
  return lu || (lu = 1, function(ee) {
    (function() {
      function X(D, Q, me) {
        return D.call.apply(D.bind, arguments);
      }
      function ie(D, Q, me) {
        if (!D) throw Error();
        if (2 < arguments.length) {
          var de = Array.prototype.slice.call(arguments, 2);
          return function() {
            var Ce = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(Ce, de), D.apply(Q, Ce);
          };
        }
        return function() {
          return D.apply(Q, arguments);
        };
      }
      function K(D, Q, me) {
        return K = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? X : ie, K.apply(null, arguments);
      }
      var oe = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      function B(D, Q) {
        this.a = D, this.o = Q || D, this.c = this.o.document;
      }
      var Z = !!window.FontFace;
      function m(D, Q, me, de) {
        if (Q = D.c.createElement(Q), me) for (var Ce in me) me.hasOwnProperty(Ce) && (Ce == "style" ? Q.style.cssText = me[Ce] : Q.setAttribute(Ce, me[Ce]));
        return de && Q.appendChild(D.c.createTextNode(de)), Q;
      }
      function b(D, Q, me) {
        D = D.c.getElementsByTagName(Q)[0], D || (D = document.documentElement), D.insertBefore(me, D.lastChild);
      }
      function g(D) {
        D.parentNode && D.parentNode.removeChild(D);
      }
      function p(D, Q, me) {
        Q = Q || [], me = me || [];
        for (var de = D.className.split(/\s+/), Ce = 0; Ce < Q.length; Ce += 1) {
          for (var Ne = !1, Oe = 0; Oe < de.length; Oe += 1) if (Q[Ce] === de[Oe]) {
            Ne = !0;
            break;
          }
          Ne || de.push(Q[Ce]);
        }
        for (Q = [], Ce = 0; Ce < de.length; Ce += 1) {
          for (Ne = !1, Oe = 0; Oe < me.length; Oe += 1) if (de[Ce] === me[Oe]) {
            Ne = !0;
            break;
          }
          Ne || Q.push(de[Ce]);
        }
        D.className = Q.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function _(D, Q) {
        for (var me = D.className.split(/\s+/), de = 0, Ce = me.length; de < Ce; de++) if (me[de] == Q) return !0;
        return !1;
      }
      function x(D) {
        return D.o.location.hostname || D.a.location.hostname;
      }
      function N(D, Q, me) {
        function de() {
          Be && Ce && Ne && (Be(Oe), Be = null);
        }
        Q = m(D, "link", { rel: "stylesheet", href: Q, media: "all" });
        var Ce = !1, Ne = !0, Oe = null, Be = me || null;
        Z ? (Q.onload = function() {
          Ce = !0, de();
        }, Q.onerror = function() {
          Ce = !0, Oe = Error("Stylesheet failed to load"), de();
        }) : setTimeout(function() {
          Ce = !0, de();
        }, 0), b(D, "head", Q);
      }
      function T(D, Q, me, de) {
        var Ce = D.c.getElementsByTagName("head")[0];
        if (Ce) {
          var Ne = m(D, "script", { src: Q }), Oe = !1;
          return Ne.onload = Ne.onreadystatechange = function() {
            Oe || this.readyState && this.readyState != "loaded" && this.readyState != "complete" || (Oe = !0, me && me(null), Ne.onload = Ne.onreadystatechange = null, Ne.parentNode.tagName == "HEAD" && Ce.removeChild(Ne));
          }, Ce.appendChild(Ne), setTimeout(function() {
            Oe || (Oe = !0, me && me(Error("Script load timeout")));
          }, de || 5e3), Ne;
        }
        return null;
      }
      function A() {
        this.a = 0, this.c = null;
      }
      function y(D) {
        return D.a++, function() {
          D.a--, i(D);
        };
      }
      function a(D, Q) {
        D.c = Q, i(D);
      }
      function i(D) {
        D.a == 0 && D.c && (D.c(), D.c = null);
      }
      function s(D) {
        this.a = D || "-";
      }
      s.prototype.c = function(D) {
        for (var Q = [], me = 0; me < arguments.length; me++) Q.push(arguments[me].replace(/[\W_]+/g, "").toLowerCase());
        return Q.join(this.a);
      };
      function d(D, Q) {
        this.c = D, this.f = 4, this.a = "n";
        var me = (Q || "n4").match(/^([nio])([1-9])$/i);
        me && (this.a = me[1], this.f = parseInt(me[2], 10));
      }
      function c(D) {
        return C(D) + " " + (D.f + "00") + " 300px " + l(D.c);
      }
      function l(D) {
        var Q = [];
        D = D.split(/,\s*/);
        for (var me = 0; me < D.length; me++) {
          var de = D[me].replace(/['"]/g, "");
          de.indexOf(" ") != -1 || /^\d/.test(de) ? Q.push("'" + de + "'") : Q.push(de);
        }
        return Q.join(",");
      }
      function h(D) {
        return D.a + D.f;
      }
      function C(D) {
        var Q = "normal";
        return D.a === "o" ? Q = "oblique" : D.a === "i" && (Q = "italic"), Q;
      }
      function S(D) {
        var Q = 4, me = "n", de = null;
        return D && ((de = D.match(/(normal|oblique|italic)/i)) && de[1] && (me = de[1].substr(0, 1).toLowerCase()), (de = D.match(/([1-9]00|normal|bold)/i)) && de[1] && (/bold/i.test(de[1]) ? Q = 7 : /[1-9]00/.test(de[1]) && (Q = parseInt(de[1].substr(0, 1), 10)))), me + Q;
      }
      function w(D, Q) {
        this.c = D, this.f = D.o.document.documentElement, this.h = Q, this.a = new s("-"), this.j = Q.events !== !1, this.g = Q.classes !== !1;
      }
      function I(D) {
        D.g && p(D.f, [D.a.c("wf", "loading")]), G(D, "loading");
      }
      function O(D) {
        if (D.g) {
          var Q = _(D.f, D.a.c("wf", "active")), me = [], de = [D.a.c("wf", "loading")];
          Q || me.push(D.a.c("wf", "inactive")), p(D.f, me, de);
        }
        G(D, "inactive");
      }
      function G(D, Q, me) {
        D.j && D.h[Q] && (me ? D.h[Q](me.c, h(me)) : D.h[Q]());
      }
      function F() {
        this.c = {};
      }
      function W(D, Q, me) {
        var de = [], Ce;
        for (Ce in Q) if (Q.hasOwnProperty(Ce)) {
          var Ne = D.c[Ce];
          Ne && de.push(Ne(Q[Ce], me));
        }
        return de;
      }
      function q(D, Q) {
        this.c = D, this.f = Q, this.a = m(this.c, "span", { "aria-hidden": "true" }, this.f);
      }
      function H(D) {
        b(D.c, "body", D.a);
      }
      function J(D) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + l(D.c) + ";" + ("font-style:" + C(D) + ";font-weight:" + (D.f + "00") + ";");
      }
      function U(D, Q, me, de, Ce, Ne) {
        this.g = D, this.j = Q, this.a = de, this.c = me, this.f = Ce || 3e3, this.h = Ne || void 0;
      }
      U.prototype.start = function() {
        var D = this.c.o.document, Q = this, me = oe(), de = new Promise(function(Oe, Be) {
          function Je() {
            oe() - me >= Q.f ? Be() : D.fonts.load(c(Q.a), Q.h).then(function(Xe) {
              1 <= Xe.length ? Oe() : setTimeout(Je, 25);
            }, function() {
              Be();
            });
          }
          Je();
        }), Ce = null, Ne = new Promise(function(Oe, Be) {
          Ce = setTimeout(Be, Q.f);
        });
        Promise.race([Ne, de]).then(function() {
          Ce && (clearTimeout(Ce), Ce = null), Q.g(Q.a);
        }, function() {
          Q.j(Q.a);
        });
      };
      function Y(D, Q, me, de, Ce, Ne, Oe) {
        this.v = D, this.B = Q, this.c = me, this.a = de, this.s = Oe || "BESbswy", this.f = {}, this.w = Ce || 3e3, this.u = Ne || null, this.m = this.j = this.h = this.g = null, this.g = new q(this.c, this.s), this.h = new q(this.c, this.s), this.j = new q(this.c, this.s), this.m = new q(this.c, this.s), D = new d(this.a.c + ",serif", h(this.a)), D = J(D), this.g.a.style.cssText = D, D = new d(this.a.c + ",sans-serif", h(this.a)), D = J(D), this.h.a.style.cssText = D, D = new d("serif", h(this.a)), D = J(D), this.j.a.style.cssText = D, D = new d("sans-serif", h(this.a)), D = J(D), this.m.a.style.cssText = D, H(this.g), H(this.h), H(this.j), H(this.m);
      }
      var te = { D: "serif", C: "sans-serif" }, se = null;
      function ce() {
        if (se === null) {
          var D = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          se = !!D && (536 > parseInt(D[1], 10) || parseInt(D[1], 10) === 536 && 11 >= parseInt(D[2], 10));
        }
        return se;
      }
      Y.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = oe(), fe(this);
      };
      function ve(D, Q, me) {
        for (var de in te) if (te.hasOwnProperty(de) && Q === D.f[te[de]] && me === D.f[te[de]]) return !0;
        return !1;
      }
      function fe(D) {
        var Q = D.g.a.offsetWidth, me = D.h.a.offsetWidth, de;
        (de = Q === D.f.serif && me === D.f["sans-serif"]) || (de = ce() && ve(D, Q, me)), de ? oe() - D.A >= D.w ? ce() && ve(D, Q, me) && (D.u === null || D.u.hasOwnProperty(D.a.c)) ? xe(D, D.v) : xe(D, D.B) : pe(D) : xe(D, D.v);
      }
      function pe(D) {
        setTimeout(K(function() {
          fe(this);
        }, D), 50);
      }
      function xe(D, Q) {
        setTimeout(K(function() {
          g(this.g.a), g(this.h.a), g(this.j.a), g(this.m.a), Q(this.a);
        }, D), 0);
      }
      function Re(D, Q, me) {
        this.c = D, this.a = Q, this.f = 0, this.m = this.j = !1, this.s = me;
      }
      var Ee = null;
      Re.prototype.g = function(D) {
        var Q = this.a;
        Q.g && p(Q.f, [Q.a.c("wf", D.c, h(D).toString(), "active")], [Q.a.c("wf", D.c, h(D).toString(), "loading"), Q.a.c("wf", D.c, h(D).toString(), "inactive")]), G(Q, "fontactive", D), this.m = !0, _e(this);
      }, Re.prototype.h = function(D) {
        var Q = this.a;
        if (Q.g) {
          var me = _(Q.f, Q.a.c("wf", D.c, h(D).toString(), "active")), de = [], Ce = [Q.a.c("wf", D.c, h(D).toString(), "loading")];
          me || de.push(Q.a.c("wf", D.c, h(D).toString(), "inactive")), p(Q.f, de, Ce);
        }
        G(Q, "fontinactive", D), _e(this);
      };
      function _e(D) {
        --D.f == 0 && D.j && (D.m ? (D = D.a, D.g && p(D.f, [D.a.c("wf", "active")], [D.a.c("wf", "loading"), D.a.c("wf", "inactive")]), G(D, "active")) : O(D.a));
      }
      function De(D) {
        this.j = D, this.a = new F(), this.h = 0, this.f = this.g = !0;
      }
      De.prototype.load = function(D) {
        this.c = new B(this.j, D.context || this.j), this.g = D.events !== !1, this.f = D.classes !== !1, We(this, new w(this.c, D), D);
      };
      function He(D, Q, me, de, Ce) {
        var Ne = --D.h == 0;
        (D.f || D.g) && setTimeout(function() {
          var Oe = Ce || null, Be = de || null || {};
          if (me.length === 0 && Ne) O(Q.a);
          else {
            Q.f += me.length, Ne && (Q.j = Ne);
            var Je, Xe = [];
            for (Je = 0; Je < me.length; Je++) {
              var Pe = me[Je], ct = Be[Pe.c], St = Q.a, Ot = Pe;
              if (St.g && p(St.f, [St.a.c("wf", Ot.c, h(Ot).toString(), "loading")]), G(St, "fontloading", Ot), St = null, Ee === null) if (window.FontFace) {
                var Ot = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), Mt = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                Ee = Ot ? 42 < parseInt(Ot[1], 10) : !Mt;
              } else Ee = !1;
              Ee ? St = new U(K(Q.g, Q), K(Q.h, Q), Q.c, Pe, Q.s, ct) : St = new Y(K(Q.g, Q), K(Q.h, Q), Q.c, Pe, Q.s, Oe, ct), Xe.push(St);
            }
            for (Je = 0; Je < Xe.length; Je++) Xe[Je].start();
          }
        }, 0);
      }
      function We(D, Q, me) {
        var Ce = [], de = me.timeout;
        I(Q);
        var Ce = W(D.a, me, D.c), Ne = new Re(D.c, Q, de);
        for (D.h = Ce.length, Q = 0, me = Ce.length; Q < me; Q++) Ce[Q].load(function(Oe, Be, Je) {
          He(D, Ne, Oe, Be, Je);
        });
      }
      function nt(D, Q) {
        this.c = D, this.a = Q;
      }
      nt.prototype.load = function(D) {
        function Q() {
          if (Ne["__mti_fntLst" + de]) {
            var Oe = Ne["__mti_fntLst" + de](), Be = [], Je;
            if (Oe) for (var Xe = 0; Xe < Oe.length; Xe++) {
              var Pe = Oe[Xe].fontfamily;
              Oe[Xe].fontStyle != null && Oe[Xe].fontWeight != null ? (Je = Oe[Xe].fontStyle + Oe[Xe].fontWeight, Be.push(new d(Pe, Je))) : Be.push(new d(Pe));
            }
            D(Be);
          } else setTimeout(function() {
            Q();
          }, 50);
        }
        var me = this, de = me.a.projectId, Ce = me.a.version;
        if (de) {
          var Ne = me.c.o;
          T(this.c, (me.a.api || "https://fast.fonts.net/jsapi") + "/" + de + ".js" + (Ce ? "?v=" + Ce : ""), function(Oe) {
            Oe ? D([]) : (Ne["__MonotypeConfiguration__" + de] = function() {
              return me.a;
            }, Q());
          }).id = "__MonotypeAPIScript__" + de;
        } else D([]);
      };
      function Ye(D, Q) {
        this.c = D, this.a = Q;
      }
      Ye.prototype.load = function(D) {
        var Q, me, de = this.a.urls || [], Ce = this.a.families || [], Ne = this.a.testStrings || {}, Oe = new A();
        for (Q = 0, me = de.length; Q < me; Q++) N(this.c, de[Q], y(Oe));
        var Be = [];
        for (Q = 0, me = Ce.length; Q < me; Q++) if (de = Ce[Q].split(":"), de[1]) for (var Je = de[1].split(","), Xe = 0; Xe < Je.length; Xe += 1) Be.push(new d(de[0], Je[Xe]));
        else Be.push(new d(de[0]));
        a(Oe, function() {
          D(Be, Ne);
        });
      };
      function Ae(D, Q) {
        D ? this.c = D : this.c = $e, this.a = [], this.f = [], this.g = Q || "";
      }
      var $e = "https://fonts.googleapis.com/css";
      function at(D, Q) {
        for (var me = Q.length, de = 0; de < me; de++) {
          var Ce = Q[de].split(":");
          Ce.length == 3 && D.f.push(Ce.pop());
          var Ne = "";
          Ce.length == 2 && Ce[1] != "" && (Ne = ":"), D.a.push(Ce.join(Ne));
        }
      }
      function Qe(D) {
        if (D.a.length == 0) throw Error("No fonts to load!");
        if (D.c.indexOf("kit=") != -1) return D.c;
        for (var Q = D.a.length, me = [], de = 0; de < Q; de++) me.push(D.a[de].replace(/ /g, "+"));
        return Q = D.c + "?family=" + me.join("%7C"), 0 < D.f.length && (Q += "&subset=" + D.f.join(",")), 0 < D.g.length && (Q += "&text=" + encodeURIComponent(D.g)), Q;
      }
      function gt(D) {
        this.f = D, this.a = [], this.c = {};
      }
      var It = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" }, lt = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, et = { i: "i", italic: "i", n: "n", normal: "n" }, Nt = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function ht(D) {
        for (var Q = D.f.length, me = 0; me < Q; me++) {
          var de = D.f[me].split(":"), Ce = de[0].replace(/\+/g, " "), Ne = ["n4"];
          if (2 <= de.length) {
            var Oe, Be = de[1];
            if (Oe = [], Be) for (var Be = Be.split(","), Je = Be.length, Xe = 0; Xe < Je; Xe++) {
              var Pe;
              if (Pe = Be[Xe], Pe.match(/^[\w-]+$/)) {
                var ct = Nt.exec(Pe.toLowerCase());
                if (ct == null) Pe = "";
                else {
                  if (Pe = ct[2], Pe = Pe == null || Pe == "" ? "n" : et[Pe], ct = ct[1], ct == null || ct == "") ct = "4";
                  else var St = lt[ct], ct = St || (isNaN(ct) ? "4" : ct.substr(0, 1));
                  Pe = [Pe, ct].join("");
                }
              } else Pe = "";
              Pe && Oe.push(Pe);
            }
            0 < Oe.length && (Ne = Oe), de.length == 3 && (de = de[2], Oe = [], de = de ? de.split(",") : Oe, 0 < de.length && (de = It[de[0]]) && (D.c[Ce] = de));
          }
          for (D.c[Ce] || (de = It[Ce]) && (D.c[Ce] = de), de = 0; de < Ne.length; de += 1) D.a.push(new d(Ce, Ne[de]));
        }
      }
      function Ft(D, Q) {
        this.c = D, this.a = Q;
      }
      var Dt = { Arimo: !0, Cousine: !0, Tinos: !0 };
      Ft.prototype.load = function(D) {
        var Q = new A(), me = this.c, de = new Ae(this.a.api, this.a.text), Ce = this.a.families;
        at(de, Ce);
        var Ne = new gt(Ce);
        ht(Ne), N(me, Qe(de), y(Q)), a(Q, function() {
          D(Ne.a, Ne.c, Dt);
        });
      };
      function _t(D, Q) {
        this.c = D, this.a = Q;
      }
      _t.prototype.load = function(D) {
        var Q = this.a.id, me = this.c.o;
        Q ? T(this.c, (this.a.api || "https://use.typekit.net") + "/" + Q + ".js", function(de) {
          if (de) D([]);
          else if (me.Typekit && me.Typekit.config && me.Typekit.config.fn) {
            de = me.Typekit.config.fn;
            for (var Ce = [], Ne = 0; Ne < de.length; Ne += 2) for (var Oe = de[Ne], Be = de[Ne + 1], Je = 0; Je < Be.length; Je++) Ce.push(new d(Oe, Be[Je]));
            try {
              me.Typekit.load({ events: !1, classes: !1, async: !0 });
            } catch {
            }
            D(Ce);
          }
        }, 2e3) : D([]);
      };
      function ft(D, Q) {
        this.c = D, this.f = Q, this.a = [];
      }
      ft.prototype.load = function(D) {
        var Q = this.f.id, me = this.c.o, de = this;
        Q ? (me.__webfontfontdeckmodule__ || (me.__webfontfontdeckmodule__ = {}), me.__webfontfontdeckmodule__[Q] = function(Ce, Ne) {
          for (var Oe = 0, Be = Ne.fonts.length; Oe < Be; ++Oe) {
            var Je = Ne.fonts[Oe];
            de.a.push(new d(Je.name, S("font-weight:" + Je.weight + ";font-style:" + Je.style)));
          }
          D(de.a);
        }, T(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + x(this.c) + "/" + Q + ".js", function(Ce) {
          Ce && D([]);
        })) : D([]);
      };
      var xt = new De(window);
      xt.a.c.custom = function(D, Q) {
        return new Ye(Q, D);
      }, xt.a.c.fontdeck = function(D, Q) {
        return new ft(Q, D);
      }, xt.a.c.monotype = function(D, Q) {
        return new nt(Q, D);
      }, xt.a.c.typekit = function(D, Q) {
        return new _t(Q, D);
      }, xt.a.c.google = function(D, Q) {
        return new Ft(Q, D);
      };
      var Jt = { load: K(xt.load, xt) };
      ee.exports ? ee.exports = Jt : (window.WebFont = Jt, window.WebFontConfig && xt.load(window.WebFontConfig));
    })();
  }(El)), El.exports;
}
/*!
 * seqviz - 3.10.10
 * provided and maintained by Lattice Automation (https://latticeautomation.com/)
 * LICENSE MIT
 */
var df = ds.exports, uu;
function hf() {
  return uu || (uu = 1, function(ee, X) {
    (function(K, oe) {
      ee.exports = oe();
    })(df, () => (
      /******/
      (() => {
        var ie = [
          /* 0 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(i) {
                for (var s, d = 1, c = arguments.length; d < c; d++) {
                  s = arguments[d];
                  for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (i[l] = s[l]);
                }
                return i;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Viewer = m.Enzymes = m.Circular = m.Linear = m.SeqViz = void 0;
            var p = b(1), _ = b(2), x = b(3), N = b(4);
            m.Circular = N.default;
            var T = b(10);
            m.Linear = T.default;
            var A = b(36);
            m.SeqViz = A.default;
            var y = b(39);
            m.Enzymes = y.default, m.default = A.default;
            var a = function(i, s) {
              i === void 0 && (i = "root");
              var d = !1, c;
              if (document) {
                if (typeof i == "string")
                  if (document.getElementById(i))
                    c = document.getElementById(i);
                  else
                    throw new Error("Failed to find an element with ID: ".concat(i));
                else
                  c = i;
                var l = p.createElement(A.default, s, null), h = function() {
                  return d = !0, _.render(l, c), l;
                }, C = function() {
                  return (0, x.renderToString)(l);
                }, S = function(w) {
                  return s = g(g({}, s), w), l = p.createElement(A.default, s, null), d && _.render(l, c), l;
                };
                return {
                  render: h,
                  renderToString: C,
                  setState: S
                };
              }
            };
            m.Viewer = a;
          },
          /* 1 */
          /***/
          (Z) => {
            Z.exports = Ci;
          },
          /* 2 */
          /***/
          (Z) => {
            Z.exports = fu;
          },
          /* 3 */
          /***/
          (Z) => {
            Z.exports = Wu();
          },
          /* 4 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var S = function(w, I) {
                return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(O, G) {
                  O.__proto__ = G;
                } || function(O, G) {
                  for (var F in G) Object.prototype.hasOwnProperty.call(G, F) && (O[F] = G[F]);
                }, S(w, I);
              };
              return function(w, I) {
                if (typeof I != "function" && I !== null)
                  throw new TypeError("Class extends value " + String(I) + " is not a constructor or null");
                S(w, I);
                function O() {
                  this.constructor = w;
                }
                w.prototype = I === null ? Object.create(I) : (O.prototype = I.prototype, new O());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(S) {
                for (var w, I = 1, O = arguments.length; I < O; I++) {
                  w = arguments[I];
                  for (var G in w) Object.prototype.hasOwnProperty.call(w, G) && (S[G] = w[G]);
                }
                return S;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Arc = m.RENDER_SEQ_LENGTH_CUTOFF = void 0;
            var _ = b(1), x = b(5), N = b(8), T = b(11), A = b(12), y = b(15), a = b(29), i = b(30), s = b(31), d = b(32), c = b(33), l = b(35);
            m.RENDER_SEQ_LENGTH_CUTOFF = 250;
            var h = (
              /** @class */
              function(S) {
                g(w, S);
                function w(I) {
                  var O = S.call(this, I) || this;
                  return O.shouldComponentUpdate = function(G) {
                    return !(0, A.isEqual)(G, O.props);
                  }, O.getRotation = function(G) {
                    var F = O.props.center, W = O.state.seqLength, q = O.context.circular, H = G - q, J = H / W, U = J * 360;
                    return "rotate(".concat(U || 0, ", ").concat(F.x, ", ").concat(F.y, ")");
                  }, O.findCoor = function(G, F, W) {
                    var q = O.props.center, H = O.state.seqLength, J = W ? G - O.context.circular : G, U = J / H, Y = U - 0.25, te = Y * Math.PI * 2, se = Math.cos(te) * F, ce = Math.sin(te) * F;
                    return {
                      x: q.x + se,
                      y: q.y + ce
                    };
                  }, O.rotateCoor = function(G, F) {
                    var W = O.props.center, q = F * (Math.PI / 180), H = Math.cos(q), J = Math.sin(q), U = G.x - W.x, Y = G.y - W.y, te = H * U, se = H * Y, ce = J * U, ve = J * Y, fe = te - ve, pe = ce + se;
                    return {
                      x: W.x + fe,
                      y: W.y + pe
                    };
                  }, O.genArc = function(G) {
                    var F = G.arrowFWD, W = G.arrowREV, q = G.innerRadius, H = G.largeArc, J = G.length, U = G.outerRadius, Y = G.sweepFWD, te = O.props.radius, se = O.state, ce = se.lineHeight, ve = se.seqLength, fe = G.offset === void 0 ? 0 : G.offset, pe = O.findCoor(fe, q), xe = O.findCoor(fe, U), Re = O.findCoor(J + fe, q), Ee = O.findCoor(J + fe, U), _e = "", De = "";
                    if (W || F) {
                      var He = ce / 4, We = He / te, nt = Math.min(We / 2, J / ve), Ye = nt * 360;
                      if (W) {
                        pe = O.rotateCoor(pe, Ye), xe = O.rotateCoor(xe, Ye);
                        var Ae = O.findCoor(0, (q + U) / 2);
                        _e = "L ".concat(Ae.x, " ").concat(Ae.y);
                      } else {
                        Re = O.rotateCoor(Re, -Ye), Ee = O.rotateCoor(Ee, -Ye);
                        var $e = O.findCoor(J, (q + U) / 2);
                        De = "L ".concat($e.x, " ").concat($e.y);
                      }
                    }
                    var at = H ? 1 : 0, Qe = Y ? 1 : 0, gt = Y ? 0 : 1;
                    return "M ".concat(Re.x, " ").concat(Re.y, `
      A `).concat(q, " ").concat(q, ", 0, ").concat(at, ", ").concat(gt, ", ").concat(pe.x, " ").concat(pe.y, `
      L `).concat(pe.x, " ").concat(pe.y, `
      `).concat(_e, `
      L `).concat(xe.x, " ").concat(xe.y, `
      A `).concat(U, " ").concat(U, ", 0, ").concat(at, ", ").concat(Qe, ", ").concat(Ee.x, " ").concat(Ee.y, `
      `).concat(De, `
      Z`);
                  }, O.handleScrollEvent = function(G) {
                    var F = O.props, W = F.rotateOnScroll, q = F.seq;
                    if (W) {
                      var H = q.length * (G.deltaY / 5e3);
                      H = Math.floor(H), H === 0 && (G.deltaY > 0 ? H = 1 : H = -1);
                      var J = O.context.circular + H;
                      J = (J + q.length) % q.length, O.context.setCentralIndex("CIRCULAR", J);
                    }
                  }, O.state = {
                    annotationsInRows: [],
                    inlinedLabels: [],
                    lineHeight: 0,
                    outerLabels: [],
                    seqLength: 0
                  }, O;
                }
                return w.prototype.render = function() {
                  var I = this.props, O = I.center, G = I.compSeq, F = I.cutSites, W = I.handleMouseEvent, q = I.inputRef, H = I.name, J = I.radius, U = I.search, Y = I.seq, te = I.showComplement, se = I.showIndex, ce = I.size, ve = I.yDiff, fe = this.state, pe = fe.annotationsInRows, xe = fe.inlinedLabels, Re = fe.lineHeight, Ee = fe.outerLabels, _e = fe.seqLength, De = this, He = De.findCoor, We = De.genArc, nt = De.getRotation, Ye = De.rotateCoor, Ae = {
                    center: O,
                    findCoor: He,
                    genArc: We,
                    getRotation: nt,
                    inputRef: q,
                    lineHeight: Re,
                    radius: J,
                    rotateCoor: Ye,
                    seqLength: _e
                  }, $e = 4 + pe.length, at = "la-vz-".concat(H, "-viewer-circular");
                  return ce.height ? _.createElement(
                    "svg",
                    { ref: q(at, { type: "SEQ", viewer: "CIRCULAR" }), className: "la-vz-viewer-circular", "data-testid": "la-vz-viewer-circular", height: ce.height, id: at, overflow: "visible", style: y.viewerCircular, width: ce.width >= 0 ? ce.width : 0, onMouseDown: W, onMouseMove: W, onMouseUp: W, onWheel: this.handleScrollEvent },
                    _.createElement(
                      "g",
                      { className: "la-vz-circular-root", transform: "translate(0, ".concat(ve, ")") },
                      _.createElement(l.Selection, p({}, Ae, { seq: Y, totalRows: $e })),
                      _.createElement(i.CutSites, p({}, Ae, { cutSites: F, selectionRows: 4 })),
                      _.createElement(d.Index, p({}, Ae, { compSeq: G, name: H, seq: Y, showComplement: te, showIndex: se, size: ce, totalRows: $e, yDiff: ve })),
                      _.createElement(s.Find, { genArc: Ae.genArc, getRotation: Ae.getRotation, highlights: this.props.highlights, inputRef: Ae.inputRef, lineHeight: Ae.lineHeight, radius: Ae.radius, search: U, seqLength: Ae.seqLength }),
                      _.createElement(a.Annotations, p({}, Ae, { annotations: pe, inlinedAnnotations: xe, rowsToSkip: 0 })),
                      _.createElement(c.Labels, p({}, Ae, { labels: Ee, size: ce, yDiff: ve }))
                    )
                  ) : null;
                }, w.contextType = N.default, w.getDerivedStateFromProps = function(I) {
                  var O = 14, G = (0, T.stackElements)(I.annotations, I.seq.length), F = I.seq.length, W = I.cutSites, q = I.radius, H = q - 3 * O, J = [], U = [];
                  return G.forEach(function(Y) {
                    var te = H * Math.PI;
                    Y.forEach(function(se) {
                      var ce = (se.name.length + 2) * x.CHAR_WIDTH, ve = se.end - se.start;
                      se.start >= se.end && (ve += F);
                      var fe = 2 * te * (ve / F);
                      if (ce < fe)
                        J.push(se.id);
                      else {
                        var pe = se.end, xe = se.id, Re = se.name, Ee = se.start, _e = "annotation";
                        U.push({ end: pe, id: xe, name: Re, start: Ee, type: _e });
                      }
                    }), H -= O;
                  }), W.forEach(function(Y) {
                    return U.push(p(p(p({}, Y.enzyme), Y), { start: Y.fcut, type: "enzyme" }));
                  }), U.sort(function(Y, te) {
                    return Math.min(Y.start, Y.end) - Math.min(te.start, te.end);
                  }), {
                    annotationsInRows: G,
                    inlinedLabels: J,
                    lineHeight: O,
                    outerLabels: U,
                    seqLength: I.seq.length
                  };
                }, w;
              }(_.Component)
            );
            m.default = h;
            var C = function(S) {
              var w = S.className, I = S.color, O = S.direction, G = S.genArc, F = S.getRotation, W = S.inputRef, q = S.lineHeight, H = S.radius, J = S.seqLength, U = S.start, Y = S.style, te = S.end;
              te < U && (te += J);
              var se = Math.abs(te - U), ce = G({
                innerRadius: H - q / 2,
                largeArc: se > J / 2,
                length: se,
                outerRadius: H + q / 2,
                sweepFWD: !0
              }), ve = "circular-".concat(U, "-").concat(te, "-").concat(O);
              return _.createElement("path", { key: ve, ref: W(ve, {
                end: te,
                ref: ve,
                start: U,
                type: "FIND",
                viewer: "CIRCULAR"
              }), className: w, cursor: "pointer", d: ce, fill: I, id: ve, shapeRendering: "auto", stroke: "rgba(0, 0, 0, 0.5)", strokeWidth: 1, style: Y, transform: F(U) });
            };
            m.Arc = C;
          },
          /* 5 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var l = function(h, C) {
                return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, w) {
                  S.__proto__ = w;
                } || function(S, w) {
                  for (var I in w) Object.prototype.hasOwnProperty.call(w, I) && (S[I] = w[I]);
                }, l(h, C);
              };
              return function(h, C) {
                if (typeof C != "function" && C !== null)
                  throw new TypeError("Class extends value " + String(C) + " is not a constructor or null");
                l(h, C);
                function S() {
                  this.constructor = h;
                }
                h.prototype = C === null ? Object.create(C) : (S.prototype = C.prototype, new S());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(l) {
                for (var h, C = 1, S = arguments.length; C < S; C++) {
                  h = arguments[C];
                  for (var w in h) Object.prototype.hasOwnProperty.call(h, w) && (l[w] = h[w]);
                }
                return l;
              }, p.apply(this, arguments);
            }, _ = this && this.__rest || function(l, h) {
              var C = {};
              for (var S in l) Object.prototype.hasOwnProperty.call(l, S) && h.indexOf(S) < 0 && (C[S] = l[S]);
              if (l != null && typeof Object.getOwnPropertySymbols == "function")
                for (var w = 0, S = Object.getOwnPropertySymbols(l); w < S.length; w++)
                  h.indexOf(S[w]) < 0 && Object.prototype.propertyIsEnumerable.call(l, S[w]) && (C[S[w]] = l[S[w]]);
              return C;
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.CHAR_WIDTH = void 0;
            var x = b(1), N = b(6), T = b(4), A = b(7), y = b(10), a = b(28), i = b(8), s = b(12), d = b(26);
            m.CHAR_WIDTH = 7.2;
            var c = (
              /** @class */
              function(l) {
                g(h, l);
                function h(C) {
                  var S = l.call(this, C) || this;
                  return S.componentDidUpdate = function(w) {
                    var I, O, G, F, W;
                    S.selectionIsProgramatic(S.props.selection) && ((I = S.props.selection) === null || I === void 0 ? void 0 : I.start) !== ((O = w.selection) === null || O === void 0 ? void 0 : O.start) && ((G = S.props.selection) === null || G === void 0 ? void 0 : G.start) !== ((F = S.props.selection) === null || F === void 0 ? void 0 : F.end) && S.setCentralIndex("LINEAR", ((W = S.props.selection) === null || W === void 0 ? void 0 : W.start) || 0);
                  }, S.shouldComponentUpdate = function(w, I) {
                    return !(0, s.isEqual)(w, S.props) || !(0, s.isEqual)(I, S.state);
                  }, S.setCentralIndex = function(w, I) {
                    var O;
                    if (w !== "LINEAR" && w !== "CIRCULAR")
                      throw new Error("Unknown central index type: ".concat(w));
                    S.state.centralIndex[w.toLowerCase()] !== I && S.setState({ centralIndex: p(p({}, S.state.centralIndex), (O = {}, O[w.toLowerCase()] = I, O)) });
                  }, S.setSelection = function(w) {
                    w.parent, w.ref;
                    var I = _(w, ["parent", "ref"]);
                    S.props.selection || S.setState({ selection: w }), S.props.onSelection && S.props.onSelection(I);
                  }, S.getSelection = function(w, I) {
                    return I ? p(p({}, I), { clockwise: typeof I.clockwise > "u" || !!I.clockwise, type: "" }) : w;
                  }, S.linearProps = function() {
                    var w, I, O = S.props, G = O.seq, F = O.seqType, W = O.viewer, q = S.props.testSize || { height: S.props.height, width: S.props.width }, H = S.props.zoom.linear;
                    !((I = (w = S.props.refs) === null || w === void 0 ? void 0 : w.linear) === null || I === void 0) && I.current && S.props.children ? (q.width = S.props.refs.linear.current.clientWidth, q.height = S.props.refs.linear.current.clientHeight) : W.includes("both") && (q.width /= 2);
                    var J = Math.min(Math.round(H * 0.1 + 9.5), 18), U = Math.round(q.width / J * 1.4) || 1;
                    F === "aa" && (U = Math.round(U / 3)), H <= 5 ? U *= 3 : H <= 10 ? U *= 2 : H > 70 && (U = Math.round(U * (70 / H))), U = Math.max(1, U), q.width && U < G.length && (q.width -= 28);
                    var Y = q.width / U, te = 1.4 * J, se = 16;
                    return p(p({}, S.props), { bpsPerBlock: U, charWidth: Y, elementHeight: se, lineHeight: te, seqFontSize: J, size: q, zoom: { linear: H } });
                  }, S.circularProps = function() {
                    var w, I, O = S.props, G = O.seq.length, F = O.viewer, W = S.props.testSize || { height: S.props.height, width: S.props.width }, q = S.props.zoom.circular;
                    !((I = (w = S.props.refs) === null || w === void 0 ? void 0 : w.circular) === null || I === void 0) && I.current ? (W.width = S.props.refs.circular.current.clientWidth, W.height = S.props.refs.circular.current.clientHeight) : F.includes("both") && (W.width /= 2);
                    var H = {
                      x: W.width / 2,
                      y: W.height / 2
                    }, J = Math.min(W.height, W.width), U = 0.83, Y = Math.exp(Math.log(50 / G) / -Math.pow(100, U)), te = G * Y, se = J * 0.34;
                    return p(p({}, S.props), { bpsOnArc: te, center: H, radius: se === 0 ? 1 : se, size: W, yDiff: 0, zoom: { circular: q } });
                  }, S.state = {
                    centralIndex: {
                      circular: 0,
                      linear: 0,
                      setCentralIndex: S.setCentralIndex
                    },
                    selection: S.getSelection(d.defaultSelection, C.selection)
                  }, S;
                }
                return h.prototype.selectionIsProgramatic = function(C) {
                  return C ? !C.type : !1;
                }, h.prototype.render = function() {
                  var C = this, S = this.props, w = S.selection, I = S.seq, O = S.viewer, G = this.state, F = G.centralIndex, W = G.selection, q = this.linearProps(), H = this.circularProps(), J = this.getSelection(W, w);
                  return x.createElement(
                    "div",
                    { ref: this.props.targetRef, className: "la-vz-viewer-container", "data-testid": "la-vz-viewer-container", style: {
                      height: "100%",
                      position: "relative",
                      width: "100%"
                    } },
                    x.createElement(
                      i.default.Provider,
                      { value: F },
                      x.createElement(
                        d.default.Provider,
                        { value: J },
                        x.createElement(a.default, { bpsPerBlock: q.bpsPerBlock, center: H.center, centralIndex: F.circular, seq: I, setCentralIndex: this.setCentralIndex, setSelection: this.setSelection, yDiff: H.yDiff }, function(U, Y, te) {
                          return x.createElement(A.EventHandler, { bpsPerBlock: q.bpsPerBlock, copyEvent: C.props.copyEvent, handleMouseEvent: Y, selectAllEvent: C.props.selectAllEvent, selection: J, seq: I, setSelection: C.setSelection }, C.props.children ? C.props.children({
                            circularProps: H,
                            handleMouseEvent: Y,
                            inputRef: U,
                            linearProps: q,
                            onUnmount: te
                          }) : x.createElement(
                            x.Fragment,
                            null,
                            O === "linear" && x.createElement(y.default, p({}, q, { handleMouseEvent: Y, inputRef: U, onUnmount: te })),
                            O === "circular" && x.createElement(T.default, p({}, H, { handleMouseEvent: Y, inputRef: U, onUnmount: te })),
                            O === "both" && x.createElement(
                              x.Fragment,
                              null,
                              x.createElement(T.default, p({}, H, { handleMouseEvent: Y, inputRef: U, onUnmount: te })),
                              x.createElement(y.default, p({}, q, { handleMouseEvent: Y, inputRef: U, onUnmount: te }))
                            ),
                            O === "both_flip" && x.createElement(
                              x.Fragment,
                              null,
                              x.createElement(y.default, p({}, q, { handleMouseEvent: Y, inputRef: U, onUnmount: te })),
                              x.createElement(T.default, p({}, H, { handleMouseEvent: Y, inputRef: U, onUnmount: te }))
                            )
                          ));
                        })
                      )
                    )
                  );
                }, h;
              }(x.Component)
            );
            m.default = (0, N.withResizeDetector)(c);
          },
          /* 6 */
          /***/
          (Z) => {
            Z.exports = Zc;
          },
          /* 7 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var a = function(i, s) {
                return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
                  d.__proto__ = c;
                } || function(d, c) {
                  for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (d[l] = c[l]);
                }, a(i, s);
              };
              return function(i, s) {
                if (typeof s != "function" && s !== null)
                  throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                a(i, s);
                function d() {
                  this.constructor = i;
                }
                i.prototype = s === null ? Object.create(s) : (d.prototype = s.prototype, new d());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(a) {
                for (var i, s = 1, d = arguments.length; s < d; s++) {
                  i = arguments[s];
                  for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (a[c] = i[c]);
                }
                return a;
              }, p.apply(this, arguments);
            }, _ = this && this.__awaiter || function(a, i, s, d) {
              function c(l) {
                return l instanceof s ? l : new s(function(h) {
                  h(l);
                });
              }
              return new (s || (s = Promise))(function(l, h) {
                function C(I) {
                  try {
                    w(d.next(I));
                  } catch (O) {
                    h(O);
                  }
                }
                function S(I) {
                  try {
                    w(d.throw(I));
                  } catch (O) {
                    h(O);
                  }
                }
                function w(I) {
                  I.done ? l(I.value) : c(I.value).then(C, S);
                }
                w((d = d.apply(a, i || [])).next());
              });
            }, x = this && this.__generator || function(a, i) {
              var s = { label: 0, sent: function() {
                if (l[0] & 1) throw l[1];
                return l[1];
              }, trys: [], ops: [] }, d, c, l, h;
              return h = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
                return this;
              }), h;
              function C(w) {
                return function(I) {
                  return S([w, I]);
                };
              }
              function S(w) {
                if (d) throw new TypeError("Generator is already executing.");
                for (; s; ) try {
                  if (d = 1, c && (l = w[0] & 2 ? c.return : w[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, w[1])).done) return l;
                  switch (c = 0, l && (w = [w[0] & 2, l.value]), w[0]) {
                    case 0:
                    case 1:
                      l = w;
                      break;
                    case 4:
                      return s.label++, { value: w[1], done: !1 };
                    case 5:
                      s.label++, c = w[1], w = [0];
                      continue;
                    case 7:
                      w = s.ops.pop(), s.trys.pop();
                      continue;
                    default:
                      if (l = s.trys, !(l = l.length > 0 && l[l.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                        s = 0;
                        continue;
                      }
                      if (w[0] === 3 && (!l || w[1] > l[0] && w[1] < l[3])) {
                        s.label = w[1];
                        break;
                      }
                      if (w[0] === 6 && s.label < l[1]) {
                        s.label = l[1], l = w;
                        break;
                      }
                      if (l && s.label < l[2]) {
                        s.label = l[2], s.ops.push(w);
                        break;
                      }
                      l[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  w = i.call(a, s);
                } catch (I) {
                  w = [6, I], c = 0;
                } finally {
                  d = l = 0;
                }
                if (w[0] & 5) throw w[1];
                return { value: w[0] ? w[1] : void 0, done: !0 };
              }
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.EventHandler = void 0;
            var N = b(1), T = b(8), A = b(9), y = (
              /** @class */
              function(a) {
                g(i, a);
                function i() {
                  var s = a !== null && a.apply(this, arguments) || this;
                  return s.clickedOnce = null, s.clickedTwice = null, s.handleKeyPress = function(d) {
                    var c = s.keypressMap(d);
                    c && (d.preventDefault(), s.handleSeqInteraction(c));
                  }, s.keypressMap = function(d) {
                    var c = s.props, l = c.copyEvent, h = c.selectAllEvent;
                    if (l && l(d))
                      return "Copy";
                    if (h && h(d))
                      return "SelectAll";
                    var C = d.key, S = d.shiftKey;
                    switch (C) {
                      case "ArrowLeft":
                      case "ArrowRight":
                      case "ArrowUp":
                      case "ArrowDown":
                        return S ? "Shift".concat(C) : C;
                      default:
                        return null;
                    }
                  }, s.handleSeqInteraction = function(d) {
                    return _(s, void 0, void 0, function() {
                      var c, l, h, C, S, w, I, O, G, F, W;
                      return x(this, function(q) {
                        switch (c = this.props.seq, l = c.length, h = this.props.bpsPerBlock || 1, d) {
                          case "SelectAll": {
                            this.selectAllHotkey();
                            break;
                          }
                          case "Copy": {
                            this.handleCopy();
                            break;
                          }
                          case "ArrowUp":
                          case "ArrowRight":
                          case "ArrowDown":
                          case "ArrowLeft":
                          case "ShiftArrowUp":
                          case "ShiftArrowRight":
                          case "ShiftArrowDown":
                          case "ShiftArrowLeft": {
                            if (C = this.props, S = C.selection, w = C.setSelection, I = S.end, O = S.start, typeof O > "u" || typeof I > "u")
                              return [
                                2
                                /*return*/
                              ];
                            G = S.clockwise, F = I, d === "ArrowUp" || d === "ShiftArrowUp" ? l / h > 1 ? F -= h : F -= 1 : d === "ArrowRight" || d === "ShiftArrowRight" ? F += 1 : d === "ArrowDown" || d === "ShiftArrowDown" ? l / h > 1 ? F += h : F += 1 : (d === "ArrowLeft" || d === "ShiftArrowLeft") && (F -= 1), F <= -1 && (F = l + F), F >= l + 1 && (F -= l), W = Math.abs(O - I), G = W === 0 ? d === "ArrowRight" || d === "ShiftArrowRight" || d === "ArrowDown" || d === "ShiftArrowDown" : G, F !== O && !d.startsWith("Shift") ? w({
                              clockwise: !0,
                              end: F,
                              start: F,
                              type: "SEQ"
                            }) : d.startsWith("Shift") && w({
                              clockwise: G,
                              end: F,
                              start: O,
                              type: "SEQ"
                            });
                            break;
                          }
                        }
                        return [
                          2
                          /*return*/
                        ];
                      });
                    });
                  }, s.handleCopy = function() {
                    var d = s.props, c = d.selection, l = c.end, h = c.ref, C = c.start, S = d.seq;
                    if (document) {
                      var w = document.activeElement, I = document.createElement("textarea");
                      h === "ALL" ? I.innerText = S : I.innerText = S.substring(C || 0, l), document.body && document.body.appendChild(I), I.select(), document.execCommand("copy"), I.remove(), w && w.focus();
                    }
                  }, s.selectAllHotkey = function() {
                    var d = s.props, c = d.selection, l = d.seq, h = d.setSelection, C = p(p({}, c), { clockwise: !0, end: l.length, start: 0 });
                    h(C);
                  }, s.handleTripleClick = function() {
                    s.selectAllHotkey();
                  }, s.resetClicked = (0, A.default)(function() {
                    s.clickedOnce = null, s.clickedTwice = null;
                  }, 250), s.handleMouseEvent = function(d) {
                    var c = s.props.handleMouseEvent;
                    d.type === "mouseup" && (s.resetClicked(), s.clickedOnce === d.target && s.clickedTwice === d.target ? (s.handleTripleClick(), s.resetClicked()) : s.clickedOnce === d.target && s.clickedTwice === null ? (s.clickedOnce = d.target, s.clickedTwice = d.target, s.resetClicked()) : (s.clickedOnce = d.target, s.resetClicked()));
                    var l = d.button, h = d.ctrlKey, C = d.type, S = C === "mousedown" && l === 0 && h;
                    d.button === 0 && !S && c(d);
                  }, s.render = function() {
                    return N.createElement("div", { className: "la-vz-viewer-event-router", id: "la-vz-event-router", role: "presentation", style: {
                      display: "flex",
                      flexDirection: "row",
                      height: "100%",
                      outline: "none",
                      position: "absolute",
                      width: "100%"
                    }, tabIndex: -1, onKeyDown: s.handleKeyPress, onMouseDown: s.handleMouseEvent, onMouseMove: s.props.handleMouseEvent, onMouseUp: s.handleMouseEvent }, s.props.children);
                  }, s;
                }
                return i.contextType = T.default, i;
              }(N.PureComponent)
            );
            m.EventHandler = y;
          },
          /* 8 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(1), p = {
              circular: 0,
              linear: 0,
              setCentralIndex: function(x, N) {
              }
            }, _ = g.createContext(p);
            _.displayName = "CentralIndexContext", m.default = _;
          },
          /* 9 */
          /***/
          (Z, m) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.default = function(b, g, p) {
              p === void 0 && (p = !0);
              var _;
              return function() {
                for (var x = [], N = 0; N < arguments.length; N++)
                  x[N] = arguments[N];
                var T = function() {
                  _ = null, p || b.apply(this, x);
                }, A = p && !_;
                clearTimeout(_), _ = setTimeout(T, g), A && b.apply(this, x);
              };
            };
          },
          /* 10 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var a = function(i, s) {
                return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
                  d.__proto__ = c;
                } || function(d, c) {
                  for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (d[l] = c[l]);
                }, a(i, s);
              };
              return function(i, s) {
                if (typeof s != "function" && s !== null)
                  throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                a(i, s);
                function d() {
                  this.constructor = i;
                }
                i.prototype = s === null ? Object.create(s) : (d.prototype = s.prototype, new d());
              };
            }();
            Object.defineProperty(m, "__esModule", { value: !0 });
            var p = b(1), _ = b(11), x = b(12), N = b(13), T = b(14), A = b(16), y = (
              /** @class */
              function(a) {
                g(i, a);
                function i() {
                  var s = a !== null && a.apply(this, arguments) || this;
                  return s.shouldComponentUpdate = function(d) {
                    return !(0, x.isEqual)(d, s.props);
                  }, s;
                }
                return i.prototype.render = function() {
                  var s = this.props, d = s.annotations, c = s.bpsPerBlock, l = s.compSeq, h = s.cutSites, C = s.elementHeight, S = s.highlights, w = s.lineHeight, I = s.onUnmount, O = s.primers, G = s.search, F = s.seq, W = s.seqType, q = s.showComplement, H = s.showIndex, J = s.size, U = s.translations, Y = s.zoom, te = Y.linear > 10, se = F.length, ce = Math.round(Math.ceil(se / c));
                  ce === Number.POSITIVE_INFINITY && (ce = 1);
                  var ve = new Array(ce), fe = new Array(ce), pe = new Array(ce), xe = new Array(ce), Re = h.length ? (0, _.createSingleRows)(h, c, ce) : new Array(ce).fill([]);
                  function Ee(lt) {
                    return lt.forEach(function(et) {
                      et.end === 0 && et.start > et.end && (et.end = se), et.start === se && et.end < et.start && (et.start = 0);
                    }), lt;
                  }
                  for (var _e = (0, _.createMultiRows)((0, _.stackElements)(Ee(O.filter(function(lt) {
                    return lt.direction === 1;
                  })), F.length), c, ce), De = (0, _.createMultiRows)((0, _.stackElements)(Ee(O.filter(function(lt) {
                    return lt.direction === -1;
                  })), F.length), c, ce), He = (0, _.createMultiRows)((0, _.stackElements)(Ee(d), F.length), c, ce), We = G && G.length ? (0, _.createSingleRows)(G, c, ce) : new Array(ce).fill([]), nt = (0, _.createSingleRows)(S, c, ce), Ye = U.length ? (0, _.createMultiRows)((0, _.stackElements)((0, N.createTranslations)(U, F, W), F.length), c, ce) : new Array(ce).fill([]), Ae = 0; Ae < ce; Ae += 1) {
                    var $e = Ae * c, at = $e + c;
                    fe[Ae] = F.substring($e, at), pe[Ae] = l.substring($e, at), ve[Ae] = fe[Ae] + String(Ae);
                    var Qe = w * 1.1;
                    W != "aa" && (Qe += w), te && (Qe += q ? w : 0), _e[Ae].length && (Qe += _e[Ae].length * w), De[Ae].length && (Qe += De[Ae].length * w), H && (Qe += w), Ye[Ae].length && (Qe += Ye[Ae].length * C * 2), He[Ae].length && (Qe += He[Ae].length * C), Re[Ae].length && (Qe += w), xe[Ae] = Qe;
                  }
                  for (var gt = [], It = 0, Ae = 0; Ae < ce; Ae += 1) {
                    var $e = Ae * c;
                    gt.push(p.createElement(A.SeqBlock, { key: ve[Ae], annotationRows: He[Ae], blockHeight: xe[Ae], bpColors: this.props.bpColors, bpsPerBlock: c, charWidth: this.props.charWidth, compSeq: pe[Ae], cutSiteRows: Re[Ae], elementHeight: C, firstBase: $e, fullSeq: F, handleMouseEvent: this.props.handleMouseEvent, highlights: nt[Ae], id: ve[Ae], inputRef: this.props.inputRef, lineHeight: w, primerFwdRows: _e[Ae], primerRevRows: De[Ae], searchRows: We[Ae], seq: fe[Ae], seqFontSize: this.props.seqFontSize, seqType: W, showComplement: q, showIndex: H, size: J, translationRows: Ye[Ae], y: It, zoom: Y, zoomed: te, onUnmount: I })), It += xe[Ae];
                  }
                  return gt.length && p.createElement(T.InfiniteScroll, { blockHeights: xe, bpsPerBlock: c, seqBlocks: gt, size: J, totalHeight: xe.reduce(function(lt, et) {
                    return lt + et;
                  }, 0) });
                }, i;
              }(p.Component)
            );
            m.default = y;
          },
          /* 11 */
          /***/
          function(Z, m) {
            var b = this && this.__spreadArray || function(T, A, y) {
              if (y || arguments.length === 2) for (var a = 0, i = A.length, s; a < i; a++)
                (s || !(a in A)) && (s || (s = Array.prototype.slice.call(A, 0, a)), s[a] = A[a]);
              return T.concat(s || Array.prototype.slice.call(A));
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.createSingleRows = m.createMultiRows = m.stackElements = void 0;
            var g = function(T) {
              return T[T.length - 1];
            }, p = function(T) {
              return T[0];
            }, _ = function(T, A) {
              return b([], T, !0).sort(function(y, a) {
                return y.end - a.end;
              }).sort(function(y, a) {
                return y.start - a.start;
              }).reduce(function(y, a) {
                var i = y.findIndex(function(s) {
                  return a.end === a.start ? !1 : g(s).end <= g(s).start ? g(s).end + A <= a.start : a.end > a.start ? g(s).end <= a.start : g(s).end < a.start && a.end < p(s).start;
                });
                return i > -1 ? y[i].push(a) : y.push([a]), y;
              }, []);
            };
            m.stackElements = _;
            var x = function(T, A, y) {
              for (var a = new Array(y), i = 0; i < y; i += 1) {
                a[i] = [];
                for (var s = 0; s < T.length; s += 1)
                  a[i][s] = [];
              }
              for (var i = 0; i < T.length; i += 1)
                for (var s = 0; s < T[i].length; s += 1)
                  if (T[i][s].start < T[i][s].end)
                    for (var d = Math.max(0, Math.floor(T[i][s].start / A)), c = Math.floor((T[i][s].end - 1) / A); d <= c && d < y; )
                      a[d][i].push(T[i][s]), d += 1;
                  else if (T[i][s].end < T[i][s].start) {
                    var l = Math.floor((T[i][s].end - 1) / A);
                    for (T[i][s].end === 0 && (l = -1); l >= 0 && l < a.length; )
                      a[l][i].push(T[i][s]), l -= 1;
                    for (var h = Math.floor(T[i][s].start / A); h < y; )
                      a[h][i].push(T[i][s]), h += 1;
                  } else if (T[i][s].end === T[i][s].start) {
                    for (var C = 0; C < a.length; C += 1)
                      a[C][i].push(T[i][s]);
                    if (T[i][s].end === 0)
                      continue;
                    var h = Math.floor(T[i][s].start / A);
                    a[h][i].push(T[i][s]);
                  }
              for (var i = 0; i < y; i += 1)
                a[i] = a[i].filter(function(w) {
                  return w[0];
                });
              return a;
            };
            m.createMultiRows = x;
            var N = function(T, A, y, a) {
              a === void 0 && (a = !0);
              for (var i = new Array(y), s = 0; s < y; s += 1)
                i[s] = [];
              for (var d = function(c) {
                var l = T[c], h = l.end, C = l.start;
                if (C < h)
                  for (var S = Math.floor(C / A), w = Math.floor((h - 1) / A); S <= w && S < y; )
                    i[S].push(T[c]), S += 1;
                else {
                  for (var I = Math.floor(h / A); I >= 0; )
                    i[I].push(T[c]), I -= 1;
                  for (var O = Math.floor(C / A); O < y; )
                    (a || i[O].every(function(G) {
                      return G.id !== T[c].id;
                    })) && i[O].push(T[c]), O += 1;
                }
              }, s = 0; s < T.length; s += 1)
                d(s);
              return i;
            };
            m.createSingleRows = N;
          },
          /* 12 */
          /***/
          (Z, m) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.isEqual = void 0;
            var b = function(g, p) {
              if (g === p)
                return !0;
              if (typeof g == "object" && g !== null && typeof p == "object" && p !== null) {
                if (Object.keys(g).length !== Object.keys(p).length)
                  return !1;
                for (var _ in g)
                  if (Object.prototype.hasOwnProperty.call(p, _)) {
                    if (!(0, m.isEqual)(g[_], p[_]))
                      return !1;
                  } else
                    return !1;
                return !0;
              }
              return !1;
            };
            m.isEqual = b;
          },
          /* 13 */
          /***/
          function(Z, m) {
            var b = this && this.__assign || function() {
              return b = Object.assign || function(F) {
                for (var W, q = 1, H = arguments.length; q < H; q++) {
                  W = arguments[q];
                  for (var J in W) Object.prototype.hasOwnProperty.call(W, J) && (F[J] = W[J]);
                }
                return F;
              }, b.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.randomID = m.createTranslations = m.translate = m.directionality = m.reverseComplement = m.complement = m.reverse = m.guessType = m.getAlphabet = m.nucleotides = void 0, m.nucleotides = { a: "a", c: "c", g: "g", t: "t", u: "u" };
            var g = {
              // ".": { a: "a", c: "c", g: "g", t: "t" },
              b: { c: "c", g: "g", t: "t" },
              d: { a: "a", g: "g", t: "t" },
              h: { a: "a", c: "c", t: "t" },
              k: { g: "g", t: "t" },
              m: { a: "a", c: "c" },
              n: { a: "a", c: "c", g: "g", t: "t" },
              r: { a: "a", g: "g" },
              s: { c: "c", g: "g" },
              v: { a: "a", c: "c", g: "g" },
              w: { a: "a", t: "t" },
              x: { a: "a", c: "c", g: "g", t: "t" },
              y: { c: "c", t: "t" }
            }, p = {
              // ".": { c: "c", g: "g", u: "u" },
              b: { c: "c", g: "g", u: "u" },
              d: { a: "a", g: "g", u: "u" },
              h: { a: "a", c: "c", u: "u" },
              k: { g: "g", u: "u" },
              m: { a: "a", c: "c" },
              n: { a: "a", c: "c", g: "g", u: "u" },
              r: { a: "a", g: "g" },
              s: { c: "c", g: "g" },
              v: { a: "a", c: "c", g: "g" },
              w: { a: "a", u: "u" },
              x: { a: "a", c: "c", g: "g", u: "u" },
              y: { c: "c", u: "u" }
            }, _ = {
              AAA: "K",
              AAC: "N",
              AAG: "K",
              AAT: "N",
              ACA: "T",
              ACC: "T",
              ACG: "T",
              ACT: "T",
              AGA: "R",
              AGC: "S",
              AGG: "R",
              AGT: "S",
              ATA: "I",
              ATC: "I",
              ATG: "M",
              ATT: "I",
              CAA: "Q",
              CAC: "H",
              CAG: "Q",
              CAT: "H",
              CCA: "P",
              CCC: "P",
              CCG: "P",
              CCT: "P",
              CGA: "R",
              CGC: "R",
              CGG: "R",
              CGT: "R",
              CTA: "L",
              CTC: "L",
              CTG: "L",
              CTT: "L",
              GAA: "E",
              GAC: "D",
              GAG: "E",
              GAT: "D",
              GCA: "A",
              GCC: "A",
              GCG: "A",
              GCT: "A",
              GGA: "G",
              GGC: "G",
              GGG: "G",
              GGT: "G",
              GTA: "V",
              GTC: "V",
              GTG: "V",
              GTT: "V",
              TAA: "*",
              TAC: "Y",
              TAG: "*",
              TAT: "Y",
              TCA: "S",
              TCC: "S",
              TCG: "S",
              TCT: "S",
              TGA: "*",
              TGC: "C",
              TGG: "W",
              TGT: "C",
              TTA: "L",
              TTC: "F",
              TTG: "L",
              TTT: "F"
            }, x = Array.from(new Set(Object.values(_)).values()).join(""), N = x.toLowerCase().split("").filter(function(F) {
              return F !== "*";
            }).reduce(function(F, W) {
              var q;
              return b(b({}, F), (q = {}, q[W] = W, q));
            }, {}), T = {
              b: { d: "d", n: "n" },
              j: { i: "i", l: "l" },
              x: N,
              z: { e: "e", q: "q" }
            }, A = function(F) {
              return {
                aa: T,
                dna: g,
                rna: p,
                unknown: g
              }[F];
            };
            m.getAlphabet = A;
            var y = new RegExp("^[".concat(x, "BJXZ]+$"), "i"), a = function(F) {
              return F = F.substring(0, 1e3), /^[atgcn.]+$/i.test(F) ? "dna" : /^[augcn.]+$/i.test(F) ? "rna" : y.test(F) ? "aa" : "unknown";
            };
            m.guessType = a;
            var i = function(F) {
              return F.split("").reverse().join("");
            };
            m.reverse = i;
            var s = {
              a: "t",
              b: "v",
              c: "g",
              d: "h",
              g: "c",
              h: "d",
              k: "m",
              m: "k",
              n: "n",
              r: "y",
              s: "s",
              t: "a",
              u: "a",
              v: "b",
              w: "w",
              x: "x",
              y: "r"
            };
            s = b(b({}, s), Object.keys(s).reduce(function(F, W) {
              var q;
              return b(b({}, F), (q = {}, q[W.toUpperCase()] = s[W].toUpperCase(), q));
            }, {}));
            var d = {
              aa: Object.keys(N).reduce(function(F, W) {
                var q;
                return b(b({}, F), (q = {}, q[W.toUpperCase()] = "", q[W.toLowerCase()] = "", q));
              }, {
                B: "",
                J: "",
                Z: "",
                b: "",
                j: "",
                z: ""
              }),
              dna: s,
              rna: b(b({}, s), { A: "U", a: "u" }),
              undefined: s
            }, c = function(F, W) {
              if (!F)
                return { compSeq: "", seq: "" };
              for (var q = d[W], H = "", J = "", U = 0, Y = F.length; U < Y; U += 1)
                F[U] in q && (H += F[U], J += q[F[U]]);
              return { compSeq: J, seq: H };
            };
            m.complement = c;
            var l = function(F, W) {
              var q = (0, m.complement)(F, W).compSeq;
              return q.split("").reverse().join("");
            };
            m.reverseComplement = l;
            var h = /* @__PURE__ */ new Set(["FWD", "fwd", "FORWARD", "forward", "FOR", "for", "TOP", "top", "1", 1]), C = /* @__PURE__ */ new Set(["REV", "rev", "REVERSE", "reverse", "BOTTOM", "bottom", "-1", -1]), S = function(F) {
              return F ? h.has(F) ? 1 : C.has(F) ? -1 : 0 : 0;
            };
            m.directionality = S;
            var w = Object.keys(_).reduce(function(F, W) {
              var q;
              return b(b({}, F), (q = {}, q[W.replace(/T/gi, "U")] = _[W], q));
            }, {}), I = function(F, W) {
              if (W === "aa")
                return F;
              var q = _;
              W === "rna" && (q = w);
              for (var H = F.toUpperCase(), J = H.length, U = "", Y = 0, te = 0; Y < J; Y += 3, te += 1)
                Y + 2 < J && (U += q[H[Y] + H[Y + 1] + H[Y + 2]] || "?");
              return U;
            };
            m.translate = I;
            var O = function(F, W, q) {
              var H = W + W, J = q === "aa" ? 1 : 3;
              return F.map(function(U) {
                var Y = U.direction, te = U.start, se = U.end;
                te > se && (se += W.length);
                var ce = Y === 1 ? H.substring(te, se) : (0, m.reverseComplement)(H.substring(te, se), q), ve = Y === 1 ? (0, m.translate)(ce, q) : (0, m.translate)(ce, q).split("").reverse().join(""), fe = Y === 1 ? te : se - ve.length * J, pe = Y === 1 ? (te + ve.length * J) % W.length : se % W.length;
                return pe === 0 && (pe += W.length), b(b({}, U), { AAseq: ve, end: pe, start: fe });
              });
            };
            m.createTranslations = O;
            var G = function(F) {
              F === void 0 && (F = 10);
              var W = 1, q = 12 - W;
              q = Math.pow(10, F + W);
              var H = q / 10, J = Math.floor(Math.random() * (q - H + 1)) + H;
              return String(J).substring(W);
            };
            m.randomID = G;
          },
          /* 14 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var A = function(y, a) {
                return A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
                  i.__proto__ = s;
                } || function(i, s) {
                  for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (i[d] = s[d]);
                }, A(y, a);
              };
              return function(y, a) {
                if (typeof a != "function" && a !== null)
                  throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                A(y, a);
                function i() {
                  this.constructor = y;
                }
                y.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
              };
            }();
            Object.defineProperty(m, "__esModule", { value: !0 }), m.InfiniteScroll = void 0;
            var p = b(1), _ = b(8), x = b(12), N = b(15), T = (
              /** @class */
              function(A) {
                g(y, A);
                function y(a) {
                  var i = A.call(this, a) || this;
                  return i.scroller = p.createRef(), i.insideDOM = p.createRef(), i.componentDidMount = function() {
                    i.handleScrollOrResize(), window.addEventListener("resize", i.handleScrollOrResize);
                  }, i.componentDidUpdate = function(s, d, c) {
                    if (i.scroller.current) {
                      var l = i.props, h = l.seqBlocks, C = l.size, S = i.state, w = S.centralIndex, I = S.visibleBlocks;
                      i.context && w !== i.context.linear ? i.scrollToCentralIndex() : !(0, x.isEqual)(s.size, C) || h.length !== s.seqBlocks.length ? i.handleScrollOrResize() : (0, x.isEqual)(d.visibleBlocks, I) && i.restoreSnapshot(c);
                    }
                  }, i.componentWillUnmount = function() {
                    window.removeEventListener("resize", i.handleScrollOrResize);
                  }, i.getSnapshotBeforeUpdate = function(s) {
                    var d = i.scroller.current ? i.scroller.current.scrollTop : 0, c = s.blockHeights, l = 0, h = 0;
                    do
                      h += c[l], l += 1;
                    while (h + c[l] < d && l < c.length);
                    var C = d - h;
                    return { blockIndex: l, blockY: C };
                  }, i.scrollToCentralIndex = function() {
                    if (i.scroller.current) {
                      var s = i.props, d = s.blockHeights, c = s.bpsPerBlock, l = s.seqBlocks, h = s.size.height, C = s.totalHeight, S = i.state.visibleBlocks, w = i.scroller.current, I = w.clientHeight, O = w.scrollHeight, G = i.context.linear, F = l.findIndex(function(Y) {
                        return Y.props.firstBase <= G && Y.props.firstBase + c >= G;
                      }), W = [];
                      if (O <= I)
                        W = S;
                      else if (F > -1) {
                        var q = l[F], H = F > 0 ? d[F - 1] : 0, J = q.props.y - H, U = J + h;
                        U > C && (U = C, J = C - h), d.reduce(function(Y, te, se) {
                          return Y >= J && Y <= U && W.push(se), Y + te;
                        }, 0), i.scroller.current.scrollTop = q.props.y - d[0] / 2;
                      }
                      (0, x.isEqual)(W, S) || i.setState({
                        centralIndex: G,
                        visibleBlocks: W
                      });
                    }
                  }, i.restoreSnapshot = function(s) {
                    if (i.scroller.current) {
                      var d = i.props.blockHeights, c = s.blockIndex, l = s.blockY, h = d.slice(0, c).reduce(function(C, S) {
                        return C + S;
                      }, 0) + l;
                      i.scroller.current.scrollTop = h;
                    }
                  }, i.handleScrollOrResize = function() {
                    if (!(!i.scroller.current || !i.insideDOM.current)) {
                      var s = i.props, d = s.blockHeights, c = s.size.height, l = s.totalHeight, h = i.state.visibleBlocks, C = [], S = 0;
                      if (i.scroller && i.insideDOM) {
                        var w = i.scroller.current.getBoundingClientRect().top, I = i.insideDOM.current.getBoundingClientRect().top;
                        S = I - w;
                      }
                      S = -S + 35, S = Math.max(0, S), S = Math.min(l - c, S);
                      var O = S + c;
                      S -= 2 * d[0], d.reduce(function(G, F, W) {
                        return G >= S && G <= O && C.push(W), G + F;
                      }, 0), (0, x.isEqual)(C, h) || i.setState({ visibleBlocks: C });
                    }
                  }, i.incrementScroller = function(s) {
                    i.stopIncrementingScroller(), i.timeoutID = setTimeout(function() {
                      i.scroller.current && (i.scroller.current.scrollTop += s, i.incrementScroller(s));
                    }, 5);
                  }, i.stopIncrementingScroller = function() {
                    i.timeoutID && (clearTimeout(i.timeoutID), i.timeoutID = null);
                  }, i.handleMouseOver = function(s) {
                    if (i.scroller.current) {
                      if (s.buttons !== 1) {
                        i.timeoutID && i.stopIncrementingScroller();
                        return;
                      }
                      var d = i.scroller.current.getBoundingClientRect(), c = (s.clientY - d.top) / d.height;
                      if (c > 0.9) {
                        c = Math.min(1, c);
                        var l = c - 0.9;
                        l *= 10;
                        var h = 15 * l;
                        i.incrementScroller(h);
                      } else if (c < 0.1) {
                        c = 0.1 - Math.max(0, c);
                        var l = 10 * c, h = -15 * l;
                        i.incrementScroller(h);
                      } else
                        i.stopIncrementingScroller();
                    }
                  }, i.state = {
                    centralIndex: 0,
                    // start off with first 5 blocks shown
                    visibleBlocks: new Array(Math.min(5, a.seqBlocks.length)).fill(null).map(function(s, d) {
                      return d;
                    })
                  }, i;
                }
                return y.prototype.render = function() {
                  var a = this.props, i = a.blockHeights, s = a.seqBlocks, d = a.size.width, c = a.totalHeight, l = this.state.visibleBlocks, h = l[0], C = i.slice(0, h).reduce(function(S, w) {
                    return S + w;
                  }, 0);
                  return p.createElement(
                    "div",
                    { ref: this.scroller, className: "la-vz-linear-scroller", "data-testid": "la-vz-viewer-linear", style: N.linearScroller, onFocus: function() {
                    }, onMouseOver: this.handleMouseOver, onScroll: this.handleScrollOrResize },
                    p.createElement(
                      "div",
                      { ref: this.insideDOM, className: "la-vz-seqblock-container", style: { height: c, width: "100%" } },
                      p.createElement("div", { className: "la-vz-seqblock-padding-top", style: { height: C, width: d || 0 } }),
                      l.map(function(S) {
                        return s[S];
                      })
                    )
                  );
                }, y.contextType = _.default, y;
              }(p.PureComponent)
            );
            m.InfiniteScroll = T;
          },
          /* 15 */
          /***/
          function(Z, m) {
            var b = this && this.__assign || function() {
              return b = Object.assign || function(g) {
                for (var p, _ = 1, x = arguments.length; _ < x; _++) {
                  p = arguments[_];
                  for (var N in p) Object.prototype.hasOwnProperty.call(p, N) && (g[N] = p[N]);
                }
                return g;
              }, b.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.seqBlock = m.linearScroller = m.circularLabelLine = m.circularLabelHover = m.circularLabel = m.viewerCircular = m.translationAminoAcidLabel = m.translationHandleLabel = m.translationHandle = m.annotationLabel = m.annotation = m.indexTickLabel = m.indexTick = m.indexLine = m.cutSiteHighlight = m.cutSite = m.selectionEdge = m.selection = m.highlight = m.search = m.svgText = void 0, m.svgText = {
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              background: "none",
              fill: "rgb(42, 42, 42)",
              fontFamily: "Roboto Mono, Monaco, monospace",
              msUserSelect: "none",
              userSelect: "none"
            }, m.search = {
              cursor: "pointer",
              fill: "rgba(255, 251, 7, 0.5)"
            }, m.highlight = {
              cursor: "pointer",
              fill: "rgba(255, 251, 7, 0.25)",
              strokeWidth: "1"
            }, m.selection = {
              fill: "rgb(222, 246, 255)",
              shapeRendering: "auto"
            }, m.selectionEdge = {
              fill: "black",
              shapeRendering: "geometricPrecision",
              stroke: "black"
            }, m.cutSite = {
              fill: "transparent",
              shapeRendering: "auto",
              stroke: "rgb(115, 119, 125)",
              strokeWidth: "1"
            }, m.cutSiteHighlight = {
              cursor: "pointer",
              fill: "rgb(255, 251, 7)",
              fillOpacity: 0,
              shapeRendering: "auto",
              stroke: "rgb(115, 119, 125)",
              strokeWidth: "1"
            }, m.indexLine = {
              fill: "transparent",
              shapeRendering: "geometricPrecision",
              stroke: "rgb(115, 119, 125)",
              strokeWidth: "1"
            }, m.indexTick = {
              fill: "transparent",
              shapeRendering: "geometricPrecision",
              stroke: "rgb(115, 119, 125)",
              strokeWidth: "1"
            }, m.indexTickLabel = b(b({}, m.svgText), { fill: "rgb(115, 119, 125)", fontSize: "12", fontWeight: 300, textRendering: "optimizeLegibility" }), m.annotation = {
              fillOpacity: "0.7",
              shapeRendering: "geometricPrecision",
              strokeWidth: "0.5"
            }, m.annotationLabel = b(b({}, m.svgText), { color: "rgb(42, 42, 42)", fontWeight: 400, shapeRendering: "geometricPrecision", strokeLinejoin: "round", textRendering: "optimizeLegibility" }), m.translationHandle = {
              fillOpacity: "0.7",
              shapeRendering: "geometricPrecision",
              strokeWidth: "0.5"
            }, m.translationHandleLabel = b(b({}, m.svgText), { color: "rgb(42, 42, 42)", fontSize: "9", fontWeight: 400, shapeRendering: "geometricPrecision", strokeLinejoin: "round", textRendering: "optimizeLegibility" }), m.translationAminoAcidLabel = b(b({}, m.svgText), { color: "rgb(42, 42, 42)", fontSize: "12", fontWeight: 400 }), m.viewerCircular = {
              cursor: "text",
              fontSize: "12",
              fontWeight: 300,
              margin: "auto"
            }, m.circularLabel = b(b({}, m.svgText), { cursor: "pointer" }), m.circularLabelHover = b(b({}, m.circularLabel), { textDecoration: "underline" }), m.circularLabelLine = {
              fill: "none",
              stroke: "rgb(158, 170, 184)",
              strokeWidth: "1"
            }, m.linearScroller = {
              cursor: "text",
              fontWeight: 300,
              height: "100%",
              outline: "none !important",
              overflowX: "hidden",
              overflowY: "scroll",
              padding: "10px",
              position: "relative"
            }, m.seqBlock = {
              overflow: "visible",
              padding: 0,
              width: "100%"
            };
          },
          /* 16 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var l = function(h, C) {
                return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, w) {
                  S.__proto__ = w;
                } || function(S, w) {
                  for (var I in w) Object.prototype.hasOwnProperty.call(w, I) && (S[I] = w[I]);
                }, l(h, C);
              };
              return function(h, C) {
                if (typeof C != "function" && C !== null)
                  throw new TypeError("Class extends value " + String(C) + " is not a constructor or null");
                l(h, C);
                function S() {
                  this.constructor = h;
                }
                h.prototype = C === null ? Object.create(C) : (S.prototype = C.prototype, new S());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(l) {
                for (var h, C = 1, S = arguments.length; C < S; C++) {
                  h = arguments[C];
                  for (var w in h) Object.prototype.hasOwnProperty.call(h, w) && (l[w] = h[w]);
                }
                return l;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.SeqBlock = void 0;
            var _ = b(1), x = b(15), N = b(17), T = b(20), A = b(21), y = b(22), a = b(23), i = b(24), s = b(25), d = b(27), c = (
              /** @class */
              function(l) {
                g(h, l);
                function h() {
                  var C = l !== null && l.apply(this, arguments) || this;
                  return C.componentWillUnmount = function() {
                    var S = C.props, w = S.id, I = S.onUnmount;
                    I(w);
                  }, C.findXAndWidthElement = function(S, w, I) {
                    var O, G, F, W, q = C.props, H = q.bpsPerBlock, J = q.firstBase, U = q.fullSeq, Y = q.seq, te = J + Y.length, se = w.end, ce = w.start, ve = C.findXAndWidth(ce, se), fe = ve.width, pe = ve.x, xe = ce < J, Re = se > te || ce === se && U.length > H, Ee = I.reduce(function(_e, De) {
                      return De.id === w.id ? _e + 1 : _e;
                    }, 0) > 1;
                    return Ee ? I.findIndex(function(_e) {
                      return _e.id === w.id;
                    }) === S ? (O = C.findXAndWidth(J, se), fe = O.width, pe = O.x, xe = !0, Re = !1) : (G = C.findXAndWidth(ce, te), fe = G.width, pe = G.x, xe = !1, Re = !0) : ce > se ? (F = C.findXAndWidth(ce > te ? J : Math.max(J, ce), se < J ? te : Math.min(te, se)), fe = F.width, pe = F.x, ce > J && (xe = !0, Re = se > te), se < J && (xe = ce < J, Re = !0)) : ce === se && (W = C.findXAndWidth(ce, se + U.length), fe = W.width, pe = W.x), { overflowLeft: xe, overflowRight: Re, width: fe, x: pe };
                  }, C.findXAndWidth = function(S, w) {
                    S === void 0 && (S = 0), w === void 0 && (w = 0);
                    var I = C.props, O = I.bpsPerBlock, G = I.charWidth, F = I.firstBase, W = I.fullSeq.length, q = I.size;
                    S |= 0, w |= 0;
                    var H = Math.min(F + O, W), J = W >= O, U = 0;
                    S >= F && (U = (S - F) * G, U = Math.max(U, 0) || 0);
                    var Y = q.width;
                    if (S === w)
                      Y = 0;
                    else if (S >= F || w < H) {
                      var te = Math.max(S, F), se = Math.min(w, H);
                      Y = q.width * ((se - te) / O), Y = Math.abs(Y) || 0;
                    } else F + O > W && J && (Y = q.width * (W % O / O));
                    return { width: Y, x: U };
                  }, C.seqTextSpan = function(S, w) {
                    var I = C.props, O = I.bpColors, G = I.charWidth, F = I.firstBase, W = I.id, q;
                    return O && (q = O[S] || O[S.toUpperCase()] || O[S.toLowerCase()] || O[w + F] || void 0), // the +0.2 here and above is to offset the characters they're not right on the left edge. When they are,
                    // other elements look like they're shifted too far to the right.
                    _.createElement("tspan", { key: w + S + W, fill: q || void 0, x: G * w + G * 0.2 }, S);
                  }, C;
                }
                return h.prototype.render = function() {
                  var C = this.props, S = C.annotationRows, w = C.blockHeight, I = C.bpsPerBlock, O = C.charWidth, G = C.compSeq, F = C.cutSiteRows, W = C.elementHeight, q = C.firstBase, H = C.fullSeq, J = C.handleMouseEvent, U = C.highlights, Y = C.id, te = C.inputRef, se = C.lineHeight, ce = C.onUnmount, ve = C.primerFwdRows, fe = C.primerRevRows, pe = C.searchRows, xe = C.seq, Re = C.seqFontSize, Ee = C.seqType, _e = C.showComplement, De = C.showIndex, He = C.size, We = C.translationRows, nt = C.zoom, Ye = C.zoomed;
                  if (!He.width || !He.height)
                    return null;
                  for (var Ae = {
                    fontSize: Re,
                    lengthAdjust: "spacing",
                    textAnchor: "start",
                    textLength: He.width >= 0 ? He.width : 1,
                    textRendering: "optimizeLegibility"
                  }, $e = q + xe.length, at = 0, Qe = ve.length ? W * ve.length : 0, gt = at + Qe, It = Ye && F.length ? se : 0, lt = gt + It, et = Ee === "aa" ? 0 : se, Nt = lt + et, ht = Ye && _e ? se : 0, Ft = Nt + ht, Dt = fe.length ? W * fe.length : 0, _t = Ft + Dt, ft = 0, xt = 0; xt < We.length; xt++) {
                    var Jt = We[xt][0].name ? 2 : 1;
                    ft += W * Jt;
                  }
                  var D = _t + ft, Q = W * S.length, me = fe.length + fe.length + S.length + We.length ? 3 : 0, de = D + Q + me, Ce = Qe + It + et + ht + ft + Q + Dt + me + 5, Ne = Ce + 9;
                  return !Ye && Ce <= W && (Ne = W), _.createElement(
                    "svg",
                    { ref: te(Y, {
                      end: $e,
                      ref: Y,
                      start: q,
                      type: "SEQ",
                      viewer: "LINEAR"
                    }), className: "la-vz-seqblock", cursor: "text", "data-testid": "la-vz-seqblock", display: "block", height: w, id: Y, overflow: "visible", style: x.seqBlock, width: He.width >= 0 ? He.width : 0, onMouseDown: J, onMouseMove: J, onMouseUp: J },
                    De && _.createElement(a.default, { charWidth: O, findXAndWidth: this.findXAndWidth, firstBase: q, lastBase: $e, seq: xe, seqType: Ee, showIndex: De, size: He, yDiff: de, zoom: nt }),
                    _.createElement(s.default.Block, { findXAndWidth: this.findXAndWidth, firstBase: q, fullSeq: H, lastBase: $e, selectHeight: Ce, onUnmount: ce }),
                    ve.length && _.createElement(i.default, { bpsPerBlock: I, direction: 1, elementHeight: W, findXAndWidth: this.findXAndWidthElement, firstBase: q, fullSeq: H, inputRef: te, lastBase: $e, primerRows: ve, seqBlockRef: this, width: He.width, yDiff: at }),
                    _.createElement(y.Highlights, { compYDiff: Nt - 3, findXAndWidth: this.findXAndWidthElement, firstBase: q, highlights: U, indexYDiff: lt - 3, inputRef: te, lastBase: $e, lineHeight: se, listenerOnly: !1, seqBlockRef: this }),
                    _.createElement(s.default.Edges, { findXAndWidth: this.findXAndWidth, firstBase: q, fullSeq: H, lastBase: $e, selectEdgeHeight: Ne }),
                    _.createElement(A.default, { compYDiff: Nt - 3, filteredRows: _e ? pe : pe.filter(function(Oe) {
                      return Oe.direction === 1;
                    }), findXAndWidth: this.findXAndWidth, firstBase: q, indexYDiff: lt - 3, inputRef: te, lastBase: $e, lineHeight: se, listenerOnly: !1, zoomed: Ye }),
                    fe.length && _.createElement(i.default, { bpsPerBlock: I, direction: -1, elementHeight: W, findXAndWidth: this.findXAndWidthElement, firstBase: q, fullSeq: H, inputRef: te, lastBase: $e, primerRows: fe, seqBlockRef: this, width: He.width, yDiff: Ft }),
                    We.length && _.createElement(d.TranslationRows, { bpsPerBlock: I, charWidth: O, elementHeight: W, findXAndWidth: this.findXAndWidth, findXAndWidthElement: this.findXAndWidthElement, firstBase: q, fullSeq: H, inputRef: te, lastBase: $e, seqType: Ee, translationRows: We, yDiff: _t, onUnmount: ce }),
                    S.length && _.createElement(N.default, { annotationRows: S, bpsPerBlock: I, elementHeight: W, findXAndWidth: this.findXAndWidthElement, firstBase: q, fullSeq: H, inputRef: te, lastBase: $e, seqBlockRef: this, width: He.width, yDiff: D }),
                    Ye && Ee !== "aa" ? _.createElement("text", p({}, Ae, { className: "la-vz-seq", "data-testid": "la-vz-seq", id: Y, style: x.svgText, transform: "translate(0, ".concat(lt + se / 2, ")") }), xe.split("").map(this.seqTextSpan)) : null,
                    G && Ye && _e && Ee !== "aa" ? _.createElement("text", p({}, Ae, { className: "la-vz-comp-seq", "data-testid": "la-vz-comp-seq", id: Y, style: x.svgText, transform: "translate(0, ".concat(Nt + se / 2, ")") }), G.split("").map(this.seqTextSpan)) : null,
                    Ye && _.createElement(T.CutSites, { cutSites: F, findXAndWidth: this.findXAndWidth, firstBase: q, inputRef: te, lastBase: $e, lineHeight: se, size: He, yDiff: gt - 3, zoom: nt }),
                    _.createElement(A.default, { compYDiff: Nt - 3, filteredRows: _e ? pe : pe.filter(function(Oe) {
                      return Oe.direction === 1;
                    }), findXAndWidth: this.findXAndWidth, firstBase: q, indexYDiff: lt - 3, inputRef: te, lastBase: $e, lineHeight: se, listenerOnly: !0, zoomed: Ye }),
                    _.createElement(y.Highlights, { compYDiff: Nt - 3, findXAndWidth: this.findXAndWidthElement, firstBase: q, highlights: U, indexYDiff: lt - 3, inputRef: te, lastBase: $e, lineHeight: se, listenerOnly: !0, seqBlockRef: this })
                  );
                }, h.defaultProps = {}, h;
              }(_.PureComponent)
            );
            m.SeqBlock = c;
          },
          /* 17 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(a) {
                for (var i, s = 1, d = arguments.length; s < d; s++) {
                  i = arguments[s];
                  for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (a[c] = i[c]);
                }
                return a;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var p = b(1), _ = b(18), x = b(15), N = function(a, i) {
              if (document)
                for (var s = document.getElementsByClassName(a), d = 0; d < s.length; d += 1)
                  s[d].style.fillOpacity = "".concat(i);
            }, T = function(a) {
              return p.createElement("g", null, a.annotationRows.map(function(i, s) {
                return p.createElement(A, { key: "annotation-linear-row-".concat(i[0].id, "-").concat(a.firstBase, "-").concat(a.lastBase), annotations: i, bpsPerBlock: a.bpsPerBlock, findXAndWidth: a.findXAndWidth, firstBase: a.firstBase, fullSeq: a.fullSeq, height: a.elementHeight, inputRef: a.inputRef, lastBase: a.lastBase, seqBlockRef: a.seqBlockRef, width: a.width, y: a.yDiff + a.elementHeight * s });
              }));
            };
            m.default = T;
            var A = function(a) {
              return p.createElement("g", { className: "la-vz-linear-annotation-row", height: a.height * 0.8, transform: "translate(0, ".concat(a.y, ")"), width: a.width }, a.annotations.map(function(i, s) {
                return p.createElement(y, g({}, a, { key: "annotation-linear-".concat(i.id, "-").concat(s, "-").concat(a.firstBase, "-").concat(a.lastBase), element: i, elements: a.annotations, index: s }));
              }));
            }, y = function(a) {
              var i = a.element, s = a.elements, d = a.findXAndWidth, c = a.firstBase, l = a.index, h = a.inputRef, C = a.lastBase, S = i.color, w = i.direction, I = i.end, O = i.name, G = i.start, F = w === 1, W = w === -1, q = d(l, i, s), H = q.overflowLeft, J = q.overflowRight, U = q.width, Y = q.x, te = G > I && I < c, se = F && I > c && I <= C, ce = W && G >= c && G <= C, ve = a.height * 0.8, fe = 4, pe = ve / 4, xe = [Y, U], Re = xe[0], Ee = xe[1], _e = ce ? "M ".concat(2 * fe, " 0") : "M 0 0", De = se ? "L ".concat(U - 2 * fe, " 0") : "L ".concat(U, " 0"), He = "", We = "L ".concat(U, " ").concat(ve);
              J && U > 2 * fe || te ? We = `
        L `.concat(U - fe, " ").concat(pe, `
        L `).concat(U, " ").concat(2 * pe, `
        L `).concat(U - fe, " ").concat(3 * pe, `
        L `).concat(U, " ").concat(4 * pe) : se && (We = `
        L `.concat(U, " ").concat(ve / 2, `
        L `).concat(U - Math.min(2 * fe, Ee), " ").concat(ve));
              var nt = "L 0 ".concat(ve, " L 0 0");
              H && U > 2 * fe ? nt = `
        L 0 `.concat(ve, `
        L `).concat(fe, " ").concat(3 * pe, `
        L 0 `).concat(2 * pe, `
        L `).concat(fe, " ").concat(pe, `
        L 0 0`) : ce && (nt = `
        L `.concat(Math.min(2 * fe, Ee), " ").concat(ve, `
        L 0 `).concat(ve / 2, `
        L `).concat(Math.min(2 * fe, Ee), " 0")), He = "".concat(_e, " ").concat(De, " ").concat(We, " ").concat(nt), F && J || F && te ? U > 15 && (He += `
        M `.concat(U - 3 * fe, " ").concat(pe, `
        L `).concat(U - 2 * fe, " ").concat(2 * pe, `
        L `).concat(U - 3 * fe, " ").concat(3 * pe, `
        M `).concat(U - 4 * fe, " ").concat(pe, `
        L `).concat(U - 3 * fe, " ").concat(2 * pe, `
        L `).concat(U - 4 * fe, " ").concat(3 * pe)) : (W && H || W && te) && U > 15 && (He += `
        M `.concat(3 * fe, " ").concat(3 * pe, `
        L `).concat(2 * fe, " ").concat(pe * 2, `
        L `).concat(3 * fe, " ").concat(pe, `
        M `).concat(4 * fe, " ").concat(3 * pe, `
        L `).concat(3 * fe, " ").concat(pe * 2, `
        L `).concat(4 * fe, " ").concat(pe));
              var Ye = 12, Ae = 0.591 * Ye, $e = Math.floor((U - 40) / Ae), at = O;
              if (O.length > $e) {
                var Qe = $e - 1;
                Qe < 3 ? at = "" : at = "".concat(O.slice(0, Qe), "…");
              }
              return p.createElement(
                "g",
                { id: i.id, transform: "translate(".concat(Re, ", ").concat(0.1 * ve, ")") },
                p.createElement("title", null, O),
                p.createElement("path", { ref: h(i.id, {
                  end: I,
                  name: i.name,
                  ref: i.id,
                  start: G,
                  type: "ANNOTATION",
                  viewer: "LINEAR"
                }), className: "".concat(i.id, " la-vz-annotation"), cursor: "pointer", d: He, fill: S, id: i.id, stroke: S ? _.COLOR_BORDER_MAP[S] || (0, _.darkerColor)(S) : "gray", style: x.annotation, onBlur: function() {
                }, onFocus: function() {
                }, onMouseOut: function() {
                  return N(i.id, 0.7);
                }, onMouseOver: function() {
                  return N(i.id, 1);
                } }),
                p.createElement("text", { className: "la-vz-annotation-label", cursor: "pointer", dominantBaseline: "middle", fontSize: Ye, id: i.id, style: x.annotationLabel, textAnchor: "middle", x: U / 2, y: ve / 2 + 1, onBlur: function() {
                }, onFocus: function() {
                }, onMouseOut: function() {
                  return N(i.id, 0.7);
                }, onMouseOver: function() {
                  return N(i.id, 1);
                } }, at)
              );
            };
          },
          /* 18 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.darkerColor = m.borderColorByIndex = m.colorByIndex = m.chooseRandomColor = m.COLOR_BORDER_MAP = m.COLORS = void 0;
            var g = b(19);
            m.COLORS = [
              "#9DEAED",
              "#8FDE8C",
              "#CFF283",
              "#8CDEBD",
              "#F0A3CE",
              "#F7C672",
              "#F07F7F",
              "#FAA887",
              "#F099F7",
              "#C59CFF",
              "#6B81FF",
              "#85A6FF"
              // light blue
            ], m.COLOR_BORDER_MAP = {
              // purple
              "#6B81FF": "#2E3B85",
              // blue
              "#85A6FF": "#4C66AD",
              // light green
              "#8CDEBD": "#4CA17F",
              // cyan
              "#8FDE8C": "#5CA35A",
              "#9DEAED": "#5EB5B8",
              // magenta
              "#C59CFF": "#8A60C4",
              // green
              "#CFF283": "#8DB041",
              // orange
              "#F07F7F": "#AD4040",
              // red-orange
              "#F099F7": "#AB63B0",
              // teal
              "#F0A3CE": "#BD6295",
              // pink
              "#F7C672": "#BD872B",
              // red
              "#FAA887": "#B36446"
              // light blue
            };
            var p = function(A) {
              var y = A || m.COLORS, a = Math.floor(Math.random() * y.length);
              return y[a];
            };
            m.chooseRandomColor = p;
            var _ = function(A, y) {
              return (y || m.COLORS)[A % (y || m.COLORS).length];
            };
            m.colorByIndex = _;
            var x = function(A) {
              return m.COLOR_BORDER_MAP[m.COLORS[A % m.COLORS.length]];
            };
            m.borderColorByIndex = x;
            var N = {}, T = function(A) {
              if (N[A])
                return N[A];
              var y = (0, g.pSBC)(-0.5, A);
              return N[A] = y, y || A;
            };
            m.darkerColor = T;
          },
          /* 19 */
          /***/
          (Z, m) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.pSBC = void 0;
            var b = function(g, p, _, x) {
              var N = parseInt, T = Math.round, A, y, a, i, s, d, c, l = typeof _ == "string";
              if (typeof g != "number" || g < -1 || g > 1 || typeof p != "string" || p[0] !== "r" && p[0] !== "#" || _ && !l)
                return null;
              var h = function(C) {
                var S, w = C.length, I = {};
                if (w > 9) {
                  if (S = C = C.split(","), A = S[0], y = S[1], a = S[2], l = S[3], w = C.length, w < 3 || w > 4)
                    return null;
                  I.r = N(A[3] === "a" ? A.slice(5) : A.slice(4)), I.g = N(y), I.b = N(a), I.a = l ? parseFloat(l) : -1;
                } else {
                  if (w === 8 || w === 6 || w < 4)
                    return null;
                  w < 6 && (C = "#" + C[1] + C[1] + C[2] + C[2] + C[3] + C[3] + (w > 4 ? C[4] + C[4] : "")), C = N(C.slice(1), 16), w === 9 || w === 5 ? (I.r = C >> 24 & 255, I.g = C >> 16 & 255, I.b = C >> 8 & 255, I.a = T((C & 255) / 0.255) / 1e3) : (I.r = C >> 16, I.g = C >> 8 & 255, I.b = C & 255, I.a = -1);
                }
                return I;
              };
              return c = p.length > 9, c = l ? _.length > 9 ? !0 : _ === "c" ? !c : !1 : c, s = h(p), i = g < 0, d = _ && _ !== "c" ? h(_) : i ? { a: -1, b: 0, g: 0, r: 0 } : { a: -1, b: 255, g: 255, r: 255 }, g = i ? g * -1 : g, i = 1 - g, !s || !d ? null : (x ? (A = T(i * s.r + g * d.r), y = T(i * s.g + g * d.g), a = T(i * s.b + g * d.b)) : (A = T(Math.pow(i * Math.pow(s.r, 2) + g * Math.pow(d.r, 2), 0.5)), y = T(Math.pow(i * Math.pow(s.g, 2) + g * Math.pow(d.g, 2), 0.5)), a = T(Math.pow(i * Math.pow(s.b, 2) + g * Math.pow(d.b, 2), 0.5))), l = s.a, d = d.a, s = l >= 0 || d >= 0, l = s ? l < 0 ? d : d < 0 ? l : l * i + d * g : 0, c ? "rgb" + (s ? "a(" : "(") + A + "," + y + "," + a + (s ? "," + T(l * 1e3) / 1e3 : "") + ")" : "#" + (4294967296 + A * 16777216 + y * 65536 + a * 256 + (s ? T(l * 255) : 0)).toString(16).slice(1, s ? void 0 : -2));
            };
            m.pSBC = b;
          },
          /* 20 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(d) {
                for (var c, l = 1, h = arguments.length; l < h; l++) {
                  c = arguments[l];
                  for (var C in c) Object.prototype.hasOwnProperty.call(c, C) && (d[C] = c[C]);
                }
                return d;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.CutSites = void 0;
            var p = b(1), _ = b(5), x = b(15), N = function(d) {
              var c = d.cutSites, l = d.findXAndWidth, h = d.firstBase, C = d.inputRef, S = d.lastBase, w = d.lineHeight, I = d.size, O = d.yDiff, G = d.zoom.linear, F = T(
                // TODO: remove this exclusion of cut-sites that cross the zero index after even more
                // zero-index accounting. This file is already hairy enough, so not in a rush to add zero-index
                // accounting here, yet.
                c,
                h,
                S,
                l
              );
              if (!F.length)
                return null;
              var W = i(F, I), q = O + w;
              return p.createElement("g", { className: "la-vz-cut-sites" }, W.map(function(H) {
                var J;
                return p.createElement(
                  "g",
                  { key: "cut-site-".concat(H.c.id, "-").concat(h) },
                  H.label.render && p.createElement("text", { className: "la-vz-cut-site-text ".concat(H.c.id, "-label"), dominantBaseline: "hanging", id: H.c.id, style: g(g({}, x.svgText), { cursor: "pointer", fontSize: 12 }), textAnchor: "start", x: H.label.x, y: O, onBlur: function() {
                    return 0;
                  }, onFocus: function() {
                    return 0;
                  }, onMouseOut: function() {
                    return s(H.c.id, !1);
                  }, onMouseOver: function() {
                    return s(H.c.id, !0);
                  } }, H.label.text),
                  G > 10 && p.createElement("path", { ref: C(H.c.id, {
                    clockwise: !0,
                    end: H.c.end,
                    id: H.c.id,
                    start: H.c.start,
                    type: "ENZYME",
                    viewer: "LINEAR"
                  }), className: "la-vz-cut-site-highlight ".concat(H.c.id), d: "M ".concat(H.highlight.x, " ").concat(q, `
                    L `).concat(H.highlight.x + H.highlight.width, " ").concat(q, `
                    L `).concat(H.highlight.x + H.highlight.width, " ").concat(q + 2 * w, `
                    L `).concat(H.highlight.x, " ").concat(q + 2 * w, " Z"), style: !((J = H.c.color) === null || J === void 0) && J.length ? g(g({}, x.cutSiteHighlight), { fill: H.c.color }) : x.cutSiteHighlight, onMouseOut: function() {
                    return s(H.c.id, !1);
                  }, onMouseOver: function() {
                    return s(H.c.id, !0);
                  } }),
                  H.top.render && p.createElement("path", { className: "la-vz-cut-site ".concat(H.c.id), d: "M ".concat(H.top.x, " ").concat(q, " L ").concat(H.top.x, " ").concat(q + w), style: x.cutSite }),
                  H.connector.render && G > 10 && p.createElement("path", { className: "la-vz-cut-site ".concat(H.c.id), d: "M ".concat(H.connector.x, " ").concat(q + w, `
                    L `).concat(H.connector.x + H.connector.width, " ").concat(q + w), style: x.cutSite }),
                  H.bottom.render && G > 10 && p.createElement("path", { className: "la-vz-cut-site ".concat(H.c.id), d: "M ".concat(H.bottom.x, " ").concat(q + w, " L ").concat(H.bottom.x, " ").concat(q + 2 * w), style: x.cutSite })
                );
              }));
            };
            m.CutSites = N;
            var T = function(d, c, l, h) {
              return d.map(function(C) {
                var S = C.fcut > c && C.fcut < l;
                (C.fcut === c && C.rcut > c && C.rcut <= l || C.fcut === l && C.rcut >= c && C.rcut <= l) && (S = !0);
                var w = C.rcut > c && C.rcut < l;
                (C.rcut === c && C.fcut > c && C.fcut <= l || C.rcut === l && C.fcut >= c && C.fcut <= l) && (w = !0);
                var I = C;
                C.end < C.start && (C.start > c && C.start < l ? (I = g(g({}, C), { end: l }), C.fcut < C.start && (I = g(g({}, I), { fcut: l })), C.rcut < C.start && (I = g(g({}, I), { rcut: l }))) : (I = g(g({}, C), { start: c }), C.fcut > C.end && (I = g(g({}, I), { fcut: c })), C.rcut > C.end && (I = g(g({}, I), { rcut: c }))));
                var O = h(I.fcut, I.fcut).x, G = h(I.rcut, I.rcut).x;
                return {
                  bottom: {
                    render: w,
                    x: G
                  },
                  c: C,
                  connector: a(I, O, G, c, l, S, w, h),
                  highlight: A(I, c, l, h),
                  top: {
                    render: S,
                    x: O
                  }
                };
              });
            }, A = function(d, c, l, h) {
              return y(d.start, d.end, c, l) ? d.start > d.end ? h(d.end < c ? l : Math.min(l, d.end), d.start > l ? c : Math.max(c, d.start)) : h(d.start < c ? l : Math.min(l, d.start), d.end > l ? c : Math.max(c, d.end)) : h(d.start, d.end);
            }, y = function(d, c, l, h) {
              return d < l && c < l || d > h && c > h ? !0 : c >= d ? c < h && d > l : d < h && c > l;
            }, a = function(d, c, l, h, C, S, w, I) {
              return S && w ? {
                render: !0,
                width: Math.abs(l - c),
                x: Math.min(c, l)
              } : S ? d.start + c > d.end + l ? g({ render: !0 }, I(h, d.fcut)) : d.fcut > d.rcut ? g({ render: !0 }, I(h, d.fcut)) : g({ render: !0 }, I(d.fcut, C)) : w ? d.start + c > d.end + l ? g({ render: !0 }, I(d.rcut, C)) : d.fcut > d.rcut ? g({ render: !0 }, I(d.rcut, C)) : g({ render: !0 }, I(h, d.rcut)) : { render: !1, width: 0, x: 0 };
            }, i = function(d, c) {
              var l = d.filter(function(w) {
                return !w.top.render;
              }).map(function(w) {
                return g(g({}, w), { label: { render: !1, text: w.c.name, x: w.highlight.x } });
              }), h = d.filter(function(w) {
                return w.top.render;
              }).sort(function(w, I) {
                return w.top.x - I.top.x;
              }).map(function(w) {
                return g(g({}, w), { label: { render: w.top.render, text: w.c.name, x: w.highlight.x } });
              }), C = function(w) {
                return w.label.x + w.label.text.length * _.CHAR_WIDTH > c.width;
              };
              h.forEach(function(w) {
                var I = w.label.text.length * _.CHAR_WIDTH;
                C(w) && (w.label.x = c.width - I);
              });
              var S = function(w, I) {
                return w.label.x + w.label.text.length * _.CHAR_WIDTH > I.label.x;
              };
              return h.forEach(function(w, I) {
                if (I == 0)
                  return w;
                for (var O = h[I - 1]; S(O, w); )
                  w.label.x += _.CHAR_WIDTH * 2;
                return w;
              }), h.forEach(function(w) {
                C(w) && (w.label.render = !1);
              }), l.concat(h);
            }, s = function(d, c) {
              if (c === void 0 && (c = !1), !!document) {
                for (var l = document.getElementsByClassName("".concat(d, "-label")), h = 0; h < l.length; h += 1)
                  l[h].style.fillOpacity = c ? "1.0" : "0.8", l[h].style.fontWeight = c ? "400" : "300";
                l = document.getElementsByClassName(d);
                for (var h = 0; h < l.length; h += 1)
                  l[h].style.fillOpacity = c ? "0.25" : "0", l[h].style.stroke = c ? "black" : "rgb(115, 119, 125)";
              }
            };
          },
          /* 21 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var g = b(1), p = b(13), _ = b(15), x = function(T) {
              var A = T.compYDiff, y = T.filteredRows, a = T.findXAndWidth, i = T.firstBase, s = T.indexYDiff, d = T.inputRef, c = T.lastBase, l = T.lineHeight, h = T.listenerOnly, C = T.zoomed;
              return g.createElement(g.Fragment, null, y.map(function(S) {
                return g.createElement(N, { key: JSON.stringify(S), compYDiff: A, direction: S.direction || 1, end: S.end, findXAndWidth: a, firstBase: i, indexYDiff: s, inputRef: d, lastBase: c, lineHeight: l, listenerOnly: h, start: S.start, zoomed: C });
              }));
            };
            m.default = x;
            var N = function(T) {
              var A, y = T.compYDiff, a = T.direction, i = T.end, s = T.findXAndWidth, d = T.firstBase, c = T.indexYDiff, l = T.inputRef, h = T.lastBase, C = T.lineHeight, S = T.listenerOnly, w = T.start, I = T.zoomed, O = s(w, i), G = O.width, F = O.x;
              w > i && (A = s(w > h ? d : Math.max(d, w), i < d ? h : Math.min(h, i)), G = A.width, F = A.x);
              var W = (0, p.randomID)(), q = c;
              return (a < 0 || !I) && (q = y), g.createElement("rect", { key: W, ref: l(W, {
                end: i,
                id: W,
                start: w,
                type: "FIND",
                viewer: "LINEAR"
              }), className: "la-vz-search", cursor: "pointer", height: C, id: W, shapeRendering: "crispEdges", stroke: S ? "none" : "rgba(0, 0, 0, 0.5)", strokeWidth: 1, style: S ? { fill: "transparent" } : _.search, width: G, x: F, y: q });
            };
          },
          /* 22 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(T) {
                for (var A, y = 1, a = arguments.length; y < a; y++) {
                  A = arguments[y];
                  for (var i in A) Object.prototype.hasOwnProperty.call(A, i) && (T[i] = A[i]);
                }
                return T;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Highlights = void 0;
            var p = b(1), _ = b(15), x = function(T) {
              return p.createElement(p.Fragment, null, T.highlights.map(function(A, y) {
                return (
                  // TODO: what's going on here, why does this lead to duplicates
                  p.createElement(N, g({ key: "linear-highlight-".concat(A.id, "-").concat(T.listenerOnly) }, T, { highlight: A, index: y }))
                );
              }));
            };
            m.Highlights = x;
            var N = function(T) {
              var A, y = T.findXAndWidth(T.index, T.highlight, T.highlights), a = y.width, i = y.x, s = _.highlight.fill;
              T.listenerOnly ? s = "transparent" : !((A = T.highlight.color) === null || A === void 0) && A.length && (s = T.highlight.color);
              var d = {
                className: "la-vz-highlight",
                height: T.lineHeight,
                id: T.highlight.id,
                stroke: T.listenerOnly ? "none" : "rgba(0, 0, 0, 0.5)",
                style: g(g({}, _.highlight), { fill: s }),
                width: a,
                x: i
              };
              return p.createElement(
                p.Fragment,
                null,
                p.createElement("rect", g({ key: "linear-highlight-".concat(T.highlight.id, "-top"), ref: T.inputRef(T.highlight.id, g(g({ ref: T.highlight.id }, T.highlight), { type: "HIGHLIGHT", viewer: "LINEAR" })) }, d, { y: T.indexYDiff })),
                p.createElement("rect", g({ key: "linear-highlight-".concat(T.highlight.id, "-bottom"), ref: T.inputRef(T.highlight.id, g(g({ ref: T.highlight.id }, T.highlight), { type: "HIGHLIGHT", viewer: "LINEAR" })) }, d, { y: T.compYDiff }))
              );
            };
          },
          /* 23 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var N = function(T, A) {
                return N = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, a) {
                  y.__proto__ = a;
                } || function(y, a) {
                  for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (y[i] = a[i]);
                }, N(T, A);
              };
              return function(T, A) {
                if (typeof A != "function" && A !== null)
                  throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
                N(T, A);
                function y() {
                  this.constructor = T;
                }
                T.prototype = A === null ? Object.create(A) : (y.prototype = A.prototype, new y());
              };
            }();
            Object.defineProperty(m, "__esModule", { value: !0 });
            var p = b(1), _ = b(15), x = (
              /** @class */
              function(N) {
                g(T, N);
                function T() {
                  var A = N !== null && N.apply(this, arguments) || this;
                  return A.genTicks = function() {
                    var y = A.props, a = y.charWidth, i = y.findXAndWidth, s = y.firstBase, d = y.seq, c = y.seqType, l = y.size, h = y.zoom, C = d.length, S = 0;
                    switch (!0) {
                      case h.linear > 85:
                        S = 5;
                        break;
                      case h.linear > 40:
                        S = 10;
                        break;
                      case h.linear > 10:
                        S = 20;
                        break;
                      case h.linear >= 0:
                        S = 50;
                        break;
                      default:
                        S = 10;
                    }
                    c === "aa" && (S = S / 2);
                    var w = [];
                    s === 0 && w.push(1);
                    for (var I = 0; (I + s) % S !== 0; )
                      I += 1;
                    for (; I < C; )
                      I + s !== 0 && w.push(I + s), I += S;
                    return w.map(function(O) {
                      var G = i(O - 1, O - 1).x;
                      G += a / 2;
                      var F = Math.ceil(Math.log10(O + 1));
                      F -= 1;
                      var W = 7.7, q = F * W, H = i(O - 1, O - 1).x;
                      H += a / 2, H -= q / 2 + 3, H = Math.max(0, H), H = Math.min(l.width - q / 2, H);
                      var J = "translate(".concat(G, ", 1)"), U = "translate(".concat(H, ", 10)");
                      return p.createElement(
                        p.Fragment,
                        { key: O },
                        p.createElement("path", { className: "la-vz-index-tick", d: "M 0 0 L 0 7", style: _.indexTick, transform: J }),
                        p.createElement("text", { className: "la-vz-index-tick-label", dominantBaseline: "hanging", style: _.indexTickLabel, transform: U }, O)
                      );
                    });
                  }, A;
                }
                return T.prototype.render = function() {
                  var A = this.props, y = A.findXAndWidth, a = A.firstBase, i = A.lastBase, s = A.showIndex, d = A.yDiff;
                  if (!s)
                    return null;
                  var c = y(a, i), l = c.width, h = c.x;
                  return p.createElement(
                    "g",
                    { transform: "translate(0, ".concat(d, ")") },
                    p.createElement("path", { className: "la-vz-index-line", d: "M 0 1 L ".concat(h + l, " 1"), style: _.indexLine }),
                    this.genTicks()
                  );
                }, T;
              }(p.PureComponent)
            );
            m.default = x;
          },
          /* 24 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(a) {
                for (var i, s = 1, d = arguments.length; s < d; s++) {
                  i = arguments[s];
                  for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (a[c] = i[c]);
                }
                return a;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var p = b(1), _ = b(18), x = b(15), N = function(a, i) {
              if (document)
                for (var s = document.getElementsByClassName(a), d = 0; d < s.length; d += 1)
                  s[d].style.fillOpacity = "".concat(i);
            }, T = function(a) {
              return p.createElement("g", null, a.primerRows.map(function(i, s) {
                return p.createElement(A, { key: "primer-linear-row-".concat(i[0].id, "-").concat(a.firstBase, "-").concat(a.lastBase), bpsPerBlock: a.bpsPerBlock, direction: a.direction, findXAndWidth: a.findXAndWidth, firstBase: a.firstBase, fullSeq: a.fullSeq, height: a.elementHeight, inputRef: a.inputRef, lastBase: a.lastBase, primers: i, seqBlockRef: a.seqBlockRef, width: a.width, y: a.yDiff + a.elementHeight * s });
              }));
            };
            m.default = T;
            var A = function(a) {
              return p.createElement("g", { className: "la-vz-linear-primer-row", height: a.height * 0.8, transform: "translate(0, ".concat(a.y, ")"), width: a.width }, a.primers.filter(function(i) {
                return i.direction == a.direction;
              }).map(function(i, s) {
                return p.createElement(y, g({}, a, { key: "primer-linear-".concat(i.id, "-").concat(s, "-").concat(a.firstBase, "-").concat(a.lastBase), element: i, elements: a.primers, index: s }));
              }));
            }, y = function(a) {
              var i = a.element, s = a.elements, d = a.findXAndWidth, c = a.firstBase, l = a.index, h = a.inputRef, C = a.lastBase, S = i.color, w = i.direction, I = i.end, O = i.name, G = i.start, F = w === 1, W = w === -1, q = d(l, i, s), H = q.overflowLeft, J = q.overflowRight, U = q.width, Y = q.x, te = G > I && I < c, se = F && I > c && I <= C, ce = W && G >= c && G <= C, ve = a.height * 0.7, fe = 4, pe = ve / 4, xe = 3, Re = [Y, U], Ee = Re[0], _e = Re[1], De = "M 0 0", He = se ? `
      L `.concat(U - Math.min(8 * fe, _e), ` 0
      L `).concat(U - Math.min(8 * fe, _e), " ").concat(-3, `
    `) : "L ".concat(U, " 0"), We = "", nt = "L ".concat(U, " ").concat(ve);
              J && U > 2 * fe || te ? nt = `
        L `.concat(U - fe, " ").concat(pe, `
        L `).concat(U, " ").concat(2 * pe, `
        L `).concat(U - fe, " ").concat(3 * pe, `
        L `).concat(U, " ").concat(4 * pe) : se && (nt = `
        L `.concat(U, " ").concat(ve));
              var Ye = "L 0 ".concat(ve, " L 0 0");
              H && U > 2 * fe ? Ye = `
        L 0 `.concat(ve, `
        L `).concat(fe, " ").concat(3 * pe, `
        L 0 `).concat(2 * pe, `
        L `).concat(fe, " ").concat(pe, `
        L 0 0`) : ce && (Ye = `
        L `.concat(Math.min(8 * fe, _e), " ").concat(ve, `
        L `).concat(Math.min(8 * fe, _e), " ").concat(ve + xe)), We = "".concat(De, " ").concat(He, " ").concat(nt, " ").concat(Ye), (F && J || F && te) && U > 15 && (We += `
        M `.concat(U - 3 * fe, " ").concat(pe, `
        L `).concat(U - 2 * fe, " ").concat(2 * pe, `
        L `).concat(U - 3 * fe, " ").concat(3 * pe, `
        M `).concat(U - 4 * fe, " ").concat(pe, `
        L `).concat(U - 3 * fe, " ").concat(2 * pe, `
        L `).concat(U - 4 * fe, " ").concat(3 * pe)), (W && H || W && te) && U > 15 && (We += `
        M `.concat(3 * fe, " ").concat(3 * pe, `
        L `).concat(2 * fe, " ").concat(pe * 2, `
        L `).concat(3 * fe, " ").concat(pe, `
        M `).concat(4 * fe, " ").concat(3 * pe, `
        L `).concat(3 * fe, " ").concat(pe * 2, `
        L `).concat(4 * fe, " ").concat(pe));
              var Ae = 12, $e = 0.591 * Ae, at = Math.floor((U - 40) / $e), Qe = O;
              if (O.length > at) {
                var gt = at - 1;
                gt < 3 ? Qe = "" : Qe = "".concat(O.slice(0, gt), "…");
              }
              return p.createElement(
                "g",
                { id: i.id, transform: "translate(".concat(Ee, ", ").concat(0.1 * ve, ")") },
                p.createElement("title", null, O),
                p.createElement("path", { ref: h(i.id, {
                  end: I,
                  name: i.name,
                  ref: i.id,
                  start: G,
                  type: "PRIMER",
                  viewer: "LINEAR"
                }), className: "".concat(i.id, " la-vz-primer"), cursor: "pointer", d: We, fill: S, id: i.id, stroke: S ? _.COLOR_BORDER_MAP[S] || (0, _.darkerColor)(S) : "gray", style: x.annotation, onBlur: function() {
                }, onFocus: function() {
                }, onMouseOut: function() {
                  return N(i.id, 0.7);
                }, onMouseOver: function() {
                  return N(i.id, 1);
                } }),
                p.createElement("text", { className: "la-vz-primer-label", cursor: "pointer", dominantBaseline: "middle", fontSize: Ae, id: i.id, style: x.annotationLabel, textAnchor: "middle", x: U / 2, y: ve / 2 + 1, onBlur: function() {
                }, onFocus: function() {
                }, onMouseOut: function() {
                  return N(i.id, 0.7);
                }, onMouseOver: function() {
                  return N(i.id, 1);
                } }, Qe)
              );
            };
          },
          /* 25 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var a = function(i, s) {
                return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
                  d.__proto__ = c;
                } || function(d, c) {
                  for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (d[l] = c[l]);
                }, a(i, s);
              };
              return function(i, s) {
                if (typeof s != "function" && s !== null)
                  throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                a(i, s);
                function d() {
                  this.constructor = i;
                }
                i.prototype = s === null ? Object.create(s) : (d.prototype = s.prototype, new d());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(a) {
                for (var i, s = 1, d = arguments.length; s < d; s++) {
                  i = arguments[s];
                  for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (a[c] = i[c]);
                }
                return a;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var _ = b(1), x = b(26), N = b(13), T = b(15), A = (
              /** @class */
              function(a) {
                g(i, a);
                function i() {
                  var s = a !== null && a.apply(this, arguments) || this;
                  return s.id = (0, N.randomID)(), s;
                }
                return i.prototype.render = function() {
                  var s, d = this.props, c = d.findXAndWidth, l = d.firstBase, h = d.fullSeq, C = d.lastBase, S = d.selectEdgeHeight, w = this.context, I = w.clockwise, O = w.end, G = w.ref, F = w.start;
                  if (!(typeof F > "u" || typeof O > "u")) {
                    var W = null, q = null;
                    if (I ? (F >= l && F < C && (W = F), O > l && O <= C && (q = O)) : (F > l && F <= C && (W = F), O >= l && O < C && (q = O)), (G === "ALL" || F === 0 && O === h.length - 1) && (W = null, q = null), W === null && q === null)
                      return null;
                    W === null && (W = q, q = null);
                    var H = c(W, q), J = H.width, U = H.x;
                    I === !1 && W !== null && q !== null && (s = c(q, W), J = s.width, U = s.x);
                    var Y = U + J;
                    return W !== null && q !== null && (F > O && I === !0 || O > F && I === !1) && (Y = U - J), F === O && F === C || W === null && q === null ? null : (W == q && (q = null), _.createElement(
                      "g",
                      null,
                      W !== null && _.createElement("rect", { className: "la-vz-selection-edge", "data-testid": "la-vz-selection-edge", height: S, shapeRendering: "crispEdges", strokeWidth: 0, style: T.selectionEdge, width: 1, x: U, y: -5 }),
                      q !== null && _.createElement("rect", { className: "la-vz-selection-edge", "data-testid": "la-vz-selection-edge", height: S, shapeRendering: "crispEdges", strokeWidth: 0, style: T.selectionEdge, width: 1, x: Y, y: -5 })
                    ));
                  }
                }, i.contextType = x.default, i;
              }(_.PureComponent)
            ), y = (
              /** @class */
              function(a) {
                g(i, a);
                function i() {
                  var s = a !== null && a.apply(this, arguments) || this;
                  return s.id = (0, N.randomID)(), s;
                }
                return i.prototype.render = function() {
                  var s, d, c, l, h, C, S, w = this.props, I = w.findXAndWidth, O = w.firstBase, G = w.fullSeq, F = w.lastBase, W = w.selectHeight, q = this.context, H = q.clockwise, J = q.ref, U = this.context, Y = U.end, te = U.start;
                  if (!(typeof te > "u" || typeof Y > "u")) {
                    if (te === Y && J !== "ALL")
                      return null;
                    (J === "ALL" || te === 0 && Y === G.length) && (te = 0, Y = 0);
                    var se = {
                      "data-testid": "la-vz-selection-block",
                      height: W,
                      style: T.selection,
                      y: -5
                    }, ce = null, ve = null, fe = null;
                    if (H && Y > te)
                      te <= F && Y > O && (s = I(Math.max(O, te), Math.min(F, Y)), ve = s.width, ce = s.x);
                    else if (H && te > Y) {
                      if (!(te > F && Y < O))
                        if (te < F && Y > O) {
                          var pe = I(te, F), xe = pe.width, Re = pe.x;
                          fe = _.createElement("rect", p({}, se, { width: xe, x: Re })), d = I(O, Y), ve = d.width, ce = d.x;
                        } else
                          c = I(te > F ? O : Math.max(O, te), Y < O ? F : Math.min(F, Y)), ve = c.width, ce = c.x;
                    } else if (!H && te > Y)
                      Y <= F && te >= O && (l = I(Math.max(O, Y), Math.min(F, te)), ve = l.width, ce = l.x);
                    else if (!H && Y > te && (te > O || Y < F))
                      if (te > O && te < F && Y > O) {
                        var Ee = I(Y, F), xe = Ee.width, Re = Ee.x;
                        fe = _.createElement("rect", p({}, se, { width: xe, x: Re })), h = I(O, te), ve = h.width, ce = h.x;
                      } else
                        C = I(te < O ? Y : O, Y > F ? te : F), ve = C.width, ce = C.x;
                    return (J === "ALL" || te === Y) && (S = I(Math.max(O, 0), Math.min(F, G.length + 1)), ve = S.width, ce = S.x), !ce && !ve ? null : _.createElement(
                      _.Fragment,
                      null,
                      _.createElement("rect", p({}, se, { width: ve ? ve + 1 : void 0, x: ce || void 0 })),
                      fe
                    );
                  }
                }, i.contextType = x.default, i;
              }(_.PureComponent)
            );
            m.default = { Block: y, Edges: A };
          },
          /* 26 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.defaultSelection = void 0;
            var g = b(1);
            m.defaultSelection = {
              clockwise: !0,
              end: 0,
              length: 0,
              name: "",
              ref: null,
              start: 0,
              type: ""
            };
            var p = g.createContext(m.defaultSelection);
            p.displayName = "SelectionContext", m.default = p;
          },
          /* 27 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var d = function(c, l) {
                return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, C) {
                  h.__proto__ = C;
                } || function(h, C) {
                  for (var S in C) Object.prototype.hasOwnProperty.call(C, S) && (h[S] = C[S]);
                }, d(c, l);
              };
              return function(c, l) {
                if (typeof l != "function" && l !== null)
                  throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
                d(c, l);
                function h() {
                  this.constructor = c;
                }
                c.prototype = l === null ? Object.create(l) : (h.prototype = l.prototype, new h());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(d) {
                for (var c, l = 1, h = arguments.length; l < h; l++) {
                  c = arguments[l];
                  for (var C in c) Object.prototype.hasOwnProperty.call(c, C) && (d[C] = c[C]);
                }
                return d;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.TranslationRows = void 0;
            var _ = b(1), x = b(18), N = b(13), T = b(15), A = function(d, c) {
              if (document)
                for (var l = document.getElementsByClassName(d), h = 0; h < l.length; h += 1)
                  l[h].style.fillOpacity = "".concat(c);
            }, y = function(d) {
              var c = d.bpsPerBlock, l = d.charWidth, h = d.elementHeight, C = d.findXAndWidth, S = d.findXAndWidthElement, w = d.firstBase, I = d.fullSeq, O = d.inputRef, G = d.lastBase, F = d.onUnmount, W = d.seqType, q = d.translationRows, H = d.yDiff;
              return _.createElement("g", { className: "la-vz-linear-translation", "data-testid": "la-vz-linear-translation" }, q.map(function(J, U) {
                for (var Y = H, te = 0; te < U; te += 1) {
                  var se = q[te][0].name ? 2 : 1;
                  Y += h * se;
                }
                return _.createElement(a, { key: "i-".concat(w), bpsPerBlock: c, charWidth: l, elementHeight: h, findXAndWidth: C, findXAndWidthElement: S, firstBase: w, fullSeq: I, height: h, inputRef: O, lastBase: G, seqType: W, translations: J, y: Y, onUnmount: F });
              }));
            };
            m.TranslationRows = y;
            var a = function(d) {
              return _.createElement(_.Fragment, null, d.translations.map(function(c, l) {
                return _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(i, p({}, d, { key: "translation-linear-".concat(c.id, "-").concat(l, "-").concat(d.firstBase, "-").concat(d.lastBase), translation: c })),
                  c.name && _.createElement(s, p({}, d, { key: "translation-handle-linear-".concat(c.id, "-").concat(l, "-").concat(d.firstBase, "-").concat(d.lastBase), element: c, elements: d.translations, index: l }))
                );
              }));
            }, i = (
              /** @class */
              function(d) {
                g(c, d);
                function c() {
                  var l = d !== null && d.apply(this, arguments) || this;
                  return l.AAs = [], l.componentWillUnmount = function() {
                    var h = l.props.onUnmount;
                    l.AAs.forEach(function(C) {
                      return h(C);
                    });
                  }, l.genPath = function(h, C) {
                    var S = l.props, w = S.charWidth, I = S.height, O = h * w, G = C * 3;
                    return `M 0 0
			L `.concat(O, ` 0
			L `).concat(O + G, " ").concat(I / 2, `
			L `).concat(O, " ").concat(I, `
			L 0 `).concat(I, `
			L `).concat(G, " ").concat(I / 2, `
			Z`);
                  }, l;
                }
                return c.prototype.render = function() {
                  var l = this, h = this.props, C = h.bpsPerBlock, S = h.charWidth, w = h.findXAndWidth, I = h.firstBase, O = h.fullSeq, G = h.height, F = h.inputRef, W = h.lastBase, q = h.seqType, H = h.translation, J = h.y, U = H.AAseq, Y = H.direction, te = H.end, se = H.id, ce = H.start, ve = q === "aa" ? 1 : 3, fe = U.split("");
                  return _.createElement("g", { ref: F(se, {
                    end: te,
                    name: "translation",
                    parent: p(p({}, H), { type: "TRANSLATION" }),
                    start: ce,
                    type: "AMINOACID",
                    viewer: "LINEAR"
                  }), className: "la-vz-linear-aa-translation", "data-testid": "la-vz-linear-aa-translation", id: se, transform: "translate(0, ".concat(J, ")") }, fe.map(function(pe, xe) {
                    var Re = (0, N.randomID)();
                    l.AAs.push(Re);
                    var Ee = (ce + xe * ve) % O.length, _e = ce + xe * ve + ve;
                    if (Ee > _e && I >= C ? _e += O.length : Ee > _e && I < C ? Ee -= O.length : Ee === 0 && I >= C && (Ee += O.length, _e += O.length), Ee >= W || _e <= I)
                      return null;
                    var De = !0, He = ve;
                    Ee < I ? (He = Math.min(ve, _e - I), He < 2 && q !== "aa" && (De = !1)) : _e > W && (He = Math.min(ve, W - Ee), He < 2 && q !== "aa" && (De = !1));
                    var We = w(Math.max(Ee, I)).x, nt = l.genPath(He, Y === 1 ? 1 : -1);
                    return _.createElement(
                      "g",
                      { key: Re, ref: F(Re, {
                        end: _e,
                        parent: p(p({}, H), { type: "TRANSLATION" }),
                        start: Ee,
                        type: "AMINOACID",
                        viewer: "LINEAR"
                      }), id: Re, transform: "translate(".concat(We, ", 0)") },
                      _.createElement("path", { d: nt, fill: (0, x.colorByIndex)(pe.charCodeAt(0)), id: Re, shapeRendering: "geometricPrecision", stroke: (0, x.borderColorByIndex)(pe.charCodeAt(0)), style: {
                        cursor: "pointer",
                        opacity: 0.7,
                        strokeWidth: 0.8
                      } }),
                      De && _.createElement("text", { className: "la-vz-translation-amino-acid-label", cursor: "pointer", "data-testid": "la-vz-translation", dominantBaseline: "middle", id: Re, style: T.translationAminoAcidLabel, textAnchor: "middle", x: He * 0.5 * S, y: "".concat(G / 2 + 1) }, pe)
                    );
                  }));
                }, c;
              }(_.PureComponent)
            ), s = function(d) {
              var c = d.element, l = d.elementHeight, h = d.elements, C = d.findXAndWidthElement, S = d.index, w = d.inputRef, I = d.y, O = c.color, G = c.end, F = c.name, W = c.start, q = C(S, c, h), H = q.width, J = q.x, U = 9, Y = 0.591 * U, te = Math.floor(H / 4 / Y), se = F ?? "";
              if (F && F.length > te) {
                var ce = te - 1;
                ce < 3 ? se = "" : se = "".concat(F.slice(0, ce), "…");
              }
              var ve = 10, fe = se.length * Y + ve * 2, pe = J, xe = H, Re = d.height, Ee = 2, _e = 2, De = "";
              return De += "M 0 ".concat(_e, ` 
              L `).concat(fe, " ").concat(_e, `
              L `).concat(fe, " ").concat(Re / 4 - Ee / 2 + _e / 2, `
              L `).concat(xe, " ").concat(Re / 4 - Ee / 2 + _e / 2, ` 
              L `).concat(xe, " ").concat(3 * Re / 4 - Ee / 2 + _e / 2, ` 
              L `).concat(fe, " ").concat(3 * Re / 4 - Ee / 2 + _e / 2, `  
              L `).concat(fe, " ").concat(Re - Ee, ` 
              L 0 `).concat(Re - Ee, `
              Z`), _.createElement(
                "g",
                { ref: w(c.id, {
                  end: G,
                  name: F,
                  start: W,
                  type: "TRANSLATION_HANDLE",
                  viewer: "LINEAR"
                }), id: c.id, transform: "translate(0, ".concat(I + l, ")") },
                _.createElement(
                  "g",
                  { id: c.id, transform: "translate(".concat(pe, ", 0)") },
                  _.createElement("title", null, F),
                  _.createElement("path", { className: "".concat(c.id, " la-vz-translation-handle"), cursor: "pointer", d: De, fill: O, id: c.id, stroke: O, style: T.translationHandle, onBlur: function() {
                  }, onFocus: function() {
                  }, onMouseOut: function() {
                    return A(c.id, 0.7);
                  }, onMouseOver: function() {
                    return A(c.id, 1);
                  } }),
                  _.createElement("text", { className: "la-vz-handle-label", cursor: "pointer", dominantBaseline: "middle", fontSize: U, id: c.id, style: T.translationHandleLabel, textAnchor: "start", x: ve, y: Re / 2 + 1, onBlur: function() {
                  }, onFocus: function() {
                  }, onMouseOut: function() {
                    return A(c.id, 0.7);
                  }, onMouseOver: function() {
                    return A(c.id, 1);
                  } }, se)
                )
              );
            };
          },
          /* 28 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var T = function(A, y) {
                return T = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, i) {
                  a.__proto__ = i;
                } || function(a, i) {
                  for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (a[s] = i[s]);
                }, T(A, y);
              };
              return function(A, y) {
                if (typeof y != "function" && y !== null)
                  throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
                T(A, y);
                function a() {
                  this.constructor = A;
                }
                A.prototype = y === null ? Object.create(y) : (a.prototype = y.prototype, new a());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(T) {
                for (var A, y = 1, a = arguments.length; y < a; y++) {
                  A = arguments[y];
                  for (var i in A) Object.prototype.hasOwnProperty.call(A, i) && (T[i] = A[i]);
                }
                return T;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var _ = b(1), x = b(26), N = (
              /** @class */
              function(T) {
                g(A, T);
                function A() {
                  var y = T !== null && T.apply(this, arguments) || this;
                  return y.state = p({}, x.defaultSelection), y.previousBase = null, y.forward = null, y.fullSelectionLength = 0, y.dragEvent = !1, y.selectionStarted = !1, y.shiftSelection = !1, y.lastClick = Date.now(), y.idToRange = /* @__PURE__ */ new Map(), y.componentDidMount = function() {
                    document && document.addEventListener("mouseup", y.stopDrag);
                  }, y.componentWillUnmount = function() {
                    document && document.removeEventListener("mouseup", y.stopDrag);
                  }, y.stopDrag = function() {
                    y.dragEvent = !1;
                  }, y.resetCircleDragVars = function(a) {
                    y.previousBase = a, y.forward = null, y.fullSelectionLength = 0, y.dragEvent = !0;
                  }, y.inputRef = function(a, i) {
                    y.idToRange.set(a, p({ ref: a }, i));
                  }, y.removeMountedBlock = function(a) {
                    y.idToRange.delete(a);
                  }, y.mouseEvent = function(a) {
                    var i = y.props.setCentralIndex;
                    if (!((a.type === "mousemove" || a.type === "mouseup") && !y.dragEvent)) {
                      var s = Date.now() - y.lastClick, d = y.dragEvent ? y.idToRange.get(a.currentTarget.id) : y.idToRange.get(a.target.id) || y.idToRange.get(a.currentTarget.id);
                      if (d) {
                        d = p(p({}, d), { end: d.end || 0, start: d.start || 0 });
                        var c = d.direction, l = d.end, h = d.start, C = d.viewer;
                        switch (d.type) {
                          case "ANNOTATION":
                          case "FIND":
                          case "TRANSLATION":
                          case "TRANSLATION_HANDLE":
                          case "ENZYME":
                          case "PRIMER":
                          case "HIGHLIGHT": {
                            C !== "LINEAR" && i && i("LINEAR", h || 0);
                            var S = c ? c === 1 : !0, w = S ? h : l, I = S ? l : h;
                            y.setSelection(p(p({}, d), { clockwise: S, end: I, start: w })), y.dragEvent = !1, y.lastClick = Date.now();
                            break;
                          }
                          case "AMINOACID": {
                            var S = c ? c === 1 : !0, w = S ? h : l, I = S ? l : h;
                            s < 300 && d.parent && (d = p(p({}, d.parent), { end: d.parent.end || 0, start: d.parent.start || 0 }), w = S ? d.start : d.end, I = S ? d.end : d.start), y.setSelection(p(p({}, d), { clockwise: S, end: I, start: w })), y.dragEvent = !1, y.lastClick = Date.now(), a.stopPropagation();
                            break;
                          }
                          case "SEQ": {
                            C === "LINEAR" ? y.handleLinearSeqEvent(a, p(p({}, d), { end: d.end || 0, start: d.start || 0 })) : C === "CIRCULAR" && y.handleCircularSeqEvent(a);
                            break;
                          }
                        }
                      }
                    }
                  }, y.handleLinearSeqEvent = function(a, i) {
                    var s = y.context, d = y.calculateBaseLinear(a, i), c = s.start !== null && d >= (s.start || 0);
                    a.type === "mousedown" && d !== null ? (y.setSelection(p(p({}, x.defaultSelection), { clockwise: c, end: d, start: a.shiftKey ? s.start : d })), y.dragEvent = !0) : y.dragEvent && d !== null && y.setSelection(p(p({}, x.defaultSelection), { clockwise: c, end: d, start: s.start }));
                  }, y.handleCircularSeqEvent = function(a) {
                    var i = y.props, s = i.seq, d = i.setCentralIndex, c = y.context, l = c.start, h = c.clockwise, C = c.end, S = y.calculateBaseCircular(a), w = s.length;
                    if (a.type === "mousedown") {
                      var I = a.shiftKey ? l || 0 : S, O = a.shiftKey ? y.calcSelectionLength(I, S, !1) : y.calcSelectionLength(I, S, !0);
                      y.selectionStarted = O > 0, y.resetCircleDragVars(I), d?.("LINEAR", I), y.setSelection(p(p({}, x.defaultSelection), { clockwise: h, end: S, ref: "", start: I, type: "SEQ" }));
                    } else if (a.type === "mousemove" && y.dragEvent && S && y.previousBase && S !== y.previousBase) {
                      var G = S > y.previousBase, F = w * 0.9, W = Math.abs(y.previousBase - S), q = W > F;
                      y.forward = G ? !q : q;
                      var H = q ? w - W : W, J = y.forward === c.clockwise || c.clockwise === null;
                      if (J ? y.fullSelectionLength += H : y.fullSelectionLength -= H, y.previousBase = S, y.fullSelectionLength < w * 0.01 && !y.shiftSelection) {
                        h = y.forward;
                        var U = y.calcSelectionLength(c.start || 0, S, y.forward);
                        y.fullSelectionLength < 0 && (y.fullSelectionLength = U), U > y.fullSelectionLength && (h = !y.forward), C = S;
                      }
                      J = y.forward === c.clockwise;
                      var Y = y.calcSelectionLength(c.start || 0, S, c.clockwise || !0);
                      y.selectionStarted && y.shiftSelection && Y > y.fullSelectionLength && (y.fullSelectionLength = Y);
                      var te = y.dragEvent && J, se = !1, ce = !se && y.fullSelectionLength >= w;
                      te && ce ? C = l : se ? (y.fullSelectionLength = w + y.fullSelectionLength % w, !te && // changed direction
                      Y === y.fullSelectionLength - w && // back tracking
                      Y > w * 0.9 && (C = S, y.fullSelectionLength = y.fullSelectionLength - w)) : C = S, y.shiftSelection = !1, y.setSelection(p(p({}, x.defaultSelection), { clockwise: h, end: C, start: l, type: "SEQ" }));
                    }
                  }, y.calculateBaseLinear = function(a, i) {
                    var s = y.props.bpsPerBlock, d = a.currentTarget.getBoundingClientRect(), c = a.clientX - d.left, l = c / d.width, h = Math.round(l * s);
                    return Math.min(i.start + h, i.end);
                  }, y.calculateBaseCircular = function(a) {
                    var i = y.props, s = i.center, d = i.centralIndex, c = i.seq, l = i.yDiff;
                    if (!s)
                      return 0;
                    var h = a.currentTarget.getBoundingClientRect(), C = a.clientX - h.left, S = a.clientY - h.top, w = C - s.x, I = S - (s.y + l), O = I / w, G = Math.atan(O), F = G * (180 / Math.PI) + 90;
                    w < 0 && (F += 180);
                    var W = F / 360, q = Math.round(c.length * W);
                    return q += d, q > c.length && (q -= c.length), q;
                  }, y.setSelection = function(a) {
                    var i = y.context, s = y.props.setSelection;
                    if (!(a.start === i.start && a.end === i.end && a.ref === i.ref && // to support re-clicking the annotation and causing it to fire a la gh issue https://github.com/Lattice-Automation/seqviz/issues/142
                    ["SEQ", "AMINOACID", ""].includes(a.type || ""))) {
                      var d = p(p({}, i), a), c = d.clockwise, l = d.end, h = d.name, C = d.ref, S = d.start, w = d.type, I = y.calcSelectionLength(S, l, c);
                      s({
                        clockwise: c,
                        end: l,
                        length: I,
                        name: h,
                        ref: C,
                        start: S,
                        type: w
                      });
                    }
                  }, y.calcSelectionLength = function(a, i, s) {
                    var d = y.props.seq;
                    return i < a && !s ? a - i : i > a && !s ? a + (d.length - i) : i > a && s ? i - a : i < a && s ? d.length - a + i : 0;
                  }, y;
                }
                return A.prototype.render = function() {
                  return this.props.children(this.inputRef, this.mouseEvent, this.removeMountedBlock);
                }, A.displayName = "WithSelectionHandler", A.contextType = x.default, A;
              }(_.PureComponent)
            );
            m.default = N;
          },
          /* 29 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var y = function(a, i) {
                return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, d) {
                  s.__proto__ = d;
                } || function(s, d) {
                  for (var c in d) Object.prototype.hasOwnProperty.call(d, c) && (s[c] = d[c]);
                }, y(a, i);
              };
              return function(a, i) {
                if (typeof i != "function" && i !== null)
                  throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
                y(a, i);
                function s() {
                  this.constructor = a;
                }
                a.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
              };
            }();
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Annotations = void 0;
            var p = b(1), _ = b(8), x = b(18), N = b(15), T = (
              /** @class */
              function(y) {
                g(a, y);
                function a() {
                  var i = y !== null && y.apply(this, arguments) || this;
                  return i.hoverAnnotation = function(s, d) {
                    if (document)
                      for (var c = document.getElementsByClassName(s), l = 0; l < c.length; l += 1)
                        c[l].style.fillOpacity = d;
                  }, i;
                }
                return a.prototype.render = function() {
                  var i = this, s = this.props, d = s.annotations, c = s.lineHeight, l = s.radius, h = s.rowsToSkip, C = c * h, S = c * 2 + 3, w = l - S - C, I = w - c;
                  return p.createElement(_.default.Consumer, null, function(O) {
                    var G = O.circular;
                    return p.createElement("g", { className: "la-vz-circular-annotations" }, d.reduce(function(F, W, q) {
                      return q && (w -= c + 3, I -= c + 3), F.concat(W.map(function(H) {
                        return p.createElement(A, { key: "la-vz-".concat(H.id, "-annotation-circular-row"), annotation: H, calcBorderColor: x.darkerColor, centralIndex: G, currBRadius: w, currTRadius: I, genArc: i.props.genArc, getRotation: i.props.getRotation, hoverAnnotation: i.hoverAnnotation, id: "la-vz-".concat(H.id, "-annotation-circular-row"), inlinedAnnotations: i.props.inlinedAnnotations, inputRef: i.props.inputRef, lineHeight: c, seqLength: i.props.seqLength });
                      }));
                    }, []));
                  });
                }, a;
              }(p.PureComponent)
            );
            m.Annotations = T;
            var A = function(y) {
              var a = y.annotation, i = y.calcBorderColor, s = y.centralIndex, d = y.currBRadius, c = y.currTRadius, l = y.genArc, h = y.getRotation, C = y.hoverAnnotation, S = y.inlinedAnnotations, w = y.inputRef, I = y.lineHeight, O = y.seqLength, G = a.end >= a.start ? a.end - a.start : O - a.start + a.end;
              G = G === 0 ? O - 0.1 : G;
              var F = h(a.start);
              if (d < 0 || c < 0)
                return null;
              var W = (G / 2 + a.start + O - s) % O, q = W > O * 0.25 && W < O * 0.75, H = l({
                arrowFWD: a.direction === 1,
                arrowREV: a.direction === -1,
                innerRadius: d,
                largeArc: G > O / 2,
                length: G,
                outerRadius: c,
                sweepFWD: !0
              }), J = l({
                arrowFWD: !1,
                arrowREV: !1,
                innerRadius: q ? d : c,
                largeArc: G > O / 2,
                length: G,
                outerRadius: q ? d : c,
                sweepFWD: !0
              }), U = "la-vz-".concat(a.id, "-circular");
              return p.createElement(
                "g",
                { id: "la-vz-".concat(a.id, "-annotation-circular"), transform: F },
                p.createElement("path", { d: J, fill: "transparent", id: U, stroke: "transparent" }),
                p.createElement("path", { ref: w(a.id, {
                  direction: a.direction,
                  end: a.end,
                  name: a.name,
                  ref: a.id,
                  start: a.start,
                  type: "ANNOTATION",
                  viewer: "CIRCULAR"
                }), className: "".concat(a.id, " la-vz-annotation"), cursor: "pointer", d: H, fill: a.color, id: a.id, stroke: a.color ? x.COLOR_BORDER_MAP[a.color] || i(a.color) : "gray", style: N.annotation, onBlur: function() {
                }, onFocus: function() {
                }, onMouseOut: function() {
                  return C(a.id, "0.7");
                }, onMouseOver: function() {
                  return C(a.id, "1.0");
                } }),
                S.includes(a.id) && p.createElement(
                  "text",
                  { dy: -0.4 * I, id: a.id, style: N.svgText, onBlur: function() {
                  }, onFocus: function() {
                  }, onMouseOut: function() {
                    return C(a.id, "0.7");
                  }, onMouseOver: function() {
                    return C(a.id, "1.0");
                  } },
                  p.createElement("textPath", { className: "la-vz-annotation-label", cursor: "pointer", dominantBaseline: "middle", fontSize: 12, id: a.id, startOffset: q ? "25%" : "75%", style: N.annotationLabel, textAnchor: "middle", xlinkHref: "#".concat(U) }, a.name)
                )
              );
            };
          },
          /* 30 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(A) {
                for (var y, a = 1, i = arguments.length; a < i; a++) {
                  y = arguments[a];
                  for (var s in y) Object.prototype.hasOwnProperty.call(y, s) && (A[s] = y[s]);
                }
                return A;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.CutSites = void 0;
            var p = b(1), _ = b(15), x = b(4), N = function(A) {
              var y = A.cutSites;
              if (!y.length)
                return null;
              var a = function(i, s, d) {
                var c = A.findCoor, l = c(i, s), h = c(i, d);
                return "M ".concat(h.x, " ").concat(h.y, " L ").concat(l.x, " ").concat(l.y);
              };
              return p.createElement("g", { className: "la-vz-circular-cutsites" }, y.map(function(i) {
                return p.createElement(T, g({ key: "circular-cut-site-".concat(i.id) }, A, { calculateLinePath: a, cutSite: i }));
              }));
            };
            m.CutSites = N;
            var T = function(A) {
              var y = A.calculateLinePath, a = A.cutSite, i = A.genArc, s = A.getRotation, d = A.inputRef, c = A.lineHeight, l = A.radius, h = A.seqLength, C = a.id, S = a.start, w = a.end, I = a.fcut, O = a.rcut;
              (S > w || S > I || S > O) && (S > w && (w += h), S > I && (I += h), S > O && (O += h));
              var G = Math.abs(w - S), F = l, W = l + 0.5 * c, q = l + c;
              return h < x.RENDER_SEQ_LENGTH_CUTOFF && (W += c + 1.5, q += 2 * c + 1.5), p.createElement(
                "g",
                { key: "la-vz-circular-cutsite-".concat(C), id: "la-vz-circular-cutsite-".concat(C), transform: s(S) },
                p.createElement("path", { ref: d(C, {
                  end: w,
                  ref: C,
                  start: S,
                  type: "ENZYME",
                  viewer: "CIRCULAR"
                }), className: "la-vz-cut-site", cursor: "pointer", d: i({
                  innerRadius: F,
                  largeArc: G > h / 2,
                  length: G,
                  outerRadius: q,
                  sweepFWD: !0
                }), style: a.enzyme.color ? g(g({}, _.cutSiteHighlight), { fill: a.enzyme.color }) : _.cutSiteHighlight }),
                p.createElement("path", { className: "la-vz-cut-site", d: y(I - S, q, W), style: _.cutSite }),
                p.createElement("path", { className: "la-vz-cut-site", d: i({
                  innerRadius: W,
                  largeArc: Math.abs(I - O) > h / 2,
                  length: Math.abs(I - O),
                  offset: Math.min(I, O) - S,
                  outerRadius: W,
                  sweepFWD: !0
                }), style: _.cutSite }),
                p.createElement("path", { className: "la-vz-cut-site", d: y(O - S, W, F), style: _.cutSite })
              );
            };
          },
          /* 31 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Find = void 0;
            var g = b(1), p = b(15), _ = b(4), x = function(N) {
              var T = N.genArc, A = N.getRotation, y = N.highlights, a = N.inputRef, i = N.lineHeight, s = N.radius, d = N.search, c = N.seqLength, l = c > _.RENDER_SEQ_LENGTH_CUTOFF ? d.length / c <= 0.02 : !0;
              return g.createElement(
                "g",
                { className: "la-vz-circular-search" },
                l && d.map(function(h) {
                  return g.createElement(_.Arc, {
                    key: JSON.stringify(h),
                    className: "la-vz-search",
                    direction: h.direction || 1,
                    end: h.end,
                    genArc: T,
                    getRotation: A,
                    inputRef: a,
                    lineHeight: i,
                    radius: s,
                    seqLength: c,
                    start: h.start,
                    style: p.search
                  });
                }),
                y.map(function(h) {
                  var C = h.color, S = h.end, w = h.start;
                  return g.createElement(_.Arc, { key: "la-vz-highlight-".concat(w, "-").concat(S), className: "la-vz-search", color: C, direction: 1, end: S, genArc: T, getRotation: A, inputRef: a, lineHeight: i, radius: s, seqLength: c, start: w, style: p.search });
                })
              );
            };
            m.Find = x;
          },
          /* 32 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var y = function(a, i) {
                return y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, d) {
                  s.__proto__ = d;
                } || function(s, d) {
                  for (var c in d) Object.prototype.hasOwnProperty.call(d, c) && (s[c] = d[c]);
                }, y(a, i);
              };
              return function(a, i) {
                if (typeof i != "function" && i !== null)
                  throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
                y(a, i);
                function s() {
                  this.constructor = a;
                }
                a.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(y) {
                for (var a, i = 1, s = arguments.length; i < s; i++) {
                  a = arguments[i];
                  for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (y[d] = a[d]);
                }
                return y;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Index = void 0;
            var _ = b(1), x = b(8), N = b(15), T = b(4), A = (
              /** @class */
              function(y) {
                g(a, y);
                function a() {
                  var s = y !== null && y.apply(this, arguments) || this;
                  return s.state = {
                    indexInc: 10,
                    ticks: []
                  }, s.renderBasepairs = function() {
                    var d = s.props, c = d.compSeq, l = d.findCoor, h = d.getRotation, C = d.lineHeight, S = d.radius, w = d.seq, I = d.seqLength, O = d.showComplement, G = s.state.indexInc, F = s.context.circular, W = w + w, q = c + c, H = F - G * 5, J = F + G * 5;
                    F < I / 2 && (H += I, J += I);
                    for (var U = [], Y = H; Y <= J; Y += 1)
                      U.push(_.createElement("text", p({ key: "la-vz-base-".concat(Y) }, l(0, S + 2 * C), { dominantBaseline: "middle", style: N.svgText, transform: h(Y) }), W.charAt(Y))), O && U.push(_.createElement("text", p({ key: "la-vz-base-comp-".concat(Y) }, l(0, S + C), { dominantBaseline: "middle", style: N.svgText, transform: h(Y) }), q.charAt(Y)));
                    return U;
                  }, s;
                }
                a.prototype.render = function() {
                  var s = this.props, d = s.center, c = s.findCoor, l = s.genArc, h = s.getRotation, C = s.lineHeight, S = s.name, w = s.radius, I = s.seq, O = s.seqLength, G = s.showIndex, F = s.size, W = s.totalRows, q = s.yDiff, H = this.state.ticks;
                  if (!G)
                    return null;
                  for (var J = w - W * C, U = 30, Y = [], te = 0; te < S.length; )
                    Y.push(S.substring(te, te + U).trim()), te += U;
                  var se = 20 * Y.length, ce = 14 + se, ve = Y.length ? Y[0].length / 2 * 12 : 0, fe = ve > J ? {
                    x: d.x,
                    y: F.height - ce - q
                  } : {
                    x: d.x,
                    y: d.y - (Y.length - 1) / 2 * 25
                    // shift the name up for >1 rows of text
                  }, pe = c(0, w), xe = c(0, w - 7), Re = {
                    fill: "gray",
                    fontSize: 12,
                    textAnchor: "middle"
                  }, Ee = l({
                    innerRadius: w,
                    largeArc: !0,
                    length: O / 2,
                    outerRadius: w
                  });
                  return _.createElement(
                    "g",
                    null,
                    _.createElement("text", { fontSize: 20, fontWeight: 500, style: N.svgText, textAnchor: "middle" }, Y.map(function(_e, De) {
                      return _.createElement("tspan", { key: _e, x: fe.x, y: fe.y + De * 25 }, _e);
                    })),
                    _.createElement("text", p({ x: fe.x, y: fe.y + 14 + 25 * (Y.length - 1) }, Re, { style: N.svgText }), "".concat(O, " bp")),
                    I.length <= T.RENDER_SEQ_LENGTH_CUTOFF && _.createElement("g", { className: "la-vz-circular-bps" }, this.renderBasepairs()),
                    H.map(function(_e) {
                      return _.createElement(
                        "g",
                        { key: "la-vz-tick-".concat(_e), transform: h(_e - 0.5) },
                        _.createElement("path", { className: "la-vz-index-tick", d: "M ".concat(pe.x, " ").concat(pe.y, " L ").concat(xe.x, " ").concat(xe.y), style: N.indexTick }),
                        _.createElement("text", { className: "la-vz-index-tick-label", style: N.indexTickLabel, textAnchor: "middle", x: xe.x, y: xe.y + C }, _e)
                      );
                    }),
                    _.createElement(
                      "g",
                      null,
                      _.createElement("path", { className: "la-vz-index-line", d: Ee, style: N.indexLine, transform: h(O * 0.75) }),
                      _.createElement("path", { className: "la-vz-index-line", d: Ee, style: N.indexLine, transform: h(O * 0.25) })
                    )
                  );
                };
                var i;
                return i = a, a.contextType = x.default, a.getDerivedStateFromProps = function(s) {
                  var d = s.seqLength, c = 0;
                  i.context && (c = i.context.circular);
                  for (var l = 6, h = Math.floor(d / l), C = Math.max(+h.toPrecision(2), 10); C % 10 !== 0; )
                    C += 1;
                  for (var S = [], w = 0; w <= d - C / 2; w += C)
                    S.push(w === 0 ? 1 : w);
                  var I = C * 6;
                  return S = S.filter(function(O) {
                    return Math.abs(c - O) < I || Math.abs(c + d - O) < I || Math.abs(c - d - O) < I;
                  }), { indexInc: C, ticks: S };
                }, a;
              }(_.PureComponent)
            );
            m.Index = A;
          },
          /* 33 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var a = function(i, s) {
                return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
                  d.__proto__ = c;
                } || function(d, c) {
                  for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (d[l] = c[l]);
                }, a(i, s);
              };
              return function(i, s) {
                if (typeof s != "function" && s !== null)
                  throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                a(i, s);
                function d() {
                  this.constructor = i;
                }
                i.prototype = s === null ? Object.create(s) : (d.prototype = s.prototype, new d());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(a) {
                for (var i, s = 1, d = arguments.length; s < d; s++) {
                  i = arguments[s];
                  for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (a[c] = i[c]);
                }
                return a;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Labels = void 0;
            var _ = b(1), x = b(5), N = b(15), T = b(4), A = b(34), y = (
              /** @class */
              function(a) {
                g(i, a);
                function i(s) {
                  var d = a.call(this, s) || this;
                  return d.setHoveredGroup = function(c) {
                    c !== d.state.hoveredGroup && d.setState({ hoveredGroup: c });
                  }, d.state = {
                    hoveredGroup: "",
                    labelGroups: []
                  }, d;
                }
                return i.prototype.render = function() {
                  var s = this, d = this.state, c = d.hoveredGroup, l = d.labelGroups, h = this.props, C = h.lineHeight, S = h.size, w = l.find(function(I) {
                    return I.labels[0].id === c;
                  });
                  return _.createElement(
                    "g",
                    { className: "la-vz-circular-labels", onMouseLeave: function() {
                      return s.setHoveredGroup("");
                    } },
                    l.map(function(I) {
                      var O = I.labels[0], G = I.forkCoor || I.textCoor, F = _.createElement(
                        _.Fragment,
                        null,
                        _.createElement("path", { className: "la-vz-label-line", d: "M".concat(I.lineCoor.x, " ").concat(I.lineCoor.y, " L").concat(G.x, " ").concat(G.y), style: N.circularLabelLine }),
                        I.forkCoor && _.createElement("path", { className: "la-vz-label-line", d: "M".concat(G.x, " ").concat(G.y, " L").concat(I.textCoor.x, " ").concat(I.textCoor.y), style: N.circularLabelLine })
                      );
                      if (I.grouped) {
                        if (O.id === c)
                          return null;
                      } else return _.createElement(
                        "g",
                        { key: O.id },
                        F,
                        _.createElement("text", p({ className: "la-vz-circular-label", id: O.id }, I.textCoor, { dominantBaseline: "middle", style: N.circularLabel, textAnchor: I.textAnchor, onMouseEnter: function() {
                          return (0, A.setHoveredLabelUnderline)(O.id || "", !0);
                        }, onMouseLeave: function() {
                          return (0, A.setHoveredLabelUnderline)(O.id || "", !1);
                        } }), I.name)
                      );
                      return _.createElement(
                        "g",
                        { key: "".concat(O.id, "-listener"), id: "".concat(O.id, "-label") },
                        F,
                        _.createElement("text", p({ className: "la-vz-circular-label", dominantBaseline: "middle", id: O.id, style: N.circularLabel, textAnchor: I.textAnchor, onMouseEnter: function() {
                          return s.setHoveredGroup(O.id || "");
                        } }, I.textCoor), I.name)
                      );
                    }),
                    w && _.createElement(A.WrappedGroupLabel, { group: w, lineHeight: C, setHoveredGroup: this.setHoveredGroup, size: S })
                  );
                }, i.getDerivedStateFromProps = function(s, d) {
                  return {
                    hoveredGroup: d.hoveredGroup,
                    labelGroups: i.groupOverlappingLabels(s)
                  };
                }, i.groupOverlappingLabels = function(s) {
                  var d = s.center, c = s.findCoor, l = s.labels, h = s.lineHeight, C = s.radius, S = s.seqLength, w = s.size, I = s.yDiff, O = S > T.RENDER_SEQ_LENGTH_CUTOFF ? h * 2 : h * 3.5, G = C + O, F = l.reduce(function(H, J) {
                    return H.concat(J);
                  }, []).map(function(H) {
                    var J;
                    if (H.type === "enzyme")
                      J = H.start;
                    else if (H.end > H.start)
                      J = (H.end + H.start) / 2;
                    else {
                      var U = H.start - S, Y = U + H.end;
                      J = Y / 2;
                    }
                    var te = S > T.RENDER_SEQ_LENGTH_CUTOFF ? C : G - h / 2, se = c(J, te, !0), ce = c(J, G, !0), ve = ce.x <= d.x ? "end" : "start", fe = H;
                    return { label: fe, lineCoor: se, textAnchor: ve, textCoor: ce };
                  }), W = function(H, J) {
                    var U = (H.name.length + 4) * x.CHAR_WIDTH, Y = !1, te = J.y + I;
                    return (te < 0 || te > w.height || J.x - U < 0 || J.x + U > w.width) && (Y = !0), Y;
                  }, q = F.reduce(function(H, J) {
                    var U = H.findIndex(function(te) {
                      return te.textAnchor === J.textAnchor ? Math.abs(te.textCoor.y - J.textCoor.y) < 15 : !1;
                    });
                    if (U > -1)
                      return H[U].labels.push(J.label), H[U].grouped = !0, H;
                    var Y = W(J.label, J.textCoor);
                    return H.concat({
                      forkCoor: null,
                      grouped: Y,
                      labels: [J.label],
                      lineCoor: J.lineCoor,
                      name: J.label.name,
                      overflow: Y,
                      textAnchor: J.textAnchor,
                      textCoor: J.textCoor
                    });
                  }, []);
                  return q = q.reduce(function(H, J, U) {
                    if (!J.grouped || J.overflow || J.labels.length > 4)
                      return H.concat(J);
                    var Y = H[H.length - 1], te = q[U + 1];
                    Y && Y.textAnchor !== J.textAnchor && (Y = void 0), te && te.textAnchor !== J.textAnchor && (te = void 0);
                    var se = J.labels.map(function(ve, fe) {
                      var pe = fe * (3 * x.CHAR_WIDTH);
                      J.textAnchor === "end" && (pe = -pe);
                      var xe = (J.labels.length - fe) * -15;
                      J.textCoor.y > d.y && (xe = (J.labels.length - fe) * 15);
                      var Re = {
                        x: J.textCoor.x + pe,
                        y: J.textCoor.y + xe
                        // try ot make the adjustment to the top/bottom
                      }, Ee = W(ve, Re);
                      return p(p({}, J), { forkCoor: J.textCoor, grouped: Ee, labels: [ve], overflow: Ee, textCoor: Re });
                    }), ce = se.some(function(ve) {
                      return [Y, te].some(function(fe) {
                        return fe && Math.abs(fe.textCoor.y - ve.textCoor.y) < 15;
                      });
                    });
                    return ce ? H.concat(J) : H.concat.apply(H, se);
                  }, []), q = q.map(function(H) {
                    var J = H.labels[0].name, U = H.labels.length - 1;
                    return H.overflow ? p(p({}, H), { name: "+".concat(U + 1) }) : H.grouped ? p(p({}, H), { name: "".concat(J, ",+").concat(U) }) : p(p({}, H), { name: J });
                  }), q.map(function(H) {
                    var J = H.textCoor, U = J.x, Y = J.y;
                    return U = Math.max(x.CHAR_WIDTH * (H.name.length + 1), U), U = Math.min(w.width - (H.name.length + 1) * x.CHAR_WIDTH, U), Y = Math.max(x.CHAR_WIDTH, Y), Y = Math.min(w.height - x.CHAR_WIDTH - 12, Y), p(p({}, H), { textCoor: { x: U, y: Y } });
                  });
                }, i;
              }(_.Component)
            );
            m.Labels = y;
          },
          /* 34 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(A) {
                for (var y, a = 1, i = arguments.length; a < i; a++) {
                  y = arguments[a];
                  for (var s in y) Object.prototype.hasOwnProperty.call(y, s) && (A[s] = y[s]);
                }
                return A;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.setHoveredLabelUnderline = m.WrappedGroupLabel = void 0;
            var p = b(1), _ = b(5), x = b(15), N = function(A) {
              var y = A.group, a = A.lineHeight, i = A.setHoveredGroup, s = A.size, d = s.height, c = s.width, l = function(se) {
                return se.reduce(function(ce, ve) {
                  return ce + (ve.name.length + 1) * _.CHAR_WIDTH;
                }, 0);
              }, h = function(se) {
                return se[se.length - 1];
              }, C = y.labels.reduce(function(se, ce) {
                var ve = ce.name.length * _.CHAR_WIDTH;
                if (ve > c) {
                  var fe = Math.floor(c * 0.75 / _.CHAR_WIDTH), pe = new RegExp(".{1,".concat(fe, "}"), "g"), xe = ce.name.match(pe) || [];
                  if (xe.length)
                    return xe.forEach(function(Ee) {
                      se.push([g(g({}, ce), { name: Ee.trim() })]);
                    }), se;
                }
                if (h(se)) {
                  var Re = l(h(se));
                  if (Re + ve <= 200)
                    return se[se.length - 1].push(ce), se;
                }
                return se.push([ce]), se;
              }, []), S = C.length * a, w = C.reduce(
                function(se, ce, ve) {
                  return Math.max(se, l(ce) - (ve === C.length - 1 ? _.CHAR_WIDTH : 0));
                },
                // no comma on last row, correct
                0
              ), I = [S, w].map(function(se) {
                return se + 2 * _.CHAR_WIDTH;
              }), O = I[0], G = I[1], F = y.forkCoor || y.textCoor, W = y.forkCoor ? "M".concat(y.textCoor.x, " ").concat(y.textCoor.y, " L").concat(F.x, " ").concat(F.y) : "M".concat(y.lineCoor.x, " ").concat(y.lineCoor.y, " L").concat(F.x, " ").concat(F.y), q = y.textCoor, H = q.x, J = q.y;
              H = y.textAnchor === "end" ? H - (y.labels[0].name.length + 3) * _.CHAR_WIDTH : H, J -= _.CHAR_WIDTH, H = Math.max(H, 2 * _.CHAR_WIDTH), H = Math.min(H, c - 2 * _.CHAR_WIDTH - w), J = Math.max(J, 2 * _.CHAR_WIDTH), J = Math.min(J, d - 2 * _.CHAR_WIDTH - S);
              var U = { x: H, y: J }, Y = { x: H - _.CHAR_WIDTH, y: J - _.CHAR_WIDTH - 2 }, te = "".concat(y.labels[0].id, "_overlay");
              return p.createElement(
                "g",
                { key: te, onMouseLeave: function() {
                  return i("");
                } },
                p.createElement("path", { className: "la-vz-label-line", d: W }),
                p.createElement("rect", g({ fill: "white", height: O, stroke: "none", width: G }, Y)),
                p.createElement("text", g({}, U, { style: x.svgText }), C.map(function(se, ce) {
                  return (
                    // turn each group of label rows into a text span
                    // that's vertically spaced from the row above it
                    // add a comma to all but the last label
                    p.createElement("tspan", { key: "".concat(te, "_").concat(ce), dominantBaseline: "middle", x: U.x, y: U.y + (ce + 0.5) * a }, se.map(function(ve, fe) {
                      return (
                        // every label should have its own id (used by selection
                        // handler) and trigger the hoverCutSite function
                        // if it's an enzyme
                        p.createElement(
                          p.Fragment,
                          { key: ve.id },
                          p.createElement("tspan", { className: "la-vz-circular-label", dominantBaseline: "middle", id: ve.id, style: x.circularLabel, tabIndex: -1, y: U.y + (ce + 0.5) * a, onMouseLeave: function() {
                            return (0, m.setHoveredLabelUnderline)(ve.id || "", !1);
                          }, onMouseOver: function() {
                            return (0, m.setHoveredLabelUnderline)(ve.id || "", !0);
                          } }, ve.name),
                          fe < se.length - 1 || ce !== C.length - 1 ? "," : ""
                        )
                      );
                    }))
                  );
                })),
                p.createElement("rect", g({ fill: "none", height: O, stroke: "black", strokeWidth: 1.5, width: G }, Y))
              );
            };
            m.WrappedGroupLabel = N;
            var T = function(A, y) {
              if (document) {
                var a = document.getElementById(A);
                a && (y ? a.style.textDecoration = "underline" : a.style.textDecoration = "none");
              }
            };
            m.setHoveredLabelUnderline = T;
          },
          /* 35 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var A = function(y, a) {
                return A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
                  i.__proto__ = s;
                } || function(i, s) {
                  for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (i[d] = s[d]);
                }, A(y, a);
              };
              return function(y, a) {
                if (typeof a != "function" && a !== null)
                  throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                A(y, a);
                function i() {
                  this.constructor = y;
                }
                y.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
              };
            }();
            Object.defineProperty(m, "__esModule", { value: !0 }), m.Selection = void 0;
            var p = b(1), _ = b(26), x = b(15), N = b(4), T = (
              /** @class */
              function(A) {
                g(y, A);
                function y() {
                  return A !== null && A.apply(this, arguments) || this;
                }
                return y.prototype.render = function() {
                  var a = this.props, i = a.findCoor, s = a.genArc, d = a.getRotation, c = a.lineHeight, l = a.radius, h = a.seq, C = a.seqLength, S = a.totalRows, w = this.context, I = w.clockwise, O = w.end, G = w.ref, F = w.start;
                  if (!(typeof F > "u" || typeof O > "u")) {
                    var W = 0;
                    if (F === O && G === "ALL" ? W = C : F > O ? W = I !== !1 ? Math.abs(O - F + C) : -Math.abs(F - O) : F < O && (W = I !== !1 ? Math.abs(O - F) : -Math.abs(F - O + C)), Math.abs(W) === C) {
                      var q = W > 0 ? -0.1 : 0.1;
                      W += q;
                    }
                    var H = l + c;
                    h.length <= N.RENDER_SEQ_LENGTH_CUTOFF && (H += 2 * c + 3);
                    var J = c * (S - 1), U = l - J;
                    (U < 0 || H < 0) && (U = 0, H = l);
                    var Y = i(0, H), te = i(0, U), se = "M ".concat(te.x, " ").concat(te.y, `
			L `).concat(Y.x, " ").concat(Y.y), ce = I !== !1 || G === "ALL", ve = !1;
                    return (I !== !1 && W > C / 2 || I === !1 && Math.abs(W) > C / 2) && (ve = !0), p.createElement(
                      "g",
                      null,
                      W && p.createElement("path", { className: "la-vz-selection", d: s({
                        innerRadius: U,
                        largeArc: ve,
                        length: W,
                        outerRadius: H,
                        sweepFWD: ce
                      }), shapeRendering: "auto", stroke: "none", style: x.selection, transform: d(F) }),
                      p.createElement("path", { className: "la-vz-selection-edge", d: se, strokeWidth: 1, style: x.selectionEdge, transform: d(F) }),
                      W && p.createElement("path", { className: "la-vz-selection-edge", d: se, style: x.selectionEdge, transform: d(O) })
                    );
                  }
                }, y.contextType = _.default, y;
              }(p.PureComponent)
            );
            m.Selection = T;
          },
          /* 36 */
          /***/
          function(Z, m, b) {
            var g = this && this.__extends || /* @__PURE__ */ function() {
              var d = function(c, l) {
                return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, C) {
                  h.__proto__ = C;
                } || function(h, C) {
                  for (var S in C) Object.prototype.hasOwnProperty.call(C, S) && (h[S] = C[S]);
                }, d(c, l);
              };
              return function(c, l) {
                if (typeof l != "function" && l !== null)
                  throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
                d(c, l);
                function h() {
                  this.constructor = c;
                }
                c.prototype = l === null ? Object.create(l) : (h.prototype = l.prototype, new h());
              };
            }(), p = this && this.__assign || function() {
              return p = Object.assign || function(d) {
                for (var c, l = 1, h = arguments.length; l < h; l++) {
                  c = arguments[l];
                  for (var C in c) Object.prototype.hasOwnProperty.call(c, C) && (d[C] = c[C]);
                }
                return d;
              }, p.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 });
            var _ = b(1), x = b(37), N = b(5), T = b(18), A = b(38), y = b(12), a = b(40), i = b(13), s = (
              /** @class */
              function(d) {
                g(c, d);
                function c(l) {
                  var h = d.call(this, l) || this;
                  h.componentDidUpdate = function(S, w) {
                    var I = S.accession, O = I === void 0 ? "" : I, G = S.annotations, F = S.enzymes, W = S.enzymesCustom, q = S.file, H = S.search, J = w.seq, U = w.seqType, Y = w.name;
                    if (O !== h.props.accession || q !== h.props.file || h.props.seq && h.props.seq !== J || h.props.name && h.props.name !== Y || h.props.seqType && h.props.seqType !== U) {
                      var te = h.parseInput();
                      h.setState(p(p({ annotations: te.annotations, compSeq: te.compSeq, name: te.name, seq: te.seq, seqType: te.seqType }, h.search(h.props, te.seq)), h.cut(te.seq, te.seqType)));
                      return;
                    }
                    H && (!h.props.search || H.query !== h.props.search.query || H.mismatch !== h.props.search.mismatch) && h.setState(h.search(h.props, J)), (!(0, y.isEqual)(F, h.props.enzymes) || !(0, y.isEqual)(W, h.props.enzymesCustom)) && h.setState(h.cut(J, U)), (0, y.isEqual)(G, h.props.annotations) || h.setState({
                      annotations: h.parseAnnotations(h.props.annotations, h.props.seq)
                    });
                  }, h.parseInput = function(S) {
                    var w = S || h.props, I = w.annotations, O = w.compSeq, G = w.file, F = w.name, W = F === void 0 ? "" : F, q = w.seq, H = w.seqType;
                    if (G) {
                      var J = {};
                      G && G instanceof File && (J.fileName = G.name);
                      var U = (0, x.parseFile)(G.toString(), J);
                      if (U.length) {
                        var Y = H ?? (0, i.guessType)(U[0].seq);
                        return {
                          annotations: h.parseAnnotations(U[0].annotations, U[0].seq),
                          compSeq: (0, i.complement)(U[0].seq, Y).compSeq,
                          name: U[0].name,
                          seq: U[0].seq,
                          seqType: Y
                        };
                      }
                    } else if (q) {
                      var Y = H ?? (0, i.guessType)(q);
                      return {
                        annotations: h.parseAnnotations(I, q),
                        compSeq: O || (0, i.complement)(q, Y).compSeq,
                        name: W,
                        seq: q,
                        seqType: Y
                      };
                    }
                    return {
                      annotations: [],
                      compSeq: "",
                      name: "",
                      seq: "",
                      seqType: "dna"
                    };
                  }, h.search = function(S, w) {
                    var I = S.onSearch, O = S.search, G = S.seqType;
                    if (!O || !w || !w.length)
                      return { search: [] };
                    var F = (0, a.default)(O.query, O.mismatch, w, G || (0, i.guessType)(w));
                    return h.state && (0, y.isEqual)(F, h.state.search) ? { search: h.state.search } : (I && I(F), { search: F });
                  }, h.cut = function(S, w) {
                    return {
                      cutSites: (0, A.default)(S || "", w, h.props.enzymes || [], h.props.enzymesCustom || {})
                    };
                  }, h.parseAnnotations = function(S, w) {
                    return S === void 0 && (S = null), w === void 0 && (w = ""), (S || []).map(function(I, O) {
                      return p(p({ id: (0, i.randomID)() }, I), { color: I.color || (0, T.colorByIndex)(O, T.COLORS), direction: (0, i.directionality)(I.direction), end: I.end % (w.length + 1), start: I.start % (w.length + 1) });
                    });
                  };
                  var C = h.parseInput(l);
                  return h.state = p(p(p({}, C), h.search(l, C.seq)), h.cut(C.seq, C.seqType)), h;
                }
                return c.prototype.componentDidMount = function() {
                  var l = this;
                  typeof window < "u" && (this.props.disableExternalFonts || b(41).load({
                    google: {
                      families: ["Roboto Mono:300,400,500"]
                    }
                  }));
                  var h = this.props.accession;
                  !h || !h.length || (0, x.default)(h, { cors: !0 }).then(function(C) {
                    var S = (0, i.guessType)(C.seq);
                    l.setState(p(p({ annotations: l.parseAnnotations(C.annotations, C.seq), compSeq: (0, i.complement)(C.seq, S).compSeq, name: C.name, seq: C.seq, seqType: S }, l.search(l.props, C.seq)), l.cut(C.seq, S)));
                  });
                }, c.prototype.componentDidCatch = function(l, h) {
                  console.error("Error caught in SeqViz: %v %v", l, h);
                }, c.prototype.render = function() {
                  var l = this.props, h = l.highlightedRegions, C = l.highlights, S = l.primers, w = l.showComplement, I = l.showIndex, O = l.style, G = l.zoom, F = this.props.translations, W = this.state, q = W.compSeq, H = W.seq, J = W.seqType;
                  if (!H)
                    return _.createElement("div", { className: "la-vz-seqviz" });
                  J === "aa" && (F = [{ direction: 1, end: H.length, start: 0, name: "" }]);
                  var U = {
                    bpColors: this.props.bpColors || {},
                    copyEvent: this.props.copyEvent || function() {
                      return !1;
                    },
                    selectAllEvent: this.props.selectAllEvent || function() {
                      return !1;
                    },
                    cutSites: this.state.cutSites,
                    highlights: (C || []).concat(h || []).map(function(Y, te) {
                      return p(p({}, Y), { direction: 1, end: Y.end % (H.length + 1), id: "highlight-".concat(te, "-").concat(Y.start, "-").concat(Y.end), name: "", start: Y.start % (H.length + 1) });
                    }),
                    onSelection: this.props.onSelection || function() {
                    },
                    primers: S.map(function(Y, te) {
                      return p({ color: (0, T.colorByIndex)(te), id: "primer".concat(Y.name).concat(te).concat(Y.start).concat(Y.end) }, Y);
                    }),
                    rotateOnScroll: !!this.props.rotateOnScroll,
                    showComplement: !!q && (typeof w < "u" ? w : !0) || !1,
                    showIndex: !!I,
                    translations: (F || []).map(function(Y, te) {
                      return {
                        direction: Y.direction && Y.direction < 0 ? -1 : 1,
                        end: J === "aa" ? Y.end : Y.start + Math.floor((Y.end - Y.start) / 3) * 3,
                        start: Y.start % H.length,
                        color: Y.color || (0, T.colorByIndex)(te, T.COLORS),
                        id: "translation".concat(Y.name).concat(te).concat(Y.start).concat(Y.end),
                        name: Y.name
                      };
                    }),
                    viewer: this.props.viewer || "both",
                    zoom: {
                      circular: typeof G?.circular == "number" ? Math.min(Math.max(G.circular, 0), 100) : 0,
                      linear: typeof G?.linear == "number" ? Math.min(Math.max(G.linear, 0), 100) : 50
                    }
                  };
                  return _.createElement(
                    "div",
                    { className: "la-vz-seqviz", "data-testid": "la-vz-seqviz", style: p({ height: "100%", width: "100%" }, O) },
                    _.createElement(N.default, p({}, this.props, U, this.state))
                  );
                }, c.defaultProps = {
                  accession: "",
                  annotations: [],
                  backbone: "",
                  bpColors: {},
                  colors: [],
                  compSeq: "",
                  copyEvent: function(l) {
                    return l.key === "c" && (l.metaKey || l.ctrlKey);
                  },
                  disableExternalFonts: !1,
                  enzymes: [],
                  enzymesCustom: {},
                  name: "",
                  onSearch: function(l) {
                    return null;
                  },
                  onSelection: function(l) {
                    return null;
                  },
                  primers: [],
                  rotateOnScroll: !0,
                  search: { mismatch: 0, query: "" },
                  selectAllEvent: function(l) {
                    return l.key === "a" && (l.metaKey || l.ctrlKey);
                  },
                  seq: "",
                  showComplement: !0,
                  showIndex: !0,
                  style: {},
                  translations: [],
                  viewer: "both",
                  zoom: { circular: 0, linear: 50 }
                }, c;
              }(_.Component)
            );
            m.default = s;
          },
          /* 37 */
          /***/
          (Z) => {
            Z.exports = cf();
          },
          /* 38 */
          /***/
          function(Z, m, b) {
            var g = this && this.__assign || function() {
              return g = Object.assign || function(T) {
                for (var A, y = 1, a = arguments.length; y < a; y++) {
                  A = arguments[y];
                  for (var i in A) Object.prototype.hasOwnProperty.call(A, i) && (T[i] = A[i]);
                }
                return T;
              }, g.apply(this, arguments);
            };
            Object.defineProperty(m, "__esModule", { value: !0 }), m.findCutSites = void 0;
            var p = b(39), _ = b(40), x = b(13);
            m.default = function(T, A, y, a) {
              y === void 0 && (y = []), a === void 0 && (a = {});
              var i = T + T, s = y.map(function(d) {
                return typeof d == "string" ? p.default[d.toLowerCase()] : d;
              }).filter(function(d) {
                return d;
              }).concat(Object.values(a)).reduce(function(d, c) {
                return (0, m.findCutSites)(c, i, A, T.length).forEach(function(l) {
                  return d["".concat(l.fcut, "-").concat(l.direction)] = l;
                }), d;
              }, {});
              return Object.values(s);
            };
            var N = function(T, A, y, a) {
              if (y === "aa")
                return [];
              for (var i = T.fcut, s = T.rcut, d = T.rseq, c = [], l = (0, _.createRegex)(d, y), h = l.exec(A); h; ) {
                var C = h.index;
                c.push({
                  direction: 1,
                  end: C + d.length,
                  enzyme: T,
                  fcut: C + i,
                  id: "",
                  name: T.name,
                  rcut: C + s,
                  start: C
                }), h = l.exec(A);
              }
              var S = d === (0, x.reverseComplement)(d, y), w = (0, _.createRegex)((0, x.reverseComplement)(d, y), y);
              for (h = w.exec(A); h && !S; ) {
                var C = h.index;
                c.push({
                  direction: -1,
                  end: C + d.length,
                  enzyme: T,
                  fcut: C + d.length - s,
                  id: "",
                  name: T.name,
                  rcut: C + d.length - i,
                  start: C
                }), h = w.exec(A);
              }
              return c.sort(function(I, O) {
                return I.fcut - O.fcut;
              }).filter(function(I) {
                return !(I.fcut === 0 && I.rcut === 0);
              }).map(function(I) {
                return g(g({}, I), { end: I.end % a, fcut: I.fcut % a, id: "".concat(T.name, "-").concat(T.rseq, "-").concat(I.fcut, "-").concat(I.direction > 0 ? "fwd" : "rev"), rcut: I.rcut % a, start: I.start % a });
              }).filter(function(I) {
                return I.enzyme.range ? I.start >= I.enzyme.range.start && I.end <= I.enzyme.range.end : !0;
              });
            };
            m.findCutSites = N;
          },
          /* 39 */
          /***/
          (Z, m) => {
            Object.defineProperty(m, "__esModule", { value: !0 });
            var b = {
              aatii: {
                fcut: 5,
                name: "AatII",
                rcut: 1,
                rseq: "GACGTC"
              },
              abasi: {
                fcut: 14,
                name: "AbaSI",
                rcut: 12,
                rseq: "hmCNNNNNNNNNNN"
              },
              acc65i: {
                fcut: 1,
                name: "Acc65I",
                rcut: 5,
                rseq: "GGTACC"
              },
              acci: {
                fcut: 2,
                name: "AccI",
                rcut: 4,
                rseq: "GTMKAC"
              },
              acii: {
                fcut: 1,
                name: "AciI",
                rcut: 3,
                rseq: "CCGC"
              },
              acli: {
                fcut: 2,
                name: "AclI",
                rcut: 4,
                rseq: "AACGTT"
              },
              acui: {
                fcut: 22,
                name: "AcuI",
                rcut: 20,
                rseq: "CTGAAGNNNNNNNNNNNNNNNN"
              },
              afei: {
                fcut: 3,
                name: "AfeI",
                rcut: 3,
                rseq: "AGCGCT"
              },
              aflii: {
                fcut: 1,
                name: "AflII",
                rcut: 5,
                rseq: "CTTAAG"
              },
              afliii: {
                fcut: 1,
                name: "AflIII",
                rcut: 5,
                rseq: "ACRYGT"
              },
              agei: {
                fcut: 1,
                name: "AgeI",
                rcut: 5,
                rseq: "ACCGGT"
              },
              ahdi: {
                fcut: 6,
                name: "AhdI",
                rcut: 5,
                rseq: "GACNNNNNGTC"
              },
              alei: {
                fcut: 5,
                name: "AleI",
                rcut: 5,
                rseq: "CACNNNNGTG"
              },
              alui: {
                fcut: 2,
                name: "AluI",
                rcut: 2,
                rseq: "AGCT"
              },
              alwi: {
                fcut: 9,
                name: "AlwI",
                rcut: 10,
                rseq: "GGATCNNNNN"
              },
              alwni: {
                fcut: 6,
                name: "AlwNI",
                rcut: 3,
                rseq: "CAGNNNCTG"
              },
              apai: {
                fcut: 5,
                name: "ApaI",
                rcut: 1,
                rseq: "GGGCCC"
              },
              apali: {
                fcut: 1,
                name: "ApaLI",
                rcut: 5,
                rseq: "GTGCAC"
              },
              apeki: {
                fcut: 1,
                name: "ApeKI",
                rcut: 4,
                rseq: "GCWGC"
              },
              apoi: {
                fcut: 1,
                name: "ApoI",
                rcut: 5,
                rseq: "RAATTY"
              },
              asci: {
                fcut: 2,
                name: "AscI",
                rcut: 6,
                rseq: "GGCGCGCC"
              },
              asei: {
                fcut: 2,
                name: "AseI",
                rcut: 4,
                rseq: "ATTAAT"
              },
              asisi: {
                fcut: 5,
                name: "AsiSI",
                rcut: 3,
                rseq: "GCGATCGC"
              },
              avai: {
                fcut: 1,
                name: "AvaI",
                rcut: 5,
                rseq: "CYCGRG"
              },
              avaii: {
                fcut: 1,
                name: "AvaII",
                rcut: 4,
                rseq: "GGWCC"
              },
              avrii: {
                fcut: 1,
                name: "AvrII",
                rcut: 5,
                rseq: "CCTAGG"
              },
              baegi: {
                fcut: 5,
                name: "BaeGI",
                rcut: 1,
                rseq: "GKGCMC"
              },
              baei: {
                fcut: 38,
                name: "BaeI",
                rcut: 33,
                rseq: "NNNNNNNNNNNNNNNACNNNNGTAYCNNNNNNNNNNNN"
              },
              bamhi: {
                fcut: 1,
                name: "BamHI",
                rcut: 5,
                rseq: "GGATCC"
              },
              bani: {
                fcut: 1,
                name: "BanI",
                rcut: 5,
                rseq: "GGYRCC"
              },
              banii: {
                fcut: 5,
                name: "BanII",
                rcut: 1,
                rseq: "GRGCYC"
              },
              bbsi: {
                fcut: 8,
                name: "BbsI",
                rcut: 12,
                rseq: "GAAGACNNNNNN"
              },
              bbvci: {
                fcut: 2,
                name: "BbvCI",
                rcut: 5,
                rseq: "CCTCAGC"
              },
              bbvi: {
                fcut: 13,
                name: "BbvI",
                rcut: 17,
                rseq: "GCAGCNNNNNNNNNNNN"
              },
              bcci: {
                fcut: 9,
                name: "BccI",
                rcut: 10,
                rseq: "CCATCNNNNN"
              },
              bceai: {
                fcut: 17,
                name: "BceAI",
                rcut: 19,
                rseq: "ACGGCNNNNNNNNNNNNNN"
              },
              bcgi: {
                fcut: 36,
                name: "BcgI",
                rcut: 34,
                rseq: "NNNNNNNNNNNNCGANNNNNNTGCNNNNNNNNNNNN"
              },
              bcivi: {
                fcut: 12,
                name: "BciVI",
                rcut: 11,
                rseq: "GTATCCNNNNNN"
              },
              bcli: {
                fcut: 1,
                name: "BclI",
                rcut: 5,
                rseq: "TGATCA"
              },
              bcodi: {
                fcut: 6,
                name: "BcoDI",
                rcut: 10,
                rseq: "GTCTCNNNNN"
              },
              bfai: {
                fcut: 1,
                name: "BfaI",
                rcut: 3,
                rseq: "CTAG"
              },
              bfuai: {
                fcut: 10,
                name: "BfuAI",
                rcut: 14,
                rseq: "ACCTGCNNNNNNNN"
              },
              bgli: {
                fcut: 7,
                name: "BglI",
                rcut: 4,
                rseq: "GCCNNNNNGGC"
              },
              bglii: {
                fcut: 1,
                name: "BglII",
                rcut: 5,
                rseq: "AGATCT"
              },
              blpi: {
                fcut: 2,
                name: "BlpI",
                rcut: 5,
                rseq: "GCTNAGC"
              },
              bmgbi: {
                fcut: 3,
                name: "BmgBI",
                rcut: 3,
                rseq: "CACGTC"
              },
              bmri: {
                fcut: 11,
                name: "BmrI",
                rcut: 10,
                rseq: "ACTGGGNNNNN"
              },
              bmti: {
                fcut: 5,
                name: "BmtI",
                rcut: 1,
                rseq: "GCTAGC"
              },
              bpmi: {
                fcut: 22,
                name: "BpmI",
                rcut: 20,
                rseq: "CTGGAGNNNNNNNNNNNNNNNN"
              },
              bpu10i: {
                fcut: 2,
                name: "Bpu10I",
                rcut: 5,
                rseq: "CCTNAGC"
              },
              bpuei: {
                fcut: 22,
                name: "BpuEI",
                rcut: 20,
                rseq: "CTTGAGNNNNNNNNNNNNNNNN"
              },
              bsaai: {
                fcut: 3,
                name: "BsaAI",
                rcut: 3,
                rseq: "YACGTR"
              },
              bsabi: {
                fcut: 5,
                name: "BsaBI",
                rcut: 5,
                rseq: "GATNNNNATC"
              },
              bsahi: {
                fcut: 2,
                name: "BsaHI",
                rcut: 4,
                rseq: "GRCGYC"
              },
              bsai: {
                fcut: 7,
                name: "BsaI",
                rcut: 11,
                rseq: "GGTCTCNNNNN"
              },
              bsaji: {
                fcut: 1,
                name: "BsaJI",
                rcut: 5,
                rseq: "CCNNGG"
              },
              bsawi: {
                fcut: 1,
                name: "BsaWI",
                rcut: 5,
                rseq: "WCCGGW"
              },
              bsaxi: {
                fcut: 33,
                name: "BsaXI",
                rcut: 30,
                rseq: "NNNNNNNNNNNNACNNNNNCTCCNNNNNNNNNN"
              },
              bseri: {
                fcut: 16,
                name: "BseRI",
                rcut: 14,
                rseq: "GAGGAGNNNNNNNNNN"
              },
              bseyi: {
                fcut: 1,
                name: "BseYI",
                rcut: 5,
                rseq: "CCCAGC"
              },
              bsgi: {
                fcut: 22,
                name: "BsgI",
                rcut: 20,
                rseq: "GTGCAGNNNNNNNNNNNNNNNN"
              },
              bsiei: {
                fcut: 4,
                name: "BsiEI",
                rcut: 2,
                rseq: "CGRYCG"
              },
              bsihkai: {
                fcut: 5,
                name: "BsiHKAI",
                rcut: 1,
                rseq: "GWGCWC"
              },
              bsiwi: {
                fcut: 1,
                name: "BsiWI",
                rcut: 5,
                rseq: "CGTACG"
              },
              bsli: {
                fcut: 7,
                name: "BslI",
                rcut: 4,
                rseq: "CCNNNNNNNGG"
              },
              bsmai: {
                fcut: 6,
                name: "BsmAI",
                rcut: 10,
                rseq: "GTCTCNNNNN"
              },
              bsmbi: {
                fcut: 7,
                name: "BsmBI",
                rcut: 11,
                rseq: "CGTCTCNNNNN"
              },
              bsmfi: {
                fcut: 15,
                name: "BsmFI",
                rcut: 19,
                rseq: "GGGACNNNNNNNNNNNNNN"
              },
              bsmi: {
                fcut: 7,
                name: "BsmI",
                rcut: 5,
                rseq: "GAATGCN"
              },
              bsobi: {
                fcut: 1,
                name: "BsoBI",
                rcut: 5,
                rseq: "CYCGRG"
              },
              bsp1286i: {
                fcut: 5,
                name: "Bsp1286I",
                rcut: 1,
                rseq: "GDGCHC"
              },
              bspcni: {
                fcut: 14,
                name: "BspCNI",
                rcut: 12,
                rseq: "CTCAGNNNNNNNNN"
              },
              bspdi: {
                fcut: 2,
                name: "BspDI",
                rcut: 4,
                rseq: "ATCGAT"
              },
              bspei: {
                fcut: 1,
                name: "BspEI",
                rcut: 5,
                rseq: "TCCGGA"
              },
              bsphi: {
                fcut: 1,
                name: "BspHI",
                rcut: 5,
                rseq: "TCATGA"
              },
              bspmi: {
                fcut: 10,
                name: "BspMI",
                rcut: 14,
                rseq: "ACCTGCNNNNNNNN"
              },
              bspqi: {
                fcut: 8,
                name: "BspQI",
                rcut: 11,
                rseq: "GCTCTTCNNNN"
              },
              bsrbi: {
                fcut: 3,
                name: "BsrBI",
                rcut: 3,
                rseq: "CCGCTC"
              },
              bsrdi: {
                fcut: 8,
                name: "BsrDI",
                rcut: 6,
                rseq: "GCAATGNN"
              },
              bsrfi: {
                fcut: 1,
                name: "BsrFI",
                rcut: 5,
                rseq: "RCCGGY"
              },
              bsrgi: {
                fcut: 1,
                name: "BsrGI",
                rcut: 5,
                rseq: "TGTACA"
              },
              bsri: {
                fcut: 6,
                name: "BsrI",
                rcut: 4,
                rseq: "ACTGGN"
              },
              bsshii: {
                fcut: 1,
                name: "BssHII",
                rcut: 5,
                rseq: "GCGCGC"
              },
              bsssi: {
                fcut: 1,
                name: "BssSI",
                rcut: 5,
                rseq: "CACGAG"
              },
              bstapi: {
                fcut: 7,
                name: "BstAPI",
                rcut: 4,
                rseq: "GCANNNNNTGC"
              },
              bstbi: {
                fcut: 2,
                name: "BstBI",
                rcut: 4,
                rseq: "TTCGAA"
              },
              bsteii: {
                fcut: 1,
                name: "BstEII",
                rcut: 6,
                rseq: "GGTNACC"
              },
              bstni: {
                fcut: 2,
                name: "BstNI",
                rcut: 3,
                rseq: "CCWGG"
              },
              bstui: {
                fcut: 2,
                name: "BstUI",
                rcut: 2,
                rseq: "CGCG"
              },
              bstxi: {
                fcut: 8,
                name: "BstXI",
                rcut: 4,
                rseq: "CCANNNNNNTGG"
              },
              bstyi: {
                fcut: 1,
                name: "BstYI",
                rcut: 5,
                rseq: "RGATCY"
              },
              bstz17i: {
                fcut: 3,
                name: "BstZ17I",
                rcut: 3,
                rseq: "GTATAC"
              },
              bsu36i: {
                fcut: 2,
                name: "Bsu36I",
                rcut: 5,
                rseq: "CCTNAGG"
              },
              btgi: {
                fcut: 1,
                name: "BtgI",
                rcut: 5,
                rseq: "CCRYGG"
              },
              btgzi: {
                fcut: 16,
                name: "BtgZI",
                rcut: 20,
                rseq: "GCGATGNNNNNNNNNNNNNN"
              },
              btsci: {
                fcut: 7,
                name: "BtsCI",
                rcut: 5,
                rseq: "GGATGNN"
              },
              btsi: {
                fcut: 8,
                name: "BtsI",
                rcut: 6,
                rseq: "GCAGTGNN"
              },
              btsimuti: {
                fcut: 7,
                name: "BtsIMutI",
                rcut: 5,
                rseq: "CAGTGNN"
              },
              cac8i: {
                fcut: 3,
                name: "Cac8I",
                rcut: 3,
                rseq: "GCNNGC"
              },
              clai: {
                fcut: 2,
                name: "ClaI",
                rcut: 4,
                rseq: "ATCGAT"
              },
              cspci: {
                fcut: 37,
                name: "CspCI",
                rcut: 35,
                rseq: "NNNNNNNNNNNNNCAANNNNNGTGGNNNNNNNNNNNN"
              },
              cviaii: {
                fcut: 1,
                name: "CviAII",
                rcut: 3,
                rseq: "CATG"
              },
              "cviki-1": {
                fcut: 2,
                name: "CviKI-1",
                rcut: 2,
                rseq: "RGCY"
              },
              cviqi: {
                fcut: 1,
                name: "CviQI",
                rcut: 3,
                rseq: "GTAC"
              },
              ddei: {
                fcut: 1,
                name: "DdeI",
                rcut: 4,
                rseq: "CTNAG"
              },
              dpni: {
                fcut: 3,
                name: "DpnI",
                rcut: 3,
                rseq: "GmATC"
              },
              dpnii: {
                fcut: 0,
                name: "DpnII",
                rcut: 4,
                rseq: "GATC"
              },
              drai: {
                fcut: 3,
                name: "DraI",
                rcut: 3,
                rseq: "TTTAAA"
              },
              draiii: {
                fcut: 6,
                name: "DraIII",
                rcut: 3,
                rseq: "CACNNNGTG"
              },
              drdi: {
                fcut: 7,
                name: "DrdI",
                rcut: 5,
                rseq: "GACNNNNNNGTC"
              },
              eaei: {
                fcut: 1,
                name: "EaeI",
                rcut: 5,
                rseq: "YGGCCR"
              },
              eagi: {
                fcut: 1,
                name: "EagI",
                rcut: 5,
                rseq: "CGGCCG"
              },
              eari: {
                fcut: 7,
                name: "EarI",
                rcut: 10,
                rseq: "CTCTTCNNNN"
              },
              ecii: {
                fcut: 17,
                name: "EciI",
                rcut: 15,
                rseq: "GGCGGANNNNNNNNNNN"
              },
              eco53ki: {
                fcut: 3,
                name: "Eco53kI",
                rcut: 3,
                rseq: "GAGCTC"
              },
              econi: {
                fcut: 5,
                name: "EcoNI",
                rcut: 6,
                rseq: "CCTNNNNNAGG"
              },
              ecoo109i: {
                fcut: 2,
                name: "EcoO109I",
                rcut: 5,
                rseq: "RGGNCCY"
              },
              ecori: {
                fcut: 1,
                name: "EcoRI",
                rcut: 5,
                rseq: "GAATTC"
              },
              ecorv: {
                fcut: 3,
                name: "EcoRV",
                rcut: 3,
                rseq: "GATATC"
              },
              esp3i: {
                fcut: 7,
                name: "Esp3I",
                rcut: 11,
                rseq: "CGTCTCNNNNN"
              },
              fati: {
                fcut: 0,
                name: "FatI",
                rcut: 4,
                rseq: "CATG"
              },
              faui: {
                fcut: 9,
                name: "FauI",
                rcut: 11,
                rseq: "CCCGCNNNNNN"
              },
              fnu4hi: {
                fcut: 2,
                name: "Fnu4HI",
                rcut: 3,
                rseq: "GCNGC"
              },
              foki: {
                fcut: 14,
                name: "FokI",
                rcut: 18,
                rseq: "GGATGNNNNNNNNNNNNN"
              },
              fsei: {
                fcut: 6,
                name: "FseI",
                rcut: 2,
                rseq: "GGCCGGCC"
              },
              fspei: {
                fcut: 15,
                name: "FspEI",
                rcut: 19,
                rseq: "CmCNNNNNNNNNNNNNNNN"
              },
              fspi: {
                fcut: 3,
                name: "FspI",
                rcut: 3,
                rseq: "TGCGCA"
              },
              haeii: {
                fcut: 5,
                name: "HaeII",
                rcut: 1,
                rseq: "RGCGCY"
              },
              haeiii: {
                fcut: 2,
                name: "HaeIII",
                rcut: 2,
                rseq: "GGCC"
              },
              hgai: {
                fcut: 10,
                name: "HgaI",
                rcut: 15,
                rseq: "GACGCNNNNNNNNNN"
              },
              hhai: {
                fcut: 3,
                name: "HhaI",
                rcut: 1,
                rseq: "GCGC"
              },
              hincii: {
                fcut: 3,
                name: "HincII",
                rcut: 3,
                rseq: "GTYRAC"
              },
              hindiii: {
                fcut: 1,
                name: "HindIII",
                rcut: 5,
                rseq: "AAGCTT"
              },
              hinfi: {
                fcut: 1,
                name: "HinfI",
                rcut: 4,
                rseq: "GANTC"
              },
              hinp1i: {
                fcut: 1,
                name: "HinP1I",
                rcut: 3,
                rseq: "GCGC"
              },
              hpai: {
                fcut: 3,
                name: "HpaI",
                rcut: 3,
                rseq: "GTTAAC"
              },
              hpaii: {
                fcut: 1,
                name: "HpaII",
                rcut: 3,
                rseq: "CCGG"
              },
              hphi: {
                fcut: 13,
                name: "HphI",
                rcut: 12,
                rseq: "GGTGANNNNNNNN"
              },
              hpy166ii: {
                fcut: 3,
                name: "Hpy166II",
                rcut: 3,
                rseq: "GTNNAC"
              },
              hpy188i: {
                fcut: 3,
                name: "Hpy188I",
                rcut: 2,
                rseq: "TCNGA"
              },
              hpy188iii: {
                fcut: 2,
                name: "Hpy188III",
                rcut: 4,
                rseq: "TCNNGA"
              },
              hpy99i: {
                fcut: 5,
                name: "Hpy99I",
                rcut: 0,
                rseq: "CGWCG"
              },
              hpyav: {
                fcut: 11,
                name: "HpyAV",
                rcut: 10,
                rseq: "CCTTCNNNNNN"
              },
              hpych4iii: {
                fcut: 3,
                name: "HpyCH4III",
                rcut: 2,
                rseq: "ACNGT"
              },
              hpych4iv: {
                fcut: 1,
                name: "HpyCH4IV",
                rcut: 3,
                rseq: "ACGT"
              },
              hpych4v: {
                fcut: 2,
                name: "HpyCH4V",
                rcut: 2,
                rseq: "TGCA"
              },
              "i-ceui": {
                fcut: 18,
                name: "I-CeuI",
                rcut: 14,
                rseq: "TAACTATAACGGTCCTAAGGTAGCGAA"
              },
              "i-scei": {
                fcut: 9,
                name: "I-SceI",
                rcut: 5,
                rseq: "TAGGGATAACAGGGTAAT"
              },
              kasi: {
                fcut: 1,
                name: "KasI",
                rcut: 5,
                rseq: "GGCGCC"
              },
              kpni: {
                fcut: 5,
                name: "KpnI",
                rcut: 1,
                rseq: "GGTACC"
              },
              lpnpi: {
                fcut: 15,
                name: "LpnPI",
                rcut: 19,
                rseq: "CmCDGNNNNNNNNNNNNNN"
              },
              mboi: {
                fcut: 0,
                name: "MboI",
                rcut: 4,
                rseq: "GATC"
              },
              mboii: {
                fcut: 13,
                name: "MboII",
                rcut: 12,
                rseq: "GAAGANNNNNNNN"
              },
              mfei: {
                fcut: 1,
                name: "MfeI",
                rcut: 5,
                rseq: "CAATTG"
              },
              mluci: {
                fcut: 0,
                name: "MluCI",
                rcut: 4,
                rseq: "AATT"
              },
              mlui: {
                fcut: 1,
                name: "MluI",
                rcut: 5,
                rseq: "ACGCGT"
              },
              mlyi: {
                fcut: 10,
                name: "MlyI",
                rcut: 10,
                rseq: "GAGTCNNNNN"
              },
              mmei: {
                fcut: 26,
                name: "MmeI",
                rcut: 24,
                rseq: "TCCRACNNNNNNNNNNNNNNNNNNNN"
              },
              mnli: {
                fcut: 11,
                name: "MnlI",
                rcut: 10,
                rseq: "CCTCNNNNNNN"
              },
              msci: {
                fcut: 3,
                name: "MscI",
                rcut: 3,
                rseq: "TGGCCA"
              },
              msei: {
                fcut: 1,
                name: "MseI",
                rcut: 3,
                rseq: "TTAA"
              },
              msli: {
                fcut: 5,
                name: "MslI",
                rcut: 5,
                rseq: "CAYNNNNRTG"
              },
              mspa1i: {
                fcut: 3,
                name: "MspA1I",
                rcut: 3,
                rseq: "CMGCKG"
              },
              mspi: {
                fcut: 1,
                name: "MspI",
                rcut: 3,
                rseq: "CCGG"
              },
              mspji: {
                fcut: 14,
                name: "MspJI",
                rcut: 18,
                rseq: "mCNNRNNNNNNNNNNNNN"
              },
              mwoi: {
                fcut: 7,
                name: "MwoI",
                rcut: 4,
                rseq: "GCNNNNNNNGC"
              },
              naei: {
                fcut: 3,
                name: "NaeI",
                rcut: 3,
                rseq: "GCCGGC"
              },
              nari: {
                fcut: 2,
                name: "NarI",
                rcut: 4,
                rseq: "GGCGCC"
              },
              ncii: {
                fcut: 2,
                name: "NciI",
                rcut: 3,
                rseq: "CCSGG"
              },
              ncoi: {
                fcut: 1,
                name: "NcoI",
                rcut: 5,
                rseq: "CCATGG"
              },
              ndei: {
                fcut: 2,
                name: "NdeI",
                rcut: 4,
                rseq: "CATATG"
              },
              ngomiv: {
                fcut: 1,
                name: "NgoMIV",
                rcut: 5,
                rseq: "GCCGGC"
              },
              nhei: {
                fcut: 1,
                name: "NheI",
                rcut: 5,
                rseq: "GCTAGC"
              },
              nlaiii: {
                fcut: 4,
                name: "NlaIII",
                rcut: 0,
                rseq: "CATG"
              },
              nlaiv: {
                fcut: 3,
                name: "NlaIV",
                rcut: 3,
                rseq: "GGNNCC"
              },
              nmeaiii: {
                fcut: 26,
                name: "NmeAIII",
                rcut: 25,
                rseq: "GCCGAGNNNNNNNNNNNNNNNNNNNN"
              },
              noti: {
                fcut: 2,
                name: "NotI",
                rcut: 6,
                rseq: "GCGGCCGC"
              },
              nrui: {
                fcut: 3,
                name: "NruI",
                rcut: 3,
                rseq: "TCGCGA"
              },
              nsii: {
                fcut: 5,
                name: "NsiI",
                rcut: 1,
                rseq: "ATGCAT"
              },
              nspi: {
                fcut: 5,
                name: "NspI",
                rcut: 1,
                rseq: "RCATGY"
              },
              paci: {
                fcut: 5,
                name: "PacI",
                rcut: 3,
                rseq: "TTAATTAA"
              },
              paer7i: {
                fcut: 1,
                name: "PaeR7I",
                rcut: 5,
                rseq: "CTCGAG"
              },
              pcii: {
                fcut: 1,
                name: "PciI",
                rcut: 5,
                rseq: "ACATGT"
              },
              pflfi: {
                fcut: 4,
                name: "PflFI",
                rcut: 5,
                rseq: "GACNNNGTC"
              },
              pflmi: {
                fcut: 7,
                name: "PflMI",
                rcut: 4,
                rseq: "CCANNNNNTGG"
              },
              "pi-pspi": {
                fcut: 17,
                name: "PI-PspI",
                rcut: 13,
                rseq: "TGGCAAACAGCTATTATGGGTATTATGGGT"
              },
              "pi-scei": {
                fcut: 15,
                name: "PI-SceI",
                rcut: 11,
                rseq: "ATCTATGTCGGGTGCGGAGAAAGAGGTAATGAAATGG"
              },
              plei: {
                fcut: 9,
                name: "PleI",
                rcut: 10,
                rseq: "GAGTCNNNNN"
              },
              pluti: {
                fcut: 5,
                name: "PluTI",
                rcut: 1,
                rseq: "GGCGCC"
              },
              pmei: {
                fcut: 4,
                name: "PmeI",
                rcut: 4,
                rseq: "GTTTAAAC"
              },
              pmli: {
                fcut: 3,
                name: "PmlI",
                rcut: 3,
                rseq: "CACGTG"
              },
              ppumi: {
                fcut: 2,
                name: "PpuMI",
                rcut: 5,
                rseq: "RGGWCCY"
              },
              pshai: {
                fcut: 5,
                name: "PshAI",
                rcut: 5,
                rseq: "GACNNNNGTC"
              },
              psii: {
                fcut: 3,
                name: "PsiI",
                rcut: 3,
                rseq: "TTATAA"
              },
              pspgi: {
                fcut: 0,
                name: "PspGI",
                rcut: 5,
                rseq: "CCWGG"
              },
              pspomi: {
                fcut: 1,
                name: "PspOMI",
                rcut: 5,
                rseq: "GGGCCC"
              },
              pspxi: {
                fcut: 2,
                name: "PspXI",
                rcut: 6,
                rseq: "VCTCGAGB"
              },
              psti: {
                fcut: 5,
                name: "PstI",
                rcut: 1,
                rseq: "CTGCAG"
              },
              pvui: {
                fcut: 4,
                name: "PvuI",
                rcut: 2,
                rseq: "CGATCG"
              },
              pvuii: {
                fcut: 3,
                name: "PvuII",
                rcut: 3,
                rseq: "CAGCTG"
              },
              rsai: {
                fcut: 2,
                name: "RsaI",
                rcut: 2,
                rseq: "GTAC"
              },
              rsrii: {
                fcut: 2,
                name: "RsrII",
                rcut: 5,
                rseq: "CGGWCCG"
              },
              saci: {
                fcut: 5,
                name: "SacI",
                rcut: 1,
                rseq: "GAGCTC"
              },
              sacii: {
                fcut: 4,
                name: "SacII",
                rcut: 2,
                rseq: "CCGCGG"
              },
              sali: {
                fcut: 1,
                name: "SalI",
                rcut: 5,
                rseq: "GTCGAC"
              },
              sapi: {
                fcut: 8,
                name: "SapI",
                rcut: 11,
                rseq: "GCTCTTCNNNN"
              },
              sau3ai: {
                fcut: 0,
                name: "Sau3AI",
                rcut: 4,
                rseq: "GATC"
              },
              sau96i: {
                fcut: 1,
                name: "Sau96I",
                rcut: 4,
                rseq: "GGNCC"
              },
              sbfi: {
                fcut: 6,
                name: "SbfI",
                rcut: 2,
                rseq: "CCTGCAGG"
              },
              scai: {
                fcut: 3,
                name: "ScaI",
                rcut: 3,
                rseq: "AGTACT"
              },
              scrfi: {
                fcut: 2,
                name: "ScrFI",
                rcut: 3,
                rseq: "CCNGG"
              },
              sexai: {
                fcut: 1,
                name: "SexAI",
                rcut: 6,
                rseq: "ACCWGGT"
              },
              sfani: {
                fcut: 10,
                name: "SfaNI",
                rcut: 14,
                rseq: "GCATCNNNNNNNNN"
              },
              sfci: {
                fcut: 1,
                name: "SfcI",
                rcut: 5,
                rseq: "CTRYAG"
              },
              sfii: {
                fcut: 8,
                name: "SfiI",
                rcut: 5,
                rseq: "GGCCNNNNNGGCC"
              },
              sfoi: {
                fcut: 3,
                name: "SfoI",
                rcut: 3,
                rseq: "GGCGCC"
              },
              sgrai: {
                fcut: 2,
                name: "SgrAI",
                rcut: 6,
                rseq: "CRCCGGYG"
              },
              smai: {
                fcut: 3,
                name: "SmaI",
                rcut: 3,
                rseq: "CCCGGG"
              },
              smli: {
                fcut: 1,
                name: "SmlI",
                rcut: 5,
                rseq: "CTYRAG"
              },
              snabi: {
                fcut: 3,
                name: "SnaBI",
                rcut: 3,
                rseq: "TACGTA"
              },
              spei: {
                fcut: 1,
                name: "SpeI",
                rcut: 5,
                rseq: "ACTAGT"
              },
              sphi: {
                fcut: 5,
                name: "SphI",
                rcut: 1,
                rseq: "GCATGC"
              },
              srfi: {
                fcut: 4,
                name: "SrfI",
                rcut: 4,
                rseq: "GCCCGGGC"
              },
              sspi: {
                fcut: 3,
                name: "SspI",
                rcut: 3,
                rseq: "AATATT"
              },
              stui: {
                fcut: 3,
                name: "StuI",
                rcut: 3,
                rseq: "AGGCCT"
              },
              styd4i: {
                fcut: 0,
                name: "StyD4I",
                rcut: 5,
                rseq: "CCNGG"
              },
              styi: {
                fcut: 1,
                name: "StyI",
                rcut: 5,
                rseq: "CCWWGG"
              },
              swai: {
                fcut: 4,
                name: "SwaI",
                rcut: 4,
                rseq: "ATTTAAAT"
              },
              taqi: {
                fcut: 1,
                name: "TaqI",
                rcut: 3,
                rseq: "TCGA"
              },
              tfii: {
                fcut: 1,
                name: "TfiI",
                rcut: 4,
                rseq: "GAWTC"
              },
              tsei: {
                fcut: 1,
                name: "TseI",
                rcut: 4,
                rseq: "GCWGC"
              },
              tsp45i: {
                fcut: 0,
                name: "Tsp45I",
                rcut: 5,
                rseq: "GTSAC"
              },
              tspmi: {
                fcut: 1,
                name: "TspMI",
                rcut: 5,
                rseq: "CCCGGG"
              },
              tspri: {
                fcut: 9,
                name: "TspRI",
                rcut: 0,
                rseq: "NNCASTGNN"
              },
              tth111i: {
                fcut: 4,
                name: "Tth111I",
                rcut: 5,
                rseq: "GACNNNGTC"
              },
              xbai: {
                fcut: 1,
                name: "XbaI",
                rcut: 5,
                rseq: "TCTAGA"
              },
              xcmi: {
                fcut: 8,
                name: "XcmI",
                rcut: 7,
                rseq: "CCANNNNNNNNNTGG"
              },
              xhoi: {
                fcut: 1,
                name: "XhoI",
                rcut: 5,
                rseq: "CTCGAG"
              },
              xmai: {
                fcut: 1,
                name: "XmaI",
                rcut: 5,
                rseq: "CCCGGG"
              },
              xmni: {
                fcut: 5,
                name: "XmnI",
                rcut: 5,
                rseq: "GAANNNNTTC"
              },
              zrai: {
                fcut: 3,
                name: "ZraI",
                rcut: 3,
                rseq: "GACGTC"
              }
            };
            m.default = b;
          },
          /* 40 */
          /***/
          (Z, m, b) => {
            Object.defineProperty(m, "__esModule", { value: !0 }), m.createRegex = void 0;
            var g = b(13);
            m.default = function(N, T, A, y) {
              if (T === void 0 && (T = 0), A === void 0 && (A = ""), !N || !N.length || !A || !A.length)
                return [];
              if (N.length - T < 2)
                return [];
              var a = p(N, A, T, !0, y);
              if (["dna", "rna"].includes(y)) {
                var i = (0, g.complement)(A, y).compSeq, s = p((0, g.reverse)(N), i, T, !1, y);
                a.push.apply(a, s);
              }
              return a.length > 4e3 ? (console.error("Search too broad: >4000 matches. Please narrow parameters."), []) : a.sort(function(d, c) {
                return d.start - c.start;
              });
            };
            var p = function(N, T, A, y, a) {
              if (A > 0)
                return _(N, T, A, y, a);
              for (var i = T.length, s = (0, m.createRegex)(N, a), d = s.exec(T), c = []; d; ) {
                var l = d.index % i, h = (l + N.length) % i || i;
                c.push({
                  direction: y ? 1 : -1,
                  end: h,
                  id: "".concat(l, "-").concat(y ? "fwd" : "rev"),
                  name: "",
                  start: l
                }), d = s.exec(T);
              }
              return c;
            }, _ = function(N, T, A, y, a) {
              for (var i = (0, g.getAlphabet)(a), s = [], d = 0; d < T.length - N.length; d += 1) {
                for (var c = 0, l = 0; l < N.length; l += 1) {
                  var h = T[d + l].toLowerCase(), C = N[l].toLowerCase();
                  if (g.nucleotides[C] ? h !== C && (c += 1) : i[C] && (i[C][h] || (c += 1)), c > A)
                    break;
                }
                if (c <= A) {
                  var S = (d + N.length) % T.length || T.length;
                  s.push({
                    direction: y ? 1 : -1,
                    end: S,
                    id: "".concat(d, "-").concat(y ? "fwd" : "rev"),
                    name: "",
                    start: d
                  });
                }
              }
              return s;
            }, x = function(N, T) {
              var A = (0, g.getAlphabet)(T), y = N.toLowerCase().split("").map(function(a) {
                return A[a] ? "(".concat(Object.keys(A[a]).join("|"), ")") : a;
              }).join("");
              return new RegExp(y.trim(), "gi");
            };
            m.createRegex = x;
          },
          /* 41 */
          /***/
          (Z) => {
            Z.exports = ff();
          }
          /******/
        ], K = {};
        function oe(Z) {
          var m = K[Z];
          if (m !== void 0)
            return m.exports;
          var b = K[Z] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return ie[Z].call(b.exports, b, b.exports, oe), b.exports;
        }
        var B = oe(0);
        return B;
      })()
    ));
  }(ds)), ds.exports;
}
var pf = hf();
function vf({ seq: ee }) {
  return /* @__PURE__ */ fs.jsx(pf.SeqViz, { name: ee.name, seq: ee.seq, annotations: ee.annotations });
}
function gf() {
  console.log("Widget initialized");
}
function mf({ model: ee, el: X }) {
  console.log("SeqViz Widget rendering...");
  const ie = ee.get("height") ?? "500px", K = ee.get("annotations"), oe = {
    name: ee.get("name"),
    type: ee.get("type"),
    seq: ee.get("seq"),
    annotations: K
  };
  console.debug("SeqViz Data", oe);
  const B = () => /* @__PURE__ */ fs.jsx("div", { className: "", style: { height: ie }, children: /* @__PURE__ */ fs.jsx(vf, { seq: oe }) });
  Bu.createRoot(X).render(/* @__PURE__ */ fs.jsx(B, {}));
}
const wf = {
  initialize: gf,
  render: mf
};
export {
  wf as default,
  gf as initialize,
  mf as render
};

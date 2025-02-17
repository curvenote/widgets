import re, { forwardRef as et, createElement as ge, useEffect as Ht } from "react";
import Vt from "react-dom";
var ee = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Bt() {
  if ($e) return V;
  $e = 1;
  var e = re, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, p, f) {
    var g, b = {}, R = null, D = null;
    f !== void 0 && (R = "" + f), p.key !== void 0 && (R = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (g in p) a.call(p, g) && !u.hasOwnProperty(g) && (b[g] = p[g]);
    if (v && v.defaultProps) for (g in p = v.defaultProps, p) b[g] === void 0 && (b[g] = p[g]);
    return { $$typeof: t, type: v, key: R, ref: D, props: b, _owner: i.current };
  }
  return V.Fragment = r, V.jsx = d, V.jsxs = d, V;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Xt() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var e = re, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), pe = Symbol.iterator, ot = "@@iterator";
    function st(n) {
      if (n === null || typeof n != "object")
        return null;
      var o = pe && n[pe] || n[ot];
      return typeof o == "function" ? o : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(n) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
          s[l - 1] = arguments[l];
        ct("error", n, s);
      }
    }
    function ct(n, o, s) {
      {
        var l = F.ReactDebugCurrentFrame, y = l.getStackAddendum();
        y !== "" && (o += "%s", s = s.concat([y]));
        var x = s.map(function(m) {
          return String(m);
        });
        x.unshift("Warning: " + o), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var ut = !1, lt = !1, dt = !1, ft = !1, ht = !1, ve;
    ve = Symbol.for("react.module.reference");
    function mt(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === u || ht || n === i || n === f || n === g || ft || n === D || ut || lt || dt || typeof n == "object" && n !== null && (n.$$typeof === R || n.$$typeof === b || n.$$typeof === d || n.$$typeof === v || n.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === ve || n.getModuleId !== void 0));
    }
    function gt(n, o, s) {
      var l = n.displayName;
      if (l)
        return l;
      var y = o.displayName || o.name || "";
      return y !== "" ? s + "(" + y + ")" : s;
    }
    function be(n) {
      return n.displayName || "Context";
    }
    function S(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case v:
            var o = n;
            return be(o) + ".Consumer";
          case d:
            var s = n;
            return be(s._context) + ".Provider";
          case p:
            return gt(n, n.render, "ForwardRef");
          case b:
            var l = n.displayName || null;
            return l !== null ? l : S(n.type) || "Memo";
          case R: {
            var y = n, x = y._payload, m = y._init;
            try {
              return S(m(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, $ = 0, ye, we, xe, Ee, Oe, Pe, _e;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function pt() {
      {
        if ($ === 0) {
          ye = console.log, we = console.info, xe = console.warn, Ee = console.error, Oe = console.group, Pe = console.groupCollapsed, _e = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        $++;
      }
    }
    function vt() {
      {
        if ($--, $ === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, n, {
              value: ye
            }),
            info: W({}, n, {
              value: we
            }),
            warn: W({}, n, {
              value: xe
            }),
            error: W({}, n, {
              value: Ee
            }),
            group: W({}, n, {
              value: Oe
            }),
            groupCollapsed: W({}, n, {
              value: Pe
            }),
            groupEnd: W({}, n, {
              value: _e
            })
          });
        }
        $ < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = F.ReactCurrentDispatcher, oe;
    function U(n, o, s) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (y) {
            var l = y.stack.trim().match(/\n( *(at )?)/);
            oe = l && l[1] || "";
          }
        return `
` + oe + n;
      }
    }
    var se = !1, z;
    {
      var bt = typeof WeakMap == "function" ? WeakMap : Map;
      z = new bt();
    }
    function Re(n, o) {
      if (!n || se)
        return "";
      {
        var s = z.get(n);
        if (s !== void 0)
          return s;
      }
      var l;
      se = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ie.current, ie.current = null, pt();
      try {
        if (o) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (j) {
              l = j;
            }
            Reflect.construct(n, [], m);
          } else {
            try {
              m.call();
            } catch (j) {
              l = j;
            }
            n.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            l = j;
          }
          n();
        }
      } catch (j) {
        if (j && l && typeof j.stack == "string") {
          for (var h = j.stack.split(`
`), _ = l.stack.split(`
`), E = h.length - 1, O = _.length - 1; E >= 1 && O >= 0 && h[E] !== _[O]; )
            O--;
          for (; E >= 1 && O >= 0; E--, O--)
            if (h[E] !== _[O]) {
              if (E !== 1 || O !== 1)
                do
                  if (E--, O--, O < 0 || h[E] !== _[O]) {
                    var T = `
` + h[E].replace(" at new ", " at ");
                    return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), typeof n == "function" && z.set(n, T), T;
                  }
                while (E >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        se = !1, ie.current = x, vt(), Error.prepareStackTrace = y;
      }
      var I = n ? n.displayName || n.name : "", N = I ? U(I) : "";
      return typeof n == "function" && z.set(n, N), N;
    }
    function yt(n, o, s) {
      return Re(n, !1);
    }
    function wt(n) {
      var o = n.prototype;
      return !!(o && o.isReactComponent);
    }
    function K(n, o, s) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Re(n, wt(n));
      if (typeof n == "string")
        return U(n);
      switch (n) {
        case f:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case p:
            return yt(n.render);
          case b:
            return K(n.type, o, s);
          case R: {
            var l = n, y = l._payload, x = l._init;
            try {
              return K(x(y), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Te = {}, ke = F.ReactDebugCurrentFrame;
    function Z(n) {
      if (n) {
        var o = n._owner, s = K(n.type, n._source, o ? o.type : null);
        ke.setExtraStackFrame(s);
      } else
        ke.setExtraStackFrame(null);
    }
    function xt(n, o, s, l, y) {
      {
        var x = Function.call.bind(H);
        for (var m in n)
          if (x(n, m)) {
            var h = void 0;
            try {
              if (typeof n[m] != "function") {
                var _ = Error((l || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              h = n[m](o, m, l, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              h = E;
            }
            h && !(h instanceof Error) && (Z(y), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", s, m, typeof h), Z(null)), h instanceof Error && !(h.message in Te) && (Te[h.message] = !0, Z(y), P("Failed %s type: %s", s, h.message), Z(null));
          }
      }
    }
    var Et = Array.isArray;
    function ce(n) {
      return Et(n);
    }
    function Ot(n) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return s;
      }
    }
    function Pt(n) {
      try {
        return De(n), !1;
      } catch {
        return !0;
      }
    }
    function De(n) {
      return "" + n;
    }
    function Se(n) {
      if (Pt(n))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(n)), De(n);
    }
    var Me = F.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, We;
    function jt(n) {
      if (H.call(n, "ref")) {
        var o = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Rt(n) {
      if (H.call(n, "key")) {
        var o = Object.getOwnPropertyDescriptor(n, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Tt(n, o) {
      typeof n.ref == "string" && Me.current;
    }
    function kt(n, o) {
      {
        var s = function() {
          Ce || (Ce = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Dt(n, o) {
      {
        var s = function() {
          We || (We = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var St = function(n, o, s, l, y, x, m) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: o,
        ref: s,
        props: m,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Mt(n, o, s, l, y) {
      {
        var x, m = {}, h = null, _ = null;
        s !== void 0 && (Se(s), h = "" + s), Rt(o) && (Se(o.key), h = "" + o.key), jt(o) && (_ = o.ref, Tt(o, y));
        for (x in o)
          H.call(o, x) && !_t.hasOwnProperty(x) && (m[x] = o[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            m[x] === void 0 && (m[x] = E[x]);
        }
        if (h || _) {
          var O = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          h && kt(m, O), _ && Dt(m, O);
        }
        return St(n, h, _, y, l, Me.current, m);
      }
    }
    var ue = F.ReactCurrentOwner, Ne = F.ReactDebugCurrentFrame;
    function A(n) {
      if (n) {
        var o = n._owner, s = K(n.type, n._source, o ? o.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function de(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Ye() {
      {
        if (ue.current) {
          var n = S(ue.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Ct(n) {
      return "";
    }
    var Fe = {};
    function Wt(n) {
      {
        var o = Ye();
        if (!o) {
          var s = typeof n == "string" ? n : n.displayName || n.name;
          s && (o = `

Check the top-level render call using <` + s + ">.");
        }
        return o;
      }
    }
    function Ae(n, o) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var s = Wt(o);
        if (Fe[s])
          return;
        Fe[s] = !0;
        var l = "";
        n && n._owner && n._owner !== ue.current && (l = " It was passed a child from " + S(n._owner.type) + "."), A(n), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, l), A(null);
      }
    }
    function Ie(n, o) {
      {
        if (typeof n != "object")
          return;
        if (ce(n))
          for (var s = 0; s < n.length; s++) {
            var l = n[s];
            de(l) && Ae(l, o);
          }
        else if (de(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var y = st(n);
          if (typeof y == "function" && y !== n.entries)
            for (var x = y.call(n), m; !(m = x.next()).done; )
              de(m.value) && Ae(m.value, o);
        }
      }
    }
    function Nt(n) {
      {
        var o = n.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === b))
          s = o.propTypes;
        else
          return;
        if (s) {
          var l = S(o);
          xt(s, n.props, "prop", l, n);
        } else if (o.PropTypes !== void 0 && !le) {
          le = !0;
          var y = S(o);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(n) {
      {
        for (var o = Object.keys(n.props), s = 0; s < o.length; s++) {
          var l = o[s];
          if (l !== "children" && l !== "key") {
            A(n), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), A(null);
            break;
          }
        }
        n.ref !== null && (A(n), P("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Le = {};
    function qe(n, o, s, l, y, x) {
      {
        var m = mt(n);
        if (!m) {
          var h = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = Ct();
          _ ? h += _ : h += Ye();
          var E;
          n === null ? E = "null" : ce(n) ? E = "array" : n !== void 0 && n.$$typeof === t ? (E = "<" + (S(n.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, h);
        }
        var O = Mt(n, o, s, y, x);
        if (O == null)
          return O;
        if (m) {
          var T = o.children;
          if (T !== void 0)
            if (l)
              if (ce(T)) {
                for (var I = 0; I < T.length; I++)
                  Ie(T[I], n);
                Object.freeze && Object.freeze(T);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(T, n);
        }
        if (H.call(o, "key")) {
          var N = S(n), j = Object.keys(o).filter(function($t) {
            return $t !== "key";
          }), fe = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Le[N + fe]) {
            var qt = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fe, N, qt, N), Le[N + fe] = !0;
          }
        }
        return n === a ? Yt(O) : Nt(O), O;
      }
    }
    function Ft(n, o, s) {
      return qe(n, o, s, !0);
    }
    function At(n, o, s) {
      return qe(n, o, s, !1);
    }
    var It = At, Lt = Ft;
    B.Fragment = a, B.jsx = It, B.jsxs = Lt;
  }()), B;
}
var Ve;
function Gt() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? ee.exports = Bt() : ee.exports = Xt()), ee.exports;
}
var c = Gt(), L = {}, Be;
function Jt() {
  if (Be) return L;
  Be = 1;
  var e = Vt;
  if (process.env.NODE_ENV === "production")
    L.createRoot = e.createRoot, L.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    L.createRoot = function(r, a) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(r, a);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, L.hydrateRoot = function(r, a, i) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(r, a, i);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return L;
}
var Qt = Jt();
const tt = 6048e5, Ut = 864e5, Xe = Symbol.for("constructDateFrom");
function C(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Xe in e ? e[Xe](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function k(e, t) {
  return C(t || e, e);
}
let zt = {};
function ae() {
  return zt;
}
function Q(e, t) {
  const r = ae(), a = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = k(e, t?.in), u = i.getDay(), d = (u < a ? 7 : 0) + u - a;
  return i.setDate(i.getDate() - d), i.setHours(0, 0, 0, 0), i;
}
function ne(e, t) {
  return Q(e, { ...t, weekStartsOn: 1 });
}
function rt(e, t) {
  const r = k(e, t?.in), a = r.getFullYear(), i = C(r, 0);
  i.setFullYear(a + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const u = ne(i), d = C(r, 0);
  d.setFullYear(a, 0, 4), d.setHours(0, 0, 0, 0);
  const v = ne(d);
  return r.getTime() >= u.getTime() ? a + 1 : r.getTime() >= v.getTime() ? a : a - 1;
}
function Ge(e) {
  const t = k(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Kt(e, ...t) {
  const r = C.bind(
    null,
    t.find((a) => typeof a == "object")
  );
  return t.map(r);
}
function Je(e, t) {
  const r = k(e, t?.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Zt(e, t, r) {
  const [a, i] = Kt(
    r?.in,
    e,
    t
  ), u = Je(a), d = Je(i), v = +u - Ge(u), p = +d - Ge(d);
  return Math.round((v - p) / Ut);
}
function er(e, t) {
  const r = rt(e, t), a = C(e, 0);
  return a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0), ne(a);
}
function tr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rr(e) {
  return !(!tr(e) && typeof e != "number" || isNaN(+k(e)));
}
function nr(e, t) {
  const r = k(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const ar = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, ir = (e, t, r) => {
  let a;
  const i = ar[e];
  return typeof i == "string" ? a = i : t === 1 ? a = i.one : a = i.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
function he(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const or = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, sr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, cr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ur = {
  date: he({
    formats: or,
    defaultWidth: "full"
  }),
  time: he({
    formats: sr,
    defaultWidth: "full"
  }),
  dateTime: he({
    formats: cr,
    defaultWidth: "full"
  })
}, lr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, dr = (e, t, r, a) => lr[e];
function X(e) {
  return (t, r) => {
    const a = r?.context ? String(r.context) : "standalone";
    let i;
    if (a === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, v = r?.width ? String(r.width) : d;
      i = e.formattingValues[v] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, v = r?.width ? String(r.width) : e.defaultWidth;
      i = e.values[v] || e.values[d];
    }
    const u = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[u];
  };
}
const fr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, hr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, mr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, gr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, pr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, vr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, br = (e, t) => {
  const r = Number(e), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, yr = {
  ordinalNumber: br,
  era: X({
    values: fr,
    defaultWidth: "wide"
  }),
  quarter: X({
    values: hr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: X({
    values: mr,
    defaultWidth: "wide"
  }),
  day: X({
    values: gr,
    defaultWidth: "wide"
  }),
  dayPeriod: X({
    values: pr,
    defaultWidth: "wide",
    formattingValues: vr,
    defaultFormattingWidth: "wide"
  })
};
function G(e) {
  return (t, r = {}) => {
    const a = r.width, i = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], u = t.match(i);
    if (!u)
      return null;
    const d = u[0], v = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(v) ? xr(v, (b) => b.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      wr(v, (b) => b.test(d))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(p) : p, f = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(f)
    ) : f;
    const g = t.slice(d.length);
    return { value: f, rest: g };
  };
}
function wr(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function xr(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Er(e) {
  return (t, r = {}) => {
    const a = t.match(e.matchPattern);
    if (!a) return null;
    const i = a[0], u = t.match(e.parsePattern);
    if (!u) return null;
    let d = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    const v = t.slice(i.length);
    return { value: d, rest: v };
  };
}
const Or = /^(\d+)(th|st|nd|rd)?/i, Pr = /\d+/i, _r = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, jr = {
  any: [/^b/i, /^(a|c)/i]
}, Rr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Dr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Sr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Mr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Cr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Wr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Nr = {
  ordinalNumber: Er({
    matchPattern: Or,
    parsePattern: Pr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: G({
    matchPatterns: _r,
    defaultMatchWidth: "wide",
    parsePatterns: jr,
    defaultParseWidth: "any"
  }),
  quarter: G({
    matchPatterns: Rr,
    defaultMatchWidth: "wide",
    parsePatterns: Tr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: G({
    matchPatterns: kr,
    defaultMatchWidth: "wide",
    parsePatterns: Dr,
    defaultParseWidth: "any"
  }),
  day: G({
    matchPatterns: Sr,
    defaultMatchWidth: "wide",
    parsePatterns: Mr,
    defaultParseWidth: "any"
  }),
  dayPeriod: G({
    matchPatterns: Cr,
    defaultMatchWidth: "any",
    parsePatterns: Wr,
    defaultParseWidth: "any"
  })
}, Yr = {
  code: "en-US",
  formatDistance: ir,
  formatLong: ur,
  formatRelative: dr,
  localize: yr,
  match: Nr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Fr(e, t) {
  const r = k(e, t?.in);
  return Zt(r, nr(r)) + 1;
}
function Ar(e, t) {
  const r = k(e, t?.in), a = +ne(r) - +er(r);
  return Math.round(a / tt) + 1;
}
function nt(e, t) {
  const r = k(e, t?.in), a = r.getFullYear(), i = ae(), u = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, d = C(t?.in || e, 0);
  d.setFullYear(a + 1, 0, u), d.setHours(0, 0, 0, 0);
  const v = Q(d, t), p = C(t?.in || e, 0);
  p.setFullYear(a, 0, u), p.setHours(0, 0, 0, 0);
  const f = Q(p, t);
  return +r >= +v ? a + 1 : +r >= +f ? a : a - 1;
}
function Ir(e, t) {
  const r = ae(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = nt(e, t), u = C(t?.in || e, 0);
  return u.setFullYear(i, 0, a), u.setHours(0, 0, 0, 0), Q(u, t);
}
function Lr(e, t) {
  const r = k(e, t?.in), a = +Q(r, t) - +Ir(r, t);
  return Math.round(a / tt) + 1;
}
function w(e, t) {
  const r = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(t, "0");
  return r + a;
}
const M = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
    return w(t === "yy" ? a % 100 : a, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : w(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return w(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return w(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return w(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return w(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return w(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, a = e.getMilliseconds(), i = Math.trunc(
      a * Math.pow(10, r - 3)
    );
    return w(i, t.length);
  }
}, q = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Qe = {
  // Era
  G: function(e, t, r) {
    const a = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return r.era(a, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return r.era(a, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const a = e.getFullYear(), i = a > 0 ? a : 1 - a;
      return r.ordinalNumber(i, { unit: "year" });
    }
    return M.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, a) {
    const i = nt(e, a), u = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const d = u % 100;
      return w(d, 2);
    }
    return t === "Yo" ? r.ordinalNumber(u, { unit: "year" }) : w(u, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = rt(e);
    return w(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return w(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(a);
      // 01, 02, 03, 04
      case "QQ":
        return w(a, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(a);
      // 01, 02, 03, 04
      case "qq":
        return w(a, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const a = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return M.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(a + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return r.month(a, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const a = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(a + 1);
      // 01, 02, ..., 12
      case "LL":
        return w(a + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(a + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return r.month(a, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, a) {
    const i = Lr(e, a);
    return t === "wo" ? r.ordinalNumber(i, { unit: "week" }) : w(i, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const a = Ar(e);
    return t === "Io" ? r.ordinalNumber(a, { unit: "week" }) : w(a, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : M.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const a = Fr(e);
    return t === "Do" ? r.ordinalNumber(a, { unit: "dayOfYear" }) : w(a, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const a = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, a) {
    const i = e.getDay(), u = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(u);
      // Padded numerical value
      case "ee":
        return w(u, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(u, { unit: "day" });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, a) {
    const i = e.getDay(), u = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(u);
      // Padded numerical value
      case "cc":
        return w(u, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(u, { unit: "day" });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const a = e.getDay(), i = a === 0 ? 7 : a;
    switch (t) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return w(i, t.length);
      // 2nd
      case "io":
        return r.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const a = e.getHours();
    let i;
    switch (a === 12 ? i = q.noon : a === 0 ? i = q.midnight : i = a / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const a = e.getHours();
    let i;
    switch (a >= 17 ? i = q.evening : a >= 12 ? i = q.afternoon : a >= 4 ? i = q.morning : i = q.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let a = e.getHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, { unit: "hour" });
    }
    return M.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : M.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const a = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(a, { unit: "hour" }) : w(a, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let a = e.getHours();
    return a === 0 && (a = 24), t === "ko" ? r.ordinalNumber(a, { unit: "hour" }) : w(a, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : M.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : M.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return M.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const a = e.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return ze(a);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Y(a);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Y(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return ze(a);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Y(a);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Y(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ue(a, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Y(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ue(a, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Y(a, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const a = Math.trunc(+e / 1e3);
    return w(a, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return w(+e, t.length);
  }
};
function Ue(e, t = "") {
  const r = e > 0 ? "-" : "+", a = Math.abs(e), i = Math.trunc(a / 60), u = a % 60;
  return u === 0 ? r + String(i) : r + String(i) + t + w(u, 2);
}
function ze(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + w(Math.abs(e) / 60, 2) : Y(e, t);
}
function Y(e, t = "") {
  const r = e > 0 ? "-" : "+", a = Math.abs(e), i = w(Math.trunc(a / 60), 2), u = w(a % 60, 2);
  return r + i + t + u;
}
const Ke = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, at = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, qr = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return Ke(e, t);
  let u;
  switch (a) {
    case "P":
      u = t.dateTime({ width: "short" });
      break;
    case "PP":
      u = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      u = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      u = t.dateTime({ width: "full" });
      break;
  }
  return u.replace("{{date}}", Ke(a, t)).replace("{{time}}", at(i, t));
}, $r = {
  p: at,
  P: qr
}, Hr = /^D+$/, Vr = /^Y+$/, Br = ["D", "DD", "YY", "YYYY"];
function Xr(e) {
  return Hr.test(e);
}
function Gr(e) {
  return Vr.test(e);
}
function Jr(e, t, r) {
  const a = Qr(e, t, r);
  if (console.warn(a), Br.includes(e)) throw new RangeError(a);
}
function Qr(e, t, r) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ur = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Kr = /^'([^]*?)'?$/, Zr = /''/g, en = /[a-zA-Z]/;
function Ze(e, t, r) {
  const a = ae(), i = a.locale ?? Yr, u = a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, d = a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, v = k(e, r?.in);
  if (!rr(v))
    throw new RangeError("Invalid time value");
  let p = t.match(zr).map((g) => {
    const b = g[0];
    if (b === "p" || b === "P") {
      const R = $r[b];
      return R(g, i.formatLong);
    }
    return g;
  }).join("").match(Ur).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const b = g[0];
    if (b === "'")
      return { isToken: !1, value: tn(g) };
    if (Qe[b])
      return { isToken: !0, value: g };
    if (b.match(en))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: g };
  });
  i.localize.preprocessor && (p = i.localize.preprocessor(v, p));
  const f = {
    firstWeekContainsDate: u,
    weekStartsOn: d,
    locale: i
  };
  return p.map((g) => {
    if (!g.isToken) return g.value;
    const b = g.value;
    (Gr(b) || Xr(b)) && Jr(b, t, String(e));
    const R = Qe[b[0]];
    return R(v, b, i.localize, f);
  }).join("");
}
function tn(e) {
  const t = e.match(Kr);
  return t ? t[1].replace(Zr, "'") : e;
}
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), it = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = et(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: i = "",
    children: u,
    iconNode: d,
    ...v
  }, p) => ge(
    "svg",
    {
      ref: p,
      ...nn,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: it("lucide", i),
      ...v
    },
    [
      ...d.map(([f, g]) => ge(f, g)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = (e, t) => {
  const r = et(
    ({ className: a, ...i }, u) => ge(an, {
      ref: u,
      iconNode: t,
      className: it(`lucide-${rn(e)}`, a),
      ...i
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], me = on("ExternalLink", sn);
function cn() {
  console.debug("IDR Image Data Widget initialized");
}
const un = "https://idr.openmicroscopy.org/webclient/?show=project-", ln = "https://idr.openmicroscopy.org/webclient/?show=dataset-", dn = "https://idr.openmicroscopy.org/webclient/imgData/", fn = "https://idr.openmicroscopy.org/webclient/render_thumbnail/";
function te({ heading: e }) {
  return /* @__PURE__ */ c.jsx("div", { className: "w-full px-2 pt-2 pb-[2px] text-sm font-light", children: /* @__PURE__ */ c.jsx("div", { className: "border-b border-b-neutral-700 pb-[2px] w-full", children: e }) });
}
function J({ label: e, data: t }) {
  return /* @__PURE__ */ c.jsxs("details", { className: "text-sm cursor-pointer", children: [
    /* @__PURE__ */ c.jsx("summary", { children: e }),
    /* @__PURE__ */ c.jsx("div", { className: "p-2 max-h-[300px] overflow-scroll text-xs font-mono border border-neutral-300 bg-neutral-50", children: /* @__PURE__ */ c.jsx("pre", { children: JSON.stringify(t, null, 2) }) })
  ] });
}
function hn({ imageId: e }) {
  const [t, r] = re.useState(null), [a, i] = re.useState(null);
  if (Ht(() => {
    if (!e) {
      i("No image Id provided");
      return;
    }
    fetch(`${dn}${e}`).then((D) => D.json()).then(r).catch((D) => i(D));
  }, [e]), a)
    return /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center p-4 text-red-500 bg-red-100 border border-red-500", children: /* @__PURE__ */ c.jsxs("div", { children: [
      "Error: ",
      a?.message ?? a
    ] }) });
  if (!t)
    return /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center p-4 bg-green-100 border border-green-500", children: /* @__PURE__ */ c.jsxs("div", { children: [
      "Loading: ",
      e
    ] }) });
  const { channels: u, perms: d, rdefs: v, split_channel: p, meta: f, ...g } = t, b = Ze(new Date(f.imageTimestamp * 1e3), "MMM dd, yyyy"), R = Ze(new Date(f.imageTimestamp * 1e3), "MMM dd, yyyy HH:mm");
  return /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col w-full space-y-4 overflow-hidden border rounded-lg shadow-lg lg:space-x-4 lg:flex-row text-neutral-900 border-black-100", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "mb-1 grow-1 lg:basis-1/2", children: [
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "h-[240px] bg-cover bg-gray-500 bg-clip-border",
          style: { backgroundImage: `url(${fn}${e})` }
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(te, { heading: "image details" }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col p-2 space-y-2", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ c.jsx(
              "a",
              {
                className: "inline-flex font-semibold grow",
                href: `https://idr.openmicroscopy.org/webclient/search/?search_query=${e}`,
                children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ c.jsx("div", { children: f.imageName }),
                  /* @__PURE__ */ c.jsx(me, { size: 14 })
                ] })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "pl-2 text-sm border-l-2 text-neutral-500 border-l-sky-800",
                title: R,
                children: b
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-sm text-neutral-500", children: f.imageDescription || f.imageDescription.length ? /* @__PURE__ */ c.jsx("span", { children: f.imageDescription }) : /* @__PURE__ */ c.jsx("span", { className: "text-sm text-neutral-300", children: "no description" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center mt-1 space-x-1 text-xs font-light", children: [
            f.imageAuthor && /* @__PURE__ */ c.jsx("div", { className: "px-[10px] py-[2px] border text-neutral-500 rounded-full border-neutral-500 bg-neutral-200", children: f.imageAuthor?.toLocaleLowerCase() }),
            f.pixelsType && /* @__PURE__ */ c.jsx("div", { className: "px-[10px] py-[2px] text-blue-700 border border-blue-600 rounded-full bg-blue-200", children: f.pixelsType?.toLocaleLowerCase() })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "grow-1 lg:basis-1/2", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(te, { heading: "dataset details" }),
        /* @__PURE__ */ c.jsxs("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ c.jsx("div", { className: "pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500", children: /* @__PURE__ */ c.jsxs(
              "a",
              {
                className: "flex items-center hover:underline",
                href: `${ln}${f.datasetId}`,
                children: [
                  f.datasetId,
                  " ",
                  /* @__PURE__ */ c.jsx(me, { className: "inline-flex mb-[1px] ml-[1px]", size: 14 })
                ]
              }
            ) }),
            /* @__PURE__ */ c.jsx("div", { children: f.datasetName })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-sm text-neutral-500", children: f.datasetDescription ? /* @__PURE__ */ c.jsx("span", { children: f.datasetDescription }) : /* @__PURE__ */ c.jsx("span", { className: "s text-neutral-300", children: "no description" }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(te, { heading: "project details" }),
        /* @__PURE__ */ c.jsxs("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ c.jsx("div", { className: "pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500", children: /* @__PURE__ */ c.jsxs(
              "a",
              {
                className: "flex items-center hover:underline",
                href: `${un}${f.projectId}`,
                children: [
                  f.projectId,
                  " ",
                  /* @__PURE__ */ c.jsx(me, { className: "inline-flex mb-[1px] ml-[1px]", size: 14 })
                ]
              }
            ) }),
            /* @__PURE__ */ c.jsx("div", { children: f.projectName })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-sm text-neutral-500", children: f.projectDescription ? /* @__PURE__ */ c.jsx("div", { children: f.projectDescription.replace(`
`, " ") }) : /* @__PURE__ */ c.jsx("span", { className: "s text-neutral-300", children: "no description" }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx(te, { heading: "technicals" }),
        /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-1 p-2 text-neutral-600", children: [
          /* @__PURE__ */ c.jsx(J, { label: "perms", data: d }),
          /* @__PURE__ */ c.jsx(J, { label: "channels", data: u }),
          /* @__PURE__ */ c.jsx(J, { label: "split_channel", data: p }),
          /* @__PURE__ */ c.jsx(J, { label: "rdefs", data: v }),
          /* @__PURE__ */ c.jsx(J, { label: "details", data: g })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "absolute justify-end font-mono text-[8px] bottom-1 right-2 text-neutral-700", children: /* @__PURE__ */ c.jsx(
      "a",
      {
        className: "hover:underline",
        href: "https://idr.openmicroscopy.org/about/api.html",
        target: "_blank",
        children: "IDR API"
      }
    ) })
  ] });
}
function mn({ model: e, el: t }) {
  console.debug("IDR Image Data Widget rendered");
  const r = e.get("imageId"), a = () => /* @__PURE__ */ c.jsx("div", { "data-widget": "idr-image-data", children: /* @__PURE__ */ c.jsx(hn, { imageId: r }) });
  Qt.createRoot(t).render(/* @__PURE__ */ c.jsx(a, {}));
}
const vn = {
  initialize: cn,
  render: mn
};
export {
  vn as default,
  cn as initialize,
  mn as render
};

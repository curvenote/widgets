function wD(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var ry = { exports: {} }, av = {}, ay = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function xD() {
  if (cT) return St;
  cT = 1;
  var g = Symbol.for("react.element"), E = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), C = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), K = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Se(M) {
    return M === null || typeof M != "object" ? null : (M = J && M[J] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Xe = Object.assign, Et = {};
  function mt(M, $, $e) {
    this.props = M, this.context = $, this.refs = Et, this.updater = $e || oe;
  }
  mt.prototype.isReactComponent = {}, mt.prototype.setState = function(M, $) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, $, "setState");
  }, mt.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function dn() {
  }
  dn.prototype = mt.prototype;
  function ht(M, $, $e) {
    this.props = M, this.context = $, this.refs = Et, this.updater = $e || oe;
  }
  var Ke = ht.prototype = new dn();
  Ke.constructor = ht, Xe(Ke, mt.prototype), Ke.isPureReactComponent = !0;
  var yt = Array.isArray, Me = Object.prototype.hasOwnProperty, dt = { current: null }, Ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ln(M, $, $e) {
    var Ve, ot = {}, at = null, nt = null;
    if ($ != null) for (Ve in $.ref !== void 0 && (nt = $.ref), $.key !== void 0 && (at = "" + $.key), $) Me.call($, Ve) && !Ye.hasOwnProperty(Ve) && (ot[Ve] = $[Ve]);
    var it = arguments.length - 2;
    if (it === 1) ot.children = $e;
    else if (1 < it) {
      for (var st = Array(it), Bt = 0; Bt < it; Bt++) st[Bt] = arguments[Bt + 2];
      ot.children = st;
    }
    if (M && M.defaultProps) for (Ve in it = M.defaultProps, it) ot[Ve] === void 0 && (ot[Ve] = it[Ve]);
    return { $$typeof: g, type: M, key: at, ref: nt, props: ot, _owner: dt.current };
  }
  function Ht(M, $) {
    return { $$typeof: g, type: M.type, key: $, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function Zt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === g;
  }
  function un(M) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function($e) {
      return $[$e];
    });
  }
  var _t = /\/+/g;
  function ze(M, $) {
    return typeof M == "object" && M !== null && M.key != null ? un("" + M.key) : $.toString(36);
  }
  function jt(M, $, $e, Ve, ot) {
    var at = typeof M;
    (at === "undefined" || at === "boolean") && (M = null);
    var nt = !1;
    if (M === null) nt = !0;
    else switch (at) {
      case "string":
      case "number":
        nt = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case g:
          case E:
            nt = !0;
        }
    }
    if (nt) return nt = M, ot = ot(nt), M = Ve === "" ? "." + ze(nt, 0) : Ve, yt(ot) ? ($e = "", M != null && ($e = M.replace(_t, "$&/") + "/"), jt(ot, $, $e, "", function(Bt) {
      return Bt;
    })) : ot != null && (Zt(ot) && (ot = Ht(ot, $e + (!ot.key || nt && nt.key === ot.key ? "" : ("" + ot.key).replace(_t, "$&/") + "/") + M)), $.push(ot)), 1;
    if (nt = 0, Ve = Ve === "" ? "." : Ve + ":", yt(M)) for (var it = 0; it < M.length; it++) {
      at = M[it];
      var st = Ve + ze(at, it);
      nt += jt(at, $, $e, st, ot);
    }
    else if (st = Se(M), typeof st == "function") for (M = st.call(M), it = 0; !(at = M.next()).done; ) at = at.value, st = Ve + ze(at, it++), nt += jt(at, $, $e, st, ot);
    else if (at === "object") throw $ = String(M), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return nt;
  }
  function Dt(M, $, $e) {
    if (M == null) return M;
    var Ve = [], ot = 0;
    return jt(M, Ve, "", "", function(at) {
      return $.call($e, at, ot++);
    }), Ve;
  }
  function Ot(M) {
    if (M._status === -1) {
      var $ = M._result;
      $ = $(), $.then(function($e) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = $e);
      }, function($e) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = $e);
      }), M._status === -1 && (M._status = 0, M._result = $);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var xe = { current: null }, re = { transition: null }, ke = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: re, ReactCurrentOwner: dt };
  function se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: Dt, forEach: function(M, $, $e) {
    Dt(M, function() {
      $.apply(this, arguments);
    }, $e);
  }, count: function(M) {
    var $ = 0;
    return Dt(M, function() {
      $++;
    }), $;
  }, toArray: function(M) {
    return Dt(M, function($) {
      return $;
    }) || [];
  }, only: function(M) {
    if (!Zt(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, St.Component = mt, St.Fragment = y, St.Profiler = P, St.PureComponent = ht, St.StrictMode = b, St.Suspense = ae, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, St.act = se, St.cloneElement = function(M, $, $e) {
    if (M == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var Ve = Xe({}, M.props), ot = M.key, at = M.ref, nt = M._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (at = $.ref, nt = dt.current), $.key !== void 0 && (ot = "" + $.key), M.type && M.type.defaultProps) var it = M.type.defaultProps;
      for (st in $) Me.call($, st) && !Ye.hasOwnProperty(st) && (Ve[st] = $[st] === void 0 && it !== void 0 ? it[st] : $[st]);
    }
    var st = arguments.length - 2;
    if (st === 1) Ve.children = $e;
    else if (1 < st) {
      it = Array(st);
      for (var Bt = 0; Bt < st; Bt++) it[Bt] = arguments[Bt + 2];
      Ve.children = it;
    }
    return { $$typeof: g, type: M.type, key: ot, ref: at, props: Ve, _owner: nt };
  }, St.createContext = function(M) {
    return M = { $$typeof: C, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: ne, _context: M }, M.Consumer = M;
  }, St.createElement = ln, St.createFactory = function(M) {
    var $ = ln.bind(null, M);
    return $.type = M, $;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(M) {
    return { $$typeof: Fe, render: M };
  }, St.isValidElement = Zt, St.lazy = function(M) {
    return { $$typeof: be, _payload: { _status: -1, _result: M }, _init: Ot };
  }, St.memo = function(M, $) {
    return { $$typeof: K, type: M, compare: $ === void 0 ? null : $ };
  }, St.startTransition = function(M) {
    var $ = re.transition;
    re.transition = {};
    try {
      M();
    } finally {
      re.transition = $;
    }
  }, St.unstable_act = se, St.useCallback = function(M, $) {
    return xe.current.useCallback(M, $);
  }, St.useContext = function(M) {
    return xe.current.useContext(M);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(M) {
    return xe.current.useDeferredValue(M);
  }, St.useEffect = function(M, $) {
    return xe.current.useEffect(M, $);
  }, St.useId = function() {
    return xe.current.useId();
  }, St.useImperativeHandle = function(M, $, $e) {
    return xe.current.useImperativeHandle(M, $, $e);
  }, St.useInsertionEffect = function(M, $) {
    return xe.current.useInsertionEffect(M, $);
  }, St.useLayoutEffect = function(M, $) {
    return xe.current.useLayoutEffect(M, $);
  }, St.useMemo = function(M, $) {
    return xe.current.useMemo(M, $);
  }, St.useReducer = function(M, $, $e) {
    return xe.current.useReducer(M, $, $e);
  }, St.useRef = function(M) {
    return xe.current.useRef(M);
  }, St.useState = function(M) {
    return xe.current.useState(M);
  }, St.useSyncExternalStore = function(M, $, $e) {
    return xe.current.useSyncExternalStore(M, $, $e);
  }, St.useTransition = function() {
    return xe.current.useTransition();
  }, St.version = "18.3.1", St;
}
var sv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
sv.exports;
var fT;
function bD() {
  return fT || (fT = 1, function(g, E) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = "18.3.1", b = Symbol.for("react.element"), P = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), Fe = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), K = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), Et = Symbol.for("react.offscreen"), mt = Symbol.iterator, dn = "@@iterator";
      function ht(h) {
        if (h === null || typeof h != "object")
          return null;
        var w = mt && h[mt] || h[dn];
        return typeof w == "function" ? w : null;
      }
      var Ke = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
        transition: null
      }, Me = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, dt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ye = {}, ln = null;
      function Ht(h) {
        ln = h;
      }
      Ye.setExtraStackFrame = function(h) {
        ln = h;
      }, Ye.getCurrentStack = null, Ye.getStackAddendum = function() {
        var h = "";
        ln && (h += ln);
        var w = Ye.getCurrentStack;
        return w && (h += w() || ""), h;
      };
      var Zt = !1, un = !1, _t = !1, ze = !1, jt = !1, Dt = {
        ReactCurrentDispatcher: Ke,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: dt
      };
      Dt.ReactDebugCurrentFrame = Ye, Dt.ReactCurrentActQueue = Me;
      function Ot(h) {
        {
          for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), V = 1; V < w; V++)
            j[V - 1] = arguments[V];
          re("warn", h, j);
        }
      }
      function xe(h) {
        {
          for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), V = 1; V < w; V++)
            j[V - 1] = arguments[V];
          re("error", h, j);
        }
      }
      function re(h, w, j) {
        {
          var V = Dt.ReactDebugCurrentFrame, te = V.getStackAddendum();
          te !== "" && (w += "%s", j = j.concat([te]));
          var Ue = j.map(function(ue) {
            return String(ue);
          });
          Ue.unshift("Warning: " + w), Function.prototype.apply.call(console[h], console, Ue);
        }
      }
      var ke = {};
      function se(h, w) {
        {
          var j = h.constructor, V = j && (j.displayName || j.name) || "ReactClass", te = V + "." + w;
          if (ke[te])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, V), ke[te] = !0;
        }
      }
      var M = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, w, j) {
          se(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, w, j, V) {
          se(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, w, j, V) {
          se(h, "setState");
        }
      }, $ = Object.assign, $e = {};
      Object.freeze($e);
      function Ve(h, w, j) {
        this.props = h, this.context = w, this.refs = $e, this.updater = j || M;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(h, w) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, w, "setState");
      }, Ve.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ot = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(h, w) {
          Object.defineProperty(Ve.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var nt in ot)
          ot.hasOwnProperty(nt) && at(nt, ot[nt]);
      }
      function it() {
      }
      it.prototype = Ve.prototype;
      function st(h, w, j) {
        this.props = h, this.context = w, this.refs = $e, this.updater = j || M;
      }
      var Bt = st.prototype = new it();
      Bt.constructor = st, $(Bt, Ve.prototype), Bt.isPureReactComponent = !0;
      function Mn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function Cn(h) {
        return wr(h);
      }
      function nr(h) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, j = w && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return j;
        }
      }
      function Bn(h) {
        try {
          return Yn(h), !1;
        } catch {
          return !0;
        }
      }
      function Yn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Bn(h))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Yn(h);
      }
      function ci(h, w, j) {
        var V = h.displayName;
        if (V)
          return V;
        var te = w.displayName || w.name || "";
        return te !== "" ? j + "(" + te + ")" : j;
      }
      function ua(h) {
        return h.displayName || "Context";
      }
      function Xn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ne:
            return "Fragment";
          case P:
            return "Portal";
          case Fe:
            return "Profiler";
          case C:
            return "StrictMode";
          case J:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case K:
              var w = h;
              return ua(w) + ".Consumer";
            case ae:
              var j = h;
              return ua(j._context) + ".Provider";
            case be:
              return ci(h, h.render, "ForwardRef");
            case oe:
              var V = h.displayName || null;
              return V !== null ? V : Xn(h.type) || "Memo";
            case Xe: {
              var te = h, Ue = te._payload, ue = te._init;
              try {
                return Xn(ue(Ue));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, $n = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, $a, Nn;
      Nn = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var w = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function oa(h) {
        if (Rn.call(h, "key")) {
          var w = Object.getOwnPropertyDescriptor(h, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ia(h, w) {
        var j = function() {
          gr || (gr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: j,
          configurable: !0
        });
      }
      function fi(h, w) {
        var j = function() {
          $a || ($a = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: j,
          configurable: !0
        });
      }
      function ie(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var w = Xn(dt.current.type);
          Nn[w] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, h.ref), Nn[w] = !0);
        }
      }
      var _e = function(h, w, j, V, te, Ue, ue) {
        var He = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: b,
          // Built-in properties that belong on the element
          type: h,
          key: w,
          ref: j,
          props: ue,
          // Record the component responsible for creating this element.
          _owner: Ue
        };
        return He._store = {}, Object.defineProperty(He._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(He, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: V
        }), Object.defineProperty(He, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
      };
      function lt(h, w, j) {
        var V, te = {}, Ue = null, ue = null, He = null, vt = null;
        if (w != null) {
          Sr(w) && (ue = w.ref, ie(w)), oa(w) && (Yr(w.key), Ue = "" + w.key), He = w.__self === void 0 ? null : w.__self, vt = w.__source === void 0 ? null : w.__source;
          for (V in w)
            Rn.call(w, V) && !$n.hasOwnProperty(V) && (te[V] = w[V]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          te.children = j;
        else if (bt > 1) {
          for (var rn = Array(bt), Wt = 0; Wt < bt; Wt++)
            rn[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(rn), te.children = rn;
        }
        if (h && h.defaultProps) {
          var ut = h.defaultProps;
          for (V in ut)
            te[V] === void 0 && (te[V] = ut[V]);
        }
        if (Ue || ue) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ue && Ia(te, Qt), ue && fi(te, Qt);
        }
        return _e(h, Ue, ue, He, vt, dt.current, te);
      }
      function Ft(h, w) {
        var j = _e(h.type, w, h.ref, h._self, h._source, h._owner, h.props);
        return j;
      }
      function en(h, w, j) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var V, te = $({}, h.props), Ue = h.key, ue = h.ref, He = h._self, vt = h._source, bt = h._owner;
        if (w != null) {
          Sr(w) && (ue = w.ref, bt = dt.current), oa(w) && (Yr(w.key), Ue = "" + w.key);
          var rn;
          h.type && h.type.defaultProps && (rn = h.type.defaultProps);
          for (V in w)
            Rn.call(w, V) && !$n.hasOwnProperty(V) && (w[V] === void 0 && rn !== void 0 ? te[V] = rn[V] : te[V] = w[V]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          te.children = j;
        else if (Wt > 1) {
          for (var ut = Array(Wt), Qt = 0; Qt < Wt; Qt++)
            ut[Qt] = arguments[Qt + 2];
          te.children = ut;
        }
        return _e(h.type, Ue, ue, He, vt, bt, te);
      }
      function hn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === b;
      }
      var on = ".", Kn = ":";
      function tn(h) {
        var w = /[=:]/g, j = {
          "=": "=0",
          ":": "=2"
        }, V = h.replace(w, function(te) {
          return j[te];
        });
        return "$" + V;
      }
      var Yt = !1, $t = /\/+/g;
      function sa(h) {
        return h.replace($t, "$&/");
      }
      function Er(h, w) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), tn("" + h.key)) : w.toString(36);
      }
      function Ta(h, w, j, V, te) {
        var Ue = typeof h;
        (Ue === "undefined" || Ue === "boolean") && (h = null);
        var ue = !1;
        if (h === null)
          ue = !0;
        else
          switch (Ue) {
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case b:
                case P:
                  ue = !0;
              }
          }
        if (ue) {
          var He = h, vt = te(He), bt = V === "" ? on + Er(He, 0) : V;
          if (Cn(vt)) {
            var rn = "";
            bt != null && (rn = sa(bt) + "/"), Ta(vt, w, rn, "", function(nd) {
              return nd;
            });
          } else vt != null && (hn(vt) && (vt.key && (!He || He.key !== vt.key) && Yr(vt.key), vt = Ft(
            vt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            j + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (vt.key && (!He || He.key !== vt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              sa("" + vt.key) + "/"
            ) : "") + bt
          )), w.push(vt));
          return 1;
        }
        var Wt, ut, Qt = 0, mn = V === "" ? on : V + Kn;
        if (Cn(h))
          for (var Tl = 0; Tl < h.length; Tl++)
            Wt = h[Tl], ut = mn + Er(Wt, Tl), Qt += Ta(Wt, w, j, ut, te);
        else {
          var Jo = ht(h);
          if (typeof Jo == "function") {
            var Bi = h;
            Jo === Bi.entries && (Yt || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Zo = Jo.call(Bi), su, td = 0; !(su = Zo.next()).done; )
              Wt = su.value, ut = mn + Er(Wt, td++), Qt += Ta(Wt, w, j, ut, te);
          } else if (Ue === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Hi(h, w, j) {
        if (h == null)
          return h;
        var V = [], te = 0;
        return Ta(h, V, "", "", function(Ue) {
          return w.call(j, Ue, te++);
        }), V;
      }
      function eu(h) {
        var w = 0;
        return Hi(h, function() {
          w++;
        }), w;
      }
      function tu(h, w, j) {
        Hi(h, function() {
          w.apply(this, arguments);
        }, j);
      }
      function vl(h) {
        return Hi(h, function(w) {
          return w;
        }) || [];
      }
      function hl(h) {
        if (!hn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function nu(h) {
        var w = {
          $$typeof: K,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: ae,
          _context: w
        };
        var j = !1, V = !1, te = !1;
        {
          var Ue = {
            $$typeof: K,
            _context: w
          };
          Object.defineProperties(Ue, {
            Provider: {
              get: function() {
                return V || (V = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(ue) {
                w.Provider = ue;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(ue) {
                w._currentValue = ue;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(ue) {
                w._currentValue2 = ue;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(ue) {
                w._threadCount = ue;
              }
            },
            Consumer: {
              get: function() {
                return j || (j = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(ue) {
                te || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ue), te = !0);
              }
            }
          }), w.Consumer = Ue;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var xr = -1, br = 0, rr = 1, di = 2;
      function Wa(h) {
        if (h._status === xr) {
          var w = h._result, j = w();
          if (j.then(function(Ue) {
            if (h._status === br || h._status === xr) {
              var ue = h;
              ue._status = rr, ue._result = Ue;
            }
          }, function(Ue) {
            if (h._status === br || h._status === xr) {
              var ue = h;
              ue._status = di, ue._result = Ue;
            }
          }), h._status === xr) {
            var V = h;
            V._status = br, V._result = j;
          }
        }
        if (h._status === rr) {
          var te = h._result;
          return te === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, te), "default" in te || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), te.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var w = {
          // We use these fields to store the result.
          _status: xr,
          _result: h
        }, j = {
          $$typeof: Xe,
          _payload: w,
          _init: Wa
        };
        {
          var V, te;
          Object.defineProperties(j, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return V;
              },
              set: function(Ue) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), V = Ue, Object.defineProperty(j, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(Ue) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = Ue, Object.defineProperty(j, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return j;
      }
      function vi(h) {
        h != null && h.$$typeof === oe ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? xe("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: be,
          render: h
        };
        {
          var j;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(V) {
              j = V, !h.name && !h.displayName && (h.displayName = V);
            }
          });
        }
        return w;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function W(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ne || h === Fe || jt || h === C || h === J || h === Se || ze || h === Et || Zt || un || _t || typeof h == "object" && h !== null && (h.$$typeof === Xe || h.$$typeof === oe || h.$$typeof === ae || h.$$typeof === K || h.$$typeof === be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === x || h.getModuleId !== void 0));
      }
      function ce(h, w) {
        W(h) || xe("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var j = {
          $$typeof: oe,
          type: h,
          compare: w === void 0 ? null : w
        };
        {
          var V;
          Object.defineProperty(j, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(te) {
              V = te, !h.name && !h.displayName && (h.displayName = te);
            }
          });
        }
        return j;
      }
      function ge() {
        var h = Ke.current;
        return h === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ze(h) {
        var w = ge();
        if (h._context !== void 0) {
          var j = h._context;
          j.Consumer === h ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : j.Provider === h && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(h);
      }
      function Ge(h) {
        var w = ge();
        return w.useState(h);
      }
      function pt(h, w, j) {
        var V = ge();
        return V.useReducer(h, w, j);
      }
      function ct(h) {
        var w = ge();
        return w.useRef(h);
      }
      function Tn(h, w) {
        var j = ge();
        return j.useEffect(h, w);
      }
      function nn(h, w) {
        var j = ge();
        return j.useInsertionEffect(h, w);
      }
      function sn(h, w) {
        var j = ge();
        return j.useLayoutEffect(h, w);
      }
      function ar(h, w) {
        var j = ge();
        return j.useCallback(h, w);
      }
      function Qa(h, w) {
        var j = ge();
        return j.useMemo(h, w);
      }
      function Ga(h, w, j) {
        var V = ge();
        return V.useImperativeHandle(h, w, j);
      }
      function et(h, w) {
        {
          var j = ge();
          return j.useDebugValue(h, w);
        }
      }
      function rt() {
        var h = ge();
        return h.useTransition();
      }
      function qa(h) {
        var w = ge();
        return w.useDeferredValue(h);
      }
      function ru() {
        var h = ge();
        return h.useId();
      }
      function au(h, w, j) {
        var V = ge();
        return V.useSyncExternalStore(h, w, j);
      }
      var ml = 0, Gu, yl, $r, Go, _r, fc, dc;
      function qu() {
      }
      qu.__reactDisabledLog = !0;
      function gl() {
        {
          if (ml === 0) {
            Gu = console.log, yl = console.info, $r = console.warn, Go = console.error, _r = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: qu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ml++;
        }
      }
      function ca() {
        {
          if (ml--, ml === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: $({}, h, {
                value: Gu
              }),
              info: $({}, h, {
                value: yl
              }),
              warn: $({}, h, {
                value: $r
              }),
              error: $({}, h, {
                value: Go
              }),
              group: $({}, h, {
                value: _r
              }),
              groupCollapsed: $({}, h, {
                value: fc
              }),
              groupEnd: $({}, h, {
                value: dc
              })
            });
          }
          ml < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = Dt.ReactCurrentDispatcher, Ka;
      function Xu(h, w, j) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (te) {
              var V = te.stack.trim().match(/\n( *(at )?)/);
              Ka = V && V[1] || "";
            }
          return `
` + Ka + h;
        }
      }
      var iu = !1, Sl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        Sl = new Ku();
      }
      function Ju(h, w) {
        if (!h || iu)
          return "";
        {
          var j = Sl.get(h);
          if (j !== void 0)
            return j;
        }
        var V;
        iu = !0;
        var te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ue;
        Ue = Xa.current, Xa.current = null, gl();
        try {
          if (w) {
            var ue = function() {
              throw Error();
            };
            if (Object.defineProperty(ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ue, []);
              } catch (mn) {
                V = mn;
              }
              Reflect.construct(h, [], ue);
            } else {
              try {
                ue.call();
              } catch (mn) {
                V = mn;
              }
              h.call(ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (mn) {
              V = mn;
            }
            h();
          }
        } catch (mn) {
          if (mn && V && typeof mn.stack == "string") {
            for (var He = mn.stack.split(`
`), vt = V.stack.split(`
`), bt = He.length - 1, rn = vt.length - 1; bt >= 1 && rn >= 0 && He[bt] !== vt[rn]; )
              rn--;
            for (; bt >= 1 && rn >= 0; bt--, rn--)
              if (He[bt] !== vt[rn]) {
                if (bt !== 1 || rn !== 1)
                  do
                    if (bt--, rn--, rn < 0 || He[bt] !== vt[rn]) {
                      var Wt = `
` + He[bt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && Sl.set(h, Wt), Wt;
                    }
                  while (bt >= 1 && rn >= 0);
                break;
              }
          }
        } finally {
          iu = !1, Xa.current = Ue, ca(), Error.prepareStackTrace = te;
        }
        var ut = h ? h.displayName || h.name : "", Qt = ut ? Xu(ut) : "";
        return typeof h == "function" && Sl.set(h, Qt), Qt;
      }
      function Pi(h, w, j) {
        return Ju(h, !1);
      }
      function Zf(h) {
        var w = h.prototype;
        return !!(w && w.isReactComponent);
      }
      function Vi(h, w, j) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ju(h, Zf(h));
        if (typeof h == "string")
          return Xu(h);
        switch (h) {
          case J:
            return Xu("Suspense");
          case Se:
            return Xu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case be:
              return Pi(h.render);
            case oe:
              return Vi(h.type, w, j);
            case Xe: {
              var V = h, te = V._payload, Ue = V._init;
              try {
                return Vi(Ue(te), w, j);
              } catch {
              }
            }
          }
        return "";
      }
      var Mt = {}, Zu = Dt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var w = h._owner, j = Vi(h.type, h._source, w ? w.type : null);
          Zu.setExtraStackFrame(j);
        } else
          Zu.setExtraStackFrame(null);
      }
      function qo(h, w, j, V, te) {
        {
          var Ue = Function.call.bind(Rn);
          for (var ue in h)
            if (Ue(h, ue)) {
              var He = void 0;
              try {
                if (typeof h[ue] != "function") {
                  var vt = Error((V || "React class") + ": " + j + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw vt.name = "Invariant Violation", vt;
                }
                He = h[ue](w, ue, V, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                He = bt;
              }
              He && !(He instanceof Error) && (xt(te), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", j, ue, typeof He), xt(null)), He instanceof Error && !(He.message in Mt) && (Mt[He.message] = !0, xt(te), xe("Failed %s type: %s", j, He.message), xt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var w = h._owner, j = Vi(h.type, h._source, w ? w.type : null);
          Ht(j);
        } else
          Ht(null);
      }
      var Qe;
      Qe = !1;
      function eo() {
        if (dt.current) {
          var h = Xn(dt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var w = h.fileName.replace(/^.*[\\\/]/, ""), j = h.lineNumber;
          return `

Check your code at ` + w + ":" + j + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function yi(h) {
        var w = eo();
        if (!w) {
          var j = typeof h == "string" ? h : h.displayName || h.name;
          j && (w = `

Check the top-level render call using <` + j + ">.");
        }
        return w;
      }
      function cn(h, w) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var j = yi(w);
          if (!Dr[j]) {
            Dr[j] = !0;
            var V = "";
            h && h._owner && h._owner !== dt.current && (V = " It was passed a child from " + Xn(h._owner.type) + "."), hi(h), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, V), hi(null);
          }
        }
      }
      function It(h, w) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var j = 0; j < h.length; j++) {
              var V = h[j];
              hn(V) && cn(V, w);
            }
          else if (hn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var te = ht(h);
            if (typeof te == "function" && te !== h.entries)
              for (var Ue = te.call(h), ue; !(ue = Ue.next()).done; )
                hn(ue.value) && cn(ue.value, w);
          }
        }
      }
      function El(h) {
        {
          var w = h.type;
          if (w == null || typeof w == "string")
            return;
          var j;
          if (typeof w == "function")
            j = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === oe))
            j = w.propTypes;
          else
            return;
          if (j) {
            var V = Xn(w);
            qo(j, h.props, "prop", V, h);
          } else if (w.PropTypes !== void 0 && !Qe) {
            Qe = !0;
            var te = Xn(w);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function In(h) {
        {
          for (var w = Object.keys(h.props), j = 0; j < w.length; j++) {
            var V = w[j];
            if (V !== "children" && V !== "key") {
              hi(h), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), xe("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function kr(h, w, j) {
        var V = W(h);
        if (!V) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = mi(w);
          Ue ? te += Ue : te += eo();
          var ue;
          h === null ? ue = "null" : Cn(h) ? ue = "array" : h !== void 0 && h.$$typeof === b ? (ue = "<" + (Xn(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, te);
        }
        var He = lt.apply(this, arguments);
        if (He == null)
          return He;
        if (V)
          for (var vt = 2; vt < arguments.length; vt++)
            It(arguments[vt], h);
        return h === ne ? In(He) : El(He), He;
      }
      var wa = !1;
      function lu(h) {
        var w = kr.bind(null, h);
        return w.type = h, wa || (wa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), w;
      }
      function Xo(h, w, j) {
        for (var V = en.apply(this, arguments), te = 2; te < arguments.length; te++)
          It(arguments[te], V.type);
        return El(V), V;
      }
      function Ko(h, w) {
        var j = yt.transition;
        yt.transition = {};
        var V = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (yt.transition = j, j === null && V._updatedFibers) {
            var te = V._updatedFibers.size;
            te > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), V._updatedFibers.clear();
          }
        }
      }
      var Cl = !1, uu = null;
      function ed(h) {
        if (uu === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), j = g && g[w];
            uu = j.call(g, "timers").setImmediate;
          } catch {
            uu = function(te) {
              Cl === !1 && (Cl = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ue = new MessageChannel();
              Ue.port1.onmessage = te, Ue.port2.postMessage(void 0);
            };
          }
        return uu(h);
      }
      var xa = 0, Ja = !1;
      function gi(h) {
        {
          var w = xa;
          xa++, Me.current === null && (Me.current = []);
          var j = Me.isBatchingLegacy, V;
          try {
            if (Me.isBatchingLegacy = !0, V = h(), !j && Me.didScheduleLegacyUpdate) {
              var te = Me.current;
              te !== null && (Me.didScheduleLegacyUpdate = !1, Rl(te));
            }
          } catch (ut) {
            throw ba(w), ut;
          } finally {
            Me.isBatchingLegacy = j;
          }
          if (V !== null && typeof V == "object" && typeof V.then == "function") {
            var Ue = V, ue = !1, He = {
              then: function(ut, Qt) {
                ue = !0, Ue.then(function(mn) {
                  ba(w), xa === 0 ? to(mn, ut, Qt) : ut(mn);
                }, function(mn) {
                  ba(w), Qt(mn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ue || (Ja = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), He;
          } else {
            var vt = V;
            if (ba(w), xa === 0) {
              var bt = Me.current;
              bt !== null && (Rl(bt), Me.current = null);
              var rn = {
                then: function(ut, Qt) {
                  Me.current === null ? (Me.current = [], to(vt, ut, Qt)) : ut(vt);
                }
              };
              return rn;
            } else {
              var Wt = {
                then: function(ut, Qt) {
                  ut(vt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function ba(h) {
        h !== xa - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function to(h, w, j) {
        {
          var V = Me.current;
          if (V !== null)
            try {
              Rl(V), ed(function() {
                V.length === 0 ? (Me.current = null, w(h)) : to(h, w, j);
              });
            } catch (te) {
              j(te);
            }
          else
            w(h);
        }
      }
      var no = !1;
      function Rl(h) {
        if (!no) {
          no = !0;
          var w = 0;
          try {
            for (; w < h.length; w++) {
              var j = h[w];
              do
                j = j(!0);
              while (j !== null);
            }
            h.length = 0;
          } catch (V) {
            throw h = h.slice(w + 1), V;
          } finally {
            no = !1;
          }
        }
      }
      var ou = kr, ro = Xo, ao = lu, Za = {
        map: Hi,
        forEach: tu,
        count: eu,
        toArray: vl,
        only: hl
      };
      E.Children = Za, E.Component = Ve, E.Fragment = ne, E.Profiler = Fe, E.PureComponent = st, E.StrictMode = C, E.Suspense = J, E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, E.act = gi, E.cloneElement = ro, E.createContext = nu, E.createElement = ou, E.createFactory = ao, E.createRef = Mn, E.forwardRef = vi, E.isValidElement = hn, E.lazy = pi, E.memo = ce, E.startTransition = Ko, E.unstable_act = gi, E.useCallback = ar, E.useContext = Ze, E.useDebugValue = et, E.useDeferredValue = qa, E.useEffect = Tn, E.useId = ru, E.useImperativeHandle = Ga, E.useInsertionEffect = nn, E.useLayoutEffect = sn, E.useMemo = Qa, E.useReducer = pt, E.useRef = ct, E.useState = Ge, E.useSyncExternalStore = au, E.useTransition = rt, E.version = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sv, sv.exports)), sv.exports;
}
var dT;
function fv() {
  return dT || (dT = 1, process.env.NODE_ENV === "production" ? ay.exports = xD() : ay.exports = bD()), ay.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function _D() {
  if (pT) return av;
  pT = 1;
  var g = fv(), E = Symbol.for("react.element"), y = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, P = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(Fe, ae, K) {
    var be, J = {}, Se = null, oe = null;
    K !== void 0 && (Se = "" + K), ae.key !== void 0 && (Se = "" + ae.key), ae.ref !== void 0 && (oe = ae.ref);
    for (be in ae) b.call(ae, be) && !ne.hasOwnProperty(be) && (J[be] = ae[be]);
    if (Fe && Fe.defaultProps) for (be in ae = Fe.defaultProps, ae) J[be] === void 0 && (J[be] = ae[be]);
    return { $$typeof: E, type: Fe, key: Se, ref: oe, props: J, _owner: P.current };
  }
  return av.Fragment = y, av.jsx = C, av.jsxs = C, av;
}
var iv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vT;
function DD() {
  return vT || (vT = 1, process.env.NODE_ENV !== "production" && function() {
    var g = fv(), E = Symbol.for("react.element"), y = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), Fe = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), Xe = Symbol.iterator, Et = "@@iterator";
    function mt(x) {
      if (x === null || typeof x != "object")
        return null;
      var W = Xe && x[Xe] || x[Et];
      return typeof W == "function" ? W : null;
    }
    var dn = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ht(x) {
      {
        for (var W = arguments.length, ce = new Array(W > 1 ? W - 1 : 0), ge = 1; ge < W; ge++)
          ce[ge - 1] = arguments[ge];
        Ke("error", x, ce);
      }
    }
    function Ke(x, W, ce) {
      {
        var ge = dn.ReactDebugCurrentFrame, Ze = ge.getStackAddendum();
        Ze !== "" && (W += "%s", ce = ce.concat([Ze]));
        var Ge = ce.map(function(pt) {
          return String(pt);
        });
        Ge.unshift("Warning: " + W), Function.prototype.apply.call(console[x], console, Ge);
      }
    }
    var yt = !1, Me = !1, dt = !1, Ye = !1, ln = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Zt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === b || x === ne || ln || x === P || x === K || x === be || Ye || x === oe || yt || Me || dt || typeof x == "object" && x !== null && (x.$$typeof === Se || x.$$typeof === J || x.$$typeof === C || x.$$typeof === Fe || x.$$typeof === ae || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Ht || x.getModuleId !== void 0));
    }
    function un(x, W, ce) {
      var ge = x.displayName;
      if (ge)
        return ge;
      var Ze = W.displayName || W.name || "";
      return Ze !== "" ? ce + "(" + Ze + ")" : ce;
    }
    function _t(x) {
      return x.displayName || "Context";
    }
    function ze(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && ht("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case b:
          return "Fragment";
        case y:
          return "Portal";
        case ne:
          return "Profiler";
        case P:
          return "StrictMode";
        case K:
          return "Suspense";
        case be:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case Fe:
            var W = x;
            return _t(W) + ".Consumer";
          case C:
            var ce = x;
            return _t(ce._context) + ".Provider";
          case ae:
            return un(x, x.render, "ForwardRef");
          case J:
            var ge = x.displayName || null;
            return ge !== null ? ge : ze(x.type) || "Memo";
          case Se: {
            var Ze = x, Ge = Ze._payload, pt = Ze._init;
            try {
              return ze(pt(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, Dt = 0, Ot, xe, re, ke, se, M, $;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Dt === 0) {
          Ot = console.log, xe = console.info, re = console.warn, ke = console.error, se = console.group, M = console.groupCollapsed, $ = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        Dt++;
      }
    }
    function ot() {
      {
        if (Dt--, Dt === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, x, {
              value: Ot
            }),
            info: jt({}, x, {
              value: xe
            }),
            warn: jt({}, x, {
              value: re
            }),
            error: jt({}, x, {
              value: ke
            }),
            group: jt({}, x, {
              value: se
            }),
            groupCollapsed: jt({}, x, {
              value: M
            }),
            groupEnd: jt({}, x, {
              value: $
            })
          });
        }
        Dt < 0 && ht("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = dn.ReactCurrentDispatcher, nt;
    function it(x, W, ce) {
      {
        if (nt === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var ge = Ze.stack.trim().match(/\n( *(at )?)/);
            nt = ge && ge[1] || "";
          }
        return `
` + nt + x;
      }
    }
    var st = !1, Bt;
    {
      var Mn = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new Mn();
    }
    function wr(x, W) {
      if (!x || st)
        return "";
      {
        var ce = Bt.get(x);
        if (ce !== void 0)
          return ce;
      }
      var ge;
      st = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = at.current, at.current = null, Ve();
      try {
        if (W) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (et) {
              ge = et;
            }
            Reflect.construct(x, [], pt);
          } else {
            try {
              pt.call();
            } catch (et) {
              ge = et;
            }
            x.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            ge = et;
          }
          x();
        }
      } catch (et) {
        if (et && ge && typeof et.stack == "string") {
          for (var ct = et.stack.split(`
`), Tn = ge.stack.split(`
`), nn = ct.length - 1, sn = Tn.length - 1; nn >= 1 && sn >= 0 && ct[nn] !== Tn[sn]; )
            sn--;
          for (; nn >= 1 && sn >= 0; nn--, sn--)
            if (ct[nn] !== Tn[sn]) {
              if (nn !== 1 || sn !== 1)
                do
                  if (nn--, sn--, sn < 0 || ct[nn] !== Tn[sn]) {
                    var ar = `
` + ct[nn].replace(" at new ", " at ");
                    return x.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", x.displayName)), typeof x == "function" && Bt.set(x, ar), ar;
                  }
                while (nn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        st = !1, at.current = Ge, ot(), Error.prepareStackTrace = Ze;
      }
      var Qa = x ? x.displayName || x.name : "", Ga = Qa ? it(Qa) : "";
      return typeof x == "function" && Bt.set(x, Ga), Ga;
    }
    function Cn(x, W, ce) {
      return wr(x, !1);
    }
    function nr(x) {
      var W = x.prototype;
      return !!(W && W.isReactComponent);
    }
    function Bn(x, W, ce) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return wr(x, nr(x));
      if (typeof x == "string")
        return it(x);
      switch (x) {
        case K:
          return it("Suspense");
        case be:
          return it("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case ae:
            return Cn(x.render);
          case J:
            return Bn(x.type, W, ce);
          case Se: {
            var ge = x, Ze = ge._payload, Ge = ge._init;
            try {
              return Bn(Ge(Ze), W, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, Yr = {}, ci = dn.ReactDebugCurrentFrame;
    function ua(x) {
      if (x) {
        var W = x._owner, ce = Bn(x.type, x._source, W ? W.type : null);
        ci.setExtraStackFrame(ce);
      } else
        ci.setExtraStackFrame(null);
    }
    function Xn(x, W, ce, ge, Ze) {
      {
        var Ge = Function.call.bind(Yn);
        for (var pt in x)
          if (Ge(x, pt)) {
            var ct = void 0;
            try {
              if (typeof x[pt] != "function") {
                var Tn = Error((ge || "React class") + ": " + ce + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              ct = x[pt](W, pt, ge, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              ct = nn;
            }
            ct && !(ct instanceof Error) && (ua(Ze), ht("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", ce, pt, typeof ct), ua(null)), ct instanceof Error && !(ct.message in Yr) && (Yr[ct.message] = !0, ua(Ze), ht("Failed %s type: %s", ce, ct.message), ua(null));
          }
      }
    }
    var Rn = Array.isArray;
    function $n(x) {
      return Rn(x);
    }
    function gr(x) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, ce = W && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return ce;
      }
    }
    function $a(x) {
      try {
        return Nn(x), !1;
      } catch {
        return !0;
      }
    }
    function Nn(x) {
      return "" + x;
    }
    function Sr(x) {
      if ($a(x))
        return ht("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(x)), Nn(x);
    }
    var oa = dn.ReactCurrentOwner, Ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ie;
    function _e(x) {
      if (Yn.call(x, "ref")) {
        var W = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function lt(x) {
      if (Yn.call(x, "key")) {
        var W = Object.getOwnPropertyDescriptor(x, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ft(x, W) {
      typeof x.ref == "string" && oa.current;
    }
    function en(x, W) {
      {
        var ce = function() {
          fi || (fi = !0, ht("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ce.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function hn(x, W) {
      {
        var ce = function() {
          ie || (ie = !0, ht("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ce.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var on = function(x, W, ce, ge, Ze, Ge, pt) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: x,
        key: W,
        ref: ce,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function Kn(x, W, ce, ge, Ze) {
      {
        var Ge, pt = {}, ct = null, Tn = null;
        ce !== void 0 && (Sr(ce), ct = "" + ce), lt(W) && (Sr(W.key), ct = "" + W.key), _e(W) && (Tn = W.ref, Ft(W, Ze));
        for (Ge in W)
          Yn.call(W, Ge) && !Ia.hasOwnProperty(Ge) && (pt[Ge] = W[Ge]);
        if (x && x.defaultProps) {
          var nn = x.defaultProps;
          for (Ge in nn)
            pt[Ge] === void 0 && (pt[Ge] = nn[Ge]);
        }
        if (ct || Tn) {
          var sn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ct && en(pt, sn), Tn && hn(pt, sn);
        }
        return on(x, ct, Tn, Ze, ge, oa.current, pt);
      }
    }
    var tn = dn.ReactCurrentOwner, Yt = dn.ReactDebugCurrentFrame;
    function $t(x) {
      if (x) {
        var W = x._owner, ce = Bn(x.type, x._source, W ? W.type : null);
        Yt.setExtraStackFrame(ce);
      } else
        Yt.setExtraStackFrame(null);
    }
    var sa;
    sa = !1;
    function Er(x) {
      return typeof x == "object" && x !== null && x.$$typeof === E;
    }
    function Ta() {
      {
        if (tn.current) {
          var x = ze(tn.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Hi(x) {
      return "";
    }
    var eu = {};
    function tu(x) {
      {
        var W = Ta();
        if (!W) {
          var ce = typeof x == "string" ? x : x.displayName || x.name;
          ce && (W = `

Check the top-level render call using <` + ce + ">.");
        }
        return W;
      }
    }
    function vl(x, W) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var ce = tu(W);
        if (eu[ce])
          return;
        eu[ce] = !0;
        var ge = "";
        x && x._owner && x._owner !== tn.current && (ge = " It was passed a child from " + ze(x._owner.type) + "."), $t(x), ht('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, ge), $t(null);
      }
    }
    function hl(x, W) {
      {
        if (typeof x != "object")
          return;
        if ($n(x))
          for (var ce = 0; ce < x.length; ce++) {
            var ge = x[ce];
            Er(ge) && vl(ge, W);
          }
        else if (Er(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Ze = mt(x);
          if (typeof Ze == "function" && Ze !== x.entries)
            for (var Ge = Ze.call(x), pt; !(pt = Ge.next()).done; )
              Er(pt.value) && vl(pt.value, W);
        }
      }
    }
    function nu(x) {
      {
        var W = x.type;
        if (W == null || typeof W == "string")
          return;
        var ce;
        if (typeof W == "function")
          ce = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === ae || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === J))
          ce = W.propTypes;
        else
          return;
        if (ce) {
          var ge = ze(W);
          Xn(ce, x.props, "prop", ge, x);
        } else if (W.PropTypes !== void 0 && !sa) {
          sa = !0;
          var Ze = ze(W);
          ht("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && ht("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(x) {
      {
        for (var W = Object.keys(x.props), ce = 0; ce < W.length; ce++) {
          var ge = W[ce];
          if (ge !== "children" && ge !== "key") {
            $t(x), ht("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), $t(null);
            break;
          }
        }
        x.ref !== null && ($t(x), ht("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var br = {};
    function rr(x, W, ce, ge, Ze, Ge) {
      {
        var pt = Zt(x);
        if (!pt) {
          var ct = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Hi();
          Tn ? ct += Tn : ct += Ta();
          var nn;
          x === null ? nn = "null" : $n(x) ? nn = "array" : x !== void 0 && x.$$typeof === E ? (nn = "<" + (ze(x.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof x, ht("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, ct);
        }
        var sn = Kn(x, W, ce, Ze, Ge);
        if (sn == null)
          return sn;
        if (pt) {
          var ar = W.children;
          if (ar !== void 0)
            if (ge)
              if ($n(ar)) {
                for (var Qa = 0; Qa < ar.length; Qa++)
                  hl(ar[Qa], x);
                Object.freeze && Object.freeze(ar);
              } else
                ht("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hl(ar, x);
        }
        if (Yn.call(W, "key")) {
          var Ga = ze(x), et = Object.keys(W).filter(function(ru) {
            return ru !== "key";
          }), rt = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!br[Ga + rt]) {
            var qa = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            ht(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, Ga, qa, Ga), br[Ga + rt] = !0;
          }
        }
        return x === b ? xr(sn) : nu(sn), sn;
      }
    }
    function di(x, W, ce) {
      return rr(x, W, ce, !0);
    }
    function Wa(x, W, ce) {
      return rr(x, W, ce, !1);
    }
    var pi = Wa, vi = di;
    iv.Fragment = b, iv.jsx = pi, iv.jsxs = vi;
  }()), iv;
}
var hT;
function kD() {
  return hT || (hT = 1, process.env.NODE_ENV === "production" ? ry.exports = _D() : ry.exports = DD()), ry.exports;
}
var we = kD(), cc = fv();
const mT = /* @__PURE__ */ wD(cc);
var Kf = {}, iy = { exports: {} }, Ba = {}, ly = { exports: {} }, bE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function OD() {
  return yT || (yT = 1, function(g) {
    function E(re, ke) {
      var se = re.length;
      re.push(ke);
      e: for (; 0 < se; ) {
        var M = se - 1 >>> 1, $ = re[M];
        if (0 < P($, ke)) re[M] = ke, re[se] = $, se = M;
        else break e;
      }
    }
    function y(re) {
      return re.length === 0 ? null : re[0];
    }
    function b(re) {
      if (re.length === 0) return null;
      var ke = re[0], se = re.pop();
      if (se !== ke) {
        re[0] = se;
        e: for (var M = 0, $ = re.length, $e = $ >>> 1; M < $e; ) {
          var Ve = 2 * (M + 1) - 1, ot = re[Ve], at = Ve + 1, nt = re[at];
          if (0 > P(ot, se)) at < $ && 0 > P(nt, ot) ? (re[M] = nt, re[at] = se, M = at) : (re[M] = ot, re[Ve] = se, M = Ve);
          else if (at < $ && 0 > P(nt, se)) re[M] = nt, re[at] = se, M = at;
          else break e;
        }
      }
      return ke;
    }
    function P(re, ke) {
      var se = re.sortIndex - ke.sortIndex;
      return se !== 0 ? se : re.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ne = performance;
      g.unstable_now = function() {
        return ne.now();
      };
    } else {
      var C = Date, Fe = C.now();
      g.unstable_now = function() {
        return C.now() - Fe;
      };
    }
    var ae = [], K = [], be = 1, J = null, Se = 3, oe = !1, Xe = !1, Et = !1, mt = typeof setTimeout == "function" ? setTimeout : null, dn = typeof clearTimeout == "function" ? clearTimeout : null, ht = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ke(re) {
      for (var ke = y(K); ke !== null; ) {
        if (ke.callback === null) b(K);
        else if (ke.startTime <= re) b(K), ke.sortIndex = ke.expirationTime, E(ae, ke);
        else break;
        ke = y(K);
      }
    }
    function yt(re) {
      if (Et = !1, Ke(re), !Xe) if (y(ae) !== null) Xe = !0, Ot(Me);
      else {
        var ke = y(K);
        ke !== null && xe(yt, ke.startTime - re);
      }
    }
    function Me(re, ke) {
      Xe = !1, Et && (Et = !1, dn(ln), ln = -1), oe = !0;
      var se = Se;
      try {
        for (Ke(ke), J = y(ae); J !== null && (!(J.expirationTime > ke) || re && !un()); ) {
          var M = J.callback;
          if (typeof M == "function") {
            J.callback = null, Se = J.priorityLevel;
            var $ = M(J.expirationTime <= ke);
            ke = g.unstable_now(), typeof $ == "function" ? J.callback = $ : J === y(ae) && b(ae), Ke(ke);
          } else b(ae);
          J = y(ae);
        }
        if (J !== null) var $e = !0;
        else {
          var Ve = y(K);
          Ve !== null && xe(yt, Ve.startTime - ke), $e = !1;
        }
        return $e;
      } finally {
        J = null, Se = se, oe = !1;
      }
    }
    var dt = !1, Ye = null, ln = -1, Ht = 5, Zt = -1;
    function un() {
      return !(g.unstable_now() - Zt < Ht);
    }
    function _t() {
      if (Ye !== null) {
        var re = g.unstable_now();
        Zt = re;
        var ke = !0;
        try {
          ke = Ye(!0, re);
        } finally {
          ke ? ze() : (dt = !1, Ye = null);
        }
      } else dt = !1;
    }
    var ze;
    if (typeof ht == "function") ze = function() {
      ht(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), Dt = jt.port2;
      jt.port1.onmessage = _t, ze = function() {
        Dt.postMessage(null);
      };
    } else ze = function() {
      mt(_t, 0);
    };
    function Ot(re) {
      Ye = re, dt || (dt = !0, ze());
    }
    function xe(re, ke) {
      ln = mt(function() {
        re(g.unstable_now());
      }, ke);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, g.unstable_continueExecution = function() {
      Xe || oe || (Xe = !0, Ot(Me));
    }, g.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < re ? Math.floor(1e3 / re) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return Se;
    }, g.unstable_getFirstCallbackNode = function() {
      return y(ae);
    }, g.unstable_next = function(re) {
      switch (Se) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = Se;
      }
      var se = Se;
      Se = ke;
      try {
        return re();
      } finally {
        Se = se;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(re, ke) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var se = Se;
      Se = re;
      try {
        return ke();
      } finally {
        Se = se;
      }
    }, g.unstable_scheduleCallback = function(re, ke, se) {
      var M = g.unstable_now();
      switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? M + se : M) : se = M, re) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = se + $, re = { id: be++, callback: ke, priorityLevel: re, startTime: se, expirationTime: $, sortIndex: -1 }, se > M ? (re.sortIndex = se, E(K, re), y(ae) === null && re === y(K) && (Et ? (dn(ln), ln = -1) : Et = !0, xe(yt, se - M))) : (re.sortIndex = $, E(ae, re), Xe || oe || (Xe = !0, Ot(Me))), re;
    }, g.unstable_shouldYield = un, g.unstable_wrapCallback = function(re) {
      var ke = Se;
      return function() {
        var se = Se;
        Se = ke;
        try {
          return re.apply(this, arguments);
        } finally {
          Se = se;
        }
      };
    };
  }(bE)), bE;
}
var _E = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gT;
function MD() {
  return gT || (gT = 1, function(g) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = !1, y = 5;
      function b(ie, _e) {
        var lt = ie.length;
        ie.push(_e), C(ie, _e, lt);
      }
      function P(ie) {
        return ie.length === 0 ? null : ie[0];
      }
      function ne(ie) {
        if (ie.length === 0)
          return null;
        var _e = ie[0], lt = ie.pop();
        return lt !== _e && (ie[0] = lt, Fe(ie, lt, 0)), _e;
      }
      function C(ie, _e, lt) {
        for (var Ft = lt; Ft > 0; ) {
          var en = Ft - 1 >>> 1, hn = ie[en];
          if (ae(hn, _e) > 0)
            ie[en] = _e, ie[Ft] = hn, Ft = en;
          else
            return;
        }
      }
      function Fe(ie, _e, lt) {
        for (var Ft = lt, en = ie.length, hn = en >>> 1; Ft < hn; ) {
          var on = (Ft + 1) * 2 - 1, Kn = ie[on], tn = on + 1, Yt = ie[tn];
          if (ae(Kn, _e) < 0)
            tn < en && ae(Yt, Kn) < 0 ? (ie[Ft] = Yt, ie[tn] = _e, Ft = tn) : (ie[Ft] = Kn, ie[on] = _e, Ft = on);
          else if (tn < en && ae(Yt, _e) < 0)
            ie[Ft] = Yt, ie[tn] = _e, Ft = tn;
          else
            return;
        }
      }
      function ae(ie, _e) {
        var lt = ie.sortIndex - _e.sortIndex;
        return lt !== 0 ? lt : ie.id - _e.id;
      }
      var K = 1, be = 2, J = 3, Se = 4, oe = 5;
      function Xe(ie, _e) {
      }
      var Et = typeof performance == "object" && typeof performance.now == "function";
      if (Et) {
        var mt = performance;
        g.unstable_now = function() {
          return mt.now();
        };
      } else {
        var dn = Date, ht = dn.now();
        g.unstable_now = function() {
          return dn.now() - ht;
        };
      }
      var Ke = 1073741823, yt = -1, Me = 250, dt = 5e3, Ye = 1e4, ln = Ke, Ht = [], Zt = [], un = 1, _t = null, ze = J, jt = !1, Dt = !1, Ot = !1, xe = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function se(ie) {
        for (var _e = P(Zt); _e !== null; ) {
          if (_e.callback === null)
            ne(Zt);
          else if (_e.startTime <= ie)
            ne(Zt), _e.sortIndex = _e.expirationTime, b(Ht, _e);
          else
            return;
          _e = P(Zt);
        }
      }
      function M(ie) {
        if (Ot = !1, se(ie), !Dt)
          if (P(Ht) !== null)
            Dt = !0, Nn($);
          else {
            var _e = P(Zt);
            _e !== null && Sr(M, _e.startTime - ie);
          }
      }
      function $(ie, _e) {
        Dt = !1, Ot && (Ot = !1, oa()), jt = !0;
        var lt = ze;
        try {
          var Ft;
          if (!E) return $e(ie, _e);
        } finally {
          _t = null, ze = lt, jt = !1;
        }
      }
      function $e(ie, _e) {
        var lt = _e;
        for (se(lt), _t = P(Ht); _t !== null && !(_t.expirationTime > lt && (!ie || ci())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, ze = _t.priorityLevel;
            var en = _t.expirationTime <= lt, hn = Ft(en);
            lt = g.unstable_now(), typeof hn == "function" ? _t.callback = hn : _t === P(Ht) && ne(Ht), se(lt);
          } else
            ne(Ht);
          _t = P(Ht);
        }
        if (_t !== null)
          return !0;
        var on = P(Zt);
        return on !== null && Sr(M, on.startTime - lt), !1;
      }
      function Ve(ie, _e) {
        switch (ie) {
          case K:
          case be:
          case J:
          case Se:
          case oe:
            break;
          default:
            ie = J;
        }
        var lt = ze;
        ze = ie;
        try {
          return _e();
        } finally {
          ze = lt;
        }
      }
      function ot(ie) {
        var _e;
        switch (ze) {
          case K:
          case be:
          case J:
            _e = J;
            break;
          default:
            _e = ze;
            break;
        }
        var lt = ze;
        ze = _e;
        try {
          return ie();
        } finally {
          ze = lt;
        }
      }
      function at(ie) {
        var _e = ze;
        return function() {
          var lt = ze;
          ze = _e;
          try {
            return ie.apply(this, arguments);
          } finally {
            ze = lt;
          }
        };
      }
      function nt(ie, _e, lt) {
        var Ft = g.unstable_now(), en;
        if (typeof lt == "object" && lt !== null) {
          var hn = lt.delay;
          typeof hn == "number" && hn > 0 ? en = Ft + hn : en = Ft;
        } else
          en = Ft;
        var on;
        switch (ie) {
          case K:
            on = yt;
            break;
          case be:
            on = Me;
            break;
          case oe:
            on = ln;
            break;
          case Se:
            on = Ye;
            break;
          case J:
          default:
            on = dt;
            break;
        }
        var Kn = en + on, tn = {
          id: un++,
          callback: _e,
          priorityLevel: ie,
          startTime: en,
          expirationTime: Kn,
          sortIndex: -1
        };
        return en > Ft ? (tn.sortIndex = en, b(Zt, tn), P(Ht) === null && tn === P(Zt) && (Ot ? oa() : Ot = !0, Sr(M, en - Ft))) : (tn.sortIndex = Kn, b(Ht, tn), !Dt && !jt && (Dt = !0, Nn($))), tn;
      }
      function it() {
      }
      function st() {
        !Dt && !jt && (Dt = !0, Nn($));
      }
      function Bt() {
        return P(Ht);
      }
      function Mn(ie) {
        ie.callback = null;
      }
      function wr() {
        return ze;
      }
      var Cn = !1, nr = null, Bn = -1, Yn = y, Yr = -1;
      function ci() {
        var ie = g.unstable_now() - Yr;
        return !(ie < Yn);
      }
      function ua() {
      }
      function Xn(ie) {
        if (ie < 0 || ie > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ie > 0 ? Yn = Math.floor(1e3 / ie) : Yn = y;
      }
      var Rn = function() {
        if (nr !== null) {
          var ie = g.unstable_now();
          Yr = ie;
          var _e = !0, lt = !0;
          try {
            lt = nr(_e, ie);
          } finally {
            lt ? $n() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, $n;
      if (typeof ke == "function")
        $n = function() {
          ke(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), $a = gr.port2;
        gr.port1.onmessage = Rn, $n = function() {
          $a.postMessage(null);
        };
      } else
        $n = function() {
          xe(Rn, 0);
        };
      function Nn(ie) {
        nr = ie, Cn || (Cn = !0, $n());
      }
      function Sr(ie, _e) {
        Bn = xe(function() {
          ie(g.unstable_now());
        }, _e);
      }
      function oa() {
        re(Bn), Bn = -1;
      }
      var Ia = ua, fi = null;
      g.unstable_IdlePriority = oe, g.unstable_ImmediatePriority = K, g.unstable_LowPriority = Se, g.unstable_NormalPriority = J, g.unstable_Profiling = fi, g.unstable_UserBlockingPriority = be, g.unstable_cancelCallback = Mn, g.unstable_continueExecution = st, g.unstable_forceFrameRate = Xn, g.unstable_getCurrentPriorityLevel = wr, g.unstable_getFirstCallbackNode = Bt, g.unstable_next = ot, g.unstable_pauseExecution = it, g.unstable_requestPaint = Ia, g.unstable_runWithPriority = Ve, g.unstable_scheduleCallback = nt, g.unstable_shouldYield = ci, g.unstable_wrapCallback = at, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(_E)), _E;
}
var ST;
function NT() {
  return ST || (ST = 1, process.env.NODE_ENV === "production" ? ly.exports = OD() : ly.exports = MD()), ly.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ET;
function ND() {
  if (ET) return Ba;
  ET = 1;
  var g = fv(), E = NT();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = /* @__PURE__ */ new Set(), P = {};
  function ne(n, r) {
    C(n, r), C(n + "Capture", r);
  }
  function C(n, r) {
    for (P[n] = r, n = 0; n < r.length; n++) b.add(r[n]);
  }
  var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ae = Object.prototype.hasOwnProperty, K = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, be = {}, J = {};
  function Se(n) {
    return ae.call(J, n) ? !0 : ae.call(be, n) ? !1 : K.test(n) ? J[n] = !0 : (be[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Xe(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Et(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var mt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    mt[n] = new Et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    mt[r] = new Et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    mt[n] = new Et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    mt[n] = new Et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    mt[n] = new Et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    mt[n] = new Et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    mt[n] = new Et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    mt[n] = new Et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    mt[n] = new Et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var dn = /[\-:]([a-z])/g;
  function ht(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      dn,
      ht
    );
    mt[r] = new Et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(dn, ht);
    mt[r] = new Et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(dn, ht);
    mt[r] = new Et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    mt[n] = new Et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), mt.xlinkHref = new Et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    mt[n] = new Et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ke(n, r, l, o) {
    var c = mt.hasOwnProperty(r) ? mt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Xe(r, l, c, o) && (l = null), o || c === null ? Se(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var yt = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Me = Symbol.for("react.element"), dt = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), un = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), re = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var se = Object.assign, M;
  function $(n) {
    if (M === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      M = r && r[1] || "";
    }
    return `
` + M + n;
  }
  var $e = !1;
  function Ve(n, r) {
    if (!n || $e) return "";
    $e = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (F) {
          var o = F;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (F) {
          o = F;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, T = d.length - 1; 1 <= m && 0 <= T && c[m] !== d[T]; ) T--;
        for (; 1 <= m && 0 <= T; m--, T--) if (c[m] !== d[T]) {
          if (m !== 1 || T !== 1)
            do
              if (m--, T--, 0 > T || c[m] !== d[T]) {
                var _ = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)), _;
              }
            while (1 <= m && 0 <= T);
          break;
        }
      }
    } finally {
      $e = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function ot(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ye:
        return "Fragment";
      case dt:
        return "Portal";
      case Ht:
        return "Profiler";
      case ln:
        return "StrictMode";
      case ze:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Dt:
        return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return at(n(r));
        } catch {
        }
    }
    return null;
  }
  function nt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function it(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function st(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = st(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mn(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = st(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && Ke(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Yn(n, r);
    var l = it(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ua(n, r.type, l) : r.hasOwnProperty("defaultValue") && ua(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ua(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Xn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $n(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(y(91));
    return se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(y(92));
        if (Xn(l)) {
          if (1 < l.length) throw Error(y(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function $a(n, r) {
    var l = it(r.value), o = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Nn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ia, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ia = Ia || document.createElement("div"), Ia.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ia.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ie(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var _e = {
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
  }, lt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_e).forEach(function(n) {
    lt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), _e[r] = _e[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || _e.hasOwnProperty(n) && _e[n] ? ("" + r).trim() : r + "px";
  }
  function en(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var hn = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (hn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(y(62));
    }
  }
  function Kn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var tn = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, sa = null, Er = null;
  function Ta(n) {
    if (n = Ne(n)) {
      if (typeof $t != "function") throw Error(y(280));
      var r = n.stateNode;
      r && (r = wn(r), $t(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    sa ? Er ? Er.push(n) : Er = [n] : sa = n;
  }
  function eu() {
    if (sa) {
      var n = sa, r = Er;
      if (Er = sa = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function tu(n, r) {
    return n(r);
  }
  function vl() {
  }
  var hl = !1;
  function nu(n, r, l) {
    if (hl) return n(r, l);
    hl = !0;
    try {
      return tu(n, r, l);
    } finally {
      hl = !1, (sa !== null || Er !== null) && (vl(), eu());
    }
  }
  function xr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = wn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(y(231, r, typeof l));
    return l;
  }
  var br = !1;
  if (Fe) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      br = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    br = !1;
  }
  function di(n, r, l, o, c, d, m, T, _) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (q) {
      this.onError(q);
    }
  }
  var Wa = !1, pi = null, vi = !1, x = null, W = { onError: function(n) {
    Wa = !0, pi = n;
  } };
  function ce(n, r, l, o, c, d, m, T, _) {
    Wa = !1, pi = null, di.apply(W, arguments);
  }
  function ge(n, r, l, o, c, d, m, T, _) {
    if (ce.apply(this, arguments), Wa) {
      if (Wa) {
        var F = pi;
        Wa = !1, pi = null;
      } else throw Error(y(198));
      vi || (vi = !0, x = F);
    }
  }
  function Ze(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ge(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function pt(n) {
    if (Ze(n) !== n) throw Error(y(188));
  }
  function ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ze(n), r === null) throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return pt(c), n;
          if (d === o) return pt(c), r;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, T = c.child; T; ) {
          if (T === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (T === o) {
            m = !0, o = c, l = d;
            break;
          }
          T = T.sibling;
        }
        if (!m) {
          for (T = d.child; T; ) {
            if (T === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (T === o) {
              m = !0, o = d, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!m) throw Error(y(189));
        }
      }
      if (l.alternate !== o) throw Error(y(190));
    }
    if (l.tag !== 3) throw Error(y(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = ct(n), n !== null ? nn(n) : null;
  }
  function nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = E.unstable_scheduleCallback, ar = E.unstable_cancelCallback, Qa = E.unstable_shouldYield, Ga = E.unstable_requestPaint, et = E.unstable_now, rt = E.unstable_getCurrentPriorityLevel, qa = E.unstable_ImmediatePriority, ru = E.unstable_UserBlockingPriority, au = E.unstable_NormalPriority, ml = E.unstable_LowPriority, Gu = E.unstable_IdlePriority, yl = null, $r = null;
  function Go(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function") try {
      $r.onCommitFiberRoot(yl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var _r = Math.clz32 ? Math.clz32 : qu, fc = Math.log, dc = Math.LN2;
  function qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var gl = 64, ca = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var T = m & ~c;
      T !== 0 ? o = Xa(T) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - _r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Xu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function iu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), T = 1 << m, _ = c[m];
      _ === -1 ? (!(T & l) || T & o) && (c[m] = Xu(T, r)) : _ <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function Sl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = gl;
    return gl <<= 1, !(gl & 4194240) && (gl = 64), n;
  }
  function Ju(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - _r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Mt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var xt, qo, hi, Qe, eo, ir = !1, mi = [], Dr = null, yi = null, cn = null, It = /* @__PURE__ */ new Map(), El = /* @__PURE__ */ new Map(), In = [], kr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        It.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        El.delete(r.pointerId);
    }
  }
  function lu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ne(r), r !== null && qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = lu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return yi = lu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = lu(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return It.set(d, lu(It.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, El.set(d, lu(El.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ko(n) {
    var r = hu(n.target);
    if (r !== null) {
      var l = Ze(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ge(l), r !== null) {
            n.blockedOn = r, eo(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Cl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ro(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        tn = o, l.target.dispatchEvent(o), tn = null;
      } else return r = Ne(l), r !== null && qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function uu(n, r, l) {
    Cl(n) && l.delete(r);
  }
  function ed() {
    ir = !1, Dr !== null && Cl(Dr) && (Dr = null), yi !== null && Cl(yi) && (yi = null), cn !== null && Cl(cn) && (cn = null), It.forEach(uu), El.forEach(uu);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, ed)));
  }
  function Ja(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < mi.length) {
      xa(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && xa(Dr, n), yi !== null && xa(yi, n), cn !== null && xa(cn, n), It.forEach(r), El.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) Ko(l), l.blockedOn === null && In.shift();
  }
  var gi = yt.ReactCurrentBatchConfig, ba = !0;
  function to(n, r, l, o) {
    var c = Mt, d = gi.transition;
    gi.transition = null;
    try {
      Mt = 1, Rl(n, r, l, o);
    } finally {
      Mt = c, gi.transition = d;
    }
  }
  function no(n, r, l, o) {
    var c = Mt, d = gi.transition;
    gi.transition = null;
    try {
      Mt = 4, Rl(n, r, l, o);
    } finally {
      Mt = c, gi.transition = d;
    }
  }
  function Rl(n, r, l, o) {
    if (ba) {
      var c = ro(n, r, l, o);
      if (c === null) wc(n, r, o, ou, l), wa(n, o);
      else if (Xo(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < kr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ne(c);
          if (d !== null && xt(d), d = ro(n, r, l, o), d === null && wc(n, r, o, ou, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else wc(n, r, o, null, l);
    }
  }
  var ou = null;
  function ro(n, r, l, o) {
    if (ou = null, n = Yt(o), n = hu(n), n !== null) if (r = Ze(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ge(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ou = n, null;
  }
  function ao(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rt()) {
          case qa:
            return 1;
          case ru:
            return 4;
          case au:
          case ml:
            return 16;
          case Gu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, w = null;
  function j() {
    if (w) return w;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function V(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function te() {
    return !0;
  }
  function Ue() {
    return !1;
  }
  function ue(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? te : Ue, this.isPropagationStopped = Ue, this;
    }
    return se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = te);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = te);
    }, persist: function() {
    }, isPersistent: te }), r;
  }
  var He = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, vt = ue(He), bt = se({}, He, { view: 0, detail: 0 }), rn = ue(bt), Wt, ut, Qt, mn = se({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: id, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Wt = n.screenX - Qt.screenX, ut = n.screenY - Qt.screenY) : ut = Wt = 0, Qt = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ut;
  } }), Tl = ue(mn), Jo = se({}, mn, { dataTransfer: 0 }), Bi = ue(Jo), Zo = se({}, bt, { relatedTarget: 0 }), su = ue(Zo), td = se({}, He, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = ue(td), nd = se({}, He, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), dv = ue(nd), rd = se({}, He, { data: 0 }), ad = ue(rd), pv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, vv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, cy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = cy[n]) ? !!r[n] : !1;
  }
  function id() {
    return Yi;
  }
  var ld = se({}, bt, { key: function(n) {
    if (n.key) {
      var r = pv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = V(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? vv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: id, charCode: function(n) {
    return n.type === "keypress" ? V(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? V(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ud = ue(ld), od = se({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hv = ue(od), vc = se({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: id }), mv = ue(vc), Ir = se({}, He, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $i = ue(Ir), Ln = se({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = ue(Ln), sd = [9, 13, 27, 32], io = Fe && "CompositionEvent" in window, es = null;
  Fe && "documentMode" in document && (es = document.documentMode);
  var ts = Fe && "TextEvent" in window && !es, yv = Fe && (!io || es && 8 < es && 11 >= es), gv = " ", hc = !1;
  function Sv(n, r) {
    switch (n) {
      case "keyup":
        return sd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ev(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var lo = !1;
  function Cv(n, r) {
    switch (n) {
      case "compositionend":
        return Ev(r);
      case "keypress":
        return r.which !== 32 ? null : (hc = !0, gv);
      case "textInput":
        return n = r.data, n === gv && hc ? null : n;
      default:
        return null;
    }
  }
  function fy(n, r) {
    if (lo) return n === "compositionend" || !io && Sv(n, r) ? (n = j(), w = h = Za = null, lo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return yv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var dy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Rv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!dy[n.type] : r === "textarea";
  }
  function cd(n, r, l, o) {
    Hi(o), r = us(r, "onChange"), 0 < r.length && (l = new vt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, cu = null;
  function Tv(n) {
    pu(n, 0);
  }
  function ns(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function py(n, r) {
    if (n === "change") return r;
  }
  var wv = !1;
  if (Fe) {
    var fd;
    if (Fe) {
      var dd = "oninput" in document;
      if (!dd) {
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), dd = typeof xv.oninput == "function";
      }
      fd = dd;
    } else fd = !1;
    wv = fd && (!document.documentMode || 9 < document.documentMode);
  }
  function bv() {
    Si && (Si.detachEvent("onpropertychange", _v), cu = Si = null);
  }
  function _v(n) {
    if (n.propertyName === "value" && ns(cu)) {
      var r = [];
      cd(r, cu, n, Yt(n)), nu(Tv, r);
    }
  }
  function vy(n, r, l) {
    n === "focusin" ? (bv(), Si = r, cu = l, Si.attachEvent("onpropertychange", _v)) : n === "focusout" && bv();
  }
  function Dv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ns(cu);
  }
  function hy(n, r) {
    if (n === "click") return ns(r);
  }
  function kv(n, r) {
    if (n === "input" || n === "change") return ns(r);
  }
  function my(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : my;
  function rs(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ae.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Ov(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function mc(n, r) {
    var l = Ov(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ov(l);
    }
  }
  function wl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? wl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function as() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uo(n) {
    var r = as(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && wl(l.ownerDocument.documentElement, l)) {
      if (o !== null && yc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = mc(l, d);
          var m = mc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var yy = Fe && "documentMode" in document && 11 >= document.documentMode, oo = null, pd = null, is = null, vd = !1;
  function hd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vd || oo == null || oo !== Cn(o) || (o = oo, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), is && rs(is, o) || (is = o, o = us(pd, "onSelect"), 0 < o.length && (r = new vt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = oo)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var fu = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, lr = {}, md = {};
  Fe && (md = document.createElement("div").style, "AnimationEvent" in window || (delete fu.animationend.animation, delete fu.animationiteration.animation, delete fu.animationstart.animation), "TransitionEvent" in window || delete fu.transitionend.transition);
  function Sc(n) {
    if (lr[n]) return lr[n];
    if (!fu[n]) return n;
    var r = fu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in md) return lr[n] = r[l];
    return n;
  }
  var Mv = Sc("animationend"), Nv = Sc("animationiteration"), Lv = Sc("animationstart"), zv = Sc("transitionend"), yd = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    yd.set(n, r), ne(r, [n]);
  }
  for (var gd = 0; gd < Ec.length; gd++) {
    var du = Ec[gd], gy = du.toLowerCase(), Sy = du[0].toUpperCase() + du.slice(1);
    _a(gy, "on" + Sy);
  }
  _a(Mv, "onAnimationEnd"), _a(Nv, "onAnimationIteration"), _a(Lv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(zv, "onTransitionEnd"), C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Sd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
  function Cc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ge(o, r, void 0, n), n.currentTarget = null;
  }
  function pu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var T = o[m], _ = T.instance, F = T.currentTarget;
          if (T = T.listener, _ !== d && c.isPropagationStopped()) break e;
          Cc(c, T, F), d = _;
        }
        else for (m = 0; m < o.length; m++) {
          if (T = o[m], _ = T.instance, F = T.currentTarget, T = T.listener, _ !== d && c.isPropagationStopped()) break e;
          Cc(c, T, F), d = _;
        }
      }
    }
    if (vi) throw n = x, vi = !1, x = null, n;
  }
  function Pt(n, r) {
    var l = r[cs];
    l === void 0 && (l = r[cs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Uv(r, n, 2, !1), l.add(o));
  }
  function Rc(n, r, l) {
    var o = 0;
    r && (o |= 4), Uv(l, n, o, r);
  }
  var Tc = "_reactListening" + Math.random().toString(36).slice(2);
  function so(n) {
    if (!n[Tc]) {
      n[Tc] = !0, b.forEach(function(l) {
        l !== "selectionchange" && (Sd.has(l) || Rc(l, !1, n), Rc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Tc] || (r[Tc] = !0, Rc("selectionchange", !1, r));
    }
  }
  function Uv(n, r, l, o) {
    switch (ao(r)) {
      case 1:
        var c = to;
        break;
      case 4:
        c = no;
        break;
      default:
        c = Rl;
    }
    l = c.bind(null, r, l, n), c = void 0, !br || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function wc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var T = o.stateNode.containerInfo;
        if (T === c || T.nodeType === 8 && T.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var _ = m.tag;
          if ((_ === 3 || _ === 4) && (_ = m.stateNode.containerInfo, _ === c || _.nodeType === 8 && _.parentNode === c)) return;
          m = m.return;
        }
        for (; T !== null; ) {
          if (m = hu(T), m === null) return;
          if (_ = m.tag, _ === 5 || _ === 6) {
            o = d = m;
            continue e;
          }
          T = T.parentNode;
        }
      }
      o = o.return;
    }
    nu(function() {
      var F = d, q = Yt(l), Z = [];
      e: {
        var G = yd.get(n);
        if (G !== void 0) {
          var ve = vt, Ee = n;
          switch (n) {
            case "keypress":
              if (V(l) === 0) break e;
            case "keydown":
            case "keyup":
              ve = ud;
              break;
            case "focusin":
              Ee = "focus", ve = su;
              break;
            case "focusout":
              Ee = "blur", ve = su;
              break;
            case "beforeblur":
            case "afterblur":
              ve = su;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ve = Tl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ve = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ve = mv;
              break;
            case Mv:
            case Nv:
            case Lv:
              ve = pc;
              break;
            case zv:
              ve = $i;
              break;
            case "scroll":
              ve = rn;
              break;
            case "wheel":
              ve = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              ve = dv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ve = hv;
          }
          var Te = (r & 4) !== 0, kn = !Te && n === "scroll", N = Te ? G !== null ? G + "Capture" : null : G;
          Te = [];
          for (var k = F, U; k !== null; ) {
            U = k;
            var X = U.stateNode;
            if (U.tag === 5 && X !== null && (U = X, N !== null && (X = xr(k, N), X != null && Te.push(co(k, X, U)))), kn) break;
            k = k.return;
          }
          0 < Te.length && (G = new ve(G, Ee, null, l, q), Z.push({ event: G, listeners: Te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (G = n === "mouseover" || n === "pointerover", ve = n === "mouseout" || n === "pointerout", G && l !== tn && (Ee = l.relatedTarget || l.fromElement) && (hu(Ee) || Ee[Wi])) break e;
          if ((ve || G) && (G = q.window === q ? q : (G = q.ownerDocument) ? G.defaultView || G.parentWindow : window, ve ? (Ee = l.relatedTarget || l.toElement, ve = F, Ee = Ee ? hu(Ee) : null, Ee !== null && (kn = Ze(Ee), Ee !== kn || Ee.tag !== 5 && Ee.tag !== 6) && (Ee = null)) : (ve = null, Ee = F), ve !== Ee)) {
            if (Te = Tl, X = "onMouseLeave", N = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Te = hv, X = "onPointerLeave", N = "onPointerEnter", k = "pointer"), kn = ve == null ? G : ti(ve), U = Ee == null ? G : ti(Ee), G = new Te(X, k + "leave", ve, l, q), G.target = kn, G.relatedTarget = U, X = null, hu(q) === F && (Te = new Te(N, k + "enter", Ee, l, q), Te.target = U, Te.relatedTarget = kn, X = Te), kn = X, ve && Ee) t: {
              for (Te = ve, N = Ee, k = 0, U = Te; U; U = xl(U)) k++;
              for (U = 0, X = N; X; X = xl(X)) U++;
              for (; 0 < k - U; ) Te = xl(Te), k--;
              for (; 0 < U - k; ) N = xl(N), U--;
              for (; k--; ) {
                if (Te === N || N !== null && Te === N.alternate) break t;
                Te = xl(Te), N = xl(N);
              }
              Te = null;
            }
            else Te = null;
            ve !== null && Av(Z, G, ve, Te, !1), Ee !== null && kn !== null && Av(Z, kn, Ee, Te, !0);
          }
        }
        e: {
          if (G = F ? ti(F) : window, ve = G.nodeName && G.nodeName.toLowerCase(), ve === "select" || ve === "input" && G.type === "file") var Ce = py;
          else if (Rv(G)) if (wv) Ce = kv;
          else {
            Ce = Dv;
            var je = vy;
          }
          else (ve = G.nodeName) && ve.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (Ce = hy);
          if (Ce && (Ce = Ce(n, F))) {
            cd(Z, Ce, l, q);
            break e;
          }
          je && je(n, G, F), n === "focusout" && (je = G._wrapperState) && je.controlled && G.type === "number" && ua(G, "number", G.value);
        }
        switch (je = F ? ti(F) : window, n) {
          case "focusin":
            (Rv(je) || je.contentEditable === "true") && (oo = je, pd = F, is = null);
            break;
          case "focusout":
            is = pd = oo = null;
            break;
          case "mousedown":
            vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vd = !1, hd(Z, l, q);
            break;
          case "selectionchange":
            if (yy) break;
          case "keydown":
          case "keyup":
            hd(Z, l, q);
        }
        var Pe;
        if (io) e: {
          switch (n) {
            case "compositionstart":
              var We = "onCompositionStart";
              break e;
            case "compositionend":
              We = "onCompositionEnd";
              break e;
            case "compositionupdate":
              We = "onCompositionUpdate";
              break e;
          }
          We = void 0;
        }
        else lo ? Sv(n, l) && (We = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (We = "onCompositionStart");
        We && (yv && l.locale !== "ko" && (lo || We !== "onCompositionStart" ? We === "onCompositionEnd" && lo && (Pe = j()) : (Za = q, h = "value" in Za ? Za.value : Za.textContent, lo = !0)), je = us(F, We), 0 < je.length && (We = new ad(We, n, null, l, q), Z.push({ event: We, listeners: je }), Pe ? We.data = Pe : (Pe = Ev(l), Pe !== null && (We.data = Pe)))), (Pe = ts ? Cv(n, l) : fy(n, l)) && (F = us(F, "onBeforeInput"), 0 < F.length && (q = new ad("onBeforeInput", "beforeinput", null, l, q), Z.push({ event: q, listeners: F }), q.data = Pe));
      }
      pu(Z, r);
    });
  }
  function co(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = xr(n, l), d != null && o.unshift(co(n, d, c)), d = xr(n, r), d != null && o.push(co(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Av(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var T = l, _ = T.alternate, F = T.stateNode;
      if (_ !== null && _ === o) break;
      T.tag === 5 && F !== null && (T = F, c ? (_ = xr(l, d), _ != null && m.unshift(co(l, _, T))) : c || (_ = xr(l, d), _ != null && m.push(co(l, _, T)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var jv = /\r\n?/g, Ey = /\u0000|\uFFFD/g;
  function Fv(n) {
    return (typeof n == "string" ? n : "" + n).replace(jv, `
`).replace(Ey, "");
  }
  function xc(n, r, l) {
    if (r = Fv(r), Fv(n) !== r && l) throw Error(y(425));
  }
  function bl() {
  }
  var os = null, vu = null;
  function bc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var _c = typeof setTimeout == "function" ? setTimeout : void 0, Ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Hv = typeof Promise == "function" ? Promise : void 0, fo = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hv < "u" ? function(n) {
    return Hv.resolve(null).then(n).catch(Dc);
  } : _c;
  function Dc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function po(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Pv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var _l = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + _l, ss = "__reactProps$" + _l, Wi = "__reactContainer$" + _l, cs = "__reactEvents$" + _l, vo = "__reactListeners$" + _l, Cy = "__reactHandles$" + _l;
  function hu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Pv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Pv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ne(n) {
    return n = n[Ci] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(y(33));
  }
  function wn(n) {
    return n[ss] || null;
  }
  var Ct = [], Da = -1;
  function ni(n) {
    return { current: n };
  }
  function an(n) {
    0 > Da || (n.current = Ct[Da], Ct[Da] = null, Da--);
  }
  function Oe(n, r) {
    Da++, Ct[Da] = n.current, n.current = r;
  }
  var Wr = {}, En = ni(Wr), Wn = ni(!1), Qr = Wr;
  function ka(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Wr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ho() {
    an(Wn), an(En);
  }
  function Vv(n, r, l) {
    if (En.current !== Wr) throw Error(y(168));
    Oe(En, r), Oe(Wn, l);
  }
  function fs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(y(108, nt(n) || "Unknown", c));
    return se({}, l, o);
  }
  function Gr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Wr, Qr = En.current, Oe(En, n), Oe(Wn, Wn.current), !0;
  }
  function kc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(y(169));
    l ? (n = fs(n, r, Qr), o.__reactInternalMemoizedMergedChildContext = n, an(Wn), an(En), Oe(En, n)) : an(Wn), Oe(Wn, l);
  }
  var Ri = null, mo = !1, Qi = !1;
  function Oc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function Dl(n) {
    mo = !0, Oc(n);
  }
  function Ti() {
    if (!Qi && Ri !== null) {
      Qi = !0;
      var n = 0, r = Mt;
      try {
        var l = Ri;
        for (Mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, mo = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), sn(qa, Ti), c;
      } finally {
        Mt = r, Qi = !1;
      }
    }
    return null;
  }
  var kl = [], Ol = 0, Ml = null, Gi = 0, Un = [], Oa = 0, fa = null, wi = 1, xi = "";
  function mu(n, r) {
    kl[Ol++] = Gi, kl[Ol++] = Ml, Ml = n, Gi = r;
  }
  function Bv(n, r, l) {
    Un[Oa++] = wi, Un[Oa++] = xi, Un[Oa++] = fa, fa = n;
    var o = wi;
    n = xi;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, wi = 1 << 32 - _r(r) + c | l << c | o, xi = d + n;
    } else wi = 1 << d | l << c | o, xi = n;
  }
  function Mc(n) {
    n.return !== null && (mu(n, 1), Bv(n, 1, 0));
  }
  function Nc(n) {
    for (; n === Ml; ) Ml = kl[--Ol], kl[Ol] = null, Gi = kl[--Ol], kl[Ol] = null;
    for (; n === fa; ) fa = Un[--Oa], Un[Oa] = null, xi = Un[--Oa], Un[Oa] = null, wi = Un[--Oa], Un[Oa] = null;
  }
  var qr = null, Xr = null, pn = !1, Ma = null;
  function Cd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Yv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = fa !== null ? { id: wi, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Rd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Td(n) {
    if (pn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Yv(n, r)) {
          if (Rd(n)) throw Error(y(418));
          r = Ei(l.nextSibling);
          var o = qr;
          r && Yv(n, r) ? Cd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, qr = n);
        }
      } else {
        if (Rd(n)) throw Error(y(418));
        n.flags = n.flags & -4097 | 2, pn = !1, qr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function Lc(n) {
    if (n !== qr) return !1;
    if (!pn) return Qn(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (Rd(n)) throw ds(), Error(y(418));
      for (; r; ) Cd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ds() {
    for (var n = Xr; n; ) n = Ei(n.nextSibling);
  }
  function Nl() {
    Xr = qr = null, pn = !1;
  }
  function qi(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var Ry = yt.ReactCurrentBatchConfig;
  function yu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(y(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(y(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var T = c.refs;
          m === null ? delete T[d] : T[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(y(284));
      if (!l._owner) throw Error(y(290, n));
    }
    return n;
  }
  function zc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function $v(n) {
    var r = n._init;
    return r(n._payload);
  }
  function gu(n) {
    function r(N, k) {
      if (n) {
        var U = N.deletions;
        U === null ? (N.deletions = [k], N.flags |= 16) : U.push(k);
      }
    }
    function l(N, k) {
      if (!n) return null;
      for (; k !== null; ) r(N, k), k = k.sibling;
      return null;
    }
    function o(N, k) {
      for (N = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? N.set(k.key, k) : N.set(k.index, k), k = k.sibling;
      return N;
    }
    function c(N, k) {
      return N = Pl(N, k), N.index = 0, N.sibling = null, N;
    }
    function d(N, k, U) {
      return N.index = U, n ? (U = N.alternate, U !== null ? (U = U.index, U < k ? (N.flags |= 2, k) : U) : (N.flags |= 2, k)) : (N.flags |= 1048576, k);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function T(N, k, U, X) {
      return k === null || k.tag !== 6 ? (k = ep(U, N.mode, X), k.return = N, k) : (k = c(k, U), k.return = N, k);
    }
    function _(N, k, U, X) {
      var Ce = U.type;
      return Ce === Ye ? q(N, k, U.props.children, X, U.key) : k !== null && (k.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ot && $v(Ce) === k.type) ? (X = c(k, U.props), X.ref = yu(N, k, U), X.return = N, X) : (X = Bs(U.type, U.key, U.props, null, N.mode, X), X.ref = yu(N, k, U), X.return = N, X);
    }
    function F(N, k, U, X) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== U.containerInfo || k.stateNode.implementation !== U.implementation ? (k = vf(U, N.mode, X), k.return = N, k) : (k = c(k, U.children || []), k.return = N, k);
    }
    function q(N, k, U, X, Ce) {
      return k === null || k.tag !== 7 ? (k = tl(U, N.mode, X, Ce), k.return = N, k) : (k = c(k, U), k.return = N, k);
    }
    function Z(N, k, U) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = ep("" + k, N.mode, U), k.return = N, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Me:
            return U = Bs(k.type, k.key, k.props, null, N.mode, U), U.ref = yu(N, null, k), U.return = N, U;
          case dt:
            return k = vf(k, N.mode, U), k.return = N, k;
          case Ot:
            var X = k._init;
            return Z(N, X(k._payload), U);
        }
        if (Xn(k) || ke(k)) return k = tl(k, N.mode, U, null), k.return = N, k;
        zc(N, k);
      }
      return null;
    }
    function G(N, k, U, X) {
      var Ce = k !== null ? k.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return Ce !== null ? null : T(N, k, "" + U, X);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Me:
            return U.key === Ce ? _(N, k, U, X) : null;
          case dt:
            return U.key === Ce ? F(N, k, U, X) : null;
          case Ot:
            return Ce = U._init, G(
              N,
              k,
              Ce(U._payload),
              X
            );
        }
        if (Xn(U) || ke(U)) return Ce !== null ? null : q(N, k, U, X, null);
        zc(N, U);
      }
      return null;
    }
    function ve(N, k, U, X, Ce) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return N = N.get(U) || null, T(k, N, "" + X, Ce);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Me:
            return N = N.get(X.key === null ? U : X.key) || null, _(k, N, X, Ce);
          case dt:
            return N = N.get(X.key === null ? U : X.key) || null, F(k, N, X, Ce);
          case Ot:
            var je = X._init;
            return ve(N, k, U, je(X._payload), Ce);
        }
        if (Xn(X) || ke(X)) return N = N.get(U) || null, q(k, N, X, Ce, null);
        zc(k, X);
      }
      return null;
    }
    function Ee(N, k, U, X) {
      for (var Ce = null, je = null, Pe = k, We = k = 0, er = null; Pe !== null && We < U.length; We++) {
        Pe.index > We ? (er = Pe, Pe = null) : er = Pe.sibling;
        var zt = G(N, Pe, U[We], X);
        if (zt === null) {
          Pe === null && (Pe = er);
          break;
        }
        n && Pe && zt.alternate === null && r(N, Pe), k = d(zt, k, We), je === null ? Ce = zt : je.sibling = zt, je = zt, Pe = er;
      }
      if (We === U.length) return l(N, Pe), pn && mu(N, We), Ce;
      if (Pe === null) {
        for (; We < U.length; We++) Pe = Z(N, U[We], X), Pe !== null && (k = d(Pe, k, We), je === null ? Ce = Pe : je.sibling = Pe, je = Pe);
        return pn && mu(N, We), Ce;
      }
      for (Pe = o(N, Pe); We < U.length; We++) er = ve(Pe, N, We, U[We], X), er !== null && (n && er.alternate !== null && Pe.delete(er.key === null ? We : er.key), k = d(er, k, We), je === null ? Ce = er : je.sibling = er, je = er);
      return n && Pe.forEach(function(Yl) {
        return r(N, Yl);
      }), pn && mu(N, We), Ce;
    }
    function Te(N, k, U, X) {
      var Ce = ke(U);
      if (typeof Ce != "function") throw Error(y(150));
      if (U = Ce.call(U), U == null) throw Error(y(151));
      for (var je = Ce = null, Pe = k, We = k = 0, er = null, zt = U.next(); Pe !== null && !zt.done; We++, zt = U.next()) {
        Pe.index > We ? (er = Pe, Pe = null) : er = Pe.sibling;
        var Yl = G(N, Pe, zt.value, X);
        if (Yl === null) {
          Pe === null && (Pe = er);
          break;
        }
        n && Pe && Yl.alternate === null && r(N, Pe), k = d(Yl, k, We), je === null ? Ce = Yl : je.sibling = Yl, je = Yl, Pe = er;
      }
      if (zt.done) return l(
        N,
        Pe
      ), pn && mu(N, We), Ce;
      if (Pe === null) {
        for (; !zt.done; We++, zt = U.next()) zt = Z(N, zt.value, X), zt !== null && (k = d(zt, k, We), je === null ? Ce = zt : je.sibling = zt, je = zt);
        return pn && mu(N, We), Ce;
      }
      for (Pe = o(N, Pe); !zt.done; We++, zt = U.next()) zt = ve(Pe, N, We, zt.value, X), zt !== null && (n && zt.alternate !== null && Pe.delete(zt.key === null ? We : zt.key), k = d(zt, k, We), je === null ? Ce = zt : je.sibling = zt, je = zt);
      return n && Pe.forEach(function(bh) {
        return r(N, bh);
      }), pn && mu(N, We), Ce;
    }
    function kn(N, k, U, X) {
      if (typeof U == "object" && U !== null && U.type === Ye && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Me:
            e: {
              for (var Ce = U.key, je = k; je !== null; ) {
                if (je.key === Ce) {
                  if (Ce = U.type, Ce === Ye) {
                    if (je.tag === 7) {
                      l(N, je.sibling), k = c(je, U.props.children), k.return = N, N = k;
                      break e;
                    }
                  } else if (je.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === Ot && $v(Ce) === je.type) {
                    l(N, je.sibling), k = c(je, U.props), k.ref = yu(N, je, U), k.return = N, N = k;
                    break e;
                  }
                  l(N, je);
                  break;
                } else r(N, je);
                je = je.sibling;
              }
              U.type === Ye ? (k = tl(U.props.children, N.mode, X, U.key), k.return = N, N = k) : (X = Bs(U.type, U.key, U.props, null, N.mode, X), X.ref = yu(N, k, U), X.return = N, N = X);
            }
            return m(N);
          case dt:
            e: {
              for (je = U.key; k !== null; ) {
                if (k.key === je) if (k.tag === 4 && k.stateNode.containerInfo === U.containerInfo && k.stateNode.implementation === U.implementation) {
                  l(N, k.sibling), k = c(k, U.children || []), k.return = N, N = k;
                  break e;
                } else {
                  l(N, k);
                  break;
                }
                else r(N, k);
                k = k.sibling;
              }
              k = vf(U, N.mode, X), k.return = N, N = k;
            }
            return m(N);
          case Ot:
            return je = U._init, kn(N, k, je(U._payload), X);
        }
        if (Xn(U)) return Ee(N, k, U, X);
        if (ke(U)) return Te(N, k, U, X);
        zc(N, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, k !== null && k.tag === 6 ? (l(N, k.sibling), k = c(k, U), k.return = N, N = k) : (l(N, k), k = ep(U, N.mode, X), k.return = N, N = k), m(N)) : l(N, k);
    }
    return kn;
  }
  var xn = gu(!0), fe = gu(!1), da = ni(null), Kr = null, yo = null, wd = null;
  function xd() {
    wd = yo = Kr = null;
  }
  function bd(n) {
    var r = da.current;
    an(da), n._currentValue = r;
  }
  function _d(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, wd = yo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (wd !== n) if (n = { context: n, memoizedValue: r, next: null }, yo === null) {
      if (Kr === null) throw Error(y(308));
      yo = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else yo = yo.next = n;
    return r;
  }
  var Su = null;
  function Dd(n) {
    Su === null ? Su = [n] : Su.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Dd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, pa(n, o);
  }
  function pa(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var va = !1;
  function Od(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Iv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, pa(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Dd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, pa(n, l);
  }
  function Uc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Wv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ps(n, r, l, o) {
    var c = n.updateQueue;
    va = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var _ = T, F = _.next;
      _.next = null, m === null ? d = F : m.next = F, m = _;
      var q = n.alternate;
      q !== null && (q = q.updateQueue, T = q.lastBaseUpdate, T !== m && (T === null ? q.firstBaseUpdate = F : T.next = F, q.lastBaseUpdate = _));
    }
    if (d !== null) {
      var Z = c.baseState;
      m = 0, q = F = _ = null, T = d;
      do {
        var G = T.lane, ve = T.eventTime;
        if ((o & G) === G) {
          q !== null && (q = q.next = {
            eventTime: ve,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Ee = n, Te = T;
            switch (G = r, ve = l, Te.tag) {
              case 1:
                if (Ee = Te.payload, typeof Ee == "function") {
                  Z = Ee.call(ve, Z, G);
                  break e;
                }
                Z = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = Te.payload, G = typeof Ee == "function" ? Ee.call(ve, Z, G) : Ee, G == null) break e;
                Z = se({}, Z, G);
                break e;
              case 2:
                va = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, G = c.effects, G === null ? c.effects = [T] : G.push(T));
        } else ve = { eventTime: ve, lane: G, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, q === null ? (F = q = ve, _ = Z) : q = q.next = ve, m |= G;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          G = T, T = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      if (q === null && (_ = Z), c.baseState = _, c.firstBaseUpdate = F, c.lastBaseUpdate = q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = Z;
    }
  }
  function Md(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(y(191, c));
        c.call(o);
      }
    }
  }
  var vs = {}, bi = ni(vs), hs = ni(vs), ms = ni(vs);
  function Eu(n) {
    if (n === vs) throw Error(y(174));
    return n;
  }
  function Nd(n, r) {
    switch (Oe(ms, r), Oe(hs, n), Oe(bi, vs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : oa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = oa(r, n);
    }
    an(bi), Oe(bi, r);
  }
  function Cu() {
    an(bi), an(hs), an(ms);
  }
  function Qv(n) {
    Eu(ms.current);
    var r = Eu(bi.current), l = oa(r, n.type);
    r !== l && (Oe(hs, n), Oe(bi, l));
  }
  function Ac(n) {
    hs.current === n && (an(bi), an(hs));
  }
  var gn = ni(0);
  function jc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ys = [];
  function Le() {
    for (var n = 0; n < ys.length; n++) ys[n]._workInProgressVersionPrimary = null;
    ys.length = 0;
  }
  var ft = yt.ReactCurrentDispatcher, Nt = yt.ReactCurrentBatchConfig, Gt = 0, Lt = null, An = null, Jn = null, Fc = !1, gs = !1, Ru = 0, Q = 0;
  function kt() {
    throw Error(y(321));
  }
  function Be(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function zl(n, r, l, o, c, d) {
    if (Gt = d, Lt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ft.current = n === null || n.memoizedState === null ? Zc : ws, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ru = 0, 25 <= d) throw Error(y(301));
        d += 1, Jn = An = null, r.updateQueue = null, ft.current = ef, n = l(o, c);
      } while (gs);
    }
    if (ft.current = _u, r = An !== null && An.next !== null, Gt = 0, Jn = An = Lt = null, Fc = !1, r) throw Error(y(300));
    return n;
  }
  function ri() {
    var n = Ru !== 0;
    return Ru = 0, n;
  }
  function Cr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Lt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function bn() {
    if (An === null) {
      var n = Lt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = Jn === null ? Lt.memoizedState : Jn.next;
    if (r !== null) Jn = r, An = n;
    else {
      if (n === null) throw Error(y(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, Jn === null ? Lt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ul(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = n;
    var o = An, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var T = m = null, _ = null, F = d;
      do {
        var q = F.lane;
        if ((Gt & q) === q) _ !== null && (_ = _.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var Z = {
            lane: q,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          _ === null ? (T = _ = Z, m = o) : _ = _.next = Z, Lt.lanes |= q, Oi |= q;
        }
        F = F.next;
      } while (F !== null && F !== d);
      _ === null ? m = o : _.next = T, ei(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = _, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Lt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tu(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var l = Lt, o = bn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, jn = !0), o = o.queue, Ss(Yc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, wu(9, Bc.bind(null, l, o, c, r), void 0, null), Gn === null) throw Error(y(349));
      Gt & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Bc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, $c(r) && Ic(n);
  }
  function Yc(n, r, l) {
    return l(function() {
      $c(r) && Ic(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Ic(n) {
    var r = pa(n, 1);
    r !== null && Lr(r, n, 1, -1);
  }
  function Wc(n) {
    var r = Cr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = bu.bind(null, Lt, n), [r.memoizedState, n];
  }
  function wu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qc() {
    return bn().memoizedState;
  }
  function go(n, r, l, o) {
    var c = Cr();
    Lt.flags |= n, c.memoizedState = wu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function So(n, r, l, o) {
    var c = bn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (An !== null) {
      var m = An.memoizedState;
      if (d = m.destroy, o !== null && Be(o, m.deps)) {
        c.memoizedState = wu(r, l, d, o);
        return;
      }
    }
    Lt.flags |= n, c.memoizedState = wu(1 | r, l, d, o);
  }
  function Gc(n, r) {
    return go(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return So(2048, 8, n, r);
  }
  function qc(n, r) {
    return So(4, 2, n, r);
  }
  function Es(n, r) {
    return So(4, 4, n, r);
  }
  function xu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Xc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(4, 4, xu.bind(null, r, n), l);
  }
  function Cs() {
  }
  function Kc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Jc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ld(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = Ku(), Lt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function Rs(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Nt.transition;
    Nt.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, Nt.transition = o;
    }
  }
  function zd() {
    return bn().memoizedState;
  }
  function Ts(n, r, l) {
    var o = Mi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ha(n)) Gv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = Pn();
      Lr(l, n, o, c), Kt(l, r, o);
    }
  }
  function bu(n, r, l) {
    var o = Mi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ha(n)) Gv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, T = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = T, ei(T, m)) {
          var _ = r.interleaved;
          _ === null ? (c.next = c, Dd(r)) : (c.next = _.next, _.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = Pn(), Lr(l, n, o, c), Kt(l, r, o));
    }
  }
  function ha(n) {
    var r = n.alternate;
    return n === Lt || r !== null && r === Lt;
  }
  function Gv(n, r) {
    gs = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var _u = { readContext: Na, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Zc = { readContext: Na, useCallback: function(n, r) {
    return Cr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Gc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(
      4194308,
      4,
      xu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return go(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return go(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Cr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Cr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ts.bind(null, Lt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Cr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: Cs, useDeferredValue: function(n) {
    return Cr().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = Rs.bind(null, n[1]), Cr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Lt, c = Cr();
    if (pn) {
      if (l === void 0) throw Error(y(407));
      l = l();
    } else {
      if (l = r(), Gn === null) throw Error(y(349));
      Gt & 30 || Vc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Gc(Yc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, wu(9, Bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Cr(), r = Gn.identifierPrefix;
    if (pn) {
      var l = xi, o = wi;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ru++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Q++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ws = {
    readContext: Na,
    useCallback: Kc,
    useContext: Na,
    useEffect: Ss,
    useImperativeHandle: Xc,
    useInsertionEffect: qc,
    useLayoutEffect: Es,
    useMemo: Jc,
    useReducer: Ul,
    useRef: Qc,
    useState: function() {
      return Ul(Ki);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = bn();
      return Ld(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = Ul(Ki)[0], r = bn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: zd,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Na, useCallback: Kc, useContext: Na, useEffect: Ss, useImperativeHandle: Xc, useInsertionEffect: qc, useLayoutEffect: Es, useMemo: Jc, useReducer: Tu, useRef: Qc, useState: function() {
    return Tu(Ki);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = bn();
    return An === null ? r.memoizedState = n : Ld(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = Tu(Ki)[0], r = bn().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: zd, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = se({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Ud(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : se({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ze(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Mi(n), d = Xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Lr(r, n, c, o), Uc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Mi(n), d = Xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Lr(r, n, c, o), Uc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Pn(), o = Mi(n), c = Xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (Lr(r, n, o, l), Uc(r, n, o));
  } };
  function qv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !rs(l, o) || !rs(c, d) : !0;
  }
  function nf(n, r, l) {
    var o = !1, c = Wr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = zn(r) ? Qr : En.current, o = r.contextTypes, d = (o = o != null) ? ka(n, c) : Wr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Xv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function xs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Od(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = zn(r) ? Qr : En.current, c.context = ka(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ud(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), ps(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Du(n, r) {
    try {
      var l = "", o = r;
      do
        l += ot(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ad(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function jd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Kv(n, r, l) {
    l = Xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Mu = o), jd(n, r);
    }, l;
  }
  function Fd(n, r, l) {
    l = Xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        jd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      jd(n, r), typeof o != "function" && (Fl === null ? Fl = /* @__PURE__ */ new Set([this]) : Fl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Hd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new rf();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ky.bind(null, n, r, l), r.then(n, n));
  }
  function Jv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Al(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var bs = yt.ReactCurrentOwner, jn = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? fe(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Jr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = zl(n, r, l, o, d, c), l = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (pn && l && Mc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, tt(n, r, d, o, c)) : (n = Bs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : rs, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Pl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function tt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Zv(n, r, l, o, c);
  }
  function _s(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Oe(Ro, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Oe(Ro, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Oe(Ro, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Oe(Ro, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Pd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Zv(n, r, l, o, c) {
    var d = zn(l) ? Qr : En.current;
    return d = ka(r, d), yn(r, c), l = zl(n, r, l, o, d, c), o = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (pn && o && Mc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function eh(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      Gr(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) La(n, r), nf(r, l, o), xs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, T = r.memoizedProps;
      m.props = T;
      var _ = m.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = Na(F) : (F = zn(l) ? Qr : En.current, F = ka(r, F));
      var q = l.getDerivedStateFromProps, Z = typeof q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Z || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== o || _ !== F) && Xv(r, m, o, F), va = !1;
      var G = r.memoizedState;
      m.state = G, ps(r, o, m, c), _ = r.memoizedState, T !== o || G !== _ || Wn.current || va ? (typeof q == "function" && (Ud(r, l, q, o), _ = r.memoizedState), (T = va || qv(r, l, T, o, G, _, F)) ? (Z || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = _), m.props = o, m.state = _, m.context = F, o = T) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Iv(n, r), T = r.memoizedProps, F = r.type === r.elementType ? T : ai(r.type, T), m.props = F, Z = r.pendingProps, G = m.context, _ = l.contextType, typeof _ == "object" && _ !== null ? _ = Na(_) : (_ = zn(l) ? Qr : En.current, _ = ka(r, _));
      var ve = l.getDerivedStateFromProps;
      (q = typeof ve == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== Z || G !== _) && Xv(r, m, o, _), va = !1, G = r.memoizedState, m.state = G, ps(r, o, m, c);
      var Ee = r.memoizedState;
      T !== Z || G !== Ee || Wn.current || va ? (typeof ve == "function" && (Ud(r, l, ve, o), Ee = r.memoizedState), (F = va || qv(r, l, F, o, G, Ee, _) || !1) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ee, _), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ee, _)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ee), m.props = o, m.state = Ee, m.context = _, o = F) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ds(n, r, l, o, d, c);
  }
  function Ds(n, r, l, o, c, d) {
    Pd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && kc(r, l, !1), za(n, r, d);
    o = r.stateNode, bs.current = r;
    var T = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, T, d)) : ur(n, r, T, d), r.memoizedState = o.state, c && kc(r, l, !0), r.child;
  }
  function Eo(n) {
    var r = n.stateNode;
    r.pendingContext ? Vv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vv(n, r.context, !1), Nd(n, r.containerInfo);
  }
  function th(n, r, l, o, c) {
    return Nl(), qi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, T;
    if ((T = m) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Oe(gn, c & 1), n === null)
      return Td(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Vl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Vd(l), r.memoizedState = af, n) : Bd(r, m));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return nh(n, r, m, o, T, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, T = c.sibling;
      var _ = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = _, r.deletions = null) : (o = Pl(c, _), o.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Pl(T, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Vd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Pl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Bd(n, r) {
    return r = Vl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ks(n, r, l, o) {
    return o !== null && qi(o), xn(r, n.child, null, l), n = Bd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function nh(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(y(422))), ks(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Vl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = Vd(m), r.memoizedState = af, d);
    if (!(r.mode & 1)) return ks(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var T = o.dgst;
      return o = T, d = Error(y(419)), o = Ad(d, o, void 0), ks(n, r, m, o);
    }
    if (T = (m & n.childLanes) !== 0, jn || T) {
      if (o = Gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, pa(n, c), Lr(o, n, c, -1));
      }
      return Jd(), o = Ad(Error(y(421))), ks(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Oy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Ei(c.nextSibling), qr = r, pn = !0, Ma = null, n !== null && (Un[Oa++] = wi, Un[Oa++] = xi, Un[Oa++] = fa, wi = n.id, xi = n.overflow, fa = r), r = Bd(r, o.children), r.flags |= 4096, r);
  }
  function Yd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), _d(n.return, r, l);
  }
  function Or(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Yd(n, l, r);
        else if (n.tag === 19) Yd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Oe(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Or(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Or(r, !0, l, null, d);
        break;
      case "together":
        Or(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function La(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, l = Pl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Pl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Os(n, r, l) {
    switch (r.tag) {
      case 3:
        Eo(r), Nl();
        break;
      case 5:
        Qv(r);
        break;
      case 1:
        zn(r.type) && Gr(r);
        break;
      case 4:
        Nd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Oe(da, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Oe(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (Oe(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        Oe(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Oe(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _s(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, Fn, rh, ah;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Fn = function() {
  }, rh = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Eu(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = se({}, c, { value: void 0 }), o = se({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bl);
      }
      on(l, o);
      var m;
      l = null;
      for (F in c) if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var T = c[F];
        for (m in T) T.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (P.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var _ = o[F];
        if (T = c?.[F], o.hasOwnProperty(F) && _ !== T && (_ != null || T != null)) if (F === "style") if (T) {
          for (m in T) !T.hasOwnProperty(m) || _ && _.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in _) _.hasOwnProperty(m) && T[m] !== _[m] && (l || (l = {}), l[m] = _[m]);
        } else l || (d || (d = []), d.push(
          F,
          l
        )), l = _;
        else F === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, T = T ? T.__html : void 0, _ != null && T !== _ && (d = d || []).push(F, _)) : F === "children" ? typeof _ != "string" && typeof _ != "number" || (d = d || []).push(F, "" + _) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (P.hasOwnProperty(F) ? (_ != null && F === "onScroll" && Pt("scroll", n), d || T === _ || (d = [])) : (d = d || []).push(F, _));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, ah = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ms(n, r) {
    if (!pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ih(n, r, l) {
    var o = r.pendingProps;
    switch (Nc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Zn(r), null;
      case 1:
        return zn(r.type) && ho(), Zn(r), null;
      case 3:
        return o = r.stateNode, Cu(), an(Wn), an(En), Le(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Nu(Ma), Ma = null))), Fn(n, r), Zn(r), null;
      case 5:
        Ac(r);
        var c = Eu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) rh(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(y(166));
            return Zn(r), null;
          }
          if (n = Eu(bi.current), Lc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ls.length; c++) Pt(ls[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Bn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Pt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var T = d[m];
              m === "children" ? typeof T == "string" ? o.textContent !== T && (d.suppressHydrationWarning !== !0 && xc(o.textContent, T, n), c = ["children", T]) : typeof T == "number" && o.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && xc(
                o.textContent,
                T,
                n
              ), c = ["children", "" + T]) : P.hasOwnProperty(m) && T != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                Mn(o), ci(o, d, !0);
                break;
              case "textarea":
                Mn(o), Nn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = bl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ss] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ls.length; c++) Pt(ls[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Bn(n, o), c = nr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = se({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = $n(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var _ = T[d];
                d === "style" ? en(n, _) : d === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && fi(n, _)) : d === "children" ? typeof _ == "string" ? (l !== "textarea" || _ !== "") && ie(n, _) : typeof _ == "number" && ie(n, "" + _) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (P.hasOwnProperty(d) ? _ != null && d === "onScroll" && Pt("scroll", n) : _ != null && Ke(n, d, _, m));
              }
              switch (l) {
                case "input":
                  Mn(n), ci(n, o, !1);
                  break;
                case "textarea":
                  Mn(n), Nn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = bl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) ah(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(y(166));
          if (l = Eu(ms.current), Eu(bi.current), Lc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                xc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && xc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (an(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && Xr !== null && r.mode & 1 && !(r.flags & 128)) ds(), Nl(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(y(317));
              d[Ci] = r;
            } else Nl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else Ma !== null && (Nu(Ma), Ma = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? Dn === 0 && (Dn = 3) : Jd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Cu(), Fn(n, r), n === null && so(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return bd(r.type._context), Zn(r), null;
      case 17:
        return zn(r.type) && ho(), Zn(r), null;
      case 19:
        if (an(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ms(d, !1);
        else {
          if (Dn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, Ms(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Oe(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && et() > wo && (r.flags |= 128, o = !0, Ms(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ms(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !pn) return Zn(r), null;
          } else 2 * et() - d.renderingStartTime > wo && l !== 1073741824 && (r.flags |= 128, o = !0, Ms(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = et(), r.sibling = null, l = gn.current, Oe(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return Kd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function uf(n, r) {
    switch (Nc(r), r.tag) {
      case 1:
        return zn(r.type) && ho(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cu(), an(Wn), an(En), Le(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ac(r), null;
      case 13:
        if (an(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(y(340));
          Nl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return an(gn), null;
      case 4:
        return Cu(), null;
      case 10:
        return bd(r.type._context), null;
      case 22:
      case 23:
        return Kd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ns = !1, Rr = !1, Ty = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function Co(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      vn(n, r, o);
    }
    else l.current = null;
  }
  function of(n, r, l) {
    try {
      l();
    } catch (o) {
      vn(n, r, o);
    }
  }
  var lh = !1;
  function uh(n, r) {
    if (os = ba, n = as(), yc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, T = -1, _ = -1, F = 0, q = 0, Z = n, G = null;
          t: for (; ; ) {
            for (var ve; Z !== l || c !== 0 && Z.nodeType !== 3 || (T = m + c), Z !== d || o !== 0 && Z.nodeType !== 3 || (_ = m + o), Z.nodeType === 3 && (m += Z.nodeValue.length), (ve = Z.firstChild) !== null; )
              G = Z, Z = ve;
            for (; ; ) {
              if (Z === n) break t;
              if (G === l && ++F === c && (T = m), G === d && ++q === o && (_ = m), (ve = Z.nextSibling) !== null) break;
              Z = G, G = Z.parentNode;
            }
            Z = ve;
          }
          l = T === -1 || _ === -1 ? null : { start: T, end: _ };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (vu = { focusedElem: n, selectionRange: l }, ba = !1, ye = r; ye !== null; ) if (r = ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ye = n;
    else for (; ye !== null; ) {
      r = ye;
      try {
        var Ee = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ee !== null) {
              var Te = Ee.memoizedProps, kn = Ee.memoizedState, N = r.stateNode, k = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Te : ai(r.type, Te), kn);
              N.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var U = r.stateNode.containerInfo;
            U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(y(163));
        }
      } catch (X) {
        vn(r, r.return, X);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ye = n;
        break;
      }
      ye = r.return;
    }
    return Ee = lh, lh = !1, Ee;
  }
  function Ls(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && of(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function zs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function $d(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function sf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ss], delete r[cs], delete r[vo], delete r[Cy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Us(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Us(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = bl));
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var _n = null, Mr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) oh(n, r, l), l = l.sibling;
  }
  function oh(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function") try {
      $r.onCommitFiberUnmount(yl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Rr || Co(l, r);
      case 6:
        var o = _n, c = Mr;
        _n = null, Nr(n, r, l), _n = o, Mr = c, _n !== null && (Mr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Mr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? po(n.parentNode, l) : n.nodeType === 1 && po(n, l), Ja(n)) : po(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Mr, _n = l.stateNode.containerInfo, Mr = !0, Nr(n, r, l), _n = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && of(l, r, m), c = c.next;
          } while (c !== o);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!Rr && (Co(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (T) {
          vn(l, r, T);
        }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Rr = (o = Rr) || l.memoizedState !== null, Nr(n, r, l), Rr = o) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
    }
  }
  function sh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ty()), r.forEach(function(o) {
        var c = gh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, T = m;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 5:
              _n = T.stateNode, Mr = !1;
              break e;
            case 3:
              _n = T.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              _n = T.stateNode.containerInfo, Mr = !0;
              break e;
          }
          T = T.return;
        }
        if (_n === null) throw Error(y(160));
        oh(d, m, c), _n = null, Mr = !1;
        var _ = c.alternate;
        _ !== null && (_.return = null), c.return = null;
      } catch (F) {
        vn(c, r, F);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Id(r, n), r = r.sibling;
  }
  function Id(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), Zr(n), o & 4) {
          try {
            Ls(3, n, n.return), zs(3, n);
          } catch (Te) {
            vn(n, n.return, Te);
          }
          try {
            Ls(5, n, n.return);
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        break;
      case 1:
        ii(r, n), Zr(n), o & 512 && l !== null && Co(l, l.return);
        break;
      case 5:
        if (ii(r, n), Zr(n), o & 512 && l !== null && Co(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ie(c, "");
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, T = n.type, _ = n.updateQueue;
          if (n.updateQueue = null, _ !== null) try {
            T === "input" && d.type === "radio" && d.name != null && Yn(c, d), Kn(T, m);
            var F = Kn(T, d);
            for (m = 0; m < _.length; m += 2) {
              var q = _[m], Z = _[m + 1];
              q === "style" ? en(c, Z) : q === "dangerouslySetInnerHTML" ? fi(c, Z) : q === "children" ? ie(c, Z) : Ke(c, q, Z, F);
            }
            switch (T) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                $a(c, d);
                break;
              case "select":
                var G = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ve = d.value;
                ve != null ? Rn(c, !!d.multiple, ve, !1) : G !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        break;
      case 6:
        if (ii(r, n), Zr(n), o & 4) {
          if (n.stateNode === null) throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        break;
      case 3:
        if (ii(r, n), Zr(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Te) {
          vn(n, n.return, Te);
        }
        break;
      case 4:
        ii(r, n), Zr(n);
        break;
      case 13:
        ii(r, n), Zr(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Gd = et())), o & 4 && sh(n);
        break;
      case 22:
        if (q = l !== null && l.memoizedState !== null, n.mode & 1 ? (Rr = (F = Rr) || q, ii(r, n), Rr = F) : ii(r, n), Zr(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !q && n.mode & 1) for (ye = n, q = n.child; q !== null; ) {
            for (Z = ye = q; ye !== null; ) {
              switch (G = ye, ve = G.child, G.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, G, G.return);
                  break;
                case 1:
                  Co(G, G.return);
                  var Ee = G.stateNode;
                  if (typeof Ee.componentWillUnmount == "function") {
                    o = G, l = G.return;
                    try {
                      r = o, Ee.props = r.memoizedProps, Ee.state = r.memoizedState, Ee.componentWillUnmount();
                    } catch (Te) {
                      vn(o, l, Te);
                    }
                  }
                  break;
                case 5:
                  Co(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    As(Z);
                    continue;
                  }
              }
              ve !== null ? (ve.return = G, ye = ve) : As(Z);
            }
            q = q.sibling;
          }
          e: for (q = null, Z = n; ; ) {
            if (Z.tag === 5) {
              if (q === null) {
                q = Z;
                try {
                  c = Z.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = Z.stateNode, _ = Z.memoizedProps.style, m = _ != null && _.hasOwnProperty("display") ? _.display : null, T.style.display = Ft("display", m));
                } catch (Te) {
                  vn(n, n.return, Te);
                }
              }
            } else if (Z.tag === 6) {
              if (q === null) try {
                Z.stateNode.nodeValue = F ? "" : Z.memoizedProps;
              } catch (Te) {
                vn(n, n.return, Te);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === n) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === n) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === n) break e;
              q === Z && (q = null), Z = Z.return;
            }
            q === Z && (q = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), Zr(n), o & 4 && sh(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), Zr(n);
    }
  }
  function Zr(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Us(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(y(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ie(c, ""), o.flags &= -33);
            var d = Ji(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, T = Ji(n);
            Di(n, T, m);
            break;
          default:
            throw Error(y(161));
        }
      } catch (_) {
        vn(n, n.return, _);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function wy(n, r, l) {
    ye = n, Wd(n);
  }
  function Wd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ye !== null; ) {
      var c = ye, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ns;
        if (!m) {
          var T = c.alternate, _ = T !== null && T.memoizedState !== null || Rr;
          T = Ns;
          var F = Rr;
          if (Ns = m, (Rr = _) && !F) for (ye = c; ye !== null; ) m = ye, _ = m.child, m.tag === 22 && m.memoizedState !== null ? Qd(c) : _ !== null ? (_.return = m, ye = _) : Qd(c);
          for (; d !== null; ) ye = d, Wd(d), d = d.sibling;
          ye = c, Ns = T, Rr = F;
        }
        ch(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ye = d) : ch(n);
    }
  }
  function ch(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Rr || zs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Rr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Md(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Md(r, m, l);
              }
              break;
            case 5:
              var T = r.stateNode;
              if (l === null && r.flags & 4) {
                l = T;
                var _ = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    _.autoFocus && l.focus();
                    break;
                  case "img":
                    _.src && (l.src = _.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var F = r.alternate;
                if (F !== null) {
                  var q = F.memoizedState;
                  if (q !== null) {
                    var Z = q.dehydrated;
                    Z !== null && Ja(Z);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
          Rr || r.flags & 512 && $d(r);
        } catch (G) {
          vn(r, r.return, G);
        }
      }
      if (r === n) {
        ye = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function As(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r === n) {
        ye = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Qd(n) {
    for (; ye !== null; ) {
      var r = ye;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              zs(4, r);
            } catch (_) {
              vn(r, l, _);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (_) {
                vn(r, c, _);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (_) {
              vn(r, d, _);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (_) {
              vn(r, m, _);
            }
        }
      } catch (_) {
        vn(r, r.return, _);
      }
      if (r === n) {
        ye = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, ye = T;
        break;
      }
      ye = r.return;
    }
  }
  var xy = Math.ceil, jl = yt.ReactCurrentDispatcher, Ou = yt.ReactCurrentOwner, or = yt.ReactCurrentBatchConfig, Rt = 0, Gn = null, Hn = null, sr = 0, ma = 0, Ro = ni(0), Dn = 0, js = null, Oi = 0, To = 0, cf = 0, Fs = null, ea = null, Gd = 0, wo = 1 / 0, ya = null, xo = !1, Mu = null, Fl = null, ff = !1, Zi = null, Hs = 0, Hl = 0, bo = null, Ps = -1, Tr = 0;
  function Pn() {
    return Rt & 6 ? et() : Ps !== -1 ? Ps : Ps = et();
  }
  function Mi(n) {
    return n.mode & 1 ? Rt & 2 && sr !== 0 ? sr & -sr : Ry.transition !== null ? (Tr === 0 && (Tr = Ku()), Tr) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ao(n.type)), n) : 1;
  }
  function Lr(n, r, l, o) {
    if (50 < Hl) throw Hl = 0, bo = null, Error(y(185));
    Pi(n, l, o), (!(Rt & 2) || n !== Gn) && (n === Gn && (!(Rt & 2) && (To |= l), Dn === 4 && li(n, sr)), ta(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (wo = et() + 500, mo && Ti()));
  }
  function ta(n, r) {
    var l = n.callbackNode;
    iu(n, r);
    var o = Ka(n, n === Gn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? Dl(qd.bind(null, n)) : Oc(qd.bind(null, n)), fo(function() {
        !(Rt & 6) && Ti();
      }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = ru;
            break;
          case 16:
            l = au;
            break;
          case 536870912:
            l = Gu;
            break;
          default:
            l = au;
        }
        l = Eh(l, df.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function df(n, r) {
    if (Ps = -1, Tr = 0, Rt & 6) throw Error(y(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l) return null;
    var o = Ka(n, n === Gn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = pf(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = dh();
      (Gn !== n || sr !== r) && (ya = null, wo = et() + 500, el(n, r));
      do
        try {
          ph();
          break;
        } catch (T) {
          fh(n, T);
        }
      while (!0);
      xd(), jl.current = d, Rt = c, Hn !== null ? r = 0 : (Gn = null, sr = 0, r = Dn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Sl(n), c !== 0 && (o = c, r = Vs(n, c))), r === 1) throw l = js, el(n, 0), li(n, o), ta(n, et()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !by(c) && (r = pf(n, o), r === 2 && (d = Sl(n), d !== 0 && (o = d, r = Vs(n, d))), r === 1)) throw l = js, el(n, 0), li(n, o), ta(n, et()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            zu(n, ea, ya);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Gd + 500 - et(), 10 < r)) {
              if (Ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Pn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = _c(zu.bind(null, n, ea, ya), r);
              break;
            }
            zu(n, ea, ya);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = et() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * xy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = _c(zu.bind(null, n, ea, ya), o);
              break;
            }
            zu(n, ea, ya);
            break;
          case 5:
            zu(n, ea, ya);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return ta(n, et()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function Vs(n, r) {
    var l = Fs;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = ea, ea = l, r !== null && Nu(r)), n;
  }
  function Nu(n) {
    ea === null ? ea = n : ea.push.apply(ea, n);
  }
  function by(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~cf, r &= ~To, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qd(n) {
    if (Rt & 6) throw Error(y(327));
    _o();
    var r = Ka(n, 0);
    if (!(r & 1)) return ta(n, et()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Sl(n);
      o !== 0 && (r = o, l = Vs(n, o));
    }
    if (l === 1) throw l = js, el(n, 0), li(n, r), ta(n, et()), l;
    if (l === 6) throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, zu(n, ea, ya), ta(n, et()), null;
  }
  function Xd(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (wo = et() + 500, mo && Ti());
    }
  }
  function Lu(n) {
    Zi !== null && Zi.tag === 0 && !(Rt & 6) && _o();
    var r = Rt;
    Rt |= 1;
    var l = or.transition, o = Mt;
    try {
      if (or.transition = null, Mt = 1, n) return n();
    } finally {
      Mt = o, or.transition = l, Rt = r, !(Rt & 6) && Ti();
    }
  }
  function Kd() {
    ma = Ro.current, an(Ro);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ed(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && ho();
          break;
        case 3:
          Cu(), an(Wn), an(En), Le();
          break;
        case 5:
          Ac(o);
          break;
        case 4:
          Cu();
          break;
        case 13:
          an(gn);
          break;
        case 19:
          an(gn);
          break;
        case 10:
          bd(o.type._context);
          break;
        case 22:
        case 23:
          Kd();
      }
      l = l.return;
    }
    if (Gn = n, Hn = n = Pl(n.current, null), sr = ma = r, Dn = 0, js = null, cf = To = Oi = 0, ea = Fs = null, Su !== null) {
      for (r = 0; r < Su.length; r++) if (l = Su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Su = null;
    }
    return n;
  }
  function fh(n, r) {
    do {
      var l = Hn;
      try {
        if (xd(), ft.current = _u, Fc) {
          for (var o = Lt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (Gt = 0, Jn = An = Lt = null, gs = !1, Ru = 0, Ou.current = null, l === null || l.return === null) {
          Dn = 1, js = r, Hn = null;
          break;
        }
        e: {
          var d = n, m = l.return, T = l, _ = r;
          if (r = sr, T.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var F = _, q = T, Z = q.tag;
            if (!(q.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var G = q.alternate;
              G ? (q.updateQueue = G.updateQueue, q.memoizedState = G.memoizedState, q.lanes = G.lanes) : (q.updateQueue = null, q.memoizedState = null);
            }
            var ve = Jv(m);
            if (ve !== null) {
              ve.flags &= -257, Al(ve, m, T, d, r), ve.mode & 1 && Hd(d, F, r), r = ve, _ = F;
              var Ee = r.updateQueue;
              if (Ee === null) {
                var Te = /* @__PURE__ */ new Set();
                Te.add(_), r.updateQueue = Te;
              } else Ee.add(_);
              break e;
            } else {
              if (!(r & 1)) {
                Hd(d, F, r), Jd();
                break e;
              }
              _ = Error(y(426));
            }
          } else if (pn && T.mode & 1) {
            var kn = Jv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Al(kn, m, T, d, r), qi(Du(_, T));
              break e;
            }
          }
          d = _ = Du(_, T), Dn !== 4 && (Dn = 2), Fs === null ? Fs = [d] : Fs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Kv(d, _, r);
                Wv(d, N);
                break e;
              case 1:
                T = _;
                var k = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Fl === null || !Fl.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var X = Fd(d, T, r);
                  Wv(d, X);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        hh(l);
      } catch (Ce) {
        r = Ce, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function dh() {
    var n = jl.current;
    return jl.current = _u, n === null ? _u : n;
  }
  function Jd() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), Gn === null || !(Oi & 268435455) && !(To & 268435455) || li(Gn, sr);
  }
  function pf(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = dh();
    (Gn !== n || sr !== r) && (ya = null, el(n, r));
    do
      try {
        _y();
        break;
      } catch (c) {
        fh(n, c);
      }
    while (!0);
    if (xd(), Rt = l, jl.current = o, Hn !== null) throw Error(y(261));
    return Gn = null, sr = 0, Dn;
  }
  function _y() {
    for (; Hn !== null; ) vh(Hn);
  }
  function ph() {
    for (; Hn !== null && !Qa(); ) vh(Hn);
  }
  function vh(n) {
    var r = Sh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? hh(n) : Hn = r, Ou.current = null;
  }
  function hh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Dn = 6, Hn = null;
          return;
        }
      } else if (l = ih(l, r, ma), l !== null) {
        Hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    Dn === 0 && (Dn = 5);
  }
  function zu(n, r, l) {
    var o = Mt, c = or.transition;
    try {
      or.transition = null, Mt = 1, Dy(n, r, l, o);
    } finally {
      or.transition = c, Mt = o;
    }
    return null;
  }
  function Dy(n, r, l, o) {
    do
      _o();
    while (Zi !== null);
    if (Rt & 6) throw Error(y(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === Gn && (Hn = Gn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, Eh(au, function() {
      return _o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Mt;
      Mt = 1;
      var T = Rt;
      Rt |= 4, Ou.current = null, uh(n, l), Id(l, n), uo(vu), ba = !!os, vu = os = null, n.current = l, wy(l), Ga(), Rt = T, Mt = m, or.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, Zi = n, Hs = c), d = n.pendingLanes, d === 0 && (Fl = null), Go(l.stateNode), ta(n, et()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Mu, Mu = null, n;
    return Hs & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === bo ? Hl++ : (Hl = 0, bo = n) : Hl = 0, Ti(), null;
  }
  function _o() {
    if (Zi !== null) {
      var n = Zu(Hs), r = or.transition, l = Mt;
      try {
        if (or.transition = null, Mt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, Hs = 0, Rt & 6) throw Error(y(331));
          var c = Rt;
          for (Rt |= 4, ye = n.current; ye !== null; ) {
            var d = ye, m = d.child;
            if (ye.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var _ = 0; _ < T.length; _++) {
                  var F = T[_];
                  for (ye = F; ye !== null; ) {
                    var q = ye;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(8, q, d);
                    }
                    var Z = q.child;
                    if (Z !== null) Z.return = q, ye = Z;
                    else for (; ye !== null; ) {
                      q = ye;
                      var G = q.sibling, ve = q.return;
                      if (sf(q), q === F) {
                        ye = null;
                        break;
                      }
                      if (G !== null) {
                        G.return = ve, ye = G;
                        break;
                      }
                      ye = ve;
                    }
                  }
                }
                var Ee = d.alternate;
                if (Ee !== null) {
                  var Te = Ee.child;
                  if (Te !== null) {
                    Ee.child = null;
                    do {
                      var kn = Te.sibling;
                      Te.sibling = null, Te = kn;
                    } while (Te !== null);
                  }
                }
                ye = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ye = m;
            else e: for (; ye !== null; ) {
              if (d = ye, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, d, d.return);
              }
              var N = d.sibling;
              if (N !== null) {
                N.return = d.return, ye = N;
                break e;
              }
              ye = d.return;
            }
          }
          var k = n.current;
          for (ye = k; ye !== null; ) {
            m = ye;
            var U = m.child;
            if (m.subtreeFlags & 2064 && U !== null) U.return = m, ye = U;
            else e: for (m = k; ye !== null; ) {
              if (T = ye, T.flags & 2048) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zs(9, T);
                }
              } catch (Ce) {
                vn(T, T.return, Ce);
              }
              if (T === m) {
                ye = null;
                break e;
              }
              var X = T.sibling;
              if (X !== null) {
                X.return = T.return, ye = X;
                break e;
              }
              ye = T.return;
            }
          }
          if (Rt = c, Ti(), $r && typeof $r.onPostCommitFiberRoot == "function") try {
            $r.onPostCommitFiberRoot(yl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Mt = l, or.transition = r;
      }
    }
    return !1;
  }
  function mh(n, r, l) {
    r = Du(l, r), r = Kv(n, r, 1), n = Ll(n, r, 1), r = Pn(), n !== null && (Pi(n, 1, r), ta(n, r));
  }
  function vn(n, r, l) {
    if (n.tag === 3) mh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        mh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fl === null || !Fl.has(o))) {
          n = Du(l, n), n = Fd(r, n, 1), r = Ll(r, n, 1), n = Pn(), r !== null && (Pi(r, 1, n), ta(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function ky(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Pn(), n.pingedLanes |= n.suspendedLanes & l, Gn === n && (sr & l) === l && (Dn === 4 || Dn === 3 && (sr & 130023424) === sr && 500 > et() - Gd ? el(n, 0) : cf |= l), ta(n, r);
  }
  function yh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ca, ca <<= 1, !(ca & 130023424) && (ca = 4194304)) : r = 1);
    var l = Pn();
    n = pa(n, r), n !== null && (Pi(n, r, l), ta(n, l));
  }
  function Oy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), yh(n, l);
  }
  function gh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    o !== null && o.delete(r), yh(n, l);
  }
  var Sh;
  Sh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Wn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, Os(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, pn && r.flags & 1048576 && Bv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        La(n, r), n = r.pendingProps;
        var c = ka(r, En.current);
        yn(r, l), c = zl(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, Gr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Od(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, xs(r, o, n, l), r = Ds(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && Mc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (La(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ny(o), n = ai(o, n), c) {
            case 0:
              r = Zv(null, r, o, n, l);
              break e;
            case 1:
              r = eh(null, r, o, n, l);
              break e;
            case 11:
              r = Jr(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(y(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Zv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), eh(n, r, o, c, l);
      case 3:
        e: {
          if (Eo(r), n === null) throw Error(y(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Iv(n, r), ps(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Du(Error(y(423)), r), r = th(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Du(Error(y(424)), r), r = th(n, r, o, l, c);
            break e;
          } else for (Xr = Ei(r.stateNode.containerInfo.firstChild), qr = r, pn = !0, Ma = null, l = fe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Nl(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Qv(r), n === null && Td(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, bc(o, c) ? m = null : d !== null && bc(o, d) && (r.flags |= 32), Pd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && Td(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Nd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Jr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Oe(da, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Wn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var T = d.dependencies;
            if (T !== null) {
              m = d.child;
              for (var _ = T.firstContext; _ !== null; ) {
                if (_.context === o) {
                  if (d.tag === 1) {
                    _ = Xi(-1, l & -l), _.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var q = F.pending;
                      q === null ? _.next = _ : (_.next = q.next, q.next = _), F.pending = _;
                    }
                  }
                  d.lanes |= l, _ = d.alternate, _ !== null && (_.lanes |= l), _d(
                    d.return,
                    l,
                    r
                  ), T.lanes |= l;
                  break;
                }
                _ = _.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(y(341));
              m.lanes |= l, T = m.alternate, T !== null && (T.lanes |= l), _d(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Na(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), ku(n, r, o, c, l);
      case 15:
        return tt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), La(n, r), r.tag = 1, zn(o) ? (n = !0, Gr(r)) : n = !1, yn(r, l), nf(r, o, c), xs(r, o, c, l), Ds(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return _s(n, r, l);
    }
    throw Error(y(156, r.tag));
  };
  function Eh(n, r) {
    return sn(n, r);
  }
  function My(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new My(n, r, l, o);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ny(n) {
    if (typeof n == "function") return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === Dt) return 14;
    }
    return 2;
  }
  function Pl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Bs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Zd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ye:
        return tl(l.children, c, d, r);
      case ln:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = Aa(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case ze:
        return n = Aa(13, l, r, c), n.elementType = ze, n.lanes = d, n;
      case jt:
        return n = Aa(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case xe:
        return Vl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case Dt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(y(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Vl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = xe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function ep(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function vf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ju(0), this.expirationTimes = Ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, l, o, c, d, m, T, _) {
    return n = new Ch(n, r, l, T, _), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Od(d), n;
  }
  function Ly(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: dt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function tp(n) {
    if (!n) return Wr;
    n = n._reactInternals;
    e: {
      if (Ze(n) !== n || n.tag !== 1) throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return fs(n, l, r);
    }
    return r;
  }
  function Rh(n, r, l, o, c, d, m, T, _) {
    return n = hf(l, o, !0, n, c, d, m, T, _), n.context = tp(null), l = n.current, o = Pn(), c = Mi(l), d = Xi(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Pi(n, c, o), ta(n, o), n;
  }
  function mf(n, r, l, o) {
    var c = r.current, d = Pn(), m = Mi(c);
    return l = tp(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (Lr(n, c, m, d), Uc(n, c, m)), m;
  }
  function yf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function np(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function gf(n, r) {
    np(n, r), (n = n.alternate) && np(n, r);
  }
  function Th() {
    return null;
  }
  var Uu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function rp(n) {
    this._internalRoot = n;
  }
  Sf.prototype.render = rp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(y(409));
    mf(n, r, null, null);
  }, Sf.prototype.unmount = rp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        mf(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function Sf(n) {
    this._internalRoot = n;
  }
  Sf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Qe();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && Ko(n);
    }
  };
  function ap(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ef(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function wh() {
  }
  function zy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = yf(m);
          d.call(F);
        };
      }
      var m = Rh(r, o, n, 0, null, !1, !1, "", wh);
      return n._reactRootContainer = m, n[Wi] = m.current, so(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var T = o;
      o = function() {
        var F = yf(_);
        T.call(F);
      };
    }
    var _ = hf(n, 0, !1, null, null, !1, !1, "", wh);
    return n._reactRootContainer = _, n[Wi] = _.current, so(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      mf(r, _, l, o);
    }), _;
  }
  function Ys(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var _ = yf(m);
          T.call(_);
        };
      }
      mf(r, m, n, c);
    } else m = zy(l, r, n, c, o);
    return yf(m);
  }
  xt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ta(r, et()), !(Rt & 6) && (wo = et() + 500, Ti()));
        }
        break;
      case 13:
        Lu(function() {
          var o = pa(n, 1);
          if (o !== null) {
            var c = Pn();
            Lr(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, qo = function(n) {
    if (n.tag === 13) {
      var r = pa(n, 134217728);
      if (r !== null) {
        var l = Pn();
        Lr(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Mi(n), l = pa(n, r);
      if (l !== null) {
        var o = Pn();
        Lr(l, n, r, o);
      }
      gf(n, r);
    }
  }, Qe = function() {
    return Mt;
  }, eo = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = wn(o);
              if (!c) throw Error(y(90));
              wr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        $a(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, tu = Xd, vl = Lu;
  var Uy = { usingClientEntryPoint: !1, Events: [Ne, ti, wn, Hi, eu, Xd] }, $s = { findFiberByHostInstance: hu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xh = { bundleType: $s.bundleType, version: $s.version, rendererPackageName: $s.rendererPackageName, rendererConfig: $s.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: $s.findFiberByHostInstance || Th, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bl.isDisabled && Bl.supportsFiber) try {
      yl = Bl.inject(xh), $r = Bl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uy, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ap(r)) throw Error(y(200));
    return Ly(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!ap(n)) throw Error(y(299));
    var l = !1, o = "", c = Uu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, so(n.nodeType === 8 ? n.parentNode : n), new rp(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Lu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!Ef(r)) throw Error(y(200));
    return Ys(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!ap(n)) throw Error(y(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Uu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Rh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, so(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Sf(r);
  }, Ba.render = function(n, r, l) {
    if (!Ef(r)) throw Error(y(200));
    return Ys(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!Ef(n)) throw Error(y(40));
    return n._reactRootContainer ? (Lu(function() {
      Ys(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Xd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ef(l)) throw Error(y(200));
    if (n == null || n._reactInternals === void 0) throw Error(y(38));
    return Ys(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CT;
function LD() {
  return CT || (CT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var g = fv(), E = NT(), y = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = !1;
    function P(e) {
      b = e;
    }
    function ne(e) {
      if (!b) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fe("warn", e, a);
      }
    }
    function C(e) {
      if (!b) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fe("error", e, a);
      }
    }
    function Fe(e, t, a) {
      {
        var i = y.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ae = 0, K = 1, be = 2, J = 3, Se = 4, oe = 5, Xe = 6, Et = 7, mt = 8, dn = 9, ht = 10, Ke = 11, yt = 12, Me = 13, dt = 14, Ye = 15, ln = 16, Ht = 17, Zt = 18, un = 19, _t = 21, ze = 22, jt = 23, Dt = 24, Ot = 25, xe = !0, re = !1, ke = !1, se = !1, M = !1, $ = !0, $e = !0, Ve = !0, ot = !0, at = /* @__PURE__ */ new Set(), nt = {}, it = {};
    function st(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      nt[e] && C("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nt[e] = t;
      {
        var a = e.toLowerCase();
        it[a] = e, e === "onDoubleClick" && (it.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        at.add(t[i]);
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function Yn(e, t) {
      if (nr(e))
        return C("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Bn(e);
    }
    function Yr(e) {
      if (nr(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Bn(e);
    }
    function ci(e, t) {
      if (nr(e))
        return C("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Bn(e);
    }
    function ua(e, t) {
      if (nr(e))
        return C("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Bn(e);
    }
    function Xn(e) {
      if (nr(e))
        return C("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Bn(e);
    }
    function Rn(e) {
      if (nr(e))
        return C("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Bn(e);
    }
    var $n = 0, gr = 1, $a = 2, Nn = 3, Sr = 4, oa = 5, Ia = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ie = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _e = new RegExp("^[" + fi + "][" + ie + "]*$"), lt = {}, Ft = {};
    function en(e) {
      return wr.call(Ft, e) ? !0 : wr.call(lt, e) ? !1 : _e.test(e) ? (Ft[e] = !0, !0) : (lt[e] = !0, C("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === $n)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nn:
            return !t;
          case Sr:
            return t === !1;
          case oa:
            return isNaN(t);
          case Ia:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === $a || t === Nn || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, sa = [
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
    sa.forEach(function(e) {
      $t[e] = new Yt(
        e,
        $n,
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
      var t = e[0], a = e[1];
      $t[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        $a,
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
      $t[e] = new Yt(
        e,
        $a,
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
      $t[e] = new Yt(
        e,
        Nn,
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
      $t[e] = new Yt(
        e,
        Nn,
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
      $t[e] = new Yt(
        e,
        Sr,
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
      $t[e] = new Yt(
        e,
        Ia,
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
      $t[e] = new Yt(
        e,
        oa,
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
    var Er = /[\-\:]([a-z])/g, Ta = function(e) {
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
      var t = e.replace(Er, Ta);
      $t[t] = new Yt(
        t,
        gr,
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
      var t = e.replace(Er, Ta);
      $t[t] = new Yt(
        t,
        gr,
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
      var t = e.replace(Er, Ta);
      $t[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        gr,
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
    var Hi = "xlinkHref";
    $t[Hi] = new Yt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      $t[e] = new Yt(
        e,
        gr,
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
    var eu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, tu = !1;
    function vl(e) {
      !tu && eu.test(e) && (tu = !0, C("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function hl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Yn(a, t), i.sanitizeURL && vl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nn)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function nu(e, t, a, i) {
      {
        if (!en(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Yn(a, t), u === "" + a ? a : u;
      }
    }
    function xr(e, t, a, i) {
      var u = tn(t);
      if (!hn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (en(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Yn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Nn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var S = u.attributeName, R = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var O = u.type, D;
          O === Nn || O === Sr && a === !0 ? D = "" : (Yn(a, S), D = "" + a, u.sanitizeURL && vl(D.toString())), R ? e.setAttributeNS(R, S, D) : e.setAttribute(S, D);
        }
      }
    }
    var br = Symbol.for("react.element"), rr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), x = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Qa = Symbol.iterator, Ga = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qa && e[Qa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, qa = 0, ru, au, ml, Gu, yl, $r, Go;
    function _r() {
    }
    _r.__reactDisabledLog = !0;
    function fc() {
      {
        if (qa === 0) {
          ru = console.log, au = console.info, ml = console.warn, Gu = console.error, yl = console.group, $r = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _r,
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
        qa++;
      }
    }
    function dc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: ru
            }),
            info: rt({}, e, {
              value: au
            }),
            warn: rt({}, e, {
              value: ml
            }),
            error: rt({}, e, {
              value: Gu
            }),
            group: rt({}, e, {
              value: yl
            }),
            groupCollapsed: rt({}, e, {
              value: $r
            }),
            groupEnd: rt({}, e, {
              value: Go
            })
          });
        }
        qa < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qu = y.ReactCurrentDispatcher, gl;
    function ca(e, t, a) {
      {
        if (gl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            gl = i && i[1] || "";
          }
        return `
` + gl + e;
      }
    }
    var Xa = !1, Ka;
    {
      var Xu = typeof WeakMap == "function" ? WeakMap : Map;
      Ka = new Xu();
    }
    function iu(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ka.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = qu.current, qu.current = null, fc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), v = i.stack.split(`
`), S = p.length - 1, R = v.length - 1; S >= 1 && R >= 0 && p[S] !== v[R]; )
            R--;
          for (; S >= 1 && R >= 0; S--, R--)
            if (p[S] !== v[R]) {
              if (S !== 1 || R !== 1)
                do
                  if (S--, R--, R < 0 || p[S] !== v[R]) {
                    var O = `
` + p[S].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Ka.set(e, O), O;
                  }
                while (S >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, qu.current = s, dc(), Error.prepareStackTrace = u;
      }
      var D = e ? e.displayName || e.name : "", A = D ? ca(D) : "";
      return typeof e == "function" && Ka.set(e, A), A;
    }
    function Sl(e, t, a) {
      return iu(e, !0);
    }
    function Ku(e, t, a) {
      return iu(e, !1);
    }
    function Ju(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return iu(e, Ju(e));
      if (typeof e == "string")
        return ca(e);
      switch (e) {
        case ce:
          return ca("Suspense");
        case ge:
          return ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            return Ku(e.render);
          case Ze:
            return Pi(e.type, t, a);
          case Ge: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return ca(e.type);
        case ln:
          return ca("Lazy");
        case Me:
          return ca("Suspense");
        case un:
          return ca("SuspenseList");
        case ae:
        case be:
        case Ye:
          return Ku(e.type);
        case Ke:
          return Ku(e.type.render);
        case K:
          return Sl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Zf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Mt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zu(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case rr:
          return "Portal";
        case pi:
          return "Profiler";
        case Wa:
          return "StrictMode";
        case ce:
          return "Suspense";
        case ge:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return Zu(t) + ".Consumer";
          case vi:
            var a = e;
            return Zu(a._context) + ".Provider";
          case W:
            return Mt(e, e.render, "ForwardRef");
          case Ze:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case Ge: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case dn:
          var i = a;
          return hi(i) + ".Consumer";
        case ht:
          var u = a;
          return hi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case Ke:
          return qo(a, a.render, "ForwardRef");
        case Et:
          return "Fragment";
        case oe:
          return a;
        case Se:
          return "Portal";
        case J:
          return "Root";
        case Xe:
          return "Text";
        case ln:
          return xt(a);
        case mt:
          return a === Wa ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case yt:
          return "Profiler";
        case _t:
          return "Scope";
        case Me:
          return "Suspense";
        case un:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case K:
        case ae:
        case Ht:
        case be:
        case dt:
        case Ye:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var eo = y.ReactDebugCurrentFrame, ir = null, mi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function yi() {
      return ir === null ? "" : Vi(ir);
    }
    function cn() {
      eo.getCurrentStack = null, ir = null, mi = !1;
    }
    function It(e) {
      eo.getCurrentStack = e === null ? null : yi, ir = e, mi = !1;
    }
    function El() {
      return ir;
    }
    function In(e) {
      mi = e;
    }
    function kr(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var lu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Xo(e, t) {
      lu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || C("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || C("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ko(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cl(e) {
      return e._valueTracker;
    }
    function uu(e) {
      e._valueTracker = null;
    }
    function ed(e) {
      var t = "";
      return e && (Ko(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xa(e) {
      var t = Ko(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            uu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      Cl(e) || (e._valueTracker = xa(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = Cl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ed(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ba(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var to = !1, no = !1, Rl = !1, ou = !1;
    function ro(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ao(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      Xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !no && (C("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), no = !0), t.value !== void 0 && t.defaultValue !== void 0 && !to && (C("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: ro(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && xr(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = ro(t);
        !a._wrapperState.controlled && i && !ou && (C("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ou = !0), a._wrapperState.controlled && !i && !Rl && (C("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rl = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = kr(u)) : a.value !== kr(u) && (a.value = kr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ue(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ue(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function j(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = kr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function V(e, t) {
      var a = e;
      w(a, t), te(a, t);
    }
    function te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), w(f, p);
          }
        }
      }
    }
    function Ue(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ba(e.ownerDocument) !== e) && (a == null ? e.defaultValue = kr(e._wrapperState.initialValue) : e.defaultValue !== kr(a) && (e.defaultValue = kr(a)));
    }
    var ue = !1, He = !1, vt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? g.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || He || (He = !0, C("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vt || (vt = !0, C("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ue && (C("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ue = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", kr(wa(t.value)));
    }
    var Wt = Array.isArray;
    function ut(e) {
      return Wt(e);
    }
    var Qt;
    Qt = !1;
    function mn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Tl = ["value", "defaultValue"];
    function Jo(e) {
      {
        Xo("select", e);
        for (var t = 0; t < Tl.length; t++) {
          var a = Tl[t];
          if (e[a] != null) {
            var i = ut(e[a]);
            e.multiple && !i ? C("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, mn()) : !e.multiple && i && C("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, mn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var S = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== S && (u[v].selected = S), S && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var R = kr(wa(a)), O = null, D = 0; D < u.length; D++) {
          if (u[D].value === R) {
            u[D].selected = !0, i && (u[D].defaultSelected = !0);
            return;
          }
          O === null && !u[D].disabled && (O = u[D]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function Zo(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function su(e, t) {
      var a = e;
      Jo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (C("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function td(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function pc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function nd(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var dv = !1;
    function rd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: kr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ad(e, t) {
      var a = e;
      Xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !dv && (C("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), dv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          C("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ut(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function pv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = kr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = kr(u));
    }
    function vv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function cy(e, t) {
      pv(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", id = "http://www.w3.org/1998/Math/MathML", ld = "http://www.w3.org/2000/svg";
    function ud(e) {
      switch (e) {
        case "svg":
          return ld;
        case "math":
          return id;
        default:
          return Yi;
      }
    }
    function od(e, t) {
      return e == null || e === Yi ? ud(t) : e === ld && t === "foreignObject" ? Yi : e;
    }
    var hv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vc, mv = hv(function(e, t) {
      if (e.namespaceURI === ld && !("innerHTML" in e)) {
        vc = vc || document.createElement("div"), vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ir = 1, $i = 3, Ln = 8, Ii = 9, sd = 11, io = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, es = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, ts = {
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
    function yv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var gv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ts).forEach(function(e) {
      gv.forEach(function(t) {
        ts[yv(t, e)] = ts[e];
      });
    });
    function hc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ts.hasOwnProperty(e) && ts[e]) ? t + "px" : (ua(t, e), ("" + t).trim());
    }
    var Sv = /([A-Z])/g, Ev = /^ms-/;
    function lo(e) {
      return e.replace(Sv, "-$1").toLowerCase().replace(Ev, "-ms-");
    }
    var Cv = function() {
    };
    {
      var fy = /^(?:webkit|moz|o)[A-Z]/, dy = /^-ms-/, Rv = /-(.)/g, cd = /;\s*$/, Si = {}, cu = {}, Tv = !1, ns = !1, py = function(e) {
        return e.replace(Rv, function(t, a) {
          return a.toUpperCase();
        });
      }, wv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, C(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          py(e.replace(dy, "ms-"))
        ));
      }, fd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, C("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dd = function(e, t) {
        cu.hasOwnProperty(t) && cu[t] || (cu[t] = !0, C(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(cd, "")));
      }, xv = function(e, t) {
        Tv || (Tv = !0, C("`NaN` is an invalid value for the `%s` css style property.", e));
      }, bv = function(e, t) {
        ns || (ns = !0, C("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Cv = function(e, t) {
        e.indexOf("-") > -1 ? wv(e) : fy.test(e) ? fd(e) : cd.test(t) && dd(e, t), typeof t == "number" && (isNaN(t) ? xv(e, t) : isFinite(t) || bv(e, t));
      };
    }
    var _v = Cv;
    function vy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : lo(i)) + ":", t += hc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Dv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || _v(i, t[i]);
          var s = hc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function hy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function kv(e) {
      var t = {};
      for (var a in e)
        for (var i = es[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function my(e, t) {
      {
        if (!t)
          return;
        var a = kv(e), i = kv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, C("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", hy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, rs = rt({
      menuitem: !0
    }, ei), Ov = "__html";
    function mc(e, t) {
      if (t) {
        if (rs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && C("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function wl(e, t) {
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
    var as = {
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
    }, yc = {
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
    }, uo = {}, yy = new RegExp("^(aria)-[" + ie + "]*$"), oo = new RegExp("^(aria)[A-Z][" + ie + "]*$");
    function pd(e, t) {
      {
        if (wr.call(uo, t) && uo[t])
          return !0;
        if (oo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return C("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), uo[t] = !0, !0;
          if (t !== i)
            return C("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), uo[t] = !0, !0;
        }
        if (yy.test(t)) {
          var u = t.toLowerCase(), s = yc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return uo[t] = !0, !1;
          if (t !== s)
            return C("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), uo[t] = !0, !0;
        }
      }
      return !0;
    }
    function is(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = pd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? C("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && C("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function vd(e, t) {
      wl(e, t) || is(e, t);
    }
    var hd = !1;
    function gc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !hd && (hd = !0, e === "select" && t.multiple ? C("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : C("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fu = function() {
    };
    {
      var lr = {}, md = /^on./, Sc = /^on[^A-Z]/, Mv = new RegExp("^(aria)-[" + ie + "]*$"), Nv = new RegExp("^(aria)[A-Z][" + ie + "]*$");
      fu = function(e, t, a, i) {
        if (wr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return C("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return C("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (md.test(t))
            return C("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (md.test(t))
          return Sc.test(t) && C("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Mv.test(t) || Nv.test(t))
          return !0;
        if (u === "innerhtml")
          return C("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return C("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return C("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return C("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = tn(t), S = v !== null && v.type === $n;
        if (as.hasOwnProperty(u)) {
          var R = as[u];
          if (R !== t)
            return C("Invalid DOM property `%s`. Did you mean `%s`?", t, R), lr[t] = !0, !0;
        } else if (!S && t !== u)
          return C("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? C('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : C('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : S ? !0 : on(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nn && (C("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Lv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = fu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? C("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && C("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function zv(e, t, a) {
      wl(e, t) || Lv(e, t, a);
    }
    var yd = 1, Ec = 2, _a = 4, gd = yd | Ec | _a, du = null;
    function gy(e) {
      du !== null && C("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), du = e;
    }
    function Sy() {
      du === null && C("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), du = null;
    }
    function ls(e) {
      return e === du;
    }
    function Sd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var Cc = null, pu = null, Pt = null;
    function Rc(e) {
      var t = Oo(e);
      if (t) {
        if (typeof Cc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Yh(a);
          Cc(t.stateNode, t.type, i);
        }
      }
    }
    function Tc(e) {
      Cc = e;
    }
    function so(e) {
      pu ? Pt ? Pt.push(e) : Pt = [e] : pu = e;
    }
    function Uv() {
      return pu !== null || Pt !== null;
    }
    function wc() {
      if (pu) {
        var e = pu, t = Pt;
        if (pu = null, Pt = null, Rc(e), t)
          for (var a = 0; a < t.length; a++)
            Rc(t[a]);
      }
    }
    var co = function(e, t) {
      return e(t);
    }, us = function() {
    }, xl = !1;
    function Av() {
      var e = Uv();
      e && (us(), wc());
    }
    function jv(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return co(e, t, a);
      } finally {
        xl = !1, Av();
      }
    }
    function Ey(e, t, a) {
      co = e, us = a;
    }
    function Fv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Fv(t));
        default:
          return !1;
      }
    }
    function bl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (xc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (Mn)
      try {
        var vu = {};
        Object.defineProperty(vu, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", vu, vu), window.removeEventListener("test", vu, vu);
      } catch {
        os = !1;
      }
    function bc(e, t, a, i, u, s, f, p, v) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (R) {
        this.onError(R);
      }
    }
    var _c = bc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ed = document.createElement("react");
      _c = function(t, a, i, u, s, f, p, v, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), O = !1, D = !0, A = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function B() {
          Ed.removeEventListener(Y, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = A);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          O = !0, B(), a.apply(i, de), D = !1;
        }
        var De, wt = !1, gt = !1;
        function L(z) {
          if (De = z.error, wt = !0, De === null && z.colno === 0 && z.lineno === 0 && (gt = !0), z.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), Ed.addEventListener(Y, Ae, !1), R.initEvent(Y, !1, !1), Ed.dispatchEvent(R), H && Object.defineProperty(window, "event", H), O && D && (wt ? gt && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", L), !O)
          return B(), bc.apply(this, arguments);
      };
    }
    var Hv = _c, fo = !1, Dc = null, po = !1, Ei = null, Pv = {
      onError: function(e) {
        fo = !0, Dc = e;
      }
    };
    function _l(e, t, a, i, u, s, f, p, v) {
      fo = !1, Dc = null, Hv.apply(Pv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (_l.apply(this, arguments), fo) {
        var S = cs();
        po || (po = !0, Ei = S);
      }
    }
    function ss() {
      if (po) {
        var e = Ei;
        throw po = !1, Ei = null, e;
      }
    }
    function Wi() {
      return fo;
    }
    function cs() {
      if (fo) {
        var e = Dc;
        return fo = !1, Dc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vo(e) {
      return e._reactInternals;
    }
    function Cy(e) {
      return e._reactInternals !== void 0;
    }
    function hu(e, t) {
      e._reactInternals = t;
    }
    var Ne = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), wn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), ni = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), Oe = (
      /*                   */
      128
    ), Wr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Qr = (
      /*                      */
      2048
    ), ka = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), ho = (
      /*             */
      16384
    ), Vv = (
      /*               */
      32767
    ), fs = (
      /*                   */
      32768
    ), Gr = (
      /*                */
      65536
    ), kc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), mo = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), Oc = (
      /*                */
      8388608
    ), Dl = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Wn | 0
    ), Ol = wn | Ct | Da | ni | En | ka | zn, Ml = Ct | an | En | zn, Gi = Qr | Da, Un = Qi | Oc | mo, Oa = y.ReactCurrentOwner;
    function fa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (wn | ka)) !== Ne && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function wi(e) {
      if (e.tag === Me) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function mu(e) {
      return fa(e) === e;
    }
    function Bv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === K) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || C("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = vo(e);
      return u ? fa(u) === u : !1;
    }
    function Mc(e) {
      if (fa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Nc(e) {
      var t = e.alternate;
      if (!t) {
        var a = fa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Mc(s), e;
            if (v === u)
              return Mc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var S = !1, R = s.child; R; ) {
            if (R === i) {
              S = !0, i = s, u = f;
              break;
            }
            if (R === u) {
              S = !0, u = s, i = f;
              break;
            }
            R = R.sibling;
          }
          if (!S) {
            for (R = f.child; R; ) {
              if (R === i) {
                S = !0, i = f, u = s;
                break;
              }
              if (R === u) {
                S = !0, u = f, i = s;
                break;
              }
              R = R.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = Nc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === oe || e.tag === Xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pn(e) {
      var t = Nc(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === oe || e.tag === Xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Se) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Cd = E.unstable_scheduleCallback, Yv = E.unstable_cancelCallback, Rd = E.unstable_shouldYield, Td = E.unstable_requestPaint, Qn = E.unstable_now, Lc = E.unstable_getCurrentPriorityLevel, ds = E.unstable_ImmediatePriority, Nl = E.unstable_UserBlockingPriority, qi = E.unstable_NormalPriority, Ry = E.unstable_LowPriority, yu = E.unstable_IdlePriority, zc = E.unstable_yieldValue, $v = E.unstable_setDisableYieldValue, gu = null, xn = null, fe = null, da = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return C("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        $e && (e = rt({}, e, {
          getLaneLabelMap: Su,
          injectProfilingHooks: Na
        })), gu = t.inject(e), xn = t;
      } catch (a) {
        C("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(gu, e, t);
        } catch (a) {
          da || (da = !0, C("React instrumentation encountered an error: %s", a));
        }
    }
    function xd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Oe) === Oe;
          if (Ve) {
            var i;
            switch (t) {
              case Or:
                i = ds;
                break;
              case _i:
                i = Nl;
                break;
              case La:
                i = qi;
                break;
              case za:
                i = yu;
                break;
              default:
                i = qi;
                break;
            }
            xn.onCommitFiberRoot(gu, e, i, a);
          }
        } catch (u) {
          da || (da = !0, C("React instrumentation encountered an error: %s", u));
        }
    }
    function bd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(gu, e);
        } catch (t) {
          da || (da = !0, C("React instrumentation encountered an error: %s", t));
        }
    }
    function _d(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(gu, e);
        } catch (t) {
          da || (da = !0, C("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof zc == "function" && ($v(e), P(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(gu, e);
        } catch (t) {
          da || (da = !0, C("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      fe = e;
    }
    function Su() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ru; a++) {
          var i = Gv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dd(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function kd() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function pa(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function va() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Od(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Iv() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Xi(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Uc(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function Wv() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function ps(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Md() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function vs(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function ms() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Eu(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function Nd() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function Cu(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function Qv() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function Ac() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function gn(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function jc(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var Le = (
      /*                         */
      0
    ), ft = (
      /*                 */
      1
    ), Nt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Lt = (
      /*              */
      16
    ), An = Math.clz32 ? Math.clz32 : gs, Jn = Math.log, Fc = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Fc | 0) | 0;
    }
    var Ru = 31, Q = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), zl = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Cr = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), Ul = (
      /*                       */
      4194240
    ), Tu = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Pc = (
      /*                        */
      256
    ), Vc = (
      /*                        */
      512
    ), Bc = (
      /*                        */
      1024
    ), Yc = (
      /*                        */
      2048
    ), $c = (
      /*                        */
      4096
    ), Ic = (
      /*                        */
      8192
    ), Wc = (
      /*                        */
      16384
    ), wu = (
      /*                       */
      32768
    ), Qc = (
      /*                       */
      65536
    ), go = (
      /*                       */
      131072
    ), So = (
      /*                       */
      262144
    ), Gc = (
      /*                       */
      524288
    ), Ss = (
      /*                       */
      1048576
    ), qc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), xu = (
      /*                             */
      4194304
    ), Xc = (
      /*                             */
      8388608
    ), Cs = (
      /*                             */
      16777216
    ), Kc = (
      /*                             */
      33554432
    ), Jc = (
      /*                             */
      67108864
    ), Ld = xu, Rs = (
      /*          */
      134217728
    ), zd = (
      /*                          */
      268435455
    ), Ts = (
      /*               */
      268435456
    ), bu = (
      /*                        */
      536870912
    ), ha = (
      /*                   */
      1073741824
    );
    function Gv(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & zl)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Cr)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & Ul)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & Rs)
          return "SelectiveHydration";
        if (e & Ts)
          return "IdleHydration";
        if (e & bu)
          return "Idle";
        if (e & ha)
          return "Offscreen";
      }
    }
    var Kt = -1, _u = Tu, Zc = xu;
    function ws(e) {
      switch (Al(e)) {
        case Be:
          return Be;
        case zl:
          return zl;
        case ri:
          return ri;
        case Cr:
          return Cr;
        case bn:
          return bn;
        case Ki:
          return Ki;
        case Tu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Yc:
        case $c:
        case Ic:
        case Wc:
        case wu:
        case Qc:
        case go:
        case So:
        case Gc:
        case Ss:
        case qc:
          return e & Ul;
        case xu:
        case Xc:
        case Cs:
        case Kc:
        case Jc:
          return e & Es;
        case Rs:
          return Rs;
        case Ts:
          return Ts;
        case bu:
          return bu;
        case ha:
          return ha;
        default:
          return C("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === Q)
        return Q;
      var i = Q, u = e.suspendedLanes, s = e.pingedLanes, f = a & zd;
      if (f !== Q) {
        var p = f & ~u;
        if (p !== Q)
          i = ws(p);
        else {
          var v = f & s;
          v !== Q && (i = ws(v));
        }
      } else {
        var S = a & ~u;
        S !== Q ? i = ws(S) : s !== Q && (i = ws(s));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Q) {
        var R = Al(i), O = Al(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === bn && (O & Ul) !== Q
        )
          return t;
      }
      (i & ri) !== Q && (i |= a & bn);
      var D = e.entangledLanes;
      if (D !== Q)
        for (var A = e.entanglements, H = i & D; H > 0; ) {
          var B = jn(H), de = 1 << B;
          i |= A[B], H &= ~de;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ud(e, t) {
      switch (e) {
        case Be:
        case zl:
        case ri:
          return t + 250;
        case Cr:
        case bn:
        case Ki:
        case Tu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Yc:
        case $c:
        case Ic:
        case Wc:
        case wu:
        case Qc:
        case go:
        case So:
        case Gc:
        case Ss:
        case qc:
          return t + 5e3;
        case xu:
        case Xc:
        case Cs:
        case Kc:
        case Jc:
          return Kt;
        case Rs:
        case Ts:
        case bu:
        case ha:
          return Kt;
        default:
          return C("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p, S = s[p];
        S === Kt ? ((v & i) === Q || (v & u) !== Q) && (s[p] = Ud(v, t)) : S <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function qv(e) {
      return ws(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== Q ? t : t & ha ? ha : Q;
    }
    function Xv(e) {
      return (e & Be) !== Q;
    }
    function xs(e) {
      return (e & zd) !== Q;
    }
    function Du(e) {
      return (e & Es) === e;
    }
    function Ad(e) {
      var t = Be | ri | bn;
      return (e & t) === Q;
    }
    function jd(e) {
      return (e & Ul) === e;
    }
    function rf(e, t) {
      var a = zl | ri | Cr | bn;
      return (t & a) !== Q;
    }
    function Kv(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function Fd(e) {
      return (e & Ul) !== Q;
    }
    function Hd() {
      var e = _u;
      return _u <<= 1, (_u & Ul) === Q && (_u = Tu), e;
    }
    function Jv() {
      var e = Zc;
      return Zc <<= 1, (Zc & Es) === Q && (Zc = xu), e;
    }
    function Al(e) {
      return e & -e;
    }
    function bs(e) {
      return Al(e);
    }
    function jn(e) {
      return 31 - An(e);
    }
    function ur(e) {
      return jn(e);
    }
    function Jr(e, t) {
      return (e & t) !== Q;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function _s(e, t) {
      return e & ~t;
    }
    function Pd(e, t) {
      return e & t;
    }
    function Zv(e) {
      return e;
    }
    function eh(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function Ds(e) {
      for (var t = [], a = 0; a < Ru; a++)
        t.push(e);
      return t;
    }
    function Eo(e, t, a) {
      e.pendingLanes |= t, t !== bu && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function th(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Vd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p;
        i[p] = Q, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Bd(e, t) {
      var a = Al(t), i;
      switch (a) {
        case ri:
          i = zl;
          break;
        case bn:
          i = Cr;
          break;
        case Tu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case Yc:
        case $c:
        case Ic:
        case Wc:
        case wu:
        case Qc:
        case go:
        case So:
        case Gc:
        case Ss:
        case qc:
        case xu:
        case Xc:
        case Cs:
        case Kc:
        case Jc:
          i = Ki;
          break;
        case bu:
          i = Ts;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function ks(e, t, a) {
      if (Kr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function nh(e, t) {
      if (Kr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Yd(e, t) {
      return null;
    }
    var Or = Be, _i = ri, La = bn, za = bu, Os = kt;
    function Ua() {
      return Os;
    }
    function Fn(e) {
      Os = e;
    }
    function rh(e, t) {
      var a = Os;
      try {
        return Os = e, t();
      } finally {
        Os = a;
      }
    }
    function ah(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ms(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function ih(e) {
      var t = Al(e);
      return Zn(Or, t) ? Zn(_i, t) ? xs(t) ? La : za : _i : Or;
    }
    function uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ns;
    function Rr(e) {
      Ns = e;
    }
    function Ty(e) {
      Ns(e);
    }
    var ye;
    function Co(e) {
      ye = e;
    }
    var of;
    function lh(e) {
      of = e;
    }
    var uh;
    function Ls(e) {
      uh = e;
    }
    var zs;
    function $d(e) {
      zs = e;
    }
    var sf = !1, Us = [], Ji = null, Di = null, ki = null, _n = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], oh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function sh(e) {
      return oh.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Id(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          Di = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function Zr(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Oo(t);
          p !== null && ye(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function wy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = Zr(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Di = Zr(Di, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = Zr(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, S = v.pointerId;
          return _n.set(S, Zr(_n.get(S) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var R = u, O = R.pointerId;
          return Mr.set(O, Zr(Mr.get(O) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function Wd(e) {
      var t = Qs(e.target);
      if (t !== null) {
        var a = fa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Me) {
            var u = wi(a);
            if (u !== null) {
              e.blockedOn = u, zs(e.priority, function() {
                of(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (uf(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ch(e) {
      for (var t = uh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Zn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Wd(a);
    }
    function As(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = To(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          gy(s), u.target.dispatchEvent(s), Sy();
        } else {
          var f = Oo(i);
          return f !== null && ye(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qd(e, t, a) {
      As(e) && a.delete(t);
    }
    function xy() {
      sf = !1, Ji !== null && As(Ji) && (Ji = null), Di !== null && As(Di) && (Di = null), ki !== null && As(ki) && (ki = null), _n.forEach(Qd), Mr.forEach(Qd);
    }
    function jl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, xy)));
    }
    function Ou(e) {
      if (Us.length > 0) {
        jl(Us[0], e);
        for (var t = 1; t < Us.length; t++) {
          var a = Us[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && jl(Ji, e), Di !== null && jl(Di, e), ki !== null && jl(ki, e);
      var i = function(p) {
        return jl(p, e);
      };
      _n.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Nr.length; u++) {
        var s = Nr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Nr.length > 0; ) {
        var f = Nr[0];
        if (f.blockedOn !== null)
          break;
        Wd(f), f.blockedOn === null && Nr.shift();
      }
    }
    var or = y.ReactCurrentBatchConfig, Rt = !0;
    function Gn(e) {
      Rt = !!e;
    }
    function Hn() {
      return Rt;
    }
    function sr(e, t, a) {
      var i = cf(t), u;
      switch (i) {
        case Or:
          u = ma;
          break;
        case _i:
          u = Ro;
          break;
        case La:
        default:
          u = Dn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        Fn(Or), Dn(e, t, a, i);
      } finally {
        Fn(u), or.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        Fn(_i), Dn(e, t, a, i);
      } finally {
        Fn(u), or.transition = s;
      }
    }
    function Dn(e, t, a, i) {
      Rt && js(e, t, a, i);
    }
    function js(e, t, a, i) {
      var u = To(e, t, a, i);
      if (u === null) {
        By(e, t, i, Oi, a), Id(e, i);
        return;
      }
      if (wy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Id(e, i), t & _a && sh(e)) {
        for (; u !== null; ) {
          var s = Oo(u);
          s !== null && Ty(s);
          var f = To(e, t, a, i);
          if (f === null && By(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      By(e, t, i, null, a);
    }
    var Oi = null;
    function To(e, t, a, i) {
      Oi = null;
      var u = Sd(i), s = Qs(u);
      if (s !== null) {
        var f = fa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Me) {
            var v = wi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var S = f.stateNode;
            if (uf(S))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function cf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Or;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = Lc();
          switch (t) {
            case ds:
              return Or;
            case Nl:
              return _i;
            case qi:
            case Ry:
              return La;
            case yu:
              return za;
            default:
              return La;
          }
        }
        default:
          return La;
      }
    }
    function Fs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ea(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Gd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function wo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, xo = null, Mu = null;
    function Fl(e) {
      return ya = e, xo = Hs(), !0;
    }
    function ff() {
      ya = null, xo = null, Mu = null;
    }
    function Zi() {
      if (Mu)
        return Mu;
      var e, t = xo, a = t.length, i, u = Hs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Mu = u.slice(e, p), Mu;
    }
    function Hs() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Hl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function Ps() {
      return !1;
    }
    function Tr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = bo : this.isDefaultPrevented = Ps, this.isPropagationStopped = Ps, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: bo
      }), t;
    }
    var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Mi = Tr(Pn), Lr = rt({}, Pn, {
      view: 0,
      detail: 0
    }), ta = Tr(Lr), df, Vs, Nu;
    function by(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (df = e.screenX - Nu.screenX, Vs = e.screenY - Nu.screenY) : (df = 0, Vs = 0), Nu = e);
    }
    var li = rt({}, Lr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (by(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Vs;
      }
    }), qd = Tr(li), Xd = rt({}, li, {
      dataTransfer: 0
    }), Lu = Tr(Xd), Kd = rt({}, Lr, {
      relatedTarget: 0
    }), el = Tr(Kd), fh = rt({}, Pn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dh = Tr(fh), Jd = rt({}, Pn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = Tr(Jd), _y = rt({}, Pn, {
      data: 0
    }), ph = Tr(_y), vh = ph, hh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, zu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Dy(e) {
      if (e.key) {
        var t = hh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Hl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? zu[e.keyCode] || "Unidentified" : "";
    }
    var _o = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function mh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = _o[e];
      return i ? !!a[i] : !1;
    }
    function vn(e) {
      return mh;
    }
    var ky = rt({}, Lr, {
      key: Dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Hl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), yh = Tr(ky), Oy = rt({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), gh = Tr(Oy), Sh = rt({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vn
    }), Eh = Tr(Sh), My = rt({}, Pn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = Tr(My), Zd = rt({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ny = Tr(Zd), Pl = [9, 13, 27, 32], Bs = 229, tl = Mn && "CompositionEvent" in window, Vl = null;
    Mn && "documentMode" in document && (Vl = document.documentMode);
    var ep = Mn && "TextEvent" in window && !Vl, vf = Mn && (!tl || Vl && Vl > 8 && Vl <= 11), Ch = 32, hf = String.fromCharCode(Ch);
    function Ly() {
      st("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), st("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), st("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), st("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var tp = !1;
    function Rh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function mf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yf(e, t) {
      return e === "keydown" && t.keyCode === Bs;
    }
    function np(e, t) {
      switch (e) {
        case "keyup":
          return Pl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Th(e) {
      return e.locale === "ko";
    }
    var Uu = !1;
    function rp(e, t, a, i, u) {
      var s, f;
      if (tl ? s = mf(t) : Uu ? np(t, i) && (s = "onCompositionEnd") : yf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      vf && !Th(i) && (!Uu && s === "onCompositionStart" ? Uu = Fl(u) : s === "onCompositionEnd" && Uu && (f = Zi()));
      var p = Oh(a, s);
      if (p.length > 0) {
        var v = new ph(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var S = gf(i);
          S !== null && (v.data = S);
        }
      }
    }
    function Sf(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== Ch ? null : (tp = !0, hf);
        case "textInput":
          var i = t.data;
          return i === hf && tp ? null : i;
        default:
          return null;
      }
    }
    function ap(e, t) {
      if (Uu) {
        if (e === "compositionend" || !tl && np(e, t)) {
          var a = Zi();
          return ff(), Uu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Rh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return vf && !Th(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ef(e, t, a, i, u) {
      var s;
      if (ep ? s = Sf(t, i) : s = ap(t, i), !s)
        return null;
      var f = Oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new vh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function wh(e, t, a, i, u, s, f) {
      rp(e, t, a, i, u), Ef(e, t, a, i, u);
    }
    var zy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ys(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!zy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Uy(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function $s() {
      st("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function xh(e, t, a, i) {
      so(i);
      var u = Oh(t, "onChange");
      if (u.length > 0) {
        var s = new Mi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Bl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      xh(t, n, e, Sd(e)), jv(o, t);
    }
    function o(e) {
      VE(e, 0);
    }
    function c(e) {
      var t = bf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Mn && (m = Uy("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      Bl = e, n = t, Bl.attachEvent("onpropertychange", F);
    }
    function _() {
      Bl && (Bl.detachEvent("onpropertychange", F), Bl = null, n = null);
    }
    function F(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function q(e, t, a) {
      e === "focusin" ? (_(), T(t, a)) : e === "focusout" && _();
    }
    function Z(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function G(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ve(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ee(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Te(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ue(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, S;
      if (r(p) ? v = d : Ys(p) ? m ? v = Ee : (v = Z, S = q) : G(p) && (v = ve), v) {
        var R = v(t, a);
        if (R) {
          xh(e, R, i, u);
          return;
        }
      }
      S && S(t, p, a), t === "focusout" && Te(p);
    }
    function N() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function k(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ls(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (Qs(S) || gp(S)))
          return;
      }
      if (!(!v && !p)) {
        var R;
        if (u.window === u)
          R = u;
        else {
          var O = u.ownerDocument;
          O ? R = O.defaultView || O.parentWindow : R = window;
        }
        var D, A;
        if (v) {
          var H = i.relatedTarget || i.toElement;
          if (D = a, A = H ? Qs(H) : null, A !== null) {
            var B = fa(A);
            (A !== B || A.tag !== oe && A.tag !== Xe) && (A = null);
          }
        } else
          D = null, A = a;
        if (D !== A) {
          var de = qd, Ae = "onMouseLeave", De = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = gh, Ae = "onPointerLeave", De = "onPointerEnter", wt = "pointer");
          var gt = D == null ? R : bf(D), L = A == null ? R : bf(A), Y = new de(Ae, wt + "leave", D, i, u);
          Y.target = gt, Y.relatedTarget = L;
          var z = null, ee = Qs(u);
          if (ee === a) {
            var me = new de(De, wt + "enter", A, i, u);
            me.target = L, me.relatedTarget = gt, z = me;
          }
          nw(e, Y, z, D, A);
        }
      }
    }
    function U(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var X = typeof Object.is == "function" ? Object.is : U;
    function Ce(e, t) {
      if (X(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !X(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function We(e, t) {
      for (var a = je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = je(Pe(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, S = 0, R = e, O = null;
      e: for (; ; ) {
        for (var D = null; R === t && (a === 0 || R.nodeType === $i) && (f = s + a), R === i && (u === 0 || R.nodeType === $i) && (p = s + u), R.nodeType === $i && (s += R.nodeValue.length), (D = R.firstChild) !== null; )
          O = R, R = D;
        for (; ; ) {
          if (R === e)
            break e;
          if (O === t && ++v === a && (f = s), O === i && ++S === u && (p = s), (D = R.nextSibling) !== null)
            break;
          R = O, O = R.parentNode;
        }
        R = D;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Yl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var S = We(e, f), R = We(e, p);
        if (S && R) {
          if (u.rangeCount === 1 && u.anchorNode === S.node && u.anchorOffset === S.offset && u.focusNode === R.node && u.focusOffset === R.offset)
            return;
          var O = a.createRange();
          O.setStart(S.node, S.offset), u.removeAllRanges(), f > p ? (u.addRange(O), u.extend(R.node, R.offset)) : (O.setEnd(R.node, R.offset), u.addRange(O));
        }
      }
    }
    function bh(e) {
      return e && e.nodeType === $i;
    }
    function OE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : bh(e) ? !1 : bh(t) ? OE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function FT(e) {
      return e && e.ownerDocument && OE(e.ownerDocument.documentElement, e);
    }
    function HT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function ME() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (HT(t))
          e = t.contentWindow;
        else
          return t;
        t = ba(e.document);
      }
      return t;
    }
    function Ay(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function PT() {
      var e = ME();
      return {
        focusedElem: e,
        selectionRange: Ay(e) ? BT(e) : null
      };
    }
    function VT(e) {
      var t = ME(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && FT(a)) {
        i !== null && Ay(a) && YT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Ir && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function BT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function YT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Yl(e, t);
    }
    var $T = Mn && "documentMode" in document && document.documentMode <= 11;
    function IT() {
      st("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, jy = null, ip = null, Fy = !1;
    function WT(e) {
      if ("selectionStart" in e && Ay(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function QT(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function NE(e, t, a) {
      var i = QT(a);
      if (!(Fy || Cf == null || Cf !== ba(i))) {
        var u = WT(Cf);
        if (!ip || !Ce(ip, u)) {
          ip = u;
          var s = Oh(jy, "onSelect");
          if (s.length > 0) {
            var f = new Mi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Cf;
          }
        }
      }
    }
    function GT(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ys(p) || p.contentEditable === "true") && (Cf = p, jy = a, ip = null);
          break;
        case "focusout":
          Cf = null, jy = null, ip = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Fy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fy = !1, NE(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if ($T)
            break;
        // falls through
        case "keydown":
        case "keyup":
          NE(e, i, u);
      }
    }
    function _h(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rf = {
      animationend: _h("Animation", "AnimationEnd"),
      animationiteration: _h("Animation", "AnimationIteration"),
      animationstart: _h("Animation", "AnimationStart"),
      transitionend: _h("Transition", "TransitionEnd")
    }, Hy = {}, LE = {};
    Mn && (LE = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
    function Dh(e) {
      if (Hy[e])
        return Hy[e];
      if (!Rf[e])
        return e;
      var t = Rf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in LE)
          return Hy[e] = t[a];
      return e;
    }
    var zE = Dh("animationend"), UE = Dh("animationiteration"), AE = Dh("animationstart"), jE = Dh("transitionend"), FE = /* @__PURE__ */ new Map(), HE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Do(e, t) {
      FE.set(e, t), st(t, [e]);
    }
    function qT() {
      for (var e = 0; e < HE.length; e++) {
        var t = HE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Do(a, "on" + i);
      }
      Do(zE, "onAnimationEnd"), Do(UE, "onAnimationIteration"), Do(AE, "onAnimationStart"), Do("dblclick", "onDoubleClick"), Do("focusin", "onFocus"), Do("focusout", "onBlur"), Do(jE, "onTransitionEnd");
    }
    function XT(e, t, a, i, u, s, f) {
      var p = FE.get(t);
      if (p !== void 0) {
        var v = Mi, S = t;
        switch (t) {
          case "keypress":
            if (Hl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = yh;
            break;
          case "focusin":
            S = "focus", v = el;
            break;
          case "focusout":
            S = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = qd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Eh;
            break;
          case zE:
          case UE:
          case AE:
            v = dh;
            break;
          case jE:
            v = Aa;
            break;
          case "scroll":
            v = ta;
            break;
          case "wheel":
            v = Ny;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = gh;
            break;
        }
        var R = (s & _a) !== 0;
        {
          var O = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", D = ew(a, p, i.type, R, O);
          if (D.length > 0) {
            var A = new v(p, S, null, i, u);
            e.push({
              event: A,
              listeners: D
            });
          }
        }
      }
    }
    qT(), N(), $s(), IT(), Ly();
    function KT(e, t, a, i, u, s, f) {
      XT(e, t, a, i, u, s);
      var p = (s & gd) === 0;
      p && (k(e, t, a, i, u), kn(e, t, a, i, u), GT(e, t, a, i, u), wh(e, t, a, i, u));
    }
    var lp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Py = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(lp));
    function PE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function JT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          PE(e, v, p), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var R = t[S], O = R.instance, D = R.currentTarget, A = R.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          PE(e, A, D), i = O;
        }
    }
    function VE(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        JT(s, f, a);
      }
      ss();
    }
    function ZT(e, t, a, i, u) {
      var s = Sd(a), f = [];
      KT(f, e, i, a, s, t), VE(f, t);
    }
    function Sn(e, t) {
      Py.has(e) || C('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kx(t), u = rw(e);
      i.has(u) || (BE(t, e, Ec, a), i.add(u));
    }
    function Vy(e, t, a) {
      Py.has(e) && !t && C('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), BE(a, e, i, t);
    }
    var kh = "_reactListening" + Math.random().toString(36).slice(2);
    function up(e) {
      if (!e[kh]) {
        e[kh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (Py.has(a) || Vy(a, !1, e), Vy(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[kh] || (t[kh] = !0, Vy("selectionchange", !1, t)));
      }
    }
    function BE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Gd(e, t, s, f) : ea(e, t, s) : f !== void 0 ? wo(e, t, s, f) : Fs(e, t, s);
    }
    function YE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function By(e, t, a, i, u) {
      var s = i;
      if (!(t & yd) && !(t & Ec)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === Se) {
              var S = p.stateNode.containerInfo;
              if (YE(S, f))
                break;
              if (v === Se)
                for (var R = p.return; R !== null; ) {
                  var O = R.tag;
                  if (O === J || O === Se) {
                    var D = R.stateNode.containerInfo;
                    if (YE(D, f))
                      return;
                  }
                  R = R.return;
                }
              for (; S !== null; ) {
                var A = Qs(S);
                if (A === null)
                  return;
                var H = A.tag;
                if (H === oe || H === Xe) {
                  p = s = A;
                  continue e;
                }
                S = S.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      jv(function() {
        return ZT(e, t, a, s);
      });
    }
    function op(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ew(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], S = e, R = null; S !== null; ) {
        var O = S, D = O.stateNode, A = O.tag;
        if (A === oe && D !== null && (R = D, p !== null)) {
          var H = bl(S, p);
          H != null && v.push(op(S, H, R));
        }
        if (u)
          break;
        S = S.return;
      }
      return v;
    }
    function Oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, S = bl(u, a);
          S != null && i.unshift(op(u, S, v));
          var R = bl(u, t);
          R != null && i.push(op(u, R, v));
        }
        u = u.return;
      }
      return i;
    }
    function Tf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function tw(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Tf(s))
        u++;
      for (var f = 0, p = i; p; p = Tf(p))
        f++;
      for (; u - f > 0; )
        a = Tf(a), u--;
      for (; f - u > 0; )
        i = Tf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Tf(a), i = Tf(i);
      }
      return null;
    }
    function $E(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, S = v.alternate, R = v.stateNode, O = v.tag;
        if (S !== null && S === i)
          break;
        if (O === oe && R !== null) {
          var D = R;
          if (u) {
            var A = bl(p, s);
            A != null && f.unshift(op(p, A, D));
          } else if (!u) {
            var H = bl(p, s);
            H != null && f.push(op(p, H, D));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function nw(e, t, a, i, u) {
      var s = i && u ? tw(i, u) : null;
      i !== null && $E(e, t, i, s, !1), u !== null && a !== null && $E(e, a, u, s, !0);
    }
    function rw(e, t) {
      return e + "__bubble";
    }
    var ja = !1, sp = "dangerouslySetInnerHTML", Mh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", IE = "autoFocus", Is = "children", Ws = "style", Nh = "__html", Yy, Lh, cp, WE, zh, QE, GE;
    Yy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Lh = function(e, t) {
      vd(e, t), gc(e, t), zv(e, t, {
        registrationNameDependencies: nt,
        possibleRegistrationNames: it
      });
    }, QE = Mn && !document.documentMode, cp = function(e, t, a) {
      if (!ja) {
        var i = Uh(a), u = Uh(t);
        u !== i && (ja = !0, C("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, WE = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), C("Extra attributes from the server: %s", t);
      }
    }, zh = function(e, t) {
      t === !1 ? C("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : C("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, GE = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var aw = /\r\n?/g, iw = /\u0000|\uFFFD/g;
    function Uh(e) {
      Xn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(aw, `
`).replace(iw, "");
    }
    function Ah(e, t, a, i) {
      var u = Uh(t), s = Uh(e);
      if (s !== u && (i && (ja || (ja = !0, C('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function qE(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function lw() {
    }
    function jh(e) {
      e.onclick = lw;
    }
    function uw(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ws)
            f && Object.freeze(f), Dv(t, f);
          else if (s === sp) {
            var p = f ? f[Nh] : void 0;
            p != null && mv(t, p);
          } else if (s === Is)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && io(t, f);
            } else typeof f == "number" && io(t, "" + f);
          else s === Mh || s === ko || s === IE || (nt.hasOwnProperty(s) ? f != null && (typeof f != "function" && zh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && xr(t, s, f, u));
        }
    }
    function ow(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ws ? Dv(e, f) : s === sp ? mv(e, f) : s === Is ? io(e, f) : xr(e, s, f, i);
      }
    }
    function sw(e, t, a, i) {
      var u, s = qE(a), f, p = i;
      if (p === Yi && (p = ud(e)), p === Yi) {
        if (u = wl(e, t), !u && e !== e.toLowerCase() && C("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var S = v.firstChild;
          f = v.removeChild(S);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var R = f;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Yi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(Yy, e) && (Yy[e] = !0, C("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function cw(e, t) {
      return qE(t).createTextNode(e);
    }
    function fw(e, t, a, i) {
      var u = wl(t, a);
      Lh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < lp.length; f++)
            Sn(lp[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Za(e, a), s = ao(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          su(e, a), s = Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          ad(e, a), s = rd(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), uw(t, e, i, s, u), t) {
        case "input":
          Ja(e), j(e, a, !1);
          break;
        case "textarea":
          Ja(e), vv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          td(e, a);
          break;
        default:
          typeof s.onClick == "function" && jh(e);
          break;
      }
    }
    function dw(e, t, a, i, u) {
      Lh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ao(e, a), p = ao(e, i), s = [];
          break;
        case "select":
          f = Zo(e, a), p = Zo(e, i), s = [];
          break;
        case "textarea":
          f = rd(e, a), p = rd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && jh(e);
          break;
      }
      mc(t, p);
      var v, S, R = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ws) {
            var O = f[v];
            for (S in O)
              O.hasOwnProperty(S) && (R || (R = {}), R[S] = "");
          } else v === sp || v === Is || v === Mh || v === ko || v === IE || (nt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var D = p[v], A = f?.[v];
        if (!(!p.hasOwnProperty(v) || D === A || D == null && A == null))
          if (v === Ws)
            if (D && Object.freeze(D), A) {
              for (S in A)
                A.hasOwnProperty(S) && (!D || !D.hasOwnProperty(S)) && (R || (R = {}), R[S] = "");
              for (S in D)
                D.hasOwnProperty(S) && A[S] !== D[S] && (R || (R = {}), R[S] = D[S]);
            } else
              R || (s || (s = []), s.push(v, R)), R = D;
          else if (v === sp) {
            var H = D ? D[Nh] : void 0, B = A ? A[Nh] : void 0;
            H != null && B !== H && (s = s || []).push(v, H);
          } else v === Is ? (typeof D == "string" || typeof D == "number") && (s = s || []).push(v, "" + D) : v === Mh || v === ko || (nt.hasOwnProperty(v) ? (D != null && (typeof D != "function" && zh(v, D), v === "onScroll" && Sn("scroll", e)), !s && A !== D && (s = [])) : (s = s || []).push(v, D));
      }
      return R && (my(R, p[Ws]), (s = s || []).push(Ws, R)), s;
    }
    function pw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = wl(a, i), f = wl(a, u);
      switch (ow(e, t, s, f), a) {
        case "input":
          w(e, u);
          break;
        case "textarea":
          pv(e, u);
          break;
        case "select":
          pc(e, u);
          break;
      }
    }
    function vw(e) {
      {
        var t = e.toLowerCase();
        return as.hasOwnProperty(t) && as[t] || null;
      }
    }
    function hw(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = wl(t, a), Lh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < lp.length; S++)
            Sn(lp[S], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Za(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          su(e, a), Sn("invalid", e);
          break;
        case "textarea":
          ad(e, a), Sn("invalid", e);
          break;
      }
      mc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var R = e.attributes, O = 0; O < R.length; O++) {
          var D = R[O].name.toLowerCase();
          switch (D) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(R[O].name);
          }
        }
      }
      var A = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var B = a[H];
          if (H === Is)
            typeof B == "string" ? e.textContent !== B && (a[ko] !== !0 && Ah(e.textContent, B, s, f), A = [Is, B]) : typeof B == "number" && e.textContent !== "" + B && (a[ko] !== !0 && Ah(e.textContent, B, s, f), A = [Is, "" + B]);
          else if (nt.hasOwnProperty(H))
            B != null && (typeof B != "function" && zh(H, B), H === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, Ae = tn(H);
            if (a[ko] !== !0) {
              if (!(H === Mh || H === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === sp) {
                  var De = e.innerHTML, wt = B ? B[Nh] : void 0;
                  if (wt != null) {
                    var gt = GE(e, wt);
                    gt !== De && cp(H, De, gt);
                  }
                } else if (H === Ws) {
                  if (v.delete(H), QE) {
                    var L = vy(B);
                    de = e.getAttribute("style"), L !== de && cp(H, de, L);
                  }
                } else if (p)
                  v.delete(H.toLowerCase()), de = nu(e, H, B), B !== de && cp(H, de, B);
                else if (!hn(H, Ae, p) && !Kn(H, B, Ae, p)) {
                  var Y = !1;
                  if (Ae !== null)
                    v.delete(Ae.attributeName), de = hl(e, H, B, Ae);
                  else {
                    var z = i;
                    if (z === Yi && (z = ud(t)), z === Yi)
                      v.delete(H.toLowerCase());
                    else {
                      var ee = vw(H);
                      ee !== null && ee !== H && (Y = !0, v.delete(ee)), v.delete(H);
                    }
                    de = nu(e, H, B);
                  }
                  var me = M;
                  !me && B !== de && !Y && cp(H, de, B);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && WE(v), t) {
        case "input":
          Ja(e), j(e, a, !0);
          break;
        case "textarea":
          Ja(e), vv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jh(e);
          break;
      }
      return A;
    }
    function mw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function $y(e, t) {
      {
        if (ja)
          return;
        ja = !0, C("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t) {
      {
        if (ja)
          return;
        ja = !0, C('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Wy(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, C("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Qy(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, C('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function yw(e, t, a) {
      switch (t) {
        case "input":
          V(e, a);
          return;
        case "textarea":
          cy(e, a);
          return;
        case "select":
          nd(e, a);
          return;
      }
    }
    var fp = function() {
    }, dp = function() {
    };
    {
      var gw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], XE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Sw = XE.concat(["button"]), Ew = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], KE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      dp = function(e, t) {
        var a = rt({}, e || KE), i = {
          tag: t
        };
        return XE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Sw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), gw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Cw = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Ew.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Rw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, JE = {};
      fp = function(e, t, a) {
        a = a || KE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && C("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Cw(e, u) ? null : i, f = s ? null : Rw(e, a), p = s || f;
        if (p) {
          var v = p.tag, S = !!s + "|" + e + "|" + v;
          if (!JE[S]) {
            JE[S] = !0;
            var R = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var D = "";
              v === "table" && e === "tr" && (D += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), C("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, v, O, D);
            } else
              C("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, v);
          }
        }
      };
    }
    var Fh = "suppressHydrationWarning", Hh = "$", Ph = "/$", pp = "$?", vp = "$!", Tw = "style", Gy = null, qy = null;
    function ww(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case sd: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : od(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = od(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = dp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function xw(e, t, a) {
      {
        var i = e, u = od(i.namespace, t), s = dp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function tO(e) {
      return e;
    }
    function bw(e) {
      Gy = Hn(), qy = PT();
      var t = null;
      return Gn(!1), t;
    }
    function _w(e) {
      VT(qy), Gn(Gy), Gy = null, qy = null;
    }
    function Dw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (fp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = dp(f.ancestorInfo, e);
          fp(null, p, v);
        }
        s = f.namespace;
      }
      var S = sw(e, t, a, s);
      return yp(u, S), rg(S, t), S;
    }
    function kw(e, t) {
      e.appendChild(t);
    }
    function Ow(e, t, a, i, u) {
      switch (fw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Mw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = dp(f.ancestorInfo, t);
          fp(null, p, v);
        }
      }
      return dw(e, t, a, i);
    }
    function Xy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Nw(e, t, a, i) {
      {
        var u = a;
        fp(null, e, u.ancestorInfo);
      }
      var s = cw(e, t);
      return yp(i, s), s;
    }
    function Lw() {
      var e = window.event;
      return e === void 0 ? La : cf(e.type);
    }
    var Ky = typeof setTimeout == "function" ? setTimeout : void 0, zw = typeof clearTimeout == "function" ? clearTimeout : void 0, Jy = -1, ZE = typeof Promise == "function" ? Promise : void 0, Uw = typeof queueMicrotask == "function" ? queueMicrotask : typeof ZE < "u" ? function(e) {
      return ZE.resolve(null).then(e).catch(Aw);
    } : Ky;
    function Aw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function jw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Fw(e, t, a, i, u, s) {
      pw(e, t, a, i, u), rg(e, u);
    }
    function e0(e) {
      io(e, "");
    }
    function Hw(e, t, a) {
      e.nodeValue = a;
    }
    function Pw(e, t) {
      e.appendChild(t);
    }
    function Vw(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && jh(a);
    }
    function Bw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Yw(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $w(e, t) {
      e.removeChild(t);
    }
    function Iw(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Zy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === Ph)
            if (i === 0) {
              e.removeChild(u), Ou(t);
              return;
            } else
              i--;
          else (s === Hh || s === pp || s === vp) && i++;
        }
        a = u;
      } while (a);
      Ou(t);
    }
    function Ww(e, t) {
      e.nodeType === Ln ? Zy(e.parentNode, t) : e.nodeType === Ir && Zy(e, t), Ou(e);
    }
    function Qw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Gw(e) {
      e.nodeValue = "";
    }
    function qw(e, t) {
      e = e;
      var a = t[Tw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = hc("display", i);
    }
    function Xw(e, t) {
      e.nodeValue = t;
    }
    function Kw(e) {
      e.nodeType === Ir ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function Jw(e, t, a) {
      return e.nodeType !== Ir || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zw(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function ex(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function t0(e) {
      return e.data === pp;
    }
    function eg(e) {
      return e.data === vp;
    }
    function tx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function nx(e, t) {
      e._reactRetry = t;
    }
    function Vh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ir || t === $i)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === Hh || a === vp || a === pp)
            break;
          if (a === Ph)
            return null;
        }
      }
      return e;
    }
    function hp(e) {
      return Vh(e.nextSibling);
    }
    function rx(e) {
      return Vh(e.firstChild);
    }
    function ax(e) {
      return Vh(e.firstChild);
    }
    function ix(e) {
      return Vh(e.nextSibling);
    }
    function lx(e, t, a, i, u, s, f) {
      yp(s, e), rg(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var S = (s.mode & ft) !== Le;
      return hw(e, t, a, p, i, S, f);
    }
    function ux(e, t, a, i) {
      return yp(a, e), a.mode & ft, mw(e, t);
    }
    function ox(e, t) {
      yp(t, e);
    }
    function sx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Ph) {
            if (a === 0)
              return hp(t);
            a--;
          } else (i === Hh || i === vp || i === pp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function n0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Hh || i === vp || i === pp) {
            if (a === 0)
              return t;
            a--;
          } else i === Ph && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function cx(e) {
      Ou(e);
    }
    function fx(e) {
      Ou(e);
    }
    function dx(e) {
      return e !== "head" && e !== "body";
    }
    function px(e, t, a, i) {
      var u = !0;
      Ah(t.nodeValue, a, i, u);
    }
    function vx(e, t, a, i, u, s) {
      if (t[Fh] !== !0) {
        var f = !0;
        Ah(i.nodeValue, u, s, f);
      }
    }
    function hx(e, t) {
      t.nodeType === Ir ? $y(e, t) : t.nodeType === Ln || Iy(e, t);
    }
    function mx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ir ? $y(a, t) : t.nodeType === Ln || Iy(a, t));
      }
    }
    function yx(e, t, a, i, u) {
      (u || t[Fh] !== !0) && (i.nodeType === Ir ? $y(a, i) : i.nodeType === Ln || Iy(a, i));
    }
    function gx(e, t, a) {
      Wy(e, t);
    }
    function Sx(e, t) {
      Qy(e, t);
    }
    function Ex(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Wy(i, t);
      }
    }
    function Cx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Qy(a, t);
      }
    }
    function Rx(e, t, a, i, u, s) {
      (s || t[Fh] !== !0) && Wy(a, i);
    }
    function Tx(e, t, a, i, u) {
      (u || t[Fh] !== !0) && Qy(a, i);
    }
    function wx(e) {
      C("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xx(e) {
      up(e);
    }
    var wf = Math.random().toString(36).slice(2), xf = "__reactFiber$" + wf, tg = "__reactProps$" + wf, mp = "__reactContainer$" + wf, ng = "__reactEvents$" + wf, bx = "__reactListeners$" + wf, _x = "__reactHandles$" + wf;
    function Dx(e) {
      delete e[xf], delete e[tg], delete e[ng], delete e[bx], delete e[_x];
    }
    function yp(e, t) {
      t[xf] = e;
    }
    function Bh(e, t) {
      t[mp] = e;
    }
    function r0(e) {
      e[mp] = null;
    }
    function gp(e) {
      return !!e[mp];
    }
    function Qs(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[mp] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = n0(e); u !== null; ) {
              var s = u[xf];
              if (s)
                return s;
              u = n0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Oo(e) {
      var t = e[xf] || e[mp];
      return t && (t.tag === oe || t.tag === Xe || t.tag === Me || t.tag === J) ? t : null;
    }
    function bf(e) {
      if (e.tag === oe || e.tag === Xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[tg] || null;
    }
    function rg(e, t) {
      e[tg] = t;
    }
    function kx(e) {
      var t = e[ng];
      return t === void 0 && (t = e[ng] = /* @__PURE__ */ new Set()), t;
    }
    var a0 = {}, i0 = y.ReactDebugCurrentFrame;
    function $h(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        i0.setExtraStackFrame(a);
      } else
        i0.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              p = S;
            }
            p && !(p instanceof Error) && ($h(u), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), $h(null)), p instanceof Error && !(p.message in a0) && (a0[p.message] = !0, $h(u), C("Failed %s type: %s", a, p.message), $h(null));
          }
      }
    }
    var ag = [], Ih;
    Ih = [];
    var Au = -1;
    function Mo(e) {
      return {
        current: e
      };
    }
    function na(e, t) {
      if (Au < 0) {
        C("Unexpected pop.");
        return;
      }
      t !== Ih[Au] && C("Unexpected Fiber popped."), e.current = ag[Au], ag[Au] = null, Ih[Au] = null, Au--;
    }
    function ra(e, t, a) {
      Au++, ag[Au] = e.current, Ih[Au] = a, e.current = t;
    }
    var ig;
    ig = {};
    var ui = {};
    Object.freeze(ui);
    var ju = Mo(ui), $l = Mo(!1), lg = ui;
    function _f(e, t, a) {
      return a && Il(t) ? lg : ju.current;
    }
    function l0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Df(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Qe(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && l0(e, t, s), s;
      }
    }
    function Wh() {
      return $l.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Qh(e) {
      na($l, e), na(ju, e);
    }
    function ug(e) {
      na($l, e), na(ju, e);
    }
    function u0(e, t, a) {
      {
        if (ju.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ra(ju, t, e), ra($l, a, e);
      }
    }
    function o0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            ig[s] || (ig[s] = !0, C("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Qe(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Gh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return lg = ju.current, ra(ju, a, e), ra($l, $l.current, e), !0;
      }
    }
    function s0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = o0(e, t, lg);
          i.__reactInternalMemoizedMergedChildContext = u, na($l, e), na(ju, e), ra(ju, u, e), ra($l, a, e);
        } else
          na($l, e), ra($l, a, e);
      }
    }
    function Ox(e) {
      {
        if (!mu(e) || e.tag !== K)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case K: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var No = 0, qh = 1, Fu = null, og = !1, sg = !1;
    function c0(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function Mx(e) {
      og = !0, c0(e);
    }
    function f0() {
      og && Lo();
    }
    function Lo() {
      if (!sg && Fu !== null) {
        sg = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Fu;
          for (Fn(Or); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, og = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), Cd(ds, Lo), s;
        } finally {
          Fn(t), sg = !1;
        }
      }
      return null;
    }
    var kf = [], Of = 0, Xh = null, Kh = 0, Ni = [], Li = 0, Gs = null, Hu = 1, Pu = "";
    function Nx(e) {
      return Xs(), (e.flags & Ri) !== Ne;
    }
    function Lx(e) {
      return Xs(), Kh;
    }
    function zx() {
      var e = Pu, t = Hu, a = t & ~Ux(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Xs(), kf[Of++] = Kh, kf[Of++] = Xh, Xh = e, Kh = t;
    }
    function d0(e, t, a) {
      Xs(), Ni[Li++] = Hu, Ni[Li++] = Pu, Ni[Li++] = Gs, Gs = e;
      var i = Hu, u = Pu, s = Jh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Jh(t) + s;
      if (v > 30) {
        var S = s - s % 5, R = (1 << S) - 1, O = (f & R).toString(32), D = f >> S, A = s - S, H = Jh(t) + A, B = p << A, de = B | D, Ae = O + u;
        Hu = 1 << H | de, Pu = Ae;
      } else {
        var De = p << s, wt = De | f, gt = u;
        Hu = 1 << v | wt, Pu = gt;
      }
    }
    function cg(e) {
      Xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        qs(e, a), d0(e, a, i);
      }
    }
    function Jh(e) {
      return 32 - An(e);
    }
    function Ux(e) {
      return 1 << Jh(e) - 1;
    }
    function fg(e) {
      for (; e === Xh; )
        Xh = kf[--Of], kf[Of] = null, Kh = kf[--Of], kf[Of] = null;
      for (; e === Gs; )
        Gs = Ni[--Li], Ni[Li] = null, Pu = Ni[--Li], Ni[Li] = null, Hu = Ni[--Li], Ni[Li] = null;
    }
    function Ax() {
      return Xs(), Gs !== null ? {
        id: Hu,
        overflow: Pu
      } : null;
    }
    function jx(e, t) {
      Xs(), Ni[Li++] = Hu, Ni[Li++] = Pu, Ni[Li++] = Gs, Hu = t.id, Pu = t.overflow, Gs = e;
    }
    function Xs() {
      Ur() || C("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, zi = null, rl = !1, Ks = !1, zo = null;
    function Fx() {
      rl && C("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function p0() {
      Ks = !0;
    }
    function Hx() {
      return Ks;
    }
    function Px(e) {
      var t = e.stateNode.containerInfo;
      return zi = ax(t), zr = e, rl = !0, zo = null, Ks = !1, !0;
    }
    function Vx(e, t, a) {
      return zi = ix(t), zr = e, rl = !0, zo = null, Ks = !1, a !== null && jx(e, a), !0;
    }
    function v0(e, t) {
      switch (e.tag) {
        case J: {
          hx(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & ft) !== Le;
          yx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Me: {
          var i = e.memoizedState;
          i.dehydrated !== null && mx(i.dehydrated, t);
          break;
        }
      }
    }
    function h0(e, t) {
      v0(e, t);
      var a = I_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function dg(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, gx(a, i);
                break;
              case Xe:
                var u = t.pendingProps;
                Sx(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, S = t.pendingProps, R = (e.mode & ft) !== Le;
                Rx(
                  s,
                  f,
                  p,
                  v,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case Xe: {
                var O = t.pendingProps, D = (e.mode & ft) !== Le;
                Tx(
                  s,
                  f,
                  p,
                  O,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
            }
            break;
          }
          case Me: {
            var A = e.memoizedState, H = A.dehydrated;
            if (H !== null) switch (t.tag) {
              case oe:
                var B = t.type;
                t.pendingProps, Ex(H, B);
                break;
              case Xe:
                var de = t.pendingProps;
                Cx(H, de);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function m0(e, t) {
      t.flags = t.flags & -4097 | wn, dg(e, t);
    }
    function y0(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = Jw(t, a);
          return i !== null ? (e.stateNode = i, zr = e, zi = rx(i), !0) : !1;
        }
        case Xe: {
          var u = e.pendingProps, s = Zw(t, u);
          return s !== null ? (e.stateNode = s, zr = e, zi = null, !0) : !1;
        }
        case Me: {
          var f = ex(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ax(),
              retryLane: ha
            };
            e.memoizedState = p;
            var v = W_(f);
            return v.return = e, e.child = v, zr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function pg(e) {
      return (e.mode & ft) !== Le && (e.flags & Oe) === Ne;
    }
    function vg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function hg(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          pg(e) && (dg(zr, e), vg()), m0(zr, e), rl = !1, zr = e;
          return;
        }
        var a = t;
        if (!y0(e, t)) {
          pg(e) && (dg(zr, e), vg()), t = hp(a);
          var i = zr;
          if (!t || !y0(e, t)) {
            m0(zr, e), rl = !1, zr = e;
            return;
          }
          h0(i, a);
        }
      }
    }
    function Bx(e, t, a) {
      var i = e.stateNode, u = !Ks, s = lx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Yx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ux(t, a, e);
      if (i) {
        var u = zr;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & ft) !== Le;
              px(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, S = u.stateNode, R = (u.mode & ft) !== Le;
              vx(
                p,
                v,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function $x(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ox(a, e);
    }
    function Ix(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return sx(a);
    }
    function g0(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== J && t.tag !== Me; )
        t = t.return;
      zr = t;
    }
    function Zh(e) {
      if (e !== zr)
        return !1;
      if (!rl)
        return g0(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== oe || dx(e.type) && !Xy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (pg(e))
            S0(e), vg();
          else
            for (; t; )
              h0(e, t), t = hp(t);
      }
      return g0(e), e.tag === Me ? zi = Ix(e) : zi = zr ? hp(e.stateNode) : null, !0;
    }
    function Wx() {
      return rl && zi !== null;
    }
    function S0(e) {
      for (var t = zi; t; )
        v0(e, t), t = hp(t);
    }
    function Mf() {
      zr = null, zi = null, rl = !1, Ks = !1;
    }
    function E0() {
      zo !== null && (pR(zo), zo = null);
    }
    function Ur() {
      return rl;
    }
    function mg(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var Qx = y.ReactCurrentBatchConfig, Gx = null;
    function qx() {
      return Qx.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Xx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], wp = [], Zs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && Ep.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Cp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Rp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Tp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && wp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(D) {
          e.add(Qe(D) || "Component"), Zs.add(D.type);
        }), Sp = []);
        var t = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(D) {
          t.add(Qe(D) || "Component"), Zs.add(D.type);
        }), Ep = []);
        var a = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(D) {
          a.add(Qe(D) || "Component"), Zs.add(D.type);
        }), Cp = []);
        var i = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(D) {
          i.add(Qe(D) || "Component"), Zs.add(D.type);
        }), Rp = []);
        var u = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(D) {
          u.add(Qe(D) || "Component"), Zs.add(D.type);
        }), Tp = []);
        var s = /* @__PURE__ */ new Set();
        if (wp.length > 0 && (wp.forEach(function(D) {
          s.add(Qe(D) || "Component"), Zs.add(D.type);
        }), wp = []), t.size > 0) {
          var f = Js(t);
          C(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Js(i);
          C(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Js(s);
          C(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var S = Js(e);
          ne(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var R = Js(a);
          ne(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (u.size > 0) {
          var O = Js(u);
          ne(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var em = /* @__PURE__ */ new Map(), C0 = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = Xx(e);
        if (a === null) {
          C("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!C0.has(e.type)) {
          var i = em.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], em.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        em.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Qe(s) || "Component"), C0.add(s.type);
            });
            var u = Js(i);
            try {
              It(a), C(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], wp = [], em = /* @__PURE__ */ new Map();
      };
    }
    var yg, gg, Sg, Eg, Cg, R0 = function(e, t) {
    };
    yg = !1, gg = !1, Sg = {}, Eg = {}, Cg = {}, R0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Qe(t) || "Component";
        Eg[a] || (Eg[a] = !0, C('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Kx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function xp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || $) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== K) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Kx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Qe(e) || "Component";
          Sg[u] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), Sg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== K)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var R = function(O) {
            var D = v.refs;
            O === null ? delete D[S] : D[S] = O;
          };
          return R._stringRef = S, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function tm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function nm(e) {
      {
        var t = Qe(e) || "Component";
        if (Cg[t])
          return;
        Cg[t] = !0, C("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function T0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function w0(e) {
      function t(L, Y) {
        if (e) {
          var z = L.deletions;
          z === null ? (L.deletions = [Y], L.flags |= Da) : z.push(Y);
        }
      }
      function a(L, Y) {
        if (!e)
          return null;
        for (var z = Y; z !== null; )
          t(L, z), z = z.sibling;
        return null;
      }
      function i(L, Y) {
        for (var z = /* @__PURE__ */ new Map(), ee = Y; ee !== null; )
          ee.key !== null ? z.set(ee.key, ee) : z.set(ee.index, ee), ee = ee.sibling;
        return z;
      }
      function u(L, Y) {
        var z = oc(L, Y);
        return z.index = 0, z.sibling = null, z;
      }
      function s(L, Y, z) {
        if (L.index = z, !e)
          return L.flags |= Ri, Y;
        var ee = L.alternate;
        if (ee !== null) {
          var me = ee.index;
          return me < Y ? (L.flags |= wn, Y) : me;
        } else
          return L.flags |= wn, Y;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= wn), L;
      }
      function p(L, Y, z, ee) {
        if (Y === null || Y.tag !== Xe) {
          var me = mE(z, L.mode, ee);
          return me.return = L, me;
        } else {
          var pe = u(Y, z);
          return pe.return = L, pe;
        }
      }
      function v(L, Y, z, ee) {
        var me = z.type;
        if (me === di)
          return R(L, Y, z.props.children, ee, z.key);
        if (Y !== null && (Y.elementType === me || // Keep this check inline so it only runs on the false path:
        kR(Y, z) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof me == "object" && me !== null && me.$$typeof === Ge && T0(me) === Y.type)) {
          var pe = u(Y, z.props);
          return pe.ref = xp(L, Y, z), pe.return = L, pe._debugSource = z._source, pe._debugOwner = z._owner, pe;
        }
        var Ie = hE(z, L.mode, ee);
        return Ie.ref = xp(L, Y, z), Ie.return = L, Ie;
      }
      function S(L, Y, z, ee) {
        if (Y === null || Y.tag !== Se || Y.stateNode.containerInfo !== z.containerInfo || Y.stateNode.implementation !== z.implementation) {
          var me = yE(z, L.mode, ee);
          return me.return = L, me;
        } else {
          var pe = u(Y, z.children || []);
          return pe.return = L, pe;
        }
      }
      function R(L, Y, z, ee, me) {
        if (Y === null || Y.tag !== Et) {
          var pe = Io(z, L.mode, ee, me);
          return pe.return = L, pe;
        } else {
          var Ie = u(Y, z);
          return Ie.return = L, Ie;
        }
      }
      function O(L, Y, z) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var ee = mE("" + Y, L.mode, z);
          return ee.return = L, ee;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case br: {
              var me = hE(Y, L.mode, z);
              return me.ref = xp(L, null, Y), me.return = L, me;
            }
            case rr: {
              var pe = yE(Y, L.mode, z);
              return pe.return = L, pe;
            }
            case Ge: {
              var Ie = Y._payload, Je = Y._init;
              return O(L, Je(Ie), z);
            }
          }
          if (ut(Y) || et(Y)) {
            var Xt = Io(Y, L.mode, z, null);
            return Xt.return = L, Xt;
          }
          tm(L, Y);
        }
        return typeof Y == "function" && nm(L), null;
      }
      function D(L, Y, z, ee) {
        var me = Y !== null ? Y.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number")
          return me !== null ? null : p(L, Y, "" + z, ee);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case br:
              return z.key === me ? v(L, Y, z, ee) : null;
            case rr:
              return z.key === me ? S(L, Y, z, ee) : null;
            case Ge: {
              var pe = z._payload, Ie = z._init;
              return D(L, Y, Ie(pe), ee);
            }
          }
          if (ut(z) || et(z))
            return me !== null ? null : R(L, Y, z, ee, null);
          tm(L, z);
        }
        return typeof z == "function" && nm(L), null;
      }
      function A(L, Y, z, ee, me) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var pe = L.get(z) || null;
          return p(Y, pe, "" + ee, me);
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case br: {
              var Ie = L.get(ee.key === null ? z : ee.key) || null;
              return v(Y, Ie, ee, me);
            }
            case rr: {
              var Je = L.get(ee.key === null ? z : ee.key) || null;
              return S(Y, Je, ee, me);
            }
            case Ge:
              var Xt = ee._payload, Ut = ee._init;
              return A(L, Y, z, Ut(Xt), me);
          }
          if (ut(ee) || et(ee)) {
            var qn = L.get(z) || null;
            return R(Y, qn, ee, me, null);
          }
          tm(Y, ee);
        }
        return typeof ee == "function" && nm(Y), null;
      }
      function H(L, Y, z) {
        {
          if (typeof L != "object" || L === null)
            return Y;
          switch (L.$$typeof) {
            case br:
            case rr:
              R0(L, z);
              var ee = L.key;
              if (typeof ee != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(ee);
                break;
              }
              if (!Y.has(ee)) {
                Y.add(ee);
                break;
              }
              C("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ee);
              break;
            case Ge:
              var me = L._payload, pe = L._init;
              H(pe(me), Y, z);
              break;
          }
        }
        return Y;
      }
      function B(L, Y, z, ee) {
        for (var me = null, pe = 0; pe < z.length; pe++) {
          var Ie = z[pe];
          me = H(Ie, me, L);
        }
        for (var Je = null, Xt = null, Ut = Y, qn = 0, At = 0, Vn = null; Ut !== null && At < z.length; At++) {
          Ut.index > At ? (Vn = Ut, Ut = null) : Vn = Ut.sibling;
          var ia = D(L, Ut, z[At], ee);
          if (ia === null) {
            Ut === null && (Ut = Vn);
            break;
          }
          e && Ut && ia.alternate === null && t(L, Ut), qn = s(ia, qn, At), Xt === null ? Je = ia : Xt.sibling = ia, Xt = ia, Ut = Vn;
        }
        if (At === z.length) {
          if (a(L, Ut), Ur()) {
            var Br = At;
            qs(L, Br);
          }
          return Je;
        }
        if (Ut === null) {
          for (; At < z.length; At++) {
            var si = O(L, z[At], ee);
            si !== null && (qn = s(si, qn, At), Xt === null ? Je = si : Xt.sibling = si, Xt = si);
          }
          if (Ur()) {
            var Ca = At;
            qs(L, Ca);
          }
          return Je;
        }
        for (var Ra = i(L, Ut); At < z.length; At++) {
          var la = A(Ra, L, At, z[At], ee);
          la !== null && (e && la.alternate !== null && Ra.delete(la.key === null ? At : la.key), qn = s(la, qn, At), Xt === null ? Je = la : Xt.sibling = la, Xt = la);
        }
        if (e && Ra.forEach(function(Xf) {
          return t(L, Xf);
        }), Ur()) {
          var Qu = At;
          qs(L, Qu);
        }
        return Je;
      }
      function de(L, Y, z, ee) {
        var me = et(z);
        if (typeof me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          z[Symbol.toStringTag] === "Generator" && (gg || C("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), gg = !0), z.entries === me && (yg || C("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), yg = !0);
          var pe = me.call(z);
          if (pe)
            for (var Ie = null, Je = pe.next(); !Je.done; Je = pe.next()) {
              var Xt = Je.value;
              Ie = H(Xt, Ie, L);
            }
        }
        var Ut = me.call(z);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, At = null, Vn = Y, ia = 0, Br = 0, si = null, Ca = Ut.next(); Vn !== null && !Ca.done; Br++, Ca = Ut.next()) {
          Vn.index > Br ? (si = Vn, Vn = null) : si = Vn.sibling;
          var Ra = D(L, Vn, Ca.value, ee);
          if (Ra === null) {
            Vn === null && (Vn = si);
            break;
          }
          e && Vn && Ra.alternate === null && t(L, Vn), ia = s(Ra, ia, Br), At === null ? qn = Ra : At.sibling = Ra, At = Ra, Vn = si;
        }
        if (Ca.done) {
          if (a(L, Vn), Ur()) {
            var la = Br;
            qs(L, la);
          }
          return qn;
        }
        if (Vn === null) {
          for (; !Ca.done; Br++, Ca = Ut.next()) {
            var Qu = O(L, Ca.value, ee);
            Qu !== null && (ia = s(Qu, ia, Br), At === null ? qn = Qu : At.sibling = Qu, At = Qu);
          }
          if (Ur()) {
            var Xf = Br;
            qs(L, Xf);
          }
          return qn;
        }
        for (var rv = i(L, Vn); !Ca.done; Br++, Ca = Ut.next()) {
          var Zl = A(rv, L, Br, Ca.value, ee);
          Zl !== null && (e && Zl.alternate !== null && rv.delete(Zl.key === null ? Br : Zl.key), ia = s(Zl, ia, Br), At === null ? qn = Zl : At.sibling = Zl, At = Zl);
        }
        if (e && rv.forEach(function(TD) {
          return t(L, TD);
        }), Ur()) {
          var RD = Br;
          qs(L, RD);
        }
        return qn;
      }
      function Ae(L, Y, z, ee) {
        if (Y !== null && Y.tag === Xe) {
          a(L, Y.sibling);
          var me = u(Y, z);
          return me.return = L, me;
        }
        a(L, Y);
        var pe = mE(z, L.mode, ee);
        return pe.return = L, pe;
      }
      function De(L, Y, z, ee) {
        for (var me = z.key, pe = Y; pe !== null; ) {
          if (pe.key === me) {
            var Ie = z.type;
            if (Ie === di) {
              if (pe.tag === Et) {
                a(L, pe.sibling);
                var Je = u(pe, z.props.children);
                return Je.return = L, Je._debugSource = z._source, Je._debugOwner = z._owner, Je;
              }
            } else if (pe.elementType === Ie || // Keep this check inline so it only runs on the false path:
            kR(pe, z) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ge && T0(Ie) === pe.type) {
              a(L, pe.sibling);
              var Xt = u(pe, z.props);
              return Xt.ref = xp(L, pe, z), Xt.return = L, Xt._debugSource = z._source, Xt._debugOwner = z._owner, Xt;
            }
            a(L, pe);
            break;
          } else
            t(L, pe);
          pe = pe.sibling;
        }
        if (z.type === di) {
          var Ut = Io(z.props.children, L.mode, ee, z.key);
          return Ut.return = L, Ut;
        } else {
          var qn = hE(z, L.mode, ee);
          return qn.ref = xp(L, Y, z), qn.return = L, qn;
        }
      }
      function wt(L, Y, z, ee) {
        for (var me = z.key, pe = Y; pe !== null; ) {
          if (pe.key === me)
            if (pe.tag === Se && pe.stateNode.containerInfo === z.containerInfo && pe.stateNode.implementation === z.implementation) {
              a(L, pe.sibling);
              var Ie = u(pe, z.children || []);
              return Ie.return = L, Ie;
            } else {
              a(L, pe);
              break;
            }
          else
            t(L, pe);
          pe = pe.sibling;
        }
        var Je = yE(z, L.mode, ee);
        return Je.return = L, Je;
      }
      function gt(L, Y, z, ee) {
        var me = typeof z == "object" && z !== null && z.type === di && z.key === null;
        if (me && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case br:
              return f(De(L, Y, z, ee));
            case rr:
              return f(wt(L, Y, z, ee));
            case Ge:
              var pe = z._payload, Ie = z._init;
              return gt(L, Y, Ie(pe), ee);
          }
          if (ut(z))
            return B(L, Y, z, ee);
          if (et(z))
            return de(L, Y, z, ee);
          tm(L, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" ? f(Ae(L, Y, "" + z, ee)) : (typeof z == "function" && nm(L), a(L, Y));
      }
      return gt;
    }
    var Nf = w0(!0), x0 = w0(!1);
    function Jx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Zx(e, t) {
      for (var a = e.child; a !== null; )
        P_(a, t), a = a.sibling;
    }
    var Rg = Mo(null), Tg;
    Tg = {};
    var rm = null, Lf = null, wg = null, am = !1;
    function im() {
      rm = null, Lf = null, wg = null, am = !1;
    }
    function b0() {
      am = !0;
    }
    function _0() {
      am = !1;
    }
    function D0(e, t, a) {
      ra(Rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Tg && C("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Tg;
    }
    function xg(e, t) {
      var a = Rg.current;
      na(Rg, t), e._currentValue = a;
    }
    function bg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && C("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function e1(e, t, a) {
      t1(e, t, a);
    }
    function t1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === K) {
                var p = bs(a), v = Vu(Kt, p);
                v.tag = um;
                var S = i.updateQueue;
                if (S !== null) {
                  var R = S.shared, O = R.pending;
                  O === null ? v.next = v : (v.next = O.next, O.next = v), R.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var D = i.alternate;
              D !== null && (D.lanes = tt(D.lanes, a)), bg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ht)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var A = i.return;
          if (A === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          A.lanes = tt(A.lanes, a);
          var H = A.alternate;
          H !== null && (H.lanes = tt(H.lanes, a)), bg(A, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var B = u.sibling;
            if (B !== null) {
              B.return = u.return, u = B;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function zf(e, t) {
      rm = e, Lf = null, wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && Pp(), a.firstContext = null);
      }
    }
    function tr(e) {
      am && C("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, rm.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var ec = null;
    function _g(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function n1() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ec = null;
      }
    }
    function k0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, _g(t)) : (a.next = u.next, u.next = a), t.interleaved = a, lm(e, i);
    }
    function r1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, _g(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function a1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, _g(t)) : (a.next = u.next, u.next = a), t.interleaved = a, lm(e, i);
    }
    function Fa(e, t) {
      return lm(e, t);
    }
    var i1 = lm;
    function lm(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (wn | ka)) !== Ne && xR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (wn | ka)) !== Ne && xR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var O0 = 0, M0 = 1, um = 2, Dg = 3, om = !1, kg, sm;
    kg = !1, sm = null;
    function Og(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function N0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Vu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: O0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (sm === u && !kg && (C("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), kg = !0), r_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, i1(e, a);
      } else
        return a1(e, u, t, a);
    }
    function cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Fd(a)) {
          var s = u.lanes;
          s = Pd(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, lf(e, f);
        }
      }
    }
    function Mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var S = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = S : (f.next = S, f = S), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function l1(e, t, a, i, u, s) {
      switch (a.tag) {
        case M0: {
          var f = a.payload;
          if (typeof f == "function") {
            b0();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              _0();
            }
            return p;
          }
          return f;
        }
        case Dg:
          e.flags = e.flags & -65537 | Oe;
        // Intentional fallthrough
        case O0: {
          var v = a.payload, S;
          if (typeof v == "function") {
            b0(), S = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              _0();
            }
          } else
            S = v;
          return S == null ? i : rt({}, i, S);
        }
        case um:
          return om = !0, i;
      }
      return i;
    }
    function fm(e, t, a, i) {
      var u = e.updateQueue;
      om = !1, sm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, S = v.next;
        v.next = null, f === null ? s = S : f.next = S, f = v;
        var R = e.alternate;
        if (R !== null) {
          var O = R.updateQueue, D = O.lastBaseUpdate;
          D !== f && (D === null ? O.firstBaseUpdate = S : D.next = S, O.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var A = u.baseState, H = Q, B = null, de = null, Ae = null, De = s;
        do {
          var wt = De.lane, gt = De.eventTime;
          if (ku(i, wt)) {
            if (Ae !== null) {
              var Y = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              Ae = Ae.next = Y;
            }
            A = l1(e, u, De, A, t, a);
            var z = De.callback;
            if (z !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== kt) {
              e.flags |= an;
              var ee = u.effects;
              ee === null ? u.effects = [De] : ee.push(De);
            }
          } else {
            var L = {
              eventTime: gt,
              lane: wt,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            Ae === null ? (de = Ae = L, B = A) : Ae = Ae.next = L, H = tt(H, wt);
          }
          if (De = De.next, De === null) {
            if (p = u.shared.pending, p === null)
              break;
            var me = p, pe = me.next;
            me.next = null, De = pe, u.lastBaseUpdate = me, u.shared.pending = null;
          }
        } while (!0);
        Ae === null && (B = A), u.baseState = B, u.firstBaseUpdate = de, u.lastBaseUpdate = Ae;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var Je = Ie;
          do
            H = tt(H, Je.lane), Je = Je.next;
          while (Je !== Ie);
        } else s === null && (u.shared.lanes = Q);
        Jp(H), e.lanes = H, e.memoizedState = A;
      }
      sm = null;
    }
    function u1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function L0() {
      om = !1;
    }
    function dm() {
      return om;
    }
    function z0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, u1(f, a));
        }
    }
    var bp = {}, Ao = Mo(bp), _p = Mo(bp), pm = Mo(bp);
    function vm(e) {
      if (e === bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function U0() {
      var e = vm(pm.current);
      return e;
    }
    function Ng(e, t) {
      ra(pm, t, e), ra(_p, e, e), ra(Ao, bp, e);
      var a = ww(t);
      na(Ao, e), ra(Ao, a, e);
    }
    function Uf(e) {
      na(Ao, e), na(_p, e), na(pm, e);
    }
    function Lg() {
      var e = vm(Ao.current);
      return e;
    }
    function A0(e) {
      vm(pm.current);
      var t = vm(Ao.current), a = xw(t, e.type);
      t !== a && (ra(_p, e, e), ra(Ao, a, e));
    }
    function zg(e) {
      _p.current === e && (na(Ao, e), na(_p, e));
    }
    var o1 = 0, j0 = 1, F0 = 1, Dp = 2, il = Mo(o1);
    function Ug(e, t) {
      return (e & t) !== 0;
    }
    function Af(e) {
      return e & j0;
    }
    function Ag(e, t) {
      return e & j0 | t;
    }
    function s1(e, t) {
      return e | t;
    }
    function jo(e, t) {
      ra(il, t, e);
    }
    function jf(e) {
      na(il, e);
    }
    function c1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function hm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Me) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || t0(i) || eg(i))
              return t;
          }
        } else if (t.tag === un && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Oe) !== Ne;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Ar = (
      /*   */
      8
    ), jg = [];
    function Fg() {
      for (var e = 0; e < jg.length; e++) {
        var t = jg[e];
        t._workInProgressVersionPrimary = null;
      }
      jg.length = 0;
    }
    function f1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var he = y.ReactCurrentDispatcher, kp = y.ReactCurrentBatchConfig, Hg, Ff;
    Hg = /* @__PURE__ */ new Set();
    var tc = Q, qt = null, dr = null, pr = null, mm = !1, Op = !1, Mp = 0, d1 = 0, p1 = 25, I = null, Ui = null, Fo = -1, Pg = !1;
    function Vt() {
      {
        var e = I;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function le() {
      {
        var e = I;
        Ui !== null && (Fo++, Ui[Fo] !== e && v1(e));
      }
    }
    function Hf(e) {
      e != null && !ut(e) && C("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function v1(e) {
      {
        var t = Qe(qt);
        if (!Hg.has(t) && (Hg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = Ui[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          C(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function aa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Vg(e, t) {
      if (Pg)
        return !1;
      if (t === null)
        return C("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && C(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!X(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, i, u, s) {
      tc = s, qt = t, Ui = e !== null ? e._debugHookTypes : null, Fo = -1, Pg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? he.current = lC : Ui !== null ? he.current = iC : he.current = aC;
      var f = a(i, u);
      if (Op) {
        var p = 0;
        do {
          if (Op = !1, Mp = 0, p >= p1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Pg = !1, dr = null, pr = null, t.updateQueue = null, Fo = -1, he.current = uC, f = a(i, u);
        } while (Op);
      }
      he.current = km, t._debugHookTypes = Ui;
      var v = dr !== null && dr.next !== null;
      if (tc = Q, qt = null, dr = null, pr = null, I = null, Ui = null, Fo = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ft) !== Le && C("Internal React error: Expected static flag was missing. Please notify the React team."), mm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Mp !== 0;
      return Mp = 0, e;
    }
    function H0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Lt) !== Le ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function P0() {
      if (he.current = km, mm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        mm = !1;
      }
      tc = Q, qt = null, dr = null, pr = null, Ui = null, Fo = -1, I = null, Z0 = !1, Op = !1, Mp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ai() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function V0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Yg(e, t, a) {
      var i = Ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = g1.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function $g(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, S = p.next;
          f.next = S, p.next = v;
        }
        s.baseQueue !== f && C("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var R = f.next, O = s.baseState, D = null, A = null, H = null, B = R;
        do {
          var de = B.lane;
          if (ku(tc, de)) {
            if (H !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: B.action,
                hasEagerState: B.hasEagerState,
                eagerState: B.eagerState,
                next: null
              };
              H = H.next = De;
            }
            if (B.hasEagerState)
              O = B.eagerState;
            else {
              var wt = B.action;
              O = e(O, wt);
            }
          } else {
            var Ae = {
              lane: de,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            };
            H === null ? (A = H = Ae, D = O) : H = H.next = Ae, qt.lanes = tt(qt.lanes, de), Jp(de);
          }
          B = B.next;
        } while (B !== null && B !== R);
        H === null ? D = O : H.next = A, X(O, i.memoizedState) || Pp(), i.memoizedState = O, i.baseState = D, i.baseQueue = H, u.lastRenderedState = O;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var L = gt;
        do {
          var Y = L.lane;
          qt.lanes = tt(qt.lanes, Y), Jp(Y), L = L.next;
        } while (L !== gt);
      } else f === null && (u.lanes = Q);
      var z = u.dispatch;
      return [i.memoizedState, z];
    }
    function Ig(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, S = v;
        do {
          var R = S.action;
          p = e(p, R), S = S.next;
        } while (S !== v);
        X(p, i.memoizedState) || Pp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function nO(e, t, a) {
    }
    function rO(e, t, a) {
    }
    function Wg(e, t, a) {
      var i = qt, u = Ql(), s, f = Ur();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ff || s !== a() && (C("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      } else {
        if (s = t(), !Ff) {
          var p = t();
          X(s, p) || (C("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var v = Gm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(v, tc) || B0(i, t, s);
      }
      u.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return u.queue = S, Cm($0.bind(null, i, S, e), [e]), i.flags |= Qr, Np(cr | Ar, Y0.bind(null, i, S, s, t), void 0, null), s;
    }
    function ym(e, t, a) {
      var i = qt, u = Ai(), s = t();
      if (!Ff) {
        var f = t();
        X(s, f) || (C("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !X(p, s);
      v && (u.memoizedState = s, Pp());
      var S = u.queue;
      if (zp($0.bind(null, i, S, e), [e]), S.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Qr, Np(cr | Ar, Y0.bind(null, i, S, s, t), void 0, null);
        var R = Gm();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(R, tc) || B0(i, t, s);
      }
      return s;
    }
    function B0(e, t, a) {
      e.flags |= ho;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = V0(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function Y0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, I0(t) && W0(e);
    }
    function $0(e, t, a) {
      var i = function() {
        I0(t) && W0(e);
      };
      return a(i);
    }
    function I0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !X(a, i);
      } catch {
        return !0;
      }
    }
    function W0(e) {
      var t = Fa(e, Be);
      t !== null && yr(t, e, Be, Kt);
    }
    function gm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: Bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = S1.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Qg(e) {
      return $g(Bg);
    }
    function Gg(e) {
      return Ig(Bg);
    }
    function Np(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = V0(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function qg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Sm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function Lp(e, t, a, i) {
      var u = Ql(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = Np(cr | t, a, void 0, s);
    }
    function Em(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Vg(s, v)) {
            u.memoizedState = Np(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = Np(cr | t, a, f, s);
    }
    function Cm(e, t) {
      return (qt.mode & Lt) !== Le ? Lp(Ti | Qr | Oc, Ar, e, t) : Lp(Qr | Oc, Ar, e, t);
    }
    function zp(e, t) {
      return Em(Qr, Ar, e, t);
    }
    function Xg(e, t) {
      return Lp(Ct, Wl, e, t);
    }
    function Rm(e, t) {
      return Em(Ct, Wl, e, t);
    }
    function Kg(e, t) {
      var a = Ct;
      return a |= Qi, (qt.mode & Lt) !== Le && (a |= Dl), Lp(a, fr, e, t);
    }
    function Tm(e, t) {
      return Em(Ct, fr, e, t);
    }
    function Q0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || C("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Jg(e, t, a) {
      typeof t != "function" && C("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Qi, (qt.mode & Lt) !== Le && (u |= Dl), Lp(u, fr, Q0.bind(null, t, e), i);
    }
    function wm(e, t, a) {
      typeof t != "function" && C("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Em(Ct, fr, Q0.bind(null, t, e), i);
    }
    function h1(e, t) {
    }
    var xm = h1;
    function Zg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function bm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function eS(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function _m(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function tS(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function G0(e) {
      var t = Ai(), a = dr, i = a.memoizedState;
      return X0(t, i, e);
    }
    function q0(e) {
      var t = Ai();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return X0(t, a, e);
    }
    function X0(e, t, a) {
      var i = !Ad(tc);
      if (i) {
        if (!X(a, t)) {
          var u = Hd();
          qt.lanes = tt(qt.lanes, u), Jp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Pp()), e.memoizedState = a, a;
    }
    function m1(e, t, a) {
      var i = Ua();
      Fn(ah(i, _i)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Fn(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ne("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function nS() {
      var e = gm(!1), t = e[0], a = e[1], i = m1.bind(null, a), u = Ql();
      return u.memoizedState = i, [t, i];
    }
    function K0() {
      var e = Qg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function J0() {
      var e = Gg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var Z0 = !1;
    function y1() {
      return Z0;
    }
    function rS() {
      var e = Ql(), t = Gm(), a = t.identifierPrefix, i;
      if (Ur()) {
        var u = zx();
        i = ":" + a + "R" + u;
        var s = Mp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = d1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Dm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function g1(e, t, a) {
      typeof arguments[3] == "function" && C("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (eC(e))
        tC(t, u);
      else {
        var s = k0(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), nC(s, t, i);
        }
      }
      rC(e, i);
    }
    function S1(e, t, a) {
      typeof arguments[3] == "function" && C("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (eC(e))
        tC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = he.current, he.current = ll;
            try {
              var v = t.lastRenderedState, S = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = S, X(S, v)) {
                r1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              he.current = p;
            }
          }
        }
        var R = k0(e, t, u, i);
        if (R !== null) {
          var O = Ea();
          yr(R, e, i, O), nC(R, t, i);
        }
      }
      rC(e, i);
    }
    function eC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function tC(e, t) {
      Op = mm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function nC(e, t, a) {
      if (Fd(a)) {
        var i = t.lanes;
        i = Pd(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, lf(e, u);
      }
    }
    function rC(e, t, a) {
      ys(e, t);
    }
    var km = {
      readContext: tr,
      useCallback: aa,
      useContext: aa,
      useEffect: aa,
      useImperativeHandle: aa,
      useInsertionEffect: aa,
      useLayoutEffect: aa,
      useMemo: aa,
      useReducer: aa,
      useRef: aa,
      useState: aa,
      useDebugValue: aa,
      useDeferredValue: aa,
      useTransition: aa,
      useMutableSource: aa,
      useSyncExternalStore: aa,
      useId: aa,
      unstable_isNewReconciler: re
    }, aC = null, iC = null, lC = null, uC = null, Gl = null, ll = null, Om = null;
    {
      var aS = function() {
        C("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        C("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      aC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Vt(), Hf(t), Zg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Vt(), Hf(t), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Vt(), Hf(a), Jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Vt(), Hf(t), Xg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Vt(), Hf(t), Kg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Vt(), Hf(t);
          var a = he.current;
          he.current = Gl;
          try {
            return eS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Vt();
          var i = he.current;
          he.current = Gl;
          try {
            return Yg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Vt(), qg(e);
        },
        useState: function(e) {
          I = "useState", Vt();
          var t = he.current;
          he.current = Gl;
          try {
            return gm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Vt(), tS(e);
        },
        useTransition: function() {
          return I = "useTransition", Vt(), nS();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Vt(), Wg(e, t, a);
        },
        useId: function() {
          return I = "useId", Vt(), rS();
        },
        unstable_isNewReconciler: re
      }, iC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", le(), Zg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", le(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", le(), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", le(), Jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", le(), Xg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", le(), Kg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", le();
          var a = he.current;
          he.current = Gl;
          try {
            return eS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", le();
          var i = he.current;
          he.current = Gl;
          try {
            return Yg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", le(), qg(e);
        },
        useState: function(e) {
          I = "useState", le();
          var t = he.current;
          he.current = Gl;
          try {
            return gm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", le(), tS(e);
        },
        useTransition: function() {
          return I = "useTransition", le(), nS();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", le(), Wg(e, t, a);
        },
        useId: function() {
          return I = "useId", le(), rS();
        },
        unstable_isNewReconciler: re
      }, lC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", le(), bm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", le(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", le(), wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", le(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", le(), Tm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", le();
          var a = he.current;
          he.current = ll;
          try {
            return _m(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", le();
          var i = he.current;
          he.current = ll;
          try {
            return $g(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", le(), Sm();
        },
        useState: function(e) {
          I = "useState", le();
          var t = he.current;
          he.current = ll;
          try {
            return Qg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", le(), xm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", le(), G0(e);
        },
        useTransition: function() {
          return I = "useTransition", le(), K0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", le(), ym(e, t);
        },
        useId: function() {
          return I = "useId", le(), Dm();
        },
        unstable_isNewReconciler: re
      }, uC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", le(), bm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", le(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", le(), wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", le(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", le(), Tm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", le();
          var a = he.current;
          he.current = Om;
          try {
            return _m(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", le();
          var i = he.current;
          he.current = Om;
          try {
            return Ig(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", le(), Sm();
        },
        useState: function(e) {
          I = "useState", le();
          var t = he.current;
          he.current = Om;
          try {
            return Gg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", le(), xm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", le(), q0(e);
        },
        useTransition: function() {
          return I = "useTransition", le(), J0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", le(), ym(e, t);
        },
        useId: function() {
          return I = "useId", le(), Dm();
        },
        unstable_isNewReconciler: re
      }, Gl = {
        readContext: function(e) {
          return aS(), tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", qe(), Vt(), Zg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", qe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", qe(), Vt(), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", qe(), Vt(), Jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", qe(), Vt(), Xg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", qe(), Vt(), Kg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", qe(), Vt();
          var a = he.current;
          he.current = Gl;
          try {
            return eS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", qe(), Vt();
          var i = he.current;
          he.current = Gl;
          try {
            return Yg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", qe(), Vt(), qg(e);
        },
        useState: function(e) {
          I = "useState", qe(), Vt();
          var t = he.current;
          he.current = Gl;
          try {
            return gm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", qe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", qe(), Vt(), tS(e);
        },
        useTransition: function() {
          return I = "useTransition", qe(), Vt(), nS();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", qe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", qe(), Vt(), Wg(e, t, a);
        },
        useId: function() {
          return I = "useId", qe(), Vt(), rS();
        },
        unstable_isNewReconciler: re
      }, ll = {
        readContext: function(e) {
          return aS(), tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", qe(), le(), bm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", qe(), le(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", qe(), le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", qe(), le(), wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", qe(), le(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", qe(), le(), Tm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", qe(), le();
          var a = he.current;
          he.current = ll;
          try {
            return _m(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", qe(), le();
          var i = he.current;
          he.current = ll;
          try {
            return $g(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", qe(), le(), Sm();
        },
        useState: function(e) {
          I = "useState", qe(), le();
          var t = he.current;
          he.current = ll;
          try {
            return Qg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", qe(), le(), xm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", qe(), le(), G0(e);
        },
        useTransition: function() {
          return I = "useTransition", qe(), le(), K0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", qe(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", qe(), le(), ym(e, t);
        },
        useId: function() {
          return I = "useId", qe(), le(), Dm();
        },
        unstable_isNewReconciler: re
      }, Om = {
        readContext: function(e) {
          return aS(), tr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", qe(), le(), bm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", qe(), le(), tr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", qe(), le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", qe(), le(), wm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", qe(), le(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", qe(), le(), Tm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", qe(), le();
          var a = he.current;
          he.current = ll;
          try {
            return _m(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", qe(), le();
          var i = he.current;
          he.current = ll;
          try {
            return Ig(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", qe(), le(), Sm();
        },
        useState: function(e) {
          I = "useState", qe(), le();
          var t = he.current;
          he.current = ll;
          try {
            return Gg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", qe(), le(), xm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", qe(), le(), q0(e);
        },
        useTransition: function() {
          return I = "useTransition", qe(), le(), J0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", qe(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", qe(), le(), ym(e, t);
        },
        useId: function() {
          return I = "useId", qe(), le(), Dm();
        },
        unstable_isNewReconciler: re
      };
    }
    var Ho = E.unstable_now, oC = 0, Mm = -1, Up = -1, Nm = -1, iS = !1, Lm = !1;
    function sC() {
      return iS;
    }
    function E1() {
      Lm = !0;
    }
    function C1() {
      iS = !1, Lm = !1;
    }
    function R1() {
      iS = Lm, Lm = !1;
    }
    function cC() {
      return oC;
    }
    function fC() {
      oC = Ho();
    }
    function lS(e) {
      Up = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function dC(e) {
      Up = -1;
    }
    function zm(e, t) {
      if (Up >= 0) {
        var a = Ho() - Up;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Up = -1;
      }
    }
    function ql(e) {
      if (Mm >= 0) {
        var t = Ho() - Mm;
        Mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case yt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function uS(e) {
      if (Nm >= 0) {
        var t = Ho() - Nm;
        Nm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case yt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Xl() {
      Mm = Ho();
    }
    function oS() {
      Nm = Ho();
    }
    function sS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var cS = {}, fS, dS, pS, vS, hS, pC, Um, mS, yS, gS, Ap;
    {
      fS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), Ap = /* @__PURE__ */ new Set();
      var vC = /* @__PURE__ */ new Set();
      Um = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          vC.has(a) || (vC.add(a), C("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, pC = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          hS.has(a) || (hS.add(a), C("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(cS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(cS);
    }
    function SS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        pC(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var ES = {
      isMounted: Bv,
      enqueueSetState: function(e, t, a) {
        var i = vo(e), u = Ea(), s = Yo(i), f = Vu(u, s);
        f.payload = t, a != null && (Um(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (yr(p, i, s, u), cm(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vo(e), u = Ea(), s = Yo(i), f = Vu(u, s);
        f.tag = M0, f.payload = t, a != null && (Um(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (yr(p, i, s, u), cm(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vo(e), i = Ea(), u = Yo(a), s = Vu(i, u);
        s.tag = um, t != null && (Um(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (yr(f, a, u, i), cm(f, a, u)), jc(a, u);
      }
    };
    function hC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && C("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ce(a, i) || !Ce(u, s) : !0;
    }
    function T1(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? C("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : C("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && C("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && C("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && C("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === Le && (Ap.add(t), C(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === Le && (Ap.add(t), C(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && C("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !yS.has(t) && (yS.add(t), C("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && C("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && C("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && C("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && C("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && C("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && C("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && C("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && C("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !pS.has(t) && (pS.add(t), C("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && C("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && C("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && C("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ut(p)) && C("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && C("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function mC(e, t) {
      t.updater = ES, e.stateNode = t, hu(t, e), t._reactInternalInstance = cS;
    }
    function yC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === x && f._context === void 0
        );
        if (!p && !gS.has(t)) {
          gS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", C("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = _f(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? Df(e, u) : ui;
      }
      var R = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          R = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var O = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      mC(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var D = xt(t) || "Component";
          dS.has(D) || (dS.add(D), C("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, R.state === null ? "null" : "undefined", D));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var A = null, H = null, B = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? A = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (A = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? B = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (B = "UNSAFE_componentWillUpdate"), A !== null || H !== null || B !== null) {
            var de = xt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vS.has(de) || (vS.add(de), C(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Ae, A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : "", B !== null ? `
  ` + B : ""));
          }
        }
      }
      return i && l0(e, u, s), R;
    }
    function w1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (C("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), ES.enqueueReplaceState(t, t.state, null));
    }
    function gC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Qe(e) || "Component";
          fS.has(s) || (fS.add(s), C("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        ES.enqueueReplaceState(t, t.state, null);
      }
    }
    function CS(e, t, a, i) {
      T1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Og(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = _f(e, t, !0);
        u.context = Df(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          mS.has(p) || (mS.add(p), C("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (SS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (w1(e, u), fm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var S = Ct;
        S |= Qi, (e.mode & Lt) !== Le && (S |= Dl), e.flags |= S;
      }
    }
    function x1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var S = _f(e, t, !0);
        v = Df(e, S);
      }
      var R = t.getDerivedStateFromProps, O = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !O && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && gC(e, u, a, v), L0();
      var D = e.memoizedState, A = u.state = D;
      if (fm(e, a, u, i), A = e.memoizedState, s === a && D === A && !Wh() && !dm()) {
        if (typeof u.componentDidMount == "function") {
          var H = Ct;
          H |= Qi, (e.mode & Lt) !== Le && (H |= Dl), e.flags |= H;
        }
        return !1;
      }
      typeof R == "function" && (SS(e, t, R, a), A = e.memoizedState);
      var B = dm() || hC(e, t, s, a, D, A, v);
      if (B) {
        if (!O && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = Ct;
          de |= Qi, (e.mode & Lt) !== Le && (de |= Dl), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ae = Ct;
          Ae |= Qi, (e.mode & Lt) !== Le && (Ae |= Dl), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = A;
      }
      return u.props = a, u.state = A, u.context = v, B;
    }
    function b1(e, t, a, i, u) {
      var s = t.stateNode;
      N0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, S = s.context, R = a.contextType, O = ui;
      if (typeof R == "object" && R !== null)
        O = tr(R);
      else {
        var D = _f(t, a, !0);
        O = Df(t, D);
      }
      var A = a.getDerivedStateFromProps, H = typeof A == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || S !== O) && gC(t, s, i, O), L0();
      var B = t.memoizedState, de = s.state = B;
      if (fm(t, i, s, u), de = t.memoizedState, f === v && B === de && !Wh() && !dm())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof A == "function" && (SS(t, a, A, i), de = t.memoizedState);
      var Ae = dm() || hC(t, a, p, i, B, de, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return Ae ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, O)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || B !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = O, Ae;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function RS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function _1(e, t) {
      return !0;
    }
    function TS(e, t) {
      try {
        var a = _1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === K)
            return;
          console.error(i);
        }
        var p = u ? Qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === J)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = Qe(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var O = v + `
` + f + `

` + ("" + S);
        console.error(O);
      } catch (D) {
        setTimeout(function() {
          throw D;
        });
      }
    }
    var D1 = typeof WeakMap == "function" ? WeakMap : Map;
    function SC(e, t, a) {
      var i = Vu(Kt, a);
      i.tag = Dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        E_(u), TS(e, t);
      }, i;
    }
    function wS(e, t, a) {
      var i = Vu(Kt, a);
      i.tag = Dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          OR(e), TS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        OR(e), TS(e, t), typeof u != "function" && g_(this);
        var v = t.value, S = t.stack;
        this.componentDidCatch(v, {
          componentStack: S !== null ? S : ""
        }), typeof u != "function" && (Jr(e.lanes, Be) || C("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), i;
    }
    function EC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new D1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = C_.bind(null, e, t, a);
        Kr && Zp(e, a), t.then(s, s);
      }
    }
    function k1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function O1(e, t) {
      var a = e.tag;
      if ((e.mode & ft) === Le && (a === ae || a === Ke || a === Ye)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function CC(e) {
      var t = e;
      do {
        if (t.tag === Me && c1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function RC(e, t, a, i, u) {
      if ((e.mode & ft) === Le) {
        if (e === t)
          e.flags |= Gr;
        else {
          if (e.flags |= Oe, a.flags |= kc, a.flags &= -52805, a.tag === K) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Vu(Kt, Be);
              f.tag = um, Uo(a, f, Be);
            }
          }
          a.lanes = tt(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= Gr, e.lanes = u, e;
    }
    function M1(e, t, a, i, u) {
      if (a.flags |= fs, Kr && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        O1(a), Ur() && a.mode & ft && p0();
        var f = CC(t);
        if (f !== null) {
          f.flags &= -257, RC(f, t, a, e, u), f.mode & ft && EC(e, s, u), k1(f, e, s);
          return;
        } else {
          if (!Xv(u)) {
            EC(e, s, u), rE();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ur() && a.mode & ft) {
        p0();
        var v = CC(t);
        if (v !== null) {
          (v.flags & Gr) === Ne && (v.flags |= Wr), RC(v, t, a, e, u), mg(nc(i, a));
          return;
        }
      }
      i = nc(i, a), c_(i);
      var S = t;
      do {
        switch (S.tag) {
          case J: {
            var R = i;
            S.flags |= Gr;
            var O = bs(u);
            S.lanes = tt(S.lanes, O);
            var D = SC(S, R, O);
            Mg(S, D);
            return;
          }
          case K:
            var A = i, H = S.type, B = S.stateNode;
            if ((S.flags & Oe) === Ne && (typeof H.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && !CR(B))) {
              S.flags |= Gr;
              var de = bs(u);
              S.lanes = tt(S.lanes, de);
              var Ae = wS(S, A, de);
              Mg(S, Ae);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function N1() {
      return null;
    }
    var jp = y.ReactCurrentOwner, ol = !1, xS, Fp, bS, _S, DS, rc, kS, Am, Hp;
    xS = {}, Fp = {}, bS = {}, _S = {}, DS = {}, rc = !1, kS = {}, Am = {}, Hp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = x0(t, null, a, i) : t.child = Nf(t, e.child, a, i);
    }
    function L1(e, t, a, i) {
      t.child = Nf(t, e.child, null, i), t.child = Nf(t, null, a, i);
    }
    function TC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, S;
      zf(t, u), pa(t);
      {
        if (jp.current = t, In(!0), v = Pf(e, t, f, i, p, u), S = Vf(), t.mode & Gt) {
          yn(!0);
          try {
            v = Pf(e, t, f, i, p, u), S = Vf();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return va(), e !== null && !ol ? (H0(e, t, u), Bu(e, t, u)) : (Ur() && S && cg(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function wC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (F_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qf(s), t.tag = Ye, t.type = f, NS(t, s), xC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Hp[v] || (C("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Hp[v] = !0);
          }
        }
        var S = vE(a.type, null, i, t, t.mode, u);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var R = a.type, O = R.propTypes;
        O && nl(
          O,
          i,
          // Resolved props
          "prop",
          xt(R)
        );
      }
      var D = e.child, A = FS(e, u);
      if (!A) {
        var H = D.memoizedProps, B = a.compare;
        if (B = B !== null ? B : Ce, B(H, i) && e.ref === t.ref)
          return Bu(e, t, u);
      }
      t.flags |= ti;
      var de = oc(D, i);
      return de.ref = t.ref, de.return = t, t.child = de, de;
    }
    function xC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && nl(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (Ce(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = R, FS(e, u))
            (e.flags & kc) !== Ne && (ol = !0);
          else return t.lanes = e.lanes, Bu(e, t, u);
      }
      return OS(e, t, a, i, u);
    }
    function bC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || se)
        if ((t.mode & ft) === Le) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, qm(t, a);
        } else if (Jr(a, ha)) {
          var O = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var D = s !== null ? s.baseLanes : a;
          qm(t, D);
        } else {
          var p = null, v;
          if (s !== null) {
            var S = s.baseLanes;
            v = tt(S, a);
          } else
            v = a;
          t.lanes = t.childLanes = ha;
          var R = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, qm(t, v), null;
        }
      else {
        var A;
        s !== null ? (A = tt(s.baseLanes, a), t.memoizedState = null) : A = a, qm(t, A);
      }
      return ga(e, t, u, a), t.child;
    }
    function z1(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function U1(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function A1(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function _C(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= mo);
    }
    function OS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = _f(t, a, !0);
        f = Df(t, p);
      }
      var v, S;
      zf(t, u), pa(t);
      {
        if (jp.current = t, In(!0), v = Pf(e, t, a, i, f, u), S = Vf(), t.mode & Gt) {
          yn(!0);
          try {
            v = Pf(e, t, a, i, f, u), S = Vf();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return va(), e !== null && !ol ? (H0(e, t, u), Bu(e, t, u)) : (Ur() && S && cg(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function DC(e, t, a, i, u) {
      {
        switch (Z_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Oe, t.flags |= Gr;
            var S = new Error("Simulated error coming from DevTools"), R = bs(u);
            t.lanes = tt(t.lanes, R);
            var O = wS(t, nc(S, t), R);
            Mg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var D = a.propTypes;
          D && nl(
            D,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var A;
      Il(a) ? (A = !0, Gh(t)) : A = !1, zf(t, u);
      var H = t.stateNode, B;
      H === null ? (Fm(e, t), yC(t, a, i), CS(t, a, i, u), B = !0) : e === null ? B = x1(t, a, i, u) : B = b1(e, t, a, i, u);
      var de = MS(e, t, a, B, A, u);
      {
        var Ae = t.stateNode;
        B && Ae.props !== i && (rc || C("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), rc = !0);
      }
      return de;
    }
    function MS(e, t, a, i, u, s) {
      _C(e, t);
      var f = (t.flags & Oe) !== Ne;
      if (!i && !f)
        return u && s0(t, a, !1), Bu(e, t, s);
      var p = t.stateNode;
      jp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, dC();
      else {
        pa(t);
        {
          if (In(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          In(!1);
        }
        va();
      }
      return t.flags |= ti, e !== null && f ? L1(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && s0(t, a, !0), t.child;
    }
    function kC(e) {
      var t = e.stateNode;
      t.pendingContext ? u0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && u0(e, t.context, !1), Ng(e, t.containerInfo);
    }
    function j1(e, t, a) {
      if (kC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      N0(e, t), fm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, S = t.updateQueue;
        if (S.baseState = v, t.memoizedState = v, t.flags & Wr) {
          var R = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return OC(e, t, p, a, R);
        } else if (p !== s) {
          var O = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return OC(e, t, p, a, O);
        } else {
          Px(t);
          var D = x0(t, null, p, a);
          t.child = D;
          for (var A = D; A; )
            A.flags = A.flags & -3 | ka, A = A.sibling;
        }
      } else {
        if (Mf(), p === s)
          return Bu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function OC(e, t, a, i, u) {
      return Mf(), mg(u), t.flags |= Wr, ga(e, t, a, i), t.child;
    }
    function F1(e, t, a) {
      A0(t), e === null && hg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Xy(i, u);
      return p ? f = null : s !== null && Xy(i, s) && (t.flags |= ni), _C(e, t), ga(e, t, f, a), t.child;
    }
    function H1(e, t) {
      return e === null && hg(t), null;
    }
    function P1(e, t, a, i) {
      Fm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var S = t.tag = H_(v), R = ul(v, u), O;
      switch (S) {
        case ae:
          return NS(t, v), t.type = v = qf(v), O = OS(null, t, v, R, i), O;
        case K:
          return t.type = v = oE(v), O = DC(null, t, v, R, i), O;
        case Ke:
          return t.type = v = sE(v), O = TC(null, t, v, R, i), O;
        case dt: {
          if (t.type !== t.elementType) {
            var D = v.propTypes;
            D && nl(
              D,
              R,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return O = wC(
            null,
            t,
            v,
            ul(v.type, R),
            // The inner type can have defaults too
            i
          ), O;
        }
      }
      var A = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ge && (A = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + A));
    }
    function V1(e, t, a, i, u) {
      Fm(e, t), t.tag = K;
      var s;
      return Il(a) ? (s = !0, Gh(t)) : s = !1, zf(t, u), yC(t, a, i), CS(t, a, i, u), MS(null, t, a, !0, s, u);
    }
    function B1(e, t, a, i) {
      Fm(e, t);
      var u = t.pendingProps, s;
      {
        var f = _f(t, a, !1);
        s = Df(t, f);
      }
      zf(t, i);
      var p, v;
      pa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = xt(a) || "Unknown";
          xS[S] || (C("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), xS[S] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), In(!0), jp.current = t, p = Pf(null, t, a, u, s, i), v = Vf(), In(!1);
      }
      if (va(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = xt(a) || "Unknown";
        Fp[R] || (C("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Fp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var O = xt(a) || "Unknown";
          Fp[O] || (C("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), Fp[O] = !0);
        }
        t.tag = K, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        return Il(a) ? (D = !0, Gh(t)) : D = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Og(t), mC(t, p), CS(t, a, u, i), MS(null, t, a, !0, D, i);
      } else {
        if (t.tag = ae, t.mode & Gt) {
          yn(!0);
          try {
            p = Pf(null, t, a, u, s, i), v = Vf();
          } finally {
            yn(!1);
          }
        }
        return Ur() && v && cg(t), ga(null, t, p, i), NS(t, a), t.child;
      }
    }
    function NS(e, t) {
      {
        if (t && t.childContextTypes && C("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), DS[u] || (DS[u] = !0, C("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Hp[f] || (C("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Hp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          _S[p] || (C("%s: Function components do not support getDerivedStateFromProps.", p), _S[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          bS[v] || (C("%s: Function components do not support contextType.", v), bS[v] = !0);
        }
      }
    }
    var LS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function zS(e) {
      return {
        baseLanes: e,
        cachePool: N1(),
        transitions: null
      };
    }
    function Y1(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function $1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ug(e, Dp);
    }
    function I1(e, t) {
      return _s(e.childLanes, t);
    }
    function MC(e, t, a) {
      var i = t.pendingProps;
      eD(t) && (t.flags |= Oe);
      var u = il.current, s = !1, f = (t.flags & Oe) !== Ne;
      if (f || $1(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = s1(u, F0)), u = Af(u), jo(t, u), e === null) {
        hg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return X1(t, v);
        }
        var S = i.children, R = i.fallback;
        if (s) {
          var O = W1(t, S, R, a), D = t.child;
          return D.memoizedState = zS(a), t.memoizedState = LS, O;
        } else
          return US(t, S);
      } else {
        var A = e.memoizedState;
        if (A !== null) {
          var H = A.dehydrated;
          if (H !== null)
            return K1(e, t, f, i, H, A, a);
        }
        if (s) {
          var B = i.fallback, de = i.children, Ae = G1(e, t, de, B, a), De = t.child, wt = e.child.memoizedState;
          return De.memoizedState = wt === null ? zS(a) : Y1(wt, a), De.childLanes = I1(e, a), t.memoizedState = LS, Ae;
        } else {
          var gt = i.children, L = Q1(e, t, gt, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function US(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = AS(u, i);
      return s.return = e, e.child = s, s;
    }
    function W1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ft) === Le && s !== null ? (p = s, p.childLanes = Q, p.pendingProps = f, e.mode & Nt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = AS(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function AS(e, t, a) {
      return NR(e, t, Q, null);
    }
    function NC(e, t) {
      return oc(e, t);
    }
    function Q1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = NC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ft) === Le && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function G1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ft) === Le && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var R = t.child;
        S = R, S.childLanes = Q, S.pendingProps = v, t.mode & Nt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = NC(f, v), S.subtreeFlags = f.subtreeFlags & Un;
      var O;
      return p !== null ? O = oc(p, i) : (O = Io(i, s, u, null), O.flags |= wn), O.return = t, S.return = t, S.sibling = O, t.child = S, O;
    }
    function jm(e, t, a, i) {
      i !== null && mg(i), Nf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = US(t, s);
      return f.flags |= wn, t.memoizedState = null, f;
    }
    function q1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = AS(f, s), v = Io(i, s, u, null);
      return v.flags |= wn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ft) !== Le && Nf(t, e.child, null, u), v;
    }
    function X1(e, t, a) {
      return (e.mode & ft) === Le ? (C("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : eg(t) ? e.lanes = Cr : e.lanes = ha, null;
    }
    function K1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Wr) {
          t.flags &= -257;
          var L = RS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jm(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Oe, null;
          var Y = i.children, z = i.fallback, ee = q1(e, t, Y, z, f), me = t.child;
          return me.memoizedState = zS(f), t.memoizedState = LS, ee;
        }
      else {
        if (Fx(), (t.mode & ft) === Le)
          return jm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (eg(u)) {
          var p, v, S;
          {
            var R = tx(u);
            p = R.digest, v = R.message, S = R.stack;
          }
          var O;
          v ? O = new Error(v) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var D = RS(O, p, S);
          return jm(e, t, f, D);
        }
        var A = Jr(f, e.childLanes);
        if (ol || A) {
          var H = Gm();
          if (H !== null) {
            var B = Bd(H, f);
            if (B !== kt && B !== s.retryLane) {
              s.retryLane = B;
              var de = Kt;
              Fa(e, B), yr(H, e, B, de);
            }
          }
          rE();
          var Ae = RS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jm(e, t, f, Ae);
        } else if (t0(u)) {
          t.flags |= Oe, t.child = e.child;
          var De = R_.bind(null, e);
          return nx(u, De), null;
        } else {
          Vx(t, u, s.treeContext);
          var wt = i.children, gt = US(t, wt);
          return gt.flags |= ka, gt;
        }
      }
    }
    function LC(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), bg(e.return, t, a);
    }
    function J1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Me) {
          var u = i.memoizedState;
          u !== null && LC(i, a, e);
        } else if (i.tag === un)
          LC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Z1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && hm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function eb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !kS[e])
        if (kS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              C('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              C('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              C('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          C('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function tb(e, t) {
      e !== void 0 && !Am[e] && (e !== "collapsed" && e !== "hidden" ? (Am[e] = !0, C('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Am[e] = !0, C('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function zC(e, t) {
      {
        var a = ut(e), i = !a && typeof et(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return C("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function nb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!zC(e[a], a))
              return;
        } else {
          var i = et(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!zC(s.value, f))
                  return;
                f++;
              }
          } else
            C('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function jS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function UC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      eb(u), tb(s, u), nb(f, u), ga(e, t, f, a);
      var p = il.current, v = Ug(p, Dp);
      if (v)
        p = Ag(p, Dp), t.flags |= Oe;
      else {
        var S = e !== null && (e.flags & Oe) !== Ne;
        S && J1(t, t.child, a), p = Af(p);
      }
      if (jo(t, p), (t.mode & ft) === Le)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var R = Z1(t.child), O;
            R === null ? (O = t.child, t.child = null) : (O = R.sibling, R.sibling = null), jS(
              t,
              !1,
              // isBackwards
              O,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var D = null, A = t.child;
            for (t.child = null; A !== null; ) {
              var H = A.alternate;
              if (H !== null && hm(H) === null) {
                t.child = A;
                break;
              }
              var B = A.sibling;
              A.sibling = D, D = A, A = B;
            }
            jS(
              t,
              !0,
              // isBackwards
              D,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            jS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function rb(e, t, a) {
      Ng(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Nf(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var AC = !1;
    function ab(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || AC || (AC = !0, C("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (D0(t, u, p), f !== null) {
        var S = f.value;
        if (X(S, p)) {
          if (f.children === s.children && !Wh())
            return Bu(e, t, a);
        } else
          e1(t, u, a);
      }
      var R = s.children;
      return ga(e, t, R, a), t.child;
    }
    var jC = !1;
    function ib(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (jC || (jC = !0, C("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && C("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = tr(i);
      pa(t);
      var p;
      return jp.current = t, In(!0), p = s(f), In(!1), va(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Pp() {
      ol = !0;
    }
    function Fm(e, t) {
      (t.mode & ft) === Le && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wn);
    }
    function Bu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), dC(), Jp(t.lanes), Jr(a, t.childLanes) ? (Jx(e, t), t.child) : null;
    }
    function lb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= wn, a;
      }
    }
    function FS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function ub(e, t, a) {
      switch (t.tag) {
        case J:
          kC(t), t.stateNode, Mf();
          break;
        case oe:
          A0(t);
          break;
        case K: {
          var i = t.type;
          Il(i) && Gh(t);
          break;
        }
        case Se:
          Ng(t, t.stateNode.containerInfo);
          break;
        case ht: {
          var u = t.memoizedProps.value, s = t.type._context;
          D0(t, s, u);
          break;
        }
        case yt:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Me: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return jo(t, Af(il.current)), t.flags |= Oe, null;
            var S = t.child, R = S.childLanes;
            if (Jr(a, R))
              return MC(e, t, a);
            jo(t, Af(il.current));
            var O = Bu(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            jo(t, Af(il.current));
          break;
        }
        case un: {
          var D = (e.flags & Oe) !== Ne, A = Jr(a, t.childLanes);
          if (D) {
            if (A)
              return UC(e, t, a);
            t.flags |= Oe;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), jo(t, il.current), A)
            break;
          return null;
        }
        case ze:
        case jt:
          return t.lanes = Q, bC(e, t, a);
      }
      return Bu(e, t, a);
    }
    function FC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return lb(e, t, vE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Wh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = FS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Oe) === Ne)
            return ol = !1, ub(e, t, a);
          (e.flags & kc) !== Ne ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Ur() && Nx(t)) {
        var f = t.index, p = Lx();
        d0(t, p, f);
      }
      switch (t.lanes = Q, t.tag) {
        case be:
          return B1(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return P1(e, t, v, a);
        }
        case ae: {
          var S = t.type, R = t.pendingProps, O = t.elementType === S ? R : ul(S, R);
          return OS(e, t, S, O, a);
        }
        case K: {
          var D = t.type, A = t.pendingProps, H = t.elementType === D ? A : ul(D, A);
          return DC(e, t, D, H, a);
        }
        case J:
          return j1(e, t, a);
        case oe:
          return F1(e, t, a);
        case Xe:
          return H1(e, t);
        case Me:
          return MC(e, t, a);
        case Se:
          return rb(e, t, a);
        case Ke: {
          var B = t.type, de = t.pendingProps, Ae = t.elementType === B ? de : ul(B, de);
          return TC(e, t, B, Ae, a);
        }
        case Et:
          return z1(e, t, a);
        case mt:
          return U1(e, t, a);
        case yt:
          return A1(e, t, a);
        case ht:
          return ab(e, t, a);
        case dn:
          return ib(e, t, a);
        case dt: {
          var De = t.type, wt = t.pendingProps, gt = ul(De, wt);
          if (t.type !== t.elementType) {
            var L = De.propTypes;
            L && nl(
              L,
              gt,
              // Resolved for outer only
              "prop",
              xt(De)
            );
          }
          return gt = ul(De.type, gt), wC(e, t, De, gt, a);
        }
        case Ye:
          return xC(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var Y = t.type, z = t.pendingProps, ee = t.elementType === Y ? z : ul(Y, z);
          return V1(e, t, Y, ee, a);
        }
        case un:
          return UC(e, t, a);
        case _t:
          break;
        case ze:
          return bC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Ct;
    }
    function HC(e) {
      e.flags |= En, e.flags |= mo;
    }
    var PC, HS, VC, BC;
    PC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === Xe)
          kw(e, u.stateNode);
        else if (u.tag !== Se) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, HS = function(e, t) {
    }, VC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = Mw(f, a, s, i, u, p);
        t.updateQueue = v, v && Bf(t);
      }
    }, BC = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Vp(e, t) {
      if (!Ur())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = Ne;
      if (t) {
        if ((e.mode & Nt) !== Le) {
          for (var v = e.selfBaseDuration, S = e.child; S !== null; )
            a = tt(a, tt(S.lanes, S.childLanes)), i |= S.subtreeFlags & Un, i |= S.flags & Un, v += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = v;
        } else
          for (var R = e.child; R !== null; )
            a = tt(a, tt(R.lanes, R.childLanes)), i |= R.subtreeFlags & Un, i |= R.flags & Un, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Nt) !== Le) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ob(e, t, a) {
      if (Wx() && (t.mode & ft) !== Le && (t.flags & Oe) === Ne)
        return S0(t), Mf(), t.flags |= Wr | fs | Gr, !1;
      var i = Zh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($x(t), jr(t), (t.mode & Nt) !== Le) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & Oe) === Ne && (t.memoizedState = null), t.flags |= Ct, jr(t), (t.mode & Nt) !== Le) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return E0(), !0;
    }
    function YC(e, t, a) {
      var i = t.pendingProps;
      switch (fg(t), t.tag) {
        case be:
        case ln:
        case Ye:
        case ae:
        case Ke:
        case Et:
        case mt:
        case yt:
        case dn:
        case dt:
          return jr(t), null;
        case K: {
          var u = t.type;
          return Il(u) && Qh(t), jr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Uf(t), ug(t), Fg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Zh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Wr) !== Ne) && (t.flags |= Wn, E0());
            }
          }
          return HS(e, t), jr(t), null;
        }
        case oe: {
          zg(t);
          var v = U0(), S = t.type;
          if (e !== null && t.stateNode != null)
            VC(e, t, S, i, v), e.ref !== t.ref && HC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var R = Lg(), O = Zh(t);
            if (O)
              Bx(t, v, R) && Bf(t);
            else {
              var D = Dw(S, i, v, R, t);
              PC(D, t, !1, !1), t.stateNode = D, Ow(D, S, i, v) && Bf(t);
            }
            t.ref !== null && HC(t);
          }
          return jr(t), null;
        }
        case Xe: {
          var A = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            BC(e, t, H, A);
          } else {
            if (typeof A != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var B = U0(), de = Lg(), Ae = Zh(t);
            Ae ? Yx(t) && Bf(t) : t.stateNode = Nw(A, B, de, t);
          }
          return jr(t), null;
        }
        case Me: {
          jf(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var wt = ob(e, t, De);
            if (!wt)
              return t.flags & Gr ? t : null;
          }
          if ((t.flags & Oe) !== Ne)
            return t.lanes = a, (t.mode & Nt) !== Le && sS(t), t;
          var gt = De !== null, L = e !== null && e.memoizedState !== null;
          if (gt !== L && gt) {
            var Y = t.child;
            if (Y.flags |= zn, (t.mode & ft) !== Le) {
              var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              z || Ug(il.current, F0) ? s_() : rE();
            }
          }
          var ee = t.updateQueue;
          if (ee !== null && (t.flags |= Ct), jr(t), (t.mode & Nt) !== Le && gt) {
            var me = t.child;
            me !== null && (t.treeBaseDuration -= me.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return Uf(t), HS(e, t), e === null && xx(t.stateNode.containerInfo), jr(t), null;
        case ht:
          var pe = t.type._context;
          return xg(pe, t), jr(t), null;
        case Ht: {
          var Ie = t.type;
          return Il(Ie) && Qh(t), jr(t), null;
        }
        case un: {
          jf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return jr(t), null;
          var Xt = (t.flags & Oe) !== Ne, Ut = Je.rendering;
          if (Ut === null)
            if (Xt)
              Vp(Je, !1);
            else {
              var qn = f_() && (e === null || (e.flags & Oe) === Ne);
              if (!qn)
                for (var At = t.child; At !== null; ) {
                  var Vn = hm(At);
                  if (Vn !== null) {
                    Xt = !0, t.flags |= Oe, Vp(Je, !1);
                    var ia = Vn.updateQueue;
                    return ia !== null && (t.updateQueue = ia, t.flags |= Ct), t.subtreeFlags = Ne, Zx(t, a), jo(t, Ag(il.current, Dp)), t.child;
                  }
                  At = At.sibling;
                }
              Je.tail !== null && Qn() > cR() && (t.flags |= Oe, Xt = !0, Vp(Je, !1), t.lanes = Ld);
            }
          else {
            if (!Xt) {
              var Br = hm(Ut);
              if (Br !== null) {
                t.flags |= Oe, Xt = !0;
                var si = Br.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ct), Vp(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !Ut.alternate && !Ur())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Je.renderingStartTime > cR() && a !== ha && (t.flags |= Oe, Xt = !0, Vp(Je, !1), t.lanes = Ld);
            }
            if (Je.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ca = Je.last;
              Ca !== null ? Ca.sibling = Ut : t.child = Ut, Je.last = Ut;
            }
          }
          if (Je.tail !== null) {
            var Ra = Je.tail;
            Je.rendering = Ra, Je.tail = Ra.sibling, Je.renderingStartTime = Qn(), Ra.sibling = null;
            var la = il.current;
            return Xt ? la = Ag(la, Dp) : la = Af(la), jo(t, la), Ra;
          }
          return jr(t), null;
        }
        case _t:
          break;
        case ze:
        case jt: {
          nE(t);
          var Qu = t.memoizedState, Xf = Qu !== null;
          if (e !== null) {
            var rv = e.memoizedState, Zl = rv !== null;
            Zl !== Xf && (t.flags |= zn);
          }
          return !Xf || (t.mode & ft) === Le ? jr(t) : Jr(Jl, ha) && (jr(t), t.subtreeFlags & (wn | Ct) && (t.flags |= zn)), null;
        }
        case Dt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function sb(e, t, a) {
      switch (fg(t), t.tag) {
        case K: {
          var i = t.type;
          Il(i) && Qh(t);
          var u = t.flags;
          return u & Gr ? (t.flags = u & -65537 | Oe, (t.mode & Nt) !== Le && sS(t), t) : null;
        }
        case J: {
          t.stateNode, Uf(t), ug(t), Fg();
          var s = t.flags;
          return (s & Gr) !== Ne && (s & Oe) === Ne ? (t.flags = s & -65537 | Oe, t) : null;
        }
        case oe:
          return zg(t), null;
        case Me: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & Gr ? (t.flags = p & -65537 | Oe, (t.mode & Nt) !== Le && sS(t), t) : null;
        }
        case un:
          return jf(t), null;
        case Se:
          return Uf(t), null;
        case ht:
          var v = t.type._context;
          return xg(v, t), null;
        case ze:
        case jt:
          return nE(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function $C(e, t, a) {
      switch (fg(t), t.tag) {
        case K: {
          var i = t.type.childContextTypes;
          i != null && Qh(t);
          break;
        }
        case J: {
          t.stateNode, Uf(t), ug(t), Fg();
          break;
        }
        case oe: {
          zg(t);
          break;
        }
        case Se:
          Uf(t);
          break;
        case Me:
          jf(t);
          break;
        case un:
          jf(t);
          break;
        case ht:
          var u = t.type._context;
          xg(u, t);
          break;
        case ze:
        case jt:
          nE(t);
          break;
      }
    }
    var IC = null;
    IC = /* @__PURE__ */ new Set();
    var Hm = !1, Fr = !1, cb = typeof WeakSet == "function" ? WeakSet : Set, Re = null, Yf = null, $f = null;
    function fb(e) {
      _l(null, function() {
        throw e;
      }), cs();
    }
    var db = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Nt)
        try {
          Xl(), t.componentWillUnmount();
        } finally {
          ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function WC(e, t) {
      try {
        Po(fr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function PS(e, t, a) {
      try {
        db(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function pb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function QC(e, t) {
      try {
        qC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && ot && e.mode & Nt)
              try {
                Xl(), i = a(null);
              } finally {
                ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && C("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          a.current = null;
    }
    function Pm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var GC = !1;
    function vb(e, t) {
      bw(e.containerInfo), Re = t, hb();
      var a = GC;
      return GC = !1, a;
    }
    function hb() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        (e.subtreeFlags & kl) !== Ne && t !== null ? (t.return = e, Re = t) : mb();
      }
    }
    function mb() {
      for (; Re !== null; ) {
        var e = Re;
        It(e);
        try {
          yb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function yb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== Ne) {
        switch (It(e), e.tag) {
          case ae:
          case Ke:
          case Ye:
            break;
          case K: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !rc && (s.props !== e.memoizedProps && C("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && C("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = IC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), C("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              Kw(v.containerInfo);
            }
            break;
          }
          case oe:
          case Xe:
          case Se:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ar) !== Ha ? Xi(t) : (e & fr) !== Ha && ps(t), (e & Wl) !== Ha && ev(!0), Pm(t, a, p), (e & Wl) !== Ha && ev(!1), (e & Ar) !== Ha ? Ll() : (e & fr) !== Ha && Md());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Po(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ar) !== Ha ? Od(t) : (e & fr) !== Ha && Uc(t);
            var f = s.create;
            (e & Wl) !== Ha && ev(!0), s.destroy = f(), (e & Wl) !== Ha && ev(!1), (e & Ar) !== Ha ? Iv() : (e & fr) !== Ha && Wv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== Ne ? v = "useLayoutEffect" : (s.tag & Wl) !== Ne ? v = "useInsertionEffect" : v = "useEffect";
                var S = void 0;
                p === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? S = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + p, C("%s must not return anything besides a function, which is used for clean-up.%s", v, S);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function gb(e, t) {
      if ((t.flags & Ct) !== Ne)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = cC(), p = t.alternate === null ? "mount" : "update";
            sC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
                case yt:
                  var R = v.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Sb(e, t, a, i) {
      if ((a.flags & Ml) !== Ne)
        switch (a.tag) {
          case ae:
          case Ke:
          case Ye: {
            if (!Fr)
              if (a.mode & Nt)
                try {
                  Xl(), Po(fr | cr, a);
                } finally {
                  ql(a);
                }
              else
                Po(fr | cr, a);
            break;
          }
          case K: {
            var u = a.stateNode;
            if (a.flags & Ct && !Fr)
              if (t === null)
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && C("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && C("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Nt)
                  try {
                    Xl(), u.componentDidMount();
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && C("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && C("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Nt)
                  try {
                    Xl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && C("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && C("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), z0(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    S = a.child.stateNode;
                    break;
                  case K:
                    S = a.child.stateNode;
                    break;
                }
              z0(a, v, S);
            }
            break;
          }
          case oe: {
            var R = a.stateNode;
            if (t === null && a.flags & Ct) {
              var O = a.type, D = a.memoizedProps;
              jw(R, O, D);
            }
            break;
          }
          case Xe:
            break;
          case Se:
            break;
          case yt: {
            {
              var A = a.memoizedProps, H = A.onCommit, B = A.onRender, de = a.stateNode.effectDuration, Ae = cC(), De = t === null ? "mount" : "update";
              sC() && (De = "nested-update"), typeof B == "function" && B(a.memoizedProps.id, De, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof H == "function" && H(a.memoizedProps.id, De, de, Ae), m_(a);
                var wt = a.return;
                e: for (; wt !== null; ) {
                  switch (wt.tag) {
                    case J:
                      var gt = wt.stateNode;
                      gt.effectDuration += de;
                      break e;
                    case yt:
                      var L = wt.stateNode;
                      L.effectDuration += de;
                      break e;
                  }
                  wt = wt.return;
                }
              }
            }
            break;
          }
          case Me: {
            _b(e, a);
            break;
          }
          case un:
          case Ht:
          case _t:
          case ze:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Fr || a.flags & En && qC(a);
    }
    function Eb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye: {
          if (e.mode & Nt)
            try {
              Xl(), WC(e, e.return);
            } finally {
              ql(e);
            }
          else
            WC(e, e.return);
          break;
        }
        case K: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && pb(e, e.return, t), QC(e, e.return);
          break;
        }
        case oe: {
          QC(e, e.return);
          break;
        }
      }
    }
    function Cb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Qw(u) : qw(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Gw(s) : Xw(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === ze || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function qC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Nt)
            try {
              Xl(), u = t(i);
            } finally {
              ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && C("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || C("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = i;
      }
    }
    function Rb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function XC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, XC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && Dx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Tb(e) {
      for (var t = e.return; t !== null; ) {
        if (KC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function KC(e) {
      return e.tag === oe || e.tag === J || e.tag === Se;
    }
    function JC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || KC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== Xe && t.tag !== Zt; ) {
          if (t.flags & wn || t.child === null || t.tag === Se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & wn))
          return t.stateNode;
      }
    }
    function wb(e) {
      var t = Tb(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & ni && (e0(a), t.flags &= -33);
          var i = JC(e);
          BS(e, i, a);
          break;
        }
        case J:
        case Se: {
          var u = t.stateNode.containerInfo, s = JC(e);
          VS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function VS(e, t, a) {
      var i = e.tag, u = i === oe || i === Xe;
      if (u) {
        var s = e.stateNode;
        t ? Yw(a, s, t) : Vw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          VS(f, t, a);
          for (var p = f.sibling; p !== null; )
            VS(p, t, a), p = p.sibling;
        }
      }
    }
    function BS(e, t, a) {
      var i = e.tag, u = i === oe || i === Xe;
      if (u) {
        var s = e.stateNode;
        t ? Bw(a, s, t) : Pw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          BS(f, t, a);
          for (var p = f.sibling; p !== null; )
            BS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, cl = !1;
    function xb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              Hr = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Hr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case Se: {
              Hr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        ZC(e, t, a), Hr = null, cl = !1;
      }
      Rb(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        ZC(e, t, i), i = i.sibling;
    }
    function ZC(e, t, a) {
      switch (_d(a), a.tag) {
        case oe:
          Fr || If(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Xe: {
          {
            var i = Hr, u = cl;
            Hr = null, Vo(e, t, a), Hr = i, cl = u, Hr !== null && (cl ? Iw(Hr, a.stateNode) : $w(Hr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Hr !== null && (cl ? Ww(Hr, a.stateNode) : Zy(Hr, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = Hr, f = cl;
            Hr = a.stateNode.containerInfo, cl = !0, Vo(e, t, a), Hr = s, cl = f;
          }
          return;
        }
        case ae:
        case Ke:
        case dt:
        case Ye: {
          if (!Fr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var S = v.next, R = S;
                do {
                  var O = R, D = O.destroy, A = O.tag;
                  D !== void 0 && ((A & Wl) !== Ha ? Pm(a, t, D) : (A & fr) !== Ha && (ps(a), a.mode & Nt ? (Xl(), Pm(a, t, D), ql(a)) : Pm(a, t, D), Md())), R = R.next;
                } while (R !== S);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case K: {
          if (!Fr) {
            If(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && PS(a, t, H);
          }
          Vo(e, t, a);
          return;
        }
        case _t: {
          Vo(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & ft
          ) {
            var B = Fr;
            Fr = B || a.memoizedState !== null, Vo(e, t, a), Fr = B;
          } else
            Vo(e, t, a);
          break;
        }
        default: {
          Vo(e, t, a);
          return;
        }
      }
    }
    function bb(e) {
      e.memoizedState;
    }
    function _b(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && fx(s);
          }
        }
      }
    }
    function eR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new cb()), t.forEach(function(i) {
          var u = T_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (Yf !== null && $f !== null)
                Zp($f, Yf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Db(e, t, a) {
      Yf = a, $f = e, It(t), tR(t, e), It(t), Yf = null, $f = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            xb(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = El();
      if (t.subtreeFlags & Ol)
        for (var p = t.child; p !== null; )
          It(p), tR(p, e), p = p.sibling;
      It(f);
    }
    function tR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ae:
        case Ke:
        case dt:
        case Ye: {
          if (fl(t, e), Kl(e), u & Ct) {
            try {
              sl(Wl | cr, e, e.return), Po(Wl | cr, e);
            } catch (Ie) {
              fn(e, e.return, Ie);
            }
            if (e.mode & Nt) {
              try {
                Xl(), sl(fr | cr, e, e.return);
              } catch (Ie) {
                fn(e, e.return, Ie);
              }
              ql(e);
            } else
              try {
                sl(fr | cr, e, e.return);
              } catch (Ie) {
                fn(e, e.return, Ie);
              }
          }
          return;
        }
        case K: {
          fl(t, e), Kl(e), u & En && i !== null && If(i, i.return);
          return;
        }
        case oe: {
          fl(t, e), Kl(e), u & En && i !== null && If(i, i.return);
          {
            if (e.flags & ni) {
              var s = e.stateNode;
              try {
                e0(s);
              } catch (Ie) {
                fn(e, e.return, Ie);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, S = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    Fw(f, R, S, v, p, e);
                  } catch (Ie) {
                    fn(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case Xe: {
          if (fl(t, e), Kl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, D = e.memoizedProps, A = i !== null ? i.memoizedProps : D;
            try {
              Hw(O, A, D);
            } catch (Ie) {
              fn(e, e.return, Ie);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), Kl(e), u & Ct && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                cx(t.containerInfo);
              } catch (Ie) {
                fn(e, e.return, Ie);
              }
          }
          return;
        }
        case Se: {
          fl(t, e), Kl(e);
          return;
        }
        case Me: {
          fl(t, e), Kl(e);
          var B = e.child;
          if (B.flags & zn) {
            var de = B.stateNode, Ae = B.memoizedState, De = Ae !== null;
            if (de.isHidden = De, De) {
              var wt = B.alternate !== null && B.alternate.memoizedState !== null;
              wt || o_();
            }
          }
          if (u & Ct) {
            try {
              bb(e);
            } catch (Ie) {
              fn(e, e.return, Ie);
            }
            eR(e);
          }
          return;
        }
        case ze: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ft
          ) {
            var L = Fr;
            Fr = L || gt, fl(t, e), Fr = L;
          } else
            fl(t, e);
          if (Kl(e), u & zn) {
            var Y = e.stateNode, z = e.memoizedState, ee = z !== null, me = e;
            if (Y.isHidden = ee, ee && !gt && (me.mode & ft) !== Le) {
              Re = me;
              for (var pe = me.child; pe !== null; )
                Re = pe, Ob(pe), pe = pe.sibling;
            }
            Cb(me, ee);
          }
          return;
        }
        case un: {
          fl(t, e), Kl(e), u & Ct && eR(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & wn) {
        try {
          wb(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & ka && (e.flags &= -4097);
    }
    function kb(e, t, a) {
      Yf = a, $f = t, Re = e, nR(e, t, a), Yf = null, $f = null;
    }
    function nR(e, t, a) {
      for (var i = (e.mode & ft) !== Le; Re !== null; ) {
        var u = Re, s = u.child;
        if (u.tag === ze && i) {
          var f = u.memoizedState !== null, p = f || Hm;
          if (p) {
            YS(e, t, a);
            continue;
          } else {
            var v = u.alternate, S = v !== null && v.memoizedState !== null, R = S || Fr, O = Hm, D = Fr;
            Hm = p, Fr = R, Fr && !D && (Re = u, Mb(u));
            for (var A = s; A !== null; )
              Re = A, nR(
                A,
                // New root; bubble back up to here and stop.
                t,
                a
              ), A = A.sibling;
            Re = u, Hm = O, Fr = D, YS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ml) !== Ne && s !== null ? (s.return = u, Re = s) : YS(e, t, a);
      }
    }
    function YS(e, t, a) {
      for (; Re !== null; ) {
        var i = Re;
        if ((i.flags & Ml) !== Ne) {
          var u = i.alternate;
          It(i);
          try {
            Sb(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
        }
        if (i === e) {
          Re = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Re = s;
          return;
        }
        Re = i.return;
      }
    }
    function Ob(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        switch (t.tag) {
          case ae:
          case Ke:
          case dt:
          case Ye: {
            if (t.mode & Nt)
              try {
                Xl(), sl(fr, t, t.return);
              } finally {
                ql(t);
              }
            else
              sl(fr, t, t.return);
            break;
          }
          case K: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && PS(t, t.return, i);
            break;
          }
          case oe: {
            If(t, t.return);
            break;
          }
          case ze: {
            var u = t.memoizedState !== null;
            if (u) {
              rR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Re = a) : rR(e);
      }
    }
    function rR(e) {
      for (; Re !== null; ) {
        var t = Re;
        if (t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function Mb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.child;
        if (t.tag === ze) {
          var i = t.memoizedState !== null;
          if (i) {
            aR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Re = a) : aR(e);
      }
    }
    function aR(e) {
      for (; Re !== null; ) {
        var t = Re;
        It(t);
        try {
          Eb(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
          Re = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Re = a;
          return;
        }
        Re = t.return;
      }
    }
    function Nb(e, t, a, i) {
      Re = t, Lb(t, e, a, i);
    }
    function Lb(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re, s = u.child;
        (u.subtreeFlags & Gi) !== Ne && s !== null ? (s.return = u, Re = s) : zb(e, t, a, i);
      }
    }
    function zb(e, t, a, i) {
      for (; Re !== null; ) {
        var u = Re;
        if ((u.flags & Qr) !== Ne) {
          It(u);
          try {
            Ub(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
        }
        if (u === e) {
          Re = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Re = s;
          return;
        }
        Re = u.return;
      }
    }
    function Ub(e, t, a, i) {
      switch (t.tag) {
        case ae:
        case Ke:
        case Ye: {
          if (t.mode & Nt) {
            oS();
            try {
              Po(Ar | cr, t);
            } finally {
              uS(t);
            }
          } else
            Po(Ar | cr, t);
          break;
        }
      }
    }
    function Ab(e) {
      Re = e, jb();
    }
    function jb() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        if ((Re.flags & Da) !== Ne) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Re = u, Pb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Re = e;
          }
        }
        (e.subtreeFlags & Gi) !== Ne && t !== null ? (t.return = e, Re = t) : Fb();
      }
    }
    function Fb() {
      for (; Re !== null; ) {
        var e = Re;
        (e.flags & Qr) !== Ne && (It(e), Hb(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function Hb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye: {
          e.mode & Nt ? (oS(), sl(Ar | cr, e, e.return), uS(e)) : sl(Ar | cr, e, e.return);
          break;
        }
      }
    }
    function Pb(e, t) {
      for (; Re !== null; ) {
        var a = Re;
        It(a), Bb(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, Re = i) : Vb(e);
      }
    }
    function Vb(e) {
      for (; Re !== null; ) {
        var t = Re, a = t.sibling, i = t.return;
        if (XC(t), t === e) {
          Re = null;
          return;
        }
        if (a !== null) {
          a.return = i, Re = a;
          return;
        }
        Re = i;
      }
    }
    function Bb(e, t) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye: {
          e.mode & Nt ? (oS(), sl(Ar, e, t), uS(e)) : sl(Ar, e, t);
          break;
        }
      }
    }
    function Yb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye: {
          try {
            Po(fr | cr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case K: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $b(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye: {
          try {
            Po(Ar | cr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ib(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye: {
          try {
            sl(fr | cr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case K: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && PS(e, e.return, t);
          break;
        }
      }
    }
    function Wb(e) {
      switch (e.tag) {
        case ae:
        case Ke:
        case Ye:
          try {
            sl(Ar | cr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Bp = Symbol.for;
      Bp("selector.component"), Bp("selector.has_pseudo_class"), Bp("selector.role"), Bp("selector.test_id"), Bp("selector.text");
    }
    var Qb = [];
    function Gb() {
      Qb.forEach(function(e) {
        return e();
      });
    }
    var qb = y.ReactCurrentActQueue;
    function Xb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function iR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && qb.current !== null && C("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Kb = Math.ceil, $S = y.ReactCurrentDispatcher, IS = y.ReactCurrentOwner, Pr = y.ReactCurrentBatchConfig, dl = y.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), lR = (
      /*               */
      1
    ), Vr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Yu = 0, Yp = 1, ac = 2, Vm = 3, $p = 4, uR = 5, WS = 6, Tt = vr, Sa = null, On = null, hr = Q, Jl = Q, QS = Mo(Q), mr = Yu, Ip = null, Bm = Q, Wp = Q, Ym = Q, Qp = null, Pa = null, GS = 0, oR = 500, sR = 1 / 0, Jb = 500, $u = null;
    function Gp() {
      sR = Qn() + Jb;
    }
    function cR() {
      return sR;
    }
    var $m = !1, qS = null, Wf = null, ic = !1, Bo = null, qp = Q, XS = [], KS = null, Zb = 50, Xp = 0, JS = null, ZS = !1, Im = !1, e_ = 50, Qf = 0, Wm = null, Kp = Kt, Qm = Q, fR = !1;
    function Gm() {
      return Sa;
    }
    function Ea() {
      return (Tt & (Vr | ji)) !== vr ? Qn() : (Kp !== Kt || (Kp = Qn()), Kp);
    }
    function Yo(e) {
      var t = e.mode;
      if ((t & ft) === Le)
        return Be;
      if ((Tt & Vr) !== vr && hr !== Q)
        return bs(hr);
      var a = qx() !== Gx;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Qm === kt && (Qm = Hd()), Qm;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = Lw();
      return s;
    }
    function t_(e) {
      var t = e.mode;
      return (t & ft) === Le ? Be : Jv();
    }
    function yr(e, t, a, i) {
      x_(), fR && C("useInsertionEffect must not schedule updates."), ZS && (Im = !0), Eo(e, a, i), (Tt & Vr) !== Q && e === Sa ? D_(t) : (Kr && ks(e, t, a), k_(t), e === Sa && ((Tt & Vr) === vr && (Wp = tt(Wp, a)), mr === $p && $o(e, hr)), Va(e, i), a === Be && Tt === vr && (t.mode & ft) === Le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Gp(), f0()));
    }
    function n_(e, t, a) {
      var i = e.current;
      i.lanes = t, Eo(e, t, a), Va(e, a);
    }
    function r_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Vr) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === Sa ? hr : Q);
      if (i === Q) {
        a !== null && _R(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = Al(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== lE)) {
        a == null && s !== Be && C("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && _R(a);
      var f;
      if (u === Be)
        e.tag === No ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), Mx(vR.bind(null, e))) : c0(vR.bind(null, e)), dl.current !== null ? dl.current.push(Lo) : Uw(function() {
          (Tt & (Vr | ji)) === vr && Lo();
        }), f = null;
      else {
        var p;
        switch (ih(i)) {
          case Or:
            p = ds;
            break;
          case _i:
            p = Nl;
            break;
          case La:
            p = qi;
            break;
          case za:
            p = yu;
            break;
          default:
            p = qi;
            break;
        }
        f = uE(p, dR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function dR(e, t) {
      if (C1(), Kp = Kt, Qm = Q, (Tt & (Vr | ji)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ef(e, e === Sa ? hr : Q);
      if (u === Q)
        return null;
      var s = !rf(e, u) && !Kv(e, u) && !t, f = s ? p_(e, u) : Xm(e, u);
      if (f !== Yu) {
        if (f === ac) {
          var p = nf(e);
          p !== Q && (u = p, f = eE(e, p));
        }
        if (f === Yp) {
          var v = Ip;
          throw lc(e, Q), $o(e, u), Va(e, Qn()), v;
        }
        if (f === WS)
          $o(e, u);
        else {
          var S = !rf(e, u), R = e.current.alternate;
          if (S && !i_(R)) {
            if (f = Xm(e, u), f === ac) {
              var O = nf(e);
              O !== Q && (u = O, f = eE(e, O));
            }
            if (f === Yp) {
              var D = Ip;
              throw lc(e, Q), $o(e, u), Va(e, Qn()), D;
            }
          }
          e.finishedWork = R, e.finishedLanes = u, a_(e, f, u);
        }
      }
      return Va(e, Qn()), e.callbackNode === a ? dR.bind(null, e) : null;
    }
    function eE(e, t) {
      var a = Qp;
      if (uf(e)) {
        var i = lc(e, t);
        i.flags |= Wr, wx(e.containerInfo);
      }
      var u = Xm(e, t);
      if (u !== ac) {
        var s = Pa;
        Pa = a, s !== null && pR(s);
      }
      return u;
    }
    function pR(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function a_(e, t, a) {
      switch (t) {
        case Yu:
        case Yp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case ac: {
          uc(e, Pa, $u);
          break;
        }
        case Vm: {
          if ($o(e, a), Du(a) && // do not delay if we're inside an act() scope
          !DR()) {
            var i = GS + oR - Qn();
            if (i > 10) {
              var u = ef(e, Q);
              if (u !== Q)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), af(e, s);
                break;
              }
              e.timeoutHandle = Ky(uc.bind(null, e, Pa, $u), i);
              break;
            }
          }
          uc(e, Pa, $u);
          break;
        }
        case $p: {
          if ($o(e, a), jd(a))
            break;
          if (!DR()) {
            var f = ai(e, a), p = f, v = Qn() - p, S = w_(v) - v;
            if (S > 10) {
              e.timeoutHandle = Ky(uc.bind(null, e, Pa, $u), S);
              break;
            }
          }
          uc(e, Pa, $u);
          break;
        }
        case uR: {
          uc(e, Pa, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function i_(e) {
      for (var t = e; ; ) {
        if (t.flags & ho) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!X(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ho && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = _s(t, Ym), t = _s(t, Wp), th(e, t);
    }
    function vR(e) {
      if (R1(), (Tt & (Vr | ji)) !== vr)
        throw new Error("Should not already be working.");
      Wu();
      var t = ef(e, Q);
      if (!Jr(t, Be))
        return Va(e, Qn()), null;
      var a = Xm(e, t);
      if (e.tag !== No && a === ac) {
        var i = nf(e);
        i !== Q && (t = i, a = eE(e, i));
      }
      if (a === Yp) {
        var u = Ip;
        throw lc(e, Q), $o(e, t), Va(e, Qn()), u;
      }
      if (a === WS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, uc(e, Pa, $u), Va(e, Qn()), null;
    }
    function l_(e, t) {
      t !== Q && (lf(e, tt(t, Be)), Va(e, Qn()), (Tt & (Vr | ji)) === vr && (Gp(), Lo()));
    }
    function tE(e, t) {
      var a = Tt;
      Tt |= lR;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Gp(), f0());
      }
    }
    function u_(e, t, a, i, u) {
      var s = Ua(), f = Pr.transition;
      try {
        return Pr.transition = null, Fn(Or), e(t, a, i, u);
      } finally {
        Fn(s), Pr.transition = f, Tt === vr && Gp();
      }
    }
    function Iu(e) {
      Bo !== null && Bo.tag === No && (Tt & (Vr | ji)) === vr && Wu();
      var t = Tt;
      Tt |= lR;
      var a = Pr.transition, i = Ua();
      try {
        return Pr.transition = null, Fn(Or), e ? e() : void 0;
      } finally {
        Fn(i), Pr.transition = a, Tt = t, (Tt & (Vr | ji)) === vr && Lo();
      }
    }
    function hR() {
      return (Tt & (Vr | ji)) !== vr;
    }
    function qm(e, t) {
      ra(QS, Jl, e), Jl = tt(Jl, t);
    }
    function nE(e) {
      Jl = QS.current, na(QS, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== Jy && (e.timeoutHandle = Jy, zw(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          $C(u, i), i = i.return;
        }
      Sa = e;
      var s = oc(e.current, null);
      return On = s, hr = Jl = t, mr = Yu, Ip = null, Bm = Q, Wp = Q, Ym = Q, Qp = null, Pa = null, n1(), al.discardPendingWarnings(), s;
    }
    function mR(e, t) {
      do {
        var a = On;
        try {
          if (im(), P0(), cn(), IS.current = null, a === null || a.return === null) {
            mr = Yp, Ip = t, On = null;
            return;
          }
          if (Ve && a.mode & Nt && zm(a, !0), $e)
            if (va(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              vs(a, t, hr);
          M1(e, a.return, a, t, hr), ER(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function yR() {
      var e = $S.current;
      return $S.current = km, e === null ? km : e;
    }
    function gR(e) {
      $S.current = e;
    }
    function o_() {
      GS = Qn();
    }
    function Jp(e) {
      Bm = tt(e, Bm);
    }
    function s_() {
      mr === Yu && (mr = Vm);
    }
    function rE() {
      (mr === Yu || mr === Vm || mr === ac) && (mr = $p), Sa !== null && (xs(Bm) || xs(Wp)) && $o(Sa, hr);
    }
    function c_(e) {
      mr !== $p && (mr = ac), Qp === null ? Qp = [e] : Qp.push(e);
    }
    function f_() {
      return mr === Yu;
    }
    function Xm(e, t) {
      var a = Tt;
      Tt |= Vr;
      var i = yR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, hr), u.clear()), nh(e, t);
        }
        $u = Yd(), lc(e, t);
      }
      Cu(t);
      do
        try {
          d_();
          break;
        } catch (s) {
          mR(e, s);
        }
      while (!0);
      if (im(), Tt = a, gR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ac(), Sa = null, hr = Q, mr;
    }
    function d_() {
      for (; On !== null; )
        SR(On);
    }
    function p_(e, t) {
      var a = Tt;
      Tt |= Vr;
      var i = yR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, hr), u.clear()), nh(e, t);
        }
        $u = Yd(), Gp(), lc(e, t);
      }
      Cu(t);
      do
        try {
          v_();
          break;
        } catch (s) {
          mR(e, s);
        }
      while (!0);
      return im(), gR(i), Tt = a, On !== null ? (Qv(), Yu) : (Ac(), Sa = null, hr = Q, mr);
    }
    function v_() {
      for (; On !== null && !Rd(); )
        SR(On);
    }
    function SR(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Nt) !== Le ? (lS(e), a = aE(t, e, Jl), zm(e, !0)) : a = aE(t, e, Jl), cn(), e.memoizedProps = e.pendingProps, a === null ? ER(e) : On = a, IS.current = null;
    }
    function ER(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & fs) === Ne) {
          It(t);
          var u = void 0;
          if ((t.mode & Nt) === Le ? u = YC(a, t, Jl) : (lS(t), u = YC(a, t, Jl), zm(t, !1)), cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = sb(a, t);
          if (s !== null) {
            s.flags &= Vv, On = s;
            return;
          }
          if ((t.mode & Nt) !== Le) {
            zm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= fs, i.subtreeFlags = Ne, i.deletions = null;
          else {
            mr = WS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      mr === Yu && (mr = uR);
    }
    function uc(e, t, a) {
      var i = Ua(), u = Pr.transition;
      try {
        Pr.transition = null, Fn(Or), h_(e, t, a, i);
      } finally {
        Pr.transition = u, Fn(i);
      }
      return null;
    }
    function h_(e, t, a, i) {
      do
        Wu();
      while (Bo !== null);
      if (b_(), (Tt & (Vr | ji)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Dd(s), u === null)
        return kd(), null;
      if (s === Q && C("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = tt(u.lanes, u.childLanes);
      Vd(e, f), e === Sa && (Sa = null, On = null, hr = Q), ((u.subtreeFlags & Gi) !== Ne || (u.flags & Gi) !== Ne) && (ic || (ic = !0, KS = a, uE(qi, function() {
        return Wu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Ol | Ml | Gi)) !== Ne, v = (u.flags & (kl | Ol | Ml | Gi)) !== Ne;
      if (p || v) {
        var S = Pr.transition;
        Pr.transition = null;
        var R = Ua();
        Fn(Or);
        var O = Tt;
        Tt |= ji, IS.current = null, vb(e, u), fC(), Db(e, u, s), _w(e.containerInfo), e.current = u, hs(s), kb(u, e, s), ms(), Td(), Tt = O, Fn(R), Pr.transition = S;
      } else
        e.current = u, fC();
      var D = ic;
      if (ic ? (ic = !1, Bo = e, qp = s) : (Qf = 0, Wm = null), f = e.pendingLanes, f === Q && (Wf = null), D || wR(e.current, !1), xd(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), Gb(), Va(e, Qn()), t !== null)
        for (var A = e.onRecoverableError, H = 0; H < t.length; H++) {
          var B = t[H], de = B.stack, Ae = B.digest;
          A(B.value, {
            componentStack: de,
            digest: Ae
          });
        }
      if ($m) {
        $m = !1;
        var De = qS;
        throw qS = null, De;
      }
      return Jr(qp, Be) && e.tag !== No && Wu(), f = e.pendingLanes, Jr(f, Be) ? (E1(), e === JS ? Xp++ : (Xp = 0, JS = e)) : Xp = 0, Lo(), kd(), null;
    }
    function Wu() {
      if (Bo !== null) {
        var e = ih(qp), t = Ms(La, e), a = Pr.transition, i = Ua();
        try {
          return Pr.transition = null, Fn(t), y_();
        } finally {
          Fn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function m_(e) {
      XS.push(e), ic || (ic = !0, uE(qi, function() {
        return Wu(), null;
      }));
    }
    function y_() {
      if (Bo === null)
        return !1;
      var e = KS;
      KS = null;
      var t = Bo, a = qp;
      if (Bo = null, qp = Q, (Tt & (Vr | ji)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      ZS = !0, Im = !1, Eu(a);
      var i = Tt;
      Tt |= ji, Ab(t.current), Nb(t, t.current, a, e);
      {
        var u = XS;
        XS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          gb(t, f);
        }
      }
      Nd(), wR(t.current, !0), Tt = i, Lo(), Im ? t === Wm ? Qf++ : (Qf = 0, Wm = t) : Qf = 0, ZS = !1, Im = !1, bd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function CR(e) {
      return Wf !== null && Wf.has(e);
    }
    function g_(e) {
      Wf === null ? Wf = /* @__PURE__ */ new Set([e]) : Wf.add(e);
    }
    function S_(e) {
      $m || ($m = !0, qS = e);
    }
    var E_ = S_;
    function RR(e, t, a) {
      var i = nc(a, t), u = SC(e, i, Be), s = Uo(e, u, Be), f = Ea();
      s !== null && (Eo(s, Be, f), Va(s, f));
    }
    function fn(e, t, a) {
      if (fb(a), ev(!1), e.tag === J) {
        RR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          RR(i, e, a);
          return;
        } else if (i.tag === K) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !CR(s)) {
            var f = nc(a, e), p = wS(i, f, Be), v = Uo(i, p, Be), S = Ea();
            v !== null && (Eo(v, Be, S), Va(v, S));
            return;
          }
        }
        i = i.return;
      }
      C(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function C_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      af(e, a), O_(e), Sa === e && ku(hr, a) && (mr === $p || mr === Vm && Du(hr) && Qn() - GS < oR ? lc(e, Q) : Ym = tt(Ym, a)), Va(e, u);
    }
    function TR(e, t) {
      t === kt && (t = t_(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (Eo(i, t, a), Va(i, a));
    }
    function R_(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), TR(e, a);
    }
    function T_(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case Me:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case un:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), TR(e, a);
    }
    function w_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Kb(e / 1960) * 1960;
    }
    function x_() {
      if (Xp > Zb)
        throw Xp = 0, JS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > e_ && (Qf = 0, Wm = null, C("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function b_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function wR(e, t) {
      It(e), Km(e, Dl, Ib), t && Km(e, Ti, Wb), Km(e, Dl, Yb), t && Km(e, Ti, $b), cn();
    }
    function Km(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ne ? i = i.child : ((i.flags & t) !== Ne && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Jm = null;
    function xR(e) {
      {
        if ((Tt & Vr) !== vr || !(e.mode & ft))
          return;
        var t = e.tag;
        if (t !== be && t !== J && t !== K && t !== ae && t !== Ke && t !== dt && t !== Ye)
          return;
        var a = Qe(e) || "ReactComponent";
        if (Jm !== null) {
          if (Jm.has(a))
            return;
          Jm.add(a);
        } else
          Jm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          It(e), C("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : cn();
        }
      }
    }
    var aE;
    {
      var __ = null;
      aE = function(e, t, a) {
        var i = LR(__, t);
        try {
          return FC(e, t, a);
        } catch (s) {
          if (Hx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (im(), P0(), $C(e, t), LR(t, i), t.mode & Nt && lS(t), _l(null, FC, null, e, t, a), Wi()) {
            var u = cs();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var bR = !1, iE;
    iE = /* @__PURE__ */ new Set();
    function D_(e) {
      if (mi && !y1())
        switch (e.tag) {
          case ae:
          case Ke:
          case Ye: {
            var t = On && Qe(On) || "Unknown", a = t;
            if (!iE.has(a)) {
              iE.add(a);
              var i = Qe(e) || "Unknown";
              C("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case K: {
            bR || (C("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), bR = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ks(e, i, t);
        });
      }
    }
    var lE = {};
    function uE(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), lE) : Cd(e, t);
      }
    }
    function _R(e) {
      if (e !== lE)
        return Yv(e);
    }
    function DR() {
      return dl.current !== null;
    }
    function k_(e) {
      {
        if (e.mode & ft) {
          if (!iR())
            return;
        } else if (!Xb() || Tt !== vr || e.tag !== ae && e.tag !== Ke && e.tag !== Ye)
          return;
        if (dl.current === null) {
          var t = ir;
          try {
            It(e), C(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? It(e) : cn();
          }
        }
      }
    }
    function O_(e) {
      e.tag !== No && iR() && dl.current === null && C(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ev(e) {
      fR = e;
    }
    var Fi = null, Gf = null, M_ = function(e) {
      Fi = e;
    };
    function qf(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function oE(e) {
      return qf(e);
    }
    function sE(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: W,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function kR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case K: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ae: {
            (typeof i == "function" || s === Ge) && (u = !0);
            break;
          }
          case Ke: {
            (s === W || s === Ge) && (u = !0);
            break;
          }
          case dt:
          case Ye: {
            (s === Ze || s === Ge) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function OR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        Gf === null && (Gf = /* @__PURE__ */ new WeakSet()), Gf.add(e);
      }
    }
    var N_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wu(), Iu(function() {
          cE(e.current, i, a);
        });
      }
    }, L_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Wu(), Iu(function() {
          tv(t, e, null, null);
        });
      }
    };
    function cE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ae:
          case Ye:
          case K:
            v = p;
            break;
          case Ke:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, R = !1;
        if (v !== null) {
          var O = Fi(v);
          O !== void 0 && (a.has(O) ? R = !0 : t.has(O) && (f === K ? R = !0 : S = !0));
        }
        if (Gf !== null && (Gf.has(e) || i !== null && Gf.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || S) {
          var D = Fa(e, Be);
          D !== null && yr(D, e, Be, Kt);
        }
        u !== null && !R && cE(u, t, a), s !== null && cE(s, t, a);
      }
    }
    var z_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return fE(e.current, i, a), a;
      }
    };
    function fE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ae:
          case Ye:
          case K:
            p = f;
            break;
          case Ke:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? U_(e, a) : i !== null && fE(i, t, a), u !== null && fE(u, t, a);
      }
    }
    function U_(e, t) {
      {
        var a = A_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case Se:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function A_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var dE;
    {
      dE = !1;
      try {
        var MR = Object.preventExtensions({});
      } catch {
        dE = !0;
      }
    }
    function j_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ne, this.subtreeFlags = Ne, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !dE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new j_(e, t, a, i);
    };
    function pE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function F_(e) {
      return typeof e == "function" && !pE(e) && e.defaultProps === void 0;
    }
    function H_(e) {
      if (typeof e == "function")
        return pE(e) ? K : ae;
      if (e != null) {
        var t = e.$$typeof;
        if (t === W)
          return Ke;
        if (t === Ze)
          return dt;
      }
      return be;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ne, a.subtreeFlags = Ne, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case be:
        case ae:
        case Ye:
          a.type = qf(e.type);
          break;
        case K:
          a.type = oE(e.type);
          break;
        case Ke:
          a.type = sE(e.type);
          break;
      }
      return a;
    }
    function P_(e, t) {
      e.flags &= Un | wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = Ne, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ne, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function V_(e, t, a) {
      var i;
      return e === qh ? (i = ft, t === !0 && (i |= Gt, i |= Lt)) : i = Le, Kr && (i |= Nt), oi(J, null, null, i);
    }
    function vE(e, t, a, i, u, s) {
      var f = be, p = e;
      if (typeof e == "function")
        pE(e) ? (f = K, p = oE(p)) : p = qf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case di:
            return Io(a.children, u, s, t);
          case Wa:
            f = mt, u |= Gt, (u & ft) !== Le && (u |= Lt);
            break;
          case pi:
            return B_(a, u, s, t);
          case ce:
            return Y_(a, u, s, t);
          case ge:
            return $_(a, u, s, t);
          case Tn:
            return NR(a, u, s, t);
          case nn:
          // eslint-disable-next-line no-fallthrough
          case pt:
          // eslint-disable-next-line no-fallthrough
          case sn:
          // eslint-disable-next-line no-fallthrough
          case ar:
          // eslint-disable-next-line no-fallthrough
          case ct:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = ht;
                  break e;
                case x:
                  f = dn;
                  break e;
                case W:
                  f = Ke, p = sE(p);
                  break e;
                case Ze:
                  f = dt;
                  break e;
                case Ge:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? Qe(i) : null;
              S && (v += `

Check the render method of \`` + S + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var R = oi(f, a, t, u);
      return R.elementType = e, R.type = p, R.lanes = s, R._debugOwner = i, R;
    }
    function hE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = vE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = oi(Et, e, i, t);
      return u.lanes = a, u;
    }
    function B_(e, t, a, i) {
      typeof e.id != "string" && C('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(yt, e, i, t | Nt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Y_(e, t, a, i) {
      var u = oi(Me, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function $_(e, t, a, i) {
      var u = oi(un, e, i, t);
      return u.elementType = ge, u.lanes = a, u;
    }
    function NR(e, t, a, i) {
      var u = oi(ze, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function mE(e, t, a) {
      var i = oi(Xe, e, null, t);
      return i.lanes = a, i;
    }
    function I_() {
      var e = oi(oe, null, null, Le);
      return e.elementType = "DELETED", e;
    }
    function W_(e) {
      var t = oi(Zt, null, null, Le);
      return t.stateNode = e, t;
    }
    function yE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(Se, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function LR(e, t) {
      return e === null && (e = oi(be, null, null, Le)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Q_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = Ds(Q), this.expirationTimes = Ds(Kt), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = Ds(Q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ru; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case qh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case No:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function zR(e, t, a, i, u, s, f, p, v, S) {
      var R = new Q_(e, t, a, p, v), O = V_(t, s);
      R.current = O, O.stateNode = R;
      {
        var D = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        O.memoizedState = D;
      }
      return Og(O), R;
    }
    var gE = "18.3.1";
    function G_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var SE, EE;
    SE = !1, EE = {};
    function UR(e) {
      if (!e)
        return ui;
      var t = vo(e), a = Ox(t);
      if (t.tag === K) {
        var i = t.type;
        if (Il(i))
          return o0(t, i, a);
      }
      return a;
    }
    function q_(e, t) {
      {
        var a = vo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Qe(a) || "Component";
          if (!EE[s]) {
            EE[s] = !0;
            var f = ir;
            try {
              It(u), a.mode & Gt ? C("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : C("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function AR(e, t, a, i, u, s, f, p) {
      var v = !1, S = null;
      return zR(e, t, v, S, a, i, u, s, f);
    }
    function jR(e, t, a, i, u, s, f, p, v, S) {
      var R = !0, O = zR(a, i, R, e, u, s, f, p, v);
      O.context = UR(null);
      var D = O.current, A = Ea(), H = Yo(D), B = Vu(A, H);
      return B.callback = t ?? null, Uo(D, B, H), n_(O, H, A), O;
    }
    function tv(e, t, a, i) {
      wd(t, e);
      var u = t.current, s = Ea(), f = Yo(u);
      gn(f);
      var p = UR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && ir !== null && !SE && (SE = !0, C(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(ir) || "Unknown"));
      var v = Vu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && C("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var S = Uo(u, v, f);
      return S !== null && (yr(S, u, f, s), cm(S, u, f)), f;
    }
    function Zm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function X_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (uf(t)) {
            var a = qv(t);
            l_(t, a);
          }
          break;
        }
        case Me: {
          Iu(function() {
            var u = Fa(e, Be);
            if (u !== null) {
              var s = Ea();
              yr(u, e, Be, s);
            }
          });
          var i = Be;
          CE(e, i);
          break;
        }
      }
    }
    function FR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = eh(a.retryLane, t));
    }
    function CE(e, t) {
      FR(e, t);
      var a = e.alternate;
      a && FR(a, t);
    }
    function K_(e) {
      if (e.tag === Me) {
        var t = Rs, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        CE(e, t);
      }
    }
    function J_(e) {
      if (e.tag === Me) {
        var t = Yo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        CE(e, t);
      }
    }
    function HR(e) {
      var t = pn(e);
      return t === null ? null : t.stateNode;
    }
    var PR = function(e) {
      return null;
    };
    function Z_(e) {
      return PR(e);
    }
    var VR = function(e) {
      return !1;
    };
    function eD(e) {
      return VR(e);
    }
    var BR = null, YR = null, $R = null, IR = null, WR = null, QR = null, GR = null, qR = null, XR = null;
    {
      var KR = function(e, t, a) {
        var i = t[a], u = ut(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (ut(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = KR(e[i], t, a + 1), u);
      }, JR = function(e, t) {
        return KR(e, t, 0);
      }, ZR = function(e, t, a, i) {
        var u = t[i], s = ut(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ut(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = ZR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, eT = function(e, t, a) {
        if (t.length !== a.length) {
          ne("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ne("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ZR(e, t, a, 0);
      }, tT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ut(e) ? e.slice() : rt({}, e);
        return s[u] = tT(e[u], t, a + 1, i), s;
      }, nT = function(e, t, a) {
        return tT(e, t, 0, a);
      }, RE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      BR = function(e, t, a, i) {
        var u = RE(e, t);
        if (u !== null) {
          var s = nT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Fa(e, Be);
          f !== null && yr(f, e, Be, Kt);
        }
      }, YR = function(e, t, a) {
        var i = RE(e, t);
        if (i !== null) {
          var u = JR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Fa(e, Be);
          s !== null && yr(s, e, Be, Kt);
        }
      }, $R = function(e, t, a, i) {
        var u = RE(e, t);
        if (u !== null) {
          var s = eT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Fa(e, Be);
          f !== null && yr(f, e, Be, Kt);
        }
      }, IR = function(e, t, a) {
        e.pendingProps = nT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Be);
        i !== null && yr(i, e, Be, Kt);
      }, WR = function(e, t) {
        e.pendingProps = JR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Be);
        a !== null && yr(a, e, Be, Kt);
      }, QR = function(e, t, a) {
        e.pendingProps = eT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Be);
        i !== null && yr(i, e, Be, Kt);
      }, GR = function(e) {
        var t = Fa(e, Be);
        t !== null && yr(t, e, Be, Kt);
      }, qR = function(e) {
        PR = e;
      }, XR = function(e) {
        VR = e;
      };
    }
    function tD(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function nD(e) {
      return null;
    }
    function rD() {
      return ir;
    }
    function aD(e) {
      var t = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return yo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: BR,
        overrideHookStateDeletePath: YR,
        overrideHookStateRenamePath: $R,
        overrideProps: IR,
        overridePropsDeletePath: WR,
        overridePropsRenamePath: QR,
        setErrorHandler: qR,
        setSuspenseHandler: XR,
        scheduleUpdate: GR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tD,
        findFiberByHostInstance: t || nD,
        // React Refresh
        findHostInstancesForRefresh: z_,
        scheduleRefresh: N_,
        scheduleRoot: L_,
        setRefreshHandler: M_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: gE
      });
    }
    var rT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function TE(e) {
      this._internalRoot = e;
    }
    ey.prototype.render = TE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? C("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ty(arguments[1]) ? C("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && C("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = HR(t.current);
          i && i.parentNode !== a && C("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      tv(e, t, null, null);
    }, ey.prototype.unmount = TE.prototype.unmount = function() {
      typeof arguments[0] == "function" && C("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hR() && C("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          tv(null, e, null, null);
        }), r0(t);
      }
    };
    function iD(e, t) {
      if (!ty(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      aT(e);
      var a = !1, i = !1, u = "", s = rT;
      t != null && (t.hydrate ? ne("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === br && C(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = AR(e, qh, null, a, i, u, s);
      Bh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return up(p), new TE(f);
    }
    function ey(e) {
      this._internalRoot = e;
    }
    function lD(e) {
      e && ch(e);
    }
    ey.prototype.unstable_scheduleHydration = lD;
    function uD(e, t, a) {
      if (!ty(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      aT(e), t === void 0 && C("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = rT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var S = jR(t, null, e, qh, i, s, f, p, v);
      if (Bh(S.current, e), up(e), u)
        for (var R = 0; R < u.length; R++) {
          var O = u[R];
          f1(S, O);
        }
      return new ey(S);
    }
    function ty(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === Ii || e.nodeType === sd));
    }
    function nv(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === Ii || e.nodeType === sd || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function aT(e) {
      e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && C("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), gp(e) && (e._reactRootContainer ? C("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : C("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var oD = y.ReactCurrentOwner, iT;
    iT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = HR(e._reactRootContainer.current);
        t && t.parentNode !== e && C("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = wE(e), u = !!(i && Oo(i));
      u && !a && C("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && C("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function wE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function lT() {
    }
    function sD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var D = Zm(f);
            s.call(D);
          };
        }
        var f = jR(
          t,
          i,
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          lT
        );
        e._reactRootContainer = f, Bh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return up(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var D = Zm(R);
            S.call(D);
          };
        }
        var R = AR(
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          lT
        );
        e._reactRootContainer = R, Bh(R.current, e);
        var O = e.nodeType === Ln ? e.parentNode : e;
        return up(O), Iu(function() {
          tv(t, R, a, i);
        }), R;
      }
    }
    function cD(e, t) {
      e !== null && typeof e != "function" && C("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ny(e, t, a, i, u) {
      iT(a), cD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = sD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Zm(f);
            p.call(v);
          };
        }
        tv(t, f, e, u);
      }
      return Zm(f);
    }
    var uT = !1;
    function fD(e) {
      {
        uT || (uT = !0, C("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = oD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || C("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ir ? e : q_(e, "findDOMNode");
    }
    function dD(e, t, a) {
      if (C("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = gp(t) && t._reactRootContainer === void 0;
        i && C("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ny(null, e, t, !0, a);
    }
    function pD(e, t, a) {
      if (C("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = gp(t) && t._reactRootContainer === void 0;
        i && C("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ny(null, e, t, !1, a);
    }
    function vD(e, t, a, i) {
      if (C("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Cy(e))
        throw new Error("parentComponent must be a valid React Component");
      return ny(e, t, a, !1, i);
    }
    var oT = !1;
    function hD(e) {
      if (oT || (oT = !0, C("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !nv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = gp(e) && e._reactRootContainer === void 0;
        t && C("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = wE(e), i = a && !Oo(a);
          i && C("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          ny(null, null, e, !1, function() {
            e._reactRootContainer = null, r0(e);
          });
        }), !0;
      } else {
        {
          var u = wE(e), s = !!(u && Oo(u)), f = e.nodeType === Ir && nv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && C("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Rr(X_), Co(K_), lh(J_), Ls(Ua), $d(rh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && C("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tc(yw), Ey(tE, u_, Iu);
    function mD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ty(t))
        throw new Error("Target container is not a DOM element.");
      return G_(e, t, null, a);
    }
    function yD(e, t, a, i) {
      return vD(e, t, a, i);
    }
    var xE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Oo, bf, Yh, so, wc, tE]
    };
    function gD(e, t) {
      return xE.usingClientEntryPoint || C('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iD(e, t);
    }
    function SD(e, t, a) {
      return xE.usingClientEntryPoint || C('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uD(e, t, a);
    }
    function ED(e) {
      return hR() && C("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var CD = aD({
      findFiberByHostInstance: Qs,
      bundleType: 1,
      version: gE,
      rendererPackageName: "react-dom"
    });
    if (!CD && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var sT = window.location.protocol;
      /^(https?|file):$/.test(sT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (sT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xE, Ya.createPortal = mD, Ya.createRoot = gD, Ya.findDOMNode = fD, Ya.flushSync = ED, Ya.hydrate = dD, Ya.hydrateRoot = SD, Ya.render = pD, Ya.unmountComponentAtNode = hD, Ya.unstable_batchedUpdates = tE, Ya.unstable_renderSubtreeIntoContainer = yD, Ya.version = gE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
var RT;
function zD() {
  if (RT) return iy.exports;
  RT = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (E) {
        console.error(E);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (g(), iy.exports = ND()) : iy.exports = LD(), iy.exports;
}
var TT;
function UD() {
  if (TT) return Kf;
  TT = 1;
  var g = zD();
  if (process.env.NODE_ENV === "production")
    Kf.createRoot = g.createRoot, Kf.hydrateRoot = g.hydrateRoot;
  else {
    var E = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Kf.createRoot = function(y, b) {
      E.usingClientEntryPoint = !0;
      try {
        return g.createRoot(y, b);
      } finally {
        E.usingClientEntryPoint = !1;
      }
    }, Kf.hydrateRoot = function(y, b, P) {
      E.usingClientEntryPoint = !0;
      try {
        return g.hydrateRoot(y, b, P);
      } finally {
        E.usingClientEntryPoint = !1;
      }
    };
  }
  return Kf;
}
var AD = UD();
const LT = 6048e5, jD = 864e5, wT = Symbol.for("constructDateFrom");
function Qo(g, E) {
  return typeof g == "function" ? g(E) : g && typeof g == "object" && wT in g ? g[wT](E) : g instanceof Date ? new g.constructor(E) : new Date(E);
}
function pl(g, E) {
  return Qo(E || g, g);
}
let FD = {};
function sy() {
  return FD;
}
function cv(g, E) {
  const y = sy(), b = E?.weekStartsOn ?? E?.locale?.options?.weekStartsOn ?? y.weekStartsOn ?? y.locale?.options?.weekStartsOn ?? 0, P = pl(g, E?.in), ne = P.getDay(), C = (ne < b ? 7 : 0) + ne - b;
  return P.setDate(P.getDate() - C), P.setHours(0, 0, 0, 0), P;
}
function oy(g, E) {
  return cv(g, { ...E, weekStartsOn: 1 });
}
function zT(g, E) {
  const y = pl(g, E?.in), b = y.getFullYear(), P = Qo(y, 0);
  P.setFullYear(b + 1, 0, 4), P.setHours(0, 0, 0, 0);
  const ne = oy(P), C = Qo(y, 0);
  C.setFullYear(b, 0, 4), C.setHours(0, 0, 0, 0);
  const Fe = oy(C);
  return y.getTime() >= ne.getTime() ? b + 1 : y.getTime() >= Fe.getTime() ? b : b - 1;
}
function xT(g) {
  const E = pl(g), y = new Date(
    Date.UTC(
      E.getFullYear(),
      E.getMonth(),
      E.getDate(),
      E.getHours(),
      E.getMinutes(),
      E.getSeconds(),
      E.getMilliseconds()
    )
  );
  return y.setUTCFullYear(E.getFullYear()), +g - +y;
}
function HD(g, ...E) {
  const y = Qo.bind(
    null,
    E.find((b) => typeof b == "object")
  );
  return E.map(y);
}
function bT(g, E) {
  const y = pl(g, E?.in);
  return y.setHours(0, 0, 0, 0), y;
}
function PD(g, E, y) {
  const [b, P] = HD(
    y?.in,
    g,
    E
  ), ne = bT(b), C = bT(P), Fe = +ne - xT(ne), ae = +C - xT(C);
  return Math.round((Fe - ae) / jD);
}
function VD(g, E) {
  const y = zT(g, E), b = Qo(g, 0);
  return b.setFullYear(y, 0, 4), b.setHours(0, 0, 0, 0), oy(b);
}
function BD(g) {
  return g instanceof Date || typeof g == "object" && Object.prototype.toString.call(g) === "[object Date]";
}
function YD(g) {
  return !(!BD(g) && typeof g != "number" || isNaN(+pl(g)));
}
function $D(g, E) {
  const y = pl(g, E?.in);
  return y.setFullYear(y.getFullYear(), 0, 1), y.setHours(0, 0, 0, 0), y;
}
const ID = {
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
}, WD = (g, E, y) => {
  let b;
  const P = ID[g];
  return typeof P == "string" ? b = P : E === 1 ? b = P.one : b = P.other.replace("{{count}}", E.toString()), y?.addSuffix ? y.comparison && y.comparison > 0 ? "in " + b : b + " ago" : b;
};
function DE(g) {
  return (E = {}) => {
    const y = E.width ? String(E.width) : g.defaultWidth;
    return g.formats[y] || g.formats[g.defaultWidth];
  };
}
const QD = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, GD = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, qD = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, XD = {
  date: DE({
    formats: QD,
    defaultWidth: "full"
  }),
  time: DE({
    formats: GD,
    defaultWidth: "full"
  }),
  dateTime: DE({
    formats: qD,
    defaultWidth: "full"
  })
}, KD = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, JD = (g, E, y, b) => KD[g];
function lv(g) {
  return (E, y) => {
    const b = y?.context ? String(y.context) : "standalone";
    let P;
    if (b === "formatting" && g.formattingValues) {
      const C = g.defaultFormattingWidth || g.defaultWidth, Fe = y?.width ? String(y.width) : C;
      P = g.formattingValues[Fe] || g.formattingValues[C];
    } else {
      const C = g.defaultWidth, Fe = y?.width ? String(y.width) : g.defaultWidth;
      P = g.values[Fe] || g.values[C];
    }
    const ne = g.argumentCallback ? g.argumentCallback(E) : E;
    return P[ne];
  };
}
const ZD = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ek = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tk = {
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
}, nk = {
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
}, rk = {
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
}, ak = {
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
}, ik = (g, E) => {
  const y = Number(g), b = y % 100;
  if (b > 20 || b < 10)
    switch (b % 10) {
      case 1:
        return y + "st";
      case 2:
        return y + "nd";
      case 3:
        return y + "rd";
    }
  return y + "th";
}, lk = {
  ordinalNumber: ik,
  era: lv({
    values: ZD,
    defaultWidth: "wide"
  }),
  quarter: lv({
    values: ek,
    defaultWidth: "wide",
    argumentCallback: (g) => g - 1
  }),
  month: lv({
    values: tk,
    defaultWidth: "wide"
  }),
  day: lv({
    values: nk,
    defaultWidth: "wide"
  }),
  dayPeriod: lv({
    values: rk,
    defaultWidth: "wide",
    formattingValues: ak,
    defaultFormattingWidth: "wide"
  })
};
function uv(g) {
  return (E, y = {}) => {
    const b = y.width, P = b && g.matchPatterns[b] || g.matchPatterns[g.defaultMatchWidth], ne = E.match(P);
    if (!ne)
      return null;
    const C = ne[0], Fe = b && g.parsePatterns[b] || g.parsePatterns[g.defaultParseWidth], ae = Array.isArray(Fe) ? ok(Fe, (J) => J.test(C)) : (
      // [TODO] -- I challenge you to fix the type
      uk(Fe, (J) => J.test(C))
    );
    let K;
    K = g.valueCallback ? g.valueCallback(ae) : ae, K = y.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      y.valueCallback(K)
    ) : K;
    const be = E.slice(C.length);
    return { value: K, rest: be };
  };
}
function uk(g, E) {
  for (const y in g)
    if (Object.prototype.hasOwnProperty.call(g, y) && E(g[y]))
      return y;
}
function ok(g, E) {
  for (let y = 0; y < g.length; y++)
    if (E(g[y]))
      return y;
}
function sk(g) {
  return (E, y = {}) => {
    const b = E.match(g.matchPattern);
    if (!b) return null;
    const P = b[0], ne = E.match(g.parsePattern);
    if (!ne) return null;
    let C = g.valueCallback ? g.valueCallback(ne[0]) : ne[0];
    C = y.valueCallback ? y.valueCallback(C) : C;
    const Fe = E.slice(P.length);
    return { value: C, rest: Fe };
  };
}
const ck = /^(\d+)(th|st|nd|rd)?/i, fk = /\d+/i, dk = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, pk = {
  any: [/^b/i, /^(a|c)/i]
}, vk = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hk = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mk = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yk = {
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
}, gk = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Sk = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ek = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ck = {
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
}, Rk = {
  ordinalNumber: sk({
    matchPattern: ck,
    parsePattern: fk,
    valueCallback: (g) => parseInt(g, 10)
  }),
  era: uv({
    matchPatterns: dk,
    defaultMatchWidth: "wide",
    parsePatterns: pk,
    defaultParseWidth: "any"
  }),
  quarter: uv({
    matchPatterns: vk,
    defaultMatchWidth: "wide",
    parsePatterns: hk,
    defaultParseWidth: "any",
    valueCallback: (g) => g + 1
  }),
  month: uv({
    matchPatterns: mk,
    defaultMatchWidth: "wide",
    parsePatterns: yk,
    defaultParseWidth: "any"
  }),
  day: uv({
    matchPatterns: gk,
    defaultMatchWidth: "wide",
    parsePatterns: Sk,
    defaultParseWidth: "any"
  }),
  dayPeriod: uv({
    matchPatterns: Ek,
    defaultMatchWidth: "any",
    parsePatterns: Ck,
    defaultParseWidth: "any"
  })
}, Tk = {
  code: "en-US",
  formatDistance: WD,
  formatLong: XD,
  formatRelative: JD,
  localize: lk,
  match: Rk,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function wk(g, E) {
  const y = pl(g, E?.in);
  return PD(y, $D(y)) + 1;
}
function xk(g, E) {
  const y = pl(g, E?.in), b = +oy(y) - +VD(y);
  return Math.round(b / LT) + 1;
}
function UT(g, E) {
  const y = pl(g, E?.in), b = y.getFullYear(), P = sy(), ne = E?.firstWeekContainsDate ?? E?.locale?.options?.firstWeekContainsDate ?? P.firstWeekContainsDate ?? P.locale?.options?.firstWeekContainsDate ?? 1, C = Qo(E?.in || g, 0);
  C.setFullYear(b + 1, 0, ne), C.setHours(0, 0, 0, 0);
  const Fe = cv(C, E), ae = Qo(E?.in || g, 0);
  ae.setFullYear(b, 0, ne), ae.setHours(0, 0, 0, 0);
  const K = cv(ae, E);
  return +y >= +Fe ? b + 1 : +y >= +K ? b : b - 1;
}
function bk(g, E) {
  const y = sy(), b = E?.firstWeekContainsDate ?? E?.locale?.options?.firstWeekContainsDate ?? y.firstWeekContainsDate ?? y.locale?.options?.firstWeekContainsDate ?? 1, P = UT(g, E), ne = Qo(E?.in || g, 0);
  return ne.setFullYear(P, 0, b), ne.setHours(0, 0, 0, 0), cv(ne, E);
}
function _k(g, E) {
  const y = pl(g, E?.in), b = +cv(y, E) - +bk(y, E);
  return Math.round(b / LT) + 1;
}
function Jt(g, E) {
  const y = g < 0 ? "-" : "", b = Math.abs(g).toString().padStart(E, "0");
  return y + b;
}
const Wo = {
  // Year
  y(g, E) {
    const y = g.getFullYear(), b = y > 0 ? y : 1 - y;
    return Jt(E === "yy" ? b % 100 : b, E.length);
  },
  // Month
  M(g, E) {
    const y = g.getMonth();
    return E === "M" ? String(y + 1) : Jt(y + 1, 2);
  },
  // Day of the month
  d(g, E) {
    return Jt(g.getDate(), E.length);
  },
  // AM or PM
  a(g, E) {
    const y = g.getHours() / 12 >= 1 ? "pm" : "am";
    switch (E) {
      case "a":
      case "aa":
        return y.toUpperCase();
      case "aaa":
        return y;
      case "aaaaa":
        return y[0];
      case "aaaa":
      default:
        return y === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(g, E) {
    return Jt(g.getHours() % 12 || 12, E.length);
  },
  // Hour [0-23]
  H(g, E) {
    return Jt(g.getHours(), E.length);
  },
  // Minute
  m(g, E) {
    return Jt(g.getMinutes(), E.length);
  },
  // Second
  s(g, E) {
    return Jt(g.getSeconds(), E.length);
  },
  // Fraction of second
  S(g, E) {
    const y = E.length, b = g.getMilliseconds(), P = Math.trunc(
      b * Math.pow(10, y - 3)
    );
    return Jt(P, E.length);
  }
}, Jf = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _T = {
  // Era
  G: function(g, E, y) {
    const b = g.getFullYear() > 0 ? 1 : 0;
    switch (E) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return y.era(b, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return y.era(b, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return y.era(b, { width: "wide" });
    }
  },
  // Year
  y: function(g, E, y) {
    if (E === "yo") {
      const b = g.getFullYear(), P = b > 0 ? b : 1 - b;
      return y.ordinalNumber(P, { unit: "year" });
    }
    return Wo.y(g, E);
  },
  // Local week-numbering year
  Y: function(g, E, y, b) {
    const P = UT(g, b), ne = P > 0 ? P : 1 - P;
    if (E === "YY") {
      const C = ne % 100;
      return Jt(C, 2);
    }
    return E === "Yo" ? y.ordinalNumber(ne, { unit: "year" }) : Jt(ne, E.length);
  },
  // ISO week-numbering year
  R: function(g, E) {
    const y = zT(g);
    return Jt(y, E.length);
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
  u: function(g, E) {
    const y = g.getFullYear();
    return Jt(y, E.length);
  },
  // Quarter
  Q: function(g, E, y) {
    const b = Math.ceil((g.getMonth() + 1) / 3);
    switch (E) {
      // 1, 2, 3, 4
      case "Q":
        return String(b);
      // 01, 02, 03, 04
      case "QQ":
        return Jt(b, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return y.ordinalNumber(b, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return y.quarter(b, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return y.quarter(b, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return y.quarter(b, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(g, E, y) {
    const b = Math.ceil((g.getMonth() + 1) / 3);
    switch (E) {
      // 1, 2, 3, 4
      case "q":
        return String(b);
      // 01, 02, 03, 04
      case "qq":
        return Jt(b, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return y.ordinalNumber(b, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return y.quarter(b, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return y.quarter(b, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return y.quarter(b, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(g, E, y) {
    const b = g.getMonth();
    switch (E) {
      case "M":
      case "MM":
        return Wo.M(g, E);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return y.ordinalNumber(b + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return y.month(b, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return y.month(b, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return y.month(b, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(g, E, y) {
    const b = g.getMonth();
    switch (E) {
      // 1, 2, ..., 12
      case "L":
        return String(b + 1);
      // 01, 02, ..., 12
      case "LL":
        return Jt(b + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return y.ordinalNumber(b + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return y.month(b, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return y.month(b, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return y.month(b, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(g, E, y, b) {
    const P = _k(g, b);
    return E === "wo" ? y.ordinalNumber(P, { unit: "week" }) : Jt(P, E.length);
  },
  // ISO week of year
  I: function(g, E, y) {
    const b = xk(g);
    return E === "Io" ? y.ordinalNumber(b, { unit: "week" }) : Jt(b, E.length);
  },
  // Day of the month
  d: function(g, E, y) {
    return E === "do" ? y.ordinalNumber(g.getDate(), { unit: "date" }) : Wo.d(g, E);
  },
  // Day of year
  D: function(g, E, y) {
    const b = wk(g);
    return E === "Do" ? y.ordinalNumber(b, { unit: "dayOfYear" }) : Jt(b, E.length);
  },
  // Day of week
  E: function(g, E, y) {
    const b = g.getDay();
    switch (E) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return y.day(b, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return y.day(b, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return y.day(b, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return y.day(b, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(g, E, y, b) {
    const P = g.getDay(), ne = (P - b.weekStartsOn + 8) % 7 || 7;
    switch (E) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(ne);
      // Padded numerical value
      case "ee":
        return Jt(ne, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return y.ordinalNumber(ne, { unit: "day" });
      case "eee":
        return y.day(P, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return y.day(P, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return y.day(P, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return y.day(P, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(g, E, y, b) {
    const P = g.getDay(), ne = (P - b.weekStartsOn + 8) % 7 || 7;
    switch (E) {
      // Numerical value (same as in `e`)
      case "c":
        return String(ne);
      // Padded numerical value
      case "cc":
        return Jt(ne, E.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return y.ordinalNumber(ne, { unit: "day" });
      case "ccc":
        return y.day(P, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return y.day(P, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return y.day(P, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return y.day(P, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(g, E, y) {
    const b = g.getDay(), P = b === 0 ? 7 : b;
    switch (E) {
      // 2
      case "i":
        return String(P);
      // 02
      case "ii":
        return Jt(P, E.length);
      // 2nd
      case "io":
        return y.ordinalNumber(P, { unit: "day" });
      // Tue
      case "iii":
        return y.day(b, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return y.day(b, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return y.day(b, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return y.day(b, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(g, E, y) {
    const P = g.getHours() / 12 >= 1 ? "pm" : "am";
    switch (E) {
      case "a":
      case "aa":
        return y.dayPeriod(P, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return y.dayPeriod(P, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return y.dayPeriod(P, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return y.dayPeriod(P, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(g, E, y) {
    const b = g.getHours();
    let P;
    switch (b === 12 ? P = Jf.noon : b === 0 ? P = Jf.midnight : P = b / 12 >= 1 ? "pm" : "am", E) {
      case "b":
      case "bb":
        return y.dayPeriod(P, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return y.dayPeriod(P, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return y.dayPeriod(P, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return y.dayPeriod(P, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(g, E, y) {
    const b = g.getHours();
    let P;
    switch (b >= 17 ? P = Jf.evening : b >= 12 ? P = Jf.afternoon : b >= 4 ? P = Jf.morning : P = Jf.night, E) {
      case "B":
      case "BB":
      case "BBB":
        return y.dayPeriod(P, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return y.dayPeriod(P, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return y.dayPeriod(P, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(g, E, y) {
    if (E === "ho") {
      let b = g.getHours() % 12;
      return b === 0 && (b = 12), y.ordinalNumber(b, { unit: "hour" });
    }
    return Wo.h(g, E);
  },
  // Hour [0-23]
  H: function(g, E, y) {
    return E === "Ho" ? y.ordinalNumber(g.getHours(), { unit: "hour" }) : Wo.H(g, E);
  },
  // Hour [0-11]
  K: function(g, E, y) {
    const b = g.getHours() % 12;
    return E === "Ko" ? y.ordinalNumber(b, { unit: "hour" }) : Jt(b, E.length);
  },
  // Hour [1-24]
  k: function(g, E, y) {
    let b = g.getHours();
    return b === 0 && (b = 24), E === "ko" ? y.ordinalNumber(b, { unit: "hour" }) : Jt(b, E.length);
  },
  // Minute
  m: function(g, E, y) {
    return E === "mo" ? y.ordinalNumber(g.getMinutes(), { unit: "minute" }) : Wo.m(g, E);
  },
  // Second
  s: function(g, E, y) {
    return E === "so" ? y.ordinalNumber(g.getSeconds(), { unit: "second" }) : Wo.s(g, E);
  },
  // Fraction of second
  S: function(g, E) {
    return Wo.S(g, E);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(g, E, y) {
    const b = g.getTimezoneOffset();
    if (b === 0)
      return "Z";
    switch (E) {
      // Hours and optional minutes
      case "X":
        return kT(b);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return sc(b);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return sc(b, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(g, E, y) {
    const b = g.getTimezoneOffset();
    switch (E) {
      // Hours and optional minutes
      case "x":
        return kT(b);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return sc(b);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return sc(b, ":");
    }
  },
  // Timezone (GMT)
  O: function(g, E, y) {
    const b = g.getTimezoneOffset();
    switch (E) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + DT(b, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + sc(b, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(g, E, y) {
    const b = g.getTimezoneOffset();
    switch (E) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + DT(b, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + sc(b, ":");
    }
  },
  // Seconds timestamp
  t: function(g, E, y) {
    const b = Math.trunc(+g / 1e3);
    return Jt(b, E.length);
  },
  // Milliseconds timestamp
  T: function(g, E, y) {
    return Jt(+g, E.length);
  }
};
function DT(g, E = "") {
  const y = g > 0 ? "-" : "+", b = Math.abs(g), P = Math.trunc(b / 60), ne = b % 60;
  return ne === 0 ? y + String(P) : y + String(P) + E + Jt(ne, 2);
}
function kT(g, E) {
  return g % 60 === 0 ? (g > 0 ? "-" : "+") + Jt(Math.abs(g) / 60, 2) : sc(g, E);
}
function sc(g, E = "") {
  const y = g > 0 ? "-" : "+", b = Math.abs(g), P = Jt(Math.trunc(b / 60), 2), ne = Jt(b % 60, 2);
  return y + P + E + ne;
}
const OT = (g, E) => {
  switch (g) {
    case "P":
      return E.date({ width: "short" });
    case "PP":
      return E.date({ width: "medium" });
    case "PPP":
      return E.date({ width: "long" });
    case "PPPP":
    default:
      return E.date({ width: "full" });
  }
}, AT = (g, E) => {
  switch (g) {
    case "p":
      return E.time({ width: "short" });
    case "pp":
      return E.time({ width: "medium" });
    case "ppp":
      return E.time({ width: "long" });
    case "pppp":
    default:
      return E.time({ width: "full" });
  }
}, Dk = (g, E) => {
  const y = g.match(/(P+)(p+)?/) || [], b = y[1], P = y[2];
  if (!P)
    return OT(g, E);
  let ne;
  switch (b) {
    case "P":
      ne = E.dateTime({ width: "short" });
      break;
    case "PP":
      ne = E.dateTime({ width: "medium" });
      break;
    case "PPP":
      ne = E.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      ne = E.dateTime({ width: "full" });
      break;
  }
  return ne.replace("{{date}}", OT(b, E)).replace("{{time}}", AT(P, E));
}, kk = {
  p: AT,
  P: Dk
}, Ok = /^D+$/, Mk = /^Y+$/, Nk = ["D", "DD", "YY", "YYYY"];
function Lk(g) {
  return Ok.test(g);
}
function zk(g) {
  return Mk.test(g);
}
function Uk(g, E, y) {
  const b = Ak(g, E, y);
  if (console.warn(b), Nk.includes(g)) throw new RangeError(b);
}
function Ak(g, E, y) {
  const b = g[0] === "Y" ? "years" : "days of the month";
  return `Use \`${g.toLowerCase()}\` instead of \`${g}\` (in \`${E}\`) for formatting ${b} to the input \`${y}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const jk = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Hk = /^'([^]*?)'?$/, Pk = /''/g, Vk = /[a-zA-Z]/;
function MT(g, E, y) {
  const b = sy(), P = b.locale ?? Tk, ne = b.firstWeekContainsDate ?? b.locale?.options?.firstWeekContainsDate ?? 1, C = b.weekStartsOn ?? b.locale?.options?.weekStartsOn ?? 0, Fe = pl(g, y?.in);
  if (!YD(Fe))
    throw new RangeError("Invalid time value");
  let ae = E.match(Fk).map((be) => {
    const J = be[0];
    if (J === "p" || J === "P") {
      const Se = kk[J];
      return Se(be, P.formatLong);
    }
    return be;
  }).join("").match(jk).map((be) => {
    if (be === "''")
      return { isToken: !1, value: "'" };
    const J = be[0];
    if (J === "'")
      return { isToken: !1, value: Bk(be) };
    if (_T[J])
      return { isToken: !0, value: be };
    if (J.match(Vk))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + J + "`"
      );
    return { isToken: !1, value: be };
  });
  P.localize.preprocessor && (ae = P.localize.preprocessor(Fe, ae));
  const K = {
    firstWeekContainsDate: ne,
    weekStartsOn: C,
    locale: P
  };
  return ae.map((be) => {
    if (!be.isToken) return be.value;
    const J = be.value;
    (zk(J) || Lk(J)) && Uk(J, E, String(g));
    const Se = _T[J[0]];
    return Se(Fe, J, P.localize, K);
  }).join("");
}
function Bk(g) {
  const E = g.match(Hk);
  return E ? E[1].replace(Pk, "'") : g;
}
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yk = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jT = (...g) => g.filter((E, y, b) => !!E && E.trim() !== "" && b.indexOf(E) === y).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $k = {
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
const Ik = cc.forwardRef(
  ({
    color: g = "currentColor",
    size: E = 24,
    strokeWidth: y = 2,
    absoluteStrokeWidth: b,
    className: P = "",
    children: ne,
    iconNode: C,
    ...Fe
  }, ae) => cc.createElement(
    "svg",
    {
      ref: ae,
      ...$k,
      width: E,
      height: E,
      stroke: g,
      strokeWidth: b ? Number(y) * 24 / Number(E) : y,
      className: jT("lucide", P),
      ...Fe
    },
    [
      ...C.map(([K, be]) => cc.createElement(K, be)),
      ...Array.isArray(ne) ? ne : [ne]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wk = (g, E) => {
  const y = cc.forwardRef(
    ({ className: b, ...P }, ne) => cc.createElement(Ik, {
      ref: ne,
      iconNode: E,
      className: jT(`lucide-${Yk(g)}`, b),
      ...P
    })
  );
  return y.displayName = `${g}`, y;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qk = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], kE = Wk("ExternalLink", Qk);
function Gk() {
  console.debug("IDR Image Data Widget initialized");
}
const qk = "https://idr.openmicroscopy.org/webclient/?show=project-", Xk = "https://idr.openmicroscopy.org/webclient/?show=dataset-", Kk = "https://idr.openmicroscopy.org/webclient/imgData/", Jk = "https://idr.openmicroscopy.org/webclient/render_thumbnail/";
function uy({ heading: g }) {
  return /* @__PURE__ */ we.jsx("div", { className: "w-full px-2 pt-2 pb-[2px] text-sm font-light", children: /* @__PURE__ */ we.jsx("div", { className: "border-b border-b-neutral-700 pb-[2px] w-full", children: g }) });
}
function ov({ label: g, data: E }) {
  return /* @__PURE__ */ we.jsxs("details", { className: "text-sm cursor-pointer", children: [
    /* @__PURE__ */ we.jsx("summary", { children: g }),
    /* @__PURE__ */ we.jsx("div", { className: "p-2 max-h-[300px] overflow-scroll text-xs font-mono border border-neutral-300 bg-neutral-50", children: /* @__PURE__ */ we.jsx("pre", { children: JSON.stringify(E, null, 2) }) })
  ] });
}
function Zk({ imageId: g }) {
  const [E, y] = mT.useState(null), [b, P] = mT.useState(null);
  if (cc.useEffect(() => {
    if (!g) {
      P("No image Id provided");
      return;
    }
    fetch(`${Kk}${g}`).then((oe) => oe.json()).then(y).catch((oe) => P(oe));
  }, [g]), b)
    return /* @__PURE__ */ we.jsx("div", { className: "flex items-center justify-center p-4 text-red-500 bg-red-100 border border-red-500", children: /* @__PURE__ */ we.jsxs("div", { children: [
      "Error: ",
      b?.message ?? b
    ] }) });
  if (!E)
    return /* @__PURE__ */ we.jsx("div", { className: "flex items-center justify-center p-4 bg-green-100 border border-green-500", children: /* @__PURE__ */ we.jsxs("div", { children: [
      "Loading: ",
      g
    ] }) });
  const { channels: ne, perms: C, rdefs: Fe, split_channel: ae, meta: K, ...be } = E, J = MT(new Date(K.imageTimestamp * 1e3), "MMM dd, yyyy"), Se = MT(new Date(K.imageTimestamp * 1e3), "MMM dd, yyyy HH:mm");
  return /* @__PURE__ */ we.jsxs("div", { className: "relative flex flex-col w-full space-y-4 overflow-hidden border rounded-lg shadow-lg lg:space-x-4 lg:flex-row text-neutral-900 border-black-100", children: [
    /* @__PURE__ */ we.jsxs("div", { className: "mb-1 grow-1 lg:basis-1/2", children: [
      /* @__PURE__ */ we.jsx(
        "div",
        {
          className: "h-[240px] bg-cover bg-gray-500 bg-clip-border",
          style: { backgroundImage: `url(${Jk}${g})` }
        }
      ),
      /* @__PURE__ */ we.jsxs("div", { children: [
        /* @__PURE__ */ we.jsx(uy, { heading: "image details" }),
        /* @__PURE__ */ we.jsxs("div", { className: "flex flex-col p-2 space-y-2", children: [
          /* @__PURE__ */ we.jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ we.jsx(
              "a",
              {
                className: "inline-flex font-semibold grow",
                href: `https://idr.openmicroscopy.org/webclient/search/?search_query=${g}`,
                children: /* @__PURE__ */ we.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ we.jsx("div", { children: K.imageName }),
                  /* @__PURE__ */ we.jsx(kE, { size: 14 })
                ] })
              }
            ),
            /* @__PURE__ */ we.jsx(
              "div",
              {
                className: "pl-2 text-sm border-l-2 text-neutral-500 border-l-sky-800",
                title: Se,
                children: J
              }
            )
          ] }),
          /* @__PURE__ */ we.jsx("div", { className: "text-sm text-neutral-500", children: K.imageDescription || K.imageDescription.length ? /* @__PURE__ */ we.jsx("span", { children: K.imageDescription }) : /* @__PURE__ */ we.jsx("span", { className: "text-sm text-neutral-300", children: "no description" }) }),
          /* @__PURE__ */ we.jsxs("div", { className: "flex items-center mt-1 space-x-1 text-xs font-light", children: [
            K.imageAuthor && /* @__PURE__ */ we.jsx("div", { className: "px-[10px] py-[2px] border text-neutral-500 rounded-full border-neutral-500 bg-neutral-200", children: K.imageAuthor?.toLocaleLowerCase() }),
            K.pixelsType && /* @__PURE__ */ we.jsx("div", { className: "px-[10px] py-[2px] text-blue-700 border border-blue-600 rounded-full bg-blue-200", children: K.pixelsType?.toLocaleLowerCase() })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ we.jsxs("div", { className: "grow-1 lg:basis-1/2", children: [
      /* @__PURE__ */ we.jsxs("div", { children: [
        /* @__PURE__ */ we.jsx(uy, { heading: "dataset details" }),
        /* @__PURE__ */ we.jsxs("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ we.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ we.jsx("div", { className: "pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500", children: /* @__PURE__ */ we.jsxs(
              "a",
              {
                className: "flex items-center hover:underline",
                href: `${Xk}${K.datasetId}`,
                children: [
                  K.datasetId,
                  " ",
                  /* @__PURE__ */ we.jsx(kE, { className: "inline-flex mb-[1px] ml-[1px]", size: 14 })
                ]
              }
            ) }),
            /* @__PURE__ */ we.jsx("div", { children: K.datasetName })
          ] }),
          /* @__PURE__ */ we.jsx("div", { className: "text-sm text-neutral-500", children: K.datasetDescription ? /* @__PURE__ */ we.jsx("span", { children: K.datasetDescription }) : /* @__PURE__ */ we.jsx("span", { className: "s text-neutral-300", children: "no description" }) })
        ] })
      ] }),
      /* @__PURE__ */ we.jsxs("div", { children: [
        /* @__PURE__ */ we.jsx(uy, { heading: "project details" }),
        /* @__PURE__ */ we.jsxs("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ we.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ we.jsx("div", { className: "pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500", children: /* @__PURE__ */ we.jsxs(
              "a",
              {
                className: "flex items-center hover:underline",
                href: `${qk}${K.projectId}`,
                children: [
                  K.projectId,
                  " ",
                  /* @__PURE__ */ we.jsx(kE, { className: "inline-flex mb-[1px] ml-[1px]", size: 14 })
                ]
              }
            ) }),
            /* @__PURE__ */ we.jsx("div", { children: K.projectName })
          ] }),
          /* @__PURE__ */ we.jsx("div", { className: "text-sm text-neutral-500", children: K.projectDescription ? /* @__PURE__ */ we.jsx("div", { children: K.projectDescription.replace(`
`, " ") }) : /* @__PURE__ */ we.jsx("span", { className: "s text-neutral-300", children: "no description" }) })
        ] })
      ] }),
      /* @__PURE__ */ we.jsxs("div", { children: [
        /* @__PURE__ */ we.jsx(uy, { heading: "technicals" }),
        /* @__PURE__ */ we.jsxs("div", { className: "grid grid-cols-2 gap-1 p-2 text-neutral-600", children: [
          /* @__PURE__ */ we.jsx(ov, { label: "perms", data: C }),
          /* @__PURE__ */ we.jsx(ov, { label: "channels", data: ne }),
          /* @__PURE__ */ we.jsx(ov, { label: "split_channel", data: ae }),
          /* @__PURE__ */ we.jsx(ov, { label: "rdefs", data: Fe }),
          /* @__PURE__ */ we.jsx(ov, { label: "details", data: be })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ we.jsx("div", { className: "absolute justify-end font-mono text-[8px] bottom-1 right-2 text-neutral-700", children: /* @__PURE__ */ we.jsx(
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
function eO({ model: g, el: E }) {
  console.debug("IDR Image Data Widget rendered");
  const y = g.get("imageId"), b = () => /* @__PURE__ */ we.jsx("div", { "data-widget": "idr-image-data", children: /* @__PURE__ */ we.jsx(Zk, { imageId: y }) });
  AD.createRoot(E).render(/* @__PURE__ */ we.jsx(b, {}));
}
const aO = {
  initialize: Gk,
  render: eO
};
export {
  aO as default,
  Gk as initialize,
  eO as render
};

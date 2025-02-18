import { jsx as o, jsxs as l } from "react/jsx-runtime";
import E, { forwardRef as Q, createElement as _ } from "react";
import J from "react-dom";
function z(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var y = {}, C;
function U() {
  if (C) return y;
  C = 1;
  var e = {}, t = J;
  if (e.NODE_ENV === "production")
    y.createRoot = t.createRoot, y.hydrateRoot = t.hydrateRoot;
  else {
    var n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    y.createRoot = function(r, a) {
      n.usingClientEntryPoint = !0;
      try {
        return t.createRoot(r, a);
      } finally {
        n.usingClientEntryPoint = !1;
      }
    }, y.hydrateRoot = function(r, a, i) {
      n.usingClientEntryPoint = !0;
      try {
        return t.hydrateRoot(r, a, i);
      } finally {
        n.usingClientEntryPoint = !1;
      }
    };
  }
  return y;
}
var K = U();
const Z = /* @__PURE__ */ z(K), $ = 6048e5, ee = 864e5, F = Symbol.for("constructDateFrom");
function b(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && F in e ? e[F](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function g(e, t) {
  return b(t || e, e);
}
let te = {};
function W() {
  return te;
}
function P(e, t) {
  const n = W(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = g(e, t?.in), i = a.getDay(), s = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function N(e, t) {
  return P(e, { ...t, weekStartsOn: 1 });
}
function X(e, t) {
  const n = g(e, t?.in), r = n.getFullYear(), a = b(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = N(a), s = b(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const d = N(s);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function q(e) {
  const t = g(e), n = new Date(
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
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function ne(e, ...t) {
  const n = b.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function R(e, t) {
  const n = g(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function re(e, t, n) {
  const [r, a] = ne(
    n?.in,
    e,
    t
  ), i = R(r), s = R(a), d = +i - q(i), f = +s - q(s);
  return Math.round((d - f) / ee);
}
function ae(e, t) {
  const n = X(e, t), r = b(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r);
}
function ie(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function oe(e) {
  return !(!ie(e) && typeof e != "number" || isNaN(+g(e)));
}
function se(e, t) {
  const n = g(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const ce = {
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
}, ue = (e, t, n) => {
  let r;
  const a = ce[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function T(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const de = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, le = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, he = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, me = {
  date: T({
    formats: de,
    defaultWidth: "full"
  }),
  time: T({
    formats: le,
    defaultWidth: "full"
  }),
  dateTime: T({
    formats: he,
    defaultWidth: "full"
  })
}, fe = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ge = (e, t, n, r) => fe[e];
function M(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, d = n?.width ? String(n.width) : s;
      a = e.formattingValues[d] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, d = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[d] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const we = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, be = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, pe = {
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
}, ye = {
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
}, xe = {
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
}, ve = {
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
}, Me = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, De = {
  ordinalNumber: Me,
  era: M({
    values: we,
    defaultWidth: "wide"
  }),
  quarter: M({
    values: be,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: M({
    values: pe,
    defaultWidth: "wide"
  }),
  day: M({
    values: ye,
    defaultWidth: "wide"
  }),
  dayPeriod: M({
    values: xe,
    defaultWidth: "wide",
    formattingValues: ve,
    defaultFormattingWidth: "wide"
  })
};
function D(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const s = i[0], d = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(d) ? Pe(d, (h) => h.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Oe(d, (h) => h.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(f) : f, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const m = t.slice(s.length);
    return { value: c, rest: m };
  };
}
function Oe(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Pe(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ke(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const d = t.slice(a.length);
    return { value: s, rest: d };
  };
}
const Ne = /^(\d+)(th|st|nd|rd)?/i, We = /\d+/i, Se = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ee = {
  any: [/^b/i, /^(a|c)/i]
}, Te = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ye = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _e = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ce = {
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
}, Fe = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, qe = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Re = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ie = {
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
}, Le = {
  ordinalNumber: ke({
    matchPattern: Ne,
    parsePattern: We,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: D({
    matchPatterns: Se,
    defaultMatchWidth: "wide",
    parsePatterns: Ee,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: Te,
    defaultMatchWidth: "wide",
    parsePatterns: Ye,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: D({
    matchPatterns: _e,
    defaultMatchWidth: "wide",
    parsePatterns: Ce,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: Fe,
    defaultMatchWidth: "wide",
    parsePatterns: qe,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: Re,
    defaultMatchWidth: "any",
    parsePatterns: Ie,
    defaultParseWidth: "any"
  })
}, je = {
  code: "en-US",
  formatDistance: ue,
  formatLong: me,
  formatRelative: ge,
  localize: De,
  match: Le,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function He(e, t) {
  const n = g(e, t?.in);
  return re(n, se(n)) + 1;
}
function Ae(e, t) {
  const n = g(e, t?.in), r = +N(n) - +ae(n);
  return Math.round(r / $) + 1;
}
function B(e, t) {
  const n = g(e, t?.in), r = n.getFullYear(), a = W(), i = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, s = b(t?.in || e, 0);
  s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
  const d = P(s, t), f = b(t?.in || e, 0);
  f.setFullYear(r, 0, i), f.setHours(0, 0, 0, 0);
  const c = P(f, t);
  return +n >= +d ? r + 1 : +n >= +c ? r : r - 1;
}
function Qe(e, t) {
  const n = W(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = B(e, t), i = b(t?.in || e, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), P(i, t);
}
function $e(e, t) {
  const n = g(e, t?.in), r = +P(n, t) - +Qe(n, t);
  return Math.round(r / $) + 1;
}
function u(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const w = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return u(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : u(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return u(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return u(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return u(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return u(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return u(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return u(a, t.length);
  }
}, x = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, I = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return w.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = B(e, r), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = i % 100;
      return u(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : u(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = X(e);
    return u(n, t.length);
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
    const n = e.getFullYear();
    return u(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return u(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return u(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return w.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return u(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = $e(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : u(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ae(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : u(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : w.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = He(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : u(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return u(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return u(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return u(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = x.noon : r === 0 ? a = x.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = x.evening : r >= 12 ? a = x.afternoon : r >= 4 ? a = x.morning : a = x.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return w.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : w.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : u(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : u(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : w.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : w.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return w.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return j(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return p(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return p(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return j(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return p(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return p(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + L(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + p(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + L(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + p(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return u(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return u(+e, t.length);
  }
};
function L(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(a) : n + String(a) + t + u(i, 2);
}
function j(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + u(Math.abs(e) / 60, 2) : p(e, t);
}
function p(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = u(Math.trunc(r / 60), 2), i = u(r % 60, 2);
  return n + a + t + i;
}
const H = (e, t) => {
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
}, G = (e, t) => {
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
}, Xe = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return H(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", H(r, t)).replace("{{time}}", G(a, t));
}, Be = {
  p: G,
  P: Xe
}, Ge = /^D+$/, Ve = /^Y+$/, Je = ["D", "DD", "YY", "YYYY"];
function ze(e) {
  return Ge.test(e);
}
function Ue(e) {
  return Ve.test(e);
}
function Ke(e, t, n) {
  const r = Ze(e, t, n);
  if (console.warn(r), Je.includes(e)) throw new RangeError(r);
}
function Ze(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const et = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, nt = /^'([^]*?)'?$/, rt = /''/g, at = /[a-zA-Z]/;
function A(e, t, n) {
  const r = W(), a = r.locale ?? je, i = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, d = g(e, n?.in);
  if (!oe(d))
    throw new RangeError("Invalid time value");
  let f = t.match(tt).map((m) => {
    const h = m[0];
    if (h === "p" || h === "P") {
      const v = Be[h];
      return v(m, a.formatLong);
    }
    return m;
  }).join("").match(et).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const h = m[0];
    if (h === "'")
      return { isToken: !1, value: it(m) };
    if (I[h])
      return { isToken: !0, value: m };
    if (h.match(at))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: m };
  });
  a.localize.preprocessor && (f = a.localize.preprocessor(d, f));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: a
  };
  return f.map((m) => {
    if (!m.isToken) return m.value;
    const h = m.value;
    (Ue(h) || ze(h)) && Ke(h, t, String(e));
    const v = I[h[0]];
    return v(d, h, a.localize, c);
  }).join("");
}
function it(e) {
  const t = e.match(nt);
  return t ? t[1].replace(rt, "'") : e;
}
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), V = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var st = {
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
const ct = Q(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: i,
    iconNode: s,
    ...d
  }, f) => _(
    "svg",
    {
      ref: f,
      ...st,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: V("lucide", a),
      ...d
    },
    [
      ...s.map(([c, m]) => _(c, m)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = (e, t) => {
  const n = Q(
    ({ className: r, ...a }, i) => _(ct, {
      ref: i,
      iconNode: t,
      className: V(`lucide-${ot(e)}`, r),
      ...a
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Y = ut("ExternalLink", dt);
function lt() {
  console.debug("IDR Image Data Widget initialized");
}
const ht = "https://idr.openmicroscopy.org/webclient/?show=project-", mt = "https://idr.openmicroscopy.org/webclient/?show=dataset-", ft = "https://idr.openmicroscopy.org/webclient/imgData/", gt = "https://idr.openmicroscopy.org/webclient/render_thumbnail/";
function k({ heading: e }) {
  return /* @__PURE__ */ o("div", { className: "w-full px-2 pt-2 pb-[2px] text-sm font-light", children: /* @__PURE__ */ o("div", { className: "border-b border-b-neutral-700 pb-[2px] w-full", children: e }) });
}
function O({ label: e, data: t }) {
  return /* @__PURE__ */ l("details", { className: "text-sm cursor-pointer", children: [
    /* @__PURE__ */ o("summary", { children: e }),
    /* @__PURE__ */ o("div", { className: "p-2 max-h-[300px] overflow-scroll text-xs font-mono border border-neutral-300 bg-neutral-50", children: /* @__PURE__ */ o("pre", { children: JSON.stringify(t, null, 2) }) })
  ] });
}
function wt({ imageId: e }) {
  const [t, n] = E.useState(null), [r, a] = E.useState(null);
  if (E.useEffect(() => {
    if (!e) {
      a("No image Id provided");
      return;
    }
    fetch(`${ft}${e}`).then((S) => S.json()).then(n).catch((S) => a(S));
  }, [e]), r)
    return /* @__PURE__ */ o("div", { className: "flex items-center justify-center p-4 text-red-500 bg-red-100 border border-red-500", children: /* @__PURE__ */ l("div", { children: [
      "Error: ",
      r?.message ?? r
    ] }) });
  if (!t)
    return /* @__PURE__ */ o("div", { className: "flex items-center justify-center p-4 bg-green-100 border border-green-500", children: /* @__PURE__ */ l("div", { children: [
      "Loading: ",
      e
    ] }) });
  const { channels: i, perms: s, rdefs: d, split_channel: f, meta: c, ...m } = t, h = A(new Date(c.imageTimestamp * 1e3), "MMM dd, yyyy"), v = A(new Date(c.imageTimestamp * 1e3), "MMM dd, yyyy HH:mm");
  return /* @__PURE__ */ o("div", { className: "@container", children: /* @__PURE__ */ l("div", { className: "relative flex flex-col w-full space-y-4 overflow-hidden border rounded-lg shadow-lg @lg:space-x-4 @lg:flex-row text-neutral-900 border-black-100", children: [
    /* @__PURE__ */ l("div", { className: "mb-1 grow-1 @lg:basis-1/2", children: [
      /* @__PURE__ */ o(
        "div",
        {
          className: "h-[240px] bg-cover bg-center bg-gray-500 bg-clip-border",
          style: { backgroundImage: `url(${gt}${e})` }
        }
      ),
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ o(k, { heading: "image details" }),
        /* @__PURE__ */ l("div", { className: "flex flex-col p-2 space-y-2", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ o(
              "a",
              {
                className: "inline-flex font-semibold grow",
                href: `https://idr.openmicroscopy.org/webclient/search/?search_query=${e}`,
                target: "_blank",
                children: /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ o("div", { children: c.imageName }),
                  /* @__PURE__ */ o(Y, { size: 14 })
                ] })
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: "pl-2 text-sm border-l-2 text-neutral-500 border-l-sky-800",
                title: v,
                children: h
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "text-sm text-neutral-500", children: c.imageDescription || c.imageDescription.length ? /* @__PURE__ */ o("span", { children: c.imageDescription }) : /* @__PURE__ */ o("span", { className: "text-sm text-neutral-300", children: "no description" }) }),
          /* @__PURE__ */ l("div", { className: "flex items-center mt-1 space-x-1 text-xs font-light", children: [
            c.imageAuthor && /* @__PURE__ */ o("div", { className: "px-[10px] py-[2px] border text-neutral-500 rounded-full border-neutral-500 bg-neutral-200", children: c.imageAuthor?.toLocaleLowerCase() }),
            c.pixelsType && /* @__PURE__ */ o("div", { className: "px-[10px] py-[2px] text-blue-700 border border-blue-600 rounded-full bg-blue-200", children: c.pixelsType?.toLocaleLowerCase() })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "grow-1 @lg:basis-1/2", children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ o(k, { heading: "dataset details" }),
        /* @__PURE__ */ l("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ o("div", { className: "pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500", children: /* @__PURE__ */ l(
              "a",
              {
                className: "flex items-center hover:underline",
                href: `${mt}${c.datasetId}`,
                target: "_blank",
                children: [
                  c.datasetId,
                  " ",
                  /* @__PURE__ */ o(Y, { className: "inline-flex mb-[1px] ml-[1px]", size: 14 })
                ]
              }
            ) }),
            /* @__PURE__ */ o("div", { children: c.datasetName })
          ] }),
          /* @__PURE__ */ o("div", { className: "text-sm text-neutral-500", children: c.datasetDescription ? /* @__PURE__ */ o("span", { children: c.datasetDescription }) : /* @__PURE__ */ o("span", { className: "s text-neutral-300", children: "no description" }) })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ o(k, { heading: "project details" }),
        /* @__PURE__ */ l("div", { className: "p-2 space-y-2", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ o("div", { className: "pr-2 font-light border-r-2 text-neutral-500 border-r-neutral-500", children: /* @__PURE__ */ l(
              "a",
              {
                className: "flex items-center hover:underline",
                href: `${ht}${c.projectId}`,
                target: "_blank",
                children: [
                  c.projectId,
                  " ",
                  /* @__PURE__ */ o(Y, { className: "inline-flex mb-[1px] ml-[1px]", size: 14 })
                ]
              }
            ) }),
            /* @__PURE__ */ o("div", { children: c.projectName })
          ] }),
          /* @__PURE__ */ o("div", { className: "text-sm text-neutral-500", children: c.projectDescription ? /* @__PURE__ */ o("div", { children: c.projectDescription.replace(`
`, " ") }) : /* @__PURE__ */ o("span", { className: "s text-neutral-300", children: "no description" }) })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ o(k, { heading: "technicals" }),
        /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-1 p-2 text-neutral-600", children: [
          /* @__PURE__ */ o(O, { label: "perms", data: s }),
          /* @__PURE__ */ o(O, { label: "channels", data: i }),
          /* @__PURE__ */ o(O, { label: "split_channel", data: f }),
          /* @__PURE__ */ o(O, { label: "rdefs", data: d }),
          /* @__PURE__ */ o(O, { label: "details", data: m })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "absolute justify-end font-mono text-[8px] bottom-1 right-2 text-neutral-700", children: /* @__PURE__ */ o(
      "a",
      {
        className: "hover:underline",
        href: "https://idr.openmicroscopy.org/about/api.html",
        target: "_blank",
        children: "IDR API"
      }
    ) })
  ] }) });
}
function bt({ model: e, el: t }) {
  console.debug("IDR Image Data Widget rendered");
  const n = e.get("imageId"), r = () => /* @__PURE__ */ o("div", { "data-widget": "idr-image-data", children: /* @__PURE__ */ o(wt, { imageId: n }) });
  Z.createRoot(t).render(/* @__PURE__ */ o(r, {}));
}
const vt = {
  initialize: lt,
  render: bt
};
export {
  vt as default,
  lt as initialize,
  bt as render
};

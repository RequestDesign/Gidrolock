(self["webpackChunkwebpack_example"] = self["webpackChunkwebpack_example"] || []).push([[749],{

/***/ 660:
/***/ (function(module) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2024 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.9
 */
!function(e, t) {
    if (true) module.exports = t(); else { var i, n; }
}("undefined" != typeof self ? self : this, (function() {
    return function() {
        "use strict";
        var e = {
            3976: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n) {
                    if (void 0 === n) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = n;
                };
            },
            3776: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var n, i;
                    u(this[0]) && e && (n = this[0].eventRegistry, i = this[0], e.split(" ").forEach((function(e) {
                        var a = o(e.split("."), 2);
                        (function(e, i) {
                            var a, r, o = [];
                            if (e.length > 0) if (void 0 === t) for (a = 0, r = n[e][i].length; a < r; a++) o.push({
                                ev: e,
                                namespace: i && i.length > 0 ? i : "global",
                                handler: n[e][i][a]
                            }); else o.push({
                                ev: e,
                                namespace: i && i.length > 0 ? i : "global",
                                handler: t
                            }); else if (i.length > 0) for (var l in n) for (var s in n[l]) if (s === i) if (void 0 === t) for (a = 0, 
                            r = n[l][s].length; a < r; a++) o.push({
                                ev: l,
                                namespace: s,
                                handler: n[l][s][a]
                            }); else o.push({
                                ev: l,
                                namespace: s,
                                handler: t
                            });
                            return o;
                        })(a[0], a[1]).forEach((function(e) {
                            var t = e.ev, a = e.handler;
                            !function(e, t, a) {
                                if (e in n == 1) if (i.removeEventListener ? i.removeEventListener(e, a, !1) : i.detachEvent && i.detachEvent("on".concat(e), a), 
                                "global" === t) for (var r in n[e]) n[e][r].splice(n[e][r].indexOf(a), 1); else n[e][t].splice(n[e][t].indexOf(a), 1);
                            }(t, e.namespace, a);
                        }));
                    })));
                    return this;
                }, t.on = function(e, t) {
                    if (u(this[0])) {
                        var n = this[0].eventRegistry, i = this[0];
                        e.split(" ").forEach((function(e) {
                            var a = o(e.split("."), 2), r = a[0], l = a[1];
                            !function(e, a) {
                                i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on".concat(e), t), 
                                n[e] = n[e] || {}, n[e][a] = n[e][a] || [], n[e][a].push(t);
                            }(r, void 0 === l ? "global" : l);
                        }));
                    }
                    return this;
                }, t.trigger = function(e) {
                    var t = arguments;
                    if (u(this[0])) for (var n = this[0].eventRegistry, i = this[0], o = "string" == typeof e ? e.split(" ") : [ e.type ], l = 0; l < o.length; l++) {
                        var s = o[l].split("."), f = s[0], p = s[1] || "global";
                        if (void 0 !== c && "global" === p) {
                            var d, h = {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: arguments[1]
                            };
                            if (c.createEvent) {
                                try {
                                    if ("input" === f) h.inputType = "insertText", d = new InputEvent(f, h); else d = new CustomEvent(f, h);
                                } catch (e) {
                                    (d = c.createEvent("CustomEvent")).initCustomEvent(f, h.bubbles, h.cancelable, h.detail);
                                }
                                e.type && (0, a.default)(d, e), i.dispatchEvent(d);
                            } else (d = c.createEventObject()).eventType = f, d.detail = arguments[1], e.type && (0, 
                            a.default)(d, e), i.fireEvent("on" + d.eventType, d);
                        } else if (void 0 !== n[f]) {
                            arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), 
                            arguments[0].detail = arguments.slice(1);
                            var v = n[f];
                            ("global" === p ? Object.values(v).flat() : v[p]).forEach((function(e) {
                                return e.apply(i, t);
                            }));
                        }
                    }
                    return this;
                };
                var i = s(n(9380)), a = s(n(600)), r = s(n(4963));
                function o(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var i, a, r, o, l = [], s = !0, c = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function l(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var c = i.default.document;
                function u(e) {
                    return e instanceof Element;
                }
                var f = t.Event = void 0;
                "function" == typeof i.default.CustomEvent ? t.Event = f = i.default.CustomEvent : i.default.Event && c && c.createEvent ? (t.Event = f = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !0,
                        detail: void 0
                    };
                    var n = c.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }, f.prototype = i.default.Event.prototype) : "undefined" != typeof Event && (t.Event = f = Event);
            },
            600: function(e, t) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, i, a, r, o, l, s = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                    "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
                    "object" !== n(s) && "function" != typeof s && (s = {});
                    for (;c < u; c++) if (null != (t = arguments[c])) for (i in t) a = s[i], s !== (r = t[i]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                    s[i] = e(f, l, r)) : void 0 !== r && (s[i] = r));
                    return s;
                };
            },
            4963: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = l(n(9380)), a = l(n(253)), r = n(3776), o = l(n(600));
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = i.default.document;
                function c(e) {
                    return e instanceof c ? e : this instanceof c ? void (null != e && e !== i.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                }
                c.prototype = {
                    on: r.on,
                    off: r.off,
                    trigger: r.trigger
                }, c.extend = o.default, c.data = a.default, c.Event = r.Event;
                t.default = c;
            },
            9845: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.ie = void 0;
                var i, a = (i = n(9380)) && i.__esModule ? i : {
                    default: i
                };
                var r = a.default.navigator && a.default.navigator.userAgent || "";
                t.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, 
                t.iphone = /iphone/i.test(r);
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(n, "\\$1");
                };
                var n = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, n) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var a, r = n(9845), o = (a = n(9380)) && a.__esModule ? a : {
                    default: a
                }, l = n(7760), s = n(2839), c = n(8711), u = n(7215), f = n(4713);
                function p() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ p = function() {
                        return t;
                    };
                    var e, t = {}, n = Object.prototype, a = n.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value;
                    }, o = "function" == typeof Symbol ? Symbol : {}, l = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
                    function u(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t];
                    }
                    try {
                        u({}, "");
                    } catch (e) {
                        u = function(e, t, n) {
                            return e[t] = n;
                        };
                    }
                    function f(e, t, n, i) {
                        var a = t && t.prototype instanceof k ? t : k, o = Object.create(a.prototype), l = new D(i || []);
                        return r(o, "_invoke", {
                            value: E(e, n, l)
                        }), o;
                    }
                    function d(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            };
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            };
                        }
                    }
                    t.wrap = f;
                    var h = "suspendedStart", v = "suspendedYield", m = "executing", g = "completed", y = {};
                    function k() {}
                    function b() {}
                    function x() {}
                    var w = {};
                    u(w, l, (function() {
                        return this;
                    }));
                    var P = Object.getPrototypeOf, S = P && P(P(L([])));
                    S && S !== n && a.call(S, l) && (w = S);
                    var O = x.prototype = k.prototype = Object.create(w);
                    function _(e) {
                        [ "next", "throw", "return" ].forEach((function(t) {
                            u(e, t, (function(e) {
                                return this._invoke(t, e);
                            }));
                        }));
                    }
                    function M(e, t) {
                        function n(r, o, l, s) {
                            var c = d(e[r], e, o);
                            if ("throw" !== c.type) {
                                var u = c.arg, f = u.value;
                                return f && "object" == i(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                    n("next", e, l, s);
                                }), (function(e) {
                                    n("throw", e, l, s);
                                })) : t.resolve(f).then((function(e) {
                                    u.value = e, l(u);
                                }), (function(e) {
                                    return n("throw", e, l, s);
                                }));
                            }
                            s(c.arg);
                        }
                        var o;
                        r(this, "_invoke", {
                            value: function(e, i) {
                                function a() {
                                    return new t((function(t, a) {
                                        n(e, i, t, a);
                                    }));
                                }
                                return o = o ? o.then(a, a) : a();
                            }
                        });
                    }
                    function E(t, n, i) {
                        var a = h;
                        return function(r, o) {
                            if (a === m) throw new Error("Generator is already running");
                            if (a === g) {
                                if ("throw" === r) throw o;
                                return {
                                    value: e,
                                    done: !0
                                };
                            }
                            for (i.method = r, i.arg = o; ;) {
                                var l = i.delegate;
                                if (l) {
                                    var s = j(l, i);
                                    if (s) {
                                        if (s === y) continue;
                                        return s;
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                    if (a === h) throw a = g, i.arg;
                                    i.dispatchException(i.arg);
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                a = m;
                                var c = d(t, n, i);
                                if ("normal" === c.type) {
                                    if (a = i.done ? g : v, c.arg === y) continue;
                                    return {
                                        value: c.arg,
                                        done: i.done
                                    };
                                }
                                "throw" === c.type && (a = g, i.method = "throw", i.arg = c.arg);
                            }
                        };
                    }
                    function j(t, n) {
                        var i = n.method, a = t.iterator[i];
                        if (a === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", 
                        n.arg = e, j(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", 
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
                        var r = d(a, t.iterator, n.arg);
                        if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, 
                        y;
                        var o = r.arg;
                        return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", 
                        n.arg = e), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), 
                        n.delegate = null, y);
                    }
                    function T(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                        this.tryEntries.push(t);
                    }
                    function A(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t;
                    }
                    function D(e) {
                        this.tryEntries = [ {
                            tryLoc: "root"
                        } ], e.forEach(T, this), this.reset(!0);
                    }
                    function L(t) {
                        if (t || "" === t) {
                            var n = t[l];
                            if (n) return n.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1, o = function n() {
                                    for (;++r < t.length; ) if (a.call(t, r)) return n.value = t[r], n.done = !1, n;
                                    return n.value = e, n.done = !0, n;
                                };
                                return o.next = o;
                            }
                        }
                        throw new TypeError(i(t) + " is not iterable");
                    }
                    return b.prototype = x, r(O, "constructor", {
                        value: x,
                        configurable: !0
                    }), r(x, "constructor", {
                        value: b,
                        configurable: !0
                    }), b.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
                    }, t.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), 
                        e.prototype = Object.create(O), e;
                    }, t.awrap = function(e) {
                        return {
                            __await: e
                        };
                    }, _(M.prototype), u(M.prototype, s, (function() {
                        return this;
                    })), t.AsyncIterator = M, t.async = function(e, n, i, a, r) {
                        void 0 === r && (r = Promise);
                        var o = new M(f(e, n, i, a), r);
                        return t.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                            return e.done ? e.value : o.next();
                        }));
                    }, _(O), u(O, c, "Generator"), u(O, l, (function() {
                        return this;
                    })), u(O, "toString", (function() {
                        return "[object Generator]";
                    })), t.keys = function(e) {
                        var t = Object(e), n = [];
                        for (var i in t) n.push(i);
                        return n.reverse(), function e() {
                            for (;n.length; ) {
                                var i = n.pop();
                                if (i in t) return e.value = i, e.done = !1, e;
                            }
                            return e.done = !0, e;
                        };
                    }, t.values = L, D.prototype = {
                        constructor: D,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, 
                            this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var n = this;
                            function i(i, a) {
                                return l.type = "throw", l.arg = t, n.next = i, a && (n.method = "next", n.arg = e), 
                                !!a;
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r], l = o.completion;
                                if ("root" === o.tryLoc) return i("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = a.call(o, "catchLoc"), c = a.call(o, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var r = i;
                                    break;
                                }
                            }
                            r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                            var o = r ? r.completion : {};
                            return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, 
                            y) : this.complete(o);
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                            this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                            y;
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var i = n.completion;
                                    if ("throw" === i.type) {
                                        var a = i.arg;
                                        A(n);
                                    }
                                    return a;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function(t, n, i) {
                            return this.delegate = {
                                iterator: L(t),
                                resultName: n,
                                nextLoc: i
                            }, "next" === this.method && (this.arg = e), y;
                        }
                    }, t;
                }
                function d(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return h(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var i = 0, a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[i++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: a
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, l = !1;
                    return {
                        s: function() {
                            n = n.call(e);
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            l = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return();
                            } finally {
                                if (l) throw r;
                            }
                        }
                    };
                }
                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                function v(e, t, n, i, a, r, o) {
                    try {
                        var l = e[r](o), s = l.value;
                    } catch (e) {
                        return void n(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(i, a);
                }
                var m, g, y = t.EventHandlers = {
                    keyEvent: function(e, t, n, i, a) {
                        var o = this.inputmask, p = o.opts, d = o.dependencyLib, h = o.maskset, v = this, m = d(v), g = e.key, k = c.caret.call(o, v), b = p.onKeyDown.call(this, e, c.getBuffer.call(o), k, p);
                        if (void 0 !== b) return b;
                        if (g === s.keys.Backspace || g === s.keys.Delete || r.iphone && g === s.keys.BACKSPACE_SAFARI || e.ctrlKey && g === s.keys.x && !("oncut" in v)) e.preventDefault(), 
                        u.handleRemove.call(o, v, g, k), (0, l.writeBuffer)(v, c.getBuffer.call(o, !0), h.p, e, v.inputmask._valueGet() !== c.getBuffer.call(o).join("")); else if (g === s.keys.End || g === s.keys.PageDown) {
                            e.preventDefault();
                            var x = c.seekNext.call(o, c.getLastValidPosition.call(o));
                            c.caret.call(o, v, e.shiftKey ? k.begin : x, x, !0);
                        } else g === s.keys.Home && !e.shiftKey || g === s.keys.PageUp ? (e.preventDefault(), 
                        c.caret.call(o, v, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && g === s.keys.Escape && !0 !== e.altKey ? ((0, 
                        l.checkVal)(v, !0, !1, o.undoValue.split("")), m.trigger("click")) : g !== s.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== o.userOptions.insertMode ? !0 === p.tabThrough && g === s.keys.Tab ? !0 === e.shiftKey ? (k.end = c.seekPrevious.call(o, k.end, !0), 
                        !0 === f.getTest.call(o, k.end - 1).match.static && k.end--, k.begin = c.seekPrevious.call(o, k.end, !0), 
                        k.begin >= 0 && k.end > 0 && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : (k.begin = c.seekNext.call(o, k.begin, !0), 
                        k.end = c.seekNext.call(o, k.begin, !0), k.end < h.maskLength && k.end--, k.begin <= h.maskLength && (e.preventDefault(), 
                        c.caret.call(o, v, k.begin, k.end))) : e.shiftKey || (p.insertModeVisual && !1 === p.insertMode ? g === s.keys.ArrowRight ? setTimeout((function() {
                            var e = c.caret.call(o, v);
                            c.caret.call(o, v, e.begin);
                        }), 0) : g === s.keys.ArrowLeft && setTimeout((function() {
                            var e = c.translatePosition.call(o, v.inputmask.caretPos.begin);
                            c.translatePosition.call(o, v.inputmask.caretPos.end);
                            o.isRTL ? c.caret.call(o, v, e + (e === h.maskLength ? 0 : 1)) : c.caret.call(o, v, e - (0 === e ? 0 : 1));
                        }), 0) : void 0 === o.keyEventHook || o.keyEventHook(e)) : u.isSelection.call(o, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                        c.caret.call(o, v, k.begin, k.begin));
                        return o.isComposing = g == s.keys.Process || g == s.keys.Unidentified, o.ignorable = g.length > 1 && !("textarea" === v.tagName.toLowerCase() && g == s.keys.Enter), 
                        y.keypressEvent.call(this, e, t, n, i, a);
                    },
                    keypressEvent: function(e, t, n, i, a) {
                        var r = this.inputmask || this, o = r.opts, f = r.dependencyLib, p = r.maskset, d = r.el, h = f(d), v = e.key;
                        if (!0 === t || e.ctrlKey && e.altKey && !r.ignorable || !(e.ctrlKey || e.metaKey || r.ignorable)) {
                            if (v) {
                                var m, g = t ? {
                                    begin: a,
                                    end: a
                                } : c.caret.call(r, d);
                                t || (v = o.substitutes[v] || v), p.writeOutBuffer = !0;
                                var y = u.isValid.call(r, g, v, i, void 0, void 0, void 0, t);
                                if (!1 !== y && (c.resetMaskSet.call(r, !0), m = void 0 !== y.caret ? y.caret : c.seekNext.call(r, y.pos.begin ? y.pos.begin : y.pos), 
                                p.p = m), m = o.numericInput && void 0 === y.caret ? c.seekPrevious.call(r, m) : m, 
                                !1 !== n && (setTimeout((function() {
                                    o.onKeyValidation.call(d, v, y);
                                }), 0), p.writeOutBuffer && !1 !== y)) {
                                    var k = c.getBuffer.call(r);
                                    (0, l.writeBuffer)(d, k, m, e, !0 !== t);
                                }
                                if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                            }
                        } else v === s.keys.Enter && r.undoValue !== r._valueGet(!0) && (r.undoValue = r._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0));
                    },
                    pasteEvent: (m = p().mark((function e(t) {
                        var n, i, a, r, s, u;
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n = function(e, n, i, a, o) {
                                    var s = c.caret.call(e, n, void 0, void 0, !0), u = i.substr(0, s.begin), f = i.substr(s.end, i.length);
                                    if (u == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(0, s.begin).join("") && (u = ""), 
                                    f == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(s.end).join("") && (f = ""), 
                                    a = u + a + f, e.isRTL && !0 !== r.numericInput) {
                                        a = a.split("");
                                        var p, h = d(c.getBufferTemplate.call(e));
                                        try {
                                            for (h.s(); !(p = h.n()).done; ) {
                                                var v = p.value;
                                                a[0] === v && a.shift();
                                            }
                                        } catch (e) {
                                            h.e(e);
                                        } finally {
                                            h.f();
                                        }
                                        a = a.reverse().join("");
                                    }
                                    var m = a;
                                    if ("function" == typeof o) {
                                        if (!1 === (m = o.call(e, m, r))) return !1;
                                        m || (m = i);
                                    }
                                    (0, l.checkVal)(n, !0, !1, m.toString().split(""), t);
                                }, i = this, a = this.inputmask, r = a.opts, s = a._valueGet(!0), a.skipInputEvent = !0, 
                                t.clipboardData && t.clipboardData.getData ? u = t.clipboardData.getData("text/plain") : o.default.clipboardData && o.default.clipboardData.getData && (u = o.default.clipboardData.getData("Text")), 
                                n(a, i, s, u, r.onBeforePaste), t.preventDefault();

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }), e, this);
                    })), g = function() {
                        var e = this, t = arguments;
                        return new Promise((function(n, i) {
                            var a = m.apply(e, t);
                            function r(e) {
                                v(a, n, i, r, o, "next", e);
                            }
                            function o(e) {
                                v(a, n, i, r, o, "throw", e);
                            }
                            r(void 0);
                        }));
                    }, function(e) {
                        return g.apply(this, arguments);
                    }),
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                        var a, o = this, u = o.inputmask._valueGet(!0), p = (t.isRTL ? c.getBuffer.call(t).slice().reverse() : c.getBuffer.call(t)).join(""), d = c.caret.call(t, o, void 0, void 0, !0);
                        if (p !== u) {
                            if (a = function(e, i, a) {
                                for (var r, o, l, s = e.substr(0, a.begin).split(""), u = e.substr(a.begin).split(""), p = i.substr(0, a.begin).split(""), d = i.substr(a.begin).split(""), h = s.length >= p.length ? s.length : p.length, v = u.length >= d.length ? u.length : d.length, m = "", g = [], y = "~"; s.length < h; ) s.push(y);
                                for (;p.length < h; ) p.push(y);
                                for (;u.length < v; ) u.unshift(y);
                                for (;d.length < v; ) d.unshift(y);
                                var k = s.concat(u), b = p.concat(d);
                                for (o = 0, r = k.length; o < r; o++) switch (l = f.getPlaceholder.call(t, c.translatePosition.call(t, o)), 
                                m) {
                                  case "insertText":
                                    b[o - 1] === k[o] && a.begin == k.length - 1 && g.push(k[o]), o = r;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    k[o] === y ? a.end++ : o = r;
                                    break;

                                  default:
                                    k[o] !== b[o] && (k[o + 1] !== y && k[o + 1] !== l && void 0 !== k[o + 1] || (b[o] !== l || b[o + 1] !== y) && b[o] !== y ? b[o + 1] === y && b[o] === k[o + 1] ? (m = "insertText", 
                                    g.push(k[o]), a.begin--, a.end--) : k[o] !== l && k[o] !== y && (k[o + 1] === y || b[o] !== k[o] && b[o + 1] === k[o + 1]) ? (m = "insertReplacementText", 
                                    g.push(k[o]), a.begin--) : k[o] === y ? (m = "deleteContentBackward", (c.isMask.call(t, c.translatePosition.call(t, o), !0) || b[o] === n.radixPoint) && a.end++) : o = r : (m = "insertText", 
                                    g.push(k[o]), a.begin--, a.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: a
                                };
                            }(u, p, d), (o.inputmask.shadowRoot || o.ownerDocument).activeElement !== o && o.focus(), 
                            (0, l.writeBuffer)(o, c.getBuffer.call(t)), c.caret.call(t, o, d.begin, d.end, !0), 
                            !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === a.action && t.isComposing) return !1;
                            switch ("insertCompositionText" === e.inputType && "insertText" === a.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                            a.action) {
                              case "insertText":
                              case "insertReplacementText":
                                a.data.forEach((function(e, n) {
                                    var a = new i.Event("keypress");
                                    a.key = e, t.ignorable = !1, y.keypressEvent.call(o, a);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var h = new i.Event("keydown");
                                h.key = s.keys.Backspace, y.keyEvent.call(o, h);
                                break;

                              default:
                                (0, l.applyInputValue)(o, u), c.caret.call(t, o, d.begin, d.end, !0);
                            }
                            e.preventDefault();
                        }
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, n = t.dependencyLib, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, a, new n.Event("input")), 
                        (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && c.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, n = t.opts, i = t && t._valueGet();
                        n.showMaskOnFocus && i !== c.getBuffer.call(t).join("") && (0, l.writeBuffer)(this, c.getBuffer.call(t), c.seekNext.call(t, c.getLastValidPosition.call(t))), 
                        !0 !== n.positionCaretOnTab || !1 !== t.mouseEnter || u.isComplete.call(t, c.getBuffer.call(t)) && -1 !== c.getLastValidPosition.call(t) || y.clickEvent.apply(this, [ e, !0 ]), 
                        t.undoValue = t && t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, n = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n && (0, 
                        l.HandleNativePlaceholder)(n, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var n = this.inputmask;
                        n.clicked++;
                        var i = this;
                        if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                            var a = c.determineNewCaretPosition.call(n, c.caret.call(n, i), t);
                            void 0 !== a && c.caret.call(n, i, a);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, n = t.maskset, i = this, a = c.caret.call(t, i), r = t.isRTL ? c.getBuffer.call(t).slice(a.end, a.begin) : c.getBuffer.call(t).slice(a.begin, a.end), f = t.isRTL ? r.reverse().join("") : r.join("");
                        o.default.navigator && o.default.navigator.clipboard ? o.default.navigator.clipboard.writeText(f) : o.default.clipboardData && o.default.clipboardData.getData && o.default.clipboardData.setData("Text", f), 
                        u.handleRemove.call(t, i, s.keys.Delete, a), (0, l.writeBuffer)(i, c.getBuffer.call(t), n.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                        t.clicked = 0;
                        var a = i(this), r = this;
                        if (r.inputmask) {
                            (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var o = r.inputmask._valueGet(), s = c.getBuffer.call(t).slice();
                            "" !== o && (n.clearMaskOnLostFocus && (-1 === c.getLastValidPosition.call(t) && o === c.getBufferTemplate.call(t).join("") ? s = [] : l.clearOptionalTail.call(t, s)), 
                            !1 === u.isComplete.call(t, s) && (setTimeout((function() {
                                a.trigger("incomplete");
                            }), 0), n.clearIncomplete && (c.resetMaskSet.call(t, !1), s = n.clearMaskOnLostFocus ? [] : c.getBufferTemplate.call(t).slice())), 
                            (0, l.writeBuffer)(r, s, void 0, e)), o = t._valueGet(!0), t.undoValue !== o && ("" != o || t.undoValue != c.getBufferTemplate.call(t).join("") || t.undoValue == c.getBufferTemplate.call(t).join("") && t.maskset.validPositions.length > 0) && (t.undoValue = o, 
                            a.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts.showMaskOnHover, n = this;
                        if (e.mouseEnter = !0, (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n) {
                            var i = (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).join("");
                            t && (0, l.HandleNativePlaceholder)(n, i);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === c.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === c.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === u.isComplete.call(e, c.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, l.writeBuffer)(e.el, c.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, l.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
            },
            9716: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var i, a = n(7760), r = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                }, o = n(2839), l = n(8711);
                t.EventRuler = {
                    on: function(e, t, n) {
                        var i = e.inputmask.dependencyLib, s = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var s, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var p = i.data(c, "_inputmask_opts");
                                i(c).off(), p && new r.default(p).mask(c);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === o.keys.c || !1 === f.tabThrough && t.key === o.keys.Tab))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                        break;

                                      case "click":
                                      case "focus":
                                        return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, a.HandleNativePlaceholder)(e, (u.isRTL ? l.getBufferTemplate.call(u).slice().reverse() : l.getBufferTemplate.call(u)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (s = arguments, void setTimeout((function() {
                                            e.inputmask && n.apply(c, s);
                                        }), 0));
                                    }
                                    var d = n.apply(c, arguments);
                                    return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && i(e.form).on(t, s)) : i(e).on(t, s), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var n = e.inputmask.dependencyLib, i = e.inputmask.events;
                            for (var a in t && ((i = [])[t] = e.inputmask.events[t]), i) {
                                for (var r = i[a]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(a) ? null !== e.form && n(e.form).off(a, o) : n(e).off(a, o);
                                }
                                delete e.inputmask.events[a];
                            }
                        }
                    }
                };
            },
            219: function(e, t, n) {
                var i = p(n(7184)), a = p(n(2394)), r = n(2839), o = n(8711), l = n(4713);
                function s(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var i, a, r, o, l = [], s = !0, c = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, u(e);
                }
                function f(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                        Object.defineProperty(e, (a = i.key, r = void 0, r = function(e, t) {
                            if ("object" !== u(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var i = n.call(e, t || "default");
                                if ("object" !== u(i)) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(a, "string"), "symbol" === u(r) ? r : String(r)), i);
                    }
                    var a, r;
                }
                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                n(1313);
                var d = a.default.dependencyLib, h = function() {
                    function e(t, n, i, a) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = n, this.opts = i, this.inputmask = a, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts, this.inputmask);
                    }
                    var t, n, i;
                    return t = e, (n = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts, this.inputmask)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t, n) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var a = /\d+$/.exec(i[0]), r = a ? i[0][0] + "x" : i[0], o = void 0;
                                if (void 0 !== e) {
                                    if (a) {
                                        var s = P(t).lastIndex, c = j.call(n, i.index, t, n && n.maskset);
                                        P(t).lastIndex = s, o = e.slice(0, e.indexOf(c.nextMatch[0]));
                                    } else {
                                        for (var u = i[0][0], f = i.index; n && (t.placeholder[l.getTest.call(n, f).match.placeholder] || l.getTest.call(n, f).match.placeholder) === u; ) f++;
                                        var p = f - i.index;
                                        o = e.slice(0, p || y[r] && y[r][4] || r.length);
                                    }
                                    e = e.slice(o.length);
                                }
                                Object.prototype.hasOwnProperty.call(y, r) && this.setValue(this, o, r, y[r][2], y[r][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, n, i, a) {
                            if (void 0 !== t) switch (i) {
                              case "ampm":
                                e[i] = t, e["raw" + i] = t.replace(/\s/g, "_");
                                break;

                              case "month":
                                if ("mmm" === n || "mmmm" === n) {
                                    e[i] = _("mmm" === n ? m.monthNames.slice(0, 12).findIndex((function(e) {
                                        return t.toLowerCase() === e.toLowerCase();
                                    })) + 1 : m.monthNames.slice(12, 24).findIndex((function(e) {
                                        return t.toLowerCase() === e.toLowerCase();
                                    })) + 1, 2), e[i] = "00" === e[i] ? "" : e[i].toString(), e["raw" + i] = e[i];
                                    break;
                                }

                              default:
                                e[i] = t.replace(/[^0-9]/g, "0"), e["raw" + i] = t.replace(/\s/g, "_");
                            }
                            if (void 0 !== a) {
                                var r = e[i];
                                ("day" === i && 29 === parseInt(r) || "month" === i && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === i && (g = !0, 0 === parseInt(r) && (r = 1)), "month" === i && (g = !0), 
                                "year" === i && (g = !0, r.length < y[n][4] && (r = _(r, y[n][4], !0))), ("" !== r && !isNaN(r) || "ampm" === i) && a.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && f(t.prototype, n), i && f(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = a.default.prototype.i18n, g = !1, y = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return _(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return _(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ m.monthNames.slice(0, 12).join("|"), function(e) {
                        var t = m.monthNames.slice(0, 12).findIndex((function(t) {
                            return e.toLowerCase() === t.toLowerCase();
                        }));
                        return -1 !== t && Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                    } ],
                    mmmm: [ m.monthNames.slice(12, 24).join("|"), function(e) {
                        var t = m.monthNames.slice(12, 24).findIndex((function(t) {
                            return e.toLowerCase() === t.toLowerCase();
                        }));
                        return -1 !== t && Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                    } ],
                    yy: [ "[0-9]{2}", function(e) {
                        var t = (new Date).getFullYear().toString().slice(0, 2);
                        Date.prototype.setFullYear.call(this, "".concat(t).concat(e));
                    }, "year", function() {
                        return _(Date.prototype.getFullYear.call(this), 2);
                    }, 2 ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return _(Date.prototype.getFullYear.call(this), 4);
                    }, 4 ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return _(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return _(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return _(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return _(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return _(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return _(Date.prototype.getMilliseconds.call(this), 3);
                    }, 3 ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return _(Date.prototype.getMilliseconds.call(this), 2);
                    }, 2 ],
                    t: [ "[ap]", b, "ampm", x, 1 ],
                    tt: [ "[ap]m", b, "ampm", x, 2 ],
                    T: [ "[AP]", b, "ampm", x, 1 ],
                    TT: [ "[AP]M", b, "ampm", x, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                            return s(e, 1)[0];
                        })).join(""));
                        return e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, k = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function b(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function x() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function w(e) {
                    var t = /\d+$/.exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var n = y[e[0][0] + "x"].slice("");
                        return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n;
                    }
                    if (y[e[0]]) return y[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], n = [];
                        for (var i in y) if (/\.*x$/.test(i)) {
                            var a = i[0] + "\\d+";
                            -1 === n.indexOf(a) && n.push(a);
                        } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                        e.tokenizer = "(" + (n.length > 0 ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function S(e, t, n) {
                    if (!g) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var i = j.call(this, t.pos, n, this.maskset);
                        if (i.targetMatch && "yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if (2 == e.date.getMonth() && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function O(e, t, n, a) {
                    var r, o, l = "", s = 0, c = {};
                    for (P(n).lastIndex = 0; r = P(n).exec(e); ) {
                        if (void 0 === t) if (o = w(r)) l += "(" + o[0] + ")", n.placeholder && "" !== n.placeholder ? (c[s] = n.placeholder[r.index % n.placeholder.length], 
                        c[n.placeholder[r.index % n.placeholder.length]] = r[0].charAt(0)) : c[s] = r[0].charAt(0); else switch (r[0]) {
                          case "[":
                            l += "(";
                            break;

                          case "]":
                            l += ")?";
                            break;

                          default:
                            l += (0, i.default)(r[0]), c[s] = r[0].charAt(0);
                        } else if (o = w(r)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += r[0]; else l += r[0];
                        s++;
                    }
                    return void 0 === t && (n.placeholder = c), l;
                }
                function _(e, t, n) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = n ? e + "0" : "0" + e;
                    return e;
                }
                function M(e, t, n) {
                    return "string" == typeof e ? new h(e, t, n, this) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function E(e, t) {
                    return O(t.inputFormat, {
                        date: e
                    }, t);
                }
                function j(e, t, n) {
                    var i, a, r = this, o = n && n.tests[e] ? t.placeholder[n.tests[e][0].match.placeholder] || n.tests[e][0].match.placeholder : "", s = 0, c = 0;
                    for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                        var u = /\d+$/.exec(a[0]);
                        if (u) c = parseInt(u[0]); else {
                            for (var f = a[0][0], p = s; r && (t.placeholder[l.getTest.call(r, p).match.placeholder] || l.getTest.call(r, p).match.placeholder) === f; ) p++;
                            0 === (c = p - s) && (c = a[0].length);
                        }
                        if (s += c, -1 != a[0].indexOf(o) || s >= e + 1) {
                            i = a, a = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: s - c,
                        nextMatch: a,
                        targetMatch: i
                    };
                }
                a.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, y.S = m.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.regex = O(e.inputFormat, void 0, e), e.min = M(e.min, e.inputFormat, e), e.max = M(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        preValidation: function(e, t, n, i, a, r, o, l) {
                            if (l) return !0;
                            if (isNaN(n) && e[t] !== n) {
                                var s = j.call(this, t, a, r);
                                if (s.nextMatch && s.nextMatch[0] === n && s.targetMatch[0].length > 1) {
                                    var c = w(s.targetMatch)[0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, n, i, a, r, o, s) {
                            var c, u, f = this;
                            if (o) return !0;
                            if (!1 === i && (((c = j.call(f, t + 1, a, r)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]] || (c = j.call(f, t + 2, a, r)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]]) && (u = w(c.targetMatch)[0]), 
                            void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(n + "0") ? (e[t] = n, 
                            e[t + 1] = "0", i = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + n) && (e[t] = "0", e[t + 1] = n, i = {
                                pos: t + 2
                            })), !1 === i)) return i;
                            if (i.fuzzy && (e = i.buffer, t = i.pos), (c = j.call(f, t, a, r)).targetMatch && c.targetMatch[0] && void 0 !== y[c.targetMatch[0]]) {
                                var p = w(c.targetMatch);
                                u = p[0];
                                var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                "year" == p[2]) for (var h = l.getMaskTemplate.call(f, !1, 1, void 0, !0), m = t + 1; m < e.length; m++) e[m] = h[m], 
                                r.validPositions.splice(t + 1, 1);
                            }
                            var g = i, k = M.call(f, e.join(""), a.inputFormat, a);
                            return g && !isNaN(k.date.getTime()) && (a.prefillYear && (g = function(e, t, n) {
                                if (e.year !== e.rawyear) {
                                    var i = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = i.slice(0, a.length), o = i.slice(a.length);
                                    if (2 === a.length && a === r) {
                                        var l = new Date(v, e.month - 1, e.day);
                                        e.day == l.getDate() && (!n.max || n.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                        e.year = i, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(k, g, a)), g = function(e, t, n, i, a) {
                                if (!t) return t;
                                if (t && n.min && !isNaN(n.min.date.getTime())) {
                                    var r;
                                    for (e.reset(), P(n).lastIndex = 0; r = P(n).exec(n.inputFormat); ) {
                                        var o;
                                        if ((o = w(r)) && o[3]) {
                                            for (var l = o[1], s = e[o[2]], c = n.min[o[2]], u = n.max ? n.max[o[2]] : c + 1, f = [], p = !1, d = 0; d < c.length; d++) void 0 !== i.validPositions[d + r.index] || p ? (f[d] = s[d], 
                                            p = p || s[d] > c[d]) : (d + r.index == 0 && s[d] < c[d] ? (f[d] = s[d], p = !0) : f[d] = c[d], 
                                            "year" === o[2] && s.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && c != u && n.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                                            l.call(e._date, f.join(""));
                                        }
                                    }
                                    t = n.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && n.max && (isNaN(n.max.date.getTime()) || (t = n.max.date.getTime() >= e.date.getTime())), 
                                t;
                            }(k, g = S.call(f, k, g, a), a, r)), void 0 !== t && g && i.pos !== t ? {
                                buffer: O(a.inputFormat, k, a).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: i.pos
                                },
                                pos: i.caret || i.pos
                            } : g;
                        },
                        onKeyDown: function(e, t, n, i) {
                            e.ctrlKey && e.key === r.keys.ArrowRight && (this.inputmask._valueSet(E(new Date, i)), 
                            d(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, n) {
                            return t ? O(n.outputFormat, M.call(this, e, n.inputFormat, n), n, !0) : t;
                        },
                        casing: function(e, t, n, i) {
                            if (0 == t.nativeDef.indexOf("[ap]")) return e.toLowerCase();
                            if (0 == t.nativeDef.indexOf("[AP]")) return e.toUpperCase();
                            var a = l.getTest.call(this, [ n - 1 ]);
                            return 0 == a.match.def.indexOf("[AP]") || 0 === n || a && a.input === String.fromCharCode(r.keyCode.Space) || a && a.match.def === String.fromCharCode(r.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = E(e, t)), e;
                        },
                        insertMode: !1,
                        insertModeVisual: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            1313: function(e, t, n) {
                var i, a = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                };
                a.default.dependencyLib.extend(!0, a.default.prototype.i18n, {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                });
            },
            3851: function(e, t, n) {
                var i, a = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                }, r = n(8711), o = n(4713);
                function l(e) {
                    return function(e) {
                        if (Array.isArray(e)) return s(e);
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                    }(e) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                a.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var c = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
                function u(e, t, n, i, a) {
                    if (n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, 
                    a.greedy && parseInt(e) > 255 && c.test("00" + e.charAt(2))) {
                        var r = [].concat(l(t.buffer.slice(0, n)), [ ".", e.charAt(2) ]);
                        if (r.join("").match(/\./g).length < 4) return {
                            refreshFromBuffer: !0,
                            buffer: r,
                            caret: n + 2
                        };
                    }
                    return c.test(e);
                }
                a.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: u
                            },
                            j: {
                                validator: u
                            },
                            k: {
                                validator: u
                            },
                            l: {
                                validator: u
                            }
                        },
                        onUnMask: function(e, t, n) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = e.separator, n = e.quantifier, i = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = i;
                            if (t) for (var r = 0; r < n; r++) a += "[".concat(t).concat(i, "]");
                            return a;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, n) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, n, i, a, l, s) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, n) {
                var i = l(n(7184)), a = l(n(2394)), r = n(2839), o = n(8711);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = a.default.dependencyLib;
                function c(e, t) {
                    for (var n = "", i = 0; i < e.length; i++) a.default.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker[0] === e.charAt(i) || t.optionalmarker[1] === e.charAt(i) || t.quantifiermarker[0] === e.charAt(i) || t.quantifiermarker[1] === e.charAt(i) || t.groupmarker[0] === e.charAt(i) || t.groupmarker[1] === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
                    return n;
                }
                function u(e, t, n, i) {
                    if (e.length > 0 && t > 0 && (!n.digitsOptional || i)) {
                        var a = e.indexOf(n.radixPoint), r = !1;
                        n.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(n.radixPoint), 
                        a = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                    }
                    return r && e.push(n.negationSymbol.back), e;
                }
                function f(e, t) {
                    var n = 0;
                    for (var i in "+" === e && (n = o.seekNext.call(this, t.validPositions.length - 1)), 
                    t.tests) if ((i = parseInt(i)) >= n) for (var a = 0, r = t.tests[i].length; a < r; a++) if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][a].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                    return n;
                }
                function p(e, t) {
                    for (var n = -1, i = 0, a = t.validPositions.length; i < a; i++) {
                        var r = t.validPositions[i];
                        if (r && r.match.def === e) {
                            n = i;
                            break;
                        }
                    }
                    return n;
                }
                function d(e, t, n, i, a) {
                    var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || i && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                    return !i && a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === n ? r + 1 : r,
                            c: a.radixPoint
                        },
                        pos: n
                    } : o;
                }
                a.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", n = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", 
                            e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var a, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = r + n + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : r += n + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", a && (r = [ a + c(e.suffix, e) + "[-]", r ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: d
                            },
                            1: {
                                validator: d,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, n, i, a) {
                                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, n, i, a) {
                                    return a.allowMinus && e === a.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, n, i, a, r, o, l) {
                            var s = this;
                            if (!1 !== a.__financeInput && n === a.radixPoint) return !1;
                            var c = e.indexOf(a.radixPoint), u = t;
                            if (t = function(e, t, n, i, a) {
                                return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= n && (n > 0 || t == a.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, n, c, r, a), "-" === n || n === a.negationSymbol.front) {
                                if (!0 !== a.allowMinus) return !1;
                                var d = !1, h = p("+", r), v = p("-", r);
                                return -1 !== h && (d = [ h ], -1 !== v && d.push(v)), !1 !== d ? {
                                    remove: d,
                                    caret: u - a.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(s, "+", r),
                                        c: a.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(s, "-", r),
                                        c: a.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: u + a.negationSymbol.back.length
                                };
                            }
                            if (n === a.groupSeparator) return {
                                caret: u
                            };
                            if (l) return !0;
                            if (-1 !== c && !0 === a._radixDance && !1 === i && n === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && c !== t) {
                                var m = f.call(s, a.radixPoint, r);
                                return r.validPositions[m] && (r.validPositions[m].generatedInput = r.validPositions[m].generated || !1), 
                                {
                                    caret: a._radixDance && t === c - 1 ? c + 1 : c
                                };
                            }
                            if (!1 === a.__financeInput) if (i) {
                                if (a.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!a.digitsOptional) {
                                    if (o.begin > c && o.end <= c) return n === a.radixPoint ? {
                                        insert: {
                                            pos: c + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: c
                                    } : {
                                        rewritePosition: c + 1
                                    };
                                    if (o.begin < c) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: c
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, n, i, a, r, o) {
                            if (!1 === i) return i;
                            if (o) return !0;
                            if (null !== a.min || null !== a.max) {
                                var l = a.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, a, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== a.min && l < a.min && (l.toString().length > a.min.toString().length || l < 0)) return !1;
                                if (null !== a.max && l > a.max) return !!a.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                };
                            }
                            return i;
                        },
                        onUnMask: function(e, t, n) {
                            if ("" === t && !0 === n.nullable) return t;
                            var a = e.replace(n.prefix, "");
                            return a = (a = a.replace(n.suffix, "")).replace(new RegExp((0, i.default)(n.groupSeparator), "g"), ""), 
                            "" !== n.placeholder.charAt(0) && (a = a.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), 
                            n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== a.indexOf(n.radixPoint) && (a = a.replace(i.default.call(this, n.radixPoint), ".")), 
                            a = (a = a.replace(new RegExp("^" + (0, i.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            i.default)(n.negationSymbol.back) + "$"), ""), Number(a)) : a;
                        },
                        isComplete: function(e, t) {
                            var n = (t.numericInput ? e.slice().reverse() : e).join("");
                            return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, i.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            i.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            i.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace((0, 
                            i.default)(t.radixPoint), ".")), isFinite(n);
                        },
                        onBeforeMask: function(e, t) {
                            var n;
                            e = null !== (n = e) && void 0 !== n ? n : "";
                            var a = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                            var r = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, o = e.split(a), l = o[0].replace(/[^\-0-9]/g, ""), s = o.length > 1 ? o[1].replace(/[^0-9]/g, "") : "", c = o.length > 1;
                            e = l + ("" !== s ? a + s : s);
                            var f = 0;
                            if ("" !== a && (f = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var p = Math.pow(10, f || 1);
                                e = e.replace((0, i.default)(a), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * p) / p).toFixed(f)), 
                                e = e.toString().replace(".", a);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(a) && (e = e.substring(0, e.indexOf(a))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(a, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", a) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", a));
                            }
                            return r && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), f, t, c).join("");
                        },
                        onBeforeWrite: function(e, t, n, a) {
                            function r(e, t) {
                                if (!1 !== a.__financeInput || t) {
                                    var n = e.indexOf(a.radixPoint);
                                    -1 !== n && e.splice(n, 1);
                                }
                                if ("" !== a.groupSeparator) for (;-1 !== (n = e.indexOf(a.groupSeparator)); ) e.splice(n, 1);
                                return e;
                            }
                            var o, l;
                            if (a.stripLeadingZeroes && (l = function(e, t) {
                                var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, i.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                i.default)(t.prefix) + ")(.*)(" + (0, i.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                i.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = n ? n[2] : "", r = !1;
                                return a && (a = a.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < a.length)) && r;
                            }(t, a))) for (var c = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, p = l[0].length - f; p > 0; p--) this.maskset.validPositions.splice(c + p, 1), 
                            delete t[c + p];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== a.min) {
                                    var d = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== a.min && d < a.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: u(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                    };
                                }
                                if (t[t.length - 1] === a.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, i.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                    i.default)(a.prefix) + ")(.*)(" + (0, i.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                    i.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else if ("" !== a.radixPoint) {
                                    t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                    o = {
                                        refreshFromBuffer: !0,
                                        buffer: r(t)
                                    }));
                                }
                                if (a.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = u(v, a.digits, a, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, n, i) {
                            var a, o = s(this);
                            if (3 != e.location) {
                                var l, c = e.key;
                                if ((l = i.shortcuts && i.shortcuts[c]) && l.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l)), 
                                o.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch (e.key) {
                              case r.keys.ArrowUp:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), 
                                o.trigger("setvalue"), !1;

                              case r.keys.ArrowDown:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), 
                                o.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === r.keys.Delete || e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI) && n.begin !== t.length) {
                                if (t[e.key === r.keys.Delete ? n.begin - 1 : n.end] === i.negationSymbol.front) return a = t.slice().reverse(), 
                                "" !== i.negationSymbol.front && a.shift(), "" !== i.negationSymbol.back && a.pop(), 
                                o.trigger("setvalue", [ a.join(""), n.begin ]), !1;
                                if (!0 === i._radixDance) {
                                    var f, p = t.indexOf(i.radixPoint);
                                    if (i.digitsOptional) {
                                        if (0 === p) return (a = t.slice().reverse()).pop(), o.trigger("setvalue", [ a.join(""), n.begin >= a.length ? a.length : n.begin ]), 
                                        !1;
                                    } else if (-1 !== p && (n.begin < p || n.end < p || e.key === r.keys.Delete && (n.begin === p || n.begin - 1 === p))) return n.begin === n.end && (e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === r.keys.Delete && n.begin - 1 === p && (f = s.extend({}, n), 
                                    n.begin--, n.end--)), (a = t.slice().reverse()).splice(a.length - n.begin, n.begin - n.end + 1), 
                                    a = u(a, i.digits, i).join(""), f && (n = f), o.trigger("setvalue", [ a, n.begin >= a.length ? p + 1 : n.begin ]), 
                                    !1;
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = n ? window : {};
            },
            7760: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var n = e ? e.inputmask : this;
                    if (i.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var a = o.getBuffer.call(n).slice(), r = e.inputmask._valueGet();
                            if (r !== t) {
                                var l = o.getLastValidPosition.call(n);
                                -1 === l && r === o.getBufferTemplate.call(n).join("") ? a = [] : -1 !== l && u.call(n, a), 
                                p(e, a);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, n = t.opts, i = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for (var a = [], r = i.validPositions, l = 0, s = r.length; l < s; l++) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(i.metadata) && !0 !== r[l].generatedInput) && a.push(r[l].input);
                    var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                    if ("function" == typeof n.onUnMask) {
                        var f = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                        u = n.onUnMask.call(t, f, u, n);
                    }
                    return u;
                }, t.writeBuffer = p;
                var i = n(9845), a = n(6030), r = n(2839), o = n(8711), l = n(7215), s = n(4713);
                function c(e, t, n) {
                    var i = e ? e.inputmask : this, a = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                    f(e, !0, !1, t = (t || "").toString().split(""), n), i.undoValue = i._valueGet(!0), 
                    (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for (var t, n = s.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = n.shift()); ) e.push(t);
                    return e;
                }
                function f(e, t, n, i, r) {
                    var c, u = e ? e.inputmask : this, f = u.maskset, d = u.opts, h = u.dependencyLib, v = i.slice(), m = "", g = -1, y = d.skipOptionalPartCharacter;
                    d.skipOptionalPartCharacter = "", o.resetMaskSet.call(u, !1), u.clicked = 0, g = d.radixPoint ? o.determineNewCaretPosition.call(u, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === d.__financeInput ? "radixFocus" : void 0).begin : 0, f.p = g, u.caretPos = {
                        begin: g
                    };
                    var k = [], b = u.caretPos;
                    if (v.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var i = new h.Event("_checkval");
                            i.key = e, m += e;
                            var r = o.getLastValidPosition.call(u, void 0, !0);
                            !function(e, t) {
                                for (var n = s.getMaskTemplate.call(u, !0, 0).slice(e, o.seekNext.call(u, e, !1, !1)).join("").replace(/'/g, ""), i = n.indexOf(t); i > 0 && " " === n[i - 1]; ) i--;
                                var a = 0 === i && !o.isMask.call(u, e) && (s.getTest.call(u, e).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e).match.static && s.getTest.call(u, e).match.nativeDef === "'" + t.charAt(0) || " " === s.getTest.call(u, e).match.nativeDef && (s.getTest.call(u, e + 1).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e + 1).match.static && s.getTest.call(u, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!a && i > 0 && !o.isMask.call(u, e, !1, !0)) {
                                    var r = o.seekNext.call(u, e);
                                    u.caretPos.begin < r && (u.caretPos = {
                                        begin: r
                                    });
                                }
                                return a;
                            }(g, m) ? (c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, u.caretPos.begin)) && (g = u.caretPos.begin + 1, 
                            m = "") : c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, r + 1), c ? (void 0 !== c.pos && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static && void 0 === f.validPositions[c.pos].alternation && (k.push(c.pos), 
                            u.isRTL || (c.forwardPosition = c.pos + 1)), p.call(u, void 0, o.getBuffer.call(u), c.forwardPosition, i, !1), 
                            u.caretPos = {
                                begin: c.forwardPosition,
                                end: c.forwardPosition
                            }, b = u.caretPos) : void 0 === f.validPositions[t] && v[t] === s.getPlaceholder.call(u, t) && o.isMask.call(u, t, !0) ? u.caretPos.begin++ : u.caretPos = b;
                        }
                    })), k.length > 0) {
                        var x, w, P = o.seekNext.call(u, -1, void 0, !1);
                        if (!l.isComplete.call(u, o.getBuffer.call(u)) && k.length <= P || l.isComplete.call(u, o.getBuffer.call(u)) && k.length > 0 && k.length !== P && 0 === k[0]) for (var S = P; void 0 !== (x = k.shift()); ) if (x < S) {
                            var O = new h.Event("_checkval");
                            if ((w = f.validPositions[x]).generatedInput = !0, O.key = w.input, (c = a.EventHandlers.keypressEvent.call(u, O, !0, !1, n, S)) && void 0 !== c.pos && c.pos !== x && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static) k.push(c.pos); else if (!c) break;
                            S++;
                        }
                    }
                    t && p.call(u, e, o.getBuffer.call(u), c ? c.forwardPosition : u.caretPos.begin, r || new h.Event("checkval"), r && ("input" === r.type && u.undoValue !== o.getBuffer.call(u).join("") || "paste" === r.type)), 
                    d.skipOptionalPartCharacter = y;
                }
                function p(e, t, n, i, a) {
                    var s = e ? e.inputmask : this, c = s.opts, u = s.dependencyLib;
                    if (i && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(s, i, t, n, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var p = f.refreshFromBuffer;
                                l.refreshFromBuffer.call(s, !0 === p ? p : p.start, p.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                            }
                            void 0 !== n && (n = void 0 !== f.caret ? f.caret : n);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === n || void 0 !== i && "blur" === i.type || o.caret.call(s, e, n, void 0, void 0, void 0 !== i && "keydown" === i.type && (i.key === r.keys.Delete || i.key === r.keys.Backspace)), 
                    void 0 === e.inputmask.writeBufferHook || e.inputmask.writeBufferHook(n), !0 === a)) {
                        var d = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout((function() {
                            h === o.getBufferTemplate.call(s).join("") ? d.trigger("cleared") : !0 === l.isComplete.call(s, t) && d.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = v(n(3976)), a = v(n(7392)), r = v(n(4963)), o = n(9716), l = v(n(9380)), s = n(7760), c = n(157), u = n(2391), f = n(8711), p = n(7215), d = n(4713);
                function h(e) {
                    return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, h(e);
                }
                function v(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var m = l.default.document, g = "_inputmask_opts";
                function y(e, t, n) {
                    if (!(this instanceof y)) return new y(e, t, n);
                    this.dependencyLib = r.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                    !0 !== n && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                    e && (t.alias = e)), this.opts = r.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                    this.userOptions = t || {}, k(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                    this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                    this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                    this.isComposing = !1, this.hasAlternator = !1;
                }
                function k(e, t, n) {
                    var i = y.prototype.aliases[e];
                    return i ? (i.alias && k(i.alias, void 0, n), r.default.extend(!0, n, i), r.default.extend(!0, n, t), 
                    !0) : (null === n.mask && (n.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: i.default,
                    definitions: a.default,
                    aliases: {},
                    masksCache: {},
                    i18n: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, n) {
                            var i = r.default.extend(!0, {}, t.opts);
                            if (function(e, t, n, i) {
                                function a(t, a) {
                                    var r = "" === i ? t : i + "-" + t;
                                    null !== (a = void 0 !== a ? a : e.getAttribute(r)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = l.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                    n[t] = a);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var o, s, c, u, f = e.getAttribute(i);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                    s) for (u in c = void 0, s) if ("alias" === u.toLowerCase()) {
                                        c = s[u];
                                        break;
                                    }
                                    for (o in a("alias", c), n.alias && k(n.alias, n, t), t) {
                                        if (s) for (u in c = void 0, s) if (u.toLowerCase() === o.toLowerCase()) {
                                            c = s[u];
                                            break;
                                        }
                                        a(o, c);
                                    }
                                }
                                r.default.extend(!0, t, n), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(n).length;
                            }(e, i, r.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var a = (0, u.generateMaskSet)(i, t.noMasksCache);
                                void 0 !== a && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = i, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = r.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, r.default)(e), e.inputmask.maskset = a, r.default.data(e, g, t.userOptions), 
                                c.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === h(e) ? (r.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            s.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts);
                        }
                        return s.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            r.default.data(this.el, g, null);
                            var e = this.opts.autoUnmask ? (0, s.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== f.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            o.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                        (this.isRTL ? f.getBufferTemplate.call(this).reverse() : f.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                        p.isComplete.call(this, f.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = d.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            s.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                        for (var n = f.getBuffer.call(this), i = f.determineLastRequiredPosition.call(this), a = n.length - 1; a > i && !f.isMask.call(this, a); a--) ;
                        return n.splice(i, a + 1 - i), p.isComplete.call(this, n) && e === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache);
                        var n = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        s.checkVal.call(this, void 0, !0, !1, n);
                        var i = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                        return t ? {
                            value: i,
                            metadata: this.getmetadata()
                        } : i;
                    },
                    setValue: function(e) {
                        this.el && (0, r.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: u.analyseMask
                }, y.extendDefaults = function(e) {
                    r.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    r.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    r.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, n) {
                    return y(t).format(e, n);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, r.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, y.dependencyLib = r.default, l.default.Inputmask = y;
                t.default = y;
            },
            5296: function(e, t, n) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                var a = d(n(9380)), r = d(n(2394));
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                            if ("object" !== i(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var a = n.call(e, t || "default");
                                if ("object" !== i(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(r, "string"), "symbol" === i(o) ? o : String(o)), a);
                    }
                    var r, o;
                }
                function l(e) {
                    var t = u();
                    return function() {
                        var n, a = p(e);
                        if (t) {
                            var r = p(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === i(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }(e);
                        }(this, n);
                    };
                }
                function s(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return s = function(e) {
                        if (null === e || !function(e) {
                            try {
                                return -1 !== Function.toString.call(e).indexOf("[native code]");
                            } catch (t) {
                                return "function" == typeof e;
                            }
                        }(e)) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return c(e, arguments, p(this).constructor);
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(n, e);
                    }, s(e);
                }
                function c(e, t, n) {
                    return c = u() ? Reflect.construct.bind() : function(e, t, n) {
                        var i = [ null ];
                        i.push.apply(i, t);
                        var a = new (Function.bind.apply(e, i));
                        return n && f(a, n.prototype), a;
                    }, c.apply(null, arguments);
                }
                function u() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function f(e, t) {
                    return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e;
                    }, f(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var h = a.default.document;
                if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                    var v = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && f(e, t);
                        }(s, e);
                        var t, n, i, a = l(s);
                        function s() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, s);
                            var t = (e = a.call(this)).getAttributeNames(), n = e.attachShadow({
                                mode: "closed"
                            });
                            for (var i in e.input = h.createElement("input"), e.input.type = "text", n.appendChild(e.input), 
                            t) Object.prototype.hasOwnProperty.call(t, i) && e.input.setAttribute(t[i], e.getAttribute(t[i]));
                            var o = new r.default;
                            return o.dataAttribute = "", o.mask(e.input), e.input.inputmask.shadowRoot = n, 
                            e;
                        }
                        return t = s, (n = [ {
                            key: "attributeChangedCallback",
                            value: function(e, t, n) {
                                this.input.setAttribute(e, n);
                            }
                        }, {
                            key: "value",
                            get: function() {
                                return this.input.value;
                            },
                            set: function(e) {
                                this.input.value = e;
                            }
                        } ]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), s;
                    }(s(HTMLElement));
                    a.default.customElements.define("input-mask", v);
                }
            },
            2839: function(e, t) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var i, a, r, o, l = [], s = !0, c = !1;
                            try {
                                if (r = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        }))), n.push.apply(n, i);
                    }
                    return n;
                }
                function o(e, t, i) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var a = i.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(e, "string");
                        return "symbol" === n(t) ? t : String(t);
                    }(t)) in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return s[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return l[e];
                };
                var l = t.keyCode = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach((function(t) {
                            o(e, t, n[t]);
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        }));
                    }
                    return e;
                }({
                    c: 67,
                    x: 88,
                    z: 90,
                    BACKSPACE_SAFARI: 127,
                    Enter: 13,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    Space: 32
                }, {
                    Alt: 18,
                    AltGraph: 18,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                    ArrowRight: 39,
                    ArrowUp: 38,
                    Backspace: 8,
                    CapsLock: 20,
                    Control: 17,
                    ContextMenu: 93,
                    Dead: 221,
                    Delete: 46,
                    End: 35,
                    Escape: 27,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123,
                    Home: 36,
                    Insert: 45,
                    NumLock: 144,
                    PageDown: 34,
                    PageUp: 33,
                    Pause: 19,
                    PrintScreen: 44,
                    Process: 229,
                    Shift: 16,
                    ScrollLock: 145,
                    Tab: 9,
                    Unidentified: 229
                }), s = Object.entries(l).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0], r = n[1];
                    return e[r] = void 0 === e[r] ? a : e[r], e;
                }), {});
                t.keys = Object.entries(l).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0];
                    n[1];
                    return e[a] = "Space" === a ? " " : a, e;
                }), {});
            },
            2391: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, n) {
                    var i, a, s, c, u, f, p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, h = !1, v = new o.default, m = [], g = [], y = !1;
                    function k(e, i, a) {
                        a = void 0 !== a ? a : e.matches.length;
                        var o = e.matches[a - 1];
                        if (t) {
                            if (0 === i.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i) || "." === i) {
                                var s = n.casing ? "i" : "";
                                /\\p\{.*}/i.test(i) && (s += "u"), e.matches.splice(a++, 0, {
                                    fn: new RegExp(i, s),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== i,
                                    casing: null,
                                    def: i,
                                    placeholder: "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                    nativeDef: i
                                });
                            } else h && (i = i[i.length - 1]), i.split("").forEach((function(t, i) {
                                o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(n.staticDefinitionSymbol || t) ? new RegExp("[" + (n.staticDefinitionSymbol || t) + "]", n.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                    casing: null,
                                    def: n.staticDefinitionSymbol || t,
                                    placeholder: void 0 !== n.staticDefinitionSymbol ? t : "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                    nativeDef: (h ? "'" : "") + t
                                });
                            }));
                            h = !1;
                        } else {
                            var c = n.definitions && n.definitions[i] || n.usePrototypeDefinitions && r.default.prototype.definitions[i];
                            c && !h ? e.matches.splice(a++, 0, {
                                fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, n.casing ? "i" : "") : new function() {
                                    this.test = c.validator;
                                } : /./,
                                static: c.static || !1,
                                optionality: c.optional || !1,
                                defOptionality: c.optional || !1,
                                newBlockMarker: void 0 === o || c.optional ? "master" : o.def !== (c.definitionSymbol || i),
                                casing: c.casing,
                                def: c.definitionSymbol || i,
                                placeholder: c.placeholder,
                                nativeDef: i,
                                generated: c.generated
                            }) : (e.matches.splice(a++, 0, {
                                fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== i && !0 !== o.static,
                                casing: null,
                                def: n.staticDefinitionSymbol || i,
                                placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0,
                                nativeDef: (h ? "'" : "") + i
                            }), h = !1);
                        }
                    }
                    function b() {
                        if (m.length > 0) {
                            if (k(c = m[m.length - 1], a), c.isAlternator) {
                                u = m.pop();
                                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                            }
                        } else k(v, a);
                    }
                    function x(e) {
                        var t = new o.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function w() {
                        if ((s = m.pop()).openGroup = !1, void 0 !== s) if (m.length > 0) {
                            if ((c = m[m.length - 1]).matches.push(s), c.isAlternator) {
                                u = m.pop();
                                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                                m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                            }
                        } else v.matches.push(s); else b();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = x([ e.pop(), t ])), t;
                    }
                    t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0);
                    for (;i = t ? d.exec(e) : p.exec(e); ) {
                        if (a = i[0], t) {
                            switch (a.charAt(0)) {
                              case "?":
                                a = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                a = "{" + a + "}";
                                break;

                              case "|":
                                if (0 === m.length) {
                                    var S = x(v.matches);
                                    S.openGroup = !0, m.push(S), v.matches = [], y = !0;
                                }
                            }
                            switch (a) {
                              case "\\d":
                                a = "[0-9]";
                                break;

                              case "\\p":
                                a += d.exec(e)[0], a += d.exec(e)[0];
                            }
                        }
                        if (h) b(); else switch (a.charAt(0)) {
                          case "$":
                          case "^":
                            t || b();
                            break;

                          case n.escapeChar:
                            h = !0, t && b();
                            break;

                          case n.optionalmarker[1]:
                          case n.groupmarker[1]:
                            w();
                            break;

                          case n.optionalmarker[0]:
                            m.push(new o.default(!1, !0));
                            break;

                          case n.groupmarker[0]:
                            m.push(new o.default(!0));
                            break;

                          case n.quantifiermarker[0]:
                            var O = new o.default(!1, !1, !0), _ = (a = a.replace(/[{}?]/g, "")).split("|"), M = _[0].split(","), E = isNaN(M[0]) ? M[0] : parseInt(M[0]), j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                            "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                                min: E,
                                max: j,
                                jit: T
                            };
                            var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                            (i = A.pop()).isGroup || (i = x([ i ])), A.push(i), A.push(O);
                            break;

                          case n.alternatormarker:
                            if (m.length > 0) {
                                var D = (c = m[m.length - 1]).matches[c.matches.length - 1];
                                f = c.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? m.pop() : P(c.matches);
                            } else f = P(v.matches);
                            if (f.isAlternator) m.push(f); else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = !1) : u = new o.default(!1, !1, !1, !0), 
                            u.matches.push(f), m.push(u), f.openGroup) {
                                f.openGroup = !1;
                                var L = new o.default(!0);
                                L.alternatorGroup = !0, m.push(L);
                            }
                            break;

                          default:
                            b();
                        }
                    }
                    y && w();
                    for (;m.length > 0; ) s = m.pop(), v.matches.push(s);
                    v.matches.length > 0 && (!function e(i) {
                        i && i.matches && i.matches.forEach((function(a, r) {
                            var o = i.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                            t || (k(a, n.groupmarker[0], 0), !0 !== a.openGroup && k(a, n.groupmarker[1]))), 
                            e(a);
                        }));
                    }(v), g.push(v));
                    (n.numericInput || n.isRTL) && function e(t) {
                        for (var i in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                            var a = parseInt(i);
                            if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                var r = t.matches[i];
                                t.matches.splice(i, 1), t.matches.splice(a + 1, 0, r);
                            }
                            void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === n.optionalmarker[0] ? o = n.optionalmarker[1] : o === n.optionalmarker[1] ? o = n.optionalmarker[0] : o === n.groupmarker[0] ? o = n.groupmarker[1] : o === n.groupmarker[1] && (o = n.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(g[0]);
                    return g;
                }, t.generateMaskSet = function(e, t) {
                    var n;
                    function o(e, t) {
                        var n = t.repeat, i = t.groupmarker, r = t.quantifiermarker, o = t.keepStatic;
                        if (n > 0 || "*" === n || "+" === n) {
                            var l = "*" === n ? 0 : "+" === n ? 1 : n;
                            if (l != n) e = i[0] + e + i[1] + r[0] + l + "," + n + r[1]; else for (var c = e, u = 1; u < l; u++) e += c;
                        }
                        if (!0 === o) {
                            var f = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                            f && f.forEach((function(t, n) {
                                var i = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || function(e, t) {
                                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != n) {
                                            var i, a, r, o, l = [], s = !0, c = !1;
                                            try {
                                                if (r = (n = n.call(e)).next, 0 === t) {
                                                    if (Object(n) !== n) return;
                                                    s = !1;
                                                } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                            } catch (e) {
                                                c = !0, a = e;
                                            } finally {
                                                try {
                                                    if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                                } finally {
                                                    if (c) throw a;
                                                }
                                            }
                                            return l;
                                        }
                                    }(e, t) || function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return s(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === n && e.constructor && (n = e.constructor.name);
                                        if ("Map" === n || "Set" === n) return Array.from(e);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t.split("["), 2), r = i[0], o = i[1];
                                o = o.replace("]", ""), e = e.replace(new RegExp("".concat((0, a.default)(r), "\\[").concat((0, 
                                a.default)(o), "\\]")), r.charAt(0) === o.charAt(0) ? "(".concat(r, "|").concat(r).concat(o, ")") : "".concat(r, "[").concat(o, "]"));
                            }));
                        }
                        return e;
                    }
                    function c(e, n, a) {
                        var s, c, u = !1;
                        return null !== e && "" !== e || ((u = null !== a.regex) ? e = (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u = !0, 
                        e = ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), 
                        e = o(e, a), c = u ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e, 
                        null !== a.keepStatic && (c = "ks_" + a.keepStatic + c), "object" === l(a.placeholder) && (c = "ph_" + JSON.stringify(a.placeholder) + c), 
                        void 0 === r.default.prototype.masksCache[c] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, u, a),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: n,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[c] = s, s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]))) : s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]), 
                        s;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var u = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                u.length > 1 && (u += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? u += t.mask : u += t;
                            })), c(u += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    n = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? c(e.mask.mask, e.mask, e) : c(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return n;
                };
                var i = c(n(4963)), a = c(n(7184)), r = c(n(2394)), o = c(n(9695));
                function l(e) {
                    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, l(e);
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, n = this.el, c = this.dependencyLib;
                    r.EventRuler.off(n);
                    var u = function(t, n) {
                        var i = t.getAttribute("type"), a = "input" === t.tagName.toLowerCase() && n.supportsInputType.includes(i) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!a) if ("input" === t.tagName.toLowerCase()) {
                            var s = document.createElement("input");
                            s.setAttribute("type", i), a = "text" === s.type, s = null;
                        } else a = "partial";
                        return !1 !== a ? function(t) {
                            var i, a;
                            function s() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== l.getLastValidPosition.call(e) || !0 !== n.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, l.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, l.getBuffer.call(e).slice())).join("") : i.call(this) : "" : i.call(this);
                            }
                            function u(e) {
                                a.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== n.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (i = f.get, a = f.set, Object.defineProperty(t, "value", {
                                            get: s,
                                            set: u,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (i = function() {
                                            return this.textContent;
                                        }, a = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: s,
                                            set: u,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (i = t.__lookupGetter__("value"), 
                                    a = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", u));
                                    t.inputmask.__valueGet = i, t.inputmask.__valueSet = a;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? i.call(this.el).split("").reverse().join("") : i.call(this.el);
                                }, t.inputmask._valueSet = function(t, n) {
                                    a.call(this.el, null == t ? "" : !0 !== n && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === i && (i = function() {
                                    return this.value;
                                }, a = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (c.valHooks && (void 0 === c.valHooks[t] || !0 !== c.valHooks[t].inputmaskpatch)) {
                                        var i = c.valHooks[t] && c.valHooks[t].get ? c.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, a = c.valHooks[t] && c.valHooks[t].set ? c.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        c.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var a = i(t);
                                                    return -1 !== l.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== n.nullable ? a : "";
                                                }
                                                return i(t);
                                            },
                                            set: function(e, t) {
                                                var n = a(e, t);
                                                return e.inputmask && (0, o.applyInputValue)(e, t), n;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    r.EventRuler.on(e, "mouseenter", (function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? l.getBuffer.call(e.inputmask).slice().reverse() : l.getBuffer.call(e.inputmask)).join("") && (0, 
                                        o.applyInputValue)(e, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, a;
                    }(n, t);
                    if (!1 !== u) {
                        e.originalPlaceholder = n.placeholder, e.maxLength = void 0 !== n ? n.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = t.inputmode, 
                        n.setAttribute("inputmode", t.inputmode)), !0 === u && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(n.autocomplete), 
                        i.iphone && (t.insertModeVisual = !1, n.setAttribute("autocorrect", "off")), r.EventRuler.on(n, "submit", a.EventHandlers.submitEvent), 
                        r.EventRuler.on(n, "reset", a.EventHandlers.resetEvent), r.EventRuler.on(n, "blur", a.EventHandlers.blurEvent), 
                        r.EventRuler.on(n, "focus", a.EventHandlers.focusEvent), r.EventRuler.on(n, "invalid", a.EventHandlers.invalidEvent), 
                        r.EventRuler.on(n, "click", a.EventHandlers.clickEvent), r.EventRuler.on(n, "mouseleave", a.EventHandlers.mouseleaveEvent), 
                        r.EventRuler.on(n, "mouseenter", a.EventHandlers.mouseenterEvent), r.EventRuler.on(n, "paste", a.EventHandlers.pasteEvent), 
                        r.EventRuler.on(n, "cut", a.EventHandlers.cutEvent), r.EventRuler.on(n, "complete", t.oncomplete), 
                        r.EventRuler.on(n, "incomplete", t.onincomplete), r.EventRuler.on(n, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && r.EventRuler.on(n, "keydown", a.EventHandlers.keyEvent), 
                        (i.mobile || t.inputEventOnly) && n.removeAttribute("maxLength"), r.EventRuler.on(n, "input", a.EventHandlers.inputFallBackEvent)), 
                        r.EventRuler.on(n, "setvalue", a.EventHandlers.setValueEvent), void 0 === e.applyMaskHook || e.applyMaskHook(), 
                        l.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var f = (n.inputmask.shadowRoot || n.ownerDocument).activeElement;
                        if ("" !== n.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || f === n) {
                            (0, o.applyInputValue)(n, n.inputmask._valueGet(!0), t);
                            var p = l.getBuffer.call(e).slice();
                            !1 === s.isComplete.call(e, p) && t.clearIncomplete && l.resetMaskSet.call(e, !1), 
                            t.clearMaskOnLostFocus && f !== n && (-1 === l.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && f === n || "" !== n.inputmask._valueGet(!0)) && (0, 
                            o.writeBuffer)(n, p), f === n && l.caret.call(e, n, l.seekNext.call(e, l.getLastValidPosition.call(e)));
                        }
                    }
                };
                var i = n(9845), a = n(6030), r = n(9716), o = n(7760), l = n(8711), s = n(7215);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n, i) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var n = Object(this), i = n.length >>> 0;
                        if (0 === i) return !1;
                        for (var a = 0 | t, r = Math.max(a >= 0 ? a : i - Math.abs(a), 0); r < i; ) {
                            if (n[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            9302: function() {
                var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), n = Function.bind.call(Function.call, Array.prototype.concat), i = Object.keys;
                Object.entries || (Object.entries = function(a) {
                    return e(i(a), (function(e, i) {
                        return n(e, "string" == typeof i && t(a, i) ? [ [ i, a[i] ] ] : []);
                    }), []);
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            4013: function() {
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                });
            },
            8711: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, n, i, r) {
                    var o, l = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    n = e.selectionEnd) : a.default.getSelection ? (o = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, 
                    n = o.endOffset) : document.selection && document.selection.createRange && (n = (t = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), 
                    {
                        begin: i ? t : f.call(l, t),
                        end: i ? n : f.call(l, n)
                    };
                    if (Array.isArray(t) && (n = l.isRTL ? t[0] : t[1], t = l.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (n = l.isRTL ? t.begin : t.end, t = l.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = i ? t : f.call(l, t), n = "number" == typeof (n = i ? n : f.call(l, n)) ? n : t;
                        var c = parseInt(((e.ownerDocument.defaultView || a.default).getComputedStyle ? (e.ownerDocument.defaultView || a.default).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                        if (e.scrollLeft = c > e.scrollWidth ? c : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: n
                        }, s.insertModeVisual && !1 === s.insertMode && t === n && (r || n++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                            if ("setSelectionRange" in e) e.setSelectionRange(t, n); else if (a.default.getSelection) {
                                if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                    var u = document.createTextNode("");
                                    e.appendChild(u);
                                }
                                o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), 
                                o.collapse(!0);
                                var p = a.default.getSelection();
                                p.removeAllRanges(), p.addRange(o);
                            } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n), 
                            o.moveStart("character", t), o.select());
                            void 0 === e.inputmask.caretHook || e.inputmask.caretHook.call(l, {
                                begin: t,
                                end: n
                            });
                        }
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, n, i = this, a = i.maskset, l = i.dependencyLib, c = s.call(i), u = {}, f = a.validPositions[c], p = o.getMaskTemplate.call(i, !0, s.call(i), !0, !0), d = p.length, h = void 0 !== f ? f.locator.slice() : void 0;
                    for (t = c + 1; t < p.length; t++) h = (n = o.getTestTemplate.call(i, t, h, t - 1)).locator.slice(), 
                    u[t] = l.extend(!0, {}, n);
                    var v = f && void 0 !== f.alternation ? f.locator[f.alternation] : void 0;
                    for (t = d - 1; t > c && (((n = u[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || v && (v !== u[t].locator[f.alternation] && !0 !== n.match.static || !0 === n.match.static && n.locator[f.alternation] && r.checkAlternationMatch.call(i, n.locator[f.alternation].toString().split(","), v.toString().split(",")) && "" !== o.getTests.call(i, t)[0].def)) && p[t] === o.getPlaceholder.call(i, t, n.match)); t--) d--;
                    return e ? {
                        l: d,
                        def: u[d] ? u[d].match : void 0
                    } : d;
                }, t.determineNewCaretPosition = function(e, t, n) {
                    var i, a, r, f = this, p = f.maskset, d = f.opts;
                    t && (f.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (n = n || d.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: l.call(f).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = u.call(f, s.call(f));
                            break;

                          case "radixFocus":
                            if (f.clicked > 1 && 0 === p.validPositions.length) break;
                            if (function(e) {
                                if ("" !== d.radixPoint && 0 !== d.digits) {
                                    var t = p.validPositions;
                                    if (void 0 === t[e] || void 0 === t[e].input) {
                                        if (e < u.call(f, -1)) return !0;
                                        var n = l.call(f).indexOf(d.radixPoint);
                                        if (-1 !== n) {
                                            for (var i = 0, a = t.length; i < a; i++) if (t[i] && n < i && t[i].input !== o.getPlaceholder.call(f, i)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var h = l.call(f).join("").indexOf(d.radixPoint);
                                e.end = e.begin = d.numericInput ? u.call(f, h) : h;
                                break;
                            }

                          default:
                            if (i = e.begin, a = s.call(f, i, !0), i <= (r = u.call(f, -1 !== a || c.call(f, 0) ? a : -1))) e.end = e.begin = c.call(f, i, !1, !0) ? i : u.call(f, i); else {
                                var v = p.validPositions[a], m = o.getTestTemplate.call(f, r, v ? v.match.locator : void 0, v), g = o.getPlaceholder.call(f, r, m.match);
                                if ("" !== g && l.call(f)[r] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !c.call(f, r, d.keepStatic, !0) && m.match.def === g) {
                                    var y = u.call(f, r);
                                    (i >= y || i === r) && (r = y);
                                }
                                e.end = e.begin = r;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = l, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = o.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = s, t.isMask = c, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                    !1 === e && (t.tests = {}, t.jitOffset = {});
                }, t.seekNext = u, t.seekPrevious = function(e, t) {
                    var n = this, i = e - 1;
                    if (e <= 0) return 0;
                    for (;i > 0 && (!0 === t && (!0 !== o.getTest.call(n, i).match.newBlockMarker || !c.call(n, i, void 0, !0)) || !0 !== t && !c.call(n, i, void 0, !0)); ) i--;
                    return i;
                }, t.translatePosition = f;
                var i, a = (i = n(9380)) && i.__esModule ? i : {
                    default: i
                }, r = n(7215), o = n(4713);
                function l(e) {
                    var t = this, n = t.maskset;
                    return void 0 !== n.buffer && !0 !== e || (n.buffer = o.getMaskTemplate.call(t, !0, s.call(t), !0), 
                    void 0 === n._buffer && (n._buffer = n.buffer.slice())), n.buffer;
                }
                function s(e, t, n) {
                    var i = this.maskset, a = -1, r = -1, o = n || i.validPositions;
                    void 0 === e && (e = -1);
                    for (var l = 0, s = o.length; l < s; l++) o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), 
                    l >= e && (r = l));
                    return -1 === a || a === e ? r : -1 === r || e - a < r - e ? a : r;
                }
                function c(e, t, n) {
                    var i = this, a = this.maskset, r = o.getTestTemplate.call(i, e).match;
                    if ("" === r.def && (r = o.getTest.call(i, e).match), !0 !== r.static) return r.fn;
                    if (!0 === n && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (n) {
                            var l = o.getTests.call(i, e);
                            return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                        }
                        var s = o.determineTestTemplate.call(i, e, o.getTests.call(i, e)), c = o.getPlaceholder.call(i, e, s.match);
                        return s.match.def !== c;
                    }
                    return !1;
                }
                function u(e, t, n) {
                    var i = this;
                    void 0 === n && (n = !0);
                    for (var a = e + 1; "" !== o.getTest.call(i, a).match.def && (!0 === t && (!0 !== o.getTest.call(i, a).match.newBlockMarker || !c.call(i, a, void 0, !0)) || !0 !== t && !c.call(i, a, void 0, n)); ) a++;
                    return a;
                }
                function f(e) {
                    var t = this.opts, n = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !n || (e = this._valueGet().length - e) < 0 && (e = 0), 
                    e;
                }
            },
            4713: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = f, t.getDecisionTaker = s, t.getMaskTemplate = function(e, t, n, i, a) {
                    var r = this, o = this.opts, l = this.maskset, s = o.greedy;
                    a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, d, v, m, g = [], y = 0;
                    do {
                        if (!0 === e && l.validPositions[y]) d = (v = a && l.validPositions[y].match.optionality && void 0 === l.validPositions[y + 1] && (!0 === l.validPositions[y].generatedInput || l.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? f.call(r, y, h.call(r, y, p, y - 1)) : l.validPositions[y]).match, 
                        p = v.locator.slice(), g.push(!0 === n ? v.input : !1 === n ? d.nativeDef : c.call(r, y, d)); else {
                            d = (v = u.call(r, y, p, y - 1)).match, p = v.locator.slice();
                            var k = !0 !== i && (!1 !== o.jitMasking ? o.jitMasking : d.jit);
                            (m = (m || l.validPositions[y - 1]) && d.static && d.def !== o.groupSeparator && null === d.fn) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === n ? d.nativeDef : c.call(r, g.length, d)) : m = !1;
                        }
                        y++;
                    } while (!0 !== d.static || "" !== d.def || t > y);
                    "" === g[g.length - 1] && g.pop();
                    !1 === n && void 0 !== l.maskLength || (l.maskLength = y - 1);
                    return o.greedy = s, g;
                }, t.getPlaceholder = c, t.getTest = p, t.getTestTemplate = u, t.getTests = h, t.isSubsetOf = d;
                var i, a = (i = n(2394)) && i.__esModule ? i : {
                    default: i
                }, r = n(8711);
                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, o(e);
                }
                function l(e, t) {
                    var n = (null != e.alternation ? e.mloc[s(e)] : e.locator).join("");
                    if ("" !== n) for (n = n.split(":")[0]; n.length < t; ) n += "0";
                    return n;
                }
                function s(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function c(e, t, n) {
                    var i = this, a = this.opts, l = this.maskset;
                    if (void 0 !== (t = t || p.call(i, e).match).placeholder || !0 === n) {
                        if ("" !== t.placeholder && !0 === t.static && !0 !== t.generated) {
                            var s = r.getLastValidPosition.call(i, e), c = r.seekNext.call(i, s);
                            return (n ? e <= c : e < c) ? a.staticDefinitionSymbol && t.static ? t.nativeDef : t.def : "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                        }
                        return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                    }
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === l.validPositions[e]) {
                            var u, f = h.call(i, e), d = [];
                            if ("string" == typeof a.placeholder && f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) for (var v = 0; v < f.length; v++) if ("" !== f[v].match.def && !0 !== f[v].match.optionality && !0 !== f[v].match.optionalQuantifier && (!0 === f[v].match.static || void 0 === u || !1 !== f[v].match.fn.test(u.match.def, l, e, !0, a)) && (d.push(f[v]), 
                            !0 === f[v].match.static && (u = f[v]), d.length > 1 && /[0-9a-bA-Z]/.test(d[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                        }
                        return t.def;
                    }
                    return "object" === o(a.placeholder) ? t.def : a.placeholder.charAt(e % a.placeholder.length);
                }
                function u(e, t, n) {
                    return this.maskset.validPositions[e] || f.call(this, e, h.call(this, e, t ? t.slice() : t, n));
                }
                function f(e, t) {
                    var n = this.opts, i = 0, a = function(e, t) {
                        var n = 0, i = !1;
                        t.forEach((function(e) {
                            e.match.optionality && (0 !== n && n !== e.match.optionality && (i = !0), (0 === n || n > e.match.optionality) && (n = e.match.optionality));
                        })), n && (0 == e || 1 == t.length ? n = 0 : i || (n = 0));
                        return n;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var r, o, s, c = l(p.call(this, e));
                    n.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (i = 1);
                    for (var u = 0; u < t.length - i; u++) {
                        var f = t[u];
                        r = l(f, c.length);
                        var d = Math.abs(r - c);
                        (!0 !== f.unMatchedAlternationStopped || t.filter((function(e) {
                            return !0 !== e.unMatchedAlternationStopped;
                        })).length <= 1) && (void 0 === o || "" !== r && d < o || s && !n.greedy && s.match.optionality && s.match.optionality - a > 0 && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !n.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                        s = f);
                    }
                    return s;
                }
                function p(e, t) {
                    var n = this.maskset;
                    return n.validPositions[e] ? n.validPositions[e] : (t || h.call(this, e))[0];
                }
                function d(e, t, n) {
                    function i(e) {
                        for (var t, n = [], i = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++i < t; ) n.push(String.fromCharCode(i)); else i = e.charCodeAt(a), 
                        n.push(e.charAt(a));
                        return n.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && ("." === t.match.fn.source || -1 !== i(t.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g, ""))));
                }
                function h(e, t, n) {
                    var i, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, u = this.el, p = s.maskToken, h = t ? n : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "", k = !1;
                    function b(t, n, r, l) {
                        function f(r, l, p) {
                            function v(e, t) {
                                var n = 0 === t.matches.indexOf(e);
                                return n || t.matches.every((function(i, a) {
                                    return !0 === i.isQuantifier ? n = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (n = v(e, i)), 
                                    !n;
                                })), n;
                            }
                            function w(e, t, n) {
                                var i, a;
                                if ((s.tests[e] || s.validPositions[e]) && (s.validPositions[e] ? [ s.validPositions[e] ] : s.tests[e]).every((function(e, r) {
                                    if (e.mloc[t]) return i = e, !1;
                                    var o = void 0 !== n ? n : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === a || l < a) && -1 !== l && (i = e, a = l), !0;
                                })), i) {
                                    var r = i.locator[i.alternation], o = i.mloc[t] || i.mloc[r] || i.locator;
                                    if (-1 !== o[o.length - 1].toString().indexOf(":")) o.pop();
                                    return o.slice((void 0 !== n ? n : i.alternation) + 1);
                                }
                                return void 0 !== n ? w(e, t) : void 0;
                            }
                            function P(t, n) {
                                return !0 === t.match.static && !0 !== n.match.static && n.match.fn.test(t.match.def, s, e, !1, c, !1);
                            }
                            function S(e, t) {
                                var n = e.alternation, i = void 0 === t || n <= t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                                if (!i && n > t.alternation) for (var a = 0; a < n; a++) if (e.locator[a] !== t.locator[a]) {
                                    n = a, i = !0;
                                    break;
                                }
                                return !!i && function(n) {
                                    e.mloc = e.mloc || {};
                                    var i = e.locator[n];
                                    if (void 0 !== i) {
                                        if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice(), 
                                        e.mloc[i].push(":".concat(e.alternation))), void 0 !== t) {
                                            for (var a in t.mloc) "string" == typeof a && (a = parseInt(a.split(",")[0])), e.mloc[a + 0] = t.mloc[a];
                                            e.locator[n] = Object.keys(e.mloc).join(",");
                                        }
                                        return e.alternation > n && (e.alternation = n), !0;
                                    }
                                    return e.alternation = void 0, !1;
                                }(n);
                            }
                            function O(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var n = e.alternation + 1; n < e.locator.length; n++) if (e.locator[n] !== t.locator[n]) return !1;
                                return !0;
                            }
                            if (h > e + c._maxTestPos) throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(s.mask));
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: l.reverse(),
                                    cd: y,
                                    mloc: {}
                                }), !r.optionality || void 0 !== p || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && p !== r) return function() {
                                    if (r = f(t.matches[t.matches.indexOf(r) + 1], l, p)) return !0;
                                }();
                                if (r.isOptional) return function() {
                                    var t = r, a = m.length;
                                    if (r = b(r, n, l, p), m.length > 0) {
                                        if (m.forEach((function(e, t) {
                                            t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        })), i = m[m.length - 1].match, void 0 !== p || !v(i, t)) return r;
                                        g = !0, h = e;
                                    }
                                }();
                                if (r.isAlternator) return function() {
                                    function i(e) {
                                        for (var t, n = e.matches[0].matches ? e.matches[0].matches.length : 1, i = 0; i < e.matches.length && n === (t = e.matches[i].matches ? e.matches[i].matches.length : 1); i++) ;
                                        return n !== t;
                                    }
                                    o.hasAlternator = !0;
                                    var a, v = r, y = [], b = m.slice(), x = l.length, _ = n.length > 0 ? n.shift() : -1;
                                    if (-1 === _ || "string" == typeof _) {
                                        var M, E = h, j = n.slice(), T = [];
                                        if ("string" == typeof _) T = _.split(","); else for (M = 0; M < v.matches.length; M++) T.push(M.toString());
                                        if (void 0 !== s.excludes[e]) {
                                            for (var A = T.slice(), D = 0, L = s.excludes[e].length; D < L; D++) {
                                                var C = s.excludes[e][D].toString().split(":");
                                                l.length == C[1] && T.splice(T.indexOf(C[0]), 1);
                                            }
                                            0 === T.length && (delete s.excludes[e], T = A);
                                        }
                                        (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && E >= c.keepStatic) && (T = T.slice(0, 1));
                                        for (var B = 0; B < T.length; B++) {
                                            M = parseInt(T[B]), m = [], n = "string" == typeof _ && w(h, M, x) || j.slice();
                                            var I = v.matches[M];
                                            if (I && f(I, [ M ].concat(l), p)) r = !0; else if (0 === B && (k = i(v)), I && I.matches && I.matches.length > v.matches[0].matches.length) break;
                                            a = m.slice(), h = E, m = [];
                                            for (var R = 0; R < a.length; R++) {
                                                var F = a[R], N = !1;
                                                F.alternation = F.alternation || x, S(F);
                                                for (var V = 0; V < y.length; V++) {
                                                    var G = y[V];
                                                    if ("string" != typeof _ || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                                                        if (F.match.nativeDef === G.match.nativeDef) {
                                                            N = !0, S(G, F);
                                                            break;
                                                        }
                                                        if (d(F, G, c)) {
                                                            S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F));
                                                            break;
                                                        }
                                                        if (d(G, F, c)) {
                                                            S(G, F);
                                                            break;
                                                        }
                                                        if (P(F, G)) {
                                                            O(F, G) || void 0 !== u.inputmask.userOptions.keepStatic ? S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F)) : c.keepStatic = !0;
                                                            break;
                                                        }
                                                        if (P(G, F)) {
                                                            S(G, F);
                                                            break;
                                                        }
                                                    }
                                                }
                                                N || y.push(F);
                                            }
                                        }
                                        m = b.concat(y), h = e, g = m.length > 0 && k, r = y.length > 0 && !k, k && g && !r && m.forEach((function(e, t) {
                                            e.unMatchedAlternationStopped = !0;
                                        })), n = j.slice();
                                    } else r = f(v.matches[_] || t.matches[_], [ _ ].concat(l), p);
                                    if (r) return !0;
                                }();
                                if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                    for (var a = r, o = !1, u = n.length > 0 ? n.shift() : 0; u < (isNaN(a.quantifier.max) ? u + 1 : a.quantifier.max) && h <= e; u++) {
                                        var p = t.matches[t.matches.indexOf(a) - 1];
                                        if (r = f(p, [ u ].concat(l), p)) {
                                            if (m.forEach((function(t, n) {
                                                (i = x(p, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = u >= a.quantifier.min, 
                                                i.jit = (u + 1) * (p.matches.indexOf(i) + 1) > a.quantifier.jit, i.optionalQuantifier && v(i, p) && (g = !0, 
                                                h = e, c.greedy && null == s.validPositions[e - 1] && u > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                y = void 0), o = !0, r = !1), !o && i.jit && (s.jitOffset[e] = p.matches.length - p.matches.indexOf(i));
                                            })), o) break;
                                            return !0;
                                        }
                                    }
                                }();
                                if (r = b(r, n, l, p)) return !0;
                            } else h++;
                        }
                        for (var p = n.length > 0 ? n.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                            var v = f(t.matches[p], [ p ].concat(r), l);
                            if (v && h === e) return v;
                            if (h > e) break;
                        }
                    }
                    function x(e, t) {
                        var n = -1 != e.matches.indexOf(t);
                        return n || e.matches.forEach((function(e, i) {
                            void 0 === e.matches || n || (n = x(e, t));
                        })), n;
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var w, P = e - 1; void 0 === (w = s.validPositions[P] || s.tests[P]) && P > -1; ) P--;
                            void 0 !== w && P > -1 && (v = function(e, t) {
                                var n, i = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (i = f.call(o, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === i.length ? (n = e.alternation, i = e.locator.slice()) : e.locator[n] && -1 === i[n].toString().indexOf(e.locator[n]) && (i[n] += "," + e.locator[n]));
                                }))), i;
                            }(P, w), y = v.join(""), h = P);
                        }
                        if (s.tests[e] && s.tests[e][0].cd === y) return s.tests[e];
                        for (var S = v.shift(); S < p.length; S++) {
                            if (b(p[S], v, [ S ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: k && 0 === m.filter((function(e) {
                            return !0 !== e.unMatchedAlternationStopped;
                        })).length ? [ 0 ] : [],
                        mloc: {},
                        cd: y
                    }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                    r = s.tests[e]), m.forEach((function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    })), r;
                }
            },
            7215: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = l, t.checkAlternationMatch = function(e, t, n) {
                    for (var i, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== n ? n.split(",") : [], l = 0; l < o.length; l++) -1 !== (i = e.indexOf(o[l])) && e.splice(i, 1);
                    for (var s = 0; s < e.length; s++) if (a.includes(e[s])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, n, i, s) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                    c.isRTL)) {
                        var p = n.end;
                        n.end = n.begin, n.begin = p;
                    }
                    var d, h = r.getLastValidPosition.call(c, void 0, !0);
                    n.end >= r.getBuffer.call(c).length && h >= n.end && (n.end = h + 1);
                    t === a.keys.Backspace ? n.end - n.begin < 1 && (n.begin = r.seekPrevious.call(c, n.begin)) : t === a.keys.Delete && n.begin === n.end && (n.end = r.isMask.call(c, n.end, !0, !0) ? n.end + 1 : r.seekNext.call(c, n.end) + 1);
                    !1 !== (d = v.call(c, n)) && ((!0 !== i && !1 !== f.keepStatic || null !== f.regex && -1 !== o.getTest.call(c, n.begin).match.def.indexOf("|")) && l.call(c, !0), 
                    !0 !== i && (u.p = t === a.keys.Delete ? n.begin + d : n.begin, u.p = r.determineNewCaretPosition.call(c, {
                        begin: u.p,
                        end: u.p
                    }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin));
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d, 
                t.revalidateMask = v;
                var i = n(6030), a = n(2839), r = n(8711), o = n(4713);
                function l(e, t, n, i, a, s) {
                    var c = this, u = this.dependencyLib, p = this.opts, d = c.maskset;
                    if (!c.hasAlternator) return !1;
                    var h, v, m, g, y, k, b, x, w, P, S, O = u.extend(!0, [], d.validPositions), _ = u.extend(!0, {}, d.tests), M = !1, E = !1, j = void 0 !== a ? a : r.getLastValidPosition.call(c);
                    if (s && (P = s.begin, S = s.end, s.begin > s.end && (P = s.end, S = s.begin)), 
                    -1 === j && void 0 === a) h = 0, v = (g = o.getTest.call(c, h)).alternation; else for (;j >= 0; j--) if ((m = d.validPositions[j]) && void 0 !== m.alternation) {
                        if (j <= (e || 0) && g && g.locator[m.alternation] !== m.locator[m.alternation]) break;
                        h = j, v = d.validPositions[h].alternation, g = m;
                    }
                    if (void 0 !== v) {
                        b = parseInt(h), d.excludes[b] = d.excludes[b] || [], !0 !== e && d.excludes[b].push((0, 
                        o.getDecisionTaker)(g) + ":" + g.alternation);
                        var T = [], A = -1;
                        for (y = b; b < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) -1 === A && e <= y && void 0 !== t && (T.push(t), 
                        A = T.length - 1), (k = d.validPositions[b]) && !0 !== k.generatedInput && (void 0 === s || y < P || y >= S) && T.push(k.input), 
                        d.validPositions.splice(b, 1);
                        for (-1 === A && void 0 !== t && (T.push(t), A = T.length - 1); void 0 !== d.excludes[b] && d.excludes[b].length < 10; ) {
                            for (d.tests = {}, r.resetMaskSet.call(c, !0), M = !0, y = 0; y < T.length && (x = M.caret || 0 == p.insertMode && null != x ? r.seekNext.call(c, x) : r.getLastValidPosition.call(c, void 0, !0) + 1, 
                            w = T[y], M = f.call(c, x, w, !1, i, !0)); y++) y === A && (E = M), 1 == e && M && (E = {
                                caretPos: y
                            });
                            if (M) break;
                            if (r.resetMaskSet.call(c), g = o.getTest.call(c, b), d.validPositions = u.extend(!0, [], O), 
                            d.tests = u.extend(!0, {}, _), !d.excludes[b]) {
                                E = l.call(c, e, t, n, i, b - 1, s);
                                break;
                            }
                            if (null != g.alternation) {
                                var D = (0, o.getDecisionTaker)(g);
                                if (-1 !== d.excludes[b].indexOf(D + ":" + g.alternation)) {
                                    E = l.call(c, e, t, n, i, b - 1, s);
                                    break;
                                }
                                for (d.excludes[b].push(D + ":" + g.alternation), y = b; y < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) d.validPositions.splice(b);
                            } else delete d.excludes[b];
                        }
                    }
                    return E && !1 === p.keepStatic || delete d.excludes[b], E;
                }
                function s(e, t, n) {
                    var i = this.opts, r = this.maskset;
                    switch (i.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = r.validPositions[n - 1];
                        e = 0 === n || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof i.casing) {
                            var l = Array.prototype.slice.call(arguments);
                            l.push(r.validPositions), e = i.casing.apply(this, l);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, n = this.opts, i = this.maskset;
                    if ("function" == typeof n.isComplete) return n.isComplete(e, n);
                    if ("*" !== n.repeat) {
                        var a = !1, l = r.determineLastRequiredPosition.call(t, !0), s = l.l;
                        if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                            a = !0;
                            for (var c = 0; c <= s; c++) {
                                var u = o.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === i.validPositions[c] && (!1 === u.optionality || void 0 === u.optionality || u.optionality && 0 == u.newBlockMarker) && (!1 === u.optionalQuantifier || void 0 === u.optionalQuantifier) || !0 === u.static && "" != u.def && e[c] !== o.getPlaceholder.call(t, c, u)) {
                                    a = !1;
                                    break;
                                }
                            }
                        }
                        return a;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, n, i, a, p, m) {
                    var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                    n = !0 === n;
                    var x = e;
                    function w(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            })).forEach((function(e) {
                                v.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : i);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function P(t, n, a) {
                        var l = !1;
                        return o.getTests.call(g, t).every((function(c, f) {
                            var p = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (l = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(n, b, t, a, k, u.call(g, e)) : (n === p.def || n === k.skipOptionalPartCharacter) && "" !== p.def && {
                                c: o.getPlaceholder.call(g, t, p, !0) || p.def,
                                pos: t
                            }))) {
                                var d = void 0 !== l.c ? l.c : n, h = t;
                                return d = d === k.skipOptionalPartCharacter && !0 === p.static ? o.getPlaceholder.call(g, t, p, !0) || p.def : d, 
                                !0 !== (l = w(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                    input: s.call(g, d, p, h)
                                }), i, h) && (l = !1), !1);
                            }
                            return !0;
                        })), l;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, O = y.extend(!0, [], b.validPositions);
                    if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== a && !0 !== i) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                    delete b.tests[_]);
                    if ("function" == typeof k.preValidation && !0 !== i && !0 !== p && (S = w(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, n || a))), 
                    !0 === S) {
                        if (S = P(x, t, n), (!n || !0 === i) && !1 === S && !0 !== p) {
                            var M = b.validPositions[x];
                            if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== a && (S.caret = x), 
                                    E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var j = x + 1, T = r.seekNext.call(g, x, !1, 0 !== x); j <= T; j++) if (!1 !== (S = P(j, t, n))) {
                                        S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        g.hasAlternator && !0 !== a && !n && (a = !0, !1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t, n, i, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = l.call(g, !0))), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== i && !0 !== p) {
                        var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, n, m);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], O)) : h.call(g, void 0, x, !0);
                    var D = w(S);
                    void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !i && (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], O), D = !1));
                    return D;
                }
                function p(e, t, n) {
                    for (var i = this.maskset, a = !1, r = o.getTests.call(this, e), l = 0; l < r.length; l++) {
                        if (r[l].match && (r[l].match.nativeDef === t.match[n.shiftPositions ? "def" : "nativeDef"] && (!n.shiftPositions || !t.match.static) || r[l].match.nativeDef === t.match.nativeDef || n.regex && !r[l].match.static && r[l].match.fn.test(t.input, i, e, !1, n))) {
                            a = !0;
                            break;
                        }
                        if (r[l].match && r[l].match.def === t.match.nativeDef) {
                            a = void 0;
                            break;
                        }
                    }
                    return !1 === a && void 0 !== i.jitOffset[e] && (a = p.call(this, e + i.jitOffset[e], t, n)), 
                    a;
                }
                function d(e, t, n) {
                    var a, o, l = this, s = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, p = l.isRTL ? n.slice().reverse() : n;
                    if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(l, !1), e = 0, 
                    t = n.length, o = r.determineNewCaretPosition.call(l, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (a = e; a < t; a++) s.validPositions.splice(e, 0);
                        o = e;
                    }
                    var d = new u.Event("keypress");
                    for (a = e; a < t; a++) {
                        d.key = p[a].toString(), l.ignorable = !1;
                        var h = i.EventHandlers.keypressEvent.call(l, d, !0, !1, !1, o);
                        !1 !== h && void 0 !== h && (o = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, n) {
                    var i = this, a = this.maskset, l = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !a.validPositions[e]; e--) ;
                    for (var s = e; s < t; s++) {
                        if (void 0 === a.validPositions[s] && !r.isMask.call(i, s, !1)) if (0 == s ? o.getTest.call(i, s) : a.validPositions[s - 1]) {
                            var c = o.getTests.call(i, s).slice();
                            "" === c[c.length - 1].match.def && c.pop();
                            var u, p = o.determineTestTemplate.call(i, s, c);
                            if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = a.validPositions[s + 1]) && !0 === u.match.optionalQuantifier) && ((p = l.extend({}, p, {
                                input: o.getPlaceholder.call(i, s, p.match, !0) || p.match.def
                            })).generatedInput = !0, v.call(i, s, p, !0), !0 !== n)) {
                                var d = a.validPositions[t].input;
                                return a.validPositions[t] = void 0, f.call(i, t, d, !0, !0);
                            }
                        }
                    }
                }
                function v(e, t, n, i) {
                    var a = this, l = this.maskset, s = this.opts, c = this.dependencyLib;
                    function d(e, t, n) {
                        var i = t[e];
                        if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var a = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return a && r;
                        }
                        return !1;
                    }
                    var h = 0, v = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, g = !0;
                    if (e.begin > e.end && (v = e.end, m = e.begin), i = void 0 !== i ? i : v, void 0 === n && (v !== m || s.insertMode && void 0 !== l.validPositions[i] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var y, k = c.extend(!0, [], l.validPositions), b = r.getLastValidPosition.call(a, void 0, !0);
                        l.p = v;
                        var x = u.call(a, e) ? v : i;
                        for (y = b; y >= x; y--) l.validPositions.splice(y, 1), void 0 === t && delete l.tests[y + 1];
                        var w, P, S = i, O = S;
                        for (t && (l.validPositions[i] = c.extend(!0, {}, t), O++, S++), null == k[m] && l.jitOffset[m] && (m += l.jitOffset[m] + 1), 
                        y = t ? m : m - 1; y <= b; y++) {
                            if (void 0 !== (w = k[y]) && !0 !== w.generatedInput && (y >= m || y >= v && d(y, k, {
                                begin: v,
                                end: m
                            }))) {
                                for (;"" !== o.getTest.call(a, O).match.def; ) {
                                    if (!1 !== (P = p.call(a, O, w, s)) || "+" === w.match.def) {
                                        "+" === w.match.def && r.getBuffer.call(a, !0);
                                        var _ = f.call(a, O, w.input, "+" !== w.match.def, !0);
                                        if (g = !1 !== _, S = (_.pos || O) + 1, !g && P) break;
                                    } else g = !1;
                                    if (g) {
                                        void 0 === t && w.match.static && y === e.begin && h++;
                                        break;
                                    }
                                    if (!g && r.getBuffer.call(a), O > l.maskLength) break;
                                    O++;
                                }
                                "" == o.getTest.call(a, O).match.def && (g = !1), O = S;
                            }
                            if (!g) break;
                        }
                        if (!g) return l.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(a, !0), 
                        !1;
                    } else t && o.getTest.call(a, i).match.cd === t.match.cd && (l.validPositions[i] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(a, !0), h;
                }
            }
        }, t = {};
        function n(i) {
            var a = t[i];
            if (void 0 !== a) return a.exports;
            var r = t[i] = {
                exports: {}
            };
            return e[i](r, r.exports, n), r.exports;
        }
        var i = {};
        return function() {
            var e = i;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207), 
            n(5296);
            var t, a = (t = n(2394)) && t.__esModule ? t : {
                default: t
            };
            e.default = a.default;
        }(), i;
    }();
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGlzdC9pbnB1dG1hc2tcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDI0IFJvYmluIEhlcmJvdHNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogVmVyc2lvbjogNS4wLjlcbiAqL1xuIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gdCgpOyBlbHNlIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoW10sIHQpOyBlbHNlIHtcbiAgICAgICAgdmFyIG4gPSB0KCk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbikgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzIDogZSlbaV0gPSBuW2ldO1xuICAgIH1cbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGUgPSB7XG4gICAgICAgICAgICAzOTc2OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBfbWF4VGVzdFBvczogNTAwLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsbWFya2VyOiBbIFwiW1wiLCBcIl1cIiBdLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGlmaWVybWFya2VyOiBbIFwie1wiLCBcIn1cIiBdLFxuICAgICAgICAgICAgICAgICAgICBncm91cG1hcmtlcjogWyBcIihcIiwgXCIpXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRvcm1hcmtlcjogXCJ8XCIsXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZUNoYXI6IFwiXFxcXFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWdleDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25pbmNvbXBsZXRlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICBvbmNsZWFyZWQ6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogMCxcbiAgICAgICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZU1hc2tPblN1Ym1pdDogITEsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyTWFza09uTG9zdEZvY3VzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydE1vZGVWaXN1YWw6ICEwLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICExLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZU1hc2s6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQub25CZWZvcmVNYXNrID8gdC5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0KSA6IGU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzaG93TWFza09uRm9jdXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICBzaG93TWFza09uSG92ZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICBvbktleVZhbGlkYXRpb246IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiIFwiLFxuICAgICAgICAgICAgICAgICAgICBudW1lcmljSW5wdXQ6ICExLFxuICAgICAgICAgICAgICAgICAgICByaWdodEFsaWduOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgdW5kb09uRXNjYXBlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgX3JhZGl4RGFuY2U6ICExLFxuICAgICAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uVGFiOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgdGFiVGhyb3VnaDogITEsXG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInVybFwiLCBcInBhc3N3b3JkXCIsIFwic2VhcmNoXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0RlZmluaXRpb25TeW1ib2w6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgaml0TWFza2luZzogITEsXG4gICAgICAgICAgICAgICAgICAgIG51bGxhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFdmVudE9ubHk6ICExLFxuICAgICAgICAgICAgICAgICAgICBub1ZhbHVlUGF0Y2hpbmc6ICExLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBpbXBvcnREYXRhQXR0cmlidXRlczogITAsXG4gICAgICAgICAgICAgICAgICAgIHNoaWZ0UG9zaXRpb25zOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgdXNlUHJvdG90eXBlRGVmaW5pdGlvbnM6ICEwLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXZlbnRUaW1lT3V0OiAzZTMsXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVzOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzM5MjogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgOToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjEwLVxcdWZmMTldXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTAtXFx1ZmYxOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyNTM6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gbikgcmV0dXJuIGUuX19kYXRhID8gZS5fX2RhdGFbdF0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBlLl9fZGF0YSA9IGUuX19kYXRhIHx8IHt9LCBlLl9fZGF0YVt0XSA9IG47XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzNzc2OiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LkV2ZW50ID0gdm9pZCAwLCB0Lm9mZiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGk7XG4gICAgICAgICAgICAgICAgICAgIHUodGhpc1swXSkgJiYgZSAmJiAobiA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgaSA9IHRoaXNbMF0sIGUuc3BsaXQoXCIgXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbyhlLnNwbGl0KFwiLlwiKSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhLCByLCBvID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoID4gMCkgaWYgKHZvaWQgMCA9PT0gdCkgZm9yIChhID0gMCwgciA9IG5bZV1baV0ubGVuZ3RoOyBhIDwgcjsgYSsrKSBvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBpICYmIGkubGVuZ3RoID4gMCA/IGkgOiBcImdsb2JhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBuW2VdW2ldW2FdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IGVsc2Ugby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXY6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogaSAmJiBpLmxlbmd0aCA+IDAgPyBpIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBlbHNlIGlmIChpLmxlbmd0aCA+IDApIGZvciAodmFyIGwgaW4gbikgZm9yICh2YXIgcyBpbiBuW2xdKSBpZiAocyA9PT0gaSkgaWYgKHZvaWQgMCA9PT0gdCkgZm9yIChhID0gMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IG5bbF1bc10ubGVuZ3RoOyBhIDwgcjsgYSsrKSBvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldjogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBuW2xdW3NdW2FdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IGVsc2Ugby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXY6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoYVswXSwgYVsxXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5ldiwgYSA9IGUuaGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbiBuID09IDEpIGlmIChpLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgYSwgITEpIDogaS5kZXRhY2hFdmVudCAmJiBpLmRldGFjaEV2ZW50KFwib25cIi5jb25jYXQoZSksIGEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWxcIiA9PT0gdCkgZm9yICh2YXIgciBpbiBuW2VdKSBuW2VdW3JdLnNwbGljZShuW2VdW3JdLmluZGV4T2YoYSksIDEpOyBlbHNlIG5bZV1bdF0uc3BsaWNlKG5bZV1bdF0uaW5kZXhPZihhKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0LCBlLm5hbWVzcGFjZSwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sIHQub24gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1KHRoaXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgaSA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBvKGUuc3BsaXQoXCIuXCIpLCAyKSwgciA9IGFbMF0sIGwgPSBhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lciA/IGkuYWRkRXZlbnRMaXN0ZW5lcihlLCB0LCAhMSkgOiBpLmF0dGFjaEV2ZW50ICYmIGkuYXR0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChlKSwgdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuW2VdID0gbltlXSB8fCB7fSwgbltlXVthXSA9IG5bZV1bYV0gfHwgW10sIG5bZV1bYV0ucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHIsIHZvaWQgMCA9PT0gbCA/IFwiZ2xvYmFsXCIgOiBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LCB0LnRyaWdnZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodSh0aGlzWzBdKSkgZm9yICh2YXIgbiA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgaSA9IHRoaXNbMF0sIG8gPSBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZS5zcGxpdChcIiBcIikgOiBbIGUudHlwZSBdLCBsID0gMDsgbCA8IG8ubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gb1tsXS5zcGxpdChcIi5cIiksIGYgPSBzWzBdLCBwID0gc1sxXSB8fCBcImdsb2JhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gYyAmJiBcImdsb2JhbFwiID09PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQsIGggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuY3JlYXRlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImlucHV0XCIgPT09IGYpIGguaW5wdXRUeXBlID0gXCJpbnNlcnRUZXh0XCIsIGQgPSBuZXcgSW5wdXRFdmVudChmLCBoKTsgZWxzZSBkID0gbmV3IEN1c3RvbUV2ZW50KGYsIGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZCA9IGMuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KGYsIGguYnViYmxlcywgaC5jYW5jZWxhYmxlLCBoLmRldGFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50eXBlICYmICgwLCBhLmRlZmF1bHQpKGQsIGUpLCBpLmRpc3BhdGNoRXZlbnQoZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIChkID0gYy5jcmVhdGVFdmVudE9iamVjdCgpKS5ldmVudFR5cGUgPSBmLCBkLmRldGFpbCA9IGFyZ3VtZW50c1sxXSwgZS50eXBlICYmICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKGQsIGUpLCBpLmZpcmVFdmVudChcIm9uXCIgKyBkLmV2ZW50VHlwZSwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZvaWQgMCAhPT0gbltmXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXS50eXBlID8gYXJndW1lbnRzWzBdIDogci5kZWZhdWx0LkV2ZW50KGFyZ3VtZW50c1swXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXS5kZXRhaWwgPSBhcmd1bWVudHMuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBuW2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcImdsb2JhbFwiID09PSBwID8gT2JqZWN0LnZhbHVlcyh2KS5mbGF0KCkgOiB2W3BdKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmFwcGx5KGksIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpID0gcyhuKDkzODApKSwgYSA9IHMobig2MDApKSwgciA9IHMobig0OTYzKSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH0oZSkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBudWxsID09IGUgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGVbU3ltYm9sLml0ZXJhdG9yXSB8fCBlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSwgYSwgciwgbywgbCA9IFtdLCBzID0gITAsIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IChuID0gbi5jYWxsKGUpKS5uZXh0LCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KG4pICE9PSBuKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKHMgPSAoaSA9IHIuY2FsbChuKSkuZG9uZSkgJiYgKGwucHVzaChpLnZhbHVlKSwgbC5sZW5ndGggIT09IHQpOyBzID0gITApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMCwgYSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcyAmJiBudWxsICE9IG4ucmV0dXJuICYmIChvID0gbi5yZXR1cm4oKSwgT2JqZWN0KG8pICE9PSBvKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIGwoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk9iamVjdFwiID09PSBuICYmIGUuY29uc3RydWN0b3IgJiYgKG4gPSBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiTWFwXCIgPT09IG4gfHwgXCJTZXRcIiA9PT0gbikgcmV0dXJuIEFycmF5LmZyb20oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gbiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGwoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwLCBpID0gbmV3IEFycmF5KHQpOyBuIDwgdDsgbisrKSBpW25dID0gZVtuXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYyA9IGkuZGVmYXVsdC5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZiA9IHQuRXZlbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLmRlZmF1bHQuQ3VzdG9tRXZlbnQgPyB0LkV2ZW50ID0gZiA9IGkuZGVmYXVsdC5DdXN0b21FdmVudCA6IGkuZGVmYXVsdC5FdmVudCAmJiBjICYmIGMuY3JlYXRlRXZlbnQgPyAodC5FdmVudCA9IGYgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0IHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGMuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4uaW5pdEN1c3RvbUV2ZW50KGUsIHQuYnViYmxlcywgdC5jYW5jZWxhYmxlLCB0LmRldGFpbCksIG47XG4gICAgICAgICAgICAgICAgfSwgZi5wcm90b3R5cGUgPSBpLmRlZmF1bHQuRXZlbnQucHJvdG90eXBlKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEV2ZW50ICYmICh0LkV2ZW50ID0gZiA9IEV2ZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgbihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCwgaSwgYSwgciwgbywgbCwgcyA9IGFyZ3VtZW50c1swXSB8fCB7fSwgYyA9IDEsIHUgPSBhcmd1bWVudHMubGVuZ3RoLCBmID0gITE7XG4gICAgICAgICAgICAgICAgICAgIFwiYm9vbGVhblwiID09IHR5cGVvZiBzICYmIChmID0gcywgcyA9IGFyZ3VtZW50c1tjXSB8fCB7fSwgYysrKTtcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiAhPT0gbihzKSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHMgJiYgKHMgPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO2MgPCB1OyBjKyspIGlmIChudWxsICE9ICh0ID0gYXJndW1lbnRzW2NdKSkgZm9yIChpIGluIHQpIGEgPSBzW2ldLCBzICE9PSAociA9IHRbaV0pICYmIChmICYmIHIgJiYgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSB8fCAobyA9IEFycmF5LmlzQXJyYXkocikpKSA/IChvID8gKG8gPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIGwgPSBhICYmIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW10pIDogbCA9IGEgJiYgXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID8gYSA6IHt9LCBcbiAgICAgICAgICAgICAgICAgICAgc1tpXSA9IGUoZiwgbCwgcikpIDogdm9pZCAwICE9PSByICYmIChzW2ldID0gcikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQ5NjM6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGwobig5MzgwKSksIGEgPSBsKG4oMjUzKSksIHIgPSBuKDM3NzYpLCBvID0gbChuKDYwMCkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcyA9IGkuZGVmYXVsdC5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBjID8gZSA6IHRoaXMgaW5zdGFuY2VvZiBjID8gdm9pZCAobnVsbCAhPSBlICYmIGUgIT09IGkuZGVmYXVsdCAmJiAodGhpc1swXSA9IGUubm9kZU5hbWUgPyBlIDogdm9pZCAwICE9PSBlWzBdICYmIGVbMF0ubm9kZU5hbWUgPyBlWzBdIDogcy5xdWVyeVNlbGVjdG9yKGUpLCBcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB0aGlzWzBdICYmIG51bGwgIT09IHRoaXNbMF0gJiYgKHRoaXNbMF0uZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSB8fCB7fSkpKSA6IG5ldyBjKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb246IHIub24sXG4gICAgICAgICAgICAgICAgICAgIG9mZjogci5vZmYsXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHIudHJpZ2dlclxuICAgICAgICAgICAgICAgIH0sIGMuZXh0ZW5kID0gby5kZWZhdWx0LCBjLmRhdGEgPSBhLmRlZmF1bHQsIGMuRXZlbnQgPSByLkV2ZW50O1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IGM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTg0NTogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5tb2JpbGUgPSB0LmlwaG9uZSA9IHQuaWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGksIGEgPSAoaSA9IG4oOTM4MCkpICYmIGkuX19lc01vZHVsZSA/IGkgOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByID0gYS5kZWZhdWx0Lm5hdmlnYXRvciAmJiBhLmRlZmF1bHQubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIHQuaWUgPSByLmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgci5pbmRleE9mKFwiVHJpZGVudC9cIikgPiAwLCB0Lm1vYmlsZSA9IGEuZGVmYXVsdC5uYXZpZ2F0b3IgJiYgYS5kZWZhdWx0Lm5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmIGEuZGVmYXVsdC5uYXZpZ2F0b3IudXNlckFnZW50RGF0YS5tb2JpbGUgfHwgYS5kZWZhdWx0Lm5hdmlnYXRvciAmJiBhLmRlZmF1bHQubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gYS5kZWZhdWx0LCBcbiAgICAgICAgICAgICAgICB0LmlwaG9uZSA9IC9pcGhvbmUvaS50ZXN0KHIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDcxODQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUucmVwbGFjZShuLCBcIlxcXFwkMVwiKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IFJlZ0V4cChcIihcXFxcXCIgKyBbIFwiL1wiLCBcIi5cIiwgXCIqXCIsIFwiK1wiLCBcIj9cIiwgXCJ8XCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCIsIFwiXFxcXFwiLCBcIiRcIiwgXCJeXCIgXS5qb2luKFwifFxcXFxcIikgKyBcIilcIiwgXCJnaW1cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAzMDogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBpKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuRXZlbnRIYW5kbGVycyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgYSwgciA9IG4oOTg0NSksIG8gPSAoYSA9IG4oOTM4MCkpICYmIGEuX19lc01vZHVsZSA/IGEgOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGFcbiAgICAgICAgICAgICAgICB9LCBsID0gbig3NzYwKSwgcyA9IG4oMjgzOSksIGMgPSBuKDg3MTEpLCB1ID0gbig3MjE1KSwgZiA9IG4oNDcxMyk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqLyBwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUsIHQgPSB7fSwgbiA9IE9iamVjdC5wcm90b3R5cGUsIGEgPSBuLmhhc093blByb3BlcnR5LCByID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbdF0gPSBuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LCBvID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSwgbCA9IG8uaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsIHMgPSBvLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIiwgYyA9IG8udG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBlW3RdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1KHt9LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZVt0XSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCwgbiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0ICYmIHQucHJvdG90eXBlIGluc3RhbmNlb2YgayA/IHQgOiBrLCBvID0gT2JqZWN0LmNyZWF0ZShhLnByb3RvdHlwZSksIGwgPSBuZXcgRChpIHx8IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8sIFwiX2ludm9rZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEUoZSwgbiwgbClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IGUuY2FsbCh0LCBuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQud3JhcCA9IGY7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gXCJzdXNwZW5kZWRTdGFydFwiLCB2ID0gXCJzdXNwZW5kZWRZaWVsZFwiLCBtID0gXCJleGVjdXRpbmdcIiwgZyA9IFwiY29tcGxldGVkXCIsIHkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaygpIHt9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoKSB7fVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB4KCkge31cbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdSh3LCBsLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgUCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwgUyA9IFAgJiYgUChQKEwoW10pKSk7XG4gICAgICAgICAgICAgICAgICAgIFMgJiYgUyAhPT0gbiAmJiBhLmNhbGwoUywgbCkgJiYgKHcgPSBTKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB4LnByb3RvdHlwZSA9IGsucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh3KTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gXyhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbIFwibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCIgXS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdShlLCB0LCAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKHQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBNKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4ociwgbywgbCwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZChlW3JdLCBlLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBjLmFyZywgZiA9IHUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmICYmIFwib2JqZWN0XCIgPT0gaShmKSAmJiBhLmNhbGwoZiwgXCJfX2F3YWl0XCIpID8gdC5yZXNvbHZlKGYuX19hd2FpdCkudGhlbigoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbihcIm5leHRcIiwgZSwgbCwgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbihcInRocm93XCIsIGUsIGwsIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiB0LnJlc29sdmUoZikudGhlbigoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS52YWx1ZSA9IGUsIGwodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4oXCJ0aHJvd1wiLCBlLCBsLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzKGMuYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcih0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGEoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHQoKGZ1bmN0aW9uKHQsIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKGUsIGksIHQsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvID0gbyA/IG8udGhlbihhLCBhKSA6IGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBFKHQsIG4sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG0pIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcikgdGhyb3cgbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpLm1ldGhvZCA9IHIsIGkuYXJnID0gbzsgOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGkuZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGoobCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGkubWV0aG9kKSBpLnNlbnQgPSBpLl9zZW50ID0gaS5hcmc7IGVsc2UgaWYgKFwidGhyb3dcIiA9PT0gaS5tZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBoKSB0aHJvdyBhID0gZywgaS5hcmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmRpc3BhdGNoRXhjZXB0aW9uKGkuYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGkubWV0aG9kICYmIGkuYWJydXB0KFwicmV0dXJuXCIsIGkuYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IG07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZCh0LCBuLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IGMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPSBpLmRvbmUgPyBnIDogdiwgYy5hcmcgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYy5hcmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogaS5kb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhyb3dcIiA9PT0gYy50eXBlICYmIChhID0gZywgaS5tZXRob2QgPSBcInRocm93XCIsIGkuYXJnID0gYy5hcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG4ubWV0aG9kLCBhID0gdC5pdGVyYXRvcltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBlKSByZXR1cm4gbi5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gaSAmJiB0Lml0ZXJhdG9yLnJldHVybiAmJiAobi5tZXRob2QgPSBcInJldHVyblwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXJnID0gZSwgaih0LCBuKSwgXCJ0aHJvd1wiID09PSBuLm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gaSAmJiAobi5tZXRob2QgPSBcInRocm93XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBpICsgXCInIG1ldGhvZFwiKSksIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGQoYSwgdC5pdGVyYXRvciwgbi5hcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gci50eXBlKSByZXR1cm4gbi5tZXRob2QgPSBcInRocm93XCIsIG4uYXJnID0gci5hcmcsIG4uZGVsZWdhdGUgPSBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIuYXJnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8gPyBvLmRvbmUgPyAoblt0LnJlc3VsdE5hbWVdID0gby52YWx1ZSwgbi5uZXh0ID0gdC5uZXh0TG9jLCBcInJldHVyblwiICE9PSBuLm1ldGhvZCAmJiAobi5tZXRob2QgPSBcIm5leHRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmFyZyA9IGUpLCBuLmRlbGVnYXRlID0gbnVsbCwgeSkgOiBvIDogKG4ubWV0aG9kID0gXCJ0aHJvd1wiLCBuLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmRlbGVnYXRlID0gbnVsbCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlMb2M6IGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAxIGluIGUgJiYgKHQuY2F0Y2hMb2MgPSBlWzFdKSwgMiBpbiBlICYmICh0LmZpbmFsbHlMb2MgPSBlWzJdLCB0LmFmdGVyTG9jID0gZVszXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cnlFbnRyaWVzLnB1c2godCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gQShlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUuY29tcGxldGlvbiB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSB0LmFyZywgZS5jb21wbGV0aW9uID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBEKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5RW50cmllcyA9IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXSwgZS5mb3JFYWNoKFQsIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBMKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IHx8IFwiXCIgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRbbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHJldHVybiBuLmNhbGwodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5uZXh0KSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHQubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IC0xLCBvID0gZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOysrciA8IHQubGVuZ3RoOyApIGlmIChhLmNhbGwodCwgcikpIHJldHVybiBuLnZhbHVlID0gdFtyXSwgbi5kb25lID0gITEsIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi52YWx1ZSA9IGUsIG4uZG9uZSA9ICEwLCBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5uZXh0ID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGkodCkgKyBcIiBpcyBub3QgaXRlcmFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIucHJvdG90eXBlID0geCwgcihPLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICB9KSwgcih4LCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICB9KSwgYi5kaXNwbGF5TmFtZSA9IHUoeCwgYywgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgdC5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgJiYgZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXQgJiYgKHQgPT09IGIgfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAodC5kaXNwbGF5TmFtZSB8fCB0Lm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdC5tYXJrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihlLCB4KSA6IChlLl9fcHJvdG9fXyA9IHgsIHUoZSwgYywgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE8pLCBlO1xuICAgICAgICAgICAgICAgICAgICB9LCB0LmF3cmFwID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2F3YWl0OiBlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LCBfKE0ucHJvdG90eXBlKSwgdShNLnByb3RvdHlwZSwgcywgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgdC5Bc3luY0l0ZXJhdG9yID0gTSwgdC5hc3luYyA9IGZ1bmN0aW9uKGUsIG4sIGksIGEsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gciAmJiAociA9IFByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBuZXcgTShmKGUsIG4sIGksIGEpLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmlzR2VuZXJhdG9yRnVuY3Rpb24obikgPyBvIDogby5uZXh0KCkudGhlbigoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmRvbmUgPyBlLnZhbHVlIDogby5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8oTyksIHUoTywgYywgXCJHZW5lcmF0b3JcIiksIHUoTywgbCwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgdShPLCBcInRvU3RyaW5nXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICAgICAgICAgICAgICAgICAgICB9KSksIHQua2V5cyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gT2JqZWN0KGUpLCBuID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHQpIG4ucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLnJldmVyc2UoKSwgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtuLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbi5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgaW4gdCkgcmV0dXJuIGUudmFsdWUgPSBpLCBlLmRvbmUgPSAhMSwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZG9uZSA9ICEwLCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdC52YWx1ZXMgPSBMLCBELnByb3RvdHlwZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiBELFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IGUsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSBlLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChBKSwgIXQpIGZvciAodmFyIG4gaW4gdGhpcykgXCJ0XCIgPT09IG4uY2hhckF0KDApICYmIGEuY2FsbCh0aGlzLCBuKSAmJiAhaXNOYU4oK24uc2xpY2UoMSkpICYmICh0aGlzW25dID0gZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBlLnR5cGUpIHRocm93IGUuYXJnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwudHlwZSA9IFwidGhyb3dcIiwgbC5hcmcgPSB0LCBuLm5leHQgPSBpLCBhICYmIChuLm1ldGhvZCA9IFwibmV4dFwiLCBuLmFyZyA9IGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IHIgPj0gMDsgLS1yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy50cnlFbnRyaWVzW3JdLCBsID0gby5jb21wbGV0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJyb290XCIgPT09IG8udHJ5TG9jKSByZXR1cm4gaShcImVuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8udHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLmNhbGwobywgXCJjYXRjaExvY1wiKSwgYyA9IGEuY2FsbChvLCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocyAmJiBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IG8uY2F0Y2hMb2MpIHJldHVybiBpKG8uY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgby5maW5hbGx5TG9jKSByZXR1cm4gaShvLmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IG8uY2F0Y2hMb2MpIHJldHVybiBpKG8uY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgby5maW5hbGx5TG9jKSByZXR1cm4gaShvLmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFicnVwdDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbiA+PSAwOyAtLW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgYS5jYWxsKGksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgJiYgKFwiYnJlYWtcIiA9PT0gZSB8fCBcImNvbnRpbnVlXCIgPT09IGUpICYmIHIudHJ5TG9jIDw9IHQgJiYgdCA8PSByLmZpbmFsbHlMb2MgJiYgKHIgPSBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIgPyByLmNvbXBsZXRpb24gOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby50eXBlID0gZSwgby5hcmcgPSB0LCByID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IHIuZmluYWxseUxvYywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSkgOiB0aGlzLmNvbXBsZXRlKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gZS50eXBlKSB0aHJvdyBlLmFyZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiID09PSBlLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSBlLnR5cGUgPyB0aGlzLm5leHQgPSBlLmFyZyA6IFwicmV0dXJuXCIgPT09IGUudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IGUuYXJnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gZS50eXBlICYmIHQgJiYgKHRoaXMubmV4dCA9IHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgdCA+PSAwOyAtLXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnRyeUVudHJpZXNbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmZpbmFsbHlMb2MgPT09IGUpIHJldHVybiB0aGlzLmNvbXBsZXRlKG4uY29tcGxldGlvbiwgbi5hZnRlckxvYyksIEEobiksIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyB0ID49IDA7IC0tdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMudHJ5RW50cmllc1t0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4udHJ5TG9jID09PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG4uY29tcGxldGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInRocm93XCIgPT09IGkudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5hcmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbih0LCBuLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yOiBMKHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHROYW1lOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TG9jOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IGUpLCB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpIHx8IChuID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gaChlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gbiAmJiBlLmNvbnN0cnVjdG9yICYmIChuID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gbiB8fCBcIlNldFwiID09PSBuKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gbiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGgoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGUpKSB8fCB0ICYmIGUgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuICYmIChlID0gbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBhID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpID49IGUubGVuZ3RoID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlW2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGY6IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByLCBvID0gITAsIGwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBuLmNhbGwoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyA9IGUuZG9uZSwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9ICEwLCByID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvIHx8IG51bGwgPT0gbi5yZXR1cm4gfHwgbi5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCkgdGhyb3cgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGgoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwLCBpID0gbmV3IEFycmF5KHQpOyBuIDwgdDsgbisrKSBpW25dID0gZVtuXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHYoZSwgdCwgbiwgaSwgYSwgciwgbykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBlW3JdKG8pLCBzID0gbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgbihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsLmRvbmUgPyB0KHMpIDogUHJvbWlzZS5yZXNvbHZlKHMpLnRoZW4oaSwgYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtLCBnLCB5ID0gdC5FdmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXlFdmVudDogZnVuY3Rpb24oZSwgdCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmlucHV0bWFzaywgcCA9IG8ub3B0cywgZCA9IG8uZGVwZW5kZW5jeUxpYiwgaCA9IG8ubWFza3NldCwgdiA9IHRoaXMsIG0gPSBkKHYpLCBnID0gZS5rZXksIGsgPSBjLmNhcmV0LmNhbGwobywgdiksIGIgPSBwLm9uS2V5RG93bi5jYWxsKHRoaXMsIGUsIGMuZ2V0QnVmZmVyLmNhbGwobyksIGssIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gYikgcmV0dXJuIGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZyA9PT0gcy5rZXlzLkJhY2tzcGFjZSB8fCBnID09PSBzLmtleXMuRGVsZXRlIHx8IHIuaXBob25lICYmIGcgPT09IHMua2V5cy5CQUNLU1BBQ0VfU0FGQVJJIHx8IGUuY3RybEtleSAmJiBnID09PSBzLmtleXMueCAmJiAhKFwib25jdXRcIiBpbiB2KSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuaGFuZGxlUmVtb3ZlLmNhbGwobywgdiwgZywgayksICgwLCBsLndyaXRlQnVmZmVyKSh2LCBjLmdldEJ1ZmZlci5jYWxsKG8sICEwKSwgaC5wLCBlLCB2LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gYy5nZXRCdWZmZXIuY2FsbChvKS5qb2luKFwiXCIpKTsgZWxzZSBpZiAoZyA9PT0gcy5rZXlzLkVuZCB8fCBnID09PSBzLmtleXMuUGFnZURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBjLnNlZWtOZXh0LmNhbGwobywgYy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKG8pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmNhcmV0LmNhbGwobywgdiwgZS5zaGlmdEtleSA/IGsuYmVnaW4gOiB4LCB4LCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZyA9PT0gcy5rZXlzLkhvbWUgJiYgIWUuc2hpZnRLZXkgfHwgZyA9PT0gcy5rZXlzLlBhZ2VVcCA/IChlLnByZXZlbnREZWZhdWx0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgYy5jYXJldC5jYWxsKG8sIHYsIDAsIGUuc2hpZnRLZXkgPyBrLmJlZ2luIDogMCwgITApKSA6IHAudW5kb09uRXNjYXBlICYmIGcgPT09IHMua2V5cy5Fc2NhcGUgJiYgITAgIT09IGUuYWx0S2V5ID8gKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuY2hlY2tWYWwpKHYsICEwLCAhMSwgby51bmRvVmFsdWUuc3BsaXQoXCJcIikpLCBtLnRyaWdnZXIoXCJjbGlja1wiKSkgOiBnICE9PSBzLmtleXMuSW5zZXJ0IHx8IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IHZvaWQgMCAhPT0gby51c2VyT3B0aW9ucy5pbnNlcnRNb2RlID8gITAgPT09IHAudGFiVGhyb3VnaCAmJiBnID09PSBzLmtleXMuVGFiID8gITAgPT09IGUuc2hpZnRLZXkgPyAoay5lbmQgPSBjLnNlZWtQcmV2aW91cy5jYWxsKG8sIGsuZW5kLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IGYuZ2V0VGVzdC5jYWxsKG8sIGsuZW5kIC0gMSkubWF0Y2guc3RhdGljICYmIGsuZW5kLS0sIGsuYmVnaW4gPSBjLnNlZWtQcmV2aW91cy5jYWxsKG8sIGsuZW5kLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgay5iZWdpbiA+PSAwICYmIGsuZW5kID4gMCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBjLmNhcmV0LmNhbGwobywgdiwgay5iZWdpbiwgay5lbmQpKSkgOiAoay5iZWdpbiA9IGMuc2Vla05leHQuY2FsbChvLCBrLmJlZ2luLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgay5lbmQgPSBjLnNlZWtOZXh0LmNhbGwobywgay5iZWdpbiwgITApLCBrLmVuZCA8IGgubWFza0xlbmd0aCAmJiBrLmVuZC0tLCBrLmJlZ2luIDw9IGgubWFza0xlbmd0aCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuY2FyZXQuY2FsbChvLCB2LCBrLmJlZ2luLCBrLmVuZCkpKSA6IGUuc2hpZnRLZXkgfHwgKHAuaW5zZXJ0TW9kZVZpc3VhbCAmJiAhMSA9PT0gcC5pbnNlcnRNb2RlID8gZyA9PT0gcy5rZXlzLkFycm93UmlnaHQgPyBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGMuY2FyZXQuY2FsbChvLCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmNhcmV0LmNhbGwobywgdiwgZS5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkgOiBnID09PSBzLmtleXMuQXJyb3dMZWZ0ICYmIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gYy50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKG8sIHYuaW5wdXRtYXNrLmNhcmV0UG9zLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwobywgdi5pbnB1dG1hc2suY2FyZXRQb3MuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmlzUlRMID8gYy5jYXJldC5jYWxsKG8sIHYsIGUgKyAoZSA9PT0gaC5tYXNrTGVuZ3RoID8gMCA6IDEpKSA6IGMuY2FyZXQuY2FsbChvLCB2LCBlIC0gKDAgPT09IGUgPyAwIDogMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApIDogdm9pZCAwID09PSBvLmtleUV2ZW50SG9vayB8fCBvLmtleUV2ZW50SG9vayhlKSkgOiB1LmlzU2VsZWN0aW9uLmNhbGwobywgaykgPyBwLmluc2VydE1vZGUgPSAhcC5pbnNlcnRNb2RlIDogKHAuaW5zZXJ0TW9kZSA9ICFwLmluc2VydE1vZGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgYy5jYXJldC5jYWxsKG8sIHYsIGsuYmVnaW4sIGsuYmVnaW4pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLmlzQ29tcG9zaW5nID0gZyA9PSBzLmtleXMuUHJvY2VzcyB8fCBnID09IHMua2V5cy5VbmlkZW50aWZpZWQsIG8uaWdub3JhYmxlID0gZy5sZW5ndGggPiAxICYmICEoXCJ0ZXh0YXJlYVwiID09PSB2LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiBnID09IHMua2V5cy5FbnRlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgeS5rZXlwcmVzc0V2ZW50LmNhbGwodGhpcywgZSwgdCwgbiwgaSwgYSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGtleXByZXNzRXZlbnQ6IGZ1bmN0aW9uKGUsIHQsIG4sIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5pbnB1dG1hc2sgfHwgdGhpcywgbyA9IHIub3B0cywgZiA9IHIuZGVwZW5kZW5jeUxpYiwgcCA9IHIubWFza3NldCwgZCA9IHIuZWwsIGggPSBmKGQpLCB2ID0gZS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHQgfHwgZS5jdHJsS2V5ICYmIGUuYWx0S2V5ICYmICFyLmlnbm9yYWJsZSB8fCAhKGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgci5pZ25vcmFibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0sIGcgPSB0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IGMuY2FyZXQuY2FsbChyLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCB8fCAodiA9IG8uc3Vic3RpdHV0ZXNbdl0gfHwgdiksIHAud3JpdGVPdXRCdWZmZXIgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSB1LmlzVmFsaWQuY2FsbChyLCBnLCB2LCBpLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSB5ICYmIChjLnJlc2V0TWFza1NldC5jYWxsKHIsICEwKSwgbSA9IHZvaWQgMCAhPT0geS5jYXJldCA/IHkuY2FyZXQgOiBjLnNlZWtOZXh0LmNhbGwociwgeS5wb3MuYmVnaW4gPyB5LnBvcy5iZWdpbiA6IHkucG9zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAucCA9IG0pLCBtID0gby5udW1lcmljSW5wdXQgJiYgdm9pZCAwID09PSB5LmNhcmV0ID8gYy5zZWVrUHJldmlvdXMuY2FsbChyLCBtKSA6IG0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMSAhPT0gbiAmJiAoc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLm9uS2V5VmFsaWRhdGlvbi5jYWxsKGQsIHYsIHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCksIHAud3JpdGVPdXRCdWZmZXIgJiYgITEgIT09IHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGMuZ2V0QnVmZmVyLmNhbGwocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgbC53cml0ZUJ1ZmZlcikoZCwgaywgbSwgZSwgITAgIT09IHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KCksIHQpIHJldHVybiAhMSAhPT0geSAmJiAoeS5mb3J3YXJkUG9zaXRpb24gPSBtKSwgeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdiA9PT0gcy5rZXlzLkVudGVyICYmIHIudW5kb1ZhbHVlICE9PSByLl92YWx1ZUdldCghMCkgJiYgKHIudW5kb1ZhbHVlID0gci5fdmFsdWVHZXQoITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlRXZlbnQ6IChtID0gcCgpLm1hcmsoKGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGksIGEsIHIsIHMsIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCgpLndyYXAoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDs7KSBzd2l0Y2ggKGUucHJldiA9IGUubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gZnVuY3Rpb24oZSwgbiwgaSwgYSwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBjLmNhcmV0LmNhbGwoZSwgbiwgdm9pZCAwLCB2b2lkIDAsICEwKSwgdSA9IGkuc3Vic3RyKDAsIHMuYmVnaW4pLCBmID0gaS5zdWJzdHIocy5lbmQsIGkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1ID09IChlLmlzUlRMID8gYy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGUpLnNsaWNlKCkucmV2ZXJzZSgpIDogYy5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGUpKS5zbGljZSgwLCBzLmJlZ2luKS5qb2luKFwiXCIpICYmICh1ID0gXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZiA9PSAoZS5pc1JUTCA/IGMuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKS5zbGljZSgpLnJldmVyc2UoKSA6IGMuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKSkuc2xpY2Uocy5lbmQpLmpvaW4oXCJcIikgJiYgKGYgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdSArIGEgKyBmLCBlLmlzUlRMICYmICEwICE9PSByLm51bWVyaWNJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwLCBoID0gZChjLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaC5zKCk7ICEocCA9IGgubigpKS5kb25lOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMF0gPT09IHYgJiYgYS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5mKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gKG0gPSBvLmNhbGwoZSwgbSwgcikpKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSB8fCAobSA9IGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGwuY2hlY2tWYWwpKG4sICEwLCAhMSwgbS50b1N0cmluZygpLnNwbGl0KFwiXCIpLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaSA9IHRoaXMsIGEgPSB0aGlzLmlucHV0bWFzaywgciA9IGEub3B0cywgcyA9IGEuX3ZhbHVlR2V0KCEwKSwgYS5za2lwSW5wdXRFdmVudCA9ICEwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jbGlwYm9hcmREYXRhICYmIHQuY2xpcGJvYXJkRGF0YS5nZXREYXRhID8gdSA9IHQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKSA6IG8uZGVmYXVsdC5jbGlwYm9hcmREYXRhICYmIG8uZGVmYXVsdC5jbGlwYm9hcmREYXRhLmdldERhdGEgJiYgKHUgPSBvLmRlZmF1bHQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKGEsIGksIHMsIHUsIHIub25CZWZvcmVQYXN0ZSksIHQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGUsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9KSksIGcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgdCA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbS5hcHBseShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdihhLCBuLCBpLCByLCBvLCBcIm5leHRcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2KGEsIG4sIGksIHIsIG8sIFwidGhyb3dcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmFsbEJhY2tFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgbiA9IHQub3B0cywgaSA9IHQuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhLCBvID0gdGhpcywgdSA9IG8uaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIHAgPSAodC5pc1JUTCA/IGMuZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UoKS5yZXZlcnNlKCkgOiBjLmdldEJ1ZmZlci5jYWxsKHQpKS5qb2luKFwiXCIpLCBkID0gYy5jYXJldC5jYWxsKHQsIG8sIHZvaWQgMCwgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocCAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID0gZnVuY3Rpb24oZSwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByLCBvLCBsLCBzID0gZS5zdWJzdHIoMCwgYS5iZWdpbikuc3BsaXQoXCJcIiksIHUgPSBlLnN1YnN0cihhLmJlZ2luKS5zcGxpdChcIlwiKSwgcCA9IGkuc3Vic3RyKDAsIGEuYmVnaW4pLnNwbGl0KFwiXCIpLCBkID0gaS5zdWJzdHIoYS5iZWdpbikuc3BsaXQoXCJcIiksIGggPSBzLmxlbmd0aCA+PSBwLmxlbmd0aCA/IHMubGVuZ3RoIDogcC5sZW5ndGgsIHYgPSB1Lmxlbmd0aCA+PSBkLmxlbmd0aCA/IHUubGVuZ3RoIDogZC5sZW5ndGgsIG0gPSBcIlwiLCBnID0gW10sIHkgPSBcIn5cIjsgcy5sZW5ndGggPCBoOyApIHMucHVzaCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7cC5sZW5ndGggPCBoOyApIHAucHVzaCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7dS5sZW5ndGggPCB2OyApIHUudW5zaGlmdCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZC5sZW5ndGggPCB2OyApIGQudW5zaGlmdCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBzLmNvbmNhdCh1KSwgYiA9IHAuY29uY2F0KGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSAwLCByID0gay5sZW5ndGg7IG8gPCByOyBvKyspIHN3aXRjaCAobCA9IGYuZ2V0UGxhY2Vob2xkZXIuY2FsbCh0LCBjLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwodCwgbykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW28gLSAxXSA9PT0ga1tvXSAmJiBhLmJlZ2luID09IGsubGVuZ3RoIC0gMSAmJiBnLnB1c2goa1tvXSksIG8gPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga1tvXSA9PT0geSA/IGEuZW5kKysgOiBvID0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtbb10gIT09IGJbb10gJiYgKGtbbyArIDFdICE9PSB5ICYmIGtbbyArIDFdICE9PSBsICYmIHZvaWQgMCAhPT0ga1tvICsgMV0gfHwgKGJbb10gIT09IGwgfHwgYltvICsgMV0gIT09IHkpICYmIGJbb10gIT09IHkgPyBiW28gKyAxXSA9PT0geSAmJiBiW29dID09PSBrW28gKyAxXSA/IChtID0gXCJpbnNlcnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKGtbb10pLCBhLmJlZ2luLS0sIGEuZW5kLS0pIDoga1tvXSAhPT0gbCAmJiBrW29dICE9PSB5ICYmIChrW28gKyAxXSA9PT0geSB8fCBiW29dICE9PSBrW29dICYmIGJbbyArIDFdID09PSBrW28gKyAxXSkgPyAobSA9IFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKGtbb10pLCBhLmJlZ2luLS0pIDoga1tvXSA9PT0geSA/IChtID0gXCJkZWxldGVDb250ZW50QmFja3dhcmRcIiwgKGMuaXNNYXNrLmNhbGwodCwgYy50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKHQsIG8pLCAhMCkgfHwgYltvXSA9PT0gbi5yYWRpeFBvaW50KSAmJiBhLmVuZCsrKSA6IG8gPSByIDogKG0gPSBcImluc2VydFRleHRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2goa1tvXSksIGEuYmVnaW4tLSwgYS5lbmQtLSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IG0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHUsIHAsIGQpLCAoby5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBvLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgIT09IG8gJiYgby5mb2N1cygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgbC53cml0ZUJ1ZmZlcikobywgYy5nZXRCdWZmZXIuY2FsbCh0KSksIGMuY2FyZXQuY2FsbCh0LCBvLCBkLmJlZ2luLCBkLmVuZCwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhci5tb2JpbGUgJiYgdC5za2lwTmV4dEluc2VydCAmJiBcImluc2VydFRleHRcIiA9PT0gZS5pbnB1dFR5cGUgJiYgXCJpbnNlcnRUZXh0XCIgPT09IGEuYWN0aW9uICYmIHQuaXNDb21wb3NpbmcpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKFwiaW5zZXJ0Q29tcG9zaXRpb25UZXh0XCIgPT09IGUuaW5wdXRUeXBlICYmIFwiaW5zZXJ0VGV4dFwiID09PSBhLmFjdGlvbiAmJiB0LmlzQ29tcG9zaW5nID8gdC5za2lwTmV4dEluc2VydCA9ICEwIDogdC5za2lwTmV4dEluc2VydCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc2VydFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kYXRhLmZvckVhY2goKGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IGkuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEua2V5ID0gZSwgdC5pZ25vcmFibGUgPSAhMSwgeS5rZXlwcmVzc0V2ZW50LmNhbGwobywgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LiRlbC50cmlnZ2VyKFwia2V5dXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVDb250ZW50QmFja3dhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBuZXcgaS5FdmVudChcImtleWRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgua2V5ID0gcy5rZXlzLkJhY2tzcGFjZSwgeS5rZXlFdmVudC5jYWxsKG8sIGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGwuYXBwbHlJbnB1dFZhbHVlKShvLCB1KSwgYy5jYXJldC5jYWxsKHQsIG8sIGQuYmVnaW4sIGQuZW5kLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgbiA9IHQuZGVwZW5kZW5jeUxpYiwgaSA9IHRoaXMsIGEgPSBlICYmIGUuZGV0YWlsID8gZS5kZXRhaWxbMF0gOiBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGEgJiYgKGEgPSBpLmlucHV0bWFzay5fdmFsdWVHZXQoITApKSwgKDAsIGwuYXBwbHlJbnB1dFZhbHVlKShpLCBhLCBuZXcgbi5FdmVudChcImlucHV0XCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5kZXRhaWwgJiYgdm9pZCAwICE9PSBlLmRldGFpbFsxXSB8fCB2b2lkIDAgIT09IGFyZ3VtZW50c1syXSkgJiYgYy5jYXJldC5jYWxsKHQsIGksIGUuZGV0YWlsID8gZS5kZXRhaWxbMV0gOiBhcmd1bWVudHNbMl0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5wdXRtYXNrLCBuID0gdC5vcHRzLCBpID0gdCAmJiB0Ll92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zaG93TWFza09uRm9jdXMgJiYgaSAhPT0gYy5nZXRCdWZmZXIuY2FsbCh0KS5qb2luKFwiXCIpICYmICgwLCBsLndyaXRlQnVmZmVyKSh0aGlzLCBjLmdldEJ1ZmZlci5jYWxsKHQpLCBjLnNlZWtOZXh0LmNhbGwodCwgYy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHQpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IG4ucG9zaXRpb25DYXJldE9uVGFiIHx8ICExICE9PSB0Lm1vdXNlRW50ZXIgfHwgdS5pc0NvbXBsZXRlLmNhbGwodCwgYy5nZXRCdWZmZXIuY2FsbCh0KSkgJiYgLTEgIT09IGMuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0KSB8fCB5LmNsaWNrRXZlbnQuYXBwbHkodGhpcywgWyBlLCAhMCBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnVuZG9WYWx1ZSA9IHQgJiYgdC5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRtYXNrLnZhbGlkYXRpb25FdmVudCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaywgdCA9IGUub3B0cywgbiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1vdXNlRW50ZXIgPSAhMSwgdC5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiAobi5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBuLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgIT09IG4gJiYgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbC5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikobiwgZS5vcmlnaW5hbFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmlucHV0bWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uY2xpY2tlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGkub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCA9PT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gYy5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwobiwgYy5jYXJldC5jYWxsKG4sIGkpLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGEgJiYgYy5jYXJldC5jYWxsKG4sIGksIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXRFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgbiA9IHQubWFza3NldCwgaSA9IHRoaXMsIGEgPSBjLmNhcmV0LmNhbGwodCwgaSksIHIgPSB0LmlzUlRMID8gYy5nZXRCdWZmZXIuY2FsbCh0KS5zbGljZShhLmVuZCwgYS5iZWdpbikgOiBjLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKGEuYmVnaW4sIGEuZW5kKSwgZiA9IHQuaXNSVEwgPyByLnJldmVyc2UoKS5qb2luKFwiXCIpIDogci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgby5kZWZhdWx0Lm5hdmlnYXRvciAmJiBvLmRlZmF1bHQubmF2aWdhdG9yLmNsaXBib2FyZCA/IG8uZGVmYXVsdC5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChmKSA6IG8uZGVmYXVsdC5jbGlwYm9hcmREYXRhICYmIG8uZGVmYXVsdC5jbGlwYm9hcmREYXRhLmdldERhdGEgJiYgby5kZWZhdWx0LmNsaXBib2FyZERhdGEuc2V0RGF0YShcIlRleHRcIiwgZiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdS5oYW5kbGVSZW1vdmUuY2FsbCh0LCBpLCBzLmtleXMuRGVsZXRlLCBhKSwgKDAsIGwud3JpdGVCdWZmZXIpKGksIGMuZ2V0QnVmZmVyLmNhbGwodCksIG4ucCwgZSwgdC51bmRvVmFsdWUgIT09IHQuX3ZhbHVlR2V0KCEwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJsdXJFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgbiA9IHQub3B0cywgaSA9IHQuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY2xpY2tlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGkodGhpcyksIHIgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGwuSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIpKHIsIHQub3JpZ2luYWxQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLmlucHV0bWFzay5fdmFsdWVHZXQoKSwgcyA9IGMuZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBvICYmIChuLmNsZWFyTWFza09uTG9zdEZvY3VzICYmICgtMSA9PT0gYy5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHQpICYmIG8gPT09IGMuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0KS5qb2luKFwiXCIpID8gcyA9IFtdIDogbC5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKHQsIHMpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IHUuaXNDb21wbGV0ZS5jYWxsKHQsIHMpICYmIChzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCksIG4uY2xlYXJJbmNvbXBsZXRlICYmIChjLnJlc2V0TWFza1NldC5jYWxsKHQsICExKSwgcyA9IG4uY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyBbXSA6IGMuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0KS5zbGljZSgpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBsLndyaXRlQnVmZmVyKShyLCBzLCB2b2lkIDAsIGUpKSwgbyA9IHQuX3ZhbHVlR2V0KCEwKSwgdC51bmRvVmFsdWUgIT09IG8gJiYgKFwiXCIgIT0gbyB8fCB0LnVuZG9WYWx1ZSAhPSBjLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodCkuam9pbihcIlwiKSB8fCB0LnVuZG9WYWx1ZSA9PSBjLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodCkuam9pbihcIlwiKSAmJiB0Lm1hc2tzZXQudmFsaWRQb3NpdGlvbnMubGVuZ3RoID4gMCkgJiYgKHQudW5kb1ZhbHVlID0gbywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5pbnB1dG1hc2ssIHQgPSBlLm9wdHMuc2hvd01hc2tPbkhvdmVyLCBuID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1vdXNlRW50ZXIgPSAhMCwgKG4uaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgbi5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAoZS5pc1JUTCA/IGMuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKS5zbGljZSgpLnJldmVyc2UoKSA6IGMuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICYmICgwLCBsLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKShuLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaywgdCA9IGUub3B0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudW5kb1ZhbHVlICE9PSBlLl92YWx1ZUdldCghMCkgJiYgZS4kZWwudHJpZ2dlcihcImNoYW5nZVwiKSwgLTEgPT09IGMuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChlKSAmJiBlLl92YWx1ZUdldCAmJiBlLl92YWx1ZUdldCgpID09PSBjLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkuam9pbihcIlwiKSAmJiBlLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNsZWFySW5jb21wbGV0ZSAmJiAhMSA9PT0gdS5pc0NvbXBsZXRlLmNhbGwoZSwgYy5nZXRCdWZmZXIuY2FsbChlKSkgJiYgZS5fdmFsdWVTZXQoXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVNYXNrT25TdWJtaXQgJiYgKGUuX3ZhbHVlU2V0KGUudW5tYXNrZWR2YWx1ZSgpLCAhMCksIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBsLndyaXRlQnVmZmVyKShlLmVsLCBjLmdldEJ1ZmZlci5jYWxsKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucmVmcmVzaFZhbHVlID0gITAsIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBsLmFwcGx5SW5wdXRWYWx1ZSkoZS5lbCwgZS5fdmFsdWVHZXQoITApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTcxNjogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5FdmVudFJ1bGVyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBpLCBhID0gbig3NzYwKSwgciA9IChpID0gbigyMzk0KSkgJiYgaS5fX2VzTW9kdWxlID8gaSA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogaVxuICAgICAgICAgICAgICAgIH0sIG8gPSBuKDI4MzkpLCBsID0gbig4NzExKTtcbiAgICAgICAgICAgICAgICB0LkV2ZW50UnVsZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUuaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWIsIHMgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5vcmlnaW5hbEV2ZW50ICYmICh0ID0gdC5vcmlnaW5hbEV2ZW50IHx8IHQsIGFyZ3VtZW50c1swXSA9IHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzLCBjID0gdGhpcywgdSA9IGMuaW5wdXRtYXNrLCBmID0gdSA/IHUub3B0cyA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSB1ICYmIFwiRk9STVwiICE9PSB0aGlzLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gaS5kYXRhKGMsIFwiX2lucHV0bWFza19vcHRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKGMpLm9mZigpLCBwICYmIG5ldyByLmRlZmF1bHQocCkubWFzayhjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoWyBcInN1Ym1pdFwiLCBcInJlc2V0XCIsIFwic2V0dmFsdWVcIiBdLmluY2x1ZGVzKHQudHlwZSkgfHwgXCJGT1JNXCIgPT09IHRoaXMubm9kZU5hbWUgfHwgIShjLmRpc2FibGVkIHx8IGMucmVhZE9ubHkgJiYgIShcImtleWRvd25cIiA9PT0gdC50eXBlICYmIHQuY3RybEtleSAmJiB0LmtleSA9PT0gby5rZXlzLmMgfHwgITEgPT09IGYudGFiVGhyb3VnaCAmJiB0LmtleSA9PT0gby5rZXlzLlRhYikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5wdXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHUuc2tpcElucHV0RXZlbnQpIHJldHVybiB1LnNraXBJbnB1dEV2ZW50ID0gITEsIHQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHUudmFsaWRhdGlvbkV2ZW50ID8gKHUudmFsaWRhdGlvbkV2ZW50ID0gITEsIGUuYmx1cigpLCAoMCwgYS5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikoZSwgKHUuaXNSVEwgPyBsLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodSkuc2xpY2UoKS5yZXZlcnNlKCkgOiBsLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodSkpLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmLnZhbGlkYXRpb25FdmVudFRpbWVPdXQpLCAhMSkgOiAocyA9IGFyZ3VtZW50cywgdm9pZCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgJiYgbi5hcHBseShjLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuLmFwcGx5KGMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgPT09IGQgJiYgKHQucHJldmVudERlZmF1bHQoKSwgdC5zdG9wUHJvcGFnYXRpb24oKSksIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdLmluY2x1ZGVzKHQpID8gKHMgPSBzLmJpbmQoZSksIG51bGwgIT09IGUuZm9ybSAmJiBpKGUuZm9ybSkub24odCwgcykpIDogaShlKS5vbih0LCBzKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay5ldmVudHNbdF0gPSBlLmlucHV0bWFzay5ldmVudHNbdF0gfHwgW10sIGUuaW5wdXRtYXNrLmV2ZW50c1t0XS5wdXNoKHMpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvZmY6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmlucHV0bWFzayAmJiBlLmlucHV0bWFzay5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWIsIGkgPSBlLmlucHV0bWFzay5ldmVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSBpbiB0ICYmICgoaSA9IFtdKVt0XSA9IGUuaW5wdXRtYXNrLmV2ZW50c1t0XSksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IGlbYV07IHIubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdLmluY2x1ZGVzKGEpID8gbnVsbCAhPT0gZS5mb3JtICYmIG4oZS5mb3JtKS5vZmYoYSwgbykgOiBuKGUpLm9mZihhLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZS5pbnB1dG1hc2suZXZlbnRzW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjE5OiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBwKG4oNzE4NCkpLCBhID0gcChuKDIzOTQpKSwgciA9IG4oMjgzOSksIG8gPSBuKDg3MTEpLCBsID0gbig0NzEzKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfShlKSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG51bGwgPT0gZSA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpLCBhLCByLCBvLCBsID0gW10sIHMgPSAhMCwgYyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gKG4gPSBuLmNhbGwoZSkpLm5leHQsIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QobikgIT09IG4pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZvciAoOyEocyA9IChpID0gci5jYWxsKG4pKS5kb25lKSAmJiAobC5wdXNoKGkudmFsdWUpLCBsLmxlbmd0aCAhPT0gdCk7IHMgPSAhMCkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwLCBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzICYmIG51bGwgIT0gbi5yZXR1cm4gJiYgKG8gPSBuLnJldHVybigpLCBPYmplY3QobykgIT09IG8pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykgdGhyb3cgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gYyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JqZWN0XCIgPT09IG4gJiYgZS5jb25zdHJ1Y3RvciAmJiAobiA9IGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gbiB8fCBcIlNldFwiID09PSBuKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkFyZ3VtZW50c1wiID09PSBuIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDAsIGkgPSBuZXcgQXJyYXkodCk7IG4gPCB0OyBuKyspIGlbbl0gPSBlW25dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIHUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIChhID0gaS5rZXksIHIgPSB2b2lkIDAsIHIgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHUoZSkgfHwgbnVsbCA9PT0gZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlW1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG4uY2FsbChlLCB0IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHUoaSkpIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gdCA/IFN0cmluZyA6IE51bWJlcikoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGEsIFwic3RyaW5nXCIpLCBcInN5bWJvbFwiID09PSB1KHIpID8gciA6IFN0cmluZyhyKSksIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBhLCByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbigxMzEzKTtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGEuZGVmYXVsdC5kZXBlbmRlbmN5TGliLCBoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHRoaXMsIGUpLCB0aGlzLm1hc2sgPSB0LCB0aGlzLmZvcm1hdCA9IG4sIHRoaXMub3B0cyA9IGksIHRoaXMuaW5wdXRtYXNrID0gYSwgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKDEsIDAsIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdERhdGVPYmplY3QodCwgdGhpcy5vcHRzLCB0aGlzLmlucHV0bWFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4sIGk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gZSwgKG4gPSBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHRoaXMuX2RhdGUgJiYgKHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgxLCAwLCAxKSwgdGhpcy5pbml0RGF0ZU9iamVjdCh2b2lkIDAsIHRoaXMub3B0cywgdGhpcy5pbnB1dG1hc2spKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXREYXRlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoUCh0KS5sYXN0SW5kZXggPSAwOyBpID0gUCh0KS5leGVjKHRoaXMuZm9ybWF0KTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gL1xcZCskLy5leGVjKGlbMF0pLCByID0gYSA/IGlbMF1bMF0gKyBcInhcIiA6IGlbMF0sIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBQKHQpLmxhc3RJbmRleCwgYyA9IGouY2FsbChuLCBpLmluZGV4LCB0LCBuICYmIG4ubWFza3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUCh0KS5sYXN0SW5kZXggPSBzLCBvID0gZS5zbGljZSgwLCBlLmluZGV4T2YoYy5uZXh0TWF0Y2hbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdSA9IGlbMF1bMF0sIGYgPSBpLmluZGV4OyBuICYmICh0LnBsYWNlaG9sZGVyW2wuZ2V0VGVzdC5jYWxsKG4sIGYpLm1hdGNoLnBsYWNlaG9sZGVyXSB8fCBsLmdldFRlc3QuY2FsbChuLCBmKS5tYXRjaC5wbGFjZWhvbGRlcikgPT09IHU7ICkgZisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gZiAtIGkuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGUuc2xpY2UoMCwgcCB8fCB5W3JdICYmIHlbcl1bNF0gfHwgci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUuc2xpY2Uoby5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh5LCByKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMsIG8sIHIsIHlbcl1bMl0sIHlbcl1bMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQpIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFtcG1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtpXSA9IHQsIGVbXCJyYXdcIiArIGldID0gdC5yZXBsYWNlKC9cXHMvZywgXCJfXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm1tbVwiID09PSBuIHx8IFwibW1tbVwiID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW2ldID0gXyhcIm1tbVwiID09PSBuID8gbS5tb250aE5hbWVzLnNsaWNlKDAsIDEyKS5maW5kSW5kZXgoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC50b0xvd2VyQ2FzZSgpID09PSBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgKyAxIDogbS5tb250aE5hbWVzLnNsaWNlKDEyLCAyNCkuZmluZEluZGV4KChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQudG9Mb3dlckNhc2UoKSA9PT0gZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpICsgMSwgMiksIGVbaV0gPSBcIjAwXCIgPT09IGVbaV0gPyBcIlwiIDogZVtpXS50b1N0cmluZygpLCBlW1wicmF3XCIgKyBpXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW2ldID0gdC5yZXBsYWNlKC9bXjAtOV0vZywgXCIwXCIpLCBlW1wicmF3XCIgKyBpXSA9IHQucmVwbGFjZSgvXFxzL2csIFwiX1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcImRheVwiID09PSBpICYmIDI5ID09PSBwYXJzZUludChyKSB8fCBcIm1vbnRoXCIgPT09IGkgJiYgMiA9PT0gcGFyc2VJbnQocikpICYmICgyOSAhPT0gcGFyc2VJbnQoZS5kYXkpIHx8IDIgIT09IHBhcnNlSW50KGUubW9udGgpIHx8IFwiXCIgIT09IGUueWVhciAmJiB2b2lkIDAgIT09IGUueWVhciB8fCBlLl9kYXRlLnNldEZ1bGxZZWFyKDIwMTIsIDEsIDI5KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRheVwiID09PSBpICYmIChnID0gITAsIDAgPT09IHBhcnNlSW50KHIpICYmIChyID0gMSkpLCBcIm1vbnRoXCIgPT09IGkgJiYgKGcgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIiA9PT0gaSAmJiAoZyA9ICEwLCByLmxlbmd0aCA8IHlbbl1bNF0gJiYgKHIgPSBfKHIsIHlbbl1bNF0sICEwKSkpLCAoXCJcIiAhPT0gciAmJiAhaXNOYU4ocikgfHwgXCJhbXBtXCIgPT09IGkpICYmIGEuY2FsbChlLl9kYXRlLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgxLCAwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInJlSW5pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGUgPSB2b2lkIDAsIHRoaXMuZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBdKSAmJiBmKHQucHJvdG90eXBlLCBuKSwgaSAmJiBmKHQsIGkpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICExXG4gICAgICAgICAgICAgICAgICAgIH0pLCBlO1xuICAgICAgICAgICAgICAgIH0oKSwgdiA9IChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSwgbSA9IGEuZGVmYXVsdC5wcm90b3R5cGUuaTE4biwgZyA9ICExLCB5ID0ge1xuICAgICAgICAgICAgICAgICAgICBkOiBbIFwiWzEtOV18WzEyXVswLTldfDNbMDFdXCIsIERhdGUucHJvdG90eXBlLnNldERhdGUsIFwiZGF5XCIsIERhdGUucHJvdG90eXBlLmdldERhdGUgXSxcbiAgICAgICAgICAgICAgICAgICAgZGQ6IFsgXCIwWzEtOV18WzEyXVswLTldfDNbMDFdXCIsIERhdGUucHJvdG90eXBlLnNldERhdGUsIFwiZGF5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8oRGF0ZS5wcm90b3R5cGUuZ2V0RGF0ZS5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBkZGQ6IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICBkZGRkOiBbIFwiXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgbTogWyBcIlsxLTldfDFbMDEyXVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUgPyBwYXJzZUludChlKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA+IDAgJiYgdC0tLCBEYXRlLnByb3RvdHlwZS5zZXRNb250aC5jYWxsKHRoaXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcIm1vbnRoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucHJvdG90eXBlLmdldE1vbnRoLmNhbGwodGhpcykgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIG1tOiBbIFwiMFsxLTldfDFbMDEyXVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUgPyBwYXJzZUludChlKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA+IDAgJiYgdC0tLCBEYXRlLnByb3RvdHlwZS5zZXRNb250aC5jYWxsKHRoaXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcIm1vbnRoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8oRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGguY2FsbCh0aGlzKSArIDEsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIG1tbTogWyBtLm1vbnRoTmFtZXMuc2xpY2UoMCwgMTIpLmpvaW4oXCJ8XCIpLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG0ubW9udGhOYW1lcy5zbGljZSgwLCAxMikuZmluZEluZGV4KChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudG9Mb3dlckNhc2UoKSA9PT0gdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSB0ICYmIERhdGUucHJvdG90eXBlLnNldE1vbnRoLmNhbGwodGhpcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFwibW9udGhcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5tb250aE5hbWVzLnNsaWNlKDAsIDEyKVtEYXRlLnByb3RvdHlwZS5nZXRNb250aC5jYWxsKHRoaXMpXTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBtbW1tOiBbIG0ubW9udGhOYW1lcy5zbGljZSgxMiwgMjQpLmpvaW4oXCJ8XCIpLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG0ubW9udGhOYW1lcy5zbGljZSgxMiwgMjQpLmZpbmRJbmRleCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCkgPT09IHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gdCAmJiBEYXRlLnByb3RvdHlwZS5zZXRNb250aC5jYWxsKHRoaXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcIm1vbnRoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ubW9udGhOYW1lcy5zbGljZSgxMiwgMjQpW0RhdGUucHJvdG90eXBlLmdldE1vbnRoLmNhbGwodGhpcyldO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIHl5OiBbIFwiWzAtOV17Mn1cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAobmV3IERhdGUpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUucHJvdG90eXBlLnNldEZ1bGxZZWFyLmNhbGwodGhpcywgXCJcIi5jb25jYXQodCkuY29uY2F0KGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJ5ZWFyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8oRGF0ZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgeXl5eTogWyBcIlswLTldezR9XCIsIERhdGUucHJvdG90eXBlLnNldEZ1bGxZZWFyLCBcInllYXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXyhEYXRlLnByb3RvdHlwZS5nZXRGdWxsWWVhci5jYWxsKHRoaXMpLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNCBdLFxuICAgICAgICAgICAgICAgICAgICBoOiBbIFwiWzEtOV18MVswLTJdXCIsIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIERhdGUucHJvdG90eXBlLmdldEhvdXJzIF0sXG4gICAgICAgICAgICAgICAgICAgIGhoOiBbIFwiMFsxLTldfDFbMC0yXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIGh4OiBbIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTlde1wiLmNvbmNhdChlLCBcIn1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS5nZXRIb3VycztcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBIOiBbIFwiMT9bMC05XXwyWzAtM11cIiwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMgXSxcbiAgICAgICAgICAgICAgICAgICAgSEg6IFsgXCIwWzAtOV18MVswLTldfDJbMC0zXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIEh4OiBbIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTlde1wiLmNvbmNhdChlLCBcIn1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXyhEYXRlLnByb3RvdHlwZS5nZXRIb3Vycy5jYWxsKHRoaXMpLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgTTogWyBcIlsxLTVdP1swLTldXCIsIERhdGUucHJvdG90eXBlLnNldE1pbnV0ZXMsIFwibWludXRlc1wiLCBEYXRlLnByb3RvdHlwZS5nZXRNaW51dGVzIF0sXG4gICAgICAgICAgICAgICAgICAgIE1NOiBbIFwiMFswLTldfDFbMC05XXwyWzAtOV18M1swLTldfDRbMC05XXw1WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcywgXCJtaW51dGVzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8oRGF0ZS5wcm90b3R5cGUuZ2V0TWludXRlcy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBzOiBbIFwiWzEtNV0/WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0U2Vjb25kcywgXCJzZWNvbmRzXCIsIERhdGUucHJvdG90eXBlLmdldFNlY29uZHMgXSxcbiAgICAgICAgICAgICAgICAgICAgc3M6IFsgXCIwWzAtOV18MVswLTldfDJbMC05XXwzWzAtOV18NFswLTldfDVbMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRTZWNvbmRzLCBcInNlY29uZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXyhEYXRlLnByb3RvdHlwZS5nZXRTZWNvbmRzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIGw6IFsgXCJbMC05XXszfVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNaWxsaXNlY29uZHMsIFwibWlsbGlzZWNvbmRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8oRGF0ZS5wcm90b3R5cGUuZ2V0TWlsbGlzZWNvbmRzLmNhbGwodGhpcyksIDMpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzIF0sXG4gICAgICAgICAgICAgICAgICAgIEw6IFsgXCJbMC05XXsyfVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNaWxsaXNlY29uZHMsIFwibWlsbGlzZWNvbmRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8oRGF0ZS5wcm90b3R5cGUuZ2V0TWlsbGlzZWNvbmRzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyIF0sXG4gICAgICAgICAgICAgICAgICAgIHQ6IFsgXCJbYXBdXCIsIGIsIFwiYW1wbVwiLCB4LCAxIF0sXG4gICAgICAgICAgICAgICAgICAgIHR0OiBbIFwiW2FwXW1cIiwgYiwgXCJhbXBtXCIsIHgsIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgVDogWyBcIltBUF1cIiwgYiwgXCJhbXBtXCIsIHgsIDEgXSxcbiAgICAgICAgICAgICAgICAgICAgVFQ6IFsgXCJbQVBdTVwiLCBiLCBcImFtcG1cIiwgeCwgMiBdLFxuICAgICAgICAgICAgICAgICAgICBaOiBbIFwiLipcIiwgdm9pZCAwLCBcIlpcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMudG9TdHJpbmcoKS5tYXRjaCgvXFwoKC4rKVxcKS8pWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbmNsdWRlcyhcIiBcIikgJiYgKGUgPSAoZSA9IGUucmVwbGFjZShcIi1cIiwgXCIgXCIpLnRvVXBwZXJDYXNlKCkpLnNwbGl0KFwiIFwiKS5tYXAoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyhlLCAxKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIG86IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICBTOiBbIFwiXCIgXVxuICAgICAgICAgICAgICAgIH0sIGsgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb0RhdGU6IFwieXl5eS1tbS1kZFwiLFxuICAgICAgICAgICAgICAgICAgICBpc29UaW1lOiBcIkhIOk1NOnNzXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzb0RhdGVUaW1lOiBcInl5eXktbW0tZGQnVCdISDpNTTpzc1wiLFxuICAgICAgICAgICAgICAgICAgICBpc29VdGNEYXRlVGltZTogXCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicFwiKSA/IHRoaXMuc2V0SG91cnModCArIDEyKSA6IGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFcIikgJiYgdCA+PSAxMiAmJiB0aGlzLnNldEhvdXJzKHQgLSAxMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHgoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUgPSBlIHx8IDEyKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gL1xcZCskLy5leGVjKGVbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiB2b2lkIDAgIT09IHRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0geVtlWzBdWzBdICsgXCJ4XCJdLnNsaWNlKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5bMF0gPSBuWzBdKHRbMF0pLCBuWzNdID0gblszXSh0WzBdKSwgbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeVtlWzBdXSkgcmV0dXJuIHlbZVswXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWUudG9rZW5pemVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IFtdLCBuID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHkpIGlmICgvXFwuKngkLy50ZXN0KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpWzBdICsgXCJcXFxcZCtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSA9PT0gbi5pbmRleE9mKGEpICYmIG4ucHVzaChhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSAtMSA9PT0gdC5pbmRleE9mKGlbMF0pICYmIHQucHVzaChpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudG9rZW5pemVyID0gXCIoXCIgKyAobi5sZW5ndGggPiAwID8gbi5qb2luKFwifFwiKSArIFwifFwiIDogXCJcIikgKyB0LmpvaW4oXCIrfFwiKSArIFwiKSs/fC5cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRva2VuaXplciA9IG5ldyBSZWdFeHAoZS50b2tlbml6ZXIsIFwiZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS50b2tlbml6ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFMoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWcpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZS5yYXdkYXkgfHwgIWlzRmluaXRlKGUucmF3ZGF5KSAmJiBuZXcgRGF0ZShlLmRhdGUuZ2V0RnVsbFllYXIoKSwgaXNGaW5pdGUoZS5yYXdtb250aCkgPyBlLm1vbnRoIDogZS5kYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCkgPj0gZS5kYXkgfHwgXCIyOVwiID09IGUuZGF5ICYmICghaXNGaW5pdGUoZS5yYXd5ZWFyKSB8fCB2b2lkIDAgPT09IGUucmF3eWVhciB8fCBcIlwiID09PSBlLnJhd3llYXIpIHx8IG5ldyBEYXRlKGUuZGF0ZS5nZXRGdWxsWWVhcigpLCBpc0Zpbml0ZShlLnJhd21vbnRoKSA/IGUubW9udGggOiBlLmRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSA+PSBlLmRheSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIjI5XCIgPT0gZS5kYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gai5jYWxsKHRoaXMsIHQucG9zLCBuLCB0aGlzLm1hc2tzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkudGFyZ2V0TWF0Y2ggJiYgXCJ5eXl5XCIgPT09IGkudGFyZ2V0TWF0Y2hbMF0gJiYgdC5wb3MgLSBpLnRhcmdldE1hdGNoSW5kZXggPT0gMikgcmV0dXJuIHQucmVtb3ZlID0gdC5wb3MgKyAxLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMiA9PSBlLmRhdGUuZ2V0TW9udGgoKSAmJiBcIjMwXCIgPT0gZS5kYXkgJiYgdm9pZCAwICE9PSB0LmMpIHJldHVybiBlLmRheSA9IFwiMDNcIiwgXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0ZS5zZXREYXRlKDMpLCBlLmRhdGUuc2V0TW9udGgoMSksIHQuaW5zZXJ0ID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQucG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0LnBvcyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjOiB0LmNcbiAgICAgICAgICAgICAgICAgICAgfSBdLCB0LmNhcmV0ID0gby5zZWVrTmV4dC5jYWxsKHRoaXMsIHQucG9zICsgMSksIHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTyhlLCB0LCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByLCBvLCBsID0gXCJcIiwgcyA9IDAsIGMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChQKG4pLmxhc3RJbmRleCA9IDA7IHIgPSBQKG4pLmV4ZWMoZSk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkgaWYgKG8gPSB3KHIpKSBsICs9IFwiKFwiICsgb1swXSArIFwiKVwiLCBuLnBsYWNlaG9sZGVyICYmIFwiXCIgIT09IG4ucGxhY2Vob2xkZXIgPyAoY1tzXSA9IG4ucGxhY2Vob2xkZXJbci5pbmRleCAlIG4ucGxhY2Vob2xkZXIubGVuZ3RoXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjW24ucGxhY2Vob2xkZXJbci5pbmRleCAlIG4ucGxhY2Vob2xkZXIubGVuZ3RoXV0gPSByWzBdLmNoYXJBdCgwKSkgOiBjW3NdID0gclswXS5jaGFyQXQoMCk7IGVsc2Ugc3dpdGNoIChyWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCArPSBcIihcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgKz0gXCIpP1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCArPSAoMCwgaS5kZWZhdWx0KShyWzBdKSwgY1tzXSA9IHJbMF0uY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvID0gdyhyKSkgaWYgKCEwICE9PSBhICYmIG9bM10pIGwgKz0gb1szXS5jYWxsKHQuZGF0ZSk7IGVsc2Ugb1syXSA/IGwgKz0gdFtcInJhd1wiICsgb1syXV0gOiBsICs9IHJbMF07IGVsc2UgbCArPSByWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHQgJiYgKG4ucGxhY2Vob2xkZXIgPSBjKSwgbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gXyhlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoZSA9IFN0cmluZyhlKSwgdCA9IHQgfHwgMjsgZS5sZW5ndGggPCB0OyApIGUgPSBuID8gZSArIFwiMFwiIDogXCIwXCIgKyBlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTShlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gbmV3IGgoZSwgdCwgbiwgdGhpcykgOiBlICYmIFwib2JqZWN0XCIgPT09IHUoZSkgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIFwiZGF0ZVwiKSA/IGUgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIEUoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTyh0LmlucHV0Rm9ybWF0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBlXG4gICAgICAgICAgICAgICAgICAgIH0sIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBqKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIGEsIHIgPSB0aGlzLCBvID0gbiAmJiBuLnRlc3RzW2VdID8gdC5wbGFjZWhvbGRlcltuLnRlc3RzW2VdWzBdLm1hdGNoLnBsYWNlaG9sZGVyXSB8fCBuLnRlc3RzW2VdWzBdLm1hdGNoLnBsYWNlaG9sZGVyIDogXCJcIiwgcyA9IDAsIGMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFAodCkubGFzdEluZGV4ID0gMDsgYSA9IFAodCkuZXhlYyh0LmlucHV0Rm9ybWF0KTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IC9cXGQrJC8uZXhlYyhhWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1KSBjID0gcGFyc2VJbnQodVswXSk7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSBhWzBdWzBdLCBwID0gczsgciAmJiAodC5wbGFjZWhvbGRlcltsLmdldFRlc3QuY2FsbChyLCBwKS5tYXRjaC5wbGFjZWhvbGRlcl0gfHwgbC5nZXRUZXN0LmNhbGwociwgcCkubWF0Y2gucGxhY2Vob2xkZXIpID09PSBmOyApIHArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID09PSAoYyA9IHAgLSBzKSAmJiAoYyA9IGFbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzICs9IGMsIC0xICE9IGFbMF0uaW5kZXhPZihvKSB8fCBzID49IGUgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGEsIGEgPSBQKHQpLmV4ZWModC5pbnB1dEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1hdGNoSW5kZXg6IHMgLSBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1hdGNoOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2g6IGlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRldGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm51bWVyaWNJbnB1dCA9ICExLCB5LlMgPSBtLm9yZGluYWxTdWZmaXguam9pbihcInxcIiksIGUuaW5wdXRGb3JtYXQgPSBrW2UuaW5wdXRGb3JtYXRdIHx8IGUuaW5wdXRGb3JtYXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGlzcGxheUZvcm1hdCA9IGtbZS5kaXNwbGF5Rm9ybWF0XSB8fCBlLmRpc3BsYXlGb3JtYXQgfHwgZS5pbnB1dEZvcm1hdCwgZS5vdXRwdXRGb3JtYXQgPSBrW2Uub3V0cHV0Rm9ybWF0XSB8fCBlLm91dHB1dEZvcm1hdCB8fCBlLmlucHV0Rm9ybWF0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlZ2V4ID0gTyhlLmlucHV0Rm9ybWF0LCB2b2lkIDAsIGUpLCBlLm1pbiA9IE0oZS5taW4sIGUuaW5wdXRGb3JtYXQsIGUpLCBlLm1heCA9IE0oZS5tYXgsIGUuaW5wdXRGb3JtYXQsIGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRGb3JtYXQ6IFwiaXNvRGF0ZVRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRGb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgbiwgaSwgYSwgciwgbywgbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKG4pICYmIGVbdF0gIT09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBqLmNhbGwodGhpcywgdCwgYSwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLm5leHRNYXRjaCAmJiBzLm5leHRNYXRjaFswXSA9PT0gbiAmJiBzLnRhcmdldE1hdGNoWzBdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdyhzLnRhcmdldE1hdGNoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKGMpLnRlc3QoXCIwXCIgKyBlW3QgLSAxXSkpIHJldHVybiBlW3RdID0gZVt0IC0gMV0sIGVbdCAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1enp5OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHQgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHQgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgbiwgaSwgYSwgciwgbywgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjLCB1LCBmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gaSAmJiAoKChjID0gai5jYWxsKGYsIHQgKyAxLCBhLCByKSkudGFyZ2V0TWF0Y2ggJiYgYy50YXJnZXRNYXRjaEluZGV4ID09PSB0ICYmIGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IHlbYy50YXJnZXRNYXRjaFswXV0gfHwgKGMgPSBqLmNhbGwoZiwgdCArIDIsIGEsIHIpKS50YXJnZXRNYXRjaCAmJiBjLnRhcmdldE1hdGNoSW5kZXggPT09IHQgKyAxICYmIGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IHlbYy50YXJnZXRNYXRjaFswXV0pICYmICh1ID0gdyhjLnRhcmdldE1hdGNoKVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdSAmJiAodm9pZCAwICE9PSByLnZhbGlkUG9zaXRpb25zW3QgKyAxXSAmJiBuZXcgUmVnRXhwKHUpLnRlc3QobiArIFwiMFwiKSA/IChlW3RdID0gbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVt0ICsgMV0gPSBcIjBcIiwgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0ICsgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG5ldyBSZWdFeHAodSkudGVzdChcIjBcIiArIG4pICYmIChlW3RdID0gXCIwXCIsIGVbdCArIDFdID0gbiwgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0ICsgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgITEgPT09IGkpKSByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5mdXp6eSAmJiAoZSA9IGkuYnVmZmVyLCB0ID0gaS5wb3MpLCAoYyA9IGouY2FsbChmLCB0LCBhLCByKSkudGFyZ2V0TWF0Y2ggJiYgYy50YXJnZXRNYXRjaFswXSAmJiB2b2lkIDAgIT09IHlbYy50YXJnZXRNYXRjaFswXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB3KGMudGFyZ2V0TWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gcFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBlLnNsaWNlKGMudGFyZ2V0TWF0Y2hJbmRleCwgYy50YXJnZXRNYXRjaEluZGV4ICsgYy50YXJnZXRNYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IG5ldyBSZWdFeHAodSkudGVzdChkLmpvaW4oXCJcIikpICYmIDIgPT09IGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoICYmIHIudmFsaWRQb3NpdGlvbnNbYy50YXJnZXRNYXRjaEluZGV4XSAmJiByLnZhbGlkUG9zaXRpb25zW2MudGFyZ2V0TWF0Y2hJbmRleCArIDFdICYmIChyLnZhbGlkUG9zaXRpb25zW2MudGFyZ2V0TWF0Y2hJbmRleCArIDFdLmlucHV0ID0gXCIwXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCIgPT0gcFsyXSkgZm9yICh2YXIgaCA9IGwuZ2V0TWFza1RlbXBsYXRlLmNhbGwoZiwgITEsIDEsIHZvaWQgMCwgITApLCBtID0gdCArIDE7IG0gPCBlLmxlbmd0aDsgbSsrKSBlW21dID0gaFttXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudmFsaWRQb3NpdGlvbnMuc3BsaWNlKHQgKyAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBpLCBrID0gTS5jYWxsKGYsIGUuam9pbihcIlwiKSwgYS5pbnB1dEZvcm1hdCwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGcgJiYgIWlzTmFOKGsuZGF0ZS5nZXRUaW1lKCkpICYmIChhLnByZWZpbGxZZWFyICYmIChnID0gZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS55ZWFyICE9PSBlLnJhd3llYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdi50b1N0cmluZygpLCBhID0gZS5yYXd5ZWFyLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSwgciA9IGkuc2xpY2UoMCwgYS5sZW5ndGgpLCBvID0gaS5zbGljZShhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PT0gYS5sZW5ndGggJiYgYSA9PT0gcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbmV3IERhdGUodiwgZS5tb250aCAtIDEsIGUuZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRheSA9PSBsLmdldERhdGUoKSAmJiAoIW4ubWF4IHx8IG4ubWF4LmRhdGUuZ2V0VGltZSgpID49IGwuZ2V0VGltZSgpKSAmJiAoZS5kYXRlLnNldEZ1bGxZZWFyKHYpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnllYXIgPSBpLCB0Lmluc2VydCA9IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQucG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogb1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0LnBvcyArIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG9bMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oaywgZywgYSkpLCBnID0gZnVuY3Rpb24oZSwgdCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXQpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBuLm1pbiAmJiAhaXNOYU4obi5taW4uZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZS5yZXNldCgpLCBQKG4pLmxhc3RJbmRleCA9IDA7IHIgPSBQKG4pLmV4ZWMobi5pbnB1dEZvcm1hdCk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobyA9IHcocikpICYmIG9bM10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IG9bMV0sIHMgPSBlW29bMl1dLCBjID0gbi5taW5bb1syXV0sIHUgPSBuLm1heCA/IG4ubWF4W29bMl1dIDogYyArIDEsIGYgPSBbXSwgcCA9ICExLCBkID0gMDsgZCA8IGMubGVuZ3RoOyBkKyspIHZvaWQgMCAhPT0gaS52YWxpZFBvc2l0aW9uc1tkICsgci5pbmRleF0gfHwgcCA/IChmW2RdID0gc1tkXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwIHx8IHNbZF0gPiBjW2RdKSA6IChkICsgci5pbmRleCA9PSAwICYmIHNbZF0gPCBjW2RdID8gKGZbZF0gPSBzW2RdLCBwID0gITApIDogZltkXSA9IGNbZF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIiA9PT0gb1syXSAmJiBzLmxlbmd0aCAtIDEgPT0gZCAmJiBjICE9IHUgJiYgKGYgPSAocGFyc2VJbnQoZi5qb2luKFwiXCIpKSArIDEpLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbXBtXCIgPT09IG9bMl0gJiYgYyAhPSB1ICYmIG4ubWluLmRhdGUuZ2V0VGltZSgpID4gZS5kYXRlLmdldFRpbWUoKSAmJiAoZltkXSA9IHVbZF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5jYWxsKGUuX2RhdGUsIGYuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG4ubWluLmRhdGUuZ2V0VGltZSgpIDw9IGUuZGF0ZS5nZXRUaW1lKCksIGUucmVJbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgJiYgbi5tYXggJiYgKGlzTmFOKG4ubWF4LmRhdGUuZ2V0VGltZSgpKSB8fCAodCA9IG4ubWF4LmRhdGUuZ2V0VGltZSgpID49IGUuZGF0ZS5nZXRUaW1lKCkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShrLCBnID0gUy5jYWxsKGYsIGssIGcsIGEpLCBhLCByKSksIHZvaWQgMCAhPT0gdCAmJiBnICYmIGkucG9zICE9PSB0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IE8oYS5pbnB1dEZvcm1hdCwgaywgYSkuc3BsaXQoXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaS5wb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBpLmNhcmV0IHx8IGkucG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IGc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCB0LCBuLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5ICYmIGUua2V5ID09PSByLmtleXMuQXJyb3dSaWdodCAmJiAodGhpcy5pbnB1dG1hc2suX3ZhbHVlU2V0KEUobmV3IERhdGUsIGkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZCh0aGlzKS50cmlnZ2VyKFwic2V0dmFsdWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPyBPKG4ub3V0cHV0Rm9ybWF0LCBNLmNhbGwodGhpcywgZSwgbi5pbnB1dEZvcm1hdCwgbiksIG4sICEwKSA6IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBmdW5jdGlvbihlLCB0LCBuLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gdC5uYXRpdmVEZWYuaW5kZXhPZihcIlthcF1cIikpIHJldHVybiBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gdC5uYXRpdmVEZWYuaW5kZXhPZihcIltBUF1cIikpIHJldHVybiBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBsLmdldFRlc3QuY2FsbCh0aGlzLCBbIG4gLSAxIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwID09IGEubWF0Y2guZGVmLmluZGV4T2YoXCJbQVBdXCIpIHx8IDAgPT09IG4gfHwgYSAmJiBhLmlucHV0ID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIua2V5Q29kZS5TcGFjZSkgfHwgYSAmJiBhLm1hdGNoLmRlZiA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShyLmtleUNvZGUuU3BhY2UpID8gZS50b1VwcGVyQ2FzZSgpIDogZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgRGF0ZV1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpICYmIChlID0gRShlLCB0KSksIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlVmlzdWFsOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0UG9zaXRpb25zOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBTdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpbGxZZWFyOiAhMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTMxMzogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIHZhciBpLCBhID0gKGkgPSBuKDIzOTQpKSAmJiBpLl9fZXNNb2R1bGUgPyBpIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZGVwZW5kZW5jeUxpYi5leHRlbmQoITAsIGEuZGVmYXVsdC5wcm90b3R5cGUuaTE4biwge1xuICAgICAgICAgICAgICAgICAgICBkYXlOYW1lczogWyBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCIgXSxcbiAgICAgICAgICAgICAgICAgICAgbW9udGhOYW1lczogWyBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiLCBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgb3JkaW5hbFN1ZmZpeDogWyBcInN0XCIsIFwibmRcIiwgXCJyZFwiLCBcInRoXCIgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM4NTE6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgYSA9IChpID0gbigyMzk0KSkgJiYgaS5fX2VzTW9kdWxlID8gaSA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogaVxuICAgICAgICAgICAgICAgIH0sIHIgPSBuKDg3MTEpLCBvID0gbig0NzEzKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gcyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfShlKSB8fCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gZVtTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gZVtcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBzKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gbiAmJiBlLmNvbnN0cnVjdG9yICYmIChuID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBuIHx8IFwiU2V0XCIgPT09IG4pIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IG4gfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBzKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDAsIGkgPSBuZXcgQXJyYXkodCk7IG4gPCB0OyBuKyspIGlbbl0gPSBlW25dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZERlZmluaXRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgQToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLUZhLWZdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSAvMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdWzAtOV1bMC05XS87XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlLCB0LCBuLCBpLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIC0gMSA+IC0xICYmIFwiLlwiICE9PSB0LmJ1ZmZlcltuIC0gMV0gPyAoZSA9IHQuYnVmZmVyW24gLSAxXSArIGUsIGUgPSBuIC0gMiA+IC0xICYmIFwiLlwiICE9PSB0LmJ1ZmZlcltuIC0gMl0gPyB0LmJ1ZmZlcltuIC0gMl0gKyBlIDogXCIwXCIgKyBlKSA6IGUgPSBcIjAwXCIgKyBlLCBcbiAgICAgICAgICAgICAgICAgICAgYS5ncmVlZHkgJiYgcGFyc2VJbnQoZSkgPiAyNTUgJiYgYy50ZXN0KFwiMDBcIiArIGUuY2hhckF0KDIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBbXS5jb25jYXQobCh0LmJ1ZmZlci5zbGljZSgwLCBuKSksIFsgXCIuXCIsIGUuY2hhckF0KDIpIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuam9pbihcIlwiKS5tYXRjaCgvXFwuL2cpLmxlbmd0aCA8IDQpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogbiArIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMudGVzdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgICAgICAgICBjc3N1bml0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleDogXCJbKy1dP1swLTldK1xcXFwuPyhbMC05XSspPyhweHxlbXxyZW18ZXh8JXxpbnxjbXxtbXxwdHxwYylcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBcIihodHRwcz98ZnRwKTovLy4qXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBTdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiVGhyb3VnaDogITBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IFwiaXsxLDN9Lmp7MSwzfS5rezEsM30ubHsxLDN9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiB1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiB1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcImRlY2ltYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCI6IFwiLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnNlcGFyYXRvciwgbiA9IGUucXVhbnRpZmllciwgaSA9IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLCBhID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkgZm9yICh2YXIgciA9IDA7IHIgPCBuOyByKyspIGEgKz0gXCJbXCIuY29uY2F0KHQpLmNvbmNhdChpLCBcIl1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpZmllcjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVBhc3RlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlID0gZS50b0xvd2VyQ2FzZSgpKS5yZXBsYWNlKFwibWFpbHRvOlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XFx1ZmYxMS1cXHVmZjE5QS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1ISMkJSYnKisvPT9eX2B7fH1+LV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXotXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFjOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBcIiMjOiMjOiMjOiMjOiMjOiMjXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBcIlZ7MTN9OXs0fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1ISi1OUFItWmEtaGotbnByLXpcXFxcZF1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNzbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogXCI5OTktOTktOTk5OVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIG4sIGksIGEsIGwsIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG8uZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITAsIHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0aGlzKSwgITAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gL14oPyEyMTktMDktOTk5OXwwNzgtMDUtMTEyMCkoPyE2NjZ8MDAwfDkuezJ9KS57M30tKD8hMDApLnsyfS0oPyEwezR9KS57NH0kLy50ZXN0KGMuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyMDc6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGwobig3MTg0KSksIGEgPSBsKG4oMjM5NCkpLCByID0gbigyODM5KSwgbyA9IG4oODcxMSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzID0gYS5kZWZhdWx0LmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSBcIlwiLCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIGEuZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZS5jaGFyQXQoaSldIHx8IHQuZGVmaW5pdGlvbnNbZS5jaGFyQXQoaSldIHx8IHQub3B0aW9uYWxtYXJrZXJbMF0gPT09IGUuY2hhckF0KGkpIHx8IHQub3B0aW9uYWxtYXJrZXJbMV0gPT09IGUuY2hhckF0KGkpIHx8IHQucXVhbnRpZmllcm1hcmtlclswXSA9PT0gZS5jaGFyQXQoaSkgfHwgdC5xdWFudGlmaWVybWFya2VyWzFdID09PSBlLmNoYXJBdChpKSB8fCB0Lmdyb3VwbWFya2VyWzBdID09PSBlLmNoYXJBdChpKSB8fCB0Lmdyb3VwbWFya2VyWzFdID09PSBlLmNoYXJBdChpKSB8fCB0LmFsdGVybmF0b3JtYXJrZXIgPT09IGUuY2hhckF0KGkpID8gbiArPSBcIlxcXFxcIiArIGUuY2hhckF0KGkpIDogbiArPSBlLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgbiwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5sZW5ndGggPiAwICYmIHQgPiAwICYmICghbi5kaWdpdHNPcHRpb25hbCB8fCBpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLmluZGV4T2Yobi5yYWRpeFBvaW50KSwgciA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5uZWdhdGlvblN5bWJvbC5iYWNrID09PSBlW2UubGVuZ3RoIC0gMV0gJiYgKHIgPSAhMCwgZS5sZW5ndGgtLSksIC0xID09PSBhICYmIChlLnB1c2gobi5yYWRpeFBvaW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAxOyBvIDw9IHQ7IG8rKykgaXNGaW5pdGUoZVthICsgb10pIHx8IChlW2EgKyBvXSA9IFwiMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gciAmJiBlLnB1c2gobi5uZWdhdGlvblN5bWJvbC5iYWNrKSwgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBcIitcIiA9PT0gZSAmJiAobiA9IG8uc2Vla05leHQuY2FsbCh0aGlzLCB0LnZhbGlkUG9zaXRpb25zLmxlbmd0aCAtIDEpKSwgXG4gICAgICAgICAgICAgICAgICAgIHQudGVzdHMpIGlmICgoaSA9IHBhcnNlSW50KGkpKSA+PSBuKSBmb3IgKHZhciBhID0gMCwgciA9IHQudGVzdHNbaV0ubGVuZ3RoOyBhIDwgcjsgYSsrKSBpZiAoKHZvaWQgMCA9PT0gdC52YWxpZFBvc2l0aW9uc1tpXSB8fCBcIi1cIiA9PT0gZSkgJiYgdC50ZXN0c1tpXVthXS5tYXRjaC5kZWYgPT09IGUpIHJldHVybiBpICsgKHZvaWQgMCAhPT0gdC52YWxpZFBvc2l0aW9uc1tpXSAmJiBcIi1cIiAhPT0gZSA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gLTEsIGkgPSAwLCBhID0gdC52YWxpZFBvc2l0aW9ucy5sZW5ndGg7IGkgPCBhOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC52YWxpZFBvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyICYmIHIubWF0Y2guZGVmID09PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQuYnVmZmVyID8gdC5idWZmZXIuaW5kZXhPZihhLnJhZGl4UG9pbnQpIDogLTEsIG8gPSAoLTEgIT09IHIgfHwgaSAmJiBhLmppdE1hc2tpbmcpICYmIG5ldyBSZWdFeHAoYS5kZWZpbml0aW9uc1s5XS52YWxpZGF0b3IpLnRlc3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaSAmJiBhLl9yYWRpeERhbmNlICYmIC0xICE9PSByICYmIG8gJiYgbnVsbCA9PSB0LnZhbGlkUG9zaXRpb25zW3JdID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiByID09PSBuID8gciArIDEgOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IGEucmFkaXhQb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogblxuICAgICAgICAgICAgICAgICAgICB9IDogbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXBlYXQgPSAwLCBlLmdyb3VwU2VwYXJhdG9yID09PSBlLnJhZGl4UG9pbnQgJiYgZS5kaWdpdHMgJiYgXCIwXCIgIT09IGUuZGlnaXRzICYmIChcIi5cIiA9PT0gZS5yYWRpeFBvaW50ID8gZS5ncm91cFNlcGFyYXRvciA9IFwiLFwiIDogXCIsXCIgPT09IGUucmFkaXhQb2ludCA/IGUuZ3JvdXBTZXBhcmF0b3IgPSBcIi5cIiA6IGUuZ3JvdXBTZXBhcmF0b3IgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgPT09IGUuZ3JvdXBTZXBhcmF0b3IgJiYgKGUuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHZvaWQgMCksIGUucGxhY2Vob2xkZXIubGVuZ3RoID4gMSAmJiAoZS5wbGFjZWhvbGRlciA9IGUucGxhY2Vob2xkZXIuY2hhckF0KDApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpeEZvY3VzXCIgPT09IGUucG9zaXRpb25DYXJldE9uQ2xpY2sgJiYgXCJcIiA9PT0gZS5wbGFjZWhvbGRlciAmJiAoZS5wb3NpdGlvbkNhcmV0T25DbGljayA9IFwibHZwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gXCIwXCIsIG4gPSBlLnJhZGl4UG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IGUubnVtZXJpY0lucHV0ICYmIHZvaWQgMCA9PT0gZS5fX2ZpbmFuY2VJbnB1dCA/ICh0ID0gXCIxXCIsIGUucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcInJhZGl4Rm9jdXNcIiA9PT0gZS5wb3NpdGlvbkNhcmV0T25DbGljayA/IFwibHZwXCIgOiBlLnBvc2l0aW9uQ2FyZXRPbkNsaWNrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRpZ2l0c09wdGlvbmFsID0gITEsIGlzTmFOKGUuZGlnaXRzKSAmJiAoZS5kaWdpdHMgPSAyKSwgZS5fcmFkaXhEYW5jZSA9ICExLCBuID0gXCIsXCIgPT09IGUucmFkaXhQb2ludCA/IFwiP1wiIDogXCIhXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGUucmFkaXhQb2ludCAmJiB2b2lkIDAgPT09IGUuZGVmaW5pdGlvbnNbbl0gJiYgKGUuZGVmaW5pdGlvbnNbbl0gPSB7fSwgZS5kZWZpbml0aW9uc1tuXS52YWxpZGF0b3IgPSBcIltcIiArIGUucmFkaXhQb2ludCArIFwiXVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRlZmluaXRpb25zW25dLnBsYWNlaG9sZGVyID0gZS5yYWRpeFBvaW50LCBlLmRlZmluaXRpb25zW25dLnN0YXRpYyA9ICEwLCBlLmRlZmluaXRpb25zW25dLmdlbmVyYXRlZCA9ICEwKSkgOiAoZS5fX2ZpbmFuY2VJbnB1dCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm51bWVyaWNJbnB1dCA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSwgciA9IFwiWytdXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgKz0gYyhlLnByZWZpeCwgZSksIFwiXCIgIT09IGUuZ3JvdXBTZXBhcmF0b3IgPyAodm9pZCAwID09PSBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdICYmIChlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdID0ge30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0udmFsaWRhdG9yID0gXCJbXCIgKyBlLmdyb3VwU2VwYXJhdG9yICsgXCJdXCIsIGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0ucGxhY2Vob2xkZXIgPSBlLmdyb3VwU2VwYXJhdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdLnN0YXRpYyA9ICEwLCBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdLmdlbmVyYXRlZCA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciArPSBlLl9tYXNrKGUpKSA6IHIgKz0gXCI5eyt9XCIsIHZvaWQgMCAhPT0gZS5kaWdpdHMgJiYgMCAhPT0gZS5kaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBlLmRpZ2l0cy50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5pdGUob1swXSkgJiYgb1sxXSAmJiBpc0Zpbml0ZShvWzFdKSA/IHIgKz0gbiArIHQgKyBcIntcIiArIGUuZGlnaXRzICsgXCJ9XCIgOiAoaXNOYU4oZS5kaWdpdHMpIHx8IHBhcnNlSW50KGUuZGlnaXRzKSA+IDApICYmIChlLmRpZ2l0c09wdGlvbmFsIHx8IGUuaml0TWFza2luZyA/IChhID0gciArIG4gKyB0ICsgXCJ7MCxcIiArIGUuZGlnaXRzICsgXCJ9XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmtlZXBTdGF0aWMgPSAhMCkgOiByICs9IG4gKyB0ICsgXCJ7XCIgKyBlLmRpZ2l0cyArIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZS5pbnB1dG1vZGUgPSBcIm51bWVyaWNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gciArPSBjKGUuc3VmZml4LCBlKSwgciArPSBcIlstXVwiLCBhICYmIChyID0gWyBhICsgYyhlLnN1ZmZpeCwgZSkgKyBcIlstXVwiLCByIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdyZWVkeSA9ICExLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZS5wYXJzZU1pbk1heE9wdGlvbnMgJiYgKG51bGwgIT09IGUubWluICYmIChlLm1pbiA9IGUubWluLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZWZhdWx0KShlLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXCIsXCIgPT09IGUucmFkaXhQb2ludCAmJiAoZS5taW4gPSBlLm1pbi5yZXBsYWNlKGUucmFkaXhQb2ludCwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubWluID0gaXNGaW5pdGUoZS5taW4pID8gcGFyc2VGbG9hdChlLm1pbikgOiBOYU4sIGlzTmFOKGUubWluKSAmJiAoZS5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBlLm1heCAmJiAoZS5tYXggPSBlLm1heC50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgaS5kZWZhdWx0KShlLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBlLnJhZGl4UG9pbnQgJiYgKGUubWF4ID0gZS5tYXgucmVwbGFjZShlLnJhZGl4UG9pbnQsIFwiLlwiKSksIGUubWF4ID0gaXNGaW5pdGUoZS5tYXgpID8gcGFyc2VGbG9hdChlLm1heCkgOiBOYU4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihlLm1heCkgJiYgKGUubWF4ID0gTnVtYmVyLk1BWF9WQUxVRSkpLCBlLnBhcnNlTWluTWF4T3B0aW9ucyA9IFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUpLCBcIlwiICE9PSBlLnJhZGl4UG9pbnQgJiYgZS5zdWJzdGl0dXRlUmFkaXhQb2ludCAmJiAoZS5zdWJzdGl0dXRlc1tcIi5cIiA9PSBlLnJhZGl4UG9pbnQgPyBcIixcIiA6IFwiLlwiXSA9IGUucmFkaXhQb2ludCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX21hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoXCIgKyBlLmdyb3VwU2VwYXJhdG9yICsgXCI5OTkpeyt8MX1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IFwiKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5mb3JjZURpZ2l0c09uQmx1cjogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcInJhZGl4Rm9jdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yYWRpeERhbmNlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNaW51czogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdhdGlvblN5bWJvbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250OiBcIi1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgU2V0TWF4T25PdmVyZmxvdzogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kaW5nRk46IE1hdGgucm91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwiZGVjaW1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgazogXCIxMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbTogXCIxMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVlZHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBbGlnbjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVByb3RvdHlwZURlZmluaXRpb25zOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwTGVhZGluZ1plcm9lczogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRlUmFkaXhQb2ludDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN5bWJvbDogXCI5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjEwLVxcdWZmMTlcXHUwNjYwLVxcdTA2NjlcXHUwNmYwLVxcdTA2ZjldXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGUsIHQsIG4sIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFsbG93TWludXMgJiYgKFwiLVwiID09PSBlIHx8IGUgPT09IGEubmVnYXRpb25TeW1ib2wuZnJvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGUsIHQsIG4sIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFsbG93TWludXMgJiYgZSA9PT0gYS5uZWdhdGlvblN5bWJvbC5iYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIG4sIGksIGEsIHIsIG8sIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSBhLl9fZmluYW5jZUlucHV0ICYmIG4gPT09IGEucmFkaXhQb2ludCkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZS5pbmRleE9mKGEucmFkaXhQb2ludCksIHUgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID0gZnVuY3Rpb24oZSwgdCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5fcmFkaXhEYW5jZSAmJiBhLm51bWVyaWNJbnB1dCAmJiB0ICE9PSBhLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgZSA8PSBuICYmIChuID4gMCB8fCB0ID09IGEucmFkaXhQb2ludCkgJiYgKHZvaWQgMCA9PT0gaS52YWxpZFBvc2l0aW9uc1tlIC0gMV0gfHwgaS52YWxpZFBvc2l0aW9uc1tlIC0gMV0uaW5wdXQgIT09IGEubmVnYXRpb25TeW1ib2wuYmFjaykgJiYgKGUgLT0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odCwgbiwgYywgciwgYSksIFwiLVwiID09PSBuIHx8IG4gPT09IGEubmVnYXRpb25TeW1ib2wuZnJvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBhLmFsbG93TWludXMpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSAhMSwgaCA9IHAoXCIrXCIsIHIpLCB2ID0gcChcIi1cIiwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gaCAmJiAoZCA9IFsgaCBdLCAtMSAhPT0gdiAmJiBkLnB1c2godikpLCAhMSAhPT0gZCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiB1IC0gYS5uZWdhdGlvblN5bWJvbC5iYWNrLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGYuY2FsbChzLCBcIitcIiwgciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogYS5uZWdhdGlvblN5bWJvbC5mcm9udCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGYuY2FsbChzLCBcIi1cIiwgciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogYS5uZWdhdGlvblN5bWJvbC5iYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Jc1ZhbGlkOiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiB1ICsgYS5uZWdhdGlvblN5bWJvbC5iYWNrLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gYS5ncm91cFNlcGFyYXRvcikgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBjICYmICEwID09PSBhLl9yYWRpeERhbmNlICYmICExID09PSBpICYmIG4gPT09IGEucmFkaXhQb2ludCAmJiB2b2lkIDAgIT09IGEuZGlnaXRzICYmIChpc05hTihhLmRpZ2l0cykgfHwgcGFyc2VJbnQoYS5kaWdpdHMpID4gMCkgJiYgYyAhPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGYuY2FsbChzLCBhLnJhZGl4UG9pbnQsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci52YWxpZFBvc2l0aW9uc1ttXSAmJiAoci52YWxpZFBvc2l0aW9uc1ttXS5nZW5lcmF0ZWRJbnB1dCA9IHIudmFsaWRQb3NpdGlvbnNbbV0uZ2VuZXJhdGVkIHx8ICExKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBhLl9yYWRpeERhbmNlICYmIHQgPT09IGMgLSAxID8gYyArIDEgOiBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gYS5fX2ZpbmFuY2VJbnB1dCkgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGlnaXRzT3B0aW9uYWwpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IG8uZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYS5kaWdpdHNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uYmVnaW4gPiBjICYmIG8uZW5kIDw9IGMpIHJldHVybiBuID09PSBhLnJhZGl4UG9pbnQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogYyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IGMgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uYmVnaW4gPCBjKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogby5iZWdpbiAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFhLnNob3dNYXNrT25Ib3ZlciAmJiAhYS5zaG93TWFza09uRm9jdXMgJiYgIWEuZGlnaXRzT3B0aW9uYWwgJiYgYS5kaWdpdHMgPiAwICYmIFwiXCIgPT09IHRoaXMuX192YWx1ZUdldC5jYWxsKHRoaXMuZWwpKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIG4sIGksIGEsIHIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGkpIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGEubWluIHx8IG51bGwgIT09IGEubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gYS5vblVuTWFzayhlLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIiksIHZvaWQgMCwgcy5leHRlbmQoe30sIGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBhLm1pbiAmJiBsIDwgYS5taW4gJiYgKGwudG9TdHJpbmcoKS5sZW5ndGggPiBhLm1pbi50b1N0cmluZygpLmxlbmd0aCB8fCBsIDwgMCkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGEubWF4ICYmIGwgPiBhLm1heCkgcmV0dXJuICEhYS5TZXRNYXhPbk92ZXJmbG93ICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdShhLm1heC50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIGEucmFkaXhQb2ludCkuc3BsaXQoXCJcIiksIGEuZGlnaXRzLCBhKS5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdCAmJiAhMCA9PT0gbi5udWxsYWJsZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnJlcGxhY2Uobi5wcmVmaXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID0gKGEgPSBhLnJlcGxhY2Uobi5zdWZmaXgsIFwiXCIpKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIGkuZGVmYXVsdCkobi5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IG4ucGxhY2Vob2xkZXIuY2hhckF0KDApICYmIChhID0gYS5yZXBsYWNlKG5ldyBSZWdFeHAobi5wbGFjZWhvbGRlci5jaGFyQXQoMCksIFwiZ1wiKSwgXCIwXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi51bm1hc2tBc051bWJlciA/IChcIlwiICE9PSBuLnJhZGl4UG9pbnQgJiYgLTEgIT09IGEuaW5kZXhPZihuLnJhZGl4UG9pbnQpICYmIChhID0gYS5yZXBsYWNlKGkuZGVmYXVsdC5jYWxsKHRoaXMsIG4ucmFkaXhQb2ludCksIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAoYSA9IGEucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiICsgKDAsIGkuZGVmYXVsdCkobi5uZWdhdGlvblN5bWJvbC5mcm9udCkpLCBcIi1cIikpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZWZhdWx0KShuLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgTnVtYmVyKGEpKSA6IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gKHQubnVtZXJpY0lucHV0ID8gZS5zbGljZSgpLnJldmVyc2UoKSA6IGUpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPSAobiA9IChuID0gKG4gPSAobiA9IG4ucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiICsgKDAsIGkuZGVmYXVsdCkodC5uZWdhdGlvblN5bWJvbC5mcm9udCkpLCBcIi1cIikpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZWZhdWx0KSh0Lm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSkucmVwbGFjZSh0LnByZWZpeCwgXCJcIikpLnJlcGxhY2UodC5zdWZmaXgsIFwiXCIpKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZGVmYXVsdCkodC5ncm91cFNlcGFyYXRvcikgKyBcIihbMC05XXszfSlcIiwgXCJnXCIpLCBcIiQxXCIpLCBcIixcIiA9PT0gdC5yYWRpeFBvaW50ICYmIChuID0gbi5yZXBsYWNlKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmRlZmF1bHQpKHQucmFkaXhQb2ludCksIFwiLlwiKSksIGlzRmluaXRlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBudWxsICE9PSAobiA9IGUpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gdC5yYWRpeFBvaW50IHx8IFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKHQuZGlnaXRzKSAmJiAodC5kaWdpdHMgPSBwYXJzZUludCh0LmRpZ2l0cykpLCBcIm51bWJlclwiICE9IHR5cGVvZiBlICYmIFwibnVtYmVyXCIgIT09IHQuaW5wdXRUeXBlIHx8IFwiXCIgPT09IGEgfHwgKGUgPSBlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gXCItXCIgPT09IGUuY2hhckF0KDApIHx8IGUuY2hhckF0KDApID09PSB0Lm5lZ2F0aW9uU3ltYm9sLmZyb250LCBvID0gZS5zcGxpdChhKSwgbCA9IG9bMF0ucmVwbGFjZSgvW15cXC0wLTldL2csIFwiXCIpLCBzID0gby5sZW5ndGggPiAxID8gb1sxXS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikgOiBcIlwiLCBjID0gby5sZW5ndGggPiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBsICsgKFwiXCIgIT09IHMgPyBhICsgcyA6IHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gYSAmJiAoZiA9IHQuZGlnaXRzT3B0aW9uYWwgPyB0LmRpZ2l0cyA8IHMubGVuZ3RoID8gdC5kaWdpdHMgOiBzLmxlbmd0aCA6IHQuZGlnaXRzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBzIHx8ICF0LmRpZ2l0c09wdGlvbmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IE1hdGgucG93KDEwLCBmIHx8IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gZS5yZXBsYWNlKCgwLCBpLmRlZmF1bHQpKGEpLCBcIi5cIiksIGlzTmFOKHBhcnNlRmxvYXQoZSkpIHx8IChlID0gKHQucm91bmRpbmdGTihwYXJzZUZsb2F0KGUpICogcCkgLyBwKS50b0ZpeGVkKGYpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSB0LmRpZ2l0cyAmJiAtMSAhPT0gZS5pbmRleE9mKGEpICYmIChlID0gZS5zdWJzdHJpbmcoMCwgZS5pbmRleE9mKGEpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IHQubWluIHx8IG51bGwgIT09IHQubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gZS50b1N0cmluZygpLnJlcGxhY2UoYSwgXCIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSB0Lm1pbiAmJiBkIDwgdC5taW4gPyBlID0gdC5taW4udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBhKSA6IG51bGwgIT09IHQubWF4ICYmIGQgPiB0Lm1heCAmJiAoZSA9IHQubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gciAmJiBcIi1cIiAhPT0gZS5jaGFyQXQoMCkgJiYgKGUgPSBcIi1cIiArIGUpLCB1KGUudG9TdHJpbmcoKS5zcGxpdChcIlwiKSwgZiwgdCwgYykuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVdyaXRlOiBmdW5jdGlvbihlLCB0LCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gYS5fX2ZpbmFuY2VJbnB1dCB8fCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuaW5kZXhPZihhLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09IG4gJiYgZS5zcGxpY2UobiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGEuZ3JvdXBTZXBhcmF0b3IpIGZvciAoOy0xICE9PSAobiA9IGUuaW5kZXhPZihhLmdyb3VwU2VwYXJhdG9yKSk7ICkgZS5zcGxpY2UobiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbywgbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5zdHJpcExlYWRpbmdaZXJvZXMgJiYgKGwgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IFJlZ0V4cChcIiheXCIgKyAoXCJcIiAhPT0gdC5uZWdhdGlvblN5bWJvbC5mcm9udCA/ICgwLCBpLmRlZmF1bHQpKHQubmVnYXRpb25TeW1ib2wuZnJvbnQpICsgXCI/XCIgOiBcIlwiKSArICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZWZhdWx0KSh0LnByZWZpeCkgKyBcIikoLiopKFwiICsgKDAsIGkuZGVmYXVsdCkodC5zdWZmaXgpICsgKFwiXCIgIT0gdC5uZWdhdGlvblN5bWJvbC5iYWNrID8gKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmRlZmF1bHQpKHQubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIj9cIiA6IFwiXCIpICsgXCIkKVwiKS5leGVjKGUuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSksIGEgPSBuID8gblsyXSA6IFwiXCIsIHIgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgKGEgPSBhLnNwbGl0KHQucmFkaXhQb2ludC5jaGFyQXQoMCkpWzBdLCByID0gbmV3IFJlZ0V4cChcIl5bMFwiICsgdC5ncm91cFNlcGFyYXRvciArIFwiXSpcIikuZXhlYyhhKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKCFyIHx8ICEoclswXS5sZW5ndGggPiAxIHx8IHJbMF0ubGVuZ3RoID4gMCAmJiByWzBdLmxlbmd0aCA8IGEubGVuZ3RoKSkgJiYgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQsIGEpKSkgZm9yICh2YXIgYyA9IHQuam9pbihcIlwiKS5sYXN0SW5kZXhPZihsWzBdLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKSAtIChsWzBdID09IGwuaW5wdXQgPyAwIDogMSksIGYgPSBsWzBdID09IGwuaW5wdXQgPyAxIDogMCwgcCA9IGxbMF0ubGVuZ3RoIC0gZjsgcCA+IDA7IHAtLSkgdGhpcy5tYXNrc2V0LnZhbGlkUG9zaXRpb25zLnNwbGljZShjICsgcCwgMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0W2MgKyBwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJibHVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hlY2t2YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGEubWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGEub25Vbk1hc2sodC5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpLCB2b2lkIDAsIHMuZXh0ZW5kKHt9LCBhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXNrQXNOdW1iZXI6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gYS5taW4gJiYgZCA8IGEubWluKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHUoYS5taW4udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBhLnJhZGl4UG9pbnQpLnNwbGl0KFwiXCIpLCBhLmRpZ2l0cywgYSkucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0W3QubGVuZ3RoIC0gMV0gPT09IGEubmVnYXRpb25TeW1ib2wuZnJvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gbmV3IFJlZ0V4cChcIiheXCIgKyAoXCJcIiAhPSBhLm5lZ2F0aW9uU3ltYm9sLmZyb250ID8gKDAsIGkuZGVmYXVsdCkoYS5uZWdhdGlvblN5bWJvbC5mcm9udCkgKyBcIj9cIiA6IFwiXCIpICsgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZWZhdWx0KShhLnByZWZpeCkgKyBcIikoLiopKFwiICsgKDAsIGkuZGVmYXVsdCkoYS5zdWZmaXgpICsgKFwiXCIgIT0gYS5uZWdhdGlvblN5bWJvbC5iYWNrID8gKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZWZhdWx0KShhLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCI/XCIgOiBcIlwiKSArIFwiJClcIikuZXhlYyhyKHQuc2xpY2UoKSwgITApLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gKGggPyBoWzJdIDogXCJcIikgJiYgKG8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogWyAwIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiXCIgIT09IGEucmFkaXhQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pbmRleE9mKGEucmFkaXhQb2ludCkgPT09IGEuc3VmZml4Lmxlbmd0aCAmJiAobyAmJiBvLmJ1ZmZlciA/IG8uYnVmZmVyLnNwbGljZSgwLCAxICsgYS5zdWZmaXgubGVuZ3RoKSA6ICh0LnNwbGljZSgwLCAxICsgYS5zdWZmaXgubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHIodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5lbmZvcmNlRGlnaXRzT25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IChvID0gbyB8fCB7fSkgJiYgby5idWZmZXIgfHwgdC5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucmVmcmVzaEZyb21CdWZmZXIgPSAhMCwgby5idWZmZXIgPSB1KHYsIGEuZGlnaXRzLCBhLCAhMCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgdCwgbiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhLCBvID0gcyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMyAhPSBlLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsLCBjID0gZS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobCA9IGkuc2hvcnRjdXRzICYmIGkuc2hvcnRjdXRzW2NdKSAmJiBsLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLmlucHV0bWFzay5fX3ZhbHVlU2V0LmNhbGwodGhpcywgcGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpICogcGFyc2VJbnQobCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHIua2V5cy5BcnJvd1VwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2suX192YWx1ZVNldC5jYWxsKHRoaXMsIHBhcnNlRmxvYXQodGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpKSArIHBhcnNlSW50KGkuc3RlcCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHIua2V5cy5BcnJvd0Rvd246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzay5fX3ZhbHVlU2V0LmNhbGwodGhpcywgcGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpIC0gcGFyc2VJbnQoaS5zdGVwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSAmJiAoZS5rZXkgPT09IHIua2V5cy5EZWxldGUgfHwgZS5rZXkgPT09IHIua2V5cy5CYWNrc3BhY2UgfHwgZS5rZXkgPT09IHIua2V5cy5CQUNLU1BBQ0VfU0FGQVJJKSAmJiBuLmJlZ2luICE9PSB0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFtlLmtleSA9PT0gci5rZXlzLkRlbGV0ZSA/IG4uYmVnaW4gLSAxIDogbi5lbmRdID09PSBpLm5lZ2F0aW9uU3ltYm9sLmZyb250KSByZXR1cm4gYSA9IHQuc2xpY2UoKS5yZXZlcnNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBpLm5lZ2F0aW9uU3ltYm9sLmZyb250ICYmIGEuc2hpZnQoKSwgXCJcIiAhPT0gaS5uZWdhdGlvblN5bWJvbC5iYWNrICYmIGEucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGEuam9pbihcIlwiKSwgbi5iZWdpbiBdKSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaS5fcmFkaXhEYW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYsIHAgPSB0LmluZGV4T2YoaS5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpLmRpZ2l0c09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHApIHJldHVybiAoYSA9IHQuc2xpY2UoKS5yZXZlcnNlKCkpLnBvcCgpLCBvLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGEuam9pbihcIlwiKSwgbi5iZWdpbiA+PSBhLmxlbmd0aCA/IGEubGVuZ3RoIDogbi5iZWdpbiBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC0xICE9PSBwICYmIChuLmJlZ2luIDwgcCB8fCBuLmVuZCA8IHAgfHwgZS5rZXkgPT09IHIua2V5cy5EZWxldGUgJiYgKG4uYmVnaW4gPT09IHAgfHwgbi5iZWdpbiAtIDEgPT09IHApKSkgcmV0dXJuIG4uYmVnaW4gPT09IG4uZW5kICYmIChlLmtleSA9PT0gci5rZXlzLkJhY2tzcGFjZSB8fCBlLmtleSA9PT0gci5rZXlzLkJBQ0tTUEFDRV9TQUZBUkkgPyBuLmJlZ2luKysgOiBlLmtleSA9PT0gci5rZXlzLkRlbGV0ZSAmJiBuLmJlZ2luIC0gMSA9PT0gcCAmJiAoZiA9IHMuZXh0ZW5kKHt9LCBuKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmJlZ2luLS0sIG4uZW5kLS0pKSwgKGEgPSB0LnNsaWNlKCkucmV2ZXJzZSgpKS5zcGxpY2UoYS5sZW5ndGggLSBuLmJlZ2luLCBuLmJlZ2luIC0gbi5lbmQgKyAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdShhLCBpLmRpZ2l0cywgaSkuam9pbihcIlwiKSwgZiAmJiAobiA9IGYpLCBvLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGEsIG4uYmVnaW4gPj0gYS5sZW5ndGggPyBwICsgMSA6IG4uYmVnaW4gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCIsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGludGVnZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICExXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluZGlhbm5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihcIiArIGUuZ3JvdXBTZXBhcmF0b3IgKyBcIjk5KXsqfDF9KFwiICsgZS5ncm91cFNlcGFyYXRvciArIFwiOTk5KXsxfDF9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiLFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDkzODA6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9ICEoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2Ygd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgIXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSBuID8gd2luZG93IDoge307XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzc2MDogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaS5pZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSB0ICYmIChlLnBsYWNlaG9sZGVyICE9PSB0IHx8IFwiXCIgPT09IGUucGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBvLmdldEJ1ZmZlci5jYWxsKG4pLnNsaWNlKCksIHIgPSBlLmlucHV0bWFzay5fdmFsdWVHZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociAhPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IG8uZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IGwgJiYgciA9PT0gby5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKG4pLmpvaW4oXCJcIikgPyBhID0gW10gOiAtMSAhPT0gbCAmJiB1LmNhbGwobiwgYSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwKGUsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUucGxhY2Vob2xkZXIgIT09IHQgJiYgKGUucGxhY2Vob2xkZXIgPSB0LCBcIlwiID09PSBlLnBsYWNlaG9sZGVyICYmIGUucmVtb3ZlQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpO1xuICAgICAgICAgICAgICAgIH0sIHQuYXBwbHlJbnB1dFZhbHVlID0gYywgdC5jaGVja1ZhbCA9IGYsIHQuY2xlYXJPcHRpb25hbFRhaWwgPSB1LCB0LnVubWFza2VkdmFsdWUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcywgbiA9IHQub3B0cywgaSA9IHQubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGUuaW5wdXRtYXNrKSByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrICYmIGUuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSAmJiBjKGUsIGUuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgciA9IGkudmFsaWRQb3NpdGlvbnMsIGwgPSAwLCBzID0gci5sZW5ndGg7IGwgPCBzOyBsKyspIHJbbF0gJiYgcltsXS5tYXRjaCAmJiAoMSAhPSByW2xdLm1hdGNoLnN0YXRpYyB8fCBBcnJheS5pc0FycmF5KGkubWV0YWRhdGEpICYmICEwICE9PSByW2xdLmdlbmVyYXRlZElucHV0KSAmJiBhLnB1c2gocltsXS5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gMCA9PT0gYS5sZW5ndGggPyBcIlwiIDogKHQuaXNSVEwgPyBhLnJldmVyc2UoKSA6IGEpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4ub25Vbk1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gKHQuaXNSVEwgPyBvLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKCkucmV2ZXJzZSgpIDogby5nZXRCdWZmZXIuY2FsbCh0KSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBuLm9uVW5NYXNrLmNhbGwodCwgZiwgdSwgbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgICAgICAgfSwgdC53cml0ZUJ1ZmZlciA9IHA7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuKDk4NDUpLCBhID0gbig2MDMwKSwgciA9IG4oMjgzOSksIG8gPSBuKDg3MTEpLCBsID0gbig3MjE1KSwgcyA9IG4oNDcxMyk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcywgYSA9IGkub3B0cztcbiAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sucmVmcmVzaFZhbHVlID0gITEsIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYS5vbkJlZm9yZU1hc2sgJiYgKHQgPSBhLm9uQmVmb3JlTWFzay5jYWxsKGksIHQsIGEpIHx8IHQpLCBcbiAgICAgICAgICAgICAgICAgICAgZihlLCAhMCwgITEsIHQgPSAodCB8fCBcIlwiKS50b1N0cmluZygpLnNwbGl0KFwiXCIpLCBuKSwgaS51bmRvVmFsdWUgPSBpLl92YWx1ZUdldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAoYS5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBhLmNsZWFySW5jb21wbGV0ZSkgJiYgZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IG8uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKS5qb2luKFwiXCIpICYmIC0xID09PSBvLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaSkgJiYgZS5pbnB1dG1hc2suX3ZhbHVlU2V0KFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBuID0gcy5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMCwgMCwgITAsIHZvaWQgMCwgITApOyB2b2lkIDAgIT09ICh0ID0gbi5zaGlmdCgpKTsgKSBlLnB1c2godCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUsIHQsIG4sIGksIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMsIHUgPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzLCBmID0gdS5tYXNrc2V0LCBkID0gdS5vcHRzLCBoID0gdS5kZXBlbmRlbmN5TGliLCB2ID0gaS5zbGljZSgpLCBtID0gXCJcIiwgZyA9IC0xLCB5ID0gZC5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyO1xuICAgICAgICAgICAgICAgICAgICBkLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBcIlwiLCBvLnJlc2V0TWFza1NldC5jYWxsKHUsICExKSwgdS5jbGlja2VkID0gMCwgZyA9IGQucmFkaXhQb2ludCA/IG8uZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKHUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sICExLCAhMSA9PT0gZC5fX2ZpbmFuY2VJbnB1dCA/IFwicmFkaXhGb2N1c1wiIDogdm9pZCAwKS5iZWdpbiA6IDAsIGYucCA9IGcsIHUuY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogZ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IFtdLCBiID0gdS5jYXJldFBvcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuZm9yRWFjaCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbmV3IGguRXZlbnQoXCJfY2hlY2t2YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5rZXkgPSBlLCBtICs9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBvLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodSwgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IHMuZ2V0TWFza1RlbXBsYXRlLmNhbGwodSwgITAsIDApLnNsaWNlKGUsIG8uc2Vla05leHQuY2FsbCh1LCBlLCAhMSwgITEpKS5qb2luKFwiXCIpLnJlcGxhY2UoLycvZywgXCJcIiksIGkgPSBuLmluZGV4T2YodCk7IGkgPiAwICYmIFwiIFwiID09PSBuW2kgLSAxXTsgKSBpLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gMCA9PT0gaSAmJiAhby5pc01hc2suY2FsbCh1LCBlKSAmJiAocy5nZXRUZXN0LmNhbGwodSwgZSkubWF0Y2gubmF0aXZlRGVmID09PSB0LmNoYXJBdCgwKSB8fCAhMCA9PT0gcy5nZXRUZXN0LmNhbGwodSwgZSkubWF0Y2guc3RhdGljICYmIHMuZ2V0VGVzdC5jYWxsKHUsIGUpLm1hdGNoLm5hdGl2ZURlZiA9PT0gXCInXCIgKyB0LmNoYXJBdCgwKSB8fCBcIiBcIiA9PT0gcy5nZXRUZXN0LmNhbGwodSwgZSkubWF0Y2gubmF0aXZlRGVmICYmIChzLmdldFRlc3QuY2FsbCh1LCBlICsgMSkubWF0Y2gubmF0aXZlRGVmID09PSB0LmNoYXJBdCgwKSB8fCAhMCA9PT0gcy5nZXRUZXN0LmNhbGwodSwgZSArIDEpLm1hdGNoLnN0YXRpYyAmJiBzLmdldFRlc3QuY2FsbCh1LCBlICsgMSkubWF0Y2gubmF0aXZlRGVmID09PSBcIidcIiArIHQuY2hhckF0KDApKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYSAmJiBpID4gMCAmJiAhby5pc01hc2suY2FsbCh1LCBlLCAhMSwgITApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG8uc2Vla05leHQuY2FsbCh1LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuY2FyZXRQb3MuYmVnaW4gPCByICYmICh1LmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGcsIG0pID8gKGMgPSBhLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKHUsIGksICEwLCAhMSwgbiwgdS5jYXJldFBvcy5iZWdpbikpICYmIChnID0gdS5jYXJldFBvcy5iZWdpbiArIDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBcIlwiKSA6IGMgPSBhLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKHUsIGksICEwLCAhMSwgbiwgciArIDEpLCBjID8gKHZvaWQgMCAhPT0gYy5wb3MgJiYgZi52YWxpZFBvc2l0aW9uc1tjLnBvc10gJiYgITAgPT09IGYudmFsaWRQb3NpdGlvbnNbYy5wb3NdLm1hdGNoLnN0YXRpYyAmJiB2b2lkIDAgPT09IGYudmFsaWRQb3NpdGlvbnNbYy5wb3NdLmFsdGVybmF0aW9uICYmIChrLnB1c2goYy5wb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LmlzUlRMIHx8IChjLmZvcndhcmRQb3NpdGlvbiA9IGMucG9zICsgMSkpLCBwLmNhbGwodSwgdm9pZCAwLCBvLmdldEJ1ZmZlci5jYWxsKHUpLCBjLmZvcndhcmRQb3NpdGlvbiwgaSwgITEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogYy5mb3J3YXJkUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogYy5mb3J3YXJkUG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBiID0gdS5jYXJldFBvcykgOiB2b2lkIDAgPT09IGYudmFsaWRQb3NpdGlvbnNbdF0gJiYgdlt0XSA9PT0gcy5nZXRQbGFjZWhvbGRlci5jYWxsKHUsIHQpICYmIG8uaXNNYXNrLmNhbGwodSwgdCwgITApID8gdS5jYXJldFBvcy5iZWdpbisrIDogdS5jYXJldFBvcyA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCwgdywgUCA9IG8uc2Vla05leHQuY2FsbCh1LCAtMSwgdm9pZCAwLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwuaXNDb21wbGV0ZS5jYWxsKHUsIG8uZ2V0QnVmZmVyLmNhbGwodSkpICYmIGsubGVuZ3RoIDw9IFAgfHwgbC5pc0NvbXBsZXRlLmNhbGwodSwgby5nZXRCdWZmZXIuY2FsbCh1KSkgJiYgay5sZW5ndGggPiAwICYmIGsubGVuZ3RoICE9PSBQICYmIDAgPT09IGtbMF0pIGZvciAodmFyIFMgPSBQOyB2b2lkIDAgIT09ICh4ID0gay5zaGlmdCgpKTsgKSBpZiAoeCA8IFMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IG5ldyBoLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodyA9IGYudmFsaWRQb3NpdGlvbnNbeF0pLmdlbmVyYXRlZElucHV0ID0gITAsIE8ua2V5ID0gdy5pbnB1dCwgKGMgPSBhLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKHUsIE8sICEwLCAhMSwgbiwgUykpICYmIHZvaWQgMCAhPT0gYy5wb3MgJiYgYy5wb3MgIT09IHggJiYgZi52YWxpZFBvc2l0aW9uc1tjLnBvc10gJiYgITAgPT09IGYudmFsaWRQb3NpdGlvbnNbYy5wb3NdLm1hdGNoLnN0YXRpYykgay5wdXNoKGMucG9zKTsgZWxzZSBpZiAoIWMpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ICYmIHAuY2FsbCh1LCBlLCBvLmdldEJ1ZmZlci5jYWxsKHUpLCBjID8gYy5mb3J3YXJkUG9zaXRpb24gOiB1LmNhcmV0UG9zLmJlZ2luLCByIHx8IG5ldyBoLkV2ZW50KFwiY2hlY2t2YWxcIiksIHIgJiYgKFwiaW5wdXRcIiA9PT0gci50eXBlICYmIHUudW5kb1ZhbHVlICE9PSBvLmdldEJ1ZmZlci5jYWxsKHUpLmpvaW4oXCJcIikgfHwgXCJwYXN0ZVwiID09PSByLnR5cGUpKSwgXG4gICAgICAgICAgICAgICAgICAgIGQuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHAoZSwgdCwgbiwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGUgPyBlLmlucHV0bWFzayA6IHRoaXMsIGMgPSBzLm9wdHMsIHUgPSBzLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYy5vbkJlZm9yZVdyaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGMub25CZWZvcmVXcml0ZS5jYWxsKHMsIGksIHQsIG4sIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZi5yZWZyZXNoRnJvbUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGYucmVmcmVzaEZyb21CdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwucmVmcmVzaEZyb21CdWZmZXIuY2FsbChzLCAhMCA9PT0gcCA/IHAgOiBwLnN0YXJ0LCBwLmVuZCwgZi5idWZmZXIgfHwgdCksIHQgPSBvLmdldEJ1ZmZlci5jYWxsKHMsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBuICYmIChuID0gdm9pZCAwICE9PSBmLmNhcmV0ID8gZi5jYXJldCA6IG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUgJiYgKGUuaW5wdXRtYXNrLl92YWx1ZVNldCh0LmpvaW4oXCJcIikpLCB2b2lkIDAgPT09IG4gfHwgdm9pZCAwICE9PSBpICYmIFwiYmx1clwiID09PSBpLnR5cGUgfHwgby5jYXJldC5jYWxsKHMsIGUsIG4sIHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAgIT09IGkgJiYgXCJrZXlkb3duXCIgPT09IGkudHlwZSAmJiAoaS5rZXkgPT09IHIua2V5cy5EZWxldGUgfHwgaS5rZXkgPT09IHIua2V5cy5CYWNrc3BhY2UpKSwgXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZS5pbnB1dG1hc2sud3JpdGVCdWZmZXJIb29rIHx8IGUuaW5wdXRtYXNrLndyaXRlQnVmZmVySG9vayhuKSwgITAgPT09IGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHUoZSksIGggPSBlLmlucHV0bWFzay5fdmFsdWVHZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrLnNraXBJbnB1dEV2ZW50ID0gITAsIGQudHJpZ2dlcihcImlucHV0XCIpLCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID09PSBvLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwocykuam9pbihcIlwiKSA/IGQudHJpZ2dlcihcImNsZWFyZWRcIikgOiAhMCA9PT0gbC5pc0NvbXBsZXRlLmNhbGwocywgdCkgJiYgZC50cmlnZ2VyKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjM5NDogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBpID0gdihuKDM5NzYpKSwgYSA9IHYobig3MzkyKSksIHIgPSB2KG4oNDk2MykpLCBvID0gbig5NzE2KSwgbCA9IHYobig5MzgwKSksIHMgPSBuKDc3NjApLCBjID0gbigxNTcpLCB1ID0gbigyMzkxKSwgZiA9IG4oODcxMSksIHAgPSBuKDcyMTUpLCBkID0gbig0NzEzKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGggPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtID0gbC5kZWZhdWx0LmRvY3VtZW50LCBnID0gXCJfaW5wdXRtYXNrX29wdHNcIjtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB5KGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIHkpKSByZXR1cm4gbmV3IHkoZSwgdCwgbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeUxpYiA9IHIuZGVmYXVsdCwgdGhpcy5lbCA9IHZvaWQgMCwgdGhpcy5ldmVudHMgPSB7fSwgdGhpcy5tYXNrc2V0ID0gdm9pZCAwLCBcbiAgICAgICAgICAgICAgICAgICAgITAgIT09IG4gJiYgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSA/IHQgPSBlIDogKHQgPSB0IHx8IHt9LCBcbiAgICAgICAgICAgICAgICAgICAgZSAmJiAodC5hbGlhcyA9IGUpKSwgdGhpcy5vcHRzID0gci5kZWZhdWx0LmV4dGVuZCghMCwge30sIHRoaXMuZGVmYXVsdHMsIHQpLCB0aGlzLm5vTWFza3NDYWNoZSA9IHQgJiYgdm9pZCAwICE9PSB0LmRlZmluaXRpb25zLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyT3B0aW9ucyA9IHQgfHwge30sIGsodGhpcy5vcHRzLmFsaWFzLCB0LCB0aGlzLm9wdHMpKSwgdGhpcy5yZWZyZXNoVmFsdWUgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb1ZhbHVlID0gdm9pZCAwLCB0aGlzLiRlbCA9IHZvaWQgMCwgdGhpcy5za2lwSW5wdXRFdmVudCA9ICExLCB0aGlzLnZhbGlkYXRpb25FdmVudCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZ25vcmFibGUgPSAhMSwgdGhpcy5tYXhMZW5ndGgsIHRoaXMubW91c2VFbnRlciA9ICExLCB0aGlzLmNsaWNrZWQgPSAwLCB0aGlzLm9yaWdpbmFsUGxhY2Vob2xkZXIgPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29tcG9zaW5nID0gITEsIHRoaXMuaGFzQWx0ZXJuYXRvciA9ICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB5LnByb3RvdHlwZS5hbGlhc2VzW2VdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA/IChpLmFsaWFzICYmIGsoaS5hbGlhcywgdm9pZCAwLCBuKSwgci5kZWZhdWx0LmV4dGVuZCghMCwgbiwgaSksIHIuZGVmYXVsdC5leHRlbmQoITAsIG4sIHQpLCBcbiAgICAgICAgICAgICAgICAgICAgITApIDogKG51bGwgPT09IG4ubWFzayAmJiAobi5tYXNrID0gZSksICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeS5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHM6IGkuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IGEuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNlczoge30sXG4gICAgICAgICAgICAgICAgICAgIG1hc2tzQ2FjaGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICBpMThuOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0IGlzUlRMKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5pc1JUTCB8fCB0aGlzLm9wdHMubnVtZXJpY0lucHV0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAoZSA9IG0uZ2V0RWxlbWVudEJ5SWQoZSkgfHwgbS5xdWVyeVNlbGVjdG9yQWxsKGUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSA9IGUubm9kZU5hbWUgPyBbIGUgXSA6IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW10uc2xpY2UuY2FsbChlKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gci5kZWZhdWx0LmV4dGVuZCghMCwge30sIHQub3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKGUsIHQsIG4sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYSh0LCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IFwiXCIgPT09IGkgPyB0IDogaSArIFwiLVwiICsgdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IChhID0gdm9pZCAwICE9PSBhID8gYSA6IGUuZ2V0QXR0cmlidXRlKHIpKSAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYSAmJiAoMCA9PT0gdC5pbmRleE9mKFwib25cIikgPyBhID0gbC5kZWZhdWx0W2FdIDogXCJmYWxzZVwiID09PSBhID8gYSA9ICExIDogXCJ0cnVlXCIgPT09IGEgJiYgKGEgPSAhMCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5bdF0gPSBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHQuaW1wb3J0RGF0YUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvLCBzLCBjLCB1LCBmID0gZS5nZXRBdHRyaWJ1dGUoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiAmJiBcIlwiICE9PSBmICYmIChmID0gZi5yZXBsYWNlKC8nL2csICdcIicpLCBzID0gSlNPTi5wYXJzZShcIntcIiArIGYgKyBcIn1cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMpIGZvciAodSBpbiBjID0gdm9pZCAwLCBzKSBpZiAoXCJhbGlhc1wiID09PSB1LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gc1t1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobyBpbiBhKFwiYWxpYXNcIiwgYyksIG4uYWxpYXMgJiYgayhuLmFsaWFzLCBuLCB0KSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSBmb3IgKHUgaW4gYyA9IHZvaWQgMCwgcykgaWYgKHUudG9Mb3dlckNhc2UoKSA9PT0gby50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBzW3VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYShvLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRlZmF1bHQuZXh0ZW5kKCEwLCB0LCBuKSwgKFwicnRsXCIgPT09IGUuZGlyIHx8IHQucmlnaHRBbGlnbikgJiYgKGUuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwicnRsXCIgPT09IGUuZGlyIHx8IHQubnVtZXJpY0lucHV0KSAmJiAoZS5kaXIgPSBcImx0clwiLCBlLnJlbW92ZUF0dHJpYnV0ZShcImRpclwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaXNSVEwgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhuKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlLCBpLCByLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgdC51c2VyT3B0aW9ucyksIHQuZGF0YUF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSAoMCwgdS5nZW5lcmF0ZU1hc2tTZXQpKGksIHQubm9NYXNrc0NhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBhICYmICh2b2lkIDAgIT09IGUuaW5wdXRtYXNrICYmIChlLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgZS5pbnB1dG1hc2sucmVtb3ZlKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgPSBuZXcgeSh2b2lkIDAsIHZvaWQgMCwgITApLCBlLmlucHV0bWFzay5vcHRzID0gaSwgZS5pbnB1dG1hc2subm9NYXNrc0NhY2hlID0gdC5ub01hc2tzQ2FjaGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay51c2VyT3B0aW9ucyA9IHIuZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0LnVzZXJPcHRpb25zKSwgZS5pbnB1dG1hc2suZWwgPSBlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2suJGVsID0gKDAsIHIuZGVmYXVsdCkoZSksIGUuaW5wdXRtYXNrLm1hc2tzZXQgPSBhLCByLmRlZmF1bHQuZGF0YShlLCBnLCB0LnVzZXJPcHRpb25zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubWFzay5jYWxsKGUuaW5wdXRtYXNrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBlICYmIGVbMF0gJiYgZVswXS5pbnB1dG1hc2sgfHwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IHRoaXMub3B0c1tlXSA6IFwib2JqZWN0XCIgPT09IGgoZSkgPyAoci5kZWZhdWx0LmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSB0ICYmIHRoaXMubWFzayh0aGlzLmVsKSwgdGhpcykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVubWFza2VkdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIHUuZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuZWwgfHwgdm9pZCAwICE9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVNYXNrICYmIHRoaXMub3B0cy5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0aGlzLm9wdHMpIHx8IGUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hlY2tWYWwuY2FsbCh0aGlzLCB2b2lkIDAsICExLCAhMSwgdCksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUgJiYgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUuY2FsbCh0aGlzLCB2b2lkIDAsIGYuZ2V0QnVmZmVyLmNhbGwodGhpcyksIDAsIHRoaXMub3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy51bm1hc2tlZHZhbHVlLmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZGVmYXVsdC5kYXRhKHRoaXMuZWwsIGcsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5vcHRzLmF1dG9Vbm1hc2sgPyAoMCwgcy51bm1hc2tlZHZhbHVlKSh0aGlzLmVsKSA6IHRoaXMuX3ZhbHVlR2V0KHRoaXMub3B0cy5hdXRvVW5tYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlICE9PSBmLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodGhpcykuam9pbihcIlwiKSA/IHRoaXMuX3ZhbHVlU2V0KGUsIHRoaXMub3B0cy5hdXRvVW5tYXNrKSA6IHRoaXMuX3ZhbHVlU2V0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub2ZmKHRoaXMuZWwpLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuZWwpLCBcInZhbHVlXCIpICYmIHRoaXMuX192YWx1ZUdldCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogdGhpcy5fX3ZhbHVlR2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHRoaXMuX192YWx1ZVNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbS5fX2xvb2t1cEdldHRlcl9fICYmIHRoaXMuZWwuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpICYmIHRoaXMuX192YWx1ZUdldCAmJiAodGhpcy5lbC5fX2RlZmluZUdldHRlcl9fKFwidmFsdWVcIiwgdGhpcy5fX3ZhbHVlR2V0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5fX2RlZmluZVNldHRlcl9fKFwidmFsdWVcIiwgdGhpcy5fX3ZhbHVlU2V0KSksIHRoaXMuZWwuaW5wdXRtYXNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldGVtcHR5bWFzazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCB1LmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNSVEwgPyBmLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodGhpcykucmV2ZXJzZSgpIDogZi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHRoaXMpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIHUuZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmlzQ29tcGxldGUuY2FsbCh0aGlzLCBmLmdldEJ1ZmZlci5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgdS5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5tYXNrc2V0Lm1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gZC5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMCwgMCwgITEpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldC5tZXRhZGF0YS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lm1hc2sgIT09IGUgfHwgKGUgPSB0LCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldC5tZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgdS5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgJiYgdGhpcy5vcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIGUsIHRoaXMub3B0cykgfHwgZSkuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITAsICExLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBlID0gdGhpcy5pc1JUTCA/IGYuZ2V0QnVmZmVyLmNhbGwodGhpcykuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGYuZ2V0QnVmZmVyLmNhbGwodGhpcykuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSBmLmdldEJ1ZmZlci5jYWxsKHRoaXMpLCBpID0gZi5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbi5jYWxsKHRoaXMpLCBhID0gbi5sZW5ndGggLSAxOyBhID4gaSAmJiAhZi5pc01hc2suY2FsbCh0aGlzLCBhKTsgYS0tKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5zcGxpY2UoaSwgYSArIDEgLSBpKSwgcC5pc0NvbXBsZXRlLmNhbGwodGhpcywgbikgJiYgZSA9PT0gKHRoaXMuaXNSVEwgPyBmLmdldEJ1ZmZlci5jYWxsKHRoaXMpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBmLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgdS5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVNYXNrICYmIHRoaXMub3B0cy5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0aGlzLm9wdHMpIHx8IGUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITAsICExLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5pc1JUTCA/IGYuZ2V0QnVmZmVyLmNhbGwodGhpcykuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGYuZ2V0QnVmZmVyLmNhbGwodGhpcykuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLmdldG1ldGFkYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCAmJiAoMCwgci5kZWZhdWx0KSh0aGlzLmVsKS50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyBlIF0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmFseXNlTWFzazogdS5hbmFseXNlTWFza1xuICAgICAgICAgICAgICAgIH0sIHkuZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHIuZGVmYXVsdC5leHRlbmQoITAsIHkucHJvdG90eXBlLmRlZmF1bHRzLCBlKTtcbiAgICAgICAgICAgICAgICB9LCB5LmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByLmRlZmF1bHQuZXh0ZW5kKCEwLCB5LnByb3RvdHlwZS5kZWZpbml0aW9ucywgZSk7XG4gICAgICAgICAgICAgICAgfSwgeS5leHRlbmRBbGlhc2VzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByLmRlZmF1bHQuZXh0ZW5kKCEwLCB5LnByb3RvdHlwZS5hbGlhc2VzLCBlKTtcbiAgICAgICAgICAgICAgICB9LCB5LmZvcm1hdCA9IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHkodCkuZm9ybWF0KGUsIG4pO1xuICAgICAgICAgICAgICAgIH0sIHkudW5tYXNrID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geSh0KS51bm1hc2tlZHZhbHVlKGUpO1xuICAgICAgICAgICAgICAgIH0sIHkuaXNWYWxpZCA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHkodCkuaXNWYWxpZChlKTtcbiAgICAgICAgICAgICAgICB9LCB5LnJlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAoZSA9IG0uZ2V0RWxlbWVudEJ5SWQoZSkgfHwgbS5xdWVyeVNlbGVjdG9yQWxsKGUpKSwgKGUgPSBlLm5vZGVOYW1lID8gWyBlIF0gOiBlKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzayAmJiBlLmlucHV0bWFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sIHkuc2V0VmFsdWUgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgKGUgPSBtLmdldEVsZW1lbnRCeUlkKGUpIHx8IG0ucXVlcnlTZWxlY3RvckFsbChlKSksIChlID0gZS5ub2RlTmFtZSA/IFsgZSBdIDogZSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgPyBlLmlucHV0bWFzay5zZXRWYWx1ZSh0KSA6ICgwLCByLmRlZmF1bHQpKGUpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIHQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LCB5LmRlcGVuZGVuY3lMaWIgPSByLmRlZmF1bHQsIGwuZGVmYXVsdC5JbnB1dG1hc2sgPSB5O1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IHk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNTI5NjogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBpKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYSA9IGQobig5MzgwKSksIHIgPSBkKG4oMjM5NCkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gdFtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZW51bWVyYWJsZSA9IGEuZW51bWVyYWJsZSB8fCAhMSwgYS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGEgJiYgKGEud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIChyID0gYS5rZXksIG8gPSB2b2lkIDAsIG8gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IGkoZSkgfHwgbnVsbCA9PT0gZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlW1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG4uY2FsbChlLCB0IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IGkoYSkpIHJldHVybiBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gdCA/IFN0cmluZyA6IE51bWJlcikoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHIsIFwic3RyaW5nXCIpLCBcInN5bWJvbFwiID09PSBpKG8pID8gbyA6IFN0cmluZyhvKSksIGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByLCBvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB1KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhID0gcChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBwKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBSZWZsZWN0LmNvbnN0cnVjdChhLCBhcmd1bWVudHMsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG4gPSBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIChcIm9iamVjdFwiID09PSBpKHQpIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCkpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHRoaXMsIG4pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE1hcCA/IG5ldyBNYXAgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IGUgfHwgIWZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZSkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmhhcyhlKSkgcmV0dXJuIHQuZ2V0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2V0KGUsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYyhlLCBhcmd1bWVudHMsIHAodGhpcykuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGYobiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHMoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYyA9IHUoKSA/IFJlZmxlY3QuY29uc3RydWN0LmJpbmQoKSA6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gWyBudWxsIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2guYXBwbHkoaSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyAoRnVuY3Rpb24uYmluZC5hcHBseShlLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiAmJiBmKGEsIG4ucHJvdG90eXBlKSwgYTtcbiAgICAgICAgICAgICAgICAgICAgfSwgYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIChmdW5jdGlvbigpIHt9KSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLl9fcHJvdG9fXyA9IHQsIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIGYoZSwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBwKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGggPSBhLmRlZmF1bHQuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGggJiYgaC5oZWFkICYmIGguaGVhZC5hdHRhY2hTaGFkb3cgJiYgYS5kZWZhdWx0LmN1c3RvbUVsZW1lbnRzICYmIHZvaWQgMCA9PT0gYS5kZWZhdWx0LmN1c3RvbUVsZW1lbnRzLmdldChcImlucHV0LW1hc2tcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0ICYmIHQucHJvdG90eXBlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdCAmJiBmKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0LCBuLCBpLCBhID0gbChzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odGhpcywgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAoZSA9IGEuY2FsbCh0aGlzKSkuZ2V0QXR0cmlidXRlTmFtZXMoKSwgbiA9IGUuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJjbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZS5pbnB1dCA9IGguY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCBlLmlucHV0LnR5cGUgPSBcInRleHRcIiwgbi5hcHBlbmRDaGlsZChlLmlucHV0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIGkpICYmIGUuaW5wdXQuc2V0QXR0cmlidXRlKHRbaV0sIGUuZ2V0QXR0cmlidXRlKHRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IG5ldyByLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uZGF0YUF0dHJpYnV0ZSA9IFwiXCIsIG8ubWFzayhlLmlucHV0KSwgZS5pbnB1dC5pbnB1dG1hc2suc2hhZG93Um9vdCA9IG4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9IHMsIChuID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKGUsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IF0pICYmIG8odC5wcm90b3R5cGUsIG4pLCBpICYmIG8odCwgaSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInByb3RvdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICExXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgcztcbiAgICAgICAgICAgICAgICAgICAgfShzKEhUTUxFbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJpbnB1dC1tYXNrXCIsIHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyODM5OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIG4oZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbnVsbCA9PSBlID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIGEsIHIsIG8sIGwgPSBbXSwgcyA9ICEwLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSAobiA9IG4uY2FsbChlKSkubmV4dCwgMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChuKSAhPT0gbikgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShzID0gKGkgPSByLmNhbGwobikpLmRvbmUpICYmIChsLnB1c2goaS52YWx1ZSksIGwubGVuZ3RoICE9PSB0KTsgcyA9ICEwKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gITAsIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMgJiYgbnVsbCAhPSBuLnJldHVybiAmJiAobyA9IG4ucmV0dXJuKCksIE9iamVjdChvKSAhPT0gbykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSB0aHJvdyBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBhKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gbiAmJiBlLmNvbnN0cnVjdG9yICYmIChuID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBuIHx8IFwiU2V0XCIgPT09IG4pIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IG4gfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT0gdCB8fCB0ID4gZS5sZW5ndGgpICYmICh0ID0gZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMCwgaSA9IG5ldyBBcnJheSh0KTsgbiA8IHQ7IG4rKykgaVtuXSA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBPYmplY3Qua2V5cyhlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgJiYgKGkgPSBpLmZpbHRlcigoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHQpLmVudW1lcmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpLCBuLnB1c2guYXBwbHkobiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gbihlKSB8fCBudWxsID09PSBlKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGVbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5jYWxsKGUsIHQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gbihhKSkgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcInN0cmluZ1wiID09PSB0ID8gU3RyaW5nIDogTnVtYmVyKShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZSwgXCJzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW1ib2xcIiA9PT0gbih0KSA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgICAgICAgICAgIH0odCkpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBlW3RdID0gaSwgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmtleXMgPSB0LmtleUNvZGUgPSB2b2lkIDAsIHQudG9LZXkgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzW2VdIHx8ICh0ID8gU3RyaW5nLmZyb21DaGFyQ29kZShlKSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoZSkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfSwgdC50b0tleUNvZGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsW2VdO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGwgPSB0LmtleUNvZGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAxOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG51bGwgIT0gYXJndW1lbnRzW3RdID8gYXJndW1lbnRzW3RdIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICB0ICUgMiA/IHIoT2JqZWN0KG4pLCAhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8oZSwgdCwgblt0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG4pKSA6IHIoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobiwgdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgIH0oe1xuICAgICAgICAgICAgICAgICAgICBjOiA2NyxcbiAgICAgICAgICAgICAgICAgICAgeDogODgsXG4gICAgICAgICAgICAgICAgICAgIHo6IDkwLFxuICAgICAgICAgICAgICAgICAgICBCQUNLU1BBQ0VfU0FGQVJJOiAxMjcsXG4gICAgICAgICAgICAgICAgICAgIEVudGVyOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgTWV0YV9MRUZUOiA5MSxcbiAgICAgICAgICAgICAgICAgICAgTWV0YV9SSUdIVDogOTIsXG4gICAgICAgICAgICAgICAgICAgIFNwYWNlOiAzMlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgQWx0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgQWx0R3JhcGg6IDE4LFxuICAgICAgICAgICAgICAgICAgICBBcnJvd0Rvd246IDQwLFxuICAgICAgICAgICAgICAgICAgICBBcnJvd0xlZnQ6IDM3LFxuICAgICAgICAgICAgICAgICAgICBBcnJvd1JpZ2h0OiAzOSxcbiAgICAgICAgICAgICAgICAgICAgQXJyb3dVcDogMzgsXG4gICAgICAgICAgICAgICAgICAgIEJhY2tzcGFjZTogOCxcbiAgICAgICAgICAgICAgICAgICAgQ2Fwc0xvY2s6IDIwLFxuICAgICAgICAgICAgICAgICAgICBDb250cm9sOiAxNyxcbiAgICAgICAgICAgICAgICAgICAgQ29udGV4dE1lbnU6IDkzLFxuICAgICAgICAgICAgICAgICAgICBEZWFkOiAyMjEsXG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZTogNDYsXG4gICAgICAgICAgICAgICAgICAgIEVuZDogMzUsXG4gICAgICAgICAgICAgICAgICAgIEVzY2FwZTogMjcsXG4gICAgICAgICAgICAgICAgICAgIEYxOiAxMTIsXG4gICAgICAgICAgICAgICAgICAgIEYyOiAxMTMsXG4gICAgICAgICAgICAgICAgICAgIEYzOiAxMTQsXG4gICAgICAgICAgICAgICAgICAgIEY0OiAxMTUsXG4gICAgICAgICAgICAgICAgICAgIEY1OiAxMTYsXG4gICAgICAgICAgICAgICAgICAgIEY2OiAxMTcsXG4gICAgICAgICAgICAgICAgICAgIEY3OiAxMTgsXG4gICAgICAgICAgICAgICAgICAgIEY4OiAxMTksXG4gICAgICAgICAgICAgICAgICAgIEY5OiAxMjAsXG4gICAgICAgICAgICAgICAgICAgIEYxMDogMTIxLFxuICAgICAgICAgICAgICAgICAgICBGMTE6IDEyMixcbiAgICAgICAgICAgICAgICAgICAgRjEyOiAxMjMsXG4gICAgICAgICAgICAgICAgICAgIEhvbWU6IDM2LFxuICAgICAgICAgICAgICAgICAgICBJbnNlcnQ6IDQ1LFxuICAgICAgICAgICAgICAgICAgICBOdW1Mb2NrOiAxNDQsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VEb3duOiAzNCxcbiAgICAgICAgICAgICAgICAgICAgUGFnZVVwOiAzMyxcbiAgICAgICAgICAgICAgICAgICAgUGF1c2U6IDE5LFxuICAgICAgICAgICAgICAgICAgICBQcmludFNjcmVlbjogNDQsXG4gICAgICAgICAgICAgICAgICAgIFByb2Nlc3M6IDIyOSxcbiAgICAgICAgICAgICAgICAgICAgU2hpZnQ6IDE2LFxuICAgICAgICAgICAgICAgICAgICBTY3JvbGxMb2NrOiAxNDUsXG4gICAgICAgICAgICAgICAgICAgIFRhYjogOSxcbiAgICAgICAgICAgICAgICAgICAgVW5pZGVudGlmaWVkOiAyMjlcbiAgICAgICAgICAgICAgICB9KSwgcyA9IE9iamVjdC5lbnRyaWVzKGwpLnJlZHVjZSgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGkodCwgMiksIGEgPSBuWzBdLCByID0gblsxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbcl0gPSB2b2lkIDAgPT09IGVbcl0gPyBhIDogZVtyXSwgZTtcbiAgICAgICAgICAgICAgICB9KSwge30pO1xuICAgICAgICAgICAgICAgIHQua2V5cyA9IE9iamVjdC5lbnRyaWVzKGwpLnJlZHVjZSgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGkodCwgMiksIGEgPSBuWzBdO1xuICAgICAgICAgICAgICAgICAgICBuWzFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZVthXSA9IFwiU3BhY2VcIiA9PT0gYSA/IFwiIFwiIDogYSwgZTtcbiAgICAgICAgICAgICAgICB9KSwge30pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDIzOTE6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuYW5hbHlzZU1hc2sgPSBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBhLCBzLCBjLCB1LCBmLCBwID0gLyg/Ols/KitdfFxce1swLTkrKl0rKD86LFswLTkrKl0qKT8oPzpcXHxbMC05KypdKik/XFx9KXxbXi4/KiteJHtbXSgpfFxcXFxdK3wuL2csIGQgPSAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLCBoID0gITEsIHYgPSBuZXcgby5kZWZhdWx0LCBtID0gW10sIGcgPSBbXSwgeSA9ICExO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBrKGUsIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSB2b2lkIDAgIT09IGEgPyBhIDogZS5tYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5tYXRjaGVzW2EgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IGkuaW5kZXhPZihcIltcIikgfHwgaCAmJiAvXFxcXGR8XFxcXHN8XFxcXHd8XFxcXHAvaS50ZXN0KGkpIHx8IFwiLlwiID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gbi5jYXNpbmcgPyBcImlcIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cXFxccFxcey4qfS9pLnRlc3QoaSkgJiYgKHMgKz0gXCJ1XCIpLCBlLm1hdGNoZXMuc3BsaWNlKGErKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG5ldyBSZWdFeHAoaSwgcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gbyA/IFwibWFzdGVyXCIgOiBvLmRlZiAhPT0gaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm9iamVjdFwiID09PSBsKG4ucGxhY2Vob2xkZXIpID8gbi5wbGFjZWhvbGRlclt2Lm1hdGNoZXMubGVuZ3RoXSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaCAmJiAoaSA9IGlbaS5sZW5ndGggLSAxXSksIGkuc3BsaXQoXCJcIikuZm9yRWFjaCgoZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gZS5tYXRjaGVzW2EgLSAxXSwgZS5tYXRjaGVzLnNwbGljZShhKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiAvW2Etel0vaS50ZXN0KG4uc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCB0KSA/IG5ldyBSZWdFeHAoXCJbXCIgKyAobi5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IHQpICsgXCJdXCIsIG4uY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gbyA/IFwibWFzdGVyXCIgOiBvLmRlZiAhPT0gdCAmJiAhMCAhPT0gby5zdGF0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IG4uc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCAhPT0gbi5zdGF0aWNEZWZpbml0aW9uU3ltYm9sID8gdCA6IFwib2JqZWN0XCIgPT09IGwobi5wbGFjZWhvbGRlcikgPyBuLnBsYWNlaG9sZGVyW3YubWF0Y2hlcy5sZW5ndGhdIDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiAoaCA/IFwiJ1wiIDogXCJcIikgKyB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbi5kZWZpbml0aW9ucyAmJiBuLmRlZmluaXRpb25zW2ldIHx8IG4udXNlUHJvdG90eXBlRGVmaW5pdGlvbnMgJiYgci5kZWZhdWx0LnByb3RvdHlwZS5kZWZpbml0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjICYmICFoID8gZS5tYXRjaGVzLnNwbGljZShhKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGMudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYy52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKGMudmFsaWRhdG9yLCBuLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3QgPSBjLnZhbGlkYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IC8uLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiBjLnN0YXRpYyB8fCAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IGMub3B0aW9uYWwgfHwgITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZk9wdGlvbmFsaXR5OiBjLm9wdGlvbmFsIHx8ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogdm9pZCAwID09PSBvIHx8IGMub3B0aW9uYWwgPyBcIm1hc3RlclwiIDogby5kZWYgIT09IChjLmRlZmluaXRpb25TeW1ib2wgfHwgaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogYy5jYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogYy5kZWZpbml0aW9uU3ltYm9sIHx8IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBjLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZDogYy5nZW5lcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IChlLm1hdGNoZXMuc3BsaWNlKGErKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogL1thLXpdL2kudGVzdChuLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgaSkgPyBuZXcgUmVnRXhwKFwiW1wiICsgKG4uc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBpKSArIFwiXVwiLCBuLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IG8gPyBcIm1hc3RlclwiIDogby5kZWYgIT09IGkgJiYgITAgIT09IG8uc3RhdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbi5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB2b2lkIDAgIT09IG4uc3RhdGljRGVmaW5pdGlvblN5bWJvbCA/IGkgOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogKGggPyBcIidcIiA6IFwiXCIpICsgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBoID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsoYyA9IG1bbS5sZW5ndGggLSAxXSwgYSksIGMuaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBtLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHUubWF0Y2hlcy5sZW5ndGg7IGUrKykgdS5tYXRjaGVzW2VdLmlzR3JvdXAgJiYgKHUubWF0Y2hlc1tlXS5pc0dyb3VwID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmxlbmd0aCA+IDAgPyAoYyA9IG1bbS5sZW5ndGggLSAxXSkubWF0Y2hlcy5wdXNoKHUpIDogdi5tYXRjaGVzLnB1c2godSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGsodiwgYSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24geChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG5ldyBvLmRlZmF1bHQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQub3Blbkdyb3VwID0gITEsIHQubWF0Y2hlcyA9IGUsIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocyA9IG0ucG9wKCkpLm9wZW5Hcm91cCA9ICExLCB2b2lkIDAgIT09IHMpIGlmIChtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGMgPSBtW20ubGVuZ3RoIC0gMV0pLm1hdGNoZXMucHVzaChzKSwgYy5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IG0ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdS5tYXRjaGVzLmxlbmd0aDsgZSsrKSB1Lm1hdGNoZXNbZV0uaXNHcm91cCA9ICExLCB1Lm1hdGNoZXNbZV0uYWx0ZXJuYXRvckdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0ubGVuZ3RoID4gMCA/IChjID0gbVttLmxlbmd0aCAtIDFdKS5tYXRjaGVzLnB1c2godSkgOiB2Lm1hdGNoZXMucHVzaCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugdi5tYXRjaGVzLnB1c2gocyk7IGVsc2UgYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuaXNRdWFudGlmaWVyICYmICh0ID0geChbIGUucG9wKCksIHQgXSkpLCB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgJiYgKG4ub3B0aW9uYWxtYXJrZXJbMF0gPSB2b2lkIDAsIG4ub3B0aW9uYWxtYXJrZXJbMV0gPSB2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtpID0gdCA/IGQuZXhlYyhlKSA6IHAuZXhlYyhlKTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSA9IGlbMF0sIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGEuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gXCJ7MCwxfVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcIntcIiArIGEgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ8XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBtLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSB4KHYubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLm9wZW5Hcm91cCA9ICEwLCBtLnB1c2goUyksIHYubWF0Y2hlcyA9IFtdLCB5ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiWzAtOV1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxccFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhICs9IGQuZXhlYyhlKVswXSwgYSArPSBkLmV4ZWMoZSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGgpIGIoKTsgZWxzZSBzd2l0Y2ggKGEuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJeXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCB8fCBiKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBuLmVzY2FwZUNoYXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9ICEwLCB0ICYmIGIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIG4ub3B0aW9uYWxtYXJrZXJbMV06XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugbi5ncm91cG1hcmtlclsxXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBuLm9wdGlvbmFsbWFya2VyWzBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0ucHVzaChuZXcgby5kZWZhdWx0KCExLCAhMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugbi5ncm91cG1hcmtlclswXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnB1c2gobmV3IG8uZGVmYXVsdCghMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugbi5xdWFudGlmaWVybWFya2VyWzBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBPID0gbmV3IG8uZGVmYXVsdCghMSwgITEsICEwKSwgXyA9IChhID0gYS5yZXBsYWNlKC9be30/XS9nLCBcIlwiKSkuc3BsaXQoXCJ8XCIpLCBNID0gX1swXS5zcGxpdChcIixcIiksIEUgPSBpc05hTihNWzBdKSA/IE1bMF0gOiBwYXJzZUludChNWzBdKSwgaiA9IDEgPT09IE0ubGVuZ3RoID8gRSA6IGlzTmFOKE1bMV0pID8gTVsxXSA6IHBhcnNlSW50KE1bMV0pLCBUID0gaXNOYU4oX1sxXSkgPyBfWzFdIDogcGFyc2VJbnQoX1sxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqXCIgIT09IEUgJiYgXCIrXCIgIT09IEUgfHwgKEUgPSBcIipcIiA9PT0gaiA/IDAgOiAxKSwgTy5xdWFudGlmaWVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaml0OiBUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQSA9IG0ubGVuZ3RoID4gMCA/IG1bbS5sZW5ndGggLSAxXS5tYXRjaGVzIDogdi5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID0gQS5wb3AoKSkuaXNHcm91cCB8fCAoaSA9IHgoWyBpIF0pKSwgQS5wdXNoKGkpLCBBLnB1c2goTyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBuLmFsdGVybmF0b3JtYXJrZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRCA9IChjID0gbVttLmxlbmd0aCAtIDFdKS5tYXRjaGVzW2MubWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZiA9IGMub3Blbkdyb3VwICYmICh2b2lkIDAgPT09IEQubWF0Y2hlcyB8fCAhMSA9PT0gRC5pc0dyb3VwICYmICExID09PSBELmlzQWx0ZXJuYXRvcikgPyBtLnBvcCgpIDogUChjLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmID0gUCh2Lm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmLmlzQWx0ZXJuYXRvcikgbS5wdXNoKGYpOyBlbHNlIGlmIChmLmFsdGVybmF0b3JHcm91cCA/ICh1ID0gbS5wb3AoKSwgZi5hbHRlcm5hdG9yR3JvdXAgPSAhMSkgOiB1ID0gbmV3IG8uZGVmYXVsdCghMSwgITEsICExLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUubWF0Y2hlcy5wdXNoKGYpLCBtLnB1c2godSksIGYub3Blbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3Blbkdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBMID0gbmV3IG8uZGVmYXVsdCghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEwuYWx0ZXJuYXRvckdyb3VwID0gITAsIG0ucHVzaChMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeSAmJiB3KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO20ubGVuZ3RoID4gMDsgKSBzID0gbS5wb3AoKSwgdi5tYXRjaGVzLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgICAgIHYubWF0Y2hlcy5sZW5ndGggPiAwICYmICghZnVuY3Rpb24gZShpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICYmIGkubWF0Y2hlcyAmJiBpLm1hdGNoZXMuZm9yRWFjaCgoZnVuY3Rpb24oYSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gaS5tYXRjaGVzW3IgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodm9pZCAwID09PSBvIHx8IHZvaWQgMCA9PT0gby5tYXRjaGVzIHx8ICExID09PSBvLmlzUXVhbnRpZmllcikgJiYgYSAmJiBhLmlzR3JvdXAgJiYgKGEuaXNHcm91cCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8IChrKGEsIG4uZ3JvdXBtYXJrZXJbMF0sIDApLCAhMCAhPT0gYS5vcGVuR3JvdXAgJiYgayhhLCBuLmdyb3VwbWFya2VyWzFdKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KHYpLCBnLnB1c2godikpO1xuICAgICAgICAgICAgICAgICAgICAobi5udW1lcmljSW5wdXQgfHwgbi5pc1JUTCkgJiYgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHQubWF0Y2hlcyA9IHQubWF0Y2hlcy5yZXZlcnNlKCksIHQubWF0Y2hlcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0Lm1hdGNoZXMsIGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBwYXJzZUludChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5tYXRjaGVzW2ldLmlzUXVhbnRpZmllciAmJiB0Lm1hdGNoZXNbYSArIDFdICYmIHQubWF0Y2hlc1thICsgMV0uaXNHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQubWF0Y2hlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5tYXRjaGVzLnNwbGljZShpLCAxKSwgdC5tYXRjaGVzLnNwbGljZShhICsgMSwgMCwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdC5tYXRjaGVzW2ldLm1hdGNoZXMgPyB0Lm1hdGNoZXNbaV0gPSBlKHQubWF0Y2hlc1tpXSkgOiB0Lm1hdGNoZXNbaV0gPSAoKG8gPSB0Lm1hdGNoZXNbaV0pID09PSBuLm9wdGlvbmFsbWFya2VyWzBdID8gbyA9IG4ub3B0aW9uYWxtYXJrZXJbMV0gOiBvID09PSBuLm9wdGlvbmFsbWFya2VyWzFdID8gbyA9IG4ub3B0aW9uYWxtYXJrZXJbMF0gOiBvID09PSBuLmdyb3VwbWFya2VyWzBdID8gbyA9IG4uZ3JvdXBtYXJrZXJbMV0gOiBvID09PSBuLmdyb3VwbWFya2VyWzFdICYmIChvID0gbi5ncm91cG1hcmtlclswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgfShnWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgICAgICAgfSwgdC5nZW5lcmF0ZU1hc2tTZXQgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5yZXBlYXQsIGkgPSB0Lmdyb3VwbWFya2VyLCByID0gdC5xdWFudGlmaWVybWFya2VyLCBvID0gdC5rZWVwU3RhdGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiAwIHx8IFwiKlwiID09PSBuIHx8IFwiK1wiID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBcIipcIiA9PT0gbiA/IDAgOiBcIitcIiA9PT0gbiA/IDEgOiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsICE9IG4pIGUgPSBpWzBdICsgZSArIGlbMV0gKyByWzBdICsgbCArIFwiLFwiICsgbiArIHJbMV07IGVsc2UgZm9yICh2YXIgYyA9IGUsIHUgPSAxOyB1IDwgbDsgdSsrKSBlICs9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGUubWF0Y2gobmV3IFJlZ0V4cChcIiguKVxcXFxbKFteXFxcXF1dKilcXFxcXVwiLCBcImdcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgJiYgZi5mb3JFYWNoKChmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG51bGwgPT0gZSA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIGEsIHIsIG8sIGwgPSBbXSwgcyA9ICEwLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IChuID0gbi5jYWxsKGUpKS5uZXh0LCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChuKSAhPT0gbikgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKHMgPSAoaSA9IHIuY2FsbChuKSkuZG9uZSkgJiYgKGwucHVzaChpLnZhbHVlKSwgbC5sZW5ndGggIT09IHQpOyBzID0gITApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwLCBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzICYmIG51bGwgIT0gbi5yZXR1cm4gJiYgKG8gPSBuLnJldHVybigpLCBPYmplY3QobykgIT09IG8pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSB0aHJvdyBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gcyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gbiAmJiBlLmNvbnN0cnVjdG9yICYmIChuID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gbiB8fCBcIlNldFwiID09PSBuKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gbiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIHMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odC5zcGxpdChcIltcIiksIDIpLCByID0gaVswXSwgbyA9IGlbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBvLnJlcGxhY2UoXCJdXCIsIFwiXCIpLCBlID0gZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoKDAsIGEuZGVmYXVsdCkociksIFwiXFxcXFtcIikuY29uY2F0KCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KShvKSwgXCJcXFxcXVwiKSksIHIuY2hhckF0KDApID09PSBvLmNoYXJBdCgwKSA/IFwiKFwiLmNvbmNhdChyLCBcInxcIikuY29uY2F0KHIpLmNvbmNhdChvLCBcIilcIikgOiBcIlwiLmNvbmNhdChyLCBcIltcIikuY29uY2F0KG8sIFwiXVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcywgYywgdSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgIT09IGUgJiYgXCJcIiAhPT0gZSB8fCAoKHUgPSBudWxsICE9PSBhLnJlZ2V4KSA/IGUgPSAoZSA9IGEucmVnZXgpLnJlcGxhY2UoL14oXFxeKSguKikoXFwkKSQvLCBcIiQyXCIpIDogKHUgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gXCIuKlwiKSksIDEgPT09IGUubGVuZ3RoICYmICExID09PSBhLmdyZWVkeSAmJiAwICE9PSBhLnJlcGVhdCAmJiAoYS5wbGFjZWhvbGRlciA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBvKGUsIGEpLCBjID0gdSA/IFwicmVnZXhfXCIgKyBhLnJlZ2V4IDogYS5udW1lcmljSW5wdXQgPyBlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBhLmtlZXBTdGF0aWMgJiYgKGMgPSBcImtzX1wiICsgYS5rZWVwU3RhdGljICsgYyksIFwib2JqZWN0XCIgPT09IGwoYS5wbGFjZWhvbGRlcikgJiYgKGMgPSBcInBoX1wiICsgSlNPTi5zdHJpbmdpZnkoYS5wbGFjZWhvbGRlcikgKyBjKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHIuZGVmYXVsdC5wcm90b3R5cGUubWFza3NDYWNoZVtjXSB8fCAhMCA9PT0gdCA/IChzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuOiByLmRlZmF1bHQucHJvdG90eXBlLmFuYWx5c2VNYXNrKGUsIHUsIGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYnVmZmVyOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrTGVuZ3RoOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaml0T2Zmc2V0OiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgITAgIT09IHQgJiYgKHIuZGVmYXVsdC5wcm90b3R5cGUubWFza3NDYWNoZVtjXSA9IHMsIHMgPSBpLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgci5kZWZhdWx0LnByb3RvdHlwZS5tYXNrc0NhY2hlW2NdKSkpIDogcyA9IGkuZGVmYXVsdC5leHRlbmQoITAsIHt9LCByLmRlZmF1bHQucHJvdG90eXBlLm1hc2tzQ2FjaGVbY10pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm1hc2sgJiYgKGUubWFzayA9IGUubWFzayhlKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUubWFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1hc2subGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IGUua2VlcFN0YXRpYyAmJiAoZS5rZWVwU3RhdGljID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5ncm91cG1hcmtlclswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUuaXNSVEwgPyBlLm1hc2sucmV2ZXJzZSgpIDogZS5tYXNrKS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUubGVuZ3RoID4gMSAmJiAodSArPSBlLmFsdGVybmF0b3JtYXJrZXIpLCB2b2lkIDAgIT09IHQubWFzayAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQubWFzayA/IHUgKz0gdC5tYXNrIDogdSArPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgYyh1ICs9IGUuZ3JvdXBtYXJrZXJbMV0sIGUubWFzaywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1hc2sgPSBlLm1hc2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbiA9IGUubWFzayAmJiB2b2lkIDAgIT09IGUubWFzay5tYXNrICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5tYXNrLm1hc2sgPyBjKGUubWFzay5tYXNrLCBlLm1hc2ssIGUpIDogYyhlLm1hc2ssIGUubWFzaywgZSk7XG4gICAgICAgICAgICAgICAgICAgIG51bGwgPT09IGUua2VlcFN0YXRpYyAmJiAoZS5rZWVwU3RhdGljID0gITEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpID0gYyhuKDQ5NjMpKSwgYSA9IGMobig3MTg0KSksIHIgPSBjKG4oMjM5NCkpLCBvID0gYyhuKDk2OTUpKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgbChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDAsIGkgPSBuZXcgQXJyYXkodCk7IG4gPCB0OyBuKyspIGlbbl0gPSBlW25dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDE1NzogZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5tYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgdCA9IHRoaXMub3B0cywgbiA9IHRoaXMuZWwsIGMgPSB0aGlzLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIHIuRXZlbnRSdWxlci5vZmYobik7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LmdldEF0dHJpYnV0ZShcInR5cGVcIiksIGEgPSBcImlucHV0XCIgPT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICYmIG4uc3VwcG9ydHNJbnB1dFR5cGUuaW5jbHVkZXMoaSkgfHwgdC5pc0NvbnRlbnRFZGl0YWJsZSB8fCBcInRleHRhcmVhXCIgPT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhKSBpZiAoXCJpbnB1dFwiID09PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpKSwgYSA9IFwidGV4dFwiID09PSBzLnR5cGUsIHMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGEgPSBcInBhcnRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMSAhPT0gYSA/IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSwgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2sgPyB0aGlzLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPyB0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkgOiAtMSAhPT0gbC5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpIHx8ICEwICE9PSBuLm51bGxhYmxlID8gKHRoaXMuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgdGhpcy5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ID09PSB0aGlzICYmIG4uY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyAoZS5pc1JUTCA/IG8uY2xlYXJPcHRpb25hbFRhaWwuY2FsbChlLCBsLmdldEJ1ZmZlci5jYWxsKGUpLnNsaWNlKCkpLnJldmVyc2UoKSA6IG8uY2xlYXJPcHRpb25hbFRhaWwuY2FsbChlLCBsLmdldEJ1ZmZlci5jYWxsKGUpLnNsaWNlKCkpKS5qb2luKFwiXCIpIDogaS5jYWxsKHRoaXMpIDogXCJcIiA6IGkuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuY2FsbCh0aGlzLCBlKSwgdGhpcy5pbnB1dG1hc2sgJiYgKDAsIG8uYXBwbHlJbnB1dFZhbHVlKSh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0LmlucHV0bWFzay5fX3ZhbHVlR2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gbi5ub1ZhbHVlUGF0Y2hpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSwgXCJ2YWx1ZVwiKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmICYmIGYuZ2V0ICYmIGYuc2V0ID8gKGkgPSBmLmdldCwgYSA9IGYuc2V0LCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiB1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpIDogXCJpbnB1dFwiICE9PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiAoaSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBhID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiB1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50Ll9fbG9va3VwR2V0dGVyX18gJiYgdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgKGkgPSB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdC5fX2xvb2t1cFNldHRlcl9fKFwidmFsdWVcIiksIHQuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIHMpLCB0Ll9fZGVmaW5lU2V0dGVyX18oXCJ2YWx1ZVwiLCB1KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlucHV0bWFzay5fX3ZhbHVlR2V0ID0gaSwgdC5pbnB1dG1hc2suX192YWx1ZVNldCA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pbnB1dG1hc2suX3ZhbHVlR2V0ID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuaXNSVEwgJiYgITAgIT09IHQgPyBpLmNhbGwodGhpcy5lbCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBpLmNhbGwodGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHQuaW5wdXRtYXNrLl92YWx1ZVNldCA9IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuY2FsbCh0aGlzLmVsLCBudWxsID09IHQgPyBcIlwiIDogITAgIT09IG4gJiYgZS5pc1JUTCA/IHQuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdm9pZCAwID09PSBpICYmIChpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgYSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy52YWxIb29rcyAmJiAodm9pZCAwID09PSBjLnZhbEhvb2tzW3RdIHx8ICEwICE9PSBjLnZhbEhvb2tzW3RdLmlucHV0bWFza3BhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gYy52YWxIb29rc1t0XSAmJiBjLnZhbEhvb2tzW3RdLmdldCA/IGMudmFsSG9va3NbdF0uZ2V0IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBhID0gYy52YWxIb29rc1t0XSAmJiBjLnZhbEhvb2tzW3RdLnNldCA/IGMudmFsSG9va3NbdF0uc2V0IDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZSA9IHQsIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnZhbEhvb2tzW3RdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlucHV0bWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2spIHJldHVybiB0LmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gbC5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUsIHZvaWQgMCwgdm9pZCAwLCB0LmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zKSB8fCAhMCAhPT0gbi5udWxsYWJsZSA/IGEgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBhKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuaW5wdXRtYXNrICYmICgwLCBvLmFwcGx5SW5wdXRWYWx1ZSkoZSwgdCksIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bWFza3BhdGNoOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odC50eXBlKSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5FdmVudFJ1bGVyLm9uKGUsIFwibW91c2VlbnRlclwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLCB0ID0gZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICE9IChlLmlucHV0bWFzay5pc1JUTCA/IGwuZ2V0QnVmZmVyLmNhbGwoZS5pbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpIDogbC5nZXRCdWZmZXIuY2FsbChlLmlucHV0bWFzaykpLmpvaW4oXCJcIikgJiYgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uYXBwbHlJbnB1dFZhbHVlKShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSh0KSA6IHQuaW5wdXRtYXNrID0gdm9pZCAwLCBhO1xuICAgICAgICAgICAgICAgICAgICB9KG4sIHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUub3JpZ2luYWxQbGFjZWhvbGRlciA9IG4ucGxhY2Vob2xkZXIsIGUubWF4TGVuZ3RoID0gdm9pZCAwICE9PSBuID8gbi5tYXhMZW5ndGggOiB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IGUubWF4TGVuZ3RoICYmIChlLm1heExlbmd0aCA9IHZvaWQgMCksIFwiaW5wdXRNb2RlXCIgaW4gbiAmJiBudWxsID09PSBuLmdldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiKSAmJiAobi5pbnB1dE1vZGUgPSB0LmlucHV0bW9kZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLCB0LmlucHV0bW9kZSkpLCAhMCA9PT0gdSAmJiAodC5zaG93TWFza09uRm9jdXMgPSB0LnNob3dNYXNrT25Gb2N1cyAmJiAtMSA9PT0gWyBcImNjLW51bWJlclwiLCBcImNjLWV4cFwiIF0uaW5kZXhPZihuLmF1dG9jb21wbGV0ZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgaS5pcGhvbmUgJiYgKHQuaW5zZXJ0TW9kZVZpc3VhbCA9ICExLCBuLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIFwib2ZmXCIpKSwgci5FdmVudFJ1bGVyLm9uKG4sIFwic3VibWl0XCIsIGEuRXZlbnRIYW5kbGVycy5zdWJtaXRFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgci5FdmVudFJ1bGVyLm9uKG4sIFwicmVzZXRcIiwgYS5FdmVudEhhbmRsZXJzLnJlc2V0RXZlbnQpLCByLkV2ZW50UnVsZXIub24obiwgXCJibHVyXCIsIGEuRXZlbnRIYW5kbGVycy5ibHVyRXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuRXZlbnRSdWxlci5vbihuLCBcImZvY3VzXCIsIGEuRXZlbnRIYW5kbGVycy5mb2N1c0V2ZW50KSwgci5FdmVudFJ1bGVyLm9uKG4sIFwiaW52YWxpZFwiLCBhLkV2ZW50SGFuZGxlcnMuaW52YWxpZEV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICByLkV2ZW50UnVsZXIub24obiwgXCJjbGlja1wiLCBhLkV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudCksIHIuRXZlbnRSdWxlci5vbihuLCBcIm1vdXNlbGVhdmVcIiwgYS5FdmVudEhhbmRsZXJzLm1vdXNlbGVhdmVFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgci5FdmVudFJ1bGVyLm9uKG4sIFwibW91c2VlbnRlclwiLCBhLkV2ZW50SGFuZGxlcnMubW91c2VlbnRlckV2ZW50KSwgci5FdmVudFJ1bGVyLm9uKG4sIFwicGFzdGVcIiwgYS5FdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuRXZlbnRSdWxlci5vbihuLCBcImN1dFwiLCBhLkV2ZW50SGFuZGxlcnMuY3V0RXZlbnQpLCByLkV2ZW50UnVsZXIub24obiwgXCJjb21wbGV0ZVwiLCB0Lm9uY29tcGxldGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuRXZlbnRSdWxlci5vbihuLCBcImluY29tcGxldGVcIiwgdC5vbmluY29tcGxldGUpLCByLkV2ZW50UnVsZXIub24obiwgXCJjbGVhcmVkXCIsIHQub25jbGVhcmVkKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gdC5pbnB1dEV2ZW50T25seSAmJiByLkV2ZW50UnVsZXIub24obiwgXCJrZXlkb3duXCIsIGEuRXZlbnRIYW5kbGVycy5rZXlFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGkubW9iaWxlIHx8IHQuaW5wdXRFdmVudE9ubHkpICYmIG4ucmVtb3ZlQXR0cmlidXRlKFwibWF4TGVuZ3RoXCIpLCByLkV2ZW50UnVsZXIub24obiwgXCJpbnB1dFwiLCBhLkV2ZW50SGFuZGxlcnMuaW5wdXRGYWxsQmFja0V2ZW50KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgci5FdmVudFJ1bGVyLm9uKG4sIFwic2V0dmFsdWVcIiwgYS5FdmVudEhhbmRsZXJzLnNldFZhbHVlRXZlbnQpLCB2b2lkIDAgPT09IGUuYXBwbHlNYXNrSG9vayB8fCBlLmFwcGx5TWFza0hvb2soKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBsLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkuam9pbihcIlwiKSwgZS51bmRvVmFsdWUgPSBlLl92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IChuLmlucHV0bWFzay5zaGFkb3dSb290IHx8IG4ub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBuLmlucHV0bWFzay5fdmFsdWVHZXQoITApIHx8ICExID09PSB0LmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IGYgPT09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgby5hcHBseUlucHV0VmFsdWUpKG4sIG4uaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gbC5nZXRCdWZmZXIuY2FsbChlKS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICExID09PSBzLmlzQ29tcGxldGUuY2FsbChlLCBwKSAmJiB0LmNsZWFySW5jb21wbGV0ZSAmJiBsLnJlc2V0TWFza1NldC5jYWxsKGUsICExKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBmICE9PSBuICYmICgtMSA9PT0gbC5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpID8gcCA9IFtdIDogby5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKGUsIHApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCExID09PSB0LmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IHQuc2hvd01hc2tPbkZvY3VzICYmIGYgPT09IG4gfHwgXCJcIiAhPT0gbi5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSkgJiYgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ud3JpdGVCdWZmZXIpKG4sIHApLCBmID09PSBuICYmIGwuY2FyZXQuY2FsbChlLCBuLCBsLnNlZWtOZXh0LmNhbGwoZSwgbC5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpID0gbig5ODQ1KSwgYSA9IG4oNjAzMCksIHIgPSBuKDk3MTYpLCBvID0gbig3NzYwKSwgbCA9IG4oODcxMSksIHMgPSBuKDcyMTUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDk2OTU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uKGUsIHQsIG4sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gW10sIHRoaXMub3Blbkdyb3VwID0gZSB8fCAhMSwgdGhpcy5hbHRlcm5hdG9yR3JvdXAgPSAhMSwgdGhpcy5pc0dyb3VwID0gZSB8fCAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHQgfHwgITEsIHRoaXMuaXNRdWFudGlmaWVyID0gbiB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBpIHx8ICExLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWFudGlmaWVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzMTk0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJpbmNsdWRlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdCh0aGlzKSwgaSA9IG4ubGVuZ3RoID4+PiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IGkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwIHwgdCwgciA9IE1hdGgubWF4KGEgPj0gMCA/IGEgOiBpIC0gTWF0aC5hYnMoYSksIDApOyByIDwgaTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5bcl0gPT09IGUpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MzAyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBBcnJheS5wcm90b3R5cGUucmVkdWNlKSwgdCA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKSwgbiA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBBcnJheS5wcm90b3R5cGUuY29uY2F0KSwgaSA9IE9iamVjdC5rZXlzO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzIHx8IChPYmplY3QuZW50cmllcyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUoaShhKSwgKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuKGUsIFwic3RyaW5nXCIgPT0gdHlwZW9mIGkgJiYgdChhLCBpKSA/IFsgWyBpLCBhW2ldIF0gXSA6IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIFtdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3MTQ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZSh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgKE9iamVjdC5nZXRQcm90b3R5cGVPZiA9IFwib2JqZWN0XCIgPT09IGUoXCJ0ZXN0XCIuX19wcm90b19fKSA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuX19wcm90b19fO1xuICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0MDEzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzIHx8IChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiAhPSB0eXBlb2YgdCAmJiAodCA9IDApLCAhKHQgKyBlLmxlbmd0aCA+IHRoaXMubGVuZ3RoKSAmJiAtMSAhPT0gdGhpcy5pbmRleE9mKGUsIHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDg3MTE6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuY2FyZXQgPSBmdW5jdGlvbihlLCB0LCBuLCBpLCByKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvLCBsID0gdGhpcywgcyA9IHRoaXMub3B0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkgcmV0dXJuIFwic2VsZWN0aW9uU3RhcnRcIiBpbiBlICYmIFwic2VsZWN0aW9uRW5kXCIgaW4gZSA/ICh0ID0gZS5zZWxlY3Rpb25TdGFydCwgXG4gICAgICAgICAgICAgICAgICAgIG4gPSBlLnNlbGVjdGlvbkVuZCkgOiBhLmRlZmF1bHQuZ2V0U2VsZWN0aW9uID8gKG8gPSBhLmRlZmF1bHQuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSkuY29tbW9uQW5jZXN0b3JDb250YWluZXIucGFyZW50Tm9kZSAhPT0gZSAmJiBvLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICE9PSBlIHx8ICh0ID0gby5zdGFydE9mZnNldCwgXG4gICAgICAgICAgICAgICAgICAgIG4gPSBvLmVuZE9mZnNldCkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChuID0gKHQgPSAwIC0gKG8gPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKSkuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC1lLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpKSArIG8udGV4dC5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGkgPyB0IDogZi5jYWxsKGwsIHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpID8gbiA6IGYuY2FsbChsLCBuKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSAmJiAobiA9IGwuaXNSVEwgPyB0WzBdIDogdFsxXSwgdCA9IGwuaXNSVEwgPyB0WzFdIDogdFswXSksIFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHQuYmVnaW4gJiYgKG4gPSBsLmlzUlRMID8gdC5iZWdpbiA6IHQuZW5kLCB0ID0gbC5pc1JUTCA/IHQuZW5kIDogdC5iZWdpbiksIFxuICAgICAgICAgICAgICAgICAgICBcIm51bWJlclwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaSA/IHQgOiBmLmNhbGwobCwgdCksIG4gPSBcIm51bWJlclwiID09IHR5cGVvZiAobiA9IGkgPyBuIDogZi5jYWxsKGwsIG4pKSA/IG4gOiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBwYXJzZUludCgoKGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCBhLmRlZmF1bHQpLmdldENvbXB1dGVkU3R5bGUgPyAoZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IGEuZGVmYXVsdCkuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKSA6IGUuY3VycmVudFN0eWxlKS5mb250U2l6ZSkgKiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2Nyb2xsTGVmdCA9IGMgPiBlLnNjcm9sbFdpZHRoID8gYyA6IDAsIGUuaW5wdXRtYXNrLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogblxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcy5pbnNlcnRNb2RlVmlzdWFsICYmICExID09PSBzLmluc2VydE1vZGUgJiYgdCA9PT0gbiAmJiAociB8fCBuKyspLCBlID09PSAoZS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBlLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzZXRTZWxlY3Rpb25SYW5nZVwiIGluIGUpIGUuc2V0U2VsZWN0aW9uUmFuZ2UodCwgbik7IGVsc2UgaWYgKGEuZGVmYXVsdC5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLCB2b2lkIDAgPT09IGUuZmlyc3RDaGlsZCB8fCBudWxsID09PSBlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmFwcGVuZENoaWxkKHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uc2V0U3RhcnQoZS5maXJzdENoaWxkLCB0IDwgZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gdCA6IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnNldEVuZChlLmZpcnN0Q2hpbGQsIG4gPCBlLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGggPyBuIDogZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uY29sbGFwc2UoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGEuZGVmYXVsdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yZW1vdmVBbGxSYW5nZXMoKSwgcC5hZGRSYW5nZShvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZS5jcmVhdGVUZXh0UmFuZ2UgJiYgKChvID0gZS5jcmVhdGVUZXh0UmFuZ2UoKSkuY29sbGFwc2UoITApLCBvLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgbiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIHQpLCBvLnNlbGVjdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGUuaW5wdXRtYXNrLmNhcmV0SG9vayB8fCBlLmlucHV0bWFzay5jYXJldEhvb2suY2FsbChsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHQuZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0LCBuLCBpID0gdGhpcywgYSA9IGkubWFza3NldCwgbCA9IGkuZGVwZW5kZW5jeUxpYiwgYyA9IHMuY2FsbChpKSwgdSA9IHt9LCBmID0gYS52YWxpZFBvc2l0aW9uc1tjXSwgcCA9IG8uZ2V0TWFza1RlbXBsYXRlLmNhbGwoaSwgITAsIHMuY2FsbChpKSwgITAsICEwKSwgZCA9IHAubGVuZ3RoLCBoID0gdm9pZCAwICE9PSBmID8gZi5sb2NhdG9yLnNsaWNlKCkgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodCA9IGMgKyAxOyB0IDwgcC5sZW5ndGg7IHQrKykgaCA9IChuID0gby5nZXRUZXN0VGVtcGxhdGUuY2FsbChpLCB0LCBoLCB0IC0gMSkpLmxvY2F0b3Iuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgIHVbdF0gPSBsLmV4dGVuZCghMCwge30sIG4pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGYgJiYgdm9pZCAwICE9PSBmLmFsdGVybmF0aW9uID8gZi5sb2NhdG9yW2YuYWx0ZXJuYXRpb25dIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHQgPSBkIC0gMTsgdCA+IGMgJiYgKCgobiA9IHVbdF0pLm1hdGNoLm9wdGlvbmFsaXR5IHx8IG4ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIG4ubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgdiAmJiAodiAhPT0gdVt0XS5sb2NhdG9yW2YuYWx0ZXJuYXRpb25dICYmICEwICE9PSBuLm1hdGNoLnN0YXRpYyB8fCAhMCA9PT0gbi5tYXRjaC5zdGF0aWMgJiYgbi5sb2NhdG9yW2YuYWx0ZXJuYXRpb25dICYmIHIuY2hlY2tBbHRlcm5hdGlvbk1hdGNoLmNhbGwoaSwgbi5sb2NhdG9yW2YuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB2LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpKSAmJiBcIlwiICE9PSBvLmdldFRlc3RzLmNhbGwoaSwgdClbMF0uZGVmKSkgJiYgcFt0XSA9PT0gby5nZXRQbGFjZWhvbGRlci5jYWxsKGksIHQsIG4ubWF0Y2gpKTsgdC0tKSBkLS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbDogZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogdVtkXSA/IHVbZF0ubWF0Y2ggOiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgfSA6IGQ7XG4gICAgICAgICAgICAgICAgfSwgdC5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24oZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgYSwgciwgZiA9IHRoaXMsIHAgPSBmLm1hc2tzZXQsIGQgPSBmLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgIHQgJiYgKGYuaXNSVEwgPyBlLmVuZCA9IGUuYmVnaW4gOiBlLmJlZ2luID0gZS5lbmQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5iZWdpbiA9PT0gZS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobiA9IG4gfHwgZC5wb3NpdGlvbkNhcmV0T25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBsLmNhbGwoZikubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaWdub3JlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmQgPSBlLmJlZ2luID0gdS5jYWxsKGYsIHMuY2FsbChmKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJhZGl4Rm9jdXNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZi5jbGlja2VkID4gMSAmJiAwID09PSBwLnZhbGlkUG9zaXRpb25zLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGQucmFkaXhQb2ludCAmJiAwICE9PSBkLmRpZ2l0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBwLnZhbGlkUG9zaXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdFtlXSB8fCB2b2lkIDAgPT09IHRbZV0uaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA8IHUuY2FsbChmLCAtMSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGwuY2FsbChmKS5pbmRleE9mKGQucmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhID0gdC5sZW5ndGg7IGkgPCBhOyBpKyspIGlmICh0W2ldICYmIG4gPCBpICYmIHRbaV0uaW5wdXQgIT09IG8uZ2V0UGxhY2Vob2xkZXIuY2FsbChmLCBpKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUuYmVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gbC5jYWxsKGYpLmpvaW4oXCJcIikuaW5kZXhPZihkLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmVuZCA9IGUuYmVnaW4gPSBkLm51bWVyaWNJbnB1dCA/IHUuY2FsbChmLCBoKSA6IGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID0gZS5iZWdpbiwgYSA9IHMuY2FsbChmLCBpLCAhMCksIGkgPD0gKHIgPSB1LmNhbGwoZiwgLTEgIT09IGEgfHwgYy5jYWxsKGYsIDApID8gYSA6IC0xKSkpIGUuZW5kID0gZS5iZWdpbiA9IGMuY2FsbChmLCBpLCAhMSwgITApID8gaSA6IHUuY2FsbChmLCBpKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcC52YWxpZFBvc2l0aW9uc1thXSwgbSA9IG8uZ2V0VGVzdFRlbXBsYXRlLmNhbGwoZiwgciwgdiA/IHYubWF0Y2gubG9jYXRvciA6IHZvaWQgMCwgdiksIGcgPSBvLmdldFBsYWNlaG9sZGVyLmNhbGwoZiwgciwgbS5tYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBnICYmIGwuY2FsbChmKVtyXSAhPT0gZyAmJiAhMCAhPT0gbS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgITAgIT09IG0ubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWMuY2FsbChmLCByLCBkLmtlZXBTdGF0aWMsICEwKSAmJiBtLm1hdGNoLmRlZiA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSB1LmNhbGwoZiwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA+PSB5IHx8IGkgPT09IHIpICYmIChyID0geSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmQgPSBlLmJlZ2luID0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHQuZ2V0QnVmZmVyID0gbCwgdC5nZXRCdWZmZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlLl9idWZmZXIgJiYgKGUuX2J1ZmZlciA9IG8uZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITEsIDEpLCB2b2lkIDAgPT09IGUuYnVmZmVyICYmIChlLmJ1ZmZlciA9IGUuX2J1ZmZlci5zbGljZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLl9idWZmZXI7XG4gICAgICAgICAgICAgICAgfSwgdC5nZXRMYXN0VmFsaWRQb3NpdGlvbiA9IHMsIHQuaXNNYXNrID0gYywgdC5yZXNldE1hc2tTZXQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICB0LmJ1ZmZlciA9IHZvaWQgMCwgITAgIT09IGUgJiYgKHQudmFsaWRQb3NpdGlvbnMgPSBbXSwgdC5wID0gMCk7XG4gICAgICAgICAgICAgICAgICAgICExID09PSBlICYmICh0LnRlc3RzID0ge30sIHQuaml0T2Zmc2V0ID0ge30pO1xuICAgICAgICAgICAgICAgIH0sIHQuc2Vla05leHQgPSB1LCB0LnNlZWtQcmV2aW91cyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLCBpID0gZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlIDw9IDApIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtpID4gMCAmJiAoITAgPT09IHQgJiYgKCEwICE9PSBvLmdldFRlc3QuY2FsbChuLCBpKS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCAhYy5jYWxsKG4sIGksIHZvaWQgMCwgITApKSB8fCAhMCAhPT0gdCAmJiAhYy5jYWxsKG4sIGksIHZvaWQgMCwgITApKTsgKSBpLS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH0sIHQudHJhbnNsYXRlUG9zaXRpb24gPSBmO1xuICAgICAgICAgICAgICAgIHZhciBpLCBhID0gKGkgPSBuKDkzODApKSAmJiBpLl9fZXNNb2R1bGUgPyBpIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBpXG4gICAgICAgICAgICAgICAgfSwgciA9IG4oNzIxNSksIG8gPSBuKDQ3MTMpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIG4gPSB0Lm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IG4uYnVmZmVyICYmICEwICE9PSBlIHx8IChuLmJ1ZmZlciA9IG8uZ2V0TWFza1RlbXBsYXRlLmNhbGwodCwgITAsIHMuY2FsbCh0KSwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBuLl9idWZmZXIgJiYgKG4uX2J1ZmZlciA9IG4uYnVmZmVyLnNsaWNlKCkpKSwgbi5idWZmZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMubWFza3NldCwgYSA9IC0xLCByID0gLTEsIG8gPSBuIHx8IGkudmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDAsIHMgPSBvLmxlbmd0aDsgbCA8IHM7IGwrKykgb1tsXSAmJiAodCB8fCAhMCAhPT0gb1tsXS5nZW5lcmF0ZWRJbnB1dCkgJiYgKGwgPD0gZSAmJiAoYSA9IGwpLCBcbiAgICAgICAgICAgICAgICAgICAgbCA+PSBlICYmIChyID0gbCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgPT09IGEgfHwgYSA9PT0gZSA/IHIgOiAtMSA9PT0gciB8fCBlIC0gYSA8IHIgLSBlID8gYSA6IHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMsIGEgPSB0aGlzLm1hc2tzZXQsIHIgPSBvLmdldFRlc3RUZW1wbGF0ZS5jYWxsKGksIGUpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gci5kZWYgJiYgKHIgPSBvLmdldFRlc3QuY2FsbChpLCBlKS5tYXRjaCksICEwICE9PSByLnN0YXRpYykgcmV0dXJuIHIuZm47XG4gICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gbiAmJiB2b2lkIDAgIT09IGEudmFsaWRQb3NpdGlvbnNbZV0gJiYgITAgIT09IGEudmFsaWRQb3NpdGlvbnNbZV0uZ2VuZXJhdGVkSW5wdXQpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSB0ICYmIGUgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IG8uZ2V0VGVzdHMuY2FsbChpLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5sZW5ndGggPiAxICsgKFwiXCIgPT09IGxbbC5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG8uZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLmNhbGwoaSwgZSwgby5nZXRUZXN0cy5jYWxsKGksIGUpKSwgYyA9IG8uZ2V0UGxhY2Vob2xkZXIuY2FsbChpLCBlLCBzLm1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzLm1hdGNoLmRlZiAhPT0gYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gbiAmJiAobiA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IGUgKyAxOyBcIlwiICE9PSBvLmdldFRlc3QuY2FsbChpLCBhKS5tYXRjaC5kZWYgJiYgKCEwID09PSB0ICYmICghMCAhPT0gby5nZXRUZXN0LmNhbGwoaSwgYSkubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWMuY2FsbChpLCBhLCB2b2lkIDAsICEwKSkgfHwgITAgIT09IHQgJiYgIWMuY2FsbChpLCBhLCB2b2lkIDAsIG4pKTsgKSBhKys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm9wdHMsIG4gPSB0aGlzLmVsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNSVEwgfHwgXCJudW1iZXJcIiAhPSB0eXBlb2YgZSB8fCB0LmdyZWVkeSAmJiBcIlwiID09PSB0LnBsYWNlaG9sZGVyIHx8ICFuIHx8IChlID0gdGhpcy5fdmFsdWVHZXQoKS5sZW5ndGggLSBlKSA8IDAgJiYgKGUgPSAwKSwgXG4gICAgICAgICAgICAgICAgICAgIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQ3MTM6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGV0ZXJtaW5lVGVzdFRlbXBsYXRlID0gZiwgdC5nZXREZWNpc2lvblRha2VyID0gcywgdC5nZXRNYXNrVGVtcGxhdGUgPSBmdW5jdGlvbihlLCB0LCBuLCBpLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcywgbyA9IHRoaXMub3B0cywgbCA9IHRoaXMubWFza3NldCwgcyA9IG8uZ3JlZWR5O1xuICAgICAgICAgICAgICAgICAgICBhICYmIG8uZ3JlZWR5ICYmIChvLmdyZWVkeSA9ICExLCByLm1hc2tzZXQudGVzdHMgPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwLCBkLCB2LCBtLCBnID0gW10sIHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IGUgJiYgbC52YWxpZFBvc2l0aW9uc1t5XSkgZCA9ICh2ID0gYSAmJiBsLnZhbGlkUG9zaXRpb25zW3ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHZvaWQgMCA9PT0gbC52YWxpZFBvc2l0aW9uc1t5ICsgMV0gJiYgKCEwID09PSBsLnZhbGlkUG9zaXRpb25zW3ldLmdlbmVyYXRlZElucHV0IHx8IGwudmFsaWRQb3NpdGlvbnNbeV0uaW5wdXQgPT0gby5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIHkgPiAwKSA/IGYuY2FsbChyLCB5LCBoLmNhbGwociwgeSwgcCwgeSAtIDEpKSA6IGwudmFsaWRQb3NpdGlvbnNbeV0pLm1hdGNoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB2LmxvY2F0b3Iuc2xpY2UoKSwgZy5wdXNoKCEwID09PSBuID8gdi5pbnB1dCA6ICExID09PSBuID8gZC5uYXRpdmVEZWYgOiBjLmNhbGwociwgeSwgZCkpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gKHYgPSB1LmNhbGwociwgeSwgcCwgeSAtIDEpKS5tYXRjaCwgcCA9IHYubG9jYXRvci5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0gITAgIT09IGkgJiYgKCExICE9PSBvLmppdE1hc2tpbmcgPyBvLmppdE1hc2tpbmcgOiBkLmppdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPSAobSB8fCBsLnZhbGlkUG9zaXRpb25zW3kgLSAxXSkgJiYgZC5zdGF0aWMgJiYgZC5kZWYgIT09IG8uZ3JvdXBTZXBhcmF0b3IgJiYgbnVsbCA9PT0gZC5mbikgfHwgITEgPT09IGsgfHwgdm9pZCAwID09PSBrIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIGsgJiYgaXNGaW5pdGUoaykgJiYgayA+IHkgPyBnLnB1c2goITEgPT09IG4gPyBkLm5hdGl2ZURlZiA6IGMuY2FsbChyLCBnLmxlbmd0aCwgZCkpIDogbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICghMCAhPT0gZC5zdGF0aWMgfHwgXCJcIiAhPT0gZC5kZWYgfHwgdCA+IHkpO1xuICAgICAgICAgICAgICAgICAgICBcIlwiID09PSBnW2cubGVuZ3RoIC0gMV0gJiYgZy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IG4gJiYgdm9pZCAwICE9PSBsLm1hc2tMZW5ndGggfHwgKGwubWFza0xlbmd0aCA9IHkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uZ3JlZWR5ID0gcywgZztcbiAgICAgICAgICAgICAgICB9LCB0LmdldFBsYWNlaG9sZGVyID0gYywgdC5nZXRUZXN0ID0gcCwgdC5nZXRUZXN0VGVtcGxhdGUgPSB1LCB0LmdldFRlc3RzID0gaCwgdC5pc1N1YnNldE9mID0gZDtcbiAgICAgICAgICAgICAgICB2YXIgaSwgYSA9IChpID0gbigyMzk0KSkgJiYgaS5fX2VzTW9kdWxlID8gaSA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogaVxuICAgICAgICAgICAgICAgIH0sIHIgPSBuKDg3MTEpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBvKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAobnVsbCAhPSBlLmFsdGVybmF0aW9uID8gZS5tbG9jW3MoZSldIDogZS5sb2NhdG9yKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gbikgZm9yIChuID0gbi5zcGxpdChcIjpcIilbMF07IG4ubGVuZ3RoIDwgdDsgKSBuICs9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5sb2NhdG9yW2UuYWx0ZXJuYXRpb25dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiB0Lmxlbmd0aCA+IDAgJiYgKHQgPSB0LnNwbGl0KFwiLFwiKVswXSksIHZvaWQgMCAhPT0gdCA/IHQudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMsIGEgPSB0aGlzLm9wdHMsIGwgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09ICh0ID0gdCB8fCBwLmNhbGwoaSwgZSkubWF0Y2gpLnBsYWNlaG9sZGVyIHx8ICEwID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gdC5wbGFjZWhvbGRlciAmJiAhMCA9PT0gdC5zdGF0aWMgJiYgITAgIT09IHQuZ2VuZXJhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaSwgZSksIGMgPSByLnNlZWtOZXh0LmNhbGwoaSwgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuID8gZSA8PSBjIDogZSA8IGMpID8gYS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICYmIHQuc3RhdGljID8gdC5uYXRpdmVEZWYgOiB0LmRlZiA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5wbGFjZWhvbGRlciA/IHQucGxhY2Vob2xkZXIoYSkgOiB0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5wbGFjZWhvbGRlciA/IHQucGxhY2Vob2xkZXIoYSkgOiB0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gdC5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlID4gLTEgJiYgdm9pZCAwID09PSBsLnZhbGlkUG9zaXRpb25zW2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUsIGYgPSBoLmNhbGwoaSwgZSksIGQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYS5wbGFjZWhvbGRlciAmJiBmLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gZltmLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA/IDEgOiAwKSkgZm9yICh2YXIgdiA9IDA7IHYgPCBmLmxlbmd0aDsgdisrKSBpZiAoXCJcIiAhPT0gZlt2XS5tYXRjaC5kZWYgJiYgITAgIT09IGZbdl0ubWF0Y2gub3B0aW9uYWxpdHkgJiYgITAgIT09IGZbdl0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmICghMCA9PT0gZlt2XS5tYXRjaC5zdGF0aWMgfHwgdm9pZCAwID09PSB1IHx8ICExICE9PSBmW3ZdLm1hdGNoLmZuLnRlc3QodS5tYXRjaC5kZWYsIGwsIGUsICEwLCBhKSkgJiYgKGQucHVzaChmW3ZdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IGZbdl0ubWF0Y2guc3RhdGljICYmICh1ID0gZlt2XSksIGQubGVuZ3RoID4gMSAmJiAvWzAtOWEtYkEtWl0vLnRlc3QoZFswXS5tYXRjaC5kZWYpKSkgcmV0dXJuIGEucGxhY2Vob2xkZXIuY2hhckF0KGUgJSBhLnBsYWNlaG9sZGVyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5kZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT09IG8oYS5wbGFjZWhvbGRlcikgPyB0LmRlZiA6IGEucGxhY2Vob2xkZXIuY2hhckF0KGUgJSBhLnBsYWNlaG9sZGVyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0LnZhbGlkUG9zaXRpb25zW2VdIHx8IGYuY2FsbCh0aGlzLCBlLCBoLmNhbGwodGhpcywgZSwgdCA/IHQuc2xpY2UoKSA6IHQsIG4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5vcHRzLCBpID0gMCwgYSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gMCwgaSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5tYXRjaC5vcHRpb25hbGl0eSAmJiAoMCAhPT0gbiAmJiBuICE9PSBlLm1hdGNoLm9wdGlvbmFsaXR5ICYmIChpID0gITApLCAoMCA9PT0gbiB8fCBuID4gZS5tYXRjaC5vcHRpb25hbGl0eSkgJiYgKG4gPSBlLm1hdGNoLm9wdGlvbmFsaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIG4gJiYgKDAgPT0gZSB8fCAxID09IHQubGVuZ3RoID8gbiA9IDAgOiBpIHx8IChuID0gMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBlID4gMCA/IGUgLSAxIDogMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIsIG8sIHMsIGMgPSBsKHAuY2FsbCh0aGlzLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIG4uZ3JlZWR5ICYmIHQubGVuZ3RoID4gMSAmJiBcIlwiID09PSB0W3QubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIChpID0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgdC5sZW5ndGggLSBpOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gdFt1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBsKGYsIGMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gTWF0aC5hYnMociAtIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKCEwICE9PSBmLnVuTWF0Y2hlZEFsdGVybmF0aW9uU3RvcHBlZCB8fCB0LmZpbHRlcigoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMCAhPT0gZS51bk1hdGNoZWRBbHRlcm5hdGlvblN0b3BwZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkubGVuZ3RoIDw9IDEpICYmICh2b2lkIDAgPT09IG8gfHwgXCJcIiAhPT0gciAmJiBkIDwgbyB8fCBzICYmICFuLmdyZWVkeSAmJiBzLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHMubWF0Y2gub3B0aW9uYWxpdHkgLSBhID4gMCAmJiBcIm1hc3RlclwiID09PSBzLm1hdGNoLm5ld0Jsb2NrTWFya2VyICYmICghZi5tYXRjaC5vcHRpb25hbGl0eSB8fCBmLm1hdGNoLm9wdGlvbmFsaXR5IC0gYSA8IDEgfHwgIWYubWF0Y2gubmV3QmxvY2tNYXJrZXIpIHx8IHMgJiYgIW4uZ3JlZWR5ICYmIHMubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmICFmLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKG8gPSBkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi52YWxpZFBvc2l0aW9uc1tlXSA/IG4udmFsaWRQb3NpdGlvbnNbZV0gOiAodCB8fCBoLmNhbGwodGhpcywgZSkpWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaShlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBuID0gW10sIGkgPSAtMSwgYSA9IDAsIHIgPSBlLmxlbmd0aDsgYSA8IHI7IGErKykgaWYgKFwiLVwiID09PSBlLmNoYXJBdChhKSkgZm9yICh0ID0gZS5jaGFyQ29kZUF0KGEgKyAxKTsgKytpIDwgdDsgKSBuLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7IGVsc2UgaSA9IGUuY2hhckNvZGVBdChhKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLnB1c2goZS5jaGFyQXQoYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4uam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5tYXRjaC5kZWYgPT09IHQubWF0Y2gubmF0aXZlRGVmIHx8ICEoIShuLnJlZ2V4IHx8IGUubWF0Y2guZm4gaW5zdGFuY2VvZiBSZWdFeHAgJiYgdC5tYXRjaC5mbiBpbnN0YW5jZW9mIFJlZ0V4cCkgfHwgITAgPT09IGUubWF0Y2guc3RhdGljIHx8ICEwID09PSB0Lm1hdGNoLnN0YXRpYykgJiYgKFwiLlwiID09PSB0Lm1hdGNoLmZuLnNvdXJjZSB8fCAtMSAhPT0gaSh0Lm1hdGNoLmZuLnNvdXJjZS5yZXBsYWNlKC9bW1xcXS9dL2csIFwiXCIpKS5pbmRleE9mKGkoZS5tYXRjaC5mbi5zb3VyY2UucmVwbGFjZSgvW1tcXF0vXS9nLCBcIlwiKSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaChlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCByLCBvID0gdGhpcywgbCA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgcyA9IHRoaXMubWFza3NldCwgYyA9IHRoaXMub3B0cywgdSA9IHRoaXMuZWwsIHAgPSBzLm1hc2tUb2tlbiwgaCA9IHQgPyBuIDogMCwgdiA9IHQgPyB0LnNsaWNlKCkgOiBbIDAgXSwgbSA9IFtdLCBnID0gITEsIHkgPSB0ID8gdC5qb2luKFwiXCIpIDogXCJcIiwgayA9ICExO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBiKHQsIG4sIHIsIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYociwgbCwgcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHYoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IDAgPT09IHQubWF0Y2hlcy5pbmRleE9mKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiB8fCB0Lm1hdGNoZXMuZXZlcnkoKGZ1bmN0aW9uKGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMCA9PT0gaS5pc1F1YW50aWZpZXIgPyBuID0gdihlLCB0Lm1hdGNoZXNbYSAtIDFdKSA6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpLCBcIm1hdGNoZXNcIikgJiYgKG4gPSB2KGUsIGkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB3KGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocy50ZXN0c1tlXSB8fCBzLnZhbGlkUG9zaXRpb25zW2VdKSAmJiAocy52YWxpZFBvc2l0aW9uc1tlXSA/IFsgcy52YWxpZFBvc2l0aW9uc1tlXSBdIDogcy50ZXN0c1tlXSkuZXZlcnkoKGZ1bmN0aW9uKGUsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1sb2NbdF0pIHJldHVybiBpID0gZSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHZvaWQgMCAhPT0gbiA/IG4gOiBlLmFsdGVybmF0aW9uLCBsID0gdm9pZCAwICE9PSBlLmxvY2F0b3Jbb10gPyBlLmxvY2F0b3Jbb10udG9TdHJpbmcoKS5pbmRleE9mKHQpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZvaWQgMCA9PT0gYSB8fCBsIDwgYSkgJiYgLTEgIT09IGwgJiYgKGkgPSBlLCBhID0gbCksICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gaS5sb2NhdG9yW2kuYWx0ZXJuYXRpb25dLCBvID0gaS5tbG9jW3RdIHx8IGkubWxvY1tyXSB8fCBpLmxvY2F0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IG9bby5sZW5ndGggLSAxXS50b1N0cmluZygpLmluZGV4T2YoXCI6XCIpKSBvLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2xpY2UoKHZvaWQgMCAhPT0gbiA/IG4gOiBpLmFsdGVybmF0aW9uKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IG4gPyB3KGUsIHQpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBQKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwID09PSB0Lm1hdGNoLnN0YXRpYyAmJiAhMCAhPT0gbi5tYXRjaC5zdGF0aWMgJiYgbi5tYXRjaC5mbi50ZXN0KHQubWF0Y2guZGVmLCBzLCBlLCAhMSwgYywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBTKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLmFsdGVybmF0aW9uLCBpID0gdm9pZCAwID09PSB0IHx8IG4gPD0gdC5hbHRlcm5hdGlvbiAmJiAtMSA9PT0gZS5sb2NhdG9yW25dLnRvU3RyaW5nKCkuaW5kZXhPZih0LmxvY2F0b3Jbbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWkgJiYgbiA+IHQuYWx0ZXJuYXRpb24pIGZvciAodmFyIGEgPSAwOyBhIDwgbjsgYSsrKSBpZiAoZS5sb2NhdG9yW2FdICE9PSB0LmxvY2F0b3JbYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBhLCBpID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFpICYmIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubWxvYyA9IGUubWxvYyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5sb2NhdG9yW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBpICYmIChpID0gaS5zcGxpdChcIixcIilbMF0pLCB2b2lkIDAgPT09IGUubWxvY1tpXSAmJiAoZS5tbG9jW2ldID0gZS5sb2NhdG9yLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubWxvY1tpXS5wdXNoKFwiOlwiLmNvbmNhdChlLmFsdGVybmF0aW9uKSkpLCB2b2lkIDAgIT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSBpbiB0Lm1sb2MpIFwic3RyaW5nXCIgPT0gdHlwZW9mIGEgJiYgKGEgPSBwYXJzZUludChhLnNwbGl0KFwiLFwiKVswXSkpLCBlLm1sb2NbYSArIDBdID0gdC5tbG9jW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxvY2F0b3Jbbl0gPSBPYmplY3Qua2V5cyhlLm1sb2MpLmpvaW4oXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5hbHRlcm5hdGlvbiA+IG4gJiYgKGUuYWx0ZXJuYXRpb24gPSBuKSwgITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5hbHRlcm5hdGlvbiA9IHZvaWQgMCwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE8oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5sb2NhdG9yLmxlbmd0aCAhPT0gdC5sb2NhdG9yLmxlbmd0aCkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gZS5hbHRlcm5hdGlvbiArIDE7IG4gPCBlLmxvY2F0b3IubGVuZ3RoOyBuKyspIGlmIChlLmxvY2F0b3Jbbl0gIT09IHQubG9jYXRvcltuXSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoID4gZSArIGMuX21heFRlc3RQb3MpIHRocm93IG5ldyBFcnJvcihcIklucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuIFwiLmNvbmNhdChzLm1hc2spKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCA9PT0gZSAmJiB2b2lkIDAgPT09IHIubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRvcjogbC5yZXZlcnNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZDogeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sb2M6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAhci5vcHRpb25hbGl0eSB8fCB2b2lkIDAgIT09IHAgfHwgIShjLmRlZmluaXRpb25zICYmIGMuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdICYmIGMuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdLm9wdGlvbmFsIHx8IGEuZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdICYmIGEuZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdLm9wdGlvbmFsKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gITAsIGggPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSByLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNHcm91cCAmJiBwICE9PSByKSByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGYodC5tYXRjaGVzW3QubWF0Y2hlcy5pbmRleE9mKHIpICsgMV0sIGwsIHApKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNPcHRpb25hbCkgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByLCBhID0gbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGIociwgbiwgbCwgcCksIG0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLmZvckVhY2goKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA+PSBhICYmIChlLm1hdGNoLm9wdGlvbmFsaXR5ID0gZS5tYXRjaC5vcHRpb25hbGl0eSA/IGUubWF0Y2gub3B0aW9uYWxpdHkgKyAxIDogMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBpID0gbVttLmxlbmd0aCAtIDFdLm1hdGNoLCB2b2lkIDAgIT09IHAgfHwgIXYoaSwgdCkpIHJldHVybiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAhMCwgaCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNBbHRlcm5hdG9yKSByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBuID0gZS5tYXRjaGVzWzBdLm1hdGNoZXMgPyBlLm1hdGNoZXNbMF0ubWF0Y2hlcy5sZW5ndGggOiAxLCBpID0gMDsgaSA8IGUubWF0Y2hlcy5sZW5ndGggJiYgbiA9PT0gKHQgPSBlLm1hdGNoZXNbaV0ubWF0Y2hlcyA/IGUubWF0Y2hlc1tpXS5tYXRjaGVzLmxlbmd0aCA6IDEpOyBpKyspIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiAhPT0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uaGFzQWx0ZXJuYXRvciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEsIHYgPSByLCB5ID0gW10sIGIgPSBtLnNsaWNlKCksIHggPSBsLmxlbmd0aCwgXyA9IG4ubGVuZ3RoID4gMCA/IG4uc2hpZnQoKSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBfIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTSwgRSA9IGgsIGogPSBuLnNsaWNlKCksIFQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgXykgVCA9IF8uc3BsaXQoXCIsXCIpOyBlbHNlIGZvciAoTSA9IDA7IE0gPCB2Lm1hdGNoZXMubGVuZ3RoOyBNKyspIFQucHVzaChNLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHMuZXhjbHVkZXNbZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IFQuc2xpY2UoKSwgRCA9IDAsIEwgPSBzLmV4Y2x1ZGVzW2VdLmxlbmd0aDsgRCA8IEw7IEQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEMgPSBzLmV4Y2x1ZGVzW2VdW0RdLnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5sZW5ndGggPT0gQ1sxXSAmJiBULnNwbGljZShULmluZGV4T2YoQ1swXSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT09IFQubGVuZ3RoICYmIChkZWxldGUgcy5leGNsdWRlc1tlXSwgVCA9IEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoITAgPT09IGMua2VlcFN0YXRpYyB8fCBpc0Zpbml0ZShwYXJzZUludChjLmtlZXBTdGF0aWMpKSAmJiBFID49IGMua2VlcFN0YXRpYykgJiYgKFQgPSBULnNsaWNlKDAsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBCID0gMDsgQiA8IFQubGVuZ3RoOyBCKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTSA9IHBhcnNlSW50KFRbQl0pLCBtID0gW10sIG4gPSBcInN0cmluZ1wiID09IHR5cGVvZiBfICYmIHcoaCwgTSwgeCkgfHwgai5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSSA9IHYubWF0Y2hlc1tNXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEkgJiYgZihJLCBbIE0gXS5jb25jYXQobCksIHApKSByID0gITA7IGVsc2UgaWYgKDAgPT09IEIgJiYgKGsgPSBpKHYpKSwgSSAmJiBJLm1hdGNoZXMgJiYgSS5tYXRjaGVzLmxlbmd0aCA+IHYubWF0Y2hlc1swXS5tYXRjaGVzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBtLnNsaWNlKCksIGggPSBFLCBtID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFIgPSAwOyBSIDwgYS5sZW5ndGg7IFIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEYgPSBhW1JdLCBOID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGLmFsdGVybmF0aW9uID0gRi5hbHRlcm5hdGlvbiB8fCB4LCBTKEYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgViA9IDA7IFYgPCB5Lmxlbmd0aDsgVisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEcgPSB5W1ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBfIHx8IHZvaWQgMCAhPT0gRi5hbHRlcm5hdGlvbiAmJiBULmluY2x1ZGVzKEYubG9jYXRvcltGLmFsdGVybmF0aW9uXS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRi5tYXRjaC5uYXRpdmVEZWYgPT09IEcubWF0Y2gubmF0aXZlRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gITAsIFMoRywgRik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZChGLCBHLCBjKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUyhGLCBHKSAmJiAoTiA9ICEwLCB5LnNwbGljZSh5LmluZGV4T2YoRyksIDAsIEYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKEcsIEYsIGMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTKEcsIEYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFAoRiwgRykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8oRiwgRykgfHwgdm9pZCAwICE9PSB1LmlucHV0bWFzay51c2VyT3B0aW9ucy5rZWVwU3RhdGljID8gUyhGLCBHKSAmJiAoTiA9ICEwLCB5LnNwbGljZSh5LmluZGV4T2YoRyksIDAsIEYpKSA6IGMua2VlcFN0YXRpYyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFAoRywgRikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMoRywgRik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4gfHwgeS5wdXNoKEYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBiLmNvbmNhdCh5KSwgaCA9IGUsIGcgPSBtLmxlbmd0aCA+IDAgJiYgaywgciA9IHkubGVuZ3RoID4gMCAmJiAhaywgayAmJiBnICYmICFyICYmIG0uZm9yRWFjaCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnVuTWF0Y2hlZEFsdGVybmF0aW9uU3RvcHBlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbiA9IGouc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSByID0gZih2Lm1hdGNoZXNbX10gfHwgdC5tYXRjaGVzW19dLCBbIF8gXS5jb25jYXQobCksIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc1F1YW50aWZpZXIgJiYgcCAhPT0gdC5tYXRjaGVzW3QubWF0Y2hlcy5pbmRleE9mKHIpIC0gMV0pIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSByLCBvID0gITEsIHUgPSBuLmxlbmd0aCA+IDAgPyBuLnNoaWZ0KCkgOiAwOyB1IDwgKGlzTmFOKGEucXVhbnRpZmllci5tYXgpID8gdSArIDEgOiBhLnF1YW50aWZpZXIubWF4KSAmJiBoIDw9IGU7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdC5tYXRjaGVzW3QubWF0Y2hlcy5pbmRleE9mKGEpIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSBmKHAsIFsgdSBdLmNvbmNhdChsKSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uZm9yRWFjaCgoZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSB4KHAsIHQubWF0Y2gpID8gdC5tYXRjaCA6IG1bbS5sZW5ndGggLSAxXS5tYXRjaCkub3B0aW9uYWxRdWFudGlmaWVyID0gdSA+PSBhLnF1YW50aWZpZXIubWluLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaml0ID0gKHUgKyAxKSAqIChwLm1hdGNoZXMuaW5kZXhPZihpKSArIDEpID4gYS5xdWFudGlmaWVyLmppdCwgaS5vcHRpb25hbFF1YW50aWZpZXIgJiYgdihpLCBwKSAmJiAoZyA9ICEwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSBlLCBjLmdyZWVkeSAmJiBudWxsID09IHMudmFsaWRQb3NpdGlvbnNbZSAtIDFdICYmIHUgPiBhLnF1YW50aWZpZXIubWluICYmIC0xICE9IFsgXCIqXCIsIFwiK1wiIF0uaW5kZXhPZihhLnF1YW50aWZpZXIubWF4KSAmJiAobS5wb3AoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdm9pZCAwKSwgbyA9ICEwLCByID0gITEpLCAhbyAmJiBpLmppdCAmJiAocy5qaXRPZmZzZXRbZV0gPSBwLm1hdGNoZXMubGVuZ3RoIC0gcC5tYXRjaGVzLmluZGV4T2YoaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIG8pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gYihyLCBuLCBsLCBwKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gbi5sZW5ndGggPiAwID8gbi5zaGlmdCgpIDogMDsgcCA8IHQubWF0Y2hlcy5sZW5ndGg7IHArKykgaWYgKCEwICE9PSB0Lm1hdGNoZXNbcF0uaXNRdWFudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBmKHQubWF0Y2hlc1twXSwgWyBwIF0uY29uY2F0KHIpLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAmJiBoID09PSBlKSByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCA+IGUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHgoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAtMSAhPSBlLm1hdGNoZXMuaW5kZXhPZih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuIHx8IGUubWF0Y2hlcy5mb3JFYWNoKChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlLm1hdGNoZXMgfHwgbiB8fCAobiA9IHgoZSwgdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB3LCBQID0gZSAtIDE7IHZvaWQgMCA9PT0gKHcgPSBzLnZhbGlkUG9zaXRpb25zW1BdIHx8IHMudGVzdHNbUF0pICYmIFAgPiAtMTsgKSBQLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB3ICYmIFAgPiAtMSAmJiAodiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodCkgfHwgKHQgPSBbIHQgXSksIHQubGVuZ3RoID4gMCAmJiAodm9pZCAwID09PSB0WzBdLmFsdGVybmF0aW9uIHx8ICEwID09PSBjLmtlZXBTdGF0aWMgPyAwID09PSAoaSA9IGYuY2FsbChvLCBlLCB0LnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSkubGVuZ3RoICYmIChpID0gdFswXS5sb2NhdG9yLnNsaWNlKCkpIDogdC5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBlLmRlZiAmJiAoMCA9PT0gaS5sZW5ndGggPyAobiA9IGUuYWx0ZXJuYXRpb24sIGkgPSBlLmxvY2F0b3Iuc2xpY2UoKSkgOiBlLmxvY2F0b3Jbbl0gJiYgLTEgPT09IGlbbl0udG9TdHJpbmcoKS5pbmRleE9mKGUubG9jYXRvcltuXSkgJiYgKGlbbl0gKz0gXCIsXCIgKyBlLmxvY2F0b3Jbbl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSwgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KFAsIHcpLCB5ID0gdi5qb2luKFwiXCIpLCBoID0gUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy50ZXN0c1tlXSAmJiBzLnRlc3RzW2VdWzBdLmNkID09PSB5KSByZXR1cm4gcy50ZXN0c1tlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFMgPSB2LnNoaWZ0KCk7IFMgPCBwLmxlbmd0aDsgUysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIocFtTXSwgdiwgWyBTIF0pICYmIGggPT09IGUgfHwgaCA+IGUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCA9PT0gbS5sZW5ndGggfHwgZykgJiYgbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IGsgJiYgMCA9PT0gbS5maWx0ZXIoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITAgIT09IGUudW5NYXRjaGVkQWx0ZXJuYXRpb25TdG9wcGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmxlbmd0aCA/IFsgMCBdIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBtbG9jOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNkOiB5XG4gICAgICAgICAgICAgICAgICAgIH0pLCB2b2lkIDAgIT09IHQgJiYgcy50ZXN0c1tlXSA/IHIgPSBsLmV4dGVuZCghMCwgW10sIG0pIDogKHMudGVzdHNbZV0gPSBsLmV4dGVuZCghMCwgW10sIG0pLCBcbiAgICAgICAgICAgICAgICAgICAgciA9IHMudGVzdHNbZV0pLCBtLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWF0Y2gub3B0aW9uYWxpdHkgPSBlLm1hdGNoLmRlZk9wdGlvbmFsaXR5IHx8ICExO1xuICAgICAgICAgICAgICAgICAgICB9KSksIHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDcyMTU6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuYWx0ZXJuYXRlID0gbCwgdC5jaGVja0FsdGVybmF0aW9uTWF0Y2ggPSBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGksIGEgPSB0aGlzLm9wdHMuZ3JlZWR5ID8gdCA6IHQuc2xpY2UoMCwgMSksIHIgPSAhMSwgbyA9IHZvaWQgMCAhPT0gbiA/IG4uc3BsaXQoXCIsXCIpIDogW10sIGwgPSAwOyBsIDwgby5sZW5ndGg7IGwrKykgLTEgIT09IChpID0gZS5pbmRleE9mKG9bbF0pKSAmJiBlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBlLmxlbmd0aDsgcysrKSBpZiAoYS5pbmNsdWRlcyhlW3NdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICAgICAgfSwgdC5oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbihlLCB0LCBuLCBpLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcywgdSA9IHRoaXMubWFza3NldCwgZiA9IHRoaXMub3B0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKChmLm51bWVyaWNJbnB1dCB8fCBjLmlzUlRMKSAmJiAodCA9PT0gYS5rZXlzLkJhY2tzcGFjZSA/IHQgPSBhLmtleXMuRGVsZXRlIDogdCA9PT0gYS5rZXlzLkRlbGV0ZSAmJiAodCA9IGEua2V5cy5CYWNrc3BhY2UpLCBcbiAgICAgICAgICAgICAgICAgICAgYy5pc1JUTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gbi5lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmVuZCA9IG4uYmVnaW4sIG4uYmVnaW4gPSBwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkLCBoID0gci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMsIHZvaWQgMCwgITApO1xuICAgICAgICAgICAgICAgICAgICBuLmVuZCA+PSByLmdldEJ1ZmZlci5jYWxsKGMpLmxlbmd0aCAmJiBoID49IG4uZW5kICYmIChuLmVuZCA9IGggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgdCA9PT0gYS5rZXlzLkJhY2tzcGFjZSA/IG4uZW5kIC0gbi5iZWdpbiA8IDEgJiYgKG4uYmVnaW4gPSByLnNlZWtQcmV2aW91cy5jYWxsKGMsIG4uYmVnaW4pKSA6IHQgPT09IGEua2V5cy5EZWxldGUgJiYgbi5iZWdpbiA9PT0gbi5lbmQgJiYgKG4uZW5kID0gci5pc01hc2suY2FsbChjLCBuLmVuZCwgITAsICEwKSA/IG4uZW5kICsgMSA6IHIuc2Vla05leHQuY2FsbChjLCBuLmVuZCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgITEgIT09IChkID0gdi5jYWxsKGMsIG4pKSAmJiAoKCEwICE9PSBpICYmICExICE9PSBmLmtlZXBTdGF0aWMgfHwgbnVsbCAhPT0gZi5yZWdleCAmJiAtMSAhPT0gby5nZXRUZXN0LmNhbGwoYywgbi5iZWdpbikubWF0Y2guZGVmLmluZGV4T2YoXCJ8XCIpKSAmJiBsLmNhbGwoYywgITApLCBcbiAgICAgICAgICAgICAgICAgICAgITAgIT09IGkgJiYgKHUucCA9IHQgPT09IGEua2V5cy5EZWxldGUgPyBuLmJlZ2luICsgZCA6IG4uYmVnaW4sIHUucCA9IHIuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKGMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiB1LnAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHUucFxuICAgICAgICAgICAgICAgICAgICB9LCAhMSwgITEgPT09IGYuaW5zZXJ0TW9kZSAmJiB0ID09PSBhLmtleXMuQmFja3NwYWNlID8gXCJub25lXCIgOiB2b2lkIDApLmJlZ2luKSk7XG4gICAgICAgICAgICAgICAgfSwgdC5pc0NvbXBsZXRlID0gYywgdC5pc1NlbGVjdGlvbiA9IHUsIHQuaXNWYWxpZCA9IGYsIHQucmVmcmVzaEZyb21CdWZmZXIgPSBkLCBcbiAgICAgICAgICAgICAgICB0LnJldmFsaWRhdGVNYXNrID0gdjtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IG4oNjAzMCksIGEgPSBuKDI4MzkpLCByID0gbig4NzExKSwgbyA9IG4oNDcxMyk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0LCBuLCBpLCBhLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcywgdSA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgcCA9IHRoaXMub3B0cywgZCA9IGMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjLmhhc0FsdGVybmF0b3IpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGgsIHYsIG0sIGcsIHksIGssIGIsIHgsIHcsIFAsIFMsIE8gPSB1LmV4dGVuZCghMCwgW10sIGQudmFsaWRQb3NpdGlvbnMpLCBfID0gdS5leHRlbmQoITAsIHt9LCBkLnRlc3RzKSwgTSA9ICExLCBFID0gITEsIGogPSB2b2lkIDAgIT09IGEgPyBhIDogci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocyAmJiAoUCA9IHMuYmVnaW4sIFMgPSBzLmVuZCwgcy5iZWdpbiA+IHMuZW5kICYmIChQID0gcy5lbmQsIFMgPSBzLmJlZ2luKSksIFxuICAgICAgICAgICAgICAgICAgICAtMSA9PT0gaiAmJiB2b2lkIDAgPT09IGEpIGggPSAwLCB2ID0gKGcgPSBvLmdldFRlc3QuY2FsbChjLCBoKSkuYWx0ZXJuYXRpb247IGVsc2UgZm9yICg7aiA+PSAwOyBqLS0pIGlmICgobSA9IGQudmFsaWRQb3NpdGlvbnNbal0pICYmIHZvaWQgMCAhPT0gbS5hbHRlcm5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPD0gKGUgfHwgMCkgJiYgZyAmJiBnLmxvY2F0b3JbbS5hbHRlcm5hdGlvbl0gIT09IG0ubG9jYXRvclttLmFsdGVybmF0aW9uXSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gaiwgdiA9IGQudmFsaWRQb3NpdGlvbnNbaF0uYWx0ZXJuYXRpb24sIGcgPSBtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChoKSwgZC5leGNsdWRlc1tiXSA9IGQuZXhjbHVkZXNbYl0gfHwgW10sICEwICE9PSBlICYmIGQuZXhjbHVkZXNbYl0ucHVzaCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmdldERlY2lzaW9uVGFrZXIpKGcpICsgXCI6XCIgKyBnLmFsdGVybmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUID0gW10sIEEgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeSA9IGI7IGIgPCByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoYywgdm9pZCAwLCAhMCkgKyAxOyB5KyspIC0xID09PSBBICYmIGUgPD0geSAmJiB2b2lkIDAgIT09IHQgJiYgKFQucHVzaCh0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBBID0gVC5sZW5ndGggLSAxKSwgKGsgPSBkLnZhbGlkUG9zaXRpb25zW2JdKSAmJiAhMCAhPT0gay5nZW5lcmF0ZWRJbnB1dCAmJiAodm9pZCAwID09PSBzIHx8IHkgPCBQIHx8IHkgPj0gUykgJiYgVC5wdXNoKGsuaW5wdXQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGQudmFsaWRQb3NpdGlvbnMuc3BsaWNlKGIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICgtMSA9PT0gQSAmJiB2b2lkIDAgIT09IHQgJiYgKFQucHVzaCh0KSwgQSA9IFQubGVuZ3RoIC0gMSk7IHZvaWQgMCAhPT0gZC5leGNsdWRlc1tiXSAmJiBkLmV4Y2x1ZGVzW2JdLmxlbmd0aCA8IDEwOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGQudGVzdHMgPSB7fSwgci5yZXNldE1hc2tTZXQuY2FsbChjLCAhMCksIE0gPSAhMCwgeSA9IDA7IHkgPCBULmxlbmd0aCAmJiAoeCA9IE0uY2FyZXQgfHwgMCA9PSBwLmluc2VydE1vZGUgJiYgbnVsbCAhPSB4ID8gci5zZWVrTmV4dC5jYWxsKGMsIHgpIDogci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMsIHZvaWQgMCwgITApICsgMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdyA9IFRbeV0sIE0gPSBmLmNhbGwoYywgeCwgdywgITEsIGksICEwKSk7IHkrKykgeSA9PT0gQSAmJiAoRSA9IE0pLCAxID09IGUgJiYgTSAmJiAoRSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3M6IHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzZXRNYXNrU2V0LmNhbGwoYyksIGcgPSBvLmdldFRlc3QuY2FsbChjLCBiKSwgZC52YWxpZFBvc2l0aW9ucyA9IHUuZXh0ZW5kKCEwLCBbXSwgTyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQudGVzdHMgPSB1LmV4dGVuZCghMCwge30sIF8pLCAhZC5leGNsdWRlc1tiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFID0gbC5jYWxsKGMsIGUsIHQsIG4sIGksIGIgLSAxLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGcuYWx0ZXJuYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEQgPSAoMCwgby5nZXREZWNpc2lvblRha2VyKShnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBkLmV4Y2x1ZGVzW2JdLmluZGV4T2YoRCArIFwiOlwiICsgZy5hbHRlcm5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSBsLmNhbGwoYywgZSwgdCwgbiwgaSwgYiAtIDEsIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChkLmV4Y2x1ZGVzW2JdLnB1c2goRCArIFwiOlwiICsgZy5hbHRlcm5hdGlvbiksIHkgPSBiOyB5IDwgci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMsIHZvaWQgMCwgITApICsgMTsgeSsrKSBkLnZhbGlkUG9zaXRpb25zLnNwbGljZShiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZGVsZXRlIGQuZXhjbHVkZXNbYl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEUgJiYgITEgPT09IHAua2VlcFN0YXRpYyB8fCBkZWxldGUgZC5leGNsdWRlc1tiXSwgRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5vcHRzLCByID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkuY2FzaW5nIHx8IHQuY2FzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVwcGVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG93ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLnZhbGlkUG9zaXRpb25zW24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSAwID09PSBuIHx8IG8gJiYgby5pbnB1dCA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShhLmtleUNvZGUuU3BhY2UpID8gZS50b1VwcGVyQ2FzZSgpIDogZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5jYXNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKHIudmFsaWRQb3NpdGlvbnMpLCBlID0gaS5jYXNpbmcuYXBwbHkodGhpcywgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIG4gPSB0aGlzLm9wdHMsIGkgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4uaXNDb21wbGV0ZSkgcmV0dXJuIG4uaXNDb21wbGV0ZShlLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiKlwiICE9PSBuLnJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSAhMSwgbCA9IHIuZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24uY2FsbCh0LCAhMCksIHMgPSBsLmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBsLmRlZiB8fCBsLmRlZi5uZXdCbG9ja01hcmtlciB8fCBsLmRlZi5vcHRpb25hbGl0eSB8fCBsLmRlZi5vcHRpb25hbFF1YW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPD0gczsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gby5nZXRUZXN0VGVtcGxhdGUuY2FsbCh0LCBjKS5tYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSB1LnN0YXRpYyAmJiB2b2lkIDAgPT09IGkudmFsaWRQb3NpdGlvbnNbY10gJiYgKCExID09PSB1Lm9wdGlvbmFsaXR5IHx8IHZvaWQgMCA9PT0gdS5vcHRpb25hbGl0eSB8fCB1Lm9wdGlvbmFsaXR5ICYmIDAgPT0gdS5uZXdCbG9ja01hcmtlcikgJiYgKCExID09PSB1Lm9wdGlvbmFsUXVhbnRpZmllciB8fCB2b2lkIDAgPT09IHUub3B0aW9uYWxRdWFudGlmaWVyKSB8fCAhMCA9PT0gdS5zdGF0aWMgJiYgXCJcIiAhPSB1LmRlZiAmJiBlW2NdICE9PSBvLmdldFBsYWNlaG9sZGVyLmNhbGwodCwgYywgdSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5vcHRzLmluc2VydE1vZGUgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSVEwgPyBlLmJlZ2luIC0gZS5lbmQgPiB0IDogZS5lbmQgLSBlLmJlZ2luID4gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0LCBuLCBpLCBhLCBwLCBtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gdGhpcywgeSA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgayA9IHRoaXMub3B0cywgYiA9IGcubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgbiA9ICEwID09PSBuO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHcoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUucmVtb3ZlICYmIChBcnJheS5pc0FycmF5KGUucmVtb3ZlKSB8fCAoZS5yZW1vdmUgPSBbIGUucmVtb3ZlIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZS5zb3J0KChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnLmlzUlRMID8gZS5wb3MgLSB0LnBvcyA6IHQucG9zIC0gZS5wb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5jYWxsKGcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBlICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGUucmVtb3ZlID0gdm9pZCAwKSwgdm9pZCAwICE9PSBlLmluc2VydCAmJiAoQXJyYXkuaXNBcnJheShlLmluc2VydCkgfHwgKGUuaW5zZXJ0ID0gWyBlLmluc2VydCBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnNlcnQuc29ydCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZy5pc1JUTCA/IHQucG9zIC0gZS5wb3MgOiBlLnBvcyAtIHQucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGUuYyAmJiBmLmNhbGwoZywgZS5wb3MsIGUuYywgdm9pZCAwID09PSBlLnN0cmljdCB8fCBlLnN0cmljdCwgdm9pZCAwICE9PSBlLmZyb21Jc1ZhbGlkID8gZS5mcm9tSXNWYWxpZCA6IGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgZS5pbnNlcnQgPSB2b2lkIDApLCBlLnJlZnJlc2hGcm9tQnVmZmVyICYmIGUuYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5jYWxsKGcsICEwID09PSB0ID8gdCA6IHQuc3RhcnQsIHQuZW5kLCBlLmJ1ZmZlciksIGUucmVmcmVzaEZyb21CdWZmZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZS5yZXdyaXRlUG9zaXRpb24gJiYgKHggPSBlLnJld3JpdGVQb3NpdGlvbiwgZSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAodCwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLmdldFRlc3RzLmNhbGwoZywgdCkuZXZlcnkoKGZ1bmN0aW9uKGMsIGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGMubWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZ2V0QnVmZmVyLmNhbGwoZywgITApLCAhMSAhPT0gKGwgPSAoIXAuaml0IHx8IHZvaWQgMCAhPT0gYi52YWxpZFBvc2l0aW9uc1tyLnNlZWtQcmV2aW91cy5jYWxsKGcsIHQpXSkgJiYgKG51bGwgIT0gcC5mbiA/IHAuZm4udGVzdChuLCBiLCB0LCBhLCBrLCB1LmNhbGwoZywgZSkpIDogKG4gPT09IHAuZGVmIHx8IG4gPT09IGsuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcikgJiYgXCJcIiAhPT0gcC5kZWYgJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBvLmdldFBsYWNlaG9sZGVyLmNhbGwoZywgdCwgcCwgITApIHx8IHAuZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB2b2lkIDAgIT09IGwuYyA/IGwuYyA6IG4sIGggPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZCA9IGQgPT09IGsuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiAhMCA9PT0gcC5zdGF0aWMgPyBvLmdldFBsYWNlaG9sZGVyLmNhbGwoZywgdCwgcCwgITApIHx8IHAuZGVmIDogZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSAobCA9IHcobCkpICYmIHZvaWQgMCAhPT0gbC5wb3MgJiYgbC5wb3MgIT09IHQgJiYgKGggPSBsLnBvcyksICEwICE9PSBsICYmIHZvaWQgMCA9PT0gbC5wb3MgJiYgdm9pZCAwID09PSBsLmMgPyAhMSA6ICghMSA9PT0gdi5jYWxsKGcsIGUsIHkuZXh0ZW5kKHt9LCBjLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogcy5jYWxsKGcsIGQsIHAsIGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBpLCBoKSAmJiAobCA9ICExKSwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLmJlZ2luICYmICh4ID0gZy5pc1JUTCA/IGUuZW5kIDogZS5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBTID0gITAsIE8gPSB5LmV4dGVuZCghMCwgW10sIGIudmFsaWRQb3NpdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGsua2VlcFN0YXRpYyAmJiB2b2lkIDAgIT09IGIuZXhjbHVkZXNbeF0gJiYgITAgIT09IGEgJiYgITAgIT09IGkpIGZvciAodmFyIF8gPSB4OyBfIDwgKGcuaXNSVEwgPyBlLmJlZ2luIDogZS5lbmQpOyBfKyspIHZvaWQgMCAhPT0gYi5leGNsdWRlc1tfXSAmJiAoYi5leGNsdWRlc1tfXSA9IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBiLnRlc3RzW19dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygay5wcmVWYWxpZGF0aW9uICYmICEwICE9PSBpICYmICEwICE9PSBwICYmIChTID0gdyhTID0gay5wcmVWYWxpZGF0aW9uLmNhbGwoZywgci5nZXRCdWZmZXIuY2FsbChnKSwgeCwgdCwgdS5jYWxsKGcsIGUpLCBrLCBiLCBlLCBuIHx8IGEpKSksIFxuICAgICAgICAgICAgICAgICAgICAhMCA9PT0gUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFMgPSBQKHgsIHQsIG4pLCAoIW4gfHwgITAgPT09IGkpICYmICExID09PSBTICYmICEwICE9PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIE0gPSBiLnZhbGlkUG9zaXRpb25zW3hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTSB8fCAhMCAhPT0gTS5tYXRjaC5zdGF0aWMgfHwgTS5tYXRjaC5kZWYgIT09IHQgJiYgdCAhPT0gay5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrLmluc2VydE1vZGUgfHwgdm9pZCAwID09PSBiLnZhbGlkUG9zaXRpb25zW3Iuc2Vla05leHQuY2FsbChnLCB4KV0gfHwgZS5lbmQgPiB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIuaml0T2Zmc2V0W3hdICYmIHZvaWQgMCA9PT0gYi52YWxpZFBvc2l0aW9uc1tyLnNlZWtOZXh0LmNhbGwoZywgeCldICYmICExICE9PSAoUyA9IGYuY2FsbChnLCB4ICsgYi5qaXRPZmZzZXRbeF0sIHQsICEwLCAhMCkpICYmICghMCAhPT0gYSAmJiAoUy5jYXJldCA9IHgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSAhMCksIGUuZW5kID4geCAmJiAoYi52YWxpZFBvc2l0aW9uc1t4XSA9IHZvaWQgMCksICFFICYmICFyLmlzTWFzay5jYWxsKGcsIHgsIGsua2VlcFN0YXRpYyAmJiAwID09PSB4KSkgZm9yICh2YXIgaiA9IHggKyAxLCBUID0gci5zZWVrTmV4dC5jYWxsKGcsIHgsICExLCAwICE9PSB4KTsgaiA8PSBUOyBqKyspIGlmICghMSAhPT0gKFMgPSBQKGosIHQsIG4pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgPSBoLmNhbGwoZywgeCwgdm9pZCAwICE9PSBTLnBvcyA/IFMucG9zIDogaikgfHwgUywgeCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgUyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHIuc2Vla05leHQuY2FsbChnLCB4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnLmhhc0FsdGVybmF0b3IgJiYgITAgIT09IGEgJiYgIW4gJiYgKGEgPSAhMCwgITEgPT09IFMgJiYgay5rZWVwU3RhdGljICYmIChjLmNhbGwoZywgci5nZXRCdWZmZXIuY2FsbChnKSkgfHwgMCA9PT0geCkgPyBTID0gbC5jYWxsKGcsIHgsIHQsIG4sIGksIHZvaWQgMCwgZSkgOiAodS5jYWxsKGcsIGUpICYmIGIudGVzdHNbeF0gJiYgYi50ZXN0c1t4XS5sZW5ndGggPiAxICYmIGsua2VlcFN0YXRpYyB8fCAxID09IFMgJiYgITAgIT09IGsubnVtZXJpY0lucHV0ICYmIGIudGVzdHNbeF0gJiYgYi50ZXN0c1t4XS5sZW5ndGggPiAxICYmIHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChnLCB2b2lkIDAsICEwKSA+IHgpICYmIChTID0gbC5jYWxsKGcsICEwKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBTICYmIChTID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogeFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygay5wb3N0VmFsaWRhdGlvbiAmJiAhMCAhPT0gaSAmJiAhMCAhPT0gcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSBrLnBvc3RWYWxpZGF0aW9uLmNhbGwoZywgci5nZXRCdWZmZXIuY2FsbChnLCAhMCksIHZvaWQgMCAhPT0gZS5iZWdpbiA/IGcuaXNSVEwgPyBlLmVuZCA6IGUuYmVnaW4gOiBlLCB0LCBTLCBrLCBiLCBuLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gQSAmJiAoUyA9ICEwID09PSBBID8gUyA6IEEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFMgJiYgdm9pZCAwID09PSBTLnBvcyAmJiAoUy5wb3MgPSB4KSwgITEgPT09IFMgfHwgITAgPT09IHAgPyAoci5yZXNldE1hc2tTZXQuY2FsbChnLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICBiLnZhbGlkUG9zaXRpb25zID0geS5leHRlbmQoITAsIFtdLCBPKSkgOiBoLmNhbGwoZywgdm9pZCAwLCB4LCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBEID0gdyhTKTtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBnLm1heExlbmd0aCAmJiAoci5nZXRCdWZmZXIuY2FsbChnKS5sZW5ndGggPiBnLm1heExlbmd0aCAmJiAhaSAmJiAoci5yZXNldE1hc2tTZXQuY2FsbChnLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICBiLnZhbGlkUG9zaXRpb25zID0geS5leHRlbmQoITAsIFtdLCBPKSwgRCA9ICExKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubWFza3NldCwgYSA9ICExLCByID0gby5nZXRUZXN0cy5jYWxsKHRoaXMsIGUpLCBsID0gMDsgbCA8IHIubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyW2xdLm1hdGNoICYmIChyW2xdLm1hdGNoLm5hdGl2ZURlZiA9PT0gdC5tYXRjaFtuLnNoaWZ0UG9zaXRpb25zID8gXCJkZWZcIiA6IFwibmF0aXZlRGVmXCJdICYmICghbi5zaGlmdFBvc2l0aW9ucyB8fCAhdC5tYXRjaC5zdGF0aWMpIHx8IHJbbF0ubWF0Y2gubmF0aXZlRGVmID09PSB0Lm1hdGNoLm5hdGl2ZURlZiB8fCBuLnJlZ2V4ICYmICFyW2xdLm1hdGNoLnN0YXRpYyAmJiByW2xdLm1hdGNoLmZuLnRlc3QodC5pbnB1dCwgaSwgZSwgITEsIG4pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyW2xdLm1hdGNoICYmIHJbbF0ubWF0Y2guZGVmID09PSB0Lm1hdGNoLm5hdGl2ZURlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExID09PSBhICYmIHZvaWQgMCAhPT0gaS5qaXRPZmZzZXRbZV0gJiYgKGEgPSBwLmNhbGwodGhpcywgZSArIGkuaml0T2Zmc2V0W2VdLCB0LCBuKSksIFxuICAgICAgICAgICAgICAgICAgICBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEsIG8sIGwgPSB0aGlzLCBzID0gdGhpcy5tYXNrc2V0LCBjID0gdGhpcy5vcHRzLCB1ID0gdGhpcy5kZXBlbmRlbmN5TGliLCBmID0gYy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyLCBwID0gbC5pc1JUTCA/IG4uc2xpY2UoKS5yZXZlcnNlKCkgOiBuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gXCJcIiwgITAgPT09IGUpIHIucmVzZXRNYXNrU2V0LmNhbGwobCwgITEpLCBlID0gMCwgXG4gICAgICAgICAgICAgICAgICAgIHQgPSBuLmxlbmd0aCwgbyA9IHIuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sICExKS5iZWdpbjsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSBlOyBhIDwgdDsgYSsrKSBzLnZhbGlkUG9zaXRpb25zLnNwbGljZShlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IHUuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gZTsgYSA8IHQ7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5rZXkgPSBwW2FdLnRvU3RyaW5nKCksIGwuaWdub3JhYmxlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGkuRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwobCwgZCwgITAsICExLCAhMSwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAhMSAhPT0gaCAmJiB2b2lkIDAgIT09IGggJiYgKG8gPSBoLmZvcndhcmRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaChlLCB0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcywgYSA9IHRoaXMubWFza3NldCwgbCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkgZm9yIChlID0gdCAtIDE7IGUgPiAwICYmICFhLnZhbGlkUG9zaXRpb25zW2VdOyBlLS0pIDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IGU7IHMgPCB0OyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGEudmFsaWRQb3NpdGlvbnNbc10gJiYgIXIuaXNNYXNrLmNhbGwoaSwgcywgITEpKSBpZiAoMCA9PSBzID8gby5nZXRUZXN0LmNhbGwoaSwgcykgOiBhLnZhbGlkUG9zaXRpb25zW3MgLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gby5nZXRUZXN0cy5jYWxsKGksIHMpLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gY1tjLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiBjLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1LCBwID0gby5kZXRlcm1pbmVUZXN0VGVtcGxhdGUuY2FsbChpLCBzLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocCAmJiAoITAgIT09IHAubWF0Y2guaml0IHx8IFwibWFzdGVyXCIgPT09IHAubWF0Y2gubmV3QmxvY2tNYXJrZXIgJiYgKHUgPSBhLnZhbGlkUG9zaXRpb25zW3MgKyAxXSkgJiYgITAgPT09IHUubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyKSAmJiAoKHAgPSBsLmV4dGVuZCh7fSwgcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogby5nZXRQbGFjZWhvbGRlci5jYWxsKGksIHMsIHAubWF0Y2gsICEwKSB8fCBwLm1hdGNoLmRlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5nZW5lcmF0ZWRJbnB1dCA9ICEwLCB2LmNhbGwoaSwgcywgcCwgITApLCAhMCAhPT0gbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBhLnZhbGlkUG9zaXRpb25zW3RdLmlucHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS52YWxpZFBvc2l0aW9uc1t0XSA9IHZvaWQgMCwgZi5jYWxsKGksIHQsIGQsICEwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHYoZSwgdCwgbiwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMsIGwgPSB0aGlzLm1hc2tzZXQsIHMgPSB0aGlzLm9wdHMsIGMgPSB0aGlzLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaSAmJiAhMCA9PT0gaS5tYXRjaC5zdGF0aWMgJiYgITAgIT09IGkubWF0Y2gub3B0aW9uYWxpdHkgJiYgKHZvaWQgMCA9PT0gdFswXSB8fCB2b2lkIDAgPT09IHRbMF0uYWx0ZXJuYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBuLmJlZ2luIDw9IGUgLSAxID8gdFtlIC0gMV0gJiYgITAgPT09IHRbZSAtIDFdLm1hdGNoLnN0YXRpYyAmJiB0W2UgLSAxXSA6IHRbZSAtIDFdLCByID0gbi5lbmQgPiBlICsgMSA/IHRbZSArIDFdICYmICEwID09PSB0W2UgKyAxXS5tYXRjaC5zdGF0aWMgJiYgdFtlICsgMV0gOiB0W2UgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gMCwgdiA9IHZvaWQgMCAhPT0gZS5iZWdpbiA/IGUuYmVnaW4gOiBlLCBtID0gdm9pZCAwICE9PSBlLmVuZCA/IGUuZW5kIDogZSwgZyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5iZWdpbiA+IGUuZW5kICYmICh2ID0gZS5lbmQsIG0gPSBlLmJlZ2luKSwgaSA9IHZvaWQgMCAhPT0gaSA/IGkgOiB2LCB2b2lkIDAgPT09IG4gJiYgKHYgIT09IG0gfHwgcy5pbnNlcnRNb2RlICYmIHZvaWQgMCAhPT0gbC52YWxpZFBvc2l0aW9uc1tpXSB8fCB2b2lkIDAgPT09IHQgfHwgdC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgfHwgdC5tYXRjaC5vcHRpb25hbGl0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5LCBrID0gYy5leHRlbmQoITAsIFtdLCBsLnZhbGlkUG9zaXRpb25zKSwgYiA9IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChhLCB2b2lkIDAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwucCA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHUuY2FsbChhLCBlKSA/IHYgOiBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh5ID0gYjsgeSA+PSB4OyB5LS0pIGwudmFsaWRQb3NpdGlvbnMuc3BsaWNlKHksIDEpLCB2b2lkIDAgPT09IHQgJiYgZGVsZXRlIGwudGVzdHNbeSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcsIFAsIFMgPSBpLCBPID0gUztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodCAmJiAobC52YWxpZFBvc2l0aW9uc1tpXSA9IGMuZXh0ZW5kKCEwLCB7fSwgdCksIE8rKywgUysrKSwgbnVsbCA9PSBrW21dICYmIGwuaml0T2Zmc2V0W21dICYmIChtICs9IGwuaml0T2Zmc2V0W21dICsgMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHQgPyBtIDogbSAtIDE7IHkgPD0gYjsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gKHcgPSBrW3ldKSAmJiAhMCAhPT0gdy5nZW5lcmF0ZWRJbnB1dCAmJiAoeSA+PSBtIHx8IHkgPj0gdiAmJiBkKHksIGssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtcIlwiICE9PSBvLmdldFRlc3QuY2FsbChhLCBPKS5tYXRjaC5kZWY7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSAoUCA9IHAuY2FsbChhLCBPLCB3LCBzKSkgfHwgXCIrXCIgPT09IHcubWF0Y2guZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgPT09IHcubWF0Y2guZGVmICYmIHIuZ2V0QnVmZmVyLmNhbGwoYSwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gZi5jYWxsKGEsIE8sIHcuaW5wdXQsIFwiK1wiICE9PSB3Lm1hdGNoLmRlZiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnID0gITEgIT09IF8sIFMgPSAoXy5wb3MgfHwgTykgKyAxLCAhZyAmJiBQKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBnID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gdCAmJiB3Lm1hdGNoLnN0YXRpYyAmJiB5ID09PSBlLmJlZ2luICYmIGgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZyAmJiByLmdldEJ1ZmZlci5jYWxsKGEpLCBPID4gbC5tYXNrTGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiID09IG8uZ2V0VGVzdC5jYWxsKGEsIE8pLm1hdGNoLmRlZiAmJiAoZyA9ICExKSwgTyA9IFM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWcpIHJldHVybiBsLnZhbGlkUG9zaXRpb25zID0gYy5leHRlbmQoITAsIFtdLCBrKSwgci5yZXNldE1hc2tTZXQuY2FsbChhLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0ICYmIG8uZ2V0VGVzdC5jYWxsKGEsIGkpLm1hdGNoLmNkID09PSB0Lm1hdGNoLmNkICYmIChsLnZhbGlkUG9zaXRpb25zW2ldID0gYy5leHRlbmQoITAsIHt9LCB0KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJlc2V0TWFza1NldC5jYWxsKGEsICEwKSwgaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHQgPSB7fTtcbiAgICAgICAgZnVuY3Rpb24gbihpKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHRbaV07XG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBhKSByZXR1cm4gYS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIHIgPSB0W2ldID0ge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGVbaV0ociwgci5leHBvcnRzLCBuKSwgci5leHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0ge307XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlID0gaTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgfSksIGUuZGVmYXVsdCA9IHZvaWQgMCwgbig3MTQ5KSwgbigzMTk0KSwgbig5MzAyKSwgbig0MDEzKSwgbigzODUxKSwgbigyMTkpLCBuKDIwNyksIFxuICAgICAgICAgICAgbig1Mjk2KTtcbiAgICAgICAgICAgIHZhciB0LCBhID0gKHQgPSBuKDIzOTQpKSAmJiB0Ll9fZXNNb2R1bGUgPyB0IDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlLmRlZmF1bHQgPSBhLmRlZmF1bHQ7XG4gICAgICAgIH0oKSwgaTtcbiAgICB9KCk7XG59KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
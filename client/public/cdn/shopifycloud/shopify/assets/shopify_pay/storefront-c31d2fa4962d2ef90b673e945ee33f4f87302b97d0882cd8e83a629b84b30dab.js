! function() {
    var e = function(e) {
            var t = {
                exports: {}
            };
            return e.call(t.exports, t, t.exports), t.exports
        },
        y = function(e) {
            return function() {
                var u = e.apply(this, arguments);
                return new Promise(function(o, s) {
                    function a(e, t) {
                        try {
                            var r = u[e](t),
                                n = r.value
                        } catch (i) {
                            return void s(i)
                        }
                        if (!r.done) return Promise.resolve(n).then(function(e) {
                            a("next", e)
                        }, function(e) {
                            a("throw", e)
                        });
                        o(n)
                    }
                    return a("next")
                })
            }
        },
        t = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        },
        m = e(function(e) {
            var t = {}.toString;
            e.exports = function(e) {
                return t.call(e).slice(8, -1)
            }
        }),
        O = e(function(e) {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        }),
        i = e(function(e) {
            var t = "__core-js_shared__",
                r = O[t] || (O[t] = {});
            e.exports = function(e) {
                return r[e] || (r[e] = {})
            }
        }),
        a = e(function(e) {
            var t = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(e === undefined ? "" : e, ")_", (++t + r).toString(36))
            }
        }),
        j = e(function(e) {
            var t = i("wks"),
                r = O.Symbol,
                n = "function" == typeof r;
            (e.exports = function(e) {
                return t[e] || (t[e] = n && r[e] || (n ? r : a)("Symbol." + e))
            }).store = t
        }),
        P = e(function(e) {
            var i = j("toStringTag"),
                o = "Arguments" == m(function() {
                    return arguments
                }()),
                s = function(e, t) {
                    try {
                        return e[t]
                    } catch (r) {}
                };
            e.exports = function(e) {
                var t, r, n;
                return e === undefined ? "Undefined" : null === e ? "Null" : "string" == typeof(r = s(t = Object(e), i)) ? r : o ? m(t) : "Object" == (n = m(t)) && "function" == typeof t.callee ? "Arguments" : n
            }
        }),
        L = e(function(e) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }),
        p = e(function(e) {
            e.exports = function(e) {
                if (!L(e)) throw TypeError(e + " is not an object!");
                return e
            }
        }),
        r = e(function(e) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        }),
        n = e(function(e) {
            e.exports = !r(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }),
        v = e(function(e) {
            var t = O.document,
                r = L(t) && L(t.createElement);
            e.exports = function(e) {
                return r ? t.createElement(e) : {}
            }
        }),
        s = e(function(e) {
            e.exports = !n && !r(function() {
                return 7 != Object.defineProperty(v("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }),
        u = e(function(e) {
            e.exports = function(e, t) {
                if (!L(e)) return e;
                var r, n;
                if (t && "function" == typeof(r = e.toString) && !L(n = r.call(e))) return n;
                if ("function" == typeof(r = e.valueOf) && !L(n = r.call(e))) return n;
                if (!t && "function" == typeof(r = e.toString) && !L(n = r.call(e))) return n;
                throw TypeError("Can't convert object to primitive value")
            }
        }),
        c = e(function(e, t) {
            var i = Object.defineProperty;
            t.f = n ? Object.defineProperty : function o(e, t, r) {
                if (p(e), t = u(t, !0), p(r), s) try {
                    return i(e, t, r)
                } catch (n) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                return "value" in r && (e[t] = r.value), e
            }
        }),
        o = e(function(e) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }),
        T = e(function(e) {
            e.exports = n ? function(e, t, r) {
                return c.f(e, t, o(1, r))
            } : function(e, t, r) {
                return e[t] = r, e
            }
        }),
        E = e(function(e) {
            var r = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return r.call(e, t)
            }
        }),
        B = e(function(e) {
            var t = e.exports = {
                version: "2.5.1"
            };
            "number" == typeof __e && (__e = t)
        }),
        M = e(function(e) {
            var o = a("src"),
                t = "toString",
                r = Function[t],
                s = ("" + r).split(t);
            B.inspectSource = function(e) {
                return r.call(e)
            }, (e.exports = function(e, t, r, n) {
                var i = "function" == typeof r;
                i && (E(r, "name") || T(r, "name", t)), e[t] !== r && (i && (E(r, o) || T(r, o, e[t] ? "" + e[t] : s.join(String(t)))), e === O ? e[t] = r : n ? e[t] ? e[t] = r : T(e, t, r) : (delete e[t], T(e, t, r)))
            })(Function.prototype, t, function n() {
                return "function" == typeof this && this[o] || r.call(this)
            })
        }),
        f = (e(function() {
            "use strict";
            var e = {};
            e[j("toStringTag")] = "z", e + "" != "[object z]" && M(Object.prototype, "toString", function t() {
                return "[object " + P(this) + "]"
            }, !0)
        }), e(function(e) {
            var t = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? r : t)(e)
            }
        })),
        l = e(function(e) {
            e.exports = function(e) {
                if (e == undefined) throw TypeError("Can't call method on  " + e);
                return e
            }
        }),
        d = e(function(e) {
            e.exports = function(a) {
                return function(e, t) {
                    var r, n, i = String(l(e)),
                        o = f(t),
                        s = i.length;
                    return o < 0 || s <= o ? a ? "" : undefined : (r = i.charCodeAt(o)) < 55296 || 56319 < r || o + 1 === s || (n = i.charCodeAt(o + 1)) < 56320 || 57343 < n ? a ? i.charAt(o) : r : a ? i.slice(o, o + 2) : n - 56320 + (r - 55296 << 10) + 65536
                }
            }
        }),
        R = e(function(e) {
            e.exports = !1
        }),
        N = e(function(e) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        }),
        F = e(function(e) {
            e.exports = function(n, i, e) {
                if (N(n), i === undefined) return n;
                switch (e) {
                    case 1:
                        return function(e) {
                            return n.call(i, e)
                        };
                    case 2:
                        return function(e, t) {
                            return n.call(i, e, t)
                        };
                    case 3:
                        return function(e, t, r) {
                            return n.call(i, e, t, r)
                        }
                }
                return function() {
                    return n.apply(i, arguments)
                }
            }
        }),
        C = e(function(e) {
            var w = "prototype",
                y = function(e, t, r) {
                    var n, i, o, s, a = e & y.F,
                        u = e & y.G,
                        c = e & y.S,
                        f = e & y.P,
                        l = e & y.B,
                        d = u ? O : c ? O[t] || (O[t] = {}) : (O[t] || {})[w],
                        h = u ? B : B[t] || (B[t] = {}),
                        p = h[w] || (h[w] = {});
                    for (n in u && (r = t), r) o = ((i = !a && d && d[n] !== undefined) ? d : r)[n], s = l && i ? F(o, O) : f && "function" == typeof o ? F(Function.call, o) : o, d && M(d, n, o, e & y.U), h[n] != o && T(h, n, s), f && p[n] != o && (p[n] = o)
                };
            O.core = B, y.F = 1, y.G = 2, y.S = 4, y.P = 8, y.B = 16, y.W = 32, y.U = 64, y.R = 128, e.exports = y
        }),
        I = e(function(e) {
            e.exports = {}
        }),
        h = e(function(e) {
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == m(e) ? e.split("") : Object(e)
            }
        }),
        w = e(function(e) {
            e.exports = function(e) {
                return h(l(e))
            }
        }),
        b = e(function(e) {
            var t = Math.min;
            e.exports = function(e) {
                return 0 < e ? t(f(e), 9007199254740991) : 0
            }
        }),
        g = e(function(e) {
            var r = Math.max,
                n = Math.min;
            e.exports = function(e, t) {
                return (e = f(e)) < 0 ? r(e + t, 0) : n(e, t)
            }
        }),
        x = e(function(e) {
            e.exports = function(a) {
                return function(e, t, r) {
                    var n, i = w(e),
                        o = b(i.length),
                        s = g(r, o);
                    if (a && t != t) {
                        for (; s < o;)
                            if ((n = i[s++]) != n) return !0
                    } else
                        for (; s < o; s++)
                            if ((a || s in i) && i[s] === t) return a || s || 0;
                    return !a && -1
                }
            }
        }),
        _ = e(function(e) {
            var t = i("keys");
            e.exports = function(e) {
                return t[e] || (t[e] = a(e))
            }
        }),
        k = e(function(e) {
            var s = x(!1),
                a = _("IE_PROTO");
            e.exports = function(e, t) {
                var r, n = w(e),
                    i = 0,
                    o = [];
                for (r in n) r != a && E(n, r) && o.push(r);
                for (; t.length > i;) E(n, r = t[i++]) && (~s(o, r) || o.push(r));
                return o
            }
        }),
        S = e(function(e) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }),
        A = e(function(e) {
            e.exports = Object.keys || function t(e) {
                return k(e, S)
            }
        }),
        U = e(function(e) {
            e.exports = n ? Object.defineProperties : function s(e, t) {
                p(e);
                for (var r, n = A(t), i = n.length, o = 0; o < i;) c.f(e, r = n[o++], t[r]);
                return e
            }
        }),
        D = e(function(e) {
            var t = O.document;
            e.exports = t && t.documentElement
        }),
        G = e(function(e) {
            var n = _("IE_PROTO"),
                i = function() {},
                o = "prototype",
                s = function() {
                    var e, t = v("iframe"),
                        r = S.length,
                        n = "<",
                        i = ">";
                    for (t.style.display = "none", D.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write(n + "script" + i + "document.F=Object" + n + "/script" + i), e.close(), s = e.F; r--;) delete s[o][S[r]];
                    return s()
                };
            e.exports = Object.create || function a(e, t) {
                var r;
                return null !== e ? (i[o] = p(e), r = new i, i[o] = null, r[n] = e) : r = s(), t === undefined ? r : U(r, t)
            }
        }),
        z = e(function(e) {
            var n = c.f,
                i = j("toStringTag");
            e.exports = function(e, t, r) {
                e && !E(e = r ? e : e.prototype, i) && n(e, i, {
                    configurable: !0,
                    value: t
                })
            }
        }),
        V = e(function(e) {
            "use strict";
            var n = {};
            T(n, j("iterator"), function() {
                return this
            }), e.exports = function(e, t, r) {
                e.prototype = G(n, {
                    next: o(1, r)
                }), z(e, t + " Iterator")
            }
        }),
        q = e(function(e) {
            e.exports = function(e) {
                return Object(l(e))
            }
        }),
        H = e(function(e) {
            var t = _("IE_PROTO"),
                r = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = q(e), E(e, t) ? e[t] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
            }
        }),
        W = e(function(e) {
            "use strict";
            var g = j("iterator"),
                x = !([].keys && "next" in [].keys()),
                _ = "@@iterator",
                k = "keys",
                S = "values",
                A = function() {
                    return this
                };
            e.exports = function(e, t, i, r, n, o, s) {
                V(i, t, r);
                var a, u, c, f = function(e) {
                        if (!x && e in p) return p[e];
                        switch (e) {
                            case k:
                                return function t() {
                                    return new i(this, e)
                                };
                            case S:
                                return function r() {
                                    return new i(this, e)
                                }
                        }
                        return function n() {
                            return new i(this, e)
                        }
                    },
                    l = t + " Iterator",
                    d = n == S,
                    h = !1,
                    p = e.prototype,
                    w = p[g] || p[_] || n && p[n],
                    y = w || f(n),
                    m = n ? d ? f("entries") : y : undefined,
                    v = "Array" == t && p.entries || w;
                if (v && (c = H(v.call(new e))) !== Object.prototype && c.next && (z(c, l, !0), R || E(c, g) || T(c, g, A)), d && w && w.name !== S && (h = !0, y = function b() {
                        return w.call(this)
                    }), R && !s || !x && !h && p[g] || T(p, g, y), I[t] = y, I[l] = A, n)
                    if (a = {
                            values: d ? y : f(S),
                            keys: o ? y : f(k),
                            entries: m
                        }, s)
                        for (u in a) u in p || M(p, u, a[u]);
                    else C(C.P + C.F * (x || h), t, a);
                return a
            }
        }),
        X = (e(function() {
            "use strict";
            var n = d(!0);
            W(String, "String", function(e) {
                this._t = String(e), this._i = 0
            }, function() {
                var e, t = this._t,
                    r = this._i;
                return r >= t.length ? {
                    value: undefined,
                    done: !0
                } : (e = n(t, r), this._i += e.length, {
                    value: e,
                    done: !1
                })
            })
        }), e(function(e) {
            var t = j("unscopables"),
                r = Array.prototype;
            r[t] == undefined && T(r, t, {}), e.exports = function(e) {
                r[t][e] = !0
            }
        })),
        $ = e(function(e) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        }),
        K = e(function(e) {
            "use strict";
            e.exports = W(Array, "Array", function(e, t) {
                this._t = w(e), this._i = 0, this._k = t
            }, function() {
                var e = this._t,
                    t = this._k,
                    r = this._i++;
                return !e || r >= e.length ? (this._t = undefined, $(1)) : $(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
            }, "values"), I.Arguments = I.Array, X("keys"), X("values"), X("entries")
        }),
        Q = (e(function() {
            for (var e = j("iterator"), t = j("toStringTag"), r = I.Array, n = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1
                }, i = A(n), o = 0; o < i.length; o++) {
                var s, a = i[o],
                    u = n[a],
                    c = O[a],
                    f = c && c.prototype;
                if (f && (f[e] || T(f, e, r), f[t] || T(f, t, a), I[a] = r, u))
                    for (s in K) f[s] || M(f, s, K[s], !0)
            }
        }), e(function(e) {
            e.exports = function(e, t, r, n) {
                if (!(e instanceof t) || n !== undefined && n in e) throw TypeError(r + ": incorrect invocation!");
                return e
            }
        })),
        Y = e(function(e) {
            e.exports = function(e, t, r, n) {
                try {
                    return n ? t(p(r)[0], r[1]) : t(r)
                } catch (o) {
                    var i = e["return"];
                    throw i !== undefined && p(i.call(e)), o
                }
            }
        }),
        Z = e(function(e) {
            var t = j("iterator"),
                r = Array.prototype;
            e.exports = function(e) {
                return e !== undefined && (I.Array === e || r[t] === e)
            }
        }),
        J = e(function(e) {
            var t = j("iterator");
            e.exports = B.getIteratorMethod = function(e) {
                if (e != undefined) return e[t] || e["@@iterator"] || I[P(e)]
            }
        }),
        ee = e(function(e, t) {
            var d = {},
                h = {};
            (t = e.exports = function(e, t, r, n, i) {
                var o, s, a, u, c = i ? function() {
                        return e
                    } : J(e),
                    f = F(r, n, t ? 2 : 1),
                    l = 0;
                if ("function" != typeof c) throw TypeError(e + " is not iterable!");
                if (Z(c)) {
                    for (o = b(e.length); l < o; l++)
                        if ((u = t ? f(p(s = e[l])[0], s[1]) : f(e[l])) === d || u === h) return u
                } else
                    for (a = c.call(e); !(s = a.next()).done;)
                        if ((u = Y(a, f, s.value, t)) === d || u === h) return u
            }).BREAK = d, t.RETURN = h
        }),
        te = e(function(e) {
            var i = j("species");
            e.exports = function(e, t) {
                var r, n = p(e).constructor;
                return n === undefined || (r = p(n)[i]) == undefined ? t : N(r)
            }
        }),
        re = e(function(e) {
            e.exports = function(e, t, r) {
                var n = r === undefined;
                switch (t.length) {
                    case 0:
                        return n ? e() : e.call(r);
                    case 1:
                        return n ? e(t[0]) : e.call(r, t[0]);
                    case 2:
                        return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                    case 3:
                        return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
                    case 4:
                        return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
                }
                return e.apply(r, t)
            }
        }),
        ne = e(function(e) {
            var n, t, r, i = O.process,
                o = O.setImmediate,
                s = O.clearImmediate,
                a = O.MessageChannel,
                u = O.Dispatch,
                c = 0,
                f = {},
                l = "onreadystatechange",
                d = function() {
                    var e = +this;
                    if (f.hasOwnProperty(e)) {
                        var t = f[e];
                        delete f[e], t()
                    }
                },
                h = function(e) {
                    d.call(e.data)
                };
            o && s || (o = function p(e) {
                for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
                return f[++c] = function() {
                    re("function" == typeof e ? e : Function(e), t)
                }, n(c), c
            }, s = function w(e) {
                delete f[e]
            }, "process" == m(i) ? n = function(e) {
                i.nextTick(F(d, e, 1))
            } : u && u.now ? n = function(e) {
                u.now(F(d, e, 1))
            } : a ? (r = (t = new a).port2, t.port1.onmessage = h, n = F(r.postMessage, r, 1)) : O.addEventListener && "function" == typeof postMessage && !O.importScripts ? (n = function(e) {
                O.postMessage(e + "", "*")
            }, O.addEventListener("message", h, !1)) : n = l in v("script") ? function(e) {
                D.appendChild(v("script"))[l] = function() {
                    D.removeChild(this), d.call(e)
                }
            } : function(e) {
                setTimeout(F(d, e, 1), 0)
            }), e.exports = {
                set: o,
                clear: s
            }
        }),
        ie = e(function(e) {
            var a = ne.set,
                u = O.MutationObserver || O.WebKitMutationObserver,
                c = O.process,
                f = O.Promise,
                l = "process" == m(c);
            e.exports = function() {
                var n, i, o, e = function() {
                    var e, t;
                    for (l && (e = c.domain) && e.exit(); n;) {
                        t = n.fn, n = n.next;
                        try {
                            t()
                        } catch (r) {
                            throw n ? o() : i = undefined, r
                        }
                    }
                    i = undefined, e && e.enter()
                };
                if (l) o = function() {
                    c.nextTick(e)
                };
                else if (u) {
                    var t = !0,
                        r = document.createTextNode("");
                    new u(e).observe(r, {
                        characterData: !0
                    }), o = function() {
                        r.data = t = !t
                    }
                } else if (f && f.resolve) {
                    var s = f.resolve();
                    o = function() {
                        s.then(e)
                    }
                } else o = function() {
                    a.call(O, e)
                };
                return function(e) {
                    var t = {
                        fn: e,
                        next: undefined
                    };
                    i && (i.next = t), n || (n = t, o()), i = t
                }
            }
        }),
        oe = e(function(e) {
            "use strict";

            function t(e) {
                var r, n;
                this.promise = new e(function(e, t) {
                    if (r !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
                    r = e, n = t
                }), this.resolve = N(r), this.reject = N(n)
            }
            e.exports.f = function(e) {
                return new t(e)
            }
        }),
        se = e(function(e) {
            e.exports = function(e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    }
                } catch (t) {
                    return {
                        e: !0,
                        v: t
                    }
                }
            }
        }),
        ae = e(function(e) {
            e.exports = function(e, t) {
                if (p(e), L(t) && t.constructor === e) return t;
                var r = oe.f(e);
                return (0, r.resolve)(t), r.promise
            }
        }),
        ue = e(function(e) {
            e.exports = function(e, t, r) {
                for (var n in t) M(e, n, t[n], r);
                return e
            }
        }),
        ce = e(function(e) {
            "use strict";
            var r = j("species");
            e.exports = function(e) {
                var t = O[e];
                n && t && !t[r] && c.f(t, r, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }),
        fe = e(function(e) {
            var o = j("iterator"),
                s = !1;
            try {
                var t = [7][o]();
                t["return"] = function() {
                    s = !0
                }, Array.from(t, function() {
                    throw 2
                })
            } catch (a) {}
            e.exports = function(e, t) {
                if (!t && !s) return !1;
                var r = !1;
                try {
                    var n = [7],
                        i = n[o]();
                    i.next = function() {
                        return {
                            done: r = !0
                        }
                    }, n[o] = function() {
                        return i
                    }, e(n)
                } catch (a) {}
                return r
            }
        });
    e(function() {
        "use strict";
        var r, t, n, i, e = ne.set,
            o = ie(),
            s = "Promise",
            l = O.TypeError,
            a = O.process,
            u = O[s],
            c = "process" == P(a),
            f = function() {},
            d = t = oe.f,
            h = !! function() {
                try {
                    var e = u.resolve(1),
                        t = (e.constructor = {})[j("species")] = function(e) {
                            e(f, f)
                        };
                    return (c || "function" == typeof PromiseRejectionEvent) && e.then(f) instanceof t
                } catch (r) {}
            }(),
            p = function(e) {
                var t;
                return !(!L(e) || "function" != typeof(t = e.then)) && t
            },
            w = function(f, r) {
                if (!f._n) {
                    f._n = !0;
                    var n = f._c;
                    o(function() {
                        for (var u = f._v, c = 1 == f._s, e = 0, t = function(e) {
                                var t, r, n = c ? e.ok : e.fail,
                                    i = e.resolve,
                                    o = e.reject,
                                    s = e.domain;
                                try {
                                    n ? (c || (2 == f._h && v(f), f._h = 1), !0 === n ? t = u : (s && s.enter(), t = n(u), s && s.exit()), t === e.promise ? o(l("Promise-chain cycle")) : (r = p(t)) ? r.call(t, i, o) : i(t)) : o(u)
                                } catch (a) {
                                    o(a)
                                }
                            }; n.length > e;) t(n[e++]);
                        f._c = [], f._n = !1, r && !f._h && y(f)
                    })
                }
            },
            y = function(o) {
                e.call(O, function() {
                    var e, t, r, n = o._v,
                        i = m(o);
                    if (i && (e = se(function() {
                            c ? a.emit("unhandledRejection", n, o) : (t = O.onunhandledrejection) ? t({
                                promise: o,
                                reason: n
                            }) : (r = O.console) && r.error && r.error("Unhandled promise rejection", n)
                        }), o._h = c || m(o) ? 2 : 1), o._a = undefined, i && e.e) throw e.v
                })
            },
            m = function(e) {
                if (1 == e._h) return !1;
                for (var t, r = e._a || e._c, n = 0; r.length > n;)
                    if ((t = r[n++]).fail || !m(t.promise)) return !1;
                return !0
            },
            v = function(t) {
                e.call(O, function() {
                    var e;
                    c ? a.emit("rejectionHandled", t) : (e = O.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            b = function(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), w(t, !0))
            },
            g = function(r) {
                var n, i = this;
                if (!i._d) {
                    i._d = !0, i = i._w || i;
                    try {
                        if (i === r) throw l("Promise can't be resolved itself");
                        (n = p(r)) ? o(function() {
                            var e = {
                                _w: i,
                                _d: !1
                            };
                            try {
                                n.call(r, F(g, e, 1), F(b, e, 1))
                            } catch (t) {
                                b.call(e, t)
                            }
                        }): (i._v = r, i._s = 1, w(i, !1))
                    } catch (e) {
                        b.call({
                            _w: i,
                            _d: !1
                        }, e)
                    }
                }
            };
        h || (u = function x(e) {
            Q(this, u, s, "_h"), N(e), r.call(this);
            try {
                e(F(g, this, 1), F(b, this, 1))
            } catch (t) {
                b.call(this, t)
            }
        }, (r = function _() {
            this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1
        }).prototype = ue(u.prototype, {
            then: function k(e, t) {
                var r = d(te(this, u));
                return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = c ? a.domain : undefined, this._c.push(r), this._a && this._a.push(r), this._s && w(this, !1), r.promise
            },
            "catch": function(e) {
                return this.then(undefined, e)
            }
        }), n = function() {
            var e = new r;
            this.promise = e, this.resolve = F(g, e, 1), this.reject = F(b, e, 1)
        }, oe.f = d = function(e) {
            return e === u || e === i ? new n(e) : t(e)
        }), C(C.G + C.W + C.F * !h, {
            Promise: u
        }), z(u, s), ce(s), i = B[s], C(C.S + C.F * !h, s, {
            reject: function S(e) {
                var t = d(this);
                return (0, t.reject)(e), t.promise
            }
        }), C(C.S + C.F * (R || !h), s, {
            resolve: function A(e) {
                return ae(R && this === i ? u : this, e)
            }
        }), C(C.S + C.F * !(h && fe(function(e) {
            u.all(e)["catch"](f)
        })), s, {
            all: function T(e) {
                var s = this,
                    t = d(s),
                    a = t.resolve,
                    u = t.reject,
                    r = se(function() {
                        var n = [],
                            i = 0,
                            o = 1;
                        ee(e, !1, function(e) {
                            var t = i++,
                                r = !1;
                            n.push(undefined), o++, s.resolve(e).then(function(e) {
                                r || (r = !0, n[t] = e, --o || a(n))
                            }, u)
                        }), --o || a(n)
                    });
                return r.e && u(r.v), t.promise
            },
            race: function E(e) {
                var t = this,
                    r = d(t),
                    n = r.reject,
                    i = se(function() {
                        ee(e, !1, function(e) {
                            t.resolve(e).then(r.resolve, n)
                        })
                    });
                return i.e && n(i.v), r.promise
            }
        })
    }), e(function(e) {
        e.exports = B.Promise
    });
    ! function(e) {
        "use strict";

        function n(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function i(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function o(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: e === undefined,
                        value: e
                    }
                }
            };
            return m.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function s(t) {
            this.map = {}, t instanceof s ? t.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(t) ? t.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function t(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function a(r) {
            return new Promise(function(e, t) {
                r.onload = function() {
                    e(r.result)
                }, r.onerror = function() {
                    t(r.error)
                }
            })
        }

        function r(e) {
            var t = new FileReader,
                r = a(t);
            return t.readAsArrayBuffer(e), r
        }

        function u(e) {
            var t = new FileReader,
                r = a(t);
            return t.readAsText(e), r
        }

        function c(e) {
            for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
            return r.join("")
        }

        function f(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function l() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (m.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (m.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (m.arrayBuffer && m.blob && b(e)) this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !g(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = f(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, m.blob && (this.blob = function() {
                var e = t(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? t(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(r)
            }), this.text = function() {
                var e = t(this);
                if (e) return e;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, m.formData && (this.formData = function() {
                return this.text().then(p)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function d(e) {
            var t = e.toUpperCase();
            return -1 < x.indexOf(t) ? t : e
        }

        function h(e, t) {
            var r = (t = t || {}).body;
            if (e instanceof h) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new s(e.headers)), this.method = e.method, this.mode = e.mode, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new s(t.headers)), this.method = d(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function p(e) {
            var i = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var t = e.split("="),
                        r = t.shift().replace(/\+/g, " "),
                        n = t.join("=").replace(/\+/g, " ");
                    i.append(decodeURIComponent(r), decodeURIComponent(n))
                }
            }), i
        }

        function w(e) {
            var i = new s;
            return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                var t = e.split(":"),
                    r = t.shift().trim();
                if (r) {
                    var n = t.join(":").trim();
                    i.append(r, n)
                }
            }), i
        }

        function y(e, t) {
            t || (t = {}), this.type = "default", this.status = t.status === undefined ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new s(t.headers), this.url = t.url || "", this._initBody(e)
        }
        if (!e.fetch) {
            var m = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (m.arrayBuffer) var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = function(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                },
                g = ArrayBuffer.isView || function(e) {
                    return e && -1 < v.indexOf(Object.prototype.toString.call(e))
                };
            s.prototype.append = function(e, t) {
                e = n(e), t = i(t);
                var r = this.map[e];
                this.map[e] = r ? r + "," + t : t
            }, s.prototype["delete"] = function(e) {
                delete this.map[n(e)]
            }, s.prototype.get = function(e) {
                return e = n(e), this.has(e) ? this.map[e] : null
            }, s.prototype.has = function(e) {
                return this.map.hasOwnProperty(n(e))
            }, s.prototype.set = function(e, t) {
                this.map[n(e)] = i(t)
            }, s.prototype.forEach = function(e, t) {
                for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
            }, s.prototype.keys = function() {
                var r = [];
                return this.forEach(function(e, t) {
                    r.push(t)
                }), o(r)
            }, s.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), o(t)
            }, s.prototype.entries = function() {
                var r = [];
                return this.forEach(function(e, t) {
                    r.push([t, e])
                }), o(r)
            }, m.iterable && (s.prototype[Symbol.iterator] = s.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            h.prototype.clone = function() {
                return new h(this, {
                    body: this._bodyInit
                })
            }, l.call(h.prototype), l.call(y.prototype), y.prototype.clone = function() {
                return new y(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new s(this.headers),
                    url: this.url
                })
            }, y.error = function() {
                var e = new y(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var _ = [301, 302, 303, 307, 308];
            y.redirect = function(e, t) {
                if (-1 === _.indexOf(t)) throw new RangeError("Invalid status code");
                return new y(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, e.Headers = s, e.Request = h, e.Response = y, e.fetch = function(i, o) {
                return new Promise(function(r, e) {
                    var t = new h(i, o),
                        n = new XMLHttpRequest;
                    n.onload = function() {
                        var e = {
                            status: n.status,
                            statusText: n.statusText,
                            headers: w(n.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in n ? n.responseURL : e.headers.get("X-Request-URL");
                        var t = "response" in n ? n.response : n.responseText;
                        r(new y(t, e))
                    }, n.onerror = function() {
                        e(new TypeError("Network request failed"))
                    }, n.ontimeout = function() {
                        e(new TypeError("Network request failed"))
                    }, n.open(t.method, t.url, !0), "include" === t.credentials ? n.withCredentials = !0 : "omit" === t.credentials && (n.withCredentials = !1), "responseType" in n && m.blob && (n.responseType = "blob"), t.headers.forEach(function(e, t) {
                        n.setRequestHeader(t, e)
                    }), n.send("undefined" == typeof t._bodyInit ? null : t._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this),
    function(e) {
        "use strict";

        function o(e, t, r, n) {
            var i = t && t.prototype instanceof a ? t : a,
                o = Object.create(i.prototype),
                s = new d(n || []);
            return o._invoke = u(e, r, s), o
        }

        function f(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                }
            } catch (n) {
                return {
                    type: "throw",
                    arg: n
                }
            }
        }

        function a() {}

        function r() {}

        function t() {}

        function n(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function s(a) {
            function u(e, t, r, n) {
                var i = f(a[e], a, t);
                if ("throw" !== i.type) {
                    var o = i.arg,
                        s = o.value;
                    return s && "object" == typeof s && m.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) {
                        u("next", e, r, n)
                    }, function(e) {
                        u("throw", e, r, n)
                    }) : Promise.resolve(s).then(function(e) {
                        o.value = e, r(o)
                    }, function(e) {
                        return u("throw", e, r, n)
                    })
                }
                n(i.arg)
            }

            function e(r, n) {
                function e() {
                    return new Promise(function(e, t) {
                        u(r, n, e, t)
                    })
                }
                return t = t ? t.then(e, e) : e()
            }
            var t;
            this._invoke = e
        }

        function u(o, s, a) {
            var u = S;
            return function c(e, t) {
                if (u === T) throw new Error("Generator is already running");
                if (u === E) {
                    if ("throw" === e) throw t;
                    return p()
                }
                for (a.method = e, a.arg = t;;) {
                    var r = a.delegate;
                    if (r) {
                        var n = l(r, a);
                        if (n) {
                            if (n === O) continue;
                            return n
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (u === S) throw u = E, a.arg;
                        a.dispatchException(a.arg)
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    u = T;
                    var i = f(o, s, a);
                    if ("normal" === i.type) {
                        if (u = a.done ? E : A, i.arg === O) continue;
                        return {
                            value: i.arg,
                            done: a.done
                        }
                    }
                    "throw" === i.type && (u = E, a.method = "throw", a.arg = i.arg)
                }
            }
        }

        function l(e, t) {
            var r = e.iterator[t.method];
            if (r === w) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator["return"] && (t.method = "return", t.arg = w, l(e, t), "throw" === t.method)) return O;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return O
            }
            var n = f(r, e.iterator, t.arg);
            if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, O;
            var i = n.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = w), t.delegate = null, O) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, O)
        }

        function i(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function c(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function d(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(i, this), this.reset(!0)
        }

        function h(e) {
            if (e) {
                var t = e[b];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var r = -1,
                        n = function n() {
                            for (; ++r < e.length;)
                                if (m.call(e, r)) return n.value = e[r], n.done = !1, n;
                            return n.value = w, n.done = !0, n
                        };
                    return n.next = n
                }
            }
            return {
                next: p
            }
        }

        function p() {
            return {
                value: w,
                done: !0
            }
        }
        var w, y = Object.prototype,
            m = y.hasOwnProperty,
            v = "function" == typeof Symbol ? Symbol : {},
            b = v.iterator || "@@iterator",
            g = v.asyncIterator || "@@asyncIterator",
            x = v.toStringTag || "@@toStringTag",
            _ = "object" == typeof module,
            k = e.regeneratorRuntime;
        if (k) _ && (module.exports = k);
        else {
            (k = e.regeneratorRuntime = _ ? module.exports : {}).wrap = o;
            var S = "suspendedStart",
                A = "suspendedYield",
                T = "executing",
                E = "completed",
                O = {},
                j = {};
            j[b] = function() {
                return this
            };
            var P = Object.getPrototypeOf,
                L = P && P(P(h([])));
            L && L !== y && m.call(L, b) && (j = L);
            var B = t.prototype = a.prototype = Object.create(j);
            r.prototype = B.constructor = t, t.constructor = r, t[x] = r.displayName = "GeneratorFunction", k.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === r || "GeneratorFunction" === (t.displayName || t.name))
            }, k.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t, x in e || (e[x] = "GeneratorFunction")), e.prototype = Object.create(B), e
            }, k.awrap = function(e) {
                return {
                    __await: e
                }
            }, n(s.prototype), s.prototype[g] = function() {
                return this
            }, k.AsyncIterator = s, k.async = function(e, t, r, n) {
                var i = new s(o(e, t, r, n));
                return k.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                    return e.done ? e.value : i.next()
                })
            }, n(B), B[x] = "Generator", B[b] = function() {
                return this
            }, B.toString = function() {
                return "[object Generator]"
            }, k.keys = function(t) {
                var r = [];
                for (var e in t) r.push(e);
                return r.reverse(),
                    function n() {
                        for (; r.length;) {
                            var e = r.pop();
                            if (e in t) return n.value = e, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, k.values = h, d.prototype = {
                constructor: d,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = w, this.done = !1, this.delegate = null, this.method = "next", this.arg = w, this.tryEntries.forEach(c), !e)
                        for (var t in this) "t" === t.charAt(0) && m.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = w)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    function e(e, t) {
                        return o.type = "throw", o.arg = r, n.next = e, t && (n.method = "next", n.arg = w), !!t
                    }
                    if (this.done) throw r;
                    for (var n = this, t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var i = this.tryEntries[t],
                            o = i.completion;
                        if ("root" === i.tryLoc) return e("end");
                        if (i.tryLoc <= this.prev) {
                            var s = m.call(i, "catchLoc"),
                                a = m.call(i, "finallyLoc");
                            if (s && a) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && m.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, O) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), O
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), c(r), O
                    }
                },
                "catch": function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                c(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: h(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = w), O
                }
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")());
    var le = e(function(j, P) {
            ! function(i, l) {
                "use strict";
                var e = "0.7.23",
                    o = "",
                    s = "?",
                    d = "function",
                    t = "undefined",
                    h = "object",
                    r = "string",
                    n = "major",
                    a = "model",
                    u = "name",
                    c = "type",
                    f = "vendor",
                    p = "version",
                    w = "architecture",
                    y = "console",
                    m = "mobile",
                    v = "tablet",
                    b = "smarttv",
                    g = "wearable",
                    x = "embedded",
                    _ = {
                        extend: function(e, t) {
                            var r = {};
                            for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                            return r
                        },
                        has: function(e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return typeof e === r ? e.replace(/[^\d\.]/g, "").split(".")[0] : l
                        },
                        trim: function(e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    k = {
                        rgx: function(e, t) {
                            for (var r, n, i, o, s, a, u = 0; u < t.length && !s;) {
                                var c = t[u],
                                    f = t[u + 1];
                                for (r = n = 0; r < c.length && !s;)
                                    if (s = c[r++].exec(e))
                                        for (i = 0; i < f.length; i++) a = s[++n], typeof(o = f[i]) === h && 0 < o.length ? 2 == o.length ? typeof o[1] == d ? this[o[0]] = o[1].call(this, a) : this[o[0]] = o[1] : 3 == o.length ? typeof o[1] !== d || o[1].exec && o[1].test ? this[o[0]] = a ? a.replace(o[1], o[2]) : l : this[o[0]] = a ? o[1].call(this, a, o[2]) : l : 4 == o.length && (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : l) : this[o] = a || l;
                                u += 2
                            }
                        },
                        str: function(e, t) {
                            for (var r in t)
                                if (typeof t[r] === h && 0 < t[r].length) {
                                    for (var n = 0; n < t[r].length; n++)
                                        if (_.has(t[r][n], e)) return r === s ? l : r
                                } else if (_.has(t[r], e)) return r === s ? l : r;
                            return e
                        }
                    },
                    S = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    A = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [u, p],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [u, "Opera Mini"], p
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [u, "Opera"], p
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                            [u, p],
                            [/(konqueror)\/([\w\.]+)/i],
                            [
                                [u,
                                    "Konqueror"
                                ], p
                            ],
                            [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
                            [
                                [u, "IE"], p
                            ],
                            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                            [
                                [u, "Edge"], p
                            ],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [u, "Yandex"], p
                            ],
                            [/(Avast)\/([\w\.]+)/i],
                            [
                                [u, "Avast Secure Browser"], p
                            ],
                            [/(AVG)\/([\w\.]+)/i],
                            [
                                [u, "AVG Secure Browser"], p
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [u, "Puffin"], p
                            ],
                            [/(focus)\/([\w\.]+)/i],
                            [
                                [u, "Firefox Focus"], p
                            ],
                            [/(opt)\/([\w\.]+)/i],
                            [
                                [u, "Opera Touch"], p
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [u, "UCBrowser"], p
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [u, /_/g, " "], p
                            ],
                            [/(windowswechat qbcore)\/([\w\.]+)/i],
                            [
                                [u, "WeChat(Win) Desktop"], p
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [u, "WeChat"], p
                            ],
                            [/(brave)\/([\w\.]+)/i],
                            [
                                [u, "Brave"], p
                            ],
                            [/(whale)\/([\w\.]+)/i],
                            [
                                [u, "Whale"], p
                            ],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [u, p],
                            [/(QQ)\/([\d\.]+)/i],
                            [u, p],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [u, p],
                            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                            [u, p],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [u, p],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [u],
                            [/(LBBROWSER)/i],
                            [u],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [p, [u, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [p, [u, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [u, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                            [u, p],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [p, [u, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1 WebView"], p
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [u, /(.+(?:g|us))(.+)/, "$1 $2"], p
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [p, [u, "Android Browser"]],
                            [/(sailfishbrowser)\/([\w\.]+)/i],
                            [
                                [u, "Sailfish Browser"], p
                            ],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [u, p],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [u, "Dolphin"], p
                            ],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [u, "360 Browser"]
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [u, "Chrome"], p
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [u, "Opera Coast"], p
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [p, [u, "Firefox"]],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [p, [u, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [p, u],
                            [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                [u, "GSA"], p
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [u, [p, k.str, S.browser.oldsafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [u, p],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [u, "Netscape"], p
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [u, p]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [w, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [w, _.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [w, "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [w, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [w, /ower/, "", _.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [w, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                [w, _.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                            [a, f, [c, v]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [a, [f, "Apple"],
                                [c, v]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [a, "Apple TV"],
                                [f, "Apple"],
                                [c, b]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [f, a, [c, v]],
                            [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
                            [a, [f, "Amazon"],
                                [c, v]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [a, k.str, S.device.amazon.model],
                                [f, "Amazon"],
                                [c, m]
                            ],
                            [/android.+aft([bms])\sbuild/i],
                            [a, [f, "Amazon"],
                                [c, b]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [a, f, [c, m]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [a, [f, "Apple"],
                                [c, m]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [f, a, [c, m]],
                            [/\(bb10;\s(\w+)/i],
                            [a, [f, "BlackBerry"],
                                [c, m]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                            [a, [f, "Asus"],
                                [c, v]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [f, "Sony"],
                                [a, "Xperia Tablet"],
                                [c, v]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [a, [f, "Sony"],
                                [c, m]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [f, a, [c, y]],
                            [/android.+;\s(shield)\sbuild/i],
                            [a, [f, "Nvidia"],
                                [c, y]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [a, [f, "Sony"],
                                [c, y]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [f, k.str, S.device.sprint.vendor],
                                [a, k.str, S.device.sprint.model],
                                [c, m]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [f, [a, /_/g, " "],
                                [c, m]
                            ],
                            [/(nexus\s9)/i],
                            [a, [f, "HTC"],
                                [c, v]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],
                            [a, [f, "Huawei"],
                                [c, m]
                            ],
                            [/android.+(bah2?-a?[lw]\d{2})/i],
                            [a, [f, "Huawei"],
                                [c, v]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [f, a, [c, m]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [a, [f, "Microsoft"],
                                [c, y]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [a, /\./g, " "],
                                [f, "Microsoft"],
                                [c, m]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [a, [f, "Motorola"],
                                [c, m]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [a, [f, "Motorola"],
                                [c, v]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [f, _.trim],
                                [a, _.trim],
                                [c, b]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [a, /^/, "SmartTV"],
                                [f, "Samsung"],
                                [c, b]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [a, [f, "Sharp"],
                                [c, b]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [f, "Samsung"], a, [c, v]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [c, b], a],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [
                                [f, "Samsung"], a, [c, m]
                            ],
                            [/sie-(\w*)/i],
                            [a, [f, "Siemens"],
                                [c, m]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [
                                [f, "Nokia"], a, [c, m]
                            ],
                            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [a, [f, "Acer"],
                                [c, v]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [a, [f, "LG"],
                                [c, v]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [f, "LG"], a, [c, v]
                            ],
                            [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
                            [
                                [f, "LG"], a, [c, b]
                            ],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [a, [f, "LG"],
                                [c, m]
                            ],
                            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                            [f, a, [c, v]],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [a, [f, "Lenovo"],
                                [c, v]
                            ],
                            [/(lenovo)[_\s-]?([\w-]+)/i],
                            [f, a, [c, m]],
                            [/linux;.+((jolla));/i],
                            [f, a, [c, m]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [f, a, [c, g]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [f, a, [c, m]],
                            [/crkey/i],
                            [
                                [a, "Chromecast"],
                                [f, "Google"],
                                [c, b]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [a, [f, "Google"],
                                [c, g]
                            ],
                            [/android.+;\s(pixel c)[\s)]/i],
                            [a, [f, "Google"],
                                [c, v]
                            ],
                            [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
                            [a, [f, "Google"],
                                [c, m]
                            ],
                            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [a, /_/g, " "],
                                [f, "Xiaomi"],
                                [c, m]
                            ],
                            [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
                            [
                                [a, /_/g, " "],
                                [f, "Xiaomi"],
                                [c, v]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [a, [f, "Meizu"],
                                [c, m]
                            ],
                            [/(mz)-([\w-]{2,})/i],
                            [
                                [f, "Meizu"], a, [c, m]
                            ],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                            [a, [f, "OnePlus"],
                                [c, m]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [a, [f, "RCA"],
                                [c, v]
                            ],
                            [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
                            [a, [f, "Dell"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [a, [f, "Verizon"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [f, "Barnes & Noble"], a, [c, v]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [a, [f, "NuVision"],
                                [c, v]
                            ],
                            [/android.+;\s(k88)\sbuild/i],
                            [a, [f, "ZTE"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [a, [f, "Swiss"],
                                [c, m]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [a, [f, "Swiss"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [a, [f, "Zeki"],
                                [c, v]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [
                                [f, "Dragon Touch"], a, [c, v]
                            ],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [a, [f, "Insignia"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [a, [f, "NextBook"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [f, "Voice"], a, [c, m]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [
                                [f, "LvTel"], a, [c, m]
                            ],
                            [/android.+;\s(PH-1)\s/i],
                            [a, [f, "Essential"],
                                [c, m]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [a, [f, "Envizen"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [f, a, [c, v]],
                            [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
                            [a, [f, "MachSpeed"],
                                [c, v]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [f, a, [c, v]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [a, [f, "Rotor"],
                                [c, v]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [f, a, [c, v]],
                            [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [a, [c, m]],
                            [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [a, [c, v]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [c, _.lowerize], f, a
                            ],
                            [/[\s\/\(](smart-?tv)[;\)]/i],
                            [
                                [c, b]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [a, [f, "Generic"]]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [p, [u, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [p, [u, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [u, p],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [p, u]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [u, p],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [u, [p, k.str, S.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [u, "Windows"],
                                [p, k.str, S.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [u, "BlackBerry"], p
                            ],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                            [u, p],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [
                                [u, "Symbian"], p
                            ],
                            [/\((series40);/i],
                            [u],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [u, "Firefox OS"], p
                            ],
                            [/crkey\/([\d\.]+)/i],
                            [p, [u, "Chromecast"]],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                            [u, p],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [u, "Chromium OS"], p
                            ],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [u, "Solaris"], p
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [u, p],
                            [/(haiku)\s(\w+)/i],
                            [u, p],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [p, /_/g, "."],
                                [u, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [u, "Mac OS"],
                                [p, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [u, p]
                        ]
                    },
                    T = function(e, t) {
                        if ("object" == typeof e && (t = e, e = l), !(this instanceof T)) return new T(e, t).getResult();
                        var r = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : o),
                            n = t ? _.extend(A, t) : A;
                        return this.getBrowser = function() {
                            var e = {
                                name: l,
                                version: l
                            };
                            return k.rgx.call(e, r, n.browser), e.major = _.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: l
                            };
                            return k.rgx.call(e, r, n.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: l,
                                model: l,
                                type: l
                            };
                            return k.rgx.call(e, r, n.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: l,
                                version: l
                            };
                            return k.rgx.call(e, r, n.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: l,
                                version: l
                            };
                            return k.rgx.call(e, r, n.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(e) {
                            return r = e, this
                        }, this
                    };
                T.VERSION = e, T.BROWSER = {
                    NAME: u,
                    MAJOR: n,
                    VERSION: p
                }, T.CPU = {
                    ARCHITECTURE: w
                }, T.DEVICE = {
                    MODEL: a,
                    VENDOR: f,
                    TYPE: c,
                    CONSOLE: y,
                    MOBILE: m,
                    SMARTTV: b,
                    TABLET: v,
                    WEARABLE: g,
                    EMBEDDED: x
                }, T.ENGINE = {
                    NAME: u,
                    VERSION: p
                }, T.OS = {
                    NAME: u,
                    VERSION: p
                }, "object" !== t ? ("object" !== t && j.exports && (P = j.exports = T), P.UAParser = T) : "function" == typeof define && define.amd ? define(function() {
                    return T
                }) : i && (i.UAParser = T);
                var E = i && (i.jQuery || i.Zepto);
                if (E && !E.ua) {
                    var O = new T;
                    E.ua = O.getResult(), E.ua.get = function() {
                        return O.getUA()
                    }, E.ua.set = function(e) {
                        O.setUA(e);
                        var t = O.getResult();
                        for (var r in t) E.ua[r] = t[r]
                    }
                }
            }("object" == typeof window ? window : this)
        }),
        de = e(function(e, t) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }

            function i(e) {
                return null == e ? {} : {
                    name: e.name,
                    version: e.version,
                    isMobile: e.isMobile,
                    isNativeApp: e.isNativeApp,
                    isDesktop: e.isDesktop
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.asPlainObject = i, t.Browser = void 0;
            var s = ["mobile", "tablet"],
                a = function() {
                    function i(e) {
                        var t = e.userAgent,
                            r = e.supported,
                            n = void 0 === r || r;
                        o(this, i), this.userAgent = void 0, this.supported = void 0, this.ua = void 0, this.userAgent = t, this.supported = n, this.ua = new le.UAParser(t)
                    }
                    return r(i, [{
                        key: "name",
                        get: function n() {
                            return this.ua.getBrowser().name || ""
                        }
                    }, {
                        key: "version",
                        get: function n() {
                            return this.ua.getBrowser().version || ""
                        }
                    }, {
                        key: "majorVersion",
                        get: function n() {
                            var e = this.version;
                            if ("" === e) return undefined;
                            var t = parseInt(e.split(".")[0], 10);
                            return Number.isNaN(t) ? undefined : t
                        }
                    }, {
                        key: "unknown",
                        get: function n() {
                            return "" === this.name
                        }
                    }, {
                        key: "isMobile",
                        get: function n() {
                            return s.includes(this.ua.getDevice().type)
                        }
                    }, {
                        key: "isDesktop",
                        get: function n() {
                            return !this.isMobile
                        }
                    }, {
                        key: "isNativeApp",
                        get: function n() {
                            return this.ua.getUA().includes("Shopify Mobile/", 0)
                        }
                    }, {
                        key: "os",
                        get: function n() {
                            return this.ua.getOS().name || ""
                        }
                    }, {
                        key: "isWindows",
                        get: function n() {
                            return this.os.includes("Windows")
                        }
                    }, {
                        key: "isMac",
                        get: function n() {
                            return this.os.includes("Mac OS")
                        }
                    }, {
                        key: "isSafari",
                        get: function n() {
                            return this.name.includes("Safari")
                        }
                    }, {
                        key: "isChrome",
                        get: function n() {
                            return this.name.includes("Chrome")
                        }
                    }, {
                        key: "isAndroidChrome",
                        get: function n() {
                            return this.ua.getUA().includes("Android") && this.name.includes("Chrome")
                        }
                    }, {
                        key: "isFirefox",
                        get: function n() {
                            return "Firefox" === this.name
                        }
                    }, {
                        key: "isIE",
                        get: function n() {
                            return this.name.includes("IE")
                        }
                    }, {
                        key: "isEdge",
                        get: function n() {
                            return "Edge" === this.name
                        }
                    }, {
                        key: "isIOS",
                        get: function n() {
                            var e = this.ua.getOS(),
                                t = e.name && e.name.includes("iOS"),
                                r = /Shopify Mobile|Shopify POS|Shopify Ping/.test(this.userAgent) && this.userAgent.includes("iOS");
                            return t || r
                        }
                    }]), i
                }();
            t.Browser = a
        }),
        he = e(function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Browser", {
                enumerable: !0,
                get: function r() {
                    return de.Browser
                }
            }), Object.defineProperty(t, "asPlainObject", {
                enumerable: !0,
                get: function r() {
                    return de.asPlainObject
                }
            })
        }),
        pe = e(function(e) {
            e.exports = he
        }),
        we = e(function(e, t) {
            "use strict";

            function r() {
                var e = new RegExp(f + "=([^;]+)").exec(document.cookie);
                return e ? decodeURIComponent(e[1]).toLowerCase() : null
            }

            function u() {
                var e = new RegExp(l + "=([^;]+)").exec(document.cookie);
                return e ? e[1] : null
            }

            function c() {
                return window.ShopifyAnalytics && window.ShopifyAnalytics.lib && window.ShopifyAnalytics.lib.config && window.ShopifyAnalytics.lib.config.Trekkie && window.ShopifyAnalytics.lib.config.Trekkie.defaultAttributes && window.ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId ? ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId : null
            }

            function n(e, t) {
                var r = 1 < arguments.length && t !== undefined ? arguments[1] : 8760,
                    n = (new Date).getTime(),
                    i = new Date(n + 60 * r * 60 * 1e3);
                document.cookie = f + "=" + e + "; expires=" + i.toGMTString() + "; path=/"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, o, s = (i = y(regeneratorRuntime.mark(function d() {
                    return regeneratorRuntime.wrap(function t(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 === new pe.Browser({
                                        userAgent: navigator.userAgent
                                    }).isSafari) return e.abrupt("return");
                                e.next = 3;
                                break;
                            case 3:
                                if (null !== r()) return e.abrupt("return");
                                e.next = 6;
                                break;
                            case 6:
                                return e.next = 8, a();
                            case 8:
                                !0 === e.sent ? n("true") : n("pending", 1);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, d, this)
                })), function h() {
                    return i.apply(this, arguments)
                }),
                a = (o = y(regeneratorRuntime.mark(function p() {
                    var t, r, n, i, o, s;
                    return regeneratorRuntime.wrap(function a(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, t = "https://" + window.ShopifyPay.apiHost + "/session?v=1", r = u(), n = c(), null !== r && null !== n && (t += "&token=" + r + "&shop_id=" + n), e.next = 7, fetch(t, {
                                    credentials: "include"
                                });
                            case 7:
                                return i = e.sent, e.next = 10, i.json();
                            case 10:
                                return o = e.sent, s = o.eligible, e.abrupt("return", s);
                            case 15:
                                return e.prev = 15, e.t0 = e["catch"](0), e.abrupt("return", !1);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }, p, this, [
                        [0, 15]
                    ])
                })), function w() {
                    return o.apply(this, arguments)
                });
            t.setRedirectState = n;
            var f = "shopify_pay_redirect",
                l = "_shopify_y";
            t["default"] = s
        });
    e(function() {
        "use strict";
        (0, t(we)["default"])()
    })
}("undefined" != typeof global ? global : "undefined" != typeof window && window);
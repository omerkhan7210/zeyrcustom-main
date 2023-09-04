(() => {
    var e = {
            747: function(e, t, n) {
                var o, r, i;
                ! function(a, s) {
                    "use strict";
                    r = [n(18)], void 0 === (i = "function" == typeof(o = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            n = /^\s*at .*(\S+:\d+|\(native\))/m,
                            o = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !!e.match(n)
                                }), this).map((function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        o = n.match(/ (\(.+\)$)/);
                                    n = o ? n.replace(o[0], "") : n;
                                    var r = this.extractLocation(o ? o[1] : n),
                                        i = o && n || void 0,
                                        a = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0];
                                    return new e({
                                        functionName: i,
                                        fileName: a,
                                        lineNumber: r[1],
                                        columnNumber: r[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !e.match(o)
                                }), this).map((function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        o = t.match(n),
                                        r = o && o[1] ? o[1] : void 0,
                                        i = this.extractLocation(t.replace(n, ""));
                                    return new e({
                                        functionName: r,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, o = t.message.split("\n"), r = [], i = 2, a = o.length; i < a; i += 2) {
                                    var s = n.exec(o[i]);
                                    s && r.push(new e({
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: o[i]
                                    }))
                                }
                                return r
                            },
                            parseOpera10: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, o = t.stacktrace.split("\n"), r = [], i = 0, a = o.length; i < a; i += 2) {
                                    var s = n.exec(o[i]);
                                    s && r.push(new e({
                                        functionName: s[3] || void 0,
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: o[i]
                                    }))
                                }
                                return r
                            },
                            parseOpera11: function(n) {
                                return n.stack.split("\n").filter((function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }), this).map((function(t) {
                                    var n, o = t.split("@"),
                                        r = this.extractLocation(o.pop()),
                                        i = o.shift() || "",
                                        a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                    return new e({
                                        functionName: a,
                                        args: s,
                                        fileName: r[0],
                                        lineNumber: r[1],
                                        columnNumber: r[2],
                                        source: t
                                    })
                                }), this)
                            }
                        }
                    }) ? o.apply(t, r) : o) || (e.exports = i)
                }()
            },
            18: function(e, t) {
                var n, o, r;
                ! function(i, a) {
                    "use strict";
                    o = [], void 0 === (r = "function" == typeof(n = function() {
                        function e(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function t(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            o = ["columnNumber", "lineNumber"],
                            r = ["fileName", "functionName", "source"],
                            i = n.concat(o, r, ["args"], ["evalOrigin"]);

                        function a(t) {
                            if (t)
                                for (var n = 0; n < i.length; n++) void 0 !== t[i[n]] && this["set" + e(i[n])](t[i[n]])
                        }
                        a.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof a) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new a(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    n = this.getColumnNumber() || "",
                                    o = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : o ? o + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                            }
                        }, a.fromString = function(e) {
                            var t = e.indexOf("("),
                                n = e.lastIndexOf(")"),
                                o = e.substring(0, t),
                                r = e.substring(t + 1, n).split(","),
                                i = e.substring(n + 1);
                            if (0 === i.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                                c = s[1],
                                l = s[2],
                                u = s[3];
                            return new a({
                                functionName: o,
                                args: r || void 0,
                                fileName: c,
                                lineNumber: l || void 0,
                                columnNumber: u || void 0
                            })
                        };
                        for (var s = 0; s < n.length; s++) a.prototype["get" + e(n[s])] = t(n[s]), a.prototype["set" + e(n[s])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(n[s]);
                        for (var c = 0; c < o.length; c++) a.prototype["get" + e(o[c])] = t(o[c]), a.prototype["set" + e(o[c])] = function(e) {
                            return function(t) {
                                if (n = t, isNaN(parseFloat(n)) || !isFinite(n)) throw new TypeError(e + " must be a Number");
                                var n;
                                this[e] = Number(t)
                            }
                        }(o[c]);
                        for (var l = 0; l < r.length; l++) a.prototype["get" + e(r[l])] = t(r[l]), a.prototype["set" + e(r[l])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(r[l]);
                        return a
                    }) ? n.apply(t, o) : n) || (e.exports = r)
                }()
            },
            700: function(e, t, n) {
                var o;
                ! function(r, i) {
                    "use strict";
                    var a = "function",
                        s = "undefined",
                        c = "object",
                        l = "string",
                        u = "model",
                        d = "name",
                        f = "type",
                        p = "vendor",
                        m = "version",
                        h = "architecture",
                        b = "console",
                        w = "mobile",
                        g = "tablet",
                        v = "smarttv",
                        y = "wearable",
                        E = "embedded",
                        _ = "Amazon",
                        x = "Apple",
                        C = "ASUS",
                        A = "BlackBerry",
                        T = "Google",
                        S = "Huawei",
                        k = "LG",
                        N = "Microsoft",
                        I = "Motorola",
                        R = "Samsung",
                        P = "Sharp",
                        O = "Sony",
                        L = "Xiaomi",
                        D = "Zebra",
                        M = "Facebook",
                        U = "Chromium OS",
                        j = "Mac OS",
                        B = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        $ = function(e, t) {
                            return typeof e === l && -1 !== G(t).indexOf(G(e))
                        },
                        G = function(e) {
                            return e.toLowerCase()
                        },
                        F = function(e, t) {
                            if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
                        },
                        V = function(e, t) {
                            for (var n, o, r, s, l, u, d = 0; d < t.length && !l;) {
                                var f = t[d],
                                    p = t[d + 1];
                                for (n = o = 0; n < f.length && !l && f[n];)
                                    if (l = f[n++].exec(e))
                                        for (r = 0; r < p.length; r++) u = l[++o], typeof(s = p[r]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : i : this[s[0]] = u ? s[1].call(this, u, s[2]) : i : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : i) : this[s] = u || i;
                                d += 2
                            }
                        },
                        K = function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === c && t[n].length > 0) {
                                    for (var o = 0; o < t[n].length; o++)
                                        if ($(t[n][o], e)) return "?" === n ? i : n
                                } else if ($(t[n], e)) return "?" === n ? i : n;
                            return e
                        },
                        Y = {
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
                        },
                        q = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [m, [d, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [m, [d, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [d, m],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [m, [d, "Opera Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [m, [d, "Opera"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [d, m],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [m, [d, "UCBrowser"]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [m, [d, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [m, [d, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [m, [d, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [m, [d, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [m, [d, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [d, /(.+)/, "$1 Secure Browser"], m
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [m, [d, "Firefox Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [m, [d, "Opera Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [m, [d, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [m, [d, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [m, [d, "Opera Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [m, [d, "MIUI Browser"]],
                                [/fxios\/([-\w\.]+)/i],
                                [m, [d, "Firefox"]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [d, "360 Browser"]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [d, /(.+)/, "$1 Browser"], m
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [d, /_/g, " "], m
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [d, m],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [d],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [d, M], m
                                ],
                                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [d, m],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [m, [d, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [m, [d, "Chrome Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [d, "Chrome WebView"], m
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [m, [d, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [d, m],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [m, [d, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [m, d],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [d, [m, K, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [d, m],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [d, "Netscape"], m
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [m, [d, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [d, m],
                                [/(cobalt)\/([\w\.]+)/i],
                                [d, [m, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [h, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [h, G]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [h, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [h, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [h, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [h, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [h, /ower/, "", G]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [h, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [h, G]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [u, [p, R],
                                    [f, g]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [u, [p, R],
                                    [f, w]
                                ],
                                [/\((ip(?:hone|od)[\w ]*);/i],
                                [u, [p, x],
                                    [f, w]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [u, [p, x],
                                    [f, g]
                                ],
                                [/(macintosh);/i],
                                [u, [p, x]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [u, [p, P],
                                    [f, w]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [u, [p, S],
                                    [f, g]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [u, [p, S],
                                    [f, w]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [p, L],
                                    [f, w]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [p, L],
                                    [f, g]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [u, [p, "OPPO"],
                                    [f, w]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [u, [p, "Vivo"],
                                    [f, w]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [u, [p, "Realme"],
                                    [f, w]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [u, [p, I],
                                    [f, w]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [u, [p, I],
                                    [f, g]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [u, [p, k],
                                    [f, g]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [u, [p, k],
                                    [f, w]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [u, [p, "Lenovo"],
                                    [f, g]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [u, /_/g, " "],
                                    [p, "Nokia"],
                                    [f, w]
                                ],
                                [/(pixel c)\b/i],
                                [u, [p, T],
                                    [f, g]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [u, [p, T],
                                    [f, w]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [u, [p, O],
                                    [f, w]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [u, "Xperia Tablet"],
                                    [p, O],
                                    [f, g]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [u, [p, "OnePlus"],
                                    [f, w]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [u, [p, _],
                                    [f, g]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [u, /(.+)/g, "Fire Phone $1"],
                                    [p, _],
                                    [f, w]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [u, p, [f, g]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [u, [p, A],
                                    [f, w]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [u, [p, C],
                                    [f, g]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [u, [p, C],
                                    [f, w]
                                ],
                                [/(nexus 9)/i],
                                [u, [p, "HTC"],
                                    [f, g]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [p, [u, /_/g, " "],
                                    [f, w]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [u, [p, "Acer"],
                                    [f, g]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [u, [p, "Meizu"],
                                    [f, w]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [p, u, [f, w]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [p, u, [f, g]],
                                [/(surface duo)/i],
                                [u, [p, N],
                                    [f, g]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [u, [p, "Fairphone"],
                                    [f, w]
                                ],
                                [/(u304aa)/i],
                                [u, [p, "AT&T"],
                                    [f, w]
                                ],
                                [/\bsie-(\w*)/i],
                                [u, [p, "Siemens"],
                                    [f, w]
                                ],
                                [/\b(rct\w+) b/i],
                                [u, [p, "RCA"],
                                    [f, g]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [u, [p, "Dell"],
                                    [f, g]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [u, [p, "Verizon"],
                                    [f, g]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [u, [p, "Barnes & Noble"],
                                    [f, g]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [u, [p, "NuVision"],
                                    [f, g]
                                ],
                                [/\b(k88) b/i],
                                [u, [p, "ZTE"],
                                    [f, g]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [u, [p, "ZTE"],
                                    [f, w]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [u, [p, "Swiss"],
                                    [f, w]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [u, [p, "Swiss"],
                                    [f, g]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [u, [p, "Zeki"],
                                    [f, g]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [p, "Dragon Touch"], u, [f, g]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [u, [p, "Insignia"],
                                    [f, g]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [u, [p, "NextBook"],
                                    [f, g]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [p, "Voice"], u, [f, w]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [p, "LvTel"], u, [f, w]
                                ],
                                [/\b(ph-1) /i],
                                [u, [p, "Essential"],
                                    [f, w]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [u, [p, "Envizen"],
                                    [f, g]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [u, [p, "MachSpeed"],
                                    [f, g]
                                ],
                                [/\btu_(1491) b/i],
                                [u, [p, "Rotor"],
                                    [f, g]
                                ],
                                [/(shield[\w ]+) b/i],
                                [u, [p, "Nvidia"],
                                    [f, g]
                                ],
                                [/(sprint) (\w+)/i],
                                [p, u, [f, w]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [u, /\./g, " "],
                                    [p, N],
                                    [f, w]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [u, [p, D],
                                    [f, g]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [u, [p, D],
                                    [f, w]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [p, [f, v]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [u, /^/, "SmartTV"],
                                    [p, R],
                                    [f, v]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [p, k],
                                    [f, v]
                                ],
                                [/(apple) ?tv/i],
                                [p, [u, "Apple TV"],
                                    [f, v]
                                ],
                                [/crkey/i],
                                [
                                    [u, "Chromecast"],
                                    [p, T],
                                    [f, v]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [u, [p, _],
                                    [f, v]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [u, [p, P],
                                    [f, v]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [u, [p, O],
                                    [f, v]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [u, [p, L],
                                    [f, v]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [p, u, [f, v]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [p, F],
                                    [u, F],
                                    [f, v]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [f, v]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [p, u, [f, b]],
                                [/droid.+; (shield) bui/i],
                                [u, [p, "Nvidia"],
                                    [f, b]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [u, [p, O],
                                    [f, b]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [u, [p, N],
                                    [f, b]
                                ],
                                [/((pebble))app/i],
                                [p, u, [f, y]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [u, [p, x],
                                    [f, y]
                                ],
                                [/droid.+; (glass) \d/i],
                                [u, [p, T],
                                    [f, y]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [u, [p, D],
                                    [f, y]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [u, [p, M],
                                    [f, y]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [p, [f, E]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [u, [f, w]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [u, [f, g]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [f, g]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [f, w]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [u, [p, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [m, [d, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [m, [d, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                [d, m],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [m, d]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [d, m],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [d, [m, K, Y]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [d, "Windows"],
                                    [m, K, Y]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [m, /_/g, "."],
                                    [d, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [d, j],
                                    [m, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [m, d],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [d, m],
                                [/\(bb(10);/i],
                                [m, [d, A]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [m, [d, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [m, [d, "Firefox OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [m, [d, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [m, [d, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [m, [d, "Chromecast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [d, U], m
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [d, m],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [d, "Solaris"], m
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                [d, m]
                            ]
                        },
                        z = function(e, t) {
                            if (typeof e === c && (t = e, e = i), !(this instanceof z)) return new z(e, t).getResult();
                            var n = typeof r !== s && r.navigator ? r.navigator : i,
                                o = e || (n && n.userAgent ? n.userAgent : ""),
                                u = n && n.userAgentData ? n.userAgentData : i,
                                d = t ? function(e, t) {
                                    var n = {};
                                    for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                                    return n
                                }(q, t) : q;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t.name = i, t.version = i, V.call(t, o, d.browser), t.major = typeof(e = t.version) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, n && n.brave && typeof n.brave.isBrave == a && (t.name = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e.architecture = i, V.call(e, o, d.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e.vendor = i, e.model = i, e.type = i, V.call(e, o, d.device), !e.type && u && u.mobile && (e.type = w), "Macintosh" == e.model && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e.model = "iPad", e.type = g), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e.name = i, e.version = i, V.call(e, o, d.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e.name = i, e.version = i, V.call(e, o, d.os), !e.name && u && "Unknown" != u.platform && (e.name = u.platform.replace(/chrome os/i, U).replace(/macos/i, j)), e
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
                                return o
                            }, this.setUA = function(e) {
                                return o = typeof e === l && e.length > 350 ? F(e, 350) : e, this
                            }, this.setUA(o), this
                        };
                    z.VERSION = "1.0.34", z.BROWSER = B([d, m, "major"]), z.CPU = B([h]), z.DEVICE = B([u, p, f, b, w, v, g, y, E]), z.ENGINE = z.OS = B([d, m]), typeof t !== s ? (e.exports && (t = e.exports = z), t.UAParser = z) : n.amdO ? (o = function() {
                        return z
                    }.call(t, n, t, e)) === i || (e.exports = o) : typeof r !== s && (r.UAParser = z);
                    var H = typeof r !== s && (r.jQuery || r.Zepto);
                    if (H && !H.ua) {
                        var X = new z;
                        H.ua = X.getResult(), H.ua.get = function() {
                            return X.getUA()
                        }, H.ua.set = function(e) {
                            X.setUA(e);
                            var t = X.getResult();
                            for (var n in t) H.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            }
        },
        t = {};

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.exports
    }
    n.amdO = {}, (() => {
        "use strict";
        const e = "product_added_to_cart";

        function t() {
            return window
        }
        let o, r, i, a, s, c, l, u, d = "OFF";

        function f(e, n, o) {
            const {
                jQuery: r
            } = t();
            r && r(e).bind ? r(e).bind(n, o) : e.addEventListener && e.addEventListener(n, o)
        }

        function p(e, t) {
            "ON" === d && console && console.warn && console.warn(`[pixel_shop_events_listener] Error in ${e}:  ${t.message}`)
        }

        function m(e) {
            f(window, "load", (() => {
                for (const t of document.forms) e(t)
            }))
        }

        function h(e, t, n) {
            if (t.length !== n.length) throw Error("Payload body and response have different number of items");
            t.forEach(((t, o) => {
                let r = 1;
                try {
                    r = parseInt(n[o].quantity, 10) || 1
                } catch (i) {
                    p("handleBulkItemCartAddResponse", i)
                }
                w(e, t, r)
            }))
        }

        function b(e, n, o, r, i) {
            const a = ((null === (c = null === (l = t()) || void 0 === l ? void 0 : l.ShopifyAnalytics) || void 0 === c ? void 0 : c.meta) || {}).currency,
                s = {
                    id: String(n.id),
                    image: {
                        src: n.image
                    },
                    price: {
                        amount: n.price / ("add" === i ? 100 : 1),
                        currencyCode: a
                    },
                    product: {
                        id: String(n.product_id),
                        title: n.title,
                        vendor: n.vendor,
                        type: n.product_type,
                        untranslatedTitle: n.untranslated_product_title
                    },
                    sku: n.sku,
                    title: n.variant_title,
                    untranslatedTitle: n.untranslated_variant_title
                };
            var c, l;
            e(r, {
                cartLine: {
                    cost: {
                        totalAmount: {
                            amount: s.price.amount * o,
                            currencyCode: a
                        }
                    },
                    merchandise: s,
                    quantity: o
                }
            })
        }

        function w(t, n, o, r = "add") {
            b(t, n, o, e, r)
        }

        function g(e, t) {
            const n = t.items_added,
                o = t.items_removed;
            n.forEach((t => {
                w(e, t, null == t ? void 0 : t.quantity, "change")
            })), o.forEach((t => {
                ! function(e, t, n, o) {
                    b(e, t, n, "product_removed_from_cart", "change")
                }(e, t, null == t ? void 0 : t.quantity)
            }))
        }

        function v(e) {
            if (!e) return 1;
            try {
                return JSON.parse(e).quantity || 1
            } catch (t) {
                if (e instanceof FormData) {
                    if (e.has("quantity")) return Number(e.get("quantity"))
                } else {
                    const t = e.split("&");
                    for (const e of t) {
                        const t = e.split("=");
                        if ("quantity" === t[0]) return Number(t[1])
                    }
                }
            }
            return 1
        }
        class y {
            static handleXhrOpen() {}
            static handleXhrDone(e) {
                try {
                    const t = document.createElement("a");
                    t.href = e.url;
                    const n = t.pathname ? t.pathname : e.url;
                    y.ADD_TO_CART_REGEX.test(n) ? y.parsePayloadResponse(e, (t => {
                        const n = Object.keys(t);
                        if (1 === n.length && "items" === n[0]) {
                            const n = t.items;
                            let r;
                            try {
                                r = JSON.parse(e.body).items
                            } catch (o) {
                                r = function(e, t) {
                                    const n = new Array(t);
                                    for (let o = 0; o < t; o++) n[o] = {};
                                    for (const o of decodeURI(e).split("&")) {
                                        const e = o.split("="),
                                            t = e[0].match(/items\[(\d+)\]\[(\w+)\].*/);
                                        if (t) {
                                            const o = Number(t[1]),
                                                r = t[2];
                                            "quantity" === r ? n[o].quantity = e[1] : "id" === r && (n[o].id = e[1])
                                        }
                                    }
                                    return n
                                }(e.body, n.length)
                            }
                            h(e.publish, n, r)
                        } else w(e.publish, t, v(e.body))
                    })) : y.CHANGE_TO_CART_REGEX.test(n) && y.parsePayloadResponse(e, (t => {
                        g(e.publish, t)
                    }))
                } catch (t) {
                    p("handleXhrDone", t)
                }
            }
            static parseBlobToJson(e, t) {
                const n = new FileReader;
                n.addEventListener("loadend", (() => {
                    t(JSON.parse(String.fromCharCode(...new Uint8Array(n.result))))
                })), n.readAsArrayBuffer(e)
            }
            static parsePayloadResponse(e, t) {
                e.xhr.response instanceof Blob ? y.parseBlobToJson(e.xhr.response, t) : e.xhr.responseText && t(JSON.parse(e.xhr.responseText))
            }
            constructor(e, t, n, o, r) {
                this.oldOnReadyStateChange = void 0, this.xhr = void 0, this.url = void 0, this.method = void 0, this.body = void 0, this.publish = void 0, this.xhr = e, this.url = t, this.method = n, this.body = o, this.publish = r
            }
            onReadyStateChange() {
                this.xhr.readyState === XMLHttpRequest.DONE && y.handleXhrDone({
                    method: this.method,
                    url: this.url,
                    body: this.body,
                    xhr: this.xhr,
                    publish: this.publish
                }), this.oldOnReadyStateChange && this.oldOnReadyStateChange.call(this.xhr, new Event("oldOnReadyStateChange"))
            }
        }

        function E(n, o) {
            ! function(e, t) {
                const n = e.prototype.open,
                    o = e.prototype.send;
                e.prototype.open = function(e, t) {
                    this._url = t, this._method = e, n.apply(this, arguments)
                }, e.prototype.send = function(e) {
                    if (!(e instanceof Document)) {
                        const n = new y(this, this._url, this._method, e || "", t);
                        this.addEventListener ? this.addEventListener("readystatechange", n.onReadyStateChange.bind(n), !1) : (n.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = n.onReadyStateChange)
                    }
                    o.call(this, e)
                }
            }(XMLHttpRequest, n),
            function(e, t) {
                const n = e.fetch;

                function o(e, n) {
                    e.clone().json().then((e => {
                        const o = n.items,
                            r = e.items;
                        return h(t, r, o), e
                    })).catch(a)
                }

                function r(e, n) {
                    const o = v(n);
                    e.clone().json().then((e => w(t, e, o))).catch(a)
                }

                function i(e) {
                    e.clone().json().then((e => {
                        g(t, e)
                    })).catch(a)
                }

                function a(e) {
                    p("handleFetchRequest", e)
                }
                "function" == typeof n && (e.fetch = function(...e) {
                    return n.apply(this, Array.prototype.slice.call(e)).then((e => {
                        if (!e.ok) return e;
                        const t = document.createElement("a");
                        t.href = e.url;
                        const n = t.pathname ? t.pathname : e.url;
                        try {
                            if (y.ADD_TO_CART_REGEX.test(n)) {
                                try {
                                    const t = JSON.parse(arguments[1].body);
                                    if (Object.keys(t).includes("items")) return o(e, t), e
                                } catch (s) {
                                    a(s)
                                }
                                r(e, arguments[1].body)
                            } else y.CHANGE_TO_CART_REGEX.test(n) && i(e)
                        } catch (s) {
                            a(s)
                        }
                        return e
                    }))
                })
            }(t(), n), m((t => {
                const r = t.getAttribute("action");
                r && r.indexOf("/cart/add") >= 0 && f(t, "submit", (t => {
                    ! function(t, n, o) {
                        const r = n || window.event;
                        if (r.defaultPrevented || r.isDefaultPrevented && r.isDefaultPrevented()) return;
                        const i = r.currentTarget || r.srcElement;
                        if (i && i instanceof Element && (i.getAttribute("action") || i.getAttribute("href"))) try {
                            const n = function(e) {
                                let t;
                                const n = e.querySelector('[name="id"]');
                                return n instanceof HTMLSelectElement && n.options ? t = n.options[n.selectedIndex] : (n instanceof HTMLOptionElement || n instanceof HTMLInputElement) && (t = n), t
                            }(i);
                            if (!n) return;
                            const r = n.value,
                                a = function(e) {
                                    const t = e.querySelector('[name="quantity"]');
                                    return t instanceof HTMLInputElement ? Number(t.value) : 1
                                }(i),
                                s = function(e, t) {
                                    var n;
                                    let o;
                                    const r = null === (n = t.productVariants) || void 0 === n ? void 0 : n.filter((t => t.id === e));
                                    if (!r || !r.length) throw new Error("Product variant not found");
                                    return o = { ...r[0]
                                    }, o
                                }(r, o),
                                c = {
                                    cost: {
                                        totalAmount: {
                                            amount: s.price.amount * a,
                                            currencyCode: s.price.currencyCode
                                        }
                                    },
                                    merchandise: s,
                                    quantity: a
                                };
                            t(e, {
                                cartLine: c
                            })
                        } catch (a) {
                            p("handleSubmitCartAdd", a)
                        }
                    }(n, t, o)
                }))
            }))
        }

        function _(e, t, n) {
            var o;
            null != n && n.logLevel && (o = n.logLevel, d = o), E(e, t),
                function(e, t) {
                    m((n => {
                        const o = n.querySelector('[name="previous_step"]');
                        o && o instanceof HTMLInputElement && "payment_method" === o.value && f(document.body, "submit", (n => {
                            ! function(e, t, n) {
                                const o = t || window.event,
                                    r = o.target || o.srcElement;
                                if (r && r instanceof HTMLFormElement && r.getAttribute("action") && null !== r.getAttribute("data-payment-form")) try {
                                    const t = n.checkout;
                                    if (!t) throw new Error("Checkout data not found");
                                    e("payment_info_submitted", {
                                        checkout: t
                                    })
                                } catch (i) {
                                    p("handleSubmitToPaymentAdd", i)
                                }
                            }(e, n, t)
                        }))
                    }))
                }(e, t)
        }
        var x, C, A, T, S;
        y.ADD_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/add(?:\.js|\.json)?$/, y.CHANGE_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/change(?:\.js|\.json)?$/,
            function(e) {
                e.TRACKING_ACCEPTED = "trackingConsentAccepted", e.TRACKING_DECLINED = "trackingConsentDeclined", e.FIRST_PARTY_MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", e.THIRD_PARTY_MARKETING_ACCEPTED = "thirdPartyMarketingConsentAccepted", e.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", e.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", e.FIRST_PARTY_MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", e.THIRD_PARTY_MARKETING_DECLINED = "thirdPartyMarketingConsentDeclined", e.ANALYTICS_DECLINED = "analyticsConsentDeclined", e.PREFERENCES_DECLINED = "preferencesConsentDeclined", e.CONSENT_COLLECTED = "visitorConsentCollected"
            }(o || (o = {})),
            function(e) {
                e.ACCEPTED = "yes", e.DECLINED = "no", e.NO_INTERACTION = "no_interaction", e.NO_VALUE = ""
            }(r || (r = {})), (S = i || (i = {})).NO_VALUE = "", S.ACCEPTED = "1", S.DECLINED = "0", (T = a || (a = {})).GDPR = "GDPR", T.CCPA = "CCPA", T.NO_VALUE = "",
            function(e) {
                e.PREFERENCES = "p", e.ANALYTICS = "a", e.FIRST_PARTY_MARKETING = "m", e.THIRD_PARTY_MARKETING = "t"
            }(s || (s = {})), (A = c || (c = {})).GDPR = "GDPR", A.GDPR_BLOCK_ALL = "GDPR_BLOCK_ALL", A.CCPA = "CCPA", (C = l || (l = {})).MARKETING = "m", C.ANALYTICS = "a", C.PREFERENCES = "p", C.SALE_OF_DATA = "s", (x = u || (u = {})).MARKETING = "marketing", x.ANALYTICS = "analytics", x.PREFERENCES = "preferences", x.SALE_OF_DATA = "sale_of_data", x.EMAIL = "email";
        const k = ["lim", "v", "con", "reg"];
        let N = {};

        function I(e) {
            if (e in N) return N[e];
            const t = document.cookie ? document.cookie.split("; ") : [];
            N[e] = void 0;
            for (let n = 0; n < t.length; n++) {
                const [o, r] = t[n].split("=");
                if (e === decodeURIComponent(o)) {
                    N[e] = JSON.parse(decodeURIComponent(r));
                    break
                }
            }
            return N[e]
        }

        function R() {
            N = {}
        }

        function P(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(Object(n), !0).forEach((function(t) {
                    L(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function L(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function D() {
            try {
                let e = function() {
                    const e = I("_tracking_consent");
                    if (void 0 !== e && "2.1" === (t = e).v && function(e, t) {
                            const n = t.slice().sort();
                            return e.length === t.length && e.slice().sort().every(((e, t) => e === n[t]))
                        }(Object.keys(t).filter((e => "region" !== e)), k)) return e;
                    var t
                }();
                if (!e) return;
                return e
            } catch (e) {
                return
            }
        }

        function M() {
            return {
                m: B(l.MARKETING),
                a: B(l.ANALYTICS),
                p: B(l.PREFERENCES),
                s: B(l.SALE_OF_DATA)
            }
        }

        function U() {
            return M()[l.SALE_OF_DATA]
        }

        function j(e = null) {
            return null === e && (e = D()), void 0 === e
        }

        function B(e) {
            const t = D();
            if (!t) return i.NO_VALUE;
            const n = t.con.CMP;
            return n ? n[e] : i.NO_VALUE
        }

        function $() {
            return I("_cmp_a")
        }

        function G(e) {
            const t = $();
            if (!t) return !0;
            const n = t.purposes[e];
            return "boolean" != typeof n || n
        }

        function F() {
            return G(s.PREFERENCES)
        }

        function V() {
            return G(s.ANALYTICS)
        }

        function K() {
            return G(s.FIRST_PARTY_MARKETING)
        }

        function Y() {
            return G(s.THIRD_PARTY_MARKETING)
        }
        const q = {
            "": [],
            GDPR: [c.GDPR, c.GDPR_BLOCK_ALL],
            CCPA: [c.CCPA]
        };

        function z(e, t) {
            document.dispatchEvent(new CustomEvent(e, {
                detail: t || {}
            }))
        }

        function H(e) {
            !0 === e[s.FIRST_PARTY_MARKETING] ? z(o.FIRST_PARTY_MARKETING_ACCEPTED) : !1 === e[s.FIRST_PARTY_MARKETING] && z(o.FIRST_PARTY_MARKETING_DECLINED), !0 === e[s.THIRD_PARTY_MARKETING] ? z(o.THIRD_PARTY_MARKETING_ACCEPTED) : !1 === e[s.THIRD_PARTY_MARKETING] && z(o.THIRD_PARTY_MARKETING_DECLINED), !0 === e[s.ANALYTICS] ? z(o.ANALYTICS_ACCEPTED) : !1 === e[s.ANALYTICS] && z(o.ANALYTICS_DECLINED), !0 === e[s.PREFERENCES] ? z(o.PREFERENCES_ACCEPTED) : !1 === e[s.PREFERENCES] && z(o.PREFERENCES_DECLINED);
            const t = function(e) {
                return {
                    firstPartyMarketingAllowed: e[s.FIRST_PARTY_MARKETING],
                    thirdPartyMarketingAllowed: e[s.THIRD_PARTY_MARKETING],
                    analyticsAllowed: e[s.ANALYTICS],
                    preferencesAllowed: e[s.PREFERENCES]
                }
            }(e);
            z(o.CONSENT_COLLECTED, t)
        }

        function X(e, t) {
            const n = new XMLHttpRequest,
                r = JSON.stringify(e);
            n.open("POST", "/set_tracking_consent.json", !0), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function() {
                if (4 !== n.readyState) return;
                R();
                const r = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return {
                            error: "Unknown error"
                        }
                    }
                }(n.responseText);
                var i;
                0 === (i = n.status) || 200 >= i && i < 400 ? (function(e) {
                    void 0 !== e.consent ? (!0 === e.consent ? z(o.TRACKING_ACCEPTED) : z(o.TRACKING_DECLINED), H({
                        [s.PREFERENCES]: e.consent,
                        [s.ANALYTICS]: e.consent,
                        [s.FIRST_PARTY_MARKETING]: e.consent,
                        [s.THIRD_PARTY_MARKETING]: e.consent
                    })) : void 0 !== e.granular_consent && H({
                        [s.PREFERENCES]: F(),
                        [s.ANALYTICS]: V(),
                        [s.FIRST_PARTY_MARKETING]: K(),
                        [s.THIRD_PARTY_MARKETING]: Y()
                    })
                }(e), t(null, r)) : t(r)
            }, n.send(r)
        }

        function W() {
            if (j()) return r.NO_VALUE;
            const e = M();
            return e[l.MARKETING] === i.ACCEPTED && e[l.ANALYTICS] === i.ACCEPTED ? r.ACCEPTED : e[l.MARKETING] === i.DECLINED || e[l.ANALYTICS] === i.DECLINED ? r.DECLINED : r.NO_INTERACTION
        }

        function J() {
            const e = function() {
                const e = D();
                return j(e) ? a.NO_VALUE : e.reg
            }();
            return e in a ? e : a.NO_VALUE
        }

        function Z() {
            return function() {
                const e = D();
                return j(e) ? {
                    limit: []
                } : {
                    limit: e.lim
                }
            }()
        }

        function Q(e) {
            return re(c.GDPR_BLOCK_ALL) && e ? te() ? document.referrer : "" : null
        }

        function ee(e) {
            return re(c.GDPR_BLOCK_ALL) && e ? te() ? window.location.pathname + window.location.search : "/" : null
        }

        function te() {
            if ("" === document.referrer) return !0;
            const e = document.createElement("a");
            return e.href = document.referrer, window.location.hostname != e.hostname
        }

        function ne() {
            const e = J();
            if (e === a.NO_VALUE) return !1;
            const t = Z();
            return 0 !== t.limit.length && t.limit.some((t => function(e, t) {
                return q[e].includes(t)
            }(e, t)))
        }

        function oe() {
            return !!j() || function() {
                if (!re(c.GDPR) && !re(c.GDPR_BLOCK_ALL)) return !0;
                const e = M();
                return e[l.MARKETING] === i.ACCEPTED && e[l.ANALYTICS] === i.ACCEPTED || e[l.MARKETING] !== i.DECLINED && e[l.ANALYTICS] !== i.DECLINED && J() !== a.GDPR
            }()
        }

        function re(e) {
            return Z().limit.includes(e)
        }

        function ie() {
            return J() !== a.CCPA ? null : re(c.CCPA) ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
        }

        function ae() {
            return !1 === ie() ? r.DECLINED : (e = U(), j() ? r.NO_VALUE : e === i.NO_VALUE ? r.NO_INTERACTION : function(e) {
                switch (e) {
                    case i.ACCEPTED:
                        return r.ACCEPTED;
                    case i.DECLINED:
                        return r.DECLINED;
                    default:
                        return r.NO_VALUE
                }
            }(e));
            var e
        }
        const se = {
            getTrackingConsent: W,
            setTrackingConsent: function(e, t) {
                if (j()) {
                    const e = "Shop is not configured to block privacy regulation in online store settings.";
                    return console.warn(e), t({
                        error: e
                    })
                }
                if (function(e) {
                        if ("boolean" != typeof e && "object" != typeof e) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                        if ("object" == typeof e) {
                            const t = Object.keys(e);
                            if (0 === t.length) throw TypeError("The submitted consent object is empty.");
                            const n = [u.MARKETING, u.ANALYTICS, u.PREFERENCES, u.SALE_OF_DATA, u.EMAIL];
                            for (const e of t)
                                if (!n.includes(e)) throw TypeError(`The submitted consent object should only contain the following keys: ${n.join(", ")}.`)
                        }
                    }(e), "function" != typeof t) throw TypeError("setTrackingConsent must be called with a callback function");
                if ("object" == typeof e) {
                    const n = Q(e.analytics),
                        o = ee(e.analytics);
                    return X(O(O({
                        granular_consent: e
                    }, null !== n && {
                        referrer: n
                    }), null !== o && {
                        landing_page: o
                    }), t)
                } {
                    const n = Q(e),
                        o = ee(e);
                    return X(O(O({
                        consent: e
                    }, null !== n && {
                        referrer: n
                    }), null !== o && {
                        landing_page: o
                    }), t)
                }
            },
            userCanBeTracked: oe,
            getRegulation: J,
            isRegulationEnforced: ne,
            getShopPrefs: Z,
            shouldShowGDPRBanner: function() {
                return J() === a.GDPR && ne() && W() === r.NO_INTERACTION
            },
            userDataCanBeSold: function() {
                const e = ie(),
                    t = !re(c.CCPA) || U() !== i.DECLINED;
                return null !== e && !1 !== t ? e : !!j() || !1 !== oe() && t
            },
            setCCPAConsent: function(e, t) {
                if ("boolean" != typeof e) throw TypeError("setCCPAConsent must be called with a boolean consent value");
                if ("function" != typeof t) throw TypeError("setCCPAConsent must be called with a callback function");
                return X({
                    ccpa_consent: e
                }, t)
            },
            getCCPAConsent: ae,
            GPCSignal: ie,
            shouldShowCCPABanner: function() {
                return J() === a.CCPA && Z().limit.includes(c.CCPA) && ae() === r.NO_INTERACTION
            },
            haveAnalyticsConsent: function() {
                return V()
            },
            havePreferencesConsent: function() {
                return F()
            },
            haveFirstPartyMarketingConsent: function() {
                return K()
            },
            haveThirdPartyMarketingConsent: function() {
                return Y()
            },
            getCCPAConsentValue: U,
            merchantEnforcingRegulationLimit: re,
            shouldShowBanner: function() {
                return function() {
                    const e = $();
                    return !!e && "boolean" == typeof e.display_banner && e.display_banner
                }() && B(l.ANALYTICS) === i.NO_VALUE && B(l.MARKETING) === i.NO_VALUE && B(l.PREFERENCES) === i.NO_VALUE
            },
            saleOfDataRegion: function() {
                return function() {
                    const e = $();
                    return e && e.sale_of_data_region || !1
                }()
            }
        };

        function ce() {
            return se.userCanBeTracked()
        }
        let le, ue;

        function de(e) {
            return `${e||"sh"}-${function(){const e="xxxx-4xxx-xxxx-xxxxxxxxxxxx";let t="";try{const n=window.crypto,o=new Uint16Array(31);n.getRandomValues(o);let r=0;t=e.replace(/[x]/g,(e=>{const t=o[r]%16;return r++,("x"===e?t:3&t|8).toString(16)})).toUpperCase()}catch(n){t=e.replace(/[x]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})).toUpperCase()}return`
            $ {
                function() {
                    let e = 0,
                        t = 0;
                    e = (new Date).getTime() >>> 0;
                    try {
                        t = performance.now() >>> 0
                    } catch (n) {
                        t = 0
                    }
                    const o = Math.abs(e + t).toString(16).toLowerCase();
                    return "00000000".substr(0, 8 - o.length) + o
                }()
            } - $ {
                t
            }
            `}()}`
        }

        function fe() {
            const e = window;
            e.Shopify = e.Shopify || {}, e.Shopify.evids || (le = {
                page_viewed: {},
                collection_viewed: {},
                product_viewed: {},
                product_variant_viewed: {},
                search_submitted: {},
                product_added_to_cart: {},
                checkout_started: {},
                checkout_completed: {},
                payment_info_submitted: {},
                session_started: {},
                checkout_contact_step_started: {},
                checkout_contact_info_submitted: {},
                checkout_address_info_submitted: {},
                checkout_shipping_step_started: {},
                checkout_shipping_info_submitted: {},
                checkout_payment_step_started: {}
            }, ue = {
                wpm: {},
                trekkie: {}
            }, e.Shopify.evids = (e, t) => function(e, t) {
                if (!le[e] || "trekkie" !== (null == t ? void 0 : t.analyticsFramework) && "wpm" !== (null == t ? void 0 : t.analyticsFramework)) return de("shu");
                const n = "string" == typeof(o = t.cacheKey) && o ? o : "default";
                var o;
                const r = function(e, t, n) {
                    const o = ue[t];
                    return void 0 === o[e] && (o[e] = {}), void 0 === o[e][n] ? o[e][n] = 0 : o[e][n] += 1, o[e][n]
                }(e, t.analyticsFramework, n);
                return function(e, t, n) {
                    const o = le[e];
                    if (void 0 === o[n]) {
                        const e = de();
                        o[n] = [e]
                    } else if (void 0 === o[n][t]) {
                        const e = de();
                        o[n].push(e)
                    }
                    return o[n][t]
                }(e, r, n)
            }(e, t))
        }
        const pe = new Set;
        var me = function(e) {
                (e || []).forEach((e => pe.add(e)))
            },
            he = function(e) {
                return pe.has(e)
            };
        const be = "production",
            we = "0.0.348",
            ge = "modern",
            ve = "ec723c2bwabad86f4p128c48a1medb251db",
            ye = {
                test: "edge_test_click/1.0",
                load: "web_pixels_manager_load/3.1",
                init: "web_pixels_manager_init/3.2",
                register: "web_pixels_manager_pixel_register/3.5",
                subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/3.3",
                eventPublish: "web_pixels_manager_event_publish/1.5",
                consentAccepted: "web_pixels_manager_consent_accepted/1.2",
                unload: "web_pixels_manager_unload/1.1",
                visitor: "web_pixels_manager_visitor/1.0"
            };

        function Ee(e, t) {
            return {
                schemaId: ye[e],
                payload: t
            }
        }
        const _e = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        let xe;
        const Ce = new Uint8Array(16);

        function Ae() {
            if (!xe && (xe = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !xe)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return xe(Ce)
        }
        const Te = [];
        for (let n = 0; n < 256; ++n) Te.push((n + 256).toString(16).slice(1));
        const Se = function(e, t, n) {
            if (_e.randomUUID && !t && !e) return _e.randomUUID();
            const o = (e = e || {}).random || (e.rng || Ae)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                return t
            }
            return function(e, t = 0) {
                return (Te[e[t + 0]] + Te[e[t + 1]] + Te[e[t + 2]] + Te[e[t + 3]] + "-" + Te[e[t + 4]] + Te[e[t + 5]] + "-" + Te[e[t + 6]] + Te[e[t + 7]] + "-" + Te[e[t + 8]] + Te[e[t + 9]] + "-" + Te[e[t + 10]] + Te[e[t + 11]] + Te[e[t + 12]] + Te[e[t + 13]] + Te[e[t + 14]] + Te[e[t + 15]]).toLowerCase()
            }(o)
        };
        let ke;

        function Ne() {
            return ke || (ke = function() {
                let e;
                try {
                    var t, n;
                    e = null !== (t = window.Shopify) && void 0 !== t && t.evids ? null === (n = window.Shopify) || void 0 === n ? void 0 : n.evids("session_started", {
                        analyticsFramework: "wpm"
                    }) : Se()
                } catch (o) {
                    e = Se()
                }
                return e
            }()), ke
        }

        function Ie(e) {
            return e.replace(/\/$/, "")
        }
        const Re = {},
            Pe = {
                "pixel:register": {
                    start: {
                        name: "pixel:register:started",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    },
                    end: {
                        name: "pixel:register:completed",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    }
                },
                "page:session": {
                    start: {
                        name: "start",
                        params: Re
                    },
                    end: {
                        name: "page:unload",
                        params: Re
                    }
                },
                completed: {
                    start: {
                        name: "start",
                        params: Re
                    },
                    end: {
                        name: "pixels:resolved",
                        params: Re
                    }
                }
            };

        function Oe(e, t = Re) {
            const n = function(e, t, n) {
                    try {
                        const t = Le(e, "end", n);
                        return self.performance.mark(t), {
                            name: t,
                            params: n
                        }
                    } catch (o) {
                        return {
                            name: null,
                            params: n
                        }
                    }
                }(e, 0, t),
                o = function(e, t) {
                    try {
                        const n = Le(e, "start", t),
                            o = Le(e, "end", t),
                            r = function(e, t) {
                                return De(e, t)
                            }(e, t);
                        return self.performance.measure(r, n, o)
                    } catch (n) {
                        return null
                    }
                }(e, t);
            return {
                mark: n,
                measurement: o
            }
        }

        function Le(e, t, n) {
            return De(Pe[e][t].name, n)
        }

        function De(e, t) {
            const n = ["wpm", e];
            return t && Object.keys(t).forEach((e => {
                n.push(t[e])
            })), n.join(":")
        }

        function Me(e) {
            const t = {};
            for (const n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    const o = n.replace(/[A-Z]/g, (e => `_${e}`)).toLowerCase(),
                        r = e[n];
                    t[o] = null !== r && "object" == typeof r ? Me(r) : r
                }
            return t
        }
        var Ue = n(700),
            je = n(747);
        class Be extends Error {
            constructor(...e) {
                super(...e), Error.captureStackTrace && Error.captureStackTrace(this, Be)
            }
        }
        class $e extends Error {
            constructor(...e) {
                super(...e), this.message = "Excessive Stacktrace: May indicate infinite loop forming"
            }
        }
        const Ge = {
                development: "https://web-pixels-manager.myshopify.io/bugsnag",
                production: "https://notify.bugsnag.com",
                test: "https://localhost"
            },
            Fe = (e, t) => {
                try {
                    var n, o, r;
                    if (null != t && null !== (n = t.options) && void 0 !== n && n.sampleRate && ! function(e) {
                            if (e <= 0 || e > 100) throw new Error("Invalid sampling percent");
                            return 100 * Math.random() <= e
                        }(t.options.sampleRate)) return;
                    const s = {
                            severity: "error",
                            context: "",
                            unhandled: !0,
                            library: "browser",
                            ...t
                        },
                        c = function(t) {
                            try {
                                return new Ue(t).getResult()
                            } catch (e) {
                                return {
                                    ua: "",
                                    browser: {
                                        name: "",
                                        version: "",
                                        major: ""
                                    },
                                    engine: {
                                        name: "",
                                        version: ""
                                    },
                                    os: {
                                        name: "",
                                        version: ""
                                    },
                                    device: {
                                        model: "",
                                        type: "",
                                        vendor: ""
                                    },
                                    cpu: {
                                        architecture: ""
                                    }
                                }
                            }
                        }(s.userAgent || (null === (o = self.navigator) || void 0 === o ? void 0 : o.userAgent));
                    let l = {
                        errorClass: null == e ? void 0 : e.name,
                        message: null == e ? void 0 : e.message,
                        stacktrace: [],
                        type: "browserjs"
                    };
                    try {
                        l = function(e) {
                            if (t = e, !Boolean(t) || !(Boolean(t.stack) || Boolean(t.stacktrace) || Boolean(t["opera#sourceloc"])) || "string" != typeof(t.stack || t.stacktrace || t["opera#sourceloc"]) || t.stack === `${t.name}: ${t.message}`) throw new Error("Error incompatible with error-stack-parser");
                            var t;
                            const n = je.parse(e).reduce(((e, t) => {
                                const n = function(e) {
                                    const t = {
                                        file: e.fileName,
                                        method: (n = e.functionName, /^global code$/i.test(n || "") ? "global code" : n),
                                        lineNumber: e.lineNumber,
                                        columnNumber: e.columnNumber
                                    };
                                    var n;
                                    return t.lineNumber && t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t
                                }(t);
                                try {
                                    return "{}" === JSON.stringify(n) ? e : e.concat(n)
                                } catch (o) {
                                    return e
                                }
                            }), []);
                            return {
                                errorClass: null == e ? void 0 : e.name,
                                message: null == e ? void 0 : e.message,
                                stacktrace: n,
                                type: "browserjs"
                            }
                        }(e)
                    } catch (i) {
                        try {
                            l = function(e, t) {
                                let n = "";
                                const o = {
                                    lineNumber: "1",
                                    columnNumber: "1",
                                    method: t.context,
                                    file: "https://cdn.shopify.com/bec723c2bwabad86f4p128c48a1medb251dbm.js"
                                };
                                if (e.stackTrace || e.stack || e.description) {
                                    n = e.stack.split("\n")[0];
                                    const t = e.stack.match(/([0-9]+):([0-9]+)/);
                                    if (t && t.length > 2 && (o.lineNumber = t[1], o.columnNumber = t[2], parseInt(o.lineNumber, 10) > 1e5)) throw new $e
                                }
                                return {
                                    errorClass: (null == e ? void 0 : e.name) || n,
                                    message: (null == e ? void 0 : e.message) || n,
                                    stacktrace: [o],
                                    type: "browserjs"
                                }
                            }(e, s)
                        } catch (a) {
                            if (a instanceof $e) return
                        }
                    }
                    const u = Ge[be];
                    if (!u) return;
                    fetch(u, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                            "Bugsnag-Payload-Version": "5"
                        },
                        body: JSON.stringify({
                            payloadVersion: 5,
                            notifier: {
                                name: "web-pixel-manager",
                                version: we,
                                url: "-"
                            },
                            events: [{
                                exceptions: [l],
                                context: s.context,
                                severity: s.severity,
                                unhandled: s.unhandled,
                                app: {
                                    version: we
                                },
                                device: {
                                    manufacturer: c.device.vendor,
                                    model: c.device.model,
                                    osName: c.os.name,
                                    osVersion: c.os.version,
                                    browserName: c.browser.name,
                                    browserVersion: c.browser.version
                                },
                                metaData: {
                                    app: {
                                        library: s.library,
                                        browserTarget: ge,
                                        env: be,
                                        hashVersion: ve,
                                        hashVersionSandbox: s.hashVersionSandbox || "N/A",
                                        sandboxUrl: s.sandboxUrl || "N/A"
                                    },
                                    device: {
                                        userAgent: s.userAgent || (null === (r = self.navigator) || void 0 === r ? void 0 : r.userAgent),
                                        renderingEngineName: c.engine.name,
                                        renderingEngineVersion: c.engine.version
                                    },
                                    request: {
                                        shopId: s.shopId,
                                        shopUrl: self.location.href,
                                        pixelId: s.pixelId,
                                        pixelType: s.pixelType,
                                        runtimeContext: s.runtimeContext
                                    },
                                    "Additional Notes": {
                                        initConfig: JSON.stringify(s.initConfig),
                                        notes: s.notes
                                    }
                                }
                            }]
                        })
                    }).catch((() => {}))
                } catch (s) {}
            };
        let Ve = "";

        function Ke(e = "") {
            Ve = Ie(e)
        }
        const Ye = new Array;
        let qe;

        function ze(e, t = !1) {
            const n = {
                schema_id: e.schemaId,
                payload: Me(e.payload),
                metadata: {
                    event_created_at_ms: We()
                }
            };
            Ye.push(n), t ? Xe() : void 0 === qe && (qe = setTimeout(Xe, 500))
        }

        function He(e, t, n = !1) {
            ze(Ee(e, t), n)
        }

        function Xe({
            skipXhr: e
        } = {
            skipXhr: !1
        }) {
            if (qe = void 0, 0 === Ye.length) return;
            const t = [...Ye];
            Ye.length = 0,
                function(e, t) {
                    if (0 === e.length) return !1;
                    const n = {
                        metadata: {
                            event_sent_at_ms: We()
                        },
                        events: e
                    };
                    ! function(e, t) {
                        const n = `${Ve}/.well-known/shopify/monorail/unstable/produce_batch`;
                        try {
                            if (self.navigator.sendBeacon.bind(self.navigator)(n, e)) return !0
                        } catch (o) {}
                        if (!t) {
                            const t = new XMLHttpRequest;
                            try {
                                t.open("POST", n, !0), t.setRequestHeader("Content-Type", "text/plain"), t.send(e)
                            } catch (r) {
                                Fe(r, {
                                    context: "refactor/utilities/monorail/sendRequest",
                                    unhandled: !1
                                })
                            }
                        }
                    }(JSON.stringify(n), t)
                }(t, e)
        }

        function We() {
            return (new Date).getTime()
        }
        class Je extends Set {
            constructor(e, t) {
                if (super(), this.maxSize = void 0, this.keep = void 0, Number.isFinite(e) && !Number.isInteger(e) || e <= 0) throw new Error("Invalid maxSize specified");
                this.maxSize = e, this.keep = t
            }
            push(e) {
                if ("oldest" === this.keep) this.size < this.maxSize && this.add(e);
                else if ("newest" === this.keep && (this.add(e), this.size > this.maxSize))
                    for (const t of this)
                        if (this.delete(t), this.size <= this.maxSize) break;
                return this
            }
        }
        const Ze = (e, t, n) => !0;
        class Qe {
            constructor({
                bufferSize: e = 50,
                replayKeep: t = "oldest",
                subscribeAllKey: n,
                eligibility: o
            } = {}) {
                this.channelSubscribers = new Map, this.replayQueue = void 0, this.bufferSize = void 0, this.replayKeep = void 0, this.subscribeAllKey = void 0, this.eligibility = void 0, this.bufferSize = e, this.replayKeep = t, this.subscribeAllKey = n, this.replayQueue = new Je(e, t), this.eligibility = null != o ? o : Ze
            }
            publish(e, t, n = {}) {
                var o;
                if (this.subscribeAllKey && e === this.subscribeAllKey) throw new Error(`Cannot publish to ${String(e)}`);
                this.replayQueue.push({
                    name: e,
                    payload: t,
                    options: n
                });
                const r = (o, r) => {
                    this.eligibility(n, o, e) && r.call({}, { ...t
                    })
                };
                var i;
                return null === (o = this.channelSubscribers.get(e)) || void 0 === o || o.forEach(r), this.subscribeAllKey && (null === (i = this.channelSubscribers.get(this.subscribeAllKey)) || void 0 === i || i.forEach(r)), !0
            }
            subscribe(e, t, n = {}) {
                const o = this.channelSubscribers.get(e) || new Map;
                return this.channelSubscribers.set(e, o.set(t, n)), this.replayQueue.forEach((({
                    name: o,
                    payload: r,
                    options: i
                }) => {
                    this.eligibility(i, n, e) && (e === o || this.subscribeAllKey && e === this.subscribeAllKey) && t.call({}, { ...r
                    })
                })), () => o.delete(t)
            }
        }
        let et;
        ! function(e) {
            e.Meta = "meta", e.Standard = "standard", e.Dom = "dom", e.Custom = "custom"
        }(et || (et = {}));
        const tt = {
            all_events: et.Meta,
            all_standard_events: et.Meta,
            all_custom_events: et.Meta,
            all_dom_events: et.Meta,
            checkout_address_info_submitted: et.Standard,
            checkout_completed: et.Standard,
            checkout_started: et.Standard,
            payment_info_submitted: et.Standard,
            collection_viewed: et.Standard,
            checkout_contact_info_submitted: et.Standard,
            page_viewed: et.Standard,
            product_added_to_cart: et.Standard,
            product_removed_from_cart: et.Standard,
            product_viewed: et.Standard,
            product_variant_viewed: et.Standard,
            search_submitted: et.Standard,
            cart_viewed: et.Standard,
            checkout_shipping_info_submitted: et.Standard,
            dom_element_changed: et.Dom,
            input_blurred: et.Dom,
            input_focused: et.Dom,
            custom_event: et.Custom
        };

        function nt(e) {
            return function(e) {
                return Boolean(tt[e])
            }(e) ? tt[e] : et.Custom
        }

        function ot(e) {
            return nt(e) === et.Standard
        }

        function rt(e) {
            return nt(e) === et.Dom
        }
        const it = ["checkout_completed", "checkout_started"],
            at = (e, t, n) => {
                const {
                    pixelRuntimeConfig: o
                } = t || {}, {
                    apiClientId: r,
                    restrictions: i
                } = o || {}, {
                    allowedEvents: a,
                    disallowedEvents: s
                } = i || {}, {
                    sendTo: c
                } = e || {}, l = c && String(c) === String(r), u = e.sendTo && !l, d = !a || a.includes(n), f = s && s.includes(n);
                return Boolean(d && !f && !u || l)
            };

        function st() {
            return /checkouts\/(.+)\/(thank_you|thank-you|post_purchase)$/.test(self.location.pathname)
        }
        const ct = ["[object String]", "[object Number]", "[object Boolean]", "[object Undefined]", "[object Null]"];

        function lt(e) {
            let t = null;

            function n(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            return void 0 === e || n(e) ? {
                isValid: function e(o) {
                    if (Array.isArray(o)) return o.every(e);
                    if (n(o)) return Object.keys(o).every((t => e(o[t])));
                    const r = ct.includes(Object.prototype.toString.call(o));
                    return r || (t = `${o} must be one of the following types: ${ct.join(", ")}`), r
                }(e),
                error: t
            } : (t = `${e} must be an object`, {
                isValid: !1,
                error: t
            })
        }

        function ut() {
            return {
                document: {
                    location: {
                        href: window.location.href,
                        hash: window.location.hash,
                        host: window.location.host,
                        hostname: window.location.hostname,
                        origin: window.location.origin,
                        pathname: window.location.pathname,
                        port: window.location.port,
                        protocol: window.location.protocol,
                        search: window.location.search
                    },
                    referrer: document.referrer,
                    characterSet: document.characterSet,
                    title: document.title
                },
                navigator: {
                    language: navigator.language,
                    cookieEnabled: navigator.cookieEnabled,
                    languages: navigator.languages,
                    userAgent: navigator.userAgent
                },
                window: {
                    innerHeight: window.innerHeight,
                    innerWidth: window.innerWidth,
                    outerHeight: window.outerHeight,
                    outerWidth: window.outerWidth,
                    pageXOffset: window.pageXOffset,
                    pageYOffset: window.pageYOffset,
                    location: {
                        href: window.location.href,
                        hash: window.location.hash,
                        host: window.location.host,
                        hostname: window.location.hostname,
                        origin: window.location.origin,
                        pathname: window.location.pathname,
                        port: window.location.port,
                        protocol: window.location.protocol,
                        search: window.location.search
                    },
                    origin: window.origin,
                    screenX: window.screenX,
                    screenY: window.screenY,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY
                }
            }
        }

        function dt(e) {
            const t = {};
            for (const o of e.split(/ *; */)) {
                const e = o.split("=");
                try {
                    t[decodeURIComponent(e[0])] = decodeURIComponent(e[1] || "")
                } catch (n) {
                    continue
                }
            }
            return t
        }
        const ft = e => ({ ...e,
            clientId: dt(document.cookie)._shopify_y,
            timestamp: (new Date).toISOString(),
            context: ut(),
            id: "string" == typeof e.id && e.id.length > 0 ? e.id : Se()
        });

        function pt() {
            const e = se.getShopPrefs();
            return e.limit.includes(c.GDPR) ? "gdpr" : e.limit.includes(c.GDPR_BLOCK_ALL) ? "gdpr_block_all" : "unknown"
        }
        let mt = !1;

        function ht() {
            return new Promise(((e, t) => {
                if (ce()) return void e(!0);
                const n = t => {
                    R(),
                        function(e) {
                            const t = e.detail;
                            return !0 === (null == t ? void 0 : t.firstPartyMarketingAllowed) && !0 === (null == t ? void 0 : t.thirdPartyMarketingAllowed) && !0 === (null == t ? void 0 : t.analyticsAllowed)
                        }(t) && (document.removeEventListener(o.CONSENT_COLLECTED, n), e(!0))
                };
                document.addEventListener(o.CONSENT_COLLECTED, n)
            }))
        }
        const bt = new Set;
        let wt, gt;

        function vt(e) {
            return "shopify-custom-pixel" === e.id ? "shopify-pixel" : e.type === wt.Custom ? "-1" : e.apiClientId ? `${e.apiClientId}` : void 0
        }! function(e) {
            e.App = "APP", e.Custom = "CUSTOM"
        }(wt || (wt = {})),
        function(e) {
            e.Strict = "STRICT", e.Lax = "LAX", e.Unsandboxed = "UNSANDBOXED"
        }(gt || (gt = {}));
        const yt = "all_standard_events",
            Et = "all_custom_events",
            _t = "all_dom_events";

        function xt(e) {
            const t = new Qe({
                    bufferSize: Number.POSITIVE_INFINITY,
                    subscribeAllKey: yt,
                    eligibility: at
                }),
                n = new Qe({
                    bufferSize: 1e3,
                    subscribeAllKey: Et,
                    eligibility: at
                }),
                o = new Qe({
                    bufferSize: 1e3,
                    replayKeep: "newest",
                    subscribeAllKey: _t,
                    eligibility: at
                });
            e.initData;
            let r = !1;
            return {
                publish(n, o, i) {
                    var a, s, c;
                    if ("string" != typeof n) throw new Error("Expected event name to be a string, but got " + typeof n);
                    if (!ot(n)) return !1;
                    if ("checkout_completed" === n && st() && -1 !== document.cookie.indexOf("loggedConversion2=1")) return !1;
                    const l = lt(o);
                    if (!l.isValid) return console.error(l.error), !1;
                    const u = function(e, t, n) {
                        let o;
                        const r = {
                            analyticsFramework: "wpm"
                        };
                        try {
                            var i, a;
                            "product_added_to_cart" === e && "cartLine" in n && (r.cacheKey = function({
                                cartLine: e
                            } = {
                                cartLine: null
                            }) {
                                const t = null == e ? void 0 : e.merchandise.product.id,
                                    n = null == e ? void 0 : e.merchandise.id;
                                if (t && n) return `${t}-${n}`
                            }(n)), o = null === (i = window.Shopify) || void 0 === i || null === (a = i.evids) || void 0 === a ? void 0 : a.call(i, e, r)
                        } catch {}
                        return ft({
                            id: o,
                            name: e,
                            data: n
                        })
                    }(n, 0, o);
                    let d;
                    return function(e) {
                            return it.includes(e)
                        }(u.name) && (d = u.data.checkout.token), He("eventPublish", {
                            version: we,
                            bundleTarget: ge,
                            pageUrl: self.location.href,
                            shopId: e.shopId,
                            surface: e.surface || "unknown",
                            eventName: u.name,
                            eventType: "standard",
                            extensionId: null == i || null === (a = i.extension) || void 0 === a ? void 0 : a.extensionId,
                            extensionAppId: null == i || null === (s = i.extension) || void 0 === s ? void 0 : s.appId,
                            extensionType: null == i || null === (c = i.extension) || void 0 === c ? void 0 : c.type,
                            userCanBeTracked: ce().toString(),
                            shopPrefs: pt(),
                            eventId: u.id,
                            checkoutToken: d
                        }),
                        function(e) {
                            "checkout_completed" === e && function() {
                                if (st()) {
                                    const e = self.location.pathname.split("/").slice(0, -1).join("/"),
                                        t = new Date(Date.now());
                                    t.setMonth(t.getMonth() + 2), document.cookie = `loggedConversion2=1; expires=${t}; path=${e}`
                                }
                            }()
                        }(n), r || ce() || (r = !0, f = e.shopId, p = e.surface || "unknown", bt.add((() => function(e, t) {
                            mt || (mt = !0, He("consentAccepted", {
                                version: we,
                                bundleTarget: ge,
                                shopId: e,
                                surface: t,
                                shopPrefs: pt()
                            }))
                        }(f, p)))), t.publish(n, u);
                    var f, p
                },
                publishCustomEvent(t, o, r) {
                    var i, a, s;
                    if ("string" != typeof t) throw new Error("Expected event name to be a string, but got " + typeof t);
                    if (! function(e) {
                            return nt(e) === et.Custom
                        }(t)) return !1;
                    const c = lt(o);
                    if (!c.isValid) return console.error(c.error), !1;
                    const l = function(e, t, n = null) {
                        return ft({
                            name: e,
                            customData: n
                        })
                    }(t, 0, o);
                    return He("eventPublish", {
                        version: we,
                        bundleTarget: ge,
                        pageUrl: self.location.href,
                        shopId: e.shopId,
                        surface: e.surface || "unknown",
                        eventName: l.name,
                        eventType: "custom",
                        extensionId: null == r || null === (i = r.extension) || void 0 === i ? void 0 : i.extensionId,
                        extensionAppId: null == r || null === (a = r.extension) || void 0 === a ? void 0 : a.appId,
                        extensionType: null == r || null === (s = r.extension) || void 0 === s ? void 0 : s.type,
                        eventId: l.id
                    }), n.publish(t, l, r)
                },
                publishDomEvent(e, t, n) {
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new Error(`Expected event name "${t}" to be a string, but got ${typeof e}`)
                    }
                    if (!rt(e)) return !1;
                    if (!he("web_pixels_dom_analytics")) return !1;
                    const r = lt(t);
                    if (!r.isValid) return console.error(r.error), !1;
                    const i = function(e, t) {
                        return ft({
                            name: e,
                            data: t
                        })
                    }(e, t);
                    return o.publish(e, i)
                },
                subscribe(e, r, i = {}) {
                    const a = e => {
                        var t;
                        const n = i.schemaVersion || i.pixelRuntimeConfig.eventPayloadVersion;
                        r.call(e, e);
                        const o = nt(e.name);
                        He("subscriberEventEmit", {
                            version: we,
                            bundleTarget: ge,
                            pageUrl: self.location.href,
                            shopId: i.shopId,
                            surface: i.surface,
                            pixelId: i.pixelRuntimeConfig.id,
                            pixelAppId: vt(i.pixelRuntimeConfig),
                            pixelSource: i.pixelRuntimeConfig.type,
                            pixelRuntimeContext: i.pixelRuntimeConfig.runtimeContext,
                            pixelScriptVersion: i.pixelRuntimeConfig.scriptVersion,
                            pixelConfiguration: null === (t = i.pixelRuntimeConfig) || void 0 === t ? void 0 : t.configuration,
                            pixelEventSchemaVersion: n,
                            eventName: e.name,
                            eventType: o,
                            eventId: e.id
                        })
                    };
                    if ("all_events" === e) {
                        const e = t.subscribe(yt, a, i),
                            r = n.subscribe(Et, a, i),
                            s = o.subscribe(_t, a, i);
                        return () => {
                            const t = e(),
                                n = r(),
                                o = s();
                            return t && n && o
                        }
                    }
                    return e === Et ? n.subscribe(Et, a, i) : e === yt || ot(e) ? t.subscribe(e, a, i) : he("web_pixels_dom_analytics") && (e === _t || rt(e)) ? o.subscribe(e, a, i) : n.subscribe(e, a, i)
                }
            }
        }

        function Ct(e) {
            try {
                return new URL(e), !0
            } catch (t) {
                return function(e) {
                    const t = new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                    return Boolean(t.test(e))
                }(e)
            }
        }
        const At = Symbol.for("RemoteUi::Retain"),
            Tt = Symbol.for("RemoteUi::Release"),
            St = Symbol.for("RemoteUi::RetainedBy");
        class kt {
            constructor() {
                this.memoryManaged = new Set
            }
            add(e) {
                this.memoryManaged.add(e), e[St].add(this), e[At]()
            }
            release() {
                for (const e of this.memoryManaged) e[St].delete(this), e[Tt]();
                this.memoryManaged.clear()
            }
        }

        function Nt(e) {
            return Boolean(e && e[At] && e[Tt])
        }

        function It(e, {
            deep: t = !0
        } = {}) {
            const n = Nt(e);
            if (n && e[At](), t) {
                if (Array.isArray(e)) return e.reduce(((e, n) => It(n, {
                    deep: t
                }) || e), n);
                if ("object" == typeof e && null != e) return Object.keys(e).reduce(((n, o) => It(e[o], {
                    deep: t
                }) || n), n)
            }
            return n
        }
        const Rt = "_@f";

        function Pt(e) {
            const t = new Map,
                n = new Map,
                o = new Map;
            return {
                encode: function o(r) {
                    if ("object" == typeof r) {
                        if (null == r) return [r];
                        if (r instanceof ArrayBuffer) return [r];
                        const e = [];
                        if (Array.isArray(r)) {
                            return [r.map((t => {
                                const [n, r = []] = o(t);
                                return e.push(...r), n
                            })), e]
                        }
                        return [Object.keys(r).reduce(((t, n) => {
                            const [i, a = []] = o(r[n]);
                            return e.push(...a), { ...t,
                                [n]: i
                            }
                        }), {}), e]
                    }
                    if ("function" == typeof r) {
                        if (t.has(r)) {
                            const e = t.get(r);
                            return [{
                                [Rt]: e
                            }]
                        }
                        const o = e.uuid();
                        return t.set(r, o), n.set(o, r), [{
                            [Rt]: o
                        }]
                    }
                    return [r]
                },
                decode: r,
                async call(e, t) {
                    const o = new kt,
                        i = n.get(e);
                    if (null == i) throw new Error("You attempted to call a function that was already released.");
                    try {
                        const e = Nt(i) ? [o, ...i[St]] : [o];
                        return await i(...r(t, e))
                    } finally {
                        o.release()
                    }
                },
                release(e) {
                    const o = n.get(e);
                    o && (n.delete(e), t.delete(o))
                },
                terminate() {
                    t.clear(), n.clear(), o.clear()
                }
            };

            function r(t, n) {
                if ("object" == typeof t) {
                    if (null == t) return t;
                    if (t instanceof ArrayBuffer) return t;
                    if (Array.isArray(t)) return t.map((e => r(e, n)));
                    if (Rt in t) {
                        const r = t["_@f"];
                        if (o.has(r)) return o.get(r);
                        let i = 0,
                            a = !1;
                        const s = () => {
                                i -= 1, 0 === i && (a = !0, o.delete(r), e.release(r))
                            },
                            c = () => {
                                i += 1
                            },
                            l = new Set(n),
                            u = (...t) => {
                                if (a) throw new Error("You attempted to call a function that was already released.");
                                if (!o.has(r)) throw new Error("You attempted to call a function that was already revoked.");
                                return e.call(r, t)
                            };
                        Object.defineProperties(u, {
                            [Tt]: {
                                value: s,
                                writable: !1
                            },
                            [At]: {
                                value: c,
                                writable: !1
                            },
                            [St]: {
                                value: l,
                                writable: !1
                            }
                        });
                        for (const e of l) e.add(u);
                        return o.set(r, u), u
                    }
                    return Object.keys(t).reduce(((e, o) => ({ ...e,
                        [o]: r(t[o], n)
                    })), {})
                }
                return t
            }
        }

        function Ot() {
            return `${Lt()}-${Lt()}-${Lt()}-${Lt()}`
        }

        function Lt() {
            return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
        }
        async function Dt({
            sandboxId: e,
            webPixelConfig: t,
            storefrontBaseUrl: n
        }) {
            const {
                search: o
            } = self.location, r = t.id, i = [Ie(n), "/wpm", `@${ve}`, `/web-pixel-${r}`, `@${t.scriptVersion}`, "/sandbox", "/modern", /\.(js|json|xml)$/.test(self.location.pathname) ? "" : self.location.pathname, o];
            if (n.match(/spin\.dev\/?/)) {
                const e = o.length ? "&" : "?";
                i.push(`${o}${e}fast_storefront_renderer=1`)
            }
            return function(e, {
                terminate: t = !0,
                targetOrigin: n = "*"
            } = {}) {
                if ("undefined" == typeof window) throw new Error("You can only run fromIframe() in a browser context, but no window was found.");
                const o = new WeakMap,
                    r = new Promise((t => {
                        window.addEventListener("message", (n => {
                            n.source === e.contentWindow && "remote-ui::ready" === n.data && t()
                        }))
                    }));
                return {
                    async postMessage(t, o) {
                        await r, e.contentWindow.postMessage(t, n, o)
                    },
                    addEventListener(t, n) {
                        const r = t => {
                            t.source === e.contentWindow && n(t)
                        };
                        o.set(n, r), self.addEventListener(t, r)
                    },
                    removeEventListener(e, t) {
                        const n = o.get(t);
                        null != n && (o.delete(t), self.removeEventListener(e, n))
                    },
                    terminate() {
                        t && e.remove()
                    }
                }
            }(await async function({
                id: e,
                src: t,
                privileges: n
            }) {
                const o = document.querySelector(`iframe#${e}`);
                if (o && "IFRAME" === o.tagName) return o;
                const r = document.createElement("iframe");
                if (!t) {
                    const e = new Be("src or srcdoc must be provided");
                    throw Fe(e, {
                        context: "refactor/createIframe",
                        unhandled: !1,
                        severity: "warning"
                    }), e
                }
                if (r.setAttribute("src", t), r.setAttribute("id", e), r.setAttribute("name", e), r.setAttribute("sandbox", n.join(" ")), r.setAttribute("tabIndex", "-1"), r.setAttribute("aria-hidden", "true"), ! function(e) {
                        return "sandbox" in e
                    }(r)) {
                    const e = new Be("browser does not support the sandbox attribute on IFrames");
                    throw Fe(e, {
                        context: "refactor/createIframe",
                        unhandled: !1,
                        severity: "warning"
                    }), e
                }
                return r.setAttribute("style", "display:none; height:0; width:0; visibility: hidden;"), await
                function(e) {
                    return new Promise(((t, n) => {
                        const o = () => {
                            try {
                                let n = document.querySelector("#WebPixelsManagerSandboxContainer");
                                null == n && (n = document.createElement("div"), n.setAttribute("id", "WebPixelsManagerSandboxContainer"), document.body.appendChild(n)), document.querySelector(`#${e.id}`) || n.appendChild(e), t(e)
                            } catch (o) {
                                n(o)
                            }
                        };
                        if ("interactive" === document.readyState || "complete" === document.readyState) o();
                        else {
                            const e = () => {
                                "interactive" !== document.readyState && "complete" !== document.readyState || (o(), document.removeEventListener("readystatechange", e))
                            };
                            document.addEventListener("readystatechange", e)
                        }
                    }))
                }(r), r
            }({
                id: e,
                src: i.join(""),
                privileges: ["allow-scripts", "allow-forms"]
            }))
        }

        function Mt(e, t, n, o, r, i = !1) {
            let a = {};
            try {
                a = t.configuration ? JSON.parse(t.configuration) : {}
            } catch (b) {}

            function s() {
                try {
                    return window.localStorage.setItem("local-storage-test", "test"), window.localStorage.removeItem("local-storage-test"), !0
                } catch (b) {
                    return !1
                }
            }

            function c() {
                try {
                    return window.sessionStorage.setItem("session-storage-test", "test"), window.sessionStorage.removeItem("session-storage-test"), !0
                } catch (b) {
                    return !1
                }
            }
            return {
                analytics: {
                    subscribe: (r, a, s) => (i && It(a), e.subscribe(r, a, { ...s,
                        pixelRuntimeConfig: t,
                        shopId: n,
                        surface: o
                    }))
                },
                browser: {
                    cookie: {
                        get: async e => {
                            if (e) {
                                let t = "";
                                const n = document.cookie.split("; ");
                                for (const o of n) {
                                    const [n, r] = o.split("=");
                                    if (n === e) {
                                        t = r;
                                        break
                                    }
                                }
                                return t
                            }
                            return document.cookie
                        },
                        set: async (e, t) => {
                            if (t) {
                                const n = `${e}=${t}`;
                                document.cookie = n
                            } else document.cookie = e;
                            return document.cookie
                        }
                    },
                    sendBeacon: async (e, t = "") => {
                        if (e.includes(self.location.origin) && !e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) return !1;
                        const n = new window.Blob([t], {
                            type: "text/plain"
                        });
                        return window.navigator.sendBeacon(e, n)
                    },
                    localStorage: {
                        setItem: async (e, t) => s() ? window.localStorage.setItem(e, t) : Promise.resolve(),
                        getItem: async e => s() ? window.localStorage.getItem(e) : Promise.resolve(null),
                        key: async e => s() ? window.localStorage.key(e) : Promise.resolve(null),
                        removeItem: async e => s() ? window.localStorage.removeItem(e) : Promise.resolve(),
                        clear: async () => s() ? window.localStorage.clear() : Promise.resolve(),
                        length: async () => s() ? window.localStorage.length : Promise.resolve(0)
                    },
                    sessionStorage: {
                        setItem: async (e, t) => c() ? window.sessionStorage.setItem(e, t) : Promise.resolve(),
                        getItem: async e => c() ? window.sessionStorage.getItem(e) : Promise.resolve(null),
                        key: async e => c() ? window.sessionStorage.key(e) : Promise.resolve(null),
                        removeItem: async e => c() ? window.sessionStorage.removeItem(e) : Promise.resolve(),
                        clear: async () => c() ? window.sessionStorage.clear() : Promise.resolve(),
                        length: async () => c() ? window.sessionStorage.length : Promise.resolve(0)
                    }
                },
                settings: a,
                init: (l = r, {
                    context: ut(),
                    data: {
                        customer: (h = null == l ? void 0 : l.customer, h ? {
                            email: h.email,
                            firstName: h.firstName,
                            id: h.id,
                            lastName: h.lastName,
                            phone: h.phone,
                            ordersCount: h.ordersCount
                        } : null),
                        cart: (u = null == l ? void 0 : l.cart, u ? {
                            id: null == u ? void 0 : u.id,
                            cost: {
                                totalAmount: {
                                    amount: null == u || null === (d = u.cost) || void 0 === d || null === (f = d.totalAmount) || void 0 === f ? void 0 : f.amount,
                                    currencyCode: null == u || null === (p = u.cost) || void 0 === p || null === (m = p.totalAmount) || void 0 === m ? void 0 : m.currencyCode
                                }
                            },
                            lines: null == u ? void 0 : u.lines,
                            totalQuantity: null == u ? void 0 : u.totalQuantity
                        } : null)
                    }
                }),
                _pixelInfo: { ...t,
                    surface: o
                }
            };
            var l, u, d, f, p, m, h
        }
        async function Ut({
            webPixelConfig: e,
            eventBus: t,
            shopId: n,
            storefrontBaseUrl: o,
            surface: r,
            initData: i
        }) {
            let a;
            const s = `web-pixel-sandbox-${e.type}-${e.id}-${e.runtimeContext}-${ve}`;
            switch (e.runtimeContext) {
                case gt.Strict:
                    a = await async function({
                        sandboxId: e,
                        webPixelConfig: t,
                        storefrontBaseUrl: n
                    }) {
                        const o = t.id,
                            r = [Ie(n), "/wpm", `@${ve}`, `/web-pixel-${o}`, `@${t.scriptVersion}`, "/sandbox", "/worker.modern.js"];
                        return n.match(/spin\.dev\/?/) && r.push("?fast_storefront_renderer=1"), new Worker(r.join(""), {
                            name: e,
                            type: "classic",
                            credentials: "omit"
                        })
                    }({
                        sandboxId: s,
                        webPixelConfig: e,
                        storefrontBaseUrl: o
                    });
                    break;
                case gt.Lax:
                    a = await Dt({
                        sandboxId: s,
                        webPixelConfig: e,
                        storefrontBaseUrl: o
                    });
                    break;
                default:
                    throw new Error(`Unsupported runtime context: ${e.runtimeContext}`)
            }
            const c = function(e, {
                    uuid: t = Ot,
                    createEncoder: n = Pt,
                    callable: o
                } = {}) {
                    let r = !1,
                        i = e;
                    const a = new Map,
                        s = new Map,
                        c = function(e, t) {
                            let n;
                            if (null == t) {
                                if ("function" != typeof Proxy) throw new Error("You must pass an array of callable methods in environments without Proxies.");
                                const t = new Map;
                                n = new Proxy({}, {
                                    get(n, o) {
                                        if (t.has(o)) return t.get(o);
                                        const r = e(o);
                                        return t.set(o, r), r
                                    }
                                })
                            } else {
                                n = {};
                                for (const o of t) Object.defineProperty(n, o, {
                                    value: e(o),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }
                            return n
                        }(f, o),
                        l = n({
                            uuid: t,
                            release(e) {
                                u(3, [e])
                            },
                            call(e, n, o) {
                                const r = t(),
                                    i = p(r, o),
                                    [a, s] = l.encode(n);
                                return u(5, [r, e, a], s), i
                            }
                        });
                    return i.addEventListener("message", d), {
                        call: c,
                        replace(e) {
                            const t = i;
                            i = e, t.removeEventListener("message", d), e.addEventListener("message", d)
                        },
                        expose(e) {
                            for (const t of Object.keys(e)) {
                                const n = e[t];
                                "function" == typeof n ? a.set(t, n) : a.delete(t)
                            }
                        },
                        callable(...e) {
                            if (null != o)
                                for (const t of e) Object.defineProperty(c, t, {
                                    value: f(t),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                        },
                        terminate() {
                            u(2, void 0), m(), i.terminate && i.terminate()
                        }
                    };

                    function u(e, t, n) {
                        r || i.postMessage(t ? [e, t] : [e], n)
                    }
                    async function d(e) {
                        const {
                            data: t
                        } = e;
                        if (null != t && Array.isArray(t)) switch (t[0]) {
                            case 2:
                                m();
                                break;
                            case 0:
                                {
                                    const e = new kt,
                                        [o, r, i] = t[1],
                                        s = a.get(r);
                                    try {
                                        if (null == s) throw new Error(`No '${r}' method is exposed on this endpoint`);
                                        const [t, n] = l.encode(await s(...l.decode(i, [e])));
                                        u(1, [o, void 0, t], n)
                                    } catch (n) {
                                        const {
                                            name: e,
                                            message: t,
                                            stack: r
                                        } = n;
                                        throw u(1, [o, {
                                            name: e,
                                            message: t,
                                            stack: r
                                        }]), n
                                    } finally {
                                        e.release()
                                    }
                                    break
                                }
                            case 1:
                                {
                                    const [e] = t[1];s.get(e)(...t[1]),
                                    s.delete(e);
                                    break
                                }
                            case 3:
                                {
                                    const [e] = t[1];l.release(e);
                                    break
                                }
                            case 6:
                                {
                                    const [e] = t[1];s.get(e)(...t[1]),
                                    s.delete(e);
                                    break
                                }
                            case 5:
                                {
                                    const [e, o, r] = t[1];
                                    try {
                                        const t = await l.call(o, r),
                                            [n, i] = l.encode(t);
                                        u(6, [e, void 0, n], i)
                                    } catch (n) {
                                        const {
                                            name: t,
                                            message: o,
                                            stack: r
                                        } = n;
                                        throw u(6, [e, {
                                            name: t,
                                            message: o,
                                            stack: r
                                        }]), n
                                    }
                                    break
                                }
                        }
                    }

                    function f(e) {
                        return (...n) => {
                            if (r) return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));
                            if ("string" != typeof e && "number" != typeof e) return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));
                            const o = t(),
                                i = p(o),
                                [a, s] = l.encode(n);
                            return u(0, [o, e, a], s), i
                        }
                    }

                    function p(e, t) {
                        return new Promise(((n, o) => {
                            s.set(e, ((e, r, i) => {
                                if (null == r) n(i && l.decode(i, t));
                                else {
                                    const e = new Error;
                                    Object.assign(e, r), o(e)
                                }
                            }))
                        }))
                    }

                    function m() {
                        var e;
                        r = !0, a.clear(), s.clear(), null === (e = l.terminate) || void 0 === e || e.call(l), i.removeEventListener("message", d)
                    }
                }(a, {
                    callable: ["initialize"]
                }),
                l = Mt(t, e, n, r, i, !0),
                u = {
                    cookieRestrictedDomains: async () => function() {
                        var e, t;
                        const n = [];
                        return ((null === (e = self) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.hostname) || "").split(".").reverse().reduce(((e, t) => {
                            const o = "" === e ? t : `${t}.${e}`;
                            return r = o, document.cookie = `wpm-domain-test=1; path=/; domain=${r}`, document.cookie.split(";").find((e => e.includes("wpm-domain-test"))) || n.push(o),
                                function(e) {
                                    document.cookie = `wpm-domain-test=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`
                                }(o), o;
                            var r
                        }), ""), n
                    }(),
                    userCanBeTracked: async () => ce(),
                    self: {
                        origin: {
                            get: async () => self.origin
                        }
                    },
                    document: {
                        referrer: {
                            get: async () => document.referrer
                        }
                    }
                };
            c.expose({
                webPixelApi: () => l,
                internalApi: () => u
            });
            const d = ut(),
                f = await c.call.initialize(self.document.title, e, d);
            if (ve !== f.hashVersion) {
                const t = new Error(`The main bundle hash (${ve}) does not match the sandbox hash (${f.hashVersion})`);
                Fe(t, {
                    severity: "warning",
                    pixelId: e.id,
                    pixelType: e.type,
                    runtimeContext: e.runtimeContext,
                    context: "refactor/createSandbox/hashMismatch",
                    shopId: n,
                    userAgent: d.navigator.userAgent || self.navigator.userAgent,
                    hashVersionSandbox: f.hashVersion,
                    sandboxUrl: f.sandboxUrl
                })
            }
            if ("error" === f.status) throw "extend" !== f.errorLocation && Fe(f.error, {
                pixelId: e.id,
                pixelType: e.type,
                runtimeContext: e.runtimeContext,
                shopId: n,
                context: `refactor/createSandbox/${f.errorLocation}`,
                userAgent: d.navigator.userAgent || self.navigator.userAgent,
                hashVersionSandbox: f.hashVersion,
                sandboxUrl: f.sandboxUrl
            }), new Error(`The creation of Web Pixel id "${e.id}" failed: ${JSON.stringify(f.error,null,2)}`);
            return !0
        }
        const jt = {
            capture: !0,
            passive: !0
        };

        function Bt(e, t, n, o = {}) {
            try {
                const r = e => {
                    try {
                        t(e)
                    } catch (n) {
                        Fe(n, {
                            context: "createDomEventsListener/createEventListener/handler",
                            unhandled: !1,
                            options: {
                                sampleRate: o.sampleRate || 50
                            }
                        })
                    }
                };
                self.addEventListener(e, r, n)
            } catch (r) {
                Fe(r, {
                    context: "createDomEventsListener/createEventListener",
                    unhandled: !1
                })
            }
        }

        function $t(e) {
            return {
                id: null == e ? void 0 : e.id,
                name: null == e ? void 0 : e.name,
                tagName: null == e ? void 0 : e.tagName,
                type: null == e ? void 0 : e.type,
                value: null == e ? void 0 : e.value
            }
        }
        const Gt = function() {
            const e = self.Shopify && self.Shopify.Checkout ? "shopify" : self.Shopify && self.Shopify.analytics && self.Shopify.analytics.replayQueue ? "storefront-renderer" : "checkout-one",
                t = self.location.href,
                n = Ee("load", {
                    version: we,
                    bundleTarget: ge,
                    pageUrl: t,
                    status: "loading",
                    surface: e
                }),
                o = {
                    publish: () => !1,
                    publishCustomEvent: () => !1
                };
            try {
                const e = Ne();
                return n.payload.status = "loaded", ze(n), {
                    init(n) {
                        if (null !== self.location.href.match(/\/wpm@(.+)\/sandbox/)) return o;
                        const {
                            shopId: r,
                            cdnBaseUrl: i,
                            webPixelsConfigList: a,
                            surface: s = "unknown",
                            initData: c,
                            enabledBetaFlags: l
                        } = n || {};
                        fe();
                        const u = self.location.origin;
                        Ke(u), me(l);
                        const d = ce().toString(),
                            f = Ee("unload", {
                                version: we,
                                bundleTarget: ge,
                                pageUrl: t,
                                shopId: r,
                                surface: s,
                                isCompleted: "false",
                                runtimeErrorCaught: "false",
                                userCanBeTracked: d,
                                sessionId: e
                            });
                        var p;
                        p = f, window.addEventListener("pagehide", (() => {
                            var e, t;
                            p.payload.pageDuration = null === (e = Oe("page:session")) || void 0 === e || null === (t = e.measurement) || void 0 === t ? void 0 : t.duration, ze(p), Xe({
                                skipXhr: !0
                            })
                        }));
                        const m = xt(n),
                            h = {
                                severity: "warning",
                                context: "refactor/createWebPixelsManager/init",
                                unhandled: !1,
                                shopId: r,
                                initConfig: n
                            },
                            b = Ee("init", {
                                version: we,
                                bundleTarget: ge,
                                pageUrl: t,
                                shopId: r,
                                surface: s,
                                status: "initializing",
                                userCanBeTracked: d
                            });
                        try {
                            if (self.Shopify && !0 === self.Shopify.designMode) return self.console && console.log("[WebPixelsManager] Prevented from executing in the Theme Editor"), o;
                            if (/^web-pixel-sandbox/.test(self.name)) {
                                const e = new Be("WebPixelsManager: browser library is being run in a sandbox");
                                throw h.library = "browser", Fe(e, h), e
                            }
                            if (!r) {
                                const e = new Be("WebPixelsManager: shopId is required");
                                throw Fe(e, h), e
                            }
                            if (!u) {
                                const e = new Be("WebPixelsManager: storefrontBaseUrl is required");
                                throw Fe(e, h), e
                            }
                            if (!Ct(u)) {
                                const e = new Be(`WebPixelsManager: storefrontBaseUrl is not a valid absolute URL: ${u}`);
                                throw Fe(e, h), e
                            }
                            if (!i) {
                                const e = new Be("WebPixelsManager: cdnBaseUrl is required");
                                throw Fe(e, h), e
                            }
                            if (!Ct(i)) {
                                const e = new Be(`WebPixelsManager: cdnBaseUrl is not a valid absolute URL: ${i}`);
                                throw Fe(e, h), e
                            }
                            const e = a.map((e => {
                                var t;
                                return e.type = e.type.toUpperCase(), e.runtimeContext = null === (t = e.runtimeContext) || void 0 === t ? void 0 : t.toUpperCase(), async function({
                                    webPixelConfig: e,
                                    eventBus: t,
                                    shopId: n,
                                    storefrontBaseUrl: o,
                                    cdnBaseUrl: r,
                                    surface: i,
                                    initData: a
                                }) {
                                    var s;
                                    let c = !1;
                                    const l = {
                                        webPixelConfig: e,
                                        eventBus: t,
                                        shopId: n,
                                        storefrontBaseUrl: o,
                                        cdnBaseUrl: r,
                                        surface: i,
                                        initData: a
                                    };
                                    var u, d;
                                    switch (await Promise.all([ht(), (u = (e, n) => t.subscribe(e, n, {
                                        pixelRuntimeConfig: {
                                            apiClientId: "PIXEL-LOADER"
                                        }
                                    }), d = null == e || null === (s = e.restrictions) || void 0 === s ? void 0 : s.preventLoadingBeforeEvent, new Promise(((e, t) => {
                                        void 0 === d ? e(!0) : u(d, (() => {
                                            e(!0)
                                        }))
                                    })))]), e.runtimeContext) {
                                        case gt.Lax:
                                        case gt.Strict:
                                            c = await Ut(l);
                                            break;
                                        default:
                                            throw new Error(`Invalid runtimeContext: ${e.runtimeContext}`)
                                    }
                                    const f = vt(e),
                                        p = e.id,
                                        m = e.type.toLowerCase(),
                                        {
                                            measurement: h
                                        } = Oe("pixel:register", {
                                            pixelId: p,
                                            source: m
                                        }),
                                        b = null != h && h.duration ? Math.round(h.duration) : void 0;
                                    return He("register", {
                                        version: we,
                                        pageUrl: self.location.href,
                                        shopId: n,
                                        surface: i,
                                        pixelId: e.id,
                                        pixelAppId: f,
                                        pixelSource: e.type,
                                        pixelRuntimeContext: e.runtimeContext,
                                        pixelScriptVersion: e.scriptVersion,
                                        pixelConfiguration: null == e ? void 0 : e.configuration,
                                        pixelEventSchemaVersion: e.eventPayloadVersion,
                                        status: "registered",
                                        userCanBeTracked: ce().toString(),
                                        shopPrefs: pt(),
                                        bundleTarget: ge,
                                        errorMsg: "N/A",
                                        duration: b,
                                        sessionId: Ne()
                                    }), c
                                }({
                                    webPixelConfig: e,
                                    eventBus: m,
                                    shopId: r,
                                    storefrontBaseUrl: u,
                                    cdnBaseUrl: i,
                                    surface: s,
                                    initData: c
                                }).catch((e => {
                                    self.console && console.error("[Web Pixels]", e)
                                }))
                            }));
                            Promise.all(e).then((() => {
                                return (e = f).payload.isCompleted = "true", void(e.payload.runTimeDuration = null === (t = Oe("completed")) || void 0 === t || null === (n = t.measurement) || void 0 === n ? void 0 : n.duration);
                                var e, t, n
                            })).catch((() => {})), "checkout-one" !== s && (_(m.publish, c), he("web_pixels_dom_analytics") && function(e) {
                                const t = function() {
                                    let e = !1;
                                    try {
                                        const t = {
                                                get passive() {
                                                    return e = !0, !1
                                                }
                                            },
                                            n = () => {};
                                        self.addEventListener("test", n, t), self.removeEventListener("test", n, t)
                                    } catch (t) {
                                        e = !1
                                    }
                                    return !e || jt
                                }();
                                ! function(e, t) {
                                    Bt("blur", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = $t(n);
                                        e.publishDomEvent("input_blurred", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Bt("change", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = {
                                            element: $t(n)
                                        };
                                        e.publishDomEvent("dom_element_changed", o)
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Bt("focus", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = $t(n);
                                        e.publishDomEvent("input_focused", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t)
                            }(m)), b.payload.status = "initialized", ze(b);
                            const n = {
                                publish: (e, t, n = {}) => m.publish(e, t, n),
                                publishCustomEvent: (e, t, n = {}) => m.publishCustomEvent(e, t, n)
                            };
                            if (he("web_pixels_visitor_api")) {
                                var w;
                                const e = (g = {
                                    shopId: r,
                                    surface: s,
                                    pageUrl: t,
                                    clientId: dt(document.cookie)._shopify_y,
                                    version: we,
                                    customerId: null == c || null === (w = c.customer) || void 0 === w ? void 0 : w.id
                                }, {
                                    visitor: (e, t) => function(e, t, n) {
                                        const o = function(e, t) {
                                            return e && (e.email || e.phone) ? null != e && e.email && "string" != typeof e.email ? {
                                                valid: !1,
                                                error: "Email must be of type string"
                                            } : null != e && e.phone && "string" != typeof e.phone ? {
                                                valid: !1,
                                                error: "Phone must be of type string"
                                            } : null != t && t.apiClientId && "string" != typeof t.apiClientId ? {
                                                valid: !1,
                                                error: "apiClientId must be of type string"
                                            } : {
                                                valid: !0
                                            } : {
                                                valid: !1,
                                                error: "Visitor must have one of phone or email"
                                            }
                                        }(t, n);
                                        if (!o.valid) throw new Error(o.error || "Invalid input payload to visitorApi");
                                        const r = { ...e,
                                            ...t,
                                            ...n
                                        };
                                        return ht().then((() => He("visitor", r))).catch((() => Fe("visitor error", {
                                            severity: "error",
                                            context: `visitor-${e.surface}`,
                                            unhandled: !1,
                                            shopId: e.shopId
                                        }))), !0
                                    }(g, e, t)
                                });
                                n.visitor = e.visitor
                            }
                            return n
                        } catch (v) {
                            return v instanceof Be || Fe(v, {
                                context: "refactor/init",
                                shopId: r,
                                initConfig: n
                            }), self.console && console.error(v), b.payload.status = "failed", b.payload.errorMsg = null == v ? void 0 : v.message, ze(b), f.payload.runtimeErrorCaught = "true", o
                        }
                        var g
                    }
                }
            } catch (r) {
                return r instanceof Be || Fe(r, {
                    context: "refactor/createWebPixelsManager"
                }), self.console && console.error(r), n.payload.status = "manager-create-error", n.payload.errorMsg = null == r ? void 0 : r.message, ze(n, !0), {
                    init: () => o
                }
            }
        }();
        self.webPixelsManager = Gt
    })()
})();
/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var i;
        !(function (t, i) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? i(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return i(e);
                  })
            : i(t);
        })("undefined" != typeof window ? window : this, function (n, s) {
          "use strict";
          var r = [],
            o = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            u = r.push,
            d = r.indexOf,
            c = {},
            p = c.toString,
            h = c.hasOwnProperty,
            f = h.toString,
            g = f.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = n.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, i) {
            var n,
              s,
              r = (i = i || b).createElement("script");
            if (((r.text = e), t))
              for (n in w)
                (s = t[n] || (t.getAttribute && t.getAttribute(n))) &&
                  r.setAttribute(n, s);
            i.head.appendChild(r).parentNode.removeChild(r);
          }
          function C(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? c[p.call(e)] || "object"
              : typeof e;
          }
          var S = "3.6.0",
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              i = C(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === i ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: S,
              constructor: T,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, i) {
                    return e.call(t, i, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: r.sort,
              splice: r.splice,
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  i,
                  n,
                  s,
                  r,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof o &&
                    ((u = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && ((o = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (n = e[t]),
                        "__proto__" !== t &&
                          o !== n &&
                          (u &&
                          n &&
                          (T.isPlainObject(n) || (s = Array.isArray(n)))
                            ? ((i = o[t]),
                              (r =
                                s && !Array.isArray(i)
                                  ? []
                                  : s || T.isPlainObject(i)
                                  ? i
                                  : {}),
                              (s = !1),
                              (o[t] = T.extend(u, r, n)))
                            : void 0 !== n && (o[t] = n));
                return o;
              }),
            T.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, i;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = o(e)) ||
                    ("function" ==
                      typeof (i = h.call(t, "constructor") && t.constructor) &&
                      f.call(i) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, i) {
                x(e, { nonce: t && t.nonce }, i);
              },
              each: function (e, t) {
                var i,
                  n = 0;
                if (E(e))
                  for (
                    i = e.length;
                    n < i && !1 !== t.call(e[n], n, e[n]);
                    n++
                  );
                else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                return e;
              },
              makeArray: function (e, t) {
                var i = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? T.merge(i, "string" == typeof e ? [e] : e)
                      : u.call(i, e)),
                  i
                );
              },
              inArray: function (e, t, i) {
                return null == t ? -1 : d.call(t, e, i);
              },
              merge: function (e, t) {
                for (var i = +t.length, n = 0, s = e.length; n < i; n++)
                  e[s++] = t[n];
                return (e.length = s), e;
              },
              grep: function (e, t, i) {
                for (var n = [], s = 0, r = e.length, o = !i; s < r; s++)
                  !t(e[s], s) !== o && n.push(e[s]);
                return n;
              },
              map: function (e, t, i) {
                var n,
                  s,
                  r = 0,
                  o = [];
                if (E(e))
                  for (n = e.length; r < n; r++)
                    null != (s = t(e[r], r, i)) && o.push(s);
                else for (r in e) null != (s = t(e[r], r, i)) && o.push(s);
                return l(o);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = r[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              i,
              n,
              s,
              r,
              o,
              a,
              l,
              u,
              d,
              c,
              p,
              h,
              f,
              g,
              m,
              v,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              C = 0,
              S = 0,
              T = le(),
              E = le(),
              k = le(),
              L = le(),
              A = function (e, t) {
                return e === t && (c = !0), 0;
              },
              P = {}.hasOwnProperty,
              O = [],
              I = O.pop,
              M = O.push,
              D = O.push,
              N = O.slice,
              $ = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                  if (e[i] === t) return i;
                return -1;
              },
              _ =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              j = "[\\x20\\t\\r\\n\\f]",
              H =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              z =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                H +
                ")(?:" +
                j +
                "*([*^$|!~]?=)" +
                j +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                j +
                "*\\]",
              q =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                z +
                ")*)|.*)\\)|)",
              B = new RegExp(j + "+", "g"),
              V = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              G = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              W = new RegExp(j + "|>"),
              R = new RegExp(q),
              X = new RegExp("^" + H + "$"),
              U = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + _ + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ie = function (e, t) {
                var i = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (i < 0
                    ? String.fromCharCode(i + 65536)
                    : String.fromCharCode(
                        (i >> 10) | 55296,
                        (1023 & i) | 56320
                      ))
                );
              },
              ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              se = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
                p();
              },
              oe = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((O = N.call(x.childNodes)), x.childNodes),
                O[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: O.length
                  ? function (e, t) {
                      M.apply(e, N.call(t));
                    }
                  : function (e, t) {
                      for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                      e.length = i - 1;
                    },
              };
            }
            function ae(e, t, n, s) {
              var r,
                a,
                u,
                d,
                c,
                f,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return n;
              if (!s && (p(t), (t = t || h), g)) {
                if (11 !== x && (c = Z.exec(e)))
                  if ((r = c[1])) {
                    if (9 === x) {
                      if (!(u = t.getElementById(r))) return n;
                      if (u.id === r) return n.push(u), n;
                    } else if (
                      y &&
                      (u = y.getElementById(r)) &&
                      b(t, u) &&
                      u.id === r
                    )
                      return n.push(u), n;
                  } else {
                    if (c[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                    if (
                      (r = c[3]) &&
                      i.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(n, t.getElementsByClassName(r)), n;
                  }
                if (
                  i.qsa &&
                  !L[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === x && (W.test(e) || F.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        i.scope) ||
                        ((d = t.getAttribute("id"))
                          ? (d = d.replace(ne, se))
                          : t.setAttribute("id", (d = w))),
                        a = (f = o(e)).length;
                      a--;

                    )
                      f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                    v = f.join(",");
                  }
                  try {
                    return D.apply(n, y.querySelectorAll(v)), n;
                  } catch (t) {
                    L(e, !0);
                  } finally {
                    d === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(V, "$1"), t, n, s);
            }
            function le() {
              var e = [];
              return function t(i, s) {
                return (
                  e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                  (t[i + " "] = s)
                );
              };
            }
            function ue(e) {
              return (e[w] = !0), e;
            }
            function de(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ce(e, t) {
              for (var i = e.split("|"), s = i.length; s--; )
                n.attrHandle[i[s]] = t;
            }
            function pe(e, t) {
              var i = t && e,
                n =
                  i &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (n) return n;
              if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function fe(e) {
              return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ue(function (t) {
                return (
                  (t = +t),
                  ue(function (i, n) {
                    for (var s, r = e([], i.length, t), o = r.length; o--; )
                      i[(s = r[o])] && (i[s] = !(n[s] = i[s]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((i = ae.support = {}),
            (r = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  i = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (i && i.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  s,
                  o = e ? e.ownerDocument || e : x;
                return o != h && 9 === o.nodeType && o.documentElement
                  ? ((f = (h = o).documentElement),
                    (g = !r(h)),
                    x != h &&
                      (s = h.defaultView) &&
                      s.top !== s &&
                      (s.addEventListener
                        ? s.addEventListener("unload", re, !1)
                        : s.attachEvent && s.attachEvent("onunload", re)),
                    (i.scope = de(function (e) {
                      return (
                        f.appendChild(e).appendChild(h.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (i.attributes = de(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (i.getElementsByTagName = de(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (i.getElementsByClassName = Q.test(
                      h.getElementsByClassName
                    )),
                    (i.getById = de(function (e) {
                      return (
                        (f.appendChild(e).id = w),
                        !h.getElementsByName || !h.getElementsByName(w).length
                      );
                    })),
                    i.getById
                      ? ((n.filter.ID = function (e) {
                          var t = e.replace(te, ie);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (n.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var i = t.getElementById(e);
                            return i ? [i] : [];
                          }
                        }))
                      : ((n.filter.ID = function (e) {
                          var t = e.replace(te, ie);
                          return function (e) {
                            var i =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return i && i.value === t;
                          };
                        }),
                        (n.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var i,
                              n,
                              s,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (i = r.getAttributeNode("id")) &&
                                i.value === e
                              )
                                return [r];
                              for (
                                s = t.getElementsByName(e), n = 0;
                                (r = s[n++]);

                              )
                                if (
                                  (i = r.getAttributeNode("id")) &&
                                  i.value === e
                                )
                                  return [r];
                            }
                            return [];
                          }
                        })),
                    (n.find.TAG = i.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : i.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var i,
                            n = [],
                            s = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (i = r[s++]); )
                              1 === i.nodeType && n.push(i);
                            return n;
                          }
                          return r;
                        }),
                    (n.find.CLASS =
                      i.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (m = []),
                    (i.qsa = Q.test(h.querySelectorAll)) &&
                      (de(function (e) {
                        var t;
                        (f.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + _ + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            m.push("~="),
                          (t = h.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      de(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (f.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (i.matchesSelector = Q.test(
                      (y =
                        f.matches ||
                        f.webkitMatchesSelector ||
                        f.mozMatchesSelector ||
                        f.oMatchesSelector ||
                        f.msMatchesSelector)
                    )) &&
                      de(function (e) {
                        (i.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", q);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Q.test(f.compareDocumentPosition)),
                    (b =
                      t || Q.test(f.contains)
                        ? function (e, t) {
                            var i = 9 === e.nodeType ? e.documentElement : e,
                              n = t && t.parentNode;
                            return (
                              e === n ||
                              !(
                                !n ||
                                1 !== n.nodeType ||
                                !(i.contains
                                  ? i.contains(n)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(n))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (A = t
                      ? function (e, t) {
                          if (e === t) return (c = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            n ||
                            (1 &
                              (n =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!i.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e == h || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == h || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : d
                                ? $(d, e) - $(d, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (c = !0), 0;
                          var i,
                            n = 0,
                            s = e.parentNode,
                            r = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!s || !r)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : s
                              ? -1
                              : r
                              ? 1
                              : d
                              ? $(d, e) - $(d, t)
                              : 0;
                          if (s === r) return pe(e, t);
                          for (i = e; (i = i.parentNode); ) o.unshift(i);
                          for (i = t; (i = i.parentNode); ) a.unshift(i);
                          for (; o[n] === a[n]; ) n++;
                          return n
                            ? pe(o[n], a[n])
                            : o[n] == x
                            ? -1
                            : a[n] == x
                            ? 1
                            : 0;
                        }),
                    h)
                  : h;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                i.matchesSelector &&
                  g &&
                  !L[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var n = y.call(e, t);
                  if (
                    n ||
                    i.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  L(t, !0);
                }
              return ae(t, h, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != h && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != h && p(e);
              var s = n.attrHandle[t.toLowerCase()],
                r =
                  s && P.call(n.attrHandle, t.toLowerCase())
                    ? s(e, t, !g)
                    : void 0;
              return void 0 !== r
                ? r
                : i.attributes || !g
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ne, se);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                n = [],
                s = 0,
                r = 0;
              if (
                ((c = !i.detectDuplicates),
                (d = !i.sortStable && e.slice(0)),
                e.sort(A),
                c)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (s = n.push(r));
                for (; s--; ) e.splice(n[s], 1);
              }
              return (d = null), e;
            }),
            (s = ae.getText =
              function (e) {
                var t,
                  i = "",
                  n = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += s(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[n++]); ) i += s(t);
                return i;
              }),
            (n = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ue,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ie)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      i = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : i &&
                            R.test(i) &&
                            (t = o(i, !0)) &&
                            (t = i.indexOf(")", i.length - t) - i.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ie).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = T[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)"
                      )) &&
                        T(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, i) {
                    return function (n) {
                      var s = ae.attr(n, e);
                      return null == s
                        ? "!=" === t
                        : !t ||
                            ((s += ""),
                            "=" === t
                              ? s === i
                              : "!=" === t
                              ? s !== i
                              : "^=" === t
                              ? i && 0 === s.indexOf(i)
                              : "*=" === t
                              ? i && s.indexOf(i) > -1
                              : "$=" === t
                              ? i && s.slice(-i.length) === i
                              : "~=" === t
                              ? (" " + s.replace(B, " ") + " ").indexOf(i) > -1
                              : "|=" === t &&
                                (s === i ||
                                  s.slice(0, i.length + 1) === i + "-"));
                    };
                  },
                  CHILD: function (e, t, i, n, s) {
                    var r = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === n && 0 === s
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, i, l) {
                          var u,
                            d,
                            c,
                            p,
                            h,
                            f,
                            g = r !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (m) {
                            if (r) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                f = g = "only" === e && !f && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((f = [o ? m.firstChild : m.lastChild]), o && y)
                            ) {
                              for (
                                b =
                                  (h =
                                    (u =
                                      (d =
                                        (c = (p = m)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (c[p.uniqueID] = {}))[e] ||
                                      [])[0] === C && u[1]) && u[2],
                                  p = h && m.childNodes[h];
                                (p =
                                  (++h && p && p[g]) || (b = h = 0) || f.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  d[e] = [C, h, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = h =
                                  (u =
                                    (d =
                                      (c = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (c[p.uniqueID] = {}))[e] ||
                                    [])[0] === C && u[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++h && p && p[g]) ||
                                  (b = h = 0) ||
                                  f.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((d =
                                      (c = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (c[p.uniqueID] = {}))[e] = [C, b]),
                                  p !== t));

                              );
                            return (b -= s) === n || (b % n == 0 && b / n >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var i,
                      s =
                        n.pseudos[e] ||
                        n.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return s[w]
                      ? s(t)
                      : s.length > 1
                      ? ((i = [e, e, "", t]),
                        n.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ue(function (e, i) {
                              for (var n, r = s(e, t), o = r.length; o--; )
                                e[(n = $(e, r[o]))] = !(i[n] = r[o]);
                            })
                          : function (e) {
                              return s(e, 0, i);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: ue(function (e) {
                    var t = [],
                      i = [],
                      n = a(e.replace(V, "$1"));
                    return n[w]
                      ? ue(function (e, t, i, s) {
                          for (
                            var r, o = n(e, null, s, []), a = e.length;
                            a--;

                          )
                            (r = o[a]) && (e[a] = !(t[a] = r));
                        })
                      : function (e, s, r) {
                          return (
                            (t[0] = e),
                            n(t, null, r, i),
                            (t[0] = null),
                            !i.pop()
                          );
                        };
                  }),
                  has: ue(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ue(function (e) {
                    return (
                      (e = e.replace(te, ie)),
                      function (t) {
                        return (t.textContent || s(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ue(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ie).toLowerCase()),
                      function (t) {
                        var i;
                        do {
                          if (
                            (i = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (i = i.toLowerCase()) === e ||
                              0 === i.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === f;
                  },
                  focus: function (e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !n.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, i) {
                    return [i < 0 ? i + t : i];
                  }),
                  even: me(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e;
                  }),
                  lt: me(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0; )
                      e.push(n);
                    return e;
                  }),
                  gt: me(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                    return e;
                  }),
                },
              }),
            (n.pseudos.nth = n.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              n.pseudos[t] = he(t);
            for (t in { submit: !0, reset: !0 }) n.pseudos[t] = fe(t);
            function ye() {}
            function be(e) {
              for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
              return n;
            }
            function we(e, t, i) {
              var n = t.dir,
                s = t.next,
                r = s || n,
                o = i && "parentNode" === r,
                a = S++;
              return t.first
                ? function (t, i, s) {
                    for (; (t = t[n]); )
                      if (1 === t.nodeType || o) return e(t, i, s);
                    return !1;
                  }
                : function (t, i, l) {
                    var u,
                      d,
                      c,
                      p = [C, a];
                    if (l) {
                      for (; (t = t[n]); )
                        if ((1 === t.nodeType || o) && e(t, i, l)) return !0;
                    } else
                      for (; (t = t[n]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((d =
                              (c = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (c[t.uniqueID] = {})),
                            s && s === t.nodeName.toLowerCase())
                          )
                            t = t[n] || t;
                          else {
                            if ((u = d[r]) && u[0] === C && u[1] === a)
                              return (p[2] = u[2]);
                            if (((d[r] = p), (p[2] = e(t, i, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, i, n) {
                    for (var s = e.length; s--; ) if (!e[s](t, i, n)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Ce(e, t, i, n, s) {
              for (
                var r, o = [], a = 0, l = e.length, u = null != t;
                a < l;
                a++
              )
                (r = e[a]) &&
                  ((i && !i(r, n, s)) || (o.push(r), u && t.push(a)));
              return o;
            }
            function Se(e, t, i, n, s, r) {
              return (
                n && !n[w] && (n = Se(n)),
                s && !s[w] && (s = Se(s, r)),
                ue(function (r, o, a, l) {
                  var u,
                    d,
                    c,
                    p = [],
                    h = [],
                    f = o.length,
                    g =
                      r ||
                      (function (e, t, i) {
                        for (var n = 0, s = t.length; n < s; n++)
                          ae(e, t[n], i);
                        return i;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!r && t) ? g : Ce(g, p, e, a, l),
                    v = i ? (s || (r ? e : f || n) ? [] : o) : m;
                  if ((i && i(m, v, a, l), n))
                    for (u = Ce(v, h), n(u, [], a, l), d = u.length; d--; )
                      (c = u[d]) && (v[h[d]] = !(m[h[d]] = c));
                  if (r) {
                    if (s || e) {
                      if (s) {
                        for (u = [], d = v.length; d--; )
                          (c = v[d]) && u.push((m[d] = c));
                        s(null, (v = []), u, l);
                      }
                      for (d = v.length; d--; )
                        (c = v[d]) &&
                          (u = s ? $(r, c) : p[d]) > -1 &&
                          (r[u] = !(o[u] = c));
                    }
                  } else (v = Ce(v === o ? v.splice(f, v.length) : v)), s ? s(null, o, v, l) : D.apply(o, v);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  i,
                  s,
                  r = e.length,
                  o = n.relative[e[0].type],
                  a = o || n.relative[" "],
                  l = o ? 1 : 0,
                  d = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  c = we(
                    function (e) {
                      return $(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, i, n) {
                      var s =
                        (!o && (n || i !== u)) ||
                        ((t = i).nodeType ? d(e, i, n) : c(e, i, n));
                      return (t = null), s;
                    },
                  ];
                l < r;
                l++
              )
                if ((i = n.relative[e[l].type])) p = [we(xe(p), i)];
                else {
                  if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (s = ++l; s < r && !n.relative[e[s].type]; s++);
                    return Se(
                      l > 1 && xe(p),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(V, "$1"),
                      i,
                      l < s && Te(e.slice(l, s)),
                      s < r && Te((e = e.slice(s))),
                      s < r && be(e)
                    );
                  }
                  p.push(i);
                }
              return xe(p);
            }
            return (
              (ye.prototype = n.filters = n.pseudos),
              (n.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  var i,
                    s,
                    r,
                    o,
                    a,
                    l,
                    u,
                    d = E[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (a = e, l = [], u = n.preFilter; a; ) {
                    for (o in ((i && !(s = G.exec(a))) ||
                      (s && (a = a.slice(s[0].length) || a), l.push((r = []))),
                    (i = !1),
                    (s = F.exec(a)) &&
                      ((i = s.shift()),
                      r.push({ value: i, type: s[0].replace(V, " ") }),
                      (a = a.slice(i.length))),
                    n.filter))
                      !(s = U[o].exec(a)) ||
                        (u[o] && !(s = u[o](s))) ||
                        ((i = s.shift()),
                        r.push({ value: i, type: o, matches: s }),
                        (a = a.slice(i.length)));
                    if (!i) break;
                  }
                  return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var i,
                    s = [],
                    r = [],
                    a = k[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), i = t.length; i--; )
                      (a = Te(t[i]))[w] ? s.push(a) : r.push(a);
                    (a = k(
                      e,
                      (function (e, t) {
                        var i = t.length > 0,
                          s = e.length > 0,
                          r = function (r, o, a, l, d) {
                            var c,
                              f,
                              m,
                              v = 0,
                              y = "0",
                              b = r && [],
                              w = [],
                              x = u,
                              S = r || (s && n.find.TAG("*", d)),
                              T = (C += null == x ? 1 : Math.random() || 0.1),
                              E = S.length;
                            for (
                              d && (u = o == h || o || d);
                              y !== E && null != (c = S[y]);
                              y++
                            ) {
                              if (s && c) {
                                for (
                                  f = 0,
                                    o ||
                                      c.ownerDocument == h ||
                                      (p(c), (a = !g));
                                  (m = e[f++]);

                                )
                                  if (m(c, o || h, a)) {
                                    l.push(c);
                                    break;
                                  }
                                d && (C = T);
                              }
                              i && ((c = !m && c) && v--, r && b.push(c));
                            }
                            if (((v += y), i && y !== v)) {
                              for (f = 0; (m = t[f++]); ) m(b, w, o, a);
                              if (r) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = I.call(l));
                                w = Ce(w);
                              }
                              D.apply(l, w),
                                d &&
                                  !r &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return d && ((C = T), (u = x)), b;
                          };
                        return i ? ue(r) : r;
                      })(r, s)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, i, s) {
                  var r,
                    l,
                    u,
                    d,
                    c,
                    p = "function" == typeof e && e,
                    h = !s && o((e = p.selector || e));
                  if (((i = i || []), 1 === h.length)) {
                    if (
                      (l = h[0] = h[0].slice(0)).length > 2 &&
                      "ID" === (u = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      n.relative[l[1].type]
                    ) {
                      if (
                        !(t = (n.find.ID(u.matches[0].replace(te, ie), t) ||
                          [])[0])
                      )
                        return i;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      r = U.needsContext.test(e) ? 0 : l.length;
                      r-- && ((u = l[r]), !n.relative[(d = u.type)]);

                    )
                      if (
                        (c = n.find[d]) &&
                        (s = c(
                          u.matches[0].replace(te, ie),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(r, 1), !(e = s.length && be(l))))
                          return D.apply(i, s), i;
                        break;
                      }
                  }
                  return (
                    (p || a(e, h))(
                      s,
                      t,
                      !g,
                      i,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    i
                  );
                }),
              (i.sortStable = w.split("").sort(A).join("") === w),
              (i.detectDuplicates = !!c),
              p(),
              (i.sortDetached = de(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              de(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ce("type|href|height|width", function (e, t, i) {
                  if (!i)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (i.attributes &&
                de(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ce("value", function (e, t, i) {
                  if (!i && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              de(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ce(_, function (e, t, i) {
                  var n;
                  if (!i)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (n = e.getAttributeNode(t)) && n.specified
                      ? n.value
                      : null;
                }),
              ae
            );
          })(n);
          (T.find = k),
            (T.expr = k.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = k.uniqueSort),
            (T.text = k.getText),
            (T.isXMLDoc = k.isXML),
            (T.contains = k.contains),
            (T.escapeSelector = k.escape);
          var L = function (e, t, i) {
              for (
                var n = [], s = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (s && T(e).is(i)) break;
                  n.push(e);
                }
              return n;
            },
            A = function (e, t) {
              for (var i = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && i.push(e);
              return i;
            },
            P = T.expr.match.needsContext;
          function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var I =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function M(e, t, i) {
            return v(t)
              ? T.grep(e, function (e, n) {
                  return !!t.call(e, n, e) !== i;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== i;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return d.call(t, e) > -1 !== i;
                })
              : T.filter(t, e, i);
          }
          (T.filter = function (e, t, i) {
            var n = t[0];
            return (
              i && (e = ":not(" + e + ")"),
              1 === t.length && 1 === n.nodeType
                ? T.find.matchesSelector(n, e)
                  ? [n]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  i,
                  n = this.length,
                  s = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < n; t++)
                        if (T.contains(s[t], this)) return !0;
                    })
                  );
                for (i = this.pushStack([]), t = 0; t < n; t++)
                  T.find(e, s[t], i);
                return n > 1 ? T.uniqueSort(i) : i;
              },
              filter: function (e) {
                return this.pushStack(M(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(M(this, e || [], !0));
              },
              is: function (e) {
                return !!M(
                  this,
                  "string" == typeof e && P.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, i) {
            var n, s;
            if (!e) return this;
            if (((i = i || D), "string" == typeof e)) {
              if (
                !(n =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : N.exec(e)) ||
                (!n[1] && t)
              )
                return !t || t.jquery
                  ? (t || i).find(e)
                  : this.constructor(t).find(e);
              if (n[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      n[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  I.test(n[1]) && T.isPlainObject(t))
                )
                  for (n in t) v(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
              }
              return (
                (s = b.getElementById(n[2])) &&
                  ((this[0] = s), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== i.ready
                ? i.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (D = T(b));
          var $ = /^(?:parents|prev(?:Until|All))/,
            _ = { children: !0, contents: !0, next: !0, prev: !0 };
          function j(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                i = t.length;
              return this.filter(function () {
                for (var e = 0; e < i; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var i,
                n = 0,
                s = this.length,
                r = [],
                o = "string" != typeof e && T(e);
              if (!P.test(e))
                for (; n < s; n++)
                  for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (
                      i.nodeType < 11 &&
                      (o
                        ? o.index(i) > -1
                        : 1 === i.nodeType && T.find.matchesSelector(i, e))
                    ) {
                      r.push(i);
                      break;
                    }
              return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(T(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return L(e, "parentNode");
                },
                parentsUntil: function (e, t, i) {
                  return L(e, "parentNode", i);
                },
                next: function (e) {
                  return j(e, "nextSibling");
                },
                prev: function (e) {
                  return j(e, "previousSibling");
                },
                nextAll: function (e) {
                  return L(e, "nextSibling");
                },
                prevAll: function (e) {
                  return L(e, "previousSibling");
                },
                nextUntil: function (e, t, i) {
                  return L(e, "nextSibling", i);
                },
                prevUntil: function (e, t, i) {
                  return L(e, "previousSibling", i);
                },
                siblings: function (e) {
                  return A((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return A(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (O(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (i, n) {
                  var s = T.map(this, t, i);
                  return (
                    "Until" !== e.slice(-5) && (n = i),
                    n && "string" == typeof n && (s = T.filter(n, s)),
                    this.length > 1 &&
                      (_[e] || T.uniqueSort(s), $.test(e) && s.reverse()),
                    this.pushStack(s)
                  );
                };
              }
            );
          var H = /[^\x20\t\r\n\f]+/g;
          function z(e) {
            return e;
          }
          function q(e) {
            throw e;
          }
          function B(e, t, i, n) {
            var s;
            try {
              e && v((s = e.promise))
                ? s.call(e).done(t).fail(i)
                : e && v((s = e.then))
                ? s.call(e, t, i)
                : t.apply(void 0, [e].slice(n));
            } catch (e) {
              i.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(H) || [], function (e, i) {
                        t[i] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              i,
              n,
              s,
              r = [],
              o = [],
              a = -1,
              l = function () {
                for (s = s || e.once, n = t = !0; o.length; a = -1)
                  for (i = o.shift(); ++a < r.length; )
                    !1 === r[a].apply(i[0], i[1]) &&
                      e.stopOnFalse &&
                      ((a = r.length), (i = !1));
                e.memory || (i = !1), (t = !1), s && (r = i ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    r &&
                      (i && !t && ((a = r.length - 1), o.push(i)),
                      (function t(i) {
                        T.each(i, function (i, n) {
                          v(n)
                            ? (e.unique && u.has(n)) || r.push(n)
                            : n && n.length && "string" !== C(n) && t(n);
                        });
                      })(arguments),
                      i && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var i; (i = T.inArray(t, r, i)) > -1; )
                        r.splice(i, 1), i <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (s = o = []), (r = i = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (s = o = []), i || t || (r = i = ""), this;
                },
                locked: function () {
                  return !!s;
                },
                fireWith: function (e, i) {
                  return (
                    s ||
                      ((i = [e, (i = i || []).slice ? i.slice() : i]),
                      o.push(i),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!n;
                },
              };
            return u;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  i = "pending",
                  s = {
                    state: function () {
                      return i;
                    },
                    always: function () {
                      return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return s.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (i) {
                        T.each(t, function (t, n) {
                          var s = v(e[n[4]]) && e[n[4]];
                          r[n[1]](function () {
                            var e = s && s.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(i.notify)
                                  .done(i.resolve)
                                  .fail(i.reject)
                              : i[n[0] + "With"](this, s ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, i, s) {
                      var r = 0;
                      function o(e, t, i, s) {
                        return function () {
                          var a = this,
                            l = arguments,
                            u = function () {
                              var n, u;
                              if (!(e < r)) {
                                if ((n = i.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  n &&
                                  ("object" == typeof n ||
                                    "function" == typeof n) &&
                                  n.then),
                                  v(u)
                                    ? s
                                      ? u.call(n, o(r, t, z, s), o(r, t, q, s))
                                      : (r++,
                                        u.call(
                                          n,
                                          o(r, t, z, s),
                                          o(r, t, q, s),
                                          o(r, t, z, t.notifyWith)
                                        ))
                                    : (i !== z && ((a = void 0), (l = [n])),
                                      (s || t.resolveWith)(a, l));
                              }
                            },
                            d = s
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (n) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(n, d.stackTrace),
                                      e + 1 >= r &&
                                        (i !== q && ((a = void 0), (l = [n])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? d()
                            : (T.Deferred.getStackHook &&
                                (d.stackTrace = T.Deferred.getStackHook()),
                              n.setTimeout(d));
                        };
                      }
                      return T.Deferred(function (n) {
                        t[0][3].add(o(0, n, v(s) ? s : z, n.notifyWith)),
                          t[1][3].add(o(0, n, v(e) ? e : z)),
                          t[2][3].add(o(0, n, v(i) ? i : q));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, s) : s;
                    },
                  },
                  r = {};
                return (
                  T.each(t, function (e, n) {
                    var o = n[2],
                      a = n[5];
                    (s[n[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            i = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(n[3].fire),
                      (r[n[0]] = function () {
                        return (
                          r[n[0] + "With"](
                            this === r ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (r[n[0] + "With"] = o.fireWith);
                  }),
                  s.promise(r),
                  e && e.call(r, r),
                  r
                );
              },
              when: function (e) {
                var t = arguments.length,
                  i = t,
                  n = Array(i),
                  s = a.call(arguments),
                  r = T.Deferred(),
                  o = function (e) {
                    return function (i) {
                      (n[e] = this),
                        (s[e] = arguments.length > 1 ? a.call(arguments) : i),
                        --t || r.resolveWith(n, s);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, r.done(o(i)).resolve, r.reject, !t),
                  "pending" === r.state() || v(s[i] && s[i].then))
                )
                  return r.then();
                for (; i--; ) B(s[i], o(i), r.reject);
                return r.promise();
              },
            });
          var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            n.console &&
              n.console.warn &&
              e &&
              V.test(e.name) &&
              n.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              n.setTimeout(function () {
                throw e;
              });
            });
          var G = T.Deferred();
          function F() {
            b.removeEventListener("DOMContentLoaded", F),
              n.removeEventListener("load", F),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              G.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || G.resolveWith(b, [T]));
              },
            }),
            (T.ready.then = G.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? n.setTimeout(T.ready)
              : (b.addEventListener("DOMContentLoaded", F),
                n.addEventListener("load", F));
          var W = function (e, t, i, n, s, r, o) {
              var a = 0,
                l = e.length,
                u = null == i;
              if ("object" === C(i))
                for (a in ((s = !0), i)) W(e, t, a, i[a], !0, r, o);
              else if (
                void 0 !== n &&
                ((s = !0),
                v(n) || (o = !0),
                u &&
                  (o
                    ? (t.call(e, n), (t = null))
                    : ((u = t),
                      (t = function (e, t, i) {
                        return u.call(T(e), i);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], i, o ? n : n.call(e[a], a, t(e[a], i)));
              return s ? e : u ? t.call(e) : l ? t(e[0], i) : r;
            },
            R = /^-ms-/,
            X = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(R, "ms-").replace(X, U);
          }
          var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = T.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    K(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, i) {
                var n,
                  s = this.cache(e);
                if ("string" == typeof t) s[Y(t)] = i;
                else for (n in t) s[Y(n)] = t[n];
                return s;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, i) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === i)
                  ? this.get(e, t)
                  : (this.set(e, t, i), void 0 !== i ? i : t);
              },
              remove: function (e, t) {
                var i,
                  n = e[this.expando];
                if (void 0 !== n) {
                  if (void 0 !== t) {
                    i = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in n
                      ? [t]
                      : t.match(H) || []).length;
                    for (; i--; ) delete n[t[i]];
                  }
                  (void 0 === t || T.isEmptyObject(n)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var Q = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ie(e, t, i) {
            var n;
            if (void 0 === i && 1 === e.nodeType)
              if (
                ((n = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (i = e.getAttribute(n)))
              ) {
                try {
                  i = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(i);
                } catch (e) {}
                Z.set(e, t, i);
              } else i = void 0;
            return i;
          }
          T.extend({
            hasData: function (e) {
              return Z.hasData(e) || Q.hasData(e);
            },
            data: function (e, t, i) {
              return Z.access(e, t, i);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, i) {
              return Q.access(e, t, i);
            },
            _removeData: function (e, t) {
              Q.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var i,
                  n,
                  s,
                  r = this[0],
                  o = r && r.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((s = Z.get(r)),
                    1 === r.nodeType && !Q.get(r, "hasDataAttrs"))
                  ) {
                    for (i = o.length; i--; )
                      o[i] &&
                        0 === (n = o[i].name).indexOf("data-") &&
                        ((n = Y(n.slice(5))), ie(r, n, s[n]));
                    Q.set(r, "hasDataAttrs", !0);
                  }
                  return s;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : W(
                      this,
                      function (t) {
                        var i;
                        if (r && void 0 === t)
                          return void 0 !== (i = Z.get(r, e)) ||
                            void 0 !== (i = ie(r, e))
                            ? i
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, i) {
                var n;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (n = Q.get(e, t)),
                    i &&
                      (!n || Array.isArray(i)
                        ? (n = Q.access(e, t, T.makeArray(i)))
                        : n.push(i)),
                    n || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var i = T.queue(e, t),
                  n = i.length,
                  s = i.shift(),
                  r = T._queueHooks(e, t);
                "inprogress" === s && ((s = i.shift()), n--),
                  s &&
                    ("fx" === t && i.unshift("inprogress"),
                    delete r.stop,
                    s.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      r
                    )),
                  !n && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return (
                  Q.get(e, i) ||
                  Q.access(e, i, {
                    empty: T.Callbacks("once memory").add(function () {
                      Q.remove(e, [t + "queue", i]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var i = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), i--),
                  arguments.length < i
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var i = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== i[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var i,
                  n = 1,
                  s = T.Deferred(),
                  r = this,
                  o = this.length,
                  a = function () {
                    --n || s.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (i = Q.get(r[o], e + "queueHooks")) &&
                    i.empty &&
                    (n++, i.empty.add(a));
                return a(), s.promise(t);
              },
            });
          var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            se = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            ae = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ue = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === T.css(e, "display"))
            );
          };
          function de(e, t, i, n) {
            var s,
              r,
              o = 20,
              a = n
                ? function () {
                    return n.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              l = a(),
              u = (i && i[3]) || (T.cssNumber[t] ? "" : "px"),
              d =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== u && +l)) &&
                se.exec(T.css(e, t));
            if (d && d[3] !== u) {
              for (l /= 2, u = u || d[3], d = +l || 1; o--; )
                T.style(e, t, d + u),
                  (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0),
                  (d /= r);
              (d *= 2), T.style(e, t, d + u), (i = i || []);
            }
            return (
              i &&
                ((d = +d || +l || 0),
                (s = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
                n && ((n.unit = u), (n.start = d), (n.end = s))),
              s
            );
          }
          var ce = {};
          function pe(e) {
            var t,
              i = e.ownerDocument,
              n = e.nodeName,
              s = ce[n];
            return (
              s ||
              ((t = i.body.appendChild(i.createElement(n))),
              (s = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === s && (s = "block"),
              (ce[n] = s),
              s)
            );
          }
          function he(e, t) {
            for (var i, n, s = [], r = 0, o = e.length; r < o; r++)
              (n = e[r]).style &&
                ((i = n.style.display),
                t
                  ? ("none" === i &&
                      ((s[r] = Q.get(n, "display") || null),
                      s[r] || (n.style.display = "")),
                    "" === n.style.display && ue(n) && (s[r] = pe(n)))
                  : "none" !== i && ((s[r] = "none"), Q.set(n, "display", i)));
            for (r = 0; r < o; r++) null != s[r] && (e[r].style.display = s[r]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return he(this, !0);
            },
            hide: function () {
              return he(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ue(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var fe,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            fe.appendChild(ge),
            (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (fe.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
            (fe.innerHTML = "<option></option>"),
            (m.option = !!fe.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function we(e, t) {
            var i;
            return (
              (i =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && O(e, t)) ? T.merge([e], i) : i
            );
          }
          function xe(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
              Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            m.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Ce = /<|&#?\w+;/;
          function Se(e, t, i, n, s) {
            for (
              var r,
                o,
                a,
                l,
                u,
                d,
                c = t.createDocumentFragment(),
                p = [],
                h = 0,
                f = e.length;
              h < f;
              h++
            )
              if ((r = e[h]) || 0 === r)
                if ("object" === C(r)) T.merge(p, r.nodeType ? [r] : r);
                else if (Ce.test(r)) {
                  for (
                    o = o || c.appendChild(t.createElement("div")),
                      a = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      o.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                      d = l[0];
                    d--;

                  )
                    o = o.lastChild;
                  T.merge(p, o.childNodes),
                    ((o = c.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
            for (c.textContent = "", h = 0; (r = p[h++]); )
              if (n && T.inArray(r, n) > -1) s && s.push(r);
              else if (
                ((u = ae(r)),
                (o = we(c.appendChild(r), "script")),
                u && xe(o),
                i)
              )
                for (d = 0; (r = o[d++]); ) ye.test(r.type || "") && i.push(r);
            return c;
          }
          var Te = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Le(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ae(e, t, i, n, s, r) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof i && ((n = n || i), (i = void 0)),
              t))
                Ae(e, a, i, n, t[a], r);
              return e;
            }
            if (
              (null == n && null == s
                ? ((s = i), (n = i = void 0))
                : null == s &&
                  ("string" == typeof i
                    ? ((s = n), (n = void 0))
                    : ((s = n), (n = i), (i = void 0))),
              !1 === s)
            )
              s = ke;
            else if (!s) return e;
            return (
              1 === r &&
                ((o = s),
                (s = function (e) {
                  return T().off(e), o.apply(this, arguments);
                }),
                (s.guid = o.guid || (o.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, s, n, i);
              })
            );
          }
          function Pe(e, t, i) {
            i
              ? (Q.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      s,
                      r = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = a.call(arguments)),
                        Q.set(this, t, r),
                        (n = i(this, t)),
                        this[t](),
                        r !== (s = Q.get(this, t)) || n
                          ? Q.set(this, t, !1)
                          : (s = {}),
                        r !== s)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          s && s.value
                        );
                    } else
                      r.length &&
                        (Q.set(this, t, {
                          value: T.event.trigger(
                            T.extend(r[0], T.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Q.get(e, t) && T.event.add(e, t, Ee);
          }
          (T.event = {
            global: {},
            add: function (e, t, i, n, s) {
              var r,
                o,
                a,
                l,
                u,
                d,
                c,
                p,
                h,
                f,
                g,
                m = Q.get(e);
              if (K(e))
                for (
                  i.handler && ((i = (r = i).handler), (s = r.selector)),
                    s && T.find.matchesSelector(oe, s),
                    i.guid || (i.guid = T.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (o = m.handle) ||
                      (o = m.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match(H) || [""]).length;
                  u--;

                )
                  (h = g = (a = Te.exec(t[u]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h &&
                      ((c = T.event.special[h] || {}),
                      (h = (s ? c.delegateType : c.bindType) || h),
                      (c = T.event.special[h] || {}),
                      (d = T.extend(
                        {
                          type: h,
                          origType: g,
                          data: n,
                          handler: i,
                          guid: i.guid,
                          selector: s,
                          needsContext: s && T.expr.match.needsContext.test(s),
                          namespace: f.join("."),
                        },
                        r
                      )),
                      (p = l[h]) ||
                        (((p = l[h] = []).delegateCount = 0),
                        (c.setup && !1 !== c.setup.call(e, n, f, o)) ||
                          (e.addEventListener && e.addEventListener(h, o))),
                      c.add &&
                        (c.add.call(e, d),
                        d.handler.guid || (d.handler.guid = i.guid)),
                      s ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (T.event.global[h] = !0));
            },
            remove: function (e, t, i, n, s) {
              var r,
                o,
                a,
                l,
                u,
                d,
                c,
                p,
                h,
                f,
                g,
                m = Q.hasData(e) && Q.get(e);
              if (m && (l = m.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--; )
                  if (
                    ((h = g = (a = Te.exec(t[u]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      c = T.event.special[h] || {},
                        p =
                          l[(h = (n ? c.delegateType : c.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = r = p.length;
                      r--;

                    )
                      (d = p[r]),
                        (!s && g !== d.origType) ||
                          (i && i.guid !== d.guid) ||
                          (a && !a.test(d.namespace)) ||
                          (n &&
                            n !== d.selector &&
                            ("**" !== n || !d.selector)) ||
                          (p.splice(r, 1),
                          d.selector && p.delegateCount--,
                          c.remove && c.remove.call(e, d));
                    o &&
                      !p.length &&
                      ((c.teardown && !1 !== c.teardown.call(e, f, m.handle)) ||
                        T.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) T.event.remove(e, h + t[u], i, n, !0);
                T.isEmptyObject(l) && Q.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                i,
                n,
                s,
                r,
                o,
                a = new Array(arguments.length),
                l = T.event.fix(e),
                u =
                  (Q.get(this, "events") || Object.create(null))[l.type] || [],
                d = T.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, l))
              ) {
                for (
                  o = T.event.handlers.call(this, l, u), t = 0;
                  (s = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = s.elem, i = 0;
                    (r = s.handlers[i++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== r.namespace &&
                      !l.rnamespace.test(r.namespace)) ||
                      ((l.handleObj = r),
                      (l.data = r.data),
                      void 0 !==
                        (n = (
                          (T.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(s.elem, a)) &&
                        !1 === (l.result = n) &&
                        (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var i,
                n,
                s,
                r,
                o,
                a = [],
                l = t.delegateCount,
                u = e.target;
              if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (r = [], o = {}, i = 0; i < l; i++)
                      void 0 === o[(s = (n = t[i]).selector + " ")] &&
                        (o[s] = n.needsContext
                          ? T(s, this).index(u) > -1
                          : T.find(s, this, null, [u]).length),
                        o[s] && r.push(n);
                    r.length && a.push({ elem: u, handlers: r });
                  }
              return (
                (u = this),
                l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Pe(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Pe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      O(t, "input") &&
                      Q.get(t, "click")) ||
                    O(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, i) {
              e.removeEventListener && e.removeEventListener(t, i);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Pe(this, e, Le), !1;
                },
                trigger: function () {
                  return Pe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var i,
                      n = this,
                      s = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (s && (s === n || T.contains(n, s))) ||
                        ((e.type = r.origType),
                        (i = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      i
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, i, n) {
                return Ae(this, e, t, i, n);
              },
              one: function (e, t, i, n) {
                return Ae(this, e, t, i, n, 1);
              },
              off: function (e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (n = e.handleObj),
                    T(e.delegateTarget).off(
                      n.namespace ? n.origType + "." + n.namespace : n.origType,
                      n.selector,
                      n.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (s in e) this.off(s, t, e[s]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((i = t), (t = void 0)),
                  !1 === i && (i = ke),
                  this.each(function () {
                    T.event.remove(this, e, i, t);
                  })
                );
              },
            });
          var Oe = /<script|<style|<link/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
            return (
              (O(e, "table") &&
                O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Ne(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function _e(e, t) {
            var i, n, s, r, o, a;
            if (1 === t.nodeType) {
              if (Q.hasData(e) && (a = Q.get(e).events))
                for (s in (Q.remove(t, "handle events"), a))
                  for (i = 0, n = a[s].length; i < n; i++)
                    T.event.add(t, s, a[s][i]);
              Z.hasData(e) &&
                ((r = Z.access(e)), (o = T.extend({}, r)), Z.set(t, o));
            }
          }
          function je(e, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== i && "textarea" !== i) ||
                (t.defaultValue = e.defaultValue);
          }
          function He(e, t, i, n) {
            t = l(t);
            var s,
              r,
              o,
              a,
              u,
              d,
              c = 0,
              p = e.length,
              h = p - 1,
              f = t[0],
              g = v(f);
            if (
              g ||
              (p > 1 && "string" == typeof f && !m.checkClone && Ie.test(f))
            )
              return e.each(function (s) {
                var r = e.eq(s);
                g && (t[0] = f.call(this, s, r.html())), He(r, t, i, n);
              });
            if (
              p &&
              ((r = (s = Se(t, e[0].ownerDocument, !1, e, n)).firstChild),
              1 === s.childNodes.length && (s = r),
              r || n)
            ) {
              for (a = (o = T.map(we(s, "script"), Ne)).length; c < p; c++)
                (u = s),
                  c !== h &&
                    ((u = T.clone(u, !0, !0)),
                    a && T.merge(o, we(u, "script"))),
                  i.call(e[c], u, c);
              if (a)
                for (
                  d = o[o.length - 1].ownerDocument, T.map(o, $e), c = 0;
                  c < a;
                  c++
                )
                  (u = o[c]),
                    ye.test(u.type || "") &&
                      !Q.access(u, "globalEval") &&
                      T.contains(d, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !u.noModule &&
                          T._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            d
                          )
                        : x(u.textContent.replace(Me, ""), u, d));
            }
            return e;
          }
          function ze(e, t, i) {
            for (
              var n, s = t ? T.filter(t, e) : e, r = 0;
              null != (n = s[r]);
              r++
            )
              i || 1 !== n.nodeType || T.cleanData(we(n)),
                n.parentNode &&
                  (i && ae(n) && xe(we(n, "script")),
                  n.parentNode.removeChild(n));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, i) {
              var n,
                s,
                r,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (o = we(a), n = 0, s = (r = we(e)).length; n < s; n++)
                  je(r[n], o[n]);
              if (t)
                if (i)
                  for (
                    r = r || we(e), o = o || we(a), n = 0, s = r.length;
                    n < s;
                    n++
                  )
                    _e(r[n], o[n]);
                else _e(e, a);
              return (
                (o = we(a, "script")).length > 0 &&
                  xe(o, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, i, n, s = T.event.special, r = 0;
                void 0 !== (i = e[r]);
                r++
              )
                if (K(i)) {
                  if ((t = i[Q.expando])) {
                    if (t.events)
                      for (n in t.events)
                        s[n]
                          ? T.event.remove(i, n)
                          : T.removeEvent(i, n, t.handle);
                    i[Q.expando] = void 0;
                  }
                  i[Z.expando] && (i[Z.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return ze(this, e, !0);
              },
              remove: function (e) {
                return ze(this, e);
              },
              text: function (e) {
                return W(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return He(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return He(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return He(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return He(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return W(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      i = 0,
                      n = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Oe.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; i < n; i++)
                          1 === (t = this[i] || {}).nodeType &&
                            (T.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return He(
                  this,
                  arguments,
                  function (t) {
                    var i = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(we(this)), i && i.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var i, n = [], s = T(e), r = s.length - 1, o = 0;
                    o <= r;
                    o++
                  )
                    (i = o === r ? this : this.clone(!0)),
                      T(s[o])[t](i),
                      u.apply(n, i.get());
                  return this.pushStack(n);
                };
              }
            );
          var qe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = n), t.getComputedStyle(e);
            },
            Ve = function (e, t, i) {
              var n,
                s,
                r = {};
              for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
              for (s in ((n = i.call(e)), t)) e.style[s] = r[s];
              return n;
            },
            Ge = new RegExp(re.join("|"), "i");
          function Fe(e, t, i) {
            var n,
              s,
              r,
              o,
              a = e.style;
            return (
              (i = i || Be(e)) &&
                ("" !== (o = i.getPropertyValue(t) || i[t]) ||
                  ae(e) ||
                  (o = T.style(e, t)),
                !m.pixelBoxStyles() &&
                  qe.test(o) &&
                  Ge.test(t) &&
                  ((n = a.width),
                  (s = a.minWidth),
                  (r = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = i.width),
                  (a.width = n),
                  (a.minWidth = s),
                  (a.maxWidth = r))),
              void 0 !== o ? o + "" : o
            );
          }
          function We(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (d) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(u).appendChild(d);
                var e = n.getComputedStyle(d);
                (i = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (d.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (s = 36 === t(e.width)),
                  (d.style.position = "absolute"),
                  (r = 12 === t(d.offsetWidth / 3)),
                  oe.removeChild(u),
                  (d = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var i,
              s,
              r,
              o,
              a,
              l,
              u = b.createElement("div"),
              d = b.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
              T.extend(m, {
                boxSizingReliable: function () {
                  return e(), s;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), i;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), r;
                },
                reliableTrDimensions: function () {
                  var e, t, i, s;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (i = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (i.style.height = "9px"),
                      (i.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(i),
                      (s = n.getComputedStyle(t)),
                      (a =
                        parseInt(s.height, 10) +
                          parseInt(s.borderTopWidth, 10) +
                          parseInt(s.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Re = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ue = {};
          function Ye(e) {
            var t = T.cssProps[e] || Ue[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ue[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), i = Re.length;
                        i--;

                      )
                        if ((e = Re[i] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Qe = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, i) {
            var n = se.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
          }
          function tt(e, t, i, n, s, r) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === i && (l += T.css(e, i + re[o], !0, s)),
                n
                  ? ("content" === i &&
                      (l -= T.css(e, "padding" + re[o], !0, s)),
                    "margin" !== i &&
                      (l -= T.css(e, "border" + re[o] + "Width", !0, s)))
                  : ((l += T.css(e, "padding" + re[o], !0, s)),
                    "padding" !== i
                      ? (l += T.css(e, "border" + re[o] + "Width", !0, s))
                      : (a += T.css(e, "border" + re[o] + "Width", !0, s)));
            return (
              !n &&
                r >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function it(e, t, i) {
            var n = Be(e),
              s =
                (!m.boxSizingReliable() || i) &&
                "border-box" === T.css(e, "boxSizing", !1, n),
              r = s,
              o = Fe(e, t, n),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(o)) {
              if (!i) return o;
              o = "auto";
            }
            return (
              ((!m.boxSizingReliable() && s) ||
                (!m.reliableTrDimensions() && O(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === T.css(e, "display", !1, n))) &&
                e.getClientRects().length &&
                ((s = "border-box" === T.css(e, "boxSizing", !1, n)),
                (r = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                tt(e, t, i || (s ? "border" : "content"), r, n, o) +
                "px"
            );
          }
          function nt(e, t, i, n, s) {
            return new nt.prototype.init(e, t, i, n, s);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var i = Fe(e, "opacity");
                    return "" === i ? "1" : i;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, i, n) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                  r,
                  o,
                  a = Y(t),
                  l = Je.test(t),
                  u = e.style;
                if (
                  (l || (t = Ye(a)),
                  (o = T.cssHooks[t] || T.cssHooks[a]),
                  void 0 === i)
                )
                  return o && "get" in o && void 0 !== (s = o.get(e, !1, n))
                    ? s
                    : u[t];
                "string" === (r = typeof i) &&
                  (s = se.exec(i)) &&
                  s[1] &&
                  ((i = de(e, t, s)), (r = "number")),
                  null != i &&
                    i == i &&
                    ("number" !== r ||
                      l ||
                      (i += (s && s[3]) || (T.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== i ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (o && "set" in o && void 0 === (i = o.set(e, i, n))) ||
                      (l ? u.setProperty(t, i) : (u[t] = i)));
              }
            },
            css: function (e, t, i, n) {
              var s,
                r,
                o,
                a = Y(t);
              return (
                Je.test(t) || (t = Ye(a)),
                (o = T.cssHooks[t] || T.cssHooks[a]) &&
                  "get" in o &&
                  (s = o.get(e, !0, i)),
                void 0 === s && (s = Fe(e, t, n)),
                "normal" === s && t in Ze && (s = Ze[t]),
                "" === i || i
                  ? ((r = parseFloat(s)), !0 === i || isFinite(r) ? r || 0 : s)
                  : s
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, i, n) {
                  if (i)
                    return !Ke.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, n)
                      : Ve(e, Qe, function () {
                          return it(e, t, n);
                        });
                },
                set: function (e, i, n) {
                  var s,
                    r = Be(e),
                    o = !m.scrollboxSize() && "absolute" === r.position,
                    a =
                      (o || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                    l = n ? tt(e, t, n, a, r) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          tt(e, t, "border", !1, r) -
                          0.5
                      )),
                    l &&
                      (s = se.exec(i)) &&
                      "px" !== (s[3] || "px") &&
                      ((e.style[t] = i), (i = T.css(e, t))),
                    et(0, i, l)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = We(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Ve(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (i) {
                    for (
                      var n = 0,
                        s = {},
                        r = "string" == typeof i ? i.split(" ") : [i];
                      n < 4;
                      n++
                    )
                      s[e + re[n] + t] = r[n] || r[n - 2] || r[0];
                    return s;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = et);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return W(
                  this,
                  function (e, t, i) {
                    var n,
                      s,
                      r = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (n = Be(e), s = t.length; o < s; o++)
                        r[t[o]] = T.css(e, t[o], !1, n);
                      return r;
                    }
                    return void 0 !== i ? T.style(e, t, i) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = nt),
            (nt.prototype = {
              constructor: nt,
              init: function (e, t, i, n, s, r) {
                (this.elem = e),
                  (this.prop = i),
                  (this.easing = s || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = n),
                  (this.unit = r || (T.cssNumber[i] ? "" : "px"));
              },
              cur: function () {
                var e = nt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : nt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  i = nt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  i && i.set ? i.set(this) : nt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (nt.prototype.init.prototype = nt.prototype),
            (nt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = nt.prototype.init),
            (T.fx.step = {});
          var st,
            rt,
            ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            rt &&
              (!1 === b.hidden && n.requestAnimationFrame
                ? n.requestAnimationFrame(lt)
                : n.setTimeout(lt, T.fx.interval),
              T.fx.tick());
          }
          function ut() {
            return (
              n.setTimeout(function () {
                st = void 0;
              }),
              (st = Date.now())
            );
          }
          function dt(e, t) {
            var i,
              n = 0,
              s = { height: e };
            for (t = t ? 1 : 0; n < 4; n += 2 - t)
              s["margin" + (i = re[n])] = s["padding" + i] = e;
            return t && (s.opacity = s.width = e), s;
          }
          function ct(e, t, i) {
            for (
              var n,
                s = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                r = 0,
                o = s.length;
              r < o;
              r++
            )
              if ((n = s[r].call(i, t, e))) return n;
          }
          function pt(e, t, i) {
            var n,
              s,
              r = 0,
              o = pt.prefilters.length,
              a = T.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (s) return !1;
                for (
                  var t = st || ut(),
                    i = Math.max(0, u.startTime + u.duration - t),
                    n = 1 - (i / u.duration || 0),
                    r = 0,
                    o = u.tweens.length;
                  r < o;
                  r++
                )
                  u.tweens[r].run(n);
                return (
                  a.notifyWith(e, [u, n, i]),
                  n < 1 && o
                    ? i
                    : (o || a.notifyWith(e, [u, 1, 0]),
                      a.resolveWith(e, [u]),
                      !1)
                );
              },
              u = a.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  i
                ),
                originalProperties: t,
                originalOptions: i,
                startTime: st || ut(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                  var n = T.Tween(
                    e,
                    u.opts,
                    t,
                    i,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(n), n;
                },
                stop: function (t) {
                  var i = 0,
                    n = t ? u.tweens.length : 0;
                  if (s) return this;
                  for (s = !0; i < n; i++) u.tweens[i].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                      : a.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              d = u.props;
            for (
              !(function (e, t) {
                var i, n, s, r, o;
                for (i in e)
                  if (
                    ((s = t[(n = Y(i))]),
                    (r = e[i]),
                    Array.isArray(r) && ((s = r[1]), (r = e[i] = r[0])),
                    i !== n && ((e[n] = r), delete e[i]),
                    (o = T.cssHooks[n]) && ("expand" in o))
                  )
                    for (i in ((r = o.expand(r)), delete e[n], r))
                      (i in e) || ((e[i] = r[i]), (t[i] = s));
                  else t[n] = s;
              })(d, u.opts.specialEasing);
              r < o;
              r++
            )
              if ((n = pt.prefilters[r].call(u, e, d, u.opts)))
                return (
                  v(n.stop) &&
                    (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                  n
                );
            return (
              T.map(d, ct, u),
              v(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              T.fx.timer(
                T.extend(l, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (T.Animation = T.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var i = this.createTween(e, t);
                  return de(i.elem, e, se.exec(t), i), i;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
              for (var i, n = 0, s = e.length; n < s; n++)
                (i = e[n]),
                  (pt.tweeners[i] = pt.tweeners[i] || []),
                  pt.tweeners[i].unshift(t);
            },
            prefilters: [
              function (e, t, i) {
                var n,
                  s,
                  r,
                  o,
                  a,
                  l,
                  u,
                  d,
                  c = "width" in t || "height" in t,
                  p = this,
                  h = {},
                  f = e.style,
                  g = e.nodeType && ue(e),
                  m = Q.get(e, "fxshow");
                for (n in (i.queue ||
                  (null == (o = T._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, T.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((s = t[n]), ot.test(s))) {
                    if (
                      (delete t[n],
                      (r = r || "toggle" === s),
                      s === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== s || !m || void 0 === m[n]) continue;
                      g = !0;
                    }
                    h[n] = (m && m[n]) || T.style(e, n);
                  }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
                  for (n in (c &&
                    1 === e.nodeType &&
                    ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (u = m && m.display) && (u = Q.get(e, "display")),
                    "none" === (d = T.css(e, "display")) &&
                      (u
                        ? (d = u)
                        : (he([e], !0),
                          (u = e.style.display || u),
                          (d = T.css(e, "display")),
                          he([e]))),
                    ("inline" === d || ("inline-block" === d && null != u)) &&
                      "none" === T.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          f.display = u;
                        }),
                        null == u &&
                          ((d = f.display), (u = "none" === d ? "" : d))),
                      (f.display = "inline-block"))),
                  i.overflow &&
                    ((f.overflow = "hidden"),
                    p.always(function () {
                      (f.overflow = i.overflow[0]),
                        (f.overflowX = i.overflow[1]),
                        (f.overflowY = i.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = Q.access(e, "fxshow", { display: u })),
                      r && (m.hidden = !g),
                      g && he([e], !0),
                      p.done(function () {
                        for (n in (g || he([e]), Q.remove(e, "fxshow"), h))
                          T.style(e, n, h[n]);
                      })),
                      (l = ct(g ? m[n] : 0, n, p)),
                      n in m ||
                        ((m[n] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, i) {
              var n =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: i || (!i && t) || (v(e) && e),
                      duration: e,
                      easing: (i && t) || (t && !v(t) && t),
                    };
              return (
                T.fx.off
                  ? (n.duration = 0)
                  : "number" != typeof n.duration &&
                    (n.duration in T.fx.speeds
                      ? (n.duration = T.fx.speeds[n.duration])
                      : (n.duration = T.fx.speeds._default)),
                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                  v(n.old) && n.old.call(this),
                    n.queue && T.dequeue(this, n.queue);
                }),
                n
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, i, n) {
                return this.filter(ue)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, i, n);
              },
              animate: function (e, t, i, n) {
                var s = T.isEmptyObject(e),
                  r = T.speed(t, i, n),
                  o = function () {
                    var t = pt(this, T.extend({}, e), r);
                    (s || Q.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
                );
              },
              stop: function (e, t, i) {
                var n = function (e) {
                  var t = e.stop;
                  delete e.stop, t(i);
                };
                return (
                  "string" != typeof e && ((i = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      s = null != e && e + "queueHooks",
                      r = T.timers,
                      o = Q.get(this);
                    if (s) o[s] && o[s].stop && n(o[s]);
                    else
                      for (s in o) o[s] && o[s].stop && at.test(s) && n(o[s]);
                    for (s = r.length; s--; )
                      r[s].elem !== this ||
                        (null != e && r[s].queue !== e) ||
                        (r[s].anim.stop(i), (t = !1), r.splice(s, 1));
                    (!t && i) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      i = Q.get(this),
                      n = i[e + "queue"],
                      s = i[e + "queueHooks"],
                      r = T.timers,
                      o = n ? n.length : 0;
                    for (
                      i.finish = !0,
                        T.queue(this, e, []),
                        s && s.stop && s.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < o; t++)
                      n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var i = T.fn[t];
              T.fn[t] = function (e, n, s) {
                return null == e || "boolean" == typeof e
                  ? i.apply(this, arguments)
                  : this.animate(dt(t, !0), e, n, s);
              };
            }),
            T.each(
              {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, i, n) {
                  return this.animate(t, e, i, n);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                i = T.timers;
              for (st = Date.now(); t < i.length; t++)
                (e = i[t])() || i[t] !== e || i.splice(t--, 1);
              i.length || T.fx.stop(), (st = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              rt || ((rt = !0), lt());
            }),
            (T.fx.stop = function () {
              rt = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, i) {
                  var s = n.setTimeout(t, e);
                  i.stop = function () {
                    n.clearTimeout(s);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var ht,
            ft = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return W(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, i) {
                var n,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, i)
                    : ((1 === r && T.isXMLDoc(e)) ||
                        (s =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== i
                        ? null === i
                          ? void T.removeAttr(e, t)
                          : s && "set" in s && void 0 !== (n = s.set(e, i, t))
                          ? n
                          : (e.setAttribute(t, i + ""), i)
                        : s && "get" in s && null !== (n = s.get(e, t))
                        ? n
                        : null == (n = T.find.attr(e, t))
                        ? void 0
                        : n);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && O(e, "input")) {
                      var i = e.value;
                      return e.setAttribute("type", t), i && (e.value = i), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var i,
                  n = 0,
                  s = t && t.match(H);
                if (s && 1 === e.nodeType)
                  for (; (i = s[n++]); ) e.removeAttribute(i);
              },
            }),
            (ht = {
              set: function (e, t, i) {
                return !1 === t ? T.removeAttr(e, i) : e.setAttribute(i, i), i;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var i = ft[t] || T.find.attr;
              ft[t] = function (e, t, n) {
                var s,
                  r,
                  o = t.toLowerCase();
                return (
                  n ||
                    ((r = ft[o]),
                    (ft[o] = s),
                    (s = null != i(e, t, n) ? o : null),
                    (ft[o] = r)),
                  s
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(H) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(H)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return W(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, i) {
                var n,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (s = T.propHooks[t])),
                    void 0 !== i
                      ? s && "set" in s && void 0 !== (n = s.set(e, i, t))
                        ? n
                        : (e[t] = i)
                      : s && "get" in s && null !== (n = s.get(e, t))
                      ? n
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  i,
                  n,
                  s,
                  r,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (i = this[l++]); )
                    if (
                      ((s = yt(i)), (n = 1 === i.nodeType && " " + vt(s) + " "))
                    ) {
                      for (o = 0; (r = t[o++]); )
                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                      s !== (a = vt(n)) && i.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  i,
                  n,
                  s,
                  r,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (i = this[l++]); )
                    if (
                      ((s = yt(i)), (n = 1 === i.nodeType && " " + vt(s) + " "))
                    ) {
                      for (o = 0; (r = t[o++]); )
                        for (; n.indexOf(" " + r + " ") > -1; )
                          n = n.replace(" " + r + " ", " ");
                      s !== (a = vt(n)) && i.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var i = typeof e,
                  n = "string" === i || Array.isArray(e);
                return "boolean" == typeof t && n
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (i) {
                      T(this).toggleClass(e.call(this, i, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, s, r, o;
                      if (n)
                        for (s = 0, r = T(this), o = bt(e); (t = o[s++]); )
                          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== i) ||
                          ((t = yt(this)) && Q.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Q.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  i,
                  n = 0;
                for (t = " " + e + " "; (i = this[n++]); )
                  if (
                    1 === i.nodeType &&
                    (" " + vt(yt(i)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                i,
                n,
                s = this[0];
              return arguments.length
                ? ((n = v(e)),
                  this.each(function (i) {
                    var s;
                    1 === this.nodeType &&
                      (null == (s = n ? e.call(this, i, T(this).val()) : e)
                        ? (s = "")
                        : "number" == typeof s
                        ? (s += "")
                        : Array.isArray(s) &&
                          (s = T.map(s, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, s, "value")) ||
                        (this.value = s));
                  }))
                : s
                ? (t =
                    T.valHooks[s.type] ||
                    T.valHooks[s.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (i = t.get(s, "value"))
                  ? i
                  : "string" == typeof (i = s.value)
                  ? i.replace(wt, "")
                  : null == i
                  ? ""
                  : i
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : vt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      i,
                      n,
                      s = e.options,
                      r = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? r + 1 : s.length;
                    for (n = r < 0 ? l : o ? r : 0; n < l; n++)
                      if (
                        ((i = s[n]).selected || n === r) &&
                        !i.disabled &&
                        (!i.parentNode.disabled || !O(i.parentNode, "optgroup"))
                      ) {
                        if (((t = T(i).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var i, n, s = e.options, r = T.makeArray(t), o = s.length;
                      o--;

                    )
                      ((n = s[o]).selected =
                        T.inArray(T.valHooks.option.get(n), r) > -1) &&
                        (i = !0);
                    return i || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in n);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, i, s) {
              var r,
                o,
                a,
                l,
                u,
                d,
                c,
                p,
                f = [i || b],
                g = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = i = i || b),
                3 !== i.nodeType &&
                  8 !== i.nodeType &&
                  !xt.test(g + T.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (u = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(g, "object" == typeof e && e)).isTrigger = s
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = i),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (c = T.event.special[g] || {}),
                  s || !c.trigger || !1 !== c.trigger.apply(i, t)))
              ) {
                if (!s && !c.noBubble && !y(i)) {
                  for (
                    l = c.delegateType || g,
                      xt.test(l + g) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    f.push(o), (a = o);
                  a === (i.ownerDocument || b) &&
                    f.push(a.defaultView || a.parentWindow || n);
                }
                for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = r > 1 ? l : c.bindType || g),
                    (d =
                      (Q.get(o, "events") || Object.create(null))[e.type] &&
                      Q.get(o, "handle")) && d.apply(o, t),
                    (d = u && o[u]) &&
                      d.apply &&
                      K(o) &&
                      ((e.result = d.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  s ||
                    e.isDefaultPrevented() ||
                    (c._default && !1 !== c._default.apply(f.pop(), t)) ||
                    !K(i) ||
                    (u &&
                      v(i[g]) &&
                      !y(i) &&
                      ((a = i[u]) && (i[u] = null),
                      (T.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Ct),
                      i[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Ct),
                      (T.event.triggered = void 0),
                      a && (i[u] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, i) {
              var n = T.extend(new T.Event(), i, { type: e, isSimulated: !0 });
              T.event.trigger(n, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var i = this[0];
                if (i) return T.event.trigger(e, t, i, !0);
              },
            }),
            m.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var i = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var n = this.ownerDocument || this.document || this,
                      s = Q.access(n, t);
                    s || n.addEventListener(e, i, !0),
                      Q.access(n, t, (s || 0) + 1);
                  },
                  teardown: function () {
                    var n = this.ownerDocument || this.document || this,
                      s = Q.access(n, t) - 1;
                    s
                      ? Q.access(n, t, s)
                      : (n.removeEventListener(e, i, !0), Q.remove(n, t));
                  },
                };
              });
          var St = n.location,
            Tt = { guid: Date.now() },
            Et = /\?/;
          T.parseXML = function (e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
              t = new n.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (i = t && t.getElementsByTagName("parsererror")[0]),
              (t && !i) ||
                T.error(
                  "Invalid XML: " +
                    (i
                      ? T.map(i.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var kt = /\[\]$/,
            Lt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
          function Ot(e, t, i, n) {
            var s;
            if (Array.isArray(t))
              T.each(t, function (t, s) {
                i || kt.test(e)
                  ? n(e, s)
                  : Ot(
                      e +
                        "[" +
                        ("object" == typeof s && null != s ? t : "") +
                        "]",
                      s,
                      i,
                      n
                    );
              });
            else if (i || "object" !== C(t)) n(e, t);
            else for (s in t) Ot(e + "[" + s + "]", t[s], i, n);
          }
          (T.param = function (e, t) {
            var i,
              n = [],
              s = function (e, t) {
                var i = v(t) ? t() : t;
                n[n.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == i ? "" : i);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                s(this.name, this.value);
              });
            else for (i in e) Ot(i, e[i], t, s);
            return n.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      Pt.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var i = T(this).val();
                    return null == i
                      ? null
                      : Array.isArray(i)
                      ? T.map(i, function (e) {
                          return { name: t.name, value: e.replace(Lt, "\r\n") };
                        })
                      : { name: t.name, value: i.replace(Lt, "\r\n") };
                  })
                  .get();
              },
            });
          var It = /%20/g,
            Mt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            _t = /^\/\//,
            jt = {},
            Ht = {},
            zt = "*/".concat("*"),
            qt = b.createElement("a");
          function Bt(e) {
            return function (t, i) {
              "string" != typeof t && ((i = t), (t = "*"));
              var n,
                s = 0,
                r = t.toLowerCase().match(H) || [];
              if (v(i))
                for (; (n = r[s++]); )
                  "+" === n[0]
                    ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
                    : (e[n] = e[n] || []).push(i);
            };
          }
          function Vt(e, t, i, n) {
            var s = {},
              r = e === Ht;
            function o(a) {
              var l;
              return (
                (s[a] = !0),
                T.each(e[a] || [], function (e, a) {
                  var u = a(t, i, n);
                  return "string" != typeof u || r || s[u]
                    ? r
                      ? !(l = u)
                      : void 0
                    : (t.dataTypes.unshift(u), o(u), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!s["*"] && o("*"));
          }
          function Gt(e, t) {
            var i,
              n,
              s = T.ajaxSettings.flatOptions || {};
            for (i in t)
              void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
            return n && T.extend(!0, e, n), e;
          }
          (qt.href = St.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    St.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": zt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Gt(Gt(e, T.ajaxSettings), t) : Gt(T.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(jt),
              ajaxTransport: Bt(Ht),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var i,
                  s,
                  r,
                  o,
                  a,
                  l,
                  u,
                  d,
                  c,
                  p,
                  h = T.ajaxSetup({}, t),
                  f = h.context || h,
                  g = h.context && (f.nodeType || f.jquery) ? T(f) : T.event,
                  m = T.Deferred(),
                  v = T.Callbacks("once memory"),
                  y = h.statusCode || {},
                  w = {},
                  x = {},
                  C = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!o)
                          for (o = {}; (t = Nt.exec(r)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? r : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) S.always(e[S.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || C;
                      return i && i.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (m.promise(S),
                  (h.url = ((e || h.url || St.href) + "").replace(
                    _t,
                    St.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        qt.protocol + "//" + qt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = T.param(h.data, h.traditional)),
                  Vt(jt, h, t, S),
                  u)
                )
                  return S;
                for (c in ((d = T.event && h.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !$t.test(h.type)),
                (s = h.url.replace(Mt, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(It, "+"))
                  : ((p = h.url.slice(s.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((s += (Et.test(s) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((s = s.replace(Dt, "$1")),
                      (p = (Et.test(s) ? "&" : "?") + "_=" + Tt.guid++ + p)),
                    (h.url = s + p)),
                h.ifModified &&
                  (T.lastModified[s] &&
                    S.setRequestHeader("If-Modified-Since", T.lastModified[s]),
                  T.etag[s] && S.setRequestHeader("If-None-Match", T.etag[s])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", h.contentType),
                S.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  S.setRequestHeader(c, h.headers[c]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, S, h) || u))
                  return S.abort();
                if (
                  ((C = "abort"),
                  v.add(h.complete),
                  S.done(h.success),
                  S.fail(h.error),
                  (i = Vt(Ht, h, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), d && g.trigger("ajaxSend", [S, h]), u)
                  )
                    return S;
                  h.async &&
                    h.timeout > 0 &&
                    (a = n.setTimeout(function () {
                      S.abort("timeout");
                    }, h.timeout));
                  try {
                    (u = !1), i.send(w, E);
                  } catch (e) {
                    if (u) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, o, l) {
                  var c,
                    p,
                    b,
                    w,
                    x,
                    C = t;
                  u ||
                    ((u = !0),
                    a && n.clearTimeout(a),
                    (i = void 0),
                    (r = l || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (c = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (w = (function (e, t, i) {
                        for (
                          var n, s, r, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === n &&
                              (n =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (n)
                          for (s in a)
                            if (a[s] && a[s].test(n)) {
                              l.unshift(s);
                              break;
                            }
                        if (l[0] in i) r = l[0];
                        else {
                          for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                              r = s;
                              break;
                            }
                            o || (o = s);
                          }
                          r = r || o;
                        }
                        if (r) return r !== l[0] && l.unshift(r), i[r];
                      })(h, S, o)),
                    !c &&
                      T.inArray("script", h.dataTypes) > -1 &&
                      T.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (w = (function (e, t, i, n) {
                      var s,
                        r,
                        o,
                        a,
                        l,
                        u = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (o in e.converters)
                          u[o.toLowerCase()] = e.converters[o];
                      for (r = d.shift(); r; )
                        if (
                          (e.responseFields[r] && (i[e.responseFields[r]] = t),
                          !l &&
                            n &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = d.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(o = u[l + " " + r] || u["* " + r]))
                              for (s in u)
                                if (
                                  (a = s.split(" "))[1] === r &&
                                  (o = u[l + " " + a[0]] || u["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = u[s])
                                    : !0 !== u[s] &&
                                      ((r = a[0]), d.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, w, S, c)),
                    c
                      ? (h.ifModified &&
                          ((x = S.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[s] = x),
                          (x = S.getResponseHeader("etag")) && (T.etag[s] = x)),
                        204 === e || "HEAD" === h.type
                          ? (C = "nocontent")
                          : 304 === e
                          ? (C = "notmodified")
                          : ((C = w.state), (p = w.data), (c = !(b = w.error))))
                      : ((b = C),
                        (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || C) + ""),
                    c
                      ? m.resolveWith(f, [p, C, S])
                      : m.rejectWith(f, [S, C, b]),
                    S.statusCode(y),
                    (y = void 0),
                    d &&
                      g.trigger(c ? "ajaxSuccess" : "ajaxError", [
                        S,
                        h,
                        c ? p : b,
                      ]),
                    v.fireWith(f, [S, C]),
                    d &&
                      (g.trigger("ajaxComplete", [S, h]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, i) {
                return T.get(e, t, i, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, i, n, s) {
                return (
                  v(i) && ((s = s || n), (n = i), (i = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: s, data: i, success: n },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, i) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, i);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        i = t.contents();
                      i.length ? i.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (i) {
                  T(this).wrapAll(t ? e.call(this, i) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new n.XMLHttpRequest();
              } catch (e) {}
            });
          var Ft = { 0: 200, 1223: 204 },
            Wt = T.ajaxSettings.xhr();
          (m.cors = !!Wt && "withCredentials" in Wt),
            (m.ajax = Wt = !!Wt),
            T.ajaxTransport(function (e) {
              var t, i;
              if (m.cors || (Wt && !e.crossDomain))
                return {
                  send: function (s, r) {
                    var o,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      s["X-Requested-With"] ||
                      (s["X-Requested-With"] = "XMLHttpRequest"),
                    s))
                      a.setRequestHeader(o, s[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            i =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? r(0, "error")
                              : r(a.status, a.statusText)
                            : r(
                                Ft[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (i = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = i)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              n.setTimeout(function () {
                                t && i();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, i;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (n, s) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (i = function (e) {
                          t.remove(),
                            (i = null),
                            e && s("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    i && i();
                  },
                };
            });
          var Rt,
            Xt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || T.expando + "_" + Tt.guid++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, i) {
              var s,
                r,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Ut.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Ut.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (s = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Ut, "$1" + s))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                  (e.converters["script json"] = function () {
                    return o || T.error(s + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = n[s]),
                  (n[s] = function () {
                    o = arguments;
                  }),
                  i.always(function () {
                    void 0 === r ? T(n).removeProp(s) : (n[s] = r),
                      e[s] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(s)),
                      o && v(r) && r(o[0]),
                      (o = r = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Rt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Rt.childNodes.length)),
            (T.parseHTML = function (e, t, i) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((i = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((n = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(n))
                      : (t = b)),
                  (r = !i && []),
                  (s = I.exec(e))
                    ? [t.createElement(s[1])]
                    : ((s = Se([e], t, r)),
                      r && r.length && T(r).remove(),
                      T.merge([], s.childNodes)));
              var n, s, r;
            }),
            (T.fn.load = function (e, t, i) {
              var n,
                s,
                r,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((n = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((i = t), (t = void 0))
                  : t && "object" == typeof t && (s = "POST"),
                o.length > 0 &&
                  T.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (r = arguments),
                        o.html(
                          n ? T("<div>").append(T.parseHTML(e)).find(n) : e
                        );
                    })
                    .always(
                      i &&
                        function (e, t) {
                          o.each(function () {
                            i.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, i) {
                var n,
                  s,
                  r,
                  o,
                  a,
                  l,
                  u = T.css(e, "position"),
                  d = T(e),
                  c = {};
                "static" === u && (e.style.position = "relative"),
                  (a = d.offset()),
                  (r = T.css(e, "top")),
                  (l = T.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (r + l).indexOf("auto") > -1
                    ? ((o = (n = d.position()).top), (s = n.left))
                    : ((o = parseFloat(r) || 0), (s = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, i, T.extend({}, a))),
                  null != t.top && (c.top = t.top - a.top + o),
                  null != t.left && (c.left = t.left - a.left + s),
                  "using" in t ? t.using.call(e, c) : d.css(c);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  i,
                  n = this[0];
                return n
                  ? n.getClientRects().length
                    ? ((t = n.getBoundingClientRect()),
                      (i = n.ownerDocument.defaultView),
                      {
                        top: t.top + i.pageYOffset,
                        left: t.left + i.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    i,
                    n = this[0],
                    s = { top: 0, left: 0 };
                  if ("fixed" === T.css(n, "position"))
                    t = n.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        i = n.ownerDocument,
                        e = n.offsetParent || i.documentElement;
                      e &&
                      (e === i.body || e === i.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== n &&
                      1 === e.nodeType &&
                      (((s = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (s.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - s.top - T.css(n, "marginTop", !0),
                    left: t.left - s.left - T.css(n, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var i = "pageYOffset" === t;
                T.fn[e] = function (n) {
                  return W(
                    this,
                    function (e, n, s) {
                      var r;
                      if (
                        (y(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === s)
                      )
                        return r ? r[t] : e[n];
                      r
                        ? r.scrollTo(
                            i ? r.pageXOffset : s,
                            i ? s : r.pageYOffset
                          )
                        : (e[n] = s);
                    },
                    e,
                    n,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = We(m.pixelPosition, function (e, i) {
                if (i)
                  return (
                    (i = Fe(e, t)), qe.test(i) ? T(e).position()[t] + "px" : i
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (i, n) {
                  T.fn[n] = function (s, r) {
                    var o = arguments.length && (i || "boolean" != typeof s),
                      a = i || (!0 === s || !0 === r ? "margin" : "border");
                    return W(
                      this,
                      function (t, i, s) {
                        var r;
                        return y(t)
                          ? 0 === n.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === s
                          ? T.css(t, i, a)
                          : T.style(t, i, s, a);
                      },
                      t,
                      o ? s : void 0,
                      o
                    );
                  };
                }
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            T.fn.extend({
              bind: function (e, t, i) {
                return this.on(e, null, t, i);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, i, n) {
                return this.on(t, e, i, n);
              },
              undelegate: function (e, t, i) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", i);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, i) {
                  return arguments.length > 0
                    ? this.on(t, null, e, i)
                    : this.trigger(t);
                };
              }
            );
          var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var i, n, s;
            if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), v(e)))
              return (
                (n = a.call(arguments, 2)),
                (s = function () {
                  return e.apply(t || this, n.concat(a.call(arguments)));
                }),
                (s.guid = e.guid = e.guid || T.guid++),
                s
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = O),
            (T.isFunction = v),
            (T.isWindow = y),
            (T.camelCase = Y),
            (T.type = C),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(Yt, "");
            }),
            void 0 ===
              (i = function () {
                return T;
              }.apply(t, [])) || (e.exports = i);
          var Kt = n.jQuery,
            Jt = n.$;
          return (
            (T.noConflict = function (e) {
              return (
                n.$ === T && (n.$ = Jt),
                e && n.jQuery === T && (n.jQuery = Kt),
                T
              );
            }),
            void 0 === s && (n.jQuery = n.$ = T),
            T
          );
        });
      },
      97: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
              return (e =
                Object.assign ||
                function (e) {
                  for (var t, i = 1, n = arguments.length; i < n; i++)
                    for (var s in (t = arguments[i]))
                      Object.prototype.hasOwnProperty.call(t, s) &&
                        (e[s] = t[s]);
                  return e;
                }).apply(this, arguments);
            },
            t = {
              thumbnail: !0,
              animateThumb: !0,
              currentPagerPosition: "middle",
              alignThumbnails: "middle",
              thumbWidth: 100,
              thumbHeight: "80px",
              thumbMargin: 5,
              appendThumbnailsTo: ".lg-components",
              toggleThumb: !1,
              enableThumbDrag: !0,
              enableThumbSwipe: !0,
              thumbnailSwipeThreshold: 10,
              loadYouTubeThumbnail: !0,
              youTubeThumbSize: 1,
              thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" },
            },
            i = "lgContainerResize",
            n = "lgUpdateSlides",
            s = "lgBeforeOpen",
            r = "lgBeforeSlide";
          return (function () {
            function o(e, t) {
              return (
                (this.thumbOuterWidth = 0),
                (this.thumbTotalWidth = 0),
                (this.translateX = 0),
                (this.thumbClickable = !1),
                (this.core = e),
                (this.$LG = t),
                this
              );
            }
            return (
              (o.prototype.init = function () {
                (this.settings = e(e({}, t), this.core.settings)),
                  (this.thumbOuterWidth = 0),
                  (this.thumbTotalWidth =
                    this.core.galleryItems.length *
                    (this.settings.thumbWidth + this.settings.thumbMargin)),
                  (this.translateX = 0),
                  this.setAnimateThumbStyles(),
                  this.core.settings.allowMediaOverlap ||
                    (this.settings.toggleThumb = !1),
                  this.settings.thumbnail &&
                    (this.build(),
                    this.settings.animateThumb
                      ? (this.settings.enableThumbDrag &&
                          this.enableThumbDrag(),
                        this.settings.enableThumbSwipe &&
                          this.enableThumbSwipe(),
                        (this.thumbClickable = !1))
                      : (this.thumbClickable = !0),
                    this.toggleThumbBar(),
                    this.thumbKeyPress());
              }),
              (o.prototype.build = function () {
                var e = this;
                this.setThumbMarkup(),
                  this.manageActiveClassOnSlideChange(),
                  this.$lgThumb
                    .first()
                    .on("click.lg touchend.lg", function (t) {
                      var i = e.$LG(t.target);
                      i.hasAttribute("data-lg-item-id") &&
                        setTimeout(function () {
                          if (e.thumbClickable && !e.core.lgBusy) {
                            var t = parseInt(i.attr("data-lg-item-id"));
                            e.core.slide(t, !1, !0, !1);
                          }
                        }, 50);
                    }),
                  this.core.LGel.on(r + ".thumb", function (t) {
                    var i = t.detail.index;
                    e.animateThumb(i);
                  }),
                  this.core.LGel.on(s + ".thumb", function () {
                    e.thumbOuterWidth = e.core.outer.get().offsetWidth;
                  }),
                  this.core.LGel.on(n + ".thumb", function () {
                    e.rebuildThumbnails();
                  }),
                  this.core.LGel.on(i + ".thumb", function () {
                    e.core.lgOpened &&
                      setTimeout(function () {
                        (e.thumbOuterWidth = e.core.outer.get().offsetWidth),
                          e.animateThumb(e.core.index),
                          (e.thumbOuterWidth = e.core.outer.get().offsetWidth);
                      }, 50);
                  });
              }),
              (o.prototype.setThumbMarkup = function () {
                var e = "lg-thumb-outer ";
                this.settings.alignThumbnails &&
                  (e += "lg-thumb-align-" + this.settings.alignThumbnails);
                var t =
                  '<div class="' +
                  e +
                  '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
                this.core.outer.addClass("lg-has-thumb"),
                  ".lg-components" === this.settings.appendThumbnailsTo
                    ? this.core.$lgComponents.append(t)
                    : this.core.outer.append(t),
                  (this.$thumbOuter = this.core.outer
                    .find(".lg-thumb-outer")
                    .first()),
                  (this.$lgThumb = this.core.outer.find(".lg-thumb").first()),
                  this.settings.animateThumb &&
                    this.core.outer
                      .find(".lg-thumb")
                      .css(
                        "transition-duration",
                        this.core.settings.speed + "ms"
                      )
                      .css("width", this.thumbTotalWidth + "px")
                      .css("position", "relative"),
                  this.setThumbItemHtml(this.core.galleryItems);
              }),
              (o.prototype.enableThumbDrag = function () {
                var e = this,
                  t = {
                    cords: { startX: 0, endX: 0 },
                    isMoved: !1,
                    newTranslateX: 0,
                    startTime: new Date(),
                    endTime: new Date(),
                    touchMoveTime: 0,
                  },
                  i = !1;
                this.$thumbOuter.addClass("lg-grab"),
                  this.core.outer
                    .find(".lg-thumb")
                    .first()
                    .on("mousedown.lg.thumb", function (n) {
                      e.thumbTotalWidth > e.thumbOuterWidth &&
                        (n.preventDefault(),
                        (t.cords.startX = n.pageX),
                        (t.startTime = new Date()),
                        (e.thumbClickable = !1),
                        (i = !0),
                        (e.core.outer.get().scrollLeft += 1),
                        (e.core.outer.get().scrollLeft -= 1),
                        e.$thumbOuter
                          .removeClass("lg-grab")
                          .addClass("lg-grabbing"));
                    }),
                  this.$LG(window).on(
                    "mousemove.lg.thumb.global" + this.core.lgId,
                    function (n) {
                      e.core.lgOpened &&
                        i &&
                        ((t.cords.endX = n.pageX), (t = e.onThumbTouchMove(t)));
                    }
                  ),
                  this.$LG(window).on(
                    "mouseup.lg.thumb.global" + this.core.lgId,
                    function () {
                      e.core.lgOpened &&
                        (t.isMoved
                          ? (t = e.onThumbTouchEnd(t))
                          : (e.thumbClickable = !0),
                        i &&
                          ((i = !1),
                          e.$thumbOuter
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab")));
                    }
                  );
              }),
              (o.prototype.enableThumbSwipe = function () {
                var e = this,
                  t = {
                    cords: { startX: 0, endX: 0 },
                    isMoved: !1,
                    newTranslateX: 0,
                    startTime: new Date(),
                    endTime: new Date(),
                    touchMoveTime: 0,
                  };
                this.$lgThumb.on("touchstart.lg", function (i) {
                  e.thumbTotalWidth > e.thumbOuterWidth &&
                    (i.preventDefault(),
                    (t.cords.startX = i.targetTouches[0].pageX),
                    (e.thumbClickable = !1),
                    (t.startTime = new Date()));
                }),
                  this.$lgThumb.on("touchmove.lg", function (i) {
                    e.thumbTotalWidth > e.thumbOuterWidth &&
                      (i.preventDefault(),
                      (t.cords.endX = i.targetTouches[0].pageX),
                      (t = e.onThumbTouchMove(t)));
                  }),
                  this.$lgThumb.on("touchend.lg", function () {
                    t.isMoved
                      ? (t = e.onThumbTouchEnd(t))
                      : (e.thumbClickable = !0);
                  });
              }),
              (o.prototype.rebuildThumbnails = function () {
                var e = this;
                this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
                  setTimeout(function () {
                    (e.thumbTotalWidth =
                      e.core.galleryItems.length *
                      (e.settings.thumbWidth + e.settings.thumbMargin)),
                      e.$lgThumb.css("width", e.thumbTotalWidth + "px"),
                      e.$lgThumb.empty(),
                      e.setThumbItemHtml(e.core.galleryItems),
                      e.animateThumb(e.core.index);
                  }, 50),
                  setTimeout(function () {
                    e.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
                  }, 200);
              }),
              (o.prototype.setTranslate = function (e) {
                this.$lgThumb.css(
                  "transform",
                  "translate3d(-" + e + "px, 0px, 0px)"
                );
              }),
              (o.prototype.getPossibleTransformX = function (e) {
                return (
                  e > this.thumbTotalWidth - this.thumbOuterWidth &&
                    (e = this.thumbTotalWidth - this.thumbOuterWidth),
                  e < 0 && (e = 0),
                  e
                );
              }),
              (o.prototype.animateThumb = function (e) {
                if (
                  (this.$lgThumb.css(
                    "transition-duration",
                    this.core.settings.speed + "ms"
                  ),
                  this.settings.animateThumb)
                ) {
                  var t = 0;
                  switch (this.settings.currentPagerPosition) {
                    case "left":
                      t = 0;
                      break;
                    case "middle":
                      t =
                        this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                      break;
                    case "right":
                      t = this.thumbOuterWidth - this.settings.thumbWidth;
                  }
                  (this.translateX =
                    (this.settings.thumbWidth + this.settings.thumbMargin) * e -
                    1 -
                    t),
                    this.translateX >
                      this.thumbTotalWidth - this.thumbOuterWidth &&
                      (this.translateX =
                        this.thumbTotalWidth - this.thumbOuterWidth),
                    this.translateX < 0 && (this.translateX = 0),
                    this.setTranslate(this.translateX);
                }
              }),
              (o.prototype.onThumbTouchMove = function (e) {
                return (
                  (e.newTranslateX = this.translateX),
                  (e.isMoved = !0),
                  (e.touchMoveTime = new Date().valueOf()),
                  (e.newTranslateX -= e.cords.endX - e.cords.startX),
                  (e.newTranslateX = this.getPossibleTransformX(
                    e.newTranslateX
                  )),
                  this.setTranslate(e.newTranslateX),
                  this.$thumbOuter.addClass("lg-dragging"),
                  e
                );
              }),
              (o.prototype.onThumbTouchEnd = function (e) {
                (e.isMoved = !1),
                  (e.endTime = new Date()),
                  this.$thumbOuter.removeClass("lg-dragging");
                var t = e.endTime.valueOf() - e.startTime.valueOf(),
                  i = e.cords.endX - e.cords.startX,
                  n = Math.abs(i) / t;
                return (
                  n > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
                    ? ((n += 1) > 2 && (n += 1),
                      (n += n * (Math.abs(i) / this.thumbOuterWidth)),
                      this.$lgThumb.css(
                        "transition-duration",
                        Math.min(n - 1, 2) + "settings"
                      ),
                      (i *= n),
                      (this.translateX = this.getPossibleTransformX(
                        this.translateX - i
                      )),
                      this.setTranslate(this.translateX))
                    : (this.translateX = e.newTranslateX),
                  Math.abs(e.cords.endX - e.cords.startX) <
                    this.settings.thumbnailSwipeThreshold &&
                    (this.thumbClickable = !0),
                  e
                );
              }),
              (o.prototype.getThumbHtml = function (e, t) {
                var i,
                  n = this.core.galleryItems[t].__slideVideoInfo || {};
                return (
                  (i =
                    n.youtube && this.settings.loadYouTubeThumbnail
                      ? "//img.youtube.com/vi/" +
                        n.youtube[1] +
                        "/" +
                        this.settings.youTubeThumbSize +
                        ".jpg"
                      : e),
                  '<div data-lg-item-id="' +
                    t +
                    '" class="lg-thumb-item ' +
                    (t === this.core.index ? " active" : "") +
                    '" \n        style="width:' +
                    this.settings.thumbWidth +
                    "px; height: " +
                    this.settings.thumbHeight +
                    ";\n            margin-right: " +
                    this.settings.thumbMargin +
                    'px;">\n            <img data-lg-item-id="' +
                    t +
                    '" src="' +
                    i +
                    '" />\n        </div>'
                );
              }),
              (o.prototype.getThumbItemHtml = function (e) {
                for (var t = "", i = 0; i < e.length; i++)
                  t += this.getThumbHtml(e[i].thumb, i);
                return t;
              }),
              (o.prototype.setThumbItemHtml = function (e) {
                var t = this.getThumbItemHtml(e);
                this.$lgThumb.html(t);
              }),
              (o.prototype.setAnimateThumbStyles = function () {
                this.settings.animateThumb &&
                  this.core.outer.addClass("lg-animate-thumb");
              }),
              (o.prototype.manageActiveClassOnSlideChange = function () {
                var e = this;
                this.core.LGel.on(r + ".thumb", function (t) {
                  var i = e.core.outer.find(".lg-thumb-item"),
                    n = t.detail.index;
                  i.removeClass("active"), i.eq(n).addClass("active");
                });
              }),
              (o.prototype.toggleThumbBar = function () {
                var e = this;
                this.settings.toggleThumb &&
                  (this.core.outer.addClass("lg-can-toggle"),
                  this.core.$toolbar.append(
                    '<button type="button" aria-label="' +
                      this.settings.thumbnailPluginStrings.toggleThumbnails +
                      '" class="lg-toggle-thumb lg-icon"></button>'
                  ),
                  this.core.outer
                    .find(".lg-toggle-thumb")
                    .first()
                    .on("click.lg", function () {
                      e.core.outer.toggleClass("lg-components-open");
                    }));
              }),
              (o.prototype.thumbKeyPress = function () {
                var e = this;
                this.$LG(window).on(
                  "keydown.lg.thumb.global" + this.core.lgId,
                  function (t) {
                    e.core.lgOpened &&
                      e.settings.toggleThumb &&
                      (38 === t.keyCode
                        ? (t.preventDefault(),
                          e.core.outer.addClass("lg-components-open"))
                        : 40 === t.keyCode &&
                          (t.preventDefault(),
                          e.core.outer.removeClass("lg-components-open")));
                  }
                );
              }),
              (o.prototype.destroy = function () {
                this.settings.thumbnail &&
                  (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
                  this.core.LGel.off(".lg.thumb"),
                  this.core.LGel.off(".thumb"),
                  this.$thumbOuter.remove(),
                  this.core.outer.removeClass("lg-has-thumb"));
              }),
              o
            );
          })();
        })();
      },
      363: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
              return (e =
                Object.assign ||
                function (e) {
                  for (var t, i = 1, n = arguments.length; i < n; i++)
                    for (var s in (t = arguments[i]))
                      Object.prototype.hasOwnProperty.call(t, s) &&
                        (e[s] = t[s]);
                  return e;
                }).apply(this, arguments);
            },
            t = {
              autoplayFirstVideo: !0,
              youTubePlayerParams: !1,
              vimeoPlayerParams: !1,
              wistiaPlayerParams: !1,
              gotoNextSlideOnVideoEnd: !0,
              autoplayVideoOnSlide: !1,
              videojs: !1,
              videojsOptions: {},
            },
            i = "lgHasVideo",
            n = "lgSlideItemLoad",
            s = "lgBeforeSlide",
            r = "lgAfterSlide",
            o = "lgPosterClick",
            a = function (e) {
              return Object.keys(e)
                .map(function (t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                })
                .join("&");
            };
          return (function () {
            function l(i) {
              return (
                (this.core = i),
                (this.settings = e(e({}, t), this.core.settings)),
                this
              );
            }
            return (
              (l.prototype.init = function () {
                var e = this;
                this.core.LGel.on(i + ".video", this.onHasVideo.bind(this)),
                  this.core.LGel.on(o + ".video", function () {
                    var t = e.core.getSlideItem(e.core.index);
                    e.loadVideoOnPosterClick(t);
                  }),
                  this.core.LGel.on(
                    n + ".video",
                    this.onSlideItemLoad.bind(this)
                  ),
                  this.core.LGel.on(
                    s + ".video",
                    this.onBeforeSlide.bind(this)
                  ),
                  this.core.LGel.on(r + ".video", this.onAfterSlide.bind(this));
              }),
              (l.prototype.onSlideItemLoad = function (e) {
                var t = this,
                  i = e.detail,
                  n = i.isFirstSlide,
                  s = i.index;
                this.settings.autoplayFirstVideo &&
                  n &&
                  s === this.core.index &&
                  setTimeout(function () {
                    t.loadAndPlayVideo(s);
                  }, 200),
                  !n &&
                    this.settings.autoplayVideoOnSlide &&
                    s === this.core.index &&
                    this.loadAndPlayVideo(s);
              }),
              (l.prototype.onHasVideo = function (e) {
                var t = e.detail,
                  i = t.index,
                  n = t.src,
                  s = t.html5Video;
                t.hasPoster ||
                  (this.appendVideos(this.core.getSlideItem(i), {
                    src: n,
                    addClass: "lg-object",
                    index: i,
                    html5Video: s,
                  }),
                  this.gotoNextSlideOnVideoEnd(n, i));
              }),
              (l.prototype.onBeforeSlide = function (e) {
                if (this.core.lGalleryOn) {
                  var t = e.detail.prevIndex;
                  this.pauseVideo(t);
                }
              }),
              (l.prototype.onAfterSlide = function (e) {
                var t = this,
                  i = e.detail,
                  n = i.index,
                  s = i.prevIndex,
                  r = this.core.getSlideItem(n);
                this.settings.autoplayVideoOnSlide &&
                  n !== s &&
                  r.hasClass("lg-complete") &&
                  setTimeout(function () {
                    t.loadAndPlayVideo(n);
                  }, 100);
              }),
              (l.prototype.loadAndPlayVideo = function (e) {
                var t = this.core.getSlideItem(e);
                this.core.galleryItems[e].poster
                  ? this.loadVideoOnPosterClick(t, !0)
                  : this.playVideo(e);
              }),
              (l.prototype.playVideo = function (e) {
                this.controlVideo(e, "play");
              }),
              (l.prototype.pauseVideo = function (e) {
                this.controlVideo(e, "pause");
              }),
              (l.prototype.getVideoHtml = function (e, t, i, n) {
                var s = "",
                  r = this.core.galleryItems[i].__slideVideoInfo || {},
                  o = this.core.galleryItems[i],
                  l = o.title || o.alt;
                l = l ? 'title="' + l + '"' : "";
                var u =
                  'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
                if (r.youtube) {
                  var d = "lg-youtube" + i,
                    c =
                      "?" +
                      (r.youtube[2] ? r.youtube[2] + "&" : "") +
                      "wmode=opaque&autoplay=0&mute=1&enablejsapi=1" +
                      (this.settings.youTubePlayerParams
                        ? "&" + a(this.settings.youTubePlayerParams)
                        : "");
                  s =
                    '<iframe allow="autoplay" id=' +
                    d +
                    ' class="lg-video-object lg-youtube ' +
                    t +
                    '" ' +
                    l +
                    ' src="//www.youtube.com/embed/' +
                    (r.youtube[1] + c) +
                    '" ' +
                    u +
                    "></iframe>";
                } else if (r.vimeo)
                  (d = "lg-vimeo" + i),
                    (c = (function (e, t) {
                      if (!t || !t.vimeo) return "";
                      var i = t.vimeo[2] || "";
                      return (
                        (i = "?" == i[0] ? "&" + i.slice(1) : i || ""),
                        "?autoplay=0&muted=1" + (e ? "&" + a(e) : "") + i
                      );
                    })(this.settings.vimeoPlayerParams, r)),
                    (s =
                      '<iframe allow="autoplay" id=' +
                      d +
                      ' class="lg-video-object lg-vimeo ' +
                      t +
                      '" ' +
                      l +
                      ' src="//player.vimeo.com/video/' +
                      (r.vimeo[1] + c) +
                      '" ' +
                      u +
                      "></iframe>");
                else if (r.wistia) {
                  var p = "lg-wistia" + i;
                  (c = (c = a(this.settings.wistiaPlayerParams))
                    ? "?" + c
                    : ""),
                    (s =
                      '<iframe allow="autoplay" id="' +
                      p +
                      '" src="//fast.wistia.net/embed/iframe/' +
                      (r.wistia[4] + c) +
                      '" ' +
                      l +
                      ' class="wistia_embed lg-video-object lg-wistia ' +
                      t +
                      '" name="wistia_embed" ' +
                      u +
                      "></iframe>");
                } else if (r.html5) {
                  for (var h = "", f = 0; f < n.source.length; f++)
                    h +=
                      '<source src="' +
                      n.source[f].src +
                      '" type="' +
                      n.source[f].type +
                      '">';
                  if (n.tracks) {
                    var g = function (e) {
                      var t = "",
                        i = n.tracks[e];
                      Object.keys(i || {}).forEach(function (e) {
                        t += e + '="' + i[e] + '" ';
                      }),
                        (h += "<track " + t + ">");
                    };
                    for (f = 0; f < n.tracks.length; f++) g(f);
                  }
                  var m = "",
                    v = n.attributes || {};
                  Object.keys(v || {}).forEach(function (e) {
                    m += e + '="' + v[e] + '" ';
                  }),
                    (s =
                      '<video class="lg-video-object lg-html5 ' +
                      (this.settings.videojs ? "video-js" : "") +
                      '" ' +
                      m +
                      ">\n                " +
                      h +
                      "\n                Your browser does not support HTML5 video.\n            </video>");
                }
                return s;
              }),
              (l.prototype.appendVideos = function (e, t) {
                var i,
                  n = this.getVideoHtml(
                    t.src,
                    t.addClass,
                    t.index,
                    t.html5Video
                  );
                e.find(".lg-video-cont").append(n);
                var s = e.find(".lg-video-object").first();
                if (
                  (t.html5Video &&
                    s.on("mousedown.lg.video", function (e) {
                      e.stopPropagation();
                    }),
                  this.settings.videojs &&
                    (null ===
                      (i = this.core.galleryItems[t.index].__slideVideoInfo) ||
                    void 0 === i
                      ? void 0
                      : i.html5))
                )
                  try {
                    return videojs(s.get(), this.settings.videojsOptions);
                  } catch (e) {
                    console.error(
                      "lightGallery:- Make sure you have included videojs"
                    );
                  }
              }),
              (l.prototype.gotoNextSlideOnVideoEnd = function (e, t) {
                var i = this,
                  n = this.core
                    .getSlideItem(t)
                    .find(".lg-video-object")
                    .first(),
                  s = this.core.galleryItems[t].__slideVideoInfo || {};
                if (this.settings.gotoNextSlideOnVideoEnd)
                  if (s.html5)
                    n.on("ended", function () {
                      i.core.goToNextSlide();
                    });
                  else if (s.vimeo)
                    try {
                      new Vimeo.Player(n.get()).on("ended", function () {
                        i.core.goToNextSlide();
                      });
                    } catch (e) {
                      console.error(
                        "lightGallery:- Make sure you have included //github.com/vimeo/player.js"
                      );
                    }
                  else if (s.wistia)
                    try {
                      (window._wq = window._wq || []),
                        window._wq.push({
                          id: n.attr("id"),
                          onReady: function (e) {
                            e.bind("end", function () {
                              i.core.goToNextSlide();
                            });
                          },
                        });
                    } catch (e) {
                      console.error(
                        "lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js"
                      );
                    }
              }),
              (l.prototype.controlVideo = function (e, t) {
                var i = this.core
                    .getSlideItem(e)
                    .find(".lg-video-object")
                    .first(),
                  n = this.core.galleryItems[e].__slideVideoInfo || {};
                if (i.get())
                  if (n.youtube)
                    try {
                      i.get().contentWindow.postMessage(
                        '{"event":"command","func":"' + t + 'Video","args":""}',
                        "*"
                      );
                    } catch (e) {
                      console.error("lightGallery:- " + e);
                    }
                  else if (n.vimeo)
                    try {
                      new Vimeo.Player(i.get())[t]();
                    } catch (e) {
                      console.error(
                        "lightGallery:- Make sure you have included //github.com/vimeo/player.js"
                      );
                    }
                  else if (n.html5)
                    if (this.settings.videojs)
                      try {
                        videojs(i.get())[t]();
                      } catch (e) {
                        console.error(
                          "lightGallery:- Make sure you have included videojs"
                        );
                      }
                    else i.get()[t]();
                  else if (n.wistia)
                    try {
                      (window._wq = window._wq || []),
                        window._wq.push({
                          id: i.attr("id"),
                          onReady: function (e) {
                            e[t]();
                          },
                        });
                    } catch (e) {
                      console.error(
                        "lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js"
                      );
                    }
              }),
              (l.prototype.loadVideoOnPosterClick = function (e, t) {
                var i = this;
                if (e.hasClass("lg-video-loaded"))
                  t && this.playVideo(this.core.index);
                else if (e.hasClass("lg-has-video"))
                  this.playVideo(this.core.index);
                else {
                  e.addClass("lg-has-video");
                  var n = void 0,
                    s = this.core.galleryItems[this.core.index].src,
                    r = this.core.galleryItems[this.core.index].video;
                  r && (n = "string" == typeof r ? JSON.parse(r) : r);
                  var o = this.appendVideos(e, {
                    src: s,
                    addClass: "",
                    index: this.core.index,
                    html5Video: n,
                  });
                  this.gotoNextSlideOnVideoEnd(s, this.core.index);
                  var a = e.find(".lg-object").first().get();
                  e.find(".lg-video-cont").first().append(a),
                    e.addClass("lg-video-loading"),
                    o &&
                      o.ready(function () {
                        o.on("loadedmetadata", function () {
                          i.onVideoLoadAfterPosterClick(e, i.core.index);
                        });
                      }),
                    e
                      .find(".lg-video-object")
                      .first()
                      .on("load.lg error.lg loadedmetadata.lg", function () {
                        setTimeout(function () {
                          i.onVideoLoadAfterPosterClick(e, i.core.index);
                        }, 50);
                      });
                }
              }),
              (l.prototype.onVideoLoadAfterPosterClick = function (e, t) {
                e.addClass("lg-video-loaded"), this.playVideo(t);
              }),
              (l.prototype.destroy = function () {
                this.core.LGel.off(".lg.video"), this.core.LGel.off(".video");
              }),
              l
            );
          })();
        })();
      },
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return i(e) && "function" == typeof e.from;
          }
          function i(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function n(e) {
            e.parentElement.removeChild(e);
          }
          function s(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function o(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function a(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var i = e.getBoundingClientRect(),
              n = e.ownerDocument,
              s = n.documentElement,
              r = v(n);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? i.top + r.y - s.clientTop : i.left + r.x - s.clientLeft
            );
          }
          function u(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, i) {
            i > 0 &&
              (f(e, t),
              setTimeout(function () {
                g(e, t);
              }, i));
          }
          function c(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function g(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function m(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              i = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : i
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : i
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function y() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function b() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function x(e, t) {
            return 100 / (t - e);
          }
          function C(e, t, i) {
            return (100 * t) / (e[i + 1] - e[i]);
          }
          function S(e, t) {
            return C(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function T(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function E(e, t) {
            for (var i = 1; e >= t[i]; ) i += 1;
            return i;
          }
          function k(e, t, i) {
            if (i >= e.slice(-1)[0]) return 100;
            var n = E(i, e),
              s = e[n - 1],
              r = e[n],
              o = t[n - 1],
              a = t[n];
            return o + S([s, r], i) / x(o, a);
          }
          function L(e, t, i) {
            if (i >= 100) return e.slice(-1)[0];
            var n = E(i, t),
              s = e[n - 1],
              r = e[n],
              o = t[n - 1];
            return T([s, r], (i - o) * x(o, t[n]));
          }
          function A(e, t, i, n) {
            if (100 === n) return n;
            var s = E(n, e),
              r = e[s - 1],
              o = e[s];
            return i
              ? n - r > (o - r) / 2
                ? o
                : r
              : t[s - 1]
              ? e[s - 1] + a(n - e[s - 1], t[s - 1])
              : n;
          }
          var P, O;
          (e.PipsMode = void 0),
            ((O = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (O.Steps = "steps"),
            (O.Positions = "positions"),
            (O.Count = "count"),
            (O.Values = "values"),
            (e.PipsType = void 0),
            ((P = e.PipsType || (e.PipsType = {}))[(P.None = -1)] = "None"),
            (P[(P.NoValue = 0)] = "NoValue"),
            (P[(P.LargeValue = 1)] = "LargeValue"),
            (P[(P.SmallValue = 2)] = "SmallValue");
          var I = (function () {
              function e(e, t, i) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [i || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var s = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    s.push([p(e[t]), t]);
                  }),
                    s.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    n = 0;
                  n < s.length;
                  n++
                )
                  this.handleEntryPoint(s[n][1], s[n][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  this.handleStepPoint(n, this.xNumSteps[n]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], i = 0; i < this.xNumSteps.length - 1; i++)
                    t[i] = C(this.xVal, e, i);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, i) {
                  var n,
                    s = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[s + 1]; ) s++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (s = this.xPct.length - 2);
                  i || e !== this.xPct[s + 1] || s++, null === t && (t = []);
                  var r = 1,
                    o = t[s],
                    a = 0,
                    l = 0,
                    u = 0,
                    d = 0;
                  for (
                    n = i
                      ? (e - this.xPct[s]) / (this.xPct[s + 1] - this.xPct[s])
                      : (this.xPct[s + 1] - e) /
                        (this.xPct[s + 1] - this.xPct[s]);
                    o > 0;

                  )
                    (a = this.xPct[s + 1 + d] - this.xPct[s + d]),
                      t[s + d] * r + 100 - 100 * n > 100
                        ? ((l = a * n), (r = (o - 100 * n) / t[s + d]), (n = 1))
                        : ((l = ((t[s + d] * a) / 100) * r), (r = 0)),
                      i
                        ? ((u -= l), this.xPct.length + d >= 1 && d--)
                        : ((u += l), this.xPct.length - d >= 1 && d++),
                      (o = t[s + d] * r);
                  return e + u;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = k(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return L(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = A(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, i) {
                  var n = E(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / i
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = E(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var i;
                  if (
                    !u(
                      (i = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !u(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(i), this.xVal.push(t[0]);
                  var n = Number(t[1]);
                  i
                    ? this.xSteps.push(!isNaN(n) && n)
                    : isNaN(n) || (this.xSteps[0] = n),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        C([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        x(this.xPct[e], this.xPct[e + 1]);
                      var i =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        n = Math.ceil(Number(i.toFixed(3)) - 1),
                        s = this.xVal[e] + this.xNumSteps[e] * n;
                      this.xHighestCompleteStep[e] = s;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            M = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            D = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            N = { tooltips: ".__tooltips", aria: ".__aria" };
          function $(e, t) {
            if (!u(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function _(e, t) {
            if (!u(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function j(e, t) {
            if (!u(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function H(e, t) {
            if (!u(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function z(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new I(t, e.snap || !1, e.singleStep);
          }
          function q(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function B(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function V(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function G(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function F(e, t) {
            var i,
              n = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (i = 1; i < e.handles; i++) n.push(t);
              n.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              n = t;
            }
            e.connect = n;
          }
          function W(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function R(e, t) {
            if (!u(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function X(e, t) {
            if (!u(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function U(e, t) {
            var i;
            if (!u(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !u(t[0]) && !u(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  i = 0;
                i < e.spectrum.xNumSteps.length - 1;
                i++
              )
                if (e.padding[0][i] < 0 || e.padding[1][i] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var n = t[0] + t[1],
                s = e.spectrum.xVal[0];
              if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - s) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var i = t.indexOf("tap") >= 0,
              n = t.indexOf("drag") >= 0,
              s = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              o = t.indexOf("hover") >= 0,
              a = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0,
              u = t.indexOf("smooth-steps") >= 0;
            if (s) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              R(e, e.start[1] - e.start[0]);
            }
            if (a && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: i || r,
              drag: n,
              dragAll: l,
              smoothSteps: u,
              fixed: s,
              snap: r,
              hover: o,
              unconstrained: a,
            };
          }
          function J(e, t) {
            if (!1 !== t)
              if (!0 === t || i(t)) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !i(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Q(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function Z(e, t) {
            if (!i(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, i) {
            if (!t(i))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = i;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function ie(e, t) {
            e.documentElement = t;
          }
          function ne(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function se(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (i) {
                  e.cssClasses[i] = e.cssPrefix + t[i];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: M,
                format: M,
              },
              i = {
                step: { r: !1, t: $ },
                keyboardPageMultiplier: { r: !1, t: _ },
                keyboardMultiplier: { r: !1, t: j },
                keyboardDefaultStep: { r: !1, t: H },
                start: { r: !0, t: q },
                connect: { r: !0, t: F },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: B },
                animate: { r: !1, t: V },
                animationDuration: { r: !1, t: G },
                range: { r: !0, t: z },
                orientation: { r: !1, t: W },
                margin: { r: !1, t: R },
                limit: { r: !1, t: X },
                padding: { r: !1, t: U },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: Z },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: J },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: ie },
                cssPrefix: { r: !0, t: ne },
                cssClasses: { r: !0, t: se },
                handleAttributes: { r: !1, t: Q },
              },
              n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: D,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(i).forEach(function (r) {
                if (s(e[r]) || void 0 !== n[r])
                  i[r].t(t, s(e[r]) ? e[r] : n[r]);
                else if (i[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              o = void 0 !== r.style.msTransform,
              a = void 0 !== r.style.transform;
            t.transformRule = a
              ? "transform"
              : o
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function oe(t, i, a) {
            var u,
              h,
              x,
              C,
              S,
              T = y(),
              E = w() && b(),
              k = t,
              L = i.spectrum,
              A = [],
              P = [],
              O = [],
              I = 0,
              M = {},
              D = t.ownerDocument,
              $ = i.documentElement || D.documentElement,
              _ = D.body,
              j = "rtl" === D.dir || 1 === i.ort ? 0 : 100;
            function H(e, t) {
              var i = D.createElement("div");
              return t && f(i, t), e.appendChild(i), i;
            }
            function z(e, t) {
              var n = H(e, i.cssClasses.origin),
                s = H(n, i.cssClasses.handle);
              if (
                (H(s, i.cssClasses.touchArea),
                s.setAttribute("data-handle", String(t)),
                i.keyboardSupport &&
                  (s.setAttribute("tabindex", "0"),
                  s.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== i.handleAttributes)
              ) {
                var r = i.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  s.setAttribute(e, r[e]);
                });
              }
              return (
                s.setAttribute("role", "slider"),
                s.setAttribute(
                  "aria-orientation",
                  i.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(s, i.cssClasses.handleLower)
                  : t === i.handles - 1 && f(s, i.cssClasses.handleUpper),
                n
              );
            }
            function q(e, t) {
              return !!t && H(e, i.cssClasses.connect);
            }
            function B(e, t) {
              var n = H(t, i.cssClasses.connects);
              (h = []), (x = []).push(q(n, e[0]));
              for (var s = 0; s < i.handles; s++)
                h.push(z(t, s)), (O[s] = s), x.push(q(n, e[s + 1]));
            }
            function V(e) {
              return (
                f(e, i.cssClasses.target),
                0 === i.dir ? f(e, i.cssClasses.ltr) : f(e, i.cssClasses.rtl),
                0 === i.ort
                  ? f(e, i.cssClasses.horizontal)
                  : f(e, i.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? i.cssClasses.textDirectionRtl
                    : i.cssClasses.textDirectionLtr
                ),
                H(e, i.cssClasses.base)
              );
            }
            function G(e, t) {
              return (
                !(!i.tooltips || !i.tooltips[t]) &&
                H(e.firstChild, i.cssClasses.tooltip)
              );
            }
            function F() {
              return k.hasAttribute("disabled");
            }
            function W(e) {
              return h[e].hasAttribute("disabled");
            }
            function R() {
              S &&
                (ve("update" + N.tooltips),
                S.forEach(function (e) {
                  e && n(e);
                }),
                (S = null));
            }
            function X() {
              R(),
                (S = h.map(G)),
                ge("update" + N.tooltips, function (e, t, n) {
                  if (S && i.tooltips && !1 !== S[t]) {
                    var s = e[t];
                    !0 !== i.tooltips[t] && (s = i.tooltips[t].to(n[t])),
                      (S[t].innerHTML = s);
                  }
                });
            }
            function U() {
              ve("update" + N.aria),
                ge("update" + N.aria, function (e, t, n, s, r) {
                  O.forEach(function (e) {
                    var t = h[e],
                      s = be(P, e, 0, !0, !0, !0),
                      o = be(P, e, 100, !0, !0, !0),
                      a = r[e],
                      l = String(i.ariaFormat.to(n[e]));
                    (s = L.fromStepping(s).toFixed(1)),
                      (o = L.fromStepping(o).toFixed(1)),
                      (a = L.fromStepping(a).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", s),
                      t.children[0].setAttribute("aria-valuemax", o),
                      t.children[0].setAttribute("aria-valuenow", a),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Y(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return L.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var i = t.values - 1, n = 100 / i, s = []; i--; )
                  s[i] = i * n;
                return s.push(100), K(s, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return L.fromStepping(L.getStep(L.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return L.fromStepping(t ? L.getStep(e) : e);
              });
            }
            function J(t) {
              function i(e, t) {
                return Number((e + t).toFixed(7));
              }
              var n = Y(t),
                s = {},
                r = L.xVal[0],
                a = L.xVal[L.xVal.length - 1],
                l = !1,
                u = !1,
                d = 0;
              return (
                (n = o(
                  n.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (n.unshift(r), (l = !0)),
                n[n.length - 1] !== a && (n.push(a), (u = !0)),
                n.forEach(function (r, o) {
                  var a,
                    c,
                    p,
                    h,
                    f,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w = r,
                    x = n[o + 1],
                    C = t.mode === e.PipsMode.Steps;
                  for (
                    C && (a = L.xNumSteps[o]),
                      a || (a = x - w),
                      void 0 === x && (x = w),
                      a = Math.max(a, 1e-7),
                      c = w;
                    c <= x;
                    c = i(c, a)
                  ) {
                    for (
                      v = (f = (h = L.toStepping(c)) - d) / (t.density || 1),
                        b = f / (y = Math.round(v)),
                        p = 1;
                      p <= y;
                      p += 1
                    )
                      s[(g = d + p * b).toFixed(5)] = [L.fromStepping(g), 0];
                    (m =
                      n.indexOf(c) > -1
                        ? e.PipsType.LargeValue
                        : C
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !o && l && c !== x && (m = 0),
                      (c === x && u) || (s[h.toFixed(5)] = [c, m]),
                      (d = h);
                  }
                }),
                s
              );
            }
            function Q(t, n, s) {
              var r,
                o,
                a = D.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = i.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = i.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = i.cssClasses.valueSub),
                  r),
                u =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = i.cssClasses.markerNormal),
                  (o[e.PipsType.LargeValue] = i.cssClasses.markerLarge),
                  (o[e.PipsType.SmallValue] = i.cssClasses.markerSub),
                  o),
                d = [i.cssClasses.valueHorizontal, i.cssClasses.valueVertical],
                c = [
                  i.cssClasses.markerHorizontal,
                  i.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var n = t === i.cssClasses.value,
                  s = n ? l : u;
                return t + " " + (n ? d : c)[i.ort] + " " + s[e];
              }
              function h(t, r, o) {
                if ((o = n ? n(r, o) : o) !== e.PipsType.None) {
                  var l = H(a, !1);
                  (l.className = p(o, i.cssClasses.marker)),
                    (l.style[i.style] = t + "%"),
                    o > e.PipsType.NoValue &&
                      (((l = H(a, !1)).className = p(o, i.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[i.style] = t + "%"),
                      (l.innerHTML = String(s.to(r))));
                }
              }
              return (
                f(a, i.cssClasses.pips),
                f(
                  a,
                  0 === i.ort
                    ? i.cssClasses.pipsHorizontal
                    : i.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                a
              );
            }
            function Z() {
              C && (n(C), (C = null));
            }
            function ee(e) {
              Z();
              var t = J(e),
                i = e.filter,
                n = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (C = k.appendChild(Q(t, i, n)));
            }
            function te() {
              var e = u.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][i.ort];
              return 0 === i.ort ? e.width || u[t] : e.height || u[t];
            }
            function ie(e, t, n, s) {
              var r = function (r) {
                  var o = ne(r, s.pageOffset, s.target || t);
                  return (
                    !!o &&
                    !(F() && !s.doNotReject) &&
                    !(m(k, i.cssClasses.tap) && !s.doNotReject) &&
                    !(e === T.start && void 0 !== o.buttons && o.buttons > 1) &&
                    (!s.hover || !o.buttons) &&
                    (E || o.preventDefault(),
                    (o.calcPoint = o.points[i.ort]),
                    void n(o, s))
                  );
                },
                o = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!E && { passive: !0 }),
                    o.push([e, r]);
                }),
                o
              );
            }
            function ne(e, t, i) {
              var n = 0 === e.type.indexOf("touch"),
                s = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                o = 0,
                a = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (n) {
                var l = function (t) {
                  var n = t.target;
                  return (
                    n === i ||
                    i.contains(n) ||
                    (e.composed && e.composedPath().shift() === i)
                  );
                };
                if ("touchstart" === e.type) {
                  var u = Array.prototype.filter.call(e.touches, l);
                  if (u.length > 1) return !1;
                  (o = u[0].pageX), (a = u[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (o = d.pageX), (a = d.pageY);
                }
              }
              return (
                (t = t || v(D)),
                (s || r) && ((o = e.clientX + t.x), (a = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [o, a]),
                (e.cursor = s || r),
                e
              );
            }
            function se(e) {
              var t = (100 * (e - l(u, i.ort))) / te();
              return (t = c(t)), i.dir ? 100 - t : t;
            }
            function oe(e) {
              var t = 100,
                i = !1;
              return (
                h.forEach(function (n, s) {
                  if (!W(s)) {
                    var r = P[s],
                      o = Math.abs(r - e);
                    (o < t || (o <= t && e > r) || (100 === o && 100 === t)) &&
                      ((i = s), (t = o));
                  }
                }),
                i
              );
            }
            function ae(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ue(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ue(e, t);
              var n = (i.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              xe(
                n > 0,
                (100 * n) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ue(e, t) {
              t.handle && (g(t.handle, i.cssClasses.active), (I -= 1)),
                t.listeners.forEach(function (e) {
                  $.removeEventListener(e[0], e[1]);
                }),
                0 === I &&
                  (g(k, i.cssClasses.drag),
                  Te(),
                  e.cursor &&
                    ((_.style.cursor = ""),
                    _.removeEventListener("selectstart", r))),
                i.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    Ee(e, P[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    ye("update", e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  ye("change", e), ye("set", e), ye("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(W)) {
                var n;
                1 === t.handleNumbers.length &&
                  ((n = h[t.handleNumbers[0]].children[0]),
                  (I += 1),
                  f(n, i.cssClasses.active)),
                  e.stopPropagation();
                var s = [],
                  o = ie(T.move, $, le, {
                    target: e.target,
                    handle: n,
                    connect: t.connect,
                    listeners: s,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: P.slice(),
                  }),
                  a = ie(T.end, $, ue, {
                    target: e.target,
                    handle: n,
                    listeners: s,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = ie("mouseout", $, ae, {
                    target: e.target,
                    handle: n,
                    listeners: s,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                s.push.apply(s, o.concat(a, l)),
                  e.cursor &&
                    ((_.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(k, i.cssClasses.drag),
                    _.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    ye("start", e);
                  });
              }
            }
            function ce(e) {
              e.stopPropagation();
              var t = se(e.calcPoint),
                n = oe(t);
              !1 !== n &&
                (i.events.snap || d(k, i.cssClasses.tap, i.animationDuration),
                Ee(n, t, !0, !0),
                Te(),
                ye("slide", n, !0),
                ye("update", n, !0),
                i.events.snap
                  ? de(e, { handleNumbers: [n] })
                  : (ye("change", n, !0), ye("set", n, !0)));
            }
            function pe(e) {
              var t = se(e.calcPoint),
                i = L.getStep(t),
                n = L.fromStepping(i);
              Object.keys(M).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  M[e].forEach(function (e) {
                    e.call(je, n);
                  });
              });
            }
            function he(e, t) {
              if (F() || W(t)) return !1;
              var n = ["Left", "Right"],
                s = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                o = ["Home", "End"];
              i.dir && !i.ort
                ? n.reverse()
                : i.ort && !i.dir && (s.reverse(), r.reverse());
              var a,
                l = e.key.replace("Arrow", ""),
                u = l === r[0],
                d = l === r[1],
                c = l === s[0] || l === n[0] || u,
                p = l === s[1] || l === n[1] || d,
                h = l === o[0],
                f = l === o[1];
              if (!(c || p || h || f)) return !0;
              if ((e.preventDefault(), p || c)) {
                var g = c ? 0 : 1,
                  m = De(t)[g];
                if (null === m) return !1;
                !1 === m &&
                  (m = L.getDefaultStep(P[t], c, i.keyboardDefaultStep)),
                  (m *=
                    d || u ? i.keyboardPageMultiplier : i.keyboardMultiplier),
                  (m = Math.max(m, 1e-7)),
                  (m *= c ? -1 : 1),
                  (a = A[t] + m);
              } else
                a = f
                  ? i.spectrum.xVal[i.spectrum.xVal.length - 1]
                  : i.spectrum.xVal[0];
              return (
                Ee(t, L.toStepping(a), !0, !0),
                ye("slide", t),
                ye("update", t),
                ye("change", t),
                ye("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  ie(T.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && ie(T.start, u, ce, {}),
                e.hover && ie(T.move, u, pe, { hover: !0 }),
                e.drag &&
                  x.forEach(function (t, n) {
                    if (!1 !== t && 0 !== n && n !== x.length - 1) {
                      var s = h[n - 1],
                        r = h[n],
                        o = [t],
                        a = [s, r],
                        l = [n - 1, n];
                      f(t, i.cssClasses.draggable),
                        e.fixed &&
                          (o.push(s.children[0]), o.push(r.children[0])),
                        e.dragAll && ((a = h), (l = O)),
                        o.forEach(function (e) {
                          ie(T.start, e, de, {
                            handles: a,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function ge(e, t) {
              (M[e] = M[e] || []),
                M[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    ye("update", t);
                  });
            }
            function me(e) {
              return e === N.aria || e === N.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                i = t ? e.substring(t.length) : e;
              Object.keys(M).forEach(function (e) {
                var n = e.split(".")[0],
                  s = e.substring(n.length);
                (t && t !== n) ||
                  (i && i !== s) ||
                  (me(s) && i !== s) ||
                  delete M[e];
              });
            }
            function ye(e, t, n) {
              Object.keys(M).forEach(function (s) {
                var r = s.split(".")[0];
                e === r &&
                  M[s].forEach(function (e) {
                    e.call(
                      je,
                      A.map(i.format.to),
                      t,
                      A.slice(),
                      n || !1,
                      P.slice(),
                      je
                    );
                  });
              });
            }
            function be(e, t, n, s, r, o, a) {
              var l;
              return (
                h.length > 1 &&
                  !i.events.unconstrained &&
                  (s &&
                    t > 0 &&
                    ((l = L.getAbsoluteDistance(e[t - 1], i.margin, !1)),
                    (n = Math.max(n, l))),
                  r &&
                    t < h.length - 1 &&
                    ((l = L.getAbsoluteDistance(e[t + 1], i.margin, !0)),
                    (n = Math.min(n, l)))),
                h.length > 1 &&
                  i.limit &&
                  (s &&
                    t > 0 &&
                    ((l = L.getAbsoluteDistance(e[t - 1], i.limit, !1)),
                    (n = Math.min(n, l))),
                  r &&
                    t < h.length - 1 &&
                    ((l = L.getAbsoluteDistance(e[t + 1], i.limit, !0)),
                    (n = Math.max(n, l)))),
                i.padding &&
                  (0 === t &&
                    ((l = L.getAbsoluteDistance(0, i.padding[0], !1)),
                    (n = Math.max(n, l))),
                  t === h.length - 1 &&
                    ((l = L.getAbsoluteDistance(100, i.padding[1], !0)),
                    (n = Math.min(n, l)))),
                a || (n = L.getStep(n)),
                !((n = c(n)) === e[t] && !o) && n
              );
            }
            function we(e, t) {
              var n = i.ort;
              return (n ? t : e) + ", " + (n ? e : t);
            }
            function xe(e, t, n, s, r) {
              var o = n.slice(),
                a = s[0],
                l = i.events.smoothSteps,
                u = [!e, e],
                d = [e, !e];
              (s = s.slice()),
                e && s.reverse(),
                s.length > 1
                  ? s.forEach(function (e, i) {
                      var n = be(o, e, o[e] + t, u[i], d[i], !1, l);
                      !1 === n ? (t = 0) : ((t = n - o[e]), (o[e] = n));
                    })
                  : (u = d = [!0]);
              var c = !1;
              s.forEach(function (e, i) {
                c = Ee(e, n[e] + t, u[i], d[i], !1, l) || c;
              }),
                c &&
                  (s.forEach(function (e) {
                    ye("update", e), ye("slide", e);
                  }),
                  null != r && ye("drag", a));
            }
            function Ce(e, t) {
              return i.dir ? 100 - e - t : e;
            }
            function Se(e, t) {
              (P[e] = t), (A[e] = L.fromStepping(t));
              var n = "translate(" + we(Ce(t, 0) - j + "%", "0") + ")";
              (h[e].style[i.transformRule] = n), ke(e), ke(e + 1);
            }
            function Te() {
              O.forEach(function (e) {
                var t = P[e] > 50 ? -1 : 1,
                  i = 3 + (h.length + t * e);
                h[e].style.zIndex = String(i);
              });
            }
            function Ee(e, t, i, n, s, r) {
              return (
                s || (t = be(P, e, t, i, n, !1, r)), !1 !== t && (Se(e, t), !0)
              );
            }
            function ke(e) {
              if (x[e]) {
                var t = 0,
                  n = 100;
                0 !== e && (t = P[e - 1]), e !== x.length - 1 && (n = P[e]);
                var s = n - t,
                  r = "translate(" + we(Ce(t, s) + "%", "0") + ")",
                  o = "scale(" + we(s / 100, "1") + ")";
                x[e].style[i.transformRule] = r + " " + o;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? P[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = i.format.from(e)) && (e = L.toStepping(e)),
                  !1 === e || isNaN(e) ? P[t] : e);
            }
            function Ae(e, t, n) {
              var s = p(e),
                r = void 0 === P[0];
              (t = void 0 === t || t),
                i.animate && !r && d(k, i.cssClasses.tap, i.animationDuration),
                O.forEach(function (e) {
                  Ee(e, Le(s[e], e), !0, !1, n);
                });
              var o = 1 === O.length ? 0 : 1;
              if (r && L.hasNoSize() && ((n = !0), (P[0] = 0), O.length > 1)) {
                var a = 100 / (O.length - 1);
                O.forEach(function (e) {
                  P[e] = e * a;
                });
              }
              for (; o < O.length; ++o)
                O.forEach(function (e) {
                  Ee(e, P[e], !0, !0, n);
                });
              Te(),
                O.forEach(function (e) {
                  ye("update", e), null !== s[e] && t && ye("set", e);
                });
            }
            function Pe(e) {
              Ae(i.start, e);
            }
            function Oe(e, t, i, n) {
              if (!((e = Number(e)) >= 0 && e < O.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Ee(e, Le(t, e), !0, !0, n), ye("update", e), i && ye("set", e);
            }
            function Ie(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === A.length ? A[0] : A.slice(0);
              var t = A.map(i.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Me() {
              for (
                ve(N.aria),
                  ve(N.tooltips),
                  Object.keys(i.cssClasses).forEach(function (e) {
                    g(k, i.cssClasses[e]);
                  });
                k.firstChild;

              )
                k.removeChild(k.firstChild);
              delete k.noUiSlider;
            }
            function De(e) {
              var t = P[e],
                n = L.getNearbySteps(t),
                s = A[e],
                r = n.thisStep.step,
                o = null;
              if (i.snap)
                return [
                  s - n.stepBefore.startValue || null,
                  n.stepAfter.startValue - s || null,
                ];
              !1 !== r &&
                s + r > n.stepAfter.startValue &&
                (r = n.stepAfter.startValue - s),
                (o =
                  s > n.thisStep.startValue
                    ? n.thisStep.step
                    : !1 !== n.stepBefore.step && s - n.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (o = null);
              var a = L.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(a))),
                null !== o && !1 !== o && (o = Number(o.toFixed(a))),
                [o, r]
              );
            }
            function Ne() {
              return O.map(De);
            }
            function $e(e, t) {
              var n = Ie(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (a[t] = e[t]);
              });
              var o = re(a);
              r.forEach(function (t) {
                void 0 !== e[t] && (i[t] = o[t]);
              }),
                (L = o.spectrum),
                (i.margin = o.margin),
                (i.limit = o.limit),
                (i.padding = o.padding),
                i.pips ? ee(i.pips) : Z(),
                i.tooltips ? X() : R(),
                (P = []),
                Ae(s(e.start) ? e.start : n, t);
            }
            function _e() {
              (u = V(k)),
                B(i.connect, u),
                fe(i.events),
                Ae(i.start),
                i.pips && ee(i.pips),
                i.tooltips && X(),
                U();
            }
            _e();
            var je = {
              destroy: Me,
              steps: Ne,
              on: ge,
              off: ve,
              get: Ie,
              set: Ae,
              setHandle: Oe,
              reset: Pe,
              __moveHandles: function (e, t, i) {
                xe(e, t, P, i);
              },
              options: a,
              updateOptions: $e,
              target: k,
              removePips: Z,
              removeTooltips: R,
              getPositions: function () {
                return P.slice();
              },
              getTooltips: function () {
                return S;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return je;
          }
          function ae(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var i = oe(e, re(t), t);
            return (e.noUiSlider = i), i;
          }
          var le = { __spectrum: I, cssClasses: D, create: ae };
          (e.create = ae),
            (e.cssClasses = D),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, i), r.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, i = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !i),
              !i && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !i && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      n = (e, t = 500, i = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            i && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      s = !0,
      r = (e = 500) => {
        document.documentElement.classList.contains("lock") ? o(e) : a(e);
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      };
    const l = document.querySelector(".nav__nav-close-btn"),
      u = document.querySelector("html");
    function d(e, t) {
      const i = Array.from(e).filter(function (e, i, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (i.length) {
        const e = [];
        i.forEach((i) => {
          const n = {},
            s = i.dataset[t].split(",");
          (n.value = s[0]),
            (n.type = s[1] ? s[1].trim() : "max"),
            (n.item = i),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = (function (e) {
          return e.filter(function (e, t, i) {
            return i.indexOf(e) === t;
          });
        })(n);
        const s = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const i = t.split(","),
                n = i[1],
                r = i[2],
                o = window.matchMedia(i[0]),
                a = e.filter(function (e) {
                  if (e.value === n && e.type === r) return !0;
                });
              s.push({ itemsArray: a, matchMedia: o });
            }),
            s
          );
      }
    }
    l &&
      l.addEventListener("click", function (e) {
        u.classList.remove("menu-open"), u.classList.remove("lock");
      });
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${i}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : r(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            s &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              r(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          i = Array.prototype.slice.call(t),
          n = i.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (i[i.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== i.length - 1 ||
            (i[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[Попапос]: ${e}`);
      }
    })({});
    var c = i(211);
    function p(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function h(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : p(t[i]) && p(e[i]) && Object.keys(t[i]).length > 0 && h(e[i], t[i]);
      });
    }
    !(function () {
      const e = document.querySelector("#range");
      if (e) {
        const t = [
          document.querySelector(".input-with-keypress-0"),
          document.querySelector(".input-with-keypress-1"),
        ];
        c.create(e, {
          start: [1e3, 18e3],
          connect: !0,
          step: 1,
          range: { min: [1], max: [2e4] },
        }),
          e.noUiSlider.on("update", function (i, n) {
            function s(t, i) {
              const n = [null, null];
              (n[t] = i), e.noUiSlider.set(n);
            }
            (t[n].value = i[n]),
              t.forEach(function (t, i) {
                t.addEventListener("change", function () {
                  s(i, this.value);
                }),
                  t.addEventListener("keydown", function (t) {
                    const n = e.noUiSlider.get(),
                      r = Number(n[i]),
                      o = e.noUiSlider.steps()[i];
                    let a;
                    switch (t.which) {
                      case 13:
                        s(i, this.value);
                        break;
                      case 38:
                        (a = o[1]),
                          !1 === a && (a = 1),
                          null !== a && s(i, r + a);
                        break;
                      case 40:
                        (a = o[0]),
                          !1 === a && (a = 1),
                          null !== a && s(i, r - a);
                    }
                  });
              });
          });
      }
    })();
    const f = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function g() {
      const e = "undefined" != typeof document ? document : {};
      return h(e, f), e;
    }
    const m = {
      document: f,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function v() {
      const e = "undefined" != typeof window ? window : {};
      return h(e, m), e;
    }
    class y extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function b(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...b(e)) : t.push(e);
        }),
        t
      );
    }
    function w(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function x(e, t) {
      const i = v(),
        n = g();
      let s = [];
      if (!t && e instanceof y) return e;
      if (!e) return new y(s);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) i.push(n[e]);
            return i;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === i || e === n) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof y) return e;
        s = e;
      }
      return new y(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(s)
      );
    }
    x.fn = y.prototype;
    const C = "resize scroll".split(" ");
    function S(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            C.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : x(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    S("click"),
      S("blur"),
      S("focus"),
      S("focusin"),
      S("focusout"),
      S("keyup"),
      S("keydown"),
      S("keypress"),
      S("submit"),
      S("change"),
      S("mousedown"),
      S("mousemove"),
      S("mouseup"),
      S("mouseenter"),
      S("mouseleave"),
      S("mouseout"),
      S("mouseover"),
      S("touchstart"),
      S("touchend"),
      S("touchmove"),
      S("resize"),
      S("scroll");
    const T = {
      addClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        return (
          w(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, i, n, s] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), x(t).is(i))) n.apply(t, s);
          else {
            const e = x(t).parents();
            for (let t = 0; t < e.length; t += 1)
              x(e[t]).is(i) && n.apply(e[t], s);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, n, s] = e;
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!i && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const i = o[e];
                (n && i.listener === n) ||
                (n &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, i.proxyListener, s),
                    o.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, i.proxyListener, s),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = v(),
          i = e[0].split(" "),
          n = e[1];
        for (let s = 0; s < i.length; s += 1) {
          const r = i[s];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i];
            if (t.CustomEvent) {
              const i = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(i),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = v();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = v(),
            t = g(),
            i = this[0],
            n = i.getBoundingClientRect(),
            s = t.body,
            r = i.clientTop || s.clientTop || 0,
            o = i.clientLeft || s.clientLeft || 0,
            a = i === e ? e.scrollY : i.scrollTop,
            l = i === e ? e.scrollX : i.scrollLeft;
          return { top: n.top + a - r, left: n.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const i = v();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = v(),
          i = g(),
          n = this[0];
        let s, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (s = x(e), r = 0; r < s.length; r += 1) if (s[r] === n) return !0;
          return !1;
        }
        if (e === i) return n === i;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof y) {
          for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
            if (s[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return x([]);
        if (e < 0) {
          const i = t + e;
          return x(i < 0 ? [] : [this[i]]);
        }
        return x([this[e]]);
      },
      append: function (...e) {
        let t;
        const i = g();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = i.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof y)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = g();
        let i, n;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
          } else if (e instanceof y)
            for (n = 0; n < e.length; n += 1)
              this[i].insertBefore(e[n], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && x(this[0].nextElementSibling).is(e)
              ? x([this[0].nextElementSibling])
              : x([])
            : this[0].nextElementSibling
            ? x([this[0].nextElementSibling])
            : x([])
          : x([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return x([]);
        for (; i.nextElementSibling; ) {
          const n = i.nextElementSibling;
          e ? x(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return x(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && x(t.previousElementSibling).is(e)
              ? x([t.previousElementSibling])
              : x([])
            : t.previousElementSibling
            ? x([t.previousElementSibling])
            : x([]);
        }
        return x([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return x([]);
        for (; i.previousElementSibling; ) {
          const n = i.previousElementSibling;
          e ? x(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return x(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? x(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return x(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let n = this[i].parentNode;
          for (; n; )
            e ? x(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return x(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? x([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return x(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].children;
          for (let i = 0; i < n.length; i += 1)
            (e && !x(n[i]).is(e)) || t.push(n[i]);
        }
        return x(t);
      },
      filter: function (e) {
        return x(w(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(T).forEach((e) => {
      Object.defineProperty(x.fn, e, { value: T[e], writable: !0 });
    });
    const E = x;
    function k(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function L() {
      return Date.now();
    }
    function A(e, t) {
      void 0 === t && (t = "x");
      const i = v();
      let n, s, r;
      const o = (function (e) {
        const t = v();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((s = o.transform || o.webkitTransform),
            s.split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new i.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (s = i.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (s = i.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        s || 0
      );
    }
    function P(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function O(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function I() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != n && !O(n)) {
          const i = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = i.length; t < s; t += 1) {
            const s = i[t],
              r = Object.getOwnPropertyDescriptor(n, s);
            void 0 !== r &&
              r.enumerable &&
              (P(e[s]) && P(n[s])
                ? n[s].__swiper__
                  ? (e[s] = n[s])
                  : I(e[s], n[s])
                : !P(e[s]) && P(n[s])
                ? ((e[s] = {}), n[s].__swiper__ ? (e[s] = n[s]) : I(e[s], n[s]))
                : (e[s] = n[s]));
          }
        }
      }
      return e;
    }
    function M(e, t, i) {
      e.style.setProperty(t, i);
    }
    function D(e) {
      let { swiper: t, targetPosition: i, side: n } = e;
      const s = v(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(t.cssModeFrameID);
      const u = i > r ? "next" : "prev",
        d = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
        c = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            u = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + u * (i - r);
          if ((d(p, i) && (p = i), t.wrapperEl.scrollTo({ [n]: p }), d(p, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [n]: p });
              }),
              void s.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = s.requestAnimationFrame(c);
        };
      c();
    }
    let N, $, _;
    function j() {
      return (
        N ||
          (N = (function () {
            const e = v(),
              t = g();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        N
      );
    }
    function H(e) {
      return (
        void 0 === e && (e = {}),
        $ ||
          ($ = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = j(),
              n = v(),
              s = n.navigator.platform,
              r = t || n.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = n.screen.width,
              l = n.screen.height,
              u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === s;
            let f = "MacIntel" === s;
            return (
              !d &&
                f &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              u && !h && ((o.os = "android"), (o.android = !0)),
              (d || p || c) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        $
      );
    }
    function z() {
      return (
        _ ||
          (_ = (function () {
            const e = v();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        _
      );
    }
    const q = {
      on(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const s = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][s](t);
          }),
          n
        );
      },
      once(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function s() {
          n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
          for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
            r[o] = arguments[o];
          t.apply(n, r);
        }
        return (s.__emitterProxy = t), n.on(e, s, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const n = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((n, s) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(s, 1);
                  });
            }),
            i)
          : i;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, i, n;
        for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
          r[o] = arguments[o];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (i = r.slice(1, r.length)), (n = e))
          : ((t = r[0].events), (i = r[0].data), (n = r[0].context || e)),
          i.unshift(n);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(n, [t, ...i]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          e
        );
      },
    };
    const B = {
      updateSize: function () {
        const e = this;
        let t, i;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (i =
              i -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const n = e.params,
          { $wrapperEl: s, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && n.virtual.enabled,
          u = l ? e.virtual.slides.length : e.slides.length,
          d = s.children(`.${e.params.slideClass}`),
          c = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let g = n.slidesOffsetBefore;
        "function" == typeof g && (g = n.slidesOffsetBefore.call(e));
        let m = n.slidesOffsetAfter;
        "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = n.spaceBetween,
          w = -g,
          x = 0,
          C = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const S = n.grid && n.grid.rows > 1 && e.grid;
        let T;
        S && e.grid.initSlides(c);
        const E =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < c; s += 1) {
          T = 0;
          const o = d.eq(s);
          if (
            (S && e.grid.updateSlide(s, o, c, t), "none" !== o.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              E && (d[s].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = i(r, "width"),
                  t = i(r, "padding-left"),
                  n = i(r, "padding-right"),
                  s = i(r, "margin-left"),
                  a = i(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + s + a;
                else {
                  const { clientWidth: i, offsetWidth: r } = o[0];
                  T = e + t + n + s + a + (r - i);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                n.roundLengths && (T = Math.floor(T));
            } else
              (T = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
                n.roundLengths && (T = Math.floor(T)),
                d[s] && (d[s].style[t("width")] = `${T}px`);
            d[s] && (d[s].swiperSlideSize = T),
              f.push(T),
              n.centeredSlides
                ? ((w = w + T / 2 + x / 2 + b),
                  0 === x && 0 !== s && (w = w - r / 2 - b),
                  0 === s && (w = w - r / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  n.roundLengths && (w = Math.floor(w)),
                  C % n.slidesPerGroup == 0 && p.push(w),
                  h.push(w))
                : (n.roundLengths && (w = Math.floor(w)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  h.push(w),
                  (w = w + T + b)),
              (e.virtualSize += T + b),
              (x = T),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + m),
          o &&
            a &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            s.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            s.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          S && e.grid.updateWrapperSize(T, p, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < p.length; i += 1) {
            let s = p[i];
            n.roundLengths && (s = Math.floor(s)),
              p[i] <= e.virtualSize - r && t.push(s);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
          const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
            [i]: `${b}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, i) => {
              p[i] = e - t;
            }),
              h.forEach((e, i) => {
                h[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            M(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (c !== u && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== y && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            i = e.$el.hasClass(t);
          c <= n.maxBackfaceHiddenSlides
            ? i || e.$el.addClass(t)
            : i && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          n = t.virtual && t.params.virtual.enabled;
        let s,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || E([])).each((e) => {
              i.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !n) break;
              i.push(o(e));
            }
        else i.push(o(t.activeIndex));
        for (s = 0; s < i.length; s += 1)
          if (void 0 !== i[s]) {
            const e = i[s].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: n, rtlTranslate: s, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        s && (o = e),
          n.removeClass(i.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const a = n[e];
          let l = a.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
          const u =
              (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + i.spaceBetween),
            d =
              (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + i.spaceBetween),
            c = -(o - l),
            p = c + t.slidesSizesGrid[e];
          ((c >= 0 && c < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (c <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(i.slideVisibleClass)),
            (a.progress = s ? -u : u),
            (a.originalProgress = s ? -d : d);
        }
        t.visibleSlides = E(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === n
          ? ((s = 0), (r = !0), (o = !0))
          : ((s = (e - t.minTranslate()) / n), (r = s <= 0), (o = s >= 1)),
          Object.assign(t, { progress: s, isBeginning: r, isEnd: o }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: i,
            $wrapperEl: n,
            activeIndex: s,
            realIndex: r,
          } = e,
          o = e.virtual && i.virtual.enabled;
        let a;
        t.removeClass(
          `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${i.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          a.addClass(i.slideActiveClass),
          i.loop &&
            (a.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass));
        let l = a.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(i.slideNextClass));
        let u = a.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
        i.loop &&
          0 === u.length &&
          ((u = t.eq(-1)), u.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass),
            u.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${u.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${u.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: s,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let u,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : i >= n[e] && i < n[e + 1] && (d = e + 1)
              : i >= n[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (s.indexOf(i) >= 0) u = s.indexOf(i);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          u = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((u >= s.length && (u = s.length - 1), d === o))
          return void (
            u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"))
          );
        const c = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: u,
          realIndex: c,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== c && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          n = E(e).closest(`.${i.slideClass}`)[0];
        let s,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (s = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                E(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = s),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const V = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: i,
          translate: n,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;
        let r = A(s[0], e);
        return i && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          {
            rtlTranslate: n,
            params: s,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = i;
        let l,
          u = 0,
          d = 0;
        i.isHorizontal() ? (u = n ? -e : e) : (d = e),
          s.roundLengths && ((u = Math.floor(u)), (d = Math.floor(d))),
          s.cssMode
            ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -u : -d)
            : s.virtualTranslate ||
              r.transform(`translate3d(${u}px, ${d}px, 0px)`),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? u : d);
        const c = i.maxTranslate() - i.minTranslate();
        (l = 0 === c ? 0 : (e - i.minTranslate()) / c),
          l !== a && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, n, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === n && (n = !0);
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          u = r.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < u ? u : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                D({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              i &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              i &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      i && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function G(e) {
      let { swiper: t, runCallbacks: i, direction: n, step: s } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = n;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${s}`),
        i && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
        t.emit(`slideChangeTransition${s}`),
          "next" === a
            ? t.emit(`slideNextTransition${s}`)
            : t.emit(`slidePrevTransition${s}`);
      }
    }
    const F = {
      slideTo: function (e, t, i, n, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: u,
          previousIndex: d,
          activeIndex: c,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !n && !s)
        )
          return !1;
        const g = Math.min(r.params.slidesPerGroupSkip, o);
        let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
          (c || a.initialSlide || 0) === (d || 0) &&
            i &&
            r.emit("beforeSlideChangeStart");
        const v = -l[m];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < u.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * u[e]),
              n = Math.floor(100 * u[e + 1]);
            void 0 !== u[e + 1]
              ? t >= i && t < n - (n - i) / 2
                ? (o = e)
                : t >= i && t < n && (o = e + 1)
              : t >= i && (o = e);
          }
        if (r.initialized && o !== c) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (c || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > c ? "next" : o < c ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(i, y), r.transitionEnd(i, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            i = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                D({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(i, y),
          0 === t
            ? r.transitionEnd(i, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, y));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0);
        const s = this;
        let r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, i, n);
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          { animating: s, enabled: r, params: o } = n;
        if (!r) return n;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (s && o.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return o.rewind && n.isEnd
          ? n.slideTo(0, e, t, i)
          : n.slideTo(n.activeIndex + l, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          {
            params: s,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: u,
          } = n;
        if (!u) return n;
        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const c = d(l ? n.translate : -n.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(c) - 1];
        if (void 0 === h && s.cssMode) {
          let e;
          o.forEach((t, i) => {
            c >= t && (e = i);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          s.rewind && n.isBeginning)
        ) {
          const s =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(s, e, t, i);
        }
        return n.slideTo(f, e, t, i);
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        );
      },
      slideToClosest: function (e, t, i, n) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === n && (n = 0.5);
        const s = this;
        let r = s.activeIndex;
        const o = Math.min(s.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[a]) {
          const e = s.snapGrid[a];
          l - e > (s.snapGrid[a + 1] - e) * n && (r += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[a - 1];
          l - e <= (s.snapGrid[a] - e) * n && (r -= s.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, s.slidesGrid.length - 1)),
          s.slideTo(r, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(E(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  k(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                k(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const W = {
      loopCreate: function () {
        const e = this,
          t = g(),
          { params: i, $wrapperEl: n } = e,
          s = n.children().length > 0 ? E(n.children()[0].parentNode) : n;
        s.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
        let r = s.children(`.${i.slideClass}`);
        if (i.loopFillGroupWithBlank) {
          const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
          if (e !== i.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = E(t.createElement("div")).addClass(
                `${i.slideClass} ${i.slideBlankClass}`
              );
              s.append(e);
            }
            r = s.children(`.${i.slideClass}`);
          }
        }
        "auto" !== i.slidesPerView ||
          i.loopedSlides ||
          (i.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(i.loopedSlides || i.slidesPerView, 10)
          )),
          (e.loopedSlides += i.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((t, i) => {
          const n = E(t);
          i < e.loopedSlides && a.push(t),
            i < r.length && i >= r.length - e.loopedSlides && o.push(t),
            n.attr("data-swiper-slide-index", i);
        });
        for (let e = 0; e < a.length; e += 1)
          s.append(E(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          s.prepend(E(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: i,
          loopedSlides: n,
          allowSlidePrev: s,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const u = -o[t] - e.getTranslate();
        if (t < n) {
          (l = i.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== u &&
            e.setTranslate((a ? -e.translate : e.translate) - u);
        } else if (t >= i.length - n) {
          (l = -i.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== u &&
            e.setTranslate((a ? -e.translate : e.translate) - u);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: i } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    };
    function R(e) {
      const t = this,
        i = g(),
        n = v(),
        s = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let u = E(l.target);
      if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === l.type),
        !s.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!s.isTouchEvent && "button" in l && l.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (u = E(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        c = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (c
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === g() || i === v()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const n = i.closest(e);
                  return n || i.getRootNode
                    ? n || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(d, u[0])
          : u.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        h = o.currentY,
        f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (f && (p <= m || p >= n.innerWidth - m)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = h),
        (s.touchStartTime = L()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        u.is(s.focusableElements) &&
          ((e = !1), "SELECT" === u[0].nodeName && (s.isTouched = !1)),
          i.activeElement &&
            E(i.activeElement).is(s.focusableElements) &&
            i.activeElement !== u[0] &&
            i.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          u[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function X(e) {
      const t = g(),
        i = this,
        n = i.touchEventsData,
        { params: s, touches: r, rtlTranslate: o, enabled: a } = i;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const u =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? u.pageX : l.pageX,
        c = "touchmove" === l.type ? u.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = c);
      if (!i.allowTouchMove)
        return (
          E(l.target).is(n.focusableElements) || (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: c,
              currentX: d,
              currentY: c,
            }),
            (n.touchStartTime = L()))
          )
        );
      if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (i.isVertical()) {
          if (
            (c < r.startY && i.translate <= i.maxTranslate()) ||
            (c > r.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (d < r.startX && i.translate <= i.maxTranslate()) ||
          (d > r.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        E(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      if (
        (n.allowTouchCallbacks && i.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = c);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (i.params.threshold && Math.sqrt(p ** 2 + h ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (i.isHorizontal() && r.currentY === r.startY) ||
        (i.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !s.cssMode && l.cancelable && l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        n.isMoved ||
          (s.loop && !s.cssMode && i.loopFix(),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", l)),
        i.emit("sliderMove", l),
        (n.isMoved = !0);
      let f = i.isHorizontal() ? p : h;
      (r.diff = f),
        (f *= s.touchRatio),
        o && (f = -f),
        (i.swipeDirection = f > 0 ? "prev" : "next"),
        (n.currentTranslate = f + n.startTranslate);
      let m = !0,
        v = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (v = 0),
        f > 0 && n.currentTranslate > i.minTranslate()
          ? ((m = !1),
            s.resistance &&
              (n.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + n.startTranslate + f) ** v))
          : f < 0 &&
            n.currentTranslate < i.maxTranslate() &&
            ((m = !1),
            s.resistance &&
              (n.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - n.startTranslate - f) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(f) > s.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = i.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && i.freeMode) ||
          s.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          s.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function U(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: n,
          touches: s,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const u = L(),
        d = u - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            u - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = L()),
        k(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let c;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (c = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: c });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? c >= o[e] && c < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : c >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let f = null,
        g = null;
      n.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const m = (c - o[p]) / h,
        v = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? f : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (m > 1 - n.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== g && m < 0 && Math.abs(m) > n.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p));
      }
    }
    function Y() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: s, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function K(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function J() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: n } = e;
      if (!n) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Q = !1;
    function Z() {}
    const ee = (e, t) => {
      const i = g(),
        {
          params: n,
          touchEvents: s,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        u = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== s.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](s.start, e.onTouchStart, t),
          r[d](
            s.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: u } : u
          ),
          r[d](s.end, e.onTouchEnd, t),
          s.cancel && r[d](s.cancel, e.onTouchEnd, t);
      } else
        r[d](s.start, e.onTouchStart, !1),
          i[d](s.move, e.onTouchMove, u),
          i[d](s.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        n.cssMode && o[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[c](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Y,
              !0
            )
          : e[c]("observerUpdate", Y, !0);
    };
    const te = {
        attachEvents: function () {
          const e = this,
            t = g(),
            { params: i, support: n } = e;
          (e.onTouchStart = R.bind(e)),
            (e.onTouchMove = X.bind(e)),
            (e.onTouchEnd = U.bind(e)),
            i.cssMode && (e.onScroll = J.bind(e)),
            (e.onClick = K.bind(e)),
            n.touch && !Q && (t.addEventListener("touchstart", Z), (Q = !0)),
            ee(e, "on");
        },
        detachEvents: function () {
          ee(this, "off");
        },
      },
      ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ne = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: i,
            loopedSlides: n = 0,
            params: s,
            $el: r,
          } = e,
          o = s.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          u = ie(e, s),
          d = ie(e, l),
          c = s.enabled;
        u && !d
          ? (r.removeClass(
              `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !u &&
            d &&
            (r.addClass(`${s.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === s.grid.fill)) &&
              r.addClass(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== s.direction,
          h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
        p && i && e.changeDirection(), I(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          c && !f ? e.disable() : !c && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
            i &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, i) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
          return;
        let n = !1;
        const s = v(),
          r = "window" === t ? s.innerHeight : i.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? s.matchMedia(`(min-width: ${a}px)`).matches && (n = r)
            : a <= i.clientWidth && (n = r);
        }
        return n || "max";
      },
    };
    const se = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: i,
            rtl: n,
            $el: s,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const i = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && i.push(t + n);
                    })
                  : "string" == typeof e && i.push(t + e);
              }),
              i
            );
          })(
            [
              "initialized",
              i.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && i.freeMode.enabled },
              { autoheight: i.autoHeight },
              { rtl: n },
              { grid: i.grid && i.grid.rows > 1 },
              {
                "grid-column":
                  i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": i.cssMode },
              { centered: i.cssMode && i.centeredSlides },
              { "watch-progress": i.watchSlidesProgress },
            ],
            i.containerModifierClass
          );
        t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const re = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function oe(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const n = Object.keys(i)[0],
          s = i[n];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in s
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                I(t, i))
              : I(t, i))
          : I(t, i);
      };
    }
    const ae = {
        eventsEmitter: q,
        update: B,
        translate: V,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: n } = i;
            n.cssMode ||
              (n.autoHeight && i.updateAutoHeight(),
              G({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: n } = i;
            (i.animating = !1),
              n.cssMode ||
                (i.setTransition(0),
                G({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: F,
        loop: W,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: te,
        breakpoints: ne,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: n } = i;
            if (n) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: se,
        images: {
          loadImage: function (e, t, i, n, s, r) {
            const o = v();
            let a;
            function l() {
              r && r();
            }
            E(e).parent("picture")[0] || (e.complete && s)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                n && (a.sizes = n),
                i && (a.srcset = i),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const n = e.imagesToLoad[i];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      le = {};
    class ue {
      constructor() {
        let e, t;
        for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++)
          n[s] = arguments[s];
        if (
          (1 === n.length &&
          n[0].constructor &&
          "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
            ? (t = n[0])
            : ([e, t] = n),
          t || (t = {}),
          (t = I({}, t)),
          e && !t.el && (t.el = e),
          t.el && E(t.el).length > 1)
        ) {
          const e = [];
          return (
            E(t.el).each((i) => {
              const n = I({}, t, { el: i });
              e.push(new ue(n));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = j()),
          (r.device = H({ userAgent: t.userAgent })),
          (r.browser = z()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const o = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: oe(t, o),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const a = I({}, re, o);
        return (
          (r.params = I({}, a, le, t)),
          (r.originalParams = I({}, r.params)),
          (r.passedParams = I({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = E),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: E(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: L(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = i.minTranslate(),
          s = (i.maxTranslate() - n) * e + n;
        i.translateTo(s, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const n = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: n,
          slidesGrid: s,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = n[a].swiperSlideSize;
          for (let i = a + 1; i < n.length; i += 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let i = a - 1; i >= 0; i -= 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1) {
            (t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            s[a] - s[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || n()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          n = i.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${n}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = E(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = E(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children ? i.children(n()) : E(i).children(n());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = g().createElement("div");
          (s = E(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: n, $el: s, $wrapperEl: r, slides: o } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        I(le, e);
      }
      static get extendedDefaults() {
        return le;
      }
      static get defaults() {
        return re;
      }
      static installModule(e) {
        ue.prototype.__modules__ || (ue.prototype.__modules__ = []);
        const t = ue.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ue.installModule(e)), ue)
          : (ue.installModule(e), ue);
      }
    }
    Object.keys(ae).forEach((e) => {
      Object.keys(ae[e]).forEach((t) => {
        ue.prototype[t] = ae[e][t];
      });
    }),
      ue.use([
        function (e) {
          let { swiper: t, on: i, emit: n } = e;
          const s = v();
          let r = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (n("beforeResize"), n("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && n("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  o = s.requestAnimationFrame(() => {
                    const { width: i, height: n } = t;
                    let s = i,
                      r = n;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: n, target: o } = e;
                      (o && o !== t.el) ||
                        ((s = n ? n.width : (i[0] || i).inlineSize),
                        (r = n ? n.height : (i[0] || i).blockSize));
                    }),
                      (s === i && r === n) || a();
                  });
                })),
                r.observe(t.el))
              : (s.addEventListener("resize", a),
                s.addEventListener("orientationchange", l));
          }),
            i("destroy", () => {
              o && s.cancelAnimationFrame(o),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                s.removeEventListener("resize", a),
                s.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: n, emit: s } = e;
          const r = [],
            o = v(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(i);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const de = ue;
    function ce(e, t, i, n) {
      const s = g();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!i[r] && !0 === i.auto) {
              let o = e.$el.children(`.${n[r]}`)[0];
              o ||
                ((o = s.createElement("div")),
                (o.className = n[r]),
                e.$el.append(o)),
                (i[r] = o),
                (t[r] = o);
            }
          }),
        i
      );
    }
    function pe(e) {
      let { swiper: t, extendParams: i, on: n, emit: s } = e;
      function r(e) {
        let i;
        return (
          e &&
            ((i = E(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              i.length > 1 &&
              1 === t.$el.find(e).length &&
              (i = t.$el.find(e))),
          i
        );
      }
      function o(e, i) {
        const n = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[i ? "addClass" : "removeClass"](n.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function a() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: i } = t.navigation;
        o(i, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function u(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = ce(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const i = r(e.nextEl),
          n = r(e.prevEl);
        i && i.length > 0 && i.on("click", u),
          n && n.length > 0 && n.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          t.enabled ||
            (i && i.addClass(e.lockClass), n && n.addClass(e.lockClass));
      }
      function c() {
        const { $nextEl: e, $prevEl: i } = t.navigation;
        e &&
          e.length &&
          (e.off("click", u), e.removeClass(t.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", l),
            i.removeClass(t.params.navigation.disabledClass));
      }
      i({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        n("init", () => {
          d(), a();
        }),
        n("toEdge fromEdge lock unlock", () => {
          a();
        }),
        n("destroy", () => {
          c();
        }),
        n("enable disable", () => {
          const { $nextEl: e, $prevEl: i } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            i &&
              i[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        n("click", (e, i) => {
          const { $nextEl: n, $prevEl: r } = t.navigation,
            o = i.target;
          if (t.params.navigation.hideOnClick && !E(o).is(r) && !E(o).is(n)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            n
              ? (e = n.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              s(!0 === e ? "navigationShow" : "navigationHide"),
              n && n.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: a, init: d, destroy: c });
    }
    function he(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function fe(e) {
      let { swiper: t, extendParams: i, on: n, emit: s } = e;
      const r = "swiper-pagination";
      let o;
      i({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function u(e, i) {
        const { bulletActiveClass: n } = t.params.pagination;
        e[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`);
      }
      function d() {
        const e = t.rtl,
          i = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let d;
        const c = t.params.loop
          ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > n - 1 - 2 * t.loopedSlides && (d -= n - 2 * t.loopedSlides),
              d > c - 1 && (d -= c),
              d < 0 && "bullets" !== t.params.paginationType && (d = c + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === i.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let s, l, c;
          if (
            (i.dynamicBullets &&
              ((o = n
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                o * (i.dynamicMainBullets + 4) + "px"
              ),
              i.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                a > i.dynamicMainBullets - 1
                  ? (a = i.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (s = Math.max(d - a, 0)),
              (l = s + (Math.min(n.length, i.dynamicMainBullets) - 1)),
              (c = (l + s) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${i.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            n.each((e) => {
              const t = E(e),
                n = t.index();
              n === d && t.addClass(i.bulletActiveClass),
                i.dynamicBullets &&
                  (n >= s &&
                    n <= l &&
                    t.addClass(`${i.bulletActiveClass}-main`),
                  n === s && u(t, "prev"),
                  n === l && u(t, "next"));
            });
          else {
            const e = n.eq(d),
              r = e.index();
            if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
              const e = n.eq(s),
                o = n.eq(l);
              for (let e = s; e <= l; e += 1)
                n.eq(e).addClass(`${i.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= n.length) {
                  for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${i.bulletActiveClass}-main`);
                  n.eq(n.length - i.dynamicMainBullets - 1).addClass(
                    `${i.bulletActiveClass}-prev`
                  );
                } else u(e, "prev"), u(o, "next");
              else u(e, "prev"), u(o, "next");
            }
          }
          if (i.dynamicBullets) {
            const s = Math.min(n.length, i.dynamicMainBullets + 4),
              r = (o * s - o) / 2 - c * o,
              a = e ? "right" : "left";
            n.css(t.isHorizontal() ? a : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === i.type &&
            (r.find(he(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
            r.find(he(i.totalClass)).text(i.formatFractionTotal(c))),
          "progressbar" === i.type)
        ) {
          let e;
          e = i.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (d + 1) / c;
          let s = 1,
            o = 1;
          "horizontal" === e ? (s = n) : (o = n),
            r
              .find(he(i.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`)
              .transition(t.params.speed);
        }
        "custom" === i.type && i.renderCustom
          ? (r.html(i.renderCustom(t, d + 1, c)), s("paginationRender", r[0]))
          : s("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
      }
      function c() {
        const e = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          n = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let s = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            s > i &&
            (s = i);
          for (let i = 0; i < s; i += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, i, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          n.html(r), (t.pagination.bullets = n.find(he(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          n.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            n.html(r)),
          "custom" !== e.type && s("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = ce(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let i = E(e.el);
        0 !== i.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            i.length > 1 &&
            ((i = t.$el.find(e.el)),
            i.length > 1 &&
              (i = i.filter((e) => E(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
          i.addClass(e.modifierClass + e.type),
          i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (i.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (a = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            i.addClass(e.progressbarOppositeClass),
          e.clickable &&
            i.on("click", he(e.bulletClass), function (e) {
              e.preventDefault();
              let i = E(this).index() * t.params.slidesPerGroup;
              t.params.loop && (i += t.loopedSlides), t.slideTo(i);
            }),
          Object.assign(t.pagination, { $el: i, el: i[0] }),
          t.enabled || i.addClass(e.lockClass));
      }
      function h() {
        const e = t.params.pagination;
        if (l()) return;
        const i = t.pagination.$el;
        i.removeClass(e.hiddenClass),
          i.removeClass(e.modifierClass + e.type),
          i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && i.off("click", he(e.bulletClass));
      }
      n("init", () => {
        p(), c(), d();
      }),
        n("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        n("snapIndexChange", () => {
          t.params.loop || d();
        }),
        n("slidesLengthChange", () => {
          t.params.loop && (c(), d());
        }),
        n("snapGridLengthChange", () => {
          t.params.loop || (c(), d());
        }),
        n("destroy", () => {
          h();
        }),
        n("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          d();
        }),
        n("click", (e, i) => {
          const n = i.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !E(n).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && n === t.navigation.nextEl) ||
                (t.navigation.prevEl && n === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: c,
          update: d,
          init: p,
          destroy: h,
        });
    }
    function ge(e) {
      let t,
        { swiper: i, extendParams: n, on: s, emit: r } = e;
      function o() {
        const e = i.slides.eq(i.activeIndex);
        let n = i.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (n = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
          clearTimeout(t),
          (t = k(() => {
            let e;
            i.params.autoplay.reverseDirection
              ? i.params.loop
                ? (i.loopFix(),
                  (e = i.slidePrev(i.params.speed, !0, !0)),
                  r("autoplay"))
                : i.isBeginning
                ? i.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = i.slideTo(
                      i.slides.length - 1,
                      i.params.speed,
                      !0,
                      !0
                    )),
                    r("autoplay"))
                : ((e = i.slidePrev(i.params.speed, !0, !0)), r("autoplay"))
              : i.params.loop
              ? (i.loopFix(),
                (e = i.slideNext(i.params.speed, !0, !0)),
                r("autoplay"))
              : i.isEnd
              ? i.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = i.slideTo(0, i.params.speed, !0, !0)), r("autoplay"))
              : ((e = i.slideNext(i.params.speed, !0, !0)), r("autoplay")),
              ((i.params.cssMode && i.autoplay.running) || !1 === e) && o();
          }, n));
      }
      function a() {
        return (
          void 0 === t &&
          !i.autoplay.running &&
          ((i.autoplay.running = !0), r("autoplayStart"), o(), !0)
        );
      }
      function l() {
        return (
          !!i.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (i.autoplay.running = !1),
          r("autoplayStop"),
          !0)
        );
      }
      function u(e) {
        i.autoplay.running &&
          (i.autoplay.paused ||
            (t && clearTimeout(t),
            (i.autoplay.paused = !0),
            0 !== e && i.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  i.$wrapperEl[0].addEventListener(e, c);
                })
              : ((i.autoplay.paused = !1), o())));
      }
      function d() {
        const e = g();
        "hidden" === e.visibilityState && i.autoplay.running && u(),
          "visible" === e.visibilityState &&
            i.autoplay.paused &&
            (o(), (i.autoplay.paused = !1));
      }
      function c(e) {
        i &&
          !i.destroyed &&
          i.$wrapperEl &&
          e.target === i.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            i.$wrapperEl[0].removeEventListener(e, c);
          }),
          (i.autoplay.paused = !1),
          i.autoplay.running ? o() : l());
      }
      function p() {
        i.params.autoplay.disableOnInteraction
          ? l()
          : (r("autoplayPause"), u()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            i.$wrapperEl[0].removeEventListener(e, c);
          });
      }
      function h() {
        i.params.autoplay.disableOnInteraction ||
          ((i.autoplay.paused = !1), r("autoplayResume"), o());
      }
      (i.autoplay = { running: !1, paused: !1 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          if (i.params.autoplay.enabled) {
            a();
            g().addEventListener("visibilitychange", d),
              i.params.autoplay.pauseOnMouseEnter &&
                (i.$el.on("mouseenter", p), i.$el.on("mouseleave", h));
          }
        }),
        s("beforeTransitionStart", (e, t, n) => {
          i.autoplay.running &&
            (n || !i.params.autoplay.disableOnInteraction
              ? i.autoplay.pause(t)
              : l());
        }),
        s("sliderFirstMove", () => {
          i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction ? l() : u());
        }),
        s("touchEnd", () => {
          i.params.cssMode &&
            i.autoplay.paused &&
            !i.params.autoplay.disableOnInteraction &&
            o();
        }),
        s("destroy", () => {
          i.$el.off("mouseenter", p),
            i.$el.off("mouseleave", h),
            i.autoplay.running && l();
          g().removeEventListener("visibilitychange", d);
        }),
        Object.assign(i.autoplay, { pause: u, run: o, start: a, stop: l });
    }
    function me(e) {
      let { swiper: t, extendParams: i, on: n } = e;
      i({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let s = !1,
        r = !1;
      function o() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const i = e.clickedIndex,
          n = e.clickedSlide;
        if (n && E(n).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == i) return;
        let s;
        if (
          ((s = e.params.loop
            ? parseInt(E(e.clickedSlide).attr("data-swiper-slide-index"), 10)
            : i),
          t.params.loop)
        ) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
            (t.loopFix(),
            (t._clientLeft = t.$wrapperEl[0].clientLeft),
            (e = t.activeIndex));
          const i = t.slides
              .eq(e)
              .prevAll(`[data-swiper-slide-index="${s}"]`)
              .eq(0)
              .index(),
            n = t.slides
              .eq(e)
              .nextAll(`[data-swiper-slide-index="${s}"]`)
              .eq(0)
              .index();
          s = void 0 === i ? n : void 0 === n ? i : n - e < e - i ? n : i;
        }
        t.slideTo(s);
      }
      function a() {
        const { thumbs: e } = t.params;
        if (s) return !1;
        s = !0;
        const i = t.constructor;
        if (e.swiper instanceof i)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (P(e.swiper)) {
          const n = Object.assign({}, e.swiper);
          Object.assign(n, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new i(n)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", o),
          !0
        );
      }
      function l(e) {
        const i = t.thumbs.swiper;
        if (!i || i.destroyed) return;
        const n =
            "auto" === i.params.slidesPerView
              ? i.slidesPerViewDynamic()
              : i.params.slidesPerView,
          s = t.params.thumbs.autoScrollOffset,
          r = s && !i.params.loop;
        if (t.realIndex !== i.realIndex || r) {
          let o,
            a,
            l = i.activeIndex;
          if (i.params.loop) {
            i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              (l = i.activeIndex));
            const e = i.slides
                .eq(l)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              n = i.slides
                .eq(l)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (o =
              void 0 === e
                ? n
                : void 0 === n
                ? e
                : n - l == l - e
                ? i.params.slidesPerGroup > 1
                  ? n
                  : l
                : n - l < l - e
                ? n
                : e),
              (a = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (o = t.realIndex), (a = o > t.previousIndex ? "next" : "prev");
          r && (o += "next" === a ? s : -1 * s),
            i.visibleSlidesIndexes &&
              i.visibleSlidesIndexes.indexOf(o) < 0 &&
              (i.params.centeredSlides
                ? (o =
                    o > l
                      ? o - Math.floor(n / 2) + 1
                      : o + Math.floor(n / 2) - 1)
                : o > l && i.params.slidesPerGroup,
              i.slideTo(o, e ? 0 : void 0));
        }
        let o = 1;
        const a = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (o = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (o = 1),
          (o = Math.floor(o)),
          i.slides.removeClass(a),
          i.params.loop || (i.params.virtual && i.params.virtual.enabled))
        )
          for (let e = 0; e < o; e += 1)
            i.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(a);
        else
          for (let e = 0; e < o; e += 1)
            i.slides.eq(t.realIndex + e).addClass(a);
      }
      (t.thumbs = { swiper: null }),
        n("beforeInit", () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (a(), l(!0));
        }),
        n("slideChange update resize observerUpdate", () => {
          l();
        }),
        n("setTransition", (e, i) => {
          const n = t.thumbs.swiper;
          n && !n.destroyed && n.setTransition(i);
        }),
        n("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: a, update: l });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if (document.querySelector(".gallery-thumbs")) {
          let e = new de(".gallery-thumbs", {
            modules: [pe, fe],
            on: {
              slideChange: function () {
                let e = this.activeIndex + 1,
                  t = this.thumbs.swiper.$el[0].querySelector(
                    `.swiper-slide:nth-child(${e + 1})`
                  ),
                  i = this.thumbs.swiper.$el[0].querySelector(
                    `.swiper-slide:nth-child(${e - 1})`
                  );
                t && !t.classList.contains("swiper-slide-visible")
                  ? this.thumbs.swiper.slideNext()
                  : i &&
                    !i.classList.contains("swiper-slide-visible") &&
                    this.thumbs.swiper.slidePrev();
              },
            },
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 800,
            on: {
              lazyImageReady: function () {
                ibg();
              },
            },
            pagination: { el: ".reviews__pagination", dynamicBullets: !0 },
            navigation: { nextEl: ".nav-slide__up", prevEl: ".nav-slide__dow" },
            freeMode: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            breakpoints: { 600: { direction: "vertical", slidesPerView: 3 } },
          });
          new de(".gallery-top", {
            modules: [pe, fe, me],
            observer: !0,
            observeParents: !0,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            on: {
              lazyImageReady: function () {
                ibg();
              },
            },
            pagination: { el: ".reviews__pagination", dynamicBullets: !0 },
            navigation: {
              nextEl: ".swiper-button-nexts",
              prevEl: ".swiper-button-prevs",
            },
            thumbs: { swiper: e },
          });
        }
        if (document.querySelector(".gallery-thumbs-services")) {
          const t = document.querySelectorAll(".gallery-thumbs-services");
          for (let i = 0; i < t.length; i++) {
            t[i].classList.add("gallery-thumbs-services" + i);
            var e = new de(".gallery-thumbs-services" + i, {
              modules: [pe, fe],
              slidesPerView: 3,
              spaceBetween: 20,
              speed: 800,
              on: {
                lazyImageReady: function () {
                  ibg();
                },
              },
              pagination: { el: ".reviews__pagination", dynamicBullets: !0 },
              freeMode: !0,
              watchSlidesVisibility: !0,
              watchSlidesProgress: !0,
              breakpoints: { 600: { slidesPerView: 3 } },
            });
          }
          new de(".gallery-top-services", {
            modules: [pe, fe, me],
            observer: !0,
            observeParents: !0,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            on: {
              lazyImageReady: function () {
                ibg();
              },
            },
            pagination: { el: ".reviews__pagination", dynamicBullets: !0 },
            navigation: {
              nextEl: ".product-slide-services_r",
              prevEl: ".product-slide-services_l",
            },
            thumbs: { multipleActiveThumbs: !0, swiper: e },
          });
        }
        document.querySelector(".similar-products__products") &&
          new de(".similar-products__products", {
            modules: [ge],
            autoplay: { delay: 3e3 },
            loop: !0,
            slidesPerView: 5,
            spaceBetween: 15,
            speed: 800,
            on: {
              lazyImageReady: function () {
                ibg();
              },
            },
            breakpoints: {
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1e3: { slidesPerView: 5 },
              1390: { slidesPerView: 6 },
            },
          });
        document.querySelector(".parteners__logos") &&
          new de(".parteners__logos", {
            modules: [ge],
            autoplay: { delay: 3e3 },
            loop: !0,
            slidesPerView: 6,
            spaceBetween: 30,
            speed: 800,
            on: {
              lazyImageReady: function () {
                ibg();
              },
            },
            breakpoints: {
              320: { slidesPerView: 2, spaceBetween: 10 },
              600: { slidesPerView: 4 },
              1300: { slidesPerView: 6 },
            },
          });
      })();
    });
    let ve = !1;
    setTimeout(() => {
      if (ve) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var ye = function () {
      return (
        (ye =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var s in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }),
        ye.apply(this, arguments)
      );
    };
    var be = "lgAfterAppendSlide",
      we = "lgInit",
      xe = "lgHasVideo",
      Ce = "lgContainerResize",
      Se = "lgUpdateSlides",
      Te = "lgAfterAppendSubHtml",
      Ee = "lgBeforeOpen",
      ke = "lgAfterOpen",
      Le = "lgSlideItemLoad",
      Ae = "lgBeforeSlide",
      Pe = "lgAfterSlide",
      Oe = "lgPosterClick",
      Ie = "lgDragStart",
      Me = "lgDragMove",
      De = "lgDragEnd",
      Ne = "lgBeforeNextSlide",
      $e = "lgBeforePrevSlide",
      _e = "lgBeforeClose",
      je = "lgAfterClose",
      He = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var ze = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, i) {
          var n = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(n)
            ? ((e.style[n.charAt(0).toLowerCase() + n.slice(1)] = i),
              (e.style["webkit" + n] = i),
              (e.style["moz" + n] = i),
              (e.style["ms" + n] = i),
              (e.style["o" + n] = i))
            : (e.style[n] = i);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var i = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== i.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (i) {
                i.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return qe(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? qe(this.selector[0])
            : qe(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return qe(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return qe(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var i = this;
          return (
            this._each(function (n) {
              i._setCssVendorPrefix(n, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, i) {
          var n = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(i),
                  n.selector.addEventListener(t.split(".")[0], i);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var i = this;
          return (
            this.on(e, function () {
              i.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var i = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (n) {
                i.isEventMatched(t, n) &&
                  (e.eventListeners[n].forEach(function (e) {
                    i.selector.removeEventListener(n.split(".")[0], e);
                  }),
                  (e.eventListeners[n] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var i = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(i), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                t.selector.innerHTML = e;
              }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = qe("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function qe(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new ze(e)
      );
    }
    var Be = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function Ve(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var Ge = function (e, t, i, n) {
        void 0 === i && (i = 0);
        var s = qe(e).attr("data-lg-size") || n;
        if (s) {
          var r = s.split(",");
          if (r[1])
            for (var o = window.innerWidth, a = 0; a < r.length; a++) {
              var l = r[a];
              if (parseInt(l.split("-")[2], 10) > o) {
                s = l;
                break;
              }
              a === r.length - 1 && (s = l);
            }
          var u = s.split("-"),
            d = parseInt(u[0], 10),
            c = parseInt(u[1], 10),
            p = t.width(),
            h = t.height() - i,
            f = Math.min(p, d),
            g = Math.min(h, c),
            m = Math.min(f / d, g / c);
          return { width: d * m, height: c * m };
        }
      },
      Fe = function (e, t, i, n, s) {
        if (s) {
          var r = qe(e).find("img").first();
          if (r.get()) {
            var o = t.get().getBoundingClientRect(),
              a = o.width,
              l = t.height() - (i + n),
              u = r.width(),
              d = r.height(),
              c = r.style(),
              p =
                (a - u) / 2 -
                r.offset().left +
                (parseFloat(c.paddingLeft) || 0) +
                (parseFloat(c.borderLeft) || 0) +
                qe(window).scrollLeft() +
                o.left,
              h =
                (l - d) / 2 -
                r.offset().top +
                (parseFloat(c.paddingTop) || 0) +
                (parseFloat(c.borderTop) || 0) +
                qe(window).scrollTop() +
                i;
            return (
              "translate3d(" +
              (p *= -1) +
              "px, " +
              (h *= -1) +
              "px, 0) scale3d(" +
              u / s.width +
              ", " +
              d / s.height +
              ", 1)"
            );
          }
        }
      },
      We = function (e, t, i, n, s, r) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          i +
          "; height: " +
          t +
          "; max-height:" +
          n +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (r ? 'title="' + r + '"' : "") +
          ' src="' +
          s +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      Re = function (e, t, i, n, s, r) {
        var o =
            "<img " +
            i +
            " " +
            (n ? 'srcset="' + n + '"' : "") +
            "  " +
            (s ? 'sizes="' + s + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          a = "";
        r &&
          (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (i) {
                t += " " + i + '="' + e[i] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + a + o;
      },
      Xe = function (e) {
        for (var t = [], i = [], n = "", s = 0; s < e.length; s++) {
          var r = e[s].split(" ");
          "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
        }
        for (var o = window.innerWidth, a = 0; a < t.length; a++)
          if (parseInt(t[a], 10) > o) {
            n = i[a];
            break;
          }
        return n;
      },
      Ue = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      Ye = function (e, t, i, n, s) {
        return (
          '<div class="lg-video-cont ' +
          (s && s.youtube
            ? "lg-has-youtube"
            : s && s.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          i +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          n +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          n +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      Ke = function (e, t, i, n) {
        var s = [],
          r = (function () {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++)
              e += arguments[t].length;
            var n = Array(e),
              s = 0;
            for (t = 0; t < i; t++)
              for (var r = arguments[t], o = 0, a = r.length; o < a; o++, s++)
                n[s] = r[o];
            return n;
          })(Be, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, o = 0; o < e.attributes.length; o++) {
              var a = e.attributes[o];
              if (a.specified) {
                var l = Ve(a.name),
                  u = "";
                r.indexOf(l) > -1 && (u = l), u && (t[u] = a.value);
              }
            }
            var d = qe(e),
              c = d.find("img").first().attr("alt"),
              p = d.attr("title"),
              h = n ? d.attr(n) : d.find("img").first().attr("src");
            (t.thumb = h),
              i && !t.subHtml && (t.subHtml = p || c || ""),
              (t.alt = c || p || ""),
              s.push(t);
          }),
          s
        );
      },
      Je = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      Qe = function (e, t, i) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (i + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var n = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          s = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          r = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return n
          ? { youtube: n }
          : s
          ? { vimeo: s }
          : r
          ? { wistia: r }
          : void 0;
      },
      Ze = 0,
      et = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (Ze++,
            (this.lgId = Ze),
            (this.el = e),
            (this.LGel = qe(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = ye(ye({}, He), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : Je())
            ) {
              var t = ye(
                ye({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = ye(ye({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(we, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var n = i.items[t],
                    s = qe(n),
                    r = ze.generateUUID();
                  s.attr("data-lg-id", r).on(
                    "click.lgcustom-item-" + r,
                    function (i) {
                      i.preventDefault();
                      var s = e.settings.index || t;
                      e.openGallery(s, n);
                    }
                  );
                },
                i = this,
                n = 0;
              n < this.items.length;
              n++
            )
              t(n);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, qe));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return qe(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return qe("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                i = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (i =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var n = "";
              this.settings.allowMediaOverlap && (n += "lg-media-overlap ");
              var s = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                r = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                o =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                a =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                l = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                u =
                  '\n        <div class="' +
                  o +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  s +
                  " " +
                  r +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  n +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  l +
                  "\n                    " +
                  a +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              qe(this.settings.container).append(u),
                document.body !== this.settings.container &&
                  qe(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                qe(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                i = t.top,
                n = t.bottom;
              if (
                ((this.currentImageSize = Ge(
                  this.items[this.index],
                  this.outer,
                  i + n,
                  e && this.settings.videoMaxSize
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var s = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", s);
              }
              this.LGel.trigger(Ce);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var i = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var i = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var n = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === i && ((n = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(n, -1)),
                this.loadContent(n, !0),
                this.getSlideItem(n).addClass("lg-current"),
                (this.index = n),
                this.updateCurrentCounter(n),
                this.LGel.trigger(Se);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = qe(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return Ke(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (e.prototype.openGallery = function (e, t) {
            var i = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.get().focus(),
                this.outer.removeClass("lg-hide-items"),
                this.$container.addClass("lg-show");
              var n = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = n;
              var s = "";
              n.forEach(function (e) {
                s = s + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(s),
                this.addHtml(e);
              var r = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var o = this.mediaContainerPosition,
                a = o.top,
                l = o.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(a, l);
              var u = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = Ge(
                  t,
                  this.outer,
                  a + l,
                  u && this.settings.videoMaxSize
                )),
                (r = Fe(t, this.outer, a, l, this.currentImageSize))),
                (this.zoomFromOrigin && r) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                i.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(Ee),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = qe(window).scrollTop()),
                setTimeout(function () {
                  if (i.zoomFromOrigin && r) {
                    var t = i.getSlideItem(e);
                    t.css("transform", r),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            i.settings.startAnimationDuration + "ms"
                          ),
                          i.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    i.$backdrop.addClass("in"),
                      i.$container.addClass("lg-show-in");
                  }, 10),
                    (i.zoomFromOrigin && r) ||
                      setTimeout(function () {
                        i.outer.addClass("lg-visible");
                      }, i.settings.backdropDuration),
                    i.slide(e, !1, !1, !1),
                    i.LGel.trigger(ke);
                }),
                document.body === this.settings.container &&
                  qe("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              i =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              n = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (n ? n.clientHeight : 0) + i };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    }
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, i;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (i = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !i)
            )
              if (t) {
                var n = t.substring(0, 1);
                ("." !== n && "#" !== n) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? qe(this.items).eq(e).find(t).first().html()
                      : qe(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              i
                ? this.outer.find(".lg-sub-html").load(i)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var s = qe(this.getSlideItemId(e));
              i
                ? s.load(i)
                : s.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(Te, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
              this.loadContent(e - i, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, i) {
            var n;
            if ((this.settings.dynamic || (n = qe(this.items).eq(t)), n)) {
              var s = void 0;
              if (
                !(s = this.settings.exThumbImage
                  ? n.attr(this.settings.exThumbImage)
                  : n.find("img").first().attr("src"))
              )
                return "";
              var r =
                "<img " +
                i +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                s +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, i) {
            var n = this.galleryItems[i],
              s = n.alt,
              r = n.srcset,
              o = n.sizes,
              a = n.sources,
              l = s ? 'alt="' + s + '"' : "",
              u =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, i, l)
                  : Re(i, e, l, r, o, a)) +
                "</picture>";
            t.prepend(u);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, i, n) {
            var s = e.find(".lg-object").first();
            Ue(s.get()) || t
              ? i()
              : (s.on("load.lg error.lg", function () {
                  i && i();
                }),
                s.on("error.lg", function () {
                  n && n();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, i, n, s, r) {
            var o = this;
            this.onSlideObjectLoad(
              e,
              r,
              function () {
                o.triggerSlideItemLoad(e, t, i, n, s);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, i, n, s) {
            var r = this,
              o = this.galleryItems[t],
              a = s && "video" === this.getSlideType(o) && !o.poster ? n : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                r.LGel.trigger(Le, {
                  index: t,
                  delay: i || 0,
                  isFirstSlide: s,
                });
            }, a);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, i) {
              (e.__slideVideoInfo = Qe(e.src, !!e.video, i)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var i = this,
              n = this.galleryItems[e],
              s = qe(this.getSlideItemId(e)),
              r = n.poster,
              o = n.srcset,
              a = n.sizes,
              l = n.sources,
              u = n.src,
              d = n.video,
              c = d && "string" == typeof d ? JSON.parse(d) : d;
            if (n.responsive) {
              var p = n.responsive.split(",");
              u = Xe(p) || u;
            }
            var h = n.__slideVideoInfo,
              f = "",
              g = !!n.iframe,
              m = !this.lGalleryOn,
              v = 0;
            if (
              (m &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !s.hasClass("lg-loaded"))
            ) {
              if (h) {
                var y = this.mediaContainerPosition,
                  b = y.top,
                  w = y.bottom,
                  x = Ge(
                    this.items[e],
                    this.outer,
                    b + w,
                    h && this.settings.videoMaxSize
                  );
                f = this.getVideoContStyle(x);
              }
              if (g) {
                var C = We(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  u,
                  n.iframeTitle
                );
                s.prepend(C);
              } else if (r) {
                var S = "";
                m &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (S = this.getDummyImageContent(s, e, ""));
                C = Ye(r, S || "", f, this.settings.strings.playVideo, h);
                s.prepend(C);
              } else if (h) {
                C = '<div class="lg-video-cont " style="' + f + '"></div>';
                s.prepend(C);
              } else if ((this.setImgMarkup(u, s, e), o || l)) {
                var T = s.find(".lg-object");
                this.initPictureFill(T);
              }
              (r || h) &&
                this.LGel.trigger(xe, {
                  index: e,
                  src: u,
                  html5Video: c,
                  hasPoster: !!r,
                }),
                this.LGel.trigger(be, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var E = 0;
            v && !qe(document.body).hasClass("lg-from-hash") && (E = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  s.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                s.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if (
                      "image" === i.getSlideType(n) &&
                      (s
                        .find(".lg-img-wrap")
                        .append(Re(e, u, "", o, a, n.sources)),
                      o || l)
                    ) {
                      var t = s.find(".lg-object");
                      i.initPictureFill(t);
                    }
                    ("image" === i.getSlideType(n) ||
                      ("video" === i.getSlideType(n) && r)) &&
                      (i.onLgObjectLoad(s, e, v, E, !0, !1),
                      i.onSlideObjectLoad(
                        s,
                        !(!h || !h.html5 || r),
                        function () {
                          i.loadContentOnFirstSlideLoad(e, s, E);
                        },
                        function () {
                          i.loadContentOnFirstSlideLoad(e, s, E);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              s.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(n) || r)) ||
                this.onLgObjectLoad(s, e, v, E, m, !(!h || !h.html5 || r)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !s.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  s.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (s.hasClass("lg-complete_")
                  ? this.preload(e)
                  : s
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        i.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
            var n = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                n.outer.removeClass("lg-first-slide-loading"),
                (n.isDummyImageRemoved = !0),
                n.preload(e);
            }, i + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
            var n = this;
            void 0 === i && (i = 0);
            var s = [],
              r = Math.max(i, 3);
            r = Math.min(r, this.galleryItems.length);
            var o = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  s.push("lg-item-" + n.lgId + "-" + t);
                }),
                s
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var a = e; a > e - r / 2 && a >= 0; a--)
                s.push("lg-item-" + this.lgId + "-" + a);
              var l = s.length;
              for (a = 0; a < r - l; a++)
                s.push("lg-item-" + this.lgId + "-" + (e + a + 1));
            } else {
              for (
                a = e;
                a <= this.galleryItems.length - 1 && a < e + r / 2;
                a++
              )
                s.push("lg-item-" + this.lgId + "-" + a);
              for (l = s.length, a = 0; a < r - l; a++)
                s.push("lg-item-" + this.lgId + "-" + (e - a - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? s.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    s.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === s.indexOf(o) && s.push("lg-item-" + this.lgId + "-" + t),
              s
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var i = this,
              n = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              n.forEach(function (e) {
                -1 === i.currentItemsInDom.indexOf(e) &&
                  i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === n.indexOf(e) && qe("#" + e).remove();
              }),
              n
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var i = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  i.attr("href", t.downloadUrl || t.src),
                  t.download && i.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, i) {
            var n = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  n.outer.addClass("lg-no-trans"),
                    n.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        i.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        i.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      n.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        n.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (e.prototype.slide = function (e, t, i, n) {
            var s = this,
              r = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
              !this.lGalleryOn || r !== e)
            ) {
              var o = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var a = this.getSlideItem(e),
                  l = this.getSlideItem(r),
                  u = this.galleryItems[e],
                  d = u.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(u)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var c = this.mediaContainerPosition,
                    p = c.top,
                    h = c.bottom,
                    f = Ge(
                      this.items[e],
                      this.outer,
                      p + h,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(e, f);
                }
                if (
                  (this.LGel.trigger(Ae, {
                    prevIndex: r,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!i,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  n || (e < r ? (n = "prev") : e > r && (n = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var g = void 0,
                    m = void 0;
                  o > 2
                    ? ((g = e - 1),
                      (m = e + 1),
                      ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                        ((m = 0), (g = o - 1)))
                    : ((g = 0), (m = 1)),
                    "prev" === n
                      ? this.getSlideItem(m).addClass("lg-next-slide")
                      : this.getSlideItem(g).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(n, a, l);
                this.lGalleryOn
                  ? setTimeout(function () {
                      s.loadContent(e, !0),
                        ".lg-item" !== s.settings.appendSubHtmlTo &&
                          s.addHtml(e);
                    }, this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay))
                  : this.loadContent(e, !0),
                  setTimeout(function () {
                    (s.lgBusy = !1),
                      l.removeClass("lg-slide-progress"),
                      s.LGel.trigger(Pe, {
                        prevIndex: r,
                        index: e,
                        fromTouch: t,
                        fromThumb: i,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (t ? 0 : this.settings.slideDelay));
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, i) {
            var n = t.pageX - e.pageX,
              s = t.pageY - e.pageY,
              r = !1;
            if (
              (this.swipeDirection
                ? (r = !0)
                : Math.abs(n) > 15
                ? ((this.swipeDirection = "horizontal"), (r = !0))
                : Math.abs(s) > 15 &&
                  ((this.swipeDirection = "vertical"), (r = !0)),
              r)
            ) {
              var o = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == i || i.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(o, n, 0);
                var a = o.get().offsetWidth,
                  l = (15 * a) / 100 - Math.abs((10 * n) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -a + n - l,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    a + n + l,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == i || i.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var u = 1 - Math.abs(s) / window.innerHeight;
                this.$backdrop.css("opacity", u);
                var d = 1 - Math.abs(s) / (2 * window.innerWidth);
                this.setTranslate(o, 0, s, d, d),
                  Math.abs(s) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, i) {
            var n,
              s = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                s.$container.removeClass("lg-dragging-vertical"),
                  s.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === s.swipeDirection) {
                  n = e.pageX - t.pageX;
                  var o = Math.abs(e.pageX - t.pageX);
                  n < 0 && o > s.settings.swipeThreshold
                    ? (s.goToNextSlide(!0), (r = !1))
                    : n > 0 &&
                      o > s.settings.swipeThreshold &&
                      (s.goToPrevSlide(!0), (r = !1));
                } else if ("vertical" === s.swipeDirection) {
                  if (
                    ((n = Math.abs(e.pageY - t.pageY)),
                    s.settings.closable && s.settings.swipeToClose && n > 100)
                  )
                    return void s.closeGallery();
                  s.$backdrop.css("opacity", 1);
                }
                if (
                  (s.outer.find(".lg-item").removeAttr("style"),
                  r && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var a = qe(i.target);
                  s.isPosterElement(a) && s.LGel.trigger(Oe);
                }
                s.swipeDirection = void 0;
              }),
              setTimeout(function () {
                s.outer.hasClass("lg-dragging") ||
                  "lg-slide" === s.settings.mode ||
                  s.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              i = {},
              n = !1,
              s = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (i) {
                e.dragOrSwipeEnabled = !0;
                var n = e.getSlideItem(e.index);
                (!qe(i.target).hasClass("lg-item") &&
                  !n.get().contains(i.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== i.targetTouches.length ||
                  ((s = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: i.targetTouches[0].pageX,
                    pageY: i.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (r) {
                s &&
                  "swipe" === e.touchAction &&
                  1 === r.targetTouches.length &&
                  ((i = {
                    pageX: r.targetTouches[0].pageX,
                    pageY: r.targetTouches[0].pageY,
                  }),
                  e.touchMove(t, i, r),
                  (n = !0));
              }),
              this.$inner.on("touchend.lg", function (r) {
                if ("swipe" === e.touchAction) {
                  if (n) (n = !1), e.touchEnd(i, t, r);
                  else if (s) {
                    var o = qe(r.target);
                    e.isPosterElement(o) && e.LGel.trigger(Oe);
                  }
                  (e.touchAction = void 0), (s = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              i = {},
              n = !1,
              s = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (i) {
                e.dragOrSwipeEnabled = !0;
                var s = e.getSlideItem(e.index);
                (qe(i.target).hasClass("lg-item") ||
                  s.get().contains(i.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (i.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: i.pageX, pageY: i.pageY }),
                      (n = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(Ie))));
              }),
              qe(window).on("mousemove.lg.global" + this.lgId, function (r) {
                n &&
                  e.lgOpened &&
                  ((s = !0),
                  (i = { pageX: r.pageX, pageY: r.pageY }),
                  e.touchMove(t, i),
                  e.LGel.trigger(Me));
              }),
              qe(window).on("mouseup.lg.global" + this.lgId, function (r) {
                if (e.lgOpened) {
                  var o = qe(r.target);
                  s
                    ? ((s = !1), e.touchEnd(i, t, r), e.LGel.trigger(De))
                    : e.isPosterElement(o) && e.LGel.trigger(Oe),
                    n &&
                      ((n = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(qe(t.target)) &&
                e.LGel.trigger(Oe);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              i = this.settings.loop;
            e && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Ne, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : i
                  ? ((this.index = 0),
                    this.LGel.trigger(Ne, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              i = this.settings.loop;
            e && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger($e, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : i
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger($e, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            qe(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                i = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? i.attr("disabled", "disabled").addClass("disabled")
                : i.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, i, n, s) {
            void 0 === n && (n = 1),
              void 0 === s && (s = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  i +
                  "px, 0px) scale3d(" +
                  n +
                  ", " +
                  s +
                  ", 1)"
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (i) {
              if (i.deltaY && !(e.galleryItems.length < 2)) {
                i.preventDefault();
                var n = new Date().getTime();
                n - t < 1e3 ||
                  ((t = n),
                  i.deltaY > 0
                    ? e.goToNextSlide()
                    : i.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = qe(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (i) {
                    var n = qe(i.target);
                    t = !!e.isSlideElement(n);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (i) {
                    var n = qe(i.target);
                    e.isSlideElement(n) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(_e), qe(window).scrollTop(this.prevScrollTop);
            var i,
              n = this.items[this.index];
            if (this.zoomFromOrigin && n) {
              var s = this.mediaContainerPosition,
                r = s.top,
                o = s.bottom,
                a = this.galleryItems[this.index],
                l = a.__slideVideoInfo,
                u = a.poster,
                d = Ge(
                  n,
                  this.outer,
                  r + o,
                  l && u && this.settings.videoMaxSize
                );
              i = Fe(n, this.outer, r, o, d);
            }
            this.zoomFromOrigin && i
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", i))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              qe("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var c =
              this.zoomFromOrigin && i
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  i &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms"
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(je, { instance: t }),
                  t.outer.get() && t.outer.get().blur(),
                  (t.lgOpened = !1);
              }, c + 100),
              c + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(Se);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroy = function () {
            var e = this,
              t = this.closeGallery(!0);
            return (
              setTimeout(function () {
                e.destroyModules(!0),
                  e.settings.dynamic || e.invalidateItems(),
                  qe(window).off(".lg.global" + e.lgId),
                  e.LGel.off(".lg"),
                  e.$container.remove();
              }, t),
              t
            );
          }),
          e
        );
      })();
    const tt = function (e, t) {
      return new et(e, t);
    };
    var it = i(97),
      nt = i(363);
    const st = document.querySelectorAll("[data-gallery]");
    if (st.length) {
      let t = [];
      st.forEach((e) => {
        t.push({
          gallery: e,
          galleryClass: tt(e, {
            plugins: [nt, it],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          }),
        });
      }),
        (e.gallery = t);
    }
    !(function () {
      let e = [],
        t = document.querySelectorAll("[data-da]"),
        i = [],
        n = [];
      if (t.length > 0) {
        let o = 0;
        for (let n = 0; n < t.length; n++) {
          const s = t[n],
            r = s.getAttribute("data-da");
          if ("" != r) {
            const t = r.split(","),
              n = t[1] ? t[1].trim() : "last",
              l = t[2] ? t[2].trim() : "767",
              u = "min" === t[3] ? t[3].trim() : "max",
              d = document.querySelector("." + t[0].trim());
            t.length > 0 &&
              d &&
              (s.setAttribute("data-da-index", o),
              (e[o] = { parent: s.parentNode, index: a(s) }),
              (i[o] = {
                element: s,
                destination: document.querySelector("." + t[0].trim()),
                place: n,
                breakpoint: l,
                type: u,
              }),
              o++);
          }
        }
        (s = i).sort(function (e, t) {
          return e.breakpoint > t.breakpoint ? -1 : 1;
        }),
          s.sort(function (e, t) {
            return e.place > t.place ? 1 : -1;
          });
        for (let e = 0; e < i.length; e++) {
          const t = i[e],
            s = t.breakpoint,
            o = t.type;
          n.push(window.matchMedia("(" + o + "-width: " + s + "px)")),
            n[e].addListener(r);
        }
      }
      var s;
      function r(e) {
        for (let e = 0; e < i.length; e++) {
          const t = i[e],
            s = t.element,
            r = t.destination,
            a = t.place,
            u = "_dynamic_adapt_" + t.breakpoint;
          if (n[e].matches) {
            if (!s.classList.contains(u)) {
              let e = l(r)[a];
              "first" === a
                ? (e = l(r)[0])
                : "last" === a && (e = l(r)[l(r).length]),
                r.insertBefore(s, r.children[e]),
                s.classList.add(u);
            }
          } else s.classList.contains(u) && (o(s), s.classList.remove(u));
        }
      }
      function o(t) {
        const i = t.getAttribute("data-da-index"),
          n = e[i],
          s = n.parent,
          r = n.index,
          o = l(s, !0)[r];
        s.insertBefore(t, s.children[o]);
      }
      function a(e) {
        return Array.prototype.slice.call(e.parentNode.children).indexOf(e);
      }
      function l(e, t) {
        const i = e.children,
          n = [];
        for (let e = 0; e < i.length; e++) {
          const s = i[e];
          (t || null == s.getAttribute("data-da")) && n.push(e);
        }
        return n;
      }
      r();
    })();
    var rt = i(755);
    const ot = document.querySelector(".scroll-top ");
    window.addEventListener("scroll", () => {
      (window.pageYOffset || document.documentElement.scrollTop) > 500
        ? ot.classList.add("active")
        : ot.classList.remove("active");
    }),
      ot.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    const at = document.querySelector(".contacts__map"),
      lt = document.querySelector(".main-section");
    if (at || lt) {
      const e = document.querySelector(".page");
      (e.style.marginBottom = "8px"), lt && (e.style.marginBottom = "0px");
    }
    function ut(e) {
      if (e) {
        e = e.replace(/\s+/g, "");
        return (e = parseInt(e));
      }
      return !1;
    }
    rt(".service-item input").keyup(function () {
      var e = rt(this).closest(".service-item");
      !(function (e) {
        var t = rt('input[name="' + e + '"]').closest("form");
        ("length" != e && "width" != e) || t.find('input[name="area"]').val("");
        "area" == e &&
          t.find('input[name="length"],input[name="width"] ').val("");
      })(rt(this).attr("name")),
        (function (e) {
          var t = ut(e.find(".service-item_price span span").text()),
            i = ut(e.find('input[name="area"]').val()),
            n = ut(e.find('input[name="weight"]').val()),
            s = ut(e.find('input[name="places"]').val());
          if (n > 0) var r = n * t;
          else if (i > 0) r = i * t;
          else if (s > 0) r = s * t;
          else {
            var o = ut(e.find('input[name="length"]').val()),
              a = ut(e.find('input[name="width"]').val());
            if (o > 0 && a > 0) {
              r = o * a * t;
              e.find('input[name="area"]').val(o * a);
            }
          }
          r > 0
            ? (e.find(".service-item_result span span").text(r),
              e.find(".service-item_result").addClass("active"))
            : e.find(".service-item_result").removeClass("active");
        })(e),
        rt(this).val()
          ? rt(this).closest("div").addClass("active")
          : rt(this).closest("div").removeClass("active");
    }),
      (function () {
        const e = document.querySelectorAll(".grid__item"),
          t = document.querySelector(".product-shop__row-style");
        for (var i = 0, n = e.length; i < n; i++)
          e[i].addEventListener("click", function () {
            if (((s = "_active"), !this.classList.contains(s))) {
              for (var i = 0, n = e.length; i < n; i++)
                e[i].classList.toggle("_active");
              var s;
              t.classList.toggle("grid-5"), t.classList.toggle("grid-3");
            }
          });
      })(),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      document.querySelector(".icon-menu") &&
        document.addEventListener("click", function (e) {
          s &&
            e.target.closest(".icon-menu") &&
            (r(), document.documentElement.classList.toggle("menu-open"));
        }),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const i = Array.from(e).filter(function (e, t, i) {
            return !e.dataset.spollers.split(",")[0];
          });
          i.length && r(i);
          let s = d(e, "spollers");
          function r(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            let i = e.querySelectorAll("[data-spoller]");
            i.length &&
              ((i = Array.from(i).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              i.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function a(e) {
            const i = e.target;
            if (i.closest("[data-spoller]")) {
              const s = i.closest("[data-spoller]"),
                r = s.closest("[data-spollers]"),
                o = r.hasAttribute("data-one-spoller"),
                a = r.dataset.spollersSpeed
                  ? parseInt(r.dataset.spollersSpeed)
                  : 500;
              r.querySelectorAll("._slide").length ||
                (o && !s.classList.contains("_spoller-active") && l(r),
                s.classList.toggle("_spoller-active"),
                ((e, i = 500) => {
                  e.hidden ? n(e, i) : t(e, i);
                })(s.nextElementSibling, a)),
                e.preventDefault();
            }
          }
          function l(e) {
            const i = e.querySelector("[data-spoller]._spoller-active"),
              n = e.dataset.spollersSpeed
                ? parseInt(e.dataset.spollersSpeed)
                : 500;
            i &&
              !e.querySelectorAll("._slide").length &&
              (i.classList.remove("_spoller-active"),
              t(i.nextElementSibling, n));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let i = [];
        if (e.length > 0) {
          const t = (function () {
            if (location.hash) return location.hash.replace("#", "");
          })();
          t && t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
            e.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", o),
                (function (e) {
                  let t = e.querySelectorAll("[data-tabs-titles]>*"),
                    n = e.querySelectorAll("[data-tabs-body]>*");
                  const s = e.dataset.tabsIndex,
                    r = i[0] == s;
                  if (r) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  n.length &&
                    ((n = Array.from(n).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (t = Array.from(t).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    n.forEach((e, n) => {
                      t[n].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && n == i[1] && t[n].classList.add("_tab-active"),
                        (e.hidden = !t[n].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let n = d(e, "tabs");
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            let i = (e = e.item).querySelector("[data-tabs-titles]"),
              n = e.querySelectorAll("[data-tabs-title]"),
              s = e.querySelector("[data-tabs-body]"),
              r = e.querySelectorAll("[data-tabs-item]");
            (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
              (r = Array.from(r).filter((t) => t.closest("[data-tabs]") === e)),
              r.forEach((r, o) => {
                t.matches
                  ? (s.append(n[o]),
                    s.append(r),
                    e.classList.add("_tab-spoller"))
                  : (i.append(n[o]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function r(e) {
          let i = e.querySelectorAll("[data-tabs-title]"),
            s = e.querySelectorAll("[data-tabs-item]");
          const r = e.dataset.tabsIndex;
          const o = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (s.length > 0) {
            const a = e.hasAttribute("data-tabs-hash");
            (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              s.forEach((e, s) => {
                var l;
                i[s].classList.contains("_tab-active")
                  ? (o ? n(e, o) : (e.hidden = !1),
                    a &&
                      !e.closest(".popup") &&
                      ((l = (l = `tab-${r}-${s}`)
                        ? `#${l}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", l)))
                  : o
                  ? t(e, o)
                  : (e.hidden = !0);
              });
          }
        }
        function o(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const i = t.closest("[data-tabs-title]"),
              n = i.closest("[data-tabs]");
            if (
              !i.classList.contains("_tab-active") &&
              !n.querySelector("._slide")
            ) {
              let e = n.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === n
                )),
                e.length && e[0].classList.remove("_tab-active"),
                i.classList.add("_tab-active"),
                r(n);
            }
            e.preventDefault();
          }
        }
      })(),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      });
  })();
})();

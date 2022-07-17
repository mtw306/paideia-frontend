"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6319],
  {
    89141: function (t, n, e) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = e(70655),
        o = e(67294),
        i = e(24394),
        a = e(83573),
        u = e(39294),
        s = e(84839);
      function c(t) {
        return t && "object" === typeof t && "default" in t
          ? t
          : { default: t };
      }
      function l(t) {
        if (t && t.__esModule) return t;
        var n = Object.create(null);
        return (
          t &&
            Object.keys(t).forEach(function (e) {
              if ("default" !== e) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(
                  n,
                  e,
                  r.get
                    ? r
                    : {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        },
                      }
                );
              }
            }),
          (n.default = t),
          Object.freeze(n)
        );
      }
      var f = l(o),
        d = c(o),
        v = c(s),
        p = function (t) {
          return {
            isEnabled: function (n) {
              return t.some(function (t) {
                return !!n[t];
              });
            },
          };
        },
        m = {
          measureLayout: p([
            "layout",
            "layoutId",
            "drag",
            "_layoutResetTransform",
          ]),
          animation: p([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
          ]),
          exit: p(["exit"]),
          drag: p(["drag", "dragControls"]),
          focus: p(["whileFocus"]),
          hover: p(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: p(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: p(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          layoutAnimation: p(["layout", "layoutId"]),
        };
      function g(t) {
        for (var n in t) {
          var e = t[n];
          null !== e && (m[n].Component = e);
        }
      }
      var y = o.createContext({ strict: !1 }),
        h = Object.keys(m),
        x = h.length;
      var _ = o.createContext({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        E = o.createContext({});
      function b() {
        return o.useContext(E).visualElement;
      }
      var A = o.createContext(null);
      function P(t) {
        var n = o.useRef(null);
        return null === n.current && (n.current = t()), n.current;
      }
      function S() {
        var t = o.useContext(A);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          e = t.onExitComplete,
          r = t.register,
          i = V();
        o.useEffect(function () {
          return r(i);
        }, []);
        return !n && e
          ? [
              !1,
              function () {
                return null === e || void 0 === e ? void 0 : e(i);
              },
            ]
          : [!0];
      }
      function w(t) {
        return null === t || t.isPresent;
      }
      var C = 0,
        T = function () {
          return C++;
        },
        V = function () {
          return P(T);
        },
        L = o.createContext(null),
        k = "undefined" !== typeof window,
        R = k ? o.useLayoutEffect : o.useEffect;
      function M(t, n, e, i) {
        var a = o.useContext(_),
          u = o.useContext(y),
          s = b(),
          c = o.useContext(A),
          l = (function (t) {
            var n = t.layoutId,
              e = o.useContext(L);
            return e && void 0 !== n ? e + "-" + n : n;
          })(e),
          f = o.useRef(void 0);
        i || (i = u.renderer),
          !f.current &&
            i &&
            (f.current = i(t, {
              visualState: n,
              parent: s,
              props: r.__assign(r.__assign({}, e), { layoutId: l }),
              presenceId: null === c || void 0 === c ? void 0 : c.id,
              blockInitialAnimation:
                !1 === (null === c || void 0 === c ? void 0 : c.initial),
            }));
        var d = f.current;
        return (
          R(function () {
            d &&
              (d.setProps(
                r.__assign(r.__assign(r.__assign({}, a), e), { layoutId: l })
              ),
              (d.isPresent = w(c)),
              (d.isPresenceRoot =
                !s ||
                s.presenceId !== (null === c || void 0 === c ? void 0 : c.id)),
              d.syncRender());
          }),
          o.useEffect(function () {
            var t;
            d &&
              (null === (t = d.animationState) ||
                void 0 === t ||
                t.animateChanges());
          }),
          R(function () {
            return function () {
              return null === d || void 0 === d ? void 0 : d.notifyUnmount();
            };
          }, []),
          d
        );
      }
      function D(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function O(t) {
        return Array.isArray(t);
      }
      function j(t) {
        return "string" === typeof t || O(t);
      }
      function B(t, n, e, r, o) {
        var i;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          "string" === typeof n &&
            (n = null === (i = t.variants) || void 0 === i ? void 0 : i[n]),
          "function" === typeof n
            ? n(null !== e && void 0 !== e ? e : t.custom, r, o)
            : n
        );
      }
      function F(t, n, e) {
        var r = t.getProps();
        return B(
          r,
          n,
          null !== e && void 0 !== e ? e : r.custom,
          (function (t) {
            var n = {};
            return (
              t.forEachValue(function (t, e) {
                return (n[e] = t.get());
              }),
              n
            );
          })(t),
          (function (t) {
            var n = {};
            return (
              t.forEachValue(function (t, e) {
                return (n[e] = t.getVelocity());
              }),
              n
            );
          })(t)
        );
      }
      function I(t) {
        var n;
        return (
          "function" ===
            typeof (null === (n = t.animate) || void 0 === n
              ? void 0
              : n.start) ||
          j(t.initial) ||
          j(t.animate) ||
          j(t.whileHover) ||
          j(t.whileDrag) ||
          j(t.whileTap) ||
          j(t.whileFocus) ||
          j(t.exit)
        );
      }
      function U(t) {
        return Boolean(I(t) || t.variants);
      }
      function H(t, n) {
        var e = (function (t, n) {
            if (I(t)) {
              var e = t.initial,
                r = t.animate;
              return {
                initial: !1 === e || j(e) ? e : void 0,
                animate: j(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? n : {};
          })(t, o.useContext(E)),
          r = e.initial,
          i = e.animate;
        return o.useMemo(
          function () {
            return { initial: r, animate: i };
          },
          n ? [X(r), X(i)] : []
        );
      }
      function X(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function Y(t) {
        var n = t.preloadedFeatures,
          e = t.createVisualElement,
          i = t.useRender,
          a = t.useVisualState,
          u = t.Component;
        return (
          n && g(n),
          o.forwardRef(function (t, n) {
            var s = o.useContext(_).isStatic,
              c = null,
              l = H(t, s),
              d = a(t, s);
            return (
              !s &&
                k &&
                ((l.visualElement = M(u, d, t, e)),
                (c = (function (t, n, e) {
                  var i = [];
                  if ((o.useContext(y), !n)) return null;
                  for (var a = 0; a < x; a++) {
                    var u = h[a],
                      s = m[u],
                      c = s.isEnabled,
                      l = s.Component;
                    c(t) &&
                      l &&
                      i.push(
                        f.createElement(
                          l,
                          r.__assign({ key: u }, t, { visualElement: n })
                        )
                      );
                  }
                  return i;
                })(t, l.visualElement))),
              f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  E.Provider,
                  { value: l },
                  i(
                    u,
                    t,
                    (function (t, n, e) {
                      return o.useCallback(
                        function (r) {
                          var o;
                          r &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, r)),
                            n && (r ? n.mount(r) : n.unmount()),
                            e &&
                              ("function" === typeof e
                                ? e(r)
                                : D(e) && (e.current = r));
                        },
                        [n]
                      );
                    })(d, l.visualElement, n),
                    d,
                    s
                  )
                ),
                c
              )
            );
          })
        );
      }
      function z(t) {
        function n(n, e) {
          return void 0 === e && (e = {}), Y(t(n, e));
        }
        var e = new Map();
        return new Proxy(n, {
          get: function (t, r) {
            return e.has(r) || e.set(r, n(r)), e.get(r);
          },
        });
      }
      var N = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function W(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(N.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var Z = {};
      function K(t) {
        for (var n in t) Z[n] = t[n];
      }
      var G = ["", "X", "Y", "Z"],
        $ = ["transformPerspective", "x", "y", "z"];
      function q(t, n) {
        return $.indexOf(t) - $.indexOf(n);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return G.forEach(function (n) {
          return $.push(t + n);
        });
      });
      var J = new Set($);
      function Q(t) {
        return J.has(t);
      }
      var tt = new Set(["originX", "originY", "originZ"]);
      function nt(t) {
        return tt.has(t);
      }
      function et(t, n) {
        var e = n.layout,
          r = n.layoutId;
        return (
          Q(t) || nt(t) || ((e || void 0 !== r) && (!!Z[t] || "opacity" === t))
        );
      }
      var rt = function (t) {
          return null !== t && "object" === typeof t && t.getVelocity;
        },
        ot = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function it(t) {
        return t.startsWith("--");
      }
      var at = function (t, n) {
          return n && "number" === typeof t ? n.transform(t) : t;
        },
        ut = r.__assign(r.__assign({}, a.number), { transform: Math.round }),
        st = {
          borderWidth: a.px,
          borderTopWidth: a.px,
          borderRightWidth: a.px,
          borderBottomWidth: a.px,
          borderLeftWidth: a.px,
          borderRadius: a.px,
          radius: a.px,
          borderTopLeftRadius: a.px,
          borderTopRightRadius: a.px,
          borderBottomRightRadius: a.px,
          borderBottomLeftRadius: a.px,
          width: a.px,
          maxWidth: a.px,
          height: a.px,
          maxHeight: a.px,
          size: a.px,
          top: a.px,
          right: a.px,
          bottom: a.px,
          left: a.px,
          padding: a.px,
          paddingTop: a.px,
          paddingRight: a.px,
          paddingBottom: a.px,
          paddingLeft: a.px,
          margin: a.px,
          marginTop: a.px,
          marginRight: a.px,
          marginBottom: a.px,
          marginLeft: a.px,
          rotate: a.degrees,
          rotateX: a.degrees,
          rotateY: a.degrees,
          rotateZ: a.degrees,
          scale: a.scale,
          scaleX: a.scale,
          scaleY: a.scale,
          scaleZ: a.scale,
          skew: a.degrees,
          skewX: a.degrees,
          skewY: a.degrees,
          distance: a.px,
          translateX: a.px,
          translateY: a.px,
          translateZ: a.px,
          x: a.px,
          y: a.px,
          z: a.px,
          perspective: a.px,
          transformPerspective: a.px,
          opacity: a.alpha,
          originX: a.progressPercentage,
          originY: a.progressPercentage,
          originZ: a.px,
          zIndex: ut,
          fillOpacity: a.alpha,
          strokeOpacity: a.alpha,
          numOctaves: ut,
        };
      function ct(t, n, e, r, o, i, a, u) {
        var s,
          c = t.style,
          l = t.vars,
          f = t.transform,
          d = t.transformKeys,
          v = t.transformOrigin;
        d.length = 0;
        var p = !1,
          m = !1,
          g = !0;
        for (var y in n) {
          var h = n[y];
          if (it(y)) l[y] = h;
          else {
            var x = st[y],
              _ = at(h, x);
            if (Q(y)) {
              if (((p = !0), (f[y] = _), d.push(y), !g)) continue;
              h !== (null !== (s = x.default) && void 0 !== s ? s : 0) &&
                (g = !1);
            } else if (nt(y)) (v[y] = _), (m = !0);
            else if (
              (null === e || void 0 === e ? void 0 : e.isHydrated) &&
              (null === r || void 0 === r ? void 0 : r.isHydrated) &&
              Z[y]
            ) {
              var E = Z[y].process(h, r, e),
                b = Z[y].applyTo;
              if (b) for (var A = b.length, P = 0; P < A; P++) c[b[P]] = E;
              else c[y] = E;
            } else c[y] = _;
          }
        }
        r && e && a && u
          ? ((c.transform = a(r.deltaFinal, r.treeScale, p ? f : void 0)),
            i && (c.transform = i(f, c.transform)),
            (c.transformOrigin = u(r)))
          : (p &&
              (c.transform = (function (t, n, e, r) {
                var o = t.transform,
                  i = t.transformKeys,
                  a = n.enableHardwareAcceleration,
                  u = void 0 === a || a,
                  s = n.allowTransformNone,
                  c = void 0 === s || s,
                  l = "";
                i.sort(q);
                for (var f = !1, d = i.length, v = 0; v < d; v++) {
                  var p = i[v];
                  (l += (ot[p] || p) + "(" + o[p] + ") "),
                    "z" === p && (f = !0);
                }
                return (
                  !f && u ? (l += "translateZ(0)") : (l = l.trim()),
                  r ? (l = r(o, e ? "" : l)) : c && e && (l = "none"),
                  l
                );
              })(t, o, g, i)),
            m &&
              (c.transformOrigin = (function (t) {
                var n = t.originX,
                  e = void 0 === n ? "50%" : n,
                  r = t.originY,
                  o = void 0 === r ? "50%" : r,
                  i = t.originZ;
                return e + " " + o + " " + (void 0 === i ? 0 : i);
              })(v)));
      }
      var lt = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function ft(t, n, e) {
        for (var r in n) rt(n[r]) || et(r, e) || (t[r] = n[r]);
      }
      function dt(t, n, e) {
        var i = {};
        return (
          ft(i, t.style || {}, t),
          Object.assign(
            i,
            (function (t, n, e) {
              var i = t.transformTemplate;
              return o.useMemo(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  ct(
                    t,
                    n,
                    void 0,
                    void 0,
                    { enableHardwareAcceleration: !e },
                    i
                  );
                  var o = t.vars,
                    a = t.style;
                  return r.__assign(r.__assign({}, o), a);
                },
                [n]
              );
            })(t, n, e)
          ),
          t.transformValues && (i = t.transformValues(i)),
          i
        );
      }
      function vt(t, n, e) {
        var r = {},
          o = dt(t, n, e);
        return (
          Boolean(t.drag) &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
            (o.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (r.style = o),
          r
        );
      }
      var pt = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "_layoutResetTransform",
        "onLayoutAnimationComplete",
        "onViewportBoxUpdate",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
      ]);
      function mt(t) {
        return pt.has(t);
      }
      var gt = function (t) {
        return !mt(t);
      };
      try {
        var yt = e(78208).Z;
        gt = function (t) {
          return t.startsWith("on") ? !mt(t) : yt(t);
        };
      } catch (ti) {}
      function ht(t, n, e) {
        return "string" === typeof t ? t : a.px.transform(n + e * t);
      }
      var xt = function (t, n) {
          return a.px.transform(t * n);
        },
        _t = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Et = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function bt(t, n, e, o, i, a, u, s) {
        var c = n.attrX,
          l = n.attrY,
          f = n.originX,
          d = n.originY,
          v = n.pathLength,
          p = n.pathSpacing,
          m = void 0 === p ? 1 : p,
          g = n.pathOffset,
          y = void 0 === g ? 0 : g;
        ct(
          t,
          r.__rest(n, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          e,
          o,
          i,
          a,
          u,
          s
        ),
          (t.attrs = t.style),
          (t.style = {});
        var h = t.attrs,
          x = t.style,
          _ = t.dimensions,
          E = t.totalPathLength;
        h.transform && (_ && (x.transform = h.transform), delete h.transform),
          _ &&
            (void 0 !== f || void 0 !== d || x.transform) &&
            (x.transformOrigin = (function (t, n, e) {
              return ht(n, t.x, t.width) + " " + ht(e, t.y, t.height);
            })(_, void 0 !== f ? f : 0.5, void 0 !== d ? d : 0.5)),
          void 0 !== c && (h.x = c),
          void 0 !== l && (h.y = l),
          void 0 !== E &&
            void 0 !== v &&
            (function (t, n, e, r, o, i) {
              void 0 === r && (r = 1),
                void 0 === o && (o = 0),
                void 0 === i && (i = !0);
              var a = i ? _t : Et;
              t[a.offset] = xt(-o, n);
              var u = xt(e, n),
                s = xt(r, n);
              t[a.array] = u + " " + s;
            })(h, E, v, m, y, !1);
      }
      var At = function () {
        return r.__assign(
          r.__assign(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Pt(t, n) {
        var e = o.useMemo(
          function () {
            var e = At();
            return (
              bt(
                e,
                n,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              r.__assign(r.__assign({}, e.attrs), {
                style: r.__assign({}, e.style),
              })
            );
          },
          [n]
        );
        if (t.style) {
          var i = {};
          ft(i, t.style, t), (e.style = r.__assign(r.__assign({}, i), e.style));
        }
        return e;
      }
      function St(t) {
        void 0 === t && (t = !1);
        return function (n, e, i, a, u) {
          var s = a.latestValues,
            c = (W(n) ? Pt : vt)(e, s, u),
            l = (function (t, n, e) {
              var r = {};
              for (var o in t)
                (gt(o) || (!0 === e && mt(o)) || (!n && !mt(o))) &&
                  (r[o] = t[o]);
              return r;
            })(e, "string" === typeof n, t),
            f = r.__assign(r.__assign(r.__assign({}, l), c), { ref: i });
          return o.createElement(n, f);
        };
      }
      var wt = /([a-z])([A-Z])/g,
        Ct = function (t) {
          return t.replace(wt, "$1-$2").toLowerCase();
        };
      function Tt(t, n) {
        var e = n.style,
          r = n.vars;
        for (var o in (Object.assign(t.style, e), r))
          t.style.setProperty(o, r[o]);
      }
      var Vt = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
      ]);
      function Lt(t, n) {
        for (var e in (Tt(t, n), n.attrs))
          t.setAttribute(Vt.has(e) ? e : Ct(e), n.attrs[e]);
      }
      function kt(t) {
        var n = t.style,
          e = {};
        for (var r in n) (rt(n[r]) || et(r, t)) && (e[r] = n[r]);
        return e;
      }
      function Rt(t) {
        var n = kt(t);
        for (var e in t) {
          if (rt(t[e]))
            n["x" === e || "y" === e ? "attr" + e.toUpperCase() : e] = t[e];
        }
        return n;
      }
      function Mt(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var Dt = function (t) {
        return Array.isArray(t);
      };
      function Ot(t) {
        var n,
          e = rt(t) ? t.get() : t;
        return (
          (n = e),
          Boolean(n && "object" === typeof n && n.mix && n.toValue)
            ? e.toValue()
            : e
        );
      }
      function jt(t, n, e, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          u = { latestValues: Ft(n, e, r, o), renderState: i() };
        return (
          a &&
            (u.mount = function (t) {
              return a(n, t, u);
            }),
          u
        );
      }
      var Bt = function (t) {
        return function (n, e) {
          var r = o.useContext(E),
            i = o.useContext(A);
          return e
            ? jt(t, n, r, i)
            : P(function () {
                return jt(t, n, r, i);
              });
        };
      };
      function Ft(t, n, e, o) {
        var i = {},
          a = !1 === (null === e || void 0 === e ? void 0 : e.initial),
          u = o(t);
        for (var s in u) i[s] = Ot(u[s]);
        var c = t.initial,
          l = t.animate,
          f = I(t),
          d = U(t);
        n &&
          d &&
          !f &&
          !1 !== t.inherit &&
          ((null !== c && void 0 !== c) || (c = n.initial),
          (null !== l && void 0 !== l) || (l = n.animate));
        var v = a || !1 === c ? l : c;
        v &&
          "boolean" !== typeof v &&
          !Mt(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (n) {
            var e = B(t, n);
            if (e) {
              var o = e.transitionEnd;
              e.transition;
              var a = r.__rest(e, ["transitionEnd", "transition"]);
              for (var u in a) i[u] = a[u];
              for (var u in o) i[u] = o[u];
            }
          });
        return i;
      }
      var It = {
        useVisualState: Bt({
          scrapeMotionValuesFromProps: Rt,
          createRenderState: At,
          onMount: function (t, n, e) {
            var r = e.renderState,
              o = e.latestValues;
            try {
              r.dimensions =
                "function" === typeof n.getBBox
                  ? n.getBBox()
                  : n.getBoundingClientRect();
            } catch (i) {
              r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            "path" === n.tagName && (r.totalPathLength = n.getTotalLength()),
              bt(
                r,
                o,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              Lt(n, r);
          },
        }),
      };
      var Ut,
        Ht = {
          useVisualState: Bt({
            scrapeMotionValuesFromProps: kt,
            createRenderState: lt,
          }),
        };
      function Xt(t, n, e, o) {
        var i = n.forwardMotionProps,
          a = void 0 !== i && i,
          u = W(t) ? It : Ht;
        return r.__assign(r.__assign({}, u), {
          preloadedFeatures: e,
          useRender: St(a),
          createVisualElement: o,
          Component: t,
        });
      }
      function Yt(t, n, e, r) {
        return (
          t.addEventListener(n, e, r),
          function () {
            return t.removeEventListener(n, e, r);
          }
        );
      }
      function zt(t, n, e, r) {
        o.useEffect(
          function () {
            var o = t.current;
            if (e && o) return Yt(o, n, e, r);
          },
          [t, n, e, r]
        );
      }
      function Nt(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Wt(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.Exit = "exit");
      })(Ut || (Ut = {}));
      var Zt = { pageX: 0, pageY: 0 };
      function Kt(t, n) {
        void 0 === n && (n = "page");
        var e = t.touches[0] || t.changedTouches[0] || Zt;
        return { x: e[n + "X"], y: e[n + "Y"] };
      }
      function Gt(t, n) {
        return void 0 === n && (n = "page"), { x: t[n + "X"], y: t[n + "Y"] };
      }
      function $t(t, n) {
        return (
          void 0 === n && (n = "page"), { point: Wt(t) ? Kt(t, n) : Gt(t, n) }
        );
      }
      var qt = function (t, n) {
          void 0 === n && (n = !1);
          var e,
            r = function (n) {
              return t(n, $t(n));
            };
          return n
            ? ((e = r),
              function (t) {
                var n = t instanceof MouseEvent;
                (!n || (n && 0 === t.button)) && e(t);
              })
            : r;
        },
        Jt = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Qt = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function tn(t) {
        return k && null === window.onpointerdown
          ? t
          : k && null === window.ontouchstart
          ? Qt[t]
          : k && null === window.onmousedown
          ? Jt[t]
          : t;
      }
      function nn(t, n, e, r) {
        return Yt(t, tn(n), qt(e, "pointerdown" === n), r);
      }
      function en(t, n, e, r) {
        return zt(t, tn(n), e && qt(e, "pointerdown" === n), r);
      }
      function rn(t) {
        var n = null;
        return function () {
          return (
            null === n &&
            ((n = t),
            function () {
              n = null;
            })
          );
        };
      }
      var on = rn("dragHorizontal"),
        an = rn("dragVertical");
      function un(t) {
        var n = !1;
        if ("y" === t) n = an();
        else if ("x" === t) n = on();
        else {
          var e = on(),
            r = an();
          e && r
            ? (n = function () {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return n;
      }
      function sn() {
        var t = un(!0);
        return !t || (t(), !1);
      }
      function cn(t, n, e) {
        return function (r, o) {
          var i;
          Nt(r) &&
            !sn() &&
            (null === e || void 0 === e || e(r, o),
            null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(Ut.Hover, n));
        };
      }
      var ln = function (t, n) {
        return !!n && (t === n || ln(t, n.parentElement));
      };
      function fn(t) {
        return o.useEffect(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var dn = function (t) {
          return function (n) {
            return t(n), null;
          };
        },
        vn = {
          tap: dn(function (t) {
            var n = t.onTap,
              e = t.onTapStart,
              r = t.onTapCancel,
              i = t.whileTap,
              a = t.visualElement,
              s = n || e || r || i,
              c = o.useRef(!1),
              l = o.useRef(null);
            function f() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function d() {
              var t;
              return (
                f(),
                (c.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(Ut.Tap, !1),
                !sn()
              );
            }
            function v(t, e) {
              d() &&
                (ln(a.getInstance(), t.target)
                  ? null === n || void 0 === n || n(t, e)
                  : null === r || void 0 === r || r(t, e));
            }
            function p(t, n) {
              d() && (null === r || void 0 === r || r(t, n));
            }
            en(
              a,
              "pointerdown",
              s
                ? function (t, n) {
                    var r;
                    f(),
                      c.current ||
                        ((c.current = !0),
                        (l.current = u.pipe(
                          nn(window, "pointerup", v),
                          nn(window, "pointercancel", p)
                        )),
                        null === e || void 0 === e || e(t, n),
                        null === (r = a.animationState) ||
                          void 0 === r ||
                          r.setActive(Ut.Tap, !0));
                  }
                : void 0
            ),
              fn(f);
          }),
          focus: dn(function (t) {
            var n = t.whileFocus,
              e = t.visualElement;
            zt(
              e,
              "focus",
              n
                ? function () {
                    var t;
                    null === (t = e.animationState) ||
                      void 0 === t ||
                      t.setActive(Ut.Focus, !0);
                  }
                : void 0
            ),
              zt(
                e,
                "blur",
                n
                  ? function () {
                      var t;
                      null === (t = e.animationState) ||
                        void 0 === t ||
                        t.setActive(Ut.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: dn(function (t) {
            var n = t.onHoverStart,
              e = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            en(o, "pointerenter", n || r ? cn(o, !0, n) : void 0),
              en(o, "pointerleave", e || r ? cn(o, !1, e) : void 0);
          }),
        };
      function pn(t, n) {
        if (!Array.isArray(n)) return !1;
        var e = n.length;
        if (e !== t.length) return !1;
        for (var r = 0; r < e; r++) if (n[r] !== t[r]) return !1;
        return !0;
      }
      var mn = function (t) {
          return 1e3 * t;
        },
        gn = {
          linear: u.linear,
          easeIn: u.easeIn,
          easeInOut: u.easeInOut,
          easeOut: u.easeOut,
          circIn: u.circIn,
          circInOut: u.circInOut,
          circOut: u.circOut,
          backIn: u.backIn,
          backInOut: u.backInOut,
          backOut: u.backOut,
          anticipate: u.anticipate,
          bounceIn: u.bounceIn,
          bounceInOut: u.bounceInOut,
          bounceOut: u.bounceOut,
        },
        yn = function (t) {
          if (Array.isArray(t)) {
            i.invariant(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var n = r.__read(t, 4),
              e = n[0],
              o = n[1],
              a = n[2],
              s = n[3];
            return u.cubicBezier(e, o, a, s);
          }
          return "string" === typeof t
            ? (i.invariant(void 0 !== gn[t], "Invalid easing type '" + t + "'"),
              gn[t])
            : t;
        },
        hn = function (t, n) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof n && !Array.isArray(n)) ||
              !(
                "string" !== typeof n ||
                !a.complex.test(n) ||
                n.startsWith("url(")
              ))
          );
        },
        xn = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        _n = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restDelta: 0.01,
            restSpeed: 10,
          };
        },
        En = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        bn = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        An = {
          x: xn,
          y: xn,
          z: xn,
          rotate: xn,
          rotateX: xn,
          rotateY: xn,
          rotateZ: xn,
          scaleX: _n,
          scaleY: _n,
          scale: _n,
          opacity: En,
          backgroundColor: En,
          color: En,
          default: _n,
        },
        Pn = r.__assign(r.__assign({}, st), {
          color: a.color,
          backgroundColor: a.color,
          outlineColor: a.color,
          fill: a.color,
          stroke: a.color,
          borderColor: a.color,
          borderTopColor: a.color,
          borderRightColor: a.color,
          borderBottomColor: a.color,
          borderLeftColor: a.color,
          filter: a.filter,
          WebkitFilter: a.filter,
        }),
        Sn = function (t) {
          return Pn[t];
        };
      function wn(t, n) {
        var e,
          r = Sn(t);
        return (
          r !== a.filter && (r = a.complex),
          null === (e = r.getAnimatableNone) || void 0 === e
            ? void 0
            : e.call(r, n)
        );
      }
      var Cn = !1;
      function Tn(t) {
        var n = t.ease,
          e = t.times,
          o = t.yoyo,
          a = t.flip,
          u = t.loop,
          s = r.__rest(t, ["ease", "times", "yoyo", "flip", "loop"]),
          c = r.__assign({}, s);
        return (
          e && (c.offset = e),
          s.duration && (c.duration = mn(s.duration)),
          s.repeatDelay && (c.repeatDelay = mn(s.repeatDelay)),
          n &&
            (c.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(n)
              ? n.map(yn)
              : yn(n)),
          "tween" === s.type && (c.type = "keyframes"),
          (o || u || a) &&
            (i.warning(
              !Cn,
              "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
            ),
            (Cn = !0),
            o
              ? (c.repeatType = "reverse")
              : u
              ? (c.repeatType = "loop")
              : a && (c.repeatType = "mirror"),
            (c.repeat = u || o || a || s.repeat)),
          "spring" !== s.type && (c.type = "keyframes"),
          c
        );
      }
      function Vn(t, n, e) {
        var o;
        return (
          Array.isArray(n.to) &&
            ((null !== (o = t.duration) && void 0 !== o) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = r.__spreadArray([], r.__read(t.to))),
              (t.to[0] = t.from));
          })(n),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var n = r.__rest(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(n).length;
          })(t) ||
            (t = r.__assign(
              r.__assign({}, t),
              (function (t, n) {
                var e;
                return (
                  (e = Dt(n) ? bn : An[t] || An.default),
                  r.__assign({ to: n }, e(n))
                );
              })(e, n.to)
            )),
          r.__assign(r.__assign({}, n), Tn(t))
        );
      }
      function Ln(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function kn(t) {
        return "number" === typeof t ? 0 : wn("", t);
      }
      function Rn(t, n) {
        return t[n] || t.default || t;
      }
      function Mn(t, n, e, o) {
        return (
          void 0 === o && (o = {}),
          n.start(function (a) {
            var s,
              c,
              l = (function (t, n, e, o, a) {
                var s,
                  c = Rn(o, t),
                  l = null !== (s = c.from) && void 0 !== s ? s : n.get(),
                  f = hn(t, e);
                "none" === l && f && "string" === typeof e
                  ? (l = wn(t, e))
                  : Ln(l) && "string" === typeof e
                  ? (l = kn(e))
                  : !Array.isArray(e) &&
                    Ln(e) &&
                    "string" === typeof l &&
                    (e = kn(l));
                var d = hn(t, l);
                return (
                  i.warning(
                    d === f,
                    "You are trying to animate " +
                      t +
                      ' from "' +
                      l +
                      '" to "' +
                      e +
                      '". ' +
                      l +
                      " is not an animatable value - to enable this animation set " +
                      l +
                      " to a value animatable to " +
                      e +
                      " via the `style` property."
                  ),
                  d && f && !1 !== c.type
                    ? function () {
                        var o = {
                          from: l,
                          to: e,
                          velocity: n.getVelocity(),
                          onComplete: a,
                          onUpdate: function (t) {
                            return n.set(t);
                          },
                        };
                        return "inertia" === c.type || "decay" === c.type
                          ? u.inertia(r.__assign(r.__assign({}, o), c))
                          : u.animate(
                              r.__assign(r.__assign({}, Vn(c, o, t)), {
                                onUpdate: function (t) {
                                  var n;
                                  o.onUpdate(t),
                                    null === (n = c.onUpdate) ||
                                      void 0 === n ||
                                      n.call(c, t);
                                },
                                onComplete: function () {
                                  var t;
                                  o.onComplete(),
                                    null === (t = c.onComplete) ||
                                      void 0 === t ||
                                      t.call(c);
                                },
                              })
                            );
                      }
                    : function () {
                        var t;
                        return (
                          n.set(e),
                          a(),
                          null ===
                            (t =
                              null === c || void 0 === c
                                ? void 0
                                : c.onComplete) ||
                            void 0 === t ||
                            t.call(c),
                          { stop: function () {} }
                        );
                      }
                );
              })(t, n, e, o, a),
              f = (function (t, n) {
                var e;
                return null !== (e = (Rn(t, n) || {}).delay) && void 0 !== e
                  ? e
                  : 0;
              })(o, t),
              d = function () {
                return (c = l());
              };
            return (
              f ? (s = setTimeout(d, mn(f))) : d(),
              function () {
                clearTimeout(s), null === c || void 0 === c || c.stop();
              }
            );
          })
        );
      }
      function Dn(t, n) {
        -1 === t.indexOf(n) && t.push(n);
      }
      function On(t, n) {
        var e = t.indexOf(n);
        e > -1 && t.splice(e, 1);
      }
      var jn = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var n = this;
              return (
                Dn(this.subscriptions, t),
                function () {
                  return On(n.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, n, e) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, n, e);
                else
                  for (var o = 0; o < r; o++) {
                    var i = this.subscriptions[o];
                    i && i(t, n, e);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        Bn = (function () {
          function t(t) {
            var n,
              e = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new jn()),
              (this.velocityUpdateSubscribers = new jn()),
              (this.renderSubscribers = new jn()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0), (e.prev = e.current), (e.current = t);
                var r = s.getFrameData(),
                  o = r.delta,
                  i = r.timestamp;
                e.lastUpdated !== i &&
                  ((e.timeDelta = o),
                  (e.lastUpdated = i),
                  v.default.postRender(e.scheduleVelocityCheck)),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  e.velocityUpdateSubscribers.getSize() &&
                    e.velocityUpdateSubscribers.notify(e.getVelocity()),
                  n && e.renderSubscribers.notify(e.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return v.default.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated &&
                  ((e.prev = e.current),
                  e.velocityUpdateSubscribers.notify(e.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, n) {
              void 0 === n && (n = !0),
                n && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, n);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? u.velocityPerSecond(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var n = this;
              return (
                this.stop(),
                new Promise(function (e) {
                  (n.hasAnimated = !0), (n.stopAnimation = t(e));
                }).then(function () {
                  return n.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function Fn(t) {
        return new Bn(t);
      }
      var In = function (t) {
          return function (n) {
            return n.test(t);
          };
        },
        Un = [
          a.number,
          a.px,
          a.percent,
          a.degrees,
          a.vw,
          a.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        Hn = function (t) {
          return Un.find(In(t));
        },
        Xn = r.__spreadArray(r.__spreadArray([], r.__read(Un)), [
          a.color,
          a.complex,
        ]),
        Yn = function (t) {
          return Xn.find(In(t));
        };
      function zn(t, n, e) {
        t.hasValue(n) ? t.getValue(n).set(e) : t.addValue(n, Fn(e));
      }
      function Nn(t, n) {
        var e = F(t, n),
          o = e ? t.makeTargetAnimatable(e, !1) : {},
          i = o.transitionEnd,
          a = void 0 === i ? {} : i;
        o.transition;
        var u,
          s = r.__rest(o, ["transitionEnd", "transition"]);
        for (var c in (s = r.__assign(r.__assign({}, s), a))) {
          zn(t, c, ((u = s[c]), Dt(u) ? u[u.length - 1] || 0 : u));
        }
      }
      function Wn(t, n) {
        r.__spreadArray([], r.__read(n))
          .reverse()
          .forEach(function (e) {
            var r,
              o = t.getVariant(e);
            o && Nn(t, o),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function (t) {
                  Wn(t, n);
                });
          });
      }
      function Zn(t, n, e) {
        var r,
          o,
          i,
          u,
          s = Object.keys(n).filter(function (n) {
            return !t.hasValue(n);
          }),
          c = s.length;
        if (c)
          for (var l = 0; l < c; l++) {
            var f = s[l],
              d = n[f],
              v = null;
            Array.isArray(d) && (v = d[0]),
              null === v &&
                (v =
                  null !==
                    (o =
                      null !== (r = e[f]) && void 0 !== r
                        ? r
                        : t.readValue(f)) && void 0 !== o
                    ? o
                    : n[f]),
              void 0 !== v &&
                null !== v &&
                ("string" === typeof v && /^\-?\d*\.?\d+$/.test(v)
                  ? (v = parseFloat(v))
                  : !Yn(v) && a.complex.test(d) && (v = wn(f, d)),
                t.addValue(f, Fn(v)),
                (null !== (i = (u = e)[f]) && void 0 !== i) || (u[f] = v),
                t.setBaseTarget(f, v));
          }
      }
      function Kn(t, n) {
        if (n) return (n[t] || n.default || n).from;
      }
      function Gn(t, n, e) {
        var r,
          o,
          i = {};
        for (var a in t)
          i[a] =
            null !== (r = Kn(a, n)) && void 0 !== r
              ? r
              : null === (o = e.getValue(a)) || void 0 === o
              ? void 0
              : o.get();
        return i;
      }
      function $n(t, n, e) {
        var r;
        if (
          (void 0 === e && (e = {}), t.notifyAnimationStart(), Array.isArray(n))
        ) {
          var o = n.map(function (n) {
            return qn(t, n, e);
          });
          r = Promise.all(o);
        } else if ("string" === typeof n) r = qn(t, n, e);
        else {
          var i = "function" === typeof n ? F(t, n, e.custom) : n;
          r = Jn(t, i, e);
        }
        return r.then(function () {
          return t.notifyAnimationComplete(n);
        });
      }
      function qn(t, n, e) {
        var o;
        void 0 === e && (e = {});
        var i = F(t, n, e.custom),
          a = (i || {}).transition,
          u = void 0 === a ? t.getDefaultTransition() || {} : a;
        e.transitionOverride && (u = e.transitionOverride);
        var s = i
            ? function () {
                return Jn(t, i, e);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size
          )
            ? function (o) {
                void 0 === o && (o = 0);
                var i = u.delayChildren,
                  a = void 0 === i ? 0 : i,
                  s = u.staggerChildren,
                  c = u.staggerDirection;
                return (function (t, n, e, o, i, a) {
                  void 0 === e && (e = 0);
                  void 0 === o && (o = 0);
                  void 0 === i && (i = 1);
                  var u = [],
                    s = (t.variantChildren.size - 1) * o,
                    c =
                      1 === i
                        ? function (t) {
                            return void 0 === t && (t = 0), t * o;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), s - t * o;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Qn)
                      .forEach(function (t, o) {
                        u.push(
                          qn(
                            t,
                            n,
                            r.__assign(r.__assign({}, a), { delay: e + c(o) })
                          ).then(function () {
                            return t.notifyAnimationComplete(n);
                          })
                        );
                      }),
                    Promise.all(u)
                  );
                })(t, n, a + o, s, c, e);
              }
            : function () {
                return Promise.resolve();
              },
          l = u.when;
        if (l) {
          var f = r.__read("beforeChildren" === l ? [s, c] : [c, s], 2),
            d = f[0],
            v = f[1];
          return d().then(v);
        }
        return Promise.all([s(), c(e.delay)]);
      }
      function Jn(t, n, e) {
        var o,
          i = void 0 === e ? {} : e,
          a = i.delay,
          u = void 0 === a ? 0 : a,
          s = i.transitionOverride,
          c = i.type,
          l = t.makeTargetAnimatable(n),
          f = l.transition,
          d = void 0 === f ? t.getDefaultTransition() : f,
          v = l.transitionEnd,
          p = r.__rest(l, ["transition", "transitionEnd"]);
        s && (d = s);
        var m = [],
          g =
            c &&
            (null === (o = t.animationState) || void 0 === o
              ? void 0
              : o.getState()[c]);
        for (var y in p) {
          var h = t.getValue(y),
            x = p[y];
          if (!(!h || void 0 === x || (g && te(g, y)))) {
            var _ = Mn(y, h, x, r.__assign({ delay: u }, d));
            m.push(_);
          }
        }
        return Promise.all(m).then(function () {
          v && Nn(t, v);
        });
      }
      function Qn(t, n) {
        return t.sortNodePosition(n);
      }
      function te(t, n) {
        var e = t.protectedKeys,
          r = t.needsAnimating,
          o = e.hasOwnProperty(n) && !0 !== r[n];
        return (r[n] = !1), o;
      }
      var ne = [Ut.Animate, Ut.Hover, Ut.Tap, Ut.Drag, Ut.Focus, Ut.Exit],
        ee = r.__spreadArray([], r.__read(ne)).reverse(),
        re = ne.length;
      function oe(t) {
        var n = (function (t) {
            return function (n) {
              return Promise.all(
                n.map(function (n) {
                  var e = n.animation,
                    r = n.options;
                  return $n(t, e, r);
                })
              );
            };
          })(t),
          e = (function () {
            var t;
            return (
              ((t = {})[Ut.Animate] = ie(!0)),
              (t[Ut.Hover] = ie()),
              (t[Ut.Tap] = ie()),
              (t[Ut.Drag] = ie()),
              (t[Ut.Focus] = ie()),
              (t[Ut.Exit] = ie()),
              t
            );
          })(),
          o = {},
          i = !0,
          a = function (n, e) {
            var o = F(t, e);
            if (o) {
              o.transition;
              var i = o.transitionEnd,
                a = r.__rest(o, ["transition", "transitionEnd"]);
              n = r.__assign(r.__assign(r.__assign({}, n), a), i);
            }
            return n;
          };
        function u(u, s) {
          for (
            var c,
              l = t.getProps(),
              f = t.getVariantContext(!0) || {},
              d = [],
              v = new Set(),
              p = {},
              m = 1 / 0,
              g = function (n) {
                var o = ee[n],
                  g = e[o],
                  y = null !== (c = l[o]) && void 0 !== c ? c : f[o],
                  h = j(y),
                  x = o === s ? g.isActive : null;
                !1 === x && (m = n);
                var _ = y === f[o] && y !== l[o] && h;
                if (
                  (_ && i && t.manuallyAnimateOnMount && (_ = !1),
                  (g.protectedKeys = r.__assign({}, p)),
                  (!g.isActive && null === x) ||
                    (!y && !g.prevProp) ||
                    Mt(y) ||
                    "boolean" === typeof y)
                )
                  return "continue";
                var E =
                    (function (t, n) {
                      if ("string" === typeof n) return n !== t;
                      if (O(n)) return !pn(n, t);
                      return !1;
                    })(g.prevProp, y) ||
                    (o === s && g.isActive && !_ && h) ||
                    (n > m && h),
                  b = Array.isArray(y) ? y : [y],
                  A = b.reduce(a, {});
                !1 === x && (A = {});
                var P = g.prevResolvedValues,
                  S = void 0 === P ? {} : P,
                  w = r.__assign(r.__assign({}, S), A),
                  C = function (t) {
                    (E = !0), v.delete(t), (g.needsAnimating[t] = !0);
                  };
                for (var T in w) {
                  var V = A[T],
                    L = S[T];
                  p.hasOwnProperty(T) ||
                    (V !== L
                      ? Dt(V) && Dt(L)
                        ? pn(V, L)
                          ? (g.protectedKeys[T] = !0)
                          : C(T)
                        : void 0 !== V
                        ? C(T)
                        : v.add(T)
                      : void 0 !== V && v.has(T)
                      ? C(T)
                      : (g.protectedKeys[T] = !0));
                }
                (g.prevProp = y),
                  (g.prevResolvedValues = A),
                  g.isActive && (p = r.__assign(r.__assign({}, p), A)),
                  i && t.blockInitialAnimation && (E = !1),
                  E &&
                    !_ &&
                    d.push.apply(
                      d,
                      r.__spreadArray(
                        [],
                        r.__read(
                          b.map(function (t) {
                            return {
                              animation: t,
                              options: r.__assign({ type: o }, u),
                            };
                          })
                        )
                      )
                    );
              },
              y = 0;
            y < re;
            y++
          )
            g(y);
          if (((o = r.__assign({}, p)), v.size)) {
            var h = {};
            v.forEach(function (n) {
              var e = t.getBaseTarget(n);
              void 0 !== e && (h[n] = e);
            }),
              d.push({ animation: h });
          }
          var x = Boolean(d.length);
          return (
            i && !1 === l.initial && !t.manuallyAnimateOnMount && (x = !1),
            (i = !1),
            x ? n(d) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== o[t];
          },
          animateChanges: u,
          setActive: function (n, r, o) {
            var i;
            return e[n].isActive === r
              ? Promise.resolve()
              : (null === (i = t.variantChildren) ||
                  void 0 === i ||
                  i.forEach(function (t) {
                    var e;
                    return null === (e = t.animationState) || void 0 === e
                      ? void 0
                      : e.setActive(n, r);
                  }),
                (e[n].isActive = r),
                u(o, n));
          },
          setAnimateFunction: function (e) {
            n = e(t);
          },
          getState: function () {
            return e;
          },
        };
      }
      function ie(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var ae = {
          animation: dn(function (t) {
            var n = t.visualElement,
              e = t.animate;
            n.animationState || (n.animationState = oe(n)),
              Mt(e) &&
                o.useEffect(
                  function () {
                    return e.subscribe(n);
                  },
                  [e]
                );
          }),
          exit: dn(function (t) {
            var n = t.custom,
              e = t.visualElement,
              i = r.__read(S(), 2),
              a = i[0],
              u = i[1],
              s = o.useContext(A);
            o.useEffect(
              function () {
                var t,
                  r,
                  o =
                    null === (t = e.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(Ut.Exit, !a, {
                          custom:
                            null !==
                              (r =
                                null === s || void 0 === s
                                  ? void 0
                                  : s.custom) && void 0 !== r
                              ? r
                              : n,
                        });
                !a && (null === o || void 0 === o || o.then(u));
              },
              [a]
            );
          }),
        },
        ue = (function () {
          function t(t, n, e) {
            var o = this,
              i = (void 0 === e ? {} : e).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (o.lastMoveEvent && o.lastMoveEventInfo) {
                  var t = le(o.lastMoveEventInfo, o.history),
                    n = null !== o.startEvent,
                    e = u.distance(t.offset, { x: 0, y: 0 }) >= 3;
                  if (n || e) {
                    var i = t.point,
                      a = s.getFrameData().timestamp;
                    o.history.push(
                      r.__assign(r.__assign({}, i), { timestamp: a })
                    );
                    var c = o.handlers,
                      l = c.onStart,
                      f = c.onMove;
                    n ||
                      (l && l(o.lastMoveEvent, t),
                      (o.startEvent = o.lastMoveEvent)),
                      f && f(o.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, n) {
                (o.lastMoveEvent = t),
                  (o.lastMoveEventInfo = se(n, o.transformPagePoint)),
                  Nt(t) && 0 === t.buttons
                    ? o.handlePointerUp(t, n)
                    : v.default.update(o.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, n) {
                o.end();
                var e = o.handlers,
                  r = e.onEnd,
                  i = e.onSessionEnd,
                  a = le(se(n, o.transformPagePoint), o.history);
                o.startEvent && r && r(t, a), i && i(t, a);
              }),
              !(Wt(t) && t.touches.length > 1))
            ) {
              (this.handlers = n), (this.transformPagePoint = i);
              var a = se($t(t), this.transformPagePoint),
                c = a.point,
                l = s.getFrameData().timestamp;
              this.history = [r.__assign(r.__assign({}, c), { timestamp: l })];
              var f = n.onSessionStart;
              f && f(t, le(a, this.history)),
                (this.removeListeners = u.pipe(
                  nn(window, "pointermove", this.handlePointerMove),
                  nn(window, "pointerup", this.handlePointerUp),
                  nn(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                s.cancelSync.update(this.updatePoint);
            }),
            t
          );
        })();
      function se(t, n) {
        return n ? { point: n(t.point) } : t;
      }
      function ce(t, n) {
        return { x: t.x - n.x, y: t.y - n.y };
      }
      function le(t, n) {
        var e = t.point;
        return {
          point: e,
          delta: ce(e, de(n)),
          offset: ce(e, fe(n)),
          velocity: ve(n, 0.1),
        };
      }
      function fe(t) {
        return t[0];
      }
      function de(t) {
        return t[t.length - 1];
      }
      function ve(t, n) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var e = t.length - 1, r = null, o = de(t);
          e >= 0 && ((r = t[e]), !(o.timestamp - r.timestamp > mn(n)));

        )
          e--;
        if (!r) return { x: 0, y: 0 };
        var i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function pe(t) {
        return t;
      }
      function me(t) {
        var n = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: n, max: t.bottom },
        };
      }
      function ge() {
        return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
      }
      var ye = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function he() {
        return { x: r.__assign({}, ye), y: r.__assign({}, ye) };
      }
      function xe(t) {
        return [t("x"), t("y")];
      }
      function _e(t, n, e) {
        return (
          void 0 === n && (n = 0),
          void 0 === e && (e = 0.01),
          u.distance(t, n) < e
        );
      }
      function Ee(t) {
        return t.max - t.min;
      }
      function be(t, n) {
        var e,
          r = 0.5,
          o = Ee(t),
          i = Ee(n);
        return (
          i > o
            ? (r = u.progress(n.min, n.max - o, t.min))
            : o > i && (r = u.progress(t.min, t.max - i, n.min)),
          (e = r),
          u.clamp(0, 1, e)
        );
      }
      function Ae(t, n, e, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = u.mix(n.min, n.max, t.origin)),
          (t.scale = Ee(e) / Ee(n)),
          _e(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = u.mix(e.min, e.max, t.origin) - t.originPoint),
          _e(t.translate) && (t.translate = 0);
      }
      function Pe(t, n, e, r) {
        Ae(t.x, n.x, e.x, Se(r.originX)), Ae(t.y, n.y, e.y, Se(r.originY));
      }
      function Se(t) {
        return "number" === typeof t ? t : 0.5;
      }
      function we(t, n, e) {
        (t.min = e.min + n.min), (t.max = t.min + Ee(n));
      }
      function Ce(t, n, e) {
        var r = n.min,
          o = n.max;
        return (
          void 0 !== r && t < r
            ? (t = e ? u.mix(r, t, e.min) : Math.max(t, r))
            : void 0 !== o &&
              t > o &&
              (t = e ? u.mix(o, t, e.max) : Math.min(t, o)),
          t
        );
      }
      function Te(t, n, e) {
        return {
          min: void 0 !== n ? t.min + n : void 0,
          max: void 0 !== e ? t.max + e - (t.max - t.min) : void 0,
        };
      }
      function Ve(t, n) {
        var e,
          o = n.min - t.min,
          i = n.max - t.max;
        return (
          n.max - n.min < t.max - t.min &&
            ((o = (e = r.__read([i, o], 2))[0]), (i = e[1])),
          { min: t.min + o, max: t.min + i }
        );
      }
      function Le(t, n, e) {
        return { min: ke(t, n), max: ke(t, e) };
      }
      function ke(t, n) {
        var e;
        return "number" === typeof t
          ? t
          : null !== (e = t[n]) && void 0 !== e
          ? e
          : 0;
      }
      function Re(t, n) {
        return me(
          (function (t, n) {
            var e = t.top,
              r = t.left,
              o = t.bottom,
              i = t.right;
            void 0 === n && (n = pe);
            var a = n({ x: r, y: e }),
              u = n({ x: i, y: o });
            return { top: a.y, left: a.x, bottom: u.y, right: u.x };
          })(t.getBoundingClientRect(), n)
        );
      }
      var Me = function (t, n) {
        return t.depth - n.depth;
      };
      function De(t) {
        return t.projection.isEnabled || t.shouldResetTransform();
      }
      function Oe(t, n) {
        void 0 === n && (n = []);
        var e = t.parent;
        return e && Oe(e, n), De(t) && n.push(t), n;
      }
      function je(t) {
        if (!t.shouldResetTransform()) {
          var n,
            e = t.getLayoutState();
          t.notifyBeforeLayoutMeasure(e.layout),
            (e.isHydrated = !0),
            (e.layout = t.measureViewportBox()),
            (e.layoutCorrected =
              ((n = e.layout),
              { x: r.__assign({}, n.x), y: r.__assign({}, n.y) })),
            t.notifyLayoutMeasure(e.layout, t.prevViewportBox || e.layout),
            v.default.update(function () {
              return t.rebaseProjectionTarget();
            });
        }
      }
      function Be(t) {
        t.shouldResetTransform() ||
          ((t.prevViewportBox = t.measureViewportBox(!1)),
          t.rebaseProjectionTarget(!1, t.prevViewportBox));
      }
      function Fe(t, n) {
        return { min: n.min - t.min, max: n.max - t.min };
      }
      function Ie(t, n) {
        return { x: Fe(t.x, n.x), y: Fe(t.y, n.y) };
      }
      function Ue(t, n) {
        var e = t.getLayoutId(),
          r = n.getLayoutId();
        return e !== r || (void 0 === r && t !== n);
      }
      function He(t) {
        var n = t.getProps(),
          e = n.drag,
          r = n._dragX;
        return e && !r;
      }
      function Xe(t, n) {
        (t.min = n.min), (t.max = n.max);
      }
      function Ye(t, n, e) {
        return e + n * (t - e);
      }
      function ze(t, n, e, r, o) {
        return void 0 !== o && (t = Ye(t, o, r)), Ye(t, e, r) + n;
      }
      function Ne(t, n, e, r, o) {
        void 0 === n && (n = 0),
          void 0 === e && (e = 1),
          (t.min = ze(t.min, n, e, r, o)),
          (t.max = ze(t.max, n, e, r, o));
      }
      function We(t, n) {
        var e = n.x,
          r = n.y;
        Ne(t.x, e.translate, e.scale, e.originPoint),
          Ne(t.y, r.translate, r.scale, r.originPoint);
      }
      function Ze(t, n, e, o) {
        var i = r.__read(o, 3),
          a = i[0],
          s = i[1],
          c = i[2];
        (t.min = n.min), (t.max = n.max);
        var l = void 0 !== e[c] ? e[c] : 0.5,
          f = u.mix(n.min, n.max, l);
        Ne(t, e[a], e[s], f, e.scale);
      }
      var Ke = ["x", "scaleX", "originX"],
        Ge = ["y", "scaleY", "originY"];
      function $e(t, n, e) {
        Ze(t.x, n.x, e, Ke), Ze(t.y, n.y, e, Ge);
      }
      function qe(t, n, e, r, o) {
        return (
          (t = Ye((t -= n), 1 / e, r)), void 0 !== o && (t = Ye(t, 1 / o, r)), t
        );
      }
      function Je(t, n, e) {
        var o = r.__read(e, 3),
          i = o[0],
          a = o[1],
          s = o[2];
        !(function (t, n, e, r, o) {
          void 0 === n && (n = 0),
            void 0 === e && (e = 1),
            void 0 === r && (r = 0.5);
          var i = u.mix(t.min, t.max, r) - n;
          (t.min = qe(t.min, n, e, i, o)), (t.max = qe(t.max, n, e, i, o));
        })(t, n[i], n[a], n[s], n.scale);
      }
      function Qe(t, n) {
        Je(t.x, n, Ke), Je(t.y, n, Ge);
      }
      var tr = new Set();
      function nr(t, n, e) {
        t[e] || (t[e] = []), t[e].push(n);
      }
      function er(t) {
        return (
          tr.add(t),
          function () {
            return tr.delete(t);
          }
        );
      }
      function rr() {
        if (tr.size) {
          var t = 0,
            n = [[]],
            e = [],
            r = function (e) {
              return nr(n, e, t);
            },
            o = function (n) {
              nr(e, n, t), t++;
            };
          tr.forEach(function (n) {
            n(r, o), (t = 0);
          }),
            tr.clear();
          for (var i = e.length, a = 0; a <= i; a++)
            n[a] && n[a].forEach(ir), e[a] && e[a].forEach(ir);
        }
      }
      var or,
        ir = function (t) {
          return t();
        },
        ar = new WeakMap(),
        ur = (function () {
          function t(t) {
            var n = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.elastic = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = n),
              this.visualElement.enableLayoutProjection(),
              ar.set(n, this);
          }
          return (
            (t.prototype.start = function (t, n) {
              var e = this,
                o = void 0 === n ? {} : n,
                i = o.snapToCursor,
                a = void 0 !== i && i,
                c = o.cursorProgress,
                l = this.props.transformPagePoint;
              this.panSession = new ue(
                t,
                {
                  onSessionStart: function (t) {
                    var n;
                    e.stopMotion();
                    var o = (function (t) {
                      return $t(t, "client");
                    })(t).point;
                    null === (n = e.cancelLayout) || void 0 === n || n.call(e),
                      (e.cancelLayout = er(function (t, n) {
                        var i = Oe(e.visualElement),
                          l = (function (t) {
                            var n = [],
                              e = function (t) {
                                De(t) && n.push(t), t.children.forEach(e);
                              };
                            return t.children.forEach(e), n.sort(Me);
                          })(e.visualElement),
                          f = r.__spreadArray(
                            r.__spreadArray([], r.__read(i)),
                            r.__read(l)
                          ),
                          d = !1;
                        e.isLayoutDrag() &&
                          e.visualElement.lockProjectionTarget(),
                          n(function () {
                            f.forEach(function (t) {
                              return t.resetTransform();
                            });
                          }),
                          t(function () {
                            je(e.visualElement), l.forEach(je);
                          }),
                          n(function () {
                            f.forEach(function (t) {
                              return t.restoreTransform();
                            }),
                              a && (d = e.snapToCursor(o));
                          }),
                          t(function () {
                            Boolean(
                              e.getAxisMotionValue("x") && !e.isExternalDrag()
                            ) ||
                              e.visualElement.rebaseProjectionTarget(
                                !0,
                                e.visualElement.measureViewportBox(!1)
                              ),
                              e.visualElement.scheduleUpdateLayoutProjection();
                            var t = e.visualElement.projection;
                            xe(function (n) {
                              if (!d) {
                                var r = t.target[n],
                                  i = r.min,
                                  a = r.max;
                                e.cursorProgress[n] = c
                                  ? c[n]
                                  : u.progress(i, a, o[n]);
                              }
                              var s = e.getAxisMotionValue(n);
                              s && (e.originPoint[n] = s.get());
                            });
                          }),
                          n(function () {
                            s.flushSync.update(),
                              s.flushSync.preRender(),
                              s.flushSync.render(),
                              s.flushSync.postRender();
                          }),
                          t(function () {
                            return e.resolveDragConstraints();
                          });
                      }));
                  },
                  onStart: function (t, n) {
                    var r,
                      o,
                      i,
                      a = e.props,
                      u = a.drag,
                      s = a.dragPropagation;
                    (!u ||
                      s ||
                      (e.openGlobalLock && e.openGlobalLock(),
                      (e.openGlobalLock = un(u)),
                      e.openGlobalLock)) &&
                      (rr(),
                      (e.isDragging = !0),
                      (e.currentDirection = null),
                      null === (o = (r = e.props).onDragStart) ||
                        void 0 === o ||
                        o.call(r, t, n),
                      null === (i = e.visualElement.animationState) ||
                        void 0 === i ||
                        i.setActive(Ut.Drag, !0));
                  },
                  onMove: function (t, n) {
                    var r,
                      o,
                      i,
                      a,
                      u = e.props,
                      s = u.dragPropagation,
                      c = u.dragDirectionLock;
                    if (s || e.openGlobalLock) {
                      var l = n.offset;
                      if (c && null === e.currentDirection)
                        return (
                          (e.currentDirection = (function (t, n) {
                            void 0 === n && (n = 10);
                            var e = null;
                            Math.abs(t.y) > n
                              ? (e = "y")
                              : Math.abs(t.x) > n && (e = "x");
                            return e;
                          })(l)),
                          void (
                            null !== e.currentDirection &&
                            (null === (o = (r = e.props).onDirectionLock) ||
                              void 0 === o ||
                              o.call(r, e.currentDirection))
                          )
                        );
                      e.updateAxis("x", n.point, l),
                        e.updateAxis("y", n.point, l),
                        null === (a = (i = e.props).onDrag) ||
                          void 0 === a ||
                          a.call(i, t, n),
                        (or = t);
                    }
                  },
                  onSessionEnd: function (t, n) {
                    return e.stop(t, n);
                  },
                },
                { transformPagePoint: l }
              );
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                n = this.props,
                e = n.dragConstraints,
                r = n.dragElastic,
                o = this.visualElement.getLayoutState().layoutCorrected;
              (this.constraints =
                !!e &&
                (D(e)
                  ? this.resolveRefConstraints(o, e)
                  : (function (t, n) {
                      var e = n.top,
                        r = n.left,
                        o = n.bottom,
                        i = n.right;
                      return { x: Te(t.x, r, i), y: Te(t.y, e, o) };
                    })(o, e))),
                (this.elastic = (function (t) {
                  return (
                    !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                    { x: Le(t, "left", "right"), y: Le(t, "top", "bottom") }
                  );
                })(r)),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  xe(function (n) {
                    t.getAxisMotionValue(n) &&
                      (t.constraints[n] = (function (t, n) {
                        var e = {};
                        return (
                          void 0 !== n.min && (e.min = n.min - t.min),
                          void 0 !== n.max && (e.max = n.max - t.min),
                          e
                        );
                      })(o[n], t.constraints[n]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, n) {
              var e = this.props,
                r = e.onMeasureDragConstraints,
                o = e.transformPagePoint,
                a = n.current;
              i.invariant(
                null !== a,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              ),
                (this.constraintsBox = Re(a, o));
              var u = (function (t, n) {
                return { x: Ve(t.x, n.x), y: Ve(t.y, n.y) };
              })(t, this.constraintsBox);
              if (r) {
                var s = r(
                  (function (t) {
                    var n = t.x,
                      e = t.y;
                    return {
                      top: e.min,
                      bottom: e.max,
                      left: n.min,
                      right: n.max,
                    };
                  })(u)
                );
                (this.hasMutatedConstraints = !!s), s && (u = me(s));
              }
              return u;
            }),
            (t.prototype.cancelDrag = function () {
              var t, n;
              this.visualElement.unlockProjectionTarget(),
                null === (t = this.cancelLayout) ||
                  void 0 === t ||
                  t.call(this),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (n = this.visualElement.animationState) ||
                  void 0 === n ||
                  n.setActive(Ut.Drag, !1);
            }),
            (t.prototype.stop = function (t, n) {
              var e, r, o;
              null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = null);
              var i = this.isDragging;
              if ((this.cancelDrag(), i)) {
                var a = n.velocity;
                this.animateDragEnd(a),
                  null === (o = (r = this.props).onDragEnd) ||
                    void 0 === o ||
                    o.call(r, t, n);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var n = this;
              return xe(function (e) {
                if (sr(e, n.props.drag, n.currentDirection)) {
                  var r = n.getAxisMotionValue(e);
                  if (!r) return (n.cursorProgress[e] = 0.5), !0;
                  var o = n.visualElement.getLayoutState().layout,
                    i = o[e].max - o[e].min,
                    a = o[e].min + i / 2,
                    u = t[e] - a;
                  (n.originPoint[e] = t[e]), r.set(u);
                }
              }).includes(!0);
            }),
            (t.prototype.updateAxis = function (t, n, e) {
              if (sr(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, e)
                  : this.updateVisualElementAxis(t, n);
            }),
            (t.prototype.updateAxisMotionValue = function (t, n) {
              var e = this.getAxisMotionValue(t);
              if (n && e) {
                var r = this.originPoint[t] + n[t],
                  o = this.constraints
                    ? Ce(r, this.constraints[t], this.elastic[t])
                    : r;
                e.set(o);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, n) {
              var e,
                r = this.visualElement.getLayoutState().layout[t],
                o = r.max - r.min,
                i = this.cursorProgress[t],
                a = (function (t, n, e, r, o) {
                  var i = t - n * e;
                  return r ? Ce(i, r, o) : i;
                })(
                  n[t],
                  o,
                  i,
                  null === (e = this.constraints) || void 0 === e
                    ? void 0
                    : e[t],
                  this.elastic[t]
                );
              this.visualElement.setProjectionTargetAxis(t, a, a + o);
            }),
            (t.prototype.setProps = function (t) {
              var n = t.drag,
                e = void 0 !== n && n,
                o = t.dragDirectionLock,
                i = void 0 !== o && o,
                a = t.dragPropagation,
                u = void 0 !== a && a,
                s = t.dragConstraints,
                c = void 0 !== s && s,
                l = t.dragElastic,
                f = void 0 === l ? 0.35 : l,
                d = t.dragMomentum,
                v = void 0 === d || d,
                p = r.__rest(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = r.__assign(
                {
                  drag: e,
                  dragDirectionLock: i,
                  dragPropagation: u,
                  dragConstraints: c,
                  dragElastic: f,
                  dragMomentum: v,
                },
                p
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var n = this.props,
                e = n.layout,
                r = n.layoutId,
                o = "_drag" + t.toUpperCase();
              return this.props[o]
                ? this.props[o]
                : e || void 0 !== r
                ? void 0
                : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.isLayoutDrag = function () {
              return !this.getAxisMotionValue("x");
            }),
            (t.prototype.isExternalDrag = function () {
              var t = this.props,
                n = t._dragX,
                e = t._dragY;
              return n || e;
            }),
            (t.prototype.animateDragEnd = function (t) {
              var n = this,
                e = this.props,
                o = e.drag,
                i = e.dragMomentum,
                a = e.dragElastic,
                u = e.dragTransition,
                s = (function (t, n) {
                  void 0 === n && (n = !0);
                  var e,
                    r = t.getProjectionParent();
                  return (
                    !!r &&
                    (n
                      ? Qe(
                          (e = Ie(r.projection.target, t.projection.target)),
                          r.getLatestValues()
                        )
                      : (e = Ie(
                          r.getLayoutState().layout,
                          t.getLayoutState().layout
                        )),
                    xe(function (n) {
                      return t.setProjectionTargetAxis(
                        n,
                        e[n].min,
                        e[n].max,
                        !0
                      );
                    }),
                    !0)
                  );
                })(
                  this.visualElement,
                  this.isLayoutDrag() && !this.isExternalDrag()
                ),
                c = this.constraints || {};
              if (s && Object.keys(c).length && this.isLayoutDrag()) {
                var l = this.visualElement.getProjectionParent();
                if (l) {
                  var f = Ie(l.projection.targetFinal, c);
                  xe(function (t) {
                    var n = f[t],
                      e = n.min,
                      r = n.max;
                    c[t] = {
                      min: isNaN(e) ? void 0 : e,
                      max: isNaN(r) ? void 0 : r,
                    };
                  });
                }
              }
              var d = xe(function (e) {
                var l;
                if (sr(e, o, n.currentDirection)) {
                  var f =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[e]) &&
                      void 0 !== l
                        ? l
                        : {},
                    d = a ? 200 : 1e6,
                    v = a ? 40 : 1e7,
                    p = r.__assign(
                      r.__assign(
                        {
                          type: "inertia",
                          velocity: i ? t[e] : 0,
                          bounceStiffness: d,
                          bounceDamping: v,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        u
                      ),
                      f
                    );
                  return n.getAxisMotionValue(e)
                    ? n.startAxisValueAnimation(e, p)
                    : n.visualElement.startLayoutAnimation(e, p, s);
                }
              });
              return Promise.all(d).then(function () {
                var t, e;
                null === (e = (t = n.props).onDragTransitionEnd) ||
                  void 0 === e ||
                  e.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              xe(function (n) {
                var e = t.getAxisMotionValue(n);
                e ? e.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, n) {
              var e = this.getAxisMotionValue(t);
              if (e) {
                var r = e.get();
                return e.set(r), e.set(r), Mn(t, e, 0, n);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                n = this.props,
                e = n.drag;
              if (D(n.dragConstraints) && this.constraintsBox) {
                this.stopMotion();
                var r = { x: 0, y: 0 };
                xe(function (n) {
                  r[n] = be(
                    t.visualElement.projection.target[n],
                    t.constraintsBox[n]
                  );
                }),
                  this.updateConstraints(function () {
                    xe(function (n) {
                      if (sr(n, e, null)) {
                        var o = (function (t, n, e) {
                            var r = t.max - t.min,
                              o = u.mix(n.min, n.max - r, e);
                            return { min: o, max: o + r };
                          })(
                            t.visualElement.projection.target[n],
                            t.constraintsBox[n],
                            r[n]
                          ),
                          i = o.min,
                          a = o.max;
                        t.visualElement.setProjectionTargetAxis(n, i, a);
                      }
                    });
                  }),
                  setTimeout(rr, 1);
              }
            }),
            (t.prototype.updateConstraints = function (t) {
              var n = this;
              this.cancelLayout = er(function (e, r) {
                var o = Oe(n.visualElement);
                r(function () {
                  return o.forEach(function (t) {
                    return t.resetTransform();
                  });
                }),
                  e(function () {
                    return je(n.visualElement);
                  }),
                  r(function () {
                    return o.forEach(function (t) {
                      return t.restoreTransform();
                    });
                  }),
                  e(function () {
                    n.resolveDragConstraints();
                  }),
                  t && r(t);
              });
            }),
            (t.prototype.mount = function (t) {
              var n = this,
                e = nn(t.getInstance(), "pointerdown", function (t) {
                  var e = n.props,
                    r = e.drag,
                    o = e.dragListener;
                  r && (void 0 === o || o) && n.start(t);
                }),
                r = Yt(window, "resize", function () {
                  n.scalePoint();
                }),
                o = t.onLayoutUpdate(function () {
                  n.isDragging && n.resolveDragConstraints();
                }),
                i = t.prevDragCursor;
              return (
                i && this.start(or, { cursorProgress: i }),
                function () {
                  null === e || void 0 === e || e(),
                    null === r || void 0 === r || r(),
                    null === o || void 0 === o || o(),
                    n.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function sr(t, n, e) {
        return (!0 === n || n === t) && (null === e || e === t);
      }
      var cr,
        lr,
        fr = {
          pan: dn(function (t) {
            var n = t.onPan,
              e = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              a = t.visualElement,
              u = n || e || r || i,
              s = o.useRef(null),
              c = o.useContext(_).transformPagePoint,
              l = {
                onSessionStart: i,
                onStart: e,
                onMove: n,
                onEnd: function (t, n) {
                  (s.current = null), r && r(t, n);
                },
              };
            o.useEffect(function () {
              null !== s.current && s.current.updateHandlers(l);
            }),
              en(
                a,
                "pointerdown",
                u &&
                  function (t) {
                    s.current = new ue(t, l, { transformPagePoint: c });
                  }
              ),
              fn(function () {
                return s.current && s.current.end();
              });
          }),
          drag: dn(function (t) {
            var n = t.dragControls,
              e = t.visualElement,
              i = o.useContext(_).transformPagePoint,
              a = P(function () {
                return new ur({ visualElement: e });
              });
            a.setProps(
              r.__assign(r.__assign({}, t), { transformPagePoint: i })
            ),
              o.useEffect(
                function () {
                  return n && n.subscribe(a);
                },
                [a]
              ),
              o.useEffect(function () {
                return a.mount(e);
              }, []);
          }),
        };
      function dr(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      !(function (t) {
        (t[(t.Entering = 0)] = "Entering"),
          (t[(t.Present = 1)] = "Present"),
          (t[(t.Exiting = 2)] = "Exiting");
      })(cr || (cr = {})),
        (n.VisibilityAction = void 0),
        ((lr = n.VisibilityAction || (n.VisibilityAction = {}))[(lr.Hide = 0)] =
          "Hide"),
        (lr[(lr.Show = 1)] = "Show");
      var vr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function pr(t, n, e) {
        void 0 === e && (e = 1),
          i.invariant(
            e <= 4,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var o = r.__read(
            (function (t) {
              var n = vr.exec(t);
              if (!n) return [,];
              var e = r.__read(n, 3);
              return [e[1], e[2]];
            })(t),
            2
          ),
          a = o[0],
          u = o[1];
        if (a) {
          var s = window.getComputedStyle(n).getPropertyValue(a);
          return s ? s.trim() : dr(u) ? pr(u, n, e + 1) : u;
        }
      }
      function mr(t, n) {
        return (t / (n.max - n.min)) * 100;
      }
      var gr = "_$css";
      var yr = {
          process: function (t, n, e) {
            var r = e.target;
            if ("string" === typeof t) {
              if (!a.px.test(t)) return t;
              t = parseFloat(t);
            }
            return mr(t, r.x) + "% " + mr(t, r.y) + "%";
          },
        },
        hr = {
          borderRadius: r.__assign(r.__assign({}, yr), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: yr,
          borderTopRightRadius: yr,
          borderBottomLeftRadius: yr,
          borderBottomRightRadius: yr,
          boxShadow: {
            process: function (t, n) {
              var e = n.delta,
                r = n.treeScale,
                o = t,
                i = t.includes("var("),
                s = [];
              i &&
                (t = t.replace(vr, function (t) {
                  return s.push(t), gr;
                }));
              var c = a.complex.parse(t);
              if (c.length > 5) return o;
              var l = a.complex.createTransformer(t),
                f = "number" !== typeof c[0] ? 1 : 0,
                d = e.x.scale * r.x,
                v = e.y.scale * r.y;
              (c[0 + f] /= d), (c[1 + f] /= v);
              var p = u.mix(d, v, 0.5);
              "number" === typeof c[2 + f] && (c[2 + f] /= p),
                "number" === typeof c[3 + f] && (c[3 + f] /= p);
              var m = l(c);
              if (i) {
                var g = 0;
                m = m.replace(gr, function () {
                  var t = s[g];
                  return g++, t;
                });
              }
              return m;
            },
          },
        },
        xr = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.frameTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (e.currentAnimationTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (e.isAnimating = { x: !1, y: !1 }),
              (e.stopAxisAnimation = { x: void 0, y: void 0 }),
              (e.isAnimatingTree = !1),
              (e.animate = function (t, o, i) {
                void 0 === i && (i = {});
                var a = i.originBox,
                  u = i.targetBox,
                  s = i.visibilityAction,
                  c = i.shouldStackAnimate,
                  l = i.onComplete,
                  f = i.prevParent,
                  d = r.__rest(i, [
                    "originBox",
                    "targetBox",
                    "visibilityAction",
                    "shouldStackAnimate",
                    "onComplete",
                    "prevParent",
                  ]),
                  v = e.props,
                  p = v.visualElement,
                  m = v.layout;
                if (!1 === c) return (e.isAnimatingTree = !1), e.safeToRemove();
                if (!e.isAnimatingTree || !0 === c) {
                  c && (e.isAnimatingTree = !0), (o = a || o), (t = u || t);
                  var g = !1,
                    y = p.getProjectionParent();
                  if (y) {
                    var h = y.prevViewportBox,
                      x = y.getLayoutState().layout;
                    f &&
                      (u && (x = f.getLayoutState().layout),
                      a &&
                        !Ue(f, y) &&
                        f.prevViewportBox &&
                        (h = f.prevViewportBox)),
                      h &&
                        Sr(f, a, u) &&
                        ((g = !0), (o = Ie(h, o)), (t = Ie(x, t)));
                  }
                  var _ = _r(o, t),
                    E = xe(function (i) {
                      var a, u;
                      if ("position" === m) {
                        var c = t[i].max - t[i].min;
                        o[i].max = o[i].min + c;
                      }
                      if (!p.projection.isTargetLocked)
                        return void 0 === s
                          ? _
                            ? e.animateAxis(
                                i,
                                t[i],
                                o[i],
                                r.__assign(r.__assign({}, d), { isRelative: g })
                              )
                            : (null === (u = (a = e.stopAxisAnimation)[i]) ||
                                void 0 === u ||
                                u.call(a),
                              p.setProjectionTargetAxis(
                                i,
                                t[i].min,
                                t[i].max,
                                g
                              ))
                          : void p.setVisibility(s === n.VisibilityAction.Show);
                    });
                  return (
                    p.syncRender(),
                    Promise.all(E).then(function () {
                      (e.isAnimatingTree = !1),
                        l && l(),
                        p.notifyLayoutAnimationComplete();
                    })
                  );
                }
              }),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                n = this.props.visualElement;
              (n.animateMotionValue = Mn),
                n.enableLayoutProjection(),
                (this.unsubLayoutReady = n.onLayoutUpdate(this.animate)),
                (n.layoutSafeToRemove = function () {
                  return t.safeToRemove();
                }),
                K(hr);
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this;
              this.unsubLayoutReady(),
                xe(function (n) {
                  var e, r;
                  return null === (r = (e = t.stopAxisAnimation)[n]) ||
                    void 0 === r
                    ? void 0
                    : r.call(e);
                });
            }),
            (e.prototype.animateAxis = function (t, n, e, r) {
              var o,
                i,
                a = this,
                s = void 0 === r ? {} : r,
                c = s.transition,
                l = s.isRelative;
              if (
                !this.isAnimating[t] ||
                !Ar(n, this.currentAnimationTarget[t])
              ) {
                null === (i = (o = this.stopAxisAnimation)[t]) ||
                  void 0 === i ||
                  i.call(o),
                  (this.isAnimating[t] = !0);
                var f = this.props.visualElement,
                  d = this.frameTarget[t],
                  v = f.getProjectionAnimationProgress()[t];
                v.clearListeners(), v.set(0), v.set(0);
                var p = function () {
                  var r = v.get() / 1e3;
                  !(function (t, n, e, r) {
                    (t.min = u.mix(n.min, e.min, r)),
                      (t.max = u.mix(n.max, e.max, r));
                  })(d, e, n, r),
                    f.setProjectionTargetAxis(t, d.min, d.max, l);
                };
                p();
                var m = v.onChange(p);
                (this.stopAxisAnimation[t] = function () {
                  (a.isAnimating[t] = !1), v.stop(), m();
                }),
                  (this.currentAnimationTarget[t] = n);
                var g = c || f.getDefaultTransition() || Pr;
                return Mn(
                  "x" === t ? "layoutX" : "layoutY",
                  v,
                  1e3,
                  g && Rn(g, "layout")
                ).then(this.stopAxisAnimation[t]);
              }
            }),
            (e.prototype.safeToRemove = function () {
              var t, n;
              null === (n = (t = this.props).safeToRemove) ||
                void 0 === n ||
                n.call(t);
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(f.Component);
      function _r(t, n) {
        return !br(t) && !br(n) && (!Ar(t.x, n.x) || !Ar(t.y, n.y));
      }
      var Er = { min: 0, max: 0 };
      function br(t) {
        return Ar(t.x, Er) && Ar(t.y, Er);
      }
      function Ar(t, n) {
        return t.min === n.min && t.max === n.max;
      }
      var Pr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Sr(t, n, e) {
        return t || (!t && !(n || e));
      }
      var wr = {
        layoutReady: function (t) {
          return t.notifyLayoutReady();
        },
      };
      function Cr() {
        var t = new Set();
        return {
          add: function (n) {
            return t.add(n);
          },
          flush: function (n) {
            var e = void 0 === n ? wr : n,
              o = e.layoutReady,
              i = e.parent;
            er(function (n, e) {
              var a = Array.from(t).sort(Me),
                u = i ? Oe(i) : [];
              e(function () {
                r.__spreadArray(
                  r.__spreadArray([], r.__read(u)),
                  r.__read(a)
                ).forEach(function (t) {
                  return t.resetTransform();
                });
              }),
                n(function () {
                  a.forEach(je);
                }),
                e(function () {
                  u.forEach(function (t) {
                    return t.restoreTransform();
                  }),
                    a.forEach(o);
                }),
                n(function () {
                  a.forEach(function (t) {
                    t.isPresent && (t.presence = cr.Present);
                  });
                }),
                e(function () {
                  s.flushSync.preRender(), s.flushSync.render();
                }),
                n(function () {
                  v.default.postRender(function () {
                    return a.forEach(Tr);
                  }),
                    t.clear();
                });
            }),
              rr();
          },
        };
      }
      function Tr(t) {
        t.prevViewportBox = t.projection.target;
      }
      var Vr = o.createContext(Cr()),
        Lr = o.createContext(Cr());
      function kr(t) {
        return !!t.forceUpdate;
      }
      var Rr = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r.__extends(n, t),
          (n.prototype.componentDidMount = function () {
            var t = this.props,
              n = t.syncLayout,
              e = t.framerSyncLayout,
              r = t.visualElement;
            kr(n) && n.register(r),
              kr(e) && e.register(r),
              r.onUnmount(function () {
                kr(n) && n.remove(r), kr(e) && e.remove(r);
              });
          }),
          (n.prototype.getSnapshotBeforeUpdate = function () {
            var t = this.props,
              n = t.syncLayout,
              e = t.visualElement;
            return kr(n) ? n.syncUpdate() : (Be(e), n.add(e)), null;
          }),
          (n.prototype.componentDidUpdate = function () {
            var t = this.props.syncLayout;
            kr(t) || t.flush();
          }),
          (n.prototype.render = function () {
            return null;
          }),
          n
        );
      })(d.default.Component);
      var Mr = {
        measureLayout: function (t) {
          var n = o.useContext(Vr),
            e = o.useContext(Lr);
          return d.default.createElement(
            Rr,
            r.__assign({}, t, { syncLayout: n, framerSyncLayout: e })
          );
        },
        layoutAnimation: function (t) {
          var n = r.__read(S(), 2)[1];
          return f.createElement(xr, r.__assign({}, t, { safeToRemove: n }));
        },
      };
      function Dr() {
        return {
          isHydrated: !1,
          layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          layoutCorrected: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          treeScale: { x: 1, y: 1 },
          delta: he(),
          deltaFinal: he(),
          deltaTransform: "",
        };
      }
      var Or = Dr();
      function jr(t, n, e) {
        var r = t.x,
          o = t.y,
          i =
            "translate3d(" +
            r.translate / n.x +
            "px, " +
            o.translate / n.y +
            "px, 0) ";
        if (e) {
          var a = e.rotate,
            u = e.rotateX,
            s = e.rotateY;
          a && (i += "rotate(" + a + ") "),
            u && (i += "rotateX(" + u + ") "),
            s && (i += "rotateY(" + s + ") ");
        }
        return (
          (i += "scale(" + r.scale + ", " + o.scale + ")"),
          e || i !== Fr ? i : ""
        );
      }
      function Br(t) {
        var n = t.deltaFinal;
        return 100 * n.x.origin + "% " + 100 * n.y.origin + "% 0";
      }
      var Fr = jr(Or.delta, Or.treeScale, { x: 1, y: 1 }),
        Ir = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      function Ur(t, n, e, r) {
        var o,
          i,
          a = t.delta,
          u = t.layout,
          s = t.layoutCorrected,
          c = t.treeScale,
          l = n.target;
        (i = u),
          Xe((o = s).x, i.x),
          Xe(o.y, i.y),
          (function (t, n, e) {
            var r = e.length;
            if (r) {
              var o, i;
              n.x = n.y = 1;
              for (var a = 0; a < r; a++)
                (i = (o = e[a]).getLayoutState().delta),
                  (n.x *= i.x.scale),
                  (n.y *= i.y.scale),
                  We(t, i),
                  He(o) && $e(t, t, o.getLatestValues());
            }
          })(s, c, e),
          Pe(a, s, l, r);
      }
      var Hr = (function () {
        function t() {
          (this.children = []), (this.isDirty = !1);
        }
        return (
          (t.prototype.add = function (t) {
            Dn(this.children, t), (this.isDirty = !0);
          }),
          (t.prototype.remove = function (t) {
            On(this.children, t), (this.isDirty = !0);
          }),
          (t.prototype.forEach = function (t) {
            this.isDirty && this.children.sort(Me),
              (this.isDirty = !1),
              this.children.forEach(t);
          }),
          t
        );
      })();
      var Xr = function (t) {
        var n = t.treeType,
          e = void 0 === n ? "" : n,
          o = t.build,
          i = t.getBaseTarget,
          a = t.makeTargetAnimatable,
          c = t.measureViewportBox,
          l = t.render,
          f = t.readValueFromInstance,
          d = t.resetTransform,
          p = t.restoreTransform,
          m = t.removeValueFromRenderState,
          g = t.sortNodePosition,
          y = t.scrapeMotionValuesFromProps;
        return function (t, n) {
          var h = t.parent,
            x = t.props,
            _ = t.presenceId,
            E = t.blockInitialAnimation,
            b = t.visualState;
          void 0 === n && (n = {});
          var A,
            P,
            S,
            w,
            C,
            T,
            V = b.latestValues,
            L = b.renderState,
            k = (function () {
              var t = Ir.map(function () {
                  return new jn();
                }),
                n = {},
                e = {
                  clearAllListeners: function () {
                    return t.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    return Ir.forEach(function (r) {
                      var o;
                      null === (o = n[r]) || void 0 === o || o.call(n);
                      var i = "on" + r,
                        a = t[i];
                      a && (n[r] = e[i](a));
                    });
                  },
                };
              return (
                t.forEach(function (t, n) {
                  (e["on" + Ir[n]] = function (n) {
                    return t.add(n);
                  }),
                    (e["notify" + Ir[n]] = function () {
                      for (var n = [], e = 0; e < arguments.length; e++)
                        n[e] = arguments[e];
                      return t.notify.apply(
                        t,
                        r.__spreadArray([], r.__read(n))
                      );
                    });
                }),
                e
              );
            })(),
            R = {
              isEnabled: !1,
              isHydrated: !1,
              isTargetLocked: !1,
              target: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
              targetFinal: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
            },
            M = R,
            D = V,
            O = Dr(),
            B = !1,
            F = new Map(),
            H = new Map(),
            X = {},
            Y = r.__assign({}, V);
          function z() {
            A &&
              (Q.isProjectionReady() &&
                ($e(M.targetFinal, M.target, D),
                Pe(O.deltaFinal, O.layoutCorrected, M.targetFinal, V)),
              N(),
              l(A, L));
          }
          function N() {
            var t = V;
            if (w && w.isActive()) {
              var e = w.getCrossfadeState(Q);
              e && (t = e);
            }
            o(Q, L, t, M, O, n, x);
          }
          function W() {
            k.notifyUpdate(V);
          }
          function Z() {
            Q.layoutTree.forEach(zr);
          }
          var K = y(x);
          for (var G in K) {
            var $ = K[G];
            void 0 !== V[G] && rt($) && $.set(V[G], !1);
          }
          var q = I(x),
            J = U(x),
            Q = r.__assign(
              r.__assign(
                {
                  treeType: e,
                  current: null,
                  depth: h ? h.depth + 1 : 0,
                  parent: h,
                  children: new Set(),
                  path: h
                    ? r.__spreadArray(r.__spreadArray([], r.__read(h.path)), [
                        h,
                      ])
                    : [],
                  layoutTree: h ? h.layoutTree : new Hr(),
                  presenceId: _,
                  projection: R,
                  variantChildren: J ? new Set() : void 0,
                  isVisible: void 0,
                  manuallyAnimateOnMount: Boolean(
                    null === h || void 0 === h ? void 0 : h.isMounted()
                  ),
                  blockInitialAnimation: E,
                  isMounted: function () {
                    return Boolean(A);
                  },
                  mount: function (t) {
                    (A = Q.current = t),
                      Q.pointTo(Q),
                      J &&
                        h &&
                        !q &&
                        (T =
                          null === h || void 0 === h
                            ? void 0
                            : h.addVariantChild(Q)),
                      null === h || void 0 === h || h.children.add(Q);
                  },
                  unmount: function () {
                    s.cancelSync.update(W),
                      s.cancelSync.render(z),
                      s.cancelSync.preRender(Q.updateLayoutProjection),
                      H.forEach(function (t) {
                        return t();
                      }),
                      Q.stopLayoutAnimation(),
                      Q.layoutTree.remove(Q),
                      null === T || void 0 === T || T(),
                      null === h || void 0 === h || h.children.delete(Q),
                      null === S || void 0 === S || S(),
                      k.clearAllListeners();
                  },
                  addVariantChild: function (t) {
                    var n,
                      e = Q.getClosestVariantNode();
                    if (e)
                      return (
                        null === (n = e.variantChildren) ||
                          void 0 === n ||
                          n.add(t),
                        function () {
                          return e.variantChildren.delete(t);
                        }
                      );
                  },
                  sortNodePosition: function (t) {
                    return g && e === t.treeType
                      ? g(Q.getInstance(), t.getInstance())
                      : 0;
                  },
                  getClosestVariantNode: function () {
                    return J
                      ? Q
                      : null === h || void 0 === h
                      ? void 0
                      : h.getClosestVariantNode();
                  },
                  scheduleUpdateLayoutProjection: h
                    ? h.scheduleUpdateLayoutProjection
                    : function () {
                        return v.default.preRender(
                          Q.updateTreeLayoutProjection,
                          !1,
                          !0
                        );
                      },
                  getLayoutId: function () {
                    return x.layoutId;
                  },
                  getInstance: function () {
                    return A;
                  },
                  getStaticValue: function (t) {
                    return V[t];
                  },
                  setStaticValue: function (t, n) {
                    return (V[t] = n);
                  },
                  getLatestValues: function () {
                    return V;
                  },
                  setVisibility: function (t) {
                    Q.isVisible !== t &&
                      ((Q.isVisible = t), Q.scheduleRender());
                  },
                  makeTargetAnimatable: function (t, n) {
                    return void 0 === n && (n = !0), a(Q, t, x, n);
                  },
                  addValue: function (t, n) {
                    Q.hasValue(t) && Q.removeValue(t),
                      F.set(t, n),
                      (V[t] = n.get()),
                      (function (t, n) {
                        var e = n.onChange(function (n) {
                            (V[t] = n),
                              x.onUpdate && v.default.update(W, !1, !0);
                          }),
                          r = n.onRenderRequest(Q.scheduleRender);
                        H.set(t, function () {
                          e(), r();
                        });
                      })(t, n);
                  },
                  removeValue: function (t) {
                    var n;
                    F.delete(t),
                      null === (n = H.get(t)) || void 0 === n || n(),
                      H.delete(t),
                      delete V[t],
                      m(t, L);
                  },
                  hasValue: function (t) {
                    return F.has(t);
                  },
                  getValue: function (t, n) {
                    var e = F.get(t);
                    return (
                      void 0 === e &&
                        void 0 !== n &&
                        ((e = Fn(n)), Q.addValue(t, e)),
                      e
                    );
                  },
                  forEachValue: function (t) {
                    return F.forEach(t);
                  },
                  readValue: function (t) {
                    var e;
                    return null !== (e = V[t]) && void 0 !== e ? e : f(A, t, n);
                  },
                  setBaseTarget: function (t, n) {
                    Y[t] = n;
                  },
                  getBaseTarget: function (t) {
                    if (i) {
                      var n = i(x, t);
                      if (void 0 !== n && !rt(n)) return n;
                    }
                    return Y[t];
                  },
                },
                k
              ),
              {
                build: function () {
                  return N(), L;
                },
                scheduleRender: function () {
                  v.default.render(z, !1, !0);
                },
                syncRender: z,
                setProps: function (t) {
                  (x = t),
                    k.updatePropListeners(t),
                    (X = (function (t, n, e) {
                      var r;
                      for (var o in n) {
                        var i = n[o],
                          a = e[o];
                        if (rt(i)) t.addValue(o, i);
                        else if (rt(a)) t.addValue(o, Fn(i));
                        else if (a !== i)
                          if (t.hasValue(o)) {
                            var u = t.getValue(o);
                            !u.hasAnimated && u.set(i);
                          } else
                            t.addValue(
                              o,
                              Fn(
                                null !== (r = t.getStaticValue(o)) &&
                                  void 0 !== r
                                  ? r
                                  : i
                              )
                            );
                      }
                      for (var o in e) void 0 === n[o] && t.removeValue(o);
                      return n;
                    })(Q, y(x), X));
                },
                getProps: function () {
                  return x;
                },
                getVariant: function (t) {
                  var n;
                  return null === (n = x.variants) || void 0 === n
                    ? void 0
                    : n[t];
                },
                getDefaultTransition: function () {
                  return x.transition;
                },
                getVariantContext: function (t) {
                  if ((void 0 === t && (t = !1), t))
                    return null === h || void 0 === h
                      ? void 0
                      : h.getVariantContext();
                  if (!q) {
                    var n =
                      (null === h || void 0 === h
                        ? void 0
                        : h.getVariantContext()) || {};
                    return void 0 !== x.initial && (n.initial = x.initial), n;
                  }
                  for (var e = {}, r = 0; r < Zr; r++) {
                    var o = Wr[r],
                      i = x[o];
                    (j(i) || !1 === i) && (e[o] = i);
                  }
                  return e;
                },
                enableLayoutProjection: function () {
                  (R.isEnabled = !0), Q.layoutTree.add(Q);
                },
                lockProjectionTarget: function () {
                  R.isTargetLocked = !0;
                },
                unlockProjectionTarget: function () {
                  Q.stopLayoutAnimation(), (R.isTargetLocked = !1);
                },
                getLayoutState: function () {
                  return O;
                },
                setCrossfader: function (t) {
                  w = t;
                },
                isProjectionReady: function () {
                  return R.isEnabled && R.isHydrated && O.isHydrated;
                },
                startLayoutAnimation: function (t, n, e) {
                  void 0 === e && (e = !1);
                  var r = Q.getProjectionAnimationProgress()[t],
                    o = e ? R.relativeTarget[t] : R.target[t],
                    i = o.min,
                    a = o.max - i;
                  return (
                    r.clearListeners(),
                    r.set(i),
                    r.set(i),
                    r.onChange(function (n) {
                      Q.setProjectionTargetAxis(t, n, n + a, e);
                    }),
                    Q.animateMotionValue(t, r, 0, n)
                  );
                },
                stopLayoutAnimation: function () {
                  xe(function (t) {
                    return Q.getProjectionAnimationProgress()[t].stop();
                  });
                },
                measureViewportBox: function (t) {
                  void 0 === t && (t = !0);
                  var e = c(A, n);
                  return t || Qe(e, V), e;
                },
                getProjectionAnimationProgress: function () {
                  return C || (C = { x: Fn(0), y: Fn(0) }), C;
                },
                setProjectionTargetAxis: function (t, n, e, r) {
                  var o;
                  void 0 === r && (r = !1),
                    r
                      ? (R.relativeTarget ||
                          (R.relativeTarget = {
                            x: { min: 0, max: 1 },
                            y: { min: 0, max: 1 },
                          }),
                        (o = R.relativeTarget[t]))
                      : ((R.relativeTarget = void 0), (o = R.target[t])),
                    (R.isHydrated = !0),
                    (o.min = n),
                    (o.max = e),
                    (B = !0),
                    k.notifySetAxisTarget();
                },
                rebaseProjectionTarget: function (t, n) {
                  void 0 === n && (n = O.layout);
                  var e = Q.getProjectionAnimationProgress(),
                    r = e.x,
                    o = e.y,
                    i =
                      !R.relativeTarget &&
                      !R.isTargetLocked &&
                      !r.isAnimating() &&
                      !o.isAnimating();
                  (t || i) &&
                    xe(function (t) {
                      var e = n[t],
                        r = e.min,
                        o = e.max;
                      Q.setProjectionTargetAxis(t, r, o);
                    });
                },
                notifyLayoutReady: function (t) {
                  !(function (t) {
                    var n = t.getProjectionParent();
                    if (n) {
                      var e = Ie(
                        n.getLayoutState().layout,
                        t.getLayoutState().layout
                      );
                      xe(function (n) {
                        t.setProjectionTargetAxis(n, e[n].min, e[n].max, !0);
                      });
                    } else t.rebaseProjectionTarget();
                  })(Q),
                    Q.notifyLayoutUpdate(
                      O.layout,
                      Q.prevViewportBox || O.layout,
                      t
                    );
                },
                resetTransform: function () {
                  return d(Q, A, x);
                },
                restoreTransform: function () {
                  return p(A, L);
                },
                updateLayoutProjection: function () {
                  if (Q.isProjectionReady()) {
                    var t = O.delta,
                      n = O.treeScale,
                      e = n.x,
                      r = n.y,
                      o = O.deltaTransform;
                    Ur(O, M, Q.path, V),
                      B && Q.notifyViewportBoxUpdate(M.target, t),
                      (B = !1);
                    var i = jr(t, n);
                    (i === o && e === n.x && r === n.y) || Q.scheduleRender(),
                      (O.deltaTransform = i);
                  }
                },
                updateTreeLayoutProjection: function () {
                  Q.layoutTree.forEach(Yr), v.default.preRender(Z, !1, !0);
                },
                getProjectionParent: function () {
                  if (void 0 === P) {
                    for (var t = !1, n = Q.path.length - 1; n >= 0; n--) {
                      var e = Q.path[n];
                      if (e.projection.isEnabled) {
                        t = e;
                        break;
                      }
                    }
                    P = t;
                  }
                  return P;
                },
                resolveRelativeTargetBox: function () {
                  var t = Q.getProjectionParent();
                  if (
                    R.relativeTarget &&
                    t &&
                    ((function (t, n) {
                      we(t.target.x, t.relativeTarget.x, n.target.x),
                        we(t.target.y, t.relativeTarget.y, n.target.y);
                    })(R, t.projection),
                    He(t))
                  ) {
                    var n = R.target;
                    $e(n, n, t.getLatestValues());
                  }
                },
                shouldResetTransform: function () {
                  return Boolean(x._layoutResetTransform);
                },
                pointTo: function (t) {
                  (M = t.projection),
                    (D = t.getLatestValues()),
                    null === S || void 0 === S || S(),
                    (S = u.pipe(
                      t.onSetAxisTarget(Q.scheduleUpdateLayoutProjection),
                      t.onLayoutAnimationComplete(function () {
                        var t;
                        Q.isPresent
                          ? (Q.presence = cr.Present)
                          : null === (t = Q.layoutSafeToRemove) ||
                            void 0 === t ||
                            t.call(Q);
                      })
                    ));
                },
                isPresent: !0,
                presence: cr.Entering,
              }
            );
          return Q;
        };
      };
      function Yr(t) {
        t.resolveRelativeTargetBox();
      }
      function zr(t) {
        t.updateLayoutProjection();
      }
      var Nr,
        Wr = r.__spreadArray(["initial"], r.__read(ne)),
        Zr = Wr.length,
        Kr = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Gr = function (t) {
          return Kr.has(t);
        },
        $r = function (t, n) {
          t.set(n, !1), t.set(n);
        },
        qr = function (t) {
          return t === a.number || t === a.px;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Nr || (Nr = {}));
      var Jr = function (t, n) {
          return parseFloat(t.split(", ")[n]);
        },
        Qr = function (t, n) {
          return function (e, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Jr(i[1], n);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Jr(a[1], t) : 0;
          };
        },
        to = new Set(["x", "y", "z"]),
        no = $.filter(function (t) {
          return !to.has(t);
        });
      var eo = {
          width: function (t) {
            var n = t.x;
            return n.max - n.min;
          },
          height: function (t) {
            var n = t.y;
            return n.max - n.min;
          },
          top: function (t, n) {
            var e = n.top;
            return parseFloat(e);
          },
          left: function (t, n) {
            var e = n.left;
            return parseFloat(e);
          },
          bottom: function (t, n) {
            var e = t.y,
              r = n.top;
            return parseFloat(r) + (e.max - e.min);
          },
          right: function (t, n) {
            var e = t.x,
              r = n.left;
            return parseFloat(r) + (e.max - e.min);
          },
          x: Qr(4, 13),
          y: Qr(5, 14),
        },
        ro = function (t, n, e, o) {
          void 0 === e && (e = {}),
            void 0 === o && (o = {}),
            (n = r.__assign({}, n)),
            (o = r.__assign({}, o));
          var u = Object.keys(n).filter(Gr),
            s = [],
            c = !1,
            l = [];
          if (
            (u.forEach(function (r) {
              var u = t.getValue(r);
              if (t.hasValue(r)) {
                var f,
                  d = e[r],
                  v = n[r],
                  p = Hn(d);
                if (Dt(v))
                  for (var m = v.length, g = null === v[0] ? 1 : 0; g < m; g++)
                    f
                      ? i.invariant(
                          Hn(v[g]) === f,
                          "All keyframes must be of the same type"
                        )
                      : ((f = Hn(v[g])),
                        i.invariant(
                          f === p || (qr(p) && qr(f)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                else f = Hn(v);
                if (p !== f)
                  if (qr(p) && qr(f)) {
                    var y = u.get();
                    "string" === typeof y && u.set(parseFloat(y)),
                      "string" === typeof v
                        ? (n[r] = parseFloat(v))
                        : Array.isArray(v) &&
                          f === a.px &&
                          (n[r] = v.map(parseFloat));
                  } else
                    (null === p || void 0 === p ? void 0 : p.transform) &&
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (0 === d || 0 === v)
                      ? 0 === d
                        ? u.set(f.transform(d))
                        : (n[r] = p.transform(v))
                      : (c ||
                          ((s = (function (t) {
                            var n = [];
                            return (
                              no.forEach(function (e) {
                                var r = t.getValue(e);
                                void 0 !== r &&
                                  (n.push([e, r.get()]),
                                  r.set(e.startsWith("scale") ? 1 : 0));
                              }),
                              n.length && t.syncRender(),
                              n
                            );
                          })(t)),
                          (c = !0)),
                        l.push(r),
                        (o[r] = void 0 !== o[r] ? o[r] : n[r]),
                        $r(u, v));
              }
            }),
            l.length)
          ) {
            var f = (function (t, n, e) {
              var r = n.measureViewportBox(),
                o = n.getInstance(),
                i = getComputedStyle(o),
                a = i.display,
                u = {
                  top: i.top,
                  left: i.left,
                  bottom: i.bottom,
                  right: i.right,
                  transform: i.transform,
                };
              "none" === a && n.setStaticValue("display", t.display || "block"),
                n.syncRender();
              var s = n.measureViewportBox();
              return (
                e.forEach(function (e) {
                  var o = n.getValue(e);
                  $r(o, eo[e](r, u)), (t[e] = eo[e](s, i));
                }),
                t
              );
            })(n, t, l);
            return (
              s.length &&
                s.forEach(function (n) {
                  var e = r.__read(n, 2),
                    o = e[0],
                    i = e[1];
                  t.getValue(o).set(i);
                }),
              t.syncRender(),
              { target: f, transitionEnd: o }
            );
          }
          return { target: n, transitionEnd: o };
        };
      function oo(t, n, e, r) {
        return (function (t) {
          return Object.keys(t).some(Gr);
        })(n)
          ? ro(t, n, e, r)
          : { target: n, transitionEnd: r };
      }
      var io = function (t, n, e, o) {
        var i = (function (t, n, e) {
          var o,
            i = r.__rest(n, []),
            a = t.getInstance();
          if (!(a instanceof HTMLElement))
            return { target: i, transitionEnd: e };
          for (var u in (e && (e = r.__assign({}, e)),
          t.forEachValue(function (t) {
            var n = t.get();
            if (dr(n)) {
              var e = pr(n, a);
              e && t.set(e);
            }
          }),
          i)) {
            var s = i[u];
            if (dr(s)) {
              var c = pr(s, a);
              c &&
                ((i[u] = c),
                e && ((null !== (o = e[u]) && void 0 !== o) || (e[u] = s)));
            }
          }
          return { target: i, transitionEnd: e };
        })(t, n, o);
        return oo(t, (n = i.target), e, (o = i.transitionEnd));
      };
      var ao = {
          treeType: "dom",
          readValueFromInstance: function (t, n) {
            if (Q(n)) {
              var e = Sn(n);
              return (e && e.default) || 0;
            }
            var r,
              o = ((r = t), window.getComputedStyle(r));
            return (it(n) ? o.getPropertyValue(n) : o[n]) || 0;
          },
          sortNodePosition: function (t, n) {
            return 2 & t.compareDocumentPosition(n) ? 1 : -1;
          },
          getBaseTarget: function (t, n) {
            var e;
            return null === (e = t.style) || void 0 === e ? void 0 : e[n];
          },
          measureViewportBox: function (t, n) {
            return Re(t, n.transformPagePoint);
          },
          resetTransform: function (t, n, e) {
            var r = e.transformTemplate;
            (n.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, n) {
            t.style.transform = n.style.transform;
          },
          removeValueFromRenderState: function (t, n) {
            var e = n.vars,
              r = n.style;
            delete e[t], delete r[t];
          },
          makeTargetAnimatable: function (t, n, e, o) {
            var i = e.transformValues;
            void 0 === o && (o = !0);
            var a = n.transition,
              u = n.transitionEnd,
              s = r.__rest(n, ["transition", "transitionEnd"]),
              c = Gn(s, a || {}, t);
            if ((i && (u && (u = i(u)), s && (s = i(s)), c && (c = i(c))), o)) {
              Zn(t, s, c);
              var l = io(t, s, c, u);
              (u = l.transitionEnd), (s = l.target);
            }
            return r.__assign({ transition: a, transitionEnd: u }, s);
          },
          scrapeMotionValuesFromProps: kt,
          build: function (t, n, e, r, o, i, a) {
            void 0 !== t.isVisible &&
              (n.style.visibility = t.isVisible ? "visible" : "hidden");
            var u = r.isEnabled && o.isHydrated;
            ct(
              n,
              e,
              r,
              o,
              i,
              a.transformTemplate,
              u ? jr : void 0,
              u ? Br : void 0
            );
          },
          render: Tt,
        },
        uo = Xr(ao),
        so = Xr(
          r.__assign(r.__assign({}, ao), {
            getBaseTarget: function (t, n) {
              return t[n];
            },
            readValueFromInstance: function (t, n) {
              var e;
              return Q(n)
                ? (null === (e = Sn(n)) || void 0 === e ? void 0 : e.default) ||
                    0
                : ((n = Vt.has(n) ? n : Ct(n)), t.getAttribute(n));
            },
            scrapeMotionValuesFromProps: Rt,
            build: function (t, n, e, r, o, i, a) {
              var u = r.isEnabled && o.isHydrated;
              bt(
                n,
                e,
                r,
                o,
                i,
                a.transformTemplate,
                u ? jr : void 0,
                u ? Br : void 0
              );
            },
            render: Lt,
          })
        ),
        co = function (t, n) {
          return W(t)
            ? so(n, { enableHardwareAcceleration: !1 })
            : uo(n, { enableHardwareAcceleration: !0 });
        },
        lo = r.__assign(r.__assign(r.__assign(r.__assign({}, ae), vn), fr), Mr),
        fo = z(function (t, n) {
          return Xt(t, n, lo, co);
        });
      var vo = z(Xt);
      var po = 0;
      function mo() {
        var t = po;
        return po++, t;
      }
      var go = function (t) {
        var n = t.children,
          e = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          a = t.custom,
          u = t.presenceAffectsLayout,
          s = P(yo),
          c = P(mo),
          l = o.useMemo(
            function () {
              return {
                id: c,
                initial: e,
                isPresent: r,
                custom: a,
                onExitComplete: function (t) {
                  s.set(t, !0);
                  var n = !0;
                  s.forEach(function (t) {
                    t || (n = !1);
                  }),
                    n && (null === i || void 0 === i || i());
                },
                register: function (t) {
                  return (
                    s.set(t, !1),
                    function () {
                      return s.delete(t);
                    }
                  );
                },
              };
            },
            u ? void 0 : [r]
          );
        return (
          o.useMemo(
            function () {
              s.forEach(function (t, n) {
                return s.set(n, !1);
              });
            },
            [r]
          ),
          f.useEffect(
            function () {
              !r && !s.size && (null === i || void 0 === i || i());
            },
            [r]
          ),
          f.createElement(A.Provider, { value: l }, n)
        );
      };
      function yo() {
        return new Map();
      }
      function ho(t) {
        return t.key || "";
      }
      function xo(t, n, e) {
        void 0 === e && (e = {});
        var r = rt(t) ? t : Fn(t);
        return (
          Mn("", r, n, e),
          {
            stop: function () {
              return r.stop();
            },
          }
        );
      }
      function _o() {
        var t = Fn(1),
          n = {
            lead: void 0,
            follow: void 0,
            crossfadeOpacity: !1,
            preserveFollowOpacity: !1,
          },
          e = r.__assign({}, n),
          o = {},
          i = {},
          a = !1,
          c = null,
          l = 0;
        function f(e, o) {
          var i = n.lead,
            u = n.follow;
          (a = !0), (c = null);
          var l = !1,
            f = function () {
              (l = !0), i && i.scheduleRender(), u && u.scheduleRender();
            },
            d = function () {
              (a = !1), (c = s.getFrameData().timestamp);
            };
          return (
            (o = o && Rn(o, "crossfade")),
            xo(
              t,
              e,
              r.__assign(r.__assign({}, o), {
                onUpdate: f,
                onComplete: function () {
                  l ? d() : (t.set(e), v.default.read(d)), f();
                },
              })
            )
          );
        }
        function d() {
          var e,
            r,
            a = s.getFrameData().timestamp,
            c = n.lead,
            f = n.follow;
          if (a !== l && c) {
            l = a;
            var d = c.getLatestValues();
            Object.assign(o, d);
            var v = f ? f.getLatestValues() : n.prevValues;
            Object.assign(i, v);
            var p = t.get(),
              m = null !== (e = d.opacity) && void 0 !== e ? e : 1,
              g =
                null !==
                  (r = null === v || void 0 === v ? void 0 : v.opacity) &&
                void 0 !== r
                  ? r
                  : 1;
            n.crossfadeOpacity && f
              ? ((o.opacity = u.mix(!1 !== f.isVisible ? 0 : g, m, Eo(p))),
                (i.opacity = n.preserveFollowOpacity ? g : u.mix(g, 0, bo(p))))
              : f || (o.opacity = u.mix(g, m, p)),
              (function (t, n, e, r, o, i) {
                for (var a = 0; a < So; a++) {
                  var s = "border" + Po[a] + "Radius",
                    c = wo(r, s),
                    l = wo(e, s);
                  if (
                    (void 0 !== c || void 0 !== l) &&
                    (c || (c = 0),
                    l || (l = 0),
                    "number" === typeof c && "number" === typeof l)
                  ) {
                    var f = Math.max(u.mix(c, l, i), 0);
                    t[s] = n[s] = f;
                  }
                }
                if (r.rotate || e.rotate) {
                  var d = u.mix(r.rotate || 0, e.rotate || 0, i);
                  t.rotate = n.rotate = d;
                }
                !o &&
                  e.backgroundColor &&
                  r.backgroundColor &&
                  (t.backgroundColor = n.backgroundColor =
                    u.mixColor(r.backgroundColor, e.backgroundColor)(i));
              })(o, i, d, v || {}, Boolean(f), p);
          }
        }
        return {
          isActive: function () {
            return o && (a || s.getFrameData().timestamp === c);
          },
          fromLead: function (t) {
            return f(0, t);
          },
          toLead: function (r) {
            var o = 0;
            return (
              n.prevValues || n.follow
                ? e.lead === n.follow &&
                  e.follow === n.lead &&
                  (o = 1 - t.get())
                : (o = 1),
              t.set(o),
              f(1, r)
            );
          },
          reset: function () {
            return t.set(1);
          },
          stop: function () {
            return t.stop();
          },
          getCrossfadeState: function (t) {
            return d(), t === n.lead ? o : t === n.follow ? i : void 0;
          },
          setOptions: function (t) {
            (e = n), (n = t), (o = {}), (i = {});
          },
          getLatestValues: function () {
            return o;
          },
        };
      }
      var Eo = Ao(0, 0.5, u.circOut),
        bo = Ao(0.5, 0.95, u.linear);
      function Ao(t, n, e) {
        return function (r) {
          return r < t ? 0 : r > n ? 1 : e(u.progress(t, n, r));
        };
      }
      var Po = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        So = Po.length;
      function wo(t, n) {
        var e;
        return null !== (e = t[n]) && void 0 !== e ? e : t.borderRadius;
      }
      function Co() {
        var t,
          n,
          e,
          o = new Set(),
          i = { leadIsExiting: !1 },
          a = r.__assign({}, i),
          u = _o(),
          s = !1;
        return {
          add: function (t) {
            t.setCrossfader(u),
              o.add(t),
              e && (t.prevDragCursor = e),
              i.lead || (i.lead = t);
          },
          remove: function (t) {
            o.delete(t);
          },
          getLead: function () {
            return i.lead;
          },
          updateSnapshot: function () {
            if (i.lead) {
              (t = u.isActive()
                ? u.getLatestValues()
                : i.lead.getLatestValues()),
                (n = i.lead.prevViewportBox);
              var r = ar.get(i.lead);
              r && r.isDragging && (e = r.cursorProgress);
            }
          },
          clearSnapshot: function () {
            e = n = void 0;
          },
          updateLeadAndFollow: function () {
            var n, e, c;
            a = r.__assign({}, i);
            for (var l = Array.from(o), f = l.length; f--; f >= 0) {
              var d = l[f];
              if (
                (e && ((null !== c && void 0 !== c) || (c = d)),
                (null !== e && void 0 !== e) || (e = d),
                e && c)
              )
                break;
            }
            (i.lead = e),
              (i.follow = c),
              (i.leadIsExiting =
                (null === (n = i.lead) || void 0 === n
                  ? void 0
                  : n.presence) === cr.Exiting),
              u.setOptions({
                lead: e,
                follow: c,
                prevValues: t,
                crossfadeOpacity:
                  (null === c || void 0 === c ? void 0 : c.isPresenceRoot) ||
                  (null === e || void 0 === e ? void 0 : e.isPresenceRoot),
              }),
              i.lead === a.follow ||
                (a.lead === i.lead && a.leadIsExiting === i.leadIsExiting) ||
                (s = !0);
          },
          animate: function (t, e) {
            var r;
            if ((void 0 === e && (e = !1), t === i.lead)) {
              e ? t.pointTo(i.lead) : t.setVisibility(!0);
              var o = {},
                a =
                  null === (r = i.follow) || void 0 === r
                    ? void 0
                    : r.getProjectionParent();
              if (
                (a && (o.prevParent = a),
                t.presence === cr.Entering
                  ? (o.originBox = i.follow ? i.follow.prevViewportBox : n)
                  : t.presence === cr.Exiting &&
                    (o.targetBox = (function () {
                      var t;
                      return null === (t = i.follow) || void 0 === t
                        ? void 0
                        : t.getLayoutState().layout;
                    })()),
                s)
              ) {
                s = !1;
                var c = t.getDefaultTransition();
                t.presence === cr.Entering ? u.toLead(c) : u.fromLead(c);
              }
              t.notifyLayoutReady(o);
            } else e ? i.lead && t.pointTo(i.lead) : t.setVisibility(!1);
          },
        };
      }
      var To = (function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (
            (n.children = new Set()),
            (n.stacks = new Map()),
            (n.hasMounted = !1),
            (n.updateScheduled = !1),
            (n.renderScheduled = !1),
            (n.syncContext = r.__assign(r.__assign({}, Cr()), {
              syncUpdate: function (t) {
                return n.scheduleUpdate(t);
              },
              forceUpdate: function () {
                (n.syncContext = r.__assign({}, n.syncContext)),
                  n.scheduleUpdate(!0);
              },
              register: function (t) {
                return n.addChild(t);
              },
              remove: function (t) {
                return n.removeChild(t);
              },
            })),
            n
          );
        }
        return (
          r.__extends(n, t),
          (n.prototype.componentDidMount = function () {
            this.hasMounted = !0;
          }),
          (n.prototype.componentDidUpdate = function () {
            this.startLayoutAnimation();
          }),
          (n.prototype.shouldComponentUpdate = function () {
            return (this.renderScheduled = !0), !0;
          }),
          (n.prototype.startLayoutAnimation = function () {
            var t = this;
            this.renderScheduled = this.updateScheduled = !1;
            var n = this.props.type;
            this.children.forEach(function (t) {
              t.isPresent
                ? t.presence !== cr.Entering &&
                  (t.presence =
                    t.presence === cr.Exiting ? cr.Entering : cr.Present)
                : (t.presence = cr.Exiting);
            }),
              this.updateStacks();
            var e = {
              layoutReady: function (e) {
                void 0 !== e.getLayoutId()
                  ? t.getStack(e).animate(e, "crossfade" === n)
                  : e.notifyLayoutReady();
              },
              parent: this.context.visualElement,
            };
            this.children.forEach(function (n) {
              return t.syncContext.add(n);
            }),
              this.syncContext.flush(e),
              this.stacks.forEach(function (t) {
                return t.clearSnapshot();
              });
          }),
          (n.prototype.updateStacks = function () {
            this.stacks.forEach(function (t) {
              return t.updateLeadAndFollow();
            });
          }),
          (n.prototype.scheduleUpdate = function (t) {
            void 0 === t && (t = !1),
              (!t && this.updateScheduled) ||
                ((this.updateScheduled = !0),
                this.children.forEach(function (t) {
                  !(function (t) {
                    for (var n = !1, e = {}, r = 0; r < G.length; r++) {
                      var o = "rotate" + G[r];
                      t.hasValue(o) &&
                        0 !== t.getStaticValue(o) &&
                        ((n = !0),
                        (e[o] = t.getStaticValue(o)),
                        t.setStaticValue(o, 0));
                    }
                    if (n) {
                      for (var o in (t.syncRender(), e))
                        t.setStaticValue(o, e[o]);
                      t.scheduleRender();
                    }
                  })(t),
                    t.shouldResetTransform() && t.resetTransform();
                }),
                this.children.forEach(Be),
                this.stacks.forEach(function (t) {
                  return t.updateSnapshot();
                }),
                (!t && this.renderScheduled) ||
                  ((this.renderScheduled = !0), this.forceUpdate()));
          }),
          (n.prototype.addChild = function (t) {
            this.children.add(t),
              this.addToStack(t),
              (t.presence = this.hasMounted ? cr.Entering : cr.Present);
          }),
          (n.prototype.removeChild = function (t) {
            this.scheduleUpdate(),
              this.children.delete(t),
              this.removeFromStack(t);
          }),
          (n.prototype.addToStack = function (t) {
            var n = this.getStack(t);
            null === n || void 0 === n || n.add(t);
          }),
          (n.prototype.removeFromStack = function (t) {
            var n = this.getStack(t);
            null === n || void 0 === n || n.remove(t);
          }),
          (n.prototype.getStack = function (t) {
            var n = t.getLayoutId();
            if (void 0 !== n)
              return (
                !this.stacks.has(n) && this.stacks.set(n, Co()),
                this.stacks.get(n)
              );
          }),
          (n.prototype.render = function () {
            return f.createElement(
              Vr.Provider,
              { value: this.syncContext },
              this.props.children
            );
          }),
          (n.contextType = E),
          n
        );
      })(f.Component);
      function Vo(t) {
        return "function" === typeof t;
      }
      var Lo = r.__assign(r.__assign({ renderer: co }, ae), vn),
        ko = r.__assign(r.__assign(r.__assign({}, Lo), fr), Mr);
      function Ro(t) {
        var n = P(function () {
          return Fn(t);
        });
        if (o.useContext(_).isStatic) {
          var e = r.__read(o.useState(t), 2)[1];
          o.useEffect(function () {
            return n.onChange(e);
          }, []);
        }
        return n;
      }
      function Mo(t, n) {
        o.useEffect(
          function () {
            if (rt(t)) return t.onChange(n);
          },
          [n]
        );
      }
      function Do(t, n) {
        var e = Ro(n()),
          r = function () {
            return e.set(n());
          };
        return (
          r(),
          (function (t, n) {
            o.useEffect(function () {
              var e = t.map(function (t) {
                return t.onChange(n);
              });
              return function () {
                return e.forEach(function (t) {
                  return t();
                });
              };
            });
          })(t, function () {
            return v.default.update(r, !1, !0);
          }),
          e
        );
      }
      var Oo = function (t) {
        return (function (t) {
          return "object" === typeof t && t.mix;
        })(t)
          ? t.mix
          : void 0;
      };
      function jo() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var e = !Array.isArray(t[0]),
          o = e ? 0 : -1,
          i = t[0 + o],
          a = t[1 + o],
          s = t[2 + o],
          c = t[3 + o],
          l = u.interpolate(a, s, r.__assign({ mixer: Oo(s[0]) }, c));
        return e ? l(i) : l;
      }
      function Bo(t, n, e, o) {
        var i = "function" === typeof n ? n : jo(n, e, o);
        return Array.isArray(t)
          ? Fo(t, i)
          : Fo([t], function (t) {
              var n = r.__read(t, 1)[0];
              return i(n);
            });
      }
      function Fo(t, n) {
        var e = P(function () {
          return [];
        });
        return Do(t, function () {
          e.length = 0;
          for (var r = t.length, o = 0; o < r; o++) e[o] = t[o].get();
          return n(e);
        });
      }
      function Io() {
        return {
          scrollX: Fn(0),
          scrollY: Fn(0),
          scrollXProgress: Fn(0),
          scrollYProgress: Fn(0),
        };
      }
      function Uo(t, n, e) {
        e.set(t && n ? t / n : 0);
      }
      function Ho(t, n) {
        var e = function () {
          var e = n(),
            r = e.xOffset,
            o = e.yOffset,
            i = e.xMaxOffset,
            a = e.yMaxOffset;
          t.scrollX.set(r),
            t.scrollY.set(o),
            Uo(r, i, t.scrollXProgress),
            Uo(o, a, t.scrollYProgress);
        };
        return e(), e;
      }
      var Xo;
      function Yo() {
        return {
          xOffset: window.pageXOffset,
          yOffset: window.pageYOffset,
          xMaxOffset: document.body.clientWidth - window.innerWidth,
          yMaxOffset: document.body.clientHeight - window.innerHeight,
        };
      }
      var zo,
        No = !1;
      function Wo() {
        var t = !1,
          n = [],
          e = new Set(),
          o = {
            subscribe: function (t) {
              return (
                e.add(t),
                function () {
                  e.delete(t);
                }
              );
            },
            start: function (r, o) {
              if (t) {
                var i = [];
                return (
                  e.forEach(function (t) {
                    i.push($n(t, r, { transitionOverride: o }));
                  }),
                  Promise.all(i)
                );
              }
              return new Promise(function (t) {
                n.push({ animation: [r, o], resolve: t });
              });
            },
            set: function (n) {
              return (
                i.invariant(
                  t,
                  "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
                ),
                e.forEach(function (t) {
                  !(function (t, n) {
                    Array.isArray(n)
                      ? Wn(t, n)
                      : "string" === typeof n
                      ? Wn(t, [n])
                      : Nn(t, n);
                  })(t, n);
                })
              );
            },
            stop: function () {
              e.forEach(function (t) {
                !(function (t) {
                  t.forEachValue(function (t) {
                    return t.stop();
                  });
                })(t);
              });
            },
            mount: function () {
              return (
                (t = !0),
                n.forEach(function (t) {
                  var n = t.animation,
                    e = t.resolve;
                  o.start.apply(o, r.__spreadArray([], r.__read(n))).then(e);
                }),
                function () {
                  (t = !1), o.stop();
                }
              );
            },
          };
        return o;
      }
      var Zo = (function () {
          function t() {
            this.componentControls = new Set();
          }
          return (
            (t.prototype.subscribe = function (t) {
              var n = this;
              return (
                this.componentControls.add(t),
                function () {
                  return n.componentControls.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, n) {
              this.componentControls.forEach(function (e) {
                e.start(t.nativeEvent || t, n);
              });
            }),
            (t.prototype.updateConstraints = function (t) {
              void 0 === t && (t = !0),
                this.componentControls.forEach(function (t) {
                  t.updateConstraints();
                }),
                t && rr();
            }),
            t
          );
        })(),
        Ko = function () {
          return new Zo();
        };
      var Go = function () {
          return {};
        },
        $o = Xr({
          build: function () {},
          measureViewportBox: ge,
          resetTransform: function () {},
          restoreTransform: function () {},
          removeValueFromRenderState: function () {},
          render: function () {},
          scrapeMotionValuesFromProps: Go,
          readValueFromInstance: function (t, n, e) {
            return e.initialState[n] || 0;
          },
          makeTargetAnimatable: function (t, n) {
            var e = n.transition,
              o = n.transitionEnd,
              i = r.__rest(n, ["transition", "transitionEnd"]);
            return (
              Zn(t, i, Gn(i, e || {}, t)),
              r.__assign({ transition: e, transitionEnd: o }, i)
            );
          },
        }),
        qo = Bt({ scrapeMotionValuesFromProps: Go, createRenderState: Go });
      var Jo = function (t) {
          return t > 0.001 ? 1 / t : 1e5;
        },
        Qo = !1;
      (n.AnimatePresence = function (t) {
        var n = t.children,
          e = t.custom,
          i = t.initial,
          a = void 0 === i || i,
          u = t.onExitComplete,
          s = t.exitBeforeEnter,
          c = t.presenceAffectsLayout,
          l = void 0 === c || c,
          d = (function () {
            var t = o.useRef(!1),
              n = r.__read(o.useState(0), 2),
              e = n[0],
              i = n[1];
            return (
              fn(function () {
                return (t.current = !0);
              }),
              o.useCallback(
                function () {
                  !t.current && i(e + 1);
                },
                [e]
              )
            );
          })(),
          v = o.useContext(Vr);
        kr(v) && (d = v.forceUpdate);
        var p = o.useRef(!0),
          m = (function (t) {
            var n = [];
            return (
              o.Children.forEach(t, function (t) {
                o.isValidElement(t) && n.push(t);
              }),
              n
            );
          })(n),
          g = o.useRef(m),
          y = o.useRef(new Map()).current,
          h = o.useRef(new Set()).current;
        if (
          ((function (t, n) {
            t.forEach(function (t) {
              var e = ho(t);
              n.set(e, t);
            });
          })(m, y),
          p.current)
        )
          return (
            (p.current = !1),
            f.createElement(
              f.Fragment,
              null,
              m.map(function (t) {
                return f.createElement(
                  go,
                  {
                    key: ho(t),
                    isPresent: !0,
                    initial: !!a && void 0,
                    presenceAffectsLayout: l,
                  },
                  t
                );
              })
            )
          );
        for (
          var x = r.__spreadArray([], r.__read(m)),
            _ = g.current.map(ho),
            E = m.map(ho),
            b = _.length,
            A = 0;
          A < b;
          A++
        ) {
          var P = _[A];
          -1 === E.indexOf(P) ? h.add(P) : h.delete(P);
        }
        return (
          s && h.size && (x = []),
          h.forEach(function (t) {
            if (-1 === E.indexOf(t)) {
              var n = y.get(t);
              if (n) {
                var r = _.indexOf(t);
                x.splice(
                  r,
                  0,
                  f.createElement(
                    go,
                    {
                      key: ho(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        y.delete(t), h.delete(t);
                        var n = g.current.findIndex(function (n) {
                          return n.key === t;
                        });
                        g.current.splice(n, 1),
                          h.size || ((g.current = m), d(), u && u());
                      },
                      custom: e,
                      presenceAffectsLayout: l,
                    },
                    n
                  )
                );
              }
            }
          }),
          (x = x.map(function (t) {
            var n = t.key;
            return h.has(n)
              ? t
              : f.createElement(
                  go,
                  { key: ho(t), isPresent: !0, presenceAffectsLayout: l },
                  t
                );
          })),
          (g.current = x),
          f.createElement(
            f.Fragment,
            null,
            h.size
              ? x
              : x.map(function (t) {
                  return o.cloneElement(t);
                })
          )
        );
      }),
        (n.AnimateSharedLayout = To),
        (n.DragControls = Zo),
        (n.FlatTree = Hr),
        (n.FramerTreeLayoutContext = Lr),
        (n.LayoutGroupContext = L),
        (n.LazyMotion = function (t) {
          var n = t.children,
            e = t.features,
            i = t.strict,
            a = void 0 !== i && i,
            u = r.__read(o.useState(!Vo(e)), 2)[1],
            s = o.useRef(void 0);
          if (!Vo(e)) {
            var c = e.renderer,
              l = r.__rest(e, ["renderer"]);
            (s.current = c), g(l);
          }
          return (
            o.useEffect(function () {
              Vo(e) &&
                e().then(function (t) {
                  var n = t.renderer;
                  g(r.__rest(t, ["renderer"])), (s.current = n), u(!0);
                });
            }, []),
            f.createElement(
              y.Provider,
              { value: { renderer: s.current, strict: a } },
              n
            )
          );
        }),
        (n.MotionConfig = function (t) {
          var n = t.children,
            e = r.__rest(t, ["children"]);
          (e = r.__assign(r.__assign({}, o.useContext(_)), e)).isStatic = P(
            function () {
              return e.isStatic;
            }
          );
          var i =
              "object" === typeof e.transition ? e.transition.toString() : "",
            a = o.useMemo(
              function () {
                return e;
              },
              [i, e.transformPagePoint]
            );
          return f.createElement(_.Provider, { value: a }, n);
        }),
        (n.MotionConfigContext = _),
        (n.MotionValue = Bn),
        (n.PresenceContext = A),
        (n.SharedLayoutContext = Vr),
        (n.addScaleCorrection = K),
        (n.animate = xo),
        (n.animateVisualElement = $n),
        (n.animationControls = Wo),
        (n.batchLayout = er),
        (n.createBatcher = Cr),
        (n.createCrossfader = _o),
        (n.createDomMotionComponent = function (t) {
          return Y(Xt(t, { forwardMotionProps: !1 }, lo, co));
        }),
        (n.createMotionComponent = Y),
        (n.domAnimation = Lo),
        (n.domMax = ko),
        (n.flushLayout = rr),
        (n.isValidMotionProp = mt),
        (n.m = vo),
        (n.motion = fo),
        (n.motionValue = Fn),
        (n.resolveMotionValue = Ot),
        (n.snapshotViewportBox = Be),
        (n.transform = jo),
        (n.useAnimation = function () {
          var t = P(Wo);
          return o.useEffect(t.mount, []), t;
        }),
        (n.useCycle = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var e = o.useRef(0),
            i = r.__read(o.useState(t[e.current]), 2),
            a = i[0],
            s = i[1];
          return [
            a,
            function (n) {
              (e.current =
                "number" !== typeof n ? u.wrap(0, t.length, e.current + 1) : n),
                s(t[e.current]);
            },
          ];
        }),
        (n.useDeprecatedAnimatedState = function (t) {
          var n = r.__read(o.useState(t), 2),
            e = n[0],
            i = n[1],
            a = qo({}, !1),
            u = P(function () {
              return $o({ props: {}, visualState: a }, { initialState: t });
            });
          return (
            o.useEffect(function () {
              return u.mount({}), u.unmount();
            }, []),
            o.useEffect(function () {
              u.setProps({
                onUpdate: function (t) {
                  return i(r.__assign({}, t));
                },
              });
            }),
            [
              e,
              P(function () {
                return function (t) {
                  return $n(u, t);
                };
              }),
            ]
          );
        }),
        (n.useDeprecatedInvertedScale = function (t) {
          var n = Ro(1),
            e = Ro(1),
            r = b();
          return (
            i.invariant(
              !(!t && !r),
              "If no scale values are provided, useInvertedScale must be used within a child of another motion component."
            ),
            i.warning(
              Qo,
              "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."
            ),
            (Qo = !0),
            t
              ? ((n = t.scaleX || n), (e = t.scaleY || e))
              : r &&
                ((n = r.getValue("scaleX", 1)), (e = r.getValue("scaleY", 1))),
            { scaleX: Bo(n, Jo), scaleY: Bo(e, Jo) }
          );
        }),
        (n.useDomEvent = zt),
        (n.useDragControls = function () {
          return P(Ko);
        }),
        (n.useElementScroll = function (t) {
          var n = P(Io);
          return (
            R(function () {
              var e = t.current;
              if (
                (i.invariant(
                  !!e,
                  "ref provided to useScroll must be passed into a HTML element."
                ),
                e)
              ) {
                var r = Ho(
                    n,
                    (function (t) {
                      return function () {
                        return {
                          xOffset: t.scrollLeft,
                          yOffset: t.scrollTop,
                          xMaxOffset: t.scrollWidth - t.offsetWidth,
                          yMaxOffset: t.scrollHeight - t.offsetHeight,
                        };
                      };
                    })(e)
                  ),
                  o = Yt(e, "scroll", r, { passive: !0 }),
                  a = Yt(e, "resize", r);
                return function () {
                  o && o(), a && a();
                };
              }
            }, []),
            n
          );
        }),
        (n.useIsPresent = function () {
          return w(o.useContext(A));
        }),
        (n.useMotionTemplate = function (t) {
          for (var n = [], e = 1; e < arguments.length; e++)
            n[e - 1] = arguments[e];
          var r = t.length;
          function o() {
            for (var e = "", o = 0; o < r; o++) {
              (e += t[o]), n[o] && (e += n[o].get());
            }
            return e;
          }
          return Do(n, o);
        }),
        (n.useMotionValue = Ro),
        (n.usePresence = S),
        (n.useReducedMotion = function () {
          !zo &&
            (function () {
              if (((zo = Fn(null)), "undefined" !== typeof window))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    n = function () {
                      return zo.set(t.matches);
                    };
                  t.addListener(n), n();
                } else zo.set(!1);
            })();
          var t = r.__read(o.useState(zo.get()), 2),
            n = t[0],
            e = t[1];
          return Mo(zo, e), n;
        }),
        (n.useSpring = function (t, n) {
          void 0 === n && (n = {});
          var e = o.useContext(_).isStatic,
            i = o.useRef(null),
            a = Ro(rt(t) ? t.get() : t);
          return (
            o.useMemo(function () {
              return a.attach(function (t, o) {
                return e
                  ? o(t)
                  : (i.current && i.current.stop(),
                    (i.current = u.animate(
                      r.__assign(
                        r.__assign(
                          { from: a.get(), to: t, velocity: a.getVelocity() },
                          n
                        ),
                        { onUpdate: o }
                      )
                    )),
                    a.get());
              });
            }, Object.values(n)),
            Mo(t, function (t) {
              return a.set(parseFloat(t));
            }),
            a
          );
        }),
        (n.useTransform = Bo),
        (n.useVelocity = function (t) {
          var n = Ro(t.getVelocity());
          return (
            o.useEffect(
              function () {
                return t.velocityUpdateSubscribers.add(function (t) {
                  n.set(t);
                });
              },
              [t]
            ),
            n
          );
        }),
        (n.useViewportScroll = function () {
          return (
            Xo || (Xo = Io()),
            R(function () {
              !No &&
                (function () {
                  if (((No = !0), "undefined" !== typeof window)) {
                    var t = Ho(Xo, Yo);
                    Yt(window, "scroll", t, { passive: !0 }),
                      Yt(window, "resize", t);
                  }
                })();
            }, []),
            Xo
          );
        }),
        (n.visualElement = Xr);
    },
  },
]);

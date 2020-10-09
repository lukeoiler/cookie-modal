!(function (n) {
  var o = {};
  function i(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = n),
    (i.c = o),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 4));
})([
  function (e, t, n) {
    var o = n(1);
    "string" == typeof o && (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    n(3)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    (e.exports = n(2)(!1)).push([
      e.i,
      "#ada-dialog {\n  position: fixed;\n  background: transparent;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  border: none;\n  outline: none;\n  box-shadow: rgba(4, 4, 8, 0.27) 0px 4px 10px -1px, rgba(4, 4, 8, 0.07) 0px 2px 30px -5px;\n}\n\n.ada-dialog-modal {\n  width: 412px;\n  min-height: 460px;\n  max-height: 700px;\n  overflow: hidden;\n  border-radius: 12px;\n}\n\n.ada-dialog-fullscreen {\n  max-height: 100%;\n  width: 100%;\n  border-radius: 0;\n}\n\ndialog#ada-dialog::backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(41, 55, 84, 0.5);\n}\n\ndialog#ada-dialog:not([open]) {\n  display: none;\n}\n\n._dialog_overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(41, 55, 84, 0.5);\n}\n\ndialog#ada-dialog.fixed {\n  position: fixed;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\nheader.ada-header {\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 4px 20px -10px rgba(0, 0, 0, 0.12), 0 2px 4px 1px rgba(151, 167, 191, 0.08)\n}\n\nh1.app-title {\n  font-family: 'Noto Sans', sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  color: #1b2a44;\n}\n\nbutton#ada-close-button {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  padding: 8px;\n  right: 0;\n  top: 0;\n  height: 100%;\n  cursor: pointer;\n  line-height: 0;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  pointer-events: auto;\n  flex-shrink: 0;\n  background-color: #fff;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\nbutton#ada-close-button:focus {\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n  -webkit-transition-duration: 0.08s;\n  transition-duration: 0.08s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #6fb7ff;\n}\n\nbutton#ada-close-button:hover, :active {\n  background-color: #f5faff;\n}\n\n#ada-iframe-wrapper {\n  position: relative;\n  flex-grow: 1;\n  height: 100%;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n#ada-iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #fff;\n}\n\n#ada-btn-cross {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  fill: rgb(27, 42, 68);\n  pointer-events: none;\n}\n",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (n) {
      var l = [];
      return (
        (l.toString = function () {
          return this.map(function (e) {
            var t = (function (e, t) {
              var n = e[1] || "",
                o = e[3];
              if (!o) return n;
              if (t && "function" == typeof btoa) {
                var i = (function (e) {
                    var t = btoa(
                        unescape(encodeURIComponent(JSON.stringify(e)))
                      ),
                      n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        t
                      );
                    return "/*# ".concat(n, " */");
                  })(o),
                  a = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot)
                      .concat(e, " */");
                  });
                return [n].concat(a).concat([i]).join("\n");
              }
              return [n].join("\n");
            })(e, n);
            return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
          }).join("");
        }),
        (l.i = function (e, t) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var n = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (n[i] = !0);
          }
          for (var a = 0; a < e.length; a++) {
            var r = e[a];
            (null != r[0] && n[r[0]]) ||
              (t && !r[2]
                ? (r[2] = t)
                : t && (r[2] = "(".concat(r[2], ") and (").concat(t, ")")),
              l.push(r));
          }
        }),
        l
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var n,
      o,
      u = {},
      a = function () {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      r =
        ((o = {}),
        function (e) {
          if (void 0 === o[e]) {
            var t = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            o[e] = t;
          }
          return o[e];
        });
    function c(e, t) {
      for (var n = [], o = {}, i = 0; i < e.length; i++) {
        var a = e[i],
          r = t.base ? a[0] + t.base : a[0],
          l = { css: a[1], media: a[2], sourceMap: a[3] };
        o[r] ? o[r].parts.push(l) : n.push((o[r] = { id: r, parts: [l] }));
      }
      return n;
    }
    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
          i = u[o.id],
          a = 0;
        if (i) {
          for (i.refs++; a < i.parts.length; a++) i.parts[a](o.parts[a]);
          for (; a < o.parts.length; a++) i.parts.push(m(o.parts[a], t));
        } else {
          for (var r = []; a < o.parts.length; a++) r.push(m(o.parts[a], t));
          u[o.id] = { id: o.id, refs: 1, parts: r };
        }
      }
    }
    function l(t) {
      var n = document.createElement("style");
      if (void 0 === t.attributes.nonce) {
        var e = i.nc;
        e && (t.attributes.nonce = e);
      }
      if (
        (Object.keys(t.attributes).forEach(function (e) {
          n.setAttribute(e, t.attributes[e]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(n);
      else {
        var o = r(t.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(n);
      }
      return n;
    }
    var s,
      d =
        ((s = []),
        function (e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function f(e, t, n, o) {
      var i = n ? "" : o.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, i);
      else {
        var a = document.createTextNode(i),
          r = e.childNodes;
        r[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(a, r[t]) : e.appendChild(a);
      }
    }
    var h = null,
      g = 0;
    function m(t, e) {
      var n, o, i;
      if (e.singleton) {
        var a = g++;
        (n = h = h || l(e)),
          (o = f.bind(null, n, a, !1)),
          (i = f.bind(null, n, a, !0));
      } else
        (n = l(e)),
          (o = function (e, t, n) {
            var o = n.css,
              i = n.media,
              a = n.sourceMap;
            if (
              (i && e.setAttribute("media", i),
              a &&
                btoa &&
                (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                  " */"
                )),
              e.styleSheet)
            )
              e.styleSheet.cssText = o;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(o));
            }
          }.bind(null, n, e)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            o((t = e));
          } else i();
        }
      );
    }
    e.exports = function (e, s) {
      ((s = s || {}).attributes =
        "object" == typeof s.attributes ? s.attributes : {}),
        s.singleton || "boolean" == typeof s.singleton || (s.singleton = a());
      var d = c(e, s);
      return (
        p(d, s),
        function (e) {
          for (var t = [], n = 0; n < d.length; n++) {
            var o = d[n],
              i = u[o.id];
            i && (i.refs--, t.push(i));
          }
          e && p(c(e, s), s);
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            if (0 === r.refs) {
              for (var l = 0; l < r.parts.length; l++) r.parts[l]();
              delete u[r.id];
            }
          }
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var o = window.CustomEvent;
    function i(e) {
      for (; e; ) {
        if ("dialog" === e.localName) return e;
        e = e.parentElement;
      }
      return null;
    }
    function a(e) {
      e && e.blur && e !== document.body && e.blur();
    }
    function d(e, t) {
      for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
      return !1;
    }
    function r(e) {
      return (
        !(!e || !e.hasAttribute("method")) &&
        "dialog" === e.getAttribute("method").toLowerCase()
      );
    }
    function l(n) {
      if (
        ((this.dialog_ = n),
        (this.replacedStyleTop_ = !1),
        (this.openAsModal_ = !1),
        n.hasAttribute("role") || n.setAttribute("role", "dialog"),
        (n.show = this.show.bind(this)),
        (n.showModal = this.showModal.bind(this)),
        (n.close = this.close.bind(this)),
        "returnValue" in n || (n.returnValue = ""),
        "MutationObserver" in window)
      ) {
        new MutationObserver(this.maybeHideModal.bind(this)).observe(n, {
          attributes: !0,
          attributeFilter: ["open"],
        });
      } else {
        var o,
          i = !1,
          a = function () {
            i ? this.downgradeModal() : this.maybeHideModal(), (i = !1);
          }.bind(this),
          t = function (e) {
            if (e.target === n) {
              var t = "DOMNodeRemoved";
              (i |= e.type.substr(0, t.length) === t),
                window.clearTimeout(o),
                (o = window.setTimeout(a, 0));
            }
          };
        [
          "DOMAttrModified",
          "DOMNodeRemoved",
          "DOMNodeRemovedFromDocument",
        ].forEach(function (e) {
          n.addEventListener(e, t);
        });
      }
      Object.defineProperty(n, "open", {
        set: this.setOpen.bind(this),
        get: n.hasAttribute.bind(n, "open"),
      }),
        (this.backdrop_ = document.createElement("div")),
        (this.backdrop_.className = "backdrop"),
        this.backdrop_.addEventListener(
          "click",
          this.backdropClick_.bind(this)
        );
    }
    (o && "object" != typeof o) ||
      ((o = function (e, t) {
        t = t || {};
        var n = document.createEvent("CustomEvent");
        return (
          n.initCustomEvent(e, !!t.bubbles, !!t.cancelable, t.detail || null), n
        );
      }).prototype = window.Event.prototype),
      (l.prototype = {
        get dialog() {
          return this.dialog_;
        },
        maybeHideModal: function () {
          (this.dialog_.hasAttribute("open") &&
            document.body.contains(this.dialog_)) ||
            this.downgradeModal();
        },
        downgradeModal: function () {
          this.openAsModal_ &&
            ((this.openAsModal_ = !1),
            (this.dialog_.style.zIndex = ""),
            this.replacedStyleTop_ &&
              ((this.dialog_.style.top = ""), (this.replacedStyleTop_ = !1)),
            this.backdrop_.parentNode &&
              this.backdrop_.parentNode.removeChild(this.backdrop_),
            s.dm.removeDialog(this));
        },
        setOpen: function (e) {
          e
            ? this.dialog_.hasAttribute("open") ||
              this.dialog_.setAttribute("open", "")
            : (this.dialog_.removeAttribute("open"), this.maybeHideModal());
        },
        backdropClick_: function (e) {
          if (this.dialog_.hasAttribute("tabindex")) this.dialog_.focus();
          else {
            var t = document.createElement("div");
            this.dialog_.insertBefore(t, this.dialog_.firstChild),
              (t.tabIndex = -1),
              t.focus(),
              this.dialog_.removeChild(t);
          }
          var n = document.createEvent("MouseEvents");
          n.initMouseEvent(
            e.type,
            e.bubbles,
            e.cancelable,
            window,
            e.detail,
            e.screenX,
            e.screenY,
            e.clientX,
            e.clientY,
            e.ctrlKey,
            e.altKey,
            e.shiftKey,
            e.metaKey,
            e.button,
            e.relatedTarget
          ),
            this.dialog_.dispatchEvent(n),
            e.stopPropagation();
        },
        focus_: function () {
          var e = this.dialog_.querySelector("[autofocus]:not([disabled])");
          if ((!e && 0 <= this.dialog_.tabIndex && (e = this.dialog_), !e)) {
            var t = ["button", "input", "keygen", "select", "textarea"].map(
              function (e) {
                return e + ":not([disabled])";
              }
            );
            t.push('[tabindex]:not([disabled]):not([tabindex=""])'),
              (e = this.dialog_.querySelector(t.join(", ")));
          }
          a(document.activeElement), e && e.focus();
        },
        updateZIndex: function (e, t) {
          if (e < t) throw new Error("dialogZ should never be < backdropZ");
          (this.dialog_.style.zIndex = e), (this.backdrop_.style.zIndex = t);
        },
        show: function () {
          this.dialog_.open || (this.setOpen(!0), this.focus_());
        },
        showModal: function () {
          if (this.dialog_.hasAttribute("open"))
            throw new Error(
              "Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally."
            );
          if (!document.body.contains(this.dialog_))
            throw new Error(
              "Failed to execute 'showModal' on dialog: The element is not in a Document."
            );
          if (!s.dm.pushDialog(this))
            throw new Error(
              "Failed to execute 'showModal' on dialog: There are too many open modal dialogs."
            );
          !(function (e) {
            for (; e && e !== document.body; ) {
              var n = window.getComputedStyle(e),
                t = function (e, t) {
                  return !(void 0 === n[e] || n[e] === t);
                };
              if (
                n.opacity < 1 ||
                t("zIndex", "auto") ||
                t("transform", "none") ||
                t("mixBlendMode", "normal") ||
                t("filter", "none") ||
                t("perspective", "none") ||
                "isolate" === n.isolation ||
                "fixed" === n.position ||
                "touch" === n.webkitOverflowScrolling
              )
                return !0;
              e = e.parentElement;
            }
            return !1;
          })(this.dialog_.parentElement) ||
            console.warn(
              "A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"
            ),
            this.setOpen(!0),
            (this.openAsModal_ = !0),
            s.needsCentering(this.dialog_)
              ? (s.reposition(this.dialog_), (this.replacedStyleTop_ = !0))
              : (this.replacedStyleTop_ = !1),
            this.dialog_.parentNode.insertBefore(
              this.backdrop_,
              this.dialog_.nextSibling
            ),
            this.focus_();
        },
        close: function (e) {
          if (!this.dialog_.hasAttribute("open"))
            throw new Error(
              "Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed."
            );
          this.setOpen(!1), void 0 !== e && (this.dialog_.returnValue = e);
          var t = new o("close", { bubbles: !1, cancelable: !1 });
          this.dialog_.dispatchEvent(t);
        },
      });
    var s = {
      reposition: function (e) {
        var t = document.body.scrollTop || document.documentElement.scrollTop,
          n = t + (window.innerHeight - e.offsetHeight) / 2;
        e.style.top = Math.max(t, n) + "px";
      },
      isInlinePositionSetByStylesheet: function (e) {
        for (var t = 0; t < document.styleSheets.length; ++t) {
          var n = document.styleSheets[t],
            o = null;
          try {
            o = n.cssRules;
          } catch (e) {}
          if (o)
            for (var i = 0; i < o.length; ++i) {
              var a = o[i],
                r = null;
              try {
                r = document.querySelectorAll(a.selectorText);
              } catch (e) {}
              if (r && d(r, e)) {
                var l = a.style.getPropertyValue("top"),
                  s = a.style.getPropertyValue("bottom");
                if ((l && "auto" !== l) || (s && "auto" !== s)) return !0;
              }
            }
        }
        return !1;
      },
      needsCentering: function (e) {
        return (
          "absolute" === window.getComputedStyle(e).position &&
          !(
            ("auto" !== e.style.top && "" !== e.style.top) ||
            ("auto" !== e.style.bottom && "" !== e.style.bottom)
          ) &&
          !s.isInlinePositionSetByStylesheet(e)
        );
      },
      forceRegisterDialog: function (e) {
        if (
          ((window.HTMLDialogElement || e.showModal) &&
            console.warn(
              "This browser already supports <dialog>, the polyfill may not work correctly",
              e
            ),
          "dialog" !== e.localName)
        )
          throw new Error(
            "Failed to register dialog: The element is not a dialog."
          );
        new l(e);
      },
      registerDialog: function (e) {
        e.showModal || s.forceRegisterDialog(e);
      },
      DialogManager: function () {
        this.pendingDialogStack = [];
        var t = this.checkDOM_.bind(this);
        (this.overlay = document.createElement("div")),
          (this.overlay.className = "_dialog_overlay"),
          this.overlay.addEventListener(
            "click",
            function (e) {
              (this.forwardTab_ = void 0), e.stopPropagation(), t([]);
            }.bind(this)
          ),
          (this.handleKey_ = this.handleKey_.bind(this)),
          (this.handleFocus_ = this.handleFocus_.bind(this)),
          (this.zIndexLow_ = 1e5),
          (this.zIndexHigh_ = 100150),
          (this.forwardTab_ = void 0),
          "MutationObserver" in window &&
            (this.mo_ = new MutationObserver(function (e) {
              var o = [];
              e.forEach(function (e) {
                for (var t, n = 0; (t = e.removedNodes[n]); ++n)
                  t instanceof Element &&
                    ("dialog" === t.localName && o.push(t),
                    (o = o.concat(t.querySelectorAll("dialog"))));
              }),
                o.length && t(o);
            }));
      },
    };
    if (
      ((s.DialogManager.prototype.blockDocument = function () {
        document.documentElement.addEventListener(
          "focus",
          this.handleFocus_,
          !0
        ),
          document.addEventListener("keydown", this.handleKey_),
          this.mo_ &&
            this.mo_.observe(document, { childList: !0, subtree: !0 });
      }),
      (s.DialogManager.prototype.unblockDocument = function () {
        document.documentElement.removeEventListener(
          "focus",
          this.handleFocus_,
          !0
        ),
          document.removeEventListener("keydown", this.handleKey_),
          this.mo_ && this.mo_.disconnect();
      }),
      (s.DialogManager.prototype.updateStacking = function () {
        for (
          var e, t = this.zIndexHigh_, n = 0;
          (e = this.pendingDialogStack[n]);
          ++n
        )
          e.updateZIndex(--t, --t),
            0 === n && (this.overlay.style.zIndex = --t);
        var o = this.pendingDialogStack[0];
        o
          ? (o.dialog.parentNode || document.body).appendChild(this.overlay)
          : this.overlay.parentNode &&
            this.overlay.parentNode.removeChild(this.overlay);
      }),
      (s.DialogManager.prototype.containedByTopDialog_ = function (e) {
        for (; (e = i(e)); ) {
          for (var t, n = 0; (t = this.pendingDialogStack[n]); ++n)
            if (t.dialog === e) return 0 === n;
          e = e.parentElement;
        }
        return !1;
      }),
      (s.DialogManager.prototype.handleFocus_ = function (e) {
        if (
          !this.containedByTopDialog_(e.target) &&
          document.activeElement !== document.documentElement &&
          (e.preventDefault(),
          e.stopPropagation(),
          a(e.target),
          void 0 !== this.forwardTab_)
        ) {
          var t = this.pendingDialogStack[0];
          return (
            t.dialog.compareDocumentPosition(e.target) &
              Node.DOCUMENT_POSITION_PRECEDING &&
              (this.forwardTab_
                ? t.focus_()
                : e.target !== document.documentElement &&
                  document.documentElement.focus()),
            !1
          );
        }
      }),
      (s.DialogManager.prototype.handleKey_ = function (e) {
        if (((this.forwardTab_ = void 0), 27 === e.keyCode)) {
          e.preventDefault(), e.stopPropagation();
          var t = new o("cancel", { bubbles: !1, cancelable: !0 }),
            n = this.pendingDialogStack[0];
          n && n.dialog.dispatchEvent(t) && n.dialog.close();
        } else 9 === e.keyCode && (this.forwardTab_ = !e.shiftKey);
      }),
      (s.DialogManager.prototype.checkDOM_ = function (t) {
        this.pendingDialogStack.slice().forEach(function (e) {
          -1 !== t.indexOf(e.dialog) ? e.downgradeModal() : e.maybeHideModal();
        });
      }),
      (s.DialogManager.prototype.pushDialog = function (e) {
        var t = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
        return (
          !(this.pendingDialogStack.length >= t) &&
          (1 === this.pendingDialogStack.unshift(e) && this.blockDocument(),
          this.updateStacking(),
          !0)
        );
      }),
      (s.DialogManager.prototype.removeDialog = function (e) {
        var t = this.pendingDialogStack.indexOf(e);
        -1 !== t &&
          (this.pendingDialogStack.splice(t, 1),
          0 === this.pendingDialogStack.length && this.unblockDocument(),
          this.updateStacking());
      }),
      (s.dm = new s.DialogManager()),
      (s.formSubmitter = null),
      (s.useValue = null),
      void 0 === window.HTMLDialogElement)
    ) {
      var u = document.createElement("form");
      if ((u.setAttribute("method", "dialog"), "dialog" !== u.method)) {
        var c = Object.getOwnPropertyDescriptor(
          HTMLFormElement.prototype,
          "method"
        );
        if (c) {
          var p = c.get;
          c.get = function () {
            return r(this) ? "dialog" : p.call(this);
          };
          var f = c.set;
          (c.set = function (e) {
            return "string" == typeof e && "dialog" === e.toLowerCase()
              ? this.setAttribute("method", e)
              : f.call(this, e);
          }),
            Object.defineProperty(HTMLFormElement.prototype, "method", c);
        }
      }
      document.addEventListener(
        "click",
        function (e) {
          if (
            ((s.formSubmitter = null), (s.useValue = null), !e.defaultPrevented)
          ) {
            var t = e.target;
            if (t && r(t.form)) {
              if (
                !(
                  "submit" === t.type &&
                  -1 < ["button", "input"].indexOf(t.localName)
                )
              ) {
                if ("input" !== t.localName || "image" !== t.type) return;
                s.useValue = e.offsetX + "," + e.offsetY;
              }
              i(t) && (s.formSubmitter = t);
            }
          }
        },
        !1
      );
      var h = HTMLFormElement.prototype.submit;
      (HTMLFormElement.prototype.submit = function () {
        if (!r(this)) return h.call(this);
        var e = i(this);
        e && e.close();
      }),
        document.addEventListener(
          "submit",
          function (e) {
            var t = e.target;
            if (r(t)) {
              e.preventDefault();
              var n = i(t);
              if (n) {
                var o = s.formSubmitter;
                o && o.form === t ? n.close(s.useValue || o.value) : n.close(),
                  (s.formSubmitter = null);
              }
            }
          },
          !0
        );
    }
    var g = s;
    function m(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var b = (function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (o = o.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          o.forEach(function (e) {
            m(t, e, n[e]);
          });
      }
      return t;
    })(
      {
        "en-US": { value: "en-US", header: "Symptom assessment" },
        "en-GB": { value: "en-GB", header: "Symptom assessment" },
        "de-DE": { value: "de-DE", header: "Symptomanalyse" },
        "es-ES": { value: "es-ES", header: "EvaluaciÃ³n de sÃ­ntomas" },
        "pt-BR": { value: "pt-BR", header: "AvaliaÃ§Ã£o de sintomas" },
      },
      {}
    );
    function v(e) {
      return (v =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var y = 768,
      w = "ada-dialog",
      x = "ada-iframe-wrapper",
      _ = "#" + w,
      E = "#" + x,
      S = "screen-reader-disclaimer",
      M = "For the best experience please use Chrome.",
      k = { APP_READY: "ada-app/ready" };
    function D() {
      var e = document.querySelector("#ada-button");
      e && (e.setAttribute("aria-describedby", S), C.init(window.adaConfig)),
        (window.adaApp = C),
        window.dispatchEvent(new Event(k.APP_READY));
    }
    var A,
      C = {
        hide: function () {
          document.querySelector(_).close(),
            (function (e) {
              document.querySelector("#ada-iframe").setAttribute("src", P(e));
            })(A);
        },
        init: function (e) {
          (A = (function (e) {
            var t = e.customization || e.partner || "demo",
              n = (function (e) {
                var t = !e.language,
                  n = "object" === v(e.language),
                  o = !(!e.language || !e.language.defaultLanguage),
                  i = O(o && e.language.defaultLanguage),
                  a = O(document.documentElement.lang),
                  r = O(
                    document
                      .getElementsByTagName("html")[0]
                      .getAttribute("xml:lang")
                  ),
                  l = !1;
                return (
                  n &&
                    !o &&
                    console.warn(
                      "ADA CONFIG: Please provide a valid defaultLanguage."
                    ),
                  (n && !t) ||
                    console.warn(
                      "ADA CONFIG DEPRECATION WARNING: Please provide a valid language object including a defaultLanguage."
                    ),
                  n || "string" != typeof e.language
                    ? (t && (l = !0),
                      n && (l = e.language.automaticDetection),
                      l ? r || a || i || "en-US" : i || "en-US")
                    : e.language
                );
              })(e);
            return { customization: t, language: n };
          })(e)),
            (function () {
              var e = document.querySelector(_);
              e && e.parentNode.removeChild(e);
            })(),
            (function (e) {
              document.querySelector("body").appendChild(
                (function () {
                  var e = document.createElement("dialog");
                  return (
                    e.setAttribute("id", w),
                    e.setAttribute("tabindex", "-1"),
                    L()
                      ? e.setAttribute("class", "ada-dialog-fullscreen")
                      : e.setAttribute("class", "ada-dialog-modal"),
                    e
                  );
                })()
              ),
                document.querySelector(_).appendChild(
                  (function (e) {
                    var t = document.createElement("header");
                    return (
                      t.setAttribute("class", "ada-header"),
                      t.appendChild(
                        (function (e) {
                          var t = document.createElement("h1");
                          return (
                            t.setAttribute("class", "app-title"),
                            (t.innerHTML = b[e].header),
                            t
                          );
                        })(e)
                      ),
                      t.appendChild(
                        (function () {
                          var e = document.createElement("button");
                          return (
                            e.setAttribute("type", "button"),
                            e.setAttribute("id", "ada-close-button"),
                            e.setAttribute(
                              "aria-label",
                              "Close symptom assessment"
                            ),
                            e.appendChild(
                              (function () {
                                var e = "http://www.w3.org/2000/svg",
                                  t = document.createElementNS(e, "svg");
                                t.setAttribute("xmlns", e),
                                  t.setAttribute("viewBox", "0 0 16 16"),
                                  t.setAttribute("id", "ada-btn-cross");
                                var n = document.createElement("title");
                                (n.innerHTML = "cross"), t.appendChild(n);
                                var o = document.createElementNS(e, "path");
                                return (
                                  o.setAttribute(
                                    "d",
                                    "M11.854 4.146a.5.5 0 0 0-.708 0L8 7.293 4.854 4.146a.5.5 0 0 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146a.5.5 0 0 0 0-.708z"
                                  ),
                                  t.appendChild(o),
                                  t
                                );
                              })()
                            ),
                            e
                          );
                        })()
                      ),
                      t
                    );
                  })(e)
                ),
                document.querySelector(_).appendChild(
                  (function () {
                    var e = document.createElement("div");
                    return (
                      e.setAttribute("id", x),
                      e.setAttribute("tabindex", "-1"),
                      e
                    );
                  })()
                ),
                document.querySelector(_).appendChild(
                  (function () {
                    var e = document.createElement("p");
                    return (
                      e.setAttribute("id", S),
                      e.setAttribute("hidden", !0),
                      (e.innerHTML = M),
                      e
                    );
                  })()
                );
            })(A.language),
            (function (e) {
              document.querySelector(E).appendChild(
                (function (e) {
                  var t = document.createElement("iframe");
                  return (
                    t.setAttribute("src", P(e)),
                    t.setAttribute("id", "ada-iframe"),
                    t.setAttribute("allow", "geolocation"),
                    window.IS_USING_TOUCH && t.setAttribute("scrolling", "no"),
                    t
                  );
                })(e)
              );
            })(A),
            document.addEventListener("click", T),
            window.addEventListener("resize", N),
            window.addEventListener("touchstart", I, !1);
        },
        show: function () {
          var e = document.querySelector(_);
          g.registerDialog(e), e.showModal();
        },
      };
    function O(t) {
      if (b[t]) return b[t].value;
      var e = Object.keys(b).find(function (e) {
        return e.slice(0, -3) === t;
      });
      return e ? b[e].value : null;
    }
    function T(e) {
      var t = document.querySelector(_);
      "ada-button" === e.target.id &&
        (e.preventDefault(),
        e.stopPropagation(),
        g.registerDialog(t),
        t.showModal()),
        "ada-close-button" === e.target.id &&
          (e.preventDefault(), e.stopPropagation(), C.hide());
    }
    function L() {
      return window.innerWidth <= y || window.screen.width <= y;
    }
    function N() {
      var e = document.querySelector(_);
      L() &&
        "ada-dialog-fullscreen" !== e.className &&
        e.setAttribute("class", "ada-dialog-fullscreen"),
        L() ||
          "ada-dialog-modal" === e.className ||
          e.setAttribute("class", "ada-dialog-modal");
    }
    function P(e) {
      var t = "";
      for (var n in e) t += "".concat(n, "=").concat(e[n], "&");
      return (
        "https://demo-web-embed.client-prod-eu.prod.ada.com/?" +
        t +
        "origin=".concat(document.domain)
      );
    }
    function I() {
      (window.IS_USING_TOUCH = !0),
        window.removeEventListener("touchstart", I, !1);
    }
    "loading" != document.readyState
      ? D()
      : document.addEventListener("DOMContentLoaded", D);
  },
]);

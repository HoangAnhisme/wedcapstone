aWFY: function (t, e, n) {
    "use strict";
    (function (t) {
      function i(t) {
        new s.a("#typed", {
          stringsElement: "#typed-strings",
          typeSpeed: 100,
          backSpeed: 20,
          loop: !0,
          loopCount: 1 / 0,
        });
      }
      function o() {
        t('nav li a[href=".' + location.pathname + '"]').addClass("active"),
          "/" == location.pathname &&
            t('nav li a[href="./index.html"]').addClass("active");
      }
      function r() {
        var t = document.querySelector(".hero-full-container"),
          e = window.innerWidth / 5,
          n = window.innerHeight / 5;
        t.addEventListener("mousemove", function (i) {
          var o = i.clientX / e,
            r = i.clientY / n;
          t.style.transform =
            "translate3d(-" + 1.5 * o + "px, -" + 1.5 * r + "px, 0)";
        });
      }
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return r;
        });
      var s = n("25lU");
    }.call(e, n("juYr")));
  }
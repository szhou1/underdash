! function() {
  "use strict";
  var a, g, h, i, j, k, l, m, b = this,
    c = b.cardboard,
    d = "undefined" != typeof require,
    e = "underdash",
    f = !1,
    o = "http://localhost:1337",
    p = {
      dev: o,
      prod: "http://bookstrap.hackreactor.com",
      api: "/api/v1/assessment/sprint"
    };
  if ("undefined" != typeof exports ? (a = !1, "undefined" != typeof module &&
      module.exports && (f = !0)) : a = !0, a) {
    var q = b.document.createElement("iframe");
    q.src = p.prod, q.style.display = "none", q.name = "bookstrap", b.HTML_Reporter =
      b.mocha._reporter, b.cardboard = function(a) {
        var c = new b.HTML_Reporter(a);
        a.on("end", function() {
          var a = {
            failedTest: c.stats.failures,
            totalTest: c.stats.tests,
            type: "sprint",
            name: e
          };
          b.document.body.appendChild(q), setTimeout(function() {
            var b = {
              data: a,
              secret: "catreactor",
              url: p.api
            };
            q.contentWindow.postMessage(b, p.prod)
          }, 7e3)
        })
      }, b.cardboard.noConflict = function() {
        return b.cardboard = c, b.cardboard
      }
  } else {
    process.originalExit = process.exit;
    var r;
    d && (h = require("request"), i = require("mocha").reporters.Dot, k =
      require("fs")), process.exit = function(a) {
      h(r, function() {
        process.originalExit(a)
      })
    };
    try {
      l = k.readFileSync(".git/config", "utf-8")
    } catch (s) {}
    g = function(a) {
      m = l.match(/(?!.*hackreactor)(github.com)\W*\w*/g)[0].split("/")[1], r = {
        url: p.prod + p.api,
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }, j = new i(a), a.on("end", function() {
        var a = {
          stats: {
            failedTest: j.stats.failures,
            totalTest: j.stats.tests,
            name: e,
            type: "sprint",
            user: m
          },
          secret: "catreactor"
        };
        r.body = JSON.stringify(a)
      })
    }, f && (exports = module.exports = g), exports.cardboard = g
  }
}.call(this);
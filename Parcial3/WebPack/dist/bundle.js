(() => {
    var e = {
            589: () => {}
        },
        r = {};

    function o(t) {
        var a = r[t];
        if (void 0 !== a) return a.exports;
        var l = r[t] = {
            exports: {}
        };
        return e[t](l, l.exports, o), l.exports
    }
    o.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return o.d(r, {
            a: r
        }), r
    }, o.d = (e, r) => {
        for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    }, o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
        "use strict";
        var e = o(589);
        console.log("Hello World Webpack"), console.log((0, e.cuadrado)(2))
    })()
})();
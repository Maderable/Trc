(function n(o, r, a) {
    function s(t, e) {
        if (!r[t]) {
            if (!o[t]) {
                var i = typeof require === "function" && require;
                if (!e && i) return i(t, !0);
                if (l) return l(t, !0);
                throw ((i = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", i);
            }
            i = r[t] = { exports: {} };
            o[t][0].call(i.exports, function (e) {
                return s(o[t][1][e] || e);
            }, i, i.exports, n, o, r, a);
        }
        return r[t].exports;
    }
    for (var l = typeof require === "function" && require, e = 0; e < a.length; e++) s(a[e]);
    return s;
})({
    1: [function (e, t, i) {
        "use strict";
        function exampleFunction() {
            console.log("Archivo script.js cargado correctamente.");
        }
        exampleFunction();
    }, {}]
}, {}, [1]);

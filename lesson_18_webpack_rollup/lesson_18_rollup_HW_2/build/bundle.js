
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n    background-color: rgb(64, 28, 224);\r\n    color: #fff;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.js-text {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n}\r\n\r\n.js-image{\r\n    width: 200px;\r\n  \r\n}";
n(css,{});

var JS_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAKjCAMAAAA6bQbyAAAAilBMVEUAAADw20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20/w20+eOq36AAAALXRSTlMAAwcMERUbIScuNTtDSE1TWV9la3N6gIeOk5icoquyub7DxcnP1Nng5Ovw9PtiZLmiAAAbUUlEQVR42u3d53baygKAUVNMtQ0YbFxoNs0Uvf/r3ZXkJDc9gEYN9vfzrLNMRhr2ksRIurqSJEmSEmm8Xkg5bT32DdUPrSIpt618Q/VDC18K5beFb6iAJWAJWBKwBCwBSwKWgCVgScASsAQsAUsCloAlAUvAErAELAlYApYELAFLwBKwJGAJWBKwBCwBS8CSgCVgScASsAQsAUsCloAlAUvAErAELAlYApYELAFLwBKwJGAJWBKwBCwBS8CSgCVgCVgSsAQsAUsCloAlYEnAErAELAlYApaAJWBJwBKwJGAJWAKWgCUBS8CSgCVgCVgClgQsAUsCloAlYAlYErAELAlYApaAJWBJwBKwJGAJWAKWgCUBS8CSgCVgCVgClgQsAUsCloAlYAlYErAELAFLApaAJWBJwBKwBCwJWAKWgCUBS8ASsAQsCVgClgQsAUvAErAkYAlYErAELAFLwJKAJWBJwBKwBCwBSwKWgCUBS8ASsAQsCVgClgQsAUvAErAkYAlYErAELAFLwJKAJWBJwBKwBCwBSwKWgCVgScASsAQsCVgCloAlAUvAErAkYAlYApaAJQFLwJKAJWAJWAKWBCwBSwKWgCVgCVgSsAQsCVgCloAlYEnAErAkYAlYApaAJQFLwJKAJWAJWAKWBCwBSwKWgCVgCVgSsAQsCVgCloAlYEnAErAELAlYApaAJQFLwBKwJGAJWAKWBCwBS8ASsCRgCVgSsAQsAUvAkoAlYEnAErAELAFLApaAJQFLwBKwBCwJWAKWBCwBS8ASsCRgCVgSsAQsAUvAkoAlYEnAErAELAFLApaAJQFLwBKwBCwJWAKWgCUBS8ASsCRgCVgCloDlSyFgCVgSsAQsAUvAkoAl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";

const textJS = document.createElement('h1');
textJS.className = 'js-text';
textJS.textContent = 'I love JavaScript';
document.body.append(textJS);
const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;
document.body.append(jsImageHTML);
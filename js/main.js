(() => {
    var t = {
          7757: (t, e, i) => {
             t.exports = i(5666)
          },
          9669: (t, e, i) => {
             t.exports = i(1609)
          },
          5448: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = i(6026),
                s = i(4372),
                o = i(5327),
                a = i(4097),
                l = i(4109),
                c = i(7985),
                h = i(5061),
                d = i(7874),
                u = i(5263);
             t.exports = function(t) {
                return new Promise((function(e, i) {
                   var f, p = t.data,
                      g = t.headers,
                      m = t.responseType;
 
                   function b() {
                      t.cancelToken && t.cancelToken.unsubscribe(f), t.signal && t.signal.removeEventListener("abort", f)
                   }
                   n.isFormData(p) && delete g["Content-Type"];
                   var x = new XMLHttpRequest;
                   if (t.auth) {
                      var y = t.auth.username || "",
                         v = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                      g.Authorization = "Basic " + btoa(y + ":" + v)
                   }
                   var _ = a(t.baseURL, t.url);
 
                   function w() {
                      if (x) {
                         var n = "getAllResponseHeaders" in x ? l(x.getAllResponseHeaders()) : null,
                            s = {
                               data: m && "text" !== m && "json" !== m ? x.response : x.responseText,
                               status: x.status,
                               statusText: x.statusText,
                               headers: n,
                               config: t,
                               request: x
                            };
                         r((function(t) {
                            e(t), b()
                         }), (function(t) {
                            i(t), b()
                         }), s), x = null
                      }
                   }
                   if (x.open(t.method.toUpperCase(), o(_, t.params, t.paramsSerializer), !0), x.timeout = t.timeout, "onloadend" in x ? x.onloadend = w : x.onreadystatechange = function() {
                         x && 4 === x.readyState && (0 !== x.status || x.responseURL && 0 === x.responseURL.indexOf("file:")) && setTimeout(w)
                      }, x.onabort = function() {
                         x && (i(h("Request aborted", t, "ECONNABORTED", x)), x = null)
                      }, x.onerror = function() {
                         i(h("Network Error", t, null, x)), x = null
                      }, x.ontimeout = function() {
                         var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                            n = t.transitional || d;
                         t.timeoutErrorMessage && (e = t.timeoutErrorMessage), i(h(e, t, n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", x)), x = null
                      }, n.isStandardBrowserEnv()) {
                      var k = (t.withCredentials || c(_)) && t.xsrfCookieName ? s.read(t.xsrfCookieName) : void 0;
                      k && (g[t.xsrfHeaderName] = k)
                   }
                   "setRequestHeader" in x && n.forEach(g, (function(t, e) {
                      void 0 === p && "content-type" === e.toLowerCase() ? delete g[e] : x.setRequestHeader(e, t)
                   })), n.isUndefined(t.withCredentials) || (x.withCredentials = !!t.withCredentials), m && "json" !== m && (x.responseType = t.responseType), "function" == typeof t.onDownloadProgress && x.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && x.upload && x.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (f = function(t) {
                      x && (i(!t || t && t.type ? new u("canceled") : t), x.abort(), x = null)
                   }, t.cancelToken && t.cancelToken.subscribe(f), t.signal && (t.signal.aborted ? f() : t.signal.addEventListener("abort", f))), p || (p = null), x.send(p)
                }))
             }
          },
          1609: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = i(1849),
                s = i(321),
                o = i(7185),
                a = function t(e) {
                   var i = new s(e),
                      a = r(s.prototype.request, i);
                   return n.extend(a, s.prototype, i), n.extend(a, i), a.create = function(i) {
                      return t(o(e, i))
                   }, a
                }(i(5546));
             a.Axios = s, a.Cancel = i(5263), a.CancelToken = i(4972), a.isCancel = i(6502), a.VERSION = i(7288).version, a.all = function(t) {
                return Promise.all(t)
             }, a.spread = i(8713), a.isAxiosError = i(6268), t.exports = a, t.exports.default = a
          },
          5263: t => {
             "use strict";
 
             function e(t) {
                this.message = t
             }
             e.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
             }, e.prototype.__CANCEL__ = !0, t.exports = e
          },
          4972: (t, e, i) => {
             "use strict";
             var n = i(5263);
 
             function r(t) {
                if ("function" != typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function(t) {
                   e = t
                }));
                var i = this;
                this.promise.then((function(t) {
                   if (i._listeners) {
                      var e, n = i._listeners.length;
                      for (e = 0; e < n; e++) i._listeners[e](t);
                      i._listeners = null
                   }
                })), this.promise.then = function(t) {
                   var e, n = new Promise((function(t) {
                      i.subscribe(t), e = t
                   })).then(t);
                   return n.cancel = function() {
                      i.unsubscribe(e)
                   }, n
                }, t((function(t) {
                   i.reason || (i.reason = new n(t), e(i.reason))
                }))
             }
             r.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
             }, r.prototype.subscribe = function(t) {
                this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
             }, r.prototype.unsubscribe = function(t) {
                if (this._listeners) {
                   var e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
             }, r.source = function() {
                var t;
                return {
                   token: new r((function(e) {
                      t = e
                   })),
                   cancel: t
                }
             }, t.exports = r
          },
          6502: t => {
             "use strict";
             t.exports = function(t) {
                return !(!t || !t.__CANCEL__)
             }
          },
          321: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = i(5327),
                s = i(782),
                o = i(3572),
                a = i(7185),
                l = i(4875),
                c = l.validators;
 
             function h(t) {
                this.defaults = t, this.interceptors = {
                   request: new s,
                   response: new s
                }
             }
             h.prototype.request = function(t, e) {
                "string" == typeof t ? (e = e || {}).url = t : e = t || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var i = e.transitional;
                void 0 !== i && l.assertOptions(i, {
                   silentJSONParsing: c.transitional(c.boolean),
                   forcedJSONParsing: c.transitional(c.boolean),
                   clarifyTimeoutError: c.transitional(c.boolean)
                }, !1);
                var n = [],
                   r = !0;
                this.interceptors.request.forEach((function(t) {
                   "function" == typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous, n.unshift(t.fulfilled, t.rejected))
                }));
                var s, h = [];
                if (this.interceptors.response.forEach((function(t) {
                      h.push(t.fulfilled, t.rejected)
                   })), !r) {
                   var d = [o, void 0];
                   for (Array.prototype.unshift.apply(d, n), d = d.concat(h), s = Promise.resolve(e); d.length;) s = s.then(d.shift(), d.shift());
                   return s
                }
                for (var u = e; n.length;) {
                   var f = n.shift(),
                      p = n.shift();
                   try {
                      u = f(u)
                   } catch (t) {
                      p(t);
                      break
                   }
                }
                try {
                   s = o(u)
                } catch (t) {
                   return Promise.reject(t)
                }
                for (; h.length;) s = s.then(h.shift(), h.shift());
                return s
             }, h.prototype.getUri = function(t) {
                return t = a(this.defaults, t), r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
             }, n.forEach(["delete", "get", "head", "options"], (function(t) {
                h.prototype[t] = function(e, i) {
                   return this.request(a(i || {}, {
                      method: t,
                      url: e,
                      data: (i || {}).data
                   }))
                }
             })), n.forEach(["post", "put", "patch"], (function(t) {
                h.prototype[t] = function(e, i, n) {
                   return this.request(a(n || {}, {
                      method: t,
                      url: e,
                      data: i
                   }))
                }
             })), t.exports = h
          },
          782: (t, e, i) => {
             "use strict";
             var n = i(4867);
 
             function r() {
                this.handlers = []
             }
             r.prototype.use = function(t, e, i) {
                return this.handlers.push({
                   fulfilled: t,
                   rejected: e,
                   synchronous: !!i && i.synchronous,
                   runWhen: i ? i.runWhen : null
                }), this.handlers.length - 1
             }, r.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
             }, r.prototype.forEach = function(t) {
                n.forEach(this.handlers, (function(e) {
                   null !== e && t(e)
                }))
             }, t.exports = r
          },
          4097: (t, e, i) => {
             "use strict";
             var n = i(1793),
                r = i(7303);
             t.exports = function(t, e) {
                return t && !n(e) ? r(t, e) : e
             }
          },
          5061: (t, e, i) => {
             "use strict";
             var n = i(481);
             t.exports = function(t, e, i, r, s) {
                var o = new Error(t);
                return n(o, e, i, r, s)
             }
          },
          3572: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = i(8527),
                s = i(6502),
                o = i(5546),
                a = i(5263);
 
             function l(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new a("canceled")
             }
             t.exports = function(t) {
                return l(t), t.headers = t.headers || {}, t.data = r.call(t, t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                   delete t.headers[e]
                })), (t.adapter || o.adapter)(t).then((function(e) {
                   return l(t), e.data = r.call(t, e.data, e.headers, t.transformResponse), e
                }), (function(e) {
                   return s(e) || (l(t), e && e.response && (e.response.data = r.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
             }
          },
          481: t => {
             "use strict";
             t.exports = function(t, e, i, n, r) {
                return t.config = e, i && (t.code = i), t.request = n, t.response = r, t.isAxiosError = !0, t.toJSON = function() {
                   return {
                      message: this.message,
                      name: this.name,
                      description: this.description,
                      number: this.number,
                      fileName: this.fileName,
                      lineNumber: this.lineNumber,
                      columnNumber: this.columnNumber,
                      stack: this.stack,
                      config: this.config,
                      code: this.code,
                      status: this.response && this.response.status ? this.response.status : null
                   }
                }, t
             }
          },
          7185: (t, e, i) => {
             "use strict";
             var n = i(4867);
             t.exports = function(t, e) {
                e = e || {};
                var i = {};
 
                function r(t, e) {
                   return n.isPlainObject(t) && n.isPlainObject(e) ? n.merge(t, e) : n.isPlainObject(e) ? n.merge({}, e) : n.isArray(e) ? e.slice() : e
                }
 
                function s(i) {
                   return n.isUndefined(e[i]) ? n.isUndefined(t[i]) ? void 0 : r(void 0, t[i]) : r(t[i], e[i])
                }
 
                function o(t) {
                   if (!n.isUndefined(e[t])) return r(void 0, e[t])
                }
 
                function a(i) {
                   return n.isUndefined(e[i]) ? n.isUndefined(t[i]) ? void 0 : r(void 0, t[i]) : r(void 0, e[i])
                }
 
                function l(i) {
                   return i in e ? r(t[i], e[i]) : i in t ? r(void 0, t[i]) : void 0
                }
                var c = {
                   url: o,
                   method: o,
                   data: o,
                   baseURL: a,
                   transformRequest: a,
                   transformResponse: a,
                   paramsSerializer: a,
                   timeout: a,
                   timeoutMessage: a,
                   withCredentials: a,
                   adapter: a,
                   responseType: a,
                   xsrfCookieName: a,
                   xsrfHeaderName: a,
                   onUploadProgress: a,
                   onDownloadProgress: a,
                   decompress: a,
                   maxContentLength: a,
                   maxBodyLength: a,
                   transport: a,
                   httpAgent: a,
                   httpsAgent: a,
                   cancelToken: a,
                   socketPath: a,
                   responseEncoding: a,
                   validateStatus: l
                };
                return n.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) {
                   var e = c[t] || s,
                      r = e(t);
                   n.isUndefined(r) && e !== l || (i[t] = r)
                })), i
             }
          },
          6026: (t, e, i) => {
             "use strict";
             var n = i(5061);
             t.exports = function(t, e, i) {
                var r = i.config.validateStatus;
                i.status && r && !r(i.status) ? e(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : t(i)
             }
          },
          8527: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = i(5546);
             t.exports = function(t, e, i) {
                var s = this || r;
                return n.forEach(i, (function(i) {
                   t = i.call(s, t, e)
                })), t
             }
          },
          5546: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = i(6016),
                s = i(481),
                o = i(7874),
                a = {
                   "Content-Type": "application/x-www-form-urlencoded"
                };

             function l(t, e) {
                !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
             }
             var c, h = {
                transitional: o,
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (c = i(5448)), c),
                transformRequest: [function(t, e) {
                   return r(e, "Accept"), r(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (l(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) || e && "application/json" === e["Content-Type"] ? (l(e, "application/json"), function(t, e, i) {
                      if (n.isString(t)) try {
                         return (0, JSON.parse)(t), n.trim(t)
                      } catch (t) {
                         if ("SyntaxError" !== t.name) throw t
                      }
                      return (0, JSON.stringify)(t)
                   }(t)) : t
                }],
                transformResponse: [function(t) {
                   var e = this.transitional || h.transitional,
                      i = e && e.silentJSONParsing,
                      r = e && e.forcedJSONParsing,
                      o = !i && "json" === this.responseType;
                   if (o || r && n.isString(t) && t.length) try {
                      return JSON.parse(t)
                   } catch (t) {
                      if (o) {
                         if ("SyntaxError" === t.name) throw s(t, this, "E_JSON_PARSE");
                         throw t
                      }
                   }
                   return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(t) {
                   return t >= 200 && t < 300
                },
                headers: {
                   common: {
                      Accept: "application/json, text/plain, */*"
                   }
                }
             };
             n.forEach(["delete", "get", "head"], (function(t) {
                h.headers[t] = {}
             })), n.forEach(["post", "put", "patch"], (function(t) {
                h.headers[t] = n.merge(a)
             })), t.exports = h
          },
          7874: t => {
             "use strict";
             t.exports = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
             }
          },
          7288: t => {
             t.exports = {
                version: "0.26.1"
             }
          },
          1849: t => {
             "use strict";
             t.exports = function(t, e) {
                return function() {
                   for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
                   return t.apply(e, i)
                }
             }
          },
          5327: (t, e, i) => {
             "use strict";
             var n = i(4867);
 
             function r(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
             }
             t.exports = function(t, e, i) {
                if (!e) return t;
                var s;
                if (i) s = i(e);
                else if (n.isURLSearchParams(e)) s = e.toString();
                else {
                   var o = [];
                   n.forEach(e, (function(t, e) {
                      null != t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function(t) {
                         n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), o.push(r(e) + "=" + r(t))
                      })))
                   })), s = o.join("&")
                }
                if (s) {
                   var a = t.indexOf("#"); - 1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + s
                }
                return t
             }
          },
          7303: t => {
             "use strict";
             t.exports = function(t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
             }
          },
          4372: (t, e, i) => {
             "use strict";
             var n = i(4867);
             t.exports = n.isStandardBrowserEnv() ? {
                write: function(t, e, i, r, s, o) {
                   var a = [];
                   a.push(t + "=" + encodeURIComponent(e)), n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), n.isString(r) && a.push("path=" + r), n.isString(s) && a.push("domain=" + s), !0 === o && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(t) {
                   var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                   return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                   this.write(t, "", Date.now() - 864e5)
                }
             } : {
                write: function() {},
                read: function() {
                   return null
                },
                remove: function() {}
             }
          },
          1793: t => {
             "use strict";
             t.exports = function(t) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
             }
          },
          6268: (t, e, i) => {
             "use strict";
             var n = i(4867);
             t.exports = function(t) {
                return n.isObject(t) && !0 === t.isAxiosError
             }
          },
          7985: (t, e, i) => {
             "use strict";
             var n = i(4867);
             t.exports = n.isStandardBrowserEnv() ? function() {
                var t, e = /(msie|trident)/i.test(navigator.userAgent),
                   i = document.createElement("a");
 
                function r(t) {
                   var n = t;
                   return e && (i.setAttribute("href", n), n = i.href), i.setAttribute("href", n), {
                      href: i.href,
                      protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                      host: i.host,
                      search: i.search ? i.search.replace(/^\?/, "") : "",
                      hash: i.hash ? i.hash.replace(/^#/, "") : "",
                      hostname: i.hostname,
                      port: i.port,
                      pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                   }
                }
                return t = r(window.location.href),
                   function(e) {
                      var i = n.isString(e) ? r(e) : e;
                      return i.protocol === t.protocol && i.host === t.host
                   }
             }() : function() {
                return !0
             }
          },
          6016: (t, e, i) => {
             "use strict";
             var n = i(4867);
             t.exports = function(t, e) {
                n.forEach(t, (function(i, n) {
                   n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = i, delete t[n])
                }))
             }
          },
          4109: (t, e, i) => {
             "use strict";
             var n = i(4867),
                r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
             t.exports = function(t) {
                var e, i, s, o = {};
                return t ? (n.forEach(t.split("\n"), (function(t) {
                   if (s = t.indexOf(":"), e = n.trim(t.substr(0, s)).toLowerCase(), i = n.trim(t.substr(s + 1)), e) {
                      if (o[e] && r.indexOf(e) >= 0) return;
                      o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([i]) : o[e] ? o[e] + ", " + i : i
                   }
                })), o) : o
             }
          },
          8713: t => {
             "use strict";
             t.exports = function(t) {
                return function(e) {
                   return t.apply(null, e)
                }
             }
          },
          4875: (t, e, i) => {
             "use strict";
             var n = i(7288).version,
                r = {};
             ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) {
                r[t] = function(i) {
                   return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
                }
             }));
             var s = {};
             r.transitional = function(t, e, i) {
                function r(t, e) {
                   return "[Axios v" + n + "] Transitional option '" + t + "'" + e + (i ? ". " + i : "")
                }
                return function(i, n, o) {
                   if (!1 === t) throw new Error(r(n, " has been removed" + (e ? " in " + e : "")));
                   return e && !s[n] && (s[n] = !0, console.warn(r(n, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(i, n, o)
                }
             }, t.exports = {
                assertOptions: function(t, e, i) {
                   if ("object" != typeof t) throw new TypeError("options must be an object");
                   for (var n = Object.keys(t), r = n.length; r-- > 0;) {
                      var s = n[r],
                         o = e[s];
                      if (o) {
                         var a = t[s],
                            l = void 0 === a || o(a, s, t);
                         if (!0 !== l) throw new TypeError("option " + s + " must be " + l)
                      } else if (!0 !== i) throw Error("Unknown option " + s)
                   }
                },
                validators: r
             }
          },
          4867: (t, e, i) => {
             "use strict";
             var n = i(1849),
                r = Object.prototype.toString;
 
             function s(t) {
                return Array.isArray(t)
             }
 
             function o(t) {
                return void 0 === t
             }
 
             function a(t) {
                return "[object ArrayBuffer]" === r.call(t)
             }
 
             function l(t) {
                return null !== t && "object" == typeof t
             }
 
             function c(t) {
                if ("[object Object]" !== r.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
             }
 
             function h(t) {
                return "[object Function]" === r.call(t)
             }
 
             function d(t, e) {
                if (null != t)
                   if ("object" != typeof t && (t = [t]), s(t))
                      for (var i = 0, n = t.length; i < n; i++) e.call(null, t[i], i, t);
                   else
                      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
             }
             t.exports = {
                isArray: s,
                isArrayBuffer: a,
                isBuffer: function(t) {
                   return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function(t) {
                   return "[object FormData]" === r.call(t)
                },
                isArrayBufferView: function(t) {
                   return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && a(t.buffer)
                },
                isString: function(t) {
                   return "string" == typeof t
                },
                isNumber: function(t) {
                   return "number" == typeof t
                },
                isObject: l,
                isPlainObject: c,
                isUndefined: o,
                isDate: function(t) {
                   return "[object Date]" === r.call(t)
                },
                isFile: function(t) {
                   return "[object File]" === r.call(t)
                },
                isBlob: function(t) {
                   return "[object Blob]" === r.call(t)
                },
                isFunction: h,
                isStream: function(t) {
                   return l(t) && h(t.pipe)
                },
                isURLSearchParams: function(t) {
                   return "[object URLSearchParams]" === r.call(t)
                },
                isStandardBrowserEnv: function() {
                   return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: d,
                merge: function t() {
                   var e = {};
 
                   function i(i, n) {
                      c(e[n]) && c(i) ? e[n] = t(e[n], i) : c(i) ? e[n] = t({}, i) : s(i) ? e[n] = i.slice() : e[n] = i
                   }
                   for (var n = 0, r = arguments.length; n < r; n++) d(arguments[n], i);
                   return e
                },
                extend: function(t, e, i) {
                   return d(e, (function(e, r) {
                      t[r] = i && "function" == typeof e ? n(e, i) : e
                   })), t
                },
                trim: function(t) {
                   return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(t) {
                   return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
                }
             }
          },
          7856: (t, e, i) => {
             "use strict";
             i.d(e, {
                j: () => d
             });
             var n = i(5861),
                r = i(5671),
                s = i(3144),
                o = i(7757),
                a = i.n(o),
                l = i(9669),
                c = i.n(l),
                h = i(7361),
                d = function() {
                   function t(e) {
                      (0, r.Z)(this, t), this.cityMainUrl = e
                   }
                   var e;
                   return (0, s.Z)(t, [{
                      key: "getCityData",
                      value: (e = (0, n.Z)(a().mark((function t() {
                         var e, i, n, r, s;
                         return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                               case 0:
                                  return t.prev = 0, t.next = 3, c().get(this.cityMainUrl);
                               case 3:
                                  return e = t.sent, this.cityName = h(e, "data.name", "Error, try to reload the page"), this.cityFullName = h(e, "data.full_name", "Error, try to reload the page"), this.cityNation = this.cityFullName.replace("".concat(this.cityName, ", "), ""), this.cityMayor = h(e, "data.mayor", "not avalaible"), this.cityContinent = h(e, "data.continent", "Error, try to reload the page"), i = h(e, "data._links.ua:images.href", "Error, try to reload the page"), n = h(e, "data._links.ua:scores.href", "Error, try to reload the page"), t.next = 13, c().get(i);
                               case 13:
                                  return r = t.sent, t.next = 16, c().get(n);
                               case 16:
                                  s = t.sent, this.cityImg = h(r, "data.photos[0].image", "Error, try to reload the page"), this.citySummary = h(s, "data.summary", "Error, try to reload the page"), this.cityTotalScore = h(s, "data.teleport_city_score", "Error, try to reload the page"), this.cityCatScores = h(s, "data.categories", "Error, try to reload the page"), t.next = 26;
                                  break;
                               case 23:
                                  t.prev = 23, t.t0 = t.catch(0);
                               case 26:
                               case "end":
                                  return t.stop()
                            }
                         }), t, this, [
                            [0, 23]
                         ])
                      }))), function() {
                         return e.apply(this, arguments)
                      })
                   }]), t
                }()
          },
          2360: (t, e, i) => {
             "use strict";
             i.d(e, {
                Z: () => Ys
             });
             var n = i(5671),
                r = i(3144);
             const s = "undefined" == typeof window ? function(t) {
                return t()
             } : window.requestAnimationFrame;
 
             function o(t, e, i) {
                const n = i || (t => Array.prototype.slice.call(t));
                let r = !1,
                   o = [];
                return function(...i) {
                   o = n(i), r || (r = !0, s.call(window, (() => {
                      r = !1, t.apply(e, o)
                   })))
                }
             }
             const a = t => "start" === t ? "left" : "end" === t ? "right" : "center",
                l = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2;
 
             function c() {}
             const h = function() {
                let t = 0;
                return function() {
                   return t++
                }
             }();
 
             function d(t) {
                return null == t
             }
 
             function u(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                const e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
             }
 
             function f(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
             }
             const p = t => ("number" == typeof t || t instanceof Number) && isFinite(+t);
 
             function g(t, e) {
                return p(t) ? t : e
             }
 
             function m(t, e) {
                return void 0 === t ? e : t
             }
             const b = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
 
             function x(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e)
             }
 
             function y(t, e, i, n) {
                let r, s, o;
                if (u(t))
                   if (s = t.length, n)
                      for (r = s - 1; r >= 0; r--) e.call(i, t[r], r);
                   else
                      for (r = 0; r < s; r++) e.call(i, t[r], r);
                else if (f(t))
                   for (o = Object.keys(t), s = o.length, r = 0; r < s; r++) e.call(i, t[o[r]], o[r])
             }
 
             function v(t, e) {
                let i, n, r, s;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, n = t.length; i < n; ++i)
                   if (r = t[i], s = e[i], r.datasetIndex !== s.datasetIndex || r.index !== s.index) return !1;
                return !0
             }
 
             function _(t) {
                if (u(t)) return t.map(_);
                if (f(t)) {
                   const e = Object.create(null),
                      i = Object.keys(t),
                      n = i.length;
                   let r = 0;
                   for (; r < n; ++r) e[i[r]] = _(t[i[r]]);
                   return e
                }
                return t
             }
 
             function w(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
             }
 
             function k(t, e, i, n) {
                if (!w(t)) return;
                const r = e[t],
                   s = i[t];
                f(r) && f(s) ? M(r, s, n) : e[t] = _(s)
             }
 
             function M(t, e, i) {
                const n = u(e) ? e : [e],
                   r = n.length;
                if (!f(t)) return t;
                const s = (i = i || {}).merger || k;
                for (let o = 0; o < r; ++o) {
                   if (!f(e = n[o])) continue;
                   const r = Object.keys(e);
                   for (let n = 0, o = r.length; n < o; ++n) s(r[n], t, e, i)
                }
                return t
             }
 
             function S(t, e) {
                return M(t, e, {
                   merger: C
                })
             }
 
             function C(t, e, i) {
                if (!w(t)) return;
                const n = e[t],
                   r = i[t];
                f(n) && f(r) ? S(n, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = _(r))
             }
 
             function P(t, e) {
                const i = t.indexOf(".", e);
                return -1 === i ? t.length : i
             }
 
             function O(t, e) {
                if ("" === e) return t;
                let i = 0,
                   n = P(e, i);
                for (; t && n > i;) t = t[e.substr(i, n - i)], i = n + 1, n = P(e, i);
                return t
             }
 
             function D(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
             }
             const L = t => void 0 !== t,
                E = t => "function" == typeof t,
                T = (t, e) => {
                   if (t.size !== e.size) return !1;
                   for (const i of t)
                      if (!e.has(i)) return !1;
                   return !0
                },
                A = Math.PI,
                R = 2 * A,
                z = R + A,
                F = Number.POSITIVE_INFINITY,
                I = A / 180,
                j = A / 2,
                N = A / 4,
                B = 2 * A / 3,
                V = Math.log10,
                W = Math.sign;
 
             function H(t) {
                const e = Math.round(t);
                t = U(t, e, t / 1e3) ? e : t;
                const i = Math.pow(10, Math.floor(V(t))),
                   n = t / i;
                return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i
             }
 
             function $(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
             }
 
             function U(t, e, i) {
                return Math.abs(t - e) < i
             }
 
             function q(t, e, i) {
                let n, r, s;
                for (n = 0, r = t.length; n < r; n++) s = t[n][i], isNaN(s) || (e.min = Math.min(e.min, s), e.max = Math.max(e.max, s))
             }
 
             function Y(t) {
                return t * (A / 180)
             }
 
             function X(t) {
                return t * (180 / A)
             }
 
             function Z(t) {
                if (!p(t)) return;
                let e = 1,
                   i = 0;
                for (; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
             }
 
             function G(t, e) {
                const i = e.x - t.x,
                   n = e.y - t.y,
                   r = Math.sqrt(i * i + n * n);
                let s = Math.atan2(n, i);
                return s < -.5 * A && (s += R), {
                   angle: s,
                   distance: r
                }
             }
 
             function K(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
             }
 
             function J(t, e) {
                return (t - e + z) % R - A
             }
 
             function Q(t) {
                return (t % R + R) % R
             }
 
             function tt(t, e, i, n) {
                const r = Q(t),
                   s = Q(e),
                   o = Q(i),
                   a = Q(s - r),
                   l = Q(o - r),
                   c = Q(r - s),
                   h = Q(r - o);
                return r === s || r === o || n && s === o || a > l && c < h
             }
 
             function et(t, e, i) {
                return Math.max(e, Math.min(i, t))
             }
 
             function it(t, e, i, n = 1e-6) {
                return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n
             }
             const nt = t => 0 === t || 1 === t,
                rt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * R / i),
                st = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * R / i) + 1,
                ot = {
                   linear: t => t,
                   easeInQuad: t => t * t,
                   easeOutQuad: t => -t * (t - 2),
                   easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                   easeInCubic: t => t * t * t,
                   easeOutCubic: t => (t -= 1) * t * t + 1,
                   easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                   easeInQuart: t => t * t * t * t,
                   easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                   easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                   easeInQuint: t => t * t * t * t * t,
                   easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                   easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                   easeInSine: t => 1 - Math.cos(t * j),
                   easeOutSine: t => Math.sin(t * j),
                   easeInOutSine: t => -.5 * (Math.cos(A * t) - 1),
                   easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                   easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                   easeInOutExpo: t => nt(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                   easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                   easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                   easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                   easeInElastic: t => nt(t) ? t : rt(t, .075, .3),
                   easeOutElastic: t => nt(t) ? t : st(t, .075, .3),
                   easeInOutElastic(t) {
                      const e = .1125;
                      return nt(t) ? t : t < .5 ? .5 * rt(2 * t, e, .45) : .5 + .5 * st(2 * t - 1, e, .45)
                   },
                   easeInBack(t) {
                      const e = 1.70158;
                      return t * t * ((e + 1) * t - e)
                   },
                   easeOutBack(t) {
                      const e = 1.70158;
                      return (t -= 1) * t * ((e + 1) * t + e) + 1
                   },
                   easeInOutBack(t) {
                      let e = 1.70158;
                      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                   },
                   easeInBounce: t => 1 - ot.easeOutBounce(1 - t),
                   easeOutBounce(t) {
                      const e = 7.5625,
                         i = 2.75;
                      return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
                   },
                   easeInOutBounce: t => t < .5 ? .5 * ot.easeInBounce(2 * t) : .5 * ot.easeOutBounce(2 * t - 1) + .5
                },
                at = {
                   0: 0,
                   1: 1,
                   2: 2,
                   3: 3,
                   4: 4,
                   5: 5,
                   6: 6,
                   7: 7,
                   8: 8,
                   9: 9,
                   A: 10,
                   B: 11,
                   C: 12,
                   D: 13,
                   E: 14,
                   F: 15,
                   a: 10,
                   b: 11,
                   c: 12,
                   d: 13,
                   e: 14,
                   f: 15
                },
                lt = "0123456789ABCDEF",
                ct = t => lt[15 & t],
                ht = t => lt[(240 & t) >> 4] + lt[15 & t],
                dt = t => (240 & t) >> 4 == (15 & t);
 
             function ut(t) {
                return t + .5 | 0
             }
             const ft = (t, e, i) => Math.max(Math.min(t, i), e);
 
             function pt(t) {
                return ft(ut(2.55 * t), 0, 255)
             }
 
             function gt(t) {
                return ft(ut(255 * t), 0, 255)
             }
 
             function mt(t) {
                return ft(ut(t / 2.55) / 100, 0, 1)
             }
 
             function bt(t) {
                return ft(ut(100 * t), 0, 100)
             }
             const xt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
                yt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
 
             function vt(t, e, i) {
                const n = e * Math.min(i, 1 - i),
                   r = (e, r = (e + t / 30) % 12) => i - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
                return [r(0), r(8), r(4)]
             }
 
             function _t(t, e, i) {
                const n = (n, r = (n + t / 60) % 6) => i - i * e * Math.max(Math.min(r, 4 - r, 1), 0);
                return [n(5), n(3), n(1)]
             }
 
             function wt(t, e, i) {
                const n = vt(t, 1, .5);
                let r;
                for (e + i > 1 && (r = 1 / (e + i), e *= r, i *= r), r = 0; r < 3; r++) n[r] *= 1 - e - i, n[r] += e;
                return n
             }
 
             function kt(t) {
                const e = t.r / 255,
                   i = t.g / 255,
                   n = t.b / 255,
                   r = Math.max(e, i, n),
                   s = Math.min(e, i, n),
                   o = (r + s) / 2;
                let a, l, c;
                return r !== s && (c = r - s, l = o > .5 ? c / (2 - r - s) : c / (r + s), a = r === e ? (i - n) / c + (i < n ? 6 : 0) : r === i ? (n - e) / c + 2 : (e - i) / c + 4, a = 60 * a + .5), [0 | a, l || 0, o]
             }
 
             function Mt(t, e, i, n) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(gt)
             }
 
             function St(t, e, i) {
                return Mt(vt, t, e, i)
             }
 
             function Ct(t) {
                return (t % 360 + 360) % 360
             }
             const Pt = {
                   x: "dark",
                   Z: "light",
                   Y: "re",
                   X: "blu",
                   W: "gr",
                   V: "medium",
                   U: "slate",
                   A: "ee",
                   T: "ol",
                   S: "or",
                   B: "ra",
                   C: "lateg",
                   D: "ights",
                   R: "in",
                   Q: "turquois",
                   E: "hi",
                   P: "ro",
                   O: "al",
                   N: "le",
                   M: "de",
                   L: "yello",
                   F: "en",
                   K: "ch",
                   G: "arks",
                   H: "ea",
                   I: "ightg",
                   J: "wh"
                },
                Ot = {
                   OiceXe: "f0f8ff",
                   antiquewEte: "faebd7",
                   aqua: "ffff",
                   aquamarRe: "7fffd4",
                   azuY: "f0ffff",
                   beige: "f5f5dc",
                   bisque: "ffe4c4",
                   black: "0",
                   blanKedOmond: "ffebcd",
                   Xe: "ff",
                   XeviTet: "8a2be2",
                   bPwn: "a52a2a",
                   burlywood: "deb887",
                   caMtXe: "5f9ea0",
                   KartYuse: "7fff00",
                   KocTate: "d2691e",
                   cSO: "ff7f50",
                   cSnflowerXe: "6495ed",
                   cSnsilk: "fff8dc",
                   crimson: "dc143c",
                   cyan: "ffff",
                   xXe: "8b",
                   xcyan: "8b8b",
                   xgTMnPd: "b8860b",
                   xWay: "a9a9a9",
                   xgYF: "6400",
                   xgYy: "a9a9a9",
                   xkhaki: "bdb76b",
                   xmagFta: "8b008b",
                   xTivegYF: "556b2f",
                   xSange: "ff8c00",
                   xScEd: "9932cc",
                   xYd: "8b0000",
                   xsOmon: "e9967a",
                   xsHgYF: "8fbc8f",
                   xUXe: "483d8b",
                   xUWay: "2f4f4f",
                   xUgYy: "2f4f4f",
                   xQe: "ced1",
                   xviTet: "9400d3",
                   dAppRk: "ff1493",
                   dApskyXe: "bfff",
                   dimWay: "696969",
                   dimgYy: "696969",
                   dodgerXe: "1e90ff",
                   fiYbrick: "b22222",
                   flSOwEte: "fffaf0",
                   foYstWAn: "228b22",
                   fuKsia: "ff00ff",
                   gaRsbSo: "dcdcdc",
                   ghostwEte: "f8f8ff",
                   gTd: "ffd700",
                   gTMnPd: "daa520",
                   Way: "808080",
                   gYF: "8000",
                   gYFLw: "adff2f",
                   gYy: "808080",
                   honeyMw: "f0fff0",
                   hotpRk: "ff69b4",
                   RdianYd: "cd5c5c",
                   Rdigo: "4b0082",
                   ivSy: "fffff0",
                   khaki: "f0e68c",
                   lavFMr: "e6e6fa",
                   lavFMrXsh: "fff0f5",
                   lawngYF: "7cfc00",
                   NmoncEffon: "fffacd",
                   ZXe: "add8e6",
                   ZcSO: "f08080",
                   Zcyan: "e0ffff",
                   ZgTMnPdLw: "fafad2",
                   ZWay: "d3d3d3",
                   ZgYF: "90ee90",
                   ZgYy: "d3d3d3",
                   ZpRk: "ffb6c1",
                   ZsOmon: "ffa07a",
                   ZsHgYF: "20b2aa",
                   ZskyXe: "87cefa",
                   ZUWay: "778899",
                   ZUgYy: "778899",
                   ZstAlXe: "b0c4de",
                   ZLw: "ffffe0",
                   lime: "ff00",
                   limegYF: "32cd32",
                   lRF: "faf0e6",
                   magFta: "ff00ff",
                   maPon: "800000",
                   VaquamarRe: "66cdaa",
                   VXe: "cd",
                   VScEd: "ba55d3",
                   VpurpN: "9370db",
                   VsHgYF: "3cb371",
                   VUXe: "7b68ee",
                   VsprRggYF: "fa9a",
                   VQe: "48d1cc",
                   VviTetYd: "c71585",
                   midnightXe: "191970",
                   mRtcYam: "f5fffa",
                   mistyPse: "ffe4e1",
                   moccasR: "ffe4b5",
                   navajowEte: "ffdead",
                   navy: "80",
                   Tdlace: "fdf5e6",
                   Tive: "808000",
                   TivedBb: "6b8e23",
                   Sange: "ffa500",
                   SangeYd: "ff4500",
                   ScEd: "da70d6",
                   pOegTMnPd: "eee8aa",
                   pOegYF: "98fb98",
                   pOeQe: "afeeee",
                   pOeviTetYd: "db7093",
                   papayawEp: "ffefd5",
                   pHKpuff: "ffdab9",
                   peru: "cd853f",
                   pRk: "ffc0cb",
                   plum: "dda0dd",
                   powMrXe: "b0e0e6",
                   purpN: "800080",
                   YbeccapurpN: "663399",
                   Yd: "ff0000",
                   Psybrown: "bc8f8f",
                   PyOXe: "4169e1",
                   saddNbPwn: "8b4513",
                   sOmon: "fa8072",
                   sandybPwn: "f4a460",
                   sHgYF: "2e8b57",
                   sHshell: "fff5ee",
                   siFna: "a0522d",
                   silver: "c0c0c0",
                   skyXe: "87ceeb",
                   UXe: "6a5acd",
                   UWay: "708090",
                   UgYy: "708090",
                   snow: "fffafa",
                   sprRggYF: "ff7f",
                   stAlXe: "4682b4",
                   tan: "d2b48c",
                   teO: "8080",
                   tEstN: "d8bfd8",
                   tomato: "ff6347",
                   Qe: "40e0d0",
                   viTet: "ee82ee",
                   JHt: "f5deb3",
                   wEte: "ffffff",
                   wEtesmoke: "f5f5f5",
                   Lw: "ffff00",
                   LwgYF: "9acd32"
                };
             let Dt;
 
             function Lt(t, e, i) {
                if (t) {
                   let n = kt(t);
                   n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1)), n = St(n), t.r = n[0], t.g = n[1], t.b = n[2]
                }
             }
 
             function Et(t, e) {
                return t ? Object.assign(e || {}, t) : t
             }
 
             function Tt(t) {
                var e = {
                   r: 0,
                   g: 0,
                   b: 0,
                   a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                   r: t[0],
                   g: t[1],
                   b: t[2],
                   a: 255
                }, t.length > 3 && (e.a = gt(t[3]))) : (e = Et(t, {
                   r: 0,
                   g: 0,
                   b: 0,
                   a: 1
                })).a = gt(e.a), e
             }
 
             function At(t) {
                return "r" === t.charAt(0) ? function(t) {
                   const e = xt.exec(t);
                   let i, n, r, s = 255;
                   if (e) {
                      if (e[7] !== i) {
                         const t = +e[7];
                         s = 255 & (e[8] ? pt(t) : 255 * t)
                      }
                      return i = +e[1], n = +e[3], r = +e[5], i = 255 & (e[2] ? pt(i) : i), n = 255 & (e[4] ? pt(n) : n), r = 255 & (e[6] ? pt(r) : r), {
                         r: i,
                         g: n,
                         b: r,
                         a: s
                      }
                   }
                }(t) : function(t) {
                   const e = yt.exec(t);
                   let i, n = 255;
                   if (!e) return;
                   e[5] !== i && (n = e[6] ? pt(+e[5]) : gt(+e[5]));
                   const r = Ct(+e[2]),
                      s = +e[3] / 100,
                      o = +e[4] / 100;
                   return i = "hwb" === e[1] ? function(t, e, i) {
                      return Mt(wt, t, e, i)
                   }(r, s, o) : "hsv" === e[1] ? function(t, e, i) {
                      return Mt(_t, t, e, i)
                   }(r, s, o) : St(r, s, o), {
                      r: i[0],
                      g: i[1],
                      b: i[2],
                      a: n
                   }
                }(t)
             }
             class Rt {
                constructor(t) {
                   if (t instanceof Rt) return t;
                   const e = typeof t;
                   let i;
                   var n, r, s;
                   "object" === e ? i = Tt(t) : "string" === e && (s = (n = t).length, "#" === n[0] && (4 === s || 5 === s ? r = {
                      r: 255 & 17 * at[n[1]],
                      g: 255 & 17 * at[n[2]],
                      b: 255 & 17 * at[n[3]],
                      a: 5 === s ? 17 * at[n[4]] : 255
                   } : 7 !== s && 9 !== s || (r = {
                      r: at[n[1]] << 4 | at[n[2]],
                      g: at[n[3]] << 4 | at[n[4]],
                      b: at[n[5]] << 4 | at[n[6]],
                      a: 9 === s ? at[n[7]] << 4 | at[n[8]] : 255
                   })), i = r || function(t) {
                      Dt || (Dt = function() {
                         const t = {},
                            e = Object.keys(Ot),
                            i = Object.keys(Pt);
                         let n, r, s, o, a;
                         for (n = 0; n < e.length; n++) {
                            for (o = a = e[n], r = 0; r < i.length; r++) s = i[r], a = a.replace(s, Pt[s]);
                            s = parseInt(Ot[o], 16), t[a] = [s >> 16 & 255, s >> 8 & 255, 255 & s]
                         }
                         return t
                      }(), Dt.transparent = [0, 0, 0, 0]);
                      const e = Dt[t.toLowerCase()];
                      return e && {
                         r: e[0],
                         g: e[1],
                         b: e[2],
                         a: 4 === e.length ? e[3] : 255
                      }
                   }(t) || At(t)), this._rgb = i, this._valid = !!i
                }
                get valid() {
                   return this._valid
                }
                get rgb() {
                   var t = Et(this._rgb);
                   return t && (t.a = mt(t.a)), t
                }
                set rgb(t) {
                   this._rgb = Tt(t)
                }
                rgbString() {
                   return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${mt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : this._rgb;
                   var t
                }
                hexString() {
                   return this._valid ? (t = this._rgb, e = function(t) {
                      return dt(t.r) && dt(t.g) && dt(t.b) && dt(t.a)
                   }(t) ? ct : ht, t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t) : this._rgb;
                   var t, e
                }
                hslString() {
                   return this._valid ? function(t) {
                      if (!t) return;
                      const e = kt(t),
                         i = e[0],
                         n = bt(e[1]),
                         r = bt(e[2]);
                      return t.a < 255 ? `hsla(${i}, ${n}%, ${r}%, ${mt(t.a)})` : `hsl(${i}, ${n}%, ${r}%)`
                   }(this._rgb) : this._rgb
                }
                mix(t, e) {
                   const i = this;
                   if (t) {
                      const n = i.rgb,
                         r = t.rgb;
                      let s;
                      const o = e === s ? .5 : e,
                         a = 2 * o - 1,
                         l = n.a - r.a,
                         c = ((a * l == -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
                      s = 1 - c, n.r = 255 & c * n.r + s * r.r + .5, n.g = 255 & c * n.g + s * r.g + .5, n.b = 255 & c * n.b + s * r.b + .5, n.a = o * n.a + (1 - o) * r.a, i.rgb = n
                   }
                   return i
                }
                clone() {
                   return new Rt(this.rgb)
                }
                alpha(t) {
                   return this._rgb.a = gt(t), this
                }
                clearer(t) {
                   return this._rgb.a *= 1 - t, this
                }
                greyscale() {
                   const t = this._rgb,
                      e = ut(.3 * t.r + .59 * t.g + .11 * t.b);
                   return t.r = t.g = t.b = e, this
                }
                opaquer(t) {
                   return this._rgb.a *= 1 + t, this
                }
                negate() {
                   const t = this._rgb;
                   return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
                }
                lighten(t) {
                   return Lt(this._rgb, 2, t), this
                }
                darken(t) {
                   return Lt(this._rgb, 2, -t), this
                }
                saturate(t) {
                   return Lt(this._rgb, 1, t), this
                }
                desaturate(t) {
                   return Lt(this._rgb, 1, -t), this
                }
                rotate(t) {
                   return function(t, e) {
                      var i = kt(t);
                      i[0] = Ct(i[0] + e), i = St(i), t.r = i[0], t.g = i[1], t.b = i[2]
                   }(this._rgb, t), this
                }
             }
 
             function zt(t) {
                return new Rt(t)
             }
             const Ft = t => t instanceof CanvasGradient || t instanceof CanvasPattern;
 
             function It(t) {
                return Ft(t) ? t : zt(t)
             }
 
             function jt(t) {
                return Ft(t) ? t : zt(t).saturate(.5).darken(.1).hexString()
             }
             const Nt = Object.create(null),
                Bt = Object.create(null);
 
             function Vt(t, e) {
                if (!e) return t;
                const i = e.split(".");
                for (let e = 0, n = i.length; e < n; ++e) {
                   const n = i[e];
                   t = t[n] || (t[n] = Object.create(null))
                }
                return t
             }
 
             function Wt(t, e, i) {
                return "string" == typeof e ? M(Vt(t, e), i) : M(Vt(t, ""), e)
             }
             var Ht = new class {
                constructor(t) {
                   this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                      size: 12,
                      style: "normal",
                      lineHeight: 1.2,
                      weight: null
                   }, this.hover = {}, this.hoverBackgroundColor = (t, e) => jt(e.backgroundColor), this.hoverBorderColor = (t, e) => jt(e.borderColor), this.hoverColor = (t, e) => jt(e.color), this.indexAxis = "x", this.interaction = {
                      mode: "nearest",
                      intersect: !0
                   }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t)
                }
                set(t, e) {
                   return Wt(this, t, e)
                }
                get(t) {
                   return Vt(this, t)
                }
                describe(t, e) {
                   return Wt(Bt, t, e)
                }
                override(t, e) {
                   return Wt(Nt, t, e)
                }
                route(t, e, i, n) {
                   const r = Vt(this, t),
                      s = Vt(this, i),
                      o = "_" + e;
                   Object.defineProperties(r, {
                      [o]: {
                         value: r[e],
                         writable: !0
                      },
                      [e]: {
                         enumerable: !0,
                         get() {
                            const t = this[o],
                               e = s[n];
                            return f(t) ? Object.assign({}, e, t) : m(t, e)
                         },
                         set(t) {
                            this[o] = t
                         }
                      }
                   })
                }
             }({
                _scriptable: t => !t.startsWith("on"),
                _indexable: t => "events" !== t,
                hover: {
                   _fallback: "interaction"
                },
                interaction: {
                   _scriptable: !1,
                   _indexable: !1
                }
             });
 
             function $t(t, e, i, n, r) {
                let s = e[r];
                return s || (s = e[r] = t.measureText(r).width, i.push(r)), s > n && (n = s), n
             }
 
             function Ut(t, e, i, n) {
                let r = (n = n || {}).data = n.data || {},
                   s = n.garbageCollect = n.garbageCollect || [];
                n.font !== e && (r = n.data = {}, s = n.garbageCollect = [], n.font = e), t.save(), t.font = e;
                let o = 0;
                const a = i.length;
                let l, c, h, d, f;
                for (l = 0; l < a; l++)
                   if (d = i[l], null != d && !0 !== u(d)) o = $t(t, r, s, o, d);
                   else if (u(d))
                   for (c = 0, h = d.length; c < h; c++) f = d[c], null == f || u(f) || (o = $t(t, r, s, o, f));
                t.restore();
                const p = s.length / 2;
                if (p > i.length) {
                   for (l = 0; l < p; l++) delete r[s[l]];
                   s.splice(0, p)
                }
                return o
             }
 
             function qt(t, e, i) {
                const n = t.currentDevicePixelRatio,
                   r = 0 !== i ? Math.max(i / 2, .5) : 0;
                return Math.round((e - r) * n) / n + r
             }
 
             function Yt(t, e) {
                (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
             }
 
             function Xt(t, e, i, n) {
                let r, s, o, a, l;
                const c = e.pointStyle,
                   h = e.rotation,
                   d = e.radius;
                let u = (h || 0) * I;
                if (c && "object" == typeof c && (r = c.toString(), "[object HTMLImageElement]" === r || "[object HTMLCanvasElement]" === r)) return t.save(), t.translate(i, n), t.rotate(u), t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height), void t.restore();
                if (!(isNaN(d) || d <= 0)) {
                   switch (t.beginPath(), c) {
                      default:
                         t.arc(i, n, d, 0, R), t.closePath();
                         break;
                      case "triangle":
                         t.moveTo(i + Math.sin(u) * d, n - Math.cos(u) * d), u += B, t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d), u += B, t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d), t.closePath();
                         break;
                      case "rectRounded":
                         l = .516 * d, a = d - l, s = Math.cos(u + N) * a, o = Math.sin(u + N) * a, t.arc(i - s, n - o, l, u - A, u - j), t.arc(i + o, n - s, l, u - j, u), t.arc(i + s, n + o, l, u, u + j), t.arc(i - o, n + s, l, u + j, u + A), t.closePath();
                         break;
                      case "rect":
                         if (!h) {
                            a = Math.SQRT1_2 * d, t.rect(i - a, n - a, 2 * a, 2 * a);
                            break
                         }
                         u += N;
                      case "rectRot":
                         s = Math.cos(u) * d, o = Math.sin(u) * d, t.moveTo(i - s, n - o), t.lineTo(i + o, n - s), t.lineTo(i + s, n + o), t.lineTo(i - o, n + s), t.closePath();
                         break;
                      case "crossRot":
                         u += N;
                      case "cross":
                         s = Math.cos(u) * d, o = Math.sin(u) * d, t.moveTo(i - s, n - o), t.lineTo(i + s, n + o), t.moveTo(i + o, n - s), t.lineTo(i - o, n + s);
                         break;
                      case "star":
                         s = Math.cos(u) * d, o = Math.sin(u) * d, t.moveTo(i - s, n - o), t.lineTo(i + s, n + o), t.moveTo(i + o, n - s), t.lineTo(i - o, n + s), u += N, s = Math.cos(u) * d, o = Math.sin(u) * d, t.moveTo(i - s, n - o), t.lineTo(i + s, n + o), t.moveTo(i + o, n - s), t.lineTo(i - o, n + s);
                         break;
                      case "line":
                         s = Math.cos(u) * d, o = Math.sin(u) * d, t.moveTo(i - s, n - o), t.lineTo(i + s, n + o);
                         break;
                      case "dash":
                         t.moveTo(i, n), t.lineTo(i + Math.cos(u) * d, n + Math.sin(u) * d)
                   }
                   t.fill(), e.borderWidth > 0 && t.stroke()
                }
             }
 
             function Zt(t, e, i) {
                return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
             }
 
             function Gt(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
             }
 
             function Kt(t) {
                t.restore()
             }
 
             function Jt(t, e, i, n, r) {
                if (!e) return t.lineTo(i.x, i.y);
                if ("middle" === r) {
                   const n = (e.x + i.x) / 2;
                   t.lineTo(n, e.y), t.lineTo(n, i.y)
                } else "after" === r != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y)
             }
 
             function Qt(t, e, i, n) {
                if (!e) return t.lineTo(i.x, i.y);
                t.bezierCurveTo(n ? e.cp1x : e.cp2x, n ? e.cp1y : e.cp2y, n ? i.cp2x : i.cp1x, n ? i.cp2y : i.cp1y, i.x, i.y)
             }
 
             function te(t, e, i, n, r, s = {}) {
                const o = u(e) ? e : [e],
                   a = s.strokeWidth > 0 && "" !== s.strokeColor;
                let l, c;
                for (t.save(), t.font = r.string, function(t, e) {
                      e.translation && t.translate(e.translation[0], e.translation[1]), d(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
                   }(t, s), l = 0; l < o.length; ++l) c = o[l], a && (s.strokeColor && (t.strokeStyle = s.strokeColor), d(s.strokeWidth) || (t.lineWidth = s.strokeWidth), t.strokeText(c, i, n, s.maxWidth)), t.fillText(c, i, n, s.maxWidth), ee(t, i, n, c, s), n += r.lineHeight;
                t.restore()
             }
 
             function ee(t, e, i, n, r) {
                if (r.strikethrough || r.underline) {
                   const s = t.measureText(n),
                      o = e - s.actualBoundingBoxLeft,
                      a = e + s.actualBoundingBoxRight,
                      l = i - s.actualBoundingBoxAscent,
                      c = i + s.actualBoundingBoxDescent,
                      h = r.strikethrough ? (l + c) / 2 : c;
                   t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = r.decorationWidth || 2, t.moveTo(o, h), t.lineTo(a, h), t.stroke()
                }
             }
 
             function ie(t, e) {
                const {
                   x: i,
                   y: n,
                   w: r,
                   h: s,
                   radius: o
                } = e;
                t.arc(i + o.topLeft, n + o.topLeft, o.topLeft, -j, A, !0), t.lineTo(i, n + s - o.bottomLeft), t.arc(i + o.bottomLeft, n + s - o.bottomLeft, o.bottomLeft, A, j, !0), t.lineTo(i + r - o.bottomRight, n + s), t.arc(i + r - o.bottomRight, n + s - o.bottomRight, o.bottomRight, j, 0, !0), t.lineTo(i + r, n + o.topRight), t.arc(i + r - o.topRight, n + o.topRight, o.topRight, 0, -j, !0), t.lineTo(i + o.topLeft, n)
             }
             const ne = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
                re = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
 
             function se(t, e) {
                const i = ("" + t).match(ne);
                if (!i || "normal" === i[1]) return 1.2 * e;
                switch (t = +i[2], i[3]) {
                   case "px":
                      return t;
                   case "%":
                      t /= 100
                }
                return e * t
             }
 
             function oe(t, e) {
                const i = {},
                   n = f(e),
                   r = n ? Object.keys(e) : e,
                   s = f(t) ? n ? i => m(t[i], t[e[i]]) : e => t[e] : () => t;
                for (const t of r) i[t] = +s(t) || 0;
                return i
             }
 
             function ae(t) {
                return oe(t, {
                   top: "y",
                   right: "x",
                   bottom: "y",
                   left: "x"
                })
             }
 
             function le(t) {
                return oe(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
             }
 
             function ce(t) {
                const e = ae(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
             }
 
             function he(t, e) {
                t = t || {}, e = e || Ht.font;
                let i = m(t.size, e.size);
                "string" == typeof i && (i = parseInt(i, 10));
                let n = m(t.style, e.style);
                n && !("" + n).match(re) && (console.warn('Invalid font style specified: "' + n + '"'), n = "");
                const r = {
                   family: m(t.family, e.family),
                   lineHeight: se(m(t.lineHeight, e.lineHeight), i),
                   size: i,
                   style: n,
                   weight: m(t.weight, e.weight),
                   string: ""
                };
                return r.string = function(t) {
                   return !t || d(t.size) || d(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(r), r
             }
 
             function de(t, e, i, n) {
                let r, s, o, a = !0;
                for (r = 0, s = t.length; r < s; ++r)
                   if (o = t[r], void 0 !== o && (void 0 !== e && "function" == typeof o && (o = o(e), a = !1), void 0 !== i && u(o) && (o = o[i % o.length], a = !1), void 0 !== o)) return n && !a && (n.cacheable = !1), o
             }
 
             function ue(t, e) {
                return Object.assign(Object.create(t), e)
             }
 
             function fe(t, e, i) {
                i = i || (i => t[i] < e);
                let n, r = t.length - 1,
                   s = 0;
                for (; r - s > 1;) n = s + r >> 1, i(n) ? s = n : r = n;
                return {
                   lo: s,
                   hi: r
                }
             }
             const pe = (t, e, i) => fe(t, i, (n => t[n][e] < i)),
                ge = (t, e, i) => fe(t, i, (n => t[n][e] >= i)),
                me = ["push", "pop", "shift", "splice", "unshift"];
 
             function be(t, e) {
                const i = t._chartjs;
                if (!i) return;
                const n = i.listeners,
                   r = n.indexOf(e); - 1 !== r && n.splice(r, 1), n.length > 0 || (me.forEach((e => {
                   delete t[e]
                })), delete t._chartjs)
             }
 
             function xe(t) {
                const e = new Set;
                let i, n;
                for (i = 0, n = t.length; i < n; ++i) e.add(t[i]);
                return e.size === n ? t : Array.from(e)
             }
 
             function ye(t, e = [""], i = t, n, r = (() => t[0])) {
                L(n) || (n = Le("_fallback", t));
                const s = {
                   [Symbol.toStringTag]: "Object",
                   _cacheable: !0,
                   _scopes: t,
                   _rootScopes: i,
                   _fallback: n,
                   _getTarget: r,
                   override: r => ye([r, ...t], e, i, n)
                };
                return new Proxy(s, {
                   deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
                   get: (i, n) => Me(i, n, (() => function(t, e, i, n) {
                      let r;
                      for (const s of e)
                         if (r = Le(we(s, t), i), L(r)) return ke(t, r) ? Oe(i, n, t, r) : r
                   }(n, e, t, i))),
                   getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                   getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                   has: (t, e) => Ee(t).includes(e),
                   ownKeys: t => Ee(t),
                   set(t, e, i) {
                      const n = t._storage || (t._storage = r());
                      return t[e] = n[e] = i, delete t._keys, !0
                   }
                })
             }
 
             function ve(t, e, i, n) {
                const r = {
                   _cacheable: !1,
                   _proxy: t,
                   _context: e,
                   _subProxy: i,
                   _stack: new Set,
                   _descriptors: _e(t, n),
                   setContext: e => ve(t, e, i, n),
                   override: r => ve(t.override(r), e, i, n)
                };
                return new Proxy(r, {
                   deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
                   get: (t, e, i) => Me(t, e, (() => function(t, e, i) {
                      const {
                         _proxy: n,
                         _context: r,
                         _subProxy: s,
                         _descriptors: o
                      } = t;
                      let a = n[e];
                      return E(a) && o.isScriptable(e) && (a = function(t, e, i, n) {
                         const {
                            _proxy: r,
                            _context: s,
                            _subProxy: o,
                            _stack: a
                         } = i;
                         if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                         return a.add(t), e = e(s, o || n), a.delete(t), ke(t, e) && (e = Oe(r._scopes, r, t, e)), e
                      }(e, a, t, i)), u(a) && a.length && (a = function(t, e, i, n) {
                         const {
                            _proxy: r,
                            _context: s,
                            _subProxy: o,
                            _descriptors: a
                         } = i;
                         if (L(s.index) && n(t)) e = e[s.index % e.length];
                         else if (f(e[0])) {
                            const i = e,
                               n = r._scopes.filter((t => t !== i));
                            e = [];
                            for (const l of i) {
                               const i = Oe(n, r, t, l);
                               e.push(ve(i, s, o && o[t], a))
                            }
                         }
                         return e
                      }(e, a, t, o.isIndexable)), ke(e, a) && (a = ve(a, r, s && s[e], o)), a
                   }(t, e, i))),
                   getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                      enumerable: !0,
                      configurable: !0
                   } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
                   getPrototypeOf: () => Reflect.getPrototypeOf(t),
                   has: (e, i) => Reflect.has(t, i),
                   ownKeys: () => Reflect.ownKeys(t),
                   set: (e, i, n) => (t[i] = n, delete e[i], !0)
                })
             }
 
             function _e(t, e = {
                scriptable: !0,
                indexable: !0
             }) {
                const {
                   _scriptable: i = e.scriptable,
                   _indexable: n = e.indexable,
                   _allKeys: r = e.allKeys
                } = t;
                return {
                   allKeys: r,
                   scriptable: i,
                   indexable: n,
                   isScriptable: E(i) ? i : () => i,
                   isIndexable: E(n) ? n : () => n
                }
             }
             const we = (t, e) => t ? t + D(e) : e,
                ke = (t, e) => f(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
 
             function Me(t, e, i) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                const n = i();
                return t[e] = n, n
             }
 
             function Se(t, e, i) {
                return E(t) ? t(e, i) : t
             }
             const Ce = (t, e) => !0 === t ? e : "string" == typeof t ? O(e, t) : void 0;
 
             function Pe(t, e, i, n, r) {
                for (const s of e) {
                   const e = Ce(i, s);
                   if (e) {
                      t.add(e);
                      const s = Se(e._fallback, i, r);
                      if (L(s) && s !== i && s !== n) return s
                   } else if (!1 === e && L(n) && i !== n) return null
                }
                return !1
             }
 
             function Oe(t, e, i, n) {
                const r = e._rootScopes,
                   s = Se(e._fallback, i, n),
                   o = [...t, ...r],
                   a = new Set;
                a.add(n);
                let l = De(a, o, i, s || i, n);
                return null !== l && (!L(s) || s === i || (l = De(a, o, s, l, n), null !== l)) && ye(Array.from(a), [""], r, s, (() => function(t, e, i) {
                   const n = t._getTarget();
                   e in n || (n[e] = {});
                   const r = n[e];
                   return u(r) && f(i) ? i : r
                }(e, i, n)))
             }
 
             function De(t, e, i, n, r) {
                for (; i;) i = Pe(t, e, i, n, r);
                return i
             }
 
             function Le(t, e) {
                for (const i of e) {
                   if (!i) continue;
                   const e = i[t];
                   if (L(e)) return e
                }
             }
 
             function Ee(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                   const e = new Set;
                   for (const i of t)
                      for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t);
                   return Array.from(e)
                }(t._scopes)), e
             }
             const Te = Number.EPSILON || 1e-14,
                Ae = (t, e) => e < t.length && !t[e].skip && t[e],
                Re = t => "x" === t ? "y" : "x";
 
             function ze(t, e, i, n) {
                const r = t.skip ? e : t,
                   s = e,
                   o = i.skip ? e : i,
                   a = K(s, r),
                   l = K(o, s);
                let c = a / (a + l),
                   h = l / (a + l);
                c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
                const d = n * c,
                   u = n * h;
                return {
                   previous: {
                      x: s.x - d * (o.x - r.x),
                      y: s.y - d * (o.y - r.y)
                   },
                   next: {
                      x: s.x + u * (o.x - r.x),
                      y: s.y + u * (o.y - r.y)
                   }
                }
             }
 
             function Fe(t, e, i) {
                return Math.max(Math.min(t, i), e)
             }
 
             function Ie(t, e, i, n, r) {
                let s, o, a, l;
                if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) ! function(t, e = "x") {
                   const i = Re(e),
                      n = t.length,
                      r = Array(n).fill(0),
                      s = Array(n);
                   let o, a, l, c = Ae(t, 0);
                   for (o = 0; o < n; ++o)
                      if (a = l, l = c, c = Ae(t, o + 1), l) {
                         if (c) {
                            const t = c[e] - l[e];
                            r[o] = 0 !== t ? (c[i] - l[i]) / t : 0
                         }
                         s[o] = a ? c ? W(r[o - 1]) !== W(r[o]) ? 0 : (r[o - 1] + r[o]) / 2 : r[o - 1] : r[o]
                      }!
                   function(t, e, i) {
                      const n = t.length;
                      let r, s, o, a, l, c = Ae(t, 0);
                      for (let h = 0; h < n - 1; ++h) l = c, c = Ae(t, h + 1), l && c && (U(e[h], 0, Te) ? i[h] = i[h + 1] = 0 : (r = i[h] / e[h], s = i[h + 1] / e[h], a = Math.pow(r, 2) + Math.pow(s, 2), a <= 9 || (o = 3 / Math.sqrt(a), i[h] = r * o * e[h], i[h + 1] = s * o * e[h])))
                   }(t, r, s),
                   function(t, e, i = "x") {
                      const n = Re(i),
                         r = t.length;
                      let s, o, a, l = Ae(t, 0);
                      for (let c = 0; c < r; ++c) {
                         if (o = a, a = l, l = Ae(t, c + 1), !a) continue;
                         const r = a[i],
                            h = a[n];
                         o && (s = (r - o[i]) / 3, a[`cp1${i}`] = r - s, a[`cp1${n}`] = h - s * e[c]), l && (s = (l[i] - r) / 3, a[`cp2${i}`] = r + s, a[`cp2${n}`] = h + s * e[c])
                      }
                   }(t, s, e)
                }(t, r);
                else {
                   let i = n ? t[t.length - 1] : t[0];
                   for (s = 0, o = t.length; s < o; ++s) a = t[s], l = ze(i, a, t[Math.min(s + 1, o - (n ? 0 : 1)) % o], e.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, i = a
                }
                e.capBezierPoints && function(t, e) {
                   let i, n, r, s, o, a = Zt(t[0], e);
                   for (i = 0, n = t.length; i < n; ++i) o = s, s = a, a = i < n - 1 && Zt(t[i + 1], e), s && (r = t[i], o && (r.cp1x = Fe(r.cp1x, e.left, e.right), r.cp1y = Fe(r.cp1y, e.top, e.bottom)), a && (r.cp2x = Fe(r.cp2x, e.left, e.right), r.cp2y = Fe(r.cp2y, e.top, e.bottom)))
                }(t, i)
             }
 
             function je() {
                return "undefined" != typeof window && "undefined" != typeof document
             }
 
             function Ne(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
             }
 
             function Be(t, e, i) {
                let n;
                return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
             }
             const Ve = t => window.getComputedStyle(t, null),
                We = ["top", "right", "bottom", "left"];
 
             function He(t, e, i) {
                const n = {};
                i = i ? "-" + i : "";
                for (let r = 0; r < 4; r++) {
                   const s = We[r];
                   n[s] = parseFloat(t[e + "-" + s + i]) || 0
                }
                return n.width = n.left + n.right, n.height = n.top + n.bottom, n
             }
 
             function $e(t, e) {
                const {
                   canvas: i,
                   currentDevicePixelRatio: n
                } = e, r = Ve(i), s = "border-box" === r.boxSizing, o = He(r, "padding"), a = He(r, "border", "width"), {
                   x: l,
                   y: c,
                   box: h
                } = function(t, e) {
                   const i = t.native || t,
                      n = i.touches,
                      r = n && n.length ? n[0] : i,
                      {
                         offsetX: s,
                         offsetY: o
                      } = r;
                   let a, l, c = !1;
                   if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(s, o, i.target)) a = s, l = o;
                   else {
                      const t = e.getBoundingClientRect();
                      a = r.clientX - t.left, l = r.clientY - t.top, c = !0
                   }
                   return {
                      x: a,
                      y: l,
                      box: c
                   }
                }(t, i), d = o.left + (h && a.left), u = o.top + (h && a.top);
                let {
                   width: f,
                   height: p
                } = e;
                return s && (f -= o.width + a.width, p -= o.height + a.height), {
                   x: Math.round((l - d) / f * i.width / n),
                   y: Math.round((c - u) / p * i.height / n)
                }
             }
             const Ue = t => Math.round(10 * t) / 10;
 
             function qe(t, e, i) {
                const n = e || 1,
                   r = Math.floor(t.height * n),
                   s = Math.floor(t.width * n);
                t.height = r / n, t.width = s / n;
                const o = t.canvas;
                return o.style && (i || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== n || o.height !== r || o.width !== s) && (t.currentDevicePixelRatio = n, o.height = r, o.width = s, t.ctx.setTransform(n, 0, 0, n, 0, 0), !0)
             }
             const Ye = function() {
                let t = !1;
                try {
                   const e = {
                      get passive() {
                         return t = !0, !1
                      }
                   };
                   window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                } catch (t) {}
                return t
             }();
 
             function Xe(t, e) {
                const i = function(t, e) {
                      return Ve(t).getPropertyValue(e)
                   }(t, e),
                   n = i && i.match(/^(\d+)(\.\d+)?px$/);
                return n ? +n[1] : void 0
             }
 
             function Ze(t, e, i, n) {
                return {
                   x: t.x + i * (e.x - t.x),
                   y: t.y + i * (e.y - t.y)
                }
             }
 
             function Ge(t, e, i, n) {
                return {
                   x: t.x + i * (e.x - t.x),
                   y: "middle" === n ? i < .5 ? t.y : e.y : "after" === n ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
                }
             }
 
             function Ke(t, e, i, n) {
                const r = {
                      x: t.cp2x,
                      y: t.cp2y
                   },
                   s = {
                      x: e.cp1x,
                      y: e.cp1y
                   },
                   o = Ze(t, r, i),
                   a = Ze(r, s, i),
                   l = Ze(s, e, i),
                   c = Ze(o, a, i),
                   h = Ze(a, l, i);
                return Ze(c, h, i)
             }
             const Je = new Map;
 
             function Qe(t, e, i) {
                return function(t, e) {
                   e = e || {};
                   const i = t + JSON.stringify(e);
                   let n = Je.get(i);
                   return n || (n = new Intl.NumberFormat(t, e), Je.set(i, n)), n
                }(e, i).format(t)
             }
 
             function ti(t, e, i) {
                return t ? function(t, e) {
                   return {
                      x: i => t + t + e - i,
                      setWidth(t) {
                         e = t
                      },
                      textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                      xPlus: (t, e) => t - e,
                      leftForLtr: (t, e) => t - e
                   }
                }(e, i) : {
                   x: t => t,
                   setWidth(t) {},
                   textAlign: t => t,
                   xPlus: (t, e) => t + e,
                   leftForLtr: (t, e) => t
                }
             }
 
             function ei(t, e) {
                let i, n;
                "ltr" !== e && "rtl" !== e || (i = t.canvas.style, n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n)
             }
 
             function ii(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
             }
 
             function ni(t) {
                return "angle" === t ? {
                   between: tt,
                   compare: J,
                   normalize: Q
                } : {
                   between: it,
                   compare: (t, e) => t - e,
                   normalize: t => t
                }
             }
 
             function ri({
                start: t,
                end: e,
                count: i,
                loop: n,
                style: r
             }) {
                return {
                   start: t % i,
                   end: e % i,
                   loop: n && (e - t + 1) % i == 0,
                   style: r
                }
             }
 
             function si(t, e, i) {
                if (!i) return [t];
                const {
                   property: n,
                   start: r,
                   end: s
                } = i, o = e.length, {
                   compare: a,
                   between: l,
                   normalize: c
                } = ni(n), {
                   start: h,
                   end: d,
                   loop: u,
                   style: f
                } = function(t, e, i) {
                   const {
                      property: n,
                      start: r,
                      end: s
                   } = i, {
                      between: o,
                      normalize: a
                   } = ni(n), l = e.length;
                   let c, h, {
                      start: d,
                      end: u,
                      loop: f
                   } = t;
                   if (f) {
                      for (d += l, u += l, c = 0, h = l; c < h && o(a(e[d % l][n]), r, s); ++c) d--, u--;
                      d %= l, u %= l
                   }
                   return u < d && (u += l), {
                      start: d,
                      end: u,
                      loop: f,
                      style: t.style
                   }
                }(t, e, i), p = [];
                let g, m, b, x = !1,
                   y = null;
                for (let t = h, i = h; t <= d; ++t) m = e[t % o], m.skip || (g = c(m[n]), g !== b && (x = l(g, r, s), null === y && (x || l(r, b, g) && 0 !== a(r, b)) && (y = 0 === a(g, r) ? t : i), null !== y && (!x || 0 === a(s, g) || l(s, b, g)) && (p.push(ri({
                   start: y,
                   end: t,
                   loop: u,
                   count: o,
                   style: f
                })), y = null), i = t, b = g));
                return null !== y && p.push(ri({
                   start: y,
                   end: d,
                   loop: u,
                   count: o,
                   style: f
                })), p
             }
 
             function oi(t, e) {
                const i = [],
                   n = t.segments;
                for (let r = 0; r < n.length; r++) {
                   const s = si(n[r], t.points, e);
                   s.length && i.push(...s)
                }
                return i
             }
 
             function ai(t) {
                return {
                   backgroundColor: t.backgroundColor,
                   borderCapStyle: t.borderCapStyle,
                   borderDash: t.borderDash,
                   borderDashOffset: t.borderDashOffset,
                   borderJoinStyle: t.borderJoinStyle,
                   borderWidth: t.borderWidth,
                   borderColor: t.borderColor
                }
             }
 
             function li(t, e) {
                return e && JSON.stringify(t) !== JSON.stringify(e)
             }
             var ci = new class {
                constructor() {
                   this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
                }
                _notify(t, e, i, n) {
                   const r = e.listeners[n],
                      s = e.duration;
                   r.forEach((n => n({
                      chart: t,
                      initial: e.initial,
                      numSteps: s,
                      currentStep: Math.min(i - e.start, s)
                   })))
                }
                _refresh() {
                   this._request || (this._running = !0, this._request = s.call(window, (() => {
                      this._update(), this._request = null, this._running && this._refresh()
                   })))
                }
                _update(t = Date.now()) {
                   let e = 0;
                   this._charts.forEach(((i, n) => {
                      if (!i.running || !i.items.length) return;
                      const r = i.items;
                      let s, o = r.length - 1,
                         a = !1;
                      for (; o >= 0; --o) s = r[o], s._active ? (s._total > i.duration && (i.duration = s._total), s.tick(t), a = !0) : (r[o] = r[r.length - 1], r.pop());
                      a && (n.draw(), this._notify(n, i, t, "progress")), r.length || (i.running = !1, this._notify(n, i, t, "complete"), i.initial = !1), e += r.length
                   })), this._lastDate = t, 0 === e && (this._running = !1)
                }
                _getAnims(t) {
                   const e = this._charts;
                   let i = e.get(t);
                   return i || (i = {
                      running: !1,
                      initial: !0,
                      items: [],
                      listeners: {
                         complete: [],
                         progress: []
                      }
                   }, e.set(t, i)), i
                }
                listen(t, e, i) {
                   this._getAnims(t).listeners[e].push(i)
                }
                add(t, e) {
                   e && e.length && this._getAnims(t).items.push(...e)
                }
                has(t) {
                   return this._getAnims(t).items.length > 0
                }
                start(t) {
                   const e = this._charts.get(t);
                   e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh())
                }
                running(t) {
                   if (!this._running) return !1;
                   const e = this._charts.get(t);
                   return !!(e && e.running && e.items.length)
                }
                stop(t) {
                   const e = this._charts.get(t);
                   if (!e || !e.items.length) return;
                   const i = e.items;
                   let n = i.length - 1;
                   for (; n >= 0; --n) i[n].cancel();
                   e.items = [], this._notify(t, e, Date.now(), "complete")
                }
                remove(t) {
                   return this._charts.delete(t)
                }
             };
             const hi = "transparent",
                di = {
                   boolean: (t, e, i) => i > .5 ? e : t,
                   color(t, e, i) {
                      const n = It(t || hi),
                         r = n.valid && It(e || hi);
                      return r && r.valid ? r.mix(n, i).hexString() : e
                   },
                   number: (t, e, i) => t + (e - t) * i
                };
             class ui {
                constructor(t, e, i, n) {
                   const r = e[i];
                   n = de([t.to, n, r, t.from]);
                   const s = de([t.from, r, n]);
                   this._active = !0, this._fn = t.fn || di[t.type || typeof s], this._easing = ot[t.easing] || ot.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = s, this._to = n, this._promises = void 0
                }
                active() {
                   return this._active
                }
                update(t, e, i) {
                   if (this._active) {
                      this._notify(!1);
                      const n = this._target[this._prop],
                         r = i - this._start,
                         s = this._duration - r;
                      this._start = i, this._duration = Math.floor(Math.max(s, t.duration)), this._total += r, this._loop = !!t.loop, this._to = de([t.to, e, n, t.from]), this._from = de([t.from, n, e])
                   }
                }
                cancel() {
                   this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
                }
                tick(t) {
                   const e = t - this._start,
                      i = this._duration,
                      n = this._prop,
                      r = this._from,
                      s = this._loop,
                      o = this._to;
                   let a;
                   if (this._active = r !== o && (s || e < i), !this._active) return this._target[n] = o, void this._notify(!0);
                   e < 0 ? this._target[n] = r : (a = e / i % 2, a = s && a > 1 ? 2 - a : a, a = this._easing(Math.min(1, Math.max(0, a))), this._target[n] = this._fn(r, o, a))
                }
                wait() {
                   const t = this._promises || (this._promises = []);
                   return new Promise(((e, i) => {
                      t.push({
                         res: e,
                         rej: i
                      })
                   }))
                }
                _notify(t) {
                   const e = t ? "res" : "rej",
                      i = this._promises || [];
                   for (let t = 0; t < i.length; t++) i[t][e]()
                }
             }
             Ht.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
             });
             const fi = Object.keys(Ht.animation);
             Ht.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
             }), Ht.set("animations", {
                colors: {
                   type: "color",
                   properties: ["color", "borderColor", "backgroundColor"]
                },
                numbers: {
                   type: "number",
                   properties: ["x", "y", "borderWidth", "radius", "tension"]
                }
             }), Ht.describe("animations", {
                _fallback: "animation"
             }), Ht.set("transitions", {
                active: {
                   animation: {
                      duration: 400
                   }
                },
                resize: {
                   animation: {
                      duration: 0
                   }
                },
                show: {
                   animations: {
                      colors: {
                         from: "transparent"
                      },
                      visible: {
                         type: "boolean",
                         duration: 0
                      }
                   }
                },
                hide: {
                   animations: {
                      colors: {
                         to: "transparent"
                      },
                      visible: {
                         type: "boolean",
                         easing: "linear",
                         fn: t => 0 | t
                      }
                   }
                }
             });
             class pi {
                constructor(t, e) {
                   this._chart = t, this._properties = new Map, this.configure(e)
                }
                configure(t) {
                   if (!f(t)) return;
                   const e = this._properties;
                   Object.getOwnPropertyNames(t).forEach((i => {
                      const n = t[i];
                      if (!f(n)) return;
                      const r = {};
                      for (const t of fi) r[t] = n[t];
                      (u(n.properties) && n.properties || [i]).forEach((t => {
                         t !== i && e.has(t) || e.set(t, r)
                      }))
                   }))
                }
                _animateOptions(t, e) {
                   const i = e.options,
                      n = function(t, e) {
                         if (!e) return;
                         let i = t.options;
                         if (i) return i.$shared && (t.options = i = Object.assign({}, i, {
                            $shared: !1,
                            $animations: {}
                         })), i;
                         t.options = e
                      }(t, i);
                   if (!n) return [];
                   const r = this._createAnimations(n, i);
                   return i.$shared && function(t, e) {
                      const i = [],
                         n = Object.keys(e);
                      for (let e = 0; e < n.length; e++) {
                         const r = t[n[e]];
                         r && r.active() && i.push(r.wait())
                      }
                      return Promise.all(i)
                   }(t.options.$animations, i).then((() => {
                      t.options = i
                   }), (() => {})), r
                }
                _createAnimations(t, e) {
                   const i = this._properties,
                      n = [],
                      r = t.$animations || (t.$animations = {}),
                      s = Object.keys(e),
                      o = Date.now();
                   let a;
                   for (a = s.length - 1; a >= 0; --a) {
                      const l = s[a];
                      if ("$" === l.charAt(0)) continue;
                      if ("options" === l) {
                         n.push(...this._animateOptions(t, e));
                         continue
                      }
                      const c = e[l];
                      let h = r[l];
                      const d = i.get(l);
                      if (h) {
                         if (d && h.active()) {
                            h.update(d, c, o);
                            continue
                         }
                         h.cancel()
                      }
                      d && d.duration ? (r[l] = h = new ui(d, t, l, c), n.push(h)) : t[l] = c
                   }
                   return n
                }
                update(t, e) {
                   if (0 === this._properties.size) return void Object.assign(t, e);
                   const i = this._createAnimations(t, e);
                   return i.length ? (ci.add(this._chart, i), !0) : void 0
                }
             }
 
             function gi(t, e) {
                const i = t && t.options || {},
                   n = i.reverse,
                   r = void 0 === i.min ? e : 0,
                   s = void 0 === i.max ? e : 0;
                return {
                   start: n ? s : r,
                   end: n ? r : s
                }
             }
 
             function mi(t, e) {
                const i = [],
                   n = t._getSortedDatasetMetas(e);
                let r, s;
                for (r = 0, s = n.length; r < s; ++r) i.push(n[r].index);
                return i
             }
 
             function bi(t, e, i, n = {}) {
                const r = t.keys,
                   s = "single" === n.mode;
                let o, a, l, c;
                if (null !== e) {
                   for (o = 0, a = r.length; o < a; ++o) {
                      if (l = +r[o], l === i) {
                         if (n.all) continue;
                         break
                      }
                      c = t.values[l], p(c) && (s || 0 === e || W(e) === W(c)) && (e += c)
                   }
                   return e
                }
             }
 
             function xi(t, e) {
                const i = t && t.options.stacked;
                return i || void 0 === i && void 0 !== e.stack
             }
 
             function yi(t, e, i) {
                const n = t[e] || (t[e] = {});
                return n[i] || (n[i] = {})
             }
 
             function vi(t, e, i, n) {
                for (const r of e.getMatchingVisibleMetas(n).reverse()) {
                   const e = t[r.index];
                   if (i && e > 0 || !i && e < 0) return r.index
                }
                return null
             }
 
             function _i(t, e) {
                const {
                   chart: i,
                   _cachedMeta: n
                } = t, r = i._stacks || (i._stacks = {}), {
                   iScale: s,
                   vScale: o,
                   index: a
                } = n, l = s.axis, c = o.axis, h = function(t, e, i) {
                   return `${t.id}.${e.id}.${i.stack||i.type}`
                }(s, o, n), d = e.length;
                let u;
                for (let t = 0; t < d; ++t) {
                   const i = e[t],
                      {
                         [l]: s,
                         [c]: d
                      } = i;
                   u = (i._stacks || (i._stacks = {}))[c] = yi(r, h, s), u[a] = d, u._top = vi(u, o, !0, n.type), u._bottom = vi(u, o, !1, n.type)
                }
             }
 
             function wi(t, e) {
                const i = t.scales;
                return Object.keys(i).filter((t => i[t].axis === e)).shift()
             }
 
             function ki(t, e) {
                const i = t.controller.index,
                   n = t.vScale && t.vScale.axis;
                if (n) {
                   e = e || t._parsed;
                   for (const t of e) {
                      const e = t._stacks;
                      if (!e || void 0 === e[n] || void 0 === e[n][i]) return;
                      delete e[n][i]
                   }
                }
             }
             const Mi = t => "reset" === t || "none" === t,
                Si = (t, e) => e ? t : Object.assign({}, t);
             class Ci {
                constructor(t, e) {
                   this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize()
                }
                initialize() {
                   const t = this._cachedMeta;
                   this.configure(), this.linkScales(), t._stacked = xi(t.vScale, t), this.addElements()
                }
                updateIndex(t) {
                   this.index !== t && ki(this._cachedMeta), this.index = t
                }
                linkScales() {
                   const t = this.chart,
                      e = this._cachedMeta,
                      i = this.getDataset(),
                      n = (t, e, i, n) => "x" === t ? e : "r" === t ? n : i,
                      r = e.xAxisID = m(i.xAxisID, wi(t, "x")),
                      s = e.yAxisID = m(i.yAxisID, wi(t, "y")),
                      o = e.rAxisID = m(i.rAxisID, wi(t, "r")),
                      a = e.indexAxis,
                      l = e.iAxisID = n(a, r, s, o),
                      c = e.vAxisID = n(a, s, r, o);
                   e.xScale = this.getScaleForId(r), e.yScale = this.getScaleForId(s), e.rScale = this.getScaleForId(o), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(c)
                }
                getDataset() {
                   return this.chart.data.datasets[this.index]
                }
                getMeta() {
                   return this.chart.getDatasetMeta(this.index)
                }
                getScaleForId(t) {
                   return this.chart.scales[t]
                }
                _getOtherScale(t) {
                   const e = this._cachedMeta;
                   return t === e.iScale ? e.vScale : e.iScale
                }
                reset() {
                   this._update("reset")
                }
                _destroy() {
                   const t = this._cachedMeta;
                   this._data && be(this._data, this), t._stacked && ki(t)
                }
                _dataCheck() {
                   const t = this.getDataset(),
                      e = t.data || (t.data = []),
                      i = this._data;
                   if (f(e)) this._data = function(t) {
                      const e = Object.keys(t),
                         i = new Array(e.length);
                      let n, r, s;
                      for (n = 0, r = e.length; n < r; ++n) s = e[n], i[n] = {
                         x: s,
                         y: t[s]
                      };
                      return i
                   }(e);
                   else if (i !== e) {
                      if (i) {
                         be(i, this);
                         const t = this._cachedMeta;
                         ki(t), t._parsed = []
                      }
                      e && Object.isExtensible(e) && (this, (n = e)._chartjs ? n._chartjs.listeners.push(this) : (Object.defineProperty(n, "_chartjs", {
                         configurable: !0,
                         enumerable: !1,
                         value: {
                            listeners: [this]
                         }
                      }), me.forEach((t => {
                         const e = "_onData" + D(t),
                            i = n[t];
                         Object.defineProperty(n, t, {
                            configurable: !0,
                            enumerable: !1,
                            value(...t) {
                               const r = i.apply(this, t);
                               return n._chartjs.listeners.forEach((i => {
                                  "function" == typeof i[e] && i[e](...t)
                               })), r
                            }
                         })
                      })))), this._syncList = [], this._data = e
                   }
                   var n
                }
                addElements() {
                   const t = this._cachedMeta;
                   this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
                }
                buildOrUpdateElements(t) {
                   const e = this._cachedMeta,
                      i = this.getDataset();
                   let n = !1;
                   this._dataCheck();
                   const r = e._stacked;
                   e._stacked = xi(e.vScale, e), e.stack !== i.stack && (n = !0, ki(e), e.stack = i.stack), this._resyncElements(t), (n || r !== e._stacked) && _i(this, e._parsed)
                }
                configure() {
                   const t = this.chart.config,
                      e = t.datasetScopeKeys(this._type),
                      i = t.getOptionScopes(this.getDataset(), e, !0);
                   this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
                }
                parse(t, e) {
                   const {
                      _cachedMeta: i,
                      _data: n
                   } = this, {
                      iScale: r,
                      _stacked: s
                   } = i, o = r.axis;
                   let a, l, c, h = 0 === t && e === n.length || i._sorted,
                      d = t > 0 && i._parsed[t - 1];
                   if (!1 === this._parsing) i._parsed = n, i._sorted = !0, c = n;
                   else {
                      c = u(n[t]) ? this.parseArrayData(i, n, t, e) : f(n[t]) ? this.parseObjectData(i, n, t, e) : this.parsePrimitiveData(i, n, t, e);
                      const r = () => null === l[o] || d && l[o] < d[o];
                      for (a = 0; a < e; ++a) i._parsed[a + t] = l = c[a], h && (r() && (h = !1), d = l);
                      i._sorted = h
                   }
                   s && _i(this, c)
                }
                parsePrimitiveData(t, e, i, n) {
                   const {
                      iScale: r,
                      vScale: s
                   } = t, o = r.axis, a = s.axis, l = r.getLabels(), c = r === s, h = new Array(n);
                   let d, u, f;
                   for (d = 0, u = n; d < u; ++d) f = d + i, h[d] = {
                      [o]: c || r.parse(l[f], f),
                      [a]: s.parse(e[f], f)
                   };
                   return h
                }
                parseArrayData(t, e, i, n) {
                   const {
                      xScale: r,
                      yScale: s
                   } = t, o = new Array(n);
                   let a, l, c, h;
                   for (a = 0, l = n; a < l; ++a) c = a + i, h = e[c], o[a] = {
                      x: r.parse(h[0], c),
                      y: s.parse(h[1], c)
                   };
                   return o
                }
                parseObjectData(t, e, i, n) {
                   const {
                      xScale: r,
                      yScale: s
                   } = t, {
                      xAxisKey: o = "x",
                      yAxisKey: a = "y"
                   } = this._parsing, l = new Array(n);
                   let c, h, d, u;
                   for (c = 0, h = n; c < h; ++c) d = c + i, u = e[d], l[c] = {
                      x: r.parse(O(u, o), d),
                      y: s.parse(O(u, a), d)
                   };
                   return l
                }
                getParsed(t) {
                   return this._cachedMeta._parsed[t]
                }
                getDataElement(t) {
                   return this._cachedMeta.data[t]
                }
                applyStack(t, e, i) {
                   const n = this.chart,
                      r = this._cachedMeta,
                      s = e[t.axis];
                   return bi({
                      keys: mi(n, !0),
                      values: e._stacks[t.axis]
                   }, s, r.index, {
                      mode: i
                   })
                }
                updateRangeFromParsed(t, e, i, n) {
                   const r = i[e.axis];
                   let s = null === r ? NaN : r;
                   const o = n && i._stacks[e.axis];
                   n && o && (n.values = o, s = bi(n, r, this._cachedMeta.index)), t.min = Math.min(t.min, s), t.max = Math.max(t.max, s)
                }
                getMinMax(t, e) {
                   const i = this._cachedMeta,
                      n = i._parsed,
                      r = i._sorted && t === i.iScale,
                      s = n.length,
                      o = this._getOtherScale(t),
                      a = ((t, e, i) => t && !e.hidden && e._stacked && {
                         keys: mi(i, !0),
                         values: null
                      })(e, i, this.chart),
                      l = {
                         min: Number.POSITIVE_INFINITY,
                         max: Number.NEGATIVE_INFINITY
                      },
                      {
                         min: c,
                         max: h
                      } = function(t) {
                         const {
                            min: e,
                            max: i,
                            minDefined: n,
                            maxDefined: r
                         } = t.getUserBounds();
                         return {
                            min: n ? e : Number.NEGATIVE_INFINITY,
                            max: r ? i : Number.POSITIVE_INFINITY
                         }
                      }(o);
                   let d, u;
 
                   function f() {
                      u = n[d];
                      const e = u[o.axis];
                      return !p(u[t.axis]) || c > e || h < e
                   }
                   for (d = 0; d < s && (f() || (this.updateRangeFromParsed(l, t, u, a), !r)); ++d);
                   if (r)
                      for (d = s - 1; d >= 0; --d)
                         if (!f()) {
                            this.updateRangeFromParsed(l, t, u, a);
                            break
                         } return l
                }
                getAllParsedValues(t) {
                   const e = this._cachedMeta._parsed,
                      i = [];
                   let n, r, s;
                   for (n = 0, r = e.length; n < r; ++n) s = e[n][t.axis], p(s) && i.push(s);
                   return i
                }
                getMaxOverflow() {
                   return !1
                }
                getLabelAndValue(t) {
                   const e = this._cachedMeta,
                      i = e.iScale,
                      n = e.vScale,
                      r = this.getParsed(t);
                   return {
                      label: i ? "" + i.getLabelForValue(r[i.axis]) : "",
                      value: n ? "" + n.getLabelForValue(r[n.axis]) : ""
                   }
                }
                _update(t) {
                   const e = this._cachedMeta;
                   this.update(t || "default"), e._clip = function(t) {
                      let e, i, n, r;
                      return f(t) ? (e = t.top, i = t.right, n = t.bottom, r = t.left) : e = i = n = r = t, {
                         top: e,
                         right: i,
                         bottom: n,
                         left: r,
                         disabled: !1 === t
                      }
                   }(m(this.options.clip, function(t, e, i) {
                      if (!1 === i) return !1;
                      const n = gi(t, i),
                         r = gi(e, i);
                      return {
                         top: r.end,
                         right: n.end,
                         bottom: r.start,
                         left: n.start
                      }
                   }(e.xScale, e.yScale, this.getMaxOverflow())))
                }
                update(t) {}
                draw() {
                   const t = this._ctx,
                      e = this.chart,
                      i = this._cachedMeta,
                      n = i.data || [],
                      r = e.chartArea,
                      s = [],
                      o = this._drawStart || 0,
                      a = this._drawCount || n.length - o,
                      l = this.options.drawActiveElementsOnTop;
                   let c;
                   for (i.dataset && i.dataset.draw(t, r, o, a), c = o; c < o + a; ++c) {
                      const e = n[c];
                      e.hidden || (e.active && l ? s.push(e) : e.draw(t, r))
                   }
                   for (c = 0; c < s.length; ++c) s[c].draw(t, r)
                }
                getStyle(t, e) {
                   const i = e ? "active" : "default";
                   return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
                }
                getContext(t, e, i) {
                   const n = this.getDataset();
                   let r;
                   if (t >= 0 && t < this._cachedMeta.data.length) {
                      const e = this._cachedMeta.data[t];
                      r = e.$context || (e.$context = function(t, e, i) {
                         return ue(t, {
                            active: !1,
                            dataIndex: e,
                            parsed: void 0,
                            raw: void 0,
                            element: i,
                            index: e,
                            mode: "default",
                            type: "data"
                         })
                      }(this.getContext(), t, e)), r.parsed = this.getParsed(t), r.raw = n.data[t], r.index = r.dataIndex = t
                   } else r = this.$context || (this.$context = function(t, e) {
                      return ue(t, {
                         active: !1,
                         dataset: void 0,
                         datasetIndex: e,
                         index: e,
                         mode: "default",
                         type: "dataset"
                      })
                   }(this.chart.getContext(), this.index)), r.dataset = n, r.index = r.datasetIndex = this.index;
                   return r.active = !!e, r.mode = i, r
                }
                resolveDatasetElementOptions(t) {
                   return this._resolveElementOptions(this.datasetElementType.id, t)
                }
                resolveDataElementOptions(t, e) {
                   return this._resolveElementOptions(this.dataElementType.id, e, t)
                }
                _resolveElementOptions(t, e = "default", i) {
                   const n = "active" === e,
                      r = this._cachedDataOpts,
                      s = t + "-" + e,
                      o = r[s],
                      a = this.enableOptionSharing && L(i);
                   if (o) return Si(o, a);
                   const l = this.chart.config,
                      c = l.datasetElementScopeKeys(this._type, t),
                      h = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                      d = l.getOptionScopes(this.getDataset(), c),
                      u = Object.keys(Ht.elements[t]),
                      f = l.resolveNamedOptions(d, u, (() => this.getContext(i, n)), h);
                   return f.$shared && (f.$shared = a, r[s] = Object.freeze(Si(f, a))), f
                }
                _resolveAnimations(t, e, i) {
                   const n = this.chart,
                      r = this._cachedDataOpts,
                      s = `animation-${e}`,
                      o = r[s];
                   if (o) return o;
                   let a;
                   if (!1 !== n.options.animation) {
                      const n = this.chart.config,
                         r = n.datasetAnimationScopeKeys(this._type, e),
                         s = n.getOptionScopes(this.getDataset(), r);
                      a = n.createResolver(s, this.getContext(t, i, e))
                   }
                   const l = new pi(n, a && a.animations);
                   return a && a._cacheable && (r[s] = Object.freeze(l)), l
                }
                getSharedOptions(t) {
                   if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
                }
                includeOptions(t, e) {
                   return !e || Mi(t) || this.chart._animationsDisabled
                }
                updateElement(t, e, i, n) {
                   Mi(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
                }
                updateSharedOptions(t, e, i) {
                   t && !Mi(e) && this._resolveAnimations(void 0, e).update(t, i)
                }
                _setStyle(t, e, i, n) {
                   t.active = n;
                   const r = this.getStyle(e, n);
                   this._resolveAnimations(e, i, n).update(t, {
                      options: !n && this.getSharedOptions(r) || r
                   })
                }
                removeHoverStyle(t, e, i) {
                   this._setStyle(t, i, "active", !1)
                }
                setHoverStyle(t, e, i) {
                   this._setStyle(t, i, "active", !0)
                }
                _removeDatasetHoverStyle() {
                   const t = this._cachedMeta.dataset;
                   t && this._setStyle(t, void 0, "active", !1)
                }
                _setDatasetHoverStyle() {
                   const t = this._cachedMeta.dataset;
                   t && this._setStyle(t, void 0, "active", !0)
                }
                _resyncElements(t) {
                   const e = this._data,
                      i = this._cachedMeta.data;
                   for (const [t, e, i] of this._syncList) this[t](e, i);
                   this._syncList = [];
                   const n = i.length,
                      r = e.length,
                      s = Math.min(r, n);
                   s && this.parse(0, s), r > n ? this._insertElements(n, r - n, t) : r < n && this._removeElements(r, n - r)
                }
                _insertElements(t, e, i = !0) {
                   const n = this._cachedMeta,
                      r = n.data,
                      s = t + e;
                   let o;
                   const a = t => {
                      for (t.length += e, o = t.length - 1; o >= s; o--) t[o] = t[o - e]
                   };
                   for (a(r), o = t; o < s; ++o) r[o] = new this.dataElementType;
                   this._parsing && a(n._parsed), this.parse(t, e), i && this.updateElements(r, t, e, "reset")
                }
                updateElements(t, e, i, n) {}
                _removeElements(t, e) {
                   const i = this._cachedMeta;
                   if (this._parsing) {
                      const n = i._parsed.splice(t, e);
                      i._stacked && ki(i, n)
                   }
                   i.data.splice(t, e)
                }
                _sync(t) {
                   if (this._parsing) this._syncList.push(t);
                   else {
                      const [e, i, n] = t;
                      this[e](i, n)
                   }
                   this.chart._dataChanges.push([this.index, ...t])
                }
                _onDataPush() {
                   const t = arguments.length;
                   this._sync(["_insertElements", this.getDataset().data.length - t, t])
                }
                _onDataPop() {
                   this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
                }
                _onDataShift() {
                   this._sync(["_removeElements", 0, 1])
                }
                _onDataSplice(t, e) {
                   e && this._sync(["_removeElements", t, e]);
                   const i = arguments.length - 2;
                   i && this._sync(["_insertElements", t, i])
                }
                _onDataUnshift() {
                   this._sync(["_insertElements", 0, arguments.length])
                }
             }
 
             function Pi(t) {
                const e = t.iScale,
                   i = function(t, e) {
                      if (!t._cache.$bar) {
                         const i = t.getMatchingVisibleMetas(e);
                         let n = [];
                         for (let e = 0, r = i.length; e < r; e++) n = n.concat(i[e].controller.getAllParsedValues(t));
                         t._cache.$bar = xe(n.sort(((t, e) => t - e)))
                      }
                      return t._cache.$bar
                   }(e, t.type);
                let n, r, s, o, a = e._length;
                const l = () => {
                   32767 !== s && -32768 !== s && (L(o) && (a = Math.min(a, Math.abs(s - o) || a)), o = s)
                };
                for (n = 0, r = i.length; n < r; ++n) s = e.getPixelForValue(i[n]), l();
                for (o = void 0, n = 0, r = e.ticks.length; n < r; ++n) s = e.getPixelForTick(n), l();
                return a
             }
 
             function Oi(t, e, i, n) {
                return u(t) ? function(t, e, i, n) {
                   const r = i.parse(t[0], n),
                      s = i.parse(t[1], n),
                      o = Math.min(r, s),
                      a = Math.max(r, s);
                   let l = o,
                      c = a;
                   Math.abs(o) > Math.abs(a) && (l = a, c = o), e[i.axis] = c, e._custom = {
                      barStart: l,
                      barEnd: c,
                      start: r,
                      end: s,
                      min: o,
                      max: a
                   }
                }(t, e, i, n) : e[i.axis] = i.parse(t, n), e
             }
 
             function Di(t, e, i, n) {
                const r = t.iScale,
                   s = t.vScale,
                   o = r.getLabels(),
                   a = r === s,
                   l = [];
                let c, h, d, u;
                for (c = i, h = i + n; c < h; ++c) u = e[c], d = {}, d[r.axis] = a || r.parse(o[c], c), l.push(Oi(u, d, s, c));
                return l
             }
 
             function Li(t) {
                return t && void 0 !== t.barStart && void 0 !== t.barEnd
             }
 
             function Ei(t, e, i, n) {
                let r = e.borderSkipped;
                const s = {};
                if (!r) return void(t.borderSkipped = s);
                const {
                   start: o,
                   end: a,
                   reverse: l,
                   top: c,
                   bottom: h
                } = function(t) {
                   let e, i, n, r, s;
                   return t.horizontal ? (e = t.base > t.x, i = "left", n = "right") : (e = t.base < t.y, i = "bottom", n = "top"), e ? (r = "end", s = "start") : (r = "start", s = "end"), {
                      start: i,
                      end: n,
                      reverse: e,
                      top: r,
                      bottom: s
                   }
                }(t);
                "middle" === r && i && (t.enableBorderRadius = !0, (i._top || 0) === n ? r = c : (i._bottom || 0) === n ? r = h : (s[Ti(h, o, a, l)] = !0, r = c)), s[Ti(r, o, a, l)] = !0, t.borderSkipped = s
             }
 
             function Ti(t, e, i, n) {
                var r, s, o;
                return n ? (o = i, t = Ai(t = (r = t) === (s = e) ? o : r === o ? s : r, i, e)) : t = Ai(t, e, i), t
             }
 
             function Ai(t, e, i) {
                return "start" === t ? e : "end" === t ? i : t
             }
 
             function Ri(t, {
                inflateAmount: e
             }, i) {
                t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e
             }
             Ci.defaults = {}, Ci.prototype.datasetElementType = null, Ci.prototype.dataElementType = null;
             class zi extends Ci {
                parsePrimitiveData(t, e, i, n) {
                   return Di(t, e, i, n)
                }
                parseArrayData(t, e, i, n) {
                   return Di(t, e, i, n)
                }
                parseObjectData(t, e, i, n) {
                   const {
                      iScale: r,
                      vScale: s
                   } = t, {
                      xAxisKey: o = "x",
                      yAxisKey: a = "y"
                   } = this._parsing, l = "x" === r.axis ? o : a, c = "x" === s.axis ? o : a, h = [];
                   let d, u, f, p;
                   for (d = i, u = i + n; d < u; ++d) p = e[d], f = {}, f[r.axis] = r.parse(O(p, l), d), h.push(Oi(O(p, c), f, s, d));
                   return h
                }
                updateRangeFromParsed(t, e, i, n) {
                   super.updateRangeFromParsed(t, e, i, n);
                   const r = i._custom;
                   r && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
                }
                getMaxOverflow() {
                   return 0
                }
                getLabelAndValue(t) {
                   const e = this._cachedMeta,
                      {
                         iScale: i,
                         vScale: n
                      } = e,
                      r = this.getParsed(t),
                      s = r._custom,
                      o = Li(s) ? "[" + s.start + ", " + s.end + "]" : "" + n.getLabelForValue(r[n.axis]);
                   return {
                      label: "" + i.getLabelForValue(r[i.axis]),
                      value: o
                   }
                }
                initialize() {
                   this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack
                }
                update(t) {
                   const e = this._cachedMeta;
                   this.updateElements(e.data, 0, e.data.length, t)
                }
                updateElements(t, e, i, n) {
                   const r = "reset" === n,
                      {
                         index: s,
                         _cachedMeta: {
                            vScale: o
                         }
                      } = this,
                      a = o.getBasePixel(),
                      l = o.isHorizontal(),
                      c = this._getRuler(),
                      h = this.resolveDataElementOptions(e, n),
                      u = this.getSharedOptions(h),
                      f = this.includeOptions(n, u);
                   this.updateSharedOptions(u, n, h);
                   for (let h = e; h < e + i; h++) {
                      const e = this.getParsed(h),
                         i = r || d(e[o.axis]) ? {
                            base: a,
                            head: a
                         } : this._calculateBarValuePixels(h),
                         p = this._calculateBarIndexPixels(h, c),
                         g = (e._stacks || {})[o.axis],
                         m = {
                            horizontal: l,
                            base: i.base,
                            enableBorderRadius: !g || Li(e._custom) || s === g._top || s === g._bottom,
                            x: l ? i.head : p.center,
                            y: l ? p.center : i.head,
                            height: l ? p.size : Math.abs(i.size),
                            width: l ? Math.abs(i.size) : p.size
                         };
                      f && (m.options = u || this.resolveDataElementOptions(h, t[h].active ? "active" : n));
                      const b = m.options || t[h].options;
                      Ei(m, b, g, s), Ri(m, b, c.ratio), this.updateElement(t[h], h, m, n)
                   }
                }
                _getStacks(t, e) {
                   const i = this._cachedMeta.iScale,
                      n = i.getMatchingVisibleMetas(this._type),
                      r = i.options.stacked,
                      s = n.length,
                      o = [];
                   let a, l;
                   for (a = 0; a < s; ++a)
                      if (l = n[a], l.controller.options.grouped) {
                         if (void 0 !== e) {
                            const t = l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];
                            if (d(t) || isNaN(t)) continue
                         }
                         if ((!1 === r || -1 === o.indexOf(l.stack) || void 0 === r && void 0 === l.stack) && o.push(l.stack), l.index === t) break
                      } return o.length || o.push(void 0), o
                }
                _getStackCount(t) {
                   return this._getStacks(void 0, t).length
                }
                _getStackIndex(t, e, i) {
                   const n = this._getStacks(t, i),
                      r = void 0 !== e ? n.indexOf(e) : -1;
                   return -1 === r ? n.length - 1 : r
                }
                _getRuler() {
                   const t = this.options,
                      e = this._cachedMeta,
                      i = e.iScale,
                      n = [];
                   let r, s;
                   for (r = 0, s = e.data.length; r < s; ++r) n.push(i.getPixelForValue(this.getParsed(r)[i.axis], r));
                   const o = t.barThickness;
                   return {
                      min: o || Pi(e),
                      pixels: n,
                      start: i._startPixel,
                      end: i._endPixel,
                      stackCount: this._getStackCount(),
                      scale: i,
                      grouped: t.grouped,
                      ratio: o ? 1 : t.categoryPercentage * t.barPercentage
                   }
                }
                _calculateBarValuePixels(t) {
                   const {
                      _cachedMeta: {
                         vScale: e,
                         _stacked: i
                      },
                      options: {
                         base: n,
                         minBarLength: r
                      }
                   } = this, s = n || 0, o = this.getParsed(t), a = o._custom, l = Li(a);
                   let c, h, u = o[e.axis],
                      f = 0,
                      p = i ? this.applyStack(e, o, i) : u;
                   p !== u && (f = p - u, p = u), l && (u = a.barStart, p = a.barEnd - a.barStart, 0 !== u && W(u) !== W(a.barEnd) && (f = 0), f += u);
                   const g = d(n) || l ? f : n;
                   let m = e.getPixelForValue(g);
                   if (c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m, h = c - m, Math.abs(h) < r && (h = function(t, e, i) {
                         return 0 !== t ? W(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                      }(h, e, s) * r, u === s && (m -= h / 2), c = m + h), m === e.getPixelForValue(s)) {
                      const t = W(h) * e.getLineWidthForValue(s) / 2;
                      m += t, h -= t
                   }
                   return {
                      size: h,
                      base: m,
                      head: c,
                      center: c + h / 2
                   }
                }
                _calculateBarIndexPixels(t, e) {
                   const i = e.scale,
                      n = this.options,
                      r = n.skipNull,
                      s = m(n.maxBarThickness, 1 / 0);
                   let o, a;
                   if (e.grouped) {
                      const i = r ? this._getStackCount(t) : e.stackCount,
                         l = "flex" === n.barThickness ? function(t, e, i, n) {
                            const r = e.pixels,
                               s = r[t];
                            let o = t > 0 ? r[t - 1] : null,
                               a = t < r.length - 1 ? r[t + 1] : null;
                            const l = i.categoryPercentage;
                            null === o && (o = s - (null === a ? e.end - e.start : a - s)), null === a && (a = s + s - o);
                            const c = s - (s - Math.min(o, a)) / 2 * l;
                            return {
                               chunk: Math.abs(a - o) / 2 * l / n,
                               ratio: i.barPercentage,
                               start: c
                            }
                         }(t, e, n, i) : function(t, e, i, n) {
                            const r = i.barThickness;
                            let s, o;
                            return d(r) ? (s = e.min * i.categoryPercentage, o = i.barPercentage) : (s = r * n, o = 1), {
                               chunk: s / n,
                               ratio: o,
                               start: e.pixels[t] - s / 2
                            }
                         }(t, e, n, i),
                         c = this._getStackIndex(this.index, this._cachedMeta.stack, r ? t : void 0);
                      o = l.start + l.chunk * c + l.chunk / 2, a = Math.min(s, l.chunk * l.ratio)
                   } else o = i.getPixelForValue(this.getParsed(t)[i.axis], t), a = Math.min(s, e.min * e.ratio);
                   return {
                      base: o - a / 2,
                      head: o + a / 2,
                      center: o,
                      size: a
                   }
                }
                draw() {
                   const t = this._cachedMeta,
                      e = t.vScale,
                      i = t.data,
                      n = i.length;
                   let r = 0;
                   for (; r < n; ++r) null !== this.getParsed(r)[e.axis] && i[r].draw(this._ctx)
                }
             }
             zi.id = "bar", zi.defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                   numbers: {
                      type: "number",
                      properties: ["x", "y", "base", "width", "height"]
                   }
                }
             }, zi.overrides = {
                scales: {
                   _index_: {
                      type: "category",
                      offset: !0,
                      grid: {
                         offset: !0
                      }
                   },
                   _value_: {
                      type: "linear",
                      beginAtZero: !0
                   }
                }
             };
             class Fi extends Ci {
                initialize() {
                   this.enableOptionSharing = !0, super.initialize()
                }
                parsePrimitiveData(t, e, i, n) {
                   const r = super.parsePrimitiveData(t, e, i, n);
                   for (let t = 0; t < r.length; t++) r[t]._custom = this.resolveDataElementOptions(t + i).radius;
                   return r
                }
                parseArrayData(t, e, i, n) {
                   const r = super.parseArrayData(t, e, i, n);
                   for (let t = 0; t < r.length; t++) {
                      const n = e[i + t];
                      r[t]._custom = m(n[2], this.resolveDataElementOptions(t + i).radius)
                   }
                   return r
                }
                parseObjectData(t, e, i, n) {
                   const r = super.parseObjectData(t, e, i, n);
                   for (let t = 0; t < r.length; t++) {
                      const n = e[i + t];
                      r[t]._custom = m(n && n.r && +n.r, this.resolveDataElementOptions(t + i).radius)
                   }
                   return r
                }
                getMaxOverflow() {
                   const t = this._cachedMeta.data;
                   let e = 0;
                   for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                   return e > 0 && e
                }
                getLabelAndValue(t) {
                   const e = this._cachedMeta,
                      {
                         xScale: i,
                         yScale: n
                      } = e,
                      r = this.getParsed(t),
                      s = i.getLabelForValue(r.x),
                      o = n.getLabelForValue(r.y),
                      a = r._custom;
                   return {
                      label: e.label,
                      value: "(" + s + ", " + o + (a ? ", " + a : "") + ")"
                   }
                }
                update(t) {
                   const e = this._cachedMeta.data;
                   this.updateElements(e, 0, e.length, t)
                }
                updateElements(t, e, i, n) {
                   const r = "reset" === n,
                      {
                         iScale: s,
                         vScale: o
                      } = this._cachedMeta,
                      a = this.resolveDataElementOptions(e, n),
                      l = this.getSharedOptions(a),
                      c = this.includeOptions(n, l),
                      h = s.axis,
                      d = o.axis;
                   for (let a = e; a < e + i; a++) {
                      const e = t[a],
                         i = !r && this.getParsed(a),
                         l = {},
                         u = l[h] = r ? s.getPixelForDecimal(.5) : s.getPixelForValue(i[h]),
                         f = l[d] = r ? o.getBasePixel() : o.getPixelForValue(i[d]);
                      l.skip = isNaN(u) || isNaN(f), c && (l.options = this.resolveDataElementOptions(a, e.active ? "active" : n), r && (l.options.radius = 0)), this.updateElement(e, a, l, n)
                   }
                   this.updateSharedOptions(l, n, a)
                }
                resolveDataElementOptions(t, e) {
                   const i = this.getParsed(t);
                   let n = super.resolveDataElementOptions(t, e);
                   n.$shared && (n = Object.assign({}, n, {
                      $shared: !1
                   }));
                   const r = n.radius;
                   return "active" !== e && (n.radius = 0), n.radius += m(i && i._custom, r), n
                }
             }
             Fi.id = "bubble", Fi.defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                   numbers: {
                      type: "number",
                      properties: ["x", "y", "borderWidth", "radius"]
                   }
                }
             }, Fi.overrides = {
                scales: {
                   x: {
                      type: "linear"
                   },
                   y: {
                      type: "linear"
                   }
                },
                plugins: {
                   tooltip: {
                      callbacks: {
                         title: () => ""
                      }
                   }
                }
             };
             class Ii extends Ci {
                constructor(t, e) {
                   super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
                }
                linkScales() {}
                parse(t, e) {
                   const i = this.getDataset().data,
                      n = this._cachedMeta;
                   if (!1 === this._parsing) n._parsed = i;
                   else {
                      let r, s, o = t => +i[t];
                      if (f(i[t])) {
                         const {
                            key: t = "value"
                         } = this._parsing;
                         o = e => +O(i[e], t)
                      }
                      for (r = t, s = t + e; r < s; ++r) n._parsed[r] = o(r)
                   }
                }
                _getRotation() {
                   return Y(this.options.rotation - 90)
                }
                _getCircumference() {
                   return Y(this.options.circumference)
                }
                _getRotationExtents() {
                   let t = R,
                      e = -R;
                   for (let i = 0; i < this.chart.data.datasets.length; ++i)
                      if (this.chart.isDatasetVisible(i)) {
                         const n = this.chart.getDatasetMeta(i).controller,
                            r = n._getRotation(),
                            s = n._getCircumference();
                         t = Math.min(t, r), e = Math.max(e, r + s)
                      } return {
                      rotation: t,
                      circumference: e - t
                   }
                }
                update(t) {
                   const e = this.chart,
                      {
                         chartArea: i
                      } = e,
                      n = this._cachedMeta,
                      r = n.data,
                      s = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
                      o = Math.max((Math.min(i.width, i.height) - s) / 2, 0),
                      a = Math.min((c = o, "string" == typeof(l = this.options.cutout) && l.endsWith("%") ? parseFloat(l) / 100 : l / c), 1);
                   var l, c;
                   const h = this._getRingWeight(this.index),
                      {
                         circumference: d,
                         rotation: u
                      } = this._getRotationExtents(),
                      {
                         ratioX: f,
                         ratioY: p,
                         offsetX: g,
                         offsetY: m
                      } = function(t, e, i) {
                         let n = 1,
                            r = 1,
                            s = 0,
                            o = 0;
                         if (e < R) {
                            const a = t,
                               l = a + e,
                               c = Math.cos(a),
                               h = Math.sin(a),
                               d = Math.cos(l),
                               u = Math.sin(l),
                               f = (t, e, n) => tt(t, a, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
                               p = (t, e, n) => tt(t, a, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
                               g = f(0, c, d),
                               m = f(j, h, u),
                               b = p(A, c, d),
                               x = p(A + j, h, u);
                            n = (g - b) / 2, r = (m - x) / 2, s = -(g + b) / 2, o = -(m + x) / 2
                         }
                         return {
                            ratioX: n,
                            ratioY: r,
                            offsetX: s,
                            offsetY: o
                         }
                      }(u, d, a),
                      x = (i.width - s) / f,
                      y = (i.height - s) / p,
                      v = Math.max(Math.min(x, y) / 2, 0),
                      _ = b(this.options.radius, v),
                      w = (_ - Math.max(_ * a, 0)) / this._getVisibleDatasetWeightTotal();
                   this.offsetX = g * _, this.offsetY = m * _, n.total = this.calculateTotal(), this.outerRadius = _ - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * h, 0), this.updateElements(r, 0, r.length, t)
                }
                _circumference(t, e) {
                   const i = this.options,
                      n = this._cachedMeta,
                      r = this._getCircumference();
                   return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === n._parsed[t] || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * r / R)
                }
                updateElements(t, e, i, n) {
                   const r = "reset" === n,
                      s = this.chart,
                      o = s.chartArea,
                      a = s.options.animation,
                      l = (o.left + o.right) / 2,
                      c = (o.top + o.bottom) / 2,
                      h = r && a.animateScale,
                      d = h ? 0 : this.innerRadius,
                      u = h ? 0 : this.outerRadius,
                      f = this.resolveDataElementOptions(e, n),
                      p = this.getSharedOptions(f),
                      g = this.includeOptions(n, p);
                   let m, b = this._getRotation();
                   for (m = 0; m < e; ++m) b += this._circumference(m, r);
                   for (m = e; m < e + i; ++m) {
                      const e = this._circumference(m, r),
                         i = t[m],
                         s = {
                            x: l + this.offsetX,
                            y: c + this.offsetY,
                            startAngle: b,
                            endAngle: b + e,
                            circumference: e,
                            outerRadius: u,
                            innerRadius: d
                         };
                      g && (s.options = p || this.resolveDataElementOptions(m, i.active ? "active" : n)), b += e, this.updateElement(i, m, s, n)
                   }
                   this.updateSharedOptions(p, n, f)
                }
                calculateTotal() {
                   const t = this._cachedMeta,
                      e = t.data;
                   let i, n = 0;
                   for (i = 0; i < e.length; i++) {
                      const r = t._parsed[i];
                      null === r || isNaN(r) || !this.chart.getDataVisibility(i) || e[i].hidden || (n += Math.abs(r))
                   }
                   return n
                }
                calculateCircumference(t) {
                   const e = this._cachedMeta.total;
                   return e > 0 && !isNaN(t) ? R * (Math.abs(t) / e) : 0
                }
                getLabelAndValue(t) {
                   const e = this._cachedMeta,
                      i = this.chart,
                      n = i.data.labels || [],
                      r = Qe(e._parsed[t], i.options.locale);
                   return {
                      label: n[t] || "",
                      value: r
                   }
                }
                getMaxBorderWidth(t) {
                   let e = 0;
                   const i = this.chart;
                   let n, r, s, o, a;
                   if (!t)
                      for (n = 0, r = i.data.datasets.length; n < r; ++n)
                         if (i.isDatasetVisible(n)) {
                            s = i.getDatasetMeta(n), t = s.data, o = s.controller;
                            break
                         } if (!t) return 0;
                   for (n = 0, r = t.length; n < r; ++n) a = o.resolveDataElementOptions(n), "inner" !== a.borderAlign && (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
                   return e
                }
                getMaxOffset(t) {
                   let e = 0;
                   for (let i = 0, n = t.length; i < n; ++i) {
                      const t = this.resolveDataElementOptions(i);
                      e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
                   }
                   return e
                }
                _getRingWeightOffset(t) {
                   let e = 0;
                   for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                   return e
                }
                _getRingWeight(t) {
                   return Math.max(m(this.chart.data.datasets[t].weight, 1), 0)
                }
                _getVisibleDatasetWeightTotal() {
                   return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
                }
             }
             Ii.id = "doughnut", Ii.defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: {
                   animateRotate: !0,
                   animateScale: !1
                },
                animations: {
                   numbers: {
                      type: "number",
                      properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                   }
                },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r"
             }, Ii.descriptors = {
                _scriptable: t => "spacing" !== t,
                _indexable: t => "spacing" !== t
             }, Ii.overrides = {
                aspectRatio: 1,
                plugins: {
                   legend: {
                      labels: {
                         generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                               const {
                                  labels: {
                                     pointStyle: i
                                  }
                               } = t.legend.options;
                               return e.labels.map(((e, n) => {
                                  const r = t.getDatasetMeta(0).controller.getStyle(n);
                                  return {
                                     text: e,
                                     fillStyle: r.backgroundColor,
                                     strokeStyle: r.borderColor,
                                     lineWidth: r.borderWidth,
                                     pointStyle: i,
                                     hidden: !t.getDataVisibility(n),
                                     index: n
                                  }
                               }))
                            }
                            return []
                         }
                      },
                      onClick(t, e, i) {
                         i.chart.toggleDataVisibility(e.index), i.chart.update()
                      }
                   },
                   tooltip: {
                      callbacks: {
                         title: () => "",
                         label(t) {
                            let e = t.label;
                            const i = ": " + t.formattedValue;
                            return u(e) ? (e = e.slice(), e[0] += i) : e += i, e
                         }
                      }
                   }
                }
             };
             class ji extends Ci {
                initialize() {
                   this.enableOptionSharing = !0, super.initialize()
                }
                update(t) {
                   const e = this._cachedMeta,
                      {
                         dataset: i,
                         data: n = [],
                         _dataset: r
                      } = e,
                      s = this.chart._animationsDisabled;
                   let {
                      start: o,
                      count: a
                   } = function(t, e, i) {
                      const n = e.length;
                      let r = 0,
                         s = n;
                      if (t._sorted) {
                         const {
                            iScale: o,
                            _parsed: a
                         } = t, l = o.axis, {
                            min: c,
                            max: h,
                            minDefined: d,
                            maxDefined: u
                         } = o.getUserBounds();
                         d && (r = et(Math.min(pe(a, o.axis, c).lo, i ? n : pe(e, l, o.getPixelForValue(c)).lo), 0, n - 1)), s = u ? et(Math.max(pe(a, o.axis, h).hi + 1, i ? 0 : pe(e, l, o.getPixelForValue(h)).hi + 1), r, n) - r : n - r
                      }
                      return {
                         start: r,
                         count: s
                      }
                   }(e, n, s);
                   this._drawStart = o, this._drawCount = a,
                      function(t) {
                         const {
                            xScale: e,
                            yScale: i,
                            _scaleRanges: n
                         } = t, r = {
                            xmin: e.min,
                            xmax: e.max,
                            ymin: i.min,
                            ymax: i.max
                         };
                         if (!n) return t._scaleRanges = r, !0;
                         const s = n.xmin !== e.min || n.xmax !== e.max || n.ymin !== i.min || n.ymax !== i.max;
                         return Object.assign(n, r), s
                      }(e) && (o = 0, a = n.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!r._decimated, i.points = n;
                   const l = this.resolveDatasetElementOptions(t);
                   this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
                      animated: !s,
                      options: l
                   }, t), this.updateElements(n, o, a, t)
                }
                updateElements(t, e, i, n) {
                   const r = "reset" === n,
                      {
                         iScale: s,
                         vScale: o,
                         _stacked: a,
                         _dataset: l
                      } = this._cachedMeta,
                      c = this.resolveDataElementOptions(e, n),
                      h = this.getSharedOptions(c),
                      u = this.includeOptions(n, h),
                      f = s.axis,
                      p = o.axis,
                      {
                         spanGaps: g,
                         segment: m
                      } = this.options,
                      b = $(g) ? g : Number.POSITIVE_INFINITY,
                      x = this.chart._animationsDisabled || r || "none" === n;
                   let y = e > 0 && this.getParsed(e - 1);
                   for (let c = e; c < e + i; ++c) {
                      const e = t[c],
                         i = this.getParsed(c),
                         g = x ? e : {},
                         v = d(i[p]),
                         _ = g[f] = s.getPixelForValue(i[f], c),
                         w = g[p] = r || v ? o.getBasePixel() : o.getPixelForValue(a ? this.applyStack(o, i, a) : i[p], c);
                      g.skip = isNaN(_) || isNaN(w) || v, g.stop = c > 0 && i[f] - y[f] > b, m && (g.parsed = i, g.raw = l.data[c]), u && (g.options = h || this.resolveDataElementOptions(c, e.active ? "active" : n)), x || this.updateElement(e, c, g, n), y = i
                   }
                   this.updateSharedOptions(h, n, c)
                }
                getMaxOverflow() {
                   const t = this._cachedMeta,
                      e = t.dataset,
                      i = e.options && e.options.borderWidth || 0,
                      n = t.data || [];
                   if (!n.length) return i;
                   const r = n[0].size(this.resolveDataElementOptions(0)),
                      s = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
                   return Math.max(i, r, s) / 2
                }
                draw() {
                   const t = this._cachedMeta;
                   t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
                }
             }
             ji.id = "line", ji.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
             }, ji.overrides = {
                scales: {
                   _index_: {
                      type: "category"
                   },
                   _value_: {
                      type: "linear"
                   }
                }
             };
             class Ni extends Ci {
                constructor(t, e) {
                   super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
                }
                getLabelAndValue(t) {
                   const e = this._cachedMeta,
                      i = this.chart,
                      n = i.data.labels || [],
                      r = Qe(e._parsed[t].r, i.options.locale);
                   return {
                      label: n[t] || "",
                      value: r
                   }
                }
                update(t) {
                   const e = this._cachedMeta.data;
                   this._updateRadius(), this.updateElements(e, 0, e.length, t)
                }
                _updateRadius() {
                   const t = this.chart,
                      e = t.chartArea,
                      i = t.options,
                      n = Math.min(e.right - e.left, e.bottom - e.top),
                      r = Math.max(n / 2, 0),
                      s = (r - Math.max(i.cutoutPercentage ? r / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                   this.outerRadius = r - s * this.index, this.innerRadius = this.outerRadius - s
                }
                updateElements(t, e, i, n) {
                   const r = "reset" === n,
                      s = this.chart,
                      o = this.getDataset(),
                      a = s.options.animation,
                      l = this._cachedMeta.rScale,
                      c = l.xCenter,
                      h = l.yCenter,
                      d = l.getIndexAngle(0) - .5 * A;
                   let u, f = d;
                   const p = 360 / this.countVisibleElements();
                   for (u = 0; u < e; ++u) f += this._computeAngle(u, n, p);
                   for (u = e; u < e + i; u++) {
                      const e = t[u];
                      let i = f,
                         g = f + this._computeAngle(u, n, p),
                         m = s.getDataVisibility(u) ? l.getDistanceFromCenterForValue(o.data[u]) : 0;
                      f = g, r && (a.animateScale && (m = 0), a.animateRotate && (i = g = d));
                      const b = {
                         x: c,
                         y: h,
                         innerRadius: 0,
                         outerRadius: m,
                         startAngle: i,
                         endAngle: g,
                         options: this.resolveDataElementOptions(u, e.active ? "active" : n)
                      };
                      this.updateElement(e, u, b, n)
                   }
                }
                countVisibleElements() {
                   const t = this.getDataset(),
                      e = this._cachedMeta;
                   let i = 0;
                   return e.data.forEach(((e, n) => {
                      !isNaN(t.data[n]) && this.chart.getDataVisibility(n) && i++
                   })), i
                }
                _computeAngle(t, e, i) {
                   return this.chart.getDataVisibility(t) ? Y(this.resolveDataElementOptions(t, e).angle || i) : 0
                }
             }
             Ni.id = "polarArea", Ni.defaults = {
                dataElementType: "arc",
                animation: {
                   animateRotate: !0,
                   animateScale: !0
                },
                animations: {
                   numbers: {
                      type: "number",
                      properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                   }
                },
                indexAxis: "r",
                startAngle: 0
             }, Ni.overrides = {
                aspectRatio: 1,
                plugins: {
                   legend: {
                      labels: {
                         generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                               const {
                                  labels: {
                                     pointStyle: i
                                  }
                               } = t.legend.options;
                               return e.labels.map(((e, n) => {
                                  const r = t.getDatasetMeta(0).controller.getStyle(n);
                                  return {
                                     text: e,
                                     fillStyle: r.backgroundColor,
                                     strokeStyle: r.borderColor,
                                     lineWidth: r.borderWidth,
                                     pointStyle: i,
                                     hidden: !t.getDataVisibility(n),
                                     index: n
                                  }
                               }))
                            }
                            return []
                         }
                      },
                      onClick(t, e, i) {
                         i.chart.toggleDataVisibility(e.index), i.chart.update()
                      }
                   },
                   tooltip: {
                      callbacks: {
                         title: () => "",
                         label: t => t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                      }
                   }
                },
                scales: {
                   r: {
                      type: "radialLinear",
                      angleLines: {
                         display: !1
                      },
                      beginAtZero: !0,
                      grid: {
                         circular: !0
                      },
                      pointLabels: {
                         display: !1
                      },
                      startAngle: 0
                   }
                }
             };
             class Bi extends Ii {}
             Bi.id = "pie", Bi.defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
             };
             class Vi extends Ci {
                getLabelAndValue(t) {
                   const e = this._cachedMeta.vScale,
                      i = this.getParsed(t);
                   return {
                      label: e.getLabels()[t],
                      value: "" + e.getLabelForValue(i[e.axis])
                   }
                }
                update(t) {
                   const e = this._cachedMeta,
                      i = e.dataset,
                      n = e.data || [],
                      r = e.iScale.getLabels();
                   if (i.points = n, "resize" !== t) {
                      const e = this.resolveDatasetElementOptions(t);
                      this.options.showLine || (e.borderWidth = 0);
                      const s = {
                         _loop: !0,
                         _fullLoop: r.length === n.length,
                         options: e
                      };
                      this.updateElement(i, void 0, s, t)
                   }
                   this.updateElements(n, 0, n.length, t)
                }
                updateElements(t, e, i, n) {
                   const r = this.getDataset(),
                      s = this._cachedMeta.rScale,
                      o = "reset" === n;
                   for (let a = e; a < e + i; a++) {
                      const e = t[a],
                         i = this.resolveDataElementOptions(a, e.active ? "active" : n),
                         l = s.getPointPositionForValue(a, r.data[a]),
                         c = o ? s.xCenter : l.x,
                         h = o ? s.yCenter : l.y,
                         d = {
                            x: c,
                            y: h,
                            angle: l.angle,
                            skip: isNaN(c) || isNaN(h),
                            options: i
                         };
                      this.updateElement(e, a, d, n)
                   }
                }
             }
             Vi.id = "radar", Vi.defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                   line: {
                      fill: "start"
                   }
                }
             }, Vi.overrides = {
                aspectRatio: 1,
                scales: {
                   r: {
                      type: "radialLinear"
                   }
                }
             };
             class Wi extends ji {}
             Wi.id = "scatter", Wi.defaults = {
                showLine: !1,
                fill: !1
             }, Wi.overrides = {
                interaction: {
                   mode: "point"
                },
                plugins: {
                   tooltip: {
                      callbacks: {
                         title: () => "",
                         label: t => "(" + t.label + ", " + t.formattedValue + ")"
                      }
                   }
                },
                scales: {
                   x: {
                      type: "linear"
                   },
                   y: {
                      type: "linear"
                   }
                }
             };
             var Hi = Object.freeze({
                __proto__: null,
                BarController: zi,
                BubbleController: Fi,
                DoughnutController: Ii,
                LineController: ji,
                PolarAreaController: Ni,
                PieController: Bi,
                RadarController: Vi,
                ScatterController: Wi
             });
 
             function $i() {
                throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
             }
             class Ui {
                constructor(t) {
                   this.options = t || {}
                }
                formats() {
                   return $i()
                }
                parse(t, e) {
                   return $i()
                }
                format(t, e) {
                   return $i()
                }
                add(t, e, i) {
                   return $i()
                }
                diff(t, e, i) {
                   return $i()
                }
                startOf(t, e, i) {
                   return $i()
                }
                endOf(t, e) {
                   return $i()
                }
             }
             Ui.override = function(t) {
                Object.assign(Ui.prototype, t)
             };
             var qi = {
                _date: Ui
             };
 
             function Yi(t, e) {
                return "native" in t ? {
                   x: t.x,
                   y: t.y
                } : $e(t, e)
             }
 
             function Xi(t, e, i, n) {
                const {
                   controller: r,
                   data: s,
                   _sorted: o
                } = t, a = r._cachedMeta.iScale;
                if (a && e === a.axis && "r" !== e && o && s.length) {
                   const t = a._reversePixels ? ge : pe;
                   if (!n) return t(s, e, i);
                   if (r._sharedOptions) {
                      const n = s[0],
                         r = "function" == typeof n.getRange && n.getRange(e);
                      if (r) {
                         const n = t(s, e, i - r),
                            o = t(s, e, i + r);
                         return {
                            lo: n.lo,
                            hi: o.hi
                         }
                      }
                   }
                }
                return {
                   lo: 0,
                   hi: s.length - 1
                }
             }
 
             function Zi(t, e, i, n, r) {
                const s = t.getSortedVisibleDatasetMetas(),
                   o = i[e];
                for (let t = 0, i = s.length; t < i; ++t) {
                   const {
                      index: i,
                      data: a
                   } = s[t], {
                      lo: l,
                      hi: c
                   } = Xi(s[t], e, o, r);
                   for (let t = l; t <= c; ++t) {
                      const e = a[t];
                      e.skip || n(e, i, t)
                   }
                }
             }
 
             function Gi(t, e, i, n) {
                const r = [];
                return Zt(e, t.chartArea, t._minPadding) ? (Zi(t, i, e, (function(t, i, s) {
                   t.inRange(e.x, e.y, n) && r.push({
                      element: t,
                      datasetIndex: i,
                      index: s
                   })
                }), !0), r) : r
             }
 
             function Ki(t, e, i, n, r) {
                return Zt(e, t.chartArea, t._minPadding) ? "r" !== i || n ? function(t, e, i, n, r) {
                   let s = [];
                   const o = function(t) {
                      const e = -1 !== t.indexOf("x"),
                         i = -1 !== t.indexOf("y");
                      return function(t, n) {
                         const r = e ? Math.abs(t.x - n.x) : 0,
                            s = i ? Math.abs(t.y - n.y) : 0;
                         return Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2))
                      }
                   }(i);
                   let a = Number.POSITIVE_INFINITY;
                   return Zi(t, i, e, (function(i, l, c) {
                      const h = i.inRange(e.x, e.y, r);
                      if (n && !h) return;
                      const d = i.getCenterPoint(r);
                      if (!Zt(d, t.chartArea, t._minPadding) && !h) return;
                      const u = o(e, d);
                      u < a ? (s = [{
                         element: i,
                         datasetIndex: l,
                         index: c
                      }], a = u) : u === a && s.push({
                         element: i,
                         datasetIndex: l,
                         index: c
                      })
                   })), s
                }(t, e, i, n, r) : function(t, e, i, n) {
                   let r = [];
                   return Zi(t, i, e, (function(t, i, s) {
                      const {
                         startAngle: o,
                         endAngle: a
                      } = t.getProps(["startAngle", "endAngle"], n), {
                         angle: l
                      } = G(t, {
                         x: e.x,
                         y: e.y
                      });
                      tt(l, o, a) && r.push({
                         element: t,
                         datasetIndex: i,
                         index: s
                      })
                   })), r
                }(t, e, i, r) : []
             }
 
             function Ji(t, e, i, n) {
                const r = Yi(e, t),
                   s = [],
                   o = i.axis,
                   a = "x" === o ? "inXRange" : "inYRange";
                let l = !1;
                return function(t, e) {
                   const i = t.getSortedVisibleDatasetMetas();
                   let n, r, s;
                   for (let t = 0, o = i.length; t < o; ++t) {
                      ({
                         index: n,
                         data: r
                      } = i[t]);
                      for (let t = 0, i = r.length; t < i; ++t) s = r[t], s.skip || e(s, n, t)
                   }
                }(t, ((t, e, i) => {
                   t[a](r[o], n) && s.push({
                      element: t,
                      datasetIndex: e,
                      index: i
                   }), t.inRange(r.x, r.y, n) && (l = !0)
                })), i.intersect && !l ? [] : s
             }
             var Qi = {
                modes: {
                   index(t, e, i, n) {
                      const r = Yi(e, t),
                         s = i.axis || "x",
                         o = i.intersect ? Gi(t, r, s, n) : Ki(t, r, s, !1, n),
                         a = [];
                      return o.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                         const e = o[0].index,
                            i = t.data[e];
                         i && !i.skip && a.push({
                            element: i,
                            datasetIndex: t.index,
                            index: e
                         })
                      })), a) : []
                   },
                   dataset(t, e, i, n) {
                      const r = Yi(e, t),
                         s = i.axis || "xy";
                      let o = i.intersect ? Gi(t, r, s, n) : Ki(t, r, s, !1, n);
                      if (o.length > 0) {
                         const e = o[0].datasetIndex,
                            i = t.getDatasetMeta(e).data;
                         o = [];
                         for (let t = 0; t < i.length; ++t) o.push({
                            element: i[t],
                            datasetIndex: e,
                            index: t
                         })
                      }
                      return o
                   },
                   point: (t, e, i, n) => Gi(t, Yi(e, t), i.axis || "xy", n),
                   nearest: (t, e, i, n) => Ki(t, Yi(e, t), i.axis || "xy", i.intersect, n),
                   x: (t, e, i, n) => Ji(t, e, {
                      axis: "x",
                      intersect: i.intersect
                   }, n),
                   y: (t, e, i, n) => Ji(t, e, {
                      axis: "y",
                      intersect: i.intersect
                   }, n)
                }
             };
             const tn = ["left", "top", "right", "bottom"];
 
             function en(t, e) {
                return t.filter((t => t.pos === e))
             }
 
             function nn(t, e) {
                return t.filter((t => -1 === tn.indexOf(t.pos) && t.box.axis === e))
             }
 
             function rn(t, e) {
                return t.sort(((t, i) => {
                   const n = e ? i : t,
                      r = e ? t : i;
                   return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
                }))
             }
 
             function sn(t, e, i, n) {
                return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
             }
 
             function on(t, e) {
                t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
             }
 
             function an(t, e, i, n) {
                const {
                   pos: r,
                   box: s
                } = i, o = t.maxPadding;
                if (!f(r)) {
                   i.size && (t[r] -= i.size);
                   const e = n[i.stack] || {
                      size: 0,
                      count: 1
                   };
                   e.size = Math.max(e.size, i.horizontal ? s.height : s.width), i.size = e.size / e.count, t[r] += i.size
                }
                s.getPadding && on(o, s.getPadding());
                const a = Math.max(0, e.outerWidth - sn(o, t, "left", "right")),
                   l = Math.max(0, e.outerHeight - sn(o, t, "top", "bottom")),
                   c = a !== t.w,
                   h = l !== t.h;
                return t.w = a, t.h = l, i.horizontal ? {
                   same: c,
                   other: h
                } : {
                   same: h,
                   other: c
                }
             }
 
             function ln(t, e) {
                const i = e.maxPadding;
                return function(t) {
                   const n = {
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0
                   };
                   return t.forEach((t => {
                      n[t] = Math.max(e[t], i[t])
                   })), n
                }(t ? ["left", "right"] : ["top", "bottom"])
             }
 
             function cn(t, e, i, n) {
                const r = [];
                let s, o, a, l, c, h;
                for (s = 0, o = t.length, c = 0; s < o; ++s) {
                   a = t[s], l = a.box, l.update(a.width || e.w, a.height || e.h, ln(a.horizontal, e));
                   const {
                      same: o,
                      other: d
                   } = an(e, i, a, n);
                   c |= o && r.length, h = h || d, l.fullSize || r.push(a)
                }
                return c && cn(r, e, i, n) || h
             }
 
             function hn(t, e, i, n, r) {
                t.top = i, t.left = e, t.right = e + n, t.bottom = i + r, t.width = n, t.height = r
             }
 
             function dn(t, e, i, n) {
                const r = i.padding;
                let {
                   x: s,
                   y: o
                } = e;
                for (const a of t) {
                   const t = a.box,
                      l = n[a.stack] || {
                         count: 1,
                         placed: 0,
                         weight: 1
                      },
                      c = a.stackWeight / l.weight || 1;
                   if (a.horizontal) {
                      const n = e.w * c,
                         s = l.size || t.height;
                      L(l.start) && (o = l.start), t.fullSize ? hn(t, r.left, o, i.outerWidth - r.right - r.left, s) : hn(t, e.left + l.placed, o, n, s), l.start = o, l.placed += n, o = t.bottom
                   } else {
                      const n = e.h * c,
                         o = l.size || t.width;
                      L(l.start) && (s = l.start), t.fullSize ? hn(t, s, r.top, o, i.outerHeight - r.bottom - r.top) : hn(t, s, e.top + l.placed, o, n), l.start = s, l.placed += n, s = t.right
                   }
                }
                e.x = s, e.y = o
             }
             Ht.set("layout", {
                autoPadding: !0,
                padding: {
                   top: 0,
                   right: 0,
                   bottom: 0,
                   left: 0
                }
             });
             var un = {
                addBox(t, e) {
                   t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                      return [{
                         z: 0,
                         draw(t) {
                            e.draw(t)
                         }
                      }]
                   }, t.boxes.push(e)
                },
                removeBox(t, e) {
                   const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                },
                configure(t, e, i) {
                   e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
                },
                update(t, e, i, n) {
                   if (!t) return;
                   const r = ce(t.options.layout.padding),
                      s = Math.max(e - r.width, 0),
                      o = Math.max(i - r.height, 0),
                      a = function(t) {
                         const e = function(t) {
                               const e = [];
                               let i, n, r, s, o, a;
                               for (i = 0, n = (t || []).length; i < n; ++i) r = t[i], ({
                                  position: s,
                                  options: {
                                     stack: o,
                                     stackWeight: a = 1
                                  }
                               } = r), e.push({
                                  index: i,
                                  box: r,
                                  pos: s,
                                  horizontal: r.isHorizontal(),
                                  weight: r.weight,
                                  stack: o && s + o,
                                  stackWeight: a
                               });
                               return e
                            }(t),
                            i = rn(e.filter((t => t.box.fullSize)), !0),
                            n = rn(en(e, "left"), !0),
                            r = rn(en(e, "right")),
                            s = rn(en(e, "top"), !0),
                            o = rn(en(e, "bottom")),
                            a = nn(e, "x"),
                            l = nn(e, "y");
                         return {
                            fullSize: i,
                            leftAndTop: n.concat(s),
                            rightAndBottom: r.concat(l).concat(o).concat(a),
                            chartArea: en(e, "chartArea"),
                            vertical: n.concat(r).concat(l),
                            horizontal: s.concat(o).concat(a)
                         }
                      }(t.boxes),
                      l = a.vertical,
                      c = a.horizontal;
                   y(t.boxes, (t => {
                      "function" == typeof t.beforeLayout && t.beforeLayout()
                   }));
                   const h = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                      d = Object.freeze({
                         outerWidth: e,
                         outerHeight: i,
                         padding: r,
                         availableWidth: s,
                         availableHeight: o,
                         vBoxMaxWidth: s / 2 / h,
                         hBoxMaxHeight: o / 2
                      }),
                      u = Object.assign({}, r);
                   on(u, ce(n));
                   const f = Object.assign({
                         maxPadding: u,
                         w: s,
                         h: o,
                         x: r.left,
                         y: r.top
                      }, r),
                      p = function(t, e) {
                         const i = function(t) {
                               const e = {};
                               for (const i of t) {
                                  const {
                                     stack: t,
                                     pos: n,
                                     stackWeight: r
                                  } = i;
                                  if (!t || !tn.includes(n)) continue;
                                  const s = e[t] || (e[t] = {
                                     count: 0,
                                     placed: 0,
                                     weight: 0,
                                     size: 0
                                  });
                                  s.count++, s.weight += r
                               }
                               return e
                            }(t),
                            {
                               vBoxMaxWidth: n,
                               hBoxMaxHeight: r
                            } = e;
                         let s, o, a;
                         for (s = 0, o = t.length; s < o; ++s) {
                            a = t[s];
                            const {
                               fullSize: o
                            } = a.box, l = i[a.stack], c = l && a.stackWeight / l.weight;
                            a.horizontal ? (a.width = c ? c * n : o && e.availableWidth, a.height = r) : (a.width = n, a.height = c ? c * r : o && e.availableHeight)
                         }
                         return i
                      }(l.concat(c), d);
                   cn(a.fullSize, f, d, p), cn(l, f, d, p), cn(c, f, d, p) && cn(l, f, d, p),
                      function(t) {
                         const e = t.maxPadding;
 
                         function i(i) {
                            const n = Math.max(e[i] - t[i], 0);
                            return t[i] += n, n
                         }
                         t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                      }(f), dn(a.leftAndTop, f, d, p), f.x += f.w, f.y += f.h, dn(a.rightAndBottom, f, d, p), t.chartArea = {
                         left: f.left,
                         top: f.top,
                         right: f.left + f.w,
                         bottom: f.top + f.h,
                         height: f.h,
                         width: f.w
                      }, y(a.chartArea, (e => {
                         const i = e.box;
                         Object.assign(i, t.chartArea), i.update(f.w, f.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                         })
                      }))
                }
             };
             class fn {
                acquireContext(t, e) {}
                releaseContext(t) {
                   return !1
                }
                addEventListener(t, e, i) {}
                removeEventListener(t, e, i) {}
                getDevicePixelRatio() {
                   return 1
                }
                getMaximumSize(t, e, i, n) {
                   return e = Math.max(0, e || t.width), i = i || t.height, {
                      width: e,
                      height: Math.max(0, n ? Math.floor(e / n) : i)
                   }
                }
                isAttached(t) {
                   return !0
                }
                updateConfig(t) {}
             }
             class pn extends fn {
                acquireContext(t) {
                   return t && t.getContext && t.getContext("2d") || null
                }
                updateConfig(t) {
                   t.options.animation = !1
                }
             }
             const gn = {
                   touchstart: "mousedown",
                   touchmove: "mousemove",
                   touchend: "mouseup",
                   pointerenter: "mouseenter",
                   pointerdown: "mousedown",
                   pointermove: "mousemove",
                   pointerup: "mouseup",
                   pointerleave: "mouseout",
                   pointerout: "mouseout"
                },
                mn = t => null === t || "" === t,
                bn = !!Ye && {
                   passive: !0
                };
 
             function xn(t, e, i) {
                t.canvas.removeEventListener(e, i, bn)
             }
 
             function yn(t, e) {
                for (const i of t)
                   if (i === e || i.contains(e)) return !0
             }
 
             function vn(t, e, i) {
                const n = t.canvas,
                   r = new MutationObserver((t => {
                      let e = !1;
                      for (const i of t) e = e || yn(i.addedNodes, n), e = e && !yn(i.removedNodes, n);
                      e && i()
                   }));
                return r.observe(document, {
                   childList: !0,
                   subtree: !0
                }), r
             }
 
             function _n(t, e, i) {
                const n = t.canvas,
                   r = new MutationObserver((t => {
                      let e = !1;
                      for (const i of t) e = e || yn(i.removedNodes, n), e = e && !yn(i.addedNodes, n);
                      e && i()
                   }));
                return r.observe(document, {
                   childList: !0,
                   subtree: !0
                }), r
             }
             const wn = new Map;
             let kn = 0;
 
             function Mn() {
                const t = window.devicePixelRatio;
                t !== kn && (kn = t, wn.forEach(((e, i) => {
                   i.currentDevicePixelRatio !== t && e()
                })))
             }
 
             function Sn(t, e, i) {
                const n = t.canvas,
                   r = n && Ne(n);
                if (!r) return;
                const s = o(((t, e) => {
                      const n = r.clientWidth;
                      i(t, e), n < r.clientWidth && i()
                   }), window),
                   a = new ResizeObserver((t => {
                      const e = t[0],
                         i = e.contentRect.width,
                         n = e.contentRect.height;
                      0 === i && 0 === n || s(i, n)
                   }));
                return a.observe(r),
                   function(t, e) {
                      wn.size || window.addEventListener("resize", Mn), wn.set(t, e)
                   }(t, s), a
             }
 
             function Cn(t, e, i) {
                i && i.disconnect(), "resize" === e && function(t) {
                   wn.delete(t), wn.size || window.removeEventListener("resize", Mn)
                }(t)
             }
 
             function Pn(t, e, i) {
                const n = t.canvas,
                   r = o((e => {
                      null !== t.ctx && i(function(t, e) {
                         const i = gn[t.type] || t.type,
                            {
                               x: n,
                               y: r
                            } = $e(t, e);
                         return {
                            type: i,
                            chart: e,
                            native: t,
                            x: void 0 !== n ? n : null,
                            y: void 0 !== r ? r : null
                         }
                      }(e, t))
                   }), t, (t => {
                      const e = t[0];
                      return [e, e.offsetX, e.offsetY]
                   }));
                return function(t, e, i) {
                   t.addEventListener(e, i, bn)
                }(n, e, r), r
             }
             class On extends fn {
                acquireContext(t, e) {
                   const i = t && t.getContext && t.getContext("2d");
                   return i && i.canvas === t ? (function(t, e) {
                      const i = t.style,
                         n = t.getAttribute("height"),
                         r = t.getAttribute("width");
                      if (t.$chartjs = {
                            initial: {
                               height: n,
                               width: r,
                               style: {
                                  display: i.display,
                                  height: i.height,
                                  width: i.width
                               }
                            }
                         }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", mn(r)) {
                         const e = Xe(t, "width");
                         void 0 !== e && (t.width = e)
                      }
                      if (mn(n))
                         if ("" === t.style.height) t.height = t.width / (e || 2);
                         else {
                            const e = Xe(t, "height");
                            void 0 !== e && (t.height = e)
                         }
                   }(t, e), i) : null
                }
                releaseContext(t) {
                   const e = t.canvas;
                   if (!e.$chartjs) return !1;
                   const i = e.$chartjs.initial;
                   ["height", "width"].forEach((t => {
                      const n = i[t];
                      d(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                   }));
                   const n = i.style || {};
                   return Object.keys(n).forEach((t => {
                      e.style[t] = n[t]
                   })), e.width = e.width, delete e.$chartjs, !0
                }
                addEventListener(t, e, i) {
                   this.removeEventListener(t, e);
                   const n = t.$proxies || (t.$proxies = {}),
                      r = {
                         attach: vn,
                         detach: _n,
                         resize: Sn
                      } [e] || Pn;
                   n[e] = r(t, e, i)
                }
                removeEventListener(t, e) {
                   const i = t.$proxies || (t.$proxies = {}),
                      n = i[e];
                   n && (({
                      attach: Cn,
                      detach: Cn,
                      resize: Cn
                   } [e] || xn)(t, e, n), i[e] = void 0)
                }
                getDevicePixelRatio() {
                   return window.devicePixelRatio
                }
                getMaximumSize(t, e, i, n) {
                   return function(t, e, i, n) {
                      const r = Ve(t),
                         s = He(r, "margin"),
                         o = Be(r.maxWidth, t, "clientWidth") || F,
                         a = Be(r.maxHeight, t, "clientHeight") || F,
                         l = function(t, e, i) {
                            let n, r;
                            if (void 0 === e || void 0 === i) {
                               const s = Ne(t);
                               if (s) {
                                  const t = s.getBoundingClientRect(),
                                     o = Ve(s),
                                     a = He(o, "border", "width"),
                                     l = He(o, "padding");
                                  e = t.width - l.width - a.width, i = t.height - l.height - a.height, n = Be(o.maxWidth, s, "clientWidth"), r = Be(o.maxHeight, s, "clientHeight")
                               } else e = t.clientWidth, i = t.clientHeight
                            }
                            return {
                               width: e,
                               height: i,
                               maxWidth: n || F,
                               maxHeight: r || F
                            }
                         }(t, e, i);
                      let {
                         width: c,
                         height: h
                      } = l;
                      if ("content-box" === r.boxSizing) {
                         const t = He(r, "border", "width"),
                            e = He(r, "padding");
                         c -= e.width + t.width, h -= e.height + t.height
                      }
                      return c = Math.max(0, c - s.width), h = Math.max(0, n ? Math.floor(c / n) : h - s.height), c = Ue(Math.min(c, o, l.maxWidth)), h = Ue(Math.min(h, a, l.maxHeight)), c && !h && (h = Ue(c / 2)), {
                         width: c,
                         height: h
                      }
                   }(t, e, i, n)
                }
                isAttached(t) {
                   const e = Ne(t);
                   return !(!e || !e.isConnected)
                }
             }
             class Dn {
                constructor() {
                   this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
                }
                tooltipPosition(t) {
                   const {
                      x: e,
                      y: i
                   } = this.getProps(["x", "y"], t);
                   return {
                      x: e,
                      y: i
                   }
                }
                hasValue() {
                   return $(this.x) && $(this.y)
                }
                getProps(t, e) {
                   const i = this.$animations;
                   if (!e || !i) return this;
                   const n = {};
                   return t.forEach((t => {
                      n[t] = i[t] && i[t].active() ? i[t]._to : this[t]
                   })), n
                }
             }
             Dn.defaults = {}, Dn.defaultRoutes = void 0;
             const Ln = {
                values: t => u(t) ? t : "" + t,
                numeric(t, e, i) {
                   if (0 === t) return "0";
                   const n = this.chart.options.locale;
                   let r, s = t;
                   if (i.length > 1) {
                      const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                      (e < 1e-4 || e > 1e15) && (r = "scientific"), s = function(t, e) {
                         let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                         return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i
                      }(t, i)
                   }
                   const o = V(Math.abs(s)),
                      a = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
                      l = {
                         notation: r,
                         minimumFractionDigits: a,
                         maximumFractionDigits: a
                      };
                   return Object.assign(l, this.options.ticks.format), Qe(t, n, l)
                },
                logarithmic(t, e, i) {
                   if (0 === t) return "0";
                   const n = t / Math.pow(10, Math.floor(V(t)));
                   return 1 === n || 2 === n || 5 === n ? Ln.numeric.call(this, t, e, i) : ""
                }
             };
             var En = {
                formatters: Ln
             };
 
             function Tn(t, e, i, n, r) {
                const s = m(n, 0),
                   o = Math.min(m(r, t.length), t.length);
                let a, l, c, h = 0;
                for (i = Math.ceil(i), r && (a = r - n, i = a / Math.floor(a / i)), c = s; c < 0;) h++, c = Math.round(s + h * i);
                for (l = Math.max(s, 0); l < o; l++) l === c && (e.push(t[l]), h++, c = Math.round(s + h * i))
             }
             Ht.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                grace: 0,
                grid: {
                   display: !0,
                   lineWidth: 1,
                   drawBorder: !0,
                   drawOnChartArea: !0,
                   drawTicks: !0,
                   tickLength: 8,
                   tickWidth: (t, e) => e.lineWidth,
                   tickColor: (t, e) => e.color,
                   offset: !1,
                   borderDash: [],
                   borderDashOffset: 0,
                   borderWidth: 1
                },
                title: {
                   display: !1,
                   text: "",
                   padding: {
                      top: 4,
                      bottom: 4
                   }
                },
                ticks: {
                   minRotation: 0,
                   maxRotation: 50,
                   mirror: !1,
                   textStrokeWidth: 0,
                   textStrokeColor: "",
                   padding: 3,
                   display: !0,
                   autoSkip: !0,
                   autoSkipPadding: 3,
                   labelOffset: 0,
                   callback: En.formatters.values,
                   minor: {},
                   major: {},
                   align: "center",
                   crossAlign: "near",
                   showLabelBackdrop: !1,
                   backdropColor: "rgba(255, 255, 255, 0.75)",
                   backdropPadding: 2
                }
             }), Ht.route("scale.ticks", "color", "", "color"), Ht.route("scale.grid", "color", "", "borderColor"), Ht.route("scale.grid", "borderColor", "", "borderColor"), Ht.route("scale.title", "color", "", "color"), Ht.describe("scale", {
                _fallback: !1,
                _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                _indexable: t => "borderDash" !== t && "tickBorderDash" !== t
             }), Ht.describe("scales", {
                _fallback: "scale"
             }), Ht.describe("scale.ticks", {
                _scriptable: t => "backdropPadding" !== t && "callback" !== t,
                _indexable: t => "backdropPadding" !== t
             });
             const An = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i;
 
             function Rn(t, e) {
                const i = [],
                   n = t.length / e,
                   r = t.length;
                let s = 0;
                for (; s < r; s += n) i.push(t[Math.floor(s)]);
                return i
             }
 
             function zn(t, e, i) {
                const n = t.ticks.length,
                   r = Math.min(e, n - 1),
                   s = t._startPixel,
                   o = t._endPixel,
                   a = 1e-6;
                let l, c = t.getPixelForTick(r);
                if (!(i && (l = 1 === n ? Math.max(c - s, o - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(r - 1)) / 2, c += r < e ? l : -l, c < s - a || c > o + a))) return c
             }
 
             function Fn(t) {
                return t.drawTicks ? t.tickLength : 0
             }
 
             function In(t, e) {
                if (!t.display) return 0;
                const i = he(t.font, e),
                   n = ce(t.padding);
                return (u(t.text) ? t.text.length : 1) * i.lineHeight + n.height
             }
 
             function jn(t, e, i) {
                let n = a(t);
                return (i && "right" !== e || !i && "right" === e) && (n = (t => "left" === t ? "right" : "right" === t ? "left" : t)(n)), n
             }
             class Nn extends Dn {
                constructor(t) {
                   super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0
                   }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
                }
                init(t) {
                   this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
                }
                parse(t, e) {
                   return t
                }
                getUserBounds() {
                   let {
                      _userMin: t,
                      _userMax: e,
                      _suggestedMin: i,
                      _suggestedMax: n
                   } = this;
                   return t = g(t, Number.POSITIVE_INFINITY), e = g(e, Number.NEGATIVE_INFINITY), i = g(i, Number.POSITIVE_INFINITY), n = g(n, Number.NEGATIVE_INFINITY), {
                      min: g(t, i),
                      max: g(e, n),
                      minDefined: p(t),
                      maxDefined: p(e)
                   }
                }
                getMinMax(t) {
                   let e, {
                      min: i,
                      max: n,
                      minDefined: r,
                      maxDefined: s
                   } = this.getUserBounds();
                   if (r && s) return {
                      min: i,
                      max: n
                   };
                   const o = this.getMatchingVisibleMetas();
                   for (let a = 0, l = o.length; a < l; ++a) e = o[a].controller.getMinMax(this, t), r || (i = Math.min(i, e.min)), s || (n = Math.max(n, e.max));
                   return i = s && i > n ? n : i, n = r && i > n ? i : n, {
                      min: g(i, g(n, i)),
                      max: g(n, g(i, n))
                   }
                }
                getPadding() {
                   return {
                      left: this.paddingLeft || 0,
                      top: this.paddingTop || 0,
                      right: this.paddingRight || 0,
                      bottom: this.paddingBottom || 0
                   }
                }
                getTicks() {
                   return this.ticks
                }
                getLabels() {
                   const t = this.chart.data;
                   return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                }
                beforeLayout() {
                   this._cache = {}, this._dataLimitsCached = !1
                }
                beforeUpdate() {
                   x(this.options.beforeUpdate, [this])
                }
                update(t, e, i) {
                   const {
                      beginAtZero: n,
                      grace: r,
                      ticks: s
                   } = this.options, o = s.sampleSize;
                   this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0
                   }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function(t, e, i) {
                      const {
                         min: n,
                         max: r
                      } = t, s = b(e, (r - n) / 2), o = (t, e) => i && 0 === t ? 0 : t + e;
                      return {
                         min: o(n, -Math.abs(s)),
                         max: o(r, s)
                      }
                   }(this, r, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                   const a = o < this.ticks.length;
                   this._convertTicksToLabels(a ? Rn(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || "auto" === s.source) && (this.ticks = function(t, e) {
                      const i = t.options.ticks,
                         n = i.maxTicksLimit || function(t) {
                            const e = t.options.offset,
                               i = t._tickSize(),
                               n = t._length / i + (e ? 0 : 1),
                               r = t._maxLength / i;
                            return Math.floor(Math.min(n, r))
                         }(t),
                         r = i.major.enabled ? function(t) {
                            const e = [];
                            let i, n;
                            for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
                            return e
                         }(e) : [],
                         s = r.length,
                         o = r[0],
                         a = r[s - 1],
                         l = [];
                      if (s > n) return function(t, e, i, n) {
                         let r, s = 0,
                            o = i[0];
                         for (n = Math.ceil(n), r = 0; r < t.length; r++) r === o && (e.push(t[r]), s++, o = i[s * n])
                      }(e, l, r, s / n), l;
                      const c = function(t, e, i) {
                         const n = function(t) {
                               const e = t.length;
                               let i, n;
                               if (e < 2) return !1;
                               for (n = t[0], i = 1; i < e; ++i)
                                  if (t[i] - t[i - 1] !== n) return !1;
                               return n
                            }(t),
                            r = e.length / i;
                         if (!n) return Math.max(r, 1);
                         const s = function(t) {
                            const e = [],
                               i = Math.sqrt(t);
                            let n;
                            for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
                            return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e
                         }(n);
                         for (let t = 0, e = s.length - 1; t < e; t++) {
                            const e = s[t];
                            if (e > r) return e
                         }
                         return Math.max(r, 1)
                      }(r, e, n);
                      if (s > 0) {
                         let t, i;
                         const n = s > 1 ? Math.round((a - o) / (s - 1)) : null;
                         for (Tn(e, l, c, d(n) ? 0 : o - n, o), t = 0, i = s - 1; t < i; t++) Tn(e, l, c, r[t], r[t + 1]);
                         return Tn(e, l, c, a, d(n) ? e.length : a + n), l
                      }
                      return Tn(e, l, c), l
                   }(this, this.ticks), this._labelSizes = null), a && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
                }
                configure() {
                   let t, e, i = this.options.reverse;
                   this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
                }
                afterUpdate() {
                   x(this.options.afterUpdate, [this])
                }
                beforeSetDimensions() {
                   x(this.options.beforeSetDimensions, [this])
                }
                setDimensions() {
                   this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                }
                afterSetDimensions() {
                   x(this.options.afterSetDimensions, [this])
                }
                _callHooks(t) {
                   this.chart.notifyPlugins(t, this.getContext()), x(this.options[t], [this])
                }
                beforeDataLimits() {
                   this._callHooks("beforeDataLimits")
                }
                determineDataLimits() {}
                afterDataLimits() {
                   this._callHooks("afterDataLimits")
                }
                beforeBuildTicks() {
                   this._callHooks("beforeBuildTicks")
                }
                buildTicks() {
                   return []
                }
                afterBuildTicks() {
                   this._callHooks("afterBuildTicks")
                }
                beforeTickToLabelConversion() {
                   x(this.options.beforeTickToLabelConversion, [this])
                }
                generateTickLabels(t) {
                   const e = this.options.ticks;
                   let i, n, r;
                   for (i = 0, n = t.length; i < n; i++) r = t[i], r.label = x(e.callback, [r.value, i, t], this)
                }
                afterTickToLabelConversion() {
                   x(this.options.afterTickToLabelConversion, [this])
                }
                beforeCalculateLabelRotation() {
                   x(this.options.beforeCalculateLabelRotation, [this])
                }
                calculateLabelRotation() {
                   const t = this.options,
                      e = t.ticks,
                      i = this.ticks.length,
                      n = e.minRotation || 0,
                      r = e.maxRotation;
                   let s, o, a, l = n;
                   if (!this._isVisible() || !e.display || n >= r || i <= 1 || !this.isHorizontal()) return void(this.labelRotation = n);
                   const c = this._getLabelSizes(),
                      h = c.widest.width,
                      d = c.highest.height,
                      u = et(this.chart.width - h, 0, this.maxWidth);
                   s = t.offset ? this.maxWidth / i : u / (i - 1), h + 6 > s && (s = u / (i - (t.offset ? .5 : 1)), o = this.maxHeight - Fn(t.grid) - e.padding - In(t.title, this.chart.options.font), a = Math.sqrt(h * h + d * d), l = X(Math.min(Math.asin(et((c.highest.height + 6) / s, -1, 1)), Math.asin(et(o / a, -1, 1)) - Math.asin(et(d / a, -1, 1)))), l = Math.max(n, Math.min(r, l))), this.labelRotation = l
                }
                afterCalculateLabelRotation() {
                   x(this.options.afterCalculateLabelRotation, [this])
                }
                beforeFit() {
                   x(this.options.beforeFit, [this])
                }
                fit() {
                   const t = {
                         width: 0,
                         height: 0
                      },
                      {
                         chart: e,
                         options: {
                            ticks: i,
                            title: n,
                            grid: r
                         }
                      } = this,
                      s = this._isVisible(),
                      o = this.isHorizontal();
                   if (s) {
                      const s = In(n, e.options.font);
                      if (o ? (t.width = this.maxWidth, t.height = Fn(r) + s) : (t.height = this.maxHeight, t.width = Fn(r) + s), i.display && this.ticks.length) {
                         const {
                            first: e,
                            last: n,
                            widest: r,
                            highest: s
                         } = this._getLabelSizes(), a = 2 * i.padding, l = Y(this.labelRotation), c = Math.cos(l), h = Math.sin(l);
                         if (o) {
                            const e = i.mirror ? 0 : h * r.width + c * s.height;
                            t.height = Math.min(this.maxHeight, t.height + e + a)
                         } else {
                            const e = i.mirror ? 0 : c * r.width + h * s.height;
                            t.width = Math.min(this.maxWidth, t.width + e + a)
                         }
                         this._calculatePadding(e, n, h, c)
                      }
                   }
                   this._handleMargins(), o ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
                }
                _calculatePadding(t, e, i, n) {
                   const {
                      ticks: {
                         align: r,
                         padding: s
                      },
                      position: o
                   } = this.options, a = 0 !== this.labelRotation, l = "top" !== o && "x" === this.axis;
                   if (this.isHorizontal()) {
                      const o = this.getPixelForTick(0) - this.left,
                         c = this.right - this.getPixelForTick(this.ticks.length - 1);
                      let h = 0,
                         d = 0;
                      a ? l ? (h = n * t.width, d = i * e.height) : (h = i * t.height, d = n * e.width) : "start" === r ? d = e.width : "end" === r ? h = t.width : (h = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((h - o + s) * this.width / (this.width - o), 0), this.paddingRight = Math.max((d - c + s) * this.width / (this.width - c), 0)
                   } else {
                      let i = e.height / 2,
                         n = t.height / 2;
                      "start" === r ? (i = 0, n = t.height) : "end" === r && (i = e.height, n = 0), this.paddingTop = i + s, this.paddingBottom = n + s
                   }
                }
                _handleMargins() {
                   this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
                }
                afterFit() {
                   x(this.options.afterFit, [this])
                }
                isHorizontal() {
                   const {
                      axis: t,
                      position: e
                   } = this.options;
                   return "top" === e || "bottom" === e || "x" === t
                }
                isFullSize() {
                   return this.options.fullSize
                }
                _convertTicksToLabels(t) {
                   let e, i;
                   for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) d(t[e].label) && (t.splice(e, 1), i--, e--);
                   this.afterTickToLabelConversion()
                }
                _getLabelSizes() {
                   let t = this._labelSizes;
                   if (!t) {
                      const e = this.options.ticks.sampleSize;
                      let i = this.ticks;
                      e < i.length && (i = Rn(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length)
                   }
                   return t
                }
                _computeLabelSizes(t, e) {
                   const {
                      ctx: i,
                      _longestTextCache: n
                   } = this, r = [], s = [];
                   let o, a, l, c, h, f, p, g, m, b, x, v = 0,
                      _ = 0;
                   for (o = 0; o < e; ++o) {
                      if (c = t[o].label, h = this._resolveTickFontOptions(o), i.font = f = h.string, p = n[f] = n[f] || {
                            data: {},
                            gc: []
                         }, g = h.lineHeight, m = b = 0, d(c) || u(c)) {
                         if (u(c))
                            for (a = 0, l = c.length; a < l; ++a) x = c[a], d(x) || u(x) || (m = $t(i, p.data, p.gc, m, x), b += g)
                      } else m = $t(i, p.data, p.gc, m, c), b = g;
                      r.push(m), s.push(b), v = Math.max(m, v), _ = Math.max(b, _)
                   }! function(t, e) {
                      y(t, (t => {
                         const i = t.gc,
                            n = i.length / 2;
                         let r;
                         if (n > e) {
                            for (r = 0; r < n; ++r) delete t.data[i[r]];
                            i.splice(0, n)
                         }
                      }))
                   }(n, e);
                   const w = r.indexOf(v),
                      k = s.indexOf(_),
                      M = t => ({
                         width: r[t] || 0,
                         height: s[t] || 0
                      });
                   return {
                      first: M(0),
                      last: M(e - 1),
                      widest: M(w),
                      highest: M(k),
                      widths: r,
                      heights: s
                   }
                }
                getLabelForValue(t) {
                   return t
                }
                getPixelForValue(t, e) {
                   return NaN
                }
                getValueForPixel(t) {}
                getPixelForTick(t) {
                   const e = this.ticks;
                   return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getPixelForDecimal(t) {
                   this._reversePixels && (t = 1 - t);
                   const e = this._startPixel + t * this._length;
                   return et(this._alignToPixels ? qt(this.chart, e, 0) : e, -32768, 32767)
                }
                getDecimalForPixel(t) {
                   const e = (t - this._startPixel) / this._length;
                   return this._reversePixels ? 1 - e : e
                }
                getBasePixel() {
                   return this.getPixelForValue(this.getBaseValue())
                }
                getBaseValue() {
                   const {
                      min: t,
                      max: e
                   } = this;
                   return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                }
                getContext(t) {
                   const e = this.ticks || [];
                   if (t >= 0 && t < e.length) {
                      const i = e[t];
                      return i.$context || (i.$context = function(t, e, i) {
                         return ue(t, {
                            tick: i,
                            index: e,
                            type: "tick"
                         })
                      }(this.getContext(), t, i))
                   }
                   return this.$context || (this.$context = ue(this.chart.getContext(), {
                      scale: this,
                      type: "scale"
                   }))
                }
                _tickSize() {
                   const t = this.options.ticks,
                      e = Y(this.labelRotation),
                      i = Math.abs(Math.cos(e)),
                      n = Math.abs(Math.sin(e)),
                      r = this._getLabelSizes(),
                      s = t.autoSkipPadding || 0,
                      o = r ? r.widest.width + s : 0,
                      a = r ? r.highest.height + s : 0;
                   return this.isHorizontal() ? a * i > o * n ? o / i : a / n : a * n < o * i ? a / i : o / n
                }
                _isVisible() {
                   const t = this.options.display;
                   return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
                }
                _computeGridLineItems(t) {
                   const e = this.axis,
                      i = this.chart,
                      n = this.options,
                      {
                         grid: r,
                         position: s
                      } = n,
                      o = r.offset,
                      a = this.isHorizontal(),
                      l = this.ticks.length + (o ? 1 : 0),
                      c = Fn(r),
                      h = [],
                      d = r.setContext(this.getContext()),
                      u = d.drawBorder ? d.borderWidth : 0,
                      p = u / 2,
                      g = function(t) {
                         return qt(i, t, u)
                      };
                   let b, x, y, v, _, w, k, M, S, C, P, O;
                   if ("top" === s) b = g(this.bottom), w = this.bottom - c, M = b - p, C = g(t.top) + p, O = t.bottom;
                   else if ("bottom" === s) b = g(this.top), C = t.top, O = g(t.bottom) - p, w = b + p, M = this.top + c;
                   else if ("left" === s) b = g(this.right), _ = this.right - c, k = b - p, S = g(t.left) + p, P = t.right;
                   else if ("right" === s) b = g(this.left), S = t.left, P = g(t.right) - p, _ = b + p, k = this.left + c;
                   else if ("x" === e) {
                      if ("center" === s) b = g((t.top + t.bottom) / 2 + .5);
                      else if (f(s)) {
                         const t = Object.keys(s)[0],
                            e = s[t];
                         b = g(this.chart.scales[t].getPixelForValue(e))
                      }
                      C = t.top, O = t.bottom, w = b + p, M = w + c
                   } else if ("y" === e) {
                      if ("center" === s) b = g((t.left + t.right) / 2);
                      else if (f(s)) {
                         const t = Object.keys(s)[0],
                            e = s[t];
                         b = g(this.chart.scales[t].getPixelForValue(e))
                      }
                      _ = b - p, k = _ - c, S = t.left, P = t.right
                   }
                   const D = m(n.ticks.maxTicksLimit, l),
                      L = Math.max(1, Math.ceil(l / D));
                   for (x = 0; x < l; x += L) {
                      const t = r.setContext(this.getContext(x)),
                         e = t.lineWidth,
                         n = t.color,
                         s = r.borderDash || [],
                         l = t.borderDashOffset,
                         c = t.tickWidth,
                         d = t.tickColor,
                         u = t.tickBorderDash || [],
                         f = t.tickBorderDashOffset;
                      y = zn(this, x, o), void 0 !== y && (v = qt(i, y, e), a ? _ = k = S = P = v : w = M = C = O = v, h.push({
                         tx1: _,
                         ty1: w,
                         tx2: k,
                         ty2: M,
                         x1: S,
                         y1: C,
                         x2: P,
                         y2: O,
                         width: e,
                         color: n,
                         borderDash: s,
                         borderDashOffset: l,
                         tickWidth: c,
                         tickColor: d,
                         tickBorderDash: u,
                         tickBorderDashOffset: f
                      }))
                   }
                   return this._ticksLength = l, this._borderValue = b, h
                }
                _computeLabelItems(t) {
                   const e = this.axis,
                      i = this.options,
                      {
                         position: n,
                         ticks: r
                      } = i,
                      s = this.isHorizontal(),
                      o = this.ticks,
                      {
                         align: a,
                         crossAlign: l,
                         padding: c,
                         mirror: h
                      } = r,
                      d = Fn(i.grid),
                      p = d + c,
                      g = h ? -c : p,
                      m = -Y(this.labelRotation),
                      b = [];
                   let x, y, v, _, w, k, M, S, C, P, O, D, L = "middle";
                   if ("top" === n) k = this.bottom - g, M = this._getXAxisLabelAlignment();
                   else if ("bottom" === n) k = this.top + g, M = this._getXAxisLabelAlignment();
                   else if ("left" === n) {
                      const t = this._getYAxisLabelAlignment(d);
                      M = t.textAlign, w = t.x
                   } else if ("right" === n) {
                      const t = this._getYAxisLabelAlignment(d);
                      M = t.textAlign, w = t.x
                   } else if ("x" === e) {
                      if ("center" === n) k = (t.top + t.bottom) / 2 + p;
                      else if (f(n)) {
                         const t = Object.keys(n)[0],
                            e = n[t];
                         k = this.chart.scales[t].getPixelForValue(e) + p
                      }
                      M = this._getXAxisLabelAlignment()
                   } else if ("y" === e) {
                      if ("center" === n) w = (t.left + t.right) / 2 - p;
                      else if (f(n)) {
                         const t = Object.keys(n)[0],
                            e = n[t];
                         w = this.chart.scales[t].getPixelForValue(e)
                      }
                      M = this._getYAxisLabelAlignment(d).textAlign
                   }
                   "y" === e && ("start" === a ? L = "top" : "end" === a && (L = "bottom"));
                   const E = this._getLabelSizes();
                   for (x = 0, y = o.length; x < y; ++x) {
                      v = o[x], _ = v.label;
                      const t = r.setContext(this.getContext(x));
                      S = this.getPixelForTick(x) + r.labelOffset, C = this._resolveTickFontOptions(x), P = C.lineHeight, O = u(_) ? _.length : 1;
                      const e = O / 2,
                         i = t.color,
                         a = t.textStrokeColor,
                         c = t.textStrokeWidth;
                      let d;
                      if (s ? (w = S, D = "top" === n ? "near" === l || 0 !== m ? -O * P + P / 2 : "center" === l ? -E.highest.height / 2 - e * P + P : -E.highest.height + P / 2 : "near" === l || 0 !== m ? P / 2 : "center" === l ? E.highest.height / 2 - e * P : E.highest.height - O * P, h && (D *= -1)) : (k = S, D = (1 - O) * P / 2), t.showLabelBackdrop) {
                         const e = ce(t.backdropPadding),
                            i = E.heights[x],
                            n = E.widths[x];
                         let r = k + D - e.top,
                            s = w - e.left;
                         switch (L) {
                            case "middle":
                               r -= i / 2;
                               break;
                            case "bottom":
                               r -= i
                         }
                         switch (M) {
                            case "center":
                               s -= n / 2;
                               break;
                            case "right":
                               s -= n
                         }
                         d = {
                            left: s,
                            top: r,
                            width: n + e.width,
                            height: i + e.height,
                            color: t.backdropColor
                         }
                      }
                      b.push({
                         rotation: m,
                         label: _,
                         font: C,
                         color: i,
                         strokeColor: a,
                         strokeWidth: c,
                         textOffset: D,
                         textAlign: M,
                         textBaseline: L,
                         translation: [w, k],
                         backdrop: d
                      })
                   }
                   return b
                }
                _getXAxisLabelAlignment() {
                   const {
                      position: t,
                      ticks: e
                   } = this.options;
                   if (-Y(this.labelRotation)) return "top" === t ? "left" : "right";
                   let i = "center";
                   return "start" === e.align ? i = "left" : "end" === e.align && (i = "right"), i
                }
                _getYAxisLabelAlignment(t) {
                   const {
                      position: e,
                      ticks: {
                         crossAlign: i,
                         mirror: n,
                         padding: r
                      }
                   } = this.options, s = t + r, o = this._getLabelSizes().widest.width;
                   let a, l;
                   return "left" === e ? n ? (l = this.right + r, "near" === i ? a = "left" : "center" === i ? (a = "center", l += o / 2) : (a = "right", l += o)) : (l = this.right - s, "near" === i ? a = "right" : "center" === i ? (a = "center", l -= o / 2) : (a = "left", l = this.left)) : "right" === e ? n ? (l = this.left + r, "near" === i ? a = "right" : "center" === i ? (a = "center", l -= o / 2) : (a = "left", l -= o)) : (l = this.left + s, "near" === i ? a = "left" : "center" === i ? (a = "center", l += o / 2) : (a = "right", l = this.right)) : a = "right", {
                      textAlign: a,
                      x: l
                   }
                }
                _computeLabelArea() {
                   if (this.options.ticks.mirror) return;
                   const t = this.chart,
                      e = this.options.position;
                   return "left" === e || "right" === e ? {
                      top: 0,
                      left: this.left,
                      bottom: t.height,
                      right: this.right
                   } : "top" === e || "bottom" === e ? {
                      top: this.top,
                      left: 0,
                      bottom: this.bottom,
                      right: t.width
                   } : void 0
                }
                drawBackground() {
                   const {
                      ctx: t,
                      options: {
                         backgroundColor: e
                      },
                      left: i,
                      top: n,
                      width: r,
                      height: s
                   } = this;
                   e && (t.save(), t.fillStyle = e, t.fillRect(i, n, r, s), t.restore())
                }
                getLineWidthForValue(t) {
                   const e = this.options.grid;
                   if (!this._isVisible() || !e.display) return 0;
                   const i = this.ticks.findIndex((e => e.value === t));
                   return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0
                }
                drawGrid(t) {
                   const e = this.options.grid,
                      i = this.ctx,
                      n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                   let r, s;
                   const o = (t, e, n) => {
                      n.width && n.color && (i.save(), i.lineWidth = n.width, i.strokeStyle = n.color, i.setLineDash(n.borderDash || []), i.lineDashOffset = n.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore())
                   };
                   if (e.display)
                      for (r = 0, s = n.length; r < s; ++r) {
                         const t = n[r];
                         e.drawOnChartArea && o({
                            x: t.x1,
                            y: t.y1
                         }, {
                            x: t.x2,
                            y: t.y2
                         }, t), e.drawTicks && o({
                            x: t.tx1,
                            y: t.ty1
                         }, {
                            x: t.tx2,
                            y: t.ty2
                         }, {
                            color: t.tickColor,
                            width: t.tickWidth,
                            borderDash: t.tickBorderDash,
                            borderDashOffset: t.tickBorderDashOffset
                         })
                      }
                }
                drawBorder() {
                   const {
                      chart: t,
                      ctx: e,
                      options: {
                         grid: i
                      }
                   } = this, n = i.setContext(this.getContext()), r = i.drawBorder ? n.borderWidth : 0;
                   if (!r) return;
                   const s = i.setContext(this.getContext(0)).lineWidth,
                      o = this._borderValue;
                   let a, l, c, h;
                   this.isHorizontal() ? (a = qt(t, this.left, r) - r / 2, l = qt(t, this.right, s) + s / 2, c = h = o) : (c = qt(t, this.top, r) - r / 2, h = qt(t, this.bottom, s) + s / 2, a = l = o), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(a, c), e.lineTo(l, h), e.stroke(), e.restore()
                }
                drawLabels(t) {
                   if (!this.options.ticks.display) return;
                   const e = this.ctx,
                      i = this._computeLabelArea();
                   i && Gt(e, i);
                   const n = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                   let r, s;
                   for (r = 0, s = n.length; r < s; ++r) {
                      const t = n[r],
                         i = t.font,
                         s = t.label;
                      t.backdrop && (e.fillStyle = t.backdrop.color, e.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)), te(e, s, 0, t.textOffset, i, t)
                   }
                   i && Kt(e)
                }
                drawTitle() {
                   const {
                      ctx: t,
                      options: {
                         position: e,
                         title: i,
                         reverse: n
                      }
                   } = this;
                   if (!i.display) return;
                   const r = he(i.font),
                      s = ce(i.padding),
                      o = i.align;
                   let a = r.lineHeight / 2;
                   "bottom" === e || "center" === e || f(e) ? (a += s.bottom, u(i.text) && (a += r.lineHeight * (i.text.length - 1))) : a += s.top;
                   const {
                      titleX: c,
                      titleY: h,
                      maxWidth: d,
                      rotation: p
                   } = function(t, e, i, n) {
                      const {
                         top: r,
                         left: s,
                         bottom: o,
                         right: a,
                         chart: c
                      } = t, {
                         chartArea: h,
                         scales: d
                      } = c;
                      let u, p, g, m = 0;
                      const b = o - r,
                         x = a - s;
                      if (t.isHorizontal()) {
                         if (p = l(n, s, a), f(i)) {
                            const t = Object.keys(i)[0],
                               n = i[t];
                            g = d[t].getPixelForValue(n) + b - e
                         } else g = "center" === i ? (h.bottom + h.top) / 2 + b - e : An(t, i, e);
                         u = a - s
                      } else {
                         if (f(i)) {
                            const t = Object.keys(i)[0],
                               n = i[t];
                            p = d[t].getPixelForValue(n) - x + e
                         } else p = "center" === i ? (h.left + h.right) / 2 - x + e : An(t, i, e);
                         g = l(n, o, r), m = "left" === i ? -j : j
                      }
                      return {
                         titleX: p,
                         titleY: g,
                         maxWidth: u,
                         rotation: m
                      }
                   }(this, a, e, o);
                   te(t, i.text, 0, 0, r, {
                      color: i.color,
                      maxWidth: d,
                      rotation: p,
                      textAlign: jn(o, e, n),
                      textBaseline: "middle",
                      translation: [c, h]
                   })
                }
                draw(t) {
                   this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
                }
                _layers() {
                   const t = this.options,
                      e = t.ticks && t.ticks.z || 0,
                      i = m(t.grid && t.grid.z, -1);
                   return this._isVisible() && this.draw === Nn.prototype.draw ? [{
                      z: i,
                      draw: t => {
                         this.drawBackground(), this.drawGrid(t), this.drawTitle()
                      }
                   }, {
                      z: i + 1,
                      draw: () => {
                         this.drawBorder()
                      }
                   }, {
                      z: e,
                      draw: t => {
                         this.drawLabels(t)
                      }
                   }] : [{
                      z: e,
                      draw: t => {
                         this.draw(t)
                      }
                   }]
                }
                getMatchingVisibleMetas(t) {
                   const e = this.chart.getSortedVisibleDatasetMetas(),
                      i = this.axis + "AxisID",
                      n = [];
                   let r, s;
                   for (r = 0, s = e.length; r < s; ++r) {
                      const s = e[r];
                      s[i] !== this.id || t && s.type !== t || n.push(s)
                   }
                   return n
                }
                _resolveTickFontOptions(t) {
                   return he(this.options.ticks.setContext(this.getContext(t)).font)
                }
                _maxDigits() {
                   const t = this._resolveTickFontOptions(0).lineHeight;
                   return (this.isHorizontal() ? this.width : this.height) / t
                }
             }
             class Bn {
                constructor(t, e, i) {
                   this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
                }
                isForType(t) {
                   return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
                }
                register(t) {
                   const e = Object.getPrototypeOf(t);
                   let i;
                   (function(t) {
                      return "id" in t && "defaults" in t
                   })(e) && (i = this.register(e));
                   const n = this.items,
                      r = t.id,
                      s = this.scope + "." + r;
                   if (!r) throw new Error("class does not have id: " + t);
                   return r in n || (n[r] = t, function(t, e, i) {
                      const n = M(Object.create(null), [i ? Ht.get(i) : {}, Ht.get(e), t.defaults]);
                      Ht.set(e, n), t.defaultRoutes && function(t, e) {
                         Object.keys(e).forEach((i => {
                            const n = i.split("."),
                               r = n.pop(),
                               s = [t].concat(n).join("."),
                               o = e[i].split("."),
                               a = o.pop(),
                               l = o.join(".");
                            Ht.route(s, r, l, a)
                         }))
                      }(e, t.defaultRoutes), t.descriptors && Ht.describe(e, t.descriptors)
                   }(t, s, i), this.override && Ht.override(t.id, t.overrides)), s
                }
                get(t) {
                   return this.items[t]
                }
                unregister(t) {
                   const e = this.items,
                      i = t.id,
                      n = this.scope;
                   i in e && delete e[i], n && i in Ht[n] && (delete Ht[n][i], this.override && delete Nt[i])
                }
             }
             var Vn = new class {
                constructor() {
                   this.controllers = new Bn(Ci, "datasets", !0), this.elements = new Bn(Dn, "elements"), this.plugins = new Bn(Object, "plugins"), this.scales = new Bn(Nn, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
                }
                add(...t) {
                   this._each("register", t)
                }
                remove(...t) {
                   this._each("unregister", t)
                }
                addControllers(...t) {
                   this._each("register", t, this.controllers)
                }
                addElements(...t) {
                   this._each("register", t, this.elements)
                }
                addPlugins(...t) {
                   this._each("register", t, this.plugins)
                }
                addScales(...t) {
                   this._each("register", t, this.scales)
                }
                getController(t) {
                   return this._get(t, this.controllers, "controller")
                }
                getElement(t) {
                   return this._get(t, this.elements, "element")
                }
                getPlugin(t) {
                   return this._get(t, this.plugins, "plugin")
                }
                getScale(t) {
                   return this._get(t, this.scales, "scale")
                }
                removeControllers(...t) {
                   this._each("unregister", t, this.controllers)
                }
                removeElements(...t) {
                   this._each("unregister", t, this.elements)
                }
                removePlugins(...t) {
                   this._each("unregister", t, this.plugins)
                }
                removeScales(...t) {
                   this._each("unregister", t, this.scales)
                }
                _each(t, e, i) {
                   [...e].forEach((e => {
                      const n = i || this._getRegistryForType(e);
                      i || n.isForType(e) || n === this.plugins && e.id ? this._exec(t, n, e) : y(e, (e => {
                         const n = i || this._getRegistryForType(e);
                         this._exec(t, n, e)
                      }))
                   }))
                }
                _exec(t, e, i) {
                   const n = D(t);
                   x(i["before" + n], [], i), e[t](i), x(i["after" + n], [], i)
                }
                _getRegistryForType(t) {
                   for (let e = 0; e < this._typedRegistries.length; e++) {
                      const i = this._typedRegistries[e];
                      if (i.isForType(t)) return i
                   }
                   return this.plugins
                }
                _get(t, e, i) {
                   const n = e.get(t);
                   if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + ".");
                   return n
                }
             };
             class Wn {
                constructor() {
                   this._init = []
                }
                notify(t, e, i, n) {
                   "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                   const r = n ? this._descriptors(t).filter(n) : this._descriptors(t),
                      s = this._notify(r, t, e, i);
                   return "afterDestroy" === e && (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")), s
                }
                _notify(t, e, i, n) {
                   n = n || {};
                   for (const r of t) {
                      const t = r.plugin;
                      if (!1 === x(t[i], [e, n, r.options], t) && n.cancelable) return !1
                   }
                   return !0
                }
                invalidate() {
                   d(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
                }
                _descriptors(t) {
                   if (this._cache) return this._cache;
                   const e = this._cache = this._createDescriptors(t);
                   return this._notifyStateChanges(t), e
                }
                _createDescriptors(t, e) {
                   const i = t && t.config,
                      n = m(i.options && i.options.plugins, {}),
                      r = function(t) {
                         const e = [],
                            i = Object.keys(Vn.plugins.items);
                         for (let t = 0; t < i.length; t++) e.push(Vn.getPlugin(i[t]));
                         const n = t.plugins || [];
                         for (let t = 0; t < n.length; t++) {
                            const i = n[t]; - 1 === e.indexOf(i) && e.push(i)
                         }
                         return e
                      }(i);
                   return !1 !== n || e ? function(t, e, i, n) {
                      const r = [],
                         s = t.getContext();
                      for (let o = 0; o < e.length; o++) {
                         const a = e[o],
                            l = Hn(i[a.id], n);
                         null !== l && r.push({
                            plugin: a,
                            options: $n(t.config, a, l, s)
                         })
                      }
                      return r
                   }(t, r, n, e) : []
                }
                _notifyStateChanges(t) {
                   const e = this._oldCache || [],
                      i = this._cache,
                      n = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
                   this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start")
                }
             }
 
             function Hn(t, e) {
                return e || !1 !== t ? !0 === t ? {} : t : null
             }
 
             function $n(t, e, i, n) {
                const r = t.pluginScopeKeys(e),
                   s = t.getOptionScopes(i, r);
                return t.createResolver(s, n, [""], {
                   scriptable: !1,
                   indexable: !1,
                   allKeys: !0
                })
             }
 
             function Un(t, e) {
                const i = Ht.datasets[t] || {};
                return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
             }
 
             function qn(t, e) {
                return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
                var i
             }
 
             function Yn(t) {
                const e = t.options || (t.options = {});
                e.plugins = m(e.plugins, {}), e.scales = function(t, e) {
                   const i = Nt[t.type] || {
                         scales: {}
                      },
                      n = e.scales || {},
                      r = Un(t.type, e),
                      s = Object.create(null),
                      o = Object.create(null);
                   return Object.keys(n).forEach((t => {
                      const e = n[t];
                      if (!f(e)) return console.error(`Invalid scale configuration for scale: ${t}`);
                      if (e._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                      const a = qn(t, e),
                         l = function(t, e) {
                            return t === e ? "_index_" : "_value_"
                         }(a, r),
                         c = i.scales || {};
                      s[a] = s[a] || t, o[t] = S(Object.create(null), [{
                         axis: a
                      }, e, c[a], c[l]])
                   })), t.data.datasets.forEach((i => {
                      const r = i.type || t.type,
                         a = i.indexAxis || Un(r, e),
                         l = (Nt[r] || {}).scales || {};
                      Object.keys(l).forEach((t => {
                         const e = function(t, e) {
                               let i = t;
                               return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                            }(t, a),
                            r = i[e + "AxisID"] || s[e] || e;
                         o[r] = o[r] || Object.create(null), S(o[r], [{
                            axis: e
                         }, n[r], l[t]])
                      }))
                   })), Object.keys(o).forEach((t => {
                      const e = o[t];
                      S(e, [Ht.scales[e.type], Ht.scale])
                   })), o
                }(t, e)
             }
 
             function Xn(t) {
                return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
             }
             const Zn = new Map,
                Gn = new Set;
 
             function Kn(t, e) {
                let i = Zn.get(t);
                return i || (i = e(), Zn.set(t, i), Gn.add(i)), i
             }
             const Jn = (t, e, i) => {
                const n = O(e, i);
                void 0 !== n && t.add(n)
             };
             class Qn {
                constructor(t) {
                   this._config = function(t) {
                      return (t = t || {}).data = Xn(t.data), Yn(t), t
                   }(t), this._scopeCache = new Map, this._resolverCache = new Map
                }
                get platform() {
                   return this._config.platform
                }
                get type() {
                   return this._config.type
                }
                set type(t) {
                   this._config.type = t
                }
                get data() {
                   return this._config.data
                }
                set data(t) {
                   this._config.data = Xn(t)
                }
                get options() {
                   return this._config.options
                }
                set options(t) {
                   this._config.options = t
                }
                get plugins() {
                   return this._config.plugins
                }
                update() {
                   const t = this._config;
                   this.clearCache(), Yn(t)
                }
                clearCache() {
                   this._scopeCache.clear(), this._resolverCache.clear()
                }
                datasetScopeKeys(t) {
                   return Kn(t, (() => [
                      [`datasets.${t}`, ""]
                   ]))
                }
                datasetAnimationScopeKeys(t, e) {
                   return Kn(`${t}.transition.${e}`, (() => [
                      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                      [`datasets.${t}`, ""]
                   ]))
                }
                datasetElementScopeKeys(t, e) {
                   return Kn(`${t}-${e}`, (() => [
                      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
                   ]))
                }
                pluginScopeKeys(t) {
                   const e = t.id;
                   return Kn(`${this.type}-plugin-${e}`, (() => [
                      [`plugins.${e}`, ...t.additionalOptionScopes || []]
                   ]))
                }
                _cachedScopes(t, e) {
                   const i = this._scopeCache;
                   let n = i.get(t);
                   return n && !e || (n = new Map, i.set(t, n)), n
                }
                getOptionScopes(t, e, i) {
                   const {
                      options: n,
                      type: r
                   } = this, s = this._cachedScopes(t, i), o = s.get(e);
                   if (o) return o;
                   const a = new Set;
                   e.forEach((e => {
                      t && (a.add(t), e.forEach((e => Jn(a, t, e)))), e.forEach((t => Jn(a, n, t))), e.forEach((t => Jn(a, Nt[r] || {}, t))), e.forEach((t => Jn(a, Ht, t))), e.forEach((t => Jn(a, Bt, t)))
                   }));
                   const l = Array.from(a);
                   return 0 === l.length && l.push(Object.create(null)), Gn.has(e) && s.set(e, l), l
                }
                chartOptionScopes() {
                   const {
                      options: t,
                      type: e
                   } = this;
                   return [t, Nt[e] || {}, Ht.datasets[e] || {}, {
                      type: e
                   }, Ht, Bt]
                }
                resolveNamedOptions(t, e, i, n = [""]) {
                   const r = {
                         $shared: !0
                      },
                      {
                         resolver: s,
                         subPrefixes: o
                      } = tr(this._resolverCache, t, n);
                   let a = s;
                   (function(t, e) {
                      const {
                         isScriptable: i,
                         isIndexable: n
                      } = _e(t);
                      for (const r of e) {
                         const e = i(r),
                            s = n(r),
                            o = (s || e) && t[r];
                         if (e && (E(o) || er(o)) || s && u(o)) return !0
                      }
                      return !1
                   })(s, e) && (r.$shared = !1, a = ve(s, i = E(i) ? i() : i, this.createResolver(t, i, o)));
                   for (const t of e) r[t] = a[t];
                   return r
                }
                createResolver(t, e, i = [""], n) {
                   const {
                      resolver: r
                   } = tr(this._resolverCache, t, i);
                   return f(e) ? ve(r, e, void 0, n) : r
                }
             }
 
             function tr(t, e, i) {
                let n = t.get(e);
                n || (n = new Map, t.set(e, n));
                const r = i.join();
                let s = n.get(r);
                return s || (s = {
                   resolver: ye(e, i),
                   subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
                }, n.set(r, s)), s
             }
             const er = t => f(t) && Object.getOwnPropertyNames(t).reduce(((e, i) => e || E(t[i])), !1),
                ir = ["top", "bottom", "left", "right", "chartArea"];
 
             function nr(t, e) {
                return "top" === t || "bottom" === t || -1 === ir.indexOf(t) && "x" === e
             }
 
             function rr(t, e) {
                return function(i, n) {
                   return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
                }
             }
 
             function sr(t) {
                const e = t.chart,
                   i = e.options.animation;
                e.notifyPlugins("afterRender"), x(i && i.onComplete, [t], e)
             }
 
             function or(t) {
                const e = t.chart,
                   i = e.options.animation;
                x(i && i.onProgress, [t], e)
             }
 
             function ar(t) {
                return je() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
             }
             const lr = {},
                cr = t => {
                   const e = ar(t);
                   return Object.values(lr).filter((t => t.canvas === e)).pop()
                };
 
             function hr(t, e, i) {
                const n = Object.keys(t);
                for (const r of n) {
                   const n = +r;
                   if (n >= e) {
                      const s = t[r];
                      delete t[r], (i > 0 || n > e) && (t[n + i] = s)
                   }
                }
             }
             class dr {
                constructor(t, e) {
                   const i = this.config = new Qn(e),
                      n = ar(t),
                      r = cr(n);
                   if (r) throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas can be reused.");
                   const s = i.createResolver(i.chartOptionScopes(), this.getContext());
                   this.platform = new(i.platform || function(t) {
                      return !je() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? pn : On
                   }(n)), this.platform.updateConfig(i);
                   const o = this.platform.acquireContext(n, s.aspectRatio),
                      a = o && o.canvas,
                      l = a && a.height,
                      c = a && a.width;
                   this.id = h(), this.ctx = o, this.canvas = a, this.width = c, this.height = l, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Wn, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function(t, e) {
                      let i;
                      return function(...n) {
                         return e ? (clearTimeout(i), i = setTimeout(t, e, n)) : t.apply(this, n), e
                      }
                   }((t => this.update(t)), s.resizeDelay || 0), this._dataChanges = [], lr[this.id] = this, o && a ? (ci.listen(this, "complete", sr), ci.listen(this, "progress", or), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                }
                get aspectRatio() {
                   const {
                      options: {
                         aspectRatio: t,
                         maintainAspectRatio: e
                      },
                      width: i,
                      height: n,
                      _aspectRatio: r
                   } = this;
                   return d(t) ? e && r ? r : n ? i / n : null : t
                }
                get data() {
                   return this.config.data
                }
                set data(t) {
                   this.config.data = t
                }
                get options() {
                   return this._options
                }
                set options(t) {
                   this.config.options = t
                }
                _initialize() {
                   return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : qe(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
                }
                clear() {
                   return Yt(this.canvas, this.ctx), this
                }
                stop() {
                   return ci.stop(this), this
                }
                resize(t, e) {
                   ci.running(this) ? this._resizeBeforeDraw = {
                      width: t,
                      height: e
                   } : this._resize(t, e)
                }
                _resize(t, e) {
                   const i = this.options,
                      n = this.canvas,
                      r = i.maintainAspectRatio && this.aspectRatio,
                      s = this.platform.getMaximumSize(n, t, e, r),
                      o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                      a = this.width ? "resize" : "attach";
                   this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, qe(this, o, !0) && (this.notifyPlugins("resize", {
                      size: s
                   }), x(i.onResize, [this, s], this), this.attached && this._doResize(a) && this.render())
                }
                ensureScalesHaveIDs() {
                   y(this.options.scales || {}, ((t, e) => {
                      t.id = e
                   }))
                }
                buildOrUpdateScales() {
                   const t = this.options,
                      e = t.scales,
                      i = this.scales,
                      n = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {});
                   let r = [];
                   e && (r = r.concat(Object.keys(e).map((t => {
                      const i = e[t],
                         n = qn(t, i),
                         r = "r" === n,
                         s = "x" === n;
                      return {
                         options: i,
                         dposition: r ? "chartArea" : s ? "bottom" : "left",
                         dtype: r ? "radialLinear" : s ? "category" : "linear"
                      }
                   })))), y(r, (e => {
                      const r = e.options,
                         s = r.id,
                         o = qn(s, r),
                         a = m(r.type, e.dtype);
                      void 0 !== r.position && nr(r.position, o) === nr(e.dposition) || (r.position = e.dposition), n[s] = !0;
                      let l = null;
                      s in i && i[s].type === a ? l = i[s] : (l = new(Vn.getScale(a))({
                         id: s,
                         type: a,
                         ctx: this.ctx,
                         chart: this
                      }), i[l.id] = l), l.init(r, t)
                   })), y(n, ((t, e) => {
                      t || delete i[e]
                   })), y(i, (t => {
                      un.configure(this, t, t.options), un.addBox(this, t)
                   }))
                }
                _updateMetasets() {
                   const t = this._metasets,
                      e = this.data.datasets.length,
                      i = t.length;
                   if (t.sort(((t, e) => t.index - e.index)), i > e) {
                      for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                      t.splice(e, i - e)
                   }
                   this._sortedMetasets = t.slice(0).sort(rr("order", "index"))
                }
                _removeUnreferencedMetasets() {
                   const {
                      _metasets: t,
                      data: {
                         datasets: e
                      }
                   } = this;
                   t.length > e.length && delete this._stacks, t.forEach(((t, i) => {
                      0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i)
                   }))
                }
                buildOrUpdateControllers() {
                   const t = [],
                      e = this.data.datasets;
                   let i, n;
                   for (this._removeUnreferencedMetasets(), i = 0, n = e.length; i < n; i++) {
                      const n = e[i];
                      let r = this.getDatasetMeta(i);
                      const s = n.type || this.config.type;
                      if (r.type && r.type !== s && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = s, r.indexAxis = n.indexAxis || Un(s, this.options), r.order = n.order || 0, r.index = i, r.label = "" + n.label, r.visible = this.isDatasetVisible(i), r.controller) r.controller.updateIndex(i), r.controller.linkScales();
                      else {
                         const e = Vn.getController(s),
                            {
                               datasetElementType: n,
                               dataElementType: o
                            } = Ht.datasets[s];
                         Object.assign(e.prototype, {
                            dataElementType: Vn.getElement(o),
                            datasetElementType: n && Vn.getElement(n)
                         }), r.controller = new e(this, i), t.push(r.controller)
                      }
                   }
                   return this._updateMetasets(), t
                }
                _resetElements() {
                   y(this.data.datasets, ((t, e) => {
                      this.getDatasetMeta(e).controller.reset()
                   }), this)
                }
                reset() {
                   this._resetElements(), this.notifyPlugins("reset")
                }
                update(t) {
                   const e = this.config;
                   e.update();
                   const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                      n = this._animationsDisabled = !i.animation;
                   if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                         mode: t,
                         cancelable: !0
                      })) return;
                   const r = this.buildOrUpdateControllers();
                   this.notifyPlugins("beforeElementsUpdate");
                   let s = 0;
                   for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                      const {
                         controller: e
                      } = this.getDatasetMeta(t), i = !n && -1 === r.indexOf(e);
                      e.buildOrUpdateElements(i), s = Math.max(+e.getMaxOverflow(), s)
                   }
                   s = this._minPadding = i.layout.autoPadding ? s : 0, this._updateLayout(s), n || y(r, (t => {
                      t.reset()
                   })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                      mode: t
                   }), this._layers.sort(rr("z", "_idx"));
                   const {
                      _active: o,
                      _lastEvent: a
                   } = this;
                   a ? this._eventHandler(a, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render()
                }
                _updateScales() {
                   y(this.scales, (t => {
                      un.removeBox(this, t)
                   })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
                }
                _checkEventBindings() {
                   const t = this.options,
                      e = new Set(Object.keys(this._listeners)),
                      i = new Set(t.events);
                   T(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
                }
                _updateHiddenIndices() {
                   const {
                      _hiddenIndices: t
                   } = this, e = this._getUniformDataChanges() || [];
                   for (const {
                         method: i,
                         start: n,
                         count: r
                      }
                      of e) hr(t, n, "_removeElements" === i ? -r : r)
                }
                _getUniformDataChanges() {
                   const t = this._dataChanges;
                   if (!t || !t.length) return;
                   this._dataChanges = [];
                   const e = this.data.datasets.length,
                      i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                      n = i(0);
                   for (let t = 1; t < e; t++)
                      if (!T(n, i(t))) return;
                   return Array.from(n).map((t => t.split(","))).map((t => ({
                      method: t[1],
                      start: +t[2],
                      count: +t[3]
                   })))
                }
                _updateLayout(t) {
                   if (!1 === this.notifyPlugins("beforeLayout", {
                         cancelable: !0
                      })) return;
                   un.update(this, this.width, this.height, t);
                   const e = this.chartArea,
                      i = e.width <= 0 || e.height <= 0;
                   this._layers = [], y(this.boxes, (t => {
                      i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
                   }), this), this._layers.forEach(((t, e) => {
                      t._idx = e
                   })), this.notifyPlugins("afterLayout")
                }
                _updateDatasets(t) {
                   if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                         mode: t,
                         cancelable: !0
                      })) {
                      for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                      for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, E(t) ? t({
                         datasetIndex: e
                      }) : t);
                      this.notifyPlugins("afterDatasetsUpdate", {
                         mode: t
                      })
                   }
                }
                _updateDataset(t, e) {
                   const i = this.getDatasetMeta(t),
                      n = {
                         meta: i,
                         index: t,
                         mode: e,
                         cancelable: !0
                      };
                   !1 !== this.notifyPlugins("beforeDatasetUpdate", n) && (i.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
                }
                render() {
                   !1 !== this.notifyPlugins("beforeRender", {
                      cancelable: !0
                   }) && (ci.has(this) ? this.attached && !ci.running(this) && ci.start(this) : (this.draw(), sr({
                      chart: this
                   })))
                }
                draw() {
                   let t;
                   if (this._resizeBeforeDraw) {
                      const {
                         width: t,
                         height: e
                      } = this._resizeBeforeDraw;
                      this._resize(t, e), this._resizeBeforeDraw = null
                   }
                   if (this.clear(), this.width <= 0 || this.height <= 0) return;
                   if (!1 === this.notifyPlugins("beforeDraw", {
                         cancelable: !0
                      })) return;
                   const e = this._layers;
                   for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                   for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                   this.notifyPlugins("afterDraw")
                }
                _getSortedDatasetMetas(t) {
                   const e = this._sortedMetasets,
                      i = [];
                   let n, r;
                   for (n = 0, r = e.length; n < r; ++n) {
                      const r = e[n];
                      t && !r.visible || i.push(r)
                   }
                   return i
                }
                getSortedVisibleDatasetMetas() {
                   return this._getSortedDatasetMetas(!0)
                }
                _drawDatasets() {
                   if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                         cancelable: !0
                      })) return;
                   const t = this.getSortedVisibleDatasetMetas();
                   for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                   this.notifyPlugins("afterDatasetsDraw")
                }
                _drawDataset(t) {
                   const e = this.ctx,
                      i = t._clip,
                      n = !i.disabled,
                      r = this.chartArea,
                      s = {
                         meta: t,
                         index: t.index,
                         cancelable: !0
                      };
                   !1 !== this.notifyPlugins("beforeDatasetDraw", s) && (n && Gt(e, {
                      left: !1 === i.left ? 0 : r.left - i.left,
                      right: !1 === i.right ? this.width : r.right + i.right,
                      top: !1 === i.top ? 0 : r.top - i.top,
                      bottom: !1 === i.bottom ? this.height : r.bottom + i.bottom
                   }), t.controller.draw(), n && Kt(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s))
                }
                getElementsAtEventForMode(t, e, i, n) {
                   const r = Qi.modes[e];
                   return "function" == typeof r ? r(this, t, i, n) : []
                }
                getDatasetMeta(t) {
                   const e = this.data.datasets[t],
                      i = this._metasets;
                   let n = i.filter((t => t && t._dataset === e)).pop();
                   return n || (n = {
                      type: null,
                      data: [],
                      dataset: null,
                      controller: null,
                      hidden: null,
                      xAxisID: null,
                      yAxisID: null,
                      order: e && e.order || 0,
                      index: t,
                      _dataset: e,
                      _parsed: [],
                      _sorted: !1
                   }, i.push(n)), n
                }
                getContext() {
                   return this.$context || (this.$context = ue(null, {
                      chart: this,
                      type: "chart"
                   }))
                }
                getVisibleDatasetCount() {
                   return this.getSortedVisibleDatasetMetas().length
                }
                isDatasetVisible(t) {
                   const e = this.data.datasets[t];
                   if (!e) return !1;
                   const i = this.getDatasetMeta(t);
                   return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
                }
                setDatasetVisibility(t, e) {
                   this.getDatasetMeta(t).hidden = !e
                }
                toggleDataVisibility(t) {
                   this._hiddenIndices[t] = !this._hiddenIndices[t]
                }
                getDataVisibility(t) {
                   return !this._hiddenIndices[t]
                }
                _updateVisibility(t, e, i) {
                   const n = i ? "show" : "hide",
                      r = this.getDatasetMeta(t),
                      s = r.controller._resolveAnimations(void 0, n);
                   L(e) ? (r.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), s.update(r, {
                      visible: i
                   }), this.update((e => e.datasetIndex === t ? n : void 0)))
                }
                hide(t, e) {
                   this._updateVisibility(t, e, !1)
                }
                show(t, e) {
                   this._updateVisibility(t, e, !0)
                }
                _destroyDatasetMeta(t) {
                   const e = this._metasets[t];
                   e && e.controller && e.controller._destroy(), delete this._metasets[t]
                }
                _stop() {
                   let t, e;
                   for (this.stop(), ci.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
                }
                destroy() {
                   this.notifyPlugins("beforeDestroy");
                   const {
                      canvas: t,
                      ctx: e
                   } = this;
                   this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Yt(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete lr[this.id], this.notifyPlugins("afterDestroy")
                }
                toBase64Image(...t) {
                   return this.canvas.toDataURL(...t)
                }
                bindEvents() {
                   this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
                }
                bindUserEvents() {
                   const t = this._listeners,
                      e = this.platform,
                      i = (i, n) => {
                         e.addEventListener(this, i, n), t[i] = n
                      },
                      n = (t, e, i) => {
                         t.offsetX = e, t.offsetY = i, this._eventHandler(t)
                      };
                   y(this.options.events, (t => i(t, n)))
                }
                bindResponsiveEvents() {
                   this._responsiveListeners || (this._responsiveListeners = {});
                   const t = this._responsiveListeners,
                      e = this.platform,
                      i = (i, n) => {
                         e.addEventListener(this, i, n), t[i] = n
                      },
                      n = (i, n) => {
                         t[i] && (e.removeEventListener(this, i, n), delete t[i])
                      },
                      r = (t, e) => {
                         this.canvas && this.resize(t, e)
                      };
                   let s;
                   const o = () => {
                      n("attach", o), this.attached = !0, this.resize(), i("resize", r), i("detach", s)
                   };
                   s = () => {
                      this.attached = !1, n("resize", r), this._stop(), this._resize(0, 0), i("attach", o)
                   }, e.isAttached(this.canvas) ? o() : s()
                }
                unbindEvents() {
                   y(this._listeners, ((t, e) => {
                      this.platform.removeEventListener(this, e, t)
                   })), this._listeners = {}, y(this._responsiveListeners, ((t, e) => {
                      this.platform.removeEventListener(this, e, t)
                   })), this._responsiveListeners = void 0
                }
                updateHoverStyle(t, e, i) {
                   const n = i ? "set" : "remove";
                   let r, s, o, a;
                   for ("dataset" === e && (r = this.getDatasetMeta(t[0].datasetIndex), r.controller["_" + n + "DatasetHoverStyle"]()), o = 0, a = t.length; o < a; ++o) {
                      s = t[o];
                      const e = s && this.getDatasetMeta(s.datasetIndex).controller;
                      e && e[n + "HoverStyle"](s.element, s.datasetIndex, s.index)
                   }
                }
                getActiveElements() {
                   return this._active || []
                }
                setActiveElements(t) {
                   const e = this._active || [],
                      i = t.map((({
                         datasetIndex: t,
                         index: e
                      }) => {
                         const i = this.getDatasetMeta(t);
                         if (!i) throw new Error("No dataset found at index " + t);
                         return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                         }
                      }));
                   !v(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
                }
                notifyPlugins(t, e, i) {
                   return this._plugins.notify(this, t, e, i)
                }
                _updateHoverStyles(t, e, i) {
                   const n = this.options.hover,
                      r = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                      s = r(e, t),
                      o = i ? t : r(t, e);
                   s.length && this.updateHoverStyle(s, n.mode, !1), o.length && n.mode && this.updateHoverStyle(o, n.mode, !0)
                }
                _eventHandler(t, e) {
                   const i = {
                         event: t,
                         replay: e,
                         cancelable: !0,
                         inChartArea: Zt(t, this.chartArea, this._minPadding)
                      },
                      n = e => (e.options.events || this.options.events).includes(t.native.type);
                   if (!1 === this.notifyPlugins("beforeEvent", i, n)) return;
                   const r = this._handleEvent(t, e, i.inChartArea);
                   return i.cancelable = !1, this.notifyPlugins("afterEvent", i, n), (r || i.changed) && this.render(), this
                }
                _handleEvent(t, e, i) {
                   const {
                      _active: n = [],
                      options: r
                   } = this, s = e, o = this._getActiveElements(t, n, i, s), a = function(t) {
                      return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
                   }(t), l = function(t, e, i, n) {
                      return i && "mouseout" !== t.type ? n ? e : t : null
                   }(t, this._lastEvent, i, a);
                   i && (this._lastEvent = null, x(r.onHover, [t, o, this], this), a && x(r.onClick, [t, o, this], this));
                   const c = !v(o, n);
                   return (c || e) && (this._active = o, this._updateHoverStyles(o, n, e)), this._lastEvent = l, c
                }
                _getActiveElements(t, e, i, n) {
                   if ("mouseout" === t.type) return [];
                   if (!i) return e;
                   const r = this.options.hover;
                   return this.getElementsAtEventForMode(t, r.mode, r, n)
                }
             }
             const ur = () => y(dr.instances, (t => t._plugins.invalidate())),
                fr = !0;
 
             function pr(t, e, i) {
                const {
                   startAngle: n,
                   pixelMargin: r,
                   x: s,
                   y: o,
                   outerRadius: a,
                   innerRadius: l
                } = e;
                let c = r / a;
                t.beginPath(), t.arc(s, o, a, n - c, i + c), l > r ? (c = r / l, t.arc(s, o, l, i + c, n - c, !0)) : t.arc(s, o, r, i + j, n - j), t.closePath(), t.clip()
             }
 
             function gr(t, e, i, n) {
                return {
                   x: i + t * Math.cos(e),
                   y: n + t * Math.sin(e)
                }
             }
 
             function mr(t, e, i, n, r) {
                const {
                   x: s,
                   y: o,
                   startAngle: a,
                   pixelMargin: l,
                   innerRadius: c
                } = e, h = Math.max(e.outerRadius + n + i - l, 0), d = c > 0 ? c + n + i + l : 0;
                let u = 0;
                const f = r - a;
                if (n) {
                   const t = ((c > 0 ? c - n : 0) + (h > 0 ? h - n : 0)) / 2;
                   u = (f - (0 !== t ? f * t / (t + n) : f)) / 2
                }
                const p = (f - Math.max(.001, f * h - i / A) / h) / 2,
                   g = a + p + u,
                   m = r - p - u,
                   {
                      outerStart: b,
                      outerEnd: x,
                      innerStart: y,
                      innerEnd: v
                   } = function(t, e, i, n) {
                      const r = oe(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]),
                         s = (i - e) / 2,
                         o = Math.min(s, n * e / 2),
                         a = t => {
                            const e = (i - Math.min(s, t)) * n / 2;
                            return et(t, 0, Math.min(s, e))
                         };
                      return {
                         outerStart: a(r.outerStart),
                         outerEnd: a(r.outerEnd),
                         innerStart: et(r.innerStart, 0, o),
                         innerEnd: et(r.innerEnd, 0, o)
                      }
                   }(e, d, h, m - g),
                   _ = h - b,
                   w = h - x,
                   k = g + b / _,
                   M = m - x / w,
                   S = d + y,
                   C = d + v,
                   P = g + y / S,
                   O = m - v / C;
                if (t.beginPath(), t.arc(s, o, h, k, M), x > 0) {
                   const e = gr(w, M, s, o);
                   t.arc(e.x, e.y, x, M, m + j)
                }
                const D = gr(C, m, s, o);
                if (t.lineTo(D.x, D.y), v > 0) {
                   const e = gr(C, O, s, o);
                   t.arc(e.x, e.y, v, m + j, O + Math.PI)
                }
                if (t.arc(s, o, d, m - v / d, g + y / d, !0), y > 0) {
                   const e = gr(S, P, s, o);
                   t.arc(e.x, e.y, y, P + Math.PI, g - j)
                }
                const L = gr(_, g, s, o);
                if (t.lineTo(L.x, L.y), b > 0) {
                   const e = gr(_, k, s, o);
                   t.arc(e.x, e.y, b, g - j, k)
                }
                t.closePath()
             }
             Object.defineProperties(dr, {
                defaults: {
                   enumerable: fr,
                   value: Ht
                },
                instances: {
                   enumerable: fr,
                   value: lr
                },
                overrides: {
                   enumerable: fr,
                   value: Nt
                },
                registry: {
                   enumerable: fr,
                   value: Vn
                },
                version: {
                   enumerable: fr,
                   value: "3.7.1"
                },
                getChart: {
                   enumerable: fr,
                   value: cr
                },
                register: {
                   enumerable: fr,
                   value: (...t) => {
                      Vn.add(...t), ur()
                   }
                },
                unregister: {
                   enumerable: fr,
                   value: (...t) => {
                      Vn.remove(...t), ur()
                   }
                }
             });
             class br extends Dn {
                constructor(t) {
                   super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
                }
                inRange(t, e, i) {
                   const n = this.getProps(["x", "y"], i),
                      {
                         angle: r,
                         distance: s
                      } = G(n, {
                         x: t,
                         y: e
                      }),
                      {
                         startAngle: o,
                         endAngle: a,
                         innerRadius: l,
                         outerRadius: c,
                         circumference: h
                      } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                      d = this.options.spacing / 2,
                      u = m(h, a - o) >= R || tt(r, o, a),
                      f = it(s, l + d, c + d);
                   return u && f
                }
                getCenterPoint(t) {
                   const {
                      x: e,
                      y: i,
                      startAngle: n,
                      endAngle: r,
                      innerRadius: s,
                      outerRadius: o
                   } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), {
                      offset: a,
                      spacing: l
                   } = this.options, c = (n + r) / 2, h = (s + o + l + a) / 2;
                   return {
                      x: e + Math.cos(c) * h,
                      y: i + Math.sin(c) * h
                   }
                }
                tooltipPosition(t) {
                   return this.getCenterPoint(t)
                }
                draw(t) {
                   const {
                      options: e,
                      circumference: i
                   } = this, n = (e.offset || 0) / 2, r = (e.spacing || 0) / 2;
                   if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > R ? Math.floor(i / R) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
                   t.save();
                   let s = 0;
                   if (n) {
                      s = n / 2;
                      const e = (this.startAngle + this.endAngle) / 2;
                      t.translate(Math.cos(e) * s, Math.sin(e) * s), this.circumference >= A && (s = n)
                   }
                   t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
                   const o = function(t, e, i, n) {
                      const {
                         fullCircles: r,
                         startAngle: s,
                         circumference: o
                      } = e;
                      let a = e.endAngle;
                      if (r) {
                         mr(t, e, i, n, s + R);
                         for (let e = 0; e < r; ++e) t.fill();
                         isNaN(o) || (a = s + o % R, o % R == 0 && (a += R))
                      }
                      return mr(t, e, i, n, a), t.fill(), a
                   }(t, this, s, r);
                   (function(t, e, i, n, r) {
                      const {
                         options: s
                      } = e, {
                         borderWidth: o,
                         borderJoinStyle: a
                      } = s, l = "inner" === s.borderAlign;
                      o && (l ? (t.lineWidth = 2 * o, t.lineJoin = a || "round") : (t.lineWidth = o, t.lineJoin = a || "bevel"), e.fullCircles && function(t, e, i) {
                         const {
                            x: n,
                            y: r,
                            startAngle: s,
                            pixelMargin: o,
                            fullCircles: a
                         } = e, l = Math.max(e.outerRadius - o, 0), c = e.innerRadius + o;
                         let h;
                         for (i && pr(t, e, s + R), t.beginPath(), t.arc(n, r, c, s + R, s, !0), h = 0; h < a; ++h) t.stroke();
                         for (t.beginPath(), t.arc(n, r, l, s, s + R), h = 0; h < a; ++h) t.stroke()
                      }(t, e, l), l && pr(t, e, r), mr(t, e, i, n, r), t.stroke())
                   })(t, this, s, r, o), t.restore()
                }
             }
 
             function xr(t, e, i = e) {
                t.lineCap = m(i.borderCapStyle, e.borderCapStyle), t.setLineDash(m(i.borderDash, e.borderDash)), t.lineDashOffset = m(i.borderDashOffset, e.borderDashOffset), t.lineJoin = m(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = m(i.borderWidth, e.borderWidth), t.strokeStyle = m(i.borderColor, e.borderColor)
             }
 
             function yr(t, e, i) {
                t.lineTo(i.x, i.y)
             }
 
             function vr(t, e, i = {}) {
                const n = t.length,
                   {
                      start: r = 0,
                      end: s = n - 1
                   } = i,
                   {
                      start: o,
                      end: a
                   } = e,
                   l = Math.max(r, o),
                   c = Math.min(s, a),
                   h = r < o && s < o || r > a && s > a;
                return {
                   count: n,
                   start: l,
                   loop: e.loop,
                   ilen: c < l && !h ? n + c - l : c - l
                }
             }
 
             function _r(t, e, i, n) {
                const {
                   points: r,
                   options: s
                } = e, {
                   count: o,
                   start: a,
                   loop: l,
                   ilen: c
                } = vr(r, i, n), h = function(t) {
                   return t.stepped ? Jt : t.tension || "monotone" === t.cubicInterpolationMode ? Qt : yr
                }(s);
                let d, u, f, {
                   move: p = !0,
                   reverse: g
                } = n || {};
                for (d = 0; d <= c; ++d) u = r[(a + (g ? c - d : d)) % o], u.skip || (p ? (t.moveTo(u.x, u.y), p = !1) : h(t, f, u, g, s.stepped), f = u);
                return l && (u = r[(a + (g ? c : 0)) % o], h(t, f, u, g, s.stepped)), !!l
             }
 
             function wr(t, e, i, n) {
                const r = e.points,
                   {
                      count: s,
                      start: o,
                      ilen: a
                   } = vr(r, i, n),
                   {
                      move: l = !0,
                      reverse: c
                   } = n || {};
                let h, d, u, f, p, g, m = 0,
                   b = 0;
                const x = t => (o + (c ? a - t : t)) % s,
                   y = () => {
                      f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g))
                   };
                for (l && (d = r[x(0)], t.moveTo(d.x, d.y)), h = 0; h <= a; ++h) {
                   if (d = r[x(h)], d.skip) continue;
                   const e = d.x,
                      i = d.y,
                      n = 0 | e;
                   n === u ? (i < f ? f = i : i > p && (p = i), m = (b * m + e) / ++b) : (y(), t.lineTo(e, i), u = n, b = 0, f = p = i), g = i
                }
                y()
             }
 
             function kr(t) {
                const e = t.options,
                   i = e.borderDash && e.borderDash.length;
                return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? _r : wr
             }
             br.id = "arc", br.defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0
             }, br.defaultRoutes = {
                backgroundColor: "backgroundColor"
             };
             const Mr = "function" == typeof Path2D;
             class Sr extends Dn {
                constructor(t) {
                   super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
                }
                updateControlPoints(t, e) {
                   const i = this.options;
                   if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                      const n = i.spanGaps ? this._loop : this._fullLoop;
                      Ie(this._points, i, t, n, e), this._pointsUpdated = !0
                   }
                }
                set points(t) {
                   this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
                }
                get points() {
                   return this._points
                }
                get segments() {
                   return this._segments || (this._segments = function(t, e) {
                      const i = t.points,
                         n = t.options.spanGaps,
                         r = i.length;
                      if (!r) return [];
                      const s = !!t._loop,
                         {
                            start: o,
                            end: a
                         } = function(t, e, i, n) {
                            let r = 0,
                               s = e - 1;
                            if (i && !n)
                               for (; r < e && !t[r].skip;) r++;
                            for (; r < e && t[r].skip;) r++;
                            for (r %= e, i && (s += r); s > r && t[s % e].skip;) s--;
                            return s %= e, {
                               start: r,
                               end: s
                            }
                         }(i, r, s, n);
                      return function(t, e, i, n) {
                         return n && n.setContext && i ? function(t, e, i, n) {
                            const r = t._chart.getContext(),
                               s = ai(t.options),
                               {
                                  _datasetIndex: o,
                                  options: {
                                     spanGaps: a
                                  }
                               } = t,
                               l = i.length,
                               c = [];
                            let h = s,
                               d = e[0].start,
                               u = d;
 
                            function f(t, e, n, r) {
                               const s = a ? -1 : 1;
                               if (t !== e) {
                                  for (t += l; i[t % l].skip;) t -= s;
                                  for (; i[e % l].skip;) e += s;
                                  t % l != e % l && (c.push({
                                     start: t % l,
                                     end: e % l,
                                     loop: n,
                                     style: r
                                  }), h = r, d = e % l)
                               }
                            }
                            for (const t of e) {
                               d = a ? d : t.start;
                               let e, s = i[d % l];
                               for (u = d + 1; u <= t.end; u++) {
                                  const a = i[u % l];
                                  e = ai(n.setContext(ue(r, {
                                     type: "segment",
                                     p0: s,
                                     p1: a,
                                     p0DataIndex: (u - 1) % l,
                                     p1DataIndex: u % l,
                                     datasetIndex: o
                                  }))), li(e, h) && f(d, u - 1, t.loop, h), s = a, h = e
                               }
                               d < u - 1 && f(d, u - 1, t.loop, h)
                            }
                            return c
                         }(t, e, i, n) : e
                      }(t, !0 === n ? [{
                         start: o,
                         end: a,
                         loop: s
                      }] : function(t, e, i, n) {
                         const r = t.length,
                            s = [];
                         let o, a = e,
                            l = t[e];
                         for (o = e + 1; o <= i; ++o) {
                            const i = t[o % r];
                            i.skip || i.stop ? l.skip || (n = !1, s.push({
                               start: e % r,
                               end: (o - 1) % r,
                               loop: n
                            }), e = a = i.stop ? o : null) : (a = o, l.skip && (e = o)), l = i
                         }
                         return null !== a && s.push({
                            start: e % r,
                            end: a % r,
                            loop: n
                         }), s
                      }(i, o, a < o ? a + r : a, !!t._fullLoop && 0 === o && a === r - 1), i, e)
                   }(this, this.options.segment))
                }
                first() {
                   const t = this.segments,
                      e = this.points;
                   return t.length && e[t[0].start]
                }
                last() {
                   const t = this.segments,
                      e = this.points,
                      i = t.length;
                   return i && e[t[i - 1].end]
                }
                interpolate(t, e) {
                   const i = this.options,
                      n = t[e],
                      r = this.points,
                      s = oi(this, {
                         property: e,
                         start: n,
                         end: n
                      });
                   if (!s.length) return;
                   const o = [],
                      a = function(t) {
                         return t.stepped ? Ge : t.tension || "monotone" === t.cubicInterpolationMode ? Ke : Ze
                      }(i);
                   let l, c;
                   for (l = 0, c = s.length; l < c; ++l) {
                      const {
                         start: c,
                         end: h
                      } = s[l], d = r[c], u = r[h];
                      if (d === u) {
                         o.push(d);
                         continue
                      }
                      const f = a(d, u, Math.abs((n - d[e]) / (u[e] - d[e])), i.stepped);
                      f[e] = t[e], o.push(f)
                   }
                   return 1 === o.length ? o[0] : o
                }
                pathSegment(t, e, i) {
                   return kr(this)(t, this, e, i)
                }
                path(t, e, i) {
                   const n = this.segments,
                      r = kr(this);
                   let s = this._loop;
                   e = e || 0, i = i || this.points.length - e;
                   for (const o of n) s &= r(t, this, o, {
                      start: e,
                      end: e + i - 1
                   });
                   return !!s
                }
                draw(t, e, i, n) {
                   const r = this.options || {};
                   (this.points || []).length && r.borderWidth && (t.save(), function(t, e, i, n) {
                      Mr && !e.options.segment ? function(t, e, i, n) {
                         let r = e._path;
                         r || (r = e._path = new Path2D, e.path(r, i, n) && r.closePath()), xr(t, e.options), t.stroke(r)
                      }(t, e, i, n) : function(t, e, i, n) {
                         const {
                            segments: r,
                            options: s
                         } = e, o = kr(e);
                         for (const a of r) xr(t, s, a.style), t.beginPath(), o(t, e, a, {
                            start: i,
                            end: i + n - 1
                         }) && t.closePath(), t.stroke()
                      }(t, e, i, n)
                   }(t, this, i, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
                }
             }
 
             function Cr(t, e, i, n) {
                const r = t.options,
                   {
                      [i]: s
                   } = t.getProps([i], n);
                return Math.abs(e - s) < r.radius + r.hitRadius
             }
             Sr.id = "line", Sr.defaults = {
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                borderWidth: 3,
                capBezierPoints: !0,
                cubicInterpolationMode: "default",
                fill: !1,
                spanGaps: !1,
                stepped: !1,
                tension: 0
             }, Sr.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
             }, Sr.descriptors = {
                _scriptable: !0,
                _indexable: t => "borderDash" !== t && "fill" !== t
             };
             class Pr extends Dn {
                constructor(t) {
                   super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
                }
                inRange(t, e, i) {
                   const n = this.options,
                      {
                         x: r,
                         y: s
                      } = this.getProps(["x", "y"], i);
                   return Math.pow(t - r, 2) + Math.pow(e - s, 2) < Math.pow(n.hitRadius + n.radius, 2)
                }
                inXRange(t, e) {
                   return Cr(this, t, "x", e)
                }
                inYRange(t, e) {
                   return Cr(this, t, "y", e)
                }
                getCenterPoint(t) {
                   const {
                      x: e,
                      y: i
                   } = this.getProps(["x", "y"], t);
                   return {
                      x: e,
                      y: i
                   }
                }
                size(t) {
                   let e = (t = t || this.options || {}).radius || 0;
                   return e = Math.max(e, e && t.hoverRadius || 0), 2 * (e + (e && t.borderWidth || 0))
                }
                draw(t, e) {
                   const i = this.options;
                   this.skip || i.radius < .1 || !Zt(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Xt(t, i, this.x, this.y))
                }
                getRange() {
                   const t = this.options || {};
                   return t.radius + t.hitRadius
                }
             }
 
             function Or(t, e) {
                const {
                   x: i,
                   y: n,
                   base: r,
                   width: s,
                   height: o
                } = t.getProps(["x", "y", "base", "width", "height"], e);
                let a, l, c, h, d;
                return t.horizontal ? (d = o / 2, a = Math.min(i, r), l = Math.max(i, r), c = n - d, h = n + d) : (d = s / 2, a = i - d, l = i + d, c = Math.min(n, r), h = Math.max(n, r)), {
                   left: a,
                   top: c,
                   right: l,
                   bottom: h
                }
             }
 
             function Dr(t, e, i, n) {
                return t ? 0 : et(e, i, n)
             }
 
             function Lr(t, e, i, n) {
                const r = null === e,
                   s = null === i,
                   o = t && !(r && s) && Or(t, n);
                return o && (r || it(e, o.left, o.right)) && (s || it(i, o.top, o.bottom))
             }
 
             function Er(t, e) {
                t.rect(e.x, e.y, e.w, e.h)
             }
 
             function Tr(t, e, i = {}) {
                const n = t.x !== i.x ? -e : 0,
                   r = t.y !== i.y ? -e : 0,
                   s = (t.x + t.w !== i.x + i.w ? e : 0) - n,
                   o = (t.y + t.h !== i.y + i.h ? e : 0) - r;
                return {
                   x: t.x + n,
                   y: t.y + r,
                   w: t.w + s,
                   h: t.h + o,
                   radius: t.radius
                }
             }
             Pr.id = "point", Pr.defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
             }, Pr.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
             };
             class Ar extends Dn {
                constructor(t) {
                   super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
                }
                draw(t) {
                   const {
                      inflateAmount: e,
                      options: {
                         borderColor: i,
                         backgroundColor: n
                      }
                   } = this, {
                      inner: r,
                      outer: s
                   } = function(t) {
                      const e = Or(t),
                         i = e.right - e.left,
                         n = e.bottom - e.top,
                         r = function(t, e, i) {
                            const n = t.options.borderWidth,
                               r = t.borderSkipped,
                               s = ae(n);
                            return {
                               t: Dr(r.top, s.top, 0, i),
                               r: Dr(r.right, s.right, 0, e),
                               b: Dr(r.bottom, s.bottom, 0, i),
                               l: Dr(r.left, s.left, 0, e)
                            }
                         }(t, i / 2, n / 2),
                         s = function(t, e, i) {
                            const {
                               enableBorderRadius: n
                            } = t.getProps(["enableBorderRadius"]), r = t.options.borderRadius, s = le(r), o = Math.min(e, i), a = t.borderSkipped, l = n || f(r);
                            return {
                               topLeft: Dr(!l || a.top || a.left, s.topLeft, 0, o),
                               topRight: Dr(!l || a.top || a.right, s.topRight, 0, o),
                               bottomLeft: Dr(!l || a.bottom || a.left, s.bottomLeft, 0, o),
                               bottomRight: Dr(!l || a.bottom || a.right, s.bottomRight, 0, o)
                            }
                         }(t, i / 2, n / 2);
                      return {
                         outer: {
                            x: e.left,
                            y: e.top,
                            w: i,
                            h: n,
                            radius: s
                         },
                         inner: {
                            x: e.left + r.l,
                            y: e.top + r.t,
                            w: i - r.l - r.r,
                            h: n - r.t - r.b,
                            radius: {
                               topLeft: Math.max(0, s.topLeft - Math.max(r.t, r.l)),
                               topRight: Math.max(0, s.topRight - Math.max(r.t, r.r)),
                               bottomLeft: Math.max(0, s.bottomLeft - Math.max(r.b, r.l)),
                               bottomRight: Math.max(0, s.bottomRight - Math.max(r.b, r.r))
                            }
                         }
                      }
                   }(this), o = (a = s.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? ie : Er;
                   var a;
                   t.save(), s.w === r.w && s.h === r.h || (t.beginPath(), o(t, Tr(s, e, r)), t.clip(), o(t, Tr(r, -e, s)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), o(t, Tr(r, e)), t.fillStyle = n, t.fill(), t.restore()
                }
                inRange(t, e, i) {
                   return Lr(this, t, e, i)
                }
                inXRange(t, e) {
                   return Lr(this, t, null, e)
                }
                inYRange(t, e) {
                   return Lr(this, null, t, e)
                }
                getCenterPoint(t) {
                   const {
                      x: e,
                      y: i,
                      base: n,
                      horizontal: r
                   } = this.getProps(["x", "y", "base", "horizontal"], t);
                   return {
                      x: r ? (e + n) / 2 : e,
                      y: r ? i : (i + n) / 2
                   }
                }
                getRange(t) {
                   return "x" === t ? this.width / 2 : this.height / 2
                }
             }
             Ar.id = "bar", Ar.defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
             }, Ar.defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
             };
             var Rr = Object.freeze({
                __proto__: null,
                ArcElement: br,
                LineElement: Sr,
                PointElement: Pr,
                BarElement: Ar
             });
 
             function zr(t) {
                if (t._decimated) {
                   const e = t._data;
                   delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
                      value: e
                   })
                }
             }
 
             function Fr(t) {
                t.data.datasets.forEach((t => {
                   zr(t)
                }))
             }
             var Ir = {
                id: "decimation",
                defaults: {
                   algorithm: "min-max",
                   enabled: !1
                },
                beforeElementsUpdate: (t, e, i) => {
                   if (!i.enabled) return void Fr(t);
                   const n = t.width;
                   t.data.datasets.forEach(((e, r) => {
                      const {
                         _data: s,
                         indexAxis: o
                      } = e, a = t.getDatasetMeta(r), l = s || e.data;
                      if ("y" === de([o, t.options.indexAxis])) return;
                      if ("line" !== a.type) return;
                      const c = t.scales[a.xAxisID];
                      if ("linear" !== c.type && "time" !== c.type) return;
                      if (t.options.parsing) return;
                      let h, {
                         start: u,
                         count: f
                      } = function(t, e) {
                         const i = e.length;
                         let n, r = 0;
                         const {
                            iScale: s
                         } = t, {
                            min: o,
                            max: a,
                            minDefined: l,
                            maxDefined: c
                         } = s.getUserBounds();
                         return l && (r = et(pe(e, s.axis, o).lo, 0, i - 1)), n = c ? et(pe(e, s.axis, a).hi + 1, r, i) - r : i - r, {
                            start: r,
                            count: n
                         }
                      }(a, l);
                      if (f <= (i.threshold || 4 * n)) zr(e);
                      else {
                         switch (d(s) && (e._data = l, delete e.data, Object.defineProperty(e, "data", {
                               configurable: !0,
                               enumerable: !0,
                               get: function() {
                                  return this._decimated
                               },
                               set: function(t) {
                                  this._data = t
                               }
                            })), i.algorithm) {
                            case "lttb":
                               h = function(t, e, i, n, r) {
                                  const s = r.samples || n;
                                  if (s >= i) return t.slice(e, e + i);
                                  const o = [],
                                     a = (i - 2) / (s - 2);
                                  let l = 0;
                                  const c = e + i - 1;
                                  let h, d, u, f, p, g = e;
                                  for (o[l++] = t[g], h = 0; h < s - 2; h++) {
                                     let n, r = 0,
                                        s = 0;
                                     const c = Math.floor((h + 1) * a) + 1 + e,
                                        m = Math.min(Math.floor((h + 2) * a) + 1, i) + e,
                                        b = m - c;
                                     for (n = c; n < m; n++) r += t[n].x, s += t[n].y;
                                     r /= b, s /= b;
                                     const x = Math.floor(h * a) + 1 + e,
                                        y = Math.min(Math.floor((h + 1) * a) + 1, i) + e,
                                        {
                                           x: v,
                                           y: _
                                        } = t[g];
                                     for (u = f = -1, n = x; n < y; n++) f = .5 * Math.abs((v - r) * (t[n].y - _) - (v - t[n].x) * (s - _)), f > u && (u = f, d = t[n], p = n);
                                     o[l++] = d, g = p
                                  }
                                  return o[l++] = t[c], o
                               }(l, u, f, n, i);
                               break;
                            case "min-max":
                               h = function(t, e, i, n) {
                                  let r, s, o, a, l, c, h, u, f, p, g = 0,
                                     m = 0;
                                  const b = [],
                                     x = e + i - 1,
                                     y = t[e].x,
                                     v = t[x].x - y;
                                  for (r = e; r < e + i; ++r) {
                                     s = t[r], o = (s.x - y) / v * n, a = s.y;
                                     const e = 0 | o;
                                     if (e === l) a < f ? (f = a, c = r) : a > p && (p = a, h = r), g = (m * g + s.x) / ++m;
                                     else {
                                        const i = r - 1;
                                        if (!d(c) && !d(h)) {
                                           const e = Math.min(c, h),
                                              n = Math.max(c, h);
                                           e !== u && e !== i && b.push({
                                              ...t[e],
                                              x: g
                                           }), n !== u && n !== i && b.push({
                                              ...t[n],
                                              x: g
                                           })
                                        }
                                        r > 0 && i !== u && b.push(t[i]), b.push(s), l = e, m = 0, f = p = a, c = h = u = r
                                     }
                                  }
                                  return b
                               }(l, u, f, n);
                               break;
                            default:
                               throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)
                         }
                         e._decimated = h
                      }
                   }))
                },
                destroy(t) {
                   Fr(t)
                }
             };
 
             function jr(t, e, i) {
                const n = function(t) {
                   const e = t.options,
                      i = e.fill;
                   let n = m(i && i.target, i);
                   return void 0 === n && (n = !!e.backgroundColor), !1 !== n && null !== n && (!0 === n ? "origin" : n)
                }(t);
                if (f(n)) return !isNaN(n.value) && n;
                let r = parseFloat(n);
                return p(r) && Math.floor(r) === r ? ("-" !== n[0] && "+" !== n[0] || (r = e + r), !(r === e || r < 0 || r >= i) && r) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n
             }
             class Nr {
                constructor(t) {
                   this.x = t.x, this.y = t.y, this.radius = t.radius
                }
                pathSegment(t, e, i) {
                   const {
                      x: n,
                      y: r,
                      radius: s
                   } = this;
                   return e = e || {
                      start: 0,
                      end: R
                   }, t.arc(n, r, s, e.end, e.start, !0), !i.bounds
                }
                interpolate(t) {
                   const {
                      x: e,
                      y: i,
                      radius: n
                   } = this, r = t.angle;
                   return {
                      x: e + Math.cos(r) * n,
                      y: i + Math.sin(r) * n,
                      angle: r
                   }
                }
             }
 
             function Br(t, e, i) {
                for (; e > t; e--) {
                   const t = i[e];
                   if (!isNaN(t.x) && !isNaN(t.y)) break
                }
                return e
             }
 
             function Vr(t, e, i) {
                const n = [];
                for (let r = 0; r < i.length; r++) {
                   const s = i[r],
                      {
                         first: o,
                         last: a,
                         point: l
                      } = Wr(s, e, "x");
                   if (!(!l || o && a))
                      if (o) n.unshift(l);
                      else if (t.push(l), !a) break
                }
                t.push(...n)
             }
 
             function Wr(t, e, i) {
                const n = t.interpolate(e, i);
                if (!n) return {};
                const r = n[i],
                   s = t.segments,
                   o = t.points;
                let a = !1,
                   l = !1;
                for (let t = 0; t < s.length; t++) {
                   const e = s[t],
                      n = o[e.start][i],
                      c = o[e.end][i];
                   if (it(r, n, c)) {
                      a = r === n, l = r === c;
                      break
                   }
                }
                return {
                   first: a,
                   last: l,
                   point: n
                }
             }
 
             function Hr(t) {
                const {
                   chart: e,
                   fill: i,
                   line: n
                } = t;
                if (p(i)) return function(t, e) {
                   const i = t.getDatasetMeta(e);
                   return i && t.isDatasetVisible(e) ? i.dataset : null
                }(e, i);
                if ("stack" === i) return function(t) {
                   const {
                      scale: e,
                      index: i,
                      line: n
                   } = t, r = [], s = n.segments, o = n.points, a = function(t, e) {
                      const i = [],
                         n = t.getMatchingVisibleMetas("line");
                      for (let t = 0; t < n.length; t++) {
                         const r = n[t];
                         if (r.index === e) break;
                         r.hidden || i.unshift(r.dataset)
                      }
                      return i
                   }(e, i);
                   a.push($r({
                      x: null,
                      y: e.bottom
                   }, n));
                   for (let t = 0; t < s.length; t++) {
                      const e = s[t];
                      for (let t = e.start; t <= e.end; t++) Vr(r, o[t], a)
                   }
                   return new Sr({
                      points: r,
                      options: {}
                   })
                }(t);
                if ("shape" === i) return !0;
                const r = function(t) {
                   return (t.scale || {}).getPointPositionForValue ? function(t) {
                      const {
                         scale: e,
                         fill: i
                      } = t, n = e.options, r = e.getLabels().length, s = [], o = n.reverse ? e.max : e.min, a = n.reverse ? e.min : e.max;
                      let l, c, h;
                      if (h = "start" === i ? o : "end" === i ? a : f(i) ? i.value : e.getBaseValue(), n.grid.circular) return c = e.getPointPositionForValue(0, o), new Nr({
                         x: c.x,
                         y: c.y,
                         radius: e.getDistanceFromCenterForValue(h)
                      });
                      for (l = 0; l < r; ++l) s.push(e.getPointPositionForValue(l, h));
                      return s
                   }(t) : function(t) {
                      const {
                         scale: e = {},
                         fill: i
                      } = t;
                      let n, r = null;
                      return "start" === i ? r = e.bottom : "end" === i ? r = e.top : f(i) ? r = e.getPixelForValue(i.value) : e.getBasePixel && (r = e.getBasePixel()), p(r) ? (n = e.isHorizontal(), {
                         x: n ? r : null,
                         y: n ? null : r
                      }) : null
                   }(t)
                }(t);
                return r instanceof Nr ? r : $r(r, n)
             }
 
             function $r(t, e) {
                let i = [],
                   n = !1;
                return u(t) ? (n = !0, i = t) : i = function(t, e) {
                   const {
                      x: i = null,
                      y: n = null
                   } = t || {}, r = e.points, s = [];
                   return e.segments.forEach((({
                      start: t,
                      end: e
                   }) => {
                      e = Br(t, e, r);
                      const o = r[t],
                         a = r[e];
                      null !== n ? (s.push({
                         x: o.x,
                         y: n
                      }), s.push({
                         x: a.x,
                         y: n
                      })) : null !== i && (s.push({
                         x: i,
                         y: o.y
                      }), s.push({
                         x: i,
                         y: a.y
                      }))
                   })), s
                }(t, e), i.length ? new Sr({
                   points: i,
                   options: {
                      tension: 0
                   },
                   _loop: n,
                   _fullLoop: n
                }) : null
             }
 
             function Ur(t, e, i) {
                let n = t[e].fill;
                const r = [e];
                let s;
                if (!i) return n;
                for (; !1 !== n && -1 === r.indexOf(n);) {
                   if (!p(n)) return n;
                   if (s = t[n], !s) return !1;
                   if (s.visible) return n;
                   r.push(n), n = s.fill
                }
                return !1
             }
 
             function qr(t, e, i) {
                const {
                   segments: n,
                   points: r
                } = e;
                let s = !0,
                   o = !1;
                t.beginPath();
                for (const a of n) {
                   const {
                      start: n,
                      end: l
                   } = a, c = r[n], h = r[Br(n, l, r)];
                   s ? (t.moveTo(c.x, c.y), s = !1) : (t.lineTo(c.x, i), t.lineTo(c.x, c.y)), o = !!e.pathSegment(t, a, {
                      move: o
                   }), o ? t.closePath() : t.lineTo(h.x, i)
                }
                t.lineTo(e.first().x, i), t.closePath(), t.clip()
             }
 
             function Yr(t, e, i, n) {
                if (n) return;
                let r = e[t],
                   s = i[t];
                return "angle" === t && (r = Q(r), s = Q(s)), {
                   property: t,
                   start: r,
                   end: s
                }
             }
 
             function Xr(t, e, i, n) {
                return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
             }
 
             function Zr(t, e, i) {
                const {
                   top: n,
                   bottom: r
                } = e.chart.chartArea, {
                   property: s,
                   start: o,
                   end: a
                } = i || {};
                "x" === s && (t.beginPath(), t.rect(o, n, a - o, r - n), t.clip())
             }
 
             function Gr(t, e, i, n) {
                const r = e.interpolate(i, n);
                r && t.lineTo(r.x, r.y)
             }
 
             function Kr(t, e) {
                const {
                   line: i,
                   target: n,
                   property: r,
                   color: s,
                   scale: o
                } = e, a = function(t, e, i) {
                   const n = t.segments,
                      r = t.points,
                      s = e.points,
                      o = [];
                   for (const t of n) {
                      let {
                         start: n,
                         end: a
                      } = t;
                      a = Br(n, a, r);
                      const l = Yr(i, r[n], r[a], t.loop);
                      if (!e.segments) {
                         o.push({
                            source: t,
                            target: l,
                            start: r[n],
                            end: r[a]
                         });
                         continue
                      }
                      const c = oi(e, l);
                      for (const e of c) {
                         const n = Yr(i, s[e.start], s[e.end], e.loop),
                            a = si(t, r, n);
                         for (const t of a) o.push({
                            source: t,
                            target: e,
                            start: {
                               [i]: Xr(l, n, "start", Math.max)
                            },
                            end: {
                               [i]: Xr(l, n, "end", Math.min)
                            }
                         })
                      }
                   }
                   return o
                }(i, n, r);
                for (const {
                      source: e,
                      target: l,
                      start: c,
                      end: h
                   }
                   of a) {
                   const {
                      style: {
                         backgroundColor: a = s
                      } = {}
                   } = e, d = !0 !== n;
                   t.save(), t.fillStyle = a, Zr(t, o, d && Yr(r, c, h)), t.beginPath();
                   const u = !!i.pathSegment(t, e);
                   let f;
                   if (d) {
                      u ? t.closePath() : Gr(t, n, h, r);
                      const e = !!n.pathSegment(t, l, {
                         move: u,
                         reverse: !0
                      });
                      f = u && e, f || Gr(t, n, c, r)
                   }
                   t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore()
                }
             }
 
             function Jr(t, e, i) {
                const n = Hr(e),
                   {
                      line: r,
                      scale: s,
                      axis: o
                   } = e,
                   a = r.options,
                   l = a.fill,
                   c = a.backgroundColor,
                   {
                      above: h = c,
                      below: d = c
                   } = l || {};
                n && r.points.length && (Gt(t, i), function(t, e) {
                   const {
                      line: i,
                      target: n,
                      above: r,
                      below: s,
                      area: o,
                      scale: a
                   } = e, l = i._loop ? "angle" : e.axis;
                   t.save(), "x" === l && s !== r && (qr(t, n, o.top), Kr(t, {
                      line: i,
                      target: n,
                      color: r,
                      scale: a,
                      property: l
                   }), t.restore(), t.save(), qr(t, n, o.bottom)), Kr(t, {
                      line: i,
                      target: n,
                      color: s,
                      scale: a,
                      property: l
                   }), t.restore()
                }(t, {
                   line: r,
                   target: n,
                   above: h,
                   below: d,
                   area: i,
                   scale: s,
                   axis: o
                }), Kt(t))
             }
             var Qr = {
                id: "filler",
                afterDatasetsUpdate(t, e, i) {
                   const n = (t.data.datasets || []).length,
                      r = [];
                   let s, o, a, l;
                   for (o = 0; o < n; ++o) s = t.getDatasetMeta(o), a = s.dataset, l = null, a && a.options && a instanceof Sr && (l = {
                      visible: t.isDatasetVisible(o),
                      index: o,
                      fill: jr(a, o, n),
                      chart: t,
                      axis: s.controller.options.indexAxis,
                      scale: s.vScale,
                      line: a
                   }), s.$filler = l, r.push(l);
                   for (o = 0; o < n; ++o) l = r[o], l && !1 !== l.fill && (l.fill = Ur(r, o, i.propagate))
                },
                beforeDraw(t, e, i) {
                   const n = "beforeDraw" === i.drawTime,
                      r = t.getSortedVisibleDatasetMetas(),
                      s = t.chartArea;
                   for (let e = r.length - 1; e >= 0; --e) {
                      const i = r[e].$filler;
                      i && (i.line.updateControlPoints(s, i.axis), n && Jr(t.ctx, i, s))
                   }
                },
                beforeDatasetsDraw(t, e, i) {
                   if ("beforeDatasetsDraw" !== i.drawTime) return;
                   const n = t.getSortedVisibleDatasetMetas();
                   for (let e = n.length - 1; e >= 0; --e) {
                      const i = n[e].$filler;
                      i && Jr(t.ctx, i, t.chartArea)
                   }
                },
                beforeDatasetDraw(t, e, i) {
                   const n = e.meta.$filler;
                   n && !1 !== n.fill && "beforeDatasetDraw" === i.drawTime && Jr(t.ctx, n, t.chartArea)
                },
                defaults: {
                   propagate: !0,
                   drawTime: "beforeDatasetDraw"
                }
             };
             const ts = (t, e) => {
                let {
                   boxHeight: i = e,
                   boxWidth: n = e
                } = t;
                return t.usePointStyle && (i = Math.min(i, e), n = Math.min(n, e)), {
                   boxWidth: n,
                   boxHeight: i,
                   itemHeight: Math.max(e, i)
                }
             };
             class es extends Dn {
                constructor(t) {
                   super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
                }
                update(t, e, i) {
                   this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit()
                }
                setDimensions() {
                   this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
                }
                buildLabels() {
                   const t = this.options.labels || {};
                   let e = x(t.generateLabels, [this.chart], this) || [];
                   t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e
                }
                fit() {
                   const {
                      options: t,
                      ctx: e
                   } = this;
                   if (!t.display) return void(this.width = this.height = 0);
                   const i = t.labels,
                      n = he(i.font),
                      r = n.size,
                      s = this._computeTitleHeight(),
                      {
                         boxWidth: o,
                         itemHeight: a
                      } = ts(i, r);
                   let l, c;
                   e.font = n.string, this.isHorizontal() ? (l = this.maxWidth, c = this._fitRows(s, r, o, a) + 10) : (c = this.maxHeight, l = this._fitCols(s, r, o, a) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(c, t.maxHeight || this.maxHeight)
                }
                _fitRows(t, e, i, n) {
                   const {
                      ctx: r,
                      maxWidth: s,
                      options: {
                         labels: {
                            padding: o
                         }
                      }
                   } = this, a = this.legendHitBoxes = [], l = this.lineWidths = [0], c = n + o;
                   let h = t;
                   r.textAlign = "left", r.textBaseline = "middle";
                   let d = -1,
                      u = -c;
                   return this.legendItems.forEach(((t, f) => {
                      const p = i + e / 2 + r.measureText(t.text).width;
                      (0 === f || l[l.length - 1] + p + 2 * o > s) && (h += c, l[l.length - (f > 0 ? 0 : 1)] = 0, u += c, d++), a[f] = {
                         left: 0,
                         top: u,
                         row: d,
                         width: p,
                         height: n
                      }, l[l.length - 1] += p + o
                   })), h
                }
                _fitCols(t, e, i, n) {
                   const {
                      ctx: r,
                      maxHeight: s,
                      options: {
                         labels: {
                            padding: o
                         }
                      }
                   } = this, a = this.legendHitBoxes = [], l = this.columnSizes = [], c = s - t;
                   let h = o,
                      d = 0,
                      u = 0,
                      f = 0,
                      p = 0;
                   return this.legendItems.forEach(((t, s) => {
                      const g = i + e / 2 + r.measureText(t.text).width;
                      s > 0 && u + n + 2 * o > c && (h += d + o, l.push({
                         width: d,
                         height: u
                      }), f += d + o, p++, d = u = 0), a[s] = {
                         left: f,
                         top: u,
                         col: p,
                         width: g,
                         height: n
                      }, d = Math.max(d, g), u += n + o
                   })), h += d, l.push({
                      width: d,
                      height: u
                   }), h
                }
                adjustHitBoxes() {
                   if (!this.options.display) return;
                   const t = this._computeTitleHeight(),
                      {
                         legendHitBoxes: e,
                         options: {
                            align: i,
                            labels: {
                               padding: n
                            },
                            rtl: r
                         }
                      } = this,
                      s = ti(r, this.left, this.width);
                   if (this.isHorizontal()) {
                      let r = 0,
                         o = l(i, this.left + n, this.right - this.lineWidths[r]);
                      for (const a of e) r !== a.row && (r = a.row, o = l(i, this.left + n, this.right - this.lineWidths[r])), a.top += this.top + t + n, a.left = s.leftForLtr(s.x(o), a.width), o += a.width + n
                   } else {
                      let r = 0,
                         o = l(i, this.top + t + n, this.bottom - this.columnSizes[r].height);
                      for (const a of e) a.col !== r && (r = a.col, o = l(i, this.top + t + n, this.bottom - this.columnSizes[r].height)), a.top = o, a.left += this.left + n, a.left = s.leftForLtr(s.x(a.left), a.width), o += a.height + n
                   }
                }
                isHorizontal() {
                   return "top" === this.options.position || "bottom" === this.options.position
                }
                draw() {
                   if (this.options.display) {
                      const t = this.ctx;
                      Gt(t, this), this._draw(), Kt(t)
                   }
                }
                _draw() {
                   const {
                      options: t,
                      columnSizes: e,
                      lineWidths: i,
                      ctx: n
                   } = this, {
                      align: r,
                      labels: s
                   } = t, o = Ht.color, a = ti(t.rtl, this.left, this.width), c = he(s.font), {
                      color: h,
                      padding: d
                   } = s, u = c.size, f = u / 2;
                   let p;
                   this.drawTitle(), n.textAlign = a.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
                   const {
                      boxWidth: g,
                      boxHeight: b,
                      itemHeight: x
                   } = ts(s, u), y = this.isHorizontal(), v = this._computeTitleHeight();
                   p = y ? {
                      x: l(r, this.left + d, this.right - i[0]),
                      y: this.top + d + v,
                      line: 0
                   } : {
                      x: this.left + d,
                      y: l(r, this.top + v + d, this.bottom - e[0].height),
                      line: 0
                   }, ei(this.ctx, t.textDirection);
                   const _ = x + d;
                   this.legendItems.forEach(((w, k) => {
                      n.strokeStyle = w.fontColor || h, n.fillStyle = w.fontColor || h;
                      const M = n.measureText(w.text).width,
                         S = a.textAlign(w.textAlign || (w.textAlign = s.textAlign)),
                         C = g + f + M;
                      let P = p.x,
                         O = p.y;
                      a.setWidth(this.width), y ? k > 0 && P + C + d > this.right && (O = p.y += _, p.line++, P = p.x = l(r, this.left + d, this.right - i[p.line])) : k > 0 && O + _ > this.bottom && (P = p.x = P + e[p.line].width + d, p.line++, O = p.y = l(r, this.top + v + d, this.bottom - e[p.line].height)),
                         function(t, e, i) {
                            if (isNaN(g) || g <= 0 || isNaN(b) || b < 0) return;
                            n.save();
                            const r = m(i.lineWidth, 1);
                            if (n.fillStyle = m(i.fillStyle, o), n.lineCap = m(i.lineCap, "butt"), n.lineDashOffset = m(i.lineDashOffset, 0), n.lineJoin = m(i.lineJoin, "miter"), n.lineWidth = r, n.strokeStyle = m(i.strokeStyle, o), n.setLineDash(m(i.lineDash, [])), s.usePointStyle) {
                               const s = {
                                     radius: g * Math.SQRT2 / 2,
                                     pointStyle: i.pointStyle,
                                     rotation: i.rotation,
                                     borderWidth: r
                                  },
                                  o = a.xPlus(t, g / 2);
                               Xt(n, s, o, e + f)
                            } else {
                               const s = e + Math.max((u - b) / 2, 0),
                                  o = a.leftForLtr(t, g),
                                  l = le(i.borderRadius);
                               n.beginPath(), Object.values(l).some((t => 0 !== t)) ? ie(n, {
                                  x: o,
                                  y: s,
                                  w: g,
                                  h: b,
                                  radius: l
                               }) : n.rect(o, s, g, b), n.fill(), 0 !== r && n.stroke()
                            }
                            n.restore()
                         }(a.x(P), O, w), P = ((t, e, i, n) => t === (n ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e)(S, P + g + f, y ? P + C : this.right, t.rtl),
                         function(t, e, i) {
                            te(n, i.text, t, e + x / 2, c, {
                               strikethrough: i.hidden,
                               textAlign: a.textAlign(i.textAlign)
                            })
                         }(a.x(P), O, w), y ? p.x += C + d : p.y += _
                   })), ii(this.ctx, t.textDirection)
                }
                drawTitle() {
                   const t = this.options,
                      e = t.title,
                      i = he(e.font),
                      n = ce(e.padding);
                   if (!e.display) return;
                   const r = ti(t.rtl, this.left, this.width),
                      s = this.ctx,
                      o = e.position,
                      c = i.size / 2,
                      h = n.top + c;
                   let d, u = this.left,
                      f = this.width;
                   if (this.isHorizontal()) f = Math.max(...this.lineWidths), d = this.top + h, u = l(t.align, u, this.right - f);
                   else {
                      const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0);
                      d = h + l(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
                   }
                   const p = l(o, u, u + f);
                   s.textAlign = r.textAlign(a(o)), s.textBaseline = "middle", s.strokeStyle = e.color, s.fillStyle = e.color, s.font = i.string, te(s, e.text, p, d, i)
                }
                _computeTitleHeight() {
                   const t = this.options.title,
                      e = he(t.font),
                      i = ce(t.padding);
                   return t.display ? e.lineHeight + i.height : 0
                }
                _getLegendItemAt(t, e) {
                   let i, n, r;
                   if (it(t, this.left, this.right) && it(e, this.top, this.bottom))
                      for (r = this.legendHitBoxes, i = 0; i < r.length; ++i)
                         if (n = r[i], it(t, n.left, n.left + n.width) && it(e, n.top, n.top + n.height)) return this.legendItems[i];
                   return null
                }
                handleEvent(t) {
                   const e = this.options;
                   if (! function(t, e) {
                         return !("mousemove" !== t || !e.onHover && !e.onLeave) || !(!e.onClick || "click" !== t && "mouseup" !== t)
                      }(t.type, e)) return;
                   const i = this._getLegendItemAt(t.x, t.y);
                   if ("mousemove" === t.type) {
                      const s = this._hoveredItem,
                         o = (r = i, null !== (n = s) && null !== r && n.datasetIndex === r.datasetIndex && n.index === r.index);
                      s && !o && x(e.onLeave, [t, s, this], this), this._hoveredItem = i, i && !o && x(e.onHover, [t, i, this], this)
                   } else i && x(e.onClick, [t, i, this], this);
                   var n, r
                }
             }
             var is = {
                id: "legend",
                _element: es,
                start(t, e, i) {
                   const n = t.legend = new es({
                      ctx: t.ctx,
                      options: i,
                      chart: t
                   });
                   un.configure(t, n, i), un.addBox(t, n)
                },
                stop(t) {
                   un.removeBox(t, t.legend), delete t.legend
                },
                beforeUpdate(t, e, i) {
                   const n = t.legend;
                   un.configure(t, n, i), n.options = i
                },
                afterUpdate(t) {
                   const e = t.legend;
                   e.buildLabels(), e.adjustHitBoxes()
                },
                afterEvent(t, e) {
                   e.replay || t.legend.handleEvent(e.event)
                },
                defaults: {
                   display: !0,
                   position: "top",
                   align: "center",
                   fullSize: !0,
                   reverse: !1,
                   weight: 1e3,
                   onClick(t, e, i) {
                      const n = e.datasetIndex,
                         r = i.chart;
                      r.isDatasetVisible(n) ? (r.hide(n), e.hidden = !0) : (r.show(n), e.hidden = !1)
                   },
                   onHover: null,
                   onLeave: null,
                   labels: {
                      color: t => t.chart.options.color,
                      boxWidth: 40,
                      padding: 10,
                      generateLabels(t) {
                         const e = t.data.datasets,
                            {
                               labels: {
                                  usePointStyle: i,
                                  pointStyle: n,
                                  textAlign: r,
                                  color: s
                               }
                            } = t.legend.options;
                         return t._getSortedDatasetMetas().map((t => {
                            const o = t.controller.getStyle(i ? 0 : void 0),
                               a = ce(o.borderWidth);
                            return {
                               text: e[t.index].label,
                               fillStyle: o.backgroundColor,
                               fontColor: s,
                               hidden: !t.visible,
                               lineCap: o.borderCapStyle,
                               lineDash: o.borderDash,
                               lineDashOffset: o.borderDashOffset,
                               lineJoin: o.borderJoinStyle,
                               lineWidth: (a.width + a.height) / 4,
                               strokeStyle: o.borderColor,
                               pointStyle: n || o.pointStyle,
                               rotation: o.rotation,
                               textAlign: r || o.textAlign,
                               borderRadius: 0,
                               datasetIndex: t.index
                            }
                         }), this)
                      }
                   },
                   title: {
                      color: t => t.chart.options.color,
                      display: !1,
                      position: "center",
                      text: ""
                   }
                },
                descriptors: {
                   _scriptable: t => !t.startsWith("on"),
                   labels: {
                      _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
                   }
                }
             };
             class ns extends Dn {
                constructor(t) {
                   super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
                }
                update(t, e) {
                   const i = this.options;
                   if (this.left = 0, this.top = 0, !i.display) return void(this.width = this.height = this.right = this.bottom = 0);
                   this.width = this.right = t, this.height = this.bottom = e;
                   const n = u(i.text) ? i.text.length : 1;
                   this._padding = ce(i.padding);
                   const r = n * he(i.font).lineHeight + this._padding.height;
                   this.isHorizontal() ? this.height = r : this.width = r
                }
                isHorizontal() {
                   const t = this.options.position;
                   return "top" === t || "bottom" === t
                }
                _drawArgs(t) {
                   const {
                      top: e,
                      left: i,
                      bottom: n,
                      right: r,
                      options: s
                   } = this, o = s.align;
                   let a, c, h, d = 0;
                   return this.isHorizontal() ? (c = l(o, i, r), h = e + t, a = r - i) : ("left" === s.position ? (c = i + t, h = l(o, n, e), d = -.5 * A) : (c = r - t, h = l(o, e, n), d = .5 * A), a = n - e), {
                      titleX: c,
                      titleY: h,
                      maxWidth: a,
                      rotation: d
                   }
                }
                draw() {
                   const t = this.ctx,
                      e = this.options;
                   if (!e.display) return;
                   const i = he(e.font),
                      n = i.lineHeight / 2 + this._padding.top,
                      {
                         titleX: r,
                         titleY: s,
                         maxWidth: o,
                         rotation: l
                      } = this._drawArgs(n);
                   te(t, e.text, 0, 0, i, {
                      color: e.color,
                      maxWidth: o,
                      rotation: l,
                      textAlign: a(e.align),
                      textBaseline: "middle",
                      translation: [r, s]
                   })
                }
             }
             var rs = {
                id: "title",
                _element: ns,
                start(t, e, i) {
                   ! function(t, e) {
                      const i = new ns({
                         ctx: t.ctx,
                         options: e,
                         chart: t
                      });
                      un.configure(t, i, e), un.addBox(t, i), t.titleBlock = i
                   }(t, i)
                },
                stop(t) {
                   const e = t.titleBlock;
                   un.removeBox(t, e), delete t.titleBlock
                },
                beforeUpdate(t, e, i) {
                   const n = t.titleBlock;
                   un.configure(t, n, i), n.options = i
                },
                defaults: {
                   align: "center",
                   display: !1,
                   font: {
                      weight: "bold"
                   },
                   fullSize: !0,
                   padding: 10,
                   position: "top",
                   text: "",
                   weight: 2e3
                },
                defaultRoutes: {
                   color: "color"
                },
                descriptors: {
                   _scriptable: !0,
                   _indexable: !1
                }
             };
             const ss = new WeakMap;
             var os = {
                id: "subtitle",
                start(t, e, i) {
                   const n = new ns({
                      ctx: t.ctx,
                      options: i,
                      chart: t
                   });
                   un.configure(t, n, i), un.addBox(t, n), ss.set(t, n)
                },
                stop(t) {
                   un.removeBox(t, ss.get(t)), ss.delete(t)
                },
                beforeUpdate(t, e, i) {
                   const n = ss.get(t);
                   un.configure(t, n, i), n.options = i
                },
                defaults: {
                   align: "center",
                   display: !1,
                   font: {
                      weight: "normal"
                   },
                   fullSize: !0,
                   padding: 0,
                   position: "top",
                   text: "",
                   weight: 1500
                },
                defaultRoutes: {
                   color: "color"
                },
                descriptors: {
                   _scriptable: !0,
                   _indexable: !1
                }
             };
             const as = {
                average(t) {
                   if (!t.length) return !1;
                   let e, i, n = 0,
                      r = 0,
                      s = 0;
                   for (e = 0, i = t.length; e < i; ++e) {
                      const i = t[e].element;
                      if (i && i.hasValue()) {
                         const t = i.tooltipPosition();
                         n += t.x, r += t.y, ++s
                      }
                   }
                   return {
                      x: n / s,
                      y: r / s
                   }
                },
                nearest(t, e) {
                   if (!t.length) return !1;
                   let i, n, r, s = e.x,
                      o = e.y,
                      a = Number.POSITIVE_INFINITY;
                   for (i = 0, n = t.length; i < n; ++i) {
                      const n = t[i].element;
                      if (n && n.hasValue()) {
                         const t = K(e, n.getCenterPoint());
                         t < a && (a = t, r = n)
                      }
                   }
                   if (r) {
                      const t = r.tooltipPosition();
                      s = t.x, o = t.y
                   }
                   return {
                      x: s,
                      y: o
                   }
                }
             };
 
             function ls(t, e) {
                return e && (u(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
             }
 
             function cs(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
             }
 
             function hs(t, e) {
                const {
                   element: i,
                   datasetIndex: n,
                   index: r
                } = e, s = t.getDatasetMeta(n).controller, {
                   label: o,
                   value: a
                } = s.getLabelAndValue(r);
                return {
                   chart: t,
                   label: o,
                   parsed: s.getParsed(r),
                   raw: t.data.datasets[n].data[r],
                   formattedValue: a,
                   dataset: s.getDataset(),
                   dataIndex: r,
                   datasetIndex: n,
                   element: i
                }
             }
 
             function ds(t, e) {
                const i = t.chart.ctx,
                   {
                      body: n,
                      footer: r,
                      title: s
                   } = t,
                   {
                      boxWidth: o,
                      boxHeight: a
                   } = e,
                   l = he(e.bodyFont),
                   c = he(e.titleFont),
                   h = he(e.footerFont),
                   d = s.length,
                   u = r.length,
                   f = n.length,
                   p = ce(e.padding);
                let g = p.height,
                   m = 0,
                   b = n.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
                b += t.beforeBody.length + t.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), b && (g += f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) + (b - f) * l.lineHeight + (b - 1) * e.bodySpacing), u && (g += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
                let x = 0;
                const v = function(t) {
                   m = Math.max(m, i.measureText(t).width + x)
                };
                return i.save(), i.font = c.string, y(t.title, v), i.font = l.string, y(t.beforeBody.concat(t.afterBody), v), x = e.displayColors ? o + 2 + e.boxPadding : 0, y(n, (t => {
                   y(t.before, v), y(t.lines, v), y(t.after, v)
                })), x = 0, i.font = h.string, y(t.footer, v), i.restore(), m += p.width, {
                   width: m,
                   height: g
                }
             }
 
             function us(t, e, i, n) {
                const {
                   x: r,
                   width: s
                } = i, {
                   width: o,
                   chartArea: {
                      left: a,
                      right: l
                   }
                } = t;
                let c = "center";
                return "center" === n ? c = r <= (a + l) / 2 ? "left" : "right" : r <= s / 2 ? c = "left" : r >= o - s / 2 && (c = "right"),
                   function(t, e, i, n) {
                      const {
                         x: r,
                         width: s
                      } = n, o = i.caretSize + i.caretPadding;
                      return "left" === t && r + s + o > e.width || "right" === t && r - s - o < 0 || void 0
                   }(c, t, e, i) && (c = "center"), c
             }
 
             function fs(t, e, i) {
                const n = i.yAlign || e.yAlign || function(t, e) {
                   const {
                      y: i,
                      height: n
                   } = e;
                   return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center"
                }(t, i);
                return {
                   xAlign: i.xAlign || e.xAlign || us(t, e, i, n),
                   yAlign: n
                }
             }
 
             function ps(t, e, i, n) {
                const {
                   caretSize: r,
                   caretPadding: s,
                   cornerRadius: o
                } = t, {
                   xAlign: a,
                   yAlign: l
                } = i, c = r + s, {
                   topLeft: h,
                   topRight: d,
                   bottomLeft: u,
                   bottomRight: f
                } = le(o);
                let p = function(t, e) {
                   let {
                      x: i,
                      width: n
                   } = t;
                   return "right" === e ? i -= n : "center" === e && (i -= n / 2), i
                }(e, a);
                const g = function(t, e, i) {
                   let {
                      y: n,
                      height: r
                   } = t;
                   return "top" === e ? n += i : n -= "bottom" === e ? r + i : r / 2, n
                }(e, l, c);
                return "center" === l ? "left" === a ? p += c : "right" === a && (p -= c) : "left" === a ? p -= Math.max(h, u) + r : "right" === a && (p += Math.max(d, f) + r), {
                   x: et(p, 0, n.width - e.width),
                   y: et(g, 0, n.height - e.height)
                }
             }
 
             function gs(t, e, i) {
                const n = ce(i.padding);
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - n.right : t.x + n.left
             }
 
             function ms(t) {
                return ls([], cs(t))
             }
 
             function bs(t, e) {
                const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
                return i ? t.override(i) : t
             }
             class xs extends Dn {
                constructor(t) {
                   super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
                }
                initialize(t) {
                   this.options = t, this._cachedAnimations = void 0, this.$context = void 0
                }
                _resolveAnimations() {
                   const t = this._cachedAnimations;
                   if (t) return t;
                   const e = this.chart,
                      i = this.options.setContext(this.getContext()),
                      n = i.enabled && e.options.animation && i.animations,
                      r = new pi(this.chart, n);
                   return n._cacheable && (this._cachedAnimations = Object.freeze(r)), r
                }
                getContext() {
                   return this.$context || (this.$context = (this, ue(this.chart.getContext(), {
                      tooltip: this,
                      tooltipItems: this._tooltipItems,
                      type: "tooltip"
                   })))
                }
                getTitle(t, e) {
                   const {
                      callbacks: i
                   } = e, n = i.beforeTitle.apply(this, [t]), r = i.title.apply(this, [t]), s = i.afterTitle.apply(this, [t]);
                   let o = [];
                   return o = ls(o, cs(n)), o = ls(o, cs(r)), o = ls(o, cs(s)), o
                }
                getBeforeBody(t, e) {
                   return ms(e.callbacks.beforeBody.apply(this, [t]))
                }
                getBody(t, e) {
                   const {
                      callbacks: i
                   } = e, n = [];
                   return y(t, (t => {
                      const e = {
                            before: [],
                            lines: [],
                            after: []
                         },
                         r = bs(i, t);
                      ls(e.before, cs(r.beforeLabel.call(this, t))), ls(e.lines, r.label.call(this, t)), ls(e.after, cs(r.afterLabel.call(this, t))), n.push(e)
                   })), n
                }
                getAfterBody(t, e) {
                   return ms(e.callbacks.afterBody.apply(this, [t]))
                }
                getFooter(t, e) {
                   const {
                      callbacks: i
                   } = e, n = i.beforeFooter.apply(this, [t]), r = i.footer.apply(this, [t]), s = i.afterFooter.apply(this, [t]);
                   let o = [];
                   return o = ls(o, cs(n)), o = ls(o, cs(r)), o = ls(o, cs(s)), o
                }
                _createItems(t) {
                   const e = this._active,
                      i = this.chart.data,
                      n = [],
                      r = [],
                      s = [];
                   let o, a, l = [];
                   for (o = 0, a = e.length; o < a; ++o) l.push(hs(this.chart, e[o]));
                   return t.filter && (l = l.filter(((e, n, r) => t.filter(e, n, r, i)))), t.itemSort && (l = l.sort(((e, n) => t.itemSort(e, n, i)))), y(l, (e => {
                      const i = bs(t.callbacks, e);
                      n.push(i.labelColor.call(this, e)), r.push(i.labelPointStyle.call(this, e)), s.push(i.labelTextColor.call(this, e))
                   })), this.labelColors = n, this.labelPointStyles = r, this.labelTextColors = s, this.dataPoints = l, l
                }
                update(t, e) {
                   const i = this.options.setContext(this.getContext()),
                      n = this._active;
                   let r, s = [];
                   if (n.length) {
                      const t = as[i.position].call(this, n, this._eventPosition);
                      s = this._createItems(i), this.title = this.getTitle(s, i), this.beforeBody = this.getBeforeBody(s, i), this.body = this.getBody(s, i), this.afterBody = this.getAfterBody(s, i), this.footer = this.getFooter(s, i);
                      const e = this._size = ds(this, i),
                         o = Object.assign({}, t, e),
                         a = fs(this.chart, i, o),
                         l = ps(i, o, a, this.chart);
                      this.xAlign = a.xAlign, this.yAlign = a.yAlign, r = {
                         opacity: 1,
                         x: l.x,
                         y: l.y,
                         width: e.width,
                         height: e.height,
                         caretX: t.x,
                         caretY: t.y
                      }
                   } else 0 !== this.opacity && (r = {
                      opacity: 0
                   });
                   this._tooltipItems = s, this.$context = void 0, r && this._resolveAnimations().update(this, r), t && i.external && i.external.call(this, {
                      chart: this.chart,
                      tooltip: this,
                      replay: e
                   })
                }
                drawCaret(t, e, i, n) {
                   const r = this.getCaretPosition(t, i, n);
                   e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3)
                }
                getCaretPosition(t, e, i) {
                   const {
                      xAlign: n,
                      yAlign: r
                   } = this, {
                      caretSize: s,
                      cornerRadius: o
                   } = i, {
                      topLeft: a,
                      topRight: l,
                      bottomLeft: c,
                      bottomRight: h
                   } = le(o), {
                      x: d,
                      y: u
                   } = t, {
                      width: f,
                      height: p
                   } = e;
                   let g, m, b, x, y, v;
                   return "center" === r ? (y = u + p / 2, "left" === n ? (g = d, m = g - s, x = y + s, v = y - s) : (g = d + f, m = g + s, x = y - s, v = y + s), b = g) : (m = "left" === n ? d + Math.max(a, c) + s : "right" === n ? d + f - Math.max(l, h) - s : this.caretX, "top" === r ? (x = u, y = x - s, g = m - s, b = m + s) : (x = u + p, y = x + s, g = m + s, b = m - s), v = x), {
                      x1: g,
                      x2: m,
                      x3: b,
                      y1: x,
                      y2: y,
                      y3: v
                   }
                }
                drawTitle(t, e, i) {
                   const n = this.title,
                      r = n.length;
                   let s, o, a;
                   if (r) {
                      const l = ti(i.rtl, this.x, this.width);
                      for (t.x = gs(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", s = he(i.titleFont), o = i.titleSpacing, e.fillStyle = i.titleColor, e.font = s.string, a = 0; a < r; ++a) e.fillText(n[a], l.x(t.x), t.y + s.lineHeight / 2), t.y += s.lineHeight + o, a + 1 === r && (t.y += i.titleMarginBottom - o)
                   }
                }
                _drawColorBox(t, e, i, n, r) {
                   const s = this.labelColors[i],
                      o = this.labelPointStyles[i],
                      {
                         boxHeight: a,
                         boxWidth: l,
                         boxPadding: c
                      } = r,
                      h = he(r.bodyFont),
                      d = gs(this, "left", r),
                      u = n.x(d),
                      f = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0,
                      p = e.y + f;
                   if (r.usePointStyle) {
                      const e = {
                            radius: Math.min(l, a) / 2,
                            pointStyle: o.pointStyle,
                            rotation: o.rotation,
                            borderWidth: 1
                         },
                         i = n.leftForLtr(u, l) + l / 2,
                         c = p + a / 2;
                      t.strokeStyle = r.multiKeyBackground, t.fillStyle = r.multiKeyBackground, Xt(t, e, i, c), t.strokeStyle = s.borderColor, t.fillStyle = s.backgroundColor, Xt(t, e, i, c)
                   } else {
                      t.lineWidth = s.borderWidth || 1, t.strokeStyle = s.borderColor, t.setLineDash(s.borderDash || []), t.lineDashOffset = s.borderDashOffset || 0;
                      const e = n.leftForLtr(u, l - c),
                         i = n.leftForLtr(n.xPlus(u, 1), l - c - 2),
                         o = le(s.borderRadius);
                      Object.values(o).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = r.multiKeyBackground, ie(t, {
                         x: e,
                         y: p,
                         w: l,
                         h: a,
                         radius: o
                      }), t.fill(), t.stroke(), t.fillStyle = s.backgroundColor, t.beginPath(), ie(t, {
                         x: i,
                         y: p + 1,
                         w: l - 2,
                         h: a - 2,
                         radius: o
                      }), t.fill()) : (t.fillStyle = r.multiKeyBackground, t.fillRect(e, p, l, a), t.strokeRect(e, p, l, a), t.fillStyle = s.backgroundColor, t.fillRect(i, p + 1, l - 2, a - 2))
                   }
                   t.fillStyle = this.labelTextColors[i]
                }
                drawBody(t, e, i) {
                   const {
                      body: n
                   } = this, {
                      bodySpacing: r,
                      bodyAlign: s,
                      displayColors: o,
                      boxHeight: a,
                      boxWidth: l,
                      boxPadding: c
                   } = i, h = he(i.bodyFont);
                   let d = h.lineHeight,
                      u = 0;
                   const f = ti(i.rtl, this.x, this.width),
                      p = function(i) {
                         e.fillText(i, f.x(t.x + u), t.y + d / 2), t.y += d + r
                      },
                      g = f.textAlign(s);
                   let m, b, x, v, _, w, k;
                   for (e.textAlign = s, e.textBaseline = "middle", e.font = h.string, t.x = gs(this, g, i), e.fillStyle = i.bodyColor, y(this.beforeBody, p), u = o && "right" !== g ? "center" === s ? l / 2 + c : l + 2 + c : 0, v = 0, w = n.length; v < w; ++v) {
                      for (m = n[v], b = this.labelTextColors[v], e.fillStyle = b, y(m.before, p), x = m.lines, o && x.length && (this._drawColorBox(e, t, v, f, i), d = Math.max(h.lineHeight, a)), _ = 0, k = x.length; _ < k; ++_) p(x[_]), d = h.lineHeight;
                      y(m.after, p)
                   }
                   u = 0, d = h.lineHeight, y(this.afterBody, p), t.y -= r
                }
                drawFooter(t, e, i) {
                   const n = this.footer,
                      r = n.length;
                   let s, o;
                   if (r) {
                      const a = ti(i.rtl, this.x, this.width);
                      for (t.x = gs(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = a.textAlign(i.footerAlign), e.textBaseline = "middle", s = he(i.footerFont), e.fillStyle = i.footerColor, e.font = s.string, o = 0; o < r; ++o) e.fillText(n[o], a.x(t.x), t.y + s.lineHeight / 2), t.y += s.lineHeight + i.footerSpacing
                   }
                }
                drawBackground(t, e, i, n) {
                   const {
                      xAlign: r,
                      yAlign: s
                   } = this, {
                      x: o,
                      y: a
                   } = t, {
                      width: l,
                      height: c
                   } = i, {
                      topLeft: h,
                      topRight: d,
                      bottomLeft: u,
                      bottomRight: f
                   } = le(n.cornerRadius);
                   e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(o + h, a), "top" === s && this.drawCaret(t, e, i, n), e.lineTo(o + l - d, a), e.quadraticCurveTo(o + l, a, o + l, a + d), "center" === s && "right" === r && this.drawCaret(t, e, i, n), e.lineTo(o + l, a + c - f), e.quadraticCurveTo(o + l, a + c, o + l - f, a + c), "bottom" === s && this.drawCaret(t, e, i, n), e.lineTo(o + u, a + c), e.quadraticCurveTo(o, a + c, o, a + c - u), "center" === s && "left" === r && this.drawCaret(t, e, i, n), e.lineTo(o, a + h), e.quadraticCurveTo(o, a, o + h, a), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
                }
                _updateAnimationTarget(t) {
                   const e = this.chart,
                      i = this.$animations,
                      n = i && i.x,
                      r = i && i.y;
                   if (n || r) {
                      const i = as[t.position].call(this, this._active, this._eventPosition);
                      if (!i) return;
                      const s = this._size = ds(this, t),
                         o = Object.assign({}, i, this._size),
                         a = fs(e, t, o),
                         l = ps(t, o, a, e);
                      n._to === l.x && r._to === l.y || (this.xAlign = a.xAlign, this.yAlign = a.yAlign, this.width = s.width, this.height = s.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l))
                   }
                }
                draw(t) {
                   const e = this.options.setContext(this.getContext());
                   let i = this.opacity;
                   if (!i) return;
                   this._updateAnimationTarget(e);
                   const n = {
                         width: this.width,
                         height: this.height
                      },
                      r = {
                         x: this.x,
                         y: this.y
                      };
                   i = Math.abs(i) < .001 ? 0 : i;
                   const s = ce(e.padding),
                      o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                   e.enabled && o && (t.save(), t.globalAlpha = i, this.drawBackground(r, t, n, e), ei(t, e.textDirection), r.y += s.top, this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), ii(t, e.textDirection), t.restore())
                }
                getActiveElements() {
                   return this._active || []
                }
                setActiveElements(t, e) {
                   const i = this._active,
                      n = t.map((({
                         datasetIndex: t,
                         index: e
                      }) => {
                         const i = this.chart.getDatasetMeta(t);
                         if (!i) throw new Error("Cannot find a dataset at index " + t);
                         return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                         }
                      })),
                      r = !v(i, n),
                      s = this._positionChanged(n, e);
                   (r || s) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
                }
                handleEvent(t, e, i = !0) {
                   if (e && this._ignoreReplayEvents) return !1;
                   this._ignoreReplayEvents = !1;
                   const n = this.options,
                      r = this._active || [],
                      s = this._getActiveElements(t, r, e, i),
                      o = this._positionChanged(s, t),
                      a = e || !v(s, r) || o;
                   return a && (this._active = s, (n.enabled || n.external) && (this._eventPosition = {
                      x: t.x,
                      y: t.y
                   }, this.update(!0, e))), a
                }
                _getActiveElements(t, e, i, n) {
                   const r = this.options;
                   if ("mouseout" === t.type) return [];
                   if (!n) return e;
                   const s = this.chart.getElementsAtEventForMode(t, r.mode, r, i);
                   return r.reverse && s.reverse(), s
                }
                _positionChanged(t, e) {
                   const {
                      caretX: i,
                      caretY: n,
                      options: r
                   } = this, s = as[r.position].call(this, t, e);
                   return !1 !== s && (i !== s.x || n !== s.y)
                }
             }
             xs.positioners = as;
             var ys = {
                   id: "tooltip",
                   _element: xs,
                   positioners: as,
                   afterInit(t, e, i) {
                      i && (t.tooltip = new xs({
                         chart: t,
                         options: i
                      }))
                   },
                   beforeUpdate(t, e, i) {
                      t.tooltip && t.tooltip.initialize(i)
                   },
                   reset(t, e, i) {
                      t.tooltip && t.tooltip.initialize(i)
                   },
                   afterDraw(t) {
                      const e = t.tooltip,
                         i = {
                            tooltip: e
                         };
                      !1 !== t.notifyPlugins("beforeTooltipDraw", i) && (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i))
                   },
                   afterEvent(t, e) {
                      if (t.tooltip) {
                         const i = e.replay;
                         t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
                      }
                   },
                   defaults: {
                      enabled: !0,
                      external: null,
                      position: "average",
                      backgroundColor: "rgba(0,0,0,0.8)",
                      titleColor: "#fff",
                      titleFont: {
                         weight: "bold"
                      },
                      titleSpacing: 2,
                      titleMarginBottom: 6,
                      titleAlign: "left",
                      bodyColor: "#fff",
                      bodySpacing: 2,
                      bodyFont: {},
                      bodyAlign: "left",
                      footerColor: "#fff",
                      footerSpacing: 2,
                      footerMarginTop: 6,
                      footerFont: {
                         weight: "bold"
                      },
                      footerAlign: "left",
                      padding: 6,
                      caretPadding: 2,
                      caretSize: 5,
                      cornerRadius: 6,
                      boxHeight: (t, e) => e.bodyFont.size,
                      boxWidth: (t, e) => e.bodyFont.size,
                      multiKeyBackground: "#fff",
                      displayColors: !0,
                      boxPadding: 0,
                      borderColor: "rgba(0,0,0,0)",
                      borderWidth: 0,
                      animation: {
                         duration: 400,
                         easing: "easeOutQuart"
                      },
                      animations: {
                         numbers: {
                            type: "number",
                            properties: ["x", "y", "width", "height", "caretX", "caretY"]
                         },
                         opacity: {
                            easing: "linear",
                            duration: 200
                         }
                      },
                      callbacks: {
                         beforeTitle: c,
                         title(t) {
                            if (t.length > 0) {
                               const e = t[0],
                                  i = e.chart.data.labels,
                                  n = i ? i.length : 0;
                               if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                               if (e.label) return e.label;
                               if (n > 0 && e.dataIndex < n) return i[e.dataIndex]
                            }
                            return ""
                         },
                         afterTitle: c,
                         beforeBody: c,
                         beforeLabel: c,
                         label(t) {
                            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                            let e = t.dataset.label || "";
                            e && (e += ": ");
                            const i = t.formattedValue;
                            return d(i) || (e += i), e
                         },
                         labelColor(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                               borderColor: e.borderColor,
                               backgroundColor: e.backgroundColor,
                               borderWidth: e.borderWidth,
                               borderDash: e.borderDash,
                               borderDashOffset: e.borderDashOffset,
                               borderRadius: 0
                            }
                         },
                         labelTextColor() {
                            return this.options.bodyColor
                         },
                         labelPointStyle(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                               pointStyle: e.pointStyle,
                               rotation: e.rotation
                            }
                         },
                         afterLabel: c,
                         afterBody: c,
                         beforeFooter: c,
                         footer: c,
                         afterFooter: c
                      }
                   },
                   defaultRoutes: {
                      bodyFont: "font",
                      footerFont: "font",
                      titleFont: "font"
                   },
                   descriptors: {
                      _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                      _indexable: !1,
                      callbacks: {
                         _scriptable: !1,
                         _indexable: !1
                      },
                      animation: {
                         _fallback: !1
                      },
                      animations: {
                         _fallback: "animation"
                      }
                   },
                   additionalOptionScopes: ["interaction"]
                },
                vs = Object.freeze({
                   __proto__: null,
                   Decimation: Ir,
                   Filler: Qr,
                   Legend: is,
                   SubTitle: os,
                   Title: rs,
                   Tooltip: ys
                });
             class _s extends Nn {
                constructor(t) {
                   super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
                }
                init(t) {
                   const e = this._addedLabels;
                   if (e.length) {
                      const t = this.getLabels();
                      for (const {
                            index: i,
                            label: n
                         }
                         of e) t[i] === n && t.splice(i, 1);
                      this._addedLabels = []
                   }
                   super.init(t)
                }
                parse(t, e) {
                   if (d(t)) return null;
                   const i = this.getLabels();
                   return ((t, e) => null === t ? null : et(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : function(t, e, i, n) {
                      const r = t.indexOf(e);
                      return -1 === r ? ((t, e, i, n) => ("string" == typeof e ? (i = t.push(e) - 1, n.unshift({
                         index: i,
                         label: e
                      })) : isNaN(e) && (i = null), i))(t, e, i, n) : r !== t.lastIndexOf(e) ? i : r
                   }(i, t, m(e, t), this._addedLabels), i.length - 1)
                }
                determineDataLimits() {
                   const {
                      minDefined: t,
                      maxDefined: e
                   } = this.getUserBounds();
                   let {
                      min: i,
                      max: n
                   } = this.getMinMax(!0);
                   "ticks" === this.options.bounds && (t || (i = 0), e || (n = this.getLabels().length - 1)), this.min = i, this.max = n
                }
                buildTicks() {
                   const t = this.min,
                      e = this.max,
                      i = this.options.offset,
                      n = [];
                   let r = this.getLabels();
                   r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1), this._valueRange = Math.max(r.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
                   for (let i = t; i <= e; i++) n.push({
                      value: i
                   });
                   return n
                }
                getLabelForValue(t) {
                   const e = this.getLabels();
                   return t >= 0 && t < e.length ? e[t] : t
                }
                configure() {
                   super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
                }
                getPixelForValue(t) {
                   return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getPixelForTick(t) {
                   const e = this.ticks;
                   return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
                }
                getValueForPixel(t) {
                   return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
                }
                getBasePixel() {
                   return this.bottom
                }
             }
 
             function ws(t, e, {
                horizontal: i,
                minRotation: n
             }) {
                const r = Y(n),
                   s = (i ? Math.sin(r) : Math.cos(r)) || .001,
                   o = .75 * e * ("" + t).length;
                return Math.min(e / s, o)
             }
             _s.id = "category", _s.defaults = {
                ticks: {
                   callback: _s.prototype.getLabelForValue
                }
             };
             class ks extends Nn {
                constructor(t) {
                   super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
                }
                parse(t, e) {
                   return d(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
                }
                handleTickRangeOptions() {
                   const {
                      beginAtZero: t
                   } = this.options, {
                      minDefined: e,
                      maxDefined: i
                   } = this.getUserBounds();
                   let {
                      min: n,
                      max: r
                   } = this;
                   const s = t => n = e ? n : t,
                      o = t => r = i ? r : t;
                   if (t) {
                      const t = W(n),
                         e = W(r);
                      t < 0 && e < 0 ? o(0) : t > 0 && e > 0 && s(0)
                   }
                   if (n === r) {
                      let e = 1;
                      (r >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(.05 * r)), o(r + e), t || s(n - e)
                   }
                   this.min = n, this.max = r
                }
                getTickLimit() {
                   const t = this.options.ticks;
                   let e, {
                      maxTicksLimit: i,
                      stepSize: n
                   } = t;
                   return n ? (e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
                }
                computeTickLimit() {
                   return Number.POSITIVE_INFINITY
                }
                buildTicks() {
                   const t = this.options,
                      e = t.ticks;
                   let i = this.getTickLimit();
                   i = Math.max(2, i);
                   const n = function(t, e) {
                      const i = [],
                         {
                            bounds: n,
                            step: r,
                            min: s,
                            max: o,
                            precision: a,
                            count: l,
                            maxTicks: c,
                            maxDigits: h,
                            includeBounds: u
                         } = t,
                         f = r || 1,
                         p = c - 1,
                         {
                            min: g,
                            max: m
                         } = e,
                         b = !d(s),
                         x = !d(o),
                         y = !d(l),
                         v = (m - g) / (h + 1);
                      let _, w, k, M, S = H((m - g) / p / f) * f;
                      if (S < 1e-14 && !b && !x) return [{
                         value: g
                      }, {
                         value: m
                      }];
                      M = Math.ceil(m / S) - Math.floor(g / S), M > p && (S = H(M * S / p / f) * f), d(a) || (_ = Math.pow(10, a), S = Math.ceil(S * _) / _), "ticks" === n ? (w = Math.floor(g / S) * S, k = Math.ceil(m / S) * S) : (w = g, k = m), b && x && r && function(t, e) {
                         const i = Math.round(t);
                         return i - e <= t && i + e >= t
                      }((o - s) / r, S / 1e3) ? (M = Math.round(Math.min((o - s) / S, c)), S = (o - s) / M, w = s, k = o) : y ? (w = b ? s : w, k = x ? o : k, M = l - 1, S = (k - w) / M) : (M = (k - w) / S, M = U(M, Math.round(M), S / 1e3) ? Math.round(M) : Math.ceil(M));
                      const C = Math.max(Z(S), Z(w));
                      _ = Math.pow(10, d(a) ? C : a), w = Math.round(w * _) / _, k = Math.round(k * _) / _;
                      let P = 0;
                      for (b && (u && w !== s ? (i.push({
                            value: s
                         }), w < s && P++, U(Math.round((w + P * S) * _) / _, s, ws(s, v, t)) && P++) : w < s && P++); P < M; ++P) i.push({
                         value: Math.round((w + P * S) * _) / _
                      });
                      return x && u && k !== o ? i.length && U(i[i.length - 1].value, o, ws(o, v, t)) ? i[i.length - 1].value = o : i.push({
                         value: o
                      }) : x && k !== o || i.push({
                         value: k
                      }), i
                   }({
                      maxTicks: i,
                      bounds: t.bounds,
                      min: t.min,
                      max: t.max,
                      precision: e.precision,
                      step: e.stepSize,
                      count: e.count,
                      maxDigits: this._maxDigits(),
                      horizontal: this.isHorizontal(),
                      minRotation: e.minRotation || 0,
                      includeBounds: !1 !== e.includeBounds
                   }, this._range || this);
                   return "ticks" === t.bounds && q(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n
                }
                configure() {
                   const t = this.ticks;
                   let e = this.min,
                      i = this.max;
                   if (super.configure(), this.options.offset && t.length) {
                      const n = (i - e) / Math.max(t.length - 1, 1) / 2;
                      e -= n, i += n
                   }
                   this._startValue = e, this._endValue = i, this._valueRange = i - e
                }
                getLabelForValue(t) {
                   return Qe(t, this.chart.options.locale, this.options.ticks.format)
                }
             }
             class Ms extends ks {
                determineDataLimits() {
                   const {
                      min: t,
                      max: e
                   } = this.getMinMax(!0);
                   this.min = p(t) ? t : 0, this.max = p(e) ? e : 1, this.handleTickRangeOptions()
                }
                computeTickLimit() {
                   const t = this.isHorizontal(),
                      e = t ? this.width : this.height,
                      i = Y(this.options.ticks.minRotation),
                      n = (t ? Math.sin(i) : Math.cos(i)) || .001,
                      r = this._resolveTickFontOptions(0);
                   return Math.ceil(e / Math.min(40, r.lineHeight / n))
                }
                getPixelForValue(t) {
                   return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                   return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                }
             }
 
             function Ss(t) {
                return 1 == t / Math.pow(10, Math.floor(V(t)))
             }
             Ms.id = "linear", Ms.defaults = {
                ticks: {
                   callback: En.formatters.numeric
                }
             };
             class Cs extends Nn {
                constructor(t) {
                   super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
                }
                parse(t, e) {
                   const i = ks.prototype.parse.apply(this, [t, e]);
                   if (0 !== i) return p(i) && i > 0 ? i : null;
                   this._zero = !0
                }
                determineDataLimits() {
                   const {
                      min: t,
                      max: e
                   } = this.getMinMax(!0);
                   this.min = p(t) ? Math.max(0, t) : null, this.max = p(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions()
                }
                handleTickRangeOptions() {
                   const {
                      minDefined: t,
                      maxDefined: e
                   } = this.getUserBounds();
                   let i = this.min,
                      n = this.max;
                   const r = e => i = t ? i : e,
                      s = t => n = e ? n : t,
                      o = (t, e) => Math.pow(10, Math.floor(V(t)) + e);
                   i === n && (i <= 0 ? (r(1), s(10)) : (r(o(i, -1)), s(o(n, 1)))), i <= 0 && r(o(n, -1)), n <= 0 && s(o(i, 1)), this._zero && this.min !== this._suggestedMin && i === o(this.min, 0) && r(o(i, -1)), this.min = i, this.max = n
                }
                buildTicks() {
                   const t = this.options,
                      e = function(t, e) {
                         const i = Math.floor(V(e.max)),
                            n = Math.ceil(e.max / Math.pow(10, i)),
                            r = [];
                         let s = g(t.min, Math.pow(10, Math.floor(V(e.min)))),
                            o = Math.floor(V(s)),
                            a = Math.floor(s / Math.pow(10, o)),
                            l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                         do {
                            r.push({
                               value: s,
                               major: Ss(s)
                            }), ++a, 10 === a && (a = 1, ++o, l = o >= 0 ? 1 : l), s = Math.round(a * Math.pow(10, o) * l) / l
                         } while (o < i || o === i && a < n);
                         const c = g(t.max, s);
                         return r.push({
                            value: c,
                            major: Ss(s)
                         }), r
                      }({
                         min: this._userMin,
                         max: this._userMax
                      }, this);
                   return "ticks" === t.bounds && q(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
                }
                getLabelForValue(t) {
                   return void 0 === t ? "0" : Qe(t, this.chart.options.locale, this.options.ticks.format)
                }
                configure() {
                   const t = this.min;
                   super.configure(), this._startValue = V(t), this._valueRange = V(this.max) - V(t)
                }
                getPixelForValue(t) {
                   return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (V(t) - this._startValue) / this._valueRange)
                }
                getValueForPixel(t) {
                   const e = this.getDecimalForPixel(t);
                   return Math.pow(10, this._startValue + e * this._valueRange)
                }
             }
 
             function Ps(t) {
                const e = t.ticks;
                if (e.display && t.display) {
                   const t = ce(e.backdropPadding);
                   return m(e.font && e.font.size, Ht.font.size) + t.height
                }
                return 0
             }
 
             function Os(t, e, i, n, r) {
                return t === n || t === r ? {
                   start: e - i / 2,
                   end: e + i / 2
                } : t < n || t > r ? {
                   start: e - i,
                   end: e
                } : {
                   start: e,
                   end: e + i
                }
             }
 
             function Ds(t, e, i, n, r) {
                const s = Math.abs(Math.sin(i)),
                   o = Math.abs(Math.cos(i));
                let a = 0,
                   l = 0;
                n.start < e.l ? (a = (e.l - n.start) / s, t.l = Math.min(t.l, e.l - a)) : n.end > e.r && (a = (n.end - e.r) / s, t.r = Math.max(t.r, e.r + a)), r.start < e.t ? (l = (e.t - r.start) / o, t.t = Math.min(t.t, e.t - l)) : r.end > e.b && (l = (r.end - e.b) / o, t.b = Math.max(t.b, e.b + l))
             }
 
             function Ls(t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
             }
 
             function Es(t, e, i) {
                return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t
             }
 
             function Ts(t, e, i, n) {
                const {
                   ctx: r
                } = t;
                if (i) r.arc(t.xCenter, t.yCenter, e, 0, R);
                else {
                   let i = t.getPointPosition(0, e);
                   r.moveTo(i.x, i.y);
                   for (let s = 1; s < n; s++) i = t.getPointPosition(s, e), r.lineTo(i.x, i.y)
                }
             }
             Cs.id = "logarithmic", Cs.defaults = {
                ticks: {
                   callback: En.formatters.logarithmic,
                   major: {
                      enabled: !0
                   }
                }
             };
             class As extends ks {
                constructor(t) {
                   super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
                }
                setDimensions() {
                   const t = this._padding = ce(Ps(this.options) / 2),
                      e = this.width = this.maxWidth - t.width,
                      i = this.height = this.maxHeight - t.height;
                   this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
                }
                determineDataLimits() {
                   const {
                      min: t,
                      max: e
                   } = this.getMinMax(!1);
                   this.min = p(t) && !isNaN(t) ? t : 0, this.max = p(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
                }
                computeTickLimit() {
                   return Math.ceil(this.drawingArea / Ps(this.options))
                }
                generateTickLabels(t) {
                   ks.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => {
                      const i = x(this.options.pointLabels.callback, [t, e], this);
                      return i || 0 === i ? i : ""
                   })).filter(((t, e) => this.chart.getDataVisibility(e)))
                }
                fit() {
                   const t = this.options;
                   t.display && t.pointLabels.display ? function(t) {
                      const e = {
                            l: t.left + t._padding.left,
                            r: t.right - t._padding.right,
                            t: t.top + t._padding.top,
                            b: t.bottom - t._padding.bottom
                         },
                         i = Object.assign({}, e),
                         n = [],
                         r = [],
                         s = t._pointLabels.length,
                         o = t.options.pointLabels,
                         a = o.centerPointLabels ? A / s : 0;
                      for (let d = 0; d < s; d++) {
                         const s = o.setContext(t.getPointLabelContext(d));
                         r[d] = s.padding;
                         const f = t.getPointPosition(d, t.drawingArea + r[d], a),
                            p = he(s.font),
                            g = (l = t.ctx, c = p, h = u(h = t._pointLabels[d]) ? h : [h], {
                               w: Ut(l, c.string, h),
                               h: h.length * c.lineHeight
                            });
                         n[d] = g;
                         const m = Q(t.getIndexAngle(d) + a),
                            b = Math.round(X(m));
                         Ds(i, e, m, Os(b, f.x, g.w, 0, 180), Os(b, f.y, g.h, 90, 270))
                      }
                      var l, c, h;
                      t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function(t, e, i) {
                         const n = [],
                            r = t._pointLabels.length,
                            s = t.options,
                            o = Ps(s) / 2,
                            a = t.drawingArea,
                            l = s.pointLabels.centerPointLabels ? A / r : 0;
                         for (let s = 0; s < r; s++) {
                            const r = t.getPointPosition(s, a + o + i[s], l),
                               u = Math.round(X(Q(r.angle + j))),
                               f = e[s],
                               p = Es(r.y, f.h, u),
                               g = Ls(u),
                               m = (c = r.x, h = f.w, "right" === (d = g) ? c -= h : "center" === d && (c -= h / 2), c);
                            n.push({
                               x: r.x,
                               y: p,
                               textAlign: g,
                               left: m,
                               top: p,
                               right: m + f.w,
                               bottom: p + f.h
                            })
                         }
                         var c, h, d;
                         return n
                      }(t, n, r)
                   }(this) : this.setCenterPoint(0, 0, 0, 0)
                }
                setCenterPoint(t, e, i, n) {
                   this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, n))
                }
                getIndexAngle(t) {
                   return Q(t * (R / (this._pointLabels.length || 1)) + Y(this.options.startAngle || 0))
                }
                getDistanceFromCenterForValue(t) {
                   if (d(t)) return NaN;
                   const e = this.drawingArea / (this.max - this.min);
                   return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                }
                getValueForDistanceFromCenter(t) {
                   if (d(t)) return NaN;
                   const e = t / (this.drawingArea / (this.max - this.min));
                   return this.options.reverse ? this.max - e : this.min + e
                }
                getPointLabelContext(t) {
                   const e = this._pointLabels || [];
                   if (t >= 0 && t < e.length) {
                      const i = e[t];
                      return function(t, e, i) {
                         return ue(t, {
                            label: i,
                            index: e,
                            type: "pointLabel"
                         })
                      }(this.getContext(), t, i)
                   }
                }
                getPointPosition(t, e, i = 0) {
                   const n = this.getIndexAngle(t) - j + i;
                   return {
                      x: Math.cos(n) * e + this.xCenter,
                      y: Math.sin(n) * e + this.yCenter,
                      angle: n
                   }
                }
                getPointPositionForValue(t, e) {
                   return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                }
                getBasePosition(t) {
                   return this.getPointPositionForValue(t || 0, this.getBaseValue())
                }
                getPointLabelPosition(t) {
                   const {
                      left: e,
                      top: i,
                      right: n,
                      bottom: r
                   } = this._pointLabelItems[t];
                   return {
                      left: e,
                      top: i,
                      right: n,
                      bottom: r
                   }
                }
                drawBackground() {
                   const {
                      backgroundColor: t,
                      grid: {
                         circular: e
                      }
                   } = this.options;
                   if (t) {
                      const i = this.ctx;
                      i.save(), i.beginPath(), Ts(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore()
                   }
                }
                drawGrid() {
                   const t = this.ctx,
                      e = this.options,
                      {
                         angleLines: i,
                         grid: n
                      } = e,
                      r = this._pointLabels.length;
                   let s, o, a;
                   if (e.pointLabels.display && function(t, e) {
                         const {
                            ctx: i,
                            options: {
                               pointLabels: n
                            }
                         } = t;
                         for (let r = e - 1; r >= 0; r--) {
                            const e = n.setContext(t.getPointLabelContext(r)),
                               s = he(e.font),
                               {
                                  x: o,
                                  y: a,
                                  textAlign: l,
                                  left: c,
                                  top: h,
                                  right: u,
                                  bottom: f
                               } = t._pointLabelItems[r],
                               {
                                  backdropColor: p
                               } = e;
                            if (!d(p)) {
                               const t = ce(e.backdropPadding);
                               i.fillStyle = p, i.fillRect(c - t.left, h - t.top, u - c + t.width, f - h + t.height)
                            }
                            te(i, t._pointLabels[r], o, a + s.lineHeight / 2, s, {
                               color: e.color,
                               textAlign: l,
                               textBaseline: "middle"
                            })
                         }
                      }(this, r), n.display && this.ticks.forEach(((t, e) => {
                         0 !== e && (o = this.getDistanceFromCenterForValue(t.value), function(t, e, i, n) {
                            const r = t.ctx,
                               s = e.circular,
                               {
                                  color: o,
                                  lineWidth: a
                               } = e;
                            !s && !n || !o || !a || i < 0 || (r.save(), r.strokeStyle = o, r.lineWidth = a, r.setLineDash(e.borderDash), r.lineDashOffset = e.borderDashOffset, r.beginPath(), Ts(t, i, s, n), r.closePath(), r.stroke(), r.restore())
                         }(this, n.setContext(this.getContext(e - 1)), o, r))
                      })), i.display) {
                      for (t.save(), s = r - 1; s >= 0; s--) {
                         const n = i.setContext(this.getPointLabelContext(s)),
                            {
                               color: r,
                               lineWidth: l
                            } = n;
                         l && r && (t.lineWidth = l, t.strokeStyle = r, t.setLineDash(n.borderDash), t.lineDashOffset = n.borderDashOffset, o = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), a = this.getPointPosition(s, o), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(a.x, a.y), t.stroke())
                      }
                      t.restore()
                   }
                }
                drawBorder() {}
                drawLabels() {
                   const t = this.ctx,
                      e = this.options,
                      i = e.ticks;
                   if (!i.display) return;
                   const n = this.getIndexAngle(0);
                   let r, s;
                   t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((n, o) => {
                      if (0 === o && !e.reverse) return;
                      const a = i.setContext(this.getContext(o)),
                         l = he(a.font);
                      if (r = this.getDistanceFromCenterForValue(this.ticks[o].value), a.showLabelBackdrop) {
                         t.font = l.string, s = t.measureText(n.label).width, t.fillStyle = a.backdropColor;
                         const e = ce(a.backdropPadding);
                         t.fillRect(-s / 2 - e.left, -r - l.size / 2 - e.top, s + e.width, l.size + e.height)
                      }
                      te(t, n.label, 0, -r, l, {
                         color: a.color
                      })
                   })), t.restore()
                }
                drawTitle() {}
             }
             As.id = "radialLinear", As.defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                   display: !0,
                   lineWidth: 1,
                   borderDash: [],
                   borderDashOffset: 0
                },
                grid: {
                   circular: !1
                },
                startAngle: 0,
                ticks: {
                   showLabelBackdrop: !0,
                   callback: En.formatters.numeric
                },
                pointLabels: {
                   backdropColor: void 0,
                   backdropPadding: 2,
                   display: !0,
                   font: {
                      size: 10
                   },
                   callback: t => t,
                   padding: 5,
                   centerPointLabels: !1
                }
             }, As.defaultRoutes = {
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
             }, As.descriptors = {
                angleLines: {
                   _fallback: "grid"
                }
             };
             const Rs = {
                   millisecond: {
                      common: !0,
                      size: 1,
                      steps: 1e3
                   },
                   second: {
                      common: !0,
                      size: 1e3,
                      steps: 60
                   },
                   minute: {
                      common: !0,
                      size: 6e4,
                      steps: 60
                   },
                   hour: {
                      common: !0,
                      size: 36e5,
                      steps: 24
                   },
                   day: {
                      common: !0,
                      size: 864e5,
                      steps: 30
                   },
                   week: {
                      common: !1,
                      size: 6048e5,
                      steps: 4
                   },
                   month: {
                      common: !0,
                      size: 2628e6,
                      steps: 12
                   },
                   quarter: {
                      common: !1,
                      size: 7884e6,
                      steps: 4
                   },
                   year: {
                      common: !0,
                      size: 3154e7
                   }
                },
                zs = Object.keys(Rs);
 
             function Fs(t, e) {
                return t - e
             }
 
             function Is(t, e) {
                if (d(e)) return null;
                const i = t._adapter,
                   {
                      parser: n,
                      round: r,
                      isoWeekday: s
                   } = t._parseOpts;
                let o = e;
                return "function" == typeof n && (o = n(o)), p(o) || (o = "string" == typeof n ? i.parse(o, n) : i.parse(o)), null === o ? null : (r && (o = "week" !== r || !$(s) && !0 !== s ? i.startOf(o, r) : i.startOf(o, "isoWeek", s)), +o)
             }
 
             function js(t, e, i, n) {
                const r = zs.length;
                for (let s = zs.indexOf(t); s < r - 1; ++s) {
                   const t = Rs[zs[s]],
                      r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                   if (t.common && Math.ceil((i - e) / (r * t.size)) <= n) return zs[s]
                }
                return zs[r - 1]
             }
 
             function Ns(t, e, i) {
                if (i) {
                   if (i.length) {
                      const {
                         lo: n,
                         hi: r
                      } = fe(i, e);
                      t[i[n] >= e ? i[n] : i[r]] = !0
                   }
                } else t[e] = !0
             }
 
             function Bs(t, e, i) {
                const n = [],
                   r = {},
                   s = e.length;
                let o, a;
                for (o = 0; o < s; ++o) a = e[o], r[a] = o, n.push({
                   value: a,
                   major: !1
                });
                return 0 !== s && i ? function(t, e, i, n) {
                   const r = t._adapter,
                      s = +r.startOf(e[0].value, n),
                      o = e[e.length - 1].value;
                   let a, l;
                   for (a = s; a <= o; a = +r.add(a, 1, n)) l = i[a], l >= 0 && (e[l].major = !0);
                   return e
                }(t, n, r, i) : n
             }
             class Vs extends Nn {
                constructor(t) {
                   super(t), this._cache = {
                      data: [],
                      labels: [],
                      all: []
                   }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
                }
                init(t, e) {
                   const i = t.time || (t.time = {}),
                      n = this._adapter = new qi._date(t.adapters.date);
                   S(i.displayFormats, n.formats()), this._parseOpts = {
                      parser: i.parser,
                      round: i.round,
                      isoWeekday: i.isoWeekday
                   }, super.init(t), this._normalized = e.normalized
                }
                parse(t, e) {
                   return void 0 === t ? null : Is(this, t)
                }
                beforeLayout() {
                   super.beforeLayout(), this._cache = {
                      data: [],
                      labels: [],
                      all: []
                   }
                }
                determineDataLimits() {
                   const t = this.options,
                      e = this._adapter,
                      i = t.time.unit || "day";
                   let {
                      min: n,
                      max: r,
                      minDefined: s,
                      maxDefined: o
                   } = this.getUserBounds();
 
                   function a(t) {
                      s || isNaN(t.min) || (n = Math.min(n, t.min)), o || isNaN(t.max) || (r = Math.max(r, t.max))
                   }
                   s && o || (a(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || a(this.getMinMax(!1))), n = p(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i), r = p(r) && !isNaN(r) ? r : +e.endOf(Date.now(), i) + 1, this.min = Math.min(n, r - 1), this.max = Math.max(n + 1, r)
                }
                _getLabelBounds() {
                   const t = this.getLabelTimestamps();
                   let e = Number.POSITIVE_INFINITY,
                      i = Number.NEGATIVE_INFINITY;
                   return t.length && (e = t[0], i = t[t.length - 1]), {
                      min: e,
                      max: i
                   }
                }
                buildTicks() {
                   const t = this.options,
                      e = t.time,
                      i = t.ticks,
                      n = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                   "ticks" === t.bounds && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
                   const r = this.min,
                      s = function(t, e, i) {
                         let n = 0,
                            r = t.length;
                         for (; n < r && t[n] < e;) n++;
                         for (; r > n && t[r - 1] > i;) r--;
                         return n > 0 || r < t.length ? t.slice(n, r) : t
                      }(n, r, this.max);
                   return this._unit = e.unit || (i.autoSkip ? js(e.minUnit, this.min, this.max, this._getLabelCapacity(r)) : function(t, e, i, n, r) {
                      for (let s = zs.length - 1; s >= zs.indexOf(i); s--) {
                         const i = zs[s];
                         if (Rs[i].common && t._adapter.diff(r, n, i) >= e - 1) return i
                      }
                      return zs[i ? zs.indexOf(i) : 0]
                   }(this, s.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                      for (let e = zs.indexOf(t) + 1, i = zs.length; e < i; ++e)
                         if (Rs[zs[e]].common) return zs[e]
                   }(this._unit) : void 0, this.initOffsets(n), t.reverse && s.reverse(), Bs(this, s, this._majorUnit)
                }
                initOffsets(t) {
                   let e, i, n = 0,
                      r = 0;
                   this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), n = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), r = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                   const s = t.length < 3 ? .5 : .25;
                   n = et(n, 0, s), r = et(r, 0, s), this._offsets = {
                      start: n,
                      end: r,
                      factor: 1 / (n + 1 + r)
                   }
                }
                _generate() {
                   const t = this._adapter,
                      e = this.min,
                      i = this.max,
                      n = this.options,
                      r = n.time,
                      s = r.unit || js(r.minUnit, e, i, this._getLabelCapacity(e)),
                      o = m(r.stepSize, 1),
                      a = "week" === s && r.isoWeekday,
                      l = $(a) || !0 === a,
                      c = {};
                   let h, d, u = e;
                   if (l && (u = +t.startOf(u, "isoWeek", a)), u = +t.startOf(u, l ? "day" : s), t.diff(i, e, s) > 1e5 * o) throw new Error(e + " and " + i + " are too far apart with stepSize of " + o + " " + s);
                   const f = "data" === n.ticks.source && this.getDataTimestamps();
                   for (h = u, d = 0; h < i; h = +t.add(h, o, s), d++) Ns(c, h, f);
                   return h !== i && "ticks" !== n.bounds && 1 !== d || Ns(c, h, f), Object.keys(c).sort(((t, e) => t - e)).map((t => +t))
                }
                getLabelForValue(t) {
                   const e = this._adapter,
                      i = this.options.time;
                   return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
                }
                _tickFormatFunction(t, e, i, n) {
                   const r = this.options,
                      s = r.time.displayFormats,
                      o = this._unit,
                      a = this._majorUnit,
                      l = o && s[o],
                      c = a && s[a],
                      h = i[e],
                      d = a && c && h && h.major,
                      u = this._adapter.format(t, n || (d ? c : l)),
                      f = r.ticks.callback;
                   return f ? x(f, [u, e, i], this) : u
                }
                generateTickLabels(t) {
                   let e, i, n;
                   for (e = 0, i = t.length; e < i; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t)
                }
                getDecimalForValue(t) {
                   return null === t ? NaN : (t - this.min) / (this.max - this.min)
                }
                getPixelForValue(t) {
                   const e = this._offsets,
                      i = this.getDecimalForValue(t);
                   return this.getPixelForDecimal((e.start + i) * e.factor)
                }
                getValueForPixel(t) {
                   const e = this._offsets,
                      i = this.getDecimalForPixel(t) / e.factor - e.end;
                   return this.min + i * (this.max - this.min)
                }
                _getLabelSize(t) {
                   const e = this.options.ticks,
                      i = this.ctx.measureText(t).width,
                      n = Y(this.isHorizontal() ? e.maxRotation : e.minRotation),
                      r = Math.cos(n),
                      s = Math.sin(n),
                      o = this._resolveTickFontOptions(0).size;
                   return {
                      w: i * r + o * s,
                      h: i * s + o * r
                   }
                }
                _getLabelCapacity(t) {
                   const e = this.options.time,
                      i = e.displayFormats,
                      n = i[e.unit] || i.millisecond,
                      r = this._tickFormatFunction(t, 0, Bs(this, [t], this._majorUnit), n),
                      s = this._getLabelSize(r),
                      o = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
                   return o > 0 ? o : 1
                }
                getDataTimestamps() {
                   let t, e, i = this._cache.data || [];
                   if (i.length) return i;
                   const n = this.getMatchingVisibleMetas();
                   if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
                   for (t = 0, e = n.length; t < e; ++t) i = i.concat(n[t].controller.getAllParsedValues(this));
                   return this._cache.data = this.normalize(i)
                }
                getLabelTimestamps() {
                   const t = this._cache.labels || [];
                   let e, i;
                   if (t.length) return t;
                   const n = this.getLabels();
                   for (e = 0, i = n.length; e < i; ++e) t.push(Is(this, n[e]));
                   return this._cache.labels = this._normalized ? t : this.normalize(t)
                }
                normalize(t) {
                   return xe(t.sort(Fs))
                }
             }
 
             function Ws(t, e, i) {
                let n, r, s, o, a = 0,
                   l = t.length - 1;
                i ? (e >= t[a].pos && e <= t[l].pos && ({
                   lo: a,
                   hi: l
                } = pe(t, "pos", e)), ({
                   pos: n,
                   time: s
                } = t[a]), ({
                   pos: r,
                   time: o
                } = t[l])) : (e >= t[a].time && e <= t[l].time && ({
                   lo: a,
                   hi: l
                } = pe(t, "time", e)), ({
                   time: n,
                   pos: s
                } = t[a]), ({
                   time: r,
                   pos: o
                } = t[l]));
                const c = r - n;
                return c ? s + (o - s) * (e - n) / c : s
             }
             Vs.id = "time", Vs.defaults = {
                bounds: "data",
                adapters: {},
                time: {
                   parser: !1,
                   unit: !1,
                   round: !1,
                   isoWeekday: !1,
                   minUnit: "millisecond",
                   displayFormats: {}
                },
                ticks: {
                   source: "auto",
                   major: {
                      enabled: !1
                   }
                }
             };
             class Hs extends Vs {
                constructor(t) {
                   super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
                }
                initOffsets() {
                   const t = this._getTimestampsForTable(),
                      e = this._table = this.buildLookupTable(t);
                   this._minPos = Ws(e, this.min), this._tableRange = Ws(e, this.max) - this._minPos, super.initOffsets(t)
                }
                buildLookupTable(t) {
                   const {
                      min: e,
                      max: i
                   } = this, n = [], r = [];
                   let s, o, a, l, c;
                   for (s = 0, o = t.length; s < o; ++s) l = t[s], l >= e && l <= i && n.push(l);
                   if (n.length < 2) return [{
                      time: e,
                      pos: 0
                   }, {
                      time: i,
                      pos: 1
                   }];
                   for (s = 0, o = n.length; s < o; ++s) c = n[s + 1], a = n[s - 1], l = n[s], Math.round((c + a) / 2) !== l && r.push({
                      time: l,
                      pos: s / (o - 1)
                   });
                   return r
                }
                _getTimestampsForTable() {
                   let t = this._cache.all || [];
                   if (t.length) return t;
                   const e = this.getDataTimestamps(),
                      i = this.getLabelTimestamps();
                   return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t
                }
                getDecimalForValue(t) {
                   return (Ws(this._table, t) - this._minPos) / this._tableRange
                }
                getValueForPixel(t) {
                   const e = this._offsets,
                      i = this.getDecimalForPixel(t) / e.factor - e.end;
                   return Ws(this._table, i * this._tableRange + this._minPos, !0)
                }
             }
             Hs.id = "timeseries", Hs.defaults = Vs.defaults;
             const $s = [Hi, Rr, vs, Object.freeze({
                __proto__: null,
                CategoryScale: _s,
                LinearScale: Ms,
                LogarithmicScale: Cs,
                RadialLinearScale: As,
                TimeScale: Vs,
                TimeSeriesScale: Hs
             })];
             dr.register(...$s);
             const Us = dr;
 
             function qs(t, e) {
                var i = parseInt(t.slice(1, 3), 16),
                   n = parseInt(t.slice(3, 5), 16),
                   r = parseInt(t.slice(5, 7), 16);
                return e ? "rgba(" + i + ", " + n + ", " + r + ", " + e + ")" : "rgb(" + i + ", " + n + ", " + r + ")"
             }
             i(7361);
             var Ys = function() {
                function t() {
                   (0, n.Z)(this, t), this.cityMainTitle = document.querySelector(".main-title"), this.cityBannerPhoto = document.querySelector(".banner-container"), this.cityName = document.querySelector(".city-name"), this.citySummary = document.querySelector(".city-summary"), this.cityMayor = document.querySelector(".city-mayor"), this.cityTotalScore = document.querySelector(".total-score-container"), this.cityChartFrame = document.querySelector(".city-scores-chart")
                }
                return (0, r.Z)(t, [{
                   key: "setMainTitle",
                   value: function(t) {
                      this.cityMainTitle.textContent = t
                   }
                }, {
                   key: "setCityBanner",
                   value: function(t) {
                      this.cityBannerPhoto.style.backgroundImage = "url('".concat(t.web, "')")
                   }
                }, {
                   key: "setCityName",
                   value: function(t, e, i) {
                      this.cityName.innerHTML = "<h1>".concat(t, "</h1><h3>").concat(e, ", ").concat(i, "</h3>")
                   }
                }, {
                   key: "setCitySummary",
                   value: function(t) {
                      this.citySummary.innerHTML = t
                   }
                }, {
                   key: "setCityMayor",
                   value: function(t) {
                      this.cityMayor.innerHTML = "<p> The name of the city mayor is <strong>".concat(t, "</strong></p>")
                   }
                }, {
                   key: "setCityTotalScore",
                   value: function(t) {
                      this.cityTotalScore.innerHTML = '<span class="city-total-score">'.concat(t, '</span><span class="score-label">BCTL Score</span>')
                   }
                }, {
                   key: "setCityChart",
                   value: function(t, e) {
                      this.cityChartFrame.innerHTML = '<h1 class="chart-title">Rating life</h1>\n       <canvas id="cityChart" width="400" height="400"></canvas><div class="compare-box"></div>';
                      var i = document.querySelector("#cityChart"),
                         n = e.map((function(t) {
                            return t.name
                         })),
                         r = e.map((function(t) {
                            return t.color
                         })),
                         s = r.map((function(t) {
                            return qs(t, .5)
                         })),
                         o = r.map((function(t) {
                            return qs(t, 1)
                         })),
                         a = e.map((function(t) {
                            return t.score_out_of_10.toFixed()
                         })),
                         l = new Us(i, {
                            type: "bar",
                            data: {
                               labels: n,
                               datasets: [{
                                  label: "Scores for ".concat(t),
                                  data: a,
                                  backgroundColor: s,
                                  borderColor: o,
                                  borderWidth: 1
                               }]
                            },
                            options: {
                               responsive: !0,
                               scales: {
                                  y: {
                                     beginAtZero: !0
                                  }
                               }
                            }
                         });
                      this.mainChart = l, document.querySelector(".compare-box").innerHTML = '<span id="compare-label">Compare with:</span><input type="search" id="comparesearch" placeholder="Another city...">\n        <div class="xc-icon"><i class="fas fa-xmark"></i></div>\n        <div class="compare-icon"><i class="fas fa-plus"></i></div>\n        <div class="comp-city-container">\n            <ul id="comparelist"></ul>'
                   }
                }, {
                   key: "addCityToChart",
                   value: function(t, e) {
                      var i = this.mainChart.config.data,
                         n = e.map((function(t) {
                            return t.score_out_of_10.toFixed()
                         })),
                         r = {
                            label: "Scores for ".concat(t),
                            data: n,
                            backgroundColor: "rgba(100,100,100, 0.8)",
                            borderColor: "rgba(100,100,100, 1)",
                            borderWidth: 1
                         };
                      i.datasets.push(r), this.mainChart.update()
                   }
                }, {
                   key: "removeCityToChart",
                   value: function() {
                      this.mainChart.config.data.datasets.pop(), this.mainChart.update()
                   }
                }]), t
             }()
          },
          3232: (t, e, i) => {
             "use strict";
             i.d(e, {
                Z: () => a
             });
             var n = i(8081),
                r = i.n(n),
                s = i(3645),
                o = i.n(s)()(r());
             o.push([t.id, "@media only screen and (min-width: 1200px) {\r\n\r\n    .main-title {\r\n    \r\n        font-size: 8rem;\r\n        line-height: 7rem;\r\n    }    \r\n    \r\n    .search-box {\r\n        width: 25rem;\r\n    }\r\n    \r\n    .search-box input {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    .showcity-container {\r\n        padding-bottom: 3rem;\r\n    }\r\n\r\n    .citydata-wrapper {\r\n        flex-direction: row;\r\n    }\r\n\r\n    .city-summary {\r\n        font-weight: 100;\r\n        max-width: 40vw;\r\n    }\r\n\r\n    .showcity-container {\r\n        background-color: rgb(230, 230, 230);\r\n        width: 50vw;\r\n    }\r\n    \r\n    #skyline-picture {\r\n        \r\n        bottom: -1rem;\r\n        left: 3rem;\r\n        width: 40vw;;\r\n    }\r\n    \r\n    .total-score-container {\r\n      \r\n        align-items:flex-end;\r\n        margin-right: 2rem;\r\n    }\r\n\r\n    .city-scores-chart {\r\n        width: 50vw;\r\n        padding-left: 0;\r\n        padding-top: 3rem;\r\n        padding-bottom: 1rem;\r\n        align-items: flex-start;\r\n    }\r\n\r\n\r\n    .cat-logos {\r\n        width: 40vw;\r\n\r\n    }\r\n    \r\n    .city-scores-chart canvas {\r\n        margin: 0;\r\n        margin-top: 1rem;\r\n        max-height: 400px;\r\n    }\r\n\r\n    .compare-box {\r\n        position: absolute;\r\n        right: 4rem;\r\n        top: 1rem;\r\n    }\r\n\r\n    .search-icon {\r\n        top: 0.7rem;\r\n        right: 1rem;\r\n    }\r\n    \r\n    .x-icon {\r\n        top: 0.5rem;\r\n        right: 3rem;\r\n    }\r\n    \r\n    }", ""]);
             const a = o
          },
          7133: (t, e, i) => {
             "use strict";
             i.d(e, {
                Z: () => a
             });
             var n = i(8081),
                r = i.n(n),
                s = i(3645),
                o = i.n(s)()(r());
             o.push([t.id, '/* Reset Snippet */\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* clears the \'X\' from Chrome */\r\ninput[type="search"]::-webkit-search-decoration,\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-results-button,\r\ninput[type="search"]::-webkit-search-results-decoration { display: none; }\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n    font-size: 20px;\r\n    color: rgb(50, 50, 50);\r\n    background-color: rgba(230,230,230);\r\n    font-family: \'Akshar\', sans-serif;\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.banner-container {\r\n    display: flex;\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 40vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: black;\r\n    background-image: url(\'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-antonio_web-37402dd546.jpg\');\r\n    background-position: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    box-shadow: 0px 5px 10px rgba(0,0,0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* black overlay for emphatize the tile */\r\n\r\n.banner-container::before {\r\n    content: "";\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    background-color: rgba(0,0,0, 0.2);\r\n}\r\n\r\n.main-title {\r\n    display: flex;\r\n    z-index: 1;\r\n    text-align: center;\r\n    margin: 2rem;\r\n    line-height: 6rem;\r\n    font-size: 3.5rem;\r\n    font-weight: bolder;\r\n    color: rgb(230, 230, 230);\r\n    text-shadow: 0px 0px 50px rgba(0,0,0, 0.5);\r\n    z-index: 1;\r\n}\r\n\r\n.search-wrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    z-index: 3;\r\n}\r\n\r\n.search-box {\r\n    display: flex;\r\n    width: 20rem;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: -3vh;\r\n    box-shadow: 0px 5px 5px rgba(0,0,0, 0.2);\r\n    background-color: rgba(230,230,230);\r\n    border-radius: 10px;\r\n}\r\n\r\n.search-icon {\r\n    position: absolute;\r\n    top: 0.4rem;\r\n    right: 1rem;\r\n    font-size: 1.2rem;\r\n    padding: 0.5rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: color ease-in 0.3s;\r\n}\r\n\r\n.x-icon {\r\n    position: absolute;\r\n    top: 0.2rem;\r\n    right: 3rem;\r\n    font-size: 1.2rem;\r\n    padding: 0.7rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: color ease-in 0.3s;\r\n}\r\n\r\n.search-icon:hover{\r\n    color: rgb(34, 187, 139);\r\n}\r\n\r\n.x-icon:hover{\r\n    color: rgb(227, 49, 9);\r\n}\r\n.search-box input {\r\n    border: none;\r\n    font-size: 1rem;\r\n    padding: 1rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 1px 5px rgba(0,0,0, 0.10);\r\n    background-color: rgb(230, 230, 230);\r\n}\r\n\r\n.search-box input:focus {\r\n    outline: none;\r\n}\r\n\r\n.hints-container {\r\n    max-height: 205px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    scrollbar-width: thin;\r\n}\r\n\r\n#citylist li{\r\n    list-style: none;\r\n    padding: 1rem;\r\n    margin: 0.5rem;\r\n    border-radius: 10px;\r\n    border-bottom: 1px dotted rgb(209, 208, 208);\r\n    cursor: default;\r\n    transition: background-color ease-in 0.1s;\r\n}\r\n\r\n#citylist li:focus {\r\n    outline: none;\r\n}\r\n\r\n.highlight {\r\n    background-color: rgb(34, 187, 139);\r\n}\r\n\r\n.citydata-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    z-index: 0;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.showcity-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(230, 230, 230);\r\n    width: 100vw;\r\n    padding: 3rem 3rem;\r\n    min-height: 50vh;\r\n    position: relative;\r\n}\r\n\r\n.city-name h1 {\r\n    position: relative;\r\n    font-size: 3rem;\r\n    font-weight: bolder;\r\n    margin-bottom: 1rem;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(34, 187, 139);\r\n    text-decoration-thickness: 5px ;\r\n}\r\n\r\n.city-name h3 {\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n   \r\n}\r\n\r\n.city-summary {\r\n    font-weight: 100;\r\n    max-width: 80vw;\r\n}\r\n\r\n.city-summary a {\r\n    text-decoration-color: rgb(34, 187, 139);\r\n    text-decoration-thickness: 3px;\r\n    color:rgb(50, 50, 50);\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.city-summary a:hover{\r\n    color: rgb(34, 187, 139);\r\n}\r\n\r\n#skyline-picture {\r\n    position: absolute;\r\n    bottom: -2rem;\r\n    left: -1rem;\r\n    width: 110vw;\r\n    z-index: 0;\r\n}\r\n\r\n\r\n.city-mayor {\r\n    margin-top: 1rem;\r\n    font-weight: 100;\r\n}\r\n\r\n.mayor-score-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.total-score-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.city-total-score {\r\n    padding: 1rem;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    width: 3rem;\r\n    text-shadow: 1px 1px 5px rgba(0,0,0, 0.3);\r\n    cursor: default;\r\n    background-color: rgb(34, 187, 139);\r\n    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),\r\n                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\r\n    border-radius: 50%;\r\n    color: rgb(230,230,230);\r\n    box-shadow: 0px 5px 5px rgba(0,0,0, 0.2);\r\n    margin-top: 2rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.score-label {\r\n    color: rgb(50,50,50);\r\n    font-size: 0.8rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.city-scores-chart {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100vw;\r\n    min-height: 50vh;\r\n    padding-top: 3rem;\r\n    padding-right: 3rem;\r\n    padding-bottom: 3rem;\r\n    padding-left: 3rem;\r\n    font-weight: 100;\r\n    position: relative;\r\n}\r\n\r\n.city-scores-chart canvas {\r\n    margin: 2rem 0;\r\n\r\n}\r\n\r\n.city-scores-chart p {\r\n    margin: 2rem 0;\r\n}\r\n\r\n#now {\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(34, 187, 139);\r\n    text-decoration-thickness: 3px;\r\n    color:rgb(50, 50, 50);\r\n    font-weight: bold;\r\n}\r\n\r\n.chart-title {\r\n    font-size: 2rem;\r\n    font-weight: bolder;\r\n    margin-bottom: 1rem;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(34, 187, 139);\r\n    text-decoration-thickness: 5px ;\r\n}\r\n\r\n.cat-logos {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 100vw;\r\n    font-size: 2rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 0.5rem;\r\n    color: black;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n.prechart-title {\r\n    font-size: 3rem;\r\n    font-weight: bolder;\r\n    margin-bottom: 1rem;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(34, 187, 139);\r\n    text-decoration-thickness: 5px;\r\n}\r\n\r\n.chart-head {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.compare-box {\r\n    display: flex;\r\n    width: 16rem;\r\n    position: relative;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    box-shadow: 0px 5px 5px rgba(0,0,0, 0.2);\r\n    background-color: rgba(230,230,230);\r\n    border-radius: 10px;\r\n    margin-top: 2rem;\r\n}\r\n\r\n#compare-label {\r\n    position: absolute;\r\n    top: -2rem;\r\n    font-size: 1rem;\r\n}\r\n\r\n.compare-icon {\r\n    position: absolute;\r\n    top: -0.05rem;\r\n    right: 0.5rem;\r\n    font-size: 1.1rem;\r\n    padding: 0.5rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: color ease-in 0.3s;  \r\n}\r\n\r\n.xc-icon {\r\n    display: none;\r\n    position: absolute;\r\n    top: -0.2rem;\r\n    right: 0.5rem;\r\n    font-size: 1.1rem;\r\n    padding: 0.7rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: color ease-in 0.3s;\r\n}\r\n\r\n.compare-icon i, .xc-icon i {\r\n    pointer-events: none;\r\n}\r\n\r\n.compare-icon:hover{\r\n    color: rgb(34, 187, 139);\r\n}\r\n\r\n.xc-icon:hover{\r\n    color: rgb(227, 49, 9);\r\n}\r\n.compare-box input {\r\n    outline-style: none;\r\n    position: relative;\r\n    border: none;\r\n    font-size: 1rem;\r\n    padding: 0.5rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 1px 5px rgba(0,0,0, 0.10);\r\n    background-color: rgb(230, 230, 230);\r\n}\r\n\r\n\r\n.comp-city-container {\r\n    max-height: 140px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    scrollbar-width: thin;\r\n}\r\n\r\n#comparelist li {\r\n    font-size: 1rem;\r\n    list-style: none;\r\n    padding: 0.5rem;\r\n    margin: 0.5rem;\r\n    border-radius: 10px;\r\n    border-bottom: 1px dotted rgb(209, 208, 208);\r\n    cursor: default;\r\n    transition: background-color ease-in 0.1s;\r\n}\r\n\r\n#comparelist li:focus {\r\n    outline: none;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: 100;\r\n    min-height: 8vh;\r\n    width: 100vw;\r\n    background-color: rgb(34, 187, 139);\r\n    z-index: 2;\r\n}\r\n\r\n@media only screen and (min-width: 700px) {\r\n\r\n    .main-title {\r\n    \r\n        font-size: 4.5rem;\r\n    }    \r\n    \r\n    .search-box {\r\n        width: 22rem;\r\n    }\r\n    \r\n    .search-box input {\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    .showcity-container {\r\n        padding-bottom: 2rem;\r\n    }\r\n    \r\n    #skyline-picture {\r\n        position: absolute;\r\n        bottom: -4rem;\r\n    }\r\n    \r\n    .city-scores-chart {\r\n        padding-top: 5rem;\r\n    }\r\n    \r\n    .city-scores-chart canvas {\r\n        margin: 4rem;\r\n        max-height: 400px;\r\n    \r\n    }\r\n\r\n    .search-icon {\r\n        top: 0.5rem;\r\n        right: 1rem;\r\n    }\r\n    \r\n    .x-icon {\r\n        top: 0.3rem;\r\n        right: 3rem;\r\n    }\r\n    \r\n    }\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\r\n        .main-title {\r\n        \r\n            font-size: 5.5rem;\r\n        }    \r\n        \r\n        .search-box {\r\n            width: 23rem;\r\n        }\r\n        \r\n        .search-box input {\r\n            font-size: 1.3rem;\r\n        }\r\n        \r\n        .showcity-container {\r\n            padding-bottom: 3rem;\r\n        }\r\n        \r\n        #skyline-picture {\r\n            position: absolute;\r\n            bottom: -5rem;\r\n        }\r\n        \r\n        .city-scores-chart {\r\n            padding-top: 6rem;\r\n        }\r\n        \r\n        .city-scores-chart canvas {\r\n            margin: 4rem;\r\n            max-height: 400px;\r\n        \r\n        }\r\n\r\n        .search-icon {\r\n            top: 0.6rem;\r\n            right: 1rem;\r\n        }\r\n        \r\n        .x-icon {\r\n            top: 0.4rem;\r\n            right: 3rem;\r\n        }\r\n        \r\n        }', ""]);
             const a = o
          },
          3645: t => {
             "use strict";
             t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                   return this.map((function(e) {
                      var i = "",
                         n = void 0 !== e[5];
                      return e[4] && (i += "@supports (".concat(e[4], ") {")), e[2] && (i += "@media ".concat(e[2], " {")), n && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), i += t(e), n && (i += "}"), e[2] && (i += "}"), e[4] && (i += "}"), i
                   })).join("")
                }, e.i = function(t, i, n, r, s) {
                   "string" == typeof t && (t = [
                      [null, t, void 0]
                   ]);
                   var o = {};
                   if (n)
                      for (var a = 0; a < this.length; a++) {
                         var l = this[a][0];
                         null != l && (o[l] = !0)
                      }
                   for (var c = 0; c < t.length; c++) {
                      var h = [].concat(t[c]);
                      n && o[h[0]] || (void 0 !== s && (void 0 === h[5] || (h[1] = "@layer".concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {").concat(h[1], "}")), h[5] = s), i && (h[2] ? (h[1] = "@media ".concat(h[2], " {").concat(h[1], "}"), h[2] = i) : h[2] = i), r && (h[4] ? (h[1] = "@supports (".concat(h[4], ") {").concat(h[1], "}"), h[4] = r) : h[4] = "".concat(r)), e.push(h))
                   }
                }, e
             }
          },
          8081: t => {
             "use strict";
             t.exports = function(t) {
                return t[1]
             }
          },
          1989: (t, e, i) => {
             var n = i(1789),
                r = i(401),
                s = i(7667),
                o = i(1327),
                a = i(1866);
 
             function l(t) {
                var e = -1,
                   i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                   var n = t[e];
                   this.set(n[0], n[1])
                }
             }
             l.prototype.clear = n, l.prototype.delete = r, l.prototype.get = s, l.prototype.has = o, l.prototype.set = a, t.exports = l
          },
          8407: (t, e, i) => {
             var n = i(7040),
                r = i(4125),
                s = i(2117),
                o = i(7518),
                a = i(4705);
 
             function l(t) {
                var e = -1,
                   i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                   var n = t[e];
                   this.set(n[0], n[1])
                }
             }
             l.prototype.clear = n, l.prototype.delete = r, l.prototype.get = s, l.prototype.has = o, l.prototype.set = a, t.exports = l
          },
          7071: (t, e, i) => {
             var n = i(852)(i(5639), "Map");
             t.exports = n
          },
          3369: (t, e, i) => {
             var n = i(4785),
                r = i(1285),
                s = i(6e3),
                o = i(9916),
                a = i(5265);
 
             function l(t) {
                var e = -1,
                   i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                   var n = t[e];
                   this.set(n[0], n[1])
                }
             }
             l.prototype.clear = n, l.prototype.delete = r, l.prototype.get = s, l.prototype.has = o, l.prototype.set = a, t.exports = l
          },
          2705: (t, e, i) => {
             var n = i(5639).Symbol;
             t.exports = n
          },
          9932: t => {
             t.exports = function(t, e) {
                for (var i = -1, n = null == t ? 0 : t.length, r = Array(n); ++i < n;) r[i] = e(t[i], i, t);
                return r
             }
          },
          8470: (t, e, i) => {
             var n = i(7813);
             t.exports = function(t, e) {
                for (var i = t.length; i--;)
                   if (n(t[i][0], e)) return i;
                return -1
             }
          },
          7786: (t, e, i) => {
             var n = i(1811),
                r = i(327);
             t.exports = function(t, e) {
                for (var i = 0, s = (e = n(e, t)).length; null != t && i < s;) t = t[r(e[i++])];
                return i && i == s ? t : void 0
             }
          },
          4239: (t, e, i) => {
             var n = i(2705),
                r = i(9607),
                s = i(2333),
                o = n ? n.toStringTag : void 0;
             t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : s(t)
             }
          },
          8458: (t, e, i) => {
             var n = i(3560),
                r = i(5346),
                s = i(3218),
                o = i(346),
                a = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                c = Object.prototype,
                h = l.toString,
                d = c.hasOwnProperty,
                u = RegExp("^" + h.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
             t.exports = function(t) {
                return !(!s(t) || r(t)) && (n(t) ? u : a).test(o(t))
             }
          },
          531: (t, e, i) => {
             var n = i(2705),
                r = i(9932),
                s = i(1469),
                o = i(3448),
                a = n ? n.prototype : void 0,
                l = a ? a.toString : void 0;
             t.exports = function t(e) {
                if ("string" == typeof e) return e;
                if (s(e)) return r(e, t) + "";
                if (o(e)) return l ? l.call(e) : "";
                var i = e + "";
                return "0" == i && 1 / e == -1 / 0 ? "-0" : i
             }
          },
          1811: (t, e, i) => {
             var n = i(1469),
                r = i(5403),
                s = i(5514),
                o = i(9833);
             t.exports = function(t, e) {
                return n(t) ? t : r(t, e) ? [t] : s(o(t))
             }
          },
          4429: (t, e, i) => {
             var n = i(5639)["__core-js_shared__"];
             t.exports = n
          },
          1957: (t, e, i) => {
             var n = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
             t.exports = n
          },
          5050: (t, e, i) => {
             var n = i(7019);
             t.exports = function(t, e) {
                var i = t.__data__;
                return n(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
             }
          },
          852: (t, e, i) => {
             var n = i(8458),
                r = i(7801);
             t.exports = function(t, e) {
                var i = r(t, e);
                return n(i) ? i : void 0
             }
          },
          9607: (t, e, i) => {
             var n = i(2705),
                r = Object.prototype,
                s = r.hasOwnProperty,
                o = r.toString,
                a = n ? n.toStringTag : void 0;
             t.exports = function(t) {
                var e = s.call(t, a),
                   i = t[a];
                try {
                   t[a] = void 0;
                   var n = !0
                } catch (t) {}
                var r = o.call(t);
                return n && (e ? t[a] = i : delete t[a]), r
             }
          },
          7801: t => {
             t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
             }
          },
          1789: (t, e, i) => {
             var n = i(4536);
             t.exports = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
             }
          },
          401: t => {
             t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
             }
          },
          7667: (t, e, i) => {
             var n = i(4536),
                r = Object.prototype.hasOwnProperty;
             t.exports = function(t) {
                var e = this.__data__;
                if (n) {
                   var i = e[t];
                   return "__lodash_hash_undefined__" === i ? void 0 : i
                }
                return r.call(e, t) ? e[t] : void 0
             }
          },
          1327: (t, e, i) => {
             var n = i(4536),
                r = Object.prototype.hasOwnProperty;
             t.exports = function(t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : r.call(e, t)
             }
          },
          1866: (t, e, i) => {
             var n = i(4536);
             t.exports = function(t, e) {
                var i = this.__data__;
                return this.size += this.has(t) ? 0 : 1, i[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
             }
          },
          5403: (t, e, i) => {
             var n = i(1469),
                r = i(3448),
                s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                o = /^\w*$/;
             t.exports = function(t, e) {
                if (n(t)) return !1;
                var i = typeof t;
                return !("number" != i && "symbol" != i && "boolean" != i && null != t && !r(t)) || o.test(t) || !s.test(t) || null != e && t in Object(e)
             }
          },
          7019: t => {
             t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
             }
          },
          5346: (t, e, i) => {
             var n, r = i(4429),
                s = (n = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
             t.exports = function(t) {
                return !!s && s in t
             }
          },
          7040: t => {
             t.exports = function() {
                this.__data__ = [], this.size = 0
             }
          },
          4125: (t, e, i) => {
             var n = i(8470),
                r = Array.prototype.splice;
             t.exports = function(t) {
                var e = this.__data__,
                   i = n(e, t);
                return !(i < 0 || (i == e.length - 1 ? e.pop() : r.call(e, i, 1), --this.size, 0))
             }
          },
          2117: (t, e, i) => {
             var n = i(8470);
             t.exports = function(t) {
                var e = this.__data__,
                   i = n(e, t);
                return i < 0 ? void 0 : e[i][1]
             }
          },
          7518: (t, e, i) => {
             var n = i(8470);
             t.exports = function(t) {
                return n(this.__data__, t) > -1
             }
          },
          4705: (t, e, i) => {
             var n = i(8470);
             t.exports = function(t, e) {
                var i = this.__data__,
                   r = n(i, t);
                return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this
             }
          },
          4785: (t, e, i) => {
             var n = i(1989),
                r = i(8407),
                s = i(7071);
             t.exports = function() {
                this.size = 0, this.__data__ = {
                   hash: new n,
                   map: new(s || r),
                   string: new n
                }
             }
          },
          1285: (t, e, i) => {
             var n = i(5050);
             t.exports = function(t) {
                var e = n(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
             }
          },
          6e3: (t, e, i) => {
             var n = i(5050);
             t.exports = function(t) {
                return n(this, t).get(t)
             }
          },
          9916: (t, e, i) => {
             var n = i(5050);
             t.exports = function(t) {
                return n(this, t).has(t)
             }
          },
          5265: (t, e, i) => {
             var n = i(5050);
             t.exports = function(t, e) {
                var i = n(this, t),
                   r = i.size;
                return i.set(t, e), this.size += i.size == r ? 0 : 1, this
             }
          },
          4523: (t, e, i) => {
             var n = i(8306);
             t.exports = function(t) {
                var e = n(t, (function(t) {
                      return 500 === i.size && i.clear(), t
                   })),
                   i = e.cache;
                return e
             }
          },
          4536: (t, e, i) => {
             var n = i(852)(Object, "create");
             t.exports = n
          },
          2333: t => {
             var e = Object.prototype.toString;
             t.exports = function(t) {
                return e.call(t)
             }
          },
          5639: (t, e, i) => {
             var n = i(1957),
                r = "object" == typeof self && self && self.Object === Object && self,
                s = n || r || Function("return this")();
             t.exports = s
          },
          5514: (t, e, i) => {
             var n = i(4523),
                r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                s = /\\(\\)?/g,
                o = n((function(t) {
                   var e = [];
                   return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, (function(t, i, n, r) {
                      e.push(n ? r.replace(s, "$1") : i || t)
                   })), e
                }));
             t.exports = o
          },
          327: (t, e, i) => {
             var n = i(3448);
             t.exports = function(t) {
                if ("string" == typeof t || n(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
             }
          },
          346: t => {
             var e = Function.prototype.toString;
             t.exports = function(t) {
                if (null != t) {
                   try {
                      return e.call(t)
                   } catch (t) {}
                   try {
                      return t + ""
                   } catch (t) {}
                }
                return ""
             }
          },
          7813: t => {
             t.exports = function(t, e) {
                return t === e || t != t && e != e
             }
          },
          7361: (t, e, i) => {
             var n = i(7786);
             t.exports = function(t, e, i) {
                var r = null == t ? void 0 : n(t, e);
                return void 0 === r ? i : r
             }
          },
          1469: t => {
             var e = Array.isArray;
             t.exports = e
          },
          3560: (t, e, i) => {
             var n = i(4239),
                r = i(3218);
             t.exports = function(t) {
                if (!r(t)) return !1;
                var e = n(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
             }
          },
          3218: t => {
             t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
             }
          },
          7005: t => {
             t.exports = function(t) {
                return null != t && "object" == typeof t
             }
          },
          3448: (t, e, i) => {
             var n = i(4239),
                r = i(7005);
             t.exports = function(t) {
                return "symbol" == typeof t || r(t) && "[object Symbol]" == n(t)
             }
          },
          8306: (t, e, i) => {
             var n = i(3369);
 
             function r(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var i = function() {
                   var n = arguments,
                      r = e ? e.apply(this, n) : n[0],
                      s = i.cache;
                   if (s.has(r)) return s.get(r);
                   var o = t.apply(this, n);
                   return i.cache = s.set(r, o) || s, o
                };
                return i.cache = new(r.Cache || n), i
             }
             r.Cache = n, t.exports = r
          },
          9833: (t, e, i) => {
             var n = i(531);
             t.exports = function(t) {
                return null == t ? "" : n(t)
             }
          },
          5666: t => {
             var e = function(t) {
                "use strict";
                var e, i = Object.prototype,
                   n = i.hasOwnProperty,
                   r = "function" == typeof Symbol ? Symbol : {},
                   s = r.iterator || "@@iterator",
                   o = r.asyncIterator || "@@asyncIterator",
                   a = r.toStringTag || "@@toStringTag";
 
                function l(t, e, i) {
                   return Object.defineProperty(t, e, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                   }), t[e]
                }
                try {
                   l({}, "")
                } catch (t) {
                   l = function(t, e, i) {
                      return t[e] = i
                   }
                }
 
                function c(t, e, i, n) {
                   var r = e && e.prototype instanceof m ? e : m,
                      s = Object.create(r.prototype),
                      o = new O(n || []);
                   return s._invoke = function(t, e, i) {
                      var n = d;
                      return function(r, s) {
                         if (n === f) throw new Error("Generator is already running");
                         if (n === p) {
                            if ("throw" === r) throw s;
                            return L()
                         }
                         for (i.method = r, i.arg = s;;) {
                            var o = i.delegate;
                            if (o) {
                               var a = S(o, i);
                               if (a) {
                                  if (a === g) continue;
                                  return a
                               }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                               if (n === d) throw n = p, i.arg;
                               i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = f;
                            var l = h(t, e, i);
                            if ("normal" === l.type) {
                               if (n = i.done ? p : u, l.arg === g) continue;
                               return {
                                  value: l.arg,
                                  done: i.done
                               }
                            }
                            "throw" === l.type && (n = p, i.method = "throw", i.arg = l.arg)
                         }
                      }
                   }(t, i, o), s
                }
 
                function h(t, e, i) {
                   try {
                      return {
                         type: "normal",
                         arg: t.call(e, i)
                      }
                   } catch (t) {
                      return {
                         type: "throw",
                         arg: t
                      }
                   }
                }
                t.wrap = c;
                var d = "suspendedStart",
                   u = "suspendedYield",
                   f = "executing",
                   p = "completed",
                   g = {};
 
                function m() {}
 
                function b() {}
 
                function x() {}
                var y = {};
                l(y, s, (function() {
                   return this
                }));
                var v = Object.getPrototypeOf,
                   _ = v && v(v(D([])));
                _ && _ !== i && n.call(_, s) && (y = _);
                var w = x.prototype = m.prototype = Object.create(y);
 
                function k(t) {
                   ["next", "throw", "return"].forEach((function(e) {
                      l(t, e, (function(t) {
                         return this._invoke(e, t)
                      }))
                   }))
                }
 
                function M(t, e) {
                   function i(r, s, o, a) {
                      var l = h(t[r], t, s);
                      if ("throw" !== l.type) {
                         var c = l.arg,
                            d = c.value;
                         return d && "object" == typeof d && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            i("next", t, o, a)
                         }), (function(t) {
                            i("throw", t, o, a)
                         })) : e.resolve(d).then((function(t) {
                            c.value = t, o(c)
                         }), (function(t) {
                            return i("throw", t, o, a)
                         }))
                      }
                      a(l.arg)
                   }
                   var r;
                   this._invoke = function(t, n) {
                      function s() {
                         return new e((function(e, r) {
                            i(t, n, e, r)
                         }))
                      }
                      return r = r ? r.then(s, s) : s()
                   }
                }
 
                function S(t, i) {
                   var n = t.iterator[i.method];
                   if (n === e) {
                      if (i.delegate = null, "throw" === i.method) {
                         if (t.iterator.return && (i.method = "return", i.arg = e, S(t, i), "throw" === i.method)) return g;
                         i.method = "throw", i.arg = new TypeError("The iterator does not provide a 'throw' method")
                      }
                      return g
                   }
                   var r = h(n, t.iterator, i.arg);
                   if ("throw" === r.type) return i.method = "throw", i.arg = r.arg, i.delegate = null, g;
                   var s = r.arg;
                   return s ? s.done ? (i[t.resultName] = s.value, i.next = t.nextLoc, "return" !== i.method && (i.method = "next", i.arg = e), i.delegate = null, g) : s : (i.method = "throw", i.arg = new TypeError("iterator result is not an object"), i.delegate = null, g)
                }
 
                function C(t) {
                   var e = {
                      tryLoc: t[0]
                   };
                   1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }
 
                function P(t) {
                   var e = t.completion || {};
                   e.type = "normal", delete e.arg, t.completion = e
                }
 
                function O(t) {
                   this.tryEntries = [{
                      tryLoc: "root"
                   }], t.forEach(C, this), this.reset(!0)
                }
 
                function D(t) {
                   if (t) {
                      var i = t[s];
                      if (i) return i.call(t);
                      if ("function" == typeof t.next) return t;
                      if (!isNaN(t.length)) {
                         var r = -1,
                            o = function i() {
                               for (; ++r < t.length;)
                                  if (n.call(t, r)) return i.value = t[r], i.done = !1, i;
                               return i.value = e, i.done = !0, i
                            };
                         return o.next = o
                      }
                   }
                   return {
                      next: L
                   }
                }
 
                function L() {
                   return {
                      value: e,
                      done: !0
                   }
                }
                return b.prototype = x, l(w, "constructor", x), l(x, "constructor", b), b.displayName = l(x, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                   var e = "function" == typeof t && t.constructor;
                   return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                   return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, l(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                   return {
                      __await: t
                   }
                }, k(M.prototype), l(M.prototype, o, (function() {
                   return this
                })), t.AsyncIterator = M, t.async = function(e, i, n, r, s) {
                   void 0 === s && (s = Promise);
                   var o = new M(c(e, i, n, r), s);
                   return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                      return t.done ? t.value : o.next()
                   }))
                }, k(w), l(w, a, "Generator"), l(w, s, (function() {
                   return this
                })), l(w, "toString", (function() {
                   return "[object Generator]"
                })), t.keys = function(t) {
                   var e = [];
                   for (var i in t) e.push(i);
                   return e.reverse(),
                      function i() {
                         for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return i.value = n, i.done = !1, i
                         }
                         return i.done = !0, i
                      }
                }, t.values = D, O.prototype = {
                   constructor: O,
                   reset: function(t) {
                      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t)
                         for (var i in this) "t" === i.charAt(0) && n.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = e)
                   },
                   stop: function() {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ("throw" === t.type) throw t.arg;
                      return this.rval
                   },
                   dispatchException: function(t) {
                      if (this.done) throw t;
                      var i = this;
 
                      function r(n, r) {
                         return a.type = "throw", a.arg = t, i.next = n, r && (i.method = "next", i.arg = e), !!r
                      }
                      for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                         var o = this.tryEntries[s],
                            a = o.completion;
                         if ("root" === o.tryLoc) return r("end");
                         if (o.tryLoc <= this.prev) {
                            var l = n.call(o, "catchLoc"),
                               c = n.call(o, "finallyLoc");
                            if (l && c) {
                               if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                               if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            } else if (l) {
                               if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                            } else {
                               if (!c) throw new Error("try statement without catch or finally");
                               if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            }
                         }
                      }
                   },
                   abrupt: function(t, e) {
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                         var r = this.tryEntries[i];
                         if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var s = r;
                            break
                         }
                      }
                      s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                      var o = s ? s.completion : {};
                      return o.type = t, o.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, g) : this.complete(o)
                   },
                   complete: function(t, e) {
                      if ("throw" === t.type) throw t.arg;
                      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                   },
                   finish: function(t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                         var i = this.tryEntries[e];
                         if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), P(i), g
                      }
                   },
                   catch: function(t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                         var i = this.tryEntries[e];
                         if (i.tryLoc === t) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                               var r = n.arg;
                               P(i)
                            }
                            return r
                         }
                      }
                      throw new Error("illegal catch attempt")
                   },
                   delegateYield: function(t, i, n) {
                      return this.delegate = {
                         iterator: D(t),
                         resultName: i,
                         nextLoc: n
                      }, "next" === this.method && (this.arg = e), g
                   }
                }, t
             }(t.exports);
             try {
                regeneratorRuntime = e
             } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
             }
          },
          3379: t => {
             "use strict";
             var e = [];
 
             function i(t) {
                for (var i = -1, n = 0; n < e.length; n++)
                   if (e[n].identifier === t) {
                      i = n;
                      break
                   } return i
             }
 
             function n(t, n) {
                for (var s = {}, o = [], a = 0; a < t.length; a++) {
                   var l = t[a],
                      c = n.base ? l[0] + n.base : l[0],
                      h = s[c] || 0,
                      d = "".concat(c, " ").concat(h);
                   s[c] = h + 1;
                   var u = i(d),
                      f = {
                         css: l[1],
                         media: l[2],
                         sourceMap: l[3],
                         supports: l[4],
                         layer: l[5]
                      };
                   if (-1 !== u) e[u].references++, e[u].updater(f);
                   else {
                      var p = r(f, n);
                      n.byIndex = a, e.splice(a, 0, {
                         identifier: d,
                         updater: p,
                         references: 1
                      })
                   }
                   o.push(d)
                }
                return o
             }
 
             function r(t, e) {
                var i = e.domAPI(e);
                return i.update(t),
                   function(e) {
                      if (e) {
                         if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                         i.update(t = e)
                      } else i.remove()
                   }
             }
             t.exports = function(t, r) {
                var s = n(t = t || [], r = r || {});
                return function(t) {
                   t = t || [];
                   for (var o = 0; o < s.length; o++) {
                      var a = i(s[o]);
                      e[a].references--
                   }
                   for (var l = n(t, r), c = 0; c < s.length; c++) {
                      var h = i(s[c]);
                      0 === e[h].references && (e[h].updater(), e.splice(h, 1))
                   }
                   s = l
                }
             }
          },
          569: t => {
             "use strict";
             var e = {};
             t.exports = function(t, i) {
                var n = function(t) {
                   if (void 0 === e[t]) {
                      var i = document.querySelector(t);
                      if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                         i = i.contentDocument.head
                      } catch (t) {
                         i = null
                      }
                      e[t] = i
                   }
                   return e[t]
                }(t);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(i)
             }
          },
          9216: t => {
             "use strict";
             t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
             }
          },
          3565: (t, e, i) => {
             "use strict";
             t.exports = function(t) {
                var e = i.nc;
                e && t.setAttribute("nonce", e)
             }
          },
          7795: t => {
             "use strict";
             t.exports = function(t) {
                var e = t.insertStyleElement(t);
                return {
                   update: function(i) {
                      ! function(t, e, i) {
                         var n = "";
                         i.supports && (n += "@supports (".concat(i.supports, ") {")), i.media && (n += "@media ".concat(i.media, " {"));
                         var r = void 0 !== i.layer;
                         r && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), n += i.css, r && (n += "}"), i.media && (n += "}"), i.supports && (n += "}");
                         var s = i.sourceMap;
                         s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleTagTransform(n, t, e.options)
                      }(e, t, i)
                   },
                   remove: function() {
                      ! function(t) {
                         if (null === t.parentNode) return !1;
                         t.parentNode.removeChild(t)
                      }(e)
                   }
                }
             }
          },
          4589: t => {
             "use strict";
             t.exports = function(t, e) {
                if (e.styleSheet) e.styleSheet.cssText = t;
                else {
                   for (; e.firstChild;) e.removeChild(e.firstChild);
                   e.appendChild(document.createTextNode(t))
                }
             }
          },
          5861: (t, e, i) => {
             "use strict";
 
             function n(t, e, i, n, r, s, o) {
                try {
                   var a = t[s](o),
                      l = a.value
                } catch (t) {
                   return void i(t)
                }
                a.done ? e(l) : Promise.resolve(l).then(n, r)
             }
 
             function r(t) {
                return function() {
                   var e = this,
                      i = arguments;
                   return new Promise((function(r, s) {
                      var o = t.apply(e, i);
 
                      function a(t) {
                         n(o, r, s, a, l, "next", t)
                      }
 
                      function l(t) {
                         n(o, r, s, a, l, "throw", t)
                      }
                      a(void 0)
                   }))
                }
             }
             i.d(e, {
                Z: () => r
             })
          },
          5671: (t, e, i) => {
             "use strict";
 
             function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
             }
             i.d(e, {
                Z: () => n
             })
          },
          3144: (t, e, i) => {
             "use strict";
 
             function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                   var n = e[i];
                   n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
             }
 
             function r(t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", {
                   writable: !1
                }), t
             }
             i.d(e, {
                Z: () => r
             })
          }
       },
       e = {};
 
    function i(n) {
       var r = e[n];
       if (void 0 !== r) return r.exports;
       var s = e[n] = {
          id: n,
          exports: {}
       };
       return t[n](s, s.exports, i), s.exports
    }
    i.n = t => {
       var e = t && t.__esModule ? () => t.default : () => t;
       return i.d(e, {
          a: e
       }), e
    }, i.d = (t, e) => {
       for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: e[n]
       })
    }, i.g = function() {
       if ("object" == typeof globalThis) return globalThis;
       try {
          return this || new Function("return this")()
       } catch (t) {
          if ("object" == typeof window) return window
       }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
       "use strict";
       var t = i(5861),
          e = i(7757),
          n = i.n(e),
          r = i(3379),
          s = i.n(r),
          o = i(7795),
          a = i.n(o),
          l = i(569),
          c = i.n(l),
          h = i(3565),
          d = i.n(h),
          u = i(9216),
          f = i.n(u),
          p = i(4589),
          g = i.n(p),
          m = i(7133),
          b = {};
       b.styleTagTransform = g(), b.setAttributes = d(), b.insert = c().bind(null, "head"), b.domAPI = a(), b.insertStyleElement = f(), s()(m.Z, b), m.Z && m.Z.locals && m.Z.locals;
       var x = i(3232),
          y = {};
       y.styleTagTransform = g(), y.setAttributes = d(), y.insert = c().bind(null, "head"), y.domAPI = a(), y.insertStyleElement = f(), s()(x.Z, y), x.Z && x.Z.locals && x.Z.locals;
       var v, _ = i(9669),
          w = i.n(_),
          k = i(7856),
          M = i(2360),
          S = i(7361),
          C = new M.Z,
          P = [],
          O = document.querySelector("#citylist"),
          D = document.querySelector("#citysearch"),
          L = document.querySelector(".search-icon"),
          E = document.querySelector(".x-icon"),
          T = document.querySelector(".city-scores-chart");
 
       function A(t, e) {
          var i = t.map((function(t) {
             return '<li tabindex="0">'.concat(t.name, "</li>")
          })).join("");
          e.innerHTML = i
       }
 
       function R(t, e, i, n) {
          e.setCustomValidity("");
          var r = t.target.value.toLowerCase(),
             s = i.filter((function(t) {
                return t.name.toLowerCase().startsWith(r)
             }));
          (i.length === s.length || 1 === s.length && s[0].name.toLowerCase() === r) && (s.length = 0), A(s, n);
          for (var o = n.querySelectorAll("li"), a = function(t) {
                o[t].addEventListener("click", (function(t) {
                   e.value = t.target.textContent, s.length = 0, A(s, n)
                })), o[t].addEventListener("mouseover", (function(e) {
                   n.children[t].classList.add("highlight")
                })), o[t].addEventListener("mouseleave", (function(e) {
                   n.children[t].classList.remove("highlight")
                }))
             }, l = 0; l < o.length; l++) a(l)
       }
 
       function z(t, e, i) {
          try {
             var n = t[t.findIndex((function(t) {
                   return t.name.toLowerCase() === e.value.toLowerCase()
                }))].href,
                r = new k.j(n);
             r.getCityData().then((function() {
                C.setMainTitle(r.cityName.toUpperCase()), C.setCityBanner(r.cityImg), C.setCityName(r.cityName, r.cityNation, r.cityContinent), C.setCitySummary(r.citySummary), C.setCityMayor(r.cityMayor), C.setCityTotalScore(r.cityTotalScore.toFixed()), C.setCityChart(r.cityName, r.cityCatScores)
             })), e.value = "", A([], i)
          } catch (t) {
             e.setCustomValidity("Please insert a valid city name"), e.reportValidity()
          }
       }
 
       function F(t, e, i, n, r) {
          t.preventDefault();
          var s = e;
          switch (t.key) {
             case "Up":
             case "ArrowUp":
                if (s > 0 && s < n.children.length - 2) n.children[s].classList.remove("highlight"), s--, n.children[s].classList.add("highlight"), n.parentElement.scrollTop -= r;
                else {
                   if (!(s > 0 && s >= n.children.length - 2)) {
                      n.children[s].classList.remove("highlight"), i.focus();
                      break
                   }
                   n.children[s].classList.remove("highlight"), s--, n.children[s].classList.add("highlight")
                }
                break;
             case "Down":
             case "ArrowDown":
                s >= 0 && s < 2 && s < n.children.length - 1 ? (n.children[s].classList.remove("highlight"), s++, n.children[s].classList.add("highlight")) : s >= 2 && s < n.children.length - 1 && (n.children[s].classList.remove("highlight"), s++, n.parentElement.scrollTop += r, n.children[s].classList.add("highlight"));
                break;
             case "Enter":
                i.value = n.children[s].textContent, A([], n), i.focus()
          }
          return s
       }(v = (0, t.Z)(n().mark((function t() {
          var e;
          return n().wrap((function(t) {
             for (;;) switch (t.prev = t.next) {
                case 0:
                   return t.prev = 0, t.next = 3, w().get("https://api.teleport.org/api/urban_areas/");
                case 3:
                   return e = t.sent, t.next = 6, S(e, "data._links.ua:item", "Download Error");
                case 6:
                   P = t.sent, t.next = 12;
                   break;
                case 9:
                   t.prev = 9, t.t0 = t.catch(0);
                case 12:
                case "end":
                   return t.stop()
             }
          }), t, null, [
             [0, 9]
          ])
       }))), function() {
          return v.apply(this, arguments)
       })(), D.addEventListener("keyup", (function(t) {
          R(t, D, P, O)
       })), E.addEventListener("click", (function(t) {
          var e;
          e = D, A([], O), e.value = ""
       })), L.addEventListener("click", (function() {
          z(P, D, O)
       })), D.addEventListener("keydown", (function(t) {
          if ("Enter" === t.key) z(P, D, O);
          else if ("Down" === t.key || "ArrowDown" === t.key) try {
             t.preventDefault(), O.children[0].classList.add("highlight"), O.children[0].focus()
          } catch (t) {
             return !1
          }
       }));
       var I = 0;
       O.addEventListener("keydown", (function(t) {
          I = F(t, I, D, O, 66)
       })), T.addEventListener("keyup", (function(t) {
          if (t.target && t.target.matches("#comparesearch")) {
             var e = document.querySelector("#comparesearch"),
                i = document.querySelector("#comparelist");
             R(t, e, P, i)
          }
       })), T.addEventListener("click", (function(t) {
          if (t.target && t.target.matches(".xc-icon")) {
             var e = document.querySelector("#comparesearch"),
                i = document.querySelector(".xc-icon"),
                n = document.querySelector(".compare-icon");
             C.removeCityToChart(), e.value = "", e.readOnly = !1, e.style.backgroundColor = "rgb(230, 230, 230)", i.style.display = "none", n.style.display = "block"
          } else if (t.target && t.target.matches(".compare-icon")) try {
             var r = document.querySelector("#comparesearch"),
                s = document.querySelector("#comparelist"),
                o = document.querySelector(".xc-icon"),
                a = document.querySelector(".compare-icon");
             if (!r.value) return !1;
             var l = P[P.findIndex((function(t) {
                   return t.name.toLowerCase() === r.value.toLowerCase()
                }))].href,
                c = new k.j(l);
             c.getCityData().then((function() {
                C.addCityToChart(c.cityName, c.cityCatScores)
             })), A([], s), r.readOnly = !0, r.style.backgroundColor = "rgba(100, 100, 100, 0.5)", o.style.display = "block", a.style.display = "none"
          } catch (t) {
             compareSearchBar.setCustomValidity("Please insert a valid city name"), compareSearchBar.reportValidity()
          }
       })), T.addEventListener("keydown", (function(t) {
          if (t.target && t.target.matches("#comparesearch")) {
             document.querySelector("#comparesearch");
             var e = document.querySelector("#comparelist");
             if (document.querySelector(".xc-icon"), document.querySelector(".compare-icon"), "Enter" === t.key) {
                var i = document.querySelector("#comparesearch"),
                   n = document.querySelector("#comparelist"),
                   r = document.querySelector(".xc-icon"),
                   s = document.querySelector(".compare-icon"),
                   o = P[P.findIndex((function(t) {
                      return t.name.toLowerCase() === i.value.toLowerCase()
                   }))].href,
                   a = new k.j(o);
                a.getCityData().then((function() {
                   C.addCityToChart(a.cityName, a.cityCatScores)
                })), A([], n), i.readOnly = !0, i.style.backgroundColor = "rgba(100, 100, 100, 0.5)", r.style.display = "block", s.style.display = "none"
             } else if ("Down" === t.key || "ArrowDown" === t.key) try {
                t.preventDefault(), e.children[0].classList.add("highlight"), e.children[0].focus()
             } catch (t) {
                return !1
             }
          }
       }));
       var j = 0;
       T.addEventListener("keydown", (function(t) {
          if (t.target && t.target.matches("li")) {
             var e = document.querySelector("#comparesearch"),
                i = document.querySelector("#comparelist");
             j = F(t, j, e, i, 46)
          }
       }))
    })()
 })();
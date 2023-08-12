// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bsdGV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b9e7bbee272b5391";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1aVTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swiperJs = require("../common/swiper.js");
var _swiperJsDefault = parcelHelpers.interopDefault(_swiperJs);
var _primaryCategoryJs = require("../common/primaryCategory.js");
var _primaryCategoryJsDefault = parcelHelpers.interopDefault(_primaryCategoryJs);
var _notificationJs = require("./notification.js");
var _notificationJsDefault = parcelHelpers.interopDefault(_notificationJs);
var _tabsJs = require("./tabs.js");
var _tabsJsDefault = parcelHelpers.interopDefault(_tabsJs);
var _ratingsJs = require("./ratings.js");
var _ratingsJsDefault = parcelHelpers.interopDefault(_ratingsJs);

},{"./notification.js":"8cRUp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./tabs.js":"akbE2","./ratings.js":"d9MKk","../common/swiper.js":"4oE2f","../common/primaryCategory.js":"6GnxI"}],"8cRUp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../src/img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class Notification {
    _wishlistIcon = document.querySelector(".wishlist-icon");
    _compareIcon = document.querySelector(".compare-icon");
    _closeIcons = document.querySelectorAll(".popup__close");
    _comparePopup = document.querySelector(".compare__popup");
    _wishlistPopup = document.querySelector(".wishlist__popup");
    _compareProductsContainer = document.querySelector(".compare__products--container");
    _wishlistProductsContainer = document.querySelector(".wishlist__products--container");
    _productImgSrc = document.querySelector(".store__card-img").src;
    _messageElement = document.querySelector(".popup__message");
    _removeBtn;
    _src;
    _popupProduct;
    _popupProductImages;
    _items;
    _timeout;
    constructor(){
        document.addEventListener("DOMContentLoaded", (function() {
            this._getItemsFromLS("compareItems", "compare__img", this._compareProductsContainer);
            this._getItemsFromLS("wishlistItems", "wishlist__img", this._wishlistProductsContainer);
            this._changeIconColor("compareItems", this._compareIcon, "compared");
            this._changeIconColor("wishlistItems", this._wishlistIcon, "wishlisted");
        }).bind(this));
        this._wishlistPopup.addEventListener("click", (function(e) {
            this._removeBtn = e.target.closest("svg");
            if (!this._removeBtn) return;
            this._src = this._removeBtn.previousElementSibling.src;
            this._removeElement(this._removeBtn, this._wishlistIcon, "wishlisted");
            this._removeItemFromLS("wishlistItems", this._src);
        }).bind(this));
        this._comparePopup.addEventListener("click", (function(e) {
            this._removeBtn = e.target.closest("svg");
            if (!this._removeBtn) return;
            this._src = this._removeBtn.previousElementSibling.src;
            this._removeElement(this._removeBtn, this._compareIcon, "compared");
            this._removeItemFromLS("compareItems", this._src);
        }).bind(this));
        this._wishlistIcon.addEventListener("click", (function() {
            this._wishlistIcon.classList.add("wishlisted");
            this._wishlistPopup.classList.add("popup--active");
            this._popupPositioner(this._comparePopup, this._wishlistPopup);
            this._showMessage("Item added successfully!", "success");
            this._createPopupElements("wishlist__img", this._wishlistProductsContainer, this._productImgSrc);
        }).bind(this));
        this._compareIcon.addEventListener("click", (function() {
            this._compareIcon.classList.add("compared");
            this._comparePopup.classList.add("popup--active");
            this._popupPositioner(this._wishlistPopup, this._wishlistPopup);
            this._showMessage("Item added successfully!", "success");
            this._createPopupElements("compare__img", this._compareProductsContainer, this._productImgSrc);
        }).bind(this));
        this._closeIcons.forEach((icon)=>{
            icon.addEventListener("click", (e)=>{
                if (e.target.classList.contains("wishlist__popup--close")) this._wishlistPopup.classList.remove("popup--active");
                if (e.target.classList.contains("compare__popup--close")) this._comparePopup.classList.remove("popup--active");
            });
        });
    }
    _createPopupElements(imgClassName, container, src) {
        this._popupProduct = document.createElement("div");
        this._popupProduct.classList.add("popup__product");
        this._popupProductImages = document.querySelectorAll(`.${imgClassName}`);
        if (container.childElementCount >= 4) {
            this._showMessage("Maximum amount of items reached!", "error");
            return;
        }
        for(let i = 0; i < this._popupProductImages.length; i++)if (this._popupProductImages[i].src === this._productImgSrc) {
            this._showMessage("Item already added!", "error");
            return;
        }
        this._popupProduct.innerHTML = `
        <img class="${imgClassName}" src="${src}" alt="" />
        <svg>
           <use xlink:href="${0, _iconsSvgDefault.default}#xMark"></use>
        </svg>
  `;
        if (imgClassName === "wishlist__img" && !localStorage.getItem("wishlistItems")?.includes(this._productImgSrc)) this._saveItemToLS("wishlistItems", this._productImgSrc);
        if (imgClassName === "compare__img" && !localStorage.getItem("compareItems")?.includes(this._productImgSrc)) this._saveItemToLS("compareItems", this._productImgSrc);
        container.appendChild(this._popupProduct);
    }
    _createElementsOnLoad(imgClassName, container, src) {
        this._popupProduct = document.createElement("div");
        this._popupProduct.classList.add("popup__product");
        this._popupProduct.innerHTML = `
  <img class="${imgClassName}" src="${src}" alt="" />
  <svg>
  <use xlink:href="${0, _iconsSvgDefault.default}#xMark"></use>
  </svg>
  `;
        container.appendChild(this._popupProduct);
    }
    _removeElement(element, eventElement, className) {
        element.parentElement.remove();
        this._showMessage("Item removed successfully!", "success");
        if (element.previousElementSibling.src === this._productImgSrc) eventElement.classList.remove(className);
    }
    _popupPositioner(popup, secondPopup) {
        if (!popup.classList.contains("popup--active")) secondPopup.style.bottom = "3rem";
        else secondPopup.style.bottom = "18rem";
    }
    _saveItemToLS(LSItemName, item) {
        if (localStorage.getItem(LSItemName) === null) this._items = [];
        else this._items = JSON.parse(localStorage.getItem(LSItemName));
        this._items.push(item);
        localStorage.setItem(LSItemName, JSON.stringify(this._items));
    }
    _removeItemFromLS(LSItemName, item) {
        if (localStorage.getItem(LSItemName) === null) this._items = [];
        else this._items = JSON.parse(localStorage.getItem(LSItemName));
        this._items.splice(this._items.indexOf(item), 1);
        localStorage.setItem(LSItemName, JSON.stringify(this._items));
    }
    _getItemsFromLS(LSItemName, imgClassName, container) {
        if (localStorage.getItem(LSItemName) === null) this._items = [];
        else this._items = JSON.parse(localStorage.getItem(LSItemName));
        this._items.forEach((item)=>{
            this._createElementsOnLoad(imgClassName, container, item);
        });
    }
    _changeIconColor(LSItemName, icon, className) {
        this._items = JSON.parse(localStorage.getItem(LSItemName));
        if (!this._items) return;
        this._items.some((item)=>{
            if (item === this._productImgSrc) icon.classList.add(className);
        });
    }
    _showMessage(msg, className) {
        this._messageElement.classList.add("message--active");
        this._messageElement.className = "popup__message message--active";
        this._messageElement.classList.add(className);
        this._messageElement.innerText = msg;
        clearTimeout(this._timeout);
        this._timeout = setTimeout(()=>{
            this._messageElement.classList.remove("message--active");
        }, 2000);
    }
}
exports.default = new Notification();

},{"url:../../src/img/icons.svg":"6rOPD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rOPD":[function(require,module,exports) {
module.exports = require("3c8bfe5a031a98aa").getBundleURL("fXzhx") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"3c8bfe5a031a98aa":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"akbE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Tabs {
    _tabs = document.querySelectorAll(".tab");
    _tabsContainer = document.querySelector(".other__stores-tabs-container");
    _tabsContent = document.querySelectorAll(".tab__content");
    _clickedTab;
    constructor(){
        this._tabsContainer.addEventListener("click", this._changeActiveTab.bind(this));
    }
    _removeActiveTab() {
        this._tabs.forEach((tab)=>tab.classList.remove("tab--active"));
    }
    _removeActiveTabContent() {
        this._tabsContent.forEach((tabContent)=>tabContent.classList.remove("content--active"));
    }
    _changeActiveTab(e) {
        this._clickedTab = e.target.closest(".tab");
        if (!this._clickedTab) return;
        this._removeActiveTab();
        this._clickedTab.classList.add("tab--active");
        this._removeActiveTabContent();
        document.querySelector(`.tab__content--${this._clickedTab.dataset.tab}`).classList.add("content--active");
    }
}
exports.default = new Tabs();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9MKk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Ratings {
    _starsTotal = 5;
    _averageRating;
    _starPercentage;
    _starPercentageRounded;
    _starsWrapper = document.querySelector(".stars");
    _star;
    _id;
    _stars = document.querySelectorAll(".stars span");
    constructor(){
        document.addEventListener("DOMContentLoaded", this._getRatings.bind(this));
        this._starsWrapper.addEventListener("click", this._rate.bind(this));
    }
    _rate(e) {
        this._star = e.target.closest(".stars span");
        if (!this._star) return;
        this._starsWrapper.classList.add("disabled-stars");
        this._id = this._star.dataset.id;
        this._stars.forEach((star, index)=>{
            if (index <= this._id) star.classList.add("active-star");
        });
    }
    _getRatings() {
        this._averageRating = document.querySelector(".number-rating").getAttribute("data-rating");
        this._starPercentage = this._averageRating / this._starsTotal * 100;
        // round number
        this._starPercentageRounded = `${Math.round(this._starPercentage / 10) * 10}%`;
        // set width of stars inner to percentage
        document.querySelector(".stars-inner").style.width = this._starPercentageRounded;
        document.querySelector(".number-rating").textContent = this._averageRating;
    }
}
exports.default = new Ratings();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4oE2f":[function(require,module,exports) {
// init Swiper:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    resizeReInit: true,
    slidesOffsetAfter: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GnxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PrimaryCategory {
    _primaryCategoryContainer = document.querySelector(".primary__category");
    _subCategories = this._primaryCategoryContainer.querySelectorAll(".sub__category");
    _categoryItems = this._primaryCategoryContainer.querySelectorAll(".primary__category--item");
    _item;
    _catItem;
    constructor(){
        this._primaryCategoryContainer.addEventListener("click", this._toggleCategory.bind(this));
        document.addEventListener("click", this._hideSubCategory.bind(this));
    }
    _toggleCategory(e) {
        this._activeCategory(e);
        this._item = e.target.closest(".primary__category--item");
        if (!this._item) return;
        this._categoryHandler(this._item);
    }
    _categoryHandler(item) {
        this._subCategories.forEach((category)=>{
            if (category.classList.contains("sub__category--active") && item.dataset.category === category.dataset.category) item.classList.remove("primary__category--item-active");
            if (item.dataset.category === category.dataset.category) category.classList.toggle("sub__category--active");
            if (item.dataset.category !== category.dataset.category) category.classList.remove("sub__category--active");
        });
    }
    _removeActiveCategoryItem() {
        this._categoryItems.forEach((cat)=>{
            cat.classList.remove("primary__category--item-active");
        });
    }
    _activeCategory(e) {
        this._catItem = e.target.closest(".primary__category--item");
        if (!this._catItem) return;
        this._removeActiveCategoryItem();
        this._catItem.classList.add("primary__category--item-active");
    }
    _hideSubCategory(e) {
        if (!this._primaryCategoryContainer.contains(e.target)) {
            this._subCategories.forEach((subCat)=>{
                subCat.classList.remove("sub__category--active");
            });
            this._removeActiveCategoryItem();
        }
    }
}
exports.default = new PrimaryCategory();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bsdGV","1aVTw"], "1aVTw", "parcelRequiree459")

//# sourceMappingURL=third.272b5391.js.map

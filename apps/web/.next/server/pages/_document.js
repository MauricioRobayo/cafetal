(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "../../node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/rfmaj/Projects/calculadora-cafetera/apps/web/pages/_document.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CustomDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 33
        }, this))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        }, void 0, true)
      });
    } finally {
      sheet.seal();
    }
  }

}

/***/ }),

/***/ "../../node_modules/next/dist/client/head-manager.js":
/*!***********************************************************!*\
  !*** ../../node_modules/next/dist/client/head-manager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "../../node_modules/next/dist/client/request-idle-callback.js":
/*!********************************************************************!*\
  !*** ../../node_modules/next/dist/client/request-idle-callback.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../../node_modules/next/dist/client/script.js":
/*!*****************************************************!*\
  !*** ../../node_modules/next/dist/client/script.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "../../node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../../node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/pages/_document.js":
/*!*******************************************************!*\
  !*** ../../node_modules/next/dist/pages/_document.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _documentContext = __webpack_require__(/*! ../shared/lib/document-context */ "../shared/lib/document-context");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "../../node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, Object.assign({}, props)));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react).useContext(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "../../node_modules/next/document.js":
/*!*******************************************!*\
  !*** ../../node_modules/next/document.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "../../node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/document-context":
/*!***********************************************************!*\
  !*** external "next/dist/shared/lib/document-context.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/document-context.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_document.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBNkUxQzlNLGtCQUFBLEdBQXFCZ08sVUFBckI7QUFDQUEsVUFBVSxDQUFDdUUsV0FBWCxHQUF5QjlILGdCQUFnQixDQUFDVCxlQUExQztBQUNBZ0UsVUFBVSxDQUFDb0YsaUJBQVgsR0FBK0IsMFRBQS9COztBQUNBLFNBQVNmLFVBQVQsQ0FBb0JoQyxPQUFwQixFQUE2QmdELE1BQTdCLEVBQXFDO0FBQ2pDLFNBQU9oRCxPQUFPLElBQUssR0FBRWdELE1BQU8sR0FBRUEsTUFBTSxDQUFDdkssUUFBUCxDQUFnQixHQUFoQixJQUF1QixHQUF2QixHQUE2QixHQUFJLE9BQS9EO0FBQ0g7Ozs7Ozs7Ozs7QUMxa0JELHFIQUFrRDs7Ozs7Ozs7Ozs7O0FDQWxEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaGVhZC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgRG9jdW1lbnRDb250ZXh0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Eb2N1bWVudCBleHRlbmRzIERvY3VtZW50PHtcbiAgc3R5bGVUYWdzOiBSZWFjdEVsZW1lbnRbXTtcbn0+IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IERvY3VtZW50Q29udGV4dCkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcblxuICAgIHRyeSB7XG4gICAgICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PlxuICAgICAgICAgICAgc2hlZXQuY29sbGVjdFN0eWxlcyg8QXBwIHsuLi5wcm9wc30gLz4pLFxuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgICAgIHN0eWxlczogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cbiAgICAgICAgICAgIHtzaGVldC5nZXRTdHlsZUVsZW1lbnQoKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNoZWV0LnNlYWwoKTtcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW5pdEhlYWRNYW5hZ2VyO1xuZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcyA9IHZvaWQgMDtcbmNvbnN0IERPTUF0dHJpYnV0ZU5hbWVzID0ge1xuICAgIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGh0bWxGb3I6ICdmb3InLFxuICAgIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICAgIG5vTW9kdWxlOiAnbm9Nb2R1bGUnXG59O1xuZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcyA9IERPTUF0dHJpYnV0ZU5hbWVzO1xuZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oeyB0eXBlICwgcHJvcHMgIH0pIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yKGNvbnN0IHAgaW4gcHJvcHMpe1xuICAgICAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHApKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWU7XG4gICAgICAgIC8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuICAgICAgICBpZiAocHJvcHNbcF0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1twXSB8fCBwLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc2NyaXB0JyAmJiAoYXR0ciA9PT0gJ2FzeW5jJyB8fCBhdHRyID09PSAnZGVmZXInIHx8IGF0dHIgPT09ICdub01vZHVsZScpKSB7XG4gICAgICAgICAgICBlbFthdHRyXSA9ICEhcHJvcHNbcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcHNbcF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgY2hpbGRyZW4gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAgfSA9IHByb3BzO1xuICAgIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJyc7XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xufVxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZSwgY29tcG9uZW50cykge1xuICAgIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgY29uc3QgaGVhZENvdW50RWwgPSBoZWFkRWwucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPW5leHQtaGVhZC1jb3VudF0nKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWhlYWRDb3VudEVsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7XG4gICAgY29uc3Qgb2xkVGFncyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDAsIGogPSBoZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyBpIDwgaGVhZENvdW50OyBpKyssIGogPSBqLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpe1xuICAgICAgICBpZiAoai50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIG9sZFRhZ3MucHVzaChqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuZXdUYWdzID0gY29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pLmZpbHRlcigobmV3VGFnKT0+e1xuICAgICAgICBmb3IobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKXtcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba107XG4gICAgICAgICAgICBpZiAob2xkVGFnLmlzRXF1YWxOb2RlKG5ld1RhZykpIHtcbiAgICAgICAgICAgICAgICBvbGRUYWdzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgb2xkVGFncy5mb3JFYWNoKCh0KT0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpXG4gICAgKTtcbiAgICBuZXdUYWdzLmZvckVhY2goKHQpPT5oZWFkRWwuaW5zZXJ0QmVmb3JlKHQsIGhlYWRDb3VudEVsKVxuICAgICk7XG4gICAgaGVhZENvdW50RWwuY29udGVudCA9IChoZWFkQ291bnQgLSBvbGRUYWdzLmxlbmd0aCArIG5ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCkge1xuICAgIGxldCB1cGRhdGVQcm9taXNlID0gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgICAgIHVwZGF0ZUhlYWQ6IChoZWFkKT0+e1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHVwZGF0ZVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgIT09IHVwZGF0ZVByb21pc2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0ge1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaGVhZC5mb3JFYWNoKChoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoLy8gSWYgdGhlIGZvbnQgdGFnIGlzIGxvYWRlZCBvbmx5IG9uIGNsaWVudCBuYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHdvbid0IGJlIGlubGluZWQuIEluIHRoaXMgY2FzZSByZXZlcnQgdG8gdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgIGgudHlwZSA9PT0gJ2xpbmsnICYmIGgucHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10gJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHJvcHMuaHJlZiA9IGgucHJvcHNbJ2RhdGEtaHJlZiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5wcm9wc1snZGF0YS1ocmVmJ10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRhZ3NbaC50eXBlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29tcG9uZW50ID0gdGFncy50aXRsZSA/IHRhZ3MudGl0bGVbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuICB9ID0gdGl0bGVDb21wb25lbnQucHJvcHM7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ21ldGEnLFxuICAgICAgICAgICAgICAgICAgICAnYmFzZScsXG4gICAgICAgICAgICAgICAgICAgICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICBdLmZvckVhY2goKHR5cGUpPT57XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnRzKHR5cGUsIHRhZ3NbdHlwZV0gfHwgW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pbml0U2NyaXB0TG9hZGVyID0gaW5pdFNjcmlwdExvYWRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX2hlYWRNYW5hZ2VyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xudmFyIF9oZWFkTWFuYWdlciA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBTY3JpcHRDYWNoZSA9IG5ldyBNYXAoKTtcbmNvbnN0IExvYWRDYWNoZSA9IG5ldyBTZXQoKTtcbmNvbnN0IGlnbm9yZVByb3BzID0gW1xuICAgICdvbkxvYWQnLFxuICAgICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gICAgJ2NoaWxkcmVuJyxcbiAgICAnb25FcnJvcicsXG4gICAgJ3N0cmF0ZWd5JywgXG5dO1xuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wcyk9PntcbiAgICBjb25zdCB7IHNyYyAsIGlkICwgb25Mb2FkID0oKT0+e1xuICAgIH0gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAsIGNoaWxkcmVuID0nJyAsIG9uRXJyb3IgLCAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNhY2hlS2V5ID0gaWQgfHwgc3JjO1xuICAgIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWRcbiAgICBpZiAoY2FjaGVLZXkgJiYgTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDb250ZW50cyBvZiB0aGlzIHNjcmlwdCBhcmUgYWxyZWFkeSBsb2FkaW5nL2xvYWRlZFxuICAgIGlmIChTY3JpcHRDYWNoZS5oYXMoc3JjKSkge1xuICAgICAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTtcbiAgICAgICAgLy8gRXhlY3V0ZSBvbkxvYWQgc2luY2UgdGhlIHNjcmlwdCBsb2FkaW5nIGhhcyBiZWd1blxuICAgICAgICBTY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCwgb25FcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgb25Mb2FkLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgb25FcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzcmMpIHtcbiAgICAgICAgU2NyaXB0Q2FjaGUuc2V0KHNyYywgbG9hZFByb21pc2UpO1xuICAgIH1cbiAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTtcbiAgICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XG4gICAgfSBlbHNlIGlmIChzcmMpIHtcbiAgICAgICAgZWwuc3JjID0gc3JjO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKXtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF0dHIgPSBfaGVhZE1hbmFnZXIuRE9NQXR0cmlidXRlTmFtZXNba10gfHwgay50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbn07XG5mdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzKSB7XG4gICAgY29uc3QgeyBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICB9ID0gcHJvcHM7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRMYXp5U2NyaXB0KHByb3BzKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5sb2FkU2NyaXB0KHByb3BzKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluaXRTY3JpcHRMb2FkZXIoc2NyaXB0TG9hZGVySXRlbXMpIHtcbiAgICBzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO1xufVxuZnVuY3Rpb24gU2NyaXB0KHByb3BzKSB7XG4gICAgY29uc3QgeyBzcmMgPScnICwgb25Mb2FkID0oKT0+e1xuICAgIH0gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAsIHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgLCBvbkVycm9yICB9ID0gcHJvcHMsIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wic3JjXCIsIFwib25Mb2FkXCIsIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiwgXCJzdHJhdGVneVwiLCBcIm9uRXJyb3JcIl0pO1xuICAgIC8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuICAgIGNvbnN0IHsgdXBkYXRlU2NyaXB0cyAsIHNjcmlwdHMgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgICAgICAgIGxvYWRMYXp5U2NyaXB0KHByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHN0cmF0ZWd5XG4gICAgXSk7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgICAgIGlmICh1cGRhdGVTY3JpcHRzKSB7XG4gICAgICAgICAgICBzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlID0gKHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkLFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yXG4gICAgICAgICAgICAgICAgfSwgcmVzdFByb3BzKSwgXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHVwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbnZhciBfZGVmYXVsdCA9IFNjcmlwdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2N1bWVudENvbnRleHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5Eb2N1bWVudENvbnRleHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2N1bWVudEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG9jdW1lbnRQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkRvY3VtZW50UHJvcHM7XG4gICAgfVxufSk7XG5leHBvcnRzLkh0bWwgPSBIdG1sO1xuZXhwb3J0cy5NYWluID0gTWFpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9zZXJ2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7XG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2NvbnN0YW50c1wiKTtcbnZhciBfZG9jdW1lbnRDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvZG9jdW1lbnQtY29udGV4dFwiKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbnZhciBfZ2V0UGFnZUZpbGVzID0gcmVxdWlyZShcIi4uL3NlcnZlci9nZXQtcGFnZS1maWxlc1wiKTtcbnZhciBfdXRpbHMxID0gcmVxdWlyZShcIi4uL3NlcnZlci91dGlsc1wiKTtcbnZhciBfaHRtbGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTtcbnZhciBfc2NyaXB0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2xpZW50L3NjcmlwdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lLCBpbkFtcE1vZGUpIHtcbiAgICBjb25zdCBzaGFyZWRGaWxlcyA9ICgwLCBfZ2V0UGFnZUZpbGVzKS5nZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgJy9fYXBwJyk7XG4gICAgY29uc3QgcGFnZUZpbGVzID0gaW5BbXBNb2RlID8gW10gOiAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZWRGaWxlcyxcbiAgICAgICAgcGFnZUZpbGVzLFxuICAgICAgICBhbGxGaWxlczogW1xuICAgICAgICAgICAgLi4ubmV3IFNldChbXG4gICAgICAgICAgICAgICAgLi4uc2hhcmVkRmlsZXMsXG4gICAgICAgICAgICAgICAgLi4ucGFnZUZpbGVzXG4gICAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBidWlsZE1hbmlmZXN0ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLmZpbHRlcigocG9seWZpbGwpPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICApLm1hcCgocG9seWZpbGwpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAga2V5OiBwb2x5ZmlsbCxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgIG5vTW9kdWxlOiB0cnVlLFxuICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWBcbiAgICAgICAgfSlcbiAgICApO1xufVxuZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dCwgcHJvcHMpIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlLCBpbmRleCk9PntcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBzY3JpcHRQcm9wcywge1xuICAgICAgICAgICAga2V5OiBzY3JpcHRQcm9wcy5zcmMgfHwgaW5kZXgsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgfSkpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCwgcHJvcHMsIGZpbGVzKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgaXNEZXZlbG9wbWVudCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcCgoZmlsZSk9PntcbiAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSB8fCBmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhmaWxlKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgYXN5bmM6ICFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFNjcmlwdHMoY29udGV4dCwgcHJvcHMsIGZpbGVzKSB7XG4gICAgdmFyIHJlZjtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgYnVpbGRNYW5pZmVzdCAsIGlzRGV2ZWxvcG1lbnQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKCcuanMnKVxuICAgICk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gKHJlZiA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApO1xuICAgIHJldHVybiBbXG4gICAgICAgIC4uLm5vcm1hbFNjcmlwdHMsXG4gICAgICAgIC4uLmxvd1ByaW9yaXR5U2NyaXB0c1xuICAgIF0ubWFwKChmaWxlKT0+e1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5jbGFzcyBEb2N1bWVudDEgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHApPT57XG4gICAgICAgICAgICByZXR1cm4gKHByb3BzKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcHJvcHMpKVxuICAgICAgICAgICAgO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGh0bWwgLCBoZWFkICB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2Uoe1xuICAgICAgICAgICAgZW5oYW5jZUFwcFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgLi4uKDAsIF9zZXJ2ZXIpLmRlZmF1bHQoKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGhlYWQsXG4gICAgICAgICAgICBzdHlsZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50Q29tcG9uZW50LCBwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvY3VtZW50Q29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcHJvcHMpKSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsIG51bGwpKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERvY3VtZW50MTtcbmZ1bmN0aW9uIEh0bWwocHJvcHMpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSAsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCAsIGxvY2FsZSAgfSA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQpO1xuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCBwcm9wcywge1xuICAgICAgICBsYW5nOiBwcm9wcy5sYW5nIHx8IGxvY2FsZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIGFtcDogaW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWQsXG4gICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICB9KSkpO1xufVxuY2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICAgIGdldENzc0xpbmtzKGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGR5bmFtaWNJbXBvcnRzICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKT0+Zi5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7XG4gICAgICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgICAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgICAgICBsZXQgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoW10pO1xuICAgICAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICApKSk7XG4gICAgICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpO1xuICAgICAgICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcigoZik9PiEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChkeW5hbWljQ3NzRmlsZXMpO1xuICAgICAgICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjc3NMaW5rRWxlbWVudHMgPSBbXTtcbiAgICAgICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSk9PntcbiAgICAgICAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKTtcbiAgICAgICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUykge1xuICAgICAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGAke2ZpbGV9LXByZWxvYWRgLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpO1xuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uLWdcIjogaXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgXCJkYXRhLW4tcFwiOiBpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUykge1xuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNzc0xpbmtFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzO1xuICAgIH1cbiAgICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICAgICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcCgoZmlsZSk9PntcbiAgICAgICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgc2NyaXB0TG9hZGVyICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSk9PntcbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGZpbGUuc3JjLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLCBcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbikge1xuICAgICAgICBjb25zdCB7IHNjcmlwdExvYWRlciAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRDaGlsZHJlbiA9IFtdO1xuICAgICAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3NjcmlwdC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLnN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoW1xuICAgICAgICAgICAgICAgICAgICAnbGF6eU9ubG9hZCcsXG4gICAgICAgICAgICAgICAgICAgICdhZnRlckludGVyYWN0aXZlJ1xuICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoY2hpbGQucHJvcHMuc3RyYXRlZ3kpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlciA9IHNjcmlwdExvYWRlckl0ZW1zO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSwgKGMpPT57XG4gICAgICAgICAgICBpZiAoYy50eXBlID09PSAnbGluaycgJiYgYy5wcm9wc1snaHJlZiddICYmIF9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHsgdXJsICB9KT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jLnByb3BzIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGVzICwgYW1wUGF0aCAsIGluQW1wTW9kZSAsIGh5YnJpZEFtcCAsIGNhbm9uaWNhbEJhc2UgLCBfX05FWFRfREFUQV9fICwgZGFuZ2Vyb3VzQXNQYXRoICwgaGVhZFRhZ3MgLCB1bnN0YWJsZV9ydW50aW1lSlMgLCB1bnN0YWJsZV9Kc1ByZWxvYWQgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZTtcbiAgICAgICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9IHVuc3RhYmxlX0pzUHJlbG9hZCA9PT0gZmFsc2UgfHwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nO1xuICAgICAgICB0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQgPSB0cnVlO1xuICAgICAgICBsZXQgeyBoZWFkICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBsZXQgY3NzUHJlbG9hZHMgPSBbXTtcbiAgICAgICAgbGV0IG90aGVySGVhZEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmIChoZWFkKSB7XG4gICAgICAgICAgICBoZWFkLmZvckVhY2goKGMpPT57XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy50eXBlID09PSAnbGluaycgJiYgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJiBjLnByb3BzWydhcyddID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYyAmJiBvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYgPSBjaGlsZC5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWZbJ2RhdGEtcmVhY3QtaGVsbWV0J107XG4gICAgICAgICAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoaWxkLnR5cGUpID09PSAnbWV0YScgJiYgKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IGNoaWxkLnByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLm5hbWUpID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKSBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIWluQW1wTW9kZSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKTtcbiAgICAgICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZTtcbiAgICAgICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlO1xuICAgICAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgICAgIGhlYWQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlICwgcHJvcHMgIH0gPSBjaGlsZDtcbiAgICAgICAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFkUHJvcCA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgICAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xIHx8IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9ICcvPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgICAgIGNvbnN0IGN1clN0eWxlcyA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKSA/IHN0eWxlcyA6IFtdO1xuICAgICAgICBpZiAoaW5BbXBNb2RlICYmIHN0eWxlcyAmJiAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgc3R5bGVzLnByb3BzICYmIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbCk9PntcbiAgICAgICAgICAgICAgICB2YXIgcmVmMiwgcmVmMztcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYyID0gZWwucHJvcHMpID09PSBudWxsIHx8IHJlZjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYzID0gcmVmMi5kYW5nZXJvdXNseVNldElubmVySFRNTCkgPT09IG51bGwgfHwgcmVmMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMy5fX2h0bWw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICAgICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKT0+aGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgaW5BbXBNb2RlKTtcbiAgICAgICAgdmFyIF9ub25jZSwgX25vbmNlMTtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHRoaXMucHJvcHMpLCB0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogaW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZFxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSksIGNoaWxkcmVuLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcIm5leHQtZm9udC1wcmVjb25uZWN0XCJcbiAgICAgICAgfSksIGhlYWQsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWhlYWQtY291bnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKClcbiAgICAgICAgfSksIGluQW1wTW9kZSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgIH0pLCAhaGFzQ2Fub25pY2FsUmVsICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcImNhbm9uaWNhbFwiLFxuICAgICAgICAgICAgaHJlZjogY2Fub25pY2FsQmFzZSArICgwLCBfdXRpbHMxKS5jbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgfSksIHN0eWxlcyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImFtcC1jdXN0b21cIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXMubWFwKChzdHlsZSk9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbFxuICAgICAgICAgICAgICAgICkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImFtcC1ib2lsZXJwbGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtYm9pbGVycGxhdGVcIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICB9KSksICFpbkFtcE1vZGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwiYW1waHRtbFwiLFxuICAgICAgICAgICAgaHJlZjogY2Fub25pY2FsQmFzZSArIGdldEFtcFBhdGgoYW1wUGF0aCwgZGFuZ2Vyb3VzQXNQYXRoKVxuICAgICAgICB9KSwgIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksICFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uLWNzc1wiOiAoX25vbmNlID0gdGhpcy5wcm9wcy5ub25jZSkgIT09IG51bGwgJiYgX25vbmNlICE9PSB2b2lkIDAgPyBfbm9uY2UgOiAnJ1xuICAgICAgICB9KSwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1pbWFnZS1wcmVsb2FkXCJcbiAgICAgICAgfSksICFkaXNhYmxlUnVudGltZUpTICYmICFkaXNhYmxlSnNQcmVsb2FkICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwgIWRpc2FibGVSdW50aW1lSlMgJiYgIWRpc2FibGVKc1ByZWxvYWQgJiYgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKSwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbi1jc3NcIjogKF9ub25jZTEgPSB0aGlzLnByb3BzLm5vbmNlKSAhPT0gbnVsbCAmJiBfbm9uY2UxICE9PSB2b2lkIDAgPyBfbm9uY2UxIDogJydcbiAgICAgICAgfSksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIlxuICAgICAgICB9KSwgc3R5bGVzIHx8IG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIHtcbiAgICAgICAgfSwgLi4uaGVhZFRhZ3MgfHwgW10pKSk7XG4gICAgfVxufVxuZXhwb3J0cy5IZWFkID0gSGVhZDtcbkhlYWQuY29udGV4dFR5cGUgPSBfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtcbmZ1bmN0aW9uIE1haW4oKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUgLCBodG1sICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dCk7XG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlO1xuICAgIGlmIChpbkFtcE1vZGUpIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQpKTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgaWQ6IFwiX19uZXh0XCIsXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICBfX2h0bWw6IGh0bWxcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cbmNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICAgICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGdldFNjcmlwdHMoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBfX05FWFRfREFUQV9fICB9ID0gZG9jdW1lbnRQcm9wcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKTtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2h0bWxlc2NhcGUpLmh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY2lyY3VsYXItc3RydWN0dXJlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgaW5BbXBNb2RlICwgYnVpbGRNYW5pZmVzdCAsIHVuc3RhYmxlX3J1bnRpbWVKUyAsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XG4gICAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsIFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICBpZDogXCJfX05FWFRfREFUQV9fXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHRydWVcbiAgICAgICAgICAgIH0pLCBhbXBEZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pIGNvbnNvbGUud2FybignV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LCB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLCBpbkFtcE1vZGUpO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSA6IG51bGwsIGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGlkOiBcIl9fTkVYVF9EQVRBX19cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuTmV4dFNjcmlwdCA9IE5leHRTY3JpcHQ7XG5OZXh0U2NyaXB0LmNvbnRleHRUeXBlID0gX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7XG5OZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4ID0gJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztcbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCwgYXNQYXRoKSB7XG4gICAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIlNlcnZlclN0eWxlU2hlZXQiLCJDdXN0b21Eb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInNoZWV0Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsImNvbGxlY3RTdHlsZXMiLCJpbml0aWFsUHJvcHMiLCJzdHlsZXMiLCJnZXRTdHlsZUVsZW1lbnQiLCJzZWFsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJhdHRyIiwidG9Mb3dlckNhc2UiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwiX19odG1sIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwidXBkYXRlRWxlbWVudHMiLCJjb21wb25lbnRzIiwiaGVhZEVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWFkQ291bnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWFkQ291bnQiLCJOdW1iZXIiLCJjb250ZW50Iiwib2xkVGFncyIsImkiLCJqIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJwdXNoIiwibmV3VGFncyIsIm1hcCIsImZpbHRlciIsIm5ld1RhZyIsImsiLCJsZW4iLCJsZW5ndGgiLCJvbGRUYWciLCJpc0VxdWFsTm9kZSIsInNwbGljZSIsImZvckVhY2giLCJ0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwidG9TdHJpbmciLCJ1cGRhdGVQcm9taXNlIiwibW91bnRlZEluc3RhbmNlcyIsIlNldCIsInVwZGF0ZUhlYWQiLCJoZWFkIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInRhZ3MiLCJoIiwiaHJlZiIsInRpdGxlQ29tcG9uZW50IiwidGl0bGUiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsImluaXRTY3JpcHRMb2FkZXIiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9oZWFkTWFuYWdlciIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsIlNjcmlwdENhY2hlIiwiTWFwIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0Iiwic3JjIiwib25Mb2FkIiwib25FcnJvciIsImNhY2hlS2V5IiwiaGFzIiwiYWRkIiwiZ2V0IiwibG9hZFByb21pc2UiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNhdGNoIiwic2V0IiwiZW50cmllcyIsImluY2x1ZGVzIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCIsInN0cmF0ZWd5IiwibG9hZExhenlTY3JpcHQiLCJyZWFkeVN0YXRlIiwic2NyaXB0TG9hZGVySXRlbXMiLCJTY3JpcHQiLCJyZXN0UHJvcHMiLCJ1cGRhdGVTY3JpcHRzIiwic2NyaXB0cyIsInVzZUNvbnRleHQiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJiZWZvcmVJbnRlcmFjdGl2ZSIsIl9kZWZhdWx0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiSHRtbCIsIk1haW4iLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2NvbnN0YW50cyIsIl9kb2N1bWVudENvbnRleHQiLCJfZ2V0UGFnZUZpbGVzIiwiX3V0aWxzMSIsIl9odG1sZXNjYXBlIiwiX3NjcmlwdCIsIl9fZXNNb2R1bGUiLCJuZXdPYmoiLCJkZXNjIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwYXRobmFtZSIsImluQW1wTW9kZSIsInNoYXJlZEZpbGVzIiwiZ2V0UGFnZUZpbGVzIiwicGFnZUZpbGVzIiwiYWxsRmlsZXMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJjb250ZXh0IiwiYXNzZXRQcmVmaXgiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwiZW5kc1dpdGgiLCJkZWZlciIsIm5vbmNlIiwiY3Jvc3NPcmlnaW4iLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NST1NTX09SSUdJTiIsImdldFByZU5leHRTY3JpcHRzIiwic2NyaXB0TG9hZGVyIiwiZmlsZSIsImluZGV4Iiwic2NyaXB0UHJvcHMiLCJhc3NpZ24iLCJnZXREeW5hbWljQ2h1bmtzIiwiZmlsZXMiLCJkeW5hbWljSW1wb3J0cyIsImlzRGV2ZWxvcG1lbnQiLCJhc3luYyIsImVuY29kZVVSSSIsImdldFNjcmlwdHMiLCJyZWYiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsIkRvY3VtZW50MSIsIkNvbXBvbmVudCIsImh0bWwiLCJyZW5kZXJEb2N1bWVudCIsIkRvY3VtZW50Q29tcG9uZW50IiwiUHJvdmlkZXIiLCJyZW5kZXIiLCJIZWFkIiwiTmV4dFNjcmlwdCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsImxhbmciLCJhbXAiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJfX05FWFRfT1BUSU1JWkVfQ1NTIiwicmVsIiwiYXMiLCJpc1VubWFuYWdlZEZpbGUiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJtYWtlU3R5bGVzaGVldEluZXJ0IiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9fTkVYVF9EQVRBX18iLCJub2RlIiwiYyIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInNvbWUiLCJ1cmwiLCJzdGFydHNXaXRoIiwibmV3UHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwidG9BcnJheSIsImlzUmVhY3RIZWxtZXQiLCJyZWYxIiwid2FybiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwicmVmMiIsInJlZjMiLCJfbm9uY2UiLCJfbm9uY2UxIiwiRnJhZ21lbnQiLCJjb3VudCIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJfX05FWFRfT1BUSU1JWkVfSU1BR0VTIiwiY29udGV4dFR5cGUiLCJBTVBfUkVOREVSX1RBUkdFVCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwiYW1wRGV2RmlsZXMiLCJkZXZGaWxlcyIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==
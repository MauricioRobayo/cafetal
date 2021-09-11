"use strict";
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./components/TestComponent.tsx":
/*!**************************************!*\
  !*** ./components/TestComponent.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/home/rfmaj/Projects/calculadora-cafetera/apps/web/components/TestComponent.tsx";
function TestComponent() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "\uD83D\uDE4B\u200D\u2642\uFE0F component"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostSlugs": () => (/* binding */ getPostSlugs),
/* harmony export */   "getPostBySlug": () => (/* binding */ getPostBySlug),
/* harmony export */   "getAllPosts": () => (/* binding */ getAllPosts),
/* harmony export */   "sortByDateDesc": () => (/* binding */ sortByDateDesc)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const articlesPath = "articles";

if (!articlesPath) {
  throw new Error('Could not load `articlesPath` environment variable');
}

const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), articlesPath);
function getPostSlugs() {
  return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields)).sort(sortByDateDesc);
  return posts;
}
function sortByDateDesc(a, b) {
  return a.date > b.date ? -1 : 1;
}

/***/ }),

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.ts");
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote/serialize */ "next-mdx-remote/serialize");
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote */ "next-mdx-remote");
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-math */ "remark-math");
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_math__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rehype-katex */ "rehype-katex");
/* harmony import */ var _components_TestComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TestComponent */ "./components/TestComponent.tsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_katex__WEBPACK_IMPORTED_MODULE_5__]);
rehype_katex__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

var _jsxFileName = "/home/rfmaj/Projects/calculadora-cafetera/apps/web/pages/blog/[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Post({
  post
}) {
  console.log({
    'post.content': post.content
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__.MDXRemote, _objectSpread(_objectSpread({}, post.content), {}, {
      components: {
        TestComponent: _components_TestComponent__WEBPACK_IMPORTED_MODULE_6__.default
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
async function getStaticProps({
  params
}) {
  const post = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getPostBySlug)(params.slug, ['title', 'date', 'content', 'image']);
  const content = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__.serialize)(post.content || '', {
    mdxOptions: {
      remarkPlugins: [(remark_math__WEBPACK_IMPORTED_MODULE_4___default())],
      rehypePlugins: [rehype_katex__WEBPACK_IMPORTED_MODULE_5__.default]
    }
  });
  return {
    props: {
      post: _objectSpread(_objectSpread({}, post), {}, {
        content
      })
    }
  };
}
async function getStaticPaths() {
  const posts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.getAllPosts)(['slug']);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
});

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "rehype-katex":
/*!*******************************!*\
  !*** external "rehype-katex" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ "remark-math":
/*!******************************!*\
  !*** external "remark-math" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("remark-math");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vbGliL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtbWR4LXJlbW90ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVoeXBlLWthdGV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVtYXJrLW1hdGhcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0Q29tcG9uZW50KCkge1xuICByZXR1cm4gPGRpdj7wn5mL4oCN4pmC77iPIGNvbXBvbmVudDwvZGl2Pjtcbn1cbiIsImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcblxuY29uc3QgYXJ0aWNsZXNQYXRoID0gcHJvY2Vzcy5lbnYuYXJ0aWNsZXNQYXRoO1xuXG5pZiAoIWFydGljbGVzUGF0aCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBsb2FkIGBhcnRpY2xlc1BhdGhgIGVudmlyb25tZW50IHZhcmlhYmxlJyk7XG59XG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCBhcnRpY2xlc1BhdGgpO1xuXG50eXBlIEl0ZW1zID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdFNsdWdzKCkge1xuICByZXR1cm4gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnOiBzdHJpbmcsIGZpZWxkczogc3RyaW5nW10gPSBbXSkge1xuICBjb25zdCByZWFsU2x1ZyA9IHNsdWcucmVwbGFjZSgvXFwubWR4JC8sICcnKTtcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtyZWFsU2x1Z30ubWR4YCk7XG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICBjb25zdCBpdGVtczogSXRlbXMgPSB7fTtcblxuICAvLyBFbnN1cmUgb25seSB0aGUgbWluaW1hbCBuZWVkZWQgZGF0YSBpcyBleHBvc2VkXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZCA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpdGVtc1tmaWVsZF0gPSBjb250ZW50O1xuICAgIH1cblxuICAgIGlmIChkYXRhW2ZpZWxkXSkge1xuICAgICAgaXRlbXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhmaWVsZHM6IHN0cmluZ1tdID0gW10pIHtcbiAgY29uc3Qgc2x1Z3MgPSBnZXRQb3N0U2x1Z3MoKTtcbiAgY29uc3QgcG9zdHMgPSBzbHVnc1xuICAgIC5tYXAoKHNsdWcpID0+IGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzKSlcbiAgICAuc29ydChzb3J0QnlEYXRlRGVzYyk7XG4gIHJldHVybiBwb3N0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCeURhdGVEZXNjKGE6IEl0ZW1zLCBiOiBJdGVtcykge1xuICByZXR1cm4gYS5kYXRlID4gYi5kYXRlID8gLTEgOiAxO1xufVxuIiwiaW1wb3J0IHsgZ2V0QWxsUG9zdHMsIGdldFBvc3RCeVNsdWcgfSBmcm9tICcuLi8uLi9saWIvYXBpJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ25leHQtbWR4LXJlbW90ZS9zZXJpYWxpemUnO1xuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlJztcbmltcG9ydCByZW1hcmtNYXRoIGZyb20gJ3JlbWFyay1tYXRoJztcbmltcG9ydCByZWh5cGVLYXRleCBmcm9tICdyZWh5cGUta2F0ZXgnO1xuaW1wb3J0IFRlc3RDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50JztcblxudHlwZSBQYXJhbXMgPSB7XG4gIHBhcmFtczoge1xuICAgIHNsdWc6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH06IGFueSkge1xuICBjb25zb2xlLmxvZyh7ICdwb3N0LmNvbnRlbnQnOiBwb3N0LmNvbnRlbnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeycgJ31cbiAgICAgIDxNRFhSZW1vdGUgey4uLnBvc3QuY29udGVudH0gY29tcG9uZW50cz17eyBUZXN0Q29tcG9uZW50IH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9OiBQYXJhbXMpIHtcbiAgY29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcsIFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnY29udGVudCcsXG4gICAgJ2ltYWdlJyxcbiAgXSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBzZXJpYWxpemUocG9zdC5jb250ZW50IHx8ICcnLCB7XG4gICAgbWR4T3B0aW9uczoge1xuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya01hdGhdLFxuICAgICAgcmVoeXBlUGx1Z2luczogW3JlaHlwZUthdGV4XSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiB7XG4gICAgICAgIC4uLnBvc3QsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbJ3NsdWcnXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtbWR4LXJlbW90ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gaW1wb3J0KFwicmVoeXBlLWthdGV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstbWF0aFwiKTsiXSwibmFtZXMiOlsiVGVzdENvbXBvbmVudCIsImZzIiwiam9pbiIsIm1hdHRlciIsImFydGljbGVzUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsInBvc3RzRGlyZWN0b3J5IiwiY3dkIiwiZ2V0UG9zdFNsdWdzIiwicmVhZGRpclN5bmMiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1Z3MiLCJwb3N0cyIsIm1hcCIsInNvcnQiLCJzb3J0QnlEYXRlRGVzYyIsImEiLCJiIiwiZGF0ZSIsInNlcmlhbGl6ZSIsIk1EWFJlbW90ZSIsInJlbWFya01hdGgiLCJyZWh5cGVLYXRleCIsIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwibWR4T3B0aW9ucyIsInJlbWFya1BsdWdpbnMiLCJyZWh5cGVQbHVnaW5zIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ "./styles/global.ts");


var _jsxFileName = "/home/rfmaj/Projects/calculadora-cafetera/apps/web/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CustomApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.defaultTheme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_normalize__WEBPACK_IMPORTED_MODULE_1__.Normalize, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    color: ${({
  theme
}) => theme.color.text1};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: normal
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTheme": () => (/* binding */ defaultTheme)
/* harmony export */ });
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);

const brandHsl = {
  h: 349,
  s: 83,
  l: 35
};
const brandColor = color__WEBPACK_IMPORTED_MODULE_0___default()(brandHsl);
const defaultTheme = {
  color: {
    brand: brandColor.hex(),
    text1: brandColor.lightness(10).hex(),
    text2: brandColor.saturationl(30).lightness(30).hex(),
    surface1: brandColor.saturationl(20).lightness(99).hex(),
    surface2: brandColor.saturationl(20).lightness(92).hex(),
    surface3: brandColor.saturationl(25).lightness(90).hex(),
    surface4: brandColor.saturationl(20).lightness(85).hex(),
    surfaceShadow: brandColor.saturationl(10).lighten(0.2).alpha(0.02).hex()
  }
};

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNJLFNBQVQsQ0FBbUI7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQW5CLEVBQXVEO0FBQ3JELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBZSxXQUFLLEVBQUVKLHVEQUF0QjtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLFNBQUQsb0JBQWVJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBU0Q7O0FBRUQsaUVBQWVGLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQSxNQUFNRCxXQUFXLGdCQUFHSSxnRUFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiQTtBQWVBLGlFQUFlUCxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBR0EsTUFBTVMsUUFBUSxHQUFHO0FBQ2ZDLEVBQUFBLENBQUMsRUFBRSxHQURZO0FBRWZDLEVBQUFBLENBQUMsRUFBRSxFQUZZO0FBR2ZDLEVBQUFBLENBQUMsRUFBRTtBQUhZLENBQWpCO0FBS0EsTUFBTUMsVUFBVSxHQUFHTCw0Q0FBSyxDQUFDQyxRQUFELENBQXhCO0FBRU8sTUFBTVYsWUFBMEIsR0FBRztBQUN4Q08sRUFBQUEsS0FBSyxFQUFFO0FBQ0xRLElBQUFBLEtBQUssRUFBRUQsVUFBVSxDQUFDRSxHQUFYLEVBREY7QUFFTFIsSUFBQUEsS0FBSyxFQUFFTSxVQUFVLENBQUNHLFNBQVgsQ0FBcUIsRUFBckIsRUFBeUJELEdBQXpCLEVBRkY7QUFHTEUsSUFBQUEsS0FBSyxFQUFFSixVQUFVLENBQUNLLFdBQVgsQ0FBdUIsRUFBdkIsRUFBMkJGLFNBQTNCLENBQXFDLEVBQXJDLEVBQXlDRCxHQUF6QyxFQUhGO0FBSUxJLElBQUFBLFFBQVEsRUFBRU4sVUFBVSxDQUFDSyxXQUFYLENBQXVCLEVBQXZCLEVBQTJCRixTQUEzQixDQUFxQyxFQUFyQyxFQUF5Q0QsR0FBekMsRUFKTDtBQUtMSyxJQUFBQSxRQUFRLEVBQUVQLFVBQVUsQ0FBQ0ssV0FBWCxDQUF1QixFQUF2QixFQUEyQkYsU0FBM0IsQ0FBcUMsRUFBckMsRUFBeUNELEdBQXpDLEVBTEw7QUFNTE0sSUFBQUEsUUFBUSxFQUFFUixVQUFVLENBQUNLLFdBQVgsQ0FBdUIsRUFBdkIsRUFBMkJGLFNBQTNCLENBQXFDLEVBQXJDLEVBQXlDRCxHQUF6QyxFQU5MO0FBT0xPLElBQUFBLFFBQVEsRUFBRVQsVUFBVSxDQUFDSyxXQUFYLENBQXVCLEVBQXZCLEVBQTJCRixTQUEzQixDQUFxQyxFQUFyQyxFQUF5Q0QsR0FBekMsRUFQTDtBQVFMUSxJQUFBQSxhQUFhLEVBQUVWLFVBQVUsQ0FBQ0ssV0FBWCxDQUF1QixFQUF2QixFQUEyQk0sT0FBM0IsQ0FBbUMsR0FBbkMsRUFBd0NDLEtBQXhDLENBQThDLElBQTlDLEVBQW9EVixHQUFwRDtBQVJWO0FBRGlDLENBQW5DOzs7Ozs7Ozs7O0FDVlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLW5vcm1hbGl6ZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgTm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcblxuZnVuY3Rpb24gQ3VzdG9tQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2RlZmF1bHRUaGVtZX0+XG4gICAgICAgIDxOb3JtYWxpemUgLz5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tQXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIGJvZHkge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnRleHQxfTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJztcbmltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgYnJhbmRIc2wgPSB7XG4gIGg6IDM0OSxcbiAgczogODMsXG4gIGw6IDM1LFxufTtcbmNvbnN0IGJyYW5kQ29sb3IgPSBDb2xvcihicmFuZEhzbCk7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGhlbWU6IERlZmF1bHRUaGVtZSA9IHtcbiAgY29sb3I6IHtcbiAgICBicmFuZDogYnJhbmRDb2xvci5oZXgoKSxcbiAgICB0ZXh0MTogYnJhbmRDb2xvci5saWdodG5lc3MoMTApLmhleCgpLFxuICAgIHRleHQyOiBicmFuZENvbG9yLnNhdHVyYXRpb25sKDMwKS5saWdodG5lc3MoMzApLmhleCgpLFxuICAgIHN1cmZhY2UxOiBicmFuZENvbG9yLnNhdHVyYXRpb25sKDIwKS5saWdodG5lc3MoOTkpLmhleCgpLFxuICAgIHN1cmZhY2UyOiBicmFuZENvbG9yLnNhdHVyYXRpb25sKDIwKS5saWdodG5lc3MoOTIpLmhleCgpLFxuICAgIHN1cmZhY2UzOiBicmFuZENvbG9yLnNhdHVyYXRpb25sKDI1KS5saWdodG5lc3MoOTApLmhleCgpLFxuICAgIHN1cmZhY2U0OiBicmFuZENvbG9yLnNhdHVyYXRpb25sKDIwKS5saWdodG5lc3MoODUpLmhleCgpLFxuICAgIHN1cmZhY2VTaGFkb3c6IGJyYW5kQ29sb3Iuc2F0dXJhdGlvbmwoMTApLmxpZ2h0ZW4oMC4yKS5hbHBoYSgwLjAyKS5oZXgoKSxcbiAgfSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLW5vcm1hbGl6ZVwiKTsiXSwibmFtZXMiOlsiTm9ybWFsaXplIiwiVGhlbWVQcm92aWRlciIsImRlZmF1bHRUaGVtZSIsIkdsb2JhbFN0eWxlIiwiQ3VzdG9tQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImNvbG9yIiwidGV4dDEiLCJDb2xvciIsImJyYW5kSHNsIiwiaCIsInMiLCJsIiwiYnJhbmRDb2xvciIsImJyYW5kIiwiaGV4IiwibGlnaHRuZXNzIiwidGV4dDIiLCJzYXR1cmF0aW9ubCIsInN1cmZhY2UxIiwic3VyZmFjZTIiLCJzdXJmYWNlMyIsInN1cmZhY2U0Iiwic3VyZmFjZVNoYWRvdyIsImxpZ2h0ZW4iLCJhbHBoYSJdLCJzb3VyY2VSb290IjoiIn0=
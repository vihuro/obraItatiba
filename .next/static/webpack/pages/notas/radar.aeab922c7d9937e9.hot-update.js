"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notas/radar",{

/***/ "./api/apiObraItatiba.js":
/*!*******************************!*\
  !*** ./api/apiObraItatiba.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ApiObra = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    baseURL: \"http://localhost:5215/api\"\n});\nApiObra.interceptors.request.use((request)=>{\n    const token = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)(\"TOKEN_OBRA\");\n    if (token) {\n        request.headers.Authorization = \"Bearer \".concat(token.TOKEN_OBRA);\n    }\n    return request;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiObra);\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYXBpT2JyYUl0YXRpYmEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFVBQVVGLG9EQUFZLENBQUM7SUFFekJJLFNBQVM7QUFDYjtBQUVBRixRQUFRRyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNELFVBQVk7SUFDMUMsTUFBTUUsUUFBUVAscURBQVlBLENBQUM7SUFDM0IsSUFBR08sT0FBTTtRQUNMRixRQUFRRyxPQUFPLENBQUNDLGFBQWEsR0FBRyxVQUEyQixPQUFqQkYsTUFBTUcsVUFBVTtJQUM5RCxDQUFDO0lBQUMsT0FBT0w7QUFDYjtBQUVBLCtEQUFlSixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9hcGlPYnJhSXRhdGliYS5qcz82NzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuXHJcbmNvbnN0IEFwaU9icmEgPSBheGlvcy5jcmVhdGUoe1xyXG5cclxuICAgIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MjE1L2FwaVwiXHJcbn0pXHJcblxyXG5BcGlPYnJhLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgocmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoXCJUT0tFTl9PQlJBXCIpO1xyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VuLlRPS0VOX09CUkF9YDtcclxuICAgIH0gcmV0dXJuIHJlcXVlc3Q7XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcGlPYnJhOyJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsIkFwaU9icmEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInRva2VuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJUT0tFTl9PQlJBIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/apiObraItatiba.js\n"));

/***/ })

});
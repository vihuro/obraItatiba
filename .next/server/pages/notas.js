"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/notas";
exports.ids = ["pages/notas"];
exports.modules = {

/***/ "./pages/notas/index.js":
/*!******************************!*\
  !*** ./pages/notas/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Notas = ({ ...props })=>{\n    const navigation = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function VerifyUser() {\n        if (localStorage.getItem(\"TOKEN\")) return true;\n        return false;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notas);\nconst getServerSideProps = (context)=>{\n    const url = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(context).OBRA_THR;\n    // setCookie(context,\"TOKEN_OBRA\",\"SLKJSKLSJLKSJLSK\",{\n    //     maxAge:60*60*1 //1 hora\n    // })\n    console.log(url);\n    if (!url) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(context, \"OBRA_THR\", encodeURIComponent(context.resolvedUrl));\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            },\n            props: {}\n        };\n    }\n    return {\n        props: {}\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNOO0FBQ087QUFFL0MsTUFBTU0sUUFBUSxDQUFDLEVBQUMsR0FBR0MsT0FBTSxHQUFJO0lBQ3pCLE1BQU1DLGFBQWFMLHNEQUFTQTtJQUU1QixTQUFTTSxhQUFZO1FBQ2pCLElBQUdDLGFBQWFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sSUFBSTtRQUU3QyxPQUFPLEtBQUs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7Ozs7O0FBS1Q7QUFFQSxpRUFBZU4sS0FBS0EsRUFBQTtBQUViLE1BQU1PLHFCQUFtQixDQUFDQyxVQUFVO0lBQ3ZDLE1BQU1DLE1BQU1WLHFEQUFZQSxDQUFDUyxTQUFTRSxRQUFRO0lBQzFDLHNEQUFzRDtJQUN0RCw4QkFBOEI7SUFDOUIsS0FBSztJQUNMQyxRQUFRQyxHQUFHLENBQUNIO0lBRVosSUFBRyxDQUFDQSxLQUFJO1FBQ0pYLGtEQUFTQSxDQUFDVSxTQUFTLFlBQVdLLG1CQUFtQkwsUUFBUU0sV0FBVztRQUNwRSxPQUFNO1lBQ0ZDLFVBQVM7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFdBQVUsS0FBSztZQUNuQjtZQUNBaEIsT0FBTSxDQUFDO1FBQ1g7SUFDSixDQUFDO0lBRUQsT0FBTTtRQUFDQSxPQUFNLENBQUM7SUFBQztBQUVuQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2JyYWl0YXRpYmEvLi9wYWdlcy9ub3Rhcy9pbmRleC5qcz9mOGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtzZXRDb29raWUgLHBhcnNlQ29va2llc30gZnJvbSBcIm5vb2tpZXNcIlxyXG5cclxuY29uc3QgTm90YXMgPSAoey4uLnByb3BzfSkgPT57XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gVmVyaWZ5VXNlcigpe1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9LRU5cIikpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGFzXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzPShjb250ZXh0KT0+e1xyXG4gICAgY29uc3QgdXJsID0gcGFyc2VDb29raWVzKGNvbnRleHQpLk9CUkFfVEhSO1xyXG4gICAgLy8gc2V0Q29va2llKGNvbnRleHQsXCJUT0tFTl9PQlJBXCIsXCJTTEtKU0tMU0pMS1NKTFNLXCIse1xyXG4gICAgLy8gICAgIG1heEFnZTo2MCo2MCoxIC8vMSBob3JhXHJcbiAgICAvLyB9KVxyXG4gICAgY29uc29sZS5sb2codXJsKVxyXG5cclxuICAgIGlmKCF1cmwpe1xyXG4gICAgICAgIHNldENvb2tpZShjb250ZXh0LCBcIk9CUkFfVEhSXCIsZW5jb2RlVVJJQ29tcG9uZW50KGNvbnRleHQucmVzb2x2ZWRVcmwpKVxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246XCIvXCIsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6e31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue3Byb3BzOnt9fVxyXG5cclxufSJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiTm90YXMiLCJwcm9wcyIsIm5hdmlnYXRpb24iLCJWZXJpZnlVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJ1cmwiLCJPQlJBX1RIUiIsImNvbnNvbGUiLCJsb2ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXNvbHZlZFVybCIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/notas/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/notas/index.js"));
module.exports = __webpack_exports__;

})();
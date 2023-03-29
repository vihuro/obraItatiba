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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Notas = ({ ...props })=>{\n    const navigation = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function VerifyUser() {\n        if (localStorage.getItem(\"TOKEN\")) return true;\n        return false;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\ObraItatiba\\\\pages\\\\notas\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notas);\nconst getServerSideProps = (context)=>{\n    const token = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)().TOKEN_OBRA;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(context, \"TOKEN_OBRA\", \"SLKJSKLSJLKSJLSK\", {\n        maxAge: 60 * 60 * 1 //1 hora\n    });\n    console.log(token);\n    if (!token) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(context, \"OBRA_THR\", encodeURIComponent(context.resolvedUrl));\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            },\n            props: {}\n        };\n    }\n    return {\n        props: {}\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNOO0FBQ087QUFFL0MsTUFBTU0sUUFBUSxDQUFDLEVBQUMsR0FBR0MsT0FBTSxHQUFJO0lBQ3pCLE1BQU1DLGFBQWFMLHNEQUFTQTtJQUU1QixTQUFTTSxhQUFZO1FBQ2pCLElBQUdDLGFBQWFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sSUFBSTtRQUU3QyxPQUFPLEtBQUs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7Ozs7O0FBS1Q7QUFFQSxpRUFBZU4sS0FBS0EsRUFBQTtBQUViLE1BQU1PLHFCQUFtQixDQUFDQyxVQUFVO0lBQ3ZDLE1BQU1DLFFBQVFWLHFEQUFZQSxHQUFHVyxVQUFVO0lBQ3ZDWixrREFBU0EsQ0FBQ1UsU0FBUSxjQUFhLG9CQUFtQjtRQUM5Q0csUUFBTyxLQUFHLEtBQUcsRUFBRSxRQUFRO0lBQzNCO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixJQUFHLENBQUNBLE9BQU07UUFDTlgsa0RBQVNBLENBQUNVLFNBQVMsWUFBV00sbUJBQW1CTixRQUFRTyxXQUFXO1FBQ3BFLE9BQU07WUFDRkMsVUFBUztnQkFDTEMsYUFBWTtnQkFDWkMsV0FBVSxLQUFLO1lBQ25CO1lBQ0FqQixPQUFNLENBQUM7UUFDWDtJQUNKLENBQUM7SUFFRCxPQUFNO1FBQUNBLE9BQU0sQ0FBQztJQUFDO0FBRW5CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJhaXRhdGliYS8uL3BhZ2VzL25vdGFzL2luZGV4LmpzP2Y4YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3NldENvb2tpZSAscGFyc2VDb29raWVzfSBmcm9tIFwibm9va2llc1wiXHJcblxyXG5jb25zdCBOb3RhcyA9ICh7Li4ucHJvcHN9KSA9PntcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBWZXJpZnlVc2VyKCl7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUT0tFTlwiKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90YXNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM9KGNvbnRleHQpPT57XHJcbiAgICBjb25zdCB0b2tlbiA9IHBhcnNlQ29va2llcygpLlRPS0VOX09CUkE7XHJcbiAgICBzZXRDb29raWUoY29udGV4dCxcIlRPS0VOX09CUkFcIixcIlNMS0pTS0xTSkxLU0pMU0tcIix7XHJcbiAgICAgICAgbWF4QWdlOjYwKjYwKjEgLy8xIGhvcmFcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuXHJcbiAgICBpZighdG9rZW4pe1xyXG4gICAgICAgIHNldENvb2tpZShjb250ZXh0LCBcIk9CUkFfVEhSXCIsZW5jb2RlVVJJQ29tcG9uZW50KGNvbnRleHQucmVzb2x2ZWRVcmwpKVxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgcmVkaXJlY3Q6e1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246XCIvXCIsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6e31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue3Byb3BzOnt9fVxyXG5cclxufSJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiTm90YXMiLCJwcm9wcyIsIm5hdmlnYXRpb24iLCJWZXJpZnlVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJ0b2tlbiIsIlRPS0VOX09CUkEiLCJtYXhBZ2UiLCJjb25zb2xlIiwibG9nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzb2x2ZWRVcmwiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/notas/index.js\n");

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
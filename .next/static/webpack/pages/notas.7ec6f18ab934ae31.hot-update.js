"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notas",{

/***/ "./components/ui/card/Notas/Documento.js":
/*!***********************************************!*\
  !*** ./components/ui/card/Notas/Documento.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Documento = (param)=>{\n    let { documento , visible , index , ...pros } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [visibily, setVisibyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(documento);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setData(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>{\n            visible(false);\n        },\n        style: {\n            width: \"100%\",\n            height: \"100vh\",\n            position: \"absolute\",\n            top: 0,\n            right: 0,\n            background: \"#909090\",\n            opacity: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                data,\n                data.numeroDocumento\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\ObraItatiba\\\\components\\\\ui\\\\card\\\\Notas\\\\Documento.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\ObraItatiba\\\\components\\\\ui\\\\card\\\\Notas\\\\Documento.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Documento, \"Dbkb35X5W3ED/lHXumH2/KkjGsM=\");\n_c = Documento;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Documento);\nvar _c;\n$RefreshReg$(_c, \"Documento\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2NhcmQvTm90YXMvRG9jdW1lbnRvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUcsWUFBWSxTQUF1QztRQUF0QyxFQUFDQyxVQUFTLEVBQUNDLFFBQU8sRUFBRUMsTUFBSyxFQUFDLEdBQUdDLE1BQUs7O0lBRWpELE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3BDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDVyxRQUFRQyxHQUFHLENBQUNUO0lBRVpGLGdEQUFTQSxDQUFDLElBQUs7UUFDWE8sUUFBUUQ7SUFDWixHQUFFLEVBQUU7SUFDSixxQkFDSSw4REFBQ007UUFBSUMsU0FBUyxJQUFLO1lBQ2ZWLFFBQVEsS0FBSztRQUNqQjtRQUdBVyxPQUFPO1lBQ0hDLE9BQU07WUFDTkMsUUFBTztZQUNQQyxVQUFTO1lBQ1RDLEtBQUk7WUFDSkMsT0FBTTtZQUNOQyxZQUFXO1lBQ1hDLFNBQVE7UUFDWjtrQkFDSSw0RUFBQ1Q7O2dCQUNJTjtnQkFDQUEsS0FBS2dCLGVBQWU7Ozs7Ozs7Ozs7OztBQU1yQztHQWhDTXJCO0tBQUFBO0FBa0NOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvY2FyZC9Ob3Rhcy9Eb2N1bWVudG8uanM/ZWQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IERvY3VtZW50byA9ICh7ZG9jdW1lbnRvLHZpc2libGUsIGluZGV4LC4uLnByb3N9KSA9PntcclxuXHJcbiAgICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Zpc2liaWx5LCBzZXRWaXNpYnlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudG8pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIHNldERhdGEoZGF0YSlcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PntcclxuICAgICAgICAgICAgdmlzaWJsZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6XCIxMDB2aFwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6MCxcclxuICAgICAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpcIiM5MDkwOTBcIixcclxuICAgICAgICAgICAgb3BhY2l0eTowLjVcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgICAge2RhdGEubnVtZXJvRG9jdW1lbnRvfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudG8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRvY3VtZW50byIsImRvY3VtZW50byIsInZpc2libGUiLCJpbmRleCIsInByb3MiLCJkYXRhIiwic2V0RGF0YSIsInZpc2liaWx5Iiwic2V0VmlzaWJ5bGUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwib25DbGljayIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJudW1lcm9Eb2N1bWVudG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/card/Notas/Documento.js\n"));

/***/ })

});
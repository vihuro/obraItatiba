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

/***/ "./pages/notas/index.js":
/*!******************************!*\
  !*** ./pages/notas/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInitialProps\": function() { return /* binding */ getInitialProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ \"./pages/notas/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/navBar/NavBar */ \"./components/ui/navBar/NavBar.js\");\n/* harmony import */ var _components_ui_card_Notas_thr_Notas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/card/Notas/thr/Notas */ \"./components/ui/card/Notas/thr/Notas.js\");\n/* harmony import */ var _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/apiObraItatiba */ \"./api/apiObraItatiba.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Notas = ()=>{\n    _s();\n    const navigation = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/notas\").then((res)=>{\n            setData(res.data);\n        }).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrap_container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().container_filtro)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().card_filtro),\n                            children: \"filtro\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().card_notas)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Notas, \"f9jf/KQ9oSAlvbugrtnqRGR2YSk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Notas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notas);\nconst getInitialProps = (context)=>{\n    const url = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(context).OBRA_THR;\n    const token = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(context).TOKEN_OBRA;\n    if (!token) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(context, \"OBRA_THR\", encodeURIComponent(context.resolvedUrl));\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            },\n            props: {}\n        };\n    }\n    return {\n        props: {}\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"Notas\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDVTtBQUNYO0FBQ2U7QUFDVTtBQUNyQjtBQUUzQyxNQUFNVSxRQUFRLElBQU07O0lBQ2hCLE1BQU1DLGFBQWFSLHNEQUFTQTtJQUM1QixNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUduQ0MsZ0RBQVNBLENBQUMsSUFBSztRQUNYTywrREFBTyxDQUFDLFVBQ1BNLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztZQUFDSCxRQUFRRyxJQUFJSixJQUFJO1FBQUMsR0FDOUJLLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0MsUUFBUUMsR0FBRyxDQUFDRjtJQUU5QixHQUFFLEVBQUU7SUFHSixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBV2hCLCtEQUFVO2tCQUN0Qiw0RUFBQ2U7WUFBSUMsV0FBV2hCLG9FQUFlOzs4QkFDM0IsOERBQUNDLG9FQUFNQTs7Ozs7OEJBQ1AsOERBQUNjO29CQUFJQyxXQUFXaEIseUVBQW9COztzQ0FDaEMsOERBQUNlOzRCQUFJQyxXQUFXaEIsMkVBQXNCOzs7Ozs7c0NBRXRDLDhEQUFDZTs0QkFBSUMsV0FBV2hCLHNFQUFpQjtzQ0FBRzs7Ozs7O3NDQUlwQyw4REFBQ2U7NEJBQUlDLFdBQVdoQixxRUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXBEO0dBckNNSTs7UUFDaUJQLGtEQUFTQTs7O0tBRDFCTztBQXVDTiwrREFBZUEsS0FBS0EsRUFBQTtBQUViLE1BQU1tQixrQkFBa0IsQ0FBQ0MsVUFBWTtJQUN4QyxNQUFNQyxNQUFNMUIscURBQVlBLENBQUN5QixTQUFTRSxRQUFRO0lBQzFDLE1BQU1DLFFBQVE1QixxREFBWUEsQ0FBQ3lCLFNBQVNJLFVBQVU7SUFFOUMsSUFBSSxDQUFDRCxPQUFPO1FBQ1I3QixrREFBU0EsQ0FBQzBCLFNBQVMsWUFBWUssbUJBQW1CTCxRQUFRTSxXQUFXO1FBQ3JFLE9BQU87WUFDSEMsVUFBVTtnQkFDTkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ3BCO1lBQ0FDLE9BQU8sQ0FBQztRQUNaO0lBRUosQ0FBQztJQUVELE9BQU87UUFBRUEsT0FBTyxDQUFDO0lBQUU7QUFFdkIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ub3Rhcy9pbmRleC5qcz9mOGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvbmF2QmFyL05hdkJhclwiXHJcbmltcG9ydCBOb3Rhc1RIUiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9jYXJkL05vdGFzL3Roci9Ob3Rhc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9hcGkvYXBpT2JyYUl0YXRpYmFcIjtcclxuXHJcbmNvbnN0IE5vdGFzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgYXBpLmdldChcIi9ub3Rhc1wiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7c2V0RGF0YShyZXMuZGF0YSl9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICB9LFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib2R5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBfY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcl9maWx0cm99ID5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF9maWx0cm99ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdHJvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkX25vdGFzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtkYXRhICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0saW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE5vdGFzVEhSIGtleT17aW5kZXh9IGRhdGE9e2l0ZW19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGFzXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5pdGlhbFByb3BzID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IHBhcnNlQ29va2llcyhjb250ZXh0KS5PQlJBX1RIUjtcclxuICAgIGNvbnN0IHRva2VuID0gcGFyc2VDb29raWVzKGNvbnRleHQpLlRPS0VOX09CUkE7XHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHNldENvb2tpZShjb250ZXh0LCBcIk9CUkFfVEhSXCIsIGVuY29kZVVSSUNvbXBvbmVudChjb250ZXh0LnJlc29sdmVkVXJsKSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9wczoge31cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XHJcblxyXG59Il0sIm5hbWVzIjpbInJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJzdHlsZSIsIk5hdmJhciIsIk5vdGFzVEhSIiwiYXBpIiwiTm90YXMiLCJuYXZpZ2F0aW9uIiwiZGF0YSIsInNldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keSIsImNvbnRhaW5lciIsIndyYXBfY29udGFpbmVyIiwiY29udGFpbmVyX2ZpbHRybyIsImNhcmRfZmlsdHJvIiwiY2FyZF9ub3RhcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJ1cmwiLCJPQlJBX1RIUiIsInRva2VuIiwiVE9LRU5fT0JSQSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc29sdmVkVXJsIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/notas/index.js\n"));

/***/ })

});
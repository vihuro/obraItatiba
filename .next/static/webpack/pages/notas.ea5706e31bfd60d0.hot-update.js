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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ \"./pages/notas/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui/navBar/NavBar */ \"./components/ui/navBar/NavBar.js\");\n/* harmony import */ var _components_ui_card_Notas_thr_Notas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/card/Notas/thr/Notas */ \"./components/ui/card/Notas/thr/Notas.js\");\n/* harmony import */ var _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/apiObraItatiba */ \"./api/apiObraItatiba.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Notas = ()=>{\n    _s();\n    const navigation = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/notas\").then((res)=>{\n            console.log(res), setData(res.data);\n        }).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrap_container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().container_filtro)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_filtro),\n                            children: \"filtro\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        data && data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_notas),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card_Notas_thr_Notas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    data: item\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_notas),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card_Notas_thr_Notas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thr\\\\Desktop\\\\REACT\\\\obraItatiba\\\\pages\\\\notas\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Notas, \"f9jf/KQ9oSAlvbugrtnqRGR2YSk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Notas;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notas);\nvar _c;\n$RefreshReg$(_c, \"Notas\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBRUQ7QUFDZTtBQUNVO0FBQ3JCO0FBRTNDLE1BQU1RLFFBQVEsSUFBTTs7SUFDaEIsTUFBTUMsYUFBYU4sc0RBQVNBO0lBQzVCLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBR25DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pLLCtEQUFPLENBQUMsVUFDSE0sSUFBSSxDQUFDQyxDQUFBQSxNQUFPO1lBQUVDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUgsUUFBUUcsSUFBSUosSUFBSSxDQUFDO1FBQUMsR0FDbERPLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0gsUUFBUUMsR0FBRyxDQUFDRTtJQUVsQyxHQUFHLEVBQUU7SUFHTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV2hCLCtEQUFVO2tCQUN0Qiw0RUFBQ2U7WUFBSUMsV0FBV2hCLG9FQUFlOzs4QkFDM0IsOERBQUNDLG9FQUFNQTs7Ozs7OEJBQ1AsOERBQUNjO29CQUFJQyxXQUFXaEIseUVBQW9COztzQ0FDaEMsOERBQUNlOzRCQUFJQyxXQUFXaEIsMkVBQXNCOzs7Ozs7c0NBRXRDLDhEQUFDZTs0QkFBSUMsV0FBV2hCLHNFQUFpQjtzQ0FBRzs7Ozs7O3dCQUluQ00sUUFDR0EsS0FBS2dCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDWiw4REFBQ1Q7Z0NBQWdCQyxXQUFXaEIscUVBQWdCOzBDQUN4Qyw0RUFBQ0UsMkVBQVFBO29DQUNUSSxNQUFNaUI7Ozs7OzsrQkFGQUM7Ozs7O3NDQVNsQiw4REFBQ1Q7NEJBQUlDLFdBQVdoQixxRUFBZ0I7c0NBQzVCLDRFQUFDRSwyRUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQztHQTdDTUU7O1FBQ2lCTCxrREFBU0E7OztLQUQxQks7O0FBK0NOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25vdGFzL2luZGV4LmpzP2Y4YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9uYXZCYXIvTmF2QmFyXCJcclxuaW1wb3J0IE5vdGFzVEhSIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2NhcmQvTm90YXMvdGhyL05vdGFzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2FwaS9hcGlPYnJhSXRhdGliYVwiO1xyXG5cclxuY29uc3QgTm90YXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXBpLmdldChcIi9ub3Rhc1wiKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4geyBjb25zb2xlLmxvZyhyZXMpLCBzZXREYXRhKHJlcy5kYXRhKSB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvZHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcF9jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyX2ZpbHRyb30gPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkX2ZpbHRyb30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0cm9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGUuY2FyZF9ub3Rhc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGFzVEhSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRfbm90YXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm90YXNUSFIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90YXNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gcGFyc2VDb29raWVzKGNvbnRleHQpLk9CUkFfVEhSO1xyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoY29udGV4dCkuVE9LRU5fT0JSQTtcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgc2V0Q29va2llKGNvbnRleHQsIFwiT0JSQV9USFJcIiwgZW5jb2RlVVJJQ29tcG9uZW50KGNvbnRleHQucmVzb2x2ZWRVcmwpKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOiB7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH1cclxuXHJcbn0iXSwibmFtZXMiOlsicmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlIiwiTmF2YmFyIiwiTm90YXNUSFIiLCJhcGkiLCJOb3RhcyIsIm5hdmlnYXRpb24iLCJkYXRhIiwic2V0RGF0YSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiY29udGFpbmVyIiwid3JhcF9jb250YWluZXIiLCJjb250YWluZXJfZmlsdHJvIiwiY2FyZF9maWx0cm8iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjYXJkX25vdGFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/notas/index.js\n"));

/***/ })

});
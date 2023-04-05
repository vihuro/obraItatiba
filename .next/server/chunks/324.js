exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 5076:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__2RzIQ",
	"button": "style_button__WAFMB",
	"button--borderder-red": "style_button--borderder-red__40a8M",
	"button--borderder-green": "style_button--borderder-green__cMIpe",
	"button--login": "style_button--login__ps_zE"
};


/***/ }),

/***/ 5490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ApiObra = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://192.168.2.67:9000/api"
});
ApiObra.interceptors.request.use((request)=>{
    const token = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)("TOKEN_OBRA");
    if (token) {
        console.log(token);
        request.headers.Authorization = `Bearer ${token.TOKEN_OBRA}`;
    }
    return request;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiObra);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5076);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ text , action , color , theme  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: ()=>action(),
        className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} 
                ${(_style_module_css__WEBPACK_IMPORTED_MODULE_1___default())[`button--${theme}`]}
                `,
        children: text
    });
};
Button.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;
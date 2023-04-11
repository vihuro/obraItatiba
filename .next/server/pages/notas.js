(() => {
var exports = {};
exports.id = 379;
exports.ids = [379,934];
exports.modules = {

/***/ 4697:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "style_card__qkJvN",
	"container_title": "style_container_title__UL6Wi",
	"card_numero_nota": "style_card_numero_nota__w3ntx",
	"container_body": "style_container_body__rSb8P",
	"container_info": "style_container_info__KFkk6",
	"wrap_container_info": "style_wrap_container_info__Q4_qe",
	"container_documentos": "style_container_documentos__J2Wld",
	"valor_nota": "style_valor_nota__0kNJp",
	"wrap_documentos": "style_wrap_documentos__qUosC",
	"card_documentos": "style_card_documentos__hO2dq"
};


/***/ }),

/***/ 4033:
/***/ ((module) => {

// Exports
module.exports = {
	"table_wrapper": "style_table_wrapper__wt6Kk",
	"body_table": "style_body_table__XyRwr",
	"table_row": "style_table_row__jNA6w"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "style_body__AKfRB",
	"container": "style_container__mIEWP",
	"wrap_container": "style_wrap_container__d3mPj",
	"container_filtro": "style_container_filtro__JLNuH",
	"card_filtro": "style_card_filtro__YwthT",
	"card_notas": "style_card_notas__T_b_G"
};


/***/ }),

/***/ 2298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ obra_NotasObra)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/tabela/notas/obra/style.module.css
var style_module = __webpack_require__(4033);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ./components/ui/card/Notas/thr/style.module.css
var thr_style_module = __webpack_require__(4697);
var thr_style_module_default = /*#__PURE__*/__webpack_require__.n(thr_style_module);
;// CONCATENATED MODULE: ./components/ui/card/Notas/thr/Notas.js


const NotasTHR = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (thr_style_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (thr_style_module_default()).container_title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (thr_style_module_default()).card_numero_nota,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "NF\xba ",
                            data.numeroNota
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (thr_style_module_default()).container_body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (thr_style_module_default()).container_info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).wrap_container_info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Fornecedor:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.fornecedor
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).wrap_container_info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "CNPJ:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).wrap_container_info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Descri\xe7\xe3o Servi\xe7o:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.descricaoServico
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).wrap_container_info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Produto / Servi\xe7o:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.produtoServico
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).wrap_container_info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Time:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.time
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).wrap_container_info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Aprovador por:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.autorizador
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (thr_style_module_default()).container_documentos,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (thr_style_module_default()).valor_nota,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Valor da nota:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: `R$ ${data.valorTotalNota.toLocaleString("pt-BR")}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (thr_style_module_default()).wrap_documentos,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-placeholder": data.parcelas.length,
                            className: (thr_style_module_default()).card_documentos,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Documentos"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (thr_style_module_default()).container_botton
            })
        ]
    });
};
/* harmony default export */ const Notas = (NotasTHR);

// EXTERNAL MODULE: ./components/ui/Load/RingLoader.js
var RingLoader = __webpack_require__(8732);
;// CONCATENATED MODULE: ./components/ui/tabela/notas/obra/NotasObra.js






const NotasObra = ({ data  })=>{
    const [visibleCardNota, setVisibleCardNota] = (0,external_react_.useState)(false);
    const [valueNota, setValueNota] = (0,external_react_.useState)(null);
    const [width, setWidth] = (0,external_react_.useState)();
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setWidth(window.outerWidth);
    }, [
        width
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (style_module_default()).table_wrapper,
        children: [
            visibleCardNota ? /*#__PURE__*/ jsx_runtime_.jsx(Notas, {
                data: valueNota
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: (style_module_default()).body_table,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "N\xba NOTA"
                                }),
                                width > 430 ? /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "CNPJ"
                                }) : null,
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "FORNECEDOR"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "VALOR NF"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "TIME"
                                }),
                                width > 770 ? /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "PARCELAS"
                                }) : null,
                                width > 770 ? /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "EDIT"
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        children: data && data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: (style_module_default()).table_row,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.numeroNota
                                    }),
                                    width > 430 ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        style: {
                                            width: 180
                                        },
                                        children: item.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
                                    }) : null,
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.fornecedor
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.valorTotalNota.toLocaleString("pt-BR")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.time
                                    }),
                                    width > 770 ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: item.parcelas.length
                                    }) : null,
                                    width > 770 ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiEdit, {
                                            size: 25,
                                            color: "blue"
                                        })
                                    }) : null
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const obra_NotasObra = (NotasObra);


/***/ }),

/***/ 5794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6672);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8935);
/* harmony import */ var _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5490);
/* harmony import */ var _components_ui_tabela_notas_obra_NotasObra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2298);
/* harmony import */ var _components_ui_Load_RingLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8732);
/* harmony import */ var _components_ui_card_modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__]);
_api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Notas = ()=>{
    const navigation = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [infoMessage, setInfoMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "message": "",
        "type": ""
    });
    const [visibleMessage, setVisibleMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get("/notas").then((res)=>{
            setData(res.data);
        }).catch((err)=>setInfoMessage({
                type: "error",
                message: err.message
            })).catch((err)=>{
            setInfoMessage({
                type: "warning",
                message: err.response.data
            });
        }).catch((err)=>console.log(err)).finally(()=>setLoading(false));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // const tick = setInterval(() => {
    //     console.log(time)
    //     CarregarData();
    //     setTime(new Date());
    // }, 10000);
    // return () => clearInterval(tick);
    }, []);
    function CarregarData() {
        _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get("/notas").then((res)=>{
            setData(res.data);
        }).catch((err)=>console.log(err));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrap_container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card_modal_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            mensagem: infoMessage.message,
                            type: infoMessage.type,
                            visible: setVisibleMessage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_9___default().container_filtro)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_9___default().card_filtro),
                            children: "filtro"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_9___default().card_notas),
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Load_RingLoader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tabela_notas_obra_NotasObra__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                data: data
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notas);
const getServerSideProps = (context)=>{
    const url = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(context).OBRA_THR;
    const token = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(context).TOKEN_OBRA;
    if (!token) {
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(context, "OBRA_THR", encodeURIComponent(context.resolvedUrl));
        return {
            redirect: {
                destination: "/",
                permanent: false
            },
            props: {}
        };
    }
    return {
        props: {}
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 924:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/im");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 5065:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/sl");

/***/ }),

/***/ 8176:
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [969,945], () => (__webpack_exec__(5794)));
module.exports = __webpack_exports__;

})();
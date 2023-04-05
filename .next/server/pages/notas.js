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

/***/ 2712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ notas),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: ./pages/notas/style.module.css
var style_module = __webpack_require__(6672);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./components/ui/navBar/NavBar.js + 3 modules
var NavBar = __webpack_require__(9932);
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
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "NF\xba 1212"
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
                                children: "TESTE TESTE STESSSSSSSSSSSSSSSSSS"
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
                                children: "00.00.000/0001-00"
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
                                children: "Dolore laboris cupidatat tempor eiusmod Lorem eiusmod voluptate labore Lorem voluptateLorem Lorem sit nulla Exercitation tempor deserunt sint consequat id irure labore in cillum est ea.sit qui.."
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
                                children: "Dolore laboris cupidatat tempor eiusmod Lorem eiusmod voluptate labore Lorem voluptate."
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
                                children: "Um time aqui"
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
                                children: "Autorizador"
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
                                children: "R$ 1.000.000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (thr_style_module_default()).wrap_documentos,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-placeholder": "1",
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

;// CONCATENATED MODULE: ./pages/notas/index.js







const notas_Notas = ()=>{
    const navigation = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (style_module_default()).body,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (style_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavBar/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (style_module_default()).wrap_container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (style_module_default()).container_filtro
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (style_module_default()).card_filtro,
                            children: "filtro"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (style_module_default()).card_notas,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Notas, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Notas, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const notas = (notas_Notas);
const getServerSideProps = (context)=>{
    const url = (0,external_nookies_.parseCookies)(context).OBRA_THR;
    const token = (0,external_nookies_.parseCookies)(context).TOKEN_OBRA;
    if (!token) {
        (0,external_nookies_.setCookie)(context, "OBRA_THR", encodeURIComponent(context.resolvedUrl));
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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [230], () => (__webpack_exec__(2712)));
module.exports = __webpack_exports__;

})();
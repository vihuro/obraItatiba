(() => {
var exports = {};
exports.id = 713;
exports.ids = [713,934];
exports.modules = {

/***/ 6391:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AdicionarNovaNota_container__z_tIS",
	"cardNovaNota": "AdicionarNovaNota_cardNovaNota__tdCc9",
	"containerTitle": "AdicionarNovaNota_containerTitle__3T15_",
	"trans": "AdicionarNovaNota_trans__II_c3",
	"wrapContainer": "AdicionarNovaNota_wrapContainer__fo3mE",
	"wrapRow": "AdicionarNovaNota_wrapRow__2vgqg",
	"wrapSize": "AdicionarNovaNota_wrapSize__NKQeB",
	"wrapContinarRow": "AdicionarNovaNota_wrapContinarRow__XpEH7",
	"row": "AdicionarNovaNota_row__50Yux",
	"containerDocumentos": "AdicionarNovaNota_containerDocumentos__hP7uZ",
	"wrapContainerDocumentos": "AdicionarNovaNota_wrapContainerDocumentos__SZqH6",
	"containerButton": "AdicionarNovaNota_containerButton__wBkt8",
	"button": "AdicionarNovaNota_button__ketgt"
};


/***/ }),

/***/ 981:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "cardNota_card__5YeqY",
	"containerTitle": "cardNota_containerTitle__XBDj0",
	"wrapTitle": "cardNota_wrapTitle__zaRP3",
	"cardTitle": "cardNota_cardTitle__ZZr3w",
	"wrapButtonAdd": "cardNota_wrapButtonAdd__jZWCP",
	"buttonAdd": "cardNota_buttonAdd__YrIcH",
	"numeroNota": "cardNota_numeroNota__Xcemw",
	"wrapContainer": "cardNota_wrapContainer__a2CjT",
	"column": "cardNota_column__7G4ic",
	"row": "cardNota_row__7Fucg",
	"cardDocumento": "cardNota_cardDocumento__U7OqB",
	"documentos": "cardNota_documentos__5VbQt",
	"quantidadeDocumentos": "cardNota_quantidadeDocumentos__kQnUR",
	"containerButtonVisibility": "cardNota_containerButtonVisibility__fUtW4"
};


/***/ }),

/***/ 317:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "documento_container__5x8Oz"
};


/***/ }),

/***/ 5148:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__O1VCm",
	"input": "style_input__kEb5R",
	"card_select": "style_card_select__mHvYK",
	"containerSelect": "style_containerSelect__XkOg2"
};


/***/ }),

/***/ 5697:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "radar_body__Y5kUX",
	"container": "radar_container__tcMac",
	"containerCards": "radar_containerCards__r87Lu",
	"wrapContainer": "radar_wrapContainer__jsFmz"
};


/***/ }),

/***/ 5586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_ButtonUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9315);
/* harmony import */ var _comboBox_ComboBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4757);
/* harmony import */ var _AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6391);
/* harmony import */ var _AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_Bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6580);
/* harmony import */ var react_icons_Bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_Bi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5490);
/* harmony import */ var _service_TokenDecriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4327);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8992);
/* harmony import */ var _Load_RingLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8732);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_6__]);
_api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const AdicionarNota = ({ data , visible , dataTimes  })=>{
    const [nota, setNota] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalAprovado, setModalAprovado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalTime, setModalTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [visibleValue, setVisibleValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dadosUsuario, setDadosUsuario] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [valueTIme, setValueTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "id": 0,
        "value": ""
    });
    const [valueAutorizador, setValueAutorizador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "id": 0,
        "value": ""
    });
    const [valueNota, setValueNota] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "numeroNota": parseInt(data.numeroNota),
        "fornecedor": data.fornecedor,
        "valorTotalNota": parseFloat(data.valorTotalNota.replace(/\./g, "").replace(",", ".")),
        "cnpj": data.cnpj.replace(/[^\d]+/g, ""),
        "descricaoProdutoServico": data.descricaoProdutoServico,
        "avulsoFinalidade": "",
        "autorizador": "Bruno",
        "produtoServico": data.produtoServico,
        "usuarioCadastroId": 0,
        "timeId": 0,
        "tipoExportacao": "RADAR",
        "parcelas": data.numeroDocumento.map((item)=>{
            return {
                "parcela": item.numeroDocumento
            };
        })
    });
    const [infoMessage, setInfoMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        "message": "",
        "type": "warning"
    });
    const [visibleMessage, setVisibleMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [listAutorizador, setlistAutorizador] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            "Id": 1,
            "Value": "ROBERTO"
        },
        {
            "Id": 2,
            "Value": "BRUNO"
        },
        {
            "Id": 3,
            "Value": "TETSUO"
        },
        {
            "Id": 4,
            "Value": "HELENA"
        },
        {
            "Id": 5,
            "Value": "TOMIKO"
        },
        {
            "Id": 6,
            "Value": "WAGNER"
        }
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNota(data);
        const token = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)().TOKEN_OBRA;
        const infoUsuario = (0,_service_TokenDecriptor__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(token);
        setDadosUsuario(infoUsuario);
        setValueNota({
            ...valueNota,
            usuarioCadastroId: parseInt(infoUsuario.idUser)
        });
    }, []);
    function CadastrarNota() {
        setLoading(true);
        const nota = {
            ...valueNota,
            timeId: valueTIme.id,
            autorizador: valueAutorizador.value
        };
        console.log("leu notas===============================");
        console.log(nota);
        _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_6__/* ["default"].post */ .Z.post("/notas", nota).then((res)=>{
            console.log("Deu um response ==============================="), setVisibleMessage(true), setInfoMessage({
                message: "Cadastrado com sucesso!",
                type: "sucess"
            });
        }).catch((err)=>{
            console.log("Primeiro catch ==============================="), console.log(err), setVisibleMessage(true), setInfoMessage({
                message: err.response.data,
                type: "warning"
            });
        }).catch((err)=>{
            console.log("segundo catch ==============================="), setVisibleMessage(true), setInfoMessage({
                message: "Erro inesperado",
                type: "error"
            });
        }).finally(()=>setLoading(false));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
        onClick: ()=>{
            visible(false);
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: (e)=>{
                e.stopPropagation();
                setModalAprovado(false);
                setModalTime(false);
            },
            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardNovaNota),
            children: [
                visibleMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    visible: setVisibleMessage,
                    mensagem: infoMessage.message,
                    type: infoMessage.type
                }) : null,
                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Load_RingLoader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().containerTitle),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "ADICIONAR NOTA"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContainer),
                    children: nota && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        width: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                width: "50%"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Numero da nota: "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: nota.numeroNota
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                width: "50%",
                                                display: "grid",
                                                alignItems: "center",
                                                justifyContent: "flex-end"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    alignItems: "flex-end",
                                                    width: 200
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: "Valor total:"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        position: "relative",
                                                                        background: visibleValue ? "none" : "linear-gradient(to right, rgba(128,128,128,0.1), rgba(128,128,128,0.2), rgba(235,238,236,0.7), rgba(236,236,236,0.5))"
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        style: {
                                                                            opacity: visibleValue ? 1 : 0
                                                                        },
                                                                        children: `R$ ${data.valorTotalNota}`
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            onClick: ()=>{
                                                                setVisibleValue(!visibleValue);
                                                            },
                                                            children: !visibleValue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineVisibilityOff, {
                                                                color: "#585858",
                                                                size: 20,
                                                                style: {
                                                                    marginLeft: 5,
                                                                    marginTop: 15,
                                                                    alignItems: "center",
                                                                    justifyContent: "center"
                                                                }
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineVisibility, {
                                                                color: "#585858",
                                                                size: 20,
                                                                style: {
                                                                    marginLeft: 5,
                                                                    marginTop: 15,
                                                                    alignItems: "center",
                                                                    justifyContent: "center"
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContinarRow),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapSize),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: "CNPJ: "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        style: {
                                                            width: 150
                                                        },
                                                        readOnly: true,
                                                        value: nota.cnpj
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: "Fornecedor: "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        style: {
                                                            width: 550
                                                        },
                                                        readOnly: true,
                                                        value: nota.fornecedor
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContinarRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: "100%"
                                        },
                                        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Produto/Servi\xe7o: "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    readOnly: true,
                                                    value: nota.produtoServico
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: 350
                                        },
                                        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    style: {
                                                        marginLeft: 20
                                                    },
                                                    children: "Aprovado por: "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_comboBox_ComboBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    width: 180,
                                                    changeVisible: setModalAprovado,
                                                    valueVisible: modalAprovado,
                                                    placeHolder: "Selecione o autorizador...",
                                                    data: listAutorizador,
                                                    value: setValueAutorizador
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContinarRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "Descri\xe7\xe3o Produto/Servi\xe7o: "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                style: {
                                                    width: "100%"
                                                },
                                                readOnly: true,
                                                value: nota.descricaoProdutoServico
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContinarRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "Time: "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_comboBox_ComboBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                width: 720,
                                                changeVisible: setModalTime,
                                                valueVisible: modalTime,
                                                placeHolder: "Selecione o time...",
                                                data: dataTimes,
                                                value: setValueTime
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContinarRow),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().row),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "Documento(s)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().containerDocumentos),
                                                children: nota.numeroDocumento && nota.numeroDocumento.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapContainerDocumentos),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: item.numeroDocumento
                                                        })
                                                    }, index))
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().containerButton),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().button),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_ButtonUi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                action: ()=>{
                                    CadastrarNota();
                                },
                                color: "green",
                                text: "SALVAR",
                                theme: "borderder-green"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_AdicionarNovaNota_module_css__WEBPACK_IMPORTED_MODULE_11___default().button),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_ButtonUi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                action: ()=>visible(false),
                                color: "red",
                                text: "CANCELAR",
                                theme: "borderder-red"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdicionarNota);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cardNota_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(981);
/* harmony import */ var _cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_Bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6580);
/* harmony import */ var react_icons_Bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_Bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Documento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1685);
/* harmony import */ var _AdicicionarNota__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AdicicionarNota__WEBPACK_IMPORTED_MODULE_5__]);
_AdicicionarNota__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const CardNotas = ({ data , dataIndex , dataTimes  })=>{
    const [notas, setNotas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [cardDocumento, setCardDocumentos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [visibleValue, setVisibleValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cardNovaNota, setCarNovaNota] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [listTimes, setListTimes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNotas(data);
        setIndex(dataIndex);
        CreateListTimes();
    }, []);
    function CreateListTimes() {
        if (dataTimes) {
            setListTimes((prev)=>{
                const newItem = dataTimes.map((item)=>({
                        Id: item.timeId,
                        Value: item.time
                    }));
                return [
                    ...prev,
                    ...newItem
                ];
            });
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().containerTitle),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapTitle),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardTitle),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().numeroNota),
                                children: [
                                    "NF\xba ",
                                    data.numeroNota
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setCarNovaNota(true),
                            className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapButtonAdd),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_Bi__WEBPACK_IMPORTED_MODULE_2__.BiAddToQueue, {
                                style: {
                                    width: 30,
                                    height: 30,
                                    color: "blue"
                                }
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().column),
                        style: {
                            width: 800
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "CNPJ : ",
                                        data.cnpj
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Fornecedor : ",
                                        data.fornecedor
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Descri\xe7\xe3o do Servi\xe7o : ",
                                        data.descricaoProdutoServico
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Tipo de Servi\xe7o : ",
                                        data.produtoServico
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().column),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            width: 200
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Valor da Nota:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    position: "relative",
                                                    background: visibleValue ? "none" : "linear-gradient(to right, rgba(128,128,128,0.1), rgba(128,128,128,0.2), rgba(235,238,236,0.7), rgba(236,236,236,0.5))"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        opacity: visibleValue ? 1 : 0
                                                    },
                                                    children: `R$ ${data.valorTotalNota}`
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>setVisibleValue(!visibleValue),
                                        className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().containerButtonVisibility),
                                        children: !visibleValue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineVisibilityOff, {
                                            color: "#585858",
                                            size: 20,
                                            style: {
                                                marginLeft: 5,
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineVisibility, {
                                            color: "#585858",
                                            size: 20,
                                            style: {
                                                marginLeft: 5,
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                style: {
                                    textAlign: "left",
                                    justifyItems: "initial",
                                    display: "flex",
                                    justifyContent: "flex-start"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardDocumento),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().documentos),
                                        onClick: ()=>setCardDocumentos(true),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    fontSize: 12,
                                                    marginLeft: 8
                                                },
                                                children: "Documentos"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_cardNota_module_css__WEBPACK_IMPORTED_MODULE_6___default().quantidadeDocumentos),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: data.numeroDocumento.length
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    cardDocumento && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Documento__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        documento: data.numeroDocumento,
                        visible: setCardDocumentos
                    }),
                    cardNovaNota && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdicicionarNota__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        visible: setCarNovaNota,
                        data: data,
                        dataTimes: listTimes
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardNotas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _documento_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/* harmony import */ var _documento_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_documento_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Documento = ({ documento , visible , index , ...pros })=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [visibily, setVisibyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setData(documento);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_documento_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        onClick: ()=>{
            visible(false);
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: data && data.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: item.numeroDocumento
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Documento);


/***/ }),

/***/ 4757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5148);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ComboBox = ({ data , placeHolder , changeVisible , valueVisible , width , value  })=>{
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setList(data);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: (e)=>e.stopPropagation(),
        style: {
            width: width
        },
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),
                placeholder: placeHolder,
                value: text,
                readOnly: true,
                onClick: ()=>{
                    changeVisible(true);
                }
            }),
            valueVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().card_select),
                children: list && valueVisible && list.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: width
                        },
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().containerSelect),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            onClick: ()=>{
                                setText(item.Value);
                                value({
                                    "id": item.Id,
                                    "value": item.Value
                                });
                                changeVisible(false);
                            },
                            children: item.Value
                        }, index)
                    }, item.Id);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComboBox);


/***/ }),

/***/ 1567:
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
/* harmony import */ var _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5490);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5697);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_card_Notas_CardNota__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8217);
/* harmony import */ var _components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8935);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_2__, _components_ui_card_Notas_CardNota__WEBPACK_IMPORTED_MODULE_3__]);
([_api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_2__, _components_ui_card_Notas_CardNota__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const NotasRadar = ()=>{
    const [notas, setNotas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        const fecthData = ()=>{
            _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("notas/radar").then((res)=>setNotas(res.data)).catch((err)=>console.log(err));
            _api_apiObraItatiba__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("time").then((res)=>{
                setTime(res.data);
                setLoading(false);
            }).catch((err)=>console.log(err));
        };
        fecthData();
    }, []);
    return loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "carregando..."
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_navBar_NavBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().containerCards),
                    children: time && notas && notas.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card_Notas_CardNota__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            data: item,
                            dataIndex: index,
                            dataTimes: time
                        }, index);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotasRadar);
const getServerSideProps = (context)=>{
    const url = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(context).OBRA_THR;
    const token = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(context).TOKEN_OBRA;
    if (!token) {
        (0,nookies__WEBPACK_IMPORTED_MODULE_5__.setCookie)(context, "OBRA_THR", encodeURIComponent(context.resolvedUrl), {
            path: "/"
        });
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

/***/ 6580:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/Bi");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [969,945], () => (__webpack_exec__(1567)));
module.exports = __webpack_exports__;

})();
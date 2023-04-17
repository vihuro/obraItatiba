import { useState, useEffect } from "react";
import api from "../../../../../api/apiObraItatiba";
import Modal from "../../modal/Modal";
import style from "./AdicionarNotaManual.module.css";
import ComboBox from "../../../comboBox/ComboBox";
import Button from "../../../button/ButtonUi";
import InputMask from "react-input-mask";
import { AiFillDelete } from "react-icons/ai";
import RingLoader from "../../../Load/RingLoader";
import TokenDecriptor from "../../../../../service/TokenDecriptor";
import { parseCookies } from "nookies";
const AdicionarNota = ({
    visible,
    changeVisible,
    functions
}) => {

    const [nota, setnota] = useState({
        "numeroNota": 0,
        "fornecedor": "",
        "valorTotalNota": 0,
        "cnpj": "",
        "descricaoProdutoServico": "",
        "avulsoFinalidade": "",
        "autorizador": "",
        "usuarioCadastroId": 2,
        "timeId": 0,
        "tipoExportacao": "MANUAL",
        "parcelas": [],
        "produtosServico": []

    });
    const [dataTime, setDataTime] = useState([]);
    const [listAutorizador, setlistAutorizador] = useState([
        {
            "Id": 1, "Value": "ROBERTO"
        },
        {
            "Id": 2, "Value": "BRUNO"
        },
        {
            "Id": 3, "Value": "TETSUO"
        },
        {
            "Id": 4, "Value": "HELENA"
        },
        {
            "Id": 5, "Value": "TOMIKO"
        },
        {
            "Id": 6, "Value": "WAGNER"
        },
    ]);
    const [valueAutorizador, setValueAutorizador] = useState({
        "id": 0,
        "value": ""
    });
    const [valueTime, setValueTime] = useState({
        "id": 0,
        "value": ""
    });
    const [visibleAutorizador, setVisibleAutorizador] = useState(false);
    const [visibleTime, setVisibleTime] = useState(false);
    const [listProdutoServico, setListProdutoServico] = useState([]);
    const [message, setmessage] = useState({
        "type": "warning",
        "message": "teste"
    });
    const [visibleMessage, setVisibleMessage] = useState(false);
    const [valorNota, setValorNota] = useState(0);
    const [produtoServico, setProdutoServico] = useState({
        descricaoProdutoServico: "",
        complemento: ""
    });
    const [loading, setLoading] = useState(false);
    const [dadosUsuario, setDataDosUsuario] = useState("");

    useEffect(() => {
        function times() {
            api.get("time")
                .then(res => {
                    CreateListTimes({ times: res.data })
                })
                .catch(err => console.log(err))
        }
        times();
        const token = parseCookies().TOKEN_OBRA;
        const infoUsuario = TokenDecriptor(token);
        setDataDosUsuario(infoUsuario)
    }, [])




    function CreateListTimes({ times }) {
        const list = times.map(item => ({ Id: item.timeId, Value: item.time }));
        setDataTime(list);
    }
    function CadastarNota() {
        setLoading(true);
        if (valueTime.id === 0 ||
            nota.valorTotalNota === 0 ||
            nota.avulsoFinalidade === "" ||
            nota.cnpj === "" ||
            nota.cnpj.length < 15 ||
            valueAutorizador.value === "") {
            setmessage({ message: "Campo(s) obrigatório(s) vazio(s)!" })
            setLoading(false);
            setVisibleMessage(true);
        } else {
            const obj = {
                ...nota,
                timeId: valueTime.id,
                autorizador: valueAutorizador.value,
                usuarioCadastroId: parseInt(dadosUsuario.idUser),
                valorTotalNota: parseFloat(nota.valorTotalNota.replaceAll(".", "").replace(",", "."))
            };
            api.get(`/notas/${nota.numeroNota}`)
                .then(res => {

                })
                .catch(err => {
                    if (err.response.message) {
                        setmessage({ message: err.responde.message });
                    } else {
                        setmessage({ message: err.message, type: "error" })
                    }
                })
                .finally(() => {
                    setLoading(false);
                    setVisibleMessage(false);
                })
            api.post("/notas", obj)
                .then(res => {
                    setmessage({ message: "Nota cadastrada com sucesso!", "type": "sucess" }
                    )
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.message) {
                        setmessage({ message: err.reponse.message })
                    } else {
                        setmessage({ message: err.message, type: "error" })
                    }
                })
                .finally(() => {
                    setLoading(false)
                    setVisibleMessage(true);
                })
        }


    }


    return (
        <div className={style.container}
            onClick={() => changeVisible()}
        >
            <div className={style.card}
                onClick={e => {
                    setVisibleTime(false)
                    setVisibleAutorizador(false)
                    e.stopPropagation()
                }}
            >
                {loading && <RingLoader />}

                {visibleMessage &&
                    <Modal
                        mensagem={message.message}
                        type={message.type}
                        visible={setVisibleMessage}
                    />}

                <div className={style.container_title} >
                    <h2>
                        ADICIONAR NOTA
                    </h2>
                </div>
                <div className={style.container_primeiraLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Nº NF:
                            </h5>

                            <input type="number"
                                onChange={(e) => {
                                    setnota({ ...nota, numeroNota: e.target.value })
                                }}
                            />
                        </div>
                        <div className={style.column} >
                            <h5>
                                Valor:
                            </h5>
                            <input
                                value={valorNota.toLocaleString("pt-Br")}
                                onChange={e => {
                                    const re = /^[0-9]+([,][0-9]{0,2})?$/;
                                    const value = e.target.value
                                    if (re.test(value)) {
                                        setValorNota(value.replace(".", ","))
                                        setnota({ ...nota, valorTotalNota: parseFloat(value.replace(",", ".")).toLocaleString("pt-Br") })
                                    }
                                }}
                                onBlur={() => {
                                    if (valorNota !== 0) {
                                        setValorNota(parseFloat(valorNota.replace(",", ".").toLocaleString("pt-Br")))
                                    }
                                }}
                            />
                        </div>
                        <div className={style.column}>
                            <h5>
                                Fornecedor:
                            </h5>
                            <input
                                onChange={e =>
                                    setnota({ ...nota, fornecedor: e.target.value })
                                }
                            />
                        </div >
                        <div className={style.column}>
                            <h5>
                                CNPJ:
                            </h5>
                            <InputMask
                                mask="999.999.999/9999-99"
                                value={nota.cnpj}
                                onChange={(e) => setnota({
                                    ...nota,
                                    cnpj: e.target.value.replace(/[^\d]+/g, '')
                                })}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.container_segundaLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Descrição Prod/Serv. :
                            </h5>
                            <input
                                className={style.input_large}
                                onChange={e =>
                                    setnota({ ...nota, descricaoProdutoServico: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={style.container_terceiraLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Avulso finalidade :
                            </h5>
                            <input
                                className={style.input_large}
                                onChange={e =>
                                    setnota({ ...nota, avulsoFinalidade: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={style.container_quartaLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.row_comboBox} >
                            <h5>
                                Time:
                            </h5>
                            {dataTime.length > 0 && (
                                <ComboBox
                                    data={dataTime}
                                    placeHolder={"Selecione o time..."}
                                    changeVisible={setVisibleTime}
                                    valueVisible={visibleTime}
                                    value={setValueTime}
                                />
                            )}
                        </div>
                        <div className={style.row_comboBox} >
                            <h5>
                                Autorizador:
                            </h5>
                            <ComboBox
                                data={listAutorizador}
                                placeHolder={"Selecione o autorizador..."}
                                changeVisible={setVisibleAutorizador}
                                valueVisible={visibleAutorizador}
                                value={setValueAutorizador}
                            />
                        </div>

                    </div>
                </div>
                <div className={style.container_produto_servico} >
                    <div className={style.wrap_produto_servico} >
                        <div className={style.container_title} >
                            <div className={style.title_produtoServico} >
                                <h5>
                                    Produto/Serviço
                                </h5>
                            </div>
                            <div className={style.title_complemento} >
                                <h5>
                                    Complemento
                                </h5>
                            </div>
                            <div className={style.title_complemento} >
                                <h5>
                                    Remover
                                </h5>
                            </div>
                        </div>
                        <div>
                            {nota.produtosServico &&
                                nota.produtosServico.map((item, index) =>
                                    <div key={index} className={style.wrap_row} >
                                        <div className={style.row} >
                                            {item.descricaoProdutoServico}
                                        </div>
                                        <div className={style.row} >
                                            {item.complemento}
                                        </div>
                                        <div className={style.row_button}
                                            onClick={() => {
                                                const novoArray = [...nota.produtosServico];
                                                novoArray.splice(index, 1);
                                                setnota({ ...nota, produtosServico: novoArray })
                                            }}
                                        >
                                            <AiFillDelete
                                                color="red"
                                                size={20}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
                <div className={style.container_produto_servico_adicionar} >

                    <div className={style.column}>
                        <h5>
                            Produto/Serviço:
                        </h5>
                        <input
                            value={produtoServico.descricaoProdutoServico}
                            onChange={e =>
                                setProdutoServico({ ...produtoServico, descricaoProdutoServico: e.target.value })
                            }
                        />
                        <div className={style.column}>
                            <h5>
                                Complemento:
                            </h5>
                            <input
                                value={produtoServico.complemento}
                                onChange={e =>
                                    setProdutoServico({ ...produtoServico, complemento: e.target.value })
                                }
                            />
                        </div >
                    </div >
                    <div className={style.container_button_produto_servico} >
                        <Button
                            action={() => {
                                if (produtoServico.descricaoProdutoServico.length > 0) {
                                    setnota({
                                        ...nota, produtosServico:
                                            [...nota.produtosServico,
                                            {
                                                "descricaoProdutoServico": produtoServico.descricaoProdutoServico, "complemento": produtoServico.complemento
                                            }]
                                    });
                                    setProdutoServico({ complemento: "", descricaoProdutoServico: "" })
                                }
                            }}
                            text={"Adicionar"}
                            theme={"borderder-blue"}
                        />
                    </div>

                </div>
                <div className={style.container_button} >
                    <div className={style.wrap_container_button} >
                        <Button
                            action={() => {
                                CadastarNota(),
                                    functions()
                            }}
                            text={"ADICIONAR"}
                            theme={"borderder-green"}
                        />
                    </div>
                    <div className={style.wrap_container_button} >
                        <Button
                            action={() => changeVisible()}
                            color={"red"}
                            text={"CANCELAR"}
                            theme={"borderder-red"}
                        />
                    </div>
                </div>

            </div>
        </div>
    )


}

export default AdicionarNota
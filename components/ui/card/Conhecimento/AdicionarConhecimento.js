import style from "./AdicionarConhecimento.module.css";
import DateStingFormat from "../../../../service/DateString";
import React, { useEffect, useState } from "react";
import ApiObra from "../../../../api/apiObraItatiba";
import ComboBox from "../../comboBox/ComboBox";
import listaAutorizador from "../../../../service/list/Autorizador";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import Button from "../../button/ButtonUi";
import TokenDecriptor from "../../../../service/TokenDecriptor";
import { parseCookies } from "nookies";
import Loading from "../../Load/RingLoader";
import ModalMessage from "../../card/modal/Modal";

const AdicionarConhecimento = ({
    data,
    dataTime,
    changeVisible,
    refresh
}) => {


    const [valueTime, setValueTime] = useState({
        "Id": 0,
        "Value": ""
    });
    const [comboBoxTime, setComboBoxTime] = useState(false);
    const [comboBoxAutorizador, setComboBoxAutorizador] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState({});
    const [loading, setLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState({
        "type": "warning",
        "message": "aqui"
    })
    const [togleMessage, setToogleMessage] = useState(false);

    const [valueAutorizador, setValueAutorizador] = useState({
        "id": 0,
        "value": ""
    });
    const [values, setValues] = useState([]);

    const notas = [
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },
        {
            "numeroNota": "7777",
            "fornecedor": "ksçlsklçskçlskçls sçlskçlsk çsls çksl slsk"
        },

    ]
    const [conhecimento, setConhecimento] = useState({
        "numeroDocumento": "",
        "dataEntrada": "",
        "dataEmissao": "",
        "codigoTransportadora": "",
        "transportadora": "",
        "valorFrete": 0,
        "usuarioCadastroId": 0,
        "autorizador": "",
        "timeId": 0,
        "parcelas":[],
        "notas":[]
    })

    useEffect(() => {
        const infoUsuario = TokenDecriptor(parseCookies().TOKEN_OBRA)
        setDadosUsuario(infoUsuario)
        setConhecimento({
            "numeroDocumento": data.numeroDocumento,
            "dataEntrada": data.dataEntrada,
            "dataEmissao": data.dataEmissao,
            "codigoTransportadora": data.codigoTransportadora,
            "transportadora": data.transportadora,
            "valorFrete": parseFloat(data.valorFrete.replace(/\./g, "").replace(",", ".")),
            "usuarioCadastroId": parseInt(infoUsuario.idUser),
            "autorizador": "",
            "timeId": 0,
            "parcelas":
                data.parcelas.map(item => {
                    return { numeroParcela: item.numeroParcela, vencimento: item.vencimento, valorParcela: item.valorParcela }
                }),
            "notas":
                data.notas.map(item => {
                    return { numeroNota: item.numeroNota, fornecedor: item.fornecedor, dataEmissao: item.dataEmissao }
                })
        })
    }, [data])

    function Cadastrar() {
        setLoading(true)

        const newConhecimento = {
            ...conhecimento,
            timeId: valueTime.id,
            autorizador: valueAutorizador.value,
        }

        if (newConhecimento.autorizador === "" ||
            newConhecimento.timeId === 0 ||
            newConhecimento.codigoTransportadora === "" ||
            newConhecimento.transportadora === "" ||
            newConhecimento.dataEmissao === "" ||
            newConhecimento.dataEntrada === "") {
            setInfoMessage({ message: "Campo(s) obrigatório(s) vazio(s)!", type: "warning" })
            setToogleMessage(true);
            setLoading(false)
        } else {
            ApiObra.post("/conhecimento", newConhecimento)
                .then(res => {
                    setInfoMessage({ message: "Cadastro realizado com sucesso!", type: "sucess" })
                    setToogleMessage(true);
                })
                .catch(err => {
                    if (err.response) {
                        if (err.response.data.message) {
                            setInfoMessage({ message: err.response.data, type: "warning" })
                            setToogleMessage(true);
                        } else {
                            setInfoMessage({ message: err.message, type: "warning" })
                            setToogleMessage(true);
                        }

                    } else {
                        setInfoMessage({ message: err.message, type: "error" })
                        setToogleMessage(true);
                    }
                })
                .finally(() => {
                    setLoading(false)
                    refresh()
                })
        }
    }

    return (
        <div className={style.container} onClick={() => changeVisible(false)} >

            <div className={style.card} onClick={e => e.stopPropagation()} >
                {togleMessage ?
                    <ModalMessage
                        mensagem={infoMessage.message}
                        type={infoMessage.type}
                        visible={setToogleMessage}
                    /> :
                    null
                }
                {loading ? <Loading /> : null}

                <div className={style.containerTitle} >
                    <h3>NOVO CONHECIMENTO</h3>
                </div>
                <div className={style.container_info_principal_identificao} >
                    <h3>Número do conhecimento:</h3>
                    <p>{data.numeroDocumento}</p>
                </div>
                <div className={style.container_info_principal_valor} >
                    <div className={style.valor} >
                        <h3>Valor: </h3>
                        <p>{`R$ ${data.valorFrete}`}</p>
                    </div>
                    <div className={style.button_visible} >
                        <MdOutlineVisibility size={20} color="gray" />
                    </div>
                </div>
                <div className={style.container_first_row_firstColumn} >
                    <h5>
                        Código/Transport.
                    </h5>
                    <input readOnly value={data.codigoTransportadora} />
                    <h5>
                        Transportadora
                    </h5>
                    <input readOnly value={data.transportadora} />
                </div>
                <div className={style.container_first_row_secondColumn} >
                    <h5>
                        Data/Emissão
                    </h5>
                    <input readOnly value={DateStingFormat(data.dataEmissao)} />
                    <h5>
                        Data/Entrada
                    </h5>
                    <input readOnly value={DateStingFormat(data.dataEntrada)} />
                </div>
                <div className={style.container_second_row_firstColumn} >
                    {dataTime &&
                        <div className={style.container_combo_box} >
                            <h5>Time:</h5>
                            <ComboBox
                                data={dataTime}
                                placeHolder={"Time..."}
                                changeVisible={setComboBoxTime}
                                valueVisible={comboBoxTime}
                                value={setValueTime}
                            />
                        </div>
                    }
                </div>
                <div className={style.container_second_row_secondColumn} >
                    {dataTime &&
                        <div className={style.container_combo_box} >
                            <h5>Autorizador:</h5>
                            <ComboBox
                                data={listaAutorizador}
                                placeHolder={"Autorizador..."}
                                changeVisible={setComboBoxAutorizador}
                                valueVisible={comboBoxAutorizador}
                                value={setValueAutorizador}

                            />
                        </div>
                    }
                </div>
                <div className={style.container_parcelas} >
                    <div className={style.wrap_container_parcelas_head} >
                        <div className={style.column} >
                            <h5>Nº PAR.</h5>
                        </div>
                        <div className={style.column}>
                            <h5>Vencimento</h5>
                        </div>
                    </div>
                    <div className={style.wrap_container_parcelas_body} >
                        {data.parcelas && (
                            data.parcelas.map((item, index) => {
                                return (
                                    <div className={style.wrap_body} key={index} >
                                        <div className={style.row} >
                                            <p>
                                                {item.numeroParcela}
                                            </p>
                                        </div>
                                        <div className={style.row} >
                                            <p>
                                                {DateStingFormat(item.vencimento)}
                                            </p>
                                        </div>
                                    </div>
                                )

                            })
                        )}

                    </div>
                </div>
                <div className={style.container_Notas} >
                    <div className={style.wrap_container_notas_head} >
                        <div className={style.column} >
                            <h5>Nº NF.</h5>
                        </div>
                        <div className={style.column}>
                            <h5>Fornecedor</h5>
                        </div>
                    </div>
                    <div className={style.wrap_container_notas_body} >
                        {data.notas && (
                            data.notas.map((item, index) => {
                                return (
                                    <div className={style.wrap_body} key={index} >
                                        <div className={style.row} >
                                            <p>
                                                {item.numeroNota}
                                            </p>
                                        </div>
                                        <div className={style.row} >
                                            <p>
                                                {item.fornecedor}
                                            </p>
                                        </div>
                                    </div>
                                )

                            })
                        )}

                    </div>
                </div>
                <div className={style.containerButton} >
                    <div className={style.wrap_container_button} >
                        <Button
                            text={"CADASTRAR"}
                            action={() => { Cadastrar() }}
                            theme={"borderder-green"}
                        />
                    </div>
                    <div className={style.wrap_container_button} >
                        <Button
                            text={"CANCELAR"}
                            action={() => { changeVisible(false) }}
                            theme={"borderder-red"}
                        />
                    </div>
                </div>
            </div>

        </div>
    )

}

export default AdicionarConhecimento
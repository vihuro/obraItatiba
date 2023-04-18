import React, { useState, useEffect } from "react"
import Button from "../../button/ButtonUi";
import ComboBox from "../../comboBox/ComboBox";
import style from "./AdicionarNovaNotaRadar.module.css";
import { BiAddToQueue } from "react-icons/Bi"
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"
import api from "../../../../api/apiObraItatiba";
import TokenDecriptor from "../../../../service/TokenDecriptor"
import { parseCookies } from "nookies"
import Modal from "../modal/Modal"
import RingLoader from "../../Load/RingLoader";
import LoaderRing from "../../Load/RingLoader";
import DateStingFormat from "../../../../service/DateString";


const AdicionarNota = ({
    data,
    visible,
    dataTimes, 
    refesh    
}) => {

    const [nota, setNota] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalAprovado, setModalAprovado] = useState(false);
    const [modalTime, setModalTime] = useState(false);
    const [visibleValue, setVisibleValue] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState([]);
    const [valueTIme, setValueTime] = useState({
        "id": 0,
        "value": ""
    });
    const [valueAutorizador, setValueAutorizador] = useState({
        "id": 0,
        "value": ""
    });
    const [valueNota, setValueNota] = useState({
        "numeroNota": parseInt(data.numeroNota),
        "fornecedor": data.fornecedor,
        "valorTotalNota": parseFloat(data.valorTotalNota.replace(/\./g, '').replace(',', '.')),
        "cnpj": data.cnpj.replace(/[^\d]+/g, ''),
        "descricaoProdutoServico": data.descricaoProdutoServico,
        "avulsoFinalidade": "",
        "autorizador": "Bruno",
        "usuarioCadastroId": 0,
        "timeId": 0,
        "tipoExportacao": "RADAR",
        "parcelas":
            data.parcelas.map(item => {
                return { "parcela": item.numeroParcela, "vencimento": item.vencimento }
            }),
        "produtosServico":
            data.produtoServico.map(item => {
                return { "descricaoProdutoServico": item.descricaoProduto, "complemento": item.complemento }
            })
    })

    const [infoMessage, setInfoMessage] = useState({
        "message": "",
        "type": "warning"
    });
    const [visibleMessage, setVisibleMessage] = useState(false);

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
    ])



    useEffect(() => {
        setNota(data);
        const token = parseCookies().TOKEN_OBRA;
        const infoUsuario = TokenDecriptor(token)
        setDadosUsuario(infoUsuario);
        setValueNota({ ...valueNota, usuarioCadastroId: parseInt(infoUsuario.idUser) })
    }, [])

    function CadastrarNota() {
        setLoading(true)
        const nota = { ...valueNota, timeId: valueTIme.id, autorizador: valueAutorizador.value }

        api.post("/notas", nota)
            .then(res => { 
                setVisibleMessage(true), 
                setInfoMessage({ message: "Cadastrado com sucesso!", type: "sucess" }) 
                refesh()
            })
            .catch(err => {
                if (err.response.data) {
                    
                    setInfoMessage({ message: err.response.data.title, type: "warning" })
                } else {
                    setInfoMessage({ message: err.message, type: "warning" })
                }

                setVisibleMessage(true)
            })

            .finally(() => {
                setLoading(false)
            })


    }

    return (
        <div
            className={style.container}
            onClick={() => {
                visible(false)
            }}>

            <div
                onClick={(e => {
                    e.stopPropagation();
                    setModalAprovado(false);
                    setModalTime(false);
                })}
                className={style.cardNovaNota}>
                {visibleMessage ? <Modal
                    visible={setVisibleMessage}
                    mensagem={infoMessage.message}
                    type={infoMessage.type}
                /> : null}
                {loading ? <LoaderRing /> : null}
                {nota && dataTimes && (
                    <>
                        <div className={style.containerTitle}>
                            <h1>
                                ADICIONAR NOTA
                            </h1>
                        </div>
                        <div className={style.container_nota}>
                            <div className={style.wrap_container_nota} >
                                <h5>Numero da nota: </h5>
                                <p>{nota.numeroNota}</p>
                            </div>
                        </div>
                        <div className={style.container_valor} >
                            <div className={style.wrap_container_valor} >
                                <div >
                                    <h5>Valor total:</h5>
                                    <p style={{
                                        position: 'relative',
                                        background: visibleValue ?
                                            'none' :
                                            'linear-gradient(to right, rgba(128,128,128,0.1), rgba(128,128,128,0.2), rgba(235,238,236,0.7), rgba(236,236,236,0.5))'
                                    }}>
                                        <span style={{
                                            opacity: visibleValue ? 1 : 0
                                        }}>
                                            {`R$ ${data.valorTotalNota}`}
                                        </span>
                                    </p>
                                </div>
                                <div className={style.container_button_visible} onClick={() => {
                                    setVisibleValue(!visibleValue)
                                }}>
                                    {!visibleValue ?
                                        <MdOutlineVisibilityOff
                                            color="#585858"
                                            size={20} style={{

                                            }} />
                                        :
                                        <MdOutlineVisibility
                                            color="#585858"
                                            size={20} style={{

                                            }} />

                                    }
                                </div>
                            </div>
                        </div>
                        <div className={style.container_body1} >
                            <div className={style.row}>
                                <div className={style.wrapRow}>
                                    <h5>CNPJ: </h5>
                                    <input readOnly value={nota.cnpj} />
                                </div>
                            </div>
                        </div>
                        <div className={style.container_descricaoProdutoServico} >
                            <div className={style.wrapRow}>
                                <h5>Descrição/Serviço: </h5>
                                <input readOnly value={nota.descricaoProdutoServico} />
                            </div>
                        </div>
                        <div className={style.container_fornecedor} >
                            <div className={style.wrapRow}>
                                <h5>Fornecedor: </h5>
                                <input readOnly value={nota.fornecedor} />
                            </div>
                        </div>
                        <div className={style.container_body2}>
                            <div className={style.row}>
                                <div className={style.wrapRow}>
                                    <h5 >Aprovado por: </h5>
                                    <ComboBox
                                        changeVisible={setModalAprovado}
                                        valueVisible={modalAprovado}
                                        placeHolder={"Selecione o autorizador..."}
                                        data={listAutorizador}
                                        value={setValueAutorizador}

                                    />
                                </div>
                                <div className={style.wrapRow}>
                                    <h5 >Time: </h5>
                                    <ComboBox
                                        changeVisible={setModalTime}
                                        valueVisible={modalTime}
                                        placeHolder={"Selecione o time..."}
                                        data={dataTimes}
                                        value={setValueTime}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.container_parcelas} >
                            <div className={style.wrap_container_parcelas} >
                                <div className={style.title_parcelas} >
                                    <h5>Parcelas</h5>
                                </div>
                                <div className={style.title_vencimento} >
                                    <h5>Vencimento</h5>
                                </div>
                            </div>
                            <div>

                                {nota.parcelas && (
                                    nota.parcelas.map((item, index) =>
                                        <div key={index} className={style.wrap_row} >
                                            <div>
                                                <p>{item.numeroParcela}</p>
                                            </div>
                                            <div>
                                                <p>{DateStingFormat(item.vencimento)}</p>
                                            </div>

                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className={style.container_produto_servico} >
                            <div className={style.wrap_container_produto_servico} >
                                <div className={style.title_produto_servico} >
                                    <h5>Produto/Serviço</h5>
                                </div>
                                <div className={style.title_complemento} >
                                    <h5>Complemento</h5>

                                </div>
                            </div>
                            <div>
                                {nota.produtoServico && (
                                    nota.produtoServico.map((item, index) =>
                                        <div key={index} className={style.wrap_row} >
                                            <div style={{ width: 100 }}>
                                                <p>{item.descricaoProduto}</p>

                                            </div>
                                            <div style={{ width: 100 }} >
                                                <p>{item.complemento}</p>
                                            </div>

                                        </div>
                                    )
                                )}
                            </div>

                        </div>
                        <div className={style.container_button} >
                            <div className={style.button}>
                                <Button
                                    action={() => {
                                        CadastrarNota()
                                    }}
                                    color={"green"}
                                    text={"SALVAR"}
                                    theme={"borderder-green"}
                                />
                            </div>
                            <div className={style.button} >
                                <Button
                                    action={() => visible(false)}
                                    color={"red"}
                                    text={"CANCELAR"}
                                    theme={"borderder-red"}
                                />
                            </div>
                        </div>

                    </>)}
            </div>
        </div>
    )

}

export default AdicionarNota
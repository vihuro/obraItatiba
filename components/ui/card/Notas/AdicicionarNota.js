import React, { useState, useEffect } from "react"
import Button from "../../button/ButtonUi";
import ComboBox from "../../comboBox/ComboBox";
import style from "./AdicionarNovaNota.module.css";
import { BiAddToQueue } from "react-icons/Bi"
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"
import api from "../../../../api/apiObraItatiba";
import TokenDecriptor from "../../../../service/TokenDecriptor"
import { parseCookies } from "nookies"
import Modal from "../modal/Modal"
import RingLoader from "../../Load/RingLoader";
import LoaderRing from "../../Load/RingLoader";


const AdicionarNota = ({
    data,
    visible,
    dataTimes, }) => {

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
        "produtoServico": data.produtoServico,
        "usuarioCadastroId": 0,
        "timeId": 0,
        "tipoExportacao":"RADAR",
        "parcelas":
            data.numeroDocumento.map(item => {
                return { "parcela": item.numeroDocumento }
            })
        ,
    })

    const [infoMessage, setInfoMessage] = useState({
        "message": "",
        "type": "warning"
    });
    const [visibleMessage, setVisibleMessage] = useState(false);

    const [listAutorizador, setlistAutorizador] = useState([
        {
            "Id":1,"Value":"ROBERTO"
        },
        {
            "Id":2, "Value":"BRUNO"
        },
        {
            "Id":3,"Value":"TETSUO"
        },
        {
            "Id":4,"Value":"HELENA"
        },
        {
            "Id":5,"Value": "TOMIKO"
        },
        {
            "Id": 6,"Value": "WAGNER"
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
        const nota = { ...valueNota, timeId: valueTIme.id, autorizador:  valueAutorizador.value}
        console.log("leu notas===============================")
        console.log(nota)

        api.post("/notas", nota)
            .then(res => {console.log("Deu um response ===============================")  ,setVisibleMessage(true), setInfoMessage({ message: "Cadastrado com sucesso!", type: "sucess" }) })
            .catch(err => {console.log("Primeiro catch ===============================") ,console.log(err), setVisibleMessage(true), setInfoMessage({ message: err.response.data, type: "warning" }) })
            .catch(err => {console.log("segundo catch ===============================") ,setVisibleMessage(true), setInfoMessage({ message: "Erro inesperado", type: "error" }) })
            .finally(() => setLoading(false))


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
                <div className={style.containerTitle}>

                    <h1>
                        ADICIONAR NOTA
                    </h1>
                </div>
                <div className={style.wrapContainer}>

                    {nota && (
                        <>
                            <div >
                                <div style={{
                                    display: "flex",
                                    width: '100%'
                                }}>
                                    <div style={{

                                        width: "50%"

                                    }}>
                                        <h5>Numero da nota: </h5>
                                        <p>{nota.numeroNota}</p>

                                    </div>

                                    <div style={{
                                        width: '50%',
                                        display: "grid",
                                        alignItems: "center",
                                        justifyContent: "flex-end"

                                    }}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-end",
                                            width: 200
                                        }}>
                                            <div style={{ display: "flex" }}>
                                                <div>
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
                                                <div onClick={() => {
                                                    setVisibleValue(!visibleValue)
                                                }}>
                                                    {!visibleValue ?
                                                        <MdOutlineVisibilityOff
                                                            color="#585858"
                                                            size={20} style={{
                                                                marginLeft: 5,
                                                                marginTop: 15,
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            }} />
                                                        :
                                                        <MdOutlineVisibility
                                                            color="#585858"
                                                            size={20} style={{
                                                                marginLeft: 5,
                                                                marginTop: 15,
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            }} />

                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div className={style.wrapSize} >
                                    <div className={style.row}>
                                        <div className={style.wrapRow}>
                                            <h5>CNPJ: </h5>
                                            <input style={{ width: 150 }} readOnly value={nota.cnpj} />
                                        </div>
                                    </div>
                                    <div className={style.row}>
                                        <div className={style.wrapRow}>
                                            <h5>Fornecedor: </h5>
                                            <input style={{ width: 550 }} readOnly value={nota.fornecedor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%' }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5>Produto/Serviço: </h5>
                                        <input style={{ width: "100%" }} readOnly value={nota.produtoServico} />
                                    </div>
                                </div>
                                <div style={{ width: 350 }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5 style={{ marginLeft: 20 }} >Aprovado por: </h5>
                                        <ComboBox
                                            width={180}
                                            changeVisible={setModalAprovado}
                                            valueVisible={modalAprovado}
                                            placeHolder={"Selecione o autorizador..."}
                                            data={listAutorizador}
                                            value={setValueAutorizador}
                                            
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%' }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5>Descrição Produto/Serviço: </h5>
                                        <input style={{ width: "100%" }} readOnly value={nota.descricaoProdutoServico} />
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%' }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5>Time: </h5>
                                        <ComboBox
                                            width={720}
                                            changeVisible={setModalTime}
                                            valueVisible={modalTime}
                                            placeHolder={"Selecione o time..."}
                                            data={dataTimes}
                                            value={setValueTime}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%' }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5>
                                            Documento(s)
                                        </h5>
                                        <div className={style.containerDocumentos}>
                                            {nota.numeroDocumento && (nota.numeroDocumento.map((item, index) =>
                                                <div className={style.wrapContainerDocumentos} key={index}>
                                                    <p>{item.numeroDocumento}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className={style.containerButton} >
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
            </div>
        </div>
    )

}

export default AdicionarNota
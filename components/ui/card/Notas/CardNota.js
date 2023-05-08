import React, { useState, useEffect } from "react";
import style from "./cardNota.module.css";
import { BiAddToQueue } from "react-icons/Bi"
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"
import Documento from "./Documento";
import AdicicionarNotaRadar from "./AdicicionarNotaRadar";
import DateString from "../../../../service/DateString";
import ProdutoServico from "./ProdutoServico";

const CardNotas = ({
    data,
    dataIndex,
    dataTimes,
    refresh
}) => {


    const [notas, setNotas] = useState(null);
    const [index, setIndex] = useState(null);
    const [cardDocumento, setCardDocumentos] = useState(false);
    const [cardProdutoServico, setCardProdutoServico] = useState(false);
    const [visibleValue, setVisibleValue] = useState(false);
    const [cardNovaNota, setCarNovaNota] = useState(false);
    const [listTimes, setListTimes] = useState([])

    useEffect(() => {
        setNotas(data);
        setIndex(dataIndex);
        CreateListTimes();
    }, [])

    function CreateListTimes() {
        if (dataTimes) {

            setListTimes(prev => {
                const newItem = dataTimes.map(item => ({ Id: item.timeId, Value: item.time }));
                return [...prev, ...newItem];
            })

        }

    }

    return (
        <div className={style.card}>
            <div className={style.containerTitle}>
                <div className={style.wrapTitle}>
                    <div className={style.cardTitle} >
                        <h1 className={style.numeroNota}>
                            NFº {data.numeroNota}
                        </h1>
                    </div>
                </div>
                <div >
                    <div onClick={() => setCarNovaNota(true)} className={style.wrapButtonAdd}>
                        <BiAddToQueue style={{
                            width: 30,
                            height: 30,
                            color: "blue"
                        }} />
                    </div>
                </div>
            </div>
            <div className={style.wrapContainer}>
                <div className={style.column} style={{ width: 800 }}>
                    <div className={style.row}>
                        <p >
                            CNPJ : {data.cnpj}
                        </p>
                    </div>
                    <div className={style.row}>

                        <p>
                            Fornecedor : {data.fornecedor}
                        </p>
                    </div>
                    <div className={style.row}>
                        <p>
                            Descrição do Serviço : {data.descricaoProdutoServico}
                        </p>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.row} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                        <div style={{ width: 200 }}>
                            <p>
                                Valor da Nota:
                            </p>
                            <p style={{
                                position: 'relative',
                                background: visibleValue ?
                                    'none' :
                                    'linear-gradient(to right, rgba(128,128,128,0.1), rgba(128,128,128,0.2), rgba(235,238,236,0.7), rgba(236,236,236,0.5))'
                            }}>
                                <span style={{ opacity: visibleValue ? 1 : 0 }}>{`R$ ${data.valorTotalNota}`}</span>

                            </p>

                        </div>

                        <div onClick={() => setVisibleValue(!visibleValue)} className={style.containerButtonVisibility} >
                            {!visibleValue ?
                                <MdOutlineVisibilityOff color="#585858" size={20} style={{ marginLeft: 5, alignItems: 'center', justifyContent: 'center' }} />
                                :
                                <MdOutlineVisibility color="#585858" size={20} style={{ marginLeft: 5, alignItems: 'center', justifyContent: 'center' }} />
                            }

                        </div>

                    </div>
                    <div className={style.row} style={{ textAlign: 'left', justifyItems: 'initial', display: 'flex', justifyContent: 'flex-start' }}>
                        <div className={style.cardDocumento}>
                            <div className={style.documentos} onClick={() => { setCardDocumentos(true) }}>
                                <p style={{ fontSize: 12, marginLeft: 8 }}>
                                    Parcelas
                                </p>
                                <div className={style.quantidadeDocumentos}>
                                    {data.parcelas && <p >
                                        {data.parcelas.length}
                                    </p>}

                                </div>

                            </div>
                            <div className={style.produtoServico} onClick={() => { setCardProdutoServico(true) }}>
                                <p style={{ fontSize: 12, marginLeft: -25 }}>
                                    Prod/Serv.
                                </p>
                                <div className={style.quantidadeDocumentos}>
                                    <p >
                                        {data.produtoServico.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {cardDocumento &&
                    <Documento
                        documento={data.parcelas}
                        visible={setCardDocumentos}
                    />
                }
                {cardProdutoServico && (
                    <ProdutoServico
                        data={data.produtoServico}
                        visible={setCardProdutoServico}
                    />
                )}
                {cardNovaNota &&
                    <AdicicionarNotaRadar
                        visible={setCarNovaNota}
                        data={data}
                        dataTimes={listTimes}
                        refesh={refresh}
                    />
                }
            </div>
        </div>
    )

}

export default CardNotas
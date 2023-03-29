import React, { useState, useEffect } from "react"
import Button from "../../button/ButtonUi";
import style from "./AdicionarNovaNota.module.css";


const AdicionarNota = ({ data, visible }) => {
    const [nota, setNota] = useState(null);

    useEffect(() => {
        setNota(data)
    }, [])
    console.log(nota)
    return (
        <div
            className={style.container}
            onClick={() => {
                visible(false)
            }}>
            <div
                onClick={(e => e.stopPropagation())}
                className={style.cardNovaNota}>
                <div className={style.containerTitle}>
                    <h1>
                        ADICIONAR NOTA
                    </h1>
                </div>
                <div className={style.wrapContainer}>
                    {nota && (
                        <>
                            <div className={style.row}>
                                <div className={style.wrapRow}>
                                    <h5>Numero da nota: </h5>
                                    <p>{nota.numeroNota}</p>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div className={style.wrapSize} >
                                    <div className={style.row}>
                                        <div className={style.wrapRow}>
                                            <h5>CNPJ: </h5>
                                            <input readOnly value={nota.cnpj} />
                                        </div>
                                    </div>
                                    <div className={style.row}>
                                        <div className={style.wrapRow}>
                                            <h5>Fornecedor: </h5>
                                            <input style={{ width: 450 }} readOnly value={nota.fornecedor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%', padding: 30 }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5>Produto/Serviço: </h5>
                                        <input style={{ width: "100%" }} readOnly value={nota.produtoServico} />
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%', padding: 30 }} className={style.row}>
                                    <div className={style.wrapRow}>
                                        <h5>Descrição Produto/Serviço: </h5>
                                        <input style={{ width: "100%" }} readOnly value={nota.descricaoProdutoServico} />
                                    </div>
                                </div>
                            </div>
                            <div className={style.wrapContinarRow}>
                                <div style={{ width: '100%', padding: 30 }} className={style.row}>
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
                            text={"SALVAR"}
                        />
                    </div>
                    <div className={style.button} >
                        <Button
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
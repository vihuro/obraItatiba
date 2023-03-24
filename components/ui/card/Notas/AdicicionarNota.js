import React, { useState, useEffect } from "react"
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
                        NOVA NOTA
                    </h1>
                </div>
                <div className={style.wrapContainer}>
                    {nota && (
                        <div className={style.row}>
                            <div className={style.wrapRow}>
                                <h5>Numero da nota: </h5>
                                <p>{nota.numeroNota}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default AdicionarNota
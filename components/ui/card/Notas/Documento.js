import React, { useState, useEffect } from "react"
import style from "./documento.module.css";
import DateStingFormat from "../../../../service/DateString";

const Documento = ({ documento, visible, index, ...pros }) => {

    const [data, setData] = useState(null);
    const [visibily, setVisibyle] = useState(false);

    useEffect(() => {
        setData(documento)
    }, [])

function formatDate  (dateString) {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2,'0')
    const month = (date.getMonth() +1).toString().padStart(2,"0");
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
}

    return (
        <div
            className={style.container}
            onClick={() => {
                visible(false)
            }}>
            <div className={style.card_parcelas}>
                <div className={style.title_parcela}>
                    <h5>Parcela(s)</h5>
                </div>
                <div className={style.title_vencimento}>
                    <h5>Vencimento</h5>
                </div>
                {data &&
                    data.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className={style.row_parcela}>
                                <p>{item.numeroParcela}</p>
                            </div>
                            <div className={style.row_vencimento}>
                                <p>{DateStingFormat(item.vencimento)}</p>
                            </div>
                        </React.Fragment>
                    ))}
            </div>

        </div >
    )

}

export default Documento
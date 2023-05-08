import style from "./style.module.css";
import React from "react";

const ClaimsForUser = ({
    data
}) => {

    const dataFake = [
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        {"nome":"teste1","valor":"4545"},
        
    ]

    return (
        <div className={style.card} >
            <div className={style.header} >
                <div>
                    <p>CLAIM</p>
                </div>
                <div>
                    <p>VALOR</p>
                </div>
            </div>
            <div className={style.body} >
                {data && (
                    data.map((item, index) => {
                        return (
                            <div className={style.row}  key={index} >
                                <div className={style.column} >
                                    <p>{item.nome}</p>
                                </div>
                                <div className={style.column} >
                                    <p>{item.valor}</p>
                                </div>
                            </div>)
                    })
                )}

            </div>
        </div>
    )

}

export default ClaimsForUser
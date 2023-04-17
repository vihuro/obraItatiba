import React from "react";
import style from "./produtoServico.module.css";

const ProdutoServico = ({
    data,
    visible
}) => {
    return (
        <div
            className={style.container}
            onClick={() => {
                visible(false)
            }}>
            <div className={style.card_parcelas}>
                <div className={style.container_title} >
                    <div className={style.column} >
                        <h5>Prod/Serv.</h5>
                    </div>
                    <div className={style.column}>
                        <h5>Complemento</h5>
                    </div>
                </div>
                <div className={style.container_body} >
                    {data && data.map((item,index) => 
                        (
                        <div className={style.wrap_row} key={index}>
                            <div className={style.column} >
                                {item.descricaoProduto}
                            </div>
                            <div className={style.column} >
                                {item.complemento}
                            </div>
                        </div>
                    )
                    )}
                    
                </div>
            </div>

        </div >)
}

export default ProdutoServico;
import style from "./produtoServico.module.css";

const CardProdutoServico = ({
    data,
    visible
}) => {

    return (
        visible ?
            <div className={style.card} >
                <div className={style.title} >
                    <h4>PRODUTOS E SERVIÇOS</h4>
                </div>
                <div className={style.column_ProdutoServico} >
                    <h5>
                        Produto/Serviço
                    </h5>
                </div>
                <div className={style.column_complemento} >
                    <h5>
                        Complemento
                    </h5>
                </div>
                <div className={style.body} >
                    {data && (
                        data.map((item, index) =>
                            <div className={style.row} key={index}>
                                <div className={style.row_descricao} >
                                    {item.descricaoProdutoServico}
                                </div>
                                <div className={style.row_complemento} >
                                    {item.complemento}
                                </div>

                            </div>

                        )
                    )}
                </div>

            </div> : null
    )

}

export default CardProdutoServico
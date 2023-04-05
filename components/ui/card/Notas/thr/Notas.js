import style from "./style.module.css";

const NotasTHR = ({
    data
}) => {

    console.log(data)


    return (
        <div className={style.card} >
            <div className={style.container_title} >
                <div className={style.card_numero_nota} >
                    <p>NFº {data.numeroNota}</p>

                </div>
            </div>
            <div className={style.container_body} ></div>
            <div className={style.container_info} >
                <div className={style.wrap_container_info} >
                    <h3>Fornecedor:</h3>
                    <p>{data.fornecedor}</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>CNPJ:</h3>
                    <p>{data.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")}</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Descrição Serviço:</h3>
                    <p>{data.descricaoServico}</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Produto / Serviço:</h3>
                    <p>{data.produtoServico}</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Time:</h3>
                    <p>{data.time}</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Aprovador por:</h3>
                    <p>{data.autorizador}</p>
                </div>
            </div>
            <div className={style.container_documentos} >
                <div className={style.valor_nota} >
                    <h5>Valor da nota:</h5>
                    <p>{`R$ ${data.valorTotalNota.toLocaleString("pt-BR")}`}</p>
                </div>
                <div className={style.wrap_documentos} >
                    <div data-placeholder={data.parcelas.length} className={style.card_documentos} >
                        <p>Documentos</p>
                    </div>

                </div>

            </div>
            <div className={style.container_botton} ></div>

        </div>
    )

}
export default NotasTHR
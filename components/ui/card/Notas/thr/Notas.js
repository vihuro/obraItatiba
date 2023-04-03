import style from "./style.module.css"

const NotasTHR = ({
    data
}) => {

    return (
        <div className={style.card} >
            <div className={style.container_title} >
                <div className={style.card_numero_nota} >
                    <p>NFº 1212</p>

                </div>
            </div>
            <div className={style.container_body} ></div>
            <div className={style.container_info} >
                <div className={style.wrap_container_info} >
                    <h3>Fornecedor:</h3>
                    <p>TESTE TESTE STESSSSSSSSSSSSSSSSSS</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>CNPJ:</h3>
                    <p>00.00.000/0001-00</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Descrição Serviço:</h3>
                    <p>Dolore laboris cupidatat tempor eiusmod Lorem eiusmod voluptate labore Lorem voluptateLorem Lorem sit nulla Exercitation tempor deserunt sint consequat id irure labore in cillum est ea.sit qui..</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Produto / Serviço:</h3>
                    <p>Dolore laboris cupidatat tempor eiusmod Lorem eiusmod voluptate labore Lorem voluptate.</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Time:</h3>
                    <p>Um time aqui</p>
                </div>
                <div className={style.wrap_container_info} >
                    <h3>Aprovador por:</h3>
                    <p>Autorizador</p>
                </div>
            </div>
            <div className={style.container_documentos} >
                <div className={style.valor_nota} >
                    <h5>Valor da nota:</h5>
                    <p>R$ 1.000.000</p>
                </div>
                <div className={style.wrap_documentos} >
                    <div data-placeholder="1" className={style.card_documentos} >
                        <p>Documentos</p>
                    </div>

                </div>

            </div>
            <div className={style.container_botton} ></div>

        </div>
    )

}
export default NotasTHR
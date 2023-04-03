import style from "./style.module.css"

const NotasTHR = () => {
    return (
        <div className={style.card} >
            <div className={style.container_title} ></div>
            <div className={style.container_body} ></div>
            <div className={style.container_info} >
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
            </div>
            <div className={style.container_description} >

            </div>
            <div className={style.container_botton} ></div>

        </div>
    )

}
export default NotasTHR
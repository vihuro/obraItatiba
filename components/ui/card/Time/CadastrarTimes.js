import style from "./CadastrarTime.module.css";
import Button from "../../button/ButtonUi";
import api from "../../../../api/apiObraItatiba";
import Modal from "../modal/Modal";
import Loading from "../../Load/RingLoader";
import { useState } from "react";
import Decriptor from "../../../../service/TokenDecriptor";
import { parseCookies } from "nookies";




const CadastroTime = ({
    refresh,
    visible,
    changeVisible
}) => {

    const infoUsuario = Decriptor(parseCookies().TOKEN_OBRA)

    const [infoMessage, setInfoMessage] = useState({
        message: "aqui",
        type: "warning"
    })
    const [messageVisible, setMessageVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState({
        "time": "",
        "usuarioCadastroId": infoUsuario ? infoUsuario.idUser : null
    });

    async function Cadastar () {
        setLoading(true)
        await api.post("/time",time)
            .then(res =>{ 
                setMessageVisible(true)
                setInfoMessage({ message: "Cadastrado com sucesso!", type: "sucess" })
                refresh()
                setTime({...time,time:""})
            })
            .catch(err => {
                if (err.response) {
                    setInfoMessage({ message: err.response.data.title, type: "warning" })
                } else {
                    setInfoMessage({ message: err.message, type: "erro" })
                }
                setMessageVisible(true)
            })
            .finally(
                setLoading(false),
            )

    }

    return (
        <div className={style.container} onClick={() => changeVisible(false)}  >

            {messageVisible ? <Modal mensagem={infoMessage.message} type={infoMessage.type} visible={setMessageVisible} /> : null}

            <div className={style.card} onClick={e => e.stopPropagation()} >
                {loading ? <Loading /> : null}


                <div className={style.container_title} >
                    <h2>CADASTRO DE TIME</h2>
                </div>
                <div className={style.container_body} >
                    <div className={style.wrap_container_body} >
                        <h5>
                            TIME:
                        </h5>
                        <input value={time.time} onChange={e =>
                            setTime({ ...time, time: e.target.value })
                        } />
                    </div>

                </div>
                <div className={style.container_button} >
                    <div className={style.button} >
                        <Button
                            theme={"borderder-blue"}
                            text={"CADASTRAR"}
                            action={() => Cadastar()}
                        />
                    </div>
                </div>

            </div>
        </div>
    )

}

export default CadastroTime
import style from "./index.module.css"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { useEffect, useState } from "react";
import Button from "../components/ui/button/ButtonUi"
import { useRouter } from "next/router";
import api from "../api/apiObraItatiba"
import Modal from "../components/ui/card/modal/Modal";

function Home() {

    const url = parseCookies().OBRA_THR;
    const token = parseCookies().TOKEN_OBRA;
    const [toogleModal, setToogleModal] = useState(false)
    const [msgErr, setmsgErr] = useState("");
    const [showLogo, setShowLogo] = useState(true);

    const [widthWindow, setWidthWindow] = useState(1024)

    const [login, setLogin] = useState({
        "apelido": "",
        "senha": ""
    })

    useEffect(() => {

        if (window.outerWidth < 430) {
            setShowLogo(false)
        }
    },[])

    function Logar() {
        const logando = api.post("login", login)
            .then(res => {
                setCookie(null, "TOKEN_OBRA", res.data)
                Navegar()
            })
            .catch(err => {
                if (err.response.status === 404) {
                    setmsgErr(err.response.data);
                    setToogleModal(true);
                }
            })
    }

    const navigation = useRouter();

    function Navegar() {
        if (typeof url === "undefined") {
            navigation.push("/menu")
        } else {
            destroyCookie(null, "OBRA_THR")
            navigation.push(decodeURIComponent(url))
        }
    }

    return (
        <div className={style.body}>
            <div className={style.container} >
                {toogleModal ?
                    <Modal
                        visible={setToogleModal}
                        mensagem={msgErr}
                    /> :
                    null}
                <div className={style.wrapContainer} >

                    {showLogo ?
                        <div className={[style.card]} >
                            <div className={style.cardLogo} >
                                <img style={{ width: 350 }} src="../logoMarcaSemFundo.png" />
                            </div>
                        </div>
                        :
                        null
                    }
                    <div className={style.card} >
                        <div className={style.wrapContainerCard}>
                            <div className={style.containerTitle} >
                                <h1>
                                    LOGIN
                                </h1>
                            </div>
                            <div className={style.containerForm} >
                                <div className={style.wrapInput} >
                                    <input className={
                                        login.apelido !== '' ?
                                            `${style.has_val} ${style.input}` :
                                            style.input}
                                        onChange={e =>
                                            setLogin({ ...login, apelido: e.target.value }
                                            )}
                                    />
                                    <span className={style.focus_input} data-placeholder="Usuário... " />
                                </div>
                                <div className={style.wrapInput} >
                                    <input className={login.senha !== '' ?
                                        `${style.has_val} ${style.input}` :
                                        style.input}
                                        onChange={e =>
                                            setLogin({ ...login, senha: e.target.value }
                                            )}
                                    />
                                    <span className={style.focus_input} data-placeholder="Usuário... " />
                                </div>
                            </div>
                            <div className={style.containerButton} >
                                <div className={style.wrapButton}>
                                    <Button
                                        action={() => {
                                            //navigation.push("/menu")
                                            Logar()
                                        }}
                                        theme={"login"}
                                        text={"ENTRAR"}
                                    />
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>

    )

}
export default Home
import style from "./index.module.css"
import { parseCookies } from "nookies"
import { useState } from "react";
import Button from "../components/ui/button/ButtonUi"
import { useRouter } from "next/router";

function Home() {

    const url = decodeURIComponent(parseCookies().OBRA_THR)
    const token = parseCookies().TOKEN_OBRA;

    const [login, setLogin] = useState({
        "apelido": "",
        "senha": ""
    })

    const navigation = useRouter();

    return (
        <div className={style.body}>
            <div className={style.container} >
                <div className={style.wrapContainer} >
                    <div className={[style.card]} >
                        <div className={style.cardLogo} >
                            <img style={{ width: 350 }} src="../logoMarcaSemFundo.png" />

                        </div>

                    </div>
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
                                            navigation.push("/menu")
                                            console.log(login)
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
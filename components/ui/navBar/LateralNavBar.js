import { useEffect, useState } from "react"
import style from "./LateralNavBar.module.css"
import { useRouter } from "next/router"
import { ImExit } from "react-icons/im"
import { destroyCookie, parseCookies } from "nookies"
import TokenDecriptor from "../../../service/TokenDecriptor"

const LateralNavBar = ({ isOpen, onClose }) => {

    useEffect(() => {

    }, [])

    const [toogleNotas, setOpenNotas] = useState(false);
    const [toogleGerencial, setToogleGerencial] = useState(false);
    const [openGerencial, setOpenGerencial] = useState(false);
    const [infoUsuario, setInfoUsuario] = useState([])

    const navigation = useRouter();

    useEffect(() => {
        setInfoUsuario(TokenDecriptor(parseCookies().TOKEN_OBRA))
    }, [])

    return (
        <div className={style.overlay + (!isOpen ? `${style.show}` : "")}
            onClick={() => { onClose(!isOpen) }}
        >
            <div className={isOpen ? style.container : ""} >
                <div className={isOpen ? style.navBarLateral : style.navBarLateral_off}  >
                    <div className={style.containerLogo} 
                    onClick={() => navigation.push("/menu")}
                    >
                        <img src="../../../logoMarcaSemFundo.png" />

                    </div>
                    <div className={style.containerButton} >
                        {infoUsuario.FINANCEIRO && <div className={style.button_menu}
                            onClick={(e) => {
                                e.stopPropagation()
                                setOpenNotas(!toogleNotas)
                            }}
                        >
                            <p>NOTAS</p>
                        </div>}

                        {toogleNotas && (
                            <div className={style.button_subMenu} >
                                <div className={style.container_sub_menu} >
                                    <p onClick={() => {
                                        navigation.push("/notas/radar")
                                    }} >
                                        RADAR</p>
                                </div>
                                <div className={style.container_sub_menu}  >
                                    <p
                                        onClick={() =>
                                            navigation.push("/notas")}
                                    >THR</p>
                                </div>
                                <div className={style.container_sub_menu}  >
                                    <a href="/notas/dash/time"
                                        target="_blank"

                                    >DASH (NOTAS/TIME)</a>
                                </div>


                            </div>

                        )}
                        <div className={style.button_menu}
                            onClick={(e) => {
                                e.stopPropagation()
                                setToogleGerencial(!toogleGerencial)
                            }}
                        >
                            <p>GERENCIAL</p>
                        </div>
                        {toogleGerencial && (
                            <div className={style.button_subMenu} >
                                <div className={style.container_sub_menu} >
                                    <p>LOGIN</p>
                                </div>
                                <div className={style.container_sub_menu} >
                                    <p>ACESSOS</p>
                                </div>

                            </div>
                        )}

                    </div>
                    <div className={style.containerBottao_Sair}
                        onClick={() => {
                            destroyCookie(null, "TOKEN_OBRA")
                            navigation.push("/")
                        }}
                    >
                        <ImExit size={25} color={'white'} />
                    </div>
                </div>
            </div>

        </div>

    )

}

export default LateralNavBar
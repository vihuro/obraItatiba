import { useEffect, useState } from "react"
import style from "./LateralNavBar.module.css"
import { useRouter } from "next/router"
import { ImExit } from "react-icons/im"
import { destroyCookie } from "nookies"

const LateralNavBar = ({ isOpen, onClose }) => {

    useEffect(() => {

    }, [])

    const [toogleNotas, setOpenNotas] = useState(false);
    const [openGerencial, setOpenGerencial] = useState(false);

    const navigation = useRouter();

    return (
        <div className={style.overlay + (!isOpen ? `${style.show}` : "")}
            onClick={() => { onClose(!isOpen), console.log(isOpen) }}
        >
            <div className={isOpen ? style.container : ""} >
                <div className={isOpen ? style.navBarLateral : style.navBarLateral_off}  >
                    <div className={style.containerLogo} >
                        <img src="../../../logoMarcaSemFundo.png" />

                    </div>
                    <div className={style.containerButton} >
                        <div className={style.button_menu}
                            onClick={(e) => {
                                e.stopPropagation()
                                setOpenNotas(!toogleNotas)
                            }}
                        >
                            <p>NOTAS</p>
                        </div>
                        {toogleNotas && (
                            <div className={style.button_subMenu} >
                                <div className={style.container_sub_menu} >
                                    <p onClick={() => {
                                        navigation.push("/notas/radar")
                                    }} >
                                        RADAR</p>
                                </div>
                                <div className={style.container_sub_menu}  >
                                    <p>THR</p>
                                </div>


                            </div>

                        )}

                        <div className={style.button_menu}
                            onClick={() => setOpenGerencial(!openGerencial)}
                        >
                            <p>GERENCIAL</p>
                        </div>
                        <div className={style.button_subMenu} >
                            <div className={style.container_sub_menu} >
                                <p>LOGIN</p>
                            </div>
                            <div className={style.container_sub_menu} >
                                <p>ACESSOS</p>
                            </div>

                        </div>
                    </div>
                    <div className={style.containerBottao_Sair}
                        onClick={() => {
                            destroyCookie(null,"TOKEN_OBRA")
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
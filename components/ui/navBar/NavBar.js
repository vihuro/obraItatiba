import { useState } from "react"
import style from "./style.module.css"


const NavBar = () => {
    const [modal,setModal] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.topBar}onClick={() => setModal(!modal)}>
                <div style={{
                    position:'absolute',
                    right:0
                }} >
                    aqui
                </div>
                <div className={modal ? style.mascara : style.mascara_off} >
                </div>

                <div className={modal ? style.navBar:style.navBar_off}>
                    <div className={style.containerNavBar}>
                        <div className={style.containerLogo} >
                            <img className={style.logo}  src="logoMarcaSemFundo.png" />
                        </div>
                        <div className={style.containerButton} >
                            <div className={style.button} >
                                <h5>NOTAS</h5>
                            </div>
                            <div className={style.subButton} >

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )

}

export default NavBar
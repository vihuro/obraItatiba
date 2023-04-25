import { useState, useEffect } from "react"
import NavBar from "../../components/ui/navBar/NavBar"
import style from "./style.module.css"
import Button from "../../components/ui/button/ButtonUi";
import {useRouter} from "next/router";
import Link from "next/link";

const Menu = () => {
    const navigatigon = useRouter();

    return (
        <div className={style.body}>
            <div className={style.container} >
                <NavBar />
                <div className={style.container_button} >
                    <div className={style.wrap_container_button} >
                        <div className={style.title} >
                            <h5>Paineis</h5>
                        </div>
                        <div className={style.wrap_button_painel_obra} >
                            <a className={style.button_navegar_BI} href="/notas/dash/time" target="_blank" >
                                PAINEL / OBRA
                            </a>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Menu
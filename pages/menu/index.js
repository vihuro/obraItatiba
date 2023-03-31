import { useState, useEffect } from "react"
import NavBar from "../../components/ui/navBar/NavBar"
import style from "./style.module.css"

const Menu = () => {
    return (
        <div className={style.body}>
            <div className={style.container} >
                <NavBar />
            </div>
        </div>
    )
}

export default Menu
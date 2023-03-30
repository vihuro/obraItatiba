import { useState } from "react"
import Menu from "../../../pages/menu";
import LateralNavBar from "./LateralNavBar";
import style from "./style.module.css"
import TopBar from "./TopBar";


const NavBar = ({ view }) => {
    const [modal, setModal] = useState(false);

    return (
        <div className={style.body}>
            <TopBar onToggleNav={setModal} onClose={modal} />
            <LateralNavBar onClose={setModal} isOpen={modal} />
        </div>

    )

}

export default NavBar
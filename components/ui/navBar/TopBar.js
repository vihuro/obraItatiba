import style from "./TopBar_Style.module.css";
import { AiOutlineUser } from "react-icons/ai"
import { useEffect, useState } from "react";
import TokenDecriptor from "../../../service/TokenDecriptor";
import { parseCookies } from "nookies";

const TopBar = ({ onToggleNav, onClose }) => {

    const[usuario, setUsuario] = useState("");

    useEffect(() =>{
        const token = parseCookies().TOKEN_OBRA;
        const infoUsuario = TokenDecriptor(token)
        setUsuario(infoUsuario.Nome)

    },[])

    return (
        <div className={style.topBar} >
            <div className={style.container} onClick={() => {
                onToggleNav(!onClose)
            }}>
                <div className={style.container_info_usuario} >
                    <div className={style.container_icon} >
                        <AiOutlineUser
                            color={'white'}
                            size={40}
                        />
                    </div>
                    <div className={style.container_nome_usuario} >
                        <p>
                            Usuário: {usuario}
                        </p>
                    </div>
                </div>
                <div className={style.logo}>
                    <div className={style.toglleNab} >
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TopBar
import style from "./style.module.css";
import Button from "../../button/ButtonUi";
import { IoIosWarning } from "react-icons/io"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { SlClose } from "react-icons/sl"


const Modal = ({
    mensagem,
    type,
    visible
}) => {
    console.log(mensagem)

    const cor = type === "warning" ? "#F1D900": type === "error" ? "#FF0000" : type === "sucess" ?"#00F114" : "#FF0000";

    return (
        <div className={style.container} >
            <div className={style.card} >
                <div className={style.containerIcon} >
                    {
                        type === "warning" ?
                            <IoIosWarning
                                size={50}
                                color={cor}
                            /> :
                            type === "sucess" ?
                                <MdOutlineVerifiedUser
                                    size={50}
                                    color={cor}
                                />
                                : <SlClose
                                    size={50}
                                    color={cor}
                                />

                    }
                </div>
                <div className={`${style.containerBody} ${
                    type === "warning" ? 
                    style.warning : 
                    type === "sucess" ? 
                    style.sucess :
                    type === "error" ? 
                    style.error : null 
                    
                    }`}>
                    <p>
                        {mensagem ? mensagem : "Erro inesperado!"}
                    </p>
                </div>
                <div className={style.containerBottom} >
                    <div
                        onClick={() => visible(false)}
                        className={style.button}>
                        <p>
                            x
                        </p>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Modal
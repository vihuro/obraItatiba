import style from "./style.module.css";
import Button from "../../button/ButtonUi";
import { IoIosWarning } from "react-icons/io"


const Modal = ({
    mensagem,
    type,
    visible
}) => {
    return (
        <div className={style.container} >
            <div className={style.card} >
                <div className={style.containerIcon} >
                    <IoIosWarning
                        size={50}
                        color={'#F14C00'}
                    />
                </div>
                <div className={style.containerBody} >
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
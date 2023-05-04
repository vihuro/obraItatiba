import style from "./style.module.css";
import DateFormat from "../../../../service/DateString";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { BiAddToQueue } from "react-icons/Bi"


const CardConhecimentoRadar = ({
    data
}) => {

    console.log(data)
    return (
        data ?
            <div className={style.card} >
                <div className={style.containerTitle} >
                    <div className={style.wrap_container_title} >
                        <h5>{` Nº ${data.numeroDocumento}`}</h5>
                    </div>
                </div>
                <div className={style.containerButtonPlus}>
                    <div className={style.wrap_buttonPlus} >
                        <BiAddToQueue size={30} color="blue" />
                    </div>

                </div>

                <div className={style.containerBody} >
                    <div className={style.wrap_body} >
                        <div className={style.wrap_body_title} >
                            <h5>Código da Transportadora: </h5>
                            <p>{data.codigoTransportadora}</p>
                        </div>
                        <div className={style.wrap_body_title} >
                            <h5>Transportadora: </h5>
                            <p>{data.transportadora}</p>
                        </div>
                        <div className={style.wrap_body_title} >
                            <h5 >Data da Emissão: </h5>
                            <p>{DateFormat(data.dataEmissao)}</p>
                        </div>
                        <div className={style.wrap_body_title} >
                            <h5 >Data da Entrada: </h5>
                            <p>{DateFormat(data.dataEntrada)}</p>
                        </div>
                    </div>
                    <div className={style.containerValorConhecimento} >
                        <div className={style.wrap_container_valor} >
                            <h5>Frete:</h5>
                            <p>{`R$ ${data.valorFrete}`}</p>
                        </div>
                        <div className={style.container_button_visible} >
                            <MdOutlineVisibility color="gray" size={20} />

                        </div>
                    </div>
                    <div className={style.containerInfoPlus} >
                        <div className={style.info}>
                            <p>Parcelas</p>
                            <div className={style.infoParcelas} >
                                <p>{data.parcelas.length}</p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <p>Notas</p>
                            <div className={style.infoNotas} >
                                <p>{data.notas.length}</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            : null
    )

}

export default CardConhecimentoRadar
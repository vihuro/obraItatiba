import { useState, useEffect } from "react";
import api from "../../../../../api/apiObraItatiba";
import Modal from "../../modal/Modal";
import style from "./AdicionarNotaManual.module.css";
import ComboBox from "../../../comboBox/ComboBox";
import Button from "../../../button/ButtonUi";

const AdicionarNota = ({
    visible,
    changeVisible
}) => {
    const [nota, setnota] = useState({

    })
    const [dataTime, setDataTime] = useState([]);
    const [comboBoxTime, setComboBoxTime] = useState(true);
    const [valueTime, setValueTime] = useState();
    const [listAutorizador, setlistAutorizador] = useState([
        {
            "Id": 1, "Value": "ROBERTO"
        },
        {
            "Id": 2, "Value": "BRUNO"
        },
        {
            "Id": 3, "Value": "TETSUO"
        },
        {
            "Id": 4, "Value": "HELENA"
        },
        {
            "Id": 5, "Value": "TOMIKO"
        },
        {
            "Id": 6, "Value": "WAGNER"
        },
    ]);
    const [visibleAutorizador, setVisibleAutorizador] = useState(false);

    useEffect(() => {
        async function times() {
            await api.get("time")
                .then(res => { setDataTime(res.data) })
                .catch(err => console.log(err))
        }
        times();
    }, [])
    console.log(valueTime)

    return (
        <div className={style.container} >
            <div className={style.card} >
                <div className={style.container_title} >
                    <h2>
                        ADICIONAR NOTA
                    </h2>
                </div>
                <div className={style.container_primeiraLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Nº NF:
                            </h5>
                            <input />
                        </div>
                        <div className={style.column} >
                            <h5>
                                Valor:
                            </h5>
                            <input />
                        </div>
                        <div className={style.column}>
                            <h5>
                                Fornecedor:
                            </h5>
                            <input />
                        </div >
                        <div className={style.column}>
                            <h5>
                                CNPJ:
                            </h5>
                            <input />
                        </div>
                    </div>
                </div>
                <div className={style.container_segundaLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Descrição Prod/Serv. :
                            </h5>
                            <input className={style.input_large} />
                        </div>
                    </div>
                </div>
                <div className={style.container_terceiraLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Avulso finalidade :
                            </h5>
                            <input className={style.input_large} />
                        </div>
                    </div>
                </div>
                <div className={style.container_quartaLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.row_comboBox} >
                            <h5>
                                Time:
                            </h5>
                            <ComboBox
                                data={dataTime}
                                placeHolder={"Selecione o time..."}
                                changeVisible={setComboBoxTime}
                                valueVisible={comboBoxTime}
                                value={valueTime}
                            />
                        </div>
                        <div className={style.row_comboBox} >
                            <h5>
                                Autorizador:
                            </h5>
                            <ComboBox
                                data={listAutorizador}
                                placeHolder={"Selecione o autorizador..."}
                                changeVisible={setVisibleAutorizador}
                                valueVisible={visibleAutorizador}
                                value={valueTime}
                            />
                        </div>

                    </div>
                </div>
                <div className={style.container_produto_servico} ></div>
                <div className={style.container_produto_servico_adicionar} ></div>
                <div className={style.container_button} >
                    <div className={style.wrap_container_button} >
                        <Button 
                        action={() => {}}
                        text={"ADICIONAR"}
                        theme={"borderder-green"}
                        />
                    </div>
                    <div className={style.wrap_container_button} >
                        <Button 
                        action={() => {}}
                        text={"CANCELAR"}
                        theme={"borderder-green"}
                        />
                    </div>
                </div>

            </div>
        </div>
    )


}

export default AdicionarNota
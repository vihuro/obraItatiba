import { useState, useEffect } from "react";
import style from "./FiltroNotasTHR.module.css";
import api from "../../../../api/apiObraItatiba";
import ComboBox from "../../comboBox/ComboBox";
import ReactInputMask from "react-input-mask";
const FiltroNotasTHR = ({
    visible,
    changeVisible,
    data,
    dataFilter
}) => {

    const [typeFilter, setTypeFilter] = useState({
        "fornecedor": "",
        "cnpj": "",
        "valorMinimo": 1000000,
        "valorMaximo": 0,
        "time": ""
    });
    const [listTimes, setListTimes] = useState();
    const [valueTime, setValueTime] = useState();
    const [comboBoxTime, setComboBoxTime] = useState(false);
    useEffect(() => {
        api.get("/time")
            .then(res => CreateTimesList(res.data))
            .catch(err => err)
    }, [])
    function CreateTimesList(times) {
        return setListTimes(
            times.map(item => ({ "Id": item.timeId, "Value": item.time }))
        );
    }
    console.log(listTimes)

    function Filtrar() {
        const filtrado = dataFilter.filter(item => {
            if (typeFilter.fornecedor && !item.fornecedor.includes(typeFilter.fornecedor)) {
                return false;
            }
            if (typeFilter.cnpj && !item.cnpj.includes(typeFilter.cnpj)) {
                return false;
            }
            if (typeFilter.valorMaximo && item.valorTotalNota > typeFilter.valorMaximo) {
                return false;
            }
            if (typeFilter.valorMinimo && item.valorTotalNota < typeFilter.valorMinimo) {
                return false;
            }
            return true;
        });
        console.log(filtrado);

    }

    return (
        <div className={style.container} >
            <div className={style.card} >
                <div className={style.container_title} >
                    <div className={style.wrap_title} >
                        <h1>
                            FILTRO
                        </h1>

                    </div>

                </div>
                <div className={style.primeiraLinha_primeiraColuna} >
                    <div className={style.wrap_input} >
                        <h4>
                            Fornecedor:
                        </h4>
                        <input
                            value={typeFilter.fornecedor}
                            onChange={e =>
                                setTypeFilter({ ...typeFilter, fornecedor: e.target.value })}
                        />
                    </div>
                </div>
                <div className={style.primeiraLinha_segundaColuna}>
                    <div className={style.wrap_input} >
                        <h4>
                            CNPJ:
                        </h4>
                        <ReactInputMask
                            mask={"999.999.999/9999-99"}
                            value={typeFilter.cnpj}
                            onChange={e =>
                                setTypeFilter({ ...typeFilter, cnpj: e.target.value.replace(/[^\d]+/g, '') })}
                        />
                    </div>
                    <div className={style.wrap_input} >
                        <h4>
                            TIME:
                        </h4>
                        <div>
                            {listTimes &&
                                <ComboBox
                                    data={listTimes}
                                    changeVisible={setComboBoxTime}
                                    valueVisible={comboBoxTime}
                                    value={setValueTime}
                                    placeHolder={"Selecione o time..."}
                                />}
                        </div>
                    </div>
                </div>
                <div className={style.segundaLinha_primeiraColuna}>
                    <div className={style.wrap_input} >
                        <h4>
                            VALOR MÁXIMO:
                        </h4>
                        <input />
                    </div>

                </div>
                <div className={style.segundaLinha_segundaColuna}>
                    <div className={style.wrap_input} >
                        <h4>
                            VALOR MÍNIMO:
                        </h4>
                        <input />
                    </div>

                </div>
                <div className={style.container_button}>
                    <button onClick={() => { console.log(valueTimes) }} >
                        FILTRAR
                    </button>
                </div>



            </div>

        </div>
    )

}

export default FiltroNotasTHR
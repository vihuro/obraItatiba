import { useState, useEffect, use } from "react";
import style from "./FiltroNotasTHR.module.css";
import api from "../../../../api/apiObraItatiba";
import ComboBox from "../../comboBox/ComboBox";
import ReactInputMask from "react-input-mask";
import Button from "../../button/ButtonUi"
import { AiOutlineClose } from "react-icons/ai"

const FiltroNotasTHR = ({
    visible,
    changeVisible,
    data,
    dataFilter
}) => {

    const [typeFilter, setTypeFilter] = useState({
        "fornecedor": "",
        "cnpj": "",
        "valorMinimo": 0,
        "valorMaximo": 0,
        "time": ""
    });
    const [valorMaximo, setValorMaximo] = useState(0);
    const [valorMinimo, setValorMinimo] = useState(0);
    const [listTimes, setListTimes] = useState();
    const [valueTime, setValueTime] = useState({
        "value":""
    });
    const [comboBoxTime, setComboBoxTime] = useState(false);
    useEffect(() => {
        api.get("/time")
            .then(res => CreateTimesList(res.data))
            .catch(err => err)
    }, [])
    useEffect(() =>{
        api.get("/notas")
        .then(res => data(res.data))
        .catch(err => console.log(err))
    },[])
    function CreateTimesList(times) {
        return setListTimes(
            times.map(item => ({ "Id": item.timeId, "Value": item.time }))
        );
    }

    function Filtrar() {
        const filtrado = dataFilter.filter(item => {
            if (typeFilter.fornecedor && !item.fornecedor.toLowerCase().includes(typeFilter.fornecedor.toLowerCase())) {
                return false;
            }
            if (typeFilter.cnpj && !item.cnpj.includes(typeFilter.cnpj)) {
                return false;
            }
            if(valueTime.value && !item.time.includes(valueTime.value)){
                return false;
            }
            // if (typeFilter.valorMaximo && item.valorTotalNota > typeFilter.valorMaximo) {
            //     return false;
            // }
            // if (typeFilter.valorMinimo && item.valorTotalNota < typeFilter.valorMinimo) {
            //     return false;
            // }
            return true;
        });
        const ValoresFiltrados =  FiltrarValores(filtrado,typeFilter.valorMaximo,typeFilter.valorMinimo);
        data(ValoresFiltrados);
        changeVisible(false);

    }

    function FiltrarValores(arrayOriginal, valorMaximo = 0, valorMinimo =0){
        if(typeof valorMaximo === 'string'){
            valorMaximo = parseFloat(valorMaximo.replaceAll(".","").replace(",","."))
        }
        if(typeof valorMinimo === 'string'){
            valorMinimo = parseFloat(valorMinimo.replaceAll(".","").replace(",","."))
        }
        if (valorMinimo === 0 && valorMaximo === 0) {
            return arrayOriginal; // retorna o array original se nenhum critério for especificado
          }
        
          if (valorMinimo > 0 && valorMaximo > 0) {

            return arrayOriginal.filter((elemento) => elemento.valorTotalNota >= valorMinimo && elemento.valorTotalNota <= valorMaximo); // retorna os elementos dentro do intervalo especificado
          }
        
          if (valorMinimo > 0 && valorMaximo === 0) {

            return arrayOriginal.filter((elemento) => elemento.valorTotalNota >= valorMinimo); // retorna os elementos maiores ou iguais ao valor mínimo
          }
        
          if (valorMaximo > 0 && valorMinimo === 0) {

            return arrayOriginal.filter((elemento) => elemento.valorTotalNota <= valorMaximo); // retorna os elementos menores ou iguais ao valor máximo
          }
    }

    return (
        <div className={style.container} >
            <div className={style.card}
                onClick={e => e.stopPropagation()}
            >
                <div className={style.container_title} >
                    <div className={style.wrap_title} >
                        <h1>
                            FILTRO
                        </h1>

                    </div>
                    <div className={style.wrap_button_close} >
                        <div className={style.button_close}
                            onClick={() =>
                                changeVisible(false)
                            }
                        >
                            <AiOutlineClose
                                size={30}
                                color="white"
                            />

                        </div>

                    </div>

                </div>
                <div className={style.primeiraLinha_primeiraColuna} >
                    <div className={style.wrap_input} >
                        <h4>
                            FORNECEDOR:
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
                        <input
                            value={valorMaximo.toLocaleString("pt-Br")}
                            onChange={e => {
                                const re = /^[0-9]+([,][0-9]{0,2})?$/;
                                const value = e.target.value
                                if (re.test(value)) {
                                    setValorMaximo(value.replace(".", "."))
                                    setTypeFilter({ ...typeFilter, valorMaximo: parseFloat(value.replace(",", ".")).toLocaleString("pt-Br") })
                                }
                            }}
                            onBlur={() => {
                                if (valorMaximo != null && typeof valorMaximo === "string") {
                                    setValorMaximo(parseFloat(valorMaximo.replace(",", ".").toLocaleString("pt-Br")))
                                }
                            }}
                        />
                    </div>

                </div>
                <div className={style.segundaLinha_segundaColuna}>
                    <div className={style.wrap_input} >
                        <h4>
                            VALOR MÍNIMO:
                        </h4>
                        <input
                            value={valorMinimo.toLocaleString("pt-Br")}
                            onChange={e => {
                                const re = /^[0-9]+([,][0-9]{0,2})?$/;
                                const value = e.target.value
                                if (re.test(value)) {
                                    setValorMinimo(value.replace(".", "."))
                                    setTypeFilter({ ...typeFilter, valorMinimo: parseFloat(value.replace(",", ".")).toLocaleString("pt-Br") })
                                }
                            }}
                            onBlur={() => {
                                if (valorMinimo != null && typeof valorMinimo === "string") {
                                    setValorMinimo(parseFloat(valorMinimo.replace(",", ".").toLocaleString("pt-Br")))
                                }
                            }}
                        />
                    </div>

                </div>
                <div className={style.container_button}>
                    <div>
                        <Button
                            text={"FILTRAR"}
                            action={() => { Filtrar()}}
                            theme={"borderder-blue"}
                        />
                    </div>


                </div>



            </div>

        </div>
    )

}

export default FiltroNotasTHR
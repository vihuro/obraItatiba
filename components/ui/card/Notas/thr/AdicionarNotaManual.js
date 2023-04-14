import { useState, useEffect } from "react";
import api from "../../../../../api/apiObraItatiba";
import Modal from "../../modal/Modal";
import style from "./AdicionarNotaManual.module.css";
import ComboBox from "../../../comboBox/ComboBox";
import Button from "../../../button/ButtonUi";
import InputMask from "react-input-mask";
import Numeral from "numeral";
const AdicionarNota = ({
    visible,
    changeVisible
}) => {
    const [nota, setnota] = useState({
        "numeroNota": 0,
        "fornecedor": "",
        "valorTotalNota": 0,
        "cnpj": "",
        "descricaoProdutoServico": "",
        "avulsoFinalidade": "",
        "autorizador": "",
        "usuarioCadastroId": 2,
        "timeId": 0,
        "tipoExportacao": "MANUAL",
        "parcelas": [],
        "produtoServico": []

    })
    const [dataTime, setDataTime] = useState([]);
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
    const [valueAutorizador, setValueAutorizador] = useState();
    const [valueTime, setValueTime] = useState();
    const [visibleAutorizador, setVisibleAutorizador] = useState(false);
    const [visibleTime, setVisibleTime] = useState(false);
    const [listProdutoServico, setListProdutoServico] = useState([])


    useEffect(() => {
        function times() {
            api.get("time")
                .then(res => {
                    CreateListTimes({ times: res.data })
                })
                .catch(err => console.log(err))
        }
        times();
    }, [])

    function CreateListTimes({ times }) {
        const list = times.map(item => ({ Id: item.timeId, Value: item.time }));
        setDataTime(list);
    }
    function formatCNPJ(cnpj) {

        if (!cnpj) return "";
        const formart = cnpj.replace(/\D/g, "");
        return formart.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
    }

    const [valorNota, setValorNota] = useState(2.20);


    return (
        <div className={style.container} >{ }
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

                            <input type="number"
                                onChange={(e) => {
                                    setnota({ ...nota, numeroNota: e.target.value })
                                }}
                            />
                        </div>
                        <div className={style.column} >
                            <h5>
                                Valor:
                            </h5>
                            <input
                                value={ parseFloat(valorNota).toLocaleString("pt-Br")}
                                onChange={e => {
                                    const re = /^[0-9]+([,][0-9]{0,2})?$/;
                                    const value = e.target.value
                                    const valueLimpo = value.replaceAll(".",""). replace(",",".").toLocaleString("pt-Br");
                                    console.log("value limpo = " + valueLimpo)
                                    if (re.test(valueLimpo)) {
                                        // console.log("salvar valor = " + parseFloat(e.target.value.replace(",", ".")))
                                        // console.log("valor bruto = " + valueLimpo)
                                        console.log("visualização = " + value)
                                        // console.log("voltando valor bruto = " + valueLimpo.toLocaleString("pt-Br"))
                                        console.log("==================================================================================")
                                        console.log(valueLimpo.replace(".",","))
                                        setValorNota(valueLimpo.replace(".", ","))
                                        setnota({ ...nota, valorTotalNota: parseFloat(e.target.value.replace(",", ".")) })

                                    }

                                }}
                            />
                            {/* <input

                                value={valorNota.toLocaleString("pt-Br")}
                                onChange={e => {
                                    const re = /^[0-9]+([,][0-9]{0,2})?$/;
                                    const value =  e.target.value
                                    if (re.test(value)) {
                                        console.log("salvar valor = " + parseFloat(e.target.value.replace(",", ".")))
                                        console.log("valor bruto = " + value)
                                        console.log("visualização = " + parseFloat(value.replace(",", ".")).toLocaleString("pt-Br"))
                                        console.log("voltando valor bruto = " + value.toLocaleString("pt-Br"))
                                        setValorNota(value.replace(".", ","))
                                        setnota({ ...nota, valorTotalNota: parseFloat(e.target.value.replace(",", ".")) })

                                    }

                                }}
                            /> */}

                            {/* <input
                            value={valorNota}
                            onChange={e =>{
                                console.log(e.target.value)
                                const inputValue = e.target.value;
                                if (/^\d*\.?\d*$/.test(inputValue)) { // validar se é um número decimal
                                  setValorNota(parseFloat(inputValue.replace(".", "")));
                                }
                                    console.log(valorNota)
                            }}
                            /> */}
                        </div>
                        <div className={style.column}>
                            <h5>
                                Fornecedor:
                            </h5>
                            <input
                                onChange={e =>
                                    setnota({ ...nota, fornecedor: e.target.value })
                                }
                            />
                        </div >
                        <div className={style.column}>
                            <h5>
                                CNPJ:
                            </h5>
                            <InputMask
                                mask="999.999.999/9999-99"
                                value={nota.cnpj}
                                onChange={(e) => setnota({
                                    ...nota,
                                    cnpj: e.target.value.replace(/[^\d]+/g, '')
                                })}
                            />
                            {/* <input
                                value={nota.cnpj}
                                maxLength={14}
                                
                                onChange={(e) => {
                                    setnota({ ...nota, cnpj: (CNPJInput(e)) })
                                }} /> */}
                        </div>
                    </div>
                </div>
                <div className={style.container_segundaLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Descrição Prod/Serv. :
                            </h5>
                            <input
                                className={style.input_large}
                                onChange={e =>
                                    setnota({ ...nota, descricaoProdutoServico: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={style.container_terceiraLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.column} >
                            <h5>
                                Avulso finalidade :
                            </h5>
                            <input
                                className={style.input_large}
                                onChange={e =>
                                    setnota({ ...nota, avulsoFinalidade: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={style.container_quartaLinha} >
                    <div className={style.wrapRow} >
                        <div className={style.row_comboBox} >
                            <h5>
                                Time:
                            </h5>
                            {dataTime.length > 0 && (
                                <ComboBox
                                    data={dataTime}
                                    placeHolder={"Selecione o time..."}
                                    changeVisible={setVisibleTime}
                                    valueVisible={visibleTime}
                                    value={setValueTime}
                                />
                            )}
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
                                value={setValueAutorizador}
                            />
                        </div>

                    </div>
                </div>
                <div className={style.container_produto_servico} ></div>
                <div className={style.container_produto_servico_adicionar} ></div>
                <div className={style.container_button} >
                    <div className={style.wrap_container_button} >
                        <Button
                            action={() => { console.log(nota) }}
                            text={"ADICIONAR"}
                            theme={"borderder-green"}
                        />
                    </div>
                    <div className={style.wrap_container_button} >
                        <Button
                            action={() => { }}
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
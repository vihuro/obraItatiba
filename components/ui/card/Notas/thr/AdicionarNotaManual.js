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

    });
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
    const [valueAutorizador, setValueAutorizador] = useState({
        "id": 0,
        "value": ""
    });
    const [valueTime, setValueTime] = useState({
        "id": 0,
        "value": ""
    });
    const [visibleAutorizador, setVisibleAutorizador] = useState(false);
    const [visibleTime, setVisibleTime] = useState(false);
    const [listProdutoServico, setListProdutoServico] = useState([]);

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
    function CadastarNota() {
        const obj = { ...nota, timeId: valueTime.id, autorizador: valueAutorizador.value };
        console.log(obj)
    }

    const [valorNota, setValorNota] = useState(0);


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
                            {/* <input
                                value={nota.valorTotalNota.toLocaleString("pt-Br")}
                                onChange={e => {
                                    const re = /^[0-9]+([,.][0-9]{0,2})?$/;
                                    const value = e.target.value
                                    const valueLimpo = value.replaceAll(".", '').replace(',', '.');
                                    if (re.test(valueLimpo.replace(".",""))) {
                                        console.log("aperar virugla e entrar aqui")
                                        let teste = valueLimpo.replace(",",".")
                                        const posicaoVirgula = teste.indexOf(".")
                                        if(posicaoVirgula !== -1 && teste.length - posicaoVirgula <=3){
                                            console.log("valor de teste = " +teste)
                                            teste += 0
                                            console.log("tem virgula  " + (teste +=0))
                                        }
                                        console.log(posicaoVirgula)

                                        console.log("aqui é o que vai ser salvo = " + teste)
                                        setnota({ ...nota, valorTotalNota: teste })

                                    }

                                }}
                            /> */}
                            <input

                                value={valorNota.toLocaleString("pt-Br")}
                                onChange={e => {
                                    const re = /^[0-9]+([,][0-9]{0,2})?$/;
                                    const value = e.target.value
                                    if (re.test(value)) {
                                        setValorNota(value.replace(".", ","))
                                        setnota({ ...nota, valorTotalNota: parseFloat(value.replace(",", ".")).toLocaleString("pt-Br") })

                                    }

                                }}
                            />

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
                            action={() => { CadastarNota() }}
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
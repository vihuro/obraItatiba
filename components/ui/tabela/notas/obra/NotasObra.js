import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { FiEdit } from "react-icons/fi";
import CardNota from "../../../card/Notas/thr/Notas";
import Loader from "../../../Load/RingLoader";
import FiltroNotasTHR from "../../../filter/notas/FiltroNotasTHR";
import { IoMdArrowDropdown } from "react-icons/io";
import DateString from "../../../../../service/DateTimeString";
import CardAlterarNota from "../../../card/Notas/thr/AlterarNota";
import CardProdutoServico from "../../../card/modal/ProdutoServico";

const NotasObra = ({
    data
}) => {

    const [visibleCardNota, setVisibleCardNota] = useState(false);
    const [valueNota, setValueNota] = useState(null);
    const [width, setWidth] = useState();
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState();
    const [visibleFilter, setVisibleFilter] = useState(false);
    const [infoPlus, setInfoPlus] = useState(false);
    const [indiceInfoPlus, setIndiceInfoPlus] = useState();
    const [selected, setSelected] = useState(null);
    const [visibleProdutoServico, setVisibleProdutoServico] = useState(false)
    const [indexValue, setIndexValue] = useState(null);


    useEffect(() => {
        setWidth(window.outerWidth);

    }, [width]);

    useEffect(() => {
        data ? setFilter(data) : null;

    });
    const handleRowClick = (index) => {
        if (selected === index) {
            setSelected(null);
            setInfoPlus(false);
            setIndiceInfoPlus(null);
        } else {
            setSelected(index);
            setInfoPlus(true);
            setIndiceInfoPlus(index);
        }
    };



    return (
        <div className={style.table_wrapper} >
            {visibleCardNota ?
                <CardNota
                    data={valueNota}
                /> : null}
            <table
                className={style.body_table} >
                <thead  >
                    <tr>
                        <th>+</th>
                        <th>Nº NOTA</th>
                        {width > 430 ? <th>CNPJ</th> : null}
                        <th>FORNECEDOR</th>
                        <th>VALOR NF</th>
                        <th>TIME</th>
                        {width > 770 ? <th>PARCELAS</th> : null}
                        {width > 770 ? <th>Prod/Ser.</th> : null}
                        {width > 770 ? <th>EDIT</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {filter && (
                        filter.map((item, index) =>
                            <React.Fragment key={index}>
                                {/* <CardAlterarNota /> */}
                                <tr
                                    className={style.table_row}
                                    onClick={() => {
                                        handleRowClick(index)
                                    }}
                                    onMouseEnter={() => setIndexValue(index)}
                                >
                                    <td className={`${selected === index ? style.iconRow : style.iconRow_off}`} >
                                        <div style={{ position: "relative" }} >
                                            <IoMdArrowDropdown size={20}
                                                style={{ display: "flex" }}
                                            />

                                        </div>

                                    </td>
                                    <td>{item.numeroNota}</td>
                                    {width > 430 ? <td style={{
                                        width: 180
                                    }} >
                                        {item.cnpj
                                            .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")}
                                    </td> :
                                        null}
                                    <td>{item.fornecedor}</td>
                                    <td>{`R$${item.valorTotalNota.toLocaleString("pt-BR")}`}</td>
                                    <td>{item.time}</td>
                                    {width > 770 ? <td>{item.parcelas.length}</td> : null}
                                    {width > 770 ? <td
                                        onClick={() => setVisibleProdutoServico(true)}
                                        onMouseEnter={() => setVisibleProdutoServico(true)}
                                        onMouseLeave={() => setVisibleProdutoServico(false)}
                                        className={style.produtoServico}
                                        data-produto-servico={item.produtosServico.length} >
                                        {indexValue === index ?
                                            <CardProdutoServico
                                                visible={visibleProdutoServico}
                                                data={item.produtosServico}
                                            /> : null}

                                    </td> : null}
                                    {width > 770 ? <td>
                                        <FiEdit size={25} color="blue" />
                                    </td>
                                        : null}
                                </tr>
                                {infoPlus && indiceInfoPlus === index &&
                                    <React.Fragment >
                                        <tr className={style.row_info_plus}>
                                            <td colSpan={3} >Autorizador: </td>
                                            <td colSpan={4} >{item.autorizador}</td>
                                        </tr>
                                        <tr className={style.row_info_plus}>
                                            <td colSpan={3} >Tipo de exportação: </td>
                                            <td colSpan={4} >{item.tipoExportacao}</td>
                                        </tr>
                                        <tr className={style.row_info_plus} >
                                            <td colSpan={3} >Usuário do cadastro: </td>
                                            <td colSpan={4} >{item.usuarioCadastro.nome}</td>
                                        </tr>
                                        <tr className={style.row_info_plus}>
                                            <td colSpan={3} >Data e hora do cadastro: </td>
                                            <td colSpan={4} >{DateString(item.dataHoraCadastro)}</td>
                                        </tr>
                                        <tr className={style.row_info_plus}>
                                            <td colSpan={3} >Usuário da alteração: </td>
                                            <td colSpan={4} >{item.usuarioAlteracao.nome}</td>
                                        </tr>
                                        <tr className={style.row_info_plus}>
                                            <td colSpan={3} >Data e hora da alteração: </td>
                                            <td colSpan={4} >{DateString(item.dataHoraAlteracao)}</td>
                                        </tr>
                                    </React.Fragment>
                                }

                            </React.Fragment>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )

}

export default NotasObra
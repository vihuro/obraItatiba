import { useEffect, useState } from "react";
import style from "./style.module.css";
import { FiEdit } from "react-icons/fi";
import CardNota from "../../../card/Notas/thr/Notas";
import Loader from "../../../Load/RingLoader";
import FiltroNotasTHR from "../../../filter/notas/FiltroNotasTHR";

const NotasObra = ({
    data
}) => {

    const [visibleCardNota, setVisibleCardNota] = useState(false);
    const [valueNota, setValueNota] = useState(null);
    const [width, setWidth] = useState();
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState();
    const [visibleFilter, setVisibleFilter] = useState(false);

    useEffect(() => {
        setWidth(window.outerWidth);

    }, [width]);

    useEffect(() => {
        data ? setFilter(data) : null;

    });


    return (
        <div className={style.table_wrapper} >
            {visibleCardNota ?
                <CardNota
                    data={valueNota}
                /> : null}

            <table className={style.body_table} >
                <thead>
                    <tr>
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
                <tbody >
                    {filter && (
                        filter.map((item, index) =>
                            <tr key={index}
                                className={style.table_row}
                            >
                                <td>{item.numeroNota}</td>
                                {width > 430 ? <td style={{
                                    width: 180
                                }} >
                                    {item.cnpj
                                        .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")}
                                </td> :
                                    null}
                                <td>{item.fornecedor}</td>
                                <td>{item.valorTotalNota.toLocaleString("pt-BR")}</td>
                                <td>{item.time}</td>
                                {width > 770 ? <td>{item.parcelas.length}</td> : null}
                                {width > 770 ? <td>{item.produtosServico.length}</td> : null}
                                {width > 770 ? <td>
                                    <FiEdit size={25} color="blue" />
                                </td>
                                    : null}
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )

}

export default NotasObra
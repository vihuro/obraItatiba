import DateString from "../../../../service/DateString";
import style from "./style.module.css";
import { parseCookies,setCookie } from "nookies";


const TableConhecimentoObra = ({
    data
}) => {

    return (
        <table className={style.table} >
            <thead>
                <tr className={style.head}>
                    <th>Nº CONH.</th>
                    <th>Data / Emissão</th>
                    <th>Data / Entrada</th>
                    <th>Cod. / Transp.</th>
                    <th>Transportadora</th>
                    <th>Valor / Frete</th>
                    <th>TIME</th>
                </tr>
            </thead>
            <tbody className={style.body}>
                {data && (
                    data.map((item, index) =>
                        <tr key={index} >
                            <td>{item.numeroDocumento}</td>
                            <td>{DateString(item.dataEmissao)}</td>
                            <td>{DateString(item.dataEntrada)}</td>
                            <td>{item.codigoTransportador}</td>
                            <td>{item.transportador}</td>
                            <td>{`R$ ${item.valorFrete.toLocaleString("pt-Br")}`}</td>
                            <td>{item.time}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )

}

export default TableConhecimentoObra

export const getServerSideProps = (context) => {
    const url = parseCookies(context).OBRA_THR;
    const token = parseCookies(context).TOKEN_OBRA;

    if (!token) {
        setCookie(context, "OBRA_THR", encodeURIComponent(context.resolvedUrl))
        return {
            redirect: {
                destination: "/",
                permanent: false
            },
            props: {}
        }

    }

    return { props: {} }

}
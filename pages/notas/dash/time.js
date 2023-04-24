import { useEffect, useState } from "react";
import style from "./time.module.css";
import api from "../../../api/apiObraItatiba";
import { parseCookies, setCookie } from "nookies"
import Head from "next/head";

const DashNotasPorTime = () => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState(new Date());
    const [totalGasto, setTotalGasto] = useState();

    useEffect(() => {
        AtualizarDash()

    }, []);
    useEffect(() => {
        const tick = setInterval(() => {
            AtualizarDash();
            setTime(new Date());
        }, 10000);
        return () => clearInterval(tick);
    }, [])

    function AtualizarDash() {
        api.get("/notas")
            .then(res => {  MontarTabela({ info: res.data }), TotalGasto(res.data) })
            .catch(err => console.log(err))
    }


    const cores = {
        FUNDO_PADRAO: "#FFF0DD",
        FUNDO_PRETO: "#0D0D0D",
        LETRA_CABECALHO: "#FFC000",
        FUNDO_LEONARDI: "#F4B084",
        FUNDO_UNICON: "#DB6AF6",
        FUNDO_AVULSO: "#A9D08E",
        FUNDO_PELIZER: "#8EA9DB",
        FUNDO_CONTRATADO: "#0000FF",
        LETRA_CONTRARADO: "#FFFF00",
        LETRA_VERDE: "#66FF33",
        FUNDO_VERDE: "#66FF33"
    }


    function MontarTabela({
        info
    }) {
        let table = [];
        for (var i = 0; i < info.length; i++) {
            const filter = table.find((s) => s.time === info[i]["time"]);
            if (filter === undefined) {
                table = [...table, { time: info[i]["time"], "totalGasto": info[i]["valorTotalNota"], contratado: 0 }];
            } else {
                const index = table.indexOf(filter)
                table[index].totalGasto += info[i]["valorTotalNota"];
            }
        }
        let filter = table.find(item => item.time === "Leonardi");
        let index = table.indexOf(filter);
        table[index].contratado = 5189100
        filter = table.find(item => item.time === "Unicon");
        index = table.indexOf(filter);
        table[index].contratado = 700000
        filter = table.find(item => item.time === "Pellizzer");
        index = table.indexOf(filter);
        table[index].contratado = 0

        filter = table.find(item => item.time === "Avulso");
        index = table.indexOf(filter);
        table[index].contratado = 1000000
        setData(table);
    }

    function TotalGasto(info) {

        let total = 0;
        for (var i = 0; i < info.length; i++) {
            total += info[i]["valorTotalNota"];
        }
        setTotalGasto(total);
    }



    return (
        <div>
            <Head>
                <link href="/favicon.ico" />
                <title>THR - Dash (Gasto obra)</title>
            </Head>
            {data && (
                <table className={style.body_table} >
                    <thead>
                        <tr
                            style={{
                                background: cores.FUNDO_PRETO,
                                color: cores.LETRA_CABECALHO
                            }}
                        >
                            <th>TIME</th>
                            <th>TOTAL / TIME</th>
                            {/* <th>A PAGAR</th>
                            <th>TOTAL GASTO</th> */}
                            <th>CONTRATADO</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) =>
                            <tr key={index} >
                                <td
                                    style={
                                        item.time === "Leonardi" ?
                                            { background: cores.FUNDO_LEONARDI } :
                                            item.time === "Unicon" ?
                                                { background: cores.FUNDO_UNICON } :
                                                item.time === "Pellizzer" ?
                                                    { background: cores.FUNDO_PELIZER } :
                                                    item.time === "Avulso" ?
                                                        { background: cores.FUNDO_AVULSO } :
                                                        { background: cores.FUNDO_PADRAO }
                                    }
                                >
                                    {item.time}
                                </td>
                                {/* <td
                                    style={{
                                        background: cores.FUNDO_PADRAO
                                    }}
                                >
                                    R$ {item.totalGasto.toLocaleString("pt-br")}
                                </td> */}
                                <td
                                    style={{
                                        background: cores.FUNDO_PADRAO
                                    }}
                                >R$ {item.totalGasto.toLocaleString("pt-br")}</td>
                                {/* <td
                                    style={{
                                        background: cores.FUNDO_PADRAO
                                    }}
                                >
                                    {`R$ ${(item.totalGasto).toLocaleString("pt-br")}`}
                                </td> */}
                                <td
                                    style={{
                                        background: cores.FUNDO_CONTRATADO,
                                        color: cores.LETRA_CONTRARADO
                                    }}
                                >
                                    {`R$ ${(item.contratado).toLocaleString("pt-br")}`}
                                </td>
                                <td
                                    style={{
                                        background: "#66FF33"
                                    }}
                                >
                                    {"NÃO ATINGIDO"}
                                </td>
                            </tr>

                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th
                                style={{
                                    borderRight: 0,
                                    background: cores.FUNDO_PRETO,
                                    color: cores.LETRA_VERDE,
                                    fontSize:14
                                }}
                            >
                                TOTAL GASTO
                            </th>
                            {totalGasto &&
                                <th
                                    style={{
                                        borderRight: 0,
                                        background: cores.FUNDO_PRETO,
                                        color: cores.LETRA_VERDE,
                                        fontSize:18
                                    }}
                                >
                                    {`R$ ${totalGasto.toLocaleString("pt-Br")}`}
                                </th>
                            }
                        </tr>
                    </tfoot>
                </table>
            )}
        </div>
    )
}

export default DashNotasPorTime

export const getServerSideProps = (context) => {
    const url = parseCookies(context).OBRA_THR;
    const token = parseCookies(context).TOKEN_OBRA;

    if (!token) {
        setCookie(context, "OBRA_THR", encodeURIComponent(context.resolvedUrl), {
            path: "/"
        })
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
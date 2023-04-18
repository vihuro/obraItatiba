import { useEffect, useState } from "react";
import style from "./time.module.css";
import api from "../../../api/apiObraItatiba";
import {parseCookies,setCookie}from "nookies"

const DashNotasPorTime = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        AtualizarDash()

    }, [])
    function AtualizarDash() {
        api.get("/notas")
            .then(res => {console.log(res),MontarTabela({ info: res.data })})
            .catch(err => console.log(err))
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
        table[index].contratado = 30000000

        table[index].contratado = 15000000
        setData(table);
    }

    return (
        <div>
            {data && (
                <table className={style.body_table} >
                    <thead>
                        <tr>
                            <th>TIME</th>
                            <th>TOTAL GASTO</th>
                            <th>CONTRATADO</th>
                            <th>SALDO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) =>
                            <tr key={index} >
                                <td>
                                    {item.time}
                                </td>
                                <td>
                                    {item.totalGasto.toLocaleString("pt-br")}
                                </td>
                                <td>{item.contratado.toLocaleString("pt-br")}</td>
                                <td>
                                    {`${(item.contratado - item.totalGasto).toLocaleString("pt-br")}`}
                                </td>
                            </tr>

                        )}
                    </tbody>
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
        setCookie(context, "OBRA_THR", encodeURIComponent(context.resolvedUrl),{
            path:"/"
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
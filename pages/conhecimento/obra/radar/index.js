import style from "./style.module.css";
import NavBar from "../../../../components/ui/navBar/NavBar";
import { useEffect, useState } from "react";
import apiObra from "../../../../api/apiObraItatiba";
import CardConhecimentoRadar from "../../../../components/ui/card/Conhecimento/cardConhecimentoRadar";
import { parseCookies,setCookie } from "nookies";


const ConhecimentoRadar = () => {
    useEffect(() => {
        FechData()
    }, [])

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    const [dataFilter, setDataFilter] = useState([])
    const [dataTime, setDataTime] = useState([]);

    function FechData() {
        apiObra.get("/conhecimento/radar/notsaved")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        apiObra.get("/time")
            .then(res => MontarList(res.data))
            .catch(err => console.log(err))
    }

    function MontarList(data) {
        if (data) {
            setDataTime(prev => {
                const newItem = data.map(item => ({ "Id": item.timeId, "Value": item.time }))
                return [...prev, ...newItem]
            })
        }
    }

    const filtro = data.filter((doc) => doc.numeroDocumento.toString().startsWith(parseInt(filter)))



    return (
        <div className={style.body} >
            <div className={style.container}>
                <NavBar />
                <div className={style.container_filter} >
                    <h3>Total de conhecimentos não cadastrados: {data.length}</h3>
                    <div className={style.wrap_container_filter} >
                        <h5>Filtro</h5>
                        <input type="number" value={filter} onChange={e => setFilter(e.target.value)} />
                    </div>
                </div>
                <div className={style.conatinerCards} >
                    {filter !== "" ?
                        filtro && dataTime && (
                            filtro.map((item, index) =>
                                <CardConhecimentoRadar
                                    key={index}
                                    data={item}
                                    dataTime={dataTime}
                                />)

                        )
                        : data && dataTime && (
                            data.map((item, index) =>
                                <CardConhecimentoRadar
                                    key={index}
                                    data={item}
                                    dataTime={dataTime}
                                    refresh={() => FechData()}
                                />
                            )
                        )}
                </div>

            </div>
        </div>
    )
}
export default ConhecimentoRadar

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
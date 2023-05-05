import style from "./style.module.css";
import api from "../../../../api/apiObraItatiba";
import { useEffect, useState } from "react";
import NavBar from "../../../../components/ui/navBar/NavBar";
import TableConhecimentoObra from "../../../../components/ui/tabela/conhecimento/ConhecimentoObra";
import { parseCookies,setCookie } from "nookies";

const ConhecimentosObraTHR = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        api.get("/conhecimento")
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={style.body} >
            <div className={style.container}>
                <NavBar />
                <div className={style.wrap_container} >
                    <div className={style.container_filtro} >

                    </div>
                    <div className={style.container_table} >
                        <TableConhecimentoObra
                            data={data}
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConhecimentosObraTHR

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
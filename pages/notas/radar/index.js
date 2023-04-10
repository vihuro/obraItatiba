import React, { useState, useEffect } from "react"
import api from '../../../api/apiObraItatiba';
import style from "./index.module.css";
import Card from "../../../components/ui/card/Notas/CardNota"
import NavBar from "../../../components/ui/navBar/NavBar";
import { setCookie, parseCookies } from "nookies";


const NotasRadar = () => {
    const [notas, setNotas] = useState(null);
    const [time, setTime] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)

        const fecthData = () => {
            
            api.get("notas/radar")
                .then(res => setNotas(res.data))
                .catch(err => console.log(err));
            api.get("time")
                .then(res => { 
                    setTime(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
        fecthData()
    }, []);
    
    return (
        loading ? <div>carregando...</div> :
        <div className={style.body}>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerCards} >
                    {time && notas && (
                        notas.map((item, index) => {
                            return (
                                <Card key={index}
                                    data={item}
                                    dataIndex={index}
                                    dataTimes={time}
                                />
                            )
                        })
                    )}

                </div>

            </div>
        </div>

    )
}

export default NotasRadar

export const getServerSideProps = (context) => {
    const url = parseCookies(context).OBRA_THR;
    const token = parseCookies(context).TOKEN_OBRA;

    if (!token) {
        console.log(context.resolvedUrl)
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
import React, { useState, useEffect } from "react"
import api from '../../../api/apiObraItatiba';
import style from "./index.module.css";
import Card from "../../../components/ui/card/Notas/CardNota";
import NavBar from "../../../components/ui/navBar/NavBar";
import { setCookie, parseCookies } from "nookies";
import Loader from "../../../components/ui/Load/RingLoader";
import Modal from "../../../components/ui/card/modal/Modal";


const NotasRadar = () => {
    const [notas, setNotas] = useState(null);
    const [time, setTime] = useState(null);
    const [loading, setLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState({
        "type": "",
        "message": ""
    });
    const [visibleMessage, setVisibleMessage] = useState(false);


    useEffect(() => {
        setLoading(true)

        FetchData();
        api.get("time")
            .then(res => {
                setTime(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    async function FetchData() {
        await api.get("notas/radar/notsaved")
            .then(res => {
                setNotas(res.data)
            })
            .catch(err => {
                console.log(err)
                if (err.response.message) {
                    setInfoMessage({ type: "warning", message: err.data.message })
                } else if (err.message) {
                    setInfoMessage({ type: "error", message: err.message })
                }
                else {
                    setInfoMessage({ type: "error", message: err })

                }
                setVisibleMessage(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className={style.body}>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerCards} >
                    {visibleMessage ?
                        <Modal
                            mensagem={infoMessage.message}
                            type={infoMessage.type}
                            visible={setVisibleMessage}
                        />
                        : null}

                    {loading ? <Loader /> :
                        time && notas && (
                            notas.map((item, index) => {
                                return (
                                    <Card key={index}
                                        data={item}
                                        dataIndex={index}
                                        dataTimes={time}
                                        refresh={FetchData}
                                    />
                                )
                            })
                        )
                    }



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
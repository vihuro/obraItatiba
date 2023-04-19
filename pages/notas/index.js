import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import style from "./style.module.css";
import Navbar from "../../components/ui/navBar/NavBar"
import api from "../../api/apiObraItatiba";
import NotasObra from "../../components/ui/tabela/notas/obra/NotasObra";
import Loader from "../../components/ui/Load/RingLoader";
import Modal from "../../components/ui/card/modal/Modal";
import Button from "../../components/ui/button/ButtonUi";
import AdicionarNota from "../../components/ui/card/Notas/thr/AdicionarNotaManual";
import FiltroNotasTHR from "../../components/ui/filter/notas/FiltroNotasTHR";
import Head from "next/head";
import { FaFilter } from "react-icons/fa"
import { VscGraph } from "react-icons/vsc"
import GraficoTime from "../../components/ui/grafico/notas/time";

const Notas = () => {
    const navigation = useRouter();
    const [data, setData] = useState([]);
    const [time, setTime] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [infoMessage, setInfoMessage] = useState({
        "message": "",
        "type": ""
    });
    const [visibleMessage, setVisibleMessage] = useState(false);
    const [cardAdicionarNota, setCardAdicionarNota] = useState(false);
    const [filter, setFilter] = useState();
    const [visibleFilter, setVisibleFilter] = useState(false);


    useEffect(() => {
        api.get("/notas")
            .then(res => { CarregarData() })
            .catch(err => setInfoMessage({ type: "error", message: err.message }))
            .catch(err => { setInfoMessage({ type: "warning", message: err.response.data }) })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [])

    console.log(filter)

    useEffect(() => {
        // const tick = setInterval(() => {
        //     console.log(time)
        //     CarregarData();
        //     setTime(new Date());
        // }, 10000);
        // return () => clearInterval(tick);

    }, [])

    function CarregarData() {
        api.get("/notas")
            .then(res => { setFilter(res.data) })
            .catch(err => console.log(err))

    }


    return (
        <div className={style.body}>
            <Head>
                <title>THR - NOTAS</title>
            </Head>
            <div className={style.container} >
                <Navbar />
                <div className={style.wrap_container} >
                    {cardAdicionarNota &&
                        <AdicionarNota
                            functions={CarregarData}
                            visible={cardAdicionarNota}
                            changeVisible={setCardAdicionarNota}
                        />
                    }
                    {visibleFilter &&
                        <FiltroNotasTHR
                            data={setFilter}
                            changeVisible={setVisibleFilter}
                            visible={visibleFilter}
                            dataFilter={filter}
                        />
                    }
                    {/* <GraficoTime /> */}

                    {/* <Modal 
                    mensagem={infoMessage.message}
                    type={infoMessage.type}
                    visible={setVisibleMessage}
                    /> */}
                    <div className={style.container_filtro} >
                        <div className={style.wrap_button} >
                            <div className={style.wrap_button_novaNota} >
                                <Button
                                    text={"NOVA NOTA"}
                                    theme={"borderder-green"}
                                />

                            </div>
                        </div>
                        <div className={style.wrap_filter} >
                            <div className={style.wrap_button_filter} 
                            onClick={() => setVisibleFilter(true)}
                            >
                                <FaFilter
                                    size={20}
                                    color="#4219EF" />
                            </div>
                            <div className={style.wrap_button_filter} >
                                <VscGraph
                                    size={25}
                                    color="#D80EB2" />
                            </div>
                        </div>
                    </div>
                    <div className={style.card_notas}>
                        {loading ? <Loader /> :
                            <NotasObra
                                data={filter}
                            />}

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Notas

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
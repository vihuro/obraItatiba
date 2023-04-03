import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import style from "./style.module.css";
import Navbar from "../../components/ui/navBar/NavBar"
import NotasTHR from "../../components/ui/card/Notas/thr/Notas";

const Notas = () => {
    const navigation = useRouter();


    return (
        <div className={style.body}>
            <div className={style.container} >
                <Navbar />
                <div className={style.wrap_container} >
                    <div className={style.container_filtro} >
                    </div>
                    <div className={style.card_filtro} >
                        filtro
                        
                    </div>
                    <div className={style.card_notas}>
                        <NotasTHR

                        />
                        <NotasTHR

                        />
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
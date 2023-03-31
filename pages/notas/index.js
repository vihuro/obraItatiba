import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import style from "./style.module.css";
import Navbar from "../../components/ui/navBar/NavBar"

const Notas = () => {
    const navigation = useRouter();


    return (
        <div className={style.body}>
            <div className={style.container} >
                <Navbar />
                voC~e está em notas
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
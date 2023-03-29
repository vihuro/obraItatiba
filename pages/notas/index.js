import react,{useState,useEffect} from "react"
import { useRouter } from "next/router";
import {setCookie ,parseCookies} from "nookies"

const Notas = ({...props}) =>{
    const navigation = useRouter();

    function VerifyUser(){
        if(localStorage.getItem("TOKEN")) return true;

        return false;
    }
    
    return(
        <div>

        </div>
    )

}

export default Notas

export const getServerSideProps=(context)=>{
    const token = parseCookies().TOKEN_OBRA;
    setCookie(context,"TOKEN_OBRA","SLKJSKLSJLKSJLSK",{
        maxAge:60*60*1 //1 hora
    })
    console.log(token)

    if(!token){
        setCookie(context, "OBRA_THR",encodeURIComponent(context.resolvedUrl))
        return{
            redirect:{
                destination:"/",
                permanent:false
            },
            props:{}
        }
    }

    return{props:{}}

}
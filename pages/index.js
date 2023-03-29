import style from "./index.module.css"
import{parseCookies}from "nookies"

function Home(){

    const url = decodeURIComponent(parseCookies().OBRA_THR)
    const token = parseCookies().TOKEN_OBRA;
    console.log(token)

    return<div className={style.body}>Home</div>
}
export default Home
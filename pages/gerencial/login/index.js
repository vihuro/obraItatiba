import styles from "./style.module.css";
import NavBar from "../../../components/ui/navBar/NavBar";
import TableUsuario from "../../../components/ui/tabela/login/Usuario";
import api from "../../../api/apiObraItatiba";
import { useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import EditUsuario from "../../../components/ui/card/Usuario/EditUsuario";


const Login = () => {


    const [data, setData] = useState([]);
    const [cardEdit, setCardEdit] = useState(false);
    const [dataEdit, setDataEdit] = useState(0);

    useEffect(() => {
        fechaData()
    }, [])

    function fechaData() {
        api.get("/login/todos")
            .then(res => { setData(res.data) })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.body} >
            <div className={styles.container} >
                <NavBar />
                <img  className={styles.image} src={"../../../rm380-07.jpg"} />
                <div className={styles.wrap_container} >
                    <div className={styles.container_filter} >
                    </div>
                    <div className={styles.container_table}>
                        {data &&(
                            <TableUsuario
                                data={data}
                                visibylityEditUser={setCardEdit}
                                dataEdit={setDataEdit}
                                refresh={fechaData}
                            />)}
                        {cardEdit && (
                            <EditUsuario
                                data={data[dataEdit]}
                                changeVisible={setCardEdit}
                                refresh={fechaData}
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Login

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
import NavBar from "../../../components/ui/navBar/NavBar";
import api from "../../../api/apiObraItatiba";
import styles from "./style.module.css";
import TabelaTimes from "../../../components/ui/tabela/time/TabelaTimes";
import CadastroTime from "../../../components/ui/card/Time/CadastrarTimes";
import Button from "../../../components/ui/button/ButtonUi";
import { useEffect, useState } from "react";

const Times = () => {
    const [data, setData] = useState([]);
    const [cardCadastroTime, setCadastroTime] = useState(false);

    useEffect(() => {
        FechData()
    }, [])

    function FechData() {
        api.get("/time")
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }

    return (
        <div className={styles.body} >
            <div className={styles.container} >
                <NavBar />
                <div className={styles.wrap_container} >
                    {cardCadastroTime ? <CadastroTime changeVisible={setCadastroTime} refresh={FechData} /> : null}

                    <div className={styles.container_filter} >
                        <div className={styles.wrap_container_button} >
                            <div className={styles.button} >
                                <Button
                                    text={"ADICIONAR TIME"}
                                    action={() => { setCadastroTime(true)}}
                                    theme={"borderder-blue"}
                                />
                            </div>

                        </div>
                    </div>
                    <div className={styles.container_table}>
                        {data ?
                            <TabelaTimes
                                data={data}
                                refresh={FechData}
                            /> :
                            null
                        }
                    </div>

                </div>

            </div>
        </div>
    )

}

export default Times

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
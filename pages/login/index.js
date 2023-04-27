import styles from "./style.module.css";
import NavBar from "../../components/ui/navBar/NavBar";
import TableUsuario from "../../components/ui/tabela/login/Usuario";
import api from "../../api/apiObraItatiba";
import { useEffect, useState } from "react";

const Login =() =>{


    const [data,setData] = useState();
    useEffect(() =>{
        api.get("/login/todos")
        .then(res => {console.log(res),setData(res.data)})
        .catch(err => console.log(err))
    },[]) 

    return(
        <div className={styles.body} >
            <div className={styles.container} >
                <NavBar />
                <div className={styles.wrap_container} >
                    <div className={styles.container_filter} >

                    </div>
                    <div className={styles.container_table}>
                        <TableUsuario 
                            data={data}
                        />

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Login
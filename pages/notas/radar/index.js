import React, { useState, useEffect } from "react"
import api from '../../../api/apiObraItatiba';
import style from "./index.module.css";
import Card from "../../../components/ui/card/Notas/CardNota"
import NavBar from "../../../components/ui/navBar/NavBar";


const Notas = () => {
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

export default Notas
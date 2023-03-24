import React,{useState,useEffect} from "react"
import api from '../../api/apiObraItatiba';
import style from "./index.module.css";
import Card from "../../components/ui/card/Notas/CardNota"


const Notas = () =>{
    const[notas, setNotas] = useState(null);
    
    useEffect(() =>{
        api.get("notas")
        .then(res => setNotas(res.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div className={style.body}>
            <div className={style.container}>
                {notas && (
                    notas.map((item,index) =>
                    <Card key={index}
                    data={item}
                    dataIndex={index}
                     />
                    )
                )}
            </div>
        </div>

    )

}

export default Notas
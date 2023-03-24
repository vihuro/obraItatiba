import React,{useState,useEffect} from "react"
import style from "./documento.module.css";

const Documento = ({documento,visible, index,...pros}) =>{

    const [data,setData] = useState(null);
    const [visibily, setVisibyle] = useState(false);

    useEffect(() =>{
        setData(documento)
    },[])
    return(
        <div
        className={style.container}
        onClick={() =>{
            visible(false)
        }}>
            <div>
                {data && data.map((item,index) =>(
                    <div key={index}>
                        {item.numeroDocumento}
                    </div>
                ))}

            </div>

        </div>
    )

}

export default Documento
import style from "./style.module.css";
import NavBar from "../../../../components/ui/navBar/NavBar";
import { useEffect, useState } from "react";
import apiObra from "../../../../api/apiObraItatiba";
import CardConhecimentoRadar from "../../../../components/ui/card/Conhecimento/cardConhecimentoRadar";

const ConhecimentoRadar = () => {
    useEffect(() => {
        FechData()
    }, [])

    const [data, setData] = useState([]);
    function FechData() {
        apiObra.get("/conhecimento/radar/notsaved")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className={style.body} >
            <div className={style.container}>

                <NavBar />
                <div className={style.conatinerCards} >
                    {data && (
                        data.map((item, index) =>
                            <CardConhecimentoRadar
                                data={item}
                            />)

                    )}


                </div>

            </div>
        </div>
    )
}
export default ConhecimentoRadar
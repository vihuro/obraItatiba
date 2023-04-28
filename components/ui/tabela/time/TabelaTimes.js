import style from "./style.module.css";
import DateFormat from "../../../../service/DateTimeString";
import CadastroTime from "../../card/Time/CadastrarTimes";
import { useState } from "react";

const TabelaTimes = ({
    data,
    refresh
}) => {

    const[cardNovoTime, setCardNovoTime] = useState(false);


    return (
        <div >
            {cardNovoTime ?<CadastroTime refresh={refresh} /> : null}
            
            <table className={style.table} >
                <thead>
                    <tr className={style.head} >
                        <th>ID</th>
                        <th>TIME</th>
                        <th>USUÁRIO CADASTRO</th>
                        <th>DATA/HORA CADASTRO</th>
                        <th>USUÁRIO ALTERAÇÃO</th>
                        <th>DATA/HORA ALTERAÇÃO</th>
                    </tr>
                </thead>
                <tbody className={style.body} >
                    {data ?
                        data.map((item, index) =>
                            <tr key={index} >
                                <td>{item.timeId}</td>
                                <td>{item.time}</td>
                                <td className={style.row_usuario} data-usuario={item.usuarioCadastro.nome} />
                                <td>{DateFormat(item.dataHoraCadastro)}</td>
                                <td className={style.row_usuario} data-usuario={item.usuarioAlteracao.nome} />
                                <td>{DateFormat(item.dataHoraAlteracao)}</td>
                            </tr>

                        )
                        : null}
                </tbody>
            </table>
        </div>
    )

}

export default TabelaTimes
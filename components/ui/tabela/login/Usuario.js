import style from "./style.module.css";
import { FiEdit } from "react-icons/Fi";
import React, { useEffect, useState } from "react";
import ClaimsForUser from "../../card/Claims/ClaimsForUser";
import EditUsuario from "../../card/Usuario/EditUsuario";


const TableUsuario = ({
    data,
    visibylityEditUser,
    dataEdit,
    refresh
}) => {
    const [indexValue, setIndexValue] = useState(null);
    const [infoUsuario, setInfoUsuario] = useState([])



    return (

        <div className={style.container_table} >
            <table className={style.table} >
                <thead >
                    <tr className={style.head}>
                        <th>ID</th>
                        <th>APELIDO</th>
                        <th>NOME</th>
                        <th>CLAIMS</th>
                        <th>EDIT.</th>
                    </tr>
                </thead>
                <tbody className={style.body} >
                    {data && (
                        data.map((item, index) =>
                            <React.Fragment key={index} >
                                <tr >
                                    <td>
                                        {item.usuarioId}
                                    </td>
                                    <td>
                                        {item.apelido}
                                    </td>
                                    <td>
                                        {item.nomeUsuario}
                                    </td>
                                    <td className={style.row_claims}
                                        data-claims={item.claims.length}
                                        onMouseEnter={() => setIndexValue(index)}
                                        onMouseLeave={() => setIndexValue(null)}
                                    >
                                        {indexValue == index ?
                                            <ClaimsForUser
                                                data={item.claims}
                                            /> :
                                            null}
                                    </td>
                                    <td>
                                        <FiEdit
                                            onClick={() => {
                                                dataEdit(index)
                                                visibylityEditUser(true)
                                            }} color="#1AEA50" size={"20"}
                                        />
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default TableUsuario
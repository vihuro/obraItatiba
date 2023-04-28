import style from "./style.module.css";
import { FiEdit } from "react-icons/Fi";


const TableUsuario = ({
    data
}) =>{
    return(
        data ? 
        
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
                        <tr key={index} >
                            <td>
                                {item.usuarioId}
                            </td>
                            <td>
                                {item.apelido}
                            </td>
                            <td>
                                {item.nomeUsuario}
                            </td>
                            <td className={style.row_claims} data-claims={item.claims.length} />
                            <td>
                                <FiEdit color="#1AEA50"size={"20"} />
                            </td>
                        </tr>
                    )
                )}
            </tbody>

        </table>
        :null
    )

}

export default TableUsuario
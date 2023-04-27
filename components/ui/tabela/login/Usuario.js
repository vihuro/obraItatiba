import style from "./style.module.css";

const TableUsuario = ({
    data
}) =>{
    return(
        data ? 
        
        <table className={style.table} >
            <thead>
                <tr className={style.head} >
                    <td>ID</td>
                    <td>APELIDO</td>
                    <td>NOME</td>
                </tr>
            </thead>
            <tbody>
                {data && (
                    data.map((item, index) =>
                        <tr>
                            <td>
                                {item.usuarioId}
                            </td>
                            <td>
                                {item.apelido}
                            </td>
                            <td>
                                {item.nomeUsuario}
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
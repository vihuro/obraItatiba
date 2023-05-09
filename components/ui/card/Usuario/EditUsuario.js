import style from "./editUsuario.module.css";
import { RiDeleteBin7Line } from "react-icons/ri"
import api from "../../../../api/apiObraItatiba";
import { useEffect, useState } from "react";
import ComboBox from "../../comboBox/ComboBox";
import Button from "../../button/ButtonUi";
import { parseCookies } from "nookies";
import TokenDecriptor from "../../../../service/TokenDecriptor";

const EditUsuario = ({
    valueVisible,
    changeVisible,
    data,
    refresh
}) => {


    const [claimsNome, setClaimsNome] = useState([]);
    const [infoUsuario, setInfoUsuario] = useState({});
    const [visibleComboBox, setVisibleComboBox] = useState(false);
    const [valueClaims, setValueClaims] = useState({});
    const [infoToken, setInfoToken] = useState({});
    const [changeClaim, setChangeClaims] = useState({
        claimId: 0,
        usuarioId: data.usuarioId,
        usuarioCadastroId: 0
    });
    const [textComboBox, setTextComboBox] = useState("");

    useEffect(() => {
        setInfoUsuario(data);
        setInfoToken(TokenDecriptor(parseCookies().TOKEN_OBRA))
        api.get("/claimstype")
            .then(res => {
                setClaimsNome(prev => {
                    const list = res.data.map(item => ({ Id: item.claimId, Value: `${item.nome} - ${item.valor}` }))
                    list.sort((a, b) => a.Value.localeCompare(b.Value));
                    return [...prev, ...list]
                })
            })
            .catch(err => console.log(err))
    }, [])

    function changeClaimsForUser() {

        const info = {
            ...changeClaim,
            claimId: valueClaims.id,
            usuarioCadastroId: parseInt(infoToken.idUser)
        }
        api.put("/claims/user", info)
            .then(res => {
                refresh()
                api.get(`/login/apelido/${infoUsuario.apelido}`)
                    .then(res => {
                        setInfoUsuario(res.data)
                        setTextComboBox("");
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    function removeClaimForUser() {
        if (changeClaim.claimId !== 0) {
            const info = {
                ...changeClaim,
                usuarioCadastroId: parseInt(infoToken.idUser)
            }
            api.delete("/claims/user/delete", { data: info })
                .then(res => {
                    refresh()
                    api.get(`/login/apelido/${infoUsuario.apelido}`)
                        .then(res => {
                            setInfoUsuario(res.data)
                            setTextComboBox("");
                        })
                        .catch(err => console.log(err))
                })

        }

    }

    return (
        infoUsuario ?
            <div className={style.body} onClick={() => changeVisible(false)} >
                <div className={style.card} onClick={e => e.stopPropagation()} >
                    <div className={style.title} >
                        <h3>
                            EDITAR USUÁRIO
                        </h3>
                    </div>
                    <div className={style.container_body_apelido} >
                        <div className={style.wrap_apelido} >
                            <p>APELIDO:</p>
                            <input type="text" readOnly value={infoUsuario?.apelido || ""} />
                        </div>
                        <div className={style.wrap_nome} >
                            <p>NOME:</p>
                            <input type="text" readOnly value={infoUsuario?.nomeUsuario || ""}/>
                        </div>
                        <div className={style.wrap_senha} >
                            <p>SENHA:</p>
                            <input readOnly value={""}/>
                        </div>
                    </div>
                    <div className={style.container_body_claims} >
                        <div className={style.wrap_claims} >
                            <div className={style.wrap_container_claims} >
                                <div className={style.header} >
                                    <div >
                                        <h4>CLAIM</h4>
                                    </div>
                                    <div  >
                                        <h4>VALOR</h4>
                                    </div>
                                    <div >
                                        <h4>REMOV.</h4>
                                    </div>
                                </div>
                                <div className={style.container_claims_body} >
                                    {infoUsuario.claims && (
                                        infoUsuario.claims.map((item, index) =>
                                            <div key={index} className={style.row} >
                                                <div>
                                                    <p>
                                                        {item.nome}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        {item.valor}
                                                    </p>
                                                </div>
                                                <div>
                                                    {item.claimId !== 0 ? <RiDeleteBin7Line color="red" size={18} onClick={() => {
                                                        setChangeClaims({ ...changeClaim, claimId: item.claimId }), removeClaimForUser()

                                                    }} /> : null}

                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className={style.container_add_claim} >
                            <div className={style.container_combo_box} >
                                <div className={style.wrap_combo_box} >
                                    REGRAS
                                    {claimsNome.length > 0 && (
                                        <ComboBox
                                            changeVisible={setVisibleComboBox}
                                            placeHolder={"REGRA..."}
                                            data={claimsNome}
                                            valueVisible={visibleComboBox}
                                            value={setValueClaims}
                                            text={textComboBox}
                                            changeText={setTextComboBox}
                                        />
                                    )}
                                </div>

                            </div>
                            <div className={style.container_claims_button} >
                                <div className={style.wrap_container_button_add} >
                                    <Button
                                        action={() => { changeClaimsForUser() }}
                                        text={"ADICIONAR"}
                                        theme={"borderder-blue"}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null)

}

export default EditUsuario
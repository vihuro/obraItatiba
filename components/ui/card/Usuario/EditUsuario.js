import style from "./editUsuario.module.css";
import { RiDeleteBin7Line } from "react-icons/ri"
import api from "../../../../api/apiObraItatiba";
import { useEffect, useState } from "react";
import ComboBox from "../../comboBox/ComboBox";
import Button from "../../button/ButtonUi";
import { parseCookies } from "nookies";
import TokenDecriptor from "../../../../service/TokenDecriptor";
import Loading from "../../Load/RingLoader";

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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInfoUsuario(data);
        setInfoToken(TokenDecriptor(parseCookies().TOKEN_OBRA));
        getAllClaims();
    }, [])

    async function getAllClaims() {
        setLoading(true)
        await api.get("/claimstype")
            .then(res => {
                montarLista(res.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    function montarLista(lista) {
        setClaimsNome(prev => {
            const list = lista.map(item => ({ Id: item.claimId, Value: `${item.nome} - ${item.valor}` }));
            list.sort((a, b) => a.Value.localeCompare(b.Value));
            return [...prev, ...list]
        })
    }

    async function changeClaimsForUser() {
        setLoading(true)
        const info = {
            ...changeClaim,
            claimId: valueClaims.id,
            usuarioCadastroId: parseInt(infoToken.idUser)
        }
        await api.put("/claims/user", info)
            .then(res => {
                refresh()
                getInfoUser(infoUsuario.apelido)
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    async function getInfoUser(apelido) {
        setLoading(true)
        await api.get(`/login/apelido/${apelido}`)
            .then(res => {
                setInfoUsuario(res.data),
                    setTextComboBox("");
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    async function removeClaimForUser(claimId) {

        if (claimId !== 0) {
            setLoading(true);
            const info = {
                ...changeClaim,
                claimId:claimId,
                usuarioCadastroId: parseInt(infoToken.idUser)
            }
            await api.delete("/claims/user/delete", { data: info })
                .then(res => {
                    refresh()
                    api.get(`/login/apelido/${infoUsuario.apelido}`)
                        .then(res => {
                            setInfoUsuario(res.data)
                            setTextComboBox("");
                        })
                        .catch(err => console.log(err))
                        .finally(() => setLoading(false))
                })

        }
    }

    return (
        infoUsuario ?
            <div className={style.body} onClick={() => changeVisible(false)} >
                <div className={style.card} onClick={e => e.stopPropagation()} >
                    {loading ? <Loading /> : null}
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
                            <input type="text" readOnly value={infoUsuario?.nomeUsuario || ""} />
                        </div>
                        <div className={style.wrap_senha} >
                            <p>SENHA:</p>
                            <input readOnly value={""} />
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
                                                <div onClick={() => {
                                                    console.log('aqui')
                                                    // setChangeClaims({ ...changeClaim, claimId: item.claimId }),
                                                    removeClaimForUser(item.claimId)

                                                }} >
                                                    <RiDeleteBin7Line color="red" size={18} />

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
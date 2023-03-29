import react, { useState, useEffect } from "react"
import style from "./style.module.css"

const ComboBox = ({
    data,
    placeHolder,
    changeVisible,
    valueVisible,
    width,
    value
}) => {
    const [list, setList] = useState(null);
    const [text, setText] = useState("");
    const [modal, setModal] = useState(true);

    useEffect(() => {
        setList(data);
    }, [])
    console.log(data)
    return (
        <div
            onClick={e => e.stopPropagation()}
            style={{ width: width }}
            className={style.container}>
            <input
                className={style.input}
                placeholder={placeHolder}
                value={text}
                readOnly
                onClick={() => {
                    changeVisible(true)
                }
                }
            />
            {valueVisible
                ?
                <div className={style.card_select}>
                    {list && valueVisible && (
                        
                        list.map((item, index) =>
                            <div
                                style={{ width: width }}
                                className={style.containerSelect}
                                onClick={() => {
                                    setText(item)
                                    changeVisible(false)
                                }}
                                key={index}>
                                <p>
                                    {item}
                                </p>
                            </div>)
                            // list.length.map((item, index) => {
                            //     return (
                            //         <div
                            //             style={{width:width}}
                            //             className={style.containerSelect}
                            //             onClick={() => {
                            //             setText(item.AUTORIZADOR)
                            //             changeVisible(false)
                            //             }}
                            //             key={index}>
                            //             <p>
                            //                 {item.AUTORIZADOR}
                            //             </p>
                            //         </div>
                            //     )
                            // })
                        )}
                </div>
                :
                null}
        </div>
    )
}

export default ComboBox
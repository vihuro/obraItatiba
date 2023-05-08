import react, { useState, useEffect } from "react"
import style from "./style.module.css"

const ComboBox = ({
    data,
    placeHolder,
    changeVisible,
    valueVisible,
    width,
    value,
    text,
    changeText
}) => {
    const [list, setList] = useState(null);

    const [modal, setModal] = useState(true);

    useEffect(() => {
        setList(data);
    }, [])

    return (
        data ?
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
                    }}
                />
                {valueVisible && (
                    <div className={style.card_select}>
                        {list && valueVisible && (
                            list.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{ width: width }}
                                        className={style.containerSelect}
                                    >
                                        <p onClick={() => {
                                            changeText(item.Value);
                                            value({ "id": item.Id, "value": item.Value })
                                            changeVisible(false)
                                        }
                                        } key={index} >{item.Value}</p>
                                    </div>

                                )
                            })
                        )}
                    </div>


                )}


                {/* {list && valueVisible && (
                        
                        list.map((item) =>
                            <div
                                style={{ width: width }}
                                className={style.containerSelect}
                                onClick={() => {
                                    setText(item.Value)
                                    changeVisible(false)
                                }}
                                key={item.Id}>
                                <p>
                                    Time: {item.Value}
                                </p>
                            </div>
                            )
                        )} */}

            </div> : null
    )
}

export default ComboBox
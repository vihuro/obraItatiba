import style from "./TopBar_Style.module.css";

const TopBar = ({ onToggleNav, onClose }) => {

    return (
        <div className={style.topBar} >
            <div className={style.container} onClick={() => {
                onToggleNav(!onClose)
            }}>
                <div className={style.logo}>
                    <div className={style.toglleNab} >
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TopBar
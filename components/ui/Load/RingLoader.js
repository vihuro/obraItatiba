import { RingLoader } from "react-spinners";
import style from "./Ring.module.css"

const LoaderRing = () => {
    return (
        <div className={style.container} >
            <RingLoader
                color="#3936d6"
            />
        </div>
    )
}

export default LoaderRing
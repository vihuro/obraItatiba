import styles from "./style.module.css";

const Button = ({
    text,
    action,
    color,
    theme
    
    }) =>{
    return(

            <button
            onClick={() => action()} 
            className={
                `${styles['button']} 
                ${styles[`button--${theme}`]}
                `}>
            {text}
            </button>

    )

}

Button.defaultProps ={

}

export default Button
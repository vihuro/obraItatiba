import styles from "./style.module.css";

const Button = ({
    text,
    action,
    color,
    theme
    
    }) =>{
    return(

            <button className={
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
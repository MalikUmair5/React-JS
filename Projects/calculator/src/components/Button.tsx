import styles from "./Button.module.css"


interface buttonProps{
    name: string;
}

function Button({name}: buttonProps): JSX.Element{
return <button className={styles.btn}>{name}</button>
}


export default Button;
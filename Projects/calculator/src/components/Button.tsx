import styles from "./Button.module.css"


interface buttonProps{
    name: string;
    handleBtnClick : (name: string) => void;
}

function Button({name, handleBtnClick}: buttonProps): JSX.Element{
return <button 
onClick={() => handleBtnClick(name)}
className={styles.btn}>{name}</button>
}


export default Button;
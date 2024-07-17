import styles from "./AppHeading.module.css"

function AppHeading():JSX.Element{
    return(
        <h1 className={`fw-bold ${styles.appHeading}`}>Todo App</h1>
    )
}

export default AppHeading
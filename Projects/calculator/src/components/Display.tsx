import styles from "./Display.module.css";

function Display(): JSX.Element {
  return (
    <>
      <div className={styles.inputDiv}>
        <input disabled type="text" className={styles.display} />
      </div>
    </>
  );
}

export default Display;

import styles from "./Display.module.css";

interface DisplayProps {
  display: string[];

}

function Display({display}:DisplayProps): JSX.Element {
  return (
    <>
      <div className={styles.inputDiv}>
        <input value={display.join('')} disabled type="text" className={styles.display} />
      </div>
    </>
  );
}

export default Display;

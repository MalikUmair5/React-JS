import styles from "./BtnContainer.module.css";
import Button from "./Button";

interface BtnContainerProps {
  handleBtnClick: (name: string) => void;
}


function BtnContainer({handleBtnClick}: BtnContainerProps): JSX.Element {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    ".",
    "0",
  ];



  return (
    <>
      <div className={styles.buttonDiv}>
        {buttons.map((button, index) => (
          <Button handleBtnClick={handleBtnClick}  key={index} name={button} />
        ))}
      </div>
    </>
  );
}

export default BtnContainer;

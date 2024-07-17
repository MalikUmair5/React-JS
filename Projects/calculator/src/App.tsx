import styles from "./App.module.css";
import ButtonContainer from "./components/BtnContainer";
import Display from "./components/Display";

function App() {
  return (
    <>
      <div className={styles.main}>
        <Display />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;

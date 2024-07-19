import styles from "./App.module.css";
import ButtonContainer from "./components/BtnContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  let [clickedbtn, setclickedbtn] = useState([] as string[]);

  let handleBtnClick = (name: string) => {
    if(name === "C"){
      setclickedbtn([]);
    }
    else if(name === "="){
      try{
        let result = eval(clickedbtn.join(''));
      setclickedbtn([result]); 
      } 
      catch(e){
        setclickedbtn(["Syntax Error!"]); 
      }
    }
    else{
      setclickedbtn([...clickedbtn, name]);
    }
    
      // console.log(clickedbtn);  
  }

  return (
    <>
      <div className={styles.main}>
        <Display display={clickedbtn}/>
        <ButtonContainer handleBtnClick={handleBtnClick} />
      </div>
    </>
  );
}

export default App;

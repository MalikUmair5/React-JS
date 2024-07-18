import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import ItemInput from "./components/ItemInput";
import { useState } from "react";
import { KeyboardEvent } from "react";

function App() {
  // let healtyfoods = [];
  let healtyfoods: string[] = [];

  let [foodItems, setFoodItems] = useState(healtyfoods);

  let handleChange = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if(e.code === "Enter"){
      console.log(target.value)
      let updatedFoods = [...foodItems, target.value];
      setFoodItems(updatedFoods);
      console.log(foodItems)
      target.value = "";
    }
  };

  let handlebuybtn = (itemName: string, e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`You have bought ${itemName}`);
    let target = e.target as HTMLButtonElement;
    let btnParent = target.parentElement as HTMLLIElement;
    btnParent.style.backgroundColor = "green";
   
  };

  return (
    <>
      <div className="main">
        <Container>
          <h1 className="mainheading">Healty Foods</h1>
          <ItemInput handleChange={handleChange} />
          <ErrorMessage foodItems={foodItems} />
          <FoodItems handlebuybtn={handlebuybtn} foodItems={foodItems} />
        </Container>
        <Container>
          <p>This is the list of healthy foods that we should eat</p>
        </Container>
      </div>
    </>
  );
}

export default App;

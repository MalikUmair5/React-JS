import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import ItemInput from "./components/ItemInput";
import { useState } from "react";
import { KeyboardEvent } from "react";

function App() {
  let healtyfoods: string[] = [];
  let [foodItems, setFoodItems] = useState(healtyfoods);
  let [ImptyInputError, setImptyInputError] = useState(
    "Write name of Healty food and press Enter to add"
  );

  let handleChange = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      console.log(target.value);
      if (target.value === "") {
        setImptyInputError("Please enter a value");
      } else {
        let upperCasedvalInput = target.value.slice(0, 1).toUpperCase() + target.value.slice(1);
        let updatedFoods = [...foodItems, upperCasedvalInput];
        setFoodItems(updatedFoods);
        console.log(foodItems);
        target.value = "";
        setImptyInputError("Write name of Healty food and press Enter to add");
      }
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
          <p
            style={{
              color:
                ImptyInputError == "Please enter a value" ? "red" : "black",
            }}
          >
            {ImptyInputError}
          </p>
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

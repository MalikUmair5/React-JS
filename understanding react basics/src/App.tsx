import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import ItemInput from "./components/ItemInput";

function App() {
  // let healtyfoods = [];
  let healtyfoods = ["daal", "roti", "salad", "sabzi", "doodh", "fruits"];

  return (
    <>
      <div className="main">
        <Container>
          <h1 className="mainheading">Healty Foods</h1>
          <ErrorMessage foodItems={healtyfoods} />
          <ItemInput />
          <FoodItems foodItems={healtyfoods} />
        </Container>
        <Container>
          <p>This is the list of healthy foods that we should eat</p>
        </Container>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";

function App() {
  // let healtyfoods = [];
  let healtyfoods = ["daal", "roti", "salad", "sabzi", "doodh", "fruits"];

 
  return (
    <>
      <div className="main">
        <h1>Healty Foods</h1>
        <ErrorMessage foodItems = {healtyfoods}/>
        <FoodItems foodItems = {healtyfoods}/>
      
      </div>
    </>
  );
}

export default App;

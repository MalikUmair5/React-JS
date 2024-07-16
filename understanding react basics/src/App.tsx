import "./App.css";

function App() {
  // let healtyfoods = [];
  let healtyfoods = ["daal", "roti", "salad", "sabzi", "doodh", "fruits"];
  // let noHealtyFoods = healtyfoods.length > 0 ? null: <h2>I dont have food</h2>;

  //? Conditional Rendering
  let healthyFoods2 = healtyfoods.length === 0 && (
    <h2>Healty foods not available</h2>
  );
  return (
    <>
      <div className="main">
        <h1>Healty Foods</h1>
        {healthyFoods2}
        <ul className="list-group">
          {healtyfoods.map((food, index) => {
            return (
              <li key={index} className="list-group-item">
                {food}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

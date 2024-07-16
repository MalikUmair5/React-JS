import Item from "./item";

interface FoodItemsProps {
  foodItems: string[];
}

function FoodItems({ foodItems }: FoodItemsProps): JSX.Element {

  return (
    <>
      {" "}
      <ul className="list-group">
        {foodItems.map((food, index) => {
          return <Item key={index} item={food}></Item>;
        })}
      </ul>
    </>
  );
}

export default FoodItems;

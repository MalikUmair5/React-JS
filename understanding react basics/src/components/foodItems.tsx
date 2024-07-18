import Item from "./item";

interface FoodItemsProps {
  foodItems: string[];
}

function FoodItems({ foodItems }: FoodItemsProps): JSX.Element {
  let handlebuybtn = (itemName: string) => {
    console.log(`You have bought ${itemName}`);
  };
  return (
    <>
      {" "}
      <ul className="list-group">
        {foodItems.map((food, index) => {
          return <Item handlebuybtn={handlebuybtn} key={index} item={food}></Item>;
        })}
      </ul>
    </>
  );
}

export default FoodItems;

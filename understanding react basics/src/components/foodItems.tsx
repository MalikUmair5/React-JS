import Item from "./item";

interface FoodItemsProps {
  foodItems: string[];
  handlebuybtn: (itemName: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

function FoodItems({ foodItems, handlebuybtn }: FoodItemsProps): JSX.Element {
  return (
    <>
      {" "}
      <ul className="list-group">
        {foodItems.map((food, index) => {
          return (
            <Item handlebuybtn={handlebuybtn} key={index} item={food}></Item>
          );
        })}
      </ul>
    </>
  );
}

export default FoodItems;

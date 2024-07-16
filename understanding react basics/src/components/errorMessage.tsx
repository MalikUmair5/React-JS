interface ErrorMessageProps {
  foodItems: string[];
}

function ErrorMessage({ foodItems }: ErrorMessageProps): JSX.Element {
  //? Conditional Rendering
  // let noHealtyFoods = healtyfoods.length > 0 ? null: <h2>I dont have food</h2>;
  let healthyFoods2 = foodItems.length === 0 && (
    <h2>Healty foods not available</h2>
  );
  return <>{healthyFoods2}</>;
}

export default ErrorMessage;

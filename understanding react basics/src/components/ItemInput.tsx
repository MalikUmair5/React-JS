import styles from "./ItemInput.module.css";

const ItemInput = (): JSX.Element => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input
        onChange={handleChange}
        className={`${styles.myInput}`}
        type="text"
      />
    </>
  );
};

export default ItemInput;

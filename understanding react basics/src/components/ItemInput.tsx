import styles from "./ItemInput.module.css";

interface ItemInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemInput = ({ handleChange }: ItemInputProps): JSX.Element => {
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

import { KeyboardEvent } from "react";
import styles from "./ItemInput.module.css";

interface ItemInputProps {
  handleChange: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const ItemInput = ({ handleChange }: ItemInputProps): JSX.Element => {
  return (
    <>
      <input
        onKeyDown={handleChange}
        className={`${styles.myInput}`}
        type="text"
      />
    </>
  );
};

export default ItemInput;

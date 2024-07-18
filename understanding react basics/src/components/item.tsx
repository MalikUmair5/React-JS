import styles from "./item.module.css";
import { MouseEvent } from "react";

interface itemProps {
  item: string;
  handlebuybtn: (itemName: string, e: MouseEvent<HTMLButtonElement>) => void;
}

function item({ item, handlebuybtn }: itemProps): JSX.Element {
  return (
    <>
      <li className={` ${styles.myItem} list-group-item`}>
        {item}
        <button
          onClick={(e) => handlebuybtn(item, e)}
          className={`${styles.buybtn} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default item;

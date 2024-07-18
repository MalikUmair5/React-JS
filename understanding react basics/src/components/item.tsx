import styles from "./item.module.css";

interface itemProps {
  item: string;
  handlebuybtn: (itemName: string) => void;
}

function item({ item, handlebuybtn }: itemProps): JSX.Element {
  return (
    <>
      <li className={` ${styles.myItem} list-group-item`}>
        {item}
        <button
          onClick={() => handlebuybtn(item)}
          className={`${styles.buybtn} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default item;

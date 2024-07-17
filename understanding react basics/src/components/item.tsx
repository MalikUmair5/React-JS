import styles from "./item.module.css";

interface itemProps {
  item: string;
}

function item({ item }: itemProps): JSX.Element {
  let handlebuybtn = () => {
    console.log(`You have bought ${item}`);
  };

  return (
    <>
      <li className={` ${styles.myItem} list-group-item`}>
        {item}
        <button
          onClick={handlebuybtn}
          className={`${styles.buybtn} btn btn-info`}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default item;

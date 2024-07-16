import styles from "./item.module.css"

interface itemProps {
  item: string;
}

function item({ item }: itemProps): JSX.Element {
  return (
    <>
      <li className={` ${styles.myItem} list-group-item`}>{item}</li>{" "}
    </>
  );
}

export default item;

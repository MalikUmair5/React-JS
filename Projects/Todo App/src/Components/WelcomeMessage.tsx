import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 ? (
        <h1 className={styles.welcomeMsg}>No todos to display</h1>
      ) : null}
    </>
  );
};

export default WelcomeMessage;

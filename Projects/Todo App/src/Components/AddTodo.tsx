import { FormEvent, useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo(): JSX.Element {
  let todoValElement = useRef<HTMLInputElement>(null);
  let todoDateElement = useRef<HTMLInputElement>(null);
  const {addNewItem} = useContext(TodoItemsContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let todoValue = todoValElement.current?.value;
    let todoDate = todoDateElement.current?.value;

    if (!todoValue || !todoDate) {
      alert("Please enter a valid todo and date");
      return;
    } else {
      addNewItem(todoValue, todoDate);
      todoValElement.current!.value = "";
      todoDateElement.current!.value = "";
    }
  };

  return (
    <div className="container addTodo">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              className={styles.todoInput}
              ref={todoValElement}
              type="text"
              placeholder="Enter Todo here"
            />
          </div>
          <div className="col-4">
            <input
              ref={todoDateElement}
              className={styles.todoInput}
              type="Date"
              placeholder="Enter Todo Date"
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              <FaPlusCircle />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

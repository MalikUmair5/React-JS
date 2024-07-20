import { useState, FormEvent } from "react";
import styles from "./AddTodo.module.css";
import { FaPlusCircle } from "react-icons/fa";

interface AddTodoProps {
  handleAddTodo: (todo: string, date: string) => void;
}

function AddTodo({ handleAddTodo }: AddTodoProps): JSX.Element {
  let [todoValue, setTodoValue] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddTodo(todoValue, todoDate);
    setTodoValue("");
    setTodoDate("");
  };

  return (
    <div className="container addTodo">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              className={styles.todoInput}
              type="text"
              placeholder="Enter Todo here"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              className={styles.todoInput}
              type="Date"
              onChange={(e) => setTodoDate(e.target.value)}
              value={todoDate}
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-success"
            >
              <FaPlusCircle />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

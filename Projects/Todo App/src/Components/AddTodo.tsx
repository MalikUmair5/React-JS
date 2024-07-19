import { useState } from "react";
import styles from "./AddTodo.module.css";
import { FaPlusCircle } from "react-icons/fa";


interface AddTodoProps{
    handleAddTodo: (todo: string, date: string) => void;
}

function AddTodo({handleAddTodo}: AddTodoProps): JSX.Element {

  let [todoValue, setTodoValue] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleClick = () => {;

    handleAddTodo(todoValue, todoDate);

    setTodoValue("");
    setTodoDate("");
  }

    


  return (
    <div className="container addTodo">
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
          <button onClick={handleClick} type="button" className="btn btn-success">
          <FaPlusCircle />

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

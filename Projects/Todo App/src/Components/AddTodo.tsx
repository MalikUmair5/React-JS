import { ReactEventHandler, SyntheticEvent } from "react";
import styles from "./AddTodo.module.css";

interface AddTodoProps{
    handleAddTodo: (todo: string, date: string, e: SyntheticEvent<HTMLElement>) => void;
}

function AddTodo({handleAddTodo}: AddTodoProps): JSX.Element {
  let todoValue = "";
  let todoDate = "";
    


  return (
    <div className="container addTodo">
      <div className="row">
        <div className="col-6">
          <input
            onChange={(e) => {
              todoValue = e.target.value;
            }}
            className={styles.todoInput}
            type="text"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input
            onChange={(e) => {
              todoDate = e.target.value;
            }}
            className={styles.todoInput}
            type="Date"
          />
        </div>
        <div className="col-2">
          <button onClick={(e)=>handleAddTodo(todoValue, todoDate, e)} type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: string;
  date: string;
  index: number;
  deleteTodo: (index: number) => void;
}

function TodoItem({
  todo,
  date,
  index,
  deleteTodo,
}: TodoItemProps): JSX.Element {
  return (
    <div className={`container ${styles.todoItem}`}>
      <div className="row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className={`${styles.center} col-2`}>
          <button
            onClick={() => deleteTodo(index)}
            type="button"
            className={`btn btn-danger`}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

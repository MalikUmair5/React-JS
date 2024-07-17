import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: string;
  date: string;
}

function TodoItem({ todo, date }: TodoItemProps): JSX.Element {
  return (
    <div className={`container ${styles.todoItem}`}>
      <div className="row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className={`${styles.center} col-2`}>
          <button type="button" className={`btn btn-danger`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

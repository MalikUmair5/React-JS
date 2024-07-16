

interface TodoItemProps{
  todo: string,
  date: string
}

function TodoItem({todo, date}: TodoItemProps): JSX.Element {
  return (
    <div className="container todoItem">
      <div className="row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

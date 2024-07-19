import TodoItem from "./TodoItem";

interface TodoItem {
  todo: string;
  date: string;
}

interface DisplayTodosProps {
  todos: TodoItem[];
  deleteTodo: (index: number) => void;
}

function DisplayTodos({ todos, deleteTodo }: DisplayTodosProps): JSX.Element {
  return (
    <>
      {todos.map((item, index) => (
        <TodoItem
          deleteTodo={deleteTodo}
          index = {index}
          key={index}
          todo={item.todo}
          date={item.date}
        ></TodoItem>
      ))}
    </>
  );
}

export default DisplayTodos;

import TodoItem from "./TodoItem";

interface TodoItem {
  todo: string;
  date: string;
}

interface DisplayTodosProps {
  todos: TodoItem[];
}

function DisplayTodos({ todos }: DisplayTodosProps): JSX.Element {
  return (
    <>
      {todos.map((item, index) => (
        <TodoItem key={index} todo={item.todo} date={item.date}></TodoItem>
      ))}
    </>
  );
}

export default DisplayTodos;

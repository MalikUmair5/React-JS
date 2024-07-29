import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";



function DisplayTodos(): JSX.Element {
 
  const {todoItems, deleteItem} = useContext(TodoItemsContext)
 
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          deleteTodo={deleteItem}
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

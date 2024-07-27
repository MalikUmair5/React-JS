import AddTodo from "./Components/AddTodo";
import AppHeading from "./Components/AppHeading";
import "./App.css";
import DisplayTodos from "./Components/Displaytodos";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-item-store";

function App(): JSX.Element {
  let [todos, setTodos] = useState([
    {
      todo: "Go for walk",
      date: "15/6/2024",
    },
  ]);

  const addNewItem = (todo: string, date: string) => {
    setTodos((prevValue) => [...prevValue, { todo: todo, date: date }]);
  };

  const deleteItem = (index: number) => {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos([...updatedTodos]);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todos,
        addNewItem: addNewItem,
        deleteItem: deleteItem
      }}
    >
      <center>
        <AppHeading />
        <AddTodo />
        <WelcomeMessage />
        <DisplayTodos />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

import AddTodo from "./Components/AddTodo";
import AppHeading from "./Components/AppHeading";

import "./App.css";
import DisplayTodos from "./Components/Displaytodos";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";


function App(): JSX.Element {


  let [todos, setTodos] = useState([{
    todo: "Go for walk",
    date: "15/6/2024"
  },]);
  
  const handleAddTodo = (todo: string, date: string) => {
    if (todo === "" || date === "") {
      alert("Please enter a valid todo and date");
      return;
    }
    else {
      setTodos([...todos, {todo: todo, date: date}]);
    }
  }

  const handleDeleteTodo = (index: number) => {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos([...updatedTodos]);
  }

  
  return (
    <center>
      <AppHeading />
      <AddTodo handleAddTodo={handleAddTodo}/>
      {todos.length === 0 && <WelcomeMessage /> }
      <DisplayTodos deleteTodo={handleDeleteTodo} todos={todos}></DisplayTodos>
    </center>
  );
}

export default App;

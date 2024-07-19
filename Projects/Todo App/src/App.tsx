import AddTodo from "./Components/AddTodo";
import AppHeading from "./Components/AppHeading";

import "./App.css";
import DisplayTodos from "./Components/Displaytodos";
import { useState } from "react";
import { SyntheticEvent } from "react";


function App(): JSX.Element {


  let [todos, setTodos] = useState([{
    todo: "Go for walk",
    date: "15/6/2024"
  },]);
  
  const handleAddTodo = (todo: string, date: string, e:SyntheticEvent<HTMLElement>) => {
    if (todo === "" || date === "") {
      alert("Please enter a valid todo and date");
      return;
    }
    else {
      setTodos([...todos, {todo: todo, date: date}]);
      let addBtn = e.target as HTMLButtonElement;
      let dateInput = addBtn.parentElement?.previousSibling?.firstChild as HTMLInputElement;
      let todoInput = dateInput.parentElement?.previousSibling?.firstChild as HTMLInputElement;
      dateInput.value = "";
      todoInput.value = "";
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
      <DisplayTodos deleteTodo={handleDeleteTodo} todos={todos}></DisplayTodos>
      

    </center>
  );
}

export default App;

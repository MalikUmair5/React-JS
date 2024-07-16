import AddTodo from "./Components/AddTodo";
import AppHeading from "./Components/AppHeading";
import TodoItem from "./Components/TodoItem";

import "./App.css";
import DisplayTodos from "./Components/Displaytodos";


function App(): JSX.Element {
  
  let todos = [
    {
      todo: "Go for walk",
      date: "15/6/2024"
    },
    {
      todo: "Eat Breakfast",
      date: "15/6/2024"
    },
    {
      todo: "Go For DInner",
      date: "15/6/2024"
    },
    {
      todo: "Sleep",
      date: "15/6/2024"
    }
  ]
  
  
  return (
    <center>
      <AppHeading />
      <AddTodo />
      <DisplayTodos todos={todos}></DisplayTodos>
      

    </center>
  );
}

export default App;

import AddTodo from "./Components/AddTodo";
import AppHeading from "./Components/AppHeading";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";


function App(): JSX.Element {
  return (
    <center>
      <AppHeading />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;

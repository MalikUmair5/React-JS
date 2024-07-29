import AddTodo from "./Components/AddTodo";
import AppHeading from "./Components/AppHeading";
import "./App.css";
import DisplayTodos from "./Components/Displaytodos";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-item-store";

function App(): JSX.Element {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppHeading />
        <AddTodo />
        <WelcomeMessage />
        <DisplayTodos />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

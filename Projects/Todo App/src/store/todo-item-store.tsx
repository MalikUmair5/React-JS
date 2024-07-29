import { createContext, useReducer } from "react";

interface TodoItemSchema {
  todo: string;
  date: string;
}

interface TodoItem {
  todoItems: TodoItemSchema[];
  addNewItem: (todo: string, date: string) => void;
  deleteItem: (index: number) => void;
}

type TodoItemsContextType = TodoItem;

export const TodoItemsContext = createContext<TodoItemsContextType>({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

type State = TodoItemSchema[];

interface AddTodoAction {
  type: "addTodo";
  payload: TodoItemSchema;
}

interface DeleteTodoAction {
  type: "deleteTodo";
  payload: {
    index: number;
  };
}

type Action = AddTodoAction | DeleteTodoAction;

function TodoItemsReducer(state: State, action: Action):State {
  if (action.type === "addTodo") {
    return [...state, action.payload];
  } else if (action.type === "deleteTodo") {
    let updatedTodos = [...state];
    updatedTodos.splice(action.payload.index, 1);
    return [...updatedTodos];
  }
  else{
    return state;
  }
}

interface TodoItemsContextProviderProps {
  children: React.ReactNode;
}

function TodoItemsContextProvider({ children }: TodoItemsContextProviderProps) {
  let [todos, dispatchTodos] = useReducer(TodoItemsReducer, [
    {
      todo: "Go for walk",
      date: "15/6/2024",
    },
  ]);

  const addNewItem = (todo: string, date: string) => {
    dispatchTodos({ type: "addTodo", payload: { todo: todo, date: date } });
  };

  const deleteItem = (index: number) => {
    dispatchTodos({ type: "deleteTodo", payload: { index } });
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todos,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        {children}
      </TodoItemsContext.Provider>
    </>
  );
}

export default TodoItemsContextProvider;

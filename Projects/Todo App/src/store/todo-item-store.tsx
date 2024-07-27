import { createContext } from "react";

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

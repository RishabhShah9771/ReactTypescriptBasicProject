import React, { PropsWithChildren, useState } from "react";
import ToDo from "../models/Todo";

// Define the shape of the context object for ToDo functionality
type ToDoContextObj = {
  items: ToDo[]; // Array of ToDo items
  addToDo: (text: string) => void; // Function to add a new ToDo
  removeToDo: (id: string) => void; // Function to remove a ToDo by id
};

// Create the ToDo context with default values
const ToDoContext = React.createContext<ToDoContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

// Context provider component to manage ToDo state and actions
const ToDoContextProvider: React.FC<PropsWithChildren> = (props) => {
  // State to hold the list of ToDo items
  const [todos, setToDos] = useState<ToDo[]>([]);

  // Handler to add a new ToDo item
  const addToDoHandler = (text: string) => {
    const newToDo = new ToDo(text); // Create a new ToDo instance
    setToDos((prevState) => {
      return prevState.concat(newToDo); // Add new ToDo to the list
    });
  };

  // Handler to remove a ToDo item by its id
  const removeToDoHandler = (toDoId: string) => {
    setToDos((prevState) => {
      return prevState.filter((todo) => todo.id !== toDoId); // Remove ToDo from the list
    });
  };

  // Context value containing current ToDo items and handler functions
  const contextvalue: ToDoContextObj = {
    items: todos,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler,
  };

  // Provide the context value to child components
  return (
    <ToDoContext.Provider value={contextvalue}>
      {props.children}
    </ToDoContext.Provider>
  );
};

// Export the context and provider for use in other components
export { ToDoContextProvider, ToDoContext };

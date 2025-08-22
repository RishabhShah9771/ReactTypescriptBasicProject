import React, { useContext } from "react";
import ToDoItem from "./ToDoItem"; // Importing the ToDoItem component to render individual todo items
import classes from "./Todo.module.css"; // Importing CSS module for scoped styling
import { ToDoContext } from "../store/TodoContext";

// ToDoComponent is a functional React component typed with React.FC and ToDoComponentProps
// Explicitly typing props ensures type safety and better maintainability
const ToDoComponent: React.FC = () => {
// The component receives a list of todo items and a remove handler via props.
// It maps over the items array and renders a ToDoItem for each todo.
// The onRemoveToDo handler is passed down to each ToDoItem, bound to the item's id.

  const todoCtx = useContext(ToDoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        // Rendering each ToDoItem with a unique key, the todo text, and a remove handler
        <ToDoItem key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default ToDoComponent; // Exporting the component for use in other parts of the application

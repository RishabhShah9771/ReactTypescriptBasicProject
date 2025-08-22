import React from "react";
import ToDo from "../models/Todo";
import ToDoItem from "./ToDoItem";
import classes from "./Todo.module.css";

interface ToDoComponentProps {
  items: Array<ToDo>;
  onRemoveToDo: (id: string) => void;
}

const ToDoComponent: React.FC<ToDoComponentProps> = (props) => {
// The above component is converted to generic type React.FC which is a functional component in React.
// We can not allow typescript to infer the type of props, so we explicitly define it as an object.
  // This is useful when we want to pass props to the component in the future.

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemoveToDo={() => props.onRemoveToDo(item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDoComponent;

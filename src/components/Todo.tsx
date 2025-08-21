import React from "react";
import ToDo from "../models/Todo";
import ToDoItem from "./ToDoItem";

const ToDoComponent: React.FC<{ items: Array<ToDo> }> = (props) => {
  // The above component is converted to genreic type React.FC which is a functional component in React.
  // We can not allow typescript to infer the type of props,so we explicitly define it as an empty object.
  // This is useful when we want to pass props to the component in the future.

  return (
    <ul>
      {props.items.map((item) => (
        <ToDoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default ToDoComponent;

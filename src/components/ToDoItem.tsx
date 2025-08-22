import React, { useContext } from "react";
import classes from "./TodoItem.module.css";
import { ToDoContext } from "../store/TodoContext"; // Adjust path as needed

/**
 * Represents a single to-do item in the list.
 *
 * @remarks
 * This component displays the text of a to-do item and allows users to remove it by clicking on the item.
 * It consumes the `ToDoContext` to access the `removeToDo` function for deleting the item.
 *
 * @param props - The properties for the to-do item.
 * @param props.id - The unique identifier for the to-do item.
 * @param props.text - The text description of the to-do item.
 *
 * @returns A list item (`<li>`) element displaying the to-do text. Clicking the item removes it from the list.
 */
const ToDoItem: React.FC<{ id: string; text: string }> = (props) => {
  const toDoCtx = useContext(ToDoContext);

  return (
    <li className={classes.item} onClick={() => toDoCtx.removeToDo(props.id)}>
      {props.text}
    </li>
  );
};

export default ToDoItem;

import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewToDo: React.FC<{ onAddToDo: (text: string) => void }> = (props) => {
  const toDoTextInputRef = useRef<HTMLInputElement>(null);
  // We need to be explicit about the type of the ref, so we use useRef with a generic type argument.
  // This allows typescript to understand that toDoTextInput will be an HTMLInputElement or null.
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = toDoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }
    props.onAddToDo(enteredText);
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="text">ToDo Text</label>
      <input type="text" id="text" ref={toDoTextInputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewToDo;

import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { ToDoContext } from "../store/TodoContext";

const NewToDo: React.FC = () => {
  // Create a ref to access the value of the input element directly.
  // The generic type <HTMLInputElement> tells TypeScript that this ref will point to an input element.
  // Initial value is null because the input is not rendered yet.
  const toDoTextInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(ToDoContext);

  // Handler for form submission.
  // Prevents default browser behavior, reads the input value, validates it, and calls the parent callback.
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload on form submit

    // Use the ref to get the current value of the input.
    // The non-null assertion (!) is used because we know the input exists when the form is submitted.
    const enteredText = toDoTextInputRef.current!.value;

    // Validate input: ignore empty or whitespace-only strings.
    if (enteredText?.trim().length === 0) {
      return; // Do nothing if input is empty
    }

    // Call the parent component's handler with the entered ToDo text.
    todoCtx.addToDo(enteredText);
  };

  return (
    // Form for adding a new ToDo item.
    // Uses CSS module for styling.
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="text">
        ADD ITEMS TO THE LIST THAT NEEDS TO BE DONE..
      </label>
      {/* Input field for entering the ToDo text. Ref is attached for direct access. */}
      <input type="text" id="text" ref={toDoTextInputRef} />
      {/* Button to submit the form and add the ToDo item. */}
      <button>ADD ITEMS</button>
    </form>
  );
};

export default NewToDo;

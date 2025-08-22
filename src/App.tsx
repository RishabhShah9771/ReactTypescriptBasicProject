import { useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoComponent from "./components/Todo";
import ToDo from "./models/Todo";

function App() {
  const [todos, setToDos] = useState<ToDo[]>([]);

  const addToDoHandler = (text: string) => {
    const newToDo = new ToDo(text);
    setToDos((prevState) => {
      return prevState.concat(newToDo);
    });
  };
  const removeToDoHandler = (toDoId: string) => {
    setToDos((prevState) => {
      return prevState.filter((todo) => todo.id !== toDoId);
    });
  };
  return (
    <div>
      <NewToDo onAddToDo={addToDoHandler} />
      <ToDoComponent items={todos} onRemoveToDo={removeToDoHandler} />
    </div>
  );
}

export default App;

import NewToDo from "./components/NewToDo";
import ToDoComponent from "./components/Todo";
import { ToDoContextProvider } from "./store/TodoContext";

function App() {
  return (
    <ToDoContextProvider>
      <NewToDo />
      <ToDoComponent />
    </ToDoContextProvider>
  );
}

export default App;

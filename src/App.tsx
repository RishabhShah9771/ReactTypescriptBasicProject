import ToDoComponent from "./components/Todo";
import ToDo from "./models/Todo";

function App() {
  const toDoData = [new ToDo("Learn Typescript"), new ToDo("Learn React")];
  return (
    <div>
      <ToDoComponent items={toDoData} />
    </div>
  );
}

export default App;

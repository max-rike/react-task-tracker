import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "one", date: "monday" },
    { id: 2, text: "two", date: "tuesday" },
    { id: 3, text: "three", date: "wednesday" },
  ]);
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;

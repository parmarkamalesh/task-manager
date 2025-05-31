import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const updateTask = (id, updateTask) => {
    setTasks(tasks.map((t) => (t.id === id ? updateTask : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default App;

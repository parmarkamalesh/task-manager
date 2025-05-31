import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks added yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          serial={index + 1}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;

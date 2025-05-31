import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
    };

    addTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 flex-grow rounded"
        placeholder="Add new task..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;

import React, { useState } from "react";

/* This component handles individual task display, completion toggle, editing, and deletion.
 */

const TaskItem = ({ task, serial, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const toggleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    if (!editedTitle.trim()) return;
    updateTask(task.id, { ...task, title: editedTitle });
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between border rounded p-2">
      <div className="flex items-center gap-2">
        <span className="w-6 text-gray-600 font-medium">{serial}.</span>

        {isEditing ? (
          <input
            type="text"
            className="border p-1 rounded"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span>{task.title}</span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

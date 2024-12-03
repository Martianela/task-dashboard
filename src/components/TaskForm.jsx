import React, { useEffect, useState } from "react";

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(
    initialTask?.description || ""
  );
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      description,
      dueDate,
      completed: false,
      id: initialTask?.id || Date.now(),
    };
    console.log(obj);
    onSubmit(obj);
    setTitle("");
    setDescription("");
    setDueDate("");
  };
  useEffect(() => {
    setTitle(initialTask?.title || "");
    setDescription(initialTask?.description || "");
    setDueDate(initialTask?.dueDate || "");
  }, [initialTask]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full p-3 text-sm">
      <h1 className="w-full text-center text-base mb-2">ADD NEW TASK</h1>
      <label htmlFor="">Title</label>
      <input
        className="p-2 rounded-sm border bg-gray-50"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <label className="mt-1" htmlFor="">
        Description
      </label>
      <textarea
        className="p-2 rounded-sm border"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <label className="mt-1" htmlFor="due-date">
        Due Date
      </label>
      <input
        className="p-2 rounded-sm border "
        id="due-date"
        type="date"
        placeholder="date"
        required
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        className="bg-gray-600 rounded hover:bg-gray-900 transition p-2 text-white mt-5"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default TaskForm;

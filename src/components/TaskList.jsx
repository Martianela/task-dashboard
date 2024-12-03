import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => (
  <div className="p-5 flex gap-3 flex-wrap justify-center sm:justify-start">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onDelete={() => onDelete(task.id)}
        onToggle={() => onToggle(task.id)}
      />
    ))}
  </div>
);

export default TaskList;

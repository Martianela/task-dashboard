import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
} from "../redux/tasksSlice";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilters from "../components/TaskFilters";

const TaskDashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("ALL");
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks
    .filter((task) => {
      // Filter tasks based on status
      if (filter === "COMPLETED") return task.completed;
      if (filter === "PENDING")
        return !task.completed && new Date(task.dueDate) >= new Date();
      if (filter === "OVERDUE") return new Date(task.dueDate) < new Date();
      return true;
    })
    .filter((task) => {
      // Further filter tasks based on search query
      if (searchQuery.trim() === "") return true;
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleEditTask = (task) => {
    console.log("editing cart", task);
    setEditingTask(task);
  };

  const handleSaveEdit = (task) => {
    dispatch(editTask(task));
    setEditingTask(null);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="">
      <div className="">
        <h1 className="w-full text-center my-5 text-xl">Task Dashboard</h1>
        <div className="mx-auto flex  justify-center overflow-hidden">
          <div className="rounded overflow-hidden">
            <input
              className="p-2 bg-gray-100  text-sm"
              type="text"
              name="task_title"
              id="task_title"
              placeholder="Search by title"
              value={searchQuery}
              onChange={handleSearch} // Update search query on input change
            />
            <button
              className="bg-gray-600 p-2 text-white text-sm "
              onClick={() => setSearchQuery("")} // Clear search query
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div>
        <TaskFilters filter={filter} setFilter={setFilter} />
        <div className="sm:flex">
          <div className="sm:block w-full max-w-72 flex justify-center mx-auto sm:mx-0">
            {editingTask ? (
              <TaskForm
                initialTask={editingTask}
                key={editTask?.id}
                onSubmit={handleSaveEdit}
              />
            ) : (
              <TaskForm key="add-task-form" onSubmit={handleAddTask} />
            )}
          </div>

          <TaskList
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={(id) => dispatch(deleteTask(id))}
            onToggle={(id) => dispatch(toggleTaskCompletion(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;

import React from "react";

const TaskFilters = ({ filter, setFilter }) => (
  <div className="w-full bg-gray-600 flex gap-3 text-sm sm:text-sm justify-center mt-3 px-2 text-white">
    <button className="hover:bg-gray-900 p-2" onClick={() => setFilter("ALL")}>
      All Tasks
    </button>
    <button
      className="hover:bg-gray-900 p-2"
      onClick={() => setFilter("COMPLETED")}
    >
      Completed
    </button>
    <button
      className="hover:bg-gray-900 p-2"
      onClick={() => setFilter("PENDING")}
    >
      Pending
    </button>
    <button
      className="hover:bg-gray-900 p-2"
      onClick={() => setFilter("OVERDUE")}
    >
      Overdue
    </button>
  </div>
);

export default TaskFilters;

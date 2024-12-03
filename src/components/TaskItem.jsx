import { format } from "date-fns";
import ConfirmAlertBox from "./ConfirmAlertBox";

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <div className="p-3 rounded text-gray-600 w-[350px] max-h-32 h-min bg-gray-100 relative">
      {task?.completed ? (
        <span className="px-2 py-0.5 absolute top-2 right-2 bg-green-600 text-white text-xs rounded-full">
          Completed
        </span>
      ) : new Date(task.dueDate) < new Date() ? (
        <span className="px-2 py-0.5 absolute top-2 right-2 bg-red-700 text-white text-xs rounded-full">
          Overdue
        </span>
      ) : (
        <span className="px-2 py-0.5 absolute top-2 right-2 bg-yellow-500 text-xs text-white rounded-full">
          Pending
        </span>
      )}

      <h1 className="capitalize text-gray-700 text-sm font-medium text-center">
        {task.title}
      </h1>
      <p className="text-sm mt-3 text-gray-500">{task?.description}</p>
      <div className="mt-3 text-sm flex items-center justify-between">
        <p className="text-sm text-gray-400">
          <span className="">
            {format(new Date(task?.dueDate), "dd MMM yy")}
          </span>
        </p>

        {!task?.completed ? (
          <button className="text-green-700" onClick={onToggle}>
            Mark completed
          </button>
        ) : (
          <button onClick={onToggle}>Unmark Completed</button>
        )}
        <button onClick={onEdit} className="px-1 ml-2">
          Edit
        </button>
        <ConfirmAlertBox onDelete={onDelete} />
      </div>
    </div>
  );
};

export default TaskItem;

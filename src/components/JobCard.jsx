function JobCard({
  company,
  role,
  status,
  priority,
  date,
  logo,
  onDelete,
  onEdit,
}){
  let priorityStyle = "";

  if (priority === "High") {
    priorityStyle = "bg-red-100 text-red-600";
  } else if (priority === "Medium") {
    priorityStyle = "bg-yellow-100 text-yellow-600";
  } else {
    priorityStyle = "bg-green-100 text-green-600";
  }

  return (
   <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
      <h2 className="text-2xl font-semibold text-black dark:text-white">
            {company}
          </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2">
            {role}
          </p>
        </div>

        <span className="text-xs text-gray-500">
          {date}
        </span>
      </div>

      <div className="flex gap-2 mt-5">
        <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
          {status}
        </span>

        <span className={`px-3 py-1 rounded-full text-sm ${priorityStyle}`}>
          {priority}
        </span>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onEdit}
          className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
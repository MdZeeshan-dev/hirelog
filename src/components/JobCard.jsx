function JobCard({
  company,
  role,
  status,
  priority,
  date,
  logo,
  onDelete,
  onEdit,
}) {
  let priorityStyle = "";

  if (priority === "High") {
    priorityStyle = "bg-red-100 text-red-700";
  } else if (priority === "Medium") {
    priorityStyle = "bg-gray-100 text-gray-700";
  } else {
    priorityStyle = "bg-green-100 text-green-700";
  }

  let statusStyle = "";

  if (status === "Interview") {
    statusStyle = "bg-green-100 text-green-700";
  } else if (status === "Rejected") {
    statusStyle = "bg-red-100 text-red-700";
  } else if (status === "Offer") {
    statusStyle = "bg-yellow-100 text-yellow-700";
  } else {
    statusStyle = "bg-blue-100 text-blue-700";
  }

  return (
    <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-slate-700/50 rounded-lg overflow-hidden">

      <div className="p-4">

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt={company}
            className="w-8 h-8 object-contain"
          />

          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {company}
          </h2>

        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 mt-4 pt-4">

          <h3 className="text-base font-medium text-gray-900 dark:text-white">
            {role}
          </h3>

          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
            Applied on: {date}
          </p>

        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 mt-4 pt-4">

          <div className="flex gap-2 flex-wrap">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${statusStyle}`}
            >
              {status}
            </span>

            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${priorityStyle}`}
            >
              {priority} Priority
            </span>
          </div>

        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-slate-700 p-3 flex gap-2">

        <button
          onClick={onEdit}
          className="flex-1 border border-gray-300 dark:border-slate-600 rounded-md py-1.5 text-sm text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 border border-gray-300 dark:border-slate-600 rounded-md py-1.5 text-sm text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default JobCard;
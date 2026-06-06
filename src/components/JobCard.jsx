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
    priorityStyle = "bg-slate-200 text-slate-700";
  } else {
    priorityStyle = "bg-green-100 text-green-700";
  }

  let statusStyle = "";

  if (status === "Interview") {
    statusStyle = "bg-green-100 text-green-700";
  } else if (status === "Rejected") {
    statusStyle = "bg-red-100 text-red-700";
  } else if (status === "Offer") {
    statusStyle = "bg-emerald-100 text-emerald-700";
  } else {
    statusStyle = "bg-blue-100 text-blue-700";
  }

  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-[#334155] rounded-xl overflow-hidden">

      <div className="p-6">

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt={company}
        className="w-10 h-10 object-contain"
          />

          <h2 className="text-xl font-bold text-black dark:text-white">
            {company}
          </h2>

        </div>

        <div className="border-t dark:border-slate-700 mt-5 pt-5">

          <h3 className="text-lg font-semibold text-black dark:text-white">
            {role}
          </h3>

          <p className="text-gray-500 mt-4">
            Applied on: {date}
          </p>

        </div>

        <div className="border-t dark:border-slate-700 mt-5 pt-5">

          <div className="flex gap-2 flex-wrap">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${statusStyle}`}
            >
              {status}
            </span>
          </div>

          <div className="mt-4">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${priorityStyle}`}
            >
              {priority} Priority
            </span>
          </div>

        </div>

      </div>

      <div className="border-t dark:border-slate-700 p-4 flex gap-3">

        <button
          onClick={onEdit}
          className="flex-1 border border-gray-300 dark:border-slate-600 rounded-lg py-2 text-sm text-black dark:text-white"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 border border-gray-300 dark:border-slate-600 rounded-lg py-2 text-sm text-black dark:text-white"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default JobCard;
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
    priorityStyle = "bg-yellow-100 text-yellow-700";
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
    <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

      <div className="p-6">

        <div className="flex items-start justify-between">

          <img
            src={logo}
            alt={company}
            className="w-14 h-14 object-contain"
          />

          <span className="text-xs text-gray-500">
            {date}
          </span>

        </div>

        <h2 className="text-3xl font-bold text-black dark:text-white mt-4">
          {company}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-3">
          {role}
        </p>

        <div className="border-t dark:border-slate-700 mt-5 pt-5">

          <div className="flex gap-2 flex-wrap">

            <span
              className={`px-3 py-1 rounded-md text-sm font-medium ${statusStyle}`}
            >
              {status}
            </span>

            <span
              className={`px-3 py-1 rounded-md text-sm font-medium ${priorityStyle}`}
            >
              {priority}
            </span>

          </div>

        </div>

      </div>

      <div className="border-t dark:border-slate-700 p-4 flex gap-3">

        <button
          onClick={onEdit}
          className="flex-1 border dark:border-slate-600 rounded-lg py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default JobCard;
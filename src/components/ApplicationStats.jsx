function ApplicationStats({ jobList }) {
  const totalApplied = jobList.length;

  const totalInterviews = jobList.filter(
    (job) => job.status === "Interview",
  ).length;

  const totalRejected = jobList.filter(
    (job) => job.status === "Rejected",
  ).length;

  const totalOffers = jobList.filter((job) => job.status === "Offer").length;

  return (
    <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-slate-700/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
        Application Stats
      </h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-slate-400">Applied</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {totalApplied}
            </span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-slate-400">
              Interviews
            </span>
            <span className="font-medium text-gray-900 dark:text-white">
              {totalInterviews}
            </span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full">
            <div className="h-2 bg-green-500 rounded-full w-2/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-slate-400">Rejected</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {totalRejected}
            </span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full">
            <div className="h-2 bg-red-500 rounded-full w-1/3"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-slate-400">Offers</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {totalOffers}
            </span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full">
            <div className="h-2 bg-yellow-500 rounded-full w-1/5"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="border border-gray-200 dark:border-slate-700 rounded-md p-3">
          <p className="text-xs text-gray-500">Applied</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {totalApplied}
          </h3>
        </div>

        <div className="border border-gray-200 dark:border-slate-700 rounded-md p-3">
          <p className="text-xs text-gray-500">Interviews</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {totalInterviews}
          </h3>
        </div>

        <div className="border border-gray-200 dark:border-slate-700 rounded-md p-3">
          <p className="text-xs text-gray-500">Rejected</p>
          <h3 className="text-xl font-bold text-red-500">{totalRejected}</h3>
        </div>

        <div className="border border-gray-200 dark:border-slate-700 rounded-md p-3">
          <p className="text-xs text-gray-500">Offers</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {totalOffers}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStats;

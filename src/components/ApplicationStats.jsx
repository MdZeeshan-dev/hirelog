function ApplicationStats({ jobList }) {
  const totalApplied = jobList.length;

  const totalInterviews = jobList.filter(
    (job) => job.status === "Interview"
  ).length;

  const totalRejected = jobList.filter(
    (job) => job.status === "Rejected"
  ).length;

  const totalOffers = jobList.filter(
    (job) => job.status === "Offer"
  ).length;

  return (
    <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 min-h-[350px]">
      <h2 className="text-2xl font-semibold text-black dark:text-white">
        Application Stats
      </h2>

      <div className="mt-8 space-y-6">
        <div>
          <div className="flex justify-between">
            <span className="dark:text-gray-300">Applied</span>
            <span className="dark:text-white">{totalApplied}</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span className="dark:text-gray-300">Interviews</span>
            <span className="dark:text-white">{totalInterviews}</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-green-500 rounded-full w-2/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span className="dark:text-gray-300">Rejected</span>
            <span className="dark:text-white">{totalRejected}</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-red-500 rounded-full w-1/3"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span className="dark:text-gray-300">Offers</span>
            <span className="dark:text-white">{totalOffers}</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-purple-500 rounded-full w-1/5"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="border dark:border-slate-700 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Applied</p>
          <h3 className="text-xl font-bold dark:text-white">
            {totalApplied}
          </h3>
        </div>

        <div className="border dark:border-slate-700 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Interviews</p>
          <h3 className="text-xl font-bold dark:text-white">
            {totalInterviews}
          </h3>
        </div>

        <div className="border dark:border-slate-700 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Rejected</p>
          <h3 className="text-xl font-bold text-red-500">
            {totalRejected}
          </h3>
        </div>

        <div className="border dark:border-slate-700 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Offers</p>
          <h3 className="text-xl font-bold dark:text-white">
            {totalOffers}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStats;
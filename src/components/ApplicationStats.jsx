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
  <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6">

    <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
      Application Stats
    </h2>

    <div className="space-y-7">

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">Applied</span>
          <span className="font-semibold dark:text-white">
            {totalApplied}
          </span>
        </div>

        <div className="h-3 bg-gray-200 rounded-full">
          <div className="h-3 bg-blue-500 rounded-full w-4/5"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">
            Interviews
          </span>
          <span className="font-semibold dark:text-white">
            {totalInterviews}
          </span>
        </div>

        <div className="h-3 bg-gray-200 rounded-full">
          <div className="h-3 bg-green-500 rounded-full w-2/5"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">
            Rejected
          </span>
          <span className="font-semibold dark:text-white">
            {totalRejected}
          </span>
        </div>

        <div className="h-3 bg-gray-200 rounded-full">
          <div className="h-3 bg-red-500 rounded-full w-1/3"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">
            Offers
          </span>
          <span className="font-semibold dark:text-white">
            {totalOffers}
          </span>
        </div>

        <div className="h-3 bg-gray-200 rounded-full">
          <div className="h-3 bg-purple-500 rounded-full w-1/5"></div>
        </div>
      </div>

    </div>

    <div className="grid grid-cols-2 gap-4 mt-10">

      <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
        <p className="text-gray-500">Applied</p>
        <h3 className="text-3xl font-bold dark:text-white">
          {totalApplied}
        </h3>
      </div>

      <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
        <p className="text-gray-500">Interviews</p>
        <h3 className="text-3xl font-bold dark:text-white">
          {totalInterviews}
        </h3>
      </div>

      <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
        <p className="text-gray-500">Rejected</p>
        <h3 className="text-3xl font-bold text-red-500">
          {totalRejected}
        </h3>
      </div>

      <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
        <p className="text-gray-500">Offers</p>
        <h3 className="text-3xl font-bold dark:text-white">
          {totalOffers}
        </h3>
      </div>

    </div>

  </div>
);
}

export default ApplicationStats;
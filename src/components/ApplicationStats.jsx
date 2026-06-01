function ApplicationStats() {
  return (
    <div className="bg-white rounded-xl border p-6 min-h-[350px]">
      <h2 className="text-2xl font-semibold">
        Application Stats
      </h2>

      <div className="mt-8 space-y-6">
        <div>
          <div className="flex justify-between">
            <span>Applied</span>
            <span>24</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Interviews</span>
            <span>5</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-green-500 rounded-full w-2/5"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Rejected</span>
            <span>8</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-red-500 rounded-full w-1/3"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Offers</span>
            <span>2</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-purple-500 rounded-full w-1/5"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="border rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Applied</p>
          <h3 className="text-xl font-bold">24</h3>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Interviews</p>
          <h3 className="text-xl font-bold">5</h3>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Rejected</p>
          <h3 className="text-xl font-bold text-red-500">8</h3>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="text-sm text-gray-500">Offers</p>
          <h3 className="text-xl font-bold">2</h3>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStats;
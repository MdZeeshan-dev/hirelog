function FilterBar() {
  return (
    <div className="mt-8 bg-white rounded-xl border p-5 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4">

        <input
          type="text"
          placeholder="Search by company or role..."
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="border rounded-lg px-4 py-3 outline-none">
          <option>Status: All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <select className="border rounded-lg px-4 py-3 outline-none">
          <option>Priority: All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select className="border rounded-lg px-4 py-3 outline-none">
          <option>Sort: Latest</option>
          <option>Oldest</option>
        </select>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Apply Filters
        </button>

      </div>
    </div>
  );
}

export default FilterBar;
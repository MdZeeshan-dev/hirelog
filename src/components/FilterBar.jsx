function FilterBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white border rounded-xl p-4 mt-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <select className="border rounded-lg px-4 py-3">
          <option>Status: All</option>
        </select>

        <select className="border rounded-lg px-4 py-3">
          <option>Priority: All</option>
        </select>

        <select className="border rounded-lg px-4 py-3">
          <option>Sort: Latest</option>
        </select>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
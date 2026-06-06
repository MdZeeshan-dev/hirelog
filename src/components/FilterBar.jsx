function FilterBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,

}) {
  return (
    <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-4 mt-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <input 
          type="text"



          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-3"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="All">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
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
function FilterBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) {
  return (
    <div className="border-t border-slate-700 pt-4">
      <div className="flex flex-col lg:flex-row gap-3">

        <input
          type="text"
          placeholder="Search by company or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            flex-1
            h-10
            px-3
            text-sm
            rounded-md
            border
            border-slate-700
            bg-[#111827]
            text-white
            outline-none
          "
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="
            h-10
            px-3
            text-sm
            rounded-md
            border
            border-slate-700
            bg-[#111827]
            text-white
          "
        >
          <option value="All">Status: All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="
            h-10
            px-3
            text-sm
            rounded-md
            border
            border-slate-700
            bg-[#111827]
            text-white
          "
        >
          <option value="All">Priority: All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

      </div>
    </div>
  );
}

export default FilterBar;

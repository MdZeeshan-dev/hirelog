import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import FilterBar from "../components/FilterBar";
import JobCard from "../components/JobCard";
import ApplicationStats from "../components/ApplicationStats";


import { jobs } from "../data/jobs";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [jobList, setJobList] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }

    return jobs;
  });

  const [priorityFilter, setPriorityFilter] = useState("All");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priority, setPriority] = useState("High");

  const [searchTerm, setSearchTerm] = useState("");


  const [editingJob, setEditingJob] = useState(null);
  const handleDeleteJob = (id) => {
    const updatedJobs = jobList.filter((job) => job.id !== id);
    setJobList(updatedJobs);
  };


  const handleEditJob = (job) => {
    setEditingJob(job);

    setCompany(job.company);
    setRole(job.role);
    setStatus(job.status);
    setPriority(job.priority);

    setShowForm(true);
  };
  const handleAddJob = () => {
    if (!company.trim() || !role.trim()) {
      return;
    }

    if (editingJob) {
      const updatedJobs = jobList.map((job) =>
        job.id === editingJob.id
          ? {
            ...job,
            company,
            role,
            status,
            priority,
          }
          : job
      );

      setJobList(updatedJobs);
      setEditingJob(null);
    } else {
      const newJob = {
        id: Date.now(),
        company,
        role,
        status,
        priority,
        date: new Date().toLocaleDateString(),
      };

      setJobList([newJob, ...jobList]);
    }

    setCompany("");
    setRole("");
    setStatus("Applied");
    setPriority("High");

    setShowForm(false);
  };

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobList));
  }, [jobList]);

  const filteredJobs = jobList.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || job.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

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
  <div className={darkMode ? "dark min-h-screen bg-slate-950" : "min-h-screen bg-gray-50"}>
      <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <div className="max-w-[1400px] mx-auto px-6 py-8 text-black dark:text-white">
        <div className="flex items-center justify-between">
          <div>
           <h1 className="text-5xl font-bold text-black dark:text-white">
              Welcome, Zeeshan!
            </h1>

           <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
              Track your job applications efficiently.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
          >
            + Add Job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <StatCard
            title="Total Applied"
            value={totalApplied}
            subtitle="Applications"
          />

          <StatCard
            title="Interviews"
            value={totalInterviews}
            subtitle="Scheduled"
          />

          <StatCard
            title="Rejected"
            value={totalRejected}
            subtitle="Rejected"
          />

          <StatCard
            title="Offers"
            value={totalOffers}
            subtitle="Offers"
          />
        </div>
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <div className="grid lg:grid-cols-4 gap-6 mt-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredJobs.length === 0 ? (
                <div className="col-span-full bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-10 text-center">
                  <h2 className="text-2xl font-semibold text-black dark:text-white">
                    No jobs found
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Start by adding your first application.
                  </p>
                </div>
              ) : (
                filteredJobs.map((job) => (
<JobCard
  key={job.id}
  company={job.company}
  role={job.role}
  status={job.status}
  priority={job.priority}
  date={job.date}
  logo={job.logo}
  onDelete={() => handleDeleteJob(job.id)}
  onEdit={() => handleEditJob(job)}
/>
                ))
              )}
            </div>
          </div>

          <div>
            <ApplicationStats jobList={jobList} />
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              {editingJob ? "Edit Job" : "Add New Job"}
            </h2>

            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Rejected">Rejected</option>
              <option value="Offer">Offer</option>
            </select>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={handleAddJob}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                {editingJob ? "Update" : "Save"}
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="border px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Dashboard;






import { useState } from "react";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import FilterBar from "../components/FilterBar";
import JobCard from "../components/JobCard";
import ApplicationStats from "../components/ApplicationStats";

import { jobs } from "../data/jobs";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const [jobList, setJobList] = useState(jobs);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [priority, setPriority] = useState("High");

  const handleAddJob = () => {
    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
      priority,
      date: new Date().toLocaleDateString(),
    };

    const handleDeleteJob = (id) => {
      const updatedJobs = jobList.filter((job) => job.id !== id);
      setJobList(updatedJobs);
    };

    setJobList([newJob, ...jobList]);

    setCompany("");
    setRole("");
    setStatus("Applied");
    setPriority("High");

    setShowForm(false);
  };    

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold">
              Welcome, Zeeshan!
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Track your job applications efficiently.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <StatCard
            title="Total Applied"
            value="24"
            subtitle="Applications"
          />

          <StatCard
            title="Interviews"
            value="5"
            subtitle="Scheduled"
          />

          <StatCard
            title="Rejected"
            value="8"
            subtitle="Rejected"
          />

          <StatCard
            title="Offers"
            value="2"
            subtitle="Offers"
          />
        </div>

        <FilterBar />

        <div className="grid lg:grid-cols-4 gap-6 mt-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobList.map((job) => (
                <JobCard
                  key={job.id}
                  company={job.company}
                  role={job.role}
                  status={job.status}
                  priority={job.priority}
                  date={job.date}
                  onDelete={() => handleDeleteJob(job.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <ApplicationStats />
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Add New Job
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
                Save
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
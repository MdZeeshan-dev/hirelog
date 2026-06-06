import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-[#0b1120] border-b border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-sm font-semibold text-white">
            💼 Job Tracker Pro
          </h1>

          <ul className="hidden md:flex gap-6 text-xs">
            <li className="text-blue-600 border-b-2 border-blue-600 pb-3 font-medium">
              Dashboard
            </li>

            <li className="text-slate-400 hover:text-blue-600 cursor-pointer">
              Add Job
            </li>

            <li className="text-slate-400 hover:text-blue-600 cursor-pointer">
              Profile
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:block text-xs text-slate-300">
            Hello, John!
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-7 h-7 rounded-full"
          />

          <ChevronDown size={14} className="text-slate-500" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

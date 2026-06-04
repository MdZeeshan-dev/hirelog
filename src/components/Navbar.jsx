import { Moon, Sun } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-12">

          <h1 className="text-2xl font-bold text-blue-600">
            HireLog
          </h1>

          <ul className="flex gap-8 font-medium">
            <li className="text-blue-600 border-b-2 border-blue-600 pb-1">
              Dashboard
            </li>

            <li className="text-gray-600 dark:text-gray-300">
              Add Job
            </li>

            <li className="text-gray-600 dark:text-gray-300">
              Profile
            </li>
          </ul>

        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border dark:border-slate-600 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <span className="font-medium dark:text-white">
            Hello, Zeeshan!
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
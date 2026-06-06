import { Briefcase } from "lucide-react";

function StatCard({ title, value, subtitle }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Briefcase size={28} className="text-blue-600" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {title}
          </h3>

          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-bold text-blue-600">
              {value}
            </span>

            <span className="text-gray-500 dark:text-gray-400">
              {subtitle}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default StatCard;
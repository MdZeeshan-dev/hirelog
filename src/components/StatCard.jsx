import { Briefcase, Calendar, XCircle, Trophy } from "lucide-react";

function StatCard({ title, value, subtitle }) {
  const getIcon = () => {
    if (title === "Total Applied") {
      return (
        <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center">
          <Briefcase size={16} className="text-blue-600" />
        </div>
      );
    }

    if (title === "Interviews") {
      return (
        <div className="w-8 h-8 rounded bg-green-100 dark:bg-green-500/10 flex items-center justify-center">
          <Calendar size={16} className="text-green-600" />
        </div>
      );
    }

    if (title === "Rejected") {
      return (
        <div className="w-8 h-8 rounded bg-red-100 dark:bg-red-500/10 flex items-center justify-center">
          <XCircle size={16} className="text-red-500" />
        </div>
      );
    }

    return (
      <div className="w-8 h-8 rounded bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center">
        <Trophy size={16} className="text-yellow-500" />
      </div>
    );
  };
  

  return (
    <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-slate-700/50 rounded-lg px-4 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-medium text-gray-500 dark:text-slate-400">
            {title}
          </h3>

          <div className="mt-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {value}
            </span>

            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
              {subtitle}
            </p>
          </div>
        </div>

        {getIcon()}
      </div>
    </div>
  );
}

export default StatCard;

import {
  Briefcase,
  Calendar,
  XCircle,
  Trophy,
} from "lucide-react";

function StatCard({ title, value, subtitle }) {
  const getIcon = () => {
    if (title === "Total Applied")
      return <Briefcase size={26} className="text-blue-600" />;

    if (title === "Interviews")
      return <Calendar size={26} className="text-green-600" />;

    if (title === "Rejected")
      return <XCircle size={26} className="text-red-600" />;

    return <Trophy size={26} className="text-yellow-500" />;
  };

return (
  <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </h3>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-4xl font-bold text-blue-600">
            {value}
          </span>

          <span className="text-gray-500 dark:text-gray-400 mb-1">
            {subtitle}
          </span>
        </div>
      </div>

      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
        <Briefcase size={22} className="text-blue-600" />
      </div>
    </div>
  </div>
);
}

export default StatCard;
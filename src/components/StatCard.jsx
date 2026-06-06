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
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-black dark:text-white mt-3">
            {value}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
          {getIcon()}
        </div>

      </div>

    </div>
  );
}

export default StatCard;
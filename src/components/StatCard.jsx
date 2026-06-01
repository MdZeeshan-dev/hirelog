import { Briefcase } from "lucide-react";

function StatCard({ title, value, subtitle }) {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500">{title}</h3>

        <Briefcase size={20} className="text-blue-600" />
      </div>

      <div className="mt-4">
        <h2 className="text-4xl font-bold text-blue-600">
          {value}
        </h2>

        <p className="text-gray-500 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
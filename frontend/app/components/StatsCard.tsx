import { StatCard } from "../types";

export const StatsCard = ({
  label,
  value,
  change,
  icon: Icon,
  color,
}: StatCard) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p className={`text-sm mt-1 ${color}`}>{change}</p>
        </div>
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
};

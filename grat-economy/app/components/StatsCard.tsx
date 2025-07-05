// components/StatsCard.tsx
import React from "react";
import { UserStats } from "../types/index";

interface StatsCardProps {
  userStats: UserStats;
}

const StatsCard: React.FC<StatsCardProps> = ({ userStats }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Your Stats</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Total Earned</span>
          <span className="font-semibold text-green-600">
            {userStats.totalEarned} cUSD
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Total Tipped</span>
          <span className="font-semibold text-blue-600">
            {userStats.totalTipped} cUSD
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Posts Created</span>
          <span className="font-semibold text-purple-600">
            {userStats.postsCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

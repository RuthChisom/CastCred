// components/Profile.tsx
import React from "react";
import Image from "next/image";
import { Coins, Heart, Calendar } from "lucide-react";
import { UserStats } from "../types";

interface ProfileProps {
  userStats: UserStats;
}

const Profile: React.FC<ProfileProps> = ({ userStats }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Profile Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
            <Coins className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">{userStats.totalEarned}</div>
            <div className="text-sm opacity-90">cUSD Earned</div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-4 text-white">
            <Heart className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">{userStats.totalTipped}</div>
            <div className="text-sm opacity-90">cUSD Tipped</div>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-4 text-white">
            <Calendar className="w-8 h-8 mb-2" />
            <div className="text-2xl font-bold">{userStats.postsCount}</div>
            <div className="text-sm opacity-90">Posts Created</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-sm text-gray-600">
              Received tip on &quot;Grateful for bonus&quot;
            </span>
            <span className="font-medium text-green-600">+2.5 cUSD</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-sm text-gray-600">
              Tipped @sarah.eth&apos;s post
            </span>
            <span className="font-medium text-blue-600">-1.0 cUSD</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <span className="text-sm text-gray-600">Daily reward claimed</span>
            <span className="font-medium text-purple-600">+5.0 cUSD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

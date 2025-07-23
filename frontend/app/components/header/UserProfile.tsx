import { User } from "lucide-react";

export const UserProfile = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 p-2">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-white">@vitalik.eth</h4>
          <p className="text-xs text-gray-400">Trust Score: 9.2</p>
        </div>
      </div>
      <div className="space-y-1">
        <button className="w-full text-left p-2 text-sm text-white hover:bg-gray-700/50 rounded-lg">
          My Profile
        </button>
        <button className="w-full text-left p-2 text-sm text-white hover:bg-gray-700/50 rounded-lg">
          My Endorsements
        </button>
        <button className="w-full text-left p-2 text-sm text-white hover:bg-gray-700/50 rounded-lg">
          Account Settings
        </button>
      </div>
      <div className="pt-2 border-t border-gray-700">
        <button className="w-full py-2 text-center text-sm text-red-400 hover:text-red-300">
          Sign Out
        </button>
      </div>
    </div>
  );
};

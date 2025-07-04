// components/Navigation.tsx
import React from "react";
import { Heart, TrendingUp, Send, Users } from "lucide-react";
import { NavItem, TabType } from "../types";

interface NavigationProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const navigationItems: NavItem[] = [
    { id: "feed", label: "Feed", icon: Heart },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "create", label: "Create Post", icon: Send },
    { id: "profile", label: "Profile", icon: Users },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Navigation</h3>
      <nav className="space-y-2">
        {navigationItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedTab === id
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;

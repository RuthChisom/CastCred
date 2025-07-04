// components/Sidebar.tsx
import React from "react";
import Navigation from "./Navigation";
import StatsCard from "./StatsCard";
import { TabType, UserStats } from "../types";

interface SidebarProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
  connected: boolean;
  userStats: UserStats;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedTab,
  onTabChange,
  connected,
  userStats,
}) => {
  return (
    <div className="lg:col-span-1">
      <Navigation selectedTab={selectedTab} onTabChange={onTabChange} />

      {connected && <StatsCard userStats={userStats} />}
    </div>
  );
};

export default Sidebar;

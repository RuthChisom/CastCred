import { Award, Calendar, Star, Users } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { EndorsementCard } from "./EndorsementCard";
import { ScheduledCastCard } from "./ScheduledCastCard";
import { Endorsement, ScheduledCast, StatCard } from "../types";

interface DashboardProps {
  mockEndorsements: Endorsement[];
  mockScheduledCasts: ScheduledCast[];
}

export const Dashboard = ({
  mockEndorsements,
  mockScheduledCasts,
}: DashboardProps) => {
  const stats: StatCard[] = [
    {
      label: "Endorsements Received",
      value: "47",
      change: "+12%",
      icon: Award,
      color: "text-green-400",
    },
    {
      label: "Endorsements Given",
      value: "23",
      change: "+8%",
      icon: Users,
      color: "text-blue-400",
    },
    {
      label: "Scheduled Casts",
      value: "12",
      change: "+4%",
      icon: Calendar,
      color: "text-purple-400",
    },
    {
      label: "Trust Score",
      value: "8.7",
      change: "+0.3",
      icon: Star,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Endorsements */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span>Recent Endorsements</span>
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {mockEndorsements.map((endorsement) => (
              <EndorsementCard key={endorsement.id} {...endorsement} />
            ))}
          </div>
        </div>

        {/* Scheduled Casts */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>Upcoming Casts</span>
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {mockScheduledCasts.map((cast) => (
              <ScheduledCastCard key={cast.id} {...cast} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

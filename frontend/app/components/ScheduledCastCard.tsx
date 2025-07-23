import { Clock } from "lucide-react";
import { ScheduledCast } from "../types";

export const ScheduledCastCard = ({
  content,
  channels,
  time,
}: ScheduledCast) => {
  return (
    <div className="p-3 rounded-lg bg-gray-800/50">
      <p className="text-sm mb-2">{content}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {channels.map((channel) => (
            <span
              key={channel}
              className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
            >
              {channel}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
};

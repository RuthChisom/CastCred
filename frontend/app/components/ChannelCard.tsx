import { Hash } from "lucide-react";
import { Channel } from "../types";

interface ChannelCardProps extends Channel {
  selected: boolean;
  onClick: () => void;
}

export const ChannelCard = ({
  // id,
  name,
  members,
  growth,
  selected,
  onClick,
}: ChannelCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg border-2 transition-all text-left ${
        selected
          ? "border-blue-500 bg-blue-500/10"
          : "border-gray-600 hover:border-gray-500 bg-gray-700/50"
      }`}
    >
      <div className="flex items-center space-x-2 mb-1">
        <Hash className="w-4 h-4" />
        <span className="font-medium">{name}</span>
      </div>
      <div className="text-xs text-gray-400">
        <span>{members} members</span>
        <span className="text-green-400 ml-2">{growth}</span>
      </div>
    </button>
  );
};

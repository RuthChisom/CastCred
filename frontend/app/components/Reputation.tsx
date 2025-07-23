import { Star } from "lucide-react";
// import { Channel } from "../types";

// interface ChannelCardProps extends Channel {
//   selected: boolean;
//   onClick: () => void;
// }

export const Reputation = () => {
  return (
    <div className="text-center py-16">
      <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Reputation Dashboard</h2>
      <p className="text-gray-400">
        Coming soon - Track your onchain reputation and trust metrics.
      </p>
    </div>
  );
};

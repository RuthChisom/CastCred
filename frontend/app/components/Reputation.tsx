// import { Star } from "lucide-react";
// import { Channel } from "../types";

// interface ChannelCardProps extends Channel {
//   selected: boolean;
//   onClick: () => void;
// }
// components/Reputation.tsx
import { Icon } from "./Icon";

export const Reputation = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800/30 text-white px-4">
      <div className="max-w-xl w-full rounded-xl border border-gray-700 text-center py-16">
        <Icon />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Reputation Dashboard
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Coming soon — Track your onchain reputation and impact.
        </p>
      </div>
    </section>
  );
};

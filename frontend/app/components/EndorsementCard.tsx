import { Endorsement } from "../types";

export const EndorsementCard = ({
  from,
  to,
  tag,
  message,
  timestamp,
  onchain,
}: Endorsement) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/50">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-medium text-sm">{from}</span>
          <span className="text-gray-400 text-sm">→</span>
          <span className="font-medium text-sm">{to}</span>
          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
            {tag}
          </span>
        </div>
        <p className="text-sm text-gray-300">{message}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-xs text-gray-500">{timestamp}</span>
          {onchain && (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Onchain</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

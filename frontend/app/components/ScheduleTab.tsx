import {
  Send,
  // Hash,
  //  Clock
} from "lucide-react";
import { ChannelCard } from "./ChannelCard";
import { Channel } from "../types";

interface ScheduleTabProps {
  castContent: string;
  setCastContent: (content: string) => void;
  selectedChannels: string[];
  toggleChannel: (channelId: string) => void;
  scheduledTime: string;
  setScheduledTime: (time: string) => void;
  handleScheduleCast: () => void;
  channels: Channel[];
}

export const ScheduleTab = ({
  castContent,
  setCastContent,
  selectedChannels,
  toggleChannel,
  scheduledTime,
  setScheduledTime,
  handleScheduleCast,
  channels,
}: ScheduleTabProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Schedule Your Casts</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Optimize your content across multiple Farcaster channels. Schedule
          posts to reach the right communities at the right time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Scheduling Form */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            {/* Cast Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What&apos;s on your mind?
              </label>
              <textarea
                rows={4}
                placeholder="Share your thoughts, updates, or questions..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                value={castContent}
                onChange={(e) => setCastContent(e.target.value)}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">
                  {castContent.length}/280
                </span>
              </div>
            </div>

            {/* Channel Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select channels
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {channels.map((channel) => (
                  <ChannelCard
                    key={channel.id}
                    {...channel}
                    selected={selectedChannels.includes(channel.id)}
                    onClick={() => toggleChannel(channel.id)}
                  />
                ))}
              </div>
            </div>

            {/* Schedule Time */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                When to post?
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleScheduleCast}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Schedule Cast</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

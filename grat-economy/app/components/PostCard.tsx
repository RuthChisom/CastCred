// components/PostCard.tsx
import React from "react";
import { Heart, Coins, TrendingUp, Star } from "lucide-react";
import { SiFarcaster } from "react-icons/si";
import { PostCardProps } from "../types/index";

const PostCard: React.FC<PostCardProps> = ({
  post,
  connected,
  account,
  loading,
  onTipPost,
}) => {
  const formatTime = (timestamp: number): string => {
    const diff: number = Date.now() - timestamp;
    const hours: number = Math.floor(diff / 3600000);
    const minutes: number = Math.floor((diff % 3600000) / 60000);

    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            {post.avatar}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">
                {post.authorName}
              </span>
              {post.isTrending && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>
            <span className="text-sm text-gray-500">
              {formatTime(post.timestamp)}
            </span>
          </div>
        </div>
        {post.isTrending && (
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>Trending</span>
          </div>
        )}
      </div>

      <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Coins className="w-4 h-4 text-green-500" />
            <span>{post.totalTips} cUSD</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4 text-red-500" />
            <span>{post.tipCount} tips</span>
          </div>
          {post.isPostedToFarcaster && post.farcasterUrl && (
            <a
              href={post.farcasterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <SiFarcaster />
              <span>View on Farcaster</span>
            </a>
          )}
        </div>

        {connected && post.author !== account && (
          <div className="flex space-x-2">
            <button
              onClick={() => onTipPost(post.id, 0.5)}
              disabled={loading}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-green-500 hover:to-blue-600 transition-all duration-200 disabled:opacity-50"
            >
              Tip 0.5 cUSD
            </button>
            <button
              onClick={() => onTipPost(post.id, 1)}
              disabled={loading}
              className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-purple-500 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
            >
              Tip 1 cUSD
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;

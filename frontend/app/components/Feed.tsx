// components/Feed.tsx
import React from "react";
import { TrendingUp, Star } from "lucide-react";
import PostCard from "./PostCard";
import { Post } from "../types";

interface FeedProps {
  posts: Post[];
  selectedTab: "feed" | "trending";
  connected: boolean;
  account: string;
  loading: boolean;
  onTipPost: (postId: number, amount: number) => void;
}

const Feed: React.FC<FeedProps> = ({
  posts,
  selectedTab,
  connected,
  account,
  loading,
  onTipPost,
}) => {
  const filteredPosts =
    selectedTab === "trending"
      ? posts.filter((p: Post) => p.isTrending)
      : posts;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedTab === "trending"
            ? "Trending Gratitude"
            : "Latest Gratitude"}
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <TrendingUp className="w-4 h-4" />
          <span>{posts.length} posts today</span>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post: Post) => (
          <PostCard
            key={post.id}
            post={post}
            connected={connected}
            account={account}
            loading={loading}
            onTipPost={onTipPost}
          />
        ))}
      </div>

      {selectedTab === "trending" && filteredPosts.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Trending Posts Yet
          </h3>
          <p className="text-gray-600">
            Posts become trending when they receive 5+ tips from the community.
          </p>
        </div>
      )}
    </div>
  );
};

export default Feed;

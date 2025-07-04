// components/MainContent.tsx
import React from "react";
import CreatePost from "./CreatePost";
import WalletConnect from "./WalletConnect";
import Profile from "./Profile";
import Feed from "./Feed";
import { TabType, Post, UserStats } from "../types";

interface MainContentProps {
  selectedTab: TabType;
  connected: boolean;
  account: string;
  loading: boolean;
  posts: Post[];
  userStats: UserStats;
  newPost: string;
  onPostChange: (value: string) => void;
  onCreatePost: () => void;
  onConnectWallet: () => void;
  onTipPost: (postId: number, amount: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  selectedTab,
  connected,
  account,
  loading,
  posts,
  userStats,
  newPost,
  onPostChange,
  onCreatePost,
  onConnectWallet,
  onTipPost,
}) => {
  const renderContent = () => {
    switch (selectedTab) {
      case "create":
        return connected ? (
          <CreatePost
            newPost={newPost}
            onPostChange={onPostChange}
            onCreatePost={onCreatePost}
            loading={loading}
          />
        ) : (
          <WalletConnect
            loading={loading}
            onConnect={onConnectWallet}
            variant="create"
          />
        );

      case "profile":
        return connected ? (
          <Profile userStats={userStats} />
        ) : (
          <WalletConnect
            loading={loading}
            onConnect={onConnectWallet}
            variant="profile"
          />
        );

      case "feed":
      case "trending":
        return (
          <Feed
            posts={posts}
            selectedTab={selectedTab}
            connected={connected}
            account={account}
            loading={loading}
            onTipPost={onTipPost}
          />
        );

      default:
        return null;
    }
  };

  return <div className="lg:col-span-3">{renderContent()}</div>;
};

export default MainContent;

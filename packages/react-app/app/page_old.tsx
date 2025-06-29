"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWeb3 } from "@/contexts/useWeb3";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Heart,
  Coins,
  TrendingUp,
  Users,
  Calendar,
  Star,
  Send,
  Wallet,
} from "lucide-react";

// Type definitions
interface Transaction {
  transactionHash: string;
}

interface Post {
  id: number;
  author: string;
  authorName: string;
  content: string;
  timestamp: number;
  totalTips: string;
  tipCount: number;
  farcasterHash: string;
  isTrending: boolean;
  avatar: string;
}

interface UserStats {
  totalEarned: number;
  totalTipped: number;
  postsCount: number;
}

interface NavItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

type TabType = "feed" | "trending" | "create" | "profile";

interface PostCardProps {
  post: Post;
}

interface Web3Context {
  address: string | null;
  getUserAddress: () => Promise<void>;
  sendCUSD: (address: string, amount: string) => Promise<Transaction>;
  mintMinipayNFT: () => Promise<Transaction>;
  getNFTs: () => Promise<string[]>;
  signTransaction: () => Promise<void>;
}

export default function Home(): JSX.Element {
  const {
    address,
    getUserAddress,
    sendCUSD,
    mintMinipayNFT,
    getNFTs,
    signTransaction,
  } = useWeb3();
  //   as Web3Context;

  const [cUSDLoading, setCUSDLoading] = useState<boolean>(false);
  const [nftLoading, setNFTLoading] = useState<boolean>(false);
  const [signingLoading, setSigningLoading] = useState<boolean>(false);
  const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);
  const [tx, setTx] = useState<Transaction | undefined>(undefined);
  const [amountToSend, setAmountToSend] = useState<string>("0.1");
  const [messageSigned, setMessageSigned] = useState<boolean>(false);

  useEffect(() => {
    getUserAddress();
  }, []);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const tokenURIs: string[] = await getNFTs();
      setUserOwnedNFTs(tokenURIs);
    };
    if (address) {
      getData();
    }
  }, [address]);

  const sendingCUSD = async (): Promise<void> => {
    if (address) {
      setSigningLoading(true);
      try {
        const transaction: Transaction = await sendCUSD(address, amountToSend);
        setTx(transaction);
      } catch (error) {
        console.log(error);
      } finally {
        setSigningLoading(false);
      }
    }
  };

  const signMessage = async (): Promise<void> => {
    setCUSDLoading(true);
    try {
      await signTransaction();
      setMessageSigned(true);
    } catch (error) {
      console.log(error);
    } finally {
      setCUSDLoading(false);
    }
  };

  const mintNFT = async (): Promise<void> => {
    setNFTLoading(true);
    try {
      const transaction: Transaction = await mintMinipayNFT();
      const tokenURIs: string[] = await getNFTs();
      setUserOwnedNFTs(tokenURIs);
      setTx(transaction);
    } catch (error) {
      console.log(error);
    } finally {
      setNFTLoading(false);
    }
  };

  // Gratitude Economy state
  const [connected, setConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [posts, setPosts] = useState<Post[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    totalEarned: 0,
    totalTipped: 0,
    postsCount: 0,
  });
  const [newPost, setNewPost] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<TabType>("feed");
  const [loading, setLoading] = useState<boolean>(false);

  // Mock data for demonstration
  const mockPosts: Post[] = [
    {
      id: 1,
      author: "0x1234...5678",
      authorName: "sarah.eth",
      content:
        "Grateful for my freelance income reaching $5K this month! It's amazing how consistent effort pays off. Building multiple income streams has given me the financial security I never had before. 🙏✨",
      timestamp: Date.now() - 3600000,
      totalTips: "12.5",
      tipCount: 8,
      farcasterHash: "0xabc123",
      isTrending: true,
      avatar: "🌟",
    },
    {
      id: 2,
      author: "0x8765...4321",
      authorName: "mike.builder",
      content:
        "Thank you universe for the unexpected bonus at work! Just got approved for a mortgage because of my stable income. Dreams are becoming reality! 🏠💫",
      timestamp: Date.now() - 7200000,
      totalTips: "8.2",
      tipCount: 5,
      farcasterHash: "0xdef456",
      isTrending: false,
      avatar: "🚀",
    },
    {
      id: 3,
      author: "0x2468...1357",
      authorName: "alex.crypto",
      content:
        "Grateful for finally paying off my student loans! Took 5 years but the discipline I learned managing debt taught me so much about money. Freedom feels incredible! 🎓💰",
      timestamp: Date.now() - 10800000,
      totalTips: "15.7",
      tipCount: 12,
      farcasterHash: "0x789ghi",
      isTrending: true,
      avatar: "🎯",
    },
  ];

  useEffect(() => {
    setPosts(mockPosts);
    setUserStats({
      totalEarned: 47.3,
      totalTipped: 23.8,
      postsCount: 12,
    });
  }, []);

  const connectWallet = async (): Promise<void> => {
    setLoading(true);
    // Mock wallet connection
    setTimeout(() => {
      setConnected(true);
      setAccount("0x1234...5678");
      setBalance("156.75");
      setLoading(false);
    }, 1500);
  };

  const createPost = async (): Promise<void> => {
    if (!newPost.trim()) return;

    setLoading(true);
    // Mock post creation
    const mockNewPost: Post = {
      id: posts.length + 1,
      author: account,
      authorName: "you.eth",
      content: newPost,
      timestamp: Date.now(),
      totalTips: "0",
      tipCount: 0,
      farcasterHash: "0x" + Math.random().toString(16).slice(2, 8),
      isTrending: false,
      avatar: "✨",
    };

    setTimeout(() => {
      setPosts([mockNewPost, ...posts]);
      setNewPost("");
      setLoading(false);
    }, 1000);
  };

  const tipPost = async (postId: number, amount: number): Promise<void> => {
    setLoading(true);
    // Mock tipping
    setTimeout(() => {
      setPosts(
        posts.map((post: Post) =>
          post.id === postId
            ? {
                ...post,
                totalTips: (parseFloat(post.totalTips) + amount).toFixed(1),
                tipCount: post.tipCount + 1,
                isTrending: post.tipCount >= 4,
              }
            : post
        )
      );
      setBalance((parseFloat(balance) - amount).toFixed(2));
      setLoading(false);
    }, 1000);
  };

  const formatTime = (timestamp: number): string => {
    const diff: number = Date.now() - timestamp;
    const hours: number = Math.floor(diff / 3600000);
    const minutes: number = Math.floor((diff % 3600000) / 60000);

    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  const PostCard: React.FC<PostCardProps> = ({ post }) => (
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
        </div>

        {connected && post.author !== account && (
          <div className="flex space-x-2">
            <button
              onClick={() => tipPost(post.id, 0.5)}
              disabled={loading}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-green-500 hover:to-blue-600 transition-all duration-200 disabled:opacity-50"
            >
              Tip 0.5 cUSD
            </button>
            <button
              onClick={() => tipPost(post.id, 1)}
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

  const navigationItems: NavItem[] = [
    { id: "feed", label: "Feed", icon: Heart },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "create", label: "Create Post", icon: Send },
    { id: "profile", label: "Profile", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Gratitude Economy
                </h1>
                <p className="text-sm text-gray-600">
                  Share daily financial gratitude, earn rewards
                </p>
              </div>
            </div>

            {!connected ? (
              <button
                onClick={connectWallet}
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
              >
                <Wallet className="w-5 h-5" />
                <span>{loading ? "Connecting..." : "Connect Wallet"}</span>
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {balance} cUSD
                  </div>
                  <div className="text-xs text-gray-500">{account}</div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Navigation
              </h3>
              <nav className="space-y-2">
                {navigationItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedTab(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedTab === id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Stats */}
            {connected && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Your Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Earned</span>
                    <span className="font-semibold text-green-600">
                      {userStats.totalEarned} cUSD
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Tipped</span>
                    <span className="font-semibold text-blue-600">
                      {userStats.totalTipped} cUSD
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Posts Created</span>
                    <span className="font-semibold text-purple-600">
                      {userStats.postsCount}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedTab === "create" && connected && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Share Your Daily Gratitude
                </h2>
                <div className="space-y-4">
                  <textarea
                    value={newPost}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setNewPost(e.target.value)
                    }
                    placeholder="What are you financially grateful for today? Share your story of abundance, progress, or financial blessings..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {newPost.length}/500 characters
                    </div>
                    <button
                      onClick={createPost}
                      disabled={!newPost.trim() || loading}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? "Posting..." : "Share Gratitude"}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "create" && !connected && (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Connect Your Wallet
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect your wallet to start sharing your financial gratitude
                  and earning rewards from the community.
                </p>
                <button
                  onClick={connectWallet}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
                >
                  {loading ? "Connecting..." : "Connect Wallet"}
                </button>
              </div>
            )}

            {selectedTab === "profile" && connected && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Profile Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
                      <Coins className="w-8 h-8 mb-2" />
                      <div className="text-2xl font-bold">
                        {userStats.totalEarned}
                      </div>
                      <div className="text-sm opacity-90">cUSD Earned</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-4 text-white">
                      <Heart className="w-8 h-8 mb-2" />
                      <div className="text-2xl font-bold">
                        {userStats.totalTipped}
                      </div>
                      <div className="text-sm opacity-90">cUSD Tipped</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-4 text-white">
                      <Calendar className="w-8 h-8 mb-2" />
                      <div className="text-2xl font-bold">
                        {userStats.postsCount}
                      </div>
                      <div className="text-sm opacity-90">Posts Created</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">
                        Received tip on "Grateful for bonus"
                      </span>
                      <span className="font-medium text-green-600">
                        +2.5 cUSD
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-600">
                        Tipped @sarah.eth's post
                      </span>
                      <span className="font-medium text-blue-600">
                        -1.0 cUSD
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-600">
                        Daily reward claimed
                      </span>
                      <span className="font-medium text-purple-600">
                        +5.0 cUSD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "profile" && !connected && (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  View Your Profile
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect your wallet to view your earnings, activity, and
                  gratitude journey.
                </p>
                <button
                  onClick={connectWallet}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
                >
                  {loading ? "Connecting..." : "Connect Wallet"}
                </button>
              </div>
            )}

            {(selectedTab === "feed" || selectedTab === "trending") && (
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
                  {(selectedTab === "trending"
                    ? posts.filter((p: Post) => p.isTrending)
                    : posts
                  ).map((post: Post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>

                {selectedTab === "trending" &&
                  posts.filter((p: Post) => p.isTrending).length === 0 && (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                      <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No Trending Posts Yet
                      </h3>
                      <p className="text-gray-600">
                        Posts become trending when they receive 5+ tips from the
                        community.
                      </p>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
            <span className="text-gray-900">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}

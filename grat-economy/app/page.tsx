"use client";

import {
  useMiniKit,
  useAddFrame,
  // useOpenUrl,
} from "@coinbase/onchainkit/minikit";
// import {
//   Name,
//   Identity,
//   Address,
//   Avatar,
//   EthBalance,
// } from "@coinbase/onchainkit/identity";

import Sidebar from "./components/Sidebar";
// import WalletConnect from "@/components/WalletConnect";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import { useWeb3 } from "./contexts/useWeb3";
import { sdk } from "@farcaster/frame-sdk";
import {
  Post,
  UserStats,
  TabType,
  FarcasterUser,
  FarcasterCastResponse,
} from "./types";
import { Coins, Heart, Calendar, Users } from "lucide-react";
// import { SiFarcaster } from "react-icons/si";
import Header from "./components/Header";

import { useEffect, useMemo, useState, useCallback } from "react";
// import { Button } from "./components/DemoComponents";
// import { Icon } from "./components/DemoComponents";
// import { Home } from "./components/DemoComponents";
// import { Features } from "./components/DemoComponents";

export default function App() {
  const {
    setFrameReady,
    isFrameReady,
    //  context
  } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  // const [activeTab, setActiveTab] = useState("home");

  const addFrame = useAddFrame();
  // const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  // const saveFrameButton = useMemo(() => {
  //   if (context && !context.client.added) {
  //     return (
  //       <Button
  //         variant="ghost"
  //         size="sm"
  //         onClick={handleAddFrame}
  //         className="text-[var(--app-accent)] p-4"
  //         icon={<Icon name="plus" size="sm" />}
  //       >
  //         Save Frame
  //       </Button>
  //     );
  //   }

  //   if (frameAdded) {
  //     return (
  //       <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
  //         <Icon name="check" size="sm" className="text-[#0052FF]" />
  //         <span>Saved</span>
  //       </div>
  //     );
  //   }

  //   return null;
  // }, [context, frameAdded, handleAddFrame]);

  const {
    // address,
    getUserAddress,
    // sendCUSD,
    // mintMinipayNFT,
    // getNFTs,
    // signTransaction,
  } = useWeb3();

  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");
  const [posts, setPosts] = useState<Post[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    totalEarned: 0,
    totalTipped: 0,
    postsCount: 0,
  });
  const [newPost, setNewPost] = useState("");
  const [selectedTab, setSelectedTab] = useState<TabType>("feed");
  const [loading, setLoading] = useState(false);
  const [farcasterUser, setFarcasterUser] = useState<FarcasterUser | null>(
    null,
  );
  const [postToFarcaster, setPostToFarcaster] = useState(true);
  const mockPosts = useMemo(
    () => [
      {
        id: 1,
        author: "0x1234...5678",
        authorName: "sarah.eth",
        content: "Grateful for my freelance income reaching $5K this month!",
        timestamp: Date.now() - 3600000,
        totalTips: "12.5",
        tipCount: 8,
        farcasterHash: "0xabc123",
        isTrending: true,
        avatar: "🌟",
        farcasterUrl: "https://warpcast.com/sarah.eth/0xabc123",
        isPostedToFarcaster: true,
      },
      {
        id: 2,
        author: "0x8765...4321",
        authorName: "mike.builder",
        content: "Thank you universe for the unexpected bonus at work!",
        timestamp: Date.now() - 7200000,
        totalTips: "8.2",
        tipCount: 5,
        farcasterHash: "0xdef456",
        isTrending: false,
        avatar: "🚀",
        farcasterUrl: "https://warpcast.com/mike.builder/0xdef456",
        isPostedToFarcaster: true,
      },
      {
        id: 3,
        author: "0x2468...1357",
        authorName: "alex.crypto",
        content: "Grateful for finally paying off my student loans!",
        timestamp: Date.now() - 10800000,
        totalTips: "15.7",
        tipCount: 12,
        farcasterHash: "0x789ghi",
        isTrending: true,
        avatar: "🎯",
        farcasterUrl: "https://warpcast.com/alex.crypto/0x789ghi",
        isPostedToFarcaster: true,
      },
    ],
    [],
  );

  useEffect(() => {
    sdk.actions.ready();
    getUserAddress();
    setPosts(mockPosts);
    setUserStats({ totalEarned: 47.3, totalTipped: 23.8, postsCount: 12 });
  }, []);

  useEffect(() => {
    if (connected) {
      setUserStats({
        totalEarned: 47.3,
        totalTipped: 23.8,
        postsCount: 12,
      });
    }
  }, [connected, getUserAddress]);

  const connectWallet = async () => {
    setLoading(true);
    setTimeout(() => {
      setConnected(true);
      setAccount("0x1234...5678");
      setBalance("156.75");
      setLoading(false);
    }, 1500);
  };

  const postToFarcasterNetwork = async (
    content: string,
  ): Promise<FarcasterCastResponse> => {
    try {
      const castData = {
        text: `${content}\n\n#GratitudeEconomy #Celo #DeFi`,
        embeds: [
          {
            url: `https://yourdomain.com/post/${Date.now()}`,
          },
        ],
      };

      const mockResponse: FarcasterCastResponse = {
        success: true,
        cast: {
          hash: "0x" + Math.random().toString(16).slice(2, 10),
          author: {
            username: "gratitude.user",
            fid: 12345,
          },
          text: castData.text,
          timestamp: new Date().toISOString(),
        },
      };

      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate delay

      return mockResponse;
    } catch (error) {
      console.error("Failed to post to Farcaster network:", error);
      return {
        success: false,
        error: "Failed to post to Farcaster network",
      };
    }
  };

  const createPost = async () => {
    let farcasterHash = "";
    let farcasterUrl = "";
    let isPostedToFarcaster = false;

    if (postToFarcaster && farcasterUser?.isConnected) {
      try {
        const farcasterResponse = await postToFarcasterNetwork(newPost);
        if (farcasterResponse.success && farcasterResponse.cast) {
          farcasterHash = farcasterResponse.cast.hash;
          farcasterUrl = `https://warpcast.com/${farcasterResponse.cast.author.username}/${farcasterHash}`;
          isPostedToFarcaster = true;
        }
      } catch (error) {
        console.error("Failed to post to Farcaster:", error);
      }
    }

    if (!newPost.trim()) return;
    setLoading(true);

    const newMockPost: Post = {
      id: posts.length + 1,
      author: account,
      authorName: farcasterUser?.username || "you.eth",
      content: newPost,
      timestamp: Date.now(),
      totalTips: "0",
      tipCount: 0,
      farcasterHash:
        farcasterHash || "0x" + Math.random().toString(16).slice(2, 8),
      isTrending: false,
      avatar: "✨",
      farcasterUrl: farcasterUrl || "",
      isPostedToFarcaster: isPostedToFarcaster,
    };

    setTimeout(() => {
      setPosts([newMockPost, ...posts]);
      setNewPost("");
      setUserStats((prev) => ({
        ...prev,
        postsCount: prev.postsCount + 1,
      }));
      setLoading(false);
    }, 1000);
  };

  const tipPost = async (postId: number, amount: number) => {
    setLoading(true);
    setTimeout(() => {
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                totalTips: (parseFloat(post.totalTips) + amount).toFixed(1),
                tipCount: post.tipCount + 1,
                isTrending: post.tipCount + 1 >= 5,
              }
            : post,
        ),
      );
      setBalance((parseFloat(balance) - amount).toFixed(2));
      setLoading(false);
    }, 1000);
  };

  return (
    // <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
    //   <div className="w-full max-w-md mx-auto px-4 py-3">
    //     <header className="flex justify-between items-center mb-3 h-11">
    //       <div>
    //         <div className="flex items-center space-x-2">
    //           <Wallet className="z-10">
    //             <ConnectWallet>
    //               <Name className="text-inherit" />
    //             </ConnectWallet>
    //             <WalletDropdown>
    //               <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
    //                 <Avatar />
    //                 <Name />
    //                 <Address />
    //                 <EthBalance />
    //               </Identity>
    //               <WalletDropdownDisconnect />
    //             </WalletDropdown>
    //           </Wallet>
    //         </div>
    //       </div>
    //       <div>{saveFrameButton}</div>
    //     </header>

    //     <main className="flex-1">
    //       {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
    //       {activeTab === "features" && <Features setActiveTab={setActiveTab} />}
    //     </main>

    //     <footer className="mt-2 pt-4 flex justify-center">
    //       <Button
    //         variant="ghost"
    //         size="sm"
    //         className="text-[var(--ock-text-foreground-muted)] text-xs"
    //         onClick={() => openUrl("https://base.org/builders/minikit")}
    //       >
    //         Built on Base with MiniKit
    //       </Button>
    //     </footer>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Sidebar
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            connected={connected}
            userStats={userStats}
          />

          <div className="lg:col-span-3">
            {selectedTab === "create" && (
              <CreatePost
                newPost={newPost}
                setNewPost={setNewPost}
                createPost={createPost}
                loading={loading}
                connected={connected}
                connectWallet={connectWallet}
              />
            )}
            {(selectedTab === "feed" || selectedTab === "trending") && (
              <Feed
                posts={posts}
                selectedTab={selectedTab}
                connected={connected}
                account={account}
                loading={loading}
                onTipPost={tipPost}
              />
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

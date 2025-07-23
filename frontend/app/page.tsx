// "use client";

// import {
//   useMiniKit,
//   // useAddFrame,
//   // useOpenUrl,
//   useAddFrame,
//   useAuthenticate,
//   useClose,
//   useComposeCast,
//   useIsInMiniApp,
//   useNotification,
//   useOpenUrl,
//   usePrimaryButton,
//   useViewCast,
//   useViewProfile,
// } from "@coinbase/onchainkit/minikit";
// // import { useWallet } from "@coinbase/onchainkit/wallet";

// // import {
// //   Name,
// //   Identity,
// //   Address,
// //   Avatar,
// //   EthBalance,
// // } from "@coinbase/onchainkit/identity";
// // import { useViewProfile } from "@coinbase/onchainkit/minikit";
// // import Sidebar from "./components/Sidebar";
// // import WalletConnect from "@/components/WalletConnect";
// import { useWeb3 } from "./contexts/useWeb3";
// import { sdk } from "@farcaster/frame-sdk";
// import {
//   Post,
//   UserStats,
//   TabType,
//   FarcasterUser,
//   FarcasterCastResponse,
// } from "./types";
// import { Coins, Heart, Calendar, Users } from "lucide-react";
// // import { SiFarcaster } from "react-icons/si";
// // import Header from "./components/Header";

// import { useEffect, useMemo, useState, useCallback } from "react";
// import {
//   ConnectWallet,
//   Wallet,
//   WalletDropdown,
//   WalletDropdownDisconnect,
// } from "@coinbase/onchainkit/wallet";

// // import { Button } from "./components/DemoComponents";
// // import { Icon } from "./components/DemoComponents";
// // import { Home } from "./components/DemoComponents";
// // import { Features } from "./components/DemoComponents";

// export default function App() {
//   // Add the hook
//   const viewProfile = useViewProfile();

//   // Add the handler function
//   const handleViewProfile = () => {
//     viewProfile();
//     // };

//     const {
//       setFrameReady,
//       isFrameReady,
//       //  context
//     } = useMiniKit();
//     const [frameAdded, setFrameAdded] = useState(false);
//     const [activeTab, setActiveTab] = useState("home");

//     const addFrame = useAddFrame();
//     const openUrl = useOpenUrl();

//     useEffect(() => {
//       if (!isFrameReady) {
//         setFrameReady();
//       }
//     }, [setFrameReady, isFrameReady]);

//     // const handleAddFrame = useCallback(async () => {
//     //   const frameAdded = await addFrame();
//     //   setFrameAdded(Boolean(frameAdded));
//     // }, [addFrame]);

//     // const saveFrameButton = useMemo(() => {
//     //   if (context && !context.client.added) {
//     //     return (
//     //       <Button
//     //         variant="ghost"
//     //         size="sm"
//     //         onClick={handleAddFrame}
//     //         className="text-[var(--app-accent)] p-4"
//     //         icon={<Icon name="plus" size="sm" />}
//     //       >
//     //         Save Frame
//     //       </Button>
//     //     );
//     //   }

//     //   if (frameAdded) {
//     //     return (
//     //       <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
//     //         <Icon name="check" size="sm" className="text-[#0052FF]" />
//     //         <span>Saved</span>
//     //       </div>
//     //     );
//     //   }

//     //   return null;
//     // }, [context, frameAdded, handleAddFrame]);

//     const {
//       // address,
//       getUserAddress,
//       // sendCUSD,
//       // mintMinipayNFT,
//       // getNFTs,
//       // signTransaction,
//     } = useWeb3();

//     const [connected, setConnected] = useState(false);
//     const [account, setAccount] = useState("");
//     const [balance, setBalance] = useState("0");
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [userStats, setUserStats] = useState<UserStats>({
//       totalEarned: 0,
//       totalTipped: 0,
//       postsCount: 0,
//     });
//     const [newPost, setNewPost] = useState("");
//     const [selectedTab, setSelectedTab] = useState<TabType>("feed");
//     const [loading, setLoading] = useState(false);
//     const [farcasterUser] = useState<FarcasterUser | null>(null);
//     const [postToFarcaster] = useState(true);

//     return (
//       <>
//         <h1>Hello</h1>
//       </>
//     );
//   };
// }

import { LandingPage } from "./components/landing/LandingPage";
import CastCred from "./components/CastCred";

export default function Home() {
  // In a real app, you would check authentication status here
  const isAuthenticated = false; // Change to true to see the dashboard

  return isAuthenticated ? <CastCred /> : <LandingPage />;
}

// types/index.ts
export interface Transaction {
  transactionHash: string;
}

export interface Post {
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
  farcasterUrl?: string;
  isPostedToFarcaster: boolean;
}

export interface UserStats {
  totalEarned: number;
  totalTipped: number;
  postsCount: number;
}

export interface NavItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type TabType = "feed" | "trending" | "create" | "profile";

export interface PostCardProps {
  post: Post;
  connected: boolean;
  account: string;
  loading: boolean;
  onTipPost: (postId: number, amount: number) => void;
}

export interface Web3Context {
  address: string | null;
  getUserAddress: () => Promise<void>;
  sendCUSD: (address: string, amount: string) => Promise<Transaction>;
  mintMinipayNFT: () => Promise<Transaction>;
  getNFTs: () => Promise<string[]>;
  signTransaction: () => Promise<void>;
}

export interface FarcasterCastResponse {
  success: boolean;
  cast?: {
    hash: string;
    author: {
      username: string;
      fid: number;
    };
    text: string;
    timestamp: string;
  };
  error?: string;
}

export interface FarcasterUser {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  isConnected: boolean;
}

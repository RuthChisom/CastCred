// components/WalletConnect.tsx
import React from "react";
import { Wallet, Users } from "lucide-react";

interface WalletConnectProps {
  loading: boolean;
  onConnect: () => void;
  variant?: "create" | "profile";
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  loading,
  onConnect,
  variant = "create",
}) => {
  const config = {
    create: {
      icon: Wallet,
      title: "Connect Your Wallet",
      description:
        "Connect your wallet to start sharing your financial gratitude and earning rewards from the community.",
    },
    profile: {
      icon: Users,
      title: "View Your Profile",
      description:
        "Connect your wallet to view your earnings, activity, and gratitude journey.",
    },
  };

  const { icon: Icon, title, description } = config[variant];

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        onClick={onConnect}
        disabled={loading}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>
    </div>
  );
};

export default WalletConnect;

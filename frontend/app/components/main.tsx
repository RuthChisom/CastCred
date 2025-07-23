"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Dashboard } from "./Dashboard";
import { EndorseTab } from "./EndorseTab";
import { ScheduleTab } from "./ScheduleTab";
import {
  Star,
  Users,
  Award,
  Calendar,
  Code,
  BookOpen,
  Palette,
  Briefcase,
  Zap,
  Shield,
  Bell,
  Settings,
  TrendingUp,
  Search,
  Send,
  Clock,
  Hash,
} from "lucide-react";
import { Endorsement, ScheduledCast, Channel, EndorsementTag } from "../types";

const CastCred = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [endorsementText, setEndorsementText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [castContent, setCastContent] = useState("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [scheduledTime, setScheduledTime] = useState("");

  const endorsementTags: EndorsementTag[] = [
    { id: "dev", label: "Great Dev", icon: Code, color: "bg-blue-500" },
    {
      id: "mentor",
      label: "Solidity Mentor",
      icon: BookOpen,
      color: "bg-purple-500",
    },
    {
      id: "designer",
      label: "UI/UX Expert",
      icon: Palette,
      color: "bg-pink-500",
    },
    {
      id: "leader",
      label: "Community Leader",
      icon: Users,
      color: "bg-green-500",
    },
    { id: "builder", label: "Ship Fast", icon: Zap, color: "bg-yellow-500" },
    {
      id: "advisor",
      label: "Strategic Advisor",
      icon: Briefcase,
      color: "bg-indigo-500",
    },
  ];

  const channels: Channel[] = [
    { id: "dev", name: "/dev", members: "12.4k", growth: "+15%" },
    { id: "nft", name: "/nft", members: "8.7k", growth: "+8%" },
    { id: "build", name: "/build", members: "15.2k", growth: "+22%" },
    { id: "crypto", name: "/crypto", members: "25.1k", growth: "+12%" },
    { id: "design", name: "/design", members: "6.3k", growth: "+18%" },
    { id: "dao", name: "/dao", members: "4.9k", growth: "+25%" },
  ];

  const mockEndorsements: Endorsement[] = [
    {
      id: 1,
      from: "@vitalik.eth",
      to: "@dan.eth",
      tag: "Solidity Mentor",
      message:
        "Incredible depth in smart contract security. Helped me avoid major pitfalls.",
      timestamp: "2 hours ago",
      onchain: true,
    },
    {
      id: 2,
      from: "@priyanka.dev",
      to: "@alex.builder",
      tag: "Great Dev",
      message: "Ships quality code consistently. Great collaboration partner.",
      timestamp: "5 hours ago",
      onchain: true,
    },
    {
      id: 3,
      from: "@sarah.design",
      to: "@mike.ui",
      tag: "UI/UX Expert",
      message:
        "Amazing eye for design and user experience. Transforms complex flows into intuitive interfaces.",
      timestamp: "1 day ago",
      onchain: true,
    },
  ];

  const mockScheduledCasts: ScheduledCast[] = [
    {
      id: 1,
      content: "Just shipped a new feature for cross-chain swaps! 🚀",
      channels: ["/dev", "/build"],
      time: "Today 2:00 PM",
      status: "scheduled",
    },
    {
      id: 2,
      content:
        "Thoughts on the latest EIP proposal? Curious about community feedback.",
      channels: ["/crypto", "/dev"],
      time: "Tomorrow 10:00 AM",
      status: "scheduled",
    },
  ];

  const handleEndorse = () => {
    if (selectedProfile && selectedTag && endorsementText) {
      console.log("Creating endorsement:", {
        selectedProfile,
        selectedTag,
        endorsementText,
      });
      // Reset form
      setSelectedProfile(null);
      setSelectedTag("");
      setEndorsementText("");
    }
  };

  const handleScheduleCast = () => {
    if (castContent && selectedChannels.length > 0 && scheduledTime) {
      console.log("Scheduling cast:", {
        castContent,
        selectedChannels,
        scheduledTime,
      });
      // Reset form
      setCastContent("");
      setSelectedChannels([]);
      setScheduledTime("");
    }
  };

  const toggleChannel = (channelId: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId],
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "dashboard" && (
          <Dashboard
            mockEndorsements={mockEndorsements}
            mockScheduledCasts={mockScheduledCasts}
          />
        )}

        {activeTab === "endorse" && (
          <EndorseTab
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            endorsementText={endorsementText}
            setEndorsementText={setEndorsementText}
            endorsementTags={endorsementTags}
            handleEndorse={handleEndorse}
          />
        )}

        {activeTab === "schedule" && (
          <ScheduleTab
            castContent={castContent}
            setCastContent={setCastContent}
            selectedChannels={selectedChannels}
            toggleChannel={toggleChannel}
            scheduledTime={scheduledTime}
            setScheduledTime={setScheduledTime}
            handleScheduleCast={handleScheduleCast}
            channels={channels}
          />
        )}
      </main>
    </div>
  );
};

export default CastCred;

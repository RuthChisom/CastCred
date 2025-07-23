// "use client";

// import React, { useState } from "react";
// import {
//   Star,
//   Calendar,
//   Users,
//   Award,
//   Plus,
//   Send,
//   Clock,
//   Hash,
//   TrendingUp,
//   User,
//   Search,
//   Filter,
//   Settings,
//   Bell,
//   Shield,
//   Zap,
//   BookOpen,
//   Code,
//   Palette,
//   Briefcase,
// } from "lucide-react";

// // Types
// interface EndorsementTag {
//   id: string;
//   label: string;
//   icon: React.ComponentType<{ className?: string }>;
//   color: string;
// }

// interface Channel {
//   id: string;
//   name: string;
//   members: string;
//   growth: string;
// }

// interface Endorsement {
//   id: number;
//   from: string;
//   to: string;
//   tag: string;
//   message: string;
//   timestamp: string;
//   onchain: boolean;
// }

// interface ScheduledCast {
//   id: number;
//   content: string;
//   channels: string[];
//   time: string;
//   status: string;
// }

// interface StatCard {
//   label: string;
//   value: string;
//   change: string;
//   icon: React.ComponentType<{ className?: string }>;
//   color: string;
// }

// interface Tab {
//   id: string;
//   label: string;
//   icon: React.ComponentType<{ className?: string }>;
// }

// // Header Component
// const Header: React.FC = () => {
//   return (
//     <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//               <Shield className="w-5 h-5 text-white" />
//             </div>
//             <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               CastCred
//             </h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-gray-400 hover:text-white transition-colors">
//               <Bell className="w-5 h-5" />
//             </button>
//             <button className="p-2 text-gray-400 hover:text-white transition-colors">
//               <Settings className="w-5 h-5" />
//             </button>
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // Navigation Component
// interface NavigationProps {
//   activeTab: string;
//   onTabChange: (tabId: string) => void;
// }

// const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
//   const tabs: Tab[] = [
//     { id: "dashboard", label: "Dashboard", icon: TrendingUp },
//     { id: "endorse", label: "Endorse", icon: Award },
//     { id: "schedule", label: "Schedule", icon: Calendar },
//     { id: "reputation", label: "Reputation", icon: Star },
//   ];

//   return (
//     <nav className="border-b border-gray-800 bg-gray-900/60 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex space-x-8">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => onTabChange(tab.id)}
//               className={`flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium transition-colors ${
//                 activeTab === tab.id
//                   ? "border-purple-500 text-purple-400"
//                   : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
//               }`}
//             >
//               <tab.icon className="w-4 h-4" />
//               <span>{tab.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Stat Card Component
// interface StatCardProps extends StatCard {}

// const StatCardComponent: React.FC<StatCardProps> = ({
//   label,
//   value,
//   change,
//   icon: Icon,
//   color,
// }) => {
//   return (
//     <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm text-gray-400">{label}</p>
//           <p className="text-2xl font-bold mt-1">{value}</p>
//           <p className={`text-sm mt-1 ${color}`}>{change}</p>
//         </div>
//         <Icon className="w-8 h-8 text-gray-400" />
//       </div>
//     </div>
//   );
// };

// // Endorsement Card Component
// interface EndorsementCardProps {
//   endorsement: Endorsement;
// }

// const EndorsementCard: React.FC<EndorsementCardProps> = ({ endorsement }) => {
//   return (
//     <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/50">
//       <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center space-x-2 mb-1">
//           <span className="font-medium text-sm">{endorsement.from}</span>
//           <span className="text-gray-400 text-sm">→</span>
//           <span className="font-medium text-sm">{endorsement.to}</span>
//           <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
//             {endorsement.tag}
//           </span>
//         </div>
//         <p className="text-sm text-gray-300">{endorsement.message}</p>
//         <div className="flex items-center space-x-2 mt-2">
//           <span className="text-xs text-gray-500">{endorsement.timestamp}</span>
//           <div className="flex items-center space-x-1">
//             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//             <span className="text-xs text-gray-500">Onchain</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Scheduled Cast Card Component
// interface ScheduledCastCardProps {
//   cast: ScheduledCast;
// }

// const ScheduledCastCard: React.FC<ScheduledCastCardProps> = ({ cast }) => {
//   return (
//     <div className="p-3 rounded-lg bg-gray-800/50">
//       <p className="text-sm mb-2">{cast.content}</p>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           {cast.channels.map((channel) => (
//             <span
//               key={channel}
//               className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
//             >
//               {channel}
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center space-x-2">
//           <Clock className="w-3 h-3 text-gray-400" />
//           <span className="text-xs text-gray-400">{cast.time}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Dashboard Component
// interface DashboardProps {
//   endorsements: Endorsement[];
//   scheduledCasts: ScheduledCast[];
// }

// const Dashboard: React.FC<DashboardProps> = ({
//   endorsements,
//   scheduledCasts,
// }) => {
//   const stats: StatCard[] = [
//     {
//       label: "Endorsements Received",
//       value: "47",
//       change: "+12%",
//       icon: Award,
//       color: "text-green-400",
//     },
//     {
//       label: "Endorsements Given",
//       value: "23",
//       change: "+8%",
//       icon: Users,
//       color: "text-blue-400",
//     },
//     {
//       label: "Scheduled Casts",
//       value: "12",
//       change: "+4%",
//       icon: Calendar,
//       color: "text-purple-400",
//     },
//     {
//       label: "Trust Score",
//       value: "8.7",
//       change: "+0.3",
//       icon: Star,
//       color: "text-yellow-400",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <StatCardComponent key={index} {...stat} />
//         ))}
//       </div>

//       {/* Recent Activity */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Recent Endorsements */}
//         <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
//           <div className="p-6 border-b border-gray-700">
//             <h3 className="text-lg font-semibold flex items-center space-x-2">
//               <Award className="w-5 h-5 text-purple-400" />
//               <span>Recent Endorsements</span>
//             </h3>
//           </div>
//           <div className="p-6 space-y-4">
//             {endorsements.map((endorsement) => (
//               <EndorsementCard key={endorsement.id} endorsement={endorsement} />
//             ))}
//           </div>
//         </div>

//         {/* Scheduled Casts */}
//         <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
//           <div className="p-6 border-b border-gray-700">
//             <h3 className="text-lg font-semibold flex items-center space-x-2">
//               <Calendar className="w-5 h-5 text-blue-400" />
//               <span>Upcoming Casts</span>
//             </h3>
//           </div>
//           <div className="p-6 space-y-4">
//             {scheduledCasts.map((cast) => (
//               <ScheduledCastCard key={cast.id} cast={cast} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Endorsement Tag Component
// interface EndorsementTagButtonProps {
//   tag: EndorsementTag;
//   isSelected: boolean;
//   onSelect: (tagId: string) => void;
// }

// const EndorsementTagButton: React.FC<EndorsementTagButtonProps> = ({
//   tag,
//   isSelected,
//   onSelect,
// }) => {
//   return (
//     <button
//       onClick={() => onSelect(tag.id)}
//       className={`p-3 rounded-lg border-2 transition-all ${
//         isSelected
//           ? "border-purple-500 bg-purple-500/10"
//           : "border-gray-600 hover:border-gray-500 bg-gray-700/50"
//       }`}
//     >
//       <tag.icon className="w-6 h-6 mx-auto mb-2 text-gray-300" />
//       <span className="text-sm font-medium">{tag.label}</span>
//     </button>
//   );
// };

// // Endorse Tab Component
// interface EndorseTabProps {
//   selectedProfile: string | null;
//   setSelectedProfile: (profile: string | null) => void;
//   selectedTag: string;
//   setSelectedTag: (tag: string) => void;
//   endorsementText: string;
//   setEndorsementText: (text: string) => void;
//   onEndorse: () => void;
// }

// const EndorseTab: React.FC<EndorseTabProps> = ({
//   selectedProfile,
//   setSelectedProfile,
//   selectedTag,
//   setSelectedTag,
//   endorsementText,
//   setEndorsementText,
//   onEndorse,
// }) => {
//   const endorsementTags: EndorsementTag[] = [
//     { id: "dev", label: "Great Dev", icon: Code, color: "bg-blue-500" },
//     {
//       id: "mentor",
//       label: "Solidity Mentor",
//       icon: BookOpen,
//       color: "bg-purple-500",
//     },
//     {
//       id: "designer",
//       label: "UI/UX Expert",
//       icon: Palette,
//       color: "bg-pink-500",
//     },
//     {
//       id: "leader",
//       label: "Community Leader",
//       icon: Users,
//       color: "bg-green-500",
//     },
//     { id: "builder", label: "Ship Fast", icon: Zap, color: "bg-yellow-500" },
//     {
//       id: "advisor",
//       label: "Strategic Advisor",
//       icon: Briefcase,
//       color: "bg-indigo-500",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold mb-2">Endorse a Builder</h2>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           Build trust onchain by endorsing other Farcaster users. Your
//           endorsements help create a reputation-aware network.
//         </p>
//       </div>

//       <div className="max-w-2xl mx-auto">
//         <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
//           {/* Profile Search */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Who would you like to endorse?
//             </label>
//             <div className="relative">
//               <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by username or ENS..."
//                 className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
//                 value={selectedProfile || ""}
//                 onChange={(e) => setSelectedProfile(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Endorsement Tags */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-300 mb-3">
//               Select an endorsement tag
//             </label>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {endorsementTags.map((tag) => (
//                 <EndorsementTagButton
//                   key={tag.id}
//                   tag={tag}
//                   isSelected={selectedTag === tag.id}
//                   onSelect={setSelectedTag}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Endorsement Message */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Add a personal message
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Why do you endorse this person? Share specific examples..."
//               className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
//               value={endorsementText}
//               onChange={(e) => setEndorsementText(e.target.value)}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={onEndorse}
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
//           >
//             <Award className="w-5 h-5" />
//             <span>Create Onchain Endorsement</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Channel Button Component
// interface ChannelButtonProps {
//   channel: Channel;
//   isSelected: boolean;
//   onToggle: (channelId: string) => void;
// }

// const ChannelButton: React.FC<ChannelButtonProps> = ({
//   channel,
//   isSelected,
//   onToggle,
// }) => {
//   return (
//     <button
//       onClick={() => onToggle(channel.id)}
//       className={`p-3 rounded-lg border-2 transition-all text-left ${
//         isSelected
//           ? "border-blue-500 bg-blue-500/10"
//           : "border-gray-600 hover:border-gray-500 bg-gray-700/50"
//       }`}
//     >
//       <div className="flex items-center space-x-2 mb-1">
//         <Hash className="w-4 h-4" />
//         <span className="font-medium">{channel.name}</span>
//       </div>
//       <div className="text-xs text-gray-400">
//         <span>{channel.members} members</span>
//         <span className="text-green-400 ml-2">{channel.growth}</span>
//       </div>
//     </button>
//   );
// };

// // Schedule Tab Component
// interface ScheduleTabProps {
//   castContent: string;
//   setCastContent: (content: string) => void;
//   selectedChannels: string[];
//   toggleChannel: (channelId: string) => void;
//   scheduledTime: string;
//   setScheduledTime: (time: string) => void;
//   onScheduleCast: () => void;
// }

// const ScheduleTab: React.FC<ScheduleTabProps> = ({
//   castContent,
//   setCastContent,
//   selectedChannels,
//   toggleChannel,
//   scheduledTime,
//   setScheduledTime,
//   onScheduleCast,
// }) => {
//   const channels: Channel[] = [
//     { id: "dev", name: "/dev", members: "12.4k", growth: "+15%" },
//     { id: "nft", name: "/nft", members: "8.7k", growth: "+8%" },
//     { id: "build", name: "/build", members: "15.2k", growth: "+22%" },
//     { id: "crypto", name: "/crypto", members: "25.1k", growth: "+12%" },
//     { id: "design", name: "/design", members: "6.3k", growth: "+18%" },
//     { id: "dao", name: "/dao", members: "4.9k", growth: "+25%" },
//   ];

//   return (
//     <div className="space-y-8">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold mb-2">Schedule Your Casts</h2>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           Optimize your content across multiple Farcaster channels. Schedule
//           posts to reach the right communities at the right time.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Scheduling Form */}
//         <div className="lg:col-span-2">
//           <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
//             {/* Cast Content */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 What's on your mind?
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Share your thoughts, updates, or questions..."
//                 className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
//                 value={castContent}
//                 onChange={(e) => setCastContent(e.target.value)}
//               />
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-sm text-gray-500">
//                   {castContent.length}/280
//                 </span>
//               </div>
//             </div>

//             {/* Channel Selection */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-300 mb-3">
//                 Select channels
//               </label>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                 {channels.map((channel) => (
//                   <ChannelButton
//                     key={channel.id}
//                     channel={channel}
//                     isSelected={selectedChannels.includes(channel.id)}
//                     onToggle={toggleChannel}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Schedule Time */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 When to post?
//               </label>
//               <input
//                 type="datetime-local"
//                 className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
//                 value={scheduledTime}
//                 onChange={(e) => setScheduledTime(e.target.value)}
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={onScheduleCast}
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
//             >
//               <Send className="w-5 h-5" />
//               <span>Schedule Cast</span>
//             </button>
//           </div>
//         </div>

//         {/* Channel Insights Placeholder */}
//         <div className="space-y-6">
//           <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
//             <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
//               <TrendingUp className="w-5 h-5 text-green-400" />
//               <span>Channel Insights</span>
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Insights and analytics will be displayed here to help optimize
//               your posting schedule.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main CastCred Component
// const CastCred: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>("dashboard");
//   const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
//   const [endorsementText, setEndorsementText] = useState<string>("");
//   const [selectedTag, setSelectedTag] = useState<string>("");
//   const [castContent, setCastContent] = useState<string>("");
//   const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
//   const [scheduledTime, setScheduledTime] = useState<string>("");

//   const mockEndorsements: Endorsement[] = [
//     {
//       id: 1,
//       from: "@vitalik.eth",
//       to: "@dan.eth",
//       tag: "Solidity Mentor",
//       message:
//         "Incredible depth in smart contract security. Helped me avoid major pitfalls.",
//       timestamp: "2 hours ago",
//       onchain: true,
//     },
//     {
//       id: 2,
//       from: "@priyanka.dev",
//       to: "@alex.builder",
//       tag: "Great Dev",
//       message: "Ships quality code consistently. Great collaboration partner.",
//       timestamp: "5 hours ago",
//       onchain: true,
//     },
//     {
//       id: 3,
//       from: "@sarah.design",
//       to: "@mike.ui",
//       tag: "UI/UX Expert",
//       message:
//         "Amazing eye for design and user experience. Transforms complex flows into intuitive interfaces.",
//       timestamp: "1 day ago",
//       onchain: true,
//     },
//   ];

//   const mockScheduledCasts: ScheduledCast[] = [
//     {
//       id: 1,
//       content: "Just shipped a new feature for cross-chain swaps! 🚀",
//       channels: ["/dev", "/build"],
//       time: "Today 2:00 PM",
//       status: "scheduled",
//     },
//     {
//       id: 2,
//       content:
//         "Thoughts on the latest EIP proposal? Curious about community feedback.",
//       channels: ["/crypto", "/dev"],
//       time: "Tomorrow 10:00 AM",
//       status: "scheduled",
//     },
//   ];

//   const handleEndorse = (): void => {
//     if (selectedProfile && selectedTag && endorsementText) {
//       console.log("Creating endorsement:", {
//         selectedProfile,
//         selectedTag,
//         endorsementText,
//       });
//       // Reset form
//       setSelectedProfile(null);
//       setSelectedTag("");
//       setEndorsementText("");
//     }
//   };

//   const handleScheduleCast = (): void => {
//     if (castContent && selectedChannels.length > 0 && scheduledTime) {
//       console.log("Scheduling cast:", {
//         castContent,
//         selectedChannels,
//         scheduledTime,
//       });
//       // Reset form
//       setCastContent("");
//       setSelectedChannels([]);
//       setScheduledTime("");
//     }
//   };

//   const toggleChannel = (channelId: string): void => {
//     setSelectedChannels((prev) =>
//       prev.includes(channelId)
//         ? prev.filter((id) => id !== channelId)
//         : [...prev, channelId],
//     );
//   };

//   const renderTabContent = (): JSX.Element => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <Dashboard
//             endorsements={mockEndorsements}
//             scheduledCasts={mockScheduledCasts}
//           />
//         );
//       case "endorse":
//         return (
//           <EndorseTab
//             selectedProfile={selectedProfile}
//             setSelectedProfile={setSelectedProfile}
//             selectedTag={selectedTag}
//             setSelectedTag={setSelectedTag}
//             endorsementText={endorsementText}
//             setEndorsementText={setEndorsementText}
//             onEndorse={handleEndorse}
//           />
//         );
//       case "schedule":
//         return (
//           <ScheduleTab
//             castContent={castContent}
//             setCastContent={setCastContent}
//             selectedChannels={selectedChannels}
//             toggleChannel={toggleChannel}
//             scheduledTime={scheduledTime}
//             setScheduledTime={setScheduledTime}
//             onScheduleCast={handleScheduleCast}
//           />
//         );
//       case "reputation":
//         return (
//           <div className="text-center py-16">
//             <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <h2 className="text-2xl font-bold mb-2">Reputation Dashboard</h2>
//             <p className="text-gray-400">
//               Coming soon - Track your onchain reputation and trust metrics.
//             </p>
//           </div>
//         );
//       default:
//         return (
//           <Dashboard
//             endorsements={mockEndorsements}
//             scheduledCasts={mockScheduledCasts}
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <Header />
//       <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {renderTabContent()}
//       </main>
//     </div>
//   );
// };

// export default CastCred;

"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Dashboard } from "./Dashboard";
import { EndorseTab } from "./EndorseTab";
import { ScheduleTab } from "./ScheduleTab";
import { Reputation } from "./Reputation";

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

        {activeTab === "reputation" && <Reputation />}
      </main>
    </div>
  );
};

export default CastCred;

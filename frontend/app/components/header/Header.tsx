// import { Shield, Bell, Settings } from "lucide-react";

// export const Header = () => {
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

import { Shield, Bell, Settings2, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DropdownPanel } from "./DropdownPanel";
import { Notifications } from "./Notifications";
import { Settings } from "./Settings";
import { UserProfile } from "./UserProfile";

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
              CastCred
            </h1>
          </Link>

          <div className="flex items-center space-x-4 relative">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("notifications")}
                className={`p-2 rounded-full transition-colors ${activeDropdown === "notifications" ? "bg-purple-500/20 text-purple-400" : "text-gray-400 hover:text-white"}`}
              >
                <Bell className="w-5 h-5" />
              </button>
              {activeDropdown === "notifications" && (
                <DropdownPanel
                  title="Notifications"
                  onClose={() => setActiveDropdown(null)}
                  position="right-0"
                >
                  <Notifications />
                </DropdownPanel>
              )}
            </div>

            {/* Settings */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("settings")}
                className={`p-2 rounded-full transition-colors ${activeDropdown === "settings" ? "bg-purple-500/20 text-purple-400" : "text-gray-400 hover:text-white"}`}
              >
                <Settings2 className="w-5 h-5" />
              </button>
              {activeDropdown === "settings" && (
                <DropdownPanel
                  title="Settings"
                  onClose={() => setActiveDropdown(null)}
                  position="right-0"
                >
                  <Settings />
                </DropdownPanel>
              )}
            </div>

            {/* User */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("user")}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                <User className="w-4 h-4 text-white" />
              </button>
              {activeDropdown === "user" && (
                <DropdownPanel
                  title="User Profile"
                  onClose={() => setActiveDropdown(null)}
                  position="right-0"
                >
                  <UserProfile />
                </DropdownPanel>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

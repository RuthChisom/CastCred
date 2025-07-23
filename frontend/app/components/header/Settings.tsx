import { ChevronDown, Bell, Globe, Shield, Palette } from "lucide-react";
import { SettingItem } from "../../types/headerTypes";
// import { Globe } from "./Icons"; // Create an Icons.tsx for custom icons

const settings: SettingItem[] = [
  { id: "theme", label: "Theme", current: "Dark", icon: Palette },
  {
    id: "notifications",
    label: "Notifications",
    current: "Enabled",
    icon: Bell,
  },
  { id: "privacy", label: "Privacy", current: "Public", icon: Shield },
  { id: "language", label: "Language", current: "English", icon: Globe },
];

export const Settings = () => {
  return (
    <div className="space-y-4">
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <setting.icon className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">
                {setting.label}
              </h4>
              <p className="text-xs text-gray-400">{setting.current}</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      ))}
      <div className="pt-2 border-t border-gray-700">
        <button className="w-full py-2 text-center text-sm text-red-400 hover:text-red-300">
          Disconnect Wallet
        </button>
      </div>
    </div>
  );
};

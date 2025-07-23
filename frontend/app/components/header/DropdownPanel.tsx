import { X } from "lucide-react";
import { DropdownPanelProps } from "../../types/headerTypes";

export const DropdownPanel = ({
  title,
  children,
  onClose,
  position = "right-0",
}: DropdownPanelProps) => {
  return (
    <div
      className={`absolute ${position} mt-2 w-72 rounded-xl shadow-lg bg-gray-800 border border-gray-700 z-50 overflow-hidden`}
    >
      <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/80 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};

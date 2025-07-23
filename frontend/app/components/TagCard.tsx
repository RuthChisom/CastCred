import { EndorsementTag } from "../types";

interface TagCardProps extends EndorsementTag {
  selected: boolean;
  onClick: () => void;
}

export const TagCard = ({
  // id,
  label,
  icon: Icon,
  // color,
  selected,
  onClick,
}: TagCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg border-2 transition-all ${
        selected
          ? "border-purple-500 bg-purple-500/10"
          : "border-gray-600 hover:border-gray-500 bg-gray-700/50"
      }`}
    >
      <Icon className="w-6 h-6 mx-auto mb-2 text-gray-300" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

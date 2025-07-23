import { Award, Search } from "lucide-react";
import { TagCard } from "./TagCard";
import { EndorsementTag } from "../types";

interface EndorseTabProps {
  selectedProfile: string | null;
  setSelectedProfile: (profile: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  endorsementText: string;
  setEndorsementText: (text: string) => void;
  endorsementTags: EndorsementTag[];
  handleEndorse: () => void;
}

export const EndorseTab = ({
  selectedProfile,
  setSelectedProfile,
  selectedTag,
  setSelectedTag,
  endorsementText,
  setEndorsementText,
  endorsementTags,
  handleEndorse,
}: EndorseTabProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Endorse a Builder</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Build trust onchain by endorsing other Farcaster users. Your
          endorsements help create a reputation-aware network.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          {/* Profile Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Who would you like to endorse?
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by username or ENS..."
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                value={selectedProfile || ""}
                onChange={(e) => setSelectedProfile(e.target.value)}
              />
            </div>
          </div>

          {/* Endorsement Tags */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Select an endorsement tag
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {endorsementTags.map((tag) => (
                <TagCard
                  key={tag.id}
                  {...tag}
                  selected={selectedTag === tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                />
              ))}
            </div>
          </div>

          {/* Endorsement Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Add a personal message
            </label>
            <textarea
              rows={4}
              placeholder="Why do you endorse this person? Share specific examples..."
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
              value={endorsementText}
              onChange={(e) => setEndorsementText(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleEndorse}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Award className="w-5 h-5" />
            <span>Create Onchain Endorsement</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// CreatePost.tsx
"use client";
import Image from "next/image";

import React, { useRef, useState } from "react";
import { Send, Wallet, Image as ImageIcon, Video } from "lucide-react";

interface CreatePostProps {
  newPost: string;
  setNewPost: (val: string) => void;
  createPost: (mediaUrl?: string, mediaType?: "image" | "video") => void;
  loading: boolean;
  connected: boolean;
  connectWallet: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({
  newPost,
  setNewPost,
  createPost,
  loading,
  connected,
  connectWallet,
}) => {
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      setMediaPreview(url);
      setMediaType("image");
    } else if (file.type.startsWith("video/")) {
      setMediaPreview(url);
      setMediaType("video");
    } else {
      alert("Only image or video files are supported.");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleCreatePost = () => {
    createPost(mediaPreview ?? undefined, mediaType ?? undefined);
    setMediaPreview(null);
    // Reset preview

    setMediaType(null);
    // Reset type
  };

  if (!connected) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Connect Your Wallet
        </h3>
        <p className="text-gray-600 mb-6">
          Connect your wallet to start sharing your financial gratitude and
          earning rewards from the community.
        </p>
        <button
          onClick={connectWallet}
          disabled={loading}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
        >
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Share Your Daily Gratitude
      </h2>
      <div className="space-y-4">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What are you financially grateful for today?"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          rows={4}
          maxLength={500}
        />
        <div className="text-sm text-gray-500">
          {newPost.length}/500 characters
        </div>

        {/* Media preview */}
        {mediaPreview && (
          <div className="mb-4">
            {mediaType === "image" ? (
              // <img
              //   src={mediaPreview}
              //   alt="Preview"
              //   className="max-h-60 rounded-lg mx-auto"
              // />

              <div className="relative max-h-60 w-full mx-auto rounded-lg overflow-hidden">
                <Image
                  src={mediaPreview}
                  alt="Preview"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            ) : (
              <video
                src={mediaPreview}
                controls
                className="max-h-60 rounded-lg mx-auto"
              />
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            onClick={triggerFileInput}
            type="button"
            className="flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-800 transition"
          >
            <ImageIcon className="w-4 h-4" />
            <Video className="w-4 h-4" />
            <span>Attach Image/Video</span>
          </button>

          <input
            type="file"
            accept="image/*,video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />

          <button
            onClick={handleCreatePost}
            disabled={!newPost.trim() || loading}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "Posting..." : "Share Gratitude"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

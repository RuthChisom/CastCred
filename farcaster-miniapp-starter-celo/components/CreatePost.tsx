// // components/CreatePost.tsx
// import React from "react";
// import { Send } from "lucide-react";

// interface CreatePostProps {
//   newPost: string;
//   onPostChange: (value: string) => void;
//   onCreatePost: () => void;
//   loading: boolean;
// }

// const CreatePost: React.FC<CreatePostProps> = ({
//   newPost,
//   onPostChange,
//   onCreatePost,
//   loading,
// }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//       <h2 className="text-xl font-semibold mb-4 text-gray-900">
//         Share Your Daily Gratitude
//       </h2>
//       <div className="space-y-4">
//         <textarea
//           value={newPost}
//           onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//             onPostChange(e.target.value)
//           }
//           placeholder="What are you financially grateful for today? Share your story of abundance, progress, or financial blessings..."
//           className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//           rows={4}
//         />
//         <div className="flex items-center justify-between">
//           <div className="text-sm text-gray-500">
//             {newPost.length}/500 characters
//           </div>
//           <button
//             onClick={onCreatePost}
//             disabled={!newPost.trim() || loading}
//             className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 flex items-center space-x-2"
//           >
//             <Send className="w-4 h-4" />
//             <span>{loading ? "Posting..." : "Share Gratitude"}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;
"use client";

import React from "react";
import { Send, Wallet } from "lucide-react";

interface CreatePostProps {
  newPost: string;
  setNewPost: (val: string) => void;
  createPost: () => void;
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
          placeholder="What are you financially grateful for today? Share your story of abundance, progress, or financial blessings..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          rows={4}
          maxLength={500}
        />
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {newPost.length}/500 characters
          </div>
          <button
            onClick={createPost}
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

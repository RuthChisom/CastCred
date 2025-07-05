// components/LoadingOverlay.tsx
import React from "react";

interface LoadingOverlayProps {
  loading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 flex items-center space-x-3">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
        <span className="text-gray-900">Processing...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;

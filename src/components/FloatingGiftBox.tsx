
import React from 'react';

interface FloatingGiftBoxProps {
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const FloatingGiftBox: React.FC<FloatingGiftBoxProps> = ({ size = 'md', delay = 0 }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} gift-box-3d`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gift Box Base */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg border border-gray-100">
        {/* Ribbon Horizontal */}
        <div className="absolute top-1/2 left-0 right-0 h-3 bg-tiffany-500 transform -translate-y-1/2"></div>
        {/* Ribbon Vertical */}
        <div className="absolute top-0 bottom-0 left-1/2 w-3 bg-tiffany-500 transform -translate-x-1/2"></div>
        {/* Bow */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-3 bg-tiffany-600 rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-tiffany-700 rounded"></div>
        </div>
      </div>
      
      {/* Sparkles */}
      <div className="absolute -top-2 -right-2 w-1 h-1 bg-tiffany-400 rounded-full animate-sparkle"></div>
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-tiffany-300 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 right-0 w-1 h-1 bg-tiffany-500 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default FloatingGiftBox;

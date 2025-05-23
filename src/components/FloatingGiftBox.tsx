
import React from 'react';

interface FloatingGiftBoxProps {
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const FloatingGiftBox: React.FC<FloatingGiftBoxProps> = ({ size = 'md', delay = 0 }) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-28 h-28'
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} gift-box-3d`}
      style={{ 
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))'
      }}
    >
      {/* Enhanced 3D Gift Box Base */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg border border-gray-100 transform perspective-800 rotate-y-6 rotate-x-2">
        {/* Ribbon Horizontal - Improved styling */}
        <div className="absolute top-1/2 left-0 right-0 h-4 bg-tiffany-500 transform -translate-y-1/2 shadow-sm"></div>
        
        {/* Ribbon Vertical - Improved styling */}
        <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-tiffany-500 transform -translate-x-1/2 shadow-sm"></div>
        
        {/* Enhanced 3D Bow */}
        <div className="absolute -top-3 -right-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-8 h-5 bg-tiffany-600 rounded-full shadow-sm"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-4 bg-tiffany-500 rounded-full"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-tiffany-700 rounded-full"></div>
        </div>
      </div>
      
      {/* Enhanced Sparkles */}
      <div className="absolute -top-3 -right-2 w-2 h-2 bg-tiffany-400 rounded-full animate-sparkle"></div>
      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-tiffany-300 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-tiffany-500 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-2 right-3 w-1 h-1 bg-tiffany-200 rounded-full animate-sparkle" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute -top-3 left-0 w-1.5 h-1.5 bg-tiffany-400 rounded-full animate-sparkle" style={{ animationDelay: '2.2s' }}></div>
    </div>
  );
};

export default FloatingGiftBox;

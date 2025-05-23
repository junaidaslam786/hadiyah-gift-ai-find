
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
      className={`relative ${sizeClasses[size]} float-animation`}
      style={{ 
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))'
      }}
    >
      {/* Base Box */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform-gpu perspective-1000 rotate-x-4 rotate-y-12" 
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
        {/* Front Face */}
        <div className="absolute inset-0 border border-gray-100 rounded-lg bg-gradient-to-br from-white to-gray-50"></div>
        
        {/* Top Face */}
        <div className="absolute top-0 left-0 right-0 h-1/2 origin-bottom transform-gpu -rotate-x-40 bg-white rounded-t-lg border-t border-l border-r border-gray-100"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        ></div>
        
        {/* Right Face */}
        <div className="absolute top-0 right-0 bottom-0 w-1/2 origin-left transform-gpu rotate-y-40 bg-gray-50 border-t border-r border-b border-gray-100 rounded-r-lg"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        ></div>
        
        {/* Ribbon - Horizontal */}
        <div className="absolute top-1/2 left-0 right-0 h-4 bg-tiffany-500 transform-gpu -translate-y-1/2 shadow-sm z-10"
          style={{
            transformStyle: 'preserve-3d',
          }}>
          {/* Ribbon Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiffany-400 to-transparent opacity-50"></div>
        </div>
        
        {/* Ribbon - Vertical */}
        <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-tiffany-500 transform-gpu -translate-x-1/2 shadow-sm z-10"
          style={{
            transformStyle: 'preserve-3d',
          }}>
          {/* Ribbon Shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tiffany-400 to-transparent opacity-50"></div>
        </div>
        
        {/* 3D Bow */}
        <div className="absolute -top-4 left-1/2 transform-gpu -translate-x-1/2 z-20"
          style={{
            transformStyle: 'preserve-3d',
          }}>
          {/* Base of bow */}
          <div className="relative w-10 h-6 bg-tiffany-600 rounded-full shadow-md"
            style={{
              transformStyle: 'preserve-3d',
            }}>
            {/* Left bow loop */}
            <div className="absolute top-1/2 -left-2 w-8 h-6 bg-tiffany-500 rounded-full transform-gpu -translate-y-1/2 rotate-z-15 shadow-sm"
              style={{
                transformStyle: 'preserve-3d',
              }}></div>
            
            {/* Right bow loop */}
            <div className="absolute top-1/2 -right-2 w-8 h-6 bg-tiffany-500 rounded-full transform-gpu -translate-y-1/2 -rotate-z-15 shadow-sm"
              style={{
                transformStyle: 'preserve-3d',
              }}></div>
            
            {/* Center knot */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-tiffany-700 rounded-full transform-gpu -translate-x-1/2 -translate-y-1/2 shadow-sm"
              style={{
                transformStyle: 'preserve-3d',
              }}></div>
              
            {/* Ribbon dangling 1 */}
            <div className="absolute -bottom-2 left-1/4 w-3 h-5 bg-tiffany-500 transform-gpu skew-x-10 origin-top"
              style={{
                transformStyle: 'preserve-3d',
              }}></div>
              
            {/* Ribbon dangling 2 */}
            <div className="absolute -bottom-3 right-1/4 w-3 h-7 bg-tiffany-500 transform-gpu -skew-x-10 origin-top"
              style={{
                transformStyle: 'preserve-3d',
              }}></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Sparkles with better positioning and animation */}
      <div className="absolute -top-3 -right-2 w-2 h-2 bg-tiffany-400 rounded-full animate-sparkle"></div>
      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-tiffany-300 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-tiffany-500 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-2 right-3 w-1 h-1 bg-tiffany-200 rounded-full animate-sparkle" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute -top-3 left-0 w-1.5 h-1.5 bg-tiffany-400 rounded-full animate-sparkle" style={{ animationDelay: '2.2s' }}></div>
      
      {/* Additional sparkles */}
      <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-tiffany-300 rounded-full animate-sparkle" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute bottom-1/3 -left-2 w-2 h-2 bg-tiffany-200 rounded-full animate-sparkle" style={{ animationDelay: '1.3s' }}></div>
      <div className="absolute -top-4 left-1/3 w-1 h-1 bg-tiffany-300 rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default FloatingGiftBox;

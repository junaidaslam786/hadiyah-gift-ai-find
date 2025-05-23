
import React from 'react';

interface FloatingGiftBoxProps {
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  rotation?: number;
}

const FloatingGiftBox: React.FC<FloatingGiftBoxProps> = ({ 
  size = 'md', 
  delay = 0,
  rotation = 0 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} float-animation`}
      style={{ 
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))',
        transform: `rotate(${rotation}deg)`
      }}
    >
      {/* Gift Box */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-xl" 
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}>
        
        {/* Box Top */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-white border border-gray-100 rounded-t-lg"
          style={{
            transformOrigin: 'bottom',
            transform: 'rotateX(0deg) translateZ(2px)',
            boxShadow: '0 -2px 5px rgba(0,0,0,0.05)'
          }}
        ></div>
        
        {/* Box Bottom */}
        <div className="absolute bottom-0 left-0 right-0 top-[30%] bg-white border border-gray-100 rounded-b-lg"></div>
        
        {/* Ribbon - Vertical */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[12%] bg-tiffany-500 transform -translate-x-1/2"
          style={{
            zIndex: 10,
            boxShadow: '0 0 5px rgba(129, 216, 208, 0.3)'
          }}>
          {/* Ribbon Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-tiffany-600 via-tiffany-400 to-tiffany-500 opacity-50"></div>
        </div>
        
        {/* Ribbon - Horizontal */}
        <div className="absolute top-[30%] left-0 right-0 h-[12%] bg-tiffany-500 transform -translate-y-1/2"
          style={{
            zIndex: 11,
            boxShadow: '0 0 5px rgba(129, 216, 208, 0.3)'
          }}>
          {/* Ribbon Shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-tiffany-600 via-tiffany-400 to-tiffany-500 opacity-50"></div>
        </div>
        
        {/* 3D Bow - Similar to reference image */}
        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-[40%] z-20"
          style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Bow loops */}
          <div className="relative">
            {/* Left loop */}
            <div className="absolute -left-6 w-8 h-6 bg-tiffany-500 rounded-full transform -rotate-45"
              style={{ 
                boxShadow: 'inset -1px 1px 2px rgba(0,0,0,0.1)',
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-20deg) rotateZ(-30deg)' 
              }}>
              <div className="absolute inset-1 bg-tiffany-400 rounded-full opacity-50"></div>
            </div>
            
            {/* Right loop */}
            <div className="absolute -right-6 w-8 h-6 bg-tiffany-500 rounded-full transform rotate-45"
              style={{ 
                boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)',
                transformStyle: 'preserve-3d',
                transform: 'rotateY(20deg) rotateZ(30deg)'
              }}>
              <div className="absolute inset-1 bg-tiffany-400 rounded-full opacity-50"></div>
            </div>
            
            {/* Bow center knot */}
            <div className="relative w-6 h-6 bg-tiffany-600 rounded-sm z-30"
              style={{ 
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(5deg)'
              }}>
              <div className="absolute inset-1 bg-tiffany-500 rounded-sm opacity-50"></div>
            </div>
            
            {/* Ribbon dangling ends */}
            <div className="absolute -bottom-4 -left-1 w-2 h-6 bg-tiffany-500 transform skew-x-15 origin-top"
              style={{ boxShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}></div>
            <div className="absolute -bottom-5 right-0 w-2 h-7 bg-tiffany-500 transform -skew-x-15 origin-top"
              style={{ boxShadow: '-1px 1px 1px rgba(0,0,0,0.1)' }}></div>
          </div>
        </div>
      </div>
      
      {/* Sparkles */}
      <div className="absolute -top-3 -right-2 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/4 -right-3 w-1.5 h-1.5 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -top-2 left-1/4 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default FloatingGiftBox;


import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-tiffany-50 overflow-hidden px-6 py-16">
      {/* Logo */}
      <div className="absolute top-8 right-8 z-30">
        <h2 className="text-3xl md:text-4xl font-bold text-tiffany-600 font-arabic">هدية</h2>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-8 text-center z-20 relative mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            اكتشف الهدية المثالية
            <br />
            <span className="text-tiffany-500">خلال ثوانٍ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            باستخدام الذكاء الاصطناعي، نرشح لك أفضل الهدايا حسب المناسبة والشخص والميزانية.
          </p>
          
          {/* Button without gift boxes */}
          <div className="py-6 px-4 inline-block">
            <Button 
              size="lg" 
              className="bg-tiffany-500 hover:bg-tiffany-600 text-white text-xl px-8 py-6 rounded-xl tiffany-glow animate-glow"
              onClick={() => document.getElementById('gift-finder')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ابدأ الآن
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements - sparkles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-white rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-2.5 h-2.5 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-sparkle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-1/2 left-1/5 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '2.2s' }}></div>
      <div className="absolute top-3/4 right-1/2 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSection;

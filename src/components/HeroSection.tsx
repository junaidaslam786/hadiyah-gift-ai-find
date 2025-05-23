
import React from 'react';
import { Button } from '@/components/ui/button';
import FloatingGiftBox from './FloatingGiftBox';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-tiffany-50 overflow-hidden">
      {/* Floating Gift Boxes */}
      <div className="absolute top-20 right-20 z-10">
        <FloatingGiftBox size="lg" delay={0} />
      </div>
      <div className="absolute top-40 left-16 z-10">
        <FloatingGiftBox size="md" delay={1} />
      </div>
      <div className="absolute bottom-32 right-32 z-10">
        <FloatingGiftBox size="sm" delay={2} />
      </div>
      <div className="absolute bottom-20 left-20 z-10">
        <FloatingGiftBox size="md" delay={0.5} />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center z-20 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            اكتشف الهدية المثالية
            <br />
            <span className="text-tiffany-500">خلال ثوانٍ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            باستخدام الذكاء الاصطناعي، نرشح لك أفضل الهدايا حسب المناسبة والشخص والميزانية.
          </p>
          
          <Button 
            size="lg" 
            className="bg-tiffany-500 hover:bg-tiffany-600 text-white text-xl px-8 py-4 rounded-xl tiffany-glow animate-glow"
            onClick={() => document.getElementById('gift-finder')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ابدأ الآن
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tiffany-400 rounded-full animate-sparkle"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-tiffany-300 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-tiffany-500 rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }}></div>
    </section>
  );
};

export default HeroSection;

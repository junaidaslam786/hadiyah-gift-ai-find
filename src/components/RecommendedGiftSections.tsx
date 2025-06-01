
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { recommendedGiftSections, type OfferGifts, type GiftProduct } from '@/data/recommendedGifts';

const RecommendedGiftSections: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-tiffany-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            أقسام الهدايا المُوصى بها
          </h2>
          <p className="text-xl text-gray-600">
            اكتشف مجموعة متنوعة من الهدايا من أفضل المتاجر والعلامات التجارية
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {recommendedGiftSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <img 
                    src={section.offerLogo} 
                    alt={section.offer}
                    className="h-12 w-auto object-contain"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">{section.offer}</h3>
                </div>
                <Button
                  className="bg-tiffany-500 hover:bg-tiffany-600 text-white flex items-center gap-2"
                  onClick={() => window.open(section.offerUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  زيارة المتجر
                </Button>
              </div>

              {/* Gifts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.gifts.map((gift) => (
                  <Card key={gift.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100 hover:border-tiffany-200">
                    <div className="relative">
                      <img 
                        src={gift.image}
                        alt={gift.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-tiffany-600 transition-colors">
                        {gift.name}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {gift.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-tiffany-600">
                          {gift.price}
                        </span>
                      </div>
                      
                      <Button 
                        className="w-full bg-tiffany-500 hover:bg-tiffany-600 text-white rounded-lg flex items-center justify-center gap-2"
                        onClick={() => window.open(gift.url, '_blank')}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        اشترِ الآن
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedGiftSections;

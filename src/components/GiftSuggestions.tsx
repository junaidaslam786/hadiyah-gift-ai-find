import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Tag, ShoppingBag } from 'lucide-react';

interface Offer {
  name: string;
  affiliate_url: string;
  image_url?: string | null;
}
interface Gift {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  tags: string[];
  offers: Offer[];
}
interface GiftSuggestionsProps {
  gifts: Gift[];
}

const GiftSuggestions: React.FC<GiftSuggestionsProps> = ({ gifts }) => {
  if (!gifts || gifts.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-tiffany-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            اقتراحاتنا المخصصة لك
          </h2>
          <p className="text-xl text-gray-600">
            وجدنا هذه الهدايا المثالية بناءً على اختياراتك
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {gifts.map((gift) => (
            <Card key={gift.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100 hover:border-tiffany-200">
              <div className="relative">
                <img 
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {(gift.tags || []).map((tag, index) => (
                    <span key={index} className="bg-tiffany-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-tiffany-600 transition-colors">
                  {gift.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {gift.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < (gift.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({gift.rating}/5)</span>
                  </div>
                  <span className="text-2xl font-bold text-tiffany-600">{gift.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {gift.offers && gift.offers.length > 0 ? (
                    gift.offers.map((offer, idx) => (
                      <Button
                        key={idx}
                        className="bg-tiffany-500 hover:bg-tiffany-600 text-white rounded-lg flex items-center gap-2 px-4 py-2 text-sm"
                        onClick={() => window.open(offer.affiliate_url, '_blank')}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        {offer.name}
                      </Button>
                    ))
                  ) : (
                    <Button
                      className="bg-tiffany-500 hover:bg-tiffany-600 text-white rounded-lg flex items-center gap-2 px-4 py-2 text-sm w-full"
                      onClick={() => window.open(gift.url, '_blank')}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      اشترِ الآن
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSuggestions;

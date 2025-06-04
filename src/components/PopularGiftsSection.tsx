
// src/components/PopularGiftsSection.tsx

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Tag, ShoppingBag } from 'lucide-react';
import { recommendedGiftProducts, GiftProduct } from '../data/recommendedGifts';

const PopularGiftsSection: React.FC = () => {
  // Use the array imported from recommendedGiftProducts.ts
  const popularGifts: GiftProduct[] = recommendedGiftProducts;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            الهدايا الأكثر رواجاً
          </h2>
          <p className="text-xl text-gray-600">
            أشهر الهدايا التي يختارها المستخدمون
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {popularGifts.map((gift) => (
            <Card
              key={gift.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100 hover:border-tiffany-200"
            >
              {/* Image + Tags */}
              <div className="relative">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  {gift.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-tiffany-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-tiffany-600 transition-colors">
                  {gift.name}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {gift.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < gift.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({gift.rating}/5)
                    </span>
                  </div>
                  {/* Price */}
                  <span className="text-2xl font-bold text-tiffany-600">
                    {gift.price}
                  </span>
                </div>

                {/* Offers Buttons */}
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
                    <span className="text-gray-400 text-sm">
                      لا توجد متاجر متاحة حاليًا
                    </span>
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

export default PopularGiftsSection;



import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Flame } from 'lucide-react';

const PopularGiftsSection: React.FC = () => {
  const popularGifts = [
    {
      id: 1,
      name: 'عطر فاخر للرجال',
      description: 'عطر أنيق برائحة خشبية مميزة',
      price: '٢٥٠ ريال',
      image: '/placeholder.svg',
      rating: 5,
      isPopular: true
    },
    {
      id: 2,
      name: 'مجموعة مكياج فاخرة',
      description: 'مجموعة مكياج كاملة من أفضل الماركات',
      price: '٤٢٠ ريال',
      image: '/placeholder.svg',
      rating: 5,
      isPopular: true
    },
    {
      id: 3,
      name: 'ساعة ذكية رياضية',
      description: 'ساعة ذكية مقاومة للماء مع مراقب اللياقة',
      price: '٦٨٠ ريال',
      image: '/placeholder.svg',
      rating: 4,
      isNew: true
    },
    {
      id: 4,
      name: 'مجموعة قهوة مختصة',
      description: 'تشكيلة من أفضل أنواع القهوة المختصة',
      price: '١٨٠ ريال',
      image: '/placeholder.svg',
      rating: 5,
      isPopular: true
    },
    {
      id: 5,
      name: 'كتاب تنمية بشرية',
      description: 'أحدث إصدارات كتب التنمية الذاتية',
      price: '٧٥ ريال',
      image: '/placeholder.svg',
      rating: 4,
      isNew: true
    },
    {
      id: 6,
      name: 'إكسسوارات منزلية عصرية',
      description: 'قطع ديكور أنيقة لتجميل المنزل',
      price: '٣٢٠ ريال',
      image: '/placeholder.svg',
      rating: 5,
      isPopular: true
    }
  ];

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
            <Card key={gift.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100 hover:border-tiffany-200">
              <div className="relative">
                <img 
                  src={gift.image} 
                  alt={gift.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {gift.isPopular && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      شائع
                    </span>
                  )}
                  {gift.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      جديد
                    </span>
                  )}
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
                          className={`w-4 h-4 ${i < gift.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({gift.rating}/5)</span>
                  </div>
                  
                  <span className="text-2xl font-bold text-tiffany-600">
                    {gift.price}
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-tiffany-500 hover:bg-tiffany-600 text-white rounded-lg tiffany-glow"
                  onClick={() => window.open('https://amazon.sa', '_blank')}
                >
                  اشترِ الآن
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGiftsSection;

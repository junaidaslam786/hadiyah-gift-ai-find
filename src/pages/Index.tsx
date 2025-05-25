
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import GiftFinderForm from '../components/GiftFinderForm';
import GiftSuggestions from '../components/GiftSuggestions';
import PopularGiftsSection from '../components/PopularGiftsSection';
import Footer from '../components/Footer';
import { supabase } from '../integrations/supabase/client'

interface FormData {
  occasion: string;
  ageGroup: string;
  gender: string;
  relationship: string;
  interests: string;
  budget: string;
}

interface Gift {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  tags: string[];
  affiliateUrl: string;
}

const Index = () => {
  const [suggestions, setSuggestions] = useState<Gift[]>([]);

  // const generateSuggestions = (formData: FormData): Gift[] => {
    // Mock AI suggestions based on form data
  //   const mockSuggestions: Gift[] = [
  //     {
  //       id: 1,
  //       name: 'عطر فاخر للرجال من هوغو بوس',
  //       description: 'عطر رجالي أنيق برائحة خشبية مع لمسات من الحمضيات المنعشة',
  //       price: '٢٨٥ ريال',
  //       image: '/placeholder.svg',
  //       rating: 5,
  //       tags: ['شائع', 'فاخر'],
  //       affiliateUrl: 'https://amazon.sa/dp/example1'
  //     },
  //     {
  //       id: 2,
  //       name: 'ساعة ذكية آبل واتش',
  //       description: 'ساعة ذكية متطورة مع مراقب للصحة وإشعارات ذكية',
  //       price: '١٢٨٠ ريال',
  //       image: '/placeholder.svg',
  //       rating: 5,
  //       tags: ['تقنية', 'جديد'],
  //       affiliateUrl: 'https://amazon.sa/dp/example2'
  //     },
  //     {
  //       id: 3,
  //       name: 'مجموعة عناية بالبشرة',
  //       description: 'مجموعة كاملة للعناية بالبشرة من أفضل المكونات الطبيعية',
  //       price: '٤٥٠ ريال',
  //       image: '/placeholder.svg',
  //       rating: 4,
  //       tags: ['طبيعي', 'عناية'],
  //       affiliateUrl: 'https://noon.com/example3'
  //     },
  //     {
  //       id: 4,
  //       name: 'كتاب تنمية بشرية ملهم',
  //       description: 'كتاب رائع يساعد على تطوير الذات وتحقيق الأهداف',
  //       price: '٨٥ ريال',
  //       image: '/placeholder.svg',
  //       rating: 5,
  //       tags: ['ملهم', 'تعليمي'],
  //       affiliateUrl: 'https://jarir.com/example4'
  //     },
  //     {
  //       id: 5,
  //       name: 'سماعات بلوتوث لاسلكية',
  //       description: 'سماعات عالية الجودة مع إلغاء الضوضاء وبطارية طويلة المدى',
  //       price: '٣٦٠ ريال',
  //       image: '/placeholder.svg',
  //       rating: 4,
  //       tags: ['تقنية', 'صوت'],
  //       affiliateUrl: 'https://amazon.sa/dp/example5'
  //     },
  //     {
  //       id: 6,
  //       name: 'شموع عطرية فاخرة',
  //       description: 'مجموعة شموع عطرية بروائح مميزة تضفي أجواء رومانسية',
  //       price: '١٢٥ ريال',
  //       image: '/placeholder.svg',
  //       rating: 5,
  //       tags: ['رومانسي', 'عطر'],
  //       affiliateUrl: 'https://noon.com/example6'
  //     }
  //   ];

  //   // Filter suggestions based on budget
  //   const budgetRanges = {
  //     'low': [1, 4, 6], // Under 100 SAR - only items 4 and 6 qualify, adding 1 for variety
  //     'medium': [3, 4, 5, 6], // 100-300 SAR
  //     'high': [1, 3, 5], // 300-700 SAR
  //     'premium': [1, 2] // Over 700 SAR
  //   };

  //   const relevantIds = budgetRanges[formData.budget as keyof typeof budgetRanges] || [1, 2, 3];
  //   return mockSuggestions.filter(gift => relevantIds.includes(gift.id));
  // };

  // const handleFormSubmit = (formData: FormData) => {
  //   console.log('Form submitted:', formData);
  //   const newSuggestions = generateSuggestions(formData);
  //   setSuggestions(newSuggestions);
    
  //   // Scroll to suggestions
  //   setTimeout(() => {
  //     document.getElementById('gift-suggestions')?.scrollIntoView({ behavior: 'smooth' });
  //   }, 100);
  // };

    const handleFormSubmit = async (formData: FormData) => {
     // 1) invoke your Supabase Edge Function by its name:
     const res = await fetch(
  'https://lmvkmlnfklivofxdbpse.supabase.co/functions/v1/dcm-gifts',
  {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(formData),
  }
);
if (!res.ok) {
  const body = await res.text();
  throw new Error(`Function error: ${body}`);
}
const { gifts } = await res.json();


    // map Supabase rows → your Gift interface
    setSuggestions(
      gifts.map((g: any, i: number) => ({
        id:           i,
        name:         g.name,
        description:  g.description,
        price:        g.price,
        image:        g.image_url,
        rating:       0,
        tags:         [],
        affiliateUrl: g.affiliate_url,
      }))
    );

    // scroll
    setTimeout(() => {
      document.getElementById('gift-suggestions')
              ?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-arabic">
      <HeroSection />
      <HowItWorksSection />
      <GiftFinderForm onSubmit={handleFormSubmit} />
      <div id="gift-suggestions">
        <GiftSuggestions gifts={suggestions} />
      </div>
      <PopularGiftsSection />
      <Footer />
    </div>
  );
};

export default Index;

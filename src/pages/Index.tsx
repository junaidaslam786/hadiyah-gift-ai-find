
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

  const generateSuggestions = (formData: FormData): Gift[] => {
    // Mock AI suggestions based on form data
    const mockSuggestions: Gift[] = [
      {
        id: 1,
        name: 'عطر فاخر للرجال من هوغو بوس',
        description: 'عطر رجالي أنيق برائحة خشبية مع لمسات من الحمضيات المنعشة',
        price: '٢٨٥ ريال',
        image: '/placeholder.svg',
        rating: 5,
        tags: ['شائع', 'فاخر'],
        affiliateUrl: 'https://amazon.sa/dp/example1'
      },
      {
        id: 2,
        name: 'ساعة ذكية آبل واتش',
        description: 'ساعة ذكية متطورة مع مراقب للصحة وإشعارات ذكية',
        price: '١٢٨٠ ريال',
        image: '/placeholder.svg',
        rating: 5,
        tags: ['تقنية', 'جديد'],
        affiliateUrl: 'https://amazon.sa/dp/example2'
      },
      {
        id: 3,
        name: 'مجموعة عناية بالبشرة',
        description: 'مجموعة كاملة للعناية بالبشرة من أفضل المكونات الطبيعية',
        price: '٤٥٠ ريال',
        image: '/placeholder.svg',
        rating: 4,
        tags: ['طبيعي', 'عناية'],
        affiliateUrl: 'https://noon.com/example3'
      },
      {
        id: 4,
        name: 'كتاب تنمية بشرية ملهم',
        description: 'كتاب رائع يساعد على تطوير الذات وتحقيق الأهداف',
        price: '٨٥ ريال',
        image: '/placeholder.svg',
        rating: 5,
        tags: ['ملهم', 'تعليمي'],
        affiliateUrl: 'https://jarir.com/example4'
      },
      {
        id: 5,
        name: 'سماعات بلوتوث لاسلكية',
        description: 'سماعات عالية الجودة مع إلغاء الضوضاء وبطارية طويلة المدى',
        price: '٣٦٠ ريال',
        image: '/placeholder.svg',
        rating: 4,
        tags: ['تقنية', 'صوت'],
        affiliateUrl: 'https://amazon.sa/dp/example5'
      },
      {
        id: 6,
        name: 'شموع عطرية فاخرة',
        description: 'مجموعة شموع عطرية بروائح مميزة تضفي أجواء رومانسية',
        price: '١٢٥ ريال',
        image: '/placeholder.svg',
        rating: 5,
        tags: ['رومانسي', 'عطر'],
        affiliateUrl: 'https://noon.com/example6'
      }
    ];

    // Filter suggestions based on budget
    const budgetRanges = {
      'أقل من 100 ريال': [4, 6],
      'من 100 إلى 300 ريال': [3, 4, 5, 6],
      'من 300 إلى 700 ريال': [1, 3, 5],
      'أكثر من 700 ريال': [1, 2]
    };

    const relevantIds = budgetRanges[formData.budget as keyof typeof budgetRanges] || [1, 2, 3];
    return mockSuggestions.filter(gift => relevantIds.includes(gift.id));
  };

  const SUPABASE_URL = "https://lmvkmlnfklivofxdbpse.supabase.co"
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtdmttbG5ma2xpdm9meGRicHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MDMwNjMsImV4cCI6MjA2MjQ3OTA2M30.8yvA-ee1PQGpoq8UQtM8ekdu10bhok9JUtXNX8Ougd8"

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/dcm-gifts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const text = await res.text()
        console.error("Function error:", text)
        throw new Error(text)
      }

      const { gifts } = await res.json()

      // map Supabase rows → your Gift interface
      setSuggestions(
        gifts.map((g: any, i: number) => ({
          id: i,
          name: g.name,
          description: g.description,
          price: g.price,
          image: g.image_url,
          rating: 0,
          tags: [],
          affiliateUrl: g.affiliate_url,
        }))
      );

      // scroll
      setTimeout(() => {
        document.getElementById('gift-suggestions')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Error calling Supabase function:', error);
      // Fallback to mock suggestions if API fails
      console.log('Falling back to mock suggestions');
      const newSuggestions = generateSuggestions(formData);
      setSuggestions(newSuggestions);
      
      setTimeout(() => {
        document.getElementById('gift-suggestions')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
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

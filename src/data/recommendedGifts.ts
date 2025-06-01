
export type GiftProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  url: string;
};

export type OfferGifts = {
  offer: string;
  offerLogo: string;   // Logo or brand banner
  offerUrl: string;
  gifts: GiftProduct[];
};

export const recommendedGiftSections: OfferGifts[] = [
  {
    offer: 'Armani Beauty',
    offerLogo: 'https://media.go2speed.org/brand/files/dcm/1569/ArmaniBeauty.png',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/en/perfume/womens-perfumes/s%C3%AC/s%C3%AC-passione-50ml-gift-set/ww-00613-arm.html?srsltid=AfmBOoq_iEfjovBiy8_XDe7ZgoeKA_hIdyA0UfTVbd-wBpWAMxFpKjPS&utm_source=chatgpt.com',
    gifts: [
      {
        id: 'a1',
        name: 'مجموعة عطر سي باسيوني',
        description: 'عطر نسائي زهري وعاطفي في مجموعة هدايا فاخرة.',
        price: '399 درهم',
        image: '/images/gifts/armani-perfume-set.png',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/en/perfume/womens-perfumes/s%C3%AC/s%C3%AC-passione-50ml-gift-set/ww-00613-arm.html?srsltid=AfmBOoq_iEfjovBiy8_XDe7ZgoeKA_hIdyA0UfTVbd-wBpWAMxFpKjPS&utm_source=chatgpt.com',
      },
      {
        id: 'a2',
        name: 'عطر أرماني كود برفيوم',
        description: 'عطر رجالي أنيق وراقي بخلاصة السوسن وحبوب التونكا.',
        price: '450 درهم',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/',
      },
      {
        id: 'a3',
        name: 'عطر ماي واي برفيوم',
        description: 'عطر زهري يحتفي بالمناسبات والروابط الإنسانية.',
        price: '380 درهم',
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop&crop=center',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/',
      },
    ],
  },
  {
    offer: 'al giftcards',
    offerLogo: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=100&fit=crop',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1775&aff_id=150702&file_id=106801',
    gifts: [
      {
        id: 'g1',
        name: 'بطاقة هدايا سنتربوينت',
        description: 'تسوق أحدث صيحات الموضة ومنتجات نمط الحياة.',
        price: '100-500 ريال',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1775&aff_id=150702&source=https://www.algiftcards.com/centrepoint-gift-card',
      },
      {
        id: 'g2',
        name: 'بطاقة هدايا أمازون',
        description: 'بطاقة هدايا شاملة للتسوق الإلكتروني.',
        price: '50-1000 ريال',
        image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1775&aff_id=150702&source=https://www.algiftcards.com/',
      },
      {
        id: 'g3',
        name: 'بطاقة هدايا نون',
        description: 'مثالية للإلكترونيات ومستلزمات المنزل.',
        price: '100-500 ريال',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1775&aff_id=150702&source=https://www.algiftcards.com/',
      },
    ],
  },
  {
    offer: 'Bloomingdales',
    offerLogo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1637&aff_id=150702&file_id=106354',
    gifts: [
      {
        id: 'b1',
        name: 'بطاقة هدايا بلومينغديلز الإلكترونية',
        description: 'تسوق فاخر في أفضل حالاته، لكل المناسبات.',
        price: '100-2000 درهم',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1637&aff_id=150702&source=https://bloomingdales.ae/gift-card',
      },
      {
        id: 'b2',
        name: 'مجموعة حقائب يد مصممة',
        description: 'حقائب يد حصرية من أفضل العلامات التجارية الفاخرة.',
        price: '1500-5000 درهم',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1637&aff_id=150702&source=https://bloomingdales.ae/',
      },
      {
        id: 'b3',
        name: 'طقم مجوهرات فاخر',
        description: 'قطع مجوهرات أنيقة للمناسبات الخاصة.',
        price: '800-3000 درهم',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1637&aff_id=150702&source=https://bloomingdales.ae/',
      },
    ],
  },
  {
    offer: 'Dyson',
    offerLogo: 'https://media.go2speed.org/brand/files/dcm/1549/20241130143707-Dyson.png',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1549&aff_id=150702&file_id=106787',
    gifts: [
      {
        id: 'd1',
        name: 'مجفف شعر دايسون سوبرسونيك™',
        description: 'تجفيف سريع بدون حرارة مفرطة. لجميع أنواع الشعر.',
        price: '1,599 درهم',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1549&aff_id=150702&source=https://www.dyson.ae/en-AE/products/hair-care/dyson-supersonic-hair-dryer',
      },
      {
        id: 'd2',
        name: 'مكنسة دايسون V15 ديتكت الكهربائية',
        description: 'أقوى قوة شفط مع تقنية الليزر لاكتشاف الغبار.',
        price: '2,299 درهم',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1549&aff_id=150702&source=https://www.dyson.ae/',
      },
      {
        id: 'd3',
        name: 'مصفف شعر دايسون إيروراب™',
        description: 'تصفيف وتجفيف متزامن بتقنية تدفق الهواء كواندا.',
        price: '2,199 درهم',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1549&aff_id=150702&source=https://www.dyson.ae/',
      },
    ],
  },
  {
    offer: 'Gameseal',
    offerLogo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=100&fit=crop',
    offerUrl: 'https://gameseal.com/gift-cards/',
    gifts: [
      {
        id: 'gs1',
        name: 'بطاقة هدايا ستيم',
        description: 'وصول فوري لآلاف الألعاب على منصة ستيم.',
        price: '50-500 ريال',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        url: 'https://gameseal.com/steam-gift-cards/',
      },
      {
        id: 'gs2',
        name: 'بطاقة هدايا متجر بلايستيشن',
        description: 'اشترِ الألعاب والإضافات والمزيد من متجر بلايستيشن.',
        price: '100-500 ريال',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
        url: 'https://gameseal.com/',
      },
      {
        id: 'gs3',
        name: 'اشتراك إكس بوكس جيم باس الترا',
        description: 'الوصول لمئات الألعاب بالإضافة للعب الجماعي عبر الإنترنت.',
        price: '150-600 ريال',
        image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400',
        url: 'https://gameseal.com/',
      },
    ],
  },
  {
    offer: 'Cartlow',
    offerLogo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop',
    offerUrl: 'https://www.cartlow.com/saudi/ar',
    gifts: [
      {
        id: 'c1',
        name: 'سماعات آبل إيربودز برو',
        description: 'إلغاء نشط للضوضاء للحصول على صوت غامر.',
        price: '699 ريال',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
        url: 'https://www.cartlow.com/saudi/en/apple-airpods-pro',
      },
      {
        id: 'c2',
        name: 'ساعة سامسونغ جالاكسي الذكية',
        description: 'تتبع ذكي للياقة البدنية مع تصميم أنيق.',
        price: '899 ريال',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        url: 'https://www.cartlow.com/',
      },
      {
        id: 'c3',
        name: 'آيفون 15 برو',
        description: 'أحدث آيفون بتصميم التيتانيوم وكاميرات احترافية.',
        price: '4,199 ريال',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
        url: 'https://www.cartlow.com/',
      },
    ],
  },
  {
    offer: 'Mamas and Papas',
    offerLogo: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=100&fit=crop',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1638&aff_id=150702&file_id=106399',
    gifts: [
      {
        id: 'mp1',
        name: 'مجموعة عربة أطفال هدايا',
        description: 'مجموعة عربة أطفال كاملة للوالدين الجدد.',
        price: '1,250 درهم',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1638&aff_id=150702&source=https://mamasandpapas.ae/gifts-toys/',
      },
      {
        id: 'mp2',
        name: 'مجموعة أثاث غرفة الطفل',
        description: 'أثاث جميل وآمن لغرفة طفلك.',
        price: '2,500-5,000 درهم',
        image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1638&aff_id=150702&source=https://mamasandpapas.ae/',
      },
      {
        id: 'mp3',
        name: 'مجموعة ملابس أطفال هدايا',
        description: 'ملابس رائعة ومريحة للمواليد الجدد.',
        price: '150-400 درهم',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1638&aff_id=150702&source=https://mamasandpapas.ae/',
      },
    ],
  },
];


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
    offerLogo: '/images/gifts/armani-beauty-logo.png',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/en/perfume/womens-perfumes/s%C3%AC/s%C3%AC-passione-50ml-gift-set/ww-00613-arm.html?srsltid=AfmBOoq_iEfjovBiy8_XDe7ZgoeKA_hIdyA0UfTVbd-wBpWAMxFpKjPS&utm_source=chatgpt.com',
    gifts: [
      {
        id: 'a1',
        name: 'Si Passione Eau de Parfum Gift Set',
        description: 'A passionate and floral women\'s fragrance set.',
        price: '399 درهم',
        image: '/images/gifts/armani-perfume-set.png',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/en/perfume/womens-perfumes/s%C3%AC/s%C3%AC-passione-50ml-gift-set/ww-00613-arm.html?srsltid=AfmBOoq_iEfjovBiy8_XDe7ZgoeKA_hIdyA0UfTVbd-wBpWAMxFpKjPS&utm_source=chatgpt.com',
      },
      {
        id: 'a2',
        name: 'Armani Code Parfum',
        description: 'Sophisticated masculine fragrance with iris and tonka bean.',
        price: '450 درهم',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=400',
        url: 'https://www.armanibeauty.ae/',
      },
      {
        id: 'a3',
        name: 'My Way Parfum',
        description: 'Floral fragrance celebrating encounters and connections.',
        price: '380 درهم',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400',
        url: 'https://www.armanibeauty.ae/',
      },
    ],
  },
  {
    offer: 'al giftcards',
    offerLogo: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=100&fit=crop',
    offerUrl: 'https://www.algiftcards.com/',
    gifts: [
      {
        id: 'g1',
        name: 'Centrepoint Gift Card',
        description: 'Shop the latest fashion and lifestyle products.',
        price: '100-500 ريال',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400',
        url: 'https://www.algiftcards.com/centrepoint-gift-card',
      },
      {
        id: 'g2',
        name: 'Amazon Gift Card',
        description: 'Universal gift card for online shopping.',
        price: '50-1000 ريال',
        image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
        url: 'https://www.algiftcards.com/',
      },
      {
        id: 'g3',
        name: 'Noon Gift Card',
        description: 'Perfect for electronics and home essentials.',
        price: '100-500 ريال',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        url: 'https://www.algiftcards.com/',
      },
    ],
  },
  {
    offer: 'Bloomingdales',
    offerLogo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop',
    offerUrl: 'https://bloomingdales.ae',
    gifts: [
      {
        id: 'b1',
        name: 'Bloomingdales E-Gift Card',
        description: 'Luxury shopping at its best, for any occasion.',
        price: '100-2000 درهم',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
        url: 'https://bloomingdales.ae/gift-card',
      },
      {
        id: 'b2',
        name: 'Designer Handbag Collection',
        description: 'Exclusive designer handbags from top luxury brands.',
        price: '1500-5000 درهم',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        url: 'https://bloomingdales.ae/',
      },
      {
        id: 'b3',
        name: 'Luxury Jewelry Set',
        description: 'Elegant jewelry pieces for special occasions.',
        price: '800-3000 درهم',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
        url: 'https://bloomingdales.ae/',
      },
    ],
  },
  {
    offer: 'Dyson',
    offerLogo: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=100&fit=crop',
    offerUrl: 'https://www.dyson.ae/en-AE',
    gifts: [
      {
        id: 'd1',
        name: 'Dyson Supersonic™ Hair Dryer',
        description: 'Fast drying, no extreme heat. For all hair types.',
        price: '1,599 درهم',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
        url: 'https://www.dyson.ae/en-AE/products/hair-care/dyson-supersonic-hair-dryer',
      },
      {
        id: 'd2',
        name: 'Dyson V15 Detect Vacuum',
        description: 'Most powerful suction with laser dust detection.',
        price: '2,299 درهم',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
        url: 'https://www.dyson.ae/',
      },
      {
        id: 'd3',
        name: 'Dyson Airwrap™ Styler',
        description: 'Style and dry simultaneously with Coanda airflow.',
        price: '2,199 درهم',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
        url: 'https://www.dyson.ae/',
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
        name: 'Steam Gift Card',
        description: 'Instant access to thousands of games on Steam.',
        price: '50-500 ريال',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        url: 'https://gameseal.com/steam-gift-cards/',
      },
      {
        id: 'gs2',
        name: 'PlayStation Store Gift Card',
        description: 'Buy games, add-ons and more on PlayStation Store.',
        price: '100-500 ريال',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
        url: 'https://gameseal.com/',
      },
      {
        id: 'gs3',
        name: 'Xbox Game Pass Ultimate',
        description: 'Access to hundreds of games plus online multiplayer.',
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
        name: 'Apple AirPods Pro',
        description: 'Active Noise Cancellation for immersive sound.',
        price: '699 ريال',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
        url: 'https://www.cartlow.com/saudi/en/apple-airpods-pro',
      },
      {
        id: 'c2',
        name: 'Samsung Galaxy Watch',
        description: 'Smart fitness tracking with elegant design.',
        price: '899 ريال',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        url: 'https://www.cartlow.com/',
      },
      {
        id: 'c3',
        name: 'iPhone 15 Pro',
        description: 'Latest iPhone with titanium design and pro cameras.',
        price: '4,199 ريال',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
        url: 'https://www.cartlow.com/',
      },
    ],
  },
  {
    offer: 'Mamas and Papas',
    offerLogo: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=100&fit=crop',
    offerUrl: 'https://mamasandpapas.ae/',
    gifts: [
      {
        id: 'mp1',
        name: 'Baby Stroller Gift Set',
        description: 'Complete stroller set for new parents.',
        price: '1,250 درهم',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
        url: 'https://mamasandpapas.ae/gifts-toys/',
      },
      {
        id: 'mp2',
        name: 'Nursery Furniture Collection',
        description: 'Beautiful and safe nursery furniture for your baby.',
        price: '2,500-5,000 درهم',
        image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400',
        url: 'https://mamasandpapas.ae/',
      },
      {
        id: 'mp3',
        name: 'Baby Clothing Gift Set',
        description: 'Adorable and comfortable clothing for newborns.',
        price: '150-400 درهم',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400',
        url: 'https://mamasandpapas.ae/',
      },
    ],
  },
];

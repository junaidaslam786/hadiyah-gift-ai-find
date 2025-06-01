
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
    offerLogo: 'public/images/armani-beauty-logo.png',
    offerUrl: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/en/perfume/womens-perfumes/s%C3%AC/s%C3%AC-passione-50ml-gift-set/ww-00613-arm.html?srsltid=AfmBOoq_iEfjovBiy8_XDe7ZgoeKA_hIdyA0UfTVbd-wBpWAMxFpKjPS&utm_source=chatgpt.com',
    gifts: [
      {
        id: 'a1',
        name: 'Sì Passione Eau de Parfum Gift Set',
        description: 'A passionate and floral women’s fragrance set.',
        price: '399 درهم',
        image: '/images/gifts/armani-perfume-set.jpg',
        url: 'https://go.urtrackinglink.com/aff_c?offer_id=1569&aff_id=150702&source=https://www.armanibeauty.ae/en/perfume/womens-perfumes/s%C3%AC/s%C3%AC-passione-50ml-gift-set/ww-00613-arm.html?srsltid=AfmBOoq_iEfjovBiy8_XDe7ZgoeKA_hIdyA0UfTVbd-wBpWAMxFpKjPS&utm_source=chatgpt.com',
      },
      // ...add up to 6
    ],
  },
  {
    offer: 'al giftcards',
    offerLogo: '/images/algiftcards-logo.png',
    offerUrl: 'https://www.algiftcards.com/',
    gifts: [
      {
        id: 'g1',
        name: 'Centrepoint Gift Card',
        description: 'Shop the latest fashion and lifestyle products.',
        price: '100-500 ريال',
        image: '/images/gifts/algift1.jpg',
        url: 'https://www.algiftcards.com/centrepoint-gift-card',
      },
      // ...add more
    ],
  },
  {
    offer: 'Bloomingdales',
    offerLogo: '/images/bloomingdales-logo.png',
    offerUrl: 'https://bloomingdales.ae',
    gifts: [
      {
        id: 'b1',
        name: 'Bloomingdales E-Gift Card',
        description: 'Luxury shopping at its best, for any occasion.',
        price: '100-2000 درهم',
        image: '/images/gifts/bloomingdales1.jpg',
        url: 'https://bloomingdales.ae/gift-card',
      },
      // ...add more
    ],
  },
  {
    offer: 'Dyson',
    offerLogo: '/images/dyson-logo.png',
    offerUrl: 'https://www.dyson.ae/en-AE',
    gifts: [
      {
        id: 'd1',
        name: 'Dyson Supersonic™ Hair Dryer',
        description: 'Fast drying, no extreme heat. For all hair types.',
        price: '1,599 درهم',
        image: '/images/gifts/dyson1.jpg',
        url: 'https://www.dyson.ae/en-AE/products/hair-care/dyson-supersonic-hair-dryer',
      },
      // ...add more
    ],
  },
  {
    offer: 'Gameseal',
    offerLogo: '/images/gameseal-logo.png',
    offerUrl: 'https://gameseal.com/gift-cards/',
    gifts: [
      {
        id: 'gs1',
        name: 'Steam Gift Card',
        description: 'Instant access to thousands of games on Steam.',
        price: '50-500 ريال',
        image: '/images/gifts/gameseal1.jpg',
        url: 'https://gameseal.com/steam-gift-cards/',
      },
      // ...add more
    ],
  },
  {
    offer: 'Cartlow',
    offerLogo: '/images/cartlow-logo.png',
    offerUrl: 'https://www.cartlow.com/saudi/ar',
    gifts: [
      {
        id: 'c1',
        name: 'Apple AirPods Pro',
        description: 'Active Noise Cancellation for immersive sound.',
        price: '699 ريال',
        image: '/images/gifts/cartlow1.jpg',
        url: 'https://www.cartlow.com/saudi/en/apple-airpods-pro',
      },
      // ...add more
    ],
  },
  {
    offer: 'Mamas and Papas',
    offerLogo: '/images/mamaspapas-logo.png',
    offerUrl: 'https://mamasandpapas.ae/',
    gifts: [
      {
        id: 'mp1',
        name: 'Baby Stroller Gift Set',
        description: 'Complete stroller set for new parents.',
        price: '1,250 درهم',
        image: '/images/gifts/mamaspapas1.jpg',
        url: 'https://mamasandpapas.ae/gifts-toys/',
      },
      // ...add more
    ],
  },
];

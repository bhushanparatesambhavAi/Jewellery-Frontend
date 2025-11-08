import {
  IconAllJewellery,
  IconEarrings,
  IconPendants,
  IconFingerRings,
  IconMangalsutra,
  IconChains,
  IconNecklaces,
  IconBangles,
  IconBracelets,
  IconNosePin,
  IconGoldCoin,
  IconDiamond,
  IconGemstone,
  IconPlatinum,
  IconRoseGold,
} from './components';

export const MAIN_NAV_LINKS = [
  { name: 'All Jewellery', href: '/products/all' },
  { name: 'Gold', href: '/products/gold' },
  { name: 'Diamond', href: '/products/diamond' },
  { name: 'Earrings', href: '/products/earrings' },
  { name: 'Rings', href: '/products/rings' },
  { name: 'Daily Wear', href: '/products/dailywear' },
  { name: 'Collections', href: '/products/collections' },
  { name: 'Wedding', href: '/products/wedding' },
  { name: 'Gifting', href: '/products/gifting' },
  { name: 'More', href: '#' },
];

export const MEGA_MENU_DATA: { [key: string]: any } = {
  'All Jewellery': {
    sidebar: [
      { name: 'Category', key: 'category' },
      { name: 'Price', key: 'price' },
      { name: 'Occasion', key: 'occasion' },
      { name: 'Gender', key: 'gender' },
    ],
    content: {
      category: {
        type: 'links',
        items: [
          { name: 'All Jewellery', Icon: IconAllJewellery, href: '#' },
          { name: 'Earrings', Icon: IconEarrings, href: '#' },
          { name: 'Pendants', Icon: IconPendants, href: '#' },
          { name: 'Finger Rings', Icon: IconFingerRings, href: '#' },
          { name: 'Mangalsutra', Icon: IconMangalsutra, href: '#' },
          { name: 'Chains', Icon: IconChains, href: '#' },
          { name: 'Nose Pin', Icon: IconNosePin, href: '#' },
          { name: 'Necklaces', Icon: IconNecklaces, href: '#' },
          { name: 'Necklace Set', Icon: IconNecklaces, href: '#' },
          { name: 'Bangles', Icon: IconBangles, href: '#' },
          { name: 'Bracelets', Icon: IconBracelets, href: '#' },
          { name: 'Pendants & Earring Set', Icon: IconPendants, href: '#' },
        ],
      },
      price: {
        type: 'images',
        items: [
          { name: '<15K', image: 'https://picsum.photos/200/200?random=10', href: '#' },
          { name: '15K - 50K', image: 'https://picsum.photos/200/200?random=11', href: '#' },
          { name: '50K - 1L', image: 'https://picsum.photos/200/200?random=12', href: '#' },
          { name: '1L & Above', image: 'https://picsum.photos/200/200?random=13', href: '#' },
        ],
      },
      occasion: {
        type: 'images',
        items: [
          { name: 'Office Wear', image: 'https://picsum.photos/200/200?random=14', href: '#' },
          { name: 'Modern Wear', image: 'https://picsum.photos/200/200?random=15', href: '#' },
          { name: 'Casual Wear', image: 'https://picsum.photos/200/200?random=16', href: '#' },
          { name: 'Traditional Wear', image: 'https://picsum.photos/200/200?random=17', href: '#' },
        ],
      },
      gender: {
        type: 'images',
        items: [
          { name: 'Women', image: 'https://picsum.photos/200/200?random=18', href: '#' },
          { name: 'Men', image: 'https://picsum.photos/200/200?random=19', href: '#' },
          { name: 'Kids & Teens', image: 'https://picsum.photos/200/200?random=20', href: '#' },
        ],
      },
    },
    promo: {
      image: 'https://picsum.photos/300/450?random=1',
      title: 'Elan - My World, My Story',
      subtitle: 'Explore Now',
      href: '#',
    },
  },
  'Gold': {
    sidebar: [
        { name: 'Category', key: 'category' },
        { name: 'Price', key: 'price' },
        { name: 'Occasion', key: 'occasion' },
        { name: 'Gold Coin', key: 'goldcoin' },
        { name: 'Metal', key: 'metal' },
    ],
    content: {
        category: {
            type: 'links',
            items: [
              { name: 'All Gold', Icon: IconAllJewellery, href: '#' },
              { name: 'Gold Bangles', Icon: IconBangles, href: '#' },
              { name: 'Gold Bracelets', Icon: IconBracelets, href: '#' },
              { name: 'Gold Earrings', Icon: IconEarrings, href: '#' },
              { name: 'Gold Chains', Icon: IconChains, href: '#' },
              { name: 'Gold Pendants', Icon: IconPendants, href: '#' },
              { name: 'Gold Rings', Icon: IconFingerRings, href: '#' },
              { name: 'Gold Engagement Rings', Icon: IconFingerRings, href: '#' },
              { name: 'Gold Necklaces', Icon: IconNecklaces, href: '#' },
              { name: 'Gold Nose Pins', Icon: IconNosePin, href: '#' },
              { name: 'Gold Kada', Icon: IconBangles, href: '#' },
              { name: 'Gold Mangalsutras', Icon: IconMangalsutra, href: '#' },
            ]
        },
        price: {
            type: 'images',
            items: [
                { name: '<15K', image: 'https://picsum.photos/200/200?random=21', href: '#' },
                { name: '15K - 50K', image: 'https://picsum.photos/200/200?random=22', href: '#' },
                { name: '50K - 1L', image: 'https://picsum.photos/200/200?random=23', href: '#' },
                { name: '1L & Above', image: 'https://picsum.photos/200/200?random=24', href: '#' },
            ]
        },
        occasion: {
            type: 'images',
            items: [
                { name: 'Office Wear', image: 'https://picsum.photos/200/200?random=25', href: '#' },
                { name: 'Modern Wear', image: 'https://picsum.photos/200/200?random=26', href: '#' },
                { name: 'Casual Wear', image: 'https://picsum.photos/200/200?random=27', href: '#' },
                { name: 'Traditional Wear', image: 'https://picsum.photos/200/200?random=28', href: '#' },
            ]
        },
        goldcoin: {
            type: 'links',
            items: [
                { name: 'Special Coins', Icon: IconGoldCoin, href: '#' },
                { name: '1 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '2 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '4 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '5 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '8 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '10 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '25 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '30 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '50 Gram', Icon: IconGoldCoin, href: '#' },
                { name: '100 Gram', Icon: IconGoldCoin, href: '#' },
            ]
        },
        metal: {
            type: 'links',
            items: [
                { name: 'Rose', Icon: IconRoseGold, href: '#' },
                { name: 'White', Icon: IconPlatinum, href: '#' },
                { name: 'Yellow', Icon: IconAllJewellery, href: '#' },
            ]
        }
    },
    promo: {
        image: 'https://picsum.photos/300/450?random=2',
        title: 'From Classic to Contemporary',
        subtitle: 'Explore 6000+ Stunning Designs',
        href: '#',
    }
  },
  'Diamond': {
    sidebar: [
        { name: 'Category', key: 'category' },
        { name: 'Price', key: 'price' },
        { name: 'Occasion', key: 'occasion' },
        { name: 'Gender', key: 'gender' },
    ],
    content: {
        category: {
            type: 'links',
            items: [
                { name: 'All Diamond', Icon: IconDiamond, href: '#' },
                { name: 'Diamond Bangles', Icon: IconBangles, href: '#' },
                { name: 'Diamond Bracelets', Icon: IconBracelets, href: '#' },
                { name: 'Diamond Earrings', Icon: IconEarrings, href: '#' },
                { name: 'Diamond Rings', Icon: IconFingerRings, href: '#' },
                { name: 'Diamond Mangalsutras', Icon: IconMangalsutra, href: '#' },
                { name: 'Diamond Necklace Set', Icon: IconNecklaces, href: '#' },
                { name: 'Diamond Necklaces', Icon: IconNecklaces, href: '#' },
                { name: 'Diamond Nose Pins', Icon: IconNosePin, href: '#' },
                { name: 'Diamond Pendants', Icon: IconPendants, href: '#' },
            ]
        },
        price: {
            type: 'images',
            items: [
                { name: '<15K', image: 'https://picsum.photos/200/200?random=31', href: '#' },
                { name: '15K - 50K', image: 'https://picsum.photos/200/200?random=32', href: '#' },
                { name: '50K - 1L', image: 'https://picsum.photos/200/200?random=33', href: '#' },
                { name: '1L & Above', image: 'https://picsum.photos/200/200?random=34', href: '#' },
            ]
        },
        occasion: {
            type: 'images',
            items: [
                { name: 'Office Wear', image: 'https://picsum.photos/200/200?random=14', href: '#' },
                { name: 'Modern Wear', image: 'https://picsum.photos/200/200?random=15', href: '#' },
                { name: 'Casual Wear', image: 'https://picsum.photos/200/200?random=16', href: '#' },
                { name: 'Traditional Wear', image: 'https://picsum.photos/200/200?random=17', href: '#' },
            ]
        },
        gender: {
            type: 'images',
            items: [
                { name: 'Women', image: 'https://picsum.photos/200/200?random=18', href: '#' },
                { name: 'Men', image: 'https://picsum.photos/200/200?random=19', href: '#' },
                { name: 'Kids & Teens', image: 'https://picsum.photos/200/200?random=20', href: '#' },
            ]
        },
    },
    promo: {
        image: 'https://picsum.photos/300/450?random=3',
        title: 'Diamonds for Every Sparkle',
        subtitle: 'Discover 1500+ Exquisite Designs',
        href: '#',
    }
  },
  'More': {
    sidebar: [
        { name: 'Exchange Program', key: 'exchange' },
        { name: 'Investments', key: 'investments' },
        { name: 'Mia', key: 'mia' },
        { name: 'Loyalty Points', key: 'loyalty' },
        { name: 'Customer Services', key: 'services' },
        { name: 'Our Brands', key: 'brands' },
        { name: 'Currency Selector', key: 'currency' },
    ],
    content: {
        exchange: { type: 'images', items: [{ name: 'Gold Exchange', image: 'https://picsum.photos/200/200?random=50', href: '#' }] },
        investments: { type: 'images', items: [] }, // Can be expanded
        mia: { type: 'images', items: [{ name: 'Mia', image: 'https://picsum.photos/200/200?random=51', href: '#' }] },
        loyalty: { type: 'images', items: [{ name: 'Tata NeuPass', image: 'https://picsum.photos/200/200?random=52', href: '#' }, { name: 'Encircle', image: 'https://picsum.photos/200/200?random=53', href: '#' }] },
        services: { type: 'images', items: [] },
        brands: { type: 'images', items: [{ name: 'Zoya', image: 'https://picsum.photos/200/100?random=54', href: '#' }, { name: 'Mia', image: 'https://picsum.photos/200/100?random=55', href: '#' }, { name: 'Titan', image: 'https://picsum.photos/200/100?random=56', href: '#' }] },
        currency: { type: 'images', items: [{ name: 'INR (₹)', image: 'https://picsum.photos/200/200?random=57', href: '#' }, { name: 'USD ($)', image: 'https://picsum.photos/200/200?random=58', href: '#' }] },
    },
  },
  'Earrings': {
    sidebar: [
      { name: 'Category', key: 'category' },
      { name: 'Price', key: 'price' },
      { name: 'Occasion', key: 'occasion' },
      { name: 'Gender', key: 'gender' },
      { name: 'Metal & Stones', key: 'metal' },
    ],
    content: {
      category: {
        type: 'links',
        items: [
          { name: 'All Earrings', Icon: IconEarrings, href: '#' },
          { name: 'Drops & Danglers', Icon: IconEarrings, href: '#' },
          { name: 'Hoops & Huggies', Icon: IconEarrings, href: '#' },
          { name: 'Jhumkas', Icon: IconEarrings, href: '#' },
          { name: 'Studs & Tops', Icon: IconEarrings, href: '#' },
        ],
      },
      price: {
        type: 'images',
        items: [
          { name: '<15K', image: 'https://picsum.photos/200/200?random=10', href: '#' },
          { name: '15K - 50K', image: 'https://picsum.photos/200/200?random=11', href: '#' },
          { name: '50K - 1L', image: 'https://picsum.photos/200/200?random=12', href: '#' },
          { name: '1L & Above', image: 'https://picsum.photos/200/200?random=13', href: '#' },
        ],
      },
       occasion: {
            type: 'images',
            items: [
                { name: 'Office Wear', image: 'https://picsum.photos/200/200?random=14', href: '#' },
                { name: 'Modern Wear', image: 'https://picsum.photos/200/200?random=15', href: '#' },
                { name: 'Casual Wear', image: 'https://picsum.photos/200/200?random=16', href: '#' },
                { name: 'Traditional Wear', image: 'https://picsum.photos/200/200?random=17', href: '#' },
            ]
        },
        gender: {
            type: 'images',
            items: [
                { name: 'Women', image: 'https://picsum.photos/200/200?random=18', href: '#' },
                { name: 'Kids & Teens', image: 'https://picsum.photos/200/200?random=20', href: '#' },
            ]
        },
        metal: {
            type: 'links',
            items: [
              { name: 'Diamond', Icon: IconDiamond, href: '#' },
              { name: 'Gemstone', Icon: IconGemstone, href: '#' },
              { name: 'Gold', Icon: IconAllJewellery, href: '#' },
              { name: 'Platinum Metal', Icon: IconPlatinum, href: '#' },
              { name: 'Rose Gold', Icon: IconRoseGold, href: '#' },
            ]
        }
    },
    promo: {
      image: 'https://picsum.photos/300/450?random=4',
      title: 'A eternal symbol of commitment',
      subtitle: 'Shop now',
      href: '#',
    },
  },
};

export const FOOTER_LINKS = {
    'Useful Links': [
        { name: 'Delivery Information', href: '#' },
        { name: 'International Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Payment Options', href: '#' },
    ],
    'Information': [
        { name: 'Blog', href: '#' },
        { name: 'Offers', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
    ],
    'Contact Us': [
        { name: 'Toll-free: 1800-266-0123', href: 'tel:18002660123' },
        { name: 'Chat with Us', href: '#' },
        { name: 'Store Locator', href: '#' },
        { name: 'Book an Appointment', href: '#' },
    ]
};
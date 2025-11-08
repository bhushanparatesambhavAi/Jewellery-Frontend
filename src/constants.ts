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
];

export const SUB_NAV_LINKS: { [key: string]: { name: string; href: string }[] } = {
  'All Jewellery': [
    { name: 'All Jewellery', href: '/products/all-jewellery' },
    { name: 'Earrings', href: '/products/earrings' },
    { name: 'Pendants', href: '/products/pendants' },
    { name: 'Finger Rings', href: '/products/finger-rings' },
    { name: 'Mangalsutra', href: '/products/mangalsutra' },
    { name: 'Chains', href: '/products/chains' },
    { name: 'Necklaces', href: '/products/necklaces' },
    { name: 'Bangles', href: '/products/bangles' },
    { name: 'Bracelets', href: '/products/bracelets' },
  ],
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
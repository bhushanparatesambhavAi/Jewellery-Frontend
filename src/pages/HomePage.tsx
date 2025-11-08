import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { fetchProducts } from '../services/geminiService';
import ProductCard from '../components/ProductCard';

const HeroSection: React.FC = () => (
    <div className="relative bg-gray-100 h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
        <img src="https://picsum.photos/1600/900" alt="Hero Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-8 text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Elegance Redefined</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Discover the exquisite Mriganka collection, where timeless tradition meets contemporary design.</p>
            <button className="mt-8 px-8 py-3 bg-[#800000] text-white font-semibold rounded-full hover:bg-[#660000] transition-colors shadow-lg">
                Explore Collection
            </button>
        </div>
    </div>
);

const FeaturedCategories: React.FC = () => {
    const categories = [
        { name: 'Earrings', img: 'https://picsum.photos/400/500?random=1', href: '/products/earrings' },
        { name: 'Finger Rings', img: 'https://picsum.photos/400/500?random=2', href: '/products/rings' },
        { name: 'Pendants', img: 'https://picsum.photos/400/500?random=3', href: '/products/pendants' },
        { name: 'Mangalsutra', img: 'https://picsum.photos/400/500?random=4', href: '/products/mangalsutra' },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif text-center mb-10">Featured Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {categories.map(cat => (
                        <Link to={cat.href} key={cat.name} className="group text-center">
                            <div className="overflow-hidden rounded-lg">
                                <img src={cat.img} alt={cat.name} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <h3 className="mt-4 text-lg font-serif">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BrandAssurance: React.FC = () => {
    const assurances = [
        { icon: '💎', title: 'Quality Craftsmanship' },
        { icon: '🌿', title: 'Ethically Sourced' },
        { icon: '🔍', title: '100% Transparency' },
    ];
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {assurances.map(item => (
                        <div key={item.title} className="p-6">
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-serif font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            const products = await fetchProducts();
            setTrendingProducts(products.slice(0, 8)); // Show first 8 as trending
            setLoading(false);
        };
        loadProducts();
    }, []);

    return (
        <div>
            <HeroSection />
            <FeaturedCategories />

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif text-center mb-10">Trending Now</h2>
                    {loading ? (
                         <div className="text-center">Loading trending products...</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                            {trendingProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            
            <BrandAssurance />

            {/* Other sections can be added here following the same pattern */}
        </div>
    );
};

export default HomePage;
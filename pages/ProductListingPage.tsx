import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { fetchProducts } from '../services/geminiService';
import ProductCard from '../components/ProductCard';

const ProductListingPage: React.FC = () => {
  const { category = 'all' } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (category.toLowerCase() === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [category, products]);
  
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{categoryTitle}</span>
        </nav>
        
        <h1 className="text-3xl font-serif font-bold mb-2">{categoryTitle}</h1>
        <p className="text-gray-500 mb-6">{filteredProducts.length} results</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters (Sidebar) */}
          <aside className="w-full lg:w-1/4">
             <h2 className="text-lg font-semibold mb-4">Filters</h2>
             {/* Placeholder for filter options */}
             <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <div className="space-y-1">
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#800000] focus:ring-[#800000]"/> <span className="ml-2 text-sm">Earrings</span></label>
                    <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#800000] focus:ring-[#800000]"/> <span className="ml-2 text-sm">Rings</span></label>
                  </div>
                </div>
                 <div>
                  <h3 className="font-medium mb-2">Price</h3>
                   <input type="range" className="w-full"/>
                </div>
             </div>
          </aside>
          
          {/* Product Grid */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-end mb-4">
               <select className="border border-gray-300 rounded-md p-2">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
               </select>
            </div>
            {loading ? (
              <div className="text-center py-20">Loading products...</div>
            ) : (
                filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-lg text-gray-600">No products found in this category.</p>
                    </div>
                )
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;

import React from 'react';
import { Product } from '../types';
import { IconHeart } from './Icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/70 rounded-full text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
          <IconHeart className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="text-base font-serif text-gray-800 truncate">
          <a href="#">{product.name}</a>
        </h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

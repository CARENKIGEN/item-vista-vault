
import React from 'react';
import ProductCard from './ProductCard';

const relatedProducts = [
  {
    id: 'laptop-pro-1',
    name: 'Professional Laptop Pro',
    price: 1599,
    originalPrice: 1899,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
    rating: 4.5,
    isOnSale: true
  },
  {
    id: 'laptop-air-1',
    name: 'Ultrabook Air Series',
    price: 999,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    rating: 4.2,
    isOnSale: false
  },
  {
    id: 'laptop-gaming-1',
    name: 'Gaming Laptop Elite',
    price: 2299,
    originalPrice: 2599,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
    rating: 4.8,
    isOnSale: true
  },
  {
    id: 'laptop-studio-1',
    name: 'Creative Studio Laptop',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
    rating: 4.6,
    isOnSale: false
  }
];

const RelatedProducts = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

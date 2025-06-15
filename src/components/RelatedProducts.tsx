
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
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    rating: 4.6,
    isOnSale: false
  },
  {
    id: 'laptop-business-1',
    name: 'Business Pro Laptop',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop',
    rating: 4.3,
    isOnSale: true
  },
  {
    id: 'laptop-compact-1',
    name: 'Compact Travel Laptop',
    price: 899,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
    rating: 4.1,
    isOnSale: false
  },
  {
    id: 'laptop-workstation-1',
    name: 'Workstation Power Laptop',
    price: 2799,
    originalPrice: 3199,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
    rating: 4.7,
    isOnSale: true
  },
  {
    id: 'laptop-student-1',
    name: 'Student Essential Laptop',
    price: 699,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    rating: 4.0,
    isOnSale: false
  },
  {
    id: 'laptop-designer-1',
    name: 'Designer Spec Laptop',
    price: 2199,
    originalPrice: 2399,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
    rating: 4.6,
    isOnSale: true
  },
  {
    id: 'laptop-home-1',
    name: 'Home Office Laptop',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    rating: 4.2,
    isOnSale: false
  },
  {
    id: 'laptop-premium-1',
    name: 'Premium Executive Laptop',
    price: 3299,
    originalPrice: 3799,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop',
    rating: 4.9,
    isOnSale: true
  },
  {
    id: 'laptop-budget-1',
    name: 'Budget Friendly Laptop',
    price: 549,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
    rating: 3.8,
    isOnSale: false
  },
  {
    id: 'laptop-performance-1',
    name: 'High Performance Laptop',
    price: 2599,
    originalPrice: 2899,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
    rating: 4.5,
    isOnSale: true
  },
  {
    id: 'laptop-multimedia-1',
    name: 'Multimedia Creation Laptop',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    rating: 4.4,
    isOnSale: false
  },
  {
    id: 'laptop-portable-1',
    name: 'Ultra Portable Laptop',
    price: 1399,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
    rating: 4.3,
    isOnSale: true
  },
  {
    id: 'laptop-rugged-1',
    name: 'Rugged Outdoor Laptop',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    rating: 4.1,
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

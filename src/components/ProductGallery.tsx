
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const productImages = [
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop'
];

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg group">
        <img
          src={productImages[currentImage]}
          alt="Product"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevImage}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextImage}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {productImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentImage === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-2">
        {productImages.map((image, index) => (
          <button
            key={index}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              currentImage === index
                ? 'border-blue-500 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

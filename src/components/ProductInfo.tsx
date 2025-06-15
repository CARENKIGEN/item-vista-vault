
import React, { useState } from 'react';
import { Star, Heart, Share2, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Navy', value: '#1e3a8a' },
  { name: 'Gray', value: '#6b7280' }
];

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: 'premium-laptop-1',
      name: 'Premium Wireless Laptop',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      size: selectedSize,
      color: selectedColor
    });

    toast({
      title: "Added to cart!",
      description: `${quantity} item(s) added to your cart.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Premium Wireless Laptop
        </h1>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">(4.0) 128 reviews</span>
          </div>
          <Badge variant="secondary">Best Seller</Badge>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-gray-900">$1,299</span>
        <span className="text-xl text-gray-500 line-through">$1,599</span>
        <Badge variant="destructive">19% OFF</Badge>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-600 leading-relaxed">
          Experience the perfect blend of performance and portability with this premium wireless laptop. 
          Featuring the latest processor technology, all-day battery life, and a stunning display that 
          brings your work to life. Ideal for professionals, students, and creatives alike.
        </p>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Size</h3>
        <div className="flex space-x-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              className="w-12 h-12"
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Color: {selectedColor}</h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor === color.name
                  ? 'border-blue-500 scale-110'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.name)}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quantity</h3>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="text-lg font-medium w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          className="w-full h-12 text-lg font-semibold"
          onClick={handleAddToCart}
        >
          Add to Cart - $1,299
        </Button>
        
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1">
            <Heart className="w-5 h-5 mr-2" />
            Wishlist
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="border-t pt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Package className="w-5 h-5 text-blue-600" />
          <span className="text-gray-700">Free shipping on orders over $100</span>
        </div>
        <div className="flex items-center space-x-3">
          <Truck className="w-5 h-5 text-blue-600" />
          <span className="text-gray-700">2-3 business days delivery</span>
        </div>
        <div className="flex items-center space-x-3">
          <Heart className="w-5 h-5 text-blue-600" />
          <span className="text-gray-700">30-day return policy</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

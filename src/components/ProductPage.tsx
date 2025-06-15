
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ShoppingCartComponent from './ShoppingCartComponent';
import RelatedProducts from './RelatedProducts';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const ProductPage = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Vista Store</h1>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ProductGallery />
          <ProductInfo />
        </div>
        
        <RelatedProducts />
      </main>

      {/* Shopping Cart Sidebar */}
      <ShoppingCartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default ProductPage;

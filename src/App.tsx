import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MarqueeBanner } from './components/MarqueeBanner';
import { FeaturedProducts } from './components/FeaturedProducts';
import { TestimonialSlider } from './components/TestimonialSlider';
import { FarmersSection } from './components/FarmersSection';
import { LocatorSection } from './components/LocatorSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { OurStoryPage } from './components/pages/OurStoryPage';
import { CommunityPage } from './components/pages/CommunityPage';
import { LocationsPage } from './components/pages/LocationsPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Product, CartItem } from './types';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tikiri_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('tikiri_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (['our-story', 'community', 'locations', 'products'].includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (route: string) => {
    setCurrentRoute(route);
    if (route === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5eddb] text-[#280e0f]">
      {/* Primary Fixed Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <>
            <HeroBanner onExploreClick={() => navigate('our-story')} />
            <FeaturedProducts
              onSelectProduct={setSelectedProduct}
              onAddToCart={handleAddToCart}
            />
            <TestimonialSlider />
            <MarqueeBanner />
            <FarmersSection onFarmersClick={() => navigate('community')} />
            <LocatorSection onFindStoreClick={() => navigate('locations')} />
            <Newsletter />
          </>
        )}

        {currentRoute === 'our-story' && <OurStoryPage />}
        {currentRoute === 'community' && <CommunityPage />}
        {currentRoute === 'locations' && <LocationsPage />}
        {currentRoute === 'products' && (
          <ProductsPage
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={navigate} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;

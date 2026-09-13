import React, { useState } from 'react';
import { STORE_COLLECTIONS } from '../data/products';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeCollectionHandle, setActiveCollectionHandle] = useState<'organic-spices' | 'merchandise'>('organic-spices');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCollection = STORE_COLLECTIONS.find((c) =>
    activeCollectionHandle === 'organic-spices'
      ? c.title.toLowerCase().includes('spice')
      : c.title.toLowerCase().includes('merchandise')
  ) || STORE_COLLECTIONS[0];

  const products = currentCollection.products;

  // Carousel controls
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= products.length - itemsPerView ? 0 : prev + 1));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="featured-prods" className="bg-[#f5eddb] py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-calder uppercase text-2xl sm:text-4xl md:text-5xl text-[#751629] mb-4 sm:mb-6 tracking-wide">
            FEATURED PRODUCTS
          </h2>
          <p className="font-asul text-sm sm:text-base lg:text-lg text-[#280e0f] leading-relaxed opacity-90">
            Immerse yourself in our collection of organic spices, thoughtfully cultivated on our own lush lands in Sri Lanka. Each spice brings the vibrant colours, rich aromas, and authentic flavours of Ceylon directly to your culinary creations.
          </p>

          {/* Collection Filter Tabs */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => {
                setActiveCollectionHandle('organic-spices');
                setCurrentIndex(0);
              }}
              className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-calsans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCollectionHandle === 'organic-spices'
                  ? 'bg-[#280e0f] text-[#f5eddb]'
                  : 'bg-transparent text-[#280e0f] border border-[#280e0f] hover:bg-[#e6d9c2]'
              }`}
            >
              Organic Spices
            </button>
            <button
              onClick={() => {
                setActiveCollectionHandle('merchandise');
                setCurrentIndex(0);
              }}
              className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-calsans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCollectionHandle === 'merchandise'
                  ? 'bg-[#280e0f] text-[#f5eddb]'
                  : 'bg-transparent text-[#280e0f] border border-[#280e0f] hover:bg-[#e6d9c2]'
              }`}
            >
              Merchandise
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative mb-16 sm:mb-20">
          {/* Navigation Arrows & Counter */}
          <div className="flex justify-between sm:justify-end items-center gap-3 mb-4">
            <span className="font-calsans text-xs sm:text-sm font-bold text-[#280e0f]/70 sm:mr-3">
              {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, products.length)} of {products.length}
            </span>
            <div className="flex gap-2.5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] flex items-center justify-center text-[#280e0f] hover:bg-[#280e0f] hover:text-[#f5eddb] transition-colors cursor-pointer"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] flex items-center justify-center text-[#280e0f] hover:bg-[#280e0f] hover:text-[#f5eddb] transition-colors cursor-pointer"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Product Cards Grid / Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleProducts.map((product) => {
              const isHovered = hoveredProductId === product.id;
              const primaryImg = product.images[1]?.src || product.images[0]?.src;
              const secondaryImg = product.images[2]?.src || product.images[0]?.src;

              return (
                <div
                  key={product.id}
                  className="group flex flex-col text-center bg-transparent rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative w-full aspect-square mb-4 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl bg-[#ede3cf]/50 p-6"
                  >
                    <img
                      src={isHovered && secondaryImg ? secondaryImg : primaryImg}
                      alt={product.title}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Quick Action Overlay (Desktop) */}
                    <div className="hidden sm:flex absolute inset-0 bg-[#280e0f]/20 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="p-3 bg-[#f5eddb] text-[#280e0f] rounded-full hover:scale-110 shadow-md transition-transform cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        className="p-3 bg-[#751629] text-[#f5eddb] rounded-full hover:scale-110 shadow-md transition-transform cursor-pointer"
                        title="Add to Cart"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-calsans text-base sm:text-lg lg:text-xl font-semibold text-[#1c3a30] py-1 cursor-pointer hover:text-[#751629] transition-colors"
                  >
                    {product.title}
                  </h3>

                  <p className="font-asul text-xs sm:text-sm text-[#0f1c25] line-clamp-2 px-2 mb-4 opacity-80">
                    {product.description || 'Pure Ceylon single-origin natural product.'}
                  </p>

                  <div className="mt-auto flex items-center justify-center gap-4 pt-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-calsans font-bold uppercase tracking-wider text-[#280e0f] underline hover:text-[#751629] py-1 min-h-[36px] flex items-center cursor-pointer"
                    >
                      Learn More
                    </button>
                    <span className="text-[#9f9383]">•</span>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="text-xs font-calsans font-bold uppercase tracking-wider text-[#751629] hover:underline py-1 min-h-[36px] flex items-center cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Brand Pillars / Seals */}
        <div className="border-t border-[#280e0f]/15 pt-12 sm:pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <img
              src="/media/organic.86e29f52.svg"
              alt="Organic"
              className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
            />
            <p className="font-calsans text-xs sm:text-sm md:text-base font-semibold text-[#280e0f] mb-1 sm:mb-2 tracking-[0.2rem] uppercase">Organic</p>
            <p className="font-asul text-[11px] sm:text-xs md:text-sm text-[#0f1c25] opacity-80 max-w-xs leading-relaxed">
              Grown with respect for nature, free from synthetic pesticides and harmful chemicals.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/media/flavorful.f099ce35.svg"
              alt="Flavorful"
              className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
            />
            <p className="font-calsans text-xs sm:text-sm md:text-base font-semibold text-[#280e0f] mb-1 sm:mb-2 tracking-[0.2rem] uppercase">Flavorful</p>
            <p className="font-asul text-[11px] sm:text-xs md:text-sm text-[#0f1c25] opacity-80 max-w-xs leading-relaxed">
              Bursting with the bold, multi-layered flavour profiles unique to Sri Lanka’s terroir.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/media/homegrown.5cdc105f.svg"
              alt="Homegrown"
              className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
            />
            <p className="font-calsans text-xs sm:text-sm md:text-base font-semibold text-[#280e0f] mb-1 sm:mb-2 tracking-[0.2rem] uppercase">Homegrown</p>
            <p className="font-asul text-[11px] sm:text-xs md:text-sm text-[#0f1c25] opacity-80 max-w-xs leading-relaxed">
              Carefully nurtured on our own regenerative family farmlands and community estates.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/media/aromatic.7fc5a886.svg"
              alt="Aromatic"
              className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
            />
            <p className="font-calsans text-xs sm:text-sm md:text-base font-semibold text-[#280e0f] mb-1 sm:mb-2 tracking-[0.2rem] uppercase">Aromatic</p>
            <p className="font-asul text-[11px] sm:text-xs md:text-sm text-[#0f1c25] opacity-80 max-w-xs leading-relaxed">
              Naturally dried and packaged right at the source to seal in precious essential oils.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

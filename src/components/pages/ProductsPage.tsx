import React, { useState } from 'react';
import { STORE_COLLECTIONS } from '../../data/products';
import { Product } from '../../types';
import { Search, ShoppingBag, Eye, Check } from 'lucide-react';
import { Newsletter } from '../Newsletter';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const allProducts: (Product & { categoryTitle: string })[] = [];
  STORE_COLLECTIONS.forEach((col) => {
    col.products.forEach((prod) => {
      allProducts.push({
        ...prod,
        categoryTitle: col.title,
      });
    });
  });

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'spices' && product.categoryTitle.toLowerCase().includes('spice')) ||
      (selectedCategory === 'merchandise' && product.categoryTitle.toLowerCase().includes('merchandise'));

    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="pt-20 sm:pt-28 pb-0 bg-[#f5eddb]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 text-center">
        <h1 className="font-calder uppercase text-2xl sm:text-4xl lg:text-6xl text-[#751629] mb-4 sm:mb-6 tracking-wide">
          OUR PRODUCTS
        </h1>
        <p className="font-asul text-sm sm:text-base lg:text-xl text-[#280e0f] max-w-3xl mx-auto leading-relaxed opacity-90 mb-8 sm:mb-10">
          Discover our single-origin Ceylon organic spices, handcrafted kitchenware, and culinary merchandise. Ethically farmed, sustainably harvested, and packaged with reverence.
        </p>

        {/* Filter Controls */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-calsans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#280e0f] text-[#f5eddb]'
                  : 'bg-[#e6d9c2] text-[#280e0f] hover:bg-[#280e0f]/10'
              }`}
            >
              All ({allProducts.length})
            </button>
            <button
              onClick={() => setSelectedCategory('spices')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-calsans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'spices'
                  ? 'bg-[#280e0f] text-[#f5eddb]'
                  : 'bg-[#e6d9c2] text-[#280e0f] hover:bg-[#280e0f]/10'
              }`}
            >
              Organic Spices (10)
            </button>
            <button
              onClick={() => setSelectedCategory('merchandise')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-calsans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'merchandise'
                  ? 'bg-[#280e0f] text-[#f5eddb]'
                  : 'bg-[#e6d9c2] text-[#280e0f] hover:bg-[#280e0f]/10'
              }`}
            >
              Merchandise (6)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] text-[#280e0f] placeholder-[#280e0f]/50 font-calsans text-sm focus:outline-none focus:ring-2 focus:ring-[#751629]"
            />
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#280e0f]" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-16 sm:pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 sm:py-20 bg-[#e6d9c2]/50 rounded-3xl p-6 sm:p-8 max-w-md mx-auto">
            <p className="font-asul text-base sm:text-lg text-[#280e0f] mb-4">
              No products found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary-custom text-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isHovered = hoveredId === product.id;
              const primaryImg = product.images[1]?.src || product.images[0]?.src;
              const secondaryImg = product.images[2]?.src || product.images[0]?.src;
              const isAdded = addedId === product.id;

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-[#e6d9c2]/40 rounded-3xl p-5 border border-[#280e0f]/10 hover:border-[#280e0f]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative w-full aspect-square rounded-2xl bg-[#f5eddb] p-6 mb-4 flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    <img
                      src={isHovered && secondaryImg ? secondaryImg : primaryImg}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Quick overlay buttons */}
                    <div className="absolute inset-0 bg-[#280e0f]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="p-3 bg-[#f5eddb] text-[#280e0f] rounded-full hover:scale-110 shadow-md transition-transform"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#dab427] text-[#280e0f] rounded-full font-calsans text-[10px] font-bold uppercase tracking-wider">
                      {product.categoryTitle.includes('Spice') ? 'Spices' : 'Merch'}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-calsans text-lg sm:text-xl font-semibold text-[#1c3a30] mb-2 cursor-pointer hover:text-[#751629] transition-colors"
                  >
                    {product.title}
                  </h3>

                  <p className="font-asul text-xs sm:text-sm text-[#0f1c25]/80 line-clamp-2 mb-6">
                    {product.description || 'Authentic Sri Lankan organic culinary staple.'}
                  </p>

                  {/* Bottom Action */}
                  <div className="mt-auto pt-4 border-t border-[#280e0f]/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="font-calsans text-xs font-bold uppercase tracking-wider text-[#280e0f] hover:text-[#751629]"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`btn-primary-custom text-xs py-2 px-4 flex items-center gap-1.5 ${
                        isAdded ? '!bg-green-700 !border-green-700' : ''
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Bag
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

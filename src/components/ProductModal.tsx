import React, { useState } from 'react';
import { Product } from '../types';
import { X, ExternalLink, ShoppingBag, Check, ShieldCheck, Sparkles, Leaf } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#280e0f]/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#f5eddb] border-2 border-[#280e0f] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl text-[#280e0f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#e6d9c2] text-[#280e0f] hover:bg-[#751629] hover:text-[#f5eddb] transition-colors focus:outline-none cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Image Gallery */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="w-full aspect-square bg-[#e6d9c2]/50 rounded-2xl p-4 sm:p-6 flex items-center justify-center overflow-hidden mb-3 sm:mb-4 border border-[#280e0f]/10">
              <img
                src={product.images[selectedImageIndex]?.src || product.images[0]?.src}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#e6d9c2] p-1 border-2 overflow-hidden transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-[#751629] scale-105'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Purchase */}
          <div className="md:col-span-6 flex flex-col">
            <span className="inline-block self-start px-3 py-1 bg-[#dab427] text-[#280e0f] rounded-full font-calsans text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
              100% Organic Ceylon
            </span>

            <h2 className="font-calder text-xl sm:text-2xl md:text-3xl text-[#1c3a30] mb-2 sm:mb-3">
              {product.title}
            </h2>

            <p className="font-asul text-xs sm:text-sm md:text-base text-[#0f1c25] leading-relaxed mb-4 sm:mb-6 opacity-90">
              {product.description ||
                'Sourced directly from our family-run estates and cooperative partner farms across Sri Lanka. Sun-dried, unadulterated, and packaged fresh.'}
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8 bg-[#e6d9c2]/50 p-3 sm:p-4 rounded-2xl border border-[#280e0f]/10">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-calsans text-xs font-semibold">Regenerative</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-calsans text-xs font-semibold">Single Origin</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-calsans text-xs font-semibold">Zero Chemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-calsans text-xs font-semibold">Fair Trade</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <label className="font-calsans text-xs font-bold uppercase tracking-wider text-[#280e0f]">
                Quantity:
              </label>
              <div className="flex items-center border-2 border-[#280e0f] rounded-full overflow-hidden bg-[#f5eddb]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 flex items-center justify-center text-base font-bold hover:bg-[#e6d9c2] transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 font-calsans font-bold text-sm min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 flex items-center justify-center text-base font-bold hover:bg-[#e6d9c2] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAdd}
                className={`btn-primary-custom flex-1 flex items-center justify-center gap-2 cursor-pointer ${
                  added ? '!bg-green-700 !border-green-700' : ''
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Add to Bag
                  </>
                )}
              </button>

              <a
                href={product.onlineStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-custom flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

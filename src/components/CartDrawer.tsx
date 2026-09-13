import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[120] overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#280e0f]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#f5eddb] border-l-2 border-[#280e0f] shadow-2xl flex flex-col justify-between text-[#280e0f]">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#280e0f]/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#751629]" />
              <h2 className="font-calder uppercase text-base sm:text-xl text-[#1c3a30] tracking-wide">
                YOUR SHOPPING BAG ({totalItemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-[#e6d9c2] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 sm:py-24 flex flex-col items-center">
                <ShoppingBag className="w-14 h-14 sm:w-16 sm:h-16 text-[#9f9383] mb-4 stroke-1" />
                <p className="font-asul text-lg sm:text-xl font-bold text-[#280e0f] mb-2">
                  Your bag is currently empty
                </p>
                <p className="font-asul text-xs sm:text-sm text-[#0f1c25]/70 max-w-xs mb-6">
                  Explore our authentic Ceylon organic spices and merchandise to fill your bag.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary-custom text-xs cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              items.map((item) => {
                const img = item.product.images[1]?.src || item.product.images[0]?.src;
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#e6d9c2]/50 border border-[#280e0f]/10 items-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f5eddb] rounded-xl p-2 flex items-center justify-center shrink-0">
                      <img
                        src={img}
                        alt={item.product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-calsans text-sm sm:text-base font-semibold text-[#1c3a30] truncate">
                        {item.product.title}
                      </h4>
                      <p className="font-calsans text-xs text-[#9f9383] mb-2 sm:mb-3">
                        Single Origin Ceylon
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-[#280e0f] rounded-full overflow-hidden bg-[#f5eddb]">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-[#e6d9c2] cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-2 font-calsans text-xs font-bold min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-[#e6d9c2] cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="w-8 h-8 flex items-center justify-center text-red-700 hover:text-red-900 p-1 transition-colors cursor-pointer"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#280e0f]/15 bg-[#e6d9c2]/30 space-y-3 sm:space-y-4">
              <div className="flex justify-between font-calsans text-xs sm:text-sm font-semibold">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 sm:gap-3">
                <a
                  href="https://store.tikirimanike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Tikiri Store</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onClearCart}
                  className="font-calsans text-xs font-bold text-stone-600 hover:text-[#751629] underline text-center cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

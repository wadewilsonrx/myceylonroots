import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  cartItems: CartItem[];
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  cartItems,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'CT'>('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangDropdownOpen(false);
        setMobileLangDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNav = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById('sign-up');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('sign-up')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] bg-[#f5eddb] transition-all duration-300 ${
          scrolled ? 'shadow-md py-2.5 sm:py-3' : 'py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                className="p-2 -ml-2 flex items-center justify-center cursor-pointer focus:outline-none min-w-[44px] min-h-[44px]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <div
                  className={`button_container ${mobileMenuOpen ? 'active' : ''}`}
                  id="toggle"
                >
                  <span className="top"></span>
                  <span className="middle"></span>
                  <span className="bottom"></span>
                </div>
              </button>
            </div>

            {/* Desktop Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 w-1/3">
              <button
                onClick={() => handleNav('our-story')}
                className={`font-calsans text-base font-semibold transition-colors duration-200 uppercase tracking-wider ${
                  currentRoute === 'our-story' ? 'text-[#751629] underline underline-offset-8' : 'text-[#280e0f] hover:text-[#751629]'
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => handleNav('community')}
                className={`font-calsans text-base font-semibold transition-colors duration-200 uppercase tracking-wider ${
                  currentRoute === 'community' ? 'text-[#751629] underline underline-offset-8' : 'text-[#280e0f] hover:text-[#751629]'
                }`}
              >
                Community
              </button>
              <button
                onClick={() => handleNav('products')}
                className={`font-calsans text-base font-semibold transition-colors duration-200 uppercase tracking-wider ${
                  currentRoute === 'products' ? 'text-[#751629] underline underline-offset-8' : 'text-[#280e0f] hover:text-[#751629]'
                }`}
              >
                Products
              </button>
            </nav>

            {/* Center Brand Logo */}
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleNav('home')}
                className="transition-transform duration-200 hover:scale-105 focus:outline-none flex items-center justify-center p-1"
                aria-label="Tikiri Manike Home"
              >
                <img
                  src="/media/logo.826c56fa.svg"
                  alt="Tikiri Manike"
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
                />
              </button>
            </div>

            {/* Desktop Right Nav Links */}
            <div className="hidden lg:flex items-center justify-end gap-7 w-1/3">
              <button
                onClick={handleContactClick}
                className="font-calsans text-base font-semibold text-[#280e0f] hover:text-[#751629] transition-colors duration-200 uppercase tracking-wider"
              >
                Contact
              </button>

              <button
                onClick={() => handleNav('locations')}
                className={`font-calsans text-base font-semibold transition-colors duration-200 uppercase tracking-wider ${
                  currentRoute === 'locations' ? 'text-[#751629] underline underline-offset-8' : 'text-[#280e0f] hover:text-[#751629]'
                }`}
              >
                Resellers
              </button>

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="font-calsans text-base font-semibold text-[#280e0f] hover:text-[#751629] uppercase tracking-wider flex items-center gap-1.5 focus:outline-none py-1"
                >
                  {language}
                  <span className="text-xs">▼</span>
                </button>
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-[#f5eddb] border border-[#e6d9c2] rounded-lg shadow-lg py-1 z-50">
                    <button
                      onClick={() => {
                        setLanguage('EN');
                        setLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 font-calsans text-sm font-semibold hover:bg-[#e6d9c2] transition-colors ${
                        language === 'EN' ? 'text-[#751629]' : 'text-[#280e0f]'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('CT');
                        setLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 font-calsans text-sm font-semibold hover:bg-[#e6d9c2] transition-colors ${
                        language === 'CT' ? 'text-[#751629]' : 'text-[#280e0f]'
                      }`}
                    >
                      CT
                    </button>
                  </div>
                )}
              </div>

              {/* Shopping Bag Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2 text-[#280e0f] hover:text-[#751629] transition-colors focus:outline-none cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#751629] text-[#f5eddb] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Right Quick Controls */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                  className="font-calsans text-xs sm:text-sm font-bold text-[#280e0f] px-2.5 py-1.5 rounded-full bg-[#e6d9c2] min-h-[38px] flex items-center justify-center cursor-pointer"
                  aria-label="Change language"
                >
                  {language}
                </button>
                {mobileLangDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-24 bg-[#f5eddb] border border-[#e6d9c2] rounded-xl shadow-xl py-1 z-50">
                    <button
                      onClick={() => {
                        setLanguage('EN');
                        setMobileLangDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 font-calsans text-xs font-semibold hover:bg-[#e6d9c2]"
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('CT');
                        setMobileLangDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 font-calsans text-xs font-semibold hover:bg-[#e6d9c2]"
                    >
                      CT
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={onOpenCart}
                className="relative p-2 text-[#280e0f] min-h-[42px] min-w-[42px] flex items-center justify-center cursor-pointer"
                aria-label="Cart"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalCartCount > 0 && (
                  <span className="absolute 0 top-0.5 right-0.5 bg-[#751629] text-[#f5eddb] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                    {totalCartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col min-h-screen justify-between px-6 pb-12 pt-24 sm:pt-28">
          <nav className="w-full">
            <ul className="flex flex-col gap-5 sm:gap-6 text-center">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className={`font-calsans text-2xl sm:text-3xl font-semibold uppercase tracking-wider py-1 cursor-pointer transition-colors ${
                    currentRoute === 'home' ? 'text-[#751629] underline' : 'text-[#280e0f] hover:text-[#751629]'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('our-story')}
                  className={`font-calsans text-2xl sm:text-3xl font-semibold uppercase tracking-wider py-1 cursor-pointer transition-colors ${
                    currentRoute === 'our-story' ? 'text-[#751629] underline' : 'text-[#280e0f] hover:text-[#751629]'
                  }`}
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('community')}
                  className={`font-calsans text-2xl sm:text-3xl font-semibold uppercase tracking-wider py-1 cursor-pointer transition-colors ${
                    currentRoute === 'community' ? 'text-[#751629] underline' : 'text-[#280e0f] hover:text-[#751629]'
                  }`}
                >
                  Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className={`font-calsans text-2xl sm:text-3xl font-semibold uppercase tracking-wider py-1 cursor-pointer transition-colors ${
                    currentRoute === 'products' ? 'text-[#751629] underline' : 'text-[#280e0f] hover:text-[#751629]'
                  }`}
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('locations')}
                  className={`font-calsans text-2xl sm:text-3xl font-semibold uppercase tracking-wider py-1 cursor-pointer transition-colors ${
                    currentRoute === 'locations' ? 'text-[#751629] underline' : 'text-[#280e0f] hover:text-[#751629]'
                  }`}
                >
                  Find a Reseller
                </button>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="font-calsans text-2xl sm:text-3xl font-semibold text-[#280e0f] hover:text-[#751629] uppercase tracking-wider py-1 cursor-pointer transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div className="w-24 h-px bg-[#280e0f] mx-auto my-6 opacity-25"></div>

          <div className="text-center">
            <div className="flex justify-center gap-5 mb-5">
              <a
                href="https://www.facebook.com/tikirimanikehk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#e6d9c2] flex items-center justify-center text-[#280e0f] hover:bg-[#751629] hover:text-[#f5eddb] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tikirimanikehk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#e6d9c2] flex items-center justify-center text-[#280e0f] hover:bg-[#751629] hover:text-[#f5eddb] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <p className="font-calsans text-xs text-[#9f9383] uppercase tracking-wider mb-1">
              From Our Fields, To Your Home
            </p>
            <p className="font-calsans text-xs text-[#9f9383]">
              2023 © Tikiri Manike
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

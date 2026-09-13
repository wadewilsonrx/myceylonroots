import React from 'react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="bg-[#e6d9c2] text-[#280e0f] pt-[6.5rem] pb-[7rem] font-calsans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Navigation Row */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8">
          {/* Col 1: Brand & Socials (order-4 on mobile, first on lg) */}
          <div className="col-span-12 lg:col-span-3 order-4 lg:order-none">
            <div className="contact flex flex-col items-center lg:items-start text-center lg:text-left">
              <button
                onClick={() => onNavigate('home')}
                className="hidden lg:block mb-0 focus:outline-none cursor-pointer"
              >
                <img
                  src="/media/logo-full.b1310cd4.svg"
                  alt="Tikiri Manike"
                  width={155}
                  height={200}
                  className="w-[155px] h-auto object-contain"
                />
              </button>
              <div className="social flex items-center justify-center lg:justify-start gap-8 pt-6 lg:pt-8">
                <a
                  href="https://www.facebook.com/tikirimanikehk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#280e0f] hover:text-[#751629] transition-colors"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 320 512"
                    aria-hidden="true"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/tikirimanikehk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#280e0f] hover:text-[#751629] transition-colors"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: SHOP (col-6 on mobile, col-3 on lg) */}
          <div className="col-span-6 lg:col-span-3">
            <div className="shop footer-menu">
              <p className="primary text-uppercase font-calder text-base text-[#751629] pb-4">
                Shop
              </p>
              <ul className="pl-0 list-none space-y-4 font-calsans text-base font-semibold text-[#280e0f]">
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    New &amp; Featured
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Authentic Spices
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Ready-To-Eats
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Gift Cards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Merchandise
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: EXPLORE (col-6 on mobile, col-3 on lg) */}
          <div className="col-span-6 lg:col-span-3">
            <div className="explore footer-menu">
              <p className="primary text-uppercase font-calder text-base text-[#751629] pb-4">
                Explore
              </p>
              <ul className="pl-0 list-none space-y-4 font-calsans text-base font-semibold text-[#280e0f]">
                <li>
                  <button
                    onClick={() => onNavigate('our-story')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('community')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Community
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('locations')}
                    className="footer-nav-link text-left cursor-pointer"
                  >
                    Find a Reseller
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: SUPPORT (col-6 on mobile, col-3 on lg) */}
          <div className="col-span-6 lg:col-span-3">
            <div className="support footer-menu">
              <p className="primary text-uppercase font-calder text-base text-[#751629] pb-4">
                Support
              </p>
              <ul className="pl-0 list-none space-y-4 font-calsans text-base font-semibold text-[#280e0f]">
                <li>
                  <a
                    href="https://store.tikirimanike.com/pages/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.tikirimanike.com/pages/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.tikirimanike.com/pages/return-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.tikirimanike.com/pages/frequently-asked-questions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row: Contact & Offices */}
        <div className="footer-bottom grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 mt-6">
          <div className="contact-info info-head">
            <h5 className="font-calsans text-lg font-semibold text-[#280e0f]">
              <a
                href="mailto:info@vbrands.hk"
                className="soil underline hover:text-[#751629] transition-colors"
              >
                info@vbrands.hk
              </a>
            </h5>
            <p className="navy font-calsans text-sm font-semibold text-[#0f1c25] pt-4 capitalize mb-0">
              HK: +852 90594636
            </p>
            <p className="navy font-calsans text-sm font-semibold text-[#0f1c25] pt-4 capitalize mb-0">
              LK: +94 776781111
            </p>
          </div>

          <div className="hongkong info-head mt-8 md:mt-0">
            <h5 className="soil font-calsans text-lg font-semibold text-[#280e0f]">
              Hong Kong
            </h5>
            <p className="navy font-calsans text-sm font-semibold text-[#0f1c25] pt-4 mb-0 leading-normal">
              14/F, Unit A1 Wing Yip Factory Building 21-27 Wing Yip Street
            </p>
            <p className="navy font-calsans text-sm font-semibold text-[#0f1c25] pt-4 mb-0 leading-normal">
              Kwai Chung, Hong Kong
            </p>
          </div>

          <div className="srilanka info-head mt-8 md:mt-0">
            <h5 className="soil font-calsans text-lg font-semibold text-[#280e0f]">
              Sri Lanka
            </h5>
            <p className="navy font-calsans text-sm font-semibold text-[#0f1c25] pt-4 mb-0 leading-normal">
              24/11, 3rd Lane Apeksha Hospital Road
            </p>
            <p className="navy font-calsans text-sm font-semibold text-[#0f1c25] pt-4 mb-0 leading-normal">
              Maharagama, Sri Lanka
            </p>
          </div>
        </div>

        {/* Footer Copy Row */}
        <div className="footer-copy flex flex-col sm:flex-row justify-between items-center mt-[4.2rem] pt-0 text-xs font-semibold font-calsans text-[#9f9383]">
          <p className="clay text-[#9f9383] mb-2 sm:mb-0">
            From Our Fields, To Your Home
          </p>
          <p className="clay text-[#9f9383]">
            2023 © Tikiri Manike
          </p>
        </div>
      </div>
    </footer>
  );
};

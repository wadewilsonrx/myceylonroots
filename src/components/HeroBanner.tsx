import React, { useState, useEffect } from 'react';

interface HeroBannerProps {
  onExploreClick: () => void;
}

const BANNER_IMAGES = [
  { src: '/media/banner-1.39e33d1a.webp', alt: 'Ceylon Organic Spices - Tikiri Manike' },
  { src: '/media/banner-2.cdccb9a1.webp', alt: 'Fresh Harvest from Sri Lankan farmlands' },
  { src: '/media/banner-3.d7cb94ce.webp', alt: 'Ancient tradition of Sri Lankan Cuisine' },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="banner" className="pt-[72px] sm:pt-[84px] lg:pt-[100px] w-full min-h-[calc(100vh-100px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
        {/* Left Side: Brand Story & Artwork */}
        <div
          className="relative bg-[#751629] text-[#f5eddb] flex flex-col justify-center items-center text-center px-5 sm:px-10 py-12 sm:py-16 lg:py-24 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url('/media/banner-bg.e0cef93c.webp')` }}
        >
          <div className="max-w-xl flex flex-col items-center">
            <div className="mb-4 sm:mb-6 w-36 sm:w-56 max-w-full">
              <img
                src="/media/logo-artwork.5c5baf3e.svg"
                alt="Tikiri Manike Artwork"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            <h1 className="font-calsans text-xl sm:text-3xl md:text-4xl lg:text-[2.25rem] leading-[1.25] text-[#f5eddb] mb-4 sm:mb-6 font-semibold">
              Celebrating Healthy Ancient Tradition of Sri Lankan Cuisine
            </h1>

            <p className="font-asul text-[#f5eddb] text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md opacity-90">
              Discover our exceptional range of Ceylon spices and foods, all lovingly grown and harvested in the nutrient-rich soils of Sri Lanka.
            </p>

            <button
              onClick={onExploreClick}
              className="btn-secondary2-custom cursor-pointer"
            >
              Explore Our Story
            </button>
          </div>
        </div>

        {/* Right Side: Visual Carousel */}
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-full overflow-hidden bg-[#280e0f]">
          {BANNER_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center lg:object-left-bottom"
              />
            </div>
          ))}

          {/* Dots Indicator with Accessible Touch Targets */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-1 sm:gap-2">
            {BANNER_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-300 block ${
                    idx === currentSlide
                      ? 'w-7 bg-[#f5eddb]'
                      : 'w-2.5 bg-[#f5eddb]/50 hover:bg-[#f5eddb]'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

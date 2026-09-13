import React, { useState } from 'react';
import { PARADISE_SLIDES } from '../../data/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Newsletter } from '../Newsletter';

export const OurStoryPage: React.FC = () => {
  const [paradiseIndex, setParadiseIndex] = useState(0);

  const handlePrevSlide = () => {
    setParadiseIndex((prev) => (prev === 0 ? PARADISE_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setParadiseIndex((prev) => (prev === PARADISE_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const currentParadise = PARADISE_SLIDES[paradiseIndex];

  return (
    <div className="pt-20 sm:pt-28 pb-0 bg-[#f5eddb]">
      {/* Section 1: Spicing up tradition */}
      <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="font-calder uppercase text-3xl sm:text-5xl lg:text-7xl text-[#751629] leading-[1.05] tracking-wide">
              SPICING UP<br />TRADITION
            </h1>
          </div>
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="font-asul text-base sm:text-lg lg:text-xl text-[#280e0f] leading-relaxed opacity-90">
              Our story weaves a tale of authenticity, health, and love, where age-old farming traditions meet sustainability for the future. Discover our journey from lush Sri Lankan farmlands to your table, one spice and a meal at a time.
            </p>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/media/header-art-1.01120099.webp"
                alt="Sri Lankan spice preparation"
                className="w-full h-[260px] sm:h-[400px] lg:h-[450px] object-cover"
              />
            </div>
            {/* Absolute overlay badge */}
            <div className="absolute -bottom-6 left-6 w-16 sm:w-24 md:w-28 drop-shadow-lg">
              <img
                src="/media/girl-left.55a3759b.svg"
                alt="Tikiri Manike illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:col-span-4 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/media/header-art-2.c621edeb.webp"
                alt="Traditional farm girl"
                className="w-full h-[260px] sm:h-[400px] lg:h-[450px] object-cover"
              />
            </div>
            {/* Absolute overlay logo */}
            <div className="absolute -bottom-6 right-6 w-16 sm:w-20 md:w-24 drop-shadow-lg">
              <img
                src="/media/logo.826c56fa.svg"
                alt="Logo badge"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bio Section */}
      <section id="bio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="bg-[#e6d9c2] rounded-3xl p-5 sm:p-10 lg:p-16 border-2 sm:border-4 border-[#280e0f]/20 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <img
                src="/media/bio-art.583d09c8.svg"
                alt="Tikiri Manike portrait"
                className="w-48 sm:w-64 lg:w-80 h-auto object-contain drop-shadow-md"
              />
            </div>
            <div className="lg:col-span-8 text-center lg:text-left">
              <h3 className="font-calder text-xl sm:text-2xl lg:text-4xl text-[#1c3a30] leading-snug mb-4 sm:mb-6">
                Tikiri Manike is a tribute to rich agricultural heritage of Sri Lanka and the devotion of the traditional farmer’s wife.
              </h3>
              <div className="font-asul text-sm sm:text-base lg:text-lg text-[#0f1c25] space-y-4 leading-relaxed opacity-90">
                <p>
                  The devoted farmer’s wife who tends, cooks and carries to her husband and village helpers their daily ‘Ambula’; a healthily nutritious lunch, wrapped in a banana leaf to enjoy in the relaxed shade of its lush green farmlands.
                </p>
                <p>
                  Our story weaves a tale of authenticity, health, and love, where age-old farming traditions meet sustainability for the future. Discover our journey from lush Sri Lankan farmlands to your table, one spice and a meal at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Island Paradise Carousel */}
      <section
        id="paradise"
        className="relative bg-[#751629] text-[#f5eddb] py-14 sm:py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: `url('/media/paradise-red-bg.7b771f6f.webp')` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#dab427] text-[#280e0f] font-calsans text-xs font-bold uppercase tracking-wider mb-4">
                Region {paradiseIndex + 1} of {PARADISE_SLIDES.length}
              </div>
              <h2 className="font-calder uppercase text-2xl sm:text-4xl lg:text-5xl text-[#f5eddb] mb-4 sm:mb-6 tracking-wide">
                {currentParadise.title}
              </h2>
              <p className="font-asul text-sm sm:text-base lg:text-lg text-[#f5eddb]/90 leading-relaxed mb-6 sm:mb-8">
                {currentParadise.description}
              </p>

              <div className="bg-[#f5eddb]/10 backdrop-blur-sm border border-[#f5eddb]/20 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 inline-block w-full text-left">
                <p className="font-calsans text-xs uppercase tracking-wider text-[#dab427] font-bold mb-1">
                  Crops & Spices Grown Here:
                </p>
                <p className="font-asul text-base sm:text-lg font-bold text-[#f5eddb]">
                  {currentParadise.crops}
                </p>
              </div>

              {/* Slider Arrows */}
              <div className="flex justify-center lg:justify-start gap-4">
                <button
                  onClick={handlePrevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#f5eddb] bg-[#f5eddb] text-[#280e0f] flex items-center justify-center hover:bg-transparent hover:text-[#f5eddb] transition-colors cursor-pointer"
                  aria-label="Previous region"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#f5eddb] bg-[#f5eddb] text-[#280e0f] flex items-center justify-center hover:bg-transparent hover:text-[#f5eddb] transition-colors cursor-pointer"
                  aria-label="Next region"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#dab427]/30">
                <img
                  src={currentParadise.image}
                  alt={currentParadise.title}
                  className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Empowered by VBrands */}
      <section id="vbrands" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <h3 className="font-calsans text-xs sm:text-sm font-bold text-[#751629] uppercase tracking-widest mb-1">
                Empowered By
              </h3>
              <h2 className="font-calder uppercase text-3xl sm:text-4xl lg:text-5xl text-[#751629] tracking-wide">
                VBrands
              </h2>
            </div>

            <div className="font-asul text-sm sm:text-base text-[#0f1c25] space-y-4 leading-relaxed opacity-90 mb-6 sm:mb-8">
              <p>
                Our vision is to connect Sri Lanka with the world as a trusted partner for manufacturers and consumers. We are an importer, distributor, wholesaler, and retailer of specialized Sri Lankan products in Hong Kong. Collaborating with various stakeholders, we sell Food & Beverage, Personal Care, Household and Clothing products.
              </p>
              <p>
                With over 30 years of experience, we represent our partners in retail & wholesale markets and trade exhibitions in Hong Kong & China. We also assist Sri Lankan startups in manufacturing quality export products and serve as a sourcing hub. Recognized by Invest Hong Kong, we proudly represent partner brands on HKTVmall, reaching 1.1 million customers.
              </p>
            </div>

            <a
              href="https://vbrands.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom inline-block cursor-pointer"
            >
              Learn more
            </a>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#280e0f]/10">
              <img
                src="/media/vbrands.3f2212aa.webp"
                alt="VBrands Showcase"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

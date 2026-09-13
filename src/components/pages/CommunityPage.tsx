import React, { useState } from 'react';
import { FARMERS } from '../../data/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Newsletter } from '../Newsletter';

export const CommunityPage: React.FC = () => {
  const [activeFarmerIndex, setActiveFarmerIndex] = useState(0);

  const handlePrevFarmer = () => {
    setActiveFarmerIndex((prev) => (prev === 0 ? FARMERS.length - 1 : prev - 1));
  };

  const handleNextFarmer = () => {
    setActiveFarmerIndex((prev) => (prev === FARMERS.length - 1 ? 0 : prev + 1));
  };

  const farmer = FARMERS[activeFarmerIndex];

  return (
    <div className="pt-20 sm:pt-28 pb-0 bg-[#f5eddb]">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 text-center">
        <p className="font-calsans font-bold text-base sm:text-xl text-[#280e0f] mb-2 sm:mb-3">
          Our Community
        </p>
        <h1 className="font-calder uppercase text-2xl sm:text-4xl lg:text-6xl text-[#751629] tracking-wider mb-4 sm:mb-6">
          HEART OF TIKIRI MANIKE
        </h1>
        <p className="font-asul text-sm sm:text-base lg:text-lg text-[#0f1c25] max-w-3xl mx-auto leading-relaxed">
          ...hands and heart of Tikiri Manike – our dedicated farmers. Their passion and hard work bring the true flavors of Sri Lanka.
          <br className="hidden sm:inline" />
          Explore their stories and discover their invaluable role in our journey from farm to fork.
        </p>
      </section>

      {/* Farmer Profile Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-[#e6d9c2] rounded-3xl p-5 sm:p-10 lg:p-16 border-2 border-[#280e0f]/15 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Farmer Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg border-2 sm:border-4 border-[#f5eddb]">
                <img
                  src={farmer.image}
                  alt={farmer.fullName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Farmer Story */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#dab427] text-[#280e0f] font-calsans text-xs font-bold uppercase tracking-wider mb-4">
                Specialty: {farmer.crop}
              </div>

              <h2 className="font-calder uppercase text-2xl sm:text-4xl text-[#1c3a30] mb-4 sm:mb-6 tracking-wide">
                {farmer.fullName}
              </h2>

              <p className="font-asul text-sm sm:text-base lg:text-lg text-[#0f1c25] leading-relaxed mb-6 sm:mb-8 opacity-90">
                "{farmer.bio}"
              </p>

              {/* Slider Controls */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={handlePrevFarmer}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] text-[#280e0f] flex items-center justify-center hover:bg-[#280e0f] hover:text-[#f5eddb] transition-colors cursor-pointer"
                  aria-label="Previous farmer"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <span className="font-calsans text-xs sm:text-sm font-bold text-[#280e0f]">
                  {activeFarmerIndex + 1} / {FARMERS.length}
                </span>
                <button
                  onClick={handleNextFarmer}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#280e0f] bg-[#f5eddb] text-[#280e0f] flex items-center justify-center hover:bg-[#280e0f] hover:text-[#f5eddb] transition-colors cursor-pointer"
                  aria-label="Next farmer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section: Our Seal of Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-calder uppercase text-2xl sm:text-4xl text-[#751629] mb-3 sm:mb-4 tracking-wide">
            OUR SEAL OF QUALITY
          </h2>
          <p className="font-asul text-sm sm:text-base lg:text-lg text-[#280e0f] opacity-85">
            Every harvest supports regenerative soil health, ethical farmer livelihoods, and Sri Lanka’s traditional biodiversity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-[#f5eddb] border border-[#280e0f]/15 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src="/media/icon-1.c2030df3.svg" alt="Fair Trade" className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5" />
            <h3 className="font-calsans text-lg sm:text-xl font-semibold text-[#1c3a30] mb-2 sm:mb-3">Fair Trade</h3>
            <p className="font-asul text-xs sm:text-sm text-[#0f1c25] opacity-80 leading-relaxed">
              Ensuring equitable pricing, transparent value chains, and guaranteed purchase contracts for smallholder farmers.
            </p>
          </div>

          <div className="bg-[#f5eddb] border border-[#280e0f]/15 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src="/media/icon-2.b61c3b2d.svg" alt="Farmer Owned" className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5" />
            <h3 className="font-calsans text-lg sm:text-xl font-semibold text-[#1c3a30] mb-2 sm:mb-3">Farmer Owned</h3>
            <p className="font-asul text-xs sm:text-sm text-[#0f1c25] opacity-80 leading-relaxed">
              Championing agricultural cooperatives where farmers retain control of ancestral lands and processing mills.
            </p>
          </div>

          <div className="bg-[#f5eddb] border border-[#280e0f]/15 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src="/media/icon-3.c21913cd.svg" alt="Women Farmers" className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5" />
            <h3 className="font-calsans text-lg sm:text-xl font-semibold text-[#1c3a30] mb-2 sm:mb-3">Women Support</h3>
            <p className="font-asul text-xs sm:text-sm text-[#0f1c25] opacity-80 leading-relaxed">
              Fostering female agricultural entrepreneurship, spice grading workshops, and micro-loan cooperatives.
            </p>
          </div>

          <div className="bg-[#f5eddb] border border-[#280e0f]/15 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src="/media/icon-4.9020984c.svg" alt="Hands that Harvest" className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5" />
            <h3 className="font-calsans text-lg sm:text-xl font-semibold text-[#1c3a30] mb-2 sm:mb-3">Hands That Harvest</h3>
            <p className="font-asul text-xs sm:text-sm text-[#0f1c25] opacity-80 leading-relaxed">
              Sustaining generations of manual harvesting mastery, from hand-peeling cinnamon to sun-drying peppercorns.
            </p>
          </div>
        </div>
      </section>

      {/* Farm Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/media/Rectangle 7.8b0a734c.webp"
              alt="Sri Lankan spice plantation"
              className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/media/Rectangle 8.352a4392.webp"
              alt="Harvesting cinnamon and cloves"
              className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/media/Rectangle 9.bfbe409a.webp"
              alt="Traditional spice processing"
              className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

import React from 'react';

interface LocatorSectionProps {
  onFindStoreClick: () => void;
}

export const LocatorSection: React.FC<LocatorSectionProps> = ({ onFindStoreClick }) => {
  return (
    <section id="locator" className="bg-[#f5eddb] py-14 sm:py-20 lg:py-28 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-calder uppercase text-2xl sm:text-4xl md:text-5xl text-[#751629] mb-4 sm:mb-6 tracking-wide">
          WHERE ARE WE?
        </h2>

        <p className="font-asul text-sm sm:text-base lg:text-lg text-[#280e0f] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 opacity-90">
          Looking to explore the taste of Tikiri Manike closer to home? Use our reseller locator to find the nearest store offering our organic spices and ready-to-eat meals.
        </p>

        <button
          onClick={onFindStoreClick}
          className="btn-primary-custom mb-12 sm:mb-16 cursor-pointer"
        >
          Find Store
        </button>

        {/* 5 Certification & Partner Logos */}
        <div className="border-t border-[#280e0f]/15 pt-8 sm:pt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 opacity-85 hover:opacity-100 transition-opacity">
            <img
              src="/media/logo1.e6229b30.png"
              alt="Certification seal 1"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
            <img
              src="/media/logo2.1930aad9.png"
              alt="Certification seal 2"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
            <img
              src="/media/logo3.c5f55f60.png"
              alt="Certification seal 3"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
            <img
              src="/media/logo4.80b1f20c.png"
              alt="Certification seal 4"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
            <img
              src="/media/logo5.5584b8c3.png"
              alt="Certification seal 5"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

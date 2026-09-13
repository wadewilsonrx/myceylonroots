import React from 'react';

interface FarmersSectionProps {
  onFarmersClick: () => void;
}

export const FarmersSection: React.FC<FarmersSectionProps> = ({ onFarmersClick }) => {
  return (
    <>
      {/* Desktop Section */}
      <section
        id="farmers"
        className="hidden lg:block relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/media/farmers-bg.f333c8ae.webp')`,
          backgroundPosition: '50%',
          paddingTop: '13.5rem',
          paddingBottom: '13.5rem',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-7 lg:col-span-6 xl:col-start-8 xl:col-span-5 flex flex-col items-start text-left">
              <h2 className="font-calder uppercase text-4xl sm:text-5xl xl:text-[3.25rem] text-[#f5eddb] leading-[1.12] mb-5 tracking-wide">
                The Hands that<br />Harvest
              </h2>
              <p className="font-asul text-base lg:text-lg text-[#f5eddb] leading-relaxed mb-8 max-w-lg opacity-95">
                At the heart of Tikiri Manike, you'll find our community of dedicated farmers. They're the hands that lovingly sow, care for, and harvest our top-quality spices and ingredients.
              </p>
              <button
                onClick={onFarmersClick}
                className="btn-tertiary-custom"
              >
                Our Farmers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile / Tablet Section */}
      <section
        id="farmers-mob"
        className="lg:hidden bg-[#1c3a30] text-[#f5eddb] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/media/harvest-bg.93287080.svg')` }}
      >
        <div className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-5 max-w-lg mx-auto text-center flex flex-col items-center">
          <h2 className="font-calder uppercase text-2xl sm:text-4xl text-[#f5eddb] leading-tight mb-4 tracking-wide">
            The Hands that<br />Harvest
          </h2>
          <p className="font-asul text-sm sm:text-base text-[#f5eddb]/90 leading-relaxed mb-6 sm:mb-8 max-w-md">
            At the heart of Tikiri Manike, you'll find our community of dedicated farmers. They're the hands that lovingly sow, care for, and harvest our top-quality spices and ingredients.
          </p>
          <button
            onClick={onFarmersClick}
            className="btn-tertiary-custom cursor-pointer"
          >
            Our Farmers
          </button>
        </div>
        <div className="w-full">
          <img
            src="/media/harvest.c48d2a59.webp"
            alt="Harvesting Sri Lankan spices"
            className="w-full h-[260px] sm:h-[340px] md:h-[380px] object-cover"
          />
        </div>
      </section>
    </>
  );
};


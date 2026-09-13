import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const t = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonial-slider" className="bg-[#751629] text-[#f5eddb] py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center">
          {/* Left Decorative Artwork (Desktop) */}
          <div className="hidden lg:block lg:col-span-2">
            <img
              src="/media/girl-left.55a3759b.svg"
              alt="Tikiri Manike Illustration"
              className="w-full max-h-72 object-contain"
            />
          </div>

          {/* Testimonial Content (Center) */}
          <div className="col-span-12 lg:col-span-8 text-center flex flex-col items-center px-2 sm:px-8">
            {/* 5 Stars */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <svg
                  key={idx}
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    d="M11.0475 0.927049C11.3468 0.0057386 12.6502 0.00574004 12.9496 0.927051L14.9172 6.98278C15.0511 7.39487 15.4351 7.67382 15.8684 7.67382H22.2359C23.2045 7.67382 23.6073 8.91334 22.8236 9.48278L17.6723 13.2255C17.3217 13.4799 17.175 13.9312 17.309 14.3433L19.2766 20.399C19.5759 21.3203 18.5214 22.0864 17.7378 21.517L12.5864 17.7742C12.2358 17.5198 11.7612 17.5198 11.4107 17.7742L6.25927 21.517C5.47562 22.0864 4.42111 21.3203 4.72044 20.399L6.68805 14.3433C6.82199 13.9312 6.67534 13.4799 6.32479 13.2255L1.17345 9.48278C0.389793 8.91334 0.792556 7.67382 1.76118 7.67382H8.12868C8.56197 7.67382 8.94597 7.39487 9.07991 6.98278L11.0475 0.927049Z"
                    fill="#DAB427"
                  />
                </svg>
              ))}
            </div>

            {/* Testimonial Quote Headline */}
            <h3 className="font-asul text-xl sm:text-3xl md:text-4xl text-[#f5eddb] font-bold mb-3 sm:mb-4 leading-snug">
              "{t.quote}"
            </h3>

            {/* Subtext Body */}
            <p className="font-asul text-sm sm:text-base lg:text-lg text-[#f5eddb] max-w-2xl leading-relaxed mb-4 sm:mb-6 opacity-90">
              {t.subtitle}
            </p>

            {/* Author */}
            <p className="font-calsans text-xs sm:text-sm md:text-base font-semibold text-[#f5eddb] tracking-[0.2rem] uppercase mb-1">
              {t.author}
            </p>

            {/* Role */}
            <p className="font-asul text-xs sm:text-sm text-[#f5eddb]/80 mb-4 sm:mb-6">
              {t.role}
            </p>

            {/* Decorative underline */}
            <svg
              width="132"
              height="11"
              viewBox="0 0 132 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6 sm:mb-8"
            >
              <path
                d="M81.8542 7.56842C79.1893 8.46204 76.4014 8.93516 73.5909 8.9708C70.7221 8.99485 67.866 8.58641 65.119 7.75925C62.3763 6.87167 60.0154 5.54031 57.7166 4.89238C56.5512 4.548 55.3349 4.40835 54.1219 4.47964C52.7796 4.62592 51.4503 4.87367 50.1455 5.22077C51.1313 4.13209 52.343 3.27182 53.6958 2.70006C55.135 2.12878 56.6918 1.91703 58.2313 2.08318C61.3379 2.44709 63.8408 3.77402 66.2195 4.71485C68.6442 5.70346 71.1762 6.40499 73.764 6.80511C76.4433 7.21927 79.1448 7.47415 81.8542 7.56842Z"
                fill="#F5EDDB"
              />
            </svg>

            {/* Carousel Navigation Arrows */}
            <div className="flex justify-center gap-3 sm:gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#f5eddb] bg-[#f5eddb] text-[#280e0f] flex items-center justify-center hover:bg-transparent hover:text-[#f5eddb] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#f5eddb] bg-[#f5eddb] text-[#280e0f] flex items-center justify-center hover:bg-transparent hover:text-[#f5eddb] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Decorative Artwork (Desktop) */}
          <div className="hidden lg:block lg:col-span-2">
            <img
              src="/media/girl-right.f64419cf.svg"
              alt="Tikiri Manike Illustration"
              className="w-full max-h-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

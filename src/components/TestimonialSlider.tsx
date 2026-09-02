import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/foundationData';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section id="testimoni" className="py-16 sm:py-20 lg:py-24 bg-white/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-[#064E3B] text-xs sm:text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 text-[#C5A059] fill-current" />
            <span>Kisah Nyata & Pengalaman</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#064E3B] tracking-tight leading-tight mb-5">
            Apa Kata Orang Tua & Santri?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Amanah dan kepercayaan para orang tua serta kebahagiaan para santri adalah motivasi utama kami dalam terus berkhidmat.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 md:p-14 border border-stone-200/90 shadow-xl relative overflow-hidden transition-all">
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-stone-100 -rotate-12 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
              
              {/* Stars & Unit Badge */}
              <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C5A059] fill-current" />
                  ))}
                </div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-[#064E3B] text-xs font-bold border border-emerald-200">
                  {TESTIMONIALS[currentIndex].unit}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="text-stone-800 text-base sm:text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                "{TESTIMONIALS[currentIndex].quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-[#C5A059]"
                />
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[#064E3B]">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 font-medium">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Controls: Prev / Next buttons */}
          <div className="flex items-center justify-between mt-8 px-2">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#064E3B]'
                      : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navs */}
            <div className="flex items-center gap-3">
              <button
                id="testimonial-prev-btn"
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#064E3B] hover:border-[#064E3B] shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-[#064E3B] text-white hover:bg-[#032E24] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#C5A059]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeItem = testimonials[currentIndex] || testimonials[0];

  if (!activeItem) return null;

  return (
    <div className="space-y-8">
      {/* Featured Testimonial Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-100 max-w-4xl mx-auto relative overflow-hidden transition-all duration-300">
        <Quote className="absolute -top-4 -right-4 w-32 h-32 text-sky-50 opacity-80 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left side: Avatar & Rating */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-sky-100 shadow-md mb-2">
              <img
                src={activeItem.avatar}
                alt={activeItem.author}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Star Rating */}
            <div className="flex items-center space-x-1 mt-3">
              {[...Array(activeItem.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Right side: Quote details */}
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <span className="inline-block px-3.5 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-full border border-sky-100">
              📍 {activeItem.branch}
            </span>

            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed italic">
              "{activeItem.quote}"
            </p>

            <div>
              <h4 className="text-lg font-extrabold text-slate-900">{activeItem.author}</h4>
              <p className="text-xs font-semibold text-amber-600">{activeItem.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-400">
            Story {currentIndex + 1} of {testimonials.length}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

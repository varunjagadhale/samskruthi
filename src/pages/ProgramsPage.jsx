import React, { useState } from 'react';
import SEO from '../components/SEO';
import CourseCard from '../components/CourseCard';
import { siteConfig } from '../data/siteData';

export default function ProgramsPage({ onOpenDemoModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Preschool', 'K-10 Foundation', 'Pre-University (PUC)', 'Competitive Prep', 'Skill Enhancement'];

  const filteredCourses = activeCategory === 'All'
    ? siteConfig.courses
    : siteConfig.courses.filter(c => c.category === activeCategory);

  return (
    <>
      <SEO
        title="Programs Offered | Samskruthi Academy Mandya & Mysuru"
        description="Explore educational programs at Samskruthi Academy: International Preschooling, Class 1-10 CBSE/State coaching, PUC Science & Commerce, NEET/KCET foundation."
      />

      {/* Header Banner */}
      <section className="bg-soft-gradient py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-extrabold rounded-full uppercase">
            Curriculum & Courses
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Educational Programs Offered
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            From early childhood foundational curiosity to competitive engineering & medical entrance mastery.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-sky-600 text-white shadow-glow-blue'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onInquire={(courseTitle) => onOpenDemoModal('', courseTitle)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

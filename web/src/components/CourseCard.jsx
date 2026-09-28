import React from 'react';
import { CheckCircle2, ArrowRight, Baby, BookOpen, GraduationCap, Target, Sparkles } from 'lucide-react';

const iconMap = {
  Baby,
  BookOpen,
  GraduationCap,
  Target,
  Sparkles
};

export default function CourseCard({ course, onInquire }) {
  const IconComponent = iconMap[course.icon] || BookOpen;

  return (
    <div className="card-light-gradient rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
      {/* Top Accent Gradient Bar (Blue to Orange) */}
      <div className="absolute top-0 left-0 right-0 h-2 card-top-gradient-bar" />


      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-black rounded-full border border-sky-300 shadow-xs">
            {course.category}
          </span>
          {course.badge && (
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 text-xs font-black rounded-full border border-amber-300 shadow-xs">
              {course.badge}
            </span>
          )}
        </div>

        {/* Header Icon + Title */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-colors duration-300 shadow-md">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-950 group-hover:text-sky-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-xs font-black text-amber-600 mt-0.5">{course.subtitle}</p>
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm mb-6 leading-relaxed font-medium">
          {course.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Course Pillars</p>
          {course.highlights.map((h, i) => (
            <div key={i} className="flex items-start text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info & Action Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase">Grades Covered</p>
          <p className="text-xs font-extrabold text-slate-800">{course.grades}</p>
        </div>
        <button
          onClick={() => onInquire(course.title)}
          className="py-2.5 px-5 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-glow-blue hover:shadow-lg transition-all flex items-center space-x-1"
        >
          <span>Book Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { ShieldCheck, Award, Heart, Eye, Target, Users, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';
import { siteConfig } from '../data/siteData';

export default function About({ onOpenDemoModal }) {
  const values = [
    {
      title: "Character First",
      desc: "True education builds moral integrity, discipline, and empathy alongside textbook intelligence.",
      icon: ShieldCheck
    },
    {
      title: "Conceptual Clarity",
      desc: "We replace rote memorization with deep analytical understanding and real-world application.",
      icon: Eye
    },
    {
      title: "Student-Centric Mentorship",
      desc: "Every learner receives personalized guidance, doubt clearing, and psychological encouragement.",
      icon: Heart
    },
    {
      title: "Academic Rigor",
      desc: "High standards of teaching, structured testing, and continuous feedback to ensure 95%+ results.",
      icon: Target
    }
  ];

  return (
    <>
      <SEO
        title="About Samskruthi Academy | Education builds character"
        description="Learn about Samskruthi Academy's journey, vision, leadership, and commitment to delivering quality education across 5 campuses in Mandya & Mysuru."
      />

      {/* Hero Banner Header */}
      <section className="bg-soft-gradient py-16 sm:py-24 border-b border-sky-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 bg-sky-100 text-sky-700 text-xs font-extrabold rounded-full uppercase tracking-wider">
            Our Legacy of Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 max-w-3xl mx-auto">
            About Samskruthi Academy
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-3 font-medium">
            "{siteConfig.tagline}" — Nurturing Karnataka's youth with strong values, academic distinction, and competitive confidence.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-extrabold rounded-full border border-amber-200 uppercase">
                Founded on Purpose
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Transforming Education in Mandya & Mysuru
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a visionary motto that <strong>"Education builds character"</strong>, Samskruthi Academy has grown from a single learning center into Karnataka's premier educational network with 5 specialized campuses across Mandya and Mysuru (Kuvempu Nagar).
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that marks alone do not define a student's success. Our holistic educational model blends early childhood Montessori learning at Samskruthi International Preschool with rigorous SSLC board preparation, PUC Science/Commerce mastery, and competitive NEET/JEE/KCET foundation courses.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100">
                  <p className="text-2xl font-extrabold text-sky-700">
                    <AnimatedCounter value="10,000+" />
                  </p>
                  <p className="text-xs text-slate-600 font-semibold mt-1">Students Educated</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <p className="text-2xl font-extrabold text-amber-700">
                    <AnimatedCounter value="5" /> Campuses
                  </p>
                  <p className="text-xs text-slate-600 font-semibold mt-1">Mandya & Mysuru</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                  alt="Samskruthi Academy Mysuru Campus"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FROM FOUNDER'S DESK SECTION */}
      <section className="py-16 bg-white border-b border-sky-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-50 via-white to-amber-50/70 rounded-3xl p-8 sm:p-12 border-2 border-sky-200/80 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-lg shrink-0">
              <img
                src={siteConfig.founderQuote.image}
                alt={siteConfig.founderQuote.author}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4 text-center md:text-left flex-1">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 font-extrabold text-xs rounded-full border border-amber-300 tracking-wider uppercase shadow-xs">
                ✨ {siteConfig.founderQuote.badge}
              </span>

              <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug italic">
                “{siteConfig.founderQuote.quote}”
              </blockquote>

              <div className="pt-2 border-t border-slate-200/60">
                <p className="text-lg font-extrabold text-sky-700">— {siteConfig.founderQuote.author}</p>
                <p className="text-xs text-slate-500 font-semibold">{siteConfig.founderQuote.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-soft-gradient">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-sky-100 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To be Karnataka's most trusted educational institution that creates ethical, resilient, and academically brilliant global citizens who contribute positively to society.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-100 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To provide affordable, top-tier conceptual education, state-of-the-art infrastructure, experienced faculty mentorship, and character-first values to every student across Mandya and Mysuru.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-extrabold rounded-full uppercase">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Core Institutional Values</h2>
            <p className="text-slate-600 text-sm">Every lecture, examination, and interaction is rooted in these foundational principles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{v.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Join the Samskruthi Academy Legacy</h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a complimentary campus tour and demo session at any of our branches in Mandya or Mysuru.
          </p>
          <button
            onClick={() => onOpenDemoModal()}
            className="py-4 px-8 rounded-full bg-orange-gradient text-white font-extrabold text-base shadow-glow-orange hover:brightness-105 transition-all inline-flex items-center space-x-2"
          >
            <span>Book Free Demo Class</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}

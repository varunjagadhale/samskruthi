import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Award, MapPin, Users, Laptop, Target, Sparkles, Star, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import BranchCard from '../components/BranchCard';
import CourseCard from '../components/CourseCard';
import TestimonialSlider from '../components/TestimonialSlider';
import LeadForm from '../components/LeadForm';
import AnimatedCounter from '../components/AnimatedCounter';
import { getAssetUrl } from '../utils/url';
import { siteConfig } from '../data/siteData';

const iconMap = {
  ShieldCheck,
  Award,
  MapPin,
  Users,
  Laptop,
  Target
};

export default function Home({ onOpenDemoModal }) {
  const [selectedCity, setSelectedCity] = useState('All');
  const [demoDefaultBranch, setDemoDefaultBranch] = useState('');

  const filteredBranches = selectedCity === 'All'
    ? siteConfig.branches
    : siteConfig.branches.filter(b => b.city.toLowerCase() === selectedCity.toLowerCase());

  const handleBranchDemo = (branchName) => {
    setDemoDefaultBranch(branchName);
    onOpenDemoModal(branchName);
  };

  return (
    <>
      <SEO
        title="Samskruthi Academy | Premier Education in Mandya & Mysuru"
        description="Education builds character. Samskruthi Academy offers international preschooling, Class 1-10 coaching, PUC Science/Commerce, and NEET/KCET foundation across 5 campuses in Mandya & Mysuru."
      />

      {/* SECTION 1: HERO SECTION WITH CUSTOM DYNAMIC VIDEO BACKGROUND */}
      <section className="relative overflow-hidden bg-slate-900 text-slate-900 pt-8 pb-20 lg:pt-16 lg:pb-28">
        
        {/* Dynamic HTML5 Video Background Canvas */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Autoplay Hero Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-75 filter brightness-115 contrast-110 saturate-125 scale-105"
          >
            <source src={getAssetUrl('/hero-bg.mp4')} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Clean Light Crystal Overlay for Optimum Brightness & High Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />

          {/* Organic Fluid Glowing Light Blobs */}
          <div className="absolute -top-10 -left-10 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-sky-400/30 via-cyan-300/25 to-blue-200/15 blur-3xl" />
          <div className="absolute top-1/4 -right-10 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-amber-400/25 via-orange-300/20 to-yellow-200/15 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          <div className="max-w-3xl text-left space-y-6 py-4">
            
            {/* Badge & Motto */}
            <div className="flex flex-wrap items-center justify-start gap-2">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-2 border-sky-300 text-sky-800 text-xs sm:text-sm font-extrabold shadow-md">
                <span>Samskruthi Academy • Mandya & Mysuru</span>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider shadow-sm">
                "Education Builds Character"
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] drop-shadow-sm">
              Empowering Minds, <br />
              <span className="text-gradient-blue">Building Character</span> & Academic Distinction.
            </h1>

            {/* Subtext */}
            <p className="text-slate-800 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
              Mandya and Mysuru's premier educational academy. Delivering top-tier coaching for <strong className="text-sky-900 font-extrabold">Classes 1st–10th (CBSE/State/ICSE)</strong>, <strong className="text-sky-900 font-extrabold">PUC Science & Commerce</strong>, <strong className="text-sky-900 font-extrabold">NEET/KCET Prep</strong>, and <strong className="text-sky-900 font-extrabold">Sainik/UPSC Foundation</strong>.
            </p>

            {/* Syllabus Badges Bar */}
            <div className="pt-2 flex flex-wrap justify-start gap-2">
              {['CBSE', 'ICSE', 'STATE', 'SAINIK', 'NAVODAYA', 'UPSC / KPSC'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-white border-2 border-sky-300 text-sky-800 font-black text-xs rounded-xl shadow-sm">
                  ✓ {tag}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenDemoModal()}
                className="w-full sm:w-auto py-4 px-8 rounded-full bg-orange-gradient text-white text-base font-black shadow-glow-orange hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2 border-2 border-amber-300"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto py-4 px-8 rounded-full bg-white hover:bg-sky-50 text-sky-800 border-2 border-sky-400 text-base font-black shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5 text-sky-600" />
                <span>Call Hotline: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Trust Metrics Pill */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap justify-start gap-6 text-xs font-extrabold text-slate-700">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>5 Campuses in Mandya & Mysuru</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>98.4% SSLC / PUC Pass & Distinction</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>1:1 Personalised Coaching & Homework Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 2: LIGHT VIVID STATS COUNTER BAR */}
      <section className="bg-gradient-to-r from-sky-100/90 via-white to-amber-100/80 py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {siteConfig.hero.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <p className="text-3xl sm:text-4xl font-black text-sky-600 drop-shadow-xs">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-black tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARDS & SPECIALIZED ACADEMIC DIVISIONS BANNER (LIGHT SKY-BLUE & AMBER GRADIENT) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="card-light-gradient rounded-3xl p-8 sm:p-12 text-slate-900 shadow-xl relative overflow-hidden">
            {/* Top Blue-to-Orange Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 card-top-gradient-bar" />

            {/* Background Decorative Light Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              {/* Top Tag & Title */}
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <span className="px-4 py-1.5 bg-amber-100 text-amber-900 font-black text-xs rounded-full border border-amber-300 uppercase tracking-wider shadow-xs">
                  All Major Syllabi & Competitive Exams Covered
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
                  Tuitions for 1st to 10th Std & Competitive Foundations
                </h2>
                <p className="text-slate-700 text-xs sm:text-sm font-medium">
                  Comprehensive academic coaching, 1:1 personalized care, and early civil/defence foundation modules.
                </p>
              </div>

              {/* Boards Pills Bar */}
              <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                {siteConfig.boards.map((b) => (
                  <div
                    key={b.name}
                    className="px-5 py-2.5 rounded-2xl bg-white border-2 border-sky-200 hover:border-sky-400 hover:shadow-md transition-all text-center group cursor-default"
                  >
                    <span className="text-sm font-black text-sky-800 block">{b.name}</span>
                    <span className="text-[10px] font-bold text-slate-600 block">{b.label}</span>
                  </div>
                ))}
              </div>

              {/* Grid of Key Coaching Offerings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                
                <div className="p-5 rounded-2xl bg-white/95 border-2 border-sky-100 hover:border-sky-300 hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-lg">
                    📚
                  </div>
                  <h4 className="font-black text-sm text-slate-950">REGULAR TUITIONS</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">For Classes 1st - 10th (STATE / CBSE / ICSE Syllabus) with continuous concept building.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/95 border-2 border-sky-100 hover:border-sky-300 hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg">
                    🏛️
                  </div>
                  <h4 className="font-black text-sm text-slate-950">UPSC & KPSC FOUNDATION</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">Civil services & administrative exam foundation for students in 6th to 10th standard.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/95 border-2 border-sky-100 hover:border-sky-300 hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg">
                    👨‍🏫
                  </div>
                  <h4 className="font-black text-sm text-slate-950">1:1 PERSONALISED COACHING</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">Dedicated individual mentor guidance, daily Homework & School Project support.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/95 border-2 border-sky-100 hover:border-sky-300 hover:shadow-md transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-lg">
                    🎖️
                  </div>
                  <h4 className="font-black text-sm text-slate-950">DEFENCE & GOVT EXAMS</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">Preparation for Sainik, Navodaya, Defence, Banking, and Central/State Govt Exams.</p>
                </div>

              </div>

              {/* Bottom CTA bar inside section */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between border-t-2 border-sky-100 gap-4">
                <div className="flex items-center space-x-2 text-xs font-black text-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Mock Tests & Performance Assessments conducted weekly!</span>
                </div>
                <button
                  onClick={() => onOpenDemoModal()}
                  className="py-2.5 px-6 rounded-full bg-orange-gradient text-white text-xs font-black shadow-glow-orange hover:brightness-105 transition-all"
                >
                  Book Free Demo Class
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: WHY CHOOSE US / ABOUT PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-extrabold rounded-full border border-sky-100 uppercase tracking-wider">
              The Samskruthi Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Parents & Students Choose Samskruthi Academy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We go beyond rote learning. Our holistic approach builds moral character, conceptual clarity, and exam confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.map((feature) => {
              const IconComp = iconMap[feature.icon] || ShieldCheck;
              return (
                <div
                  key={feature.id}
                  className="bg-slate-50/70 rounded-3xl p-8 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: COURSES & PROGRAMS OFFERED */}
      <section className="py-20 bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-extrabold rounded-full border border-amber-200 uppercase tracking-wider">
                Comprehensive Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Programs Offered Across Mandya & Mysuru
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From early childhood international preschooling to competitive NEET/KCET foundation courses.
              </p>
            </div>
            
            <Link
              to="/programs"
              className="py-3 px-6 rounded-full bg-white text-sky-600 border border-sky-200 font-bold text-xs sm:text-sm hover:bg-sky-50 transition-colors flex items-center space-x-1 shrink-0 shadow-sm"
            >
              <span>Explore All Programs</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.courses.map((course) => (
              <CourseCard key={course.id} course={course} onInquire={handleBranchDemo} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR BRANCHES (CITY-WISE FILTER & BRANCH CARDS) */}
      <section className="py-20 bg-white" id="branches-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-extrabold rounded-full border border-sky-100 uppercase tracking-wider">
              Accessible Near You
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our 5 Branch Campuses in Karnataka
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our state-of-the-art branch locations in Mandya and Mysuru. Click any branch to get Google Maps directions or connect directly.
            </p>

            {/* City Filter Tabs */}
            <div className="flex justify-center items-center space-x-2 pt-4">
              {['All', 'Mandya', 'Mysuru'].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    selectedCity === city
                      ? 'bg-sky-600 text-white shadow-glow-blue'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {city === 'All' ? 'All 5 Branches' : `${city} Branches`}
                </button>
              ))}
            </div>
          </div>

          {/* Branch Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBranches.map((branch) => (
              <BranchCard
                key={branch.id}
                branch={branch}
                onBookDemo={handleBranchDemo}
              />
            ))}
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

      {/* SECTION 6: TESTIMONIALS SLIDER */}
      <section className="py-20 bg-soft-gradient">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-extrabold rounded-full border border-amber-200 uppercase tracking-wider">
              Parent & Student Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Our Samskruthi Family Says
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Hear directly from parents and top-scoring students across our Mandya and Mysuru campuses.
            </p>
          </div>

          <TestimonialSlider testimonials={siteConfig.testimonials} />

        </div>
      </section>

      {/* SECTION 7: LEADS FORM SECTION */}
      <section className="py-20 bg-white" id="demo-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-extrabold rounded-full border border-sky-100 uppercase tracking-wider">
                Start Your Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Book a FREE Demo Class at Samskruthi Academy
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Experience our interactive classroom environment, meet our expert faculty, and assess our study methodology with zero commitment.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Personalized Student Assessment</h4>
                    <p className="text-xs text-slate-500">Free 1-on-1 concept check & learning analysis by senior faculty.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Free Study Kit & Trial Class</h4>
                    <p className="text-xs text-slate-500">Access sample notes, mock question banks, and interactive labs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Choice of 5 Campuses</h4>
                    <p className="text-xs text-slate-500">Select your nearest branch in Mandya or Mysuru Kuvempu Nagar.</p>
                  </div>
                </div>
              </div>

              {/* Direct Hotline Call Card */}
              <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-bold">Prefer calling directly?</p>
                  <p className="text-lg font-extrabold text-sky-700">{siteConfig.phone}</p>
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-colors"
                >
                  Call Now
                </a>
              </div>

            </div>

            {/* Right Lead Form Column */}
            <div className="lg:col-span-7">
              <LeadForm defaultBranch={demoDefaultBranch} />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: BLOG PREVIEW (LATEST 3 POSTS) */}
      <section className="py-20 bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-extrabold rounded-full border border-amber-200 uppercase tracking-wider">
                Latest Insights & Guides
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Educational Articles & Exam News
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Expert tips on SSLC, PUC, NEET preparation, and early childhood education.
              </p>
            </div>
            
            <Link
              to="/blog"
              className="py-3 px-6 rounded-full bg-white text-sky-600 border border-sky-200 font-bold text-xs sm:text-sm hover:bg-sky-50 transition-colors flex items-center space-x-1 shrink-0 shadow-sm"
            >
              <span>View All Articles</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-sky-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-sky-600 text-white text-[11px] font-extrabold rounded-full shadow">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center text-xs text-slate-400 space-x-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center space-x-1 group-hover:underline"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: MAP EMBED & QUICK CONTACT SUMMARY */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Map Embed (7 cols) */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] bg-slate-100 relative">
              <iframe
                src={siteConfig.branches[0].mapEmbed}
                title="Samskruthi Academy Head Office Location Map"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Quick Campus Contacts (5 cols) */}
            <div className="lg:col-span-5 p-8 bg-slate-900 text-white space-y-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">
                  Campus Headquarters
                </span>
                <h3 className="text-2xl font-extrabold mt-2 text-white">Visit Our Head Office</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {siteConfig.branches[0].address}
                </p>
              </div>

              <div className="space-y-3 border-y border-slate-800 py-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Headquarters Hotline:</span>
                  <span className="font-bold text-sky-400">{siteConfig.branches[0].phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Operating Hours:</span>
                  <span className="font-semibold text-slate-200">{siteConfig.branches[0].timing}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={siteConfig.branches[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-colors"
                >
                  Get Directions
                </a>
                <Link
                  to="/branches"
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs text-center transition-colors"
                >
                  View All 5 Branches
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

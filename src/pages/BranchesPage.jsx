import React, { useState } from 'react';
import SEO from '../components/SEO';
import BranchCard from '../components/BranchCard';
import { siteConfig } from '../data/siteData';

export default function BranchesPage({ onOpenDemoModal }) {
  const [activeCity, setActiveCity] = useState('All');

  const filteredBranches = activeCity === 'All'
    ? siteConfig.branches
    : siteConfig.branches.filter(b => b.city.toLowerCase() === activeCity.toLowerCase());

  return (
    <>
      <SEO
        title="Our Branches | Samskruthi Academy Mandya & Mysuru"
        description="Find all 5 Samskruthi Academy branches in Mandya (Head Office, Neharu Nagar Preschool, Ashok Nagar, Chamundeshwari Nagar) and Mysuru (Kuvempu Nagar)."
      />

      {/* Header Banner */}
      <section className="bg-soft-gradient py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-extrabold rounded-full border border-amber-200 uppercase">
            Multi-Campus Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Our Branch Campuses
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Conveniently located campuses equipped with modern smart classrooms, science labs, and safe child-centric infrastructure.
          </p>

          {/* City Filter Pills */}
          <div className="flex justify-center gap-3 pt-4">
            {['All', 'Mandya', 'Mysuru'].map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCity === city
                    ? 'bg-sky-600 text-white shadow-glow-blue'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {city === 'All' ? 'All 5 Branches' : `${city} Campuses`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBranches.map((branch) => (
              <BranchCard
                key={branch.id}
                branch={branch}
                onBookDemo={(bName) => onOpenDemoModal(bName)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

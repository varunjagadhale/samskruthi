import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, Check, Building2 } from 'lucide-react';

export default function BranchCard({ branch, onBookDemo }) {
  const whatsappMessage = encodeURIComponent(`Hi Samskruthi Academy, I want to inquire about admissions at ${branch.name}.`);
  const whatsappUrl = `https://wa.me/${branch.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="card-light-gradient rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1 relative">
      {/* Top Accent Bar */}
      <div className="h-1.5 card-top-gradient-bar w-full" />
      
      {/* Branch Image Header */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">

        <img
          src={branch.image}
          alt={branch.name}
          className="w-full h-full object-cover filter brightness-110 contrast-105 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent" />
        
        {/* City Badge & Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-sky-600/95 backdrop-blur-md text-white font-black text-xs rounded-full shadow-md">
            📍 {branch.city}
          </span>
          {branch.isHeadOffice && (
            <span className="px-3 py-1 bg-amber-500 backdrop-blur-md text-slate-950 font-black text-xs rounded-full shadow-md">
              ⭐ Head Office
            </span>
          )}
          {branch.isPreschool && (
            <span className="px-3 py-1 bg-emerald-500 backdrop-blur-md text-white font-black text-xs rounded-full shadow-md">
              🧸 Preschool
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-xl font-black leading-snug drop-shadow-lg">{branch.name}</h3>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Address & Landmark */}
          <div className="flex items-start text-slate-600 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-1 mr-2" />
            <div>
              <p className="font-medium text-slate-800">{branch.address}</p>
              <p className="text-amber-700 font-semibold text-xs mt-0.5">Landmark: {branch.landmark}</p>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-center text-slate-500 text-xs">
            <Clock className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
            <span>{branch.timing}</span>
          </div>

          {/* Facilities */}
          <div className="pt-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Campus Highlights</p>
            <div className="flex flex-wrap gap-1.5">
              {branch.facilities.map((fac, i) => (
                <span key={i} className="inline-flex items-center px-2.5 py-1 bg-sky-50 text-sky-800 rounded-lg text-xs font-medium">
                  <Check className="w-3 h-3 text-sky-600 mr-1" />
                  {fac}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {/* Call Button */}
            <a
              href={`tel:${branch.phone}`}
              className="py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all flex items-center justify-center space-x-1 shadow-sm"
              aria-label={`Call ${branch.name}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center justify-center space-x-1 shadow-sm"
              aria-label={`WhatsApp ${branch.name}`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat</span>
            </a>

            {/* Get Location Button */}
            <a
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center space-x-1"
              aria-label={`Get Location for ${branch.name}`}
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>Maps</span>
            </a>
          </div>

          {/* Book Demo at this branch CTA */}
          <button
            onClick={() => onBookDemo(branch.name)}
            className="w-full py-2.5 rounded-xl bg-orange-gradient text-white font-extrabold text-xs shadow-glow-orange hover:brightness-105 transition-all"
          >
            Book Free Demo at {branch.city} Branch
          </button>
        </div>
      </div>
    </div>
  );
}

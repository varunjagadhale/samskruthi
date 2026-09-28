import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUp, ExternalLink } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { getAssetUrl } from '../utils/url';
import { siteConfig } from '../data/siteData';


export default function Footer({ onOpenDemoModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Banner inside Footer */}
        <div className="bg-gradient-to-r from-sky-900/80 via-slate-800 to-amber-950/60 p-8 rounded-3xl border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full">
              Admissions Open 2026-27
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-2">
              Ready to Give Your Child the Samskruthi Advantage?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Book a complimentary counseling session and demo class at any of our 5 campuses in Mandya & Mysuru.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="py-3.5 px-7 rounded-full bg-orange-gradient text-white font-extrabold text-sm shadow-glow-orange hover:brightness-105 transition-all shrink-0"
          >
            Book Free Demo Class
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-sm">
          
          {/* Col 1: Logo & Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={getAssetUrl('/logo.png')} alt="Samskruthi Academy Logo" className="h-12 w-auto bg-white/10 p-1.5 rounded-xl" />
              <div>
                <span className="text-xl font-extrabold text-white block">Samskruthi Academy</span>
                <span className="text-xs font-bold text-amber-400 block tracking-wider uppercase">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed">
              {siteConfig.subTagline}. Dedicated to nurturing academic excellence, conceptual clarity, and moral integrity in every student.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-sky-400 font-semibold">{siteConfig.phone}</a>
                <span>/</span>
                <a href={`tel:${siteConfig.altPhone}`} className="hover:text-sky-400">{siteConfig.altPhone}</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-400">{siteConfig.email}</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{siteConfig.operatingHours}</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-2">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white transition-all" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white transition-all" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-all" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-all" aria-label="WhatsApp">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-sky-400">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Academy</Link></li>
              <li><Link to="/programs" className="hover:text-sky-400 transition-colors">Courses Offered</Link></li>
              <li><Link to="/branches" className="hover:text-sky-400 transition-colors">Branch Campuses</Link></li>
              <li><Link to="/blog" className="hover:text-sky-400 transition-colors">Blog & News</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs & Courses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-sky-400">Programs Offered</h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.courses.map(c => (
                <li key={c.id}>
                  <Link to="/programs" className="hover:text-sky-400 transition-colors flex items-center justify-between group">
                    <span>{c.title}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-amber-400 font-bold">{c.grades}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: All 5 Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider text-amber-400">Our 5 Campuses</h4>
            <div className="space-y-2.5 text-xs">
              {siteConfig.branches.map(b => (
                <div key={b.id} className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-sky-500/50 transition-colors">
                  <div className="flex items-center justify-between font-bold text-white text-[11px]">
                    <span className="text-sky-300">{b.name}</span>
                    <span className="px-1.5 py-0.5 bg-slate-700 text-amber-300 rounded text-[9px]">{b.city}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{b.landmark}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Backlinks & Educational Partners Section */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center space-y-3">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Recognized Educational Partner & Verified Directory Listings
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {siteConfig.partnerBacklinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 rounded-full text-xs font-medium border border-slate-700/60 transition-colors inline-flex items-center space-x-1"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Samskruthi Academy. All Rights Reserved. Education builds character.</p>
          
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-sky-400 hover:text-sky-300 font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

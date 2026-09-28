import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Search, Menu, X, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { siteConfig } from '../data/siteData';


export default function Header({ onOpenSearch, onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Branches', path: '/branches' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">


      {/* Main Glassmorphic Navbar */}
      <nav className="glass-header py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Samskruthi Academy Logo"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden min-[380px]:block">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">
                Samskruthi <span className="text-sky-600">Academy</span>
              </span>
              <span className="text-[10px] font-bold text-amber-600 block tracking-wider uppercase">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-sky-50 text-sky-600 font-bold shadow-xs'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Header Action Buttons (Search & Demo CTA) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Icon Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-transparent hover:border-sky-100 transition-all"
              aria-label="Open search overlay"
              title="Search programs, branches & blog (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Book Free Demo CTA Button */}
            <button
              onClick={onOpenDemoModal}
              className="hidden sm:inline-flex py-2.5 px-5 rounded-full bg-orange-gradient text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:brightness-105 active:scale-95 transition-all items-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
              <span>Book Free Demo Class</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-sky-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-in Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slideLeft z-10">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <img src="/logo.png" alt="Samskruthi Academy" className="h-9 w-auto" />
                  <div>
                    <span className="font-extrabold text-sm text-slate-900 block">Samskruthi Academy</span>
                    <span className="text-[10px] text-amber-600 font-bold">{siteConfig.tagline}</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                      isActive(link.path)
                        ? 'bg-sky-50 text-sky-600 font-extrabold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Call & Demo CTAs in Drawer */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-3.5 rounded-2xl bg-orange-gradient text-white text-sm font-extrabold shadow-glow-orange text-center block"
              >
                Book Free Demo Class
              </button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full py-3 rounded-2xl bg-sky-50 text-sky-700 text-sm font-bold text-center block hover:bg-sky-100 transition-colors"
              >
                📞 Call Us: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Check, X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('samskruthi_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('samskruthi_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('samskruthi_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-800 shadow-2xl animate-slideUp">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            We use essential cookies to personalize content, analyze site traffic, and enhance your experience across Samskruthi Academy's digital platform.{' '}
            <Link to="/privacy-policy" className="text-sky-400 font-semibold underline hover:text-sky-300">
              Learn More in Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors"
          >
            Decline Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-glow-blue flex items-center space-x-1"
          >
            <Check className="w-4 h-4" />
            <span>Accept All Cookies</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Gift, ArrowRight } from 'lucide-react';

export default function NotificationPopup({ onOpenDemo }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed during current session
    const isDismissed = sessionStorage.getItem('samskruthi_popup_dismissed');
    if (isDismissed) return;

    // Trigger pop-up after exactly 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('samskruthi_popup_dismissed', 'true');
  };

  const handleAction = () => {
    handleClose();
    onOpenDemo();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md w-full p-4 animate-bounce-short">
      <div className="bg-white rounded-3xl p-5 shadow-2xl border-2 border-amber-300 relative overflow-hidden">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-gradient" />

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
            <Gift className="w-6 h-6 animate-pulse" />
          </div>

          <div className="space-y-1 pr-4">
            <div className="inline-flex items-center space-x-1 px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-md">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Special Admission Offer</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900 leading-snug">
              Book Your FREE Demo Class Today!
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Enroll this week at any Mandya or Mysuru branch and receive a complimentary student study kit & learning assessment!
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
          <button
            onClick={handleClose}
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-700"
          >
            Maybe Later
          </button>
          <button
            onClick={handleAction}
            className="px-4 py-2 rounded-full bg-orange-gradient text-white text-xs font-extrabold shadow-glow-orange hover:brightness-105 transition-all flex items-center space-x-1"
          >
            <span>Claim Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

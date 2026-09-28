import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsappIcon } from './SocialIcons';
import { siteConfig } from '../data/siteData';


export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("Hi Samskruthi Academy, I want to book a FREE Demo Class.");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prebuiltOptions = [
    { label: "🎓 Book a FREE Demo Class", text: "Hi Samskruthi Academy, I want to book a FREE Demo Class for my child." },
    { label: "📚 Tuitions 1st - 10th (CBSE/State/ICSE)", text: "Hi, I need details on Regular Tuitions & Foundation for 1st - 10th std." },
    { label: "🎯 PUC Science/Commerce & NEET/KCET", text: "Hi, I want info about 1st/2nd PUC coaching & NEET/KCET prep." },
    { label: "🏛️ Sainik / Navodaya / UPSC Prep", text: "Hi, I want details about Sainik, Navodaya & UPSC Foundation classes." },
    { label: "📍 Campus Visit (Mandya / Mysuru)", text: "Hi, I want to visit your nearest branch campus in Mandya/Mysuru." }
  ];

  const handleStartWhatsAppChat = (customText = chatMessage) => {
    const textToSend = encodeURIComponent(customText);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${textToSend}`;
    window.open(whatsappUrl, '_blank');
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Mobile-Only Floating Call Button (Bottom Left) */}
      <div className="md:hidden fixed bottom-5 left-5 z-40">
        <a
          href={`tel:${siteConfig.phone}`}
          className="w-13 h-13 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-600/40 hover:bg-sky-700 transition-all active:scale-90"
          aria-label="Call Samskruthi Academy Now"
          title="Call Now"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
      </div>

      {/* Floating WhatsApp Chat Trigger & Interactive Prebuilt Box */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3 items-end">
        
        {/* Prebuilt WhatsApp Chat Popup Box */}
        {isChatOpen && (
          <div className="w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden animate-slideUp z-50 mb-2">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src="/logo.png" alt="Samskruthi Academy" className="w-10 h-10 rounded-full bg-white p-1" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm leading-snug">Samskruthi Academy Chat</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1 animate-pulse" />
                    Online • Typically replies instantly
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 rounded-full hover:bg-emerald-700/60 text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="p-4 bg-slate-50 space-y-3 max-h-[360px] overflow-y-auto text-xs">
              
              {/* Bot Greeting Bubble */}
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200/80 space-y-1 text-slate-800">
                <p className="font-bold text-emerald-700 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" /> Welcome to Samskruthi Academy!
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Hello! 👋 How can our admission team assist you today? Select a topic below to start chatting on WhatsApp:
                </p>
              </div>

              {/* Prebuilt Options Buttons */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Topics</p>
                {prebuiltOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setChatMessage(opt.text);
                      handleStartWhatsAppChat(opt.text);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 font-medium text-slate-700 hover:text-emerald-800 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span>{opt.label}</span>
                    <Send className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>

            </div>

            {/* Bottom Custom Message Input Bar */}
            <div className="p-3 bg-white border-t border-slate-100 space-y-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Or type your inquiry here..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
              />

              <button
                onClick={() => handleStartWhatsAppChat(chatMessage)}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>Continue Chat on WhatsApp</span>
              </button>
              <p className="text-[10px] text-center text-slate-400 font-semibold">
                Direct WhatsApp Hotline: +91 84314 75263
              </p>
            </div>

          </div>
        )}

        {/* Back To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-sky-600 transition-all active:scale-95 animate-fadeIn"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl pulse-whatsapp hover:bg-emerald-600 transition-all active:scale-95 group relative"
          aria-label="Chat on WhatsApp with Samskruthi Academy"
        >
          {isChatOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <WhatsappIcon className="w-7 h-7 fill-white" />
          )}


          {/* Hover Tooltip */}
          {!isChatOpen && (
            <span className="hidden group-hover:block absolute right-16 top-2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-md">
              Chat on WhatsApp (+91 84314 75263) 👋
            </span>
          )}
        </button>
      </div>
    </>
  );
}

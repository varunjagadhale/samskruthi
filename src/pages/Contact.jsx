import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import BranchCard from '../components/BranchCard';
import LeadForm from '../components/LeadForm';
import { siteConfig } from '../data/siteData';

export default function Contact({ onOpenDemoModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SEO
        title="Contact Us & Branch Campuses | Samskruthi Academy"
        description="Contact Samskruthi Academy Head Office or visit any of our 5 campuses in Mandya and Mysuru. Call +91 98765 43210 or book a free demo class online."
      />

      {/* Header Banner */}
      <section className="bg-soft-gradient py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-extrabold rounded-full uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Contact Samskruthi Academy
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            We are here to assist with admissions, branch visits, course counseling, and demo class bookings.
          </p>
        </div>
      </section>

      {/* Quick Contact Info Strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-sky-50 border border-sky-100 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Admission Hotline</p>
                <a href={`tel:${siteConfig.phone}`} className="text-lg font-extrabold text-slate-900 hover:text-sky-600 block">
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-slate-500">{siteConfig.altPhone}</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-100 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-900 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Email Admissions</p>
                <a href={`mailto:${siteConfig.email}`} className="text-base font-extrabold text-slate-900 hover:text-amber-600 block">
                  {siteConfig.email}
                </a>
                <p className="text-xs text-slate-500">{siteConfig.altEmail}</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">WhatsApp Inquiry</p>
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-extrabold text-emerald-700 hover:underline block"
                >
                  Chat with Desk
                </a>
                <p className="text-xs text-slate-500">Instant response during working hours</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Lead Form & Map Section */}
      <section className="py-16 bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <LeadForm />
            </div>

            {/* Headquarters Card & Interactive Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-sky-100 space-y-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full">
                  Central Office
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">Head Office Mandya</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {siteConfig.branches[0].address}
                </p>
                <p className="text-amber-700 text-xs font-semibold">
                  Landmark: {siteConfig.branches[0].landmark}
                </p>

                <div className="pt-2 flex flex-col space-y-2 text-xs">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span>{siteConfig.branches[0].timing}</span>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-72">
                <iframe
                  src={siteConfig.branches[0].mapEmbed}
                  title="Head Office Location Map"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* All 5 Branches Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900">Contact Specific Campuses</h2>
            <p className="text-slate-600 text-sm mt-1">Direct contact phone & Google Maps for all 5 branches in Mandya & Mysuru.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.branches.map((b) => (
              <BranchCard key={b.id} branch={b} onBookDemo={(bName) => onOpenDemoModal(bName)} />
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ Accordion) */}
      <section className="py-16 bg-soft-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full">Got Questions?</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between hover:bg-sky-50/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

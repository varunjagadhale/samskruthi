import React from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteData';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | Samskruthi Academy"
        description="Terms of service and campus admission guidelines for Samskruthi Academy."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 border-b border-slate-200 pb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 font-semibold">Last Updated: September 2026</p>

          <p>
            Welcome to <strong>{siteConfig.name}</strong>. By accessing our website or enrolling in our academic or preschool programs across Mandya and Mysuru campuses, you agree to comply with the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Demo Class & Admission Guidelines</h2>
          <p>
            FREE Demo Classes are offered subject to seat availability at the selected branch. Confirmation of demo slots will be provided by our academic counselor via phone or WhatsApp.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property</h2>
          <p>
            All study material, logos, question banks, brand marks, and website content are the exclusive property of Samskruthi Academy. Reproduction or unauthorized distribution is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Code of Conduct</h2>
          <p>
            In alignment with our core philosophy <em>"Education builds character"</em>, all enrolled students and visitors are expected to maintain respectful behavior towards peers, mentors, and staff at all branch premises.
          </p>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteData';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy & Cookie Policy | Samskruthi Academy"
        description="Privacy policy and data protection terms for Samskruthi Academy students and website visitors."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 border-b border-slate-200 pb-4">
            Privacy Policy & Cookie Notice
          </h1>
          <p className="text-xs text-slate-400 font-semibold">Last Updated: September 2026</p>

          <p>
            At <strong>{siteConfig.name}</strong> (tagline: <em>"{siteConfig.tagline}"</em>), accessible from{' '}
            <a href={siteConfig.seo.siteUrl} className="text-sky-600 font-bold">{siteConfig.seo.siteUrl}</a>, your privacy is of paramount importance to us. This Privacy Policy outlines the types of information collected and how it is protected across our 5 campuses in Mandya and Mysuru.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            When you register for a FREE Demo Class or submit an admission inquiry on our website, we collect personal information such as:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Student Name and Age/Class grade</li>
            <li>Parent / Guardian Name</li>
            <li>Contact Phone Number and Email Address</li>
            <li>Preferred Campus Branch (Mandya / Mysuru)</li>
            <li>Learning needs or specific inquiries</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
          <p>We use the collected information exclusively to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Schedule and confirm your requested Demo Class or counseling session</li>
            <li>Provide student performance reports and admission updates via Call/WhatsApp</li>
            <li>Improve our academic curriculum and website functionality</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Cookie Policy & Analytics</h2>
          <p>
            We use cookies to maintain your session preferences (such as cookie consent choices and pop-up dismissals) and to measure website performance. You can manage or disable non-essential cookies using our cookie banner or through your browser settings.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Data Security</h2>
          <p>
            We enforce strict administrative and technical measures to ensure your data is never sold, shared, or leased to third-party telemarketers.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contacting Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, you may contact our Head Office at{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-sky-600 font-bold">{siteConfig.email}</a> or call{' '}
            <span className="font-bold text-slate-900">{siteConfig.phone}</span>.
          </p>
        </div>
      </section>
    </>
  );
}

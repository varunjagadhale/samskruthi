import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Sparkles, User, Phone, Mail, GraduationCap, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function LeadForm({ defaultBranch = '', onSuccessClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    program: siteConfig.courses[0]?.title || '',
    branch: defaultBranch || siteConfig.branches[0]?.name || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.parentName.trim()) errs.parentName = 'Parent name is required';
    
    // Phone validation (Indian 10-digit number)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Phone number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Enter a valid 10-digit phone number';
    }

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }

    if (!formData.program) errs.program = 'Please select a program';
    if (!formData.branch) errs.branch = 'Please select a preferred branch';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate API / EmailJS / Google Sheets submission
      /* 
        // Backend / Integration Placeholder:
        // Example EmailJS connection:
        // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
        
        // Example Google Sheet API / Webhook:
        // await fetch('YOUR_GOOGLE_SHEETS_WEBHOOK_URL', {
        //   method: 'POST',
        //   body: JSON.stringify(formData)
        // });
      */
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Celebration Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      setIsSubmitting(false);
      alert('Something went wrong. Please call us directly at ' + siteConfig.phone);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-sky-100 text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Demo Class Booked Successfully!</h3>
          <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
            Thank you, <span className="font-semibold text-sky-700">{formData.parentName}</span>! Our academic counselor from{' '}
            <span className="font-semibold text-slate-900">{formData.branch}</span> will call you within 2 hours to confirm details for{' '}
            <span className="font-semibold text-sky-700">{formData.studentName}</span>.
          </p>
        </div>

        <div className="bg-sky-50/80 p-4 rounded-2xl text-xs text-sky-800 border border-sky-100 space-y-1 text-left max-w-sm mx-auto">
          <p><strong>Selected Program:</strong> {formData.program}</p>
          <p><strong>Contact Phone:</strong> {formData.phone}</p>
          <p><strong>Branch:</strong> {formData.branch}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={siteConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
          >
            Chat on WhatsApp Now
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                studentName: '',
                parentName: '',
                phone: '',
                email: '',
                program: siteConfig.courses[0]?.title || '',
                branch: defaultBranch || siteConfig.branches[0]?.name || '',
                message: ''
              });
              if (onSuccessClose) onSuccessClose();
            }}
            className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold transition-all"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100 space-y-5">
      <div className="border-b border-slate-100 pb-4">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 border border-amber-200/60 text-amber-700 rounded-full text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Limited Seats Available</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Book a FREE Demo Class</h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Experience our interactive teaching before enrolling. No obligation required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Student Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
            <User className="w-3.5 h-3.5 text-sky-600 mr-1" /> Student Name *
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="e.g. Rahul Gowda"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all ${
              errors.studentName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
            }`}
          />
          {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
        </div>

        {/* Parent Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
            <User className="w-3.5 h-3.5 text-sky-600 mr-1" /> Parent / Guardian Name *
          </label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="e.g. Suresh Gowda"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all ${
              errors.parentName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
            }`}
          />
          {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
            <Phone className="w-3.5 h-3.5 text-sky-600 mr-1" /> Mobile Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all ${
              errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
            <Mail className="w-3.5 h-3.5 text-sky-600 mr-1" /> Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-slate-50/50'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Program Selection */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600 mr-1" /> Select Program *
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
          >
            {siteConfig.courses.map(c => (
              <option key={c.id} value={c.title}>
                {c.title} ({c.grades})
              </option>
            ))}
          </select>
          {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
        </div>

        {/* Preferred Branch */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
            <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1" /> Preferred Branch *
          </label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
          >
            {siteConfig.branches.map(b => (
              <option key={b.id} value={b.name}>
                {b.city}: {b.name} ({b.landmark})
              </option>
            ))}
          </select>
          {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch}</p>}
        </div>
      </div>

      {/* Message / Note */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center">
          <MessageSquare className="w-3.5 h-3.5 text-sky-600 mr-1" /> Message / Specific Learning Needs (Optional)
        </label>
        <textarea
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific query, timing preference or subject area..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-2xl bg-orange-gradient text-white text-base font-extrabold shadow-glow-orange hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <span>Booking Your Seat...</span>
        ) : (
          <>
            <span>Confirm & Book Free Demo Class</span>
            <Send className="w-5 h-5 ml-1" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        🔒 We respect your privacy. Your information is 100% safe with Samskruthi Academy.
      </p>
    </form>
  );
}

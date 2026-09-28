import React from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

export default function LeadModal({ isOpen, onClose, defaultBranch = '' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl animate-scaleUp">
        <button
          onClick={onClose}
          aria-label="Close demo form"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <LeadForm defaultBranch={defaultBranch} onSuccessClose={onClose} />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, MapPin, FileText, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  const filteredCourses = searchQuery
    ? siteConfig.courses.filter(c =>
        c.title.toLowerCase().includes(searchQuery) ||
        c.category.toLowerCase().includes(searchQuery) ||
        c.description.toLowerCase().includes(searchQuery)
      )
    : [];

  const filteredBranches = searchQuery
    ? siteConfig.branches.filter(b =>
        b.name.toLowerCase().includes(searchQuery) ||
        b.city.toLowerCase().includes(searchQuery) ||
        b.address.toLowerCase().includes(searchQuery)
      )
    : [];

  const filteredBlogs = searchQuery
    ? siteConfig.blogPosts.filter(bp =>
        bp.title.toLowerCase().includes(searchQuery) ||
        bp.excerpt.toLowerCase().includes(searchQuery) ||
        bp.tags.some(t => t.toLowerCase().includes(searchQuery))
      )
    : [];

  const handleSelect = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-fadeIn">
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-sky-600 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search programs, branches, blog articles... (e.g. Mandya, NEET, Preschool)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-base font-medium"
            autoFocus
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="text-center py-8 text-slate-500">
              <p className="text-sm font-medium">Type anything to search across Samskruthi Academy</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['Mandya', 'Mysuru', 'Preschool', 'PUC Coaching', 'NEET Prep', 'SSLC'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-full text-xs font-semibold transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && filteredCourses.length === 0 && filteredBranches.length === 0 && filteredBlogs.length === 0 && (
            <div className="text-center py-10 text-slate-500">
              <p className="text-base font-medium">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching with terms like "Mandya", "Mysuru", "PUC", or "Preschool"</p>
            </div>
          )}

          {/* Courses Results */}
          {filteredCourses.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4 mr-1.5" /> Programs & Courses ({filteredCourses.length})
              </div>
              <div className="space-y-2">
                {filteredCourses.map(c => (
                  <div
                    key={c.id}
                    onClick={() => handleSelect('/programs')}
                    className="p-3 rounded-xl hover:bg-sky-50/80 cursor-pointer border border-transparent hover:border-sky-100 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-sky-600 text-sm">{c.title}</h4>
                      <p className="text-xs text-slate-500">{c.grades} • {c.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Branches Results */}
          {filteredBranches.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 mr-1.5" /> Academy Branches ({filteredBranches.length})
              </div>
              <div className="space-y-2">
                {filteredBranches.map(b => (
                  <div
                    key={b.id}
                    onClick={() => handleSelect('/branches')}
                    className="p-3 rounded-xl hover:bg-amber-50/80 cursor-pointer border border-transparent hover:border-amber-100 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-amber-600 text-sm">{b.name}</h4>
                      <p className="text-xs text-slate-500">{b.city} — {b.landmark}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blogs Results */}
          {filteredBlogs.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4 mr-1.5" /> Blog Articles ({filteredBlogs.length})
              </div>
              <div className="space-y-2">
                {filteredBlogs.map(bp => (
                  <div
                    key={bp.slug}
                    onClick={() => handleSelect(`/blog/${bp.slug}`)}
                    className="p-3 rounded-xl hover:bg-emerald-50/80 cursor-pointer border border-transparent hover:border-emerald-100 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 text-sm">{bp.title}</h4>
                      <p className="text-xs text-slate-500">{bp.category} • {bp.readTime}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 text-right text-xs text-slate-400 border-t border-slate-100">
          Press <kbd className="px-1.5 py-0.5 bg-white border rounded text-slate-600 font-mono">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
}

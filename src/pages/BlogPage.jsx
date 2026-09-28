import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteData';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Exam Guide', 'Parenting & Early Years', 'Career & Competitive'];

  const filteredPosts = siteConfig.blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Blog & Educational Insights | Samskruthi Academy"
        description="Read top study tips for SSLC & PUC exams, early childhood parenting insights, and NEET/KCET preparation guides from Samskruthi Academy educators."
      />

      {/* Header Banner */}
      <section className="bg-soft-gradient py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-extrabold rounded-full uppercase">
            Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Samskruthi Education Blog
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Expert articles, study strategies, exam advice, and parenting guides for Mandya & Mysuru families.
          </p>

          {/* Search Bar inside Blog Header */}
          <div className="max-w-md mx-auto relative pt-2">
            <input
              type="text"
              placeholder="Search articles, study tips, NEET, SSLC..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-white text-sm text-slate-900 shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-glow-blue'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-semibold text-slate-600">No articles matched your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-6 py-2 bg-sky-50 text-sky-700 font-bold text-xs rounded-full"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-sky-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-sky-600 text-white text-[11px] font-extrabold rounded-full shadow">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center text-xs text-slate-400 space-x-3">
                        <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" />{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">By {post.author}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-xs font-extrabold text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                      >
                        <span>Read Post</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}

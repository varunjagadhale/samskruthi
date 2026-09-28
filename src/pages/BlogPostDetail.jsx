import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';
import { FacebookIcon, TwitterIcon } from '../components/SocialIcons';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteData';


export default function BlogPostDetail({ onOpenDemoModal }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);


  const post = siteConfig.blogPosts.find(bp => bp.slug === slug);

  if (!post) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Blog Article Not Found</h2>
        <p className="text-slate-500 text-sm">The article you are looking for does not exist or has been moved.</p>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-2.5 bg-sky-600 text-white font-bold text-xs rounded-full"
        >
          Back to Blog List
        </button>
      </div>
    );
  }

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = siteConfig.blogPosts.filter(bp => bp.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        article={true}
      />

      {/* Article Header Banner */}
      <section className="bg-soft-gradient py-12 border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 mb-6 bg-white px-3 py-1.5 rounded-full border border-sky-100 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3 py-1 bg-sky-600 text-white text-xs font-extrabold rounded-full">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-xs text-slate-500 gap-4 pt-2 border-t border-slate-200/60">
              <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1 text-sky-600" />{post.author}</span>
              <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-sky-600" />{post.date}</span>
              <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-sky-600" />{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-h-[420px]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* Main Formatted Post Text */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p className="text-base sm:text-lg font-medium text-slate-800 bg-sky-50/60 p-6 rounded-2xl border-l-4 border-sky-500">
              {post.excerpt}
            </p>

            {/* Split content by lines / markdown headings */}
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-extrabold text-slate-900 pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('---')) {
                return <hr key={idx} className="my-6 border-slate-200" />;
              }
              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote key={idx} className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-amber-900 font-medium italic">
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              }
              return (
                <p key={idx} className="text-sm sm:text-base text-slate-700">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Social Share Buttons Bar */}
          <div className="pt-8 border-t border-slate-200 space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
              <Share2 className="w-4 h-4 mr-1 text-sky-600" /> Share this Guide
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1 hover:bg-emerald-600 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center space-x-1 hover:bg-blue-700 transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center space-x-1 hover:bg-sky-600 transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
                <span>X / Twitter</span>
              </a>


              <button
                onClick={handleCopyLink}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center space-x-1 hover:bg-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Embedded CTA Banner */}
          <div className="p-8 rounded-3xl bg-blue-gradient text-white space-y-4 shadow-xl">
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-extrabold rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Academic Demo</span>
            </div>
            <h3 className="text-2xl font-extrabold">Want Personal Guidance for SSLC / PUC / NEET?</h3>
            <p className="text-sky-100 text-xs sm:text-sm">
              Schedule a FREE trial session at any of Samskruthi Academy's 5 branches in Mandya & Mysuru.
            </p>
            <button
              onClick={() => onOpenDemoModal()}
              className="py-3 px-6 rounded-full bg-orange-gradient text-white text-xs sm:text-sm font-extrabold shadow-glow-orange hover:brightness-105 transition-all"
            >
              Book Free Demo Class
            </button>
          </div>

          {/* Related Articles Widget */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map(rp => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-100 transition-colors block group"
                  >
                    <span className="text-[10px] font-bold text-sky-600 uppercase">{rp.category}</span>
                    <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-sky-600 line-clamp-2 mt-1">{rp.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{rp.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

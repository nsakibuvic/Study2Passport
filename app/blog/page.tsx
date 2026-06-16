"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/blogs';

const categories = ['All', 'PhD', "Master's", 'Undergraduate', 'Visa', 'General'] as const;

type CategoryFilter = typeof categories[number];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let result = [...blogPosts];

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(post =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q)
      );
    }

    // Sort newest first
    return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, searchQuery]);

  const getBadgeClass = (category: BlogPost['category']) => {
    switch (category) {
      case 'PhD': return 'badge-phd';
      case "Master's": return 'badge-masters';
      case 'Undergraduate': return 'badge-undergrad';
      case 'Visa': return 'badge-visa';
      default: return 'badge-general';
    }
  };

  return (
    <div className="bg-slate-50">
      {/* Blog Header */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="text-orange-600 uppercase tracking-[2px] text-sm font-semibold mb-3">INSIGHTS &amp; GUIDANCE</div>
            <h1 className="text-5xl font-semibold tracking-[-1.2px]">Funded Opportunities &amp; Study Abroad Insights</h1>
            <p className="mt-4 text-xl text-slate-600">Practical advice, real success stories, and actionable strategies for Master's, PhD, and undergraduate applicants.</p>
          </div>

          {/* Search + Filters */}
          <div className="mt-9 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeCategory === cat 
                      ? 'bg-orange-600 text-white border-orange-600' 
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-10 py-2.5 text-sm"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-4 top-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-600">No articles found for your search. Try broadening your filters.</p>
            <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="mt-4 text-sm underline text-orange-600">Clear filters</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="card card-hover group flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`badge ${getBadgeClass(post.category)}`}>{post.category}</span>
                  <span className="text-xs text-slate-500 font-medium">{post.readTime}</span>
                </div>

                <h3 className="font-semibold text-xl tracking-tight leading-snug group-hover:text-orange-600 transition-colors flex-1">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 line-clamp-3 flex-1">{post.excerpt}</p>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs text-slate-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="font-medium text-orange-600 group-hover:underline">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white border border-slate-200 rounded-3xl p-8 md:p-10">
          <p className="font-medium text-lg">Ready to take the next step in your journey?</p>
          <p className="text-slate-600 mt-1">Book a free consultation with our team today.</p>
          <div className="mt-5">
            <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">Or message us on <a href="https://www.facebook.com/study2passport/" target="_blank" rel="noopener noreferrer" className="underline">Facebook</a> where 15,000+ students stay updated.</div>
        </div>
      </section>
    </div>
  );
}

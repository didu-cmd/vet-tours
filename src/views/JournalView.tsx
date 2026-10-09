import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, Tag, Share2, Compass } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/journalData';

interface JournalViewProps {
  selectedArticleId?: string;
  onSelectArticle: (articleId: string) => void;
  onOpenBooking: () => void;
}

export const JournalView: React.FC<JournalViewProps> = ({
  selectedArticleId,
  onSelectArticle,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(selectedArticleId || null);

  const categories = ['all', 'Destination Guide', 'Cultural Insights', 'Trekking & Wildlife', 'Adventure & Trekking'];

  const filteredArticles = JOURNAL_ARTICLES.filter((art) => {
    return selectedCategory === 'all' || art.category === selectedCategory;
  });

  const activeArticle = JOURNAL_ARTICLES.find((a) => a.id === currentArticleId);

  // If an article is active, show the Reader view
  if (activeArticle) {
    const relatedArticles = JOURNAL_ARTICLES.filter((a) => a.id !== activeArticle.id).slice(0, 2);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Back Link */}
        <button
          onClick={() => setCurrentArticleId(null)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#173D32] hover:text-[#D9A85B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Travel Journal</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#D9A85B] font-semibold uppercase tracking-wider">
            <span>{activeArticle.category}</span>
            <span aria-hidden="true">·</span>
            <span>{activeArticle.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-[#173D32] font-normal leading-tight [text-wrap:balance]">
            {activeArticle.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
            <div>
              <strong className="block text-slate-800">{activeArticle.author.name}</strong>
              <span>{activeArticle.author.role}</span>
            </div>
            <div className="text-right">
              <span>{activeArticle.date}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-slate-200">
          <img
            src={activeArticle.image}
            alt={activeArticle.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-light">
          <p className="text-xl sm:text-2xl font-serif text-[#173D32] leading-snug font-normal italic border-l-2 border-[#D9A85B] pl-6 my-6">
            "{activeArticle.excerpt}"
          </p>

          {activeArticle.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <span className="font-semibold text-[#173D32]">Tagged:</span>
          {activeArticle.tags.map((tag, idx) => (
            <span key={idx} className="text-slate-600">
              #{tag}{idx < activeArticle.tags.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>

        {/* Call to action inside article */}
        <div className="bg-[#173D32] text-white p-8 rounded-3xl border border-[#D9A85B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-serif text-2xl text-white">Experience This Firsthand</h4>
            <p className="text-white/70 text-xs sm:text-sm">
              Our travel specialists in Addis Ababa can design a private journey around these very destinations.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="py-3 px-6 bg-[#D9A85B] hover:bg-[#c99547] text-[#173D32] font-semibold text-xs rounded-xl transition-all whitespace-nowrap shrink-0"
          >
            Inquire About Travel
          </button>
        </div>

        {/* Related Articles */}
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <h3 className="font-serif text-2xl text-[#173D32]">More from Our Journal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((relArt) => (
              <div
                key={relArt.id}
                onClick={() => {
                  setCurrentArticleId(relArt.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-[11px] font-semibold text-[#D9A85B] uppercase block mb-1">
                  {relArt.category} · {relArt.readTime}
                </span>
                <h4 className="font-serif text-lg text-[#173D32] font-semibold group-hover:text-[#D9A85B] transition-colors line-clamp-2">
                  {relArt.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-2">
                  {relArt.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  // Articles List View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
          Field Notes & Cultural Guides
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#173D32] font-normal leading-tight">
          The Travel Journal
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          In-depth stories, packing advice, cultural etiquette, and photographic essays from our Addis Ababa guides and expedition leaders.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#173D32] text-white font-semibold shadow-sm'
                : 'text-slate-600 hover:text-[#173D32] hover:bg-white'
            }`}
          >
            {cat === 'all' ? 'All Stories' : cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => {
              setCurrentArticleId(article.id);
              onSelectArticle(article.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                  <span className="text-[#173D32] font-semibold">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-serif text-[#173D32] font-semibold mb-2 group-hover:text-[#D9A85B] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{article.date}</span>
              <span className="text-[#173D32] font-semibold group-hover:text-[#D9A85B] flex items-center gap-1">
                Read Story
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

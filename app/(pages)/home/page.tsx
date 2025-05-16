import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ArticleCard from '@/components/ArticleCard';
import FeaturedArticle from '@/components/FeaturedArticle';
import MemeGenerator from '@/components/MemeGenerator';
import FilterSection from '@/components/FilterSection';
import { Button } from '@/components/ui/button';
import { Search, Rocket } from 'lucide-react';
import { FEATURED_ARTICLE, ARTICLES, TRENDING_TOPICS, BRAINROT_WORDS } from '@/app/data/articles';

type FilterType = 'trend' | 'ohio' | 'fresh';

export default async function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <FloatingElements />
      <MemeGenerator />
      <Header />
      
      <main className="flex-grow">
        {/* Featured Article */}
        <section className="container mx-auto px-4 pt-6 pb-12">
          <FeaturedArticle {...FEATURED_ARTICLE} />
        </section>
        
        {/* Main Content */}
        <section className="container mx-auto px-4 pb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Article Feed */}
            <div className="lg:w-3/4">
              {/* Filter Buttons */}
              <FilterSection />
              
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {ARTICLES.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
              
              {/* Load More */}
              <div className="mt-8 text-center">
                <Button
                  className="skibidi-button"
                >
                  Load More Yaps 🔄
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for yaps..."
                    className="w-full px-4 py-2 pl-10 border-2 border-brainrot-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brainrot-pink"
                  />
                  <Search className="absolute left-3 top-2.5 text-brainrot-blue" size={18} />
                </div>
              </div>
              
              {/* Trending Topics */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <h3 className="text-lg font-comic text-brainrot-pink mb-4 flex items-center">
                  <Rocket size={18} className="mr-2" />
                  Trending Yaps
                </h3>
                <ul className="space-y-3">
                  {TRENDING_TOPICS.map((topic, index) => (
                    <li key={index}>
                      <Link 
                        href="#" 
                        className="block p-2 hover:bg-gray-100 rounded-lg transition-colors font-comic text-sm"
                      >
                        #{index + 1} {topic}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Word of the Day */}
              <div className="bg-white rounded-lg shadow-md p-4 border-2 border-brainrot-neon">
                <h3 className="text-lg font-comic text-brainrot-blue mb-2">
                  Brainrot Word of the Day 📖
                </h3>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-brainrot-purple">{BRAINROT_WORDS.word}</span>
                    <span className="text-xs bg-brainrot-neon px-2 py-1 rounded text-black">{BRAINROT_WORDS.type}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{BRAINROT_WORDS.definition}</p>
                  <p className="text-xs italic text-gray-500">"{BRAINROT_WORDS.example}"</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

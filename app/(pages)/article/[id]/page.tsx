import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { Avatar } from '@/components/ui/avatar';
import { ArrowLeft, Heart, MessageSquare, Share2, Eye, Calendar, Star } from 'lucide-react';
import ArticleActions from '@/components/ArticleActions';
import CommentSection from '@/components/CommentSection';

// Sample article data - would be fetched from API
const ARTICLE = {
  id: 'a1',
  title: 'WHY SKIBIDI TOILET IS PEAK OHIO VIBES 🫡💀',
  content: `
    <p class="lead"><span class="text-brainrot-pink font-bold">Listen up</span>, fellow rizzlers! 🔥 Today we're diving DEEP into why Skibidi Toilet represents the <span class="text-brainrot-blue font-bold">ultimate Ohio energy</span> fr fr no cap.</p>

    <p>First things first, if you've been living under a <span class="text-brainrot-neon font-bold">rock</span> (or inside the backrooms), Skibidi Toilet isn't just a meme – it's a whole <span class="text-brainrot-purple font-bold">VIBE</span>. It's giving extreme Ohio energy, and here's why:</p>

    <h2>THE SKIBIDI LORE IS LITERALLY OHIO 💀</h2>

    <p>Think about it... Ohio has always been the <span class="text-brainrot-pink font-bold">liminal space</span> of America. It's simultaneously everywhere and nowhere, just like the Skibidi universe. Coincidence? I think NOT! 🤯</p>

    <div class="image-container">
      <img src="https://i.kym-cdn.com/entries/icons/original/000/042/690/Screen_Shot_2022-12-06_at_10.32.17_AM.png" alt="Skibidi Toilet" class="rounded-lg w-full"/>
      <p class="caption">Actual footage of Ohio (real, no cap)</p>
    </div>

    <p>When you're walking through Ohio at 3AM and suddenly hear that iconic "<span class="text-brainrot-neon font-bold">skibidi bop mm dada</span>" – that's not just a sound, that's a <span class="text-brainrot-blue font-bold">spiritual experience</span>. 👁️👄👁️</p>

    <h2>THE RIZZ CONNECTION 💯</h2>

    <p>Let's talk about the <span class="text-brainrot-purple font-bold">RIZZ FACTOR</span>. Skibidi Toilet has more rizz in one flush than most people get in their entire lives. It's not even close, fr fr.</p>

    <ul class="list-disc pl-5 space-y-2">
      <li>Unmatched confidence (sigma toilet energy)</li>
      <li>Distinctive style (ain't nobody rocking that toilet head like him)</li>
      <li>Commands attention (everyone stops to watch)</li>
      <li>Creates trends (the skibidi dance swept TikTok faster than Ohio memes)</li>
    </ul>

    <p>If that's not <span class="text-brainrot-neon font-bold">peak Ohio rizz</span>, then I don't know what is! 🫡</p>

    <h2>THE BACKROOMS CONNECTION 🏚️</h2>

    <p>We all know Ohio is basically the backrooms of America. And where do you find Skibidi Toilets? IN THE BACKROOMS. Wake up, people! 😤</p>

    <div class="quote">
      <p>"Skibidi Toilet isn't just a meme, it's a cultural reset, it's the oxygen you breathe, it's a lifestyle, a reason to breathe, an escape from this cruel world filled with thieves."</p>
      <cite>— RizzMaster3000, Ohio's top yapologist</cite>
    </div>

    <p>In conclusion, if you're not getting <span class="text-brainrot-pink font-bold">skibidi with it</span>, you're missing out on the most Ohio experience possible. And that's on <span class="text-brainrot-blue font-bold">GYATT</span>! 💀🔥</p>

    <p class="callout">Don't forget to drop your own skibidi theories in the comments below! Are YOU from Ohio? Have YOU seen a Skibidi Toilet? The people need to know! 🚽</p>
  `,
  author: 'OhioMaster420',
  authorImg: 'https://i.pravatar.cc/150?img=57',
  publishDate: '2025-05-10',
  rizzScore: 255,
  comments: 42,
  views: 789,
  isLiked: false,
};

const COMMENTS = [
  {
    id: 'c1',
    author: 'RizzKidd',
    authorImg: 'https://i.pravatar.cc/150?img=12',
    content: 'This yap is FIRE fr fr 🔥 I saw a skibidi toilet in my backyard yesterday no cap',
    date: '2025-05-11',
    likes: 24,
  },
  {
    id: 'c2',
    author: 'SkibidiRizzler69',
    authorImg: 'https://i.pravatar.cc/150?img=33',
    content: 'Ohio isn\'t real, it can\'t hurt you 💀 but skibidi toilets? those are EVERYWHERE bruh',
    date: '2025-05-12',
    likes: 17,
  },
  {
    id: 'c3',
    author: 'YappyQueen',
    authorImg: 'https://i.pravatar.cc/150?img=44',
    content: 'The way you connected the backrooms to Ohio is SENDING ME 😭😭 pure GYATT energy in this article',
    date: '2025-05-13',
    likes: 31,
  },
];

const RELATED_ARTICLES = [
  {
    id: 'r1',
    title: 'Top 10 Skibidi Toilet Lore Theories 🫡',
    thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg',
  },
  {
    id: 'r2',
    title: 'Ohio vs Backrooms: Which Has More GYATT? 💀',
    thumbnail: 'https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png',
  },
  {
    id: 'r3',
    title: 'How to Speak Fluent Brainrot in 2025 🧠',
    thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg',
  },
];

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/home" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-brainrot-blue transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="font-comic">Back to Yaps</span>
            </Link>
          </div>
          
          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Article Header */}
            <div className="p-6 md:p-8 border-b border-gray-200">
              <h1 className="text-3xl md:text-4xl font-pixel mb-4">{ARTICLE.title}</h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <img src={ARTICLE.authorImg} alt={ARTICLE.author} />
                  </Avatar>
                  <div>
                    <p className="font-bold">{ARTICLE.author}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{ARTICLE.publishDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="rizz-progress w-32 md:w-64 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-chaos animate-shimmer bg-[length:200%_100%] flex items-center justify-center text-xs text-white font-bold"
                    style={{ width: '75%' }}
                  >
                    RIZZ: 75%
                  </div>
                </div>
              </div>
            </div>
            
            {/* Article Body */}
            <div className="p-6 md:p-8">
              <div 
                className="prose max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: ARTICLE.content }}
              ></div>
              
              {/* Article Actions */}
              <ArticleActions article={ARTICLE} />
            </div>
          </div>
          
          {/* Comments Section */}
          <CommentSection comments={COMMENTS} />
        </div>
      </main>
      
      {/* Related Articles */}
      <section className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-comic text-white mb-6 flex items-center">
            <Star className="mr-2 text-brainrot-neon" />
            More Brainrot For You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article) => (
              <Link 
                key={article.id} 
                href={`/article/${article.id}`}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-brainrot-neon transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-comic text-white group-hover:text-brainrot-neon transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
